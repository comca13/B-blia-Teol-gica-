import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { 
  User, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect, 
  getRedirectResult, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import { 
  syncUserWithFirestore, 
  pushCurrentStateToFirestore, 
  subscribeToUserCloudData, 
  SyncState, 
  CloudUserData,
  CLOUD_SYNC_UPDATED_EVENT
} from '../services/userDataSync';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  syncState: SyncState;
  lastSyncedAt: string | null;
  errorMessage: string | null;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
  forceSync: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [syncState, setSyncState] = useState<SyncState>('idle');
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Monitor Auth State and handle automatic cloud merge
  useEffect(() => {
    // Check if returning from a redirect flow
    getRedirectResult(auth)
      .then(async (result) => {
        if (result?.user) {
          setSyncState('syncing');
          try {
            const data = await syncUserWithFirestore(result.user);
            setLastSyncedAt(data.lastSyncedAt);
            setSyncState('synced');
          } catch (err: any) {
            console.error('Erro na sincronização pós-redirect:', err);
            setSyncState('error');
          }
        }
      })
      .catch((err) => {
        console.warn('Erro ao processar resultado de redirect:', err);
      });

    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        setSyncState('syncing');
        try {
          const syncedData = await syncUserWithFirestore(currentUser);
          setLastSyncedAt(syncedData.lastSyncedAt);
          setSyncState('synced');
        } catch (err: any) {
          console.error('Erro ao sincronizar com Firestore:', err);
          setSyncState('error');
          setErrorMessage(err?.message || 'Falha ao sincronizar dados na nuvem');
        }
      } else {
        setSyncState('idle');
      }
    });

    return () => unsubscribeAuth();
  }, []);

  // Listen to remote changes in real-time when user is logged in
  useEffect(() => {
    if (!user) return;

    const unsubscribeCloud = subscribeToUserCloudData(user.uid, (cloudData: CloudUserData) => {
      setLastSyncedAt(cloudData.lastSyncedAt);
      setSyncState('synced');
      // Dispatch event for UI to update without reloading
      window.dispatchEvent(new CustomEvent(CLOUD_SYNC_UPDATED_EVENT, { detail: cloudData }));
    });

    return () => unsubscribeCloud();
  }, [user]);

  // Sign In with Google Provider
  const signInWithGoogle = useCallback(async () => {
    setErrorMessage(null);
    setSyncState('syncing');
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) {
        const synced = await syncUserWithFirestore(result.user);
        setLastSyncedAt(synced.lastSyncedAt);
        setSyncState('synced');
      }
    } catch (err: any) {
      console.warn('Falha no popup de login Google, tentando método de fallback:', err);
      // If popup blocked by browser or mobile iframe, attempt redirect
      if (err.code === 'auth/popup-blocked' || err.code === 'auth/cancelled-popup-request') {
        try {
          await signInWithRedirect(auth, provider);
          return;
        } catch (redirErr: any) {
          console.error('Erro no redirect fallback:', redirErr);
          setErrorMessage('Não foi possível conectar a conta Google. Verifique se popups estão habilitados.');
          setSyncState('error');
        }
      } else if (err.code !== 'auth/popup-closed-by-user') {
        setErrorMessage(err.message || 'Erro ao realizar login com o Google.');
        setSyncState('error');
      } else {
        setSyncState('idle');
      }
    }
  }, []);

  // Sign Out
  const signOutUser = useCallback(async () => {
    try {
      await signOut(auth);
      setUser(null);
      setSyncState('idle');
      setLastSyncedAt(null);
    } catch (err: any) {
      console.error('Erro ao sair da conta:', err);
      setErrorMessage(err.message || 'Erro ao desconectar');
    }
  }, []);

  // Force manual push of all current local data to cloud
  const forceSync = useCallback(async () => {
    if (!user) return;
    setSyncState('syncing');
    try {
      await pushCurrentStateToFirestore(user);
      setLastSyncedAt(new Date().toISOString());
      setSyncState('synced');
    } catch (err: any) {
      console.error('Erro ao forçar sincronização:', err);
      setSyncState('error');
      setErrorMessage('Erro ao sincronizar com a nuvem.');
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        syncState,
        lastSyncedAt,
        errorMessage,
        signInWithGoogle,
        signOutUser,
        forceSync,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
};

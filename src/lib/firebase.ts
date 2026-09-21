import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { 
  initializeFirestore, 
  getFirestore, 
  Firestore,
  persistentLocalCache, 
  persistentMultipleTabManager 
} from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App as a safe singleton
export const app: FirebaseApp = getApps().length === 0 
  ? initializeApp(firebaseConfig) 
  : getApp();

/**
 * Modern Firebase v9/v10+ Offline-First Firestore Initialization:
 * Utiliza IndexedDB com gerenciamento multi-abas (persistentMultipleTabManager)
 * para permitir leitura e escrita instantâneas mesmo sem conexão de internet (PWA Offline),
 * sincronizando os dados pendentes em background assim que a rede for restabelecida.
 */
let firestoreInstance: Firestore;

try {
  firestoreInstance = initializeFirestore(app, {
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
    })
  }, firebaseConfig.firestoreDatabaseId);
} catch (error) {
  // Se initializeFirestore já tiver sido chamado nesta instância (ex: HMR ou reloads rápidos), obtém a instância ativa
  console.warn('Firestore já inicializado ou fallback ativado:', error);
  firestoreInstance = getFirestore(app, firebaseConfig.firestoreDatabaseId);
}

export const db: Firestore = firestoreInstance;
export const auth: Auth = getAuth(app);

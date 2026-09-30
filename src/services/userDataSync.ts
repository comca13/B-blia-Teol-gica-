import { doc, getDoc, setDoc, onSnapshot, Unsubscribe, serverTimestamp } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { db } from '../lib/firebase';
import { UserProgress, ReaderSettings, ReminderSettings, UserTheologicalNote } from '../types';
import { 
  loadUserProgress, 
  saveUserProgress, 
  loadReaderSettings, 
  saveReaderSettings, 
  loadReminderSettings, 
  saveReminderSettings, 
  loadUserName, 
  saveUserName,
  loadTheologicalNotes,
  saveTheologicalNotes
} from '../utils/storage';
import { loadFavorites, saveFavorites, SavedFavoriteItem } from '../utils/favoritesStorage';

export interface CloudUserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  lastSyncedAt: string;
  progress: UserProgress;
  settings: ReaderSettings;
  reminders: ReminderSettings;
  userName: string;
  theologicalNotes: UserTheologicalNote[];
  favorites: SavedFavoriteItem[];
}

export type SyncState = 'idle' | 'syncing' | 'synced' | 'error';

// Custom event to inform views that data was updated from cloud
export const CLOUD_SYNC_UPDATED_EVENT = 'cronos-cloud-sync-updated';

/**
 * Merge local progress with cloud progress to ensure no data loss
 */
function mergeProgress(local: UserProgress, cloud?: Partial<UserProgress>): UserProgress {
  if (!cloud) return local;

  const completedSet = new Set<number>([
    ...(Array.isArray(local.completedDays) ? local.completedDays : []),
    ...(Array.isArray(cloud.completedDays) ? cloud.completedDays : []),
  ]);

  const bookmarkSet = new Set<number>([
    ...(Array.isArray(local.bookmarks) ? local.bookmarks : []),
    ...(Array.isArray(cloud.bookmarks) ? cloud.bookmarks : []),
  ]);

  const mergedNotes: Record<number, string> = {
    ...(cloud.notes || {}),
    ...(local.notes || {}),
  };

  return {
    planType: local.planType || cloud.planType || 'chronological',
    completedDays: Array.from(completedSet).sort((a, b) => a - b),
    streak: Math.max(local.streak || 0, cloud.streak || 0, 1),
    lastReadDate: local.lastReadDate || cloud.lastReadDate || new Date().toISOString().split('T')[0],
    startDate: local.startDate || cloud.startDate || new Date().toISOString().split('T')[0],
    bookmarks: Array.from(bookmarkSet).sort((a, b) => a - b),
    notes: mergedNotes,
  };
}

/**
 * Merge theological notes by ID, picking the most recently updated if conflict occurs
 */
function mergeTheologicalNotes(
  local: UserTheologicalNote[], 
  cloud?: UserTheologicalNote[]
): UserTheologicalNote[] {
  if (!cloud || cloud.length === 0) return local;
  if (!local || local.length === 0) return cloud;

  const notesMap = new Map<string, UserTheologicalNote>();

  for (const n of local) {
    notesMap.set(n.id, n);
  }

  for (const cn of cloud) {
    if (!notesMap.has(cn.id)) {
      notesMap.set(cn.id, cn);
    } else {
      const existing = notesMap.get(cn.id)!;
      const cnUpdated = cn.updatedAt || 0;
      const exUpdated = existing.updatedAt || 0;
      if (cnUpdated >= exUpdated) {
        notesMap.set(cn.id, cn);
      }
    }
  }

  return Array.from(notesMap.values());
}

/**
 * Merge saved favorites (councils, manuscripts, theologians)
 */
function mergeFavorites(
  local: SavedFavoriteItem[],
  cloud?: SavedFavoriteItem[]
): SavedFavoriteItem[] {
  if (!cloud || cloud.length === 0) return local;
  if (!local || local.length === 0) return cloud;

  const favMap = new Map<string, SavedFavoriteItem>();
  for (const f of local) favMap.set(f.id, f);
  for (const cf of cloud) {
    if (!favMap.has(cf.id)) {
      favMap.set(cf.id, cf);
    }
  }

  return Array.from(favMap.values());
}

/**
 * Synchronize local user storage with Firebase Firestore on login or profile load
 */
export async function syncUserWithFirestore(user: User): Promise<CloudUserData> {
  const userDocRef = doc(db, 'users', user.uid);
  
  // Read local data
  const localProgress = loadUserProgress();
  const localSettings = loadReaderSettings();
  const localReminders = loadReminderSettings();
  const localUserName = loadUserName() || user.displayName || 'Leitor da Palavra';
  const localTheologicalNotes = loadTheologicalNotes();
  const localFavorites = loadFavorites();

  const docSnap = await getDoc(userDocRef);

  let mergedData: CloudUserData;

  if (docSnap.exists()) {
    const cloudRaw = docSnap.data() as Partial<CloudUserData>;

    const finalProgress = mergeProgress(localProgress, cloudRaw.progress);
    const finalTheologicalNotes = mergeTheologicalNotes(localTheologicalNotes, cloudRaw.theologicalNotes);
    const finalFavorites = mergeFavorites(localFavorites, cloudRaw.favorites);
    const finalSettings: ReaderSettings = {
      ...localSettings,
      ...(cloudRaw.settings || {}),
      visiblePanels: {
        ...localSettings.visiblePanels,
        ...(cloudRaw.settings?.visiblePanels || {})
      }
    };
    const finalReminders: ReminderSettings = {
      ...localReminders,
      ...(cloudRaw.reminders || {})
    };
    const finalName = user.displayName || cloudRaw.displayName || localUserName || 'Leitor da Palavra';

    mergedData = {
      uid: user.uid,
      email: user.email,
      displayName: finalName,
      photoURL: user.photoURL || cloudRaw.photoURL || null,
      lastSyncedAt: new Date().toISOString(),
      progress: finalProgress,
      settings: finalSettings,
      reminders: finalReminders,
      userName: finalName,
      theologicalNotes: finalTheologicalNotes,
      favorites: finalFavorites,
    };
  } else {
    // New cloud user: upload local data into Firestore
    mergedData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || localUserName || 'Leitor da Palavra',
      photoURL: user.photoURL || null,
      lastSyncedAt: new Date().toISOString(),
      progress: localProgress,
      settings: localSettings,
      reminders: localReminders,
      userName: user.displayName || localUserName || 'Leitor da Palavra',
      theologicalNotes: localTheologicalNotes,
      favorites: localFavorites,
    };
  }

  // Save merged state to localStorage
  saveUserProgress(mergedData.progress);
  saveReaderSettings(mergedData.settings);
  saveReminderSettings(mergedData.reminders);
  saveUserName(mergedData.userName);
  saveTheologicalNotes(mergedData.theologicalNotes);
  saveFavorites(mergedData.favorites);

  // Write merged state back to Firestore
  await setDoc(userDocRef, {
    ...mergedData,
    serverUpdatedAt: serverTimestamp(),
  }, { merge: true });

  // Notify active components
  window.dispatchEvent(new CustomEvent(CLOUD_SYNC_UPDATED_EVENT, { detail: mergedData }));

  return mergedData;
}

/**
 * Push current local state to Firestore for an authenticated user
 */
export async function pushCurrentStateToFirestore(user: User): Promise<void> {
  try {
    const userDocRef = doc(db, 'users', user.uid);
    const progress = loadUserProgress();
    const settings = loadReaderSettings();
    const reminders = loadReminderSettings();
    const userName = loadUserName() || user.displayName || 'Leitor da Palavra';
    const theologicalNotes = loadTheologicalNotes();
    const favorites = loadFavorites();

    const payload: Partial<CloudUserData> = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || userName,
      photoURL: user.photoURL,
      lastSyncedAt: new Date().toISOString(),
      progress,
      settings,
      reminders,
      userName,
      theologicalNotes,
      favorites,
    };

    await setDoc(userDocRef, {
      ...payload,
      serverUpdatedAt: serverTimestamp(),
    }, { merge: true });
  } catch (error) {
    console.error('Erro ao sincronizar dados na nuvem:', error);
    throw error;
  }
}

/**
 * Subscribe to cloud updates in real-time (multi-device live sync)
 */
export function subscribeToUserCloudData(
  uid: string, 
  onData: (data: CloudUserData) => void
): Unsubscribe {
  const userDocRef = doc(db, 'users', uid);
  return onSnapshot(userDocRef, (snap) => {
    if (snap.exists()) {
      const data = snap.data() as CloudUserData;
      onData(data);
    }
  }, (err) => {
    console.warn('Erro ao escutar dados da nuvem em tempo real:', err);
  });
}

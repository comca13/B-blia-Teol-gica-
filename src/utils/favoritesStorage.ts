export type FavoriteEntityType = 
  | 'theologian-reformation' 
  | 'theologian-catholic' 
  | 'theologian-orthodox' 
  | 'council' 
  | 'glossary' 
  | 'manuscript' 
  | 'comparison'
  | 'church-history-event';

export interface SavedFavoriteItem {
  id: string;
  entityType: FavoriteEntityType;
  title: string;
  subtitle?: string;
  categoryOrTradition?: string;
  quote?: string;
  savedAt: string;
}

const FAVORITES_STORAGE_KEY = 'cronos_canon_theological_favorites_v1';
export const FAVORITES_UPDATED_EVENT = 'theological-favorites-updated';

export function loadFavorites(): SavedFavoriteItem[] {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as SavedFavoriteItem[];
  } catch (err) {
    console.error('Erro ao ler favoritos do localStorage:', err);
    return [];
  }
}

export function saveFavorites(items: SavedFavoriteItem[]): void {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(FAVORITES_UPDATED_EVENT, { detail: items }));
  } catch (err) {
    console.error('Erro ao salvar favoritos no localStorage:', err);
  }
}

export function isFavorite(id: string): boolean {
  const current = loadFavorites();
  return current.some(item => item.id === id);
}

export function toggleFavorite(item: Omit<SavedFavoriteItem, 'savedAt'>): boolean {
  const current = loadFavorites();
  const exists = current.some(i => i.id === item.id);
  
  let updated: SavedFavoriteItem[];
  if (exists) {
    updated = current.filter(i => i.id !== item.id);
  } else {
    updated = [
      {
        ...item,
        savedAt: new Date().toISOString()
      },
      ...current
    ];
  }

  saveFavorites(updated);
  return !exists;
}

export function removeFavorite(id: string): void {
  const current = loadFavorites();
  const updated = current.filter(i => i.id !== id);
  saveFavorites(updated);
}

import { UserProgress, ReaderSettings, ReminderSettings, PlanType } from '../types';

const STORAGE_KEYS = {
  PROGRESS: 'cronos_canon_progress',
  SETTINGS: 'cronos_canon_settings',
  REMINDERS: 'cronos_canon_reminders',
  USER_NAME: 'cronos_canon_user_name',
};

const DEFAULT_PROGRESS: UserProgress = {
  planType: 'chronological',
  completedDays: [1], // starts with day 1 ready or sample completed
  streak: 1,
  lastReadDate: new Date().toISOString().split('T')[0],
  startDate: new Date().toISOString().split('T')[0],
  bookmarks: [1],
  notes: {
    1: 'Dia 1: A Criação de Deus me lembra que Ele é o autor da ordem e do propósito na minha vida.'
  }
};

const DEFAULT_SETTINGS: ReaderSettings = {
  theme: 'light',
  fontSize: 18,
  lineHeight: 1.7,
  fontFamily: 'lora',
  audioSpeed: 1.0,
};

const DEFAULT_REMINDERS: ReminderSettings = {
  enabled: false,
  time: '07:00',
  notifyBrowser: false,
  phoneWhatsapp: ''
};

export const loadUserProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      completedDays: Array.isArray(parsed.completedDays) ? parsed.completedDays : [],
      bookmarks: Array.isArray(parsed.bookmarks) ? parsed.bookmarks : [],
      notes: typeof parsed.notes === 'object' && parsed.notes !== null ? parsed.notes : {}
    };
  } catch (err) {
    console.error('Error loading progress:', err);
    return DEFAULT_PROGRESS;
  }
};

export const saveUserProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (err) {
    console.error('Error saving progress:', err);
  }
};

export const loadReaderSettings = (): ReaderSettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch (err) {
    return DEFAULT_SETTINGS;
  }
};

export const saveReaderSettings = (settings: ReaderSettings): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (err) {
    console.error('Error saving settings:', err);
  }
};

export const loadReminderSettings = (): ReminderSettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.REMINDERS);
    if (!raw) return DEFAULT_REMINDERS;
    return { ...DEFAULT_REMINDERS, ...JSON.parse(raw) };
  } catch (err) {
    return DEFAULT_REMINDERS;
  }
};

export const saveReminderSettings = (reminders: ReminderSettings): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.REMINDERS, JSON.stringify(reminders));
  } catch (err) {
    console.error('Error saving reminders:', err);
  }
};

export const loadUserName = (): string => {
  return localStorage.getItem(STORAGE_KEYS.USER_NAME) || 'Leitor da Palavra';
};

export const saveUserName = (name: string): void => {
  localStorage.setItem(STORAGE_KEYS.USER_NAME, name);
};

export type PlanType = 'chronological' | 'canonical';

export type ReadingTheme = 'light' | 'sepia' | 'dark';

export type FontFamily = 'lora' | 'sans' | 'cinzel';

export interface BiblePassage {
  book: string;
  reference: string;
  testament: 'AT' | 'NT';
}

export type EmpireCode = 
  | 'egypt' 
  | 'assyria' 
  | 'babylon' 
  | 'persia' 
  | 'greece' 
  | 'rome' 
  | 'canaan'
  | 'mesopotamia';

export interface WorldHistoryContext {
  dominantEmpire: string; // ex: "Império Neoassírio", "Império Neobabilônico", "Império Romano"
  empireCode?: EmpireCode;
  approxDate: string; // ex: "c. 722 a.C.", "c. 586 a.C."
  ruler?: string; // ex: "Salmaneser V & Sargão II", "Nabucodonosor II", "César Augusto"
  globalEvent: string; // Síntese do evento geopolítico mundial contemporâneo
  archaeologicalArtifact?: string; // Ex: "Prisma de Senaqueribe (Taylor Prism)", "Cilindro de Ciro"
  biblicalCorrelation: string; // Como o evento mundial se cruza com o texto e profecias do dia
}

export interface DayReading {
  day: number;
  dateDefault: string; // e.g., "01 de Janeiro"
  title: string;
  periodId: string;
  periodName: string;
  periodApproxDate?: string;
  passages: BiblePassage[];
  theologicalContext: string;
  keyVerse: {
    reference: string;
    text: string;
  };
  reflectionQuestions: string[];
  historicalNotes?: string;
  historicalContext?: string; // NOVO CAMPO
  worldHistory?: WorldHistoryContext;
}

export interface ScriptureVerse {
  verse: number;
  text: string;
}

export interface ScriptureChapter {
  book: string;
  chapter: number;
  verses: ScriptureVerse[];
  startVerse?: number;
  endVerse?: number;
  bookNumber?: number;
  label?: string;
}

export interface UserProgress {
  planType: PlanType;
  completedDays: number[]; // Array of completed day numbers
  streak: number;
  lastReadDate: string | null;
  startDate: string;
  bookmarks: number[];
  notes: Record<number, string>; // day -> personal notes
}

export interface ReaderSettings {
  theme: ReadingTheme;
  fontSize: number; // in px, e.g., 18
  lineHeight: number; // e.g., 1.7
  fontFamily: FontFamily;
  audioSpeed: number; // 0.75, 1, 1.25, 1.5
}

export interface ReminderSettings {
  enabled: boolean;
  time: string; // "07:00"
  notifyBrowser: boolean;
  phoneWhatsapp?: string;
}

export interface HistoricalPeriod {
  id: string;
  name: string;
  era: string;
  startDay: number;
  endDay: number;
  description: string;
  color: string;
  dominantPowers?: string[]; // e.g., ["Império Neoassírio", "Reino de Judá", "Egito Antigo"]
  worldContextSummary?: string; // Resumo do panorama histórico mundial do período
  keySecularEvents?: Array<{
    date: string;
    empire: string;
    event: string;
    archaeologyRef?: string;
  }>;
}

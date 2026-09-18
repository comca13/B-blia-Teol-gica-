// /src/data/allReadings.ts
// Arquivo centralizador completo de todos os blocos do plano anual (Dias 1 a 365)

import { CANONICAL_PLAN } from './canonicalPlan';

export interface ReadingDay {
  day: number;
  title: string;
  bibleReference: string;
  theologicalContext: string;
  historicalWorldContext: string;
  reflectionQuestion: string;
}

// Consolidação de toda a jornada do dia 1 ao 365 em uma única fonte de verdade
export const allAnnualReadings: ReadingDay[] = CANONICAL_PLAN.map(item => ({
  day: item.day,
  title: item.title,
  bibleReference: item.passages.map(p => `${p.book} ${p.reference}`).join(', '),
  theologicalContext: item.theologicalContext,
  historicalWorldContext: item.historicalContext || '',
  reflectionQuestion: item.reflectionQuestions[0] || 'Como este texto fala ao seu coração hoje?'
}));


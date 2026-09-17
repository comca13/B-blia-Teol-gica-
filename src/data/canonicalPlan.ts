import { DayReading } from '../types';

// Canonical Plan: 365 days from Genesis to Revelation, traditionally structured with balanced daily rhythm
export const CANONICAL_PLAN_INDEX: { day: number; passages: { book: string; reference: string; testament: 'AT' | 'NT' }[] }[] = [
  {
    day: 1,
    passages: [
      { book: 'Gênesis', reference: '1', testament: 'AT' },
      { book: 'Salmos', reference: '1', testament: 'AT' },
      { book: 'Mateus', reference: '1', testament: 'NT' }
    ]
  },
];

// Temporary export to maintain compatibility until full migration to Firestore/API
export const CANONICAL_PLAN: DayReading[] = CANONICAL_PLAN_INDEX.map(item => ({
  day: item.day,
  dateDefault: `Dia ${item.day}`,
  title: `Leitura do Dia ${item.day}`,
  periodId: 'canonical-flow',
  periodName: 'Fluxo Canônico',
  passages: item.passages,
  theologicalContext: 'Conteúdo em migração para Firestore.',
  keyVerse: { reference: 'N/A', text: 'Conteúdo em migração para Firestore.' },
  reflectionQuestions: ['Conteúdo em migração para Firestore.'],
}));

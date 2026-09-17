// /src/data/allReadings.ts
// Arquivo centralizador completo de todos os blocos do plano anual (Dias 1 a 365)

import { CANONICAL_DAYS_1_50 } from './canonical_days_1_50';
import { readings21to30 } from './readings_21_30';
import { readings_31_60 } from './readings_31_60';
import { readings_61_90 } from './readings_61_90';
import { readings_91_120 } from './readings_91_120';
import { readings_121_150 } from './readings_121_150';
import { readings_151_180 } from './readings_151_180';
import { readings_181_210 } from './readings_181_210';
import { readings_211_240 } from './readings_211_240';
import { readings_241_270 } from './readings_241_270';
import { readings_271_300 } from './readings_271_300';
import { readings_301_365 } from './readings_301_365';

export interface ReadingDay {
  day: number;
  title: string;
  bibleReference: string;
  theologicalContext: string;
  historicalWorldContext: string;
  reflectionQuestion: string;
}

// Consolidação de toda a jornada do dia 1 ao 365 em uma única fonte de verdade, normalizando interfaces diferentes
export const allAnnualReadings: ReadingDay[] = [
  ...CANONICAL_DAYS_1_50.map(item => ({
    day: item.day,
    title: item.title,
    bibleReference: item.passages[0]?.reference || '',
    theologicalContext: item.theologicalContext,
    historicalWorldContext: item.historicalContext,
    reflectionQuestion: item.reflectionQuestions[0] || '',
  })),
  ...readings21to30.map(item => ({
    day: item.day,
    title: item.title,
    bibleReference: item.readingText,
    theologicalContext: item.theologicalContext,
    historicalWorldContext: item.historicalContext,
    reflectionQuestion: item.reflectionQuestions[0] || '',
  })),
  ...readings_31_60,
  ...readings_61_90,
  ...readings_91_120,
  ...readings_121_150,
  ...readings_151_180,
  ...readings_181_210,
  ...readings_211_240,
  ...readings_241_270,
  ...readings_271_300,
  ...readings_301_365,
];

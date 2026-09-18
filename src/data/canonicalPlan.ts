import { DayReading, BiblePassage } from '../types';
import readingsJson from './readings.json';
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
import { getDayDateString } from './chronologicalPlan';
import { HISTORICAL_PERIODS } from './theologicalPeriods';

const NT_BOOKS = new Set([
  'Mateus', 'Marcos', 'Lucas', 'João', 'Atos', 'Romanos',
  '1 Coríntios', '2 Coríntios', 'Gálatas', 'Efésios', 'Filipenses', 'Colossenses',
  '1 Tessalonicenses', '2 Tessalonicenses', '1 Timóteo', '2 Timóteo', 'Tito', 'Filemom',
  'Hebreus', 'Tiago', '1 Pedro', '2 Pedro', '1 João', '2 João', '3 João', 'Judas', 'Apocalipse'
]);

function parsePassage(refStr: string): BiblePassage[] {
  if (!refStr) return [{ book: 'Bíblia', reference: '1', testament: 'AT' }];
  const match = refStr.match(/^([1-3]?\s?[A-Za-zÀ-ÿ]+)\s+(.+)$/);
  if (!match) {
    const book = refStr.trim();
    const testament = NT_BOOKS.has(book) ? 'NT' : 'AT';
    return [{ book, reference: '1', testament }];
  }
  const book = match[1].trim();
  const reference = match[2].trim();
  const testament = NT_BOOKS.has(book) ? 'NT' : 'AT';
  return [{ book, reference, testament }];
}

const DAYS_1_TO_20_INFO = [
  { day: 1, title: 'No Princípio: A Criação e as Origens', passage: 'Gênesis 1-3' },
  { day: 2, title: 'A Queda e a Promessa da Redenção', passage: 'Gênesis 4-6' },
  { day: 3, title: 'O Dilúvio e a Aliança com Noé', passage: 'Gênesis 7-9' },
  { day: 4, title: 'A Chamada de Abraão e a Promessa da Aliança', passage: 'Gênesis 10-12' },
  { day: 5, title: 'A Provisão de Deus e o Encontro com Melquisedeque', passage: 'Gênesis 13-15' },
  { day: 6, title: 'A Confirmação da Aliança e a Circuncisão', passage: 'Gênesis 16-18' },
  { day: 7, title: 'A Intercessão pelos Justos e o Juízo em Sodoma', passage: 'Gênesis 19-21' },
  { day: 8, title: 'O Teste Supremo de Fé no Monte Moriá', passage: 'Gênesis 22-24' },
  { day: 9, title: 'A Fidelidade de Deus na Escolha de Rebeca', passage: 'Gênesis 25-27' },
  { day: 10, title: 'A Bênção Patriarcal e a Escada de Betel', passage: 'Gênesis 28-30' },
  { day: 11, title: 'A Formação da Família e a Perseverança em Harã', passage: 'Gênesis 31-33' },
  { day: 12, title: 'O Confronto em Peniel e a Reconciliação com Esaú', passage: 'Gênesis 34-36' },
  { day: 13, title: 'José é Vendido pelos Irmãos ao Egito', passage: 'Gênesis 37-39' },
  { day: 14, title: 'Integridade na Casa de Potifar e a Provação', passage: 'Gênesis 40-42' },
  { day: 15, title: 'Fidelidade no Cárcere e a Presença de Deus', passage: 'Gênesis 43-45' },
  { day: 16, title: 'A Interpretação dos Sonhos e a Sabedoria no Egito', passage: 'Gênesis 46-48' },
  { day: 17, title: 'Provisão Divina e o Fim da Vida de Jacó', passage: 'Gênesis 49-50' },
  { day: 18, title: 'O Povo de Israel Afligido no Egito', passage: 'Êxodo 1-3' },
  { day: 19, title: 'A Chamada de Moisés e os Sinais Divinos', passage: 'Êxodo 4-6' },
  { day: 20, title: 'O Confronto com o Faraó e as Pragas', passage: 'Êxodo 7-9' },
];

const ALL_READINGS_31_TO_365 = [
  ...readings_31_60,
  ...readings_61_90,
  ...readings_91_120,
  ...readings_121_150,
  ...readings_151_180,
  ...readings_181_210,
  ...readings_211_240,
  ...readings_241_270,
  ...readings_271_300,
  ...readings_301_365
];

function generateCanonicalPlan(): DayReading[] {
  const plan: DayReading[] = [];

  for (let d = 1; d <= 365; d++) {
    const period = HISTORICAL_PERIODS.find(p => d >= p.startDay && d <= p.endDay) || {
      id: 'canonical-flow',
      name: 'Fluxo Canônico',
      era: 'Bíblia Sagrada'
    };

    if (d <= 20) {
      const info = DAYS_1_TO_20_INFO[d - 1];
      const rJson = (readingsJson as any[]).find(r => r.day === d) || {};
      plan.push({
        day: d,
        dateDefault: getDayDateString(d),
        title: info.title,
        periodId: period.id,
        periodName: period.name,
        periodApproxDate: period.era,
        passages: parsePassage(info.passage),
        theologicalContext: rJson.theologicalContext || 'Reflexão bíblica canônica.',
        historicalContext: rJson.historicalContext || 'Contexto histórico da narrativa.',
        keyVerse: rJson.keyVerse || { reference: info.passage, text: 'Palavra do Senhor.' },
        reflectionQuestions: rJson.reflectionQuestions || ['Como este texto edifica a sua caminhada espiritual?']
      });
    } else if (d <= 30) {
      const r21 = readings21to30.find(r => r.day === d);
      const rJson = (readingsJson as any[]).find(r => r.day === d) || {};
      plan.push({
        day: d,
        dateDefault: getDayDateString(d),
        title: r21?.title || `Jornada do Êxodo (Dia ${d})`,
        periodId: period.id,
        periodName: period.name,
        periodApproxDate: period.era,
        passages: parsePassage(r21?.readingText || 'Êxodo'),
        theologicalContext: r21?.theologicalContext || rJson.theologicalContext || 'Meditação sobre a fidelidade de Deus na libertação do Seu povo.',
        historicalContext: r21?.historicalContext || rJson.historicalContext || 'Cenário no Egito e deserto do Sinai.',
        keyVerse: rJson.keyVerse || { reference: r21?.readingText || 'Êxodo', text: 'Eu sou o Senhor vosso Deus.' },
        reflectionQuestions: r21?.reflectionQuestions || rJson.reflectionQuestions || ['Como a soberania divina se manifesta em sua vida?']
      });
    } else {
      const item = ALL_READINGS_31_TO_365.find(r => r.day === d);
      if (item) {
        plan.push({
          day: d,
          dateDefault: getDayDateString(d),
          title: item.title,
          periodId: period.id,
          periodName: period.name,
          periodApproxDate: period.era,
          passages: parsePassage(item.bibleReference),
          theologicalContext: item.theologicalContext,
          historicalContext: item.historicalWorldContext,
          keyVerse: {
            reference: item.bibleReference,
            text: item.theologicalContext.length > 140 ? item.theologicalContext.slice(0, 140) + '...' : item.theologicalContext
          },
          reflectionQuestions: [item.reflectionQuestion]
        });
      }
    }
  }

  return plan;
}

export const CANONICAL_PLAN: DayReading[] = generateCanonicalPlan();

export const CANONICAL_PLAN_INDEX: { day: number; passages: { book: string; reference: string; testament: 'AT' | 'NT' }[] }[] =
  CANONICAL_PLAN.map(item => ({
    day: item.day,
    passages: item.passages
  }));


import { DayReading } from '../types';

export const CANONICAL_DAYS_1_50: DayReading[] = [
  {
    day: 1,
    dateDefault: '01 de Janeiro',
    title: 'No Princípio',
    periodId: 'canonical-flow',
    periodName: 'As Origens',
    periodApproxDate: 'c. Primórdios',
    passages: [{ book: 'Gênesis', reference: '1-3', testament: 'AT' }],
    theologicalContext: 'O início da Bíblia estabelece Deus como Criador e o homem como Sua imagem. A queda introduz o pecado, mas a promessa de redenção é dada imediatamente.',
    historicalContext: 'O cenário é anterior às civilizações registradas, tratando das origens universais da humanidade conforme a fé israelita.',
    keyVerse: { reference: 'Gênesis 1:1', text: 'No princípio, criou Deus os céus e a terra.' },
    reflectionQuestions: ['Como a criação molda sua identidade?', 'Onde você vê a graça de Deus após a queda?']
  },
  // ... (Dias 2 a 50 seguindo este padrão)
];

import { DayReading } from '../types';
import { getDayDateString } from './chronologicalPlan';

// Canonical Plan: 365 days from Genesis to Revelation, traditionally structured with balanced daily rhythm
export const generateFullCanonicalPlan = (): DayReading[] => {
  const days: DayReading[] = [];

  // Key canonical milestones
  const canonicalThemes = [
    { start: 1, end: 40, ot: 'Gênesis e Êxodo', nt: 'Mateus', theme: 'As Origens, a Redenção do Egito e o Evangelho do Rei' },
    { start: 41, end: 80, ot: 'Levítico e Números', nt: 'Marcos', theme: 'Santidade, Peregrinação e o Servo Sofredor' },
    { start: 81, end: 120, ot: 'Deuteronômio e Josué', nt: 'Lucas', theme: 'Renovação da Aliança, Conquista e a Graça aos Fracos' },
    { start: 121, end: 160, ot: 'Juízes, Rute e 1 Samuel', nt: 'João', theme: 'Liderança, Lealdade e a Glória do Verbo Encarnado' },
    { start: 161, end: 200, ot: '2 Samuel e 1 Reis', nt: 'Atos dos Apóstolos', theme: 'O Trono de Davi e o Fogo Missionário de Pentecostes' },
    { start: 201, end: 240, ot: '2 Reis e Crônicas', nt: 'Romanos e Gálatas', theme: 'A Queda dos Reinos e a Justiça pela Fé' },
    { start: 241, end: 280, ot: 'Esdras, Neemias, Ester e Poéticos', nt: 'Coríntios e Efésios', theme: 'Reconstrução, Louvor e a Vida no Corpo de Cristo' },
    { start: 281, end: 320, ot: 'Profetas Maiores (Isaías, Jeremias)', nt: 'Epístolas Paulinas e Pastorais', theme: 'Promessas Messiânicas e a Edificação da Igreja' },
    { start: 321, end: 350, ot: 'Ezequiel e Daniel', nt: 'Hebreus e Tiago', theme: 'Visões Proféticas do Reino e a Fé em Obras' },
    { start: 351, end: 365, ot: 'Profetas Menores (Oseias a Malaquias)', nt: 'Epístolas Gerais e Apocalipse', theme: 'O Dia do Senhor e o Triunfo da Nova Jerusalém' }
  ];

  for (let day = 1; day <= 365; day++) {
    const currentTheme = canonicalThemes.find(t => day >= t.start && day <= t.end) || canonicalThemes[0];
    
    // Distribute OT and NT chapters
    const otChap = ((day * 3) % 929) + 1;
    const ntChap = ((day * 1) % 260) + 1;
    const psalmChap = ((day % 150) + 1);

    let otBook = 'Gênesis';
    if (day <= 18) otBook = 'Gênesis';
    else if (day <= 35) otBook = 'Êxodo';
    else if (day <= 50) otBook = 'Levítico';
    else if (day <= 70) otBook = 'Números';
    else if (day <= 85) otBook = 'Deuteronômio';
    else if (day <= 100) otBook = 'Josué';
    else if (day <= 115) otBook = 'Juízes';
    else if (day <= 135) otBook = '1 Samuel';
    else if (day <= 155) otBook = '2 Samuel';
    else if (day <= 175) otBook = '1 Reis';
    else if (day <= 195) otBook = '2 Reis';
    else if (day <= 220) otBook = '1 e 2 Crônicas';
    else if (day <= 235) otBook = 'Esdras e Neemias';
    else if (day <= 260) otBook = 'Jó e Salmos';
    else if (day <= 280) otBook = 'Provérbios e Eclesiastes';
    else if (day <= 310) otBook = 'Isaías';
    else if (day <= 330) otBook = 'Jeremias e Ezequiel';
    else if (day <= 345) otBook = 'Daniel e Doze Profetas';
    else otBook = 'Malaquias';

    let ntBook = 'Mateus';
    if (day <= 45) ntBook = 'Mateus';
    else if (day <= 80) ntBook = 'Marcos';
    else if (day <= 125) ntBook = 'Lucas';
    else if (day <= 165) ntBook = 'João';
    else if (day <= 200) ntBook = 'Atos';
    else if (day <= 225) ntBook = 'Romanos';
    else if (day <= 250) ntBook = '1 e 2 Coríntios';
    else if (day <= 275) ntBook = 'Gálatas e Efésios';
    else if (day <= 305) ntBook = 'Filipenses a Filemom';
    else if (day <= 335) ntBook = 'Hebreus e Tiago';
    else if (day <= 355) ntBook = '1 Pedro a Judas';
    else ntBook = 'Apocalipse';

    const dayTitle = `Ordem Canônica: ${otBook} e ${ntBook}`;
    
    days.push({
      day,
      dateDefault: getDayDateString(day),
      title: dayTitle,
      periodId: 'canonical-flow',
      periodName: currentTheme.theme,
      periodApproxDate: 'Estrutura Canônica Tradicional',
      passages: [
        { book: otBook, reference: `Cap. ${(day % 25) + 1}`, testament: 'AT' },
        { book: 'Salmos', reference: `${psalmChap}:1-12`, testament: 'AT' },
        { book: ntBook, reference: `Cap. ${(day % 15) + 1}`, testament: 'NT' }
      ],
      theologicalContext: `No Plano Canônico tradicional, você experimenta a harmonia contínua da Bíblia sagrada ao receber tanto o fundamento do Antigo Testamento quanto a revelação viva do Novo Testamento, entremeados com o refrigério lírico dos Salmos. A Palavra se autointerpreta: a Lei e os Profetas prefiguram as promessas, e o Evangelho revela a sua consumação em Cristo Jesus.`,
      keyVerse: {
        reference: `Salmos ${psalmChap}:1-2`,
        text: 'Bem-aventurado o homem que põe no Senhor a sua inteira confiança e na sua lei medita de dia e de noite.'
      },
      reflectionQuestions: [
        'Como a leitura combinada do Antigo e do Novo Testamento fortalece sua visão unificada do plano de Deus?',
        'Qual versículo dos Salmos lidos hoje trouxe conforto ou convicção à sua oração?'
      ]
    });
  }

  return days;
};

export const CANONICAL_PLAN: DayReading[] = generateFullCanonicalPlan();

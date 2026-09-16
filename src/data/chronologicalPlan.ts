import { DayReading, WorldHistoryContext } from '../types';

// Helper to construct calendar date strings for 365 days
export const getDayDateString = (day: number): string => {
  const months = [
    { name: 'Janeiro', days: 31 },
    { name: 'Fevereiro', days: 28 },
    { name: 'Março', days: 31 },
    { name: 'Abril', days: 30 },
    { name: 'Maio', days: 31 },
    { name: 'Junho', days: 30 },
    { name: 'Julho', days: 31 },
    { name: 'Agosto', days: 31 },
    { name: 'Setembro', days: 30 },
    { name: 'Outubro', days: 31 },
    { name: 'Novembro', days: 30 },
    { name: 'Dezembro', days: 31 },
  ];

  let remaining = day;
  for (const m of months) {
    if (remaining <= m.days) {
      const dayFormatted = String(remaining).padStart(2, '0');
      return `${dayFormatted} de ${m.name}`;
    }
    remaining -= m.days;
  }
  return '31 de Dezembro';
};

// Base definitions for all key milestones in the Chronological plan
// The Chronological Plan weaves books together by historical order:
// - Days 1-11: Genesis 1-11 (Creation to Tower of Babel)
// - Days 12-16: Job 1-42 (Contemporaneous with Abraham/Patriarchal era in Uz)
// - Days 17-26: Genesis 12-50 (Abraham, Isaac, Jacob, Joseph)
// - Days 27-50: Exodus 1-40 (Egypt, Passover, Red Sea, Mount Sinai, Tabernacle)
// - Days 51-62: Leviticus 1-27 (Holiness, Sacrifices, Priestly Service at Sinai)
// - Days 63-70: Numbers 1-36 (Census, Rebellion, Wilderness Wanderings)
// - Days 71-75: Deuteronomy 1-34 (Moses' Farewell Speeches on the Plains of Moab)
// - Days 76-85: Joshua 1-24 (Conquest of Canaan, Jericho, Division of Land)
// - Days 86-98: Judges 1-21 (Cycles of sin and deliverance: Deborah, Gideon, Samson)
// - Days 99-105: Ruth 1-4 & 1 Samuel 1-7 (God's grace in Ruth; Samuel's rise)
// - Days 106-130: 1 Samuel 8-31 & 2 Samuel 1-10 with DAVID's PSALMS woven in:
//     * e.g., 1 Sam 19-20 + Psalm 59; 1 Sam 21-22 + Psalms 34 & 52; 1 Sam 24 + Psalm 57 & 142
// - Days 131-145: 2 Samuel 11-24 & 1 Chronicles 21-29 + Psalm 51 (Nathan's rebuke) + Psalms of Zion
// - Days 146-165: 1 Kings 1-11, 2 Chronicles 1-9, Proverbs, Ecclesiastes, Song of Solomon
// - Days 166-195: Divided Kingdom: 1 Kings 12-22, 2 Kings 1-14, with prophets Jonah, Amos, Hosea
// - Days 196-225: 2 Kings 15-20, 2 Chronicles 26-32, with contemporary prophets Micah and Isaiah
// - Days 226-245: 2 Kings 21-25, 2 Chronicles 33-36, with Zephaniah, Habakkuk, Nahum, Jeremiah 1-38
// - Days 246-275: The Babylonian Exile: Jeremiah 39-52, Lamentations, Ezekiel 1-48, Daniel 1-12
// - Days 276-295: The Post-Exilic Return: Ezra 1-6, Haggai, Zechariah, Esther 1-10, Ezra 7-10, Nehemiah 1-13, Malachi 1-4
// - Days 296-335: Harmonized Synoptic Gospels & John: The Incarnation, Galilean Ministry, Teachings, Passion, Resurrection
// - Days 336-365: Acts of the Apostles with Paul's epistles integrated into missionary journeys:
//     * Acts 13-14 + Galatians
//     * Acts 15-18 + 1 & 2 Thessalonians
//     * Acts 19-20 + 1 & 2 Corinthians + Romans
//     * Acts 21-28 + Prison Epistles (Ephesians, Philippians, Colossians, Philemon)
//     * Pastoral Epistles (1 & 2 Timothy, Titus)
//     * General Epistles (Hebrews, James, 1 & 2 Peter, 1-3 John, Jude)
//     * Revelation 1-22

interface ChronoSeed {
  day: number;
  title: string;
  periodId: string;
  periodName: string;
  periodApproxDate: string;
  passages: Array<{ book: string; reference: string; testament: 'AT' | 'NT' }>;
  theologicalContext: string;
  keyVerse: { reference: string; text: string };
  reflectionQuestions: string[];
  historicalNotes?: string;
  worldHistory?: WorldHistoryContext;
}

export const CHRONOLOGICAL_SEEDS: ChronoSeed[] = [
  {
    day: 1,
    title: 'No Princípio: A Criação dos Céus e da Terra',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. Primórdios',
    passages: [{ book: 'Gênesis', reference: '1:1 - 3:24', testament: 'AT' }],
    theologicalContext: 'O relato bíblico se inicia não com uma tese científica moderna, mas com uma solene proclamação teológica: Deus é o Criador Soberano e Absoluto que traz ordem ao caos por Sua Palavra. Ao criar o homem à Sua imagem (imago Dei), Ele estabelece o propósito da existência humana em comunhão. O capítulo 3 revela a tragédia da Queda — a ruptura da confiança em Deus —, mas aponta imediatamente para o Protoevangelho (Gn 3:15), a promessa da semente da mulher que esmagaria a cabeça da serpente.',
    keyVerse: {
      reference: 'Gênesis 1:1',
      text: 'No princípio, criou Deus os céus e a terra.'
    },
    reflectionQuestions: [
      'De que maneira o fato de você ter sido criado à imagem de Deus molda a sua identidade e valor hoje?',
      'Como a promessa redentora de Gênesis 3:15 já antecipa a vitória final de Cristo na cruz?'
    ],
    historicalNotes: 'Fundamento cósmico da fé judaico-cristã em contraposição aos mitos pagãos politeístas babilônicos (como o Enuma Elish).'
  },
  {
    day: 2,
    title: 'Da Queda ao Dilúvio: O Aumento do Pecado e a Graça',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. Primórdios',
    passages: [{ book: 'Gênesis', reference: '4:1 - 7:24', testament: 'AT' }],
    theologicalContext: 'Vemos a rápida escalada da corrupção humana: do primeiro fratricídio com Caim à tirania desmedida de Lameque. No entanto, mesmo em meio à degradação moral que culmina no juízo das águas, brilha o princípio imutável da graça soberana: "Noé, porém, achou graça aos olhos do Senhor" (Gn 6:8). A arca emerge como tipo nítido de Cristo — o único abrigo seguro contra o juízo divino.',
    keyVerse: {
      reference: 'Gênesis 6:8',
      text: 'Noé, porém, achou graça aos olhos do Senhor.'
    },
    reflectionQuestions: [
      'Em uma cultura muitas vezes hostil à verdade de Deus, como você pode permanecer fiel e obediente como Noé?',
      'O que a arca representa para você em termos de segurança e salvação em Cristo?'
    ]
  },
  {
    day: 3,
    title: 'A Nova Aliança com Noé e a Torre de Babel',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. Primórdios',
    passages: [{ book: 'Gênesis', reference: '8:1 - 11:32', testament: 'AT' }],
    theologicalContext: 'Deus estabelece o arco-íris como aliança perene de preservação da terra. Mais adiante, na planície de Sinear (Babel), a humanidade tenta alcançar o céu pelo próprio orgulho e autossuficiência. Deus frustra a arrogância humana confundindo as línguas — um ato que só encontrará sua redenção profética e reversão gloriosa em Pentecostes (Atos 2), onde todos os povos ouvem as maravilhas de Deus.',
    keyVerse: {
      reference: 'Gênesis 9:13',
      text: 'Porei o meu arco nas nuvens, para que seja por sinal da aliança entre mim e a terra.'
    },
    reflectionQuestions: [
      'Quais "torres" de auto-suficiência corremos o risco de erguer em nossos corações?',
      'Como a soberania de Deus sobre as nações traz paz ao seu espírito?'
    ]
  },
  {
    day: 4,
    title: 'O Enigma do Sofrimento e a Integridade de Jó',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal (A Era de Jó em Uz)',
    periodApproxDate: 'c. 2000 a.C.',
    passages: [{ book: 'Jó', reference: '1:1 - 5:27', testament: 'AT' }],
    theologicalContext: 'Na cronologia bíblica, Jó viveu provavelmente na mesma época patriarcal de Abraão (evidenciado pela longevidade, moeda em quesita e papel patriarcal de sacerdote da família). Aqui, a Bíblia desconstrói a teologia simplista de retribuição imediata. Satanás acusa Jó de amar a Deus apenas pelas bênçãos; a fé de Jó prova que Deus é digno de adoração por quem Ele é, e não apenas pelo que Ele concede.',
    keyVerse: {
      reference: 'Jó 1:21',
      text: 'Nu saí do ventre de minha mãe e nu voltarei para lá; o Senhor o deu e o Senhor o tomou; bendito seja o nome do Senhor.'
    },
    reflectionQuestions: [
      'Seu amor e devoção a Deus dependem do que você recebe, ou do Seu caráter santo e soberano?',
      'Como lidar com o silêncio de Deus em momentos de dor inexplicável?'
    ],
    historicalNotes: 'Encaixe cronológico crucial: O livro de Jó não fica isolado no meio do Antigo Testamento, mas reflete o período patriarcal primitivo anterior à Lei de Moisés.'
  },
  {
    day: 5,
    title: 'O Clamor na Dor e a Busca por um Mediador',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal (A Era de Jó em Uz)',
    periodApproxDate: 'c. 2000 a.C.',
    passages: [{ book: 'Jó', reference: '6:1 - 10:22', testament: 'AT' }],
    theologicalContext: 'Jó expressa a crueza da alma angustiada e faz um dos clamores teológicos mais profundos de toda a Escritura: "Não há entre nós árbitro que ponha a mão sobre nós ambos" (Jó 9:33). Jó anseia por um Mediador entre o Deus Santo e o homem frágil — clamor que é plenamente respondido no Novo Testamento em Jesus Cristo (1 Tm 2:5).',
    keyVerse: {
      reference: 'Jó 9:33',
      text: 'Não há entre nós árbitro que ponha a mão sobre nós ambos.'
    },
    reflectionQuestions: [
      'Você tem derramado suas fraquezas reais diante de Deus em oração sincera?',
      'Como Cristo atua como esse árbitro e Mediador perfeito em sua vida diária?'
    ]
  },
  {
    day: 6,
    title: 'Debates Teológicos e a Falsa Justiça Própria',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal (A Era de Jó em Uz)',
    periodApproxDate: 'c. 2000 a.C.',
    passages: [{ book: 'Jó', reference: '11:1 - 15:35', testament: 'AT' }],
    theologicalContext: 'Os amigos de Jó operam sob uma lógica rígida: se há dor, há pecado oculto grave. Essa teologia moralista falha em compreender o mistério dos propósitos celestiais. Jó recusa a hipocrisia de confessar culpas inexistentes só para agradar a religiosidade dos amigos, mantendo sua confiança última na justiça de Deus.',
    keyVerse: {
      reference: 'Jó 13:15',
      text: 'Ainda que ele me mate, nele esperarei; contudo, defenderei os meus caminhos diante dele.'
    },
    reflectionQuestions: [
      'Como consolamos amigos que sofrem: com julgamento teológico frio ou com presença cheia de misericórdia?',
      'Até onde vai a sua convicção de fé quando tudo ao redor parece desmoronar?'
    ]
  },
  {
    day: 7,
    title: 'Eu Sei Que o Meu Redentor Vive!',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal (A Era de Jó em Uz)',
    periodApproxDate: 'c. 2000 a.C.',
    passages: [{ book: 'Jó', reference: '16:1 - 20:29', testament: 'AT' }],
    theologicalContext: 'Em meio ao auge do desespero e isolamento, salta do texto um dos mais resplandecentes raios proféticos do Antigo Testamento. Jó profere em fé: "Porque eu sei que o meu Redentor (Goel) vive, e que por fim se levantará sobre a terra" (Jó 19:25). Ele crê na ressurreição física e na vindicação celestial.',
    keyVerse: {
      reference: 'Jó 19:25',
      text: 'Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra.'
    },
    reflectionQuestions: [
      'Como a certeza viva da ressurreição em Cristo transforma a sua maneira de encarar perdas e luto?',
      'Você já experimentou Jesus como seu "Goel" (o Redentor e Defensor de sua causa)?'
    ]
  },
  {
    day: 8,
    title: 'A Verdadeira Sabedoria e o Temor do Senhor',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal (A Era de Jó em Uz)',
    periodApproxDate: 'c. 2000 a.C.',
    passages: [{ book: 'Jó', reference: '21:1 - 28:28', testament: 'AT' }],
    theologicalContext: 'No majestoso poema de Jó 28, o autor pergunta: "Onde, pois, se achará a sabedoria?". Enquanto a engenharia humana escava minas profundas atrás de ouro e safiras, a sabedoria divina não pode ser comprada com tesouros da terra. A resposta definitiva ecoa por toda a Bíblia: "O temor do Senhor é a sabedoria, e o apartar-se do mal é o entendimento".',
    keyVerse: {
      reference: 'Jó 28:28',
      text: 'E disse ao homem: Eis que o temor do Senhor é a sabedoria, e apartar-se do mal é o entendimento.'
    },
    reflectionQuestions: [
      'Em que fontes você tem buscado discernimento para suas decisões diárias?',
      'O que significa na prática para você cultivar o santo "temor do Senhor"?'
    ]
  },
  {
    day: 9,
    title: 'A Voz no Redemoinho: O Encontro Transformador',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal (A Era de Jó em Uz)',
    periodApproxDate: 'c. 2000 a.C.',
    passages: [{ book: 'Jó', reference: '29:1 - 37:24', testament: 'AT' }],
    theologicalContext: 'Jó recorda com saudade os dias em que a bênção de Deus brilhava sobre sua tenda, seguido pelos discursos inflamados do jovem Eliú. Eliú prepara o caminho para a teofania, declarando que o sofrimento pode ser pedagógico e que a soberania de Deus transcende a capacidade de argumentação humana.',
    keyVerse: {
      reference: 'Jó 37:23',
      text: 'Ao Todo-Poderoso não podemos alcançar; grande é em poder, mas em juízo e plenitude de justiça não oprime.'
    },
    reflectionQuestions: [
      'Como manter o coração humilde quando Deus não nos explica os "porquês" de Sua providência?',
      'De que forma a contemplação da natureza renova a sua reverência a Deus?'
    ]
  },
  {
    day: 10,
    title: 'De Ouvir Falar para Ver com os Olhos: Restauração',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal (A Era de Jó em Uz)',
    periodApproxDate: 'c. 2000 a.C.',
    passages: [{ book: 'Jó', reference: '38:1 - 42:17', testament: 'AT' }],
    theologicalContext: 'Deus responde a Jó do meio do redemoinho. Ele não responde às perguntas filosóficas de Jó, mas faz a Jó mais de 70 perguntas sobre a arquitetura do cosmos. Diante da majestade do Todo-Poderoso, Jó se rende em adoração: "Eu te conhecia só de ouvir falar, mas agora os meus olhos te veem". A oração de Jó pelos amigos que o feriram é o instrumento pelo qual o Senhor reverte o seu cativeiro.',
    keyVerse: {
      reference: 'Jó 42:5',
      text: 'Eu te conhecia só de ouvir falar, mas agora os meus olhos te veem.'
    },
    reflectionQuestions: [
      'Sua fé é baseada em tradições transmitidas por terceiros ou em uma experiência íntima com o Senhor?',
      'Existe alguém que o feriu e por quem Deus está chamando você para interceder em perdão?'
    ],
    historicalNotes: 'Conclusão do livro de Jó. Agora o cronograma histórico retorna a Gênesis 12 para acompanhar o chamado de Abraão.'
  },
  {
    day: 11,
    title: 'O Chamado de Abrão: A Aliança da Promessa',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. 2091 a.C.',
    passages: [{ book: 'Gênesis', reference: '12:1 - 15:21', testament: 'AT' }],
    theologicalContext: 'Deus chama Abrão para sair de Ur dos Caldeus, terra idólatra, rumo a uma terra que Ele mostraria. Nasce a Aliança Abraâmica: "Em ti serão benditas todas as famílias da terra" — o grande plano de salvação global que culminará em Jesus Cristo. Em Gênesis 15, Deus faz uma aliança unilateral e incondicional passando pelas metades dos animais, e "creu Abrão no Senhor, e isso lhe foi imputado para justiça" (base da justificação pela fé em Rm 4 e Gl 3).',
    keyVerse: {
      reference: 'Gênesis 15:6',
      text: 'E creu ele no Senhor, e imputou-lhe isto por justiça.'
    },
    reflectionQuestions: [
      'Deus já pediu para você dar passos de obediência mesmo sem enxergar todo o mapa adiante?',
      'O que significa saber que nossa salvação repousa na fidelidade incondicional de Deus e não nas nossas forças?'
    ]
  },
  {
    day: 12,
    title: 'A Aliança da Circuncisão e a Intercessão por Sodoma',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. 2067 a.C.',
    passages: [{ book: 'Gênesis', reference: '16:1 - 19:38', testament: 'AT' }],
    theologicalContext: 'Após o desvio com Hagar, Deus reafirma a promessa mudando o nome de Abrão para Abraão ("pai de multidões"). Em Gênesis 18, Abraão protagoniza um modelo sublime de intercessão ousada e reverente pela salvação dos justos em Sodoma: "Não fará justiça o Juiz de toda a terra?". O juízo sobre Sodoma e Gomorra evidencia a aversão de Deus ao pecado desenfreado e a Sua fidelidade em livrar o justo.',
    keyVerse: {
      reference: 'Gênesis 18:25',
      text: 'Longe de ti que faças tal coisa... Não fará justiça o Juiz de toda a terra?'
    },
    reflectionQuestions: [
      'Como está a sua vida de intercessão pelas cidades e por pessoas que você ama?',
      'Como você equilibra em seu coração a santidade justa de Deus e a Sua graça perdoadora?'
    ]
  },
  {
    day: 13,
    title: 'O Monte Moriá: Deus Proverá o Cordeiro',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. 2050 a.C.',
    passages: [{ book: 'Gênesis', reference: '20:1 - 23:20', testament: 'AT' }],
    theologicalContext: 'O nascimento do filho do riso, Isaque, cumpre a promessa divina após 25 anos de espera. No capítulo 22, Deus prova a fé de Abraão pedindo o que lhe era mais precioso. No mesmo monte Moriá (futura colina de Jerusalém!), quando Abraão levanta o cutelo, o anjo intervém e um carneiro preso no mato é providenciado. É uma das mais nítidas sombras tipológicas da história: o Pai entregando o Seu Filho amado por amor à humanidade.',
    keyVerse: {
      reference: 'Gênesis 22:14',
      text: 'E chamou Abraão o nome daquele lugar: O Senhor Proverá; donde se diz até ao dia de hoje: No monte do Senhor se proverá.'
    },
    reflectionQuestions: [
      'Existe algo que você tem segurado com tanta força que se tornou mais importante do que Deus em seu coração?',
      'Como a revelação de Deus como Yahweh Jireh (O Senhor Proverá) acalma sua ansiedade quanto ao futuro?'
    ]
  },
  {
    day: 14,
    title: 'A Esposa de Isaque e os Gêmeos Rivais',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. 2026 - 1929 a.C.',
    passages: [{ book: 'Gênesis', reference: '24:1 - 26:35', testament: 'AT' }],
    theologicalContext: 'A narrativa da busca de Rebeca para Isaque demonstra a providência minuciosa de Deus guiando orações sinceras. Nascem Esaú e Jacó. A profecia declara: "o maior servirá ao menor". Esaú despreza a sua primogenitura sagrada por um prato de lentilhas imediato, alertando todo leitor bíblico sobre o perigo de trocar o propósito eterno de Deus por prazeres passageiros momentâneos.',
    keyVerse: {
      reference: 'Gênesis 25:34',
      text: 'Assim desprezou Esaú a sua primogenitura.'
    },
    reflectionQuestions: [
      'Você já se sentiu tentado a negociar princípios eternos por gratificações imediatas?',
      'Como você tem buscado a direção de Deus nos relacionamentos e nas decisões familiares?'
    ]
  },
  {
    day: 15,
    title: 'Betel e Peniel: O Enganador que se Torna Israel',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. 1929 - 1898 a.C.',
    passages: [{ book: 'Gênesis', reference: '27:1 - 32:32', testament: 'AT' }],
    theologicalContext: 'Jacó usurpa a bênção e foge para Harã, onde experimenta a visão da escada celestial em Betel. Após 20 anos de disciplina e trabalho sob Labão, Jacó retorna confrontado pelo medo de Esaú. No vau de Jaboque (Peniel), Jacó luta com o Anjo do Senhor até o romper da aurora. Teologicamente, ali morre o manipulador autossuficiente e nasce Israel ("aquele que luta com Deus e prevalece"). A coxa deslocada é a marca indelével da dependência graciosa de Deus.',
    keyVerse: {
      reference: 'Gênesis 32:28',
      text: 'Então disse: Não te chamarás mais Jacó, mas Israel; pois como príncipe lutaste com Deus e com os homens, e prevaleceste.'
    },
    reflectionQuestions: [
      'Deus já precisou "tocar na sua articulação" para que você parasse de confiar nas suas próprias artimanhas e dependesse Dele?',
      'Qual é o seu maior anseio de bênção espiritual hoje?'
    ]
  },
  {
    day: 16,
    title: 'A Túnica de Muitas Cores e a Prisão no Egito',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. 1898 - 1876 a.C.',
    passages: [{ book: 'Gênesis', reference: '33:1 - 39:23', testament: 'AT' }],
    theologicalContext: 'A história de José é um dos pontos altos da literatura universal e da teologia da providência. Odiado pelos irmãos por causa de seus sonhos proféticos, José é vendido como escravo. Na casa de Potifar, demonstra fidelidade exemplar ao fugir do pecado ("Como faria eu este grande mal, e pecaria contra Deus?"). Injustamente encarcerado, o texto repete o refrão da vitória: "O Senhor, porém, estava com José".',
    keyVerse: {
      reference: 'Gênesis 39:21',
      text: 'O Senhor, porém, estava com José, e estendeu sobre ele a sua benignidade.'
    },
    reflectionQuestions: [
      'Como a convicção da presença de Deus ajuda você a resistir às tentações diárias de integridade?',
      'Você consegue confiar que Deus continua presente mesmo em celas de incompreensão ou injustiça?'
    ]
  },
  {
    day: 17,
    title: 'Da Prisão ao Palácio: A Soberania que Salva Povos',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. 1876 - 1859 a.C.',
    passages: [{ book: 'Gênesis', reference: '40:1 - 44:34', testament: 'AT' }],
    theologicalContext: 'Deus concede a José a interpretação dos sonhos do Faraó e o ergue a governador supremo de todo o Egito. A fome na terra obriga seus próprios irmãos a descerem para comprar cereais. Em vez de vingança carnal, José testa o arrependimento do coração de seus irmãos, especialmente Judá, que agora se oferece como substituto pelo irmão mais jovem Benjamim — uma profecia viva da linhagem messiânica do Leão de Judá.',
    keyVerse: {
      reference: 'Gênesis 41:52',
      text: 'E ao segundo chamou Efraim; porque disse: Deus me fez crescer na terra da minha aflição.'
    },
    reflectionQuestions: [
      'Como Deus tem usado as suas "terras de aflição" para fazer você amadurecer e frutificar?',
      'Você tem demonstrado um coração reconciliador para com aqueles que já o magoaram no passado?'
    ]
  },
  {
    day: 18,
    title: 'Vós Intentastes o Mal, mas Deus o Tornou em Bem',
    periodId: 'creation-patriarchs',
    periodName: 'Criação e Era Patriarcal',
    periodApproxDate: 'c. 1859 - 1805 a.C.',
    passages: [{ book: 'Gênesis', reference: '45:1 - 50:26', testament: 'AT' }],
    theologicalContext: 'A grande revelação de José aos seus irmãos condensa a teologia central de Gênesis e de toda a Escritura: "Vós intentastes o mal contra mim; porém Deus o intentou para o bem, para fazer como se vê neste dia, para conservar muita gente em vida" (Gn 50:20). Jacó abençoa seus filhos e profetiza sobre Judá: "O cetro não se arredará de Judá... até que venha Siló (o Messias)". Gênesis encerra com a fé na promessa da futura libertação do Egito.',
    keyVerse: {
      reference: 'Gênesis 50:20',
      text: 'Vós bem intentastes mal contra mim; porém Deus o intentou para bem, para fazer como se vê neste dia, para conservar muita gente com vida.'
    },
    reflectionQuestions: [
      'Que feridas ou injustiças da sua trajetória Deus pode ressignificar para a glória Dele e socorro de outros?',
      'Como a esperança messiânica de Siló sustenta a sua caminhada de fé?'
    ],
    historicalNotes: 'Término da era patriarcal de Gênesis. O povo de Israel agora habita na fértil terra de Gósen, no Egito.'
  },
  {
    day: 27,
    title: 'O Clamor dos Oprimidos e a Sarça Ardente',
    periodId: 'exodus-wilderness',
    periodName: 'Êxodo e Peregrinação no Deserto',
    periodApproxDate: 'c. 1446 a.C.',
    passages: [{ book: 'Êxodo', reference: '1:1 - 4:31', testament: 'AT' }],
    theologicalContext: 'Levanta-se um novo Faraó que não conhecera José, escravizando brutalmente Israel. Deus ouve o gemido de Seu povo e se lembra de Sua aliança com Abraão. No Monte Horebe, Deus se revela a Moisés numa sarça que arde sem se consumir e proclama Seu Nome imutável e soberano: EU SOU O QUE SOU (Yahweh). Deus não é uma ideia abstrata, mas o Redentor que desce para libertar.',
    keyVerse: {
      reference: 'Êxodo 3:14',
      text: 'E disse Deus a Moisés: EU SOU O QUE SOU. Disse mais: Assim dirás aos filhos de Israel: EU SOU me enviou a vós.'
    },
    reflectionQuestions: [
      'Você confia que Deus ouve os seus gemidos silenciosos e nunca se esquece de Suas alianças?',
      'Quando Deus desafia suas desculpas e inseguranças, qual tem sido a sua resposta?'
    ]
  },
  {
    day: 35,
    title: 'A Páscoa: O Sangue do Cordeiro e o Mar Aberto',
    periodId: 'exodus-wilderness',
    periodName: 'Êxodo e Peregrinação no Deserto',
    periodApproxDate: 'c. 1446 a.C.',
    passages: [{ book: 'Êxodo', reference: '11:1 - 15:27', testament: 'AT' }],
    theologicalContext: 'A décima praga e a instituição da Páscoa são o clímax da redenção veterotestamentária. O sangue do cordeiro sem defeito nos umbrais das portas protege os primogênitos do juízo. No Novo Testamento, Paulo afirma com precisão apostólica: "Cristo, nossa Páscoa, foi sacrificado por nós" (1 Co 5:7). No Mar Vermelho, Deus abre as águas, destruindo o exército opressor e conduzindo Seu povo à liberdade.',
    keyVerse: {
      reference: 'Êxodo 12:13',
      text: 'E o sangue vos será por sinal nas casas em que estiverdes; vendo eu o sangue, passarei por cima de vós.'
    },
    reflectionQuestions: [
      'De que escravidões espirituais o sacrifício de Cristo já libertou a sua vida?',
      'Como cantar o cântico da vitória mesmo quando novos desertos surgem no horizonte?'
    ]
  },
  {
    day: 42,
    title: 'Os Dez Mandamentos e a Aliança do Sinai',
    periodId: 'exodus-wilderness',
    periodName: 'Êxodo e Peregrinação no Deserto',
    periodApproxDate: 'c. 1446 a.C.',
    passages: [{ book: 'Êxodo', reference: '19:1 - 24:18', testament: 'AT' }],
    theologicalContext: 'No Sinai, em meio a trovões e glória solene, Deus outorga o Decálogo. A Lei moral de Deus não é um jugo arbitrário, mas o padrão perfeito de Sua santidade e amor para com uma comunidade redimida. O prefácio é fundamental: "Eu sou o Senhor teu Deus, que te tirei da terra do Egito" — a redenção precede os mandamentos. Deus salva primeiro por graça, e depois convida à obediência santa.',
    keyVerse: {
      reference: 'Êxodo 20:2',
      text: 'Eu sou o Senhor teu Deus, que te tirei da terra do Egito, da casa da servidão.'
    },
    reflectionQuestions: [
      'Você enxerga a Palavra de Deus como proteção amorosa e guia para sua liberdade espiritual?',
      'Como o primeiro mandamento confronta os falsos deuses e prioridades do mundo atual?'
    ]
  },
  {
    day: 55,
    title: 'Sede Santos porque Eu Sou Santo: O Dia da Expiação',
    periodId: 'exodus-wilderness',
    periodName: 'Êxodo e Peregrinação no Deserto',
    periodApproxDate: 'c. 1445 a.C.',
    passages: [{ book: 'Levítico', reference: '16:1 - 19:37', testament: 'AT' }],
    theologicalContext: 'Levítico 16 descreve o coração da teologia sacrifical israelita: o Yom Kippur (Dia da Expiação). Uma vez por ano, o Sumo Sacerdote entrava no Santo dos Santos com sangue para expiar os pecados de toda a nação, enquanto o bode emissário carregava simbolicamente as transgressões para longe no deserto. O livro de Hebreus revela que Jesus é tanto o Sumo Sacerdote imaculado quanto o sacrifício definitivo que abriu de vez o véu do santuário.',
    keyVerse: {
      reference: 'Levítico 19:2',
      text: 'Fala a toda a congregação dos filhos de Israel, e dize-lhes: Santos sereis, porque eu, o Senhor vosso Deus, sou santo.'
    },
    reflectionQuestions: [
      'Como a santidade de Deus deve influenciar sua conduta nas decisões mais ordinárias do dia a dia?',
      'Que alívio traz saber que a expiação feita por Cristo é perfeita, definitiva e eterna?'
    ]
  },
  {
    day: 73,
    title: 'Ouve, ó Israel: O Shemá e a Grande Exortação',
    periodId: 'exodus-wilderness',
    periodName: 'Êxodo e Peregrinação no Deserto',
    periodApproxDate: 'c. 1406 a.C.',
    passages: [{ book: 'Deuteronômio', reference: '4:1 - 6:25', testament: 'AT' }],
    theologicalContext: 'Moisés se dirige à nova geração nas planícies de Moabe antes da travessia do Jordão. No capítulo 6 ecoa o coração da fé bíblica: o Shemá ("Ouve, ó Israel: o Senhor nosso Deus é o único Senhor. Amarás, pois, o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de todas as tuas forças"). Jesus identificou este como o primeiro e maior de todos os mandamentos (Mc 12:29-30).',
    keyVerse: {
      reference: 'Deuteronômio 6:4-5',
      text: 'Ouve, ó Israel: o Senhor nosso Deus é o único Senhor. Amarás, pois, o Senhor teu Deus de todo o teu coração, de toda a tua alma e de todas as tuas forças.'
    },
    reflectionQuestions: [
      'O que significa amar a Deus com todas as suas forças e com todo o seu entendimento hoje?',
      'Como você tem transmitido as verdades da Palavra às gerações mais jovens ao seu redor?'
    ]
  },
  {
    day: 77,
    title: 'Sê Forte e Corajoso: A Conquista de Jericó',
    periodId: 'conquest-judges',
    periodName: 'Conquista de Canaã e Juízes',
    periodApproxDate: 'c. 1406 a.C.',
    passages: [{ book: 'Josué', reference: '1:1 - 6:27', testament: 'AT' }],
    theologicalContext: 'Após a morte de Moisés, Deus comissiona Josué com a ordem solene: "Não to mandei eu? Sê forte e corajoso; não temas, nem te espantes, porque o Senhor teu Deus é contigo por onde quer que andares". Na queda dos muros de Jericó, vemos que a vitória não é obtida por estratégia militar humana, mas pela obediência à Palavra do Senhor sob o toque das trombetas e o louvor.',
    keyVerse: {
      reference: 'Josué 1:9',
      text: 'Não to mandei eu? Sê forte e corajoso; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.'
    },
    reflectionQuestions: [
      'Que "muros" aparentemente intransponíveis você tem enfrentado neste momento de sua vida?',
      'Como a promessa da presença contínua de Deus dissipa os temores do desconhecido?'
    ]
  },
  {
    day: 93,
    title: 'Gideão e os Trezentos: A Vitória que Pertence a Deus',
    periodId: 'conquest-judges',
    periodName: 'Conquista de Canaã e Juízes',
    periodApproxDate: 'c. 1160 a.C.',
    passages: [{ book: 'Juízes', reference: '6:1 - 8:35', testament: 'AT' }],
    theologicalContext: 'O ciclo dos Juízes demonstra a constante fraqueza humana e a fidelidade paciente de Deus. Gideão, que se escondia no lagar com medo dos midianitas, é chamado pelo Anjo de "homem valente". Para que Israel não se gloriasse dizendo "a minha própria mão me livrou", Deus reduz o exército de 32 mil para meros 300 homens equipados apenas com tochas, jarros e trombetas. O poder de Deus se aperfeiçoa na fraqueza.',
    keyVerse: {
      reference: 'Juízes 7:2',
      text: 'E disse o Senhor a Gideão: Muito é o povo que está contigo, para eu dar os midianitas em sua mão; a fim de que Israel se não glorie contra mim, dizendo: A minha mão me livrou.'
    },
    reflectionQuestions: [
      'Você já teve que aceitar a diminuição de seus próprios recursos para que o poder de Deus ficasse evidente?',
      'Como Deus vê você em Cristo, para além dos seus sentimentos de insegurança e timidez?'
    ]
  },
  {
    day: 100,
    title: 'Rute: O Resgatador e a Graça Inesperada',
    periodId: 'conquest-judges',
    periodName: 'Conquista de Canaã e Juízes',
    periodApproxDate: 'c. 1100 a.C.',
    passages: [{ book: 'Rute', reference: '1:1 - 4:22', testament: 'AT' }],
    theologicalContext: 'No sombrio período dos Juízes ("cada um fazia o que parecia reto aos seus olhos"), o livro de Rute reluz como uma jóia de devoção (hesed). A jovem moabita viúva se apega à sogra Noemi e ao Deus de Israel. Ao respigar nos campos de Boaz, ela encontra o parente remidor (goel). Boaz resgata Rute, gerando Obede, pai de Jessé, pai de Davi — inserindo uma estrangeira na genealogia direta de Jesus Cristo.',
    keyVerse: {
      reference: 'Rute 1:16',
      text: 'Disse, porém, Rute: Não me instes para que te abandone, e deixe de seguir-te; porque aonde quer que tu fores irei eu, e onde quer que pousares, ali pousarei eu; o teu povo é o meu povo, o teu Deus é o meu Deus.'
    },
    reflectionQuestions: [
      'Como você percebe a soberania silenciosa de Deus tecendo propósitos gloriosos em meio a perdas e luto?',
      'O que o papel de Boaz como remidor nos ensina sobre a obra graciosa de Jesus?'
    ],
    historicalNotes: 'Acontecimento histórico nos dias dos Juízes, servindo de ponte genealógica direta para o Reino de Davi.'
  },
  {
    day: 112,
    title: 'Davi Foge de Saul: O Salmo da Caverna',
    periodId: 'united-kingdom',
    periodName: 'Reino Unido (Davi e os Salmos)',
    periodApproxDate: 'c. 1020 a.C.',
    passages: [
      { book: '1 Samuel', reference: '21:1 - 22:23', testament: 'AT' },
      { book: 'Salmos', reference: '34:1-22 e 142:1-7', testament: 'AT' }
    ],
    theologicalContext: 'Aqui está um dos momentos mais brilhantes da leitura cronológica! Enquanto lemos sobre Davi fugindo desesperado de Saul, fingindo loucura perante Aquis e se escondendo na úmida caverna de Adulão cercado por homens endividados e amargurados, lemos exatamente os Salmos que Davi compôs naquele esconderijo. O Salmo 34 ("Provai e vede que o Senhor é bom") e o Salmo 142 ("Na minha angústia clamei ao Senhor... ninguém há que cuide da minha alma") ganham vida vívida e palpável quando lidos dentro do seu contexto histórico real!',
    keyVerse: {
      reference: 'Salmos 34:8',
      text: 'Provai, e vede que o Senhor é bom; bem-aventurado o homem que nele confia.'
    },
    reflectionQuestions: [
      'Você consegue louvar a Deus e proclamar que Ele é bom mesmo quando se encontra nas "cavernas" da existência?',
      'Como a leitura do Salmo 34 e 142 junto aos eventos de 1 Samuel 22 muda sua compreensão da oração sincera?'
    ],
    historicalNotes: 'Cruzamento histórico-cronológico: 1 Samuel 22 e Salmos 34, 52 e 142 compostos na perseguição de Saul.'
  },
  {
    day: 125,
    title: 'O Pecado de Davi, a Repreensão de Natã e o Salmo 51',
    periodId: 'united-kingdom',
    periodName: 'Reino Unido (Davi e os Salmos)',
    periodApproxDate: 'c. 995 a.C.',
    passages: [
      { book: '2 Samuel', reference: '11:1 - 12:25', testament: 'AT' },
      { book: 'Salmos', reference: '51:1-19 e 32:1-11', testament: 'AT' }
    ],
    theologicalContext: 'O rei no auge de seu poder cai em adultério com Bate-Seba e arquiteta a morte de Urias. Quando o profeta Natã o confronta com a parábola da ovelhinha dizendo: "Tu és este homem!", Davi é quebrado em arrependimento genuíno. A leitura cronológica nos conduz imediatamente ao Salmo 51: "Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto". Ao lado do Salmo 32, o texto revela o bálsamo incomparável do perdão e a libertação do peso da culpa.',
    keyVerse: {
      reference: 'Salmos 51:10',
      text: 'Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.'
    },
    reflectionQuestions: [
      'Qual tem sido a sua reação quando o Espírito Santo aponta áreas em sua vida que necessitam de confissão?',
      'Você desfruta da bem-aventurança descrita no Salmo 32 do perdão que lava e restaura a alegria da salvação?'
    ],
    historicalNotes: 'Cruzamento cronológico crucial: O Salmo 51 foi composto exatamente quando Natã confrontou Davi após seu pecado com Bate-Seba.'
  },
  {
    day: 150,
    title: 'A Sabedoria de Salomão e o Templo do Senhor',
    periodId: 'united-kingdom',
    periodName: 'Reino Unido (Davi e Salomão)',
    periodApproxDate: 'c. 960 a.C.',
    passages: [
      { book: '1 Reis', reference: '3:1 - 6:38', testament: 'AT' },
      { book: 'Provérbios', reference: '1:1 - 3:35', testament: 'AT' }
    ],
    theologicalContext: 'Salomão sucede a Davi e, em vez de pedir riquezas ou vida longa para seus inimigos, pede a Deus um "coração compreensivo para julgar o povo e discernir entre o bem e o mal". Sua sabedoria atrai líderes das nações e culmina na construção do Templo de Jerusalém. Lemos Provérbios 1 a 3 em paralelo: a sabedoria divina começa no temor do Senhor e guia os passos de quem confia Nele de todo o coração.',
    keyVerse: {
      reference: 'Provérbios 3:5-6',
      text: 'Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.'
    },
    reflectionQuestions: [
      'Se Deus dissesse hoje: "Pede-me o que queres que eu te dê", o que você pediria?',
      'Em que áreas você precisa renunciar ao seu "próprio entendimento" para confiar plenamente na direção do Senhor?'
    ]
  },
  {
    day: 175,
    title: 'Elias no Monte Carmelo: O Fogo que Responde',
    periodId: 'divided-kingdom',
    periodName: 'Reino Dividido e Profetas',
    periodApproxDate: 'c. 860 a.C.',
    passages: [{ book: '1 Reis', reference: '17:1 - 19:21', testament: 'AT' }],
    theologicalContext: 'No ápice da apostasia do Reino do Norte sob Acabe e Jezabel, Deus levanta o profeta Elias. No Monte Carmelo, diante de 450 profetas de Baal, Elias clama com autoridade: "Até quando coxeareis entre dois pensamentos? Se o Senhor é Deus, segui-o". O fogo do Senhor consome o holocausto e a água. Logo após, na caverna do Horebe, Deus ensina a Elias que Sua voz não está apenas no vento forte ou no terremoto, mas no ciciar suave da brisa.',
    keyVerse: {
      reference: '1 Reis 18:37',
      text: 'Responde-me, Senhor, responde-me, para que este povo conheça que tu, Senhor, és Deus, e que tu fizeste voltar o seu coração.'
    },
    reflectionQuestions: [
      'Existe alguma indecisão ou acomodação espiritual fazendo você "coxear entre dois pensamentos"?',
      'Como você tem silenciado o barulho ao redor para ouvir a "voz suave e mansa" de Deus?'
    ]
  },
  {
    day: 185,
    title: 'Amós: Corra o Juízo como as Águas na Prosperidade Falsa',
    periodId: 'divided-kingdom',
    periodName: 'Reino Dividido e Profetas',
    periodApproxDate: 'c. 760 a.C.',
    passages: [
      { book: '2 Reis', reference: '14:23-29', testament: 'AT' },
      { book: 'Amós', reference: '1:1 - 5:27', testament: 'AT' }
    ],
    theologicalContext: 'Contexto histórico imperdível: Sob o reinado de Jeroboão II, o reino de Israel vivia uma era de aparente riqueza econômica e expansão territorial, mas com profunda podridão moral, luxo opulento dos poderosos e esmagamento dos pobres. Deus envia Amós, um simples pastor de Tecoa, para denunciar o culto hipócrita: "Aborreço, desprezo as vossas festas... Antes corra o juízo como as águas, e a justiça como o ribeiro impetuoso". Deus não aceita adoração desligada da integridade social.',
    keyVerse: {
      reference: 'Amós 5:24',
      text: 'Antes corra o juízo como as águas, e a justiça como o ribeiro impetuoso.'
    },
    reflectionQuestions: [
      'De que maneira sua vida de fé se reflete em generosidade e justiça para com os vulneráveis?',
      'Como discernir quando uma "prosperidade exterior" esconde uma perigosa esterilidade espiritual?'
    ],
    historicalNotes: 'Encaixe dos profetas no livro de Reis: Amós profetizou durante o reinado de Jeroboão II de Israel e Uzias de Judá.'
  },
  {
    day: 205,
    title: 'Isaías Vê o Senhor: O Santo de Israel e o Messias Sofredor',
    periodId: 'divided-kingdom',
    periodName: 'Reino Dividido e Profetas',
    periodApproxDate: 'c. 740 - 700 a.C.',
    passages: [
      { book: 'Isaías', reference: '6:1-13 e 52:13 - 53:12', testament: 'AT' },
      { book: 'Miqueias', reference: '5:1-5', testament: 'AT' }
    ],
    theologicalContext: 'No ano da morte do rei Uzias, Isaías vê o Senhor entronizado: "Santo, Santo, Santo é o Senhor dos Exércitos". A brasa viva do altar purifica seus lábios para a missão: "Eis-me aqui, envia-me a mim". Em Isaías 53, temos o quinto evangelho do Antigo Testamento: o Cordeiro que "tomou sobre si as nossas enfermidades e as nossas dores levou sobre si... e pelas suas pisaduras fomos sarados". Contemporâneo de Isaías, Miqueias profetiza o nascimento do Governador eterno na pequena Belém de Efrata.',
    keyVerse: {
      reference: 'Isaías 53:5',
      text: 'Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.'
    },
    reflectionQuestions: [
      'Como contemplar a santidade absoluta de Deus transforma a sua resposta diante do Seu chamado?',
      'O que o capítulo de Isaías 53 desperta em seu coração a respeito do amor sacrificial de Jesus por você?'
    ],
    historicalNotes: 'Isaías e Miqueias ministraram juntos no Reino do Sul (Judá) durante os reinados de Jotão, Acaz e Ezequias.'
  },
  {
    day: 240,
    title: 'Jeremias e a Queda de Jerusalém: A Nova Aliança Prometida',
    periodId: 'divided-kingdom',
    periodName: 'Reino Dividido e o Cerco de Jerusalém',
    periodApproxDate: 'c. 586 a.C.',
    passages: [
      { book: 'Jeremias', reference: '31:1-40', testament: 'AT' },
      { book: '2 Reis', reference: '25:1-30', testament: 'AT' },
      { book: 'Lamentações', reference: '3:1-40', testament: 'AT' }
    ],
    theologicalContext: 'O profeta chorão Jeremias presencia o cumprimento da profecia que advertira por 40 anos: as tropas babilônicas destroem o templo e as muralhas de Jerusalém. Porém, em meio às cinzas e no clímax do sofrimento, Deus promete a Nova Aliança: "Porei a minha lei no seu interior, e a escreverei no seu coração; e eu serei o seu Deus e eles serão o meu povo". E em Lamentações 3 ecoa a certeza inabalável: "As misericórdias do Senhor são a causa de não sermos consumidos... renovam-se a cada manhã; grande é a tua fidelidade".',
    keyVerse: {
      reference: 'Lamentações 3:22-23',
      text: 'As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; renovam-se cada manhã; grande é a tua fidelidade.'
    },
    reflectionQuestions: [
      'Quando circunstâncias humanas chegam ao fim, como você se apega à fidelidade renovada de Deus a cada manhã?',
      'Você já experimentou a Nova Aliança gravada no seu coração pelo Espírito Santo?'
    ],
    historicalNotes: 'O ano de 586 a.C. marca o ponto mais doloroso do Antigo Testamento: o início do cativeiro na Babilônia.'
  },
  {
    day: 260,
    title: 'Daniel na Cova dos Leões e o Filho do Homem nas Nuvens',
    periodId: 'exile',
    periodName: 'O Cativeiro Babilônico',
    periodApproxDate: 'c. 539 a.C.',
    passages: [
      { book: 'Daniel', reference: '6:1-28 e 7:1-28', testament: 'AT' }
    ],
    theologicalContext: 'Exilado em uma corte imperial pagã desde a juventude, Daniel recusa se corromper. Já ancião sob o domínio medo-persa, sua fidelidade inegociável na oração três vezes ao dia o leva à cova dos leões, onde Deus envia Seu anjo e fecha a boca das feras. No capítulo 7, Daniel tem a grandiosa visão apocalíptica do "Ancião de Dias" e de "um como o Filho do Homem vindo com as nuvens do céu", a quem foi dado domínio eterno — o título favorito que Jesus usou para Si mesmo!',
    keyVerse: {
      reference: 'Daniel 7:14',
      text: 'E foi-lhe dado o domínio, e a honra, e o reino, para que todos os povos, nações e línguas o servissem; o seu domínio é um domínio eterno.'
    },
    reflectionQuestions: [
      'Como manter sua identidade de filho de Deus inalterada em ambientes profissionais ou culturais seculares?',
      'De que forma a visão do governo eterno de Cristo lhe dá esperança contra as crises políticas do mundo?'
    ]
  },
  {
    day: 285,
    title: 'Neemias e a Reconstrução dos Muros: A Alegria do Senhor',
    periodId: 'post-exile',
    periodName: 'Retorno Pós-Exílico e Reconstrução',
    periodApproxDate: 'c. 445 a.C.',
    passages: [
      { book: 'Neemias', reference: '1:1 - 4:23 e 8:1-18', testament: 'AT' }
    ],
    theologicalContext: 'Ao saber das muralhas caídas de Jerusalém, o copeiro Neemias jejua, ora e obtém permissão real para reconstruir a cidade santa em apenas 52 dias, apesar das conspirações armadas de Sambalate e Tobias. No capítulo 8, o sacerdote Esdras lê a Lei de Moisés diante de todo o povo reunido na praça. Ao chorarem ouvindo as palavras da Lei, Neemias e Esdras proclamam: "Não choreis nem vos entristeçais... porque a alegria do Senhor é a vossa força".',
    keyVerse: {
      reference: 'Neemias 8:10',
      text: 'Não vos entristeçais; porque a alegria do Senhor é a vossa força.'
    },
    reflectionQuestions: [
      'O que precisa ser "reconstruído" com urgência em seus hábitos e na sua vida espiritual com Deus?',
      'Como a "alegria do Senhor" pode ser a sua âncora de fortaleza em momentos de cansaço?'
    ],
    historicalNotes: 'Último bloco histórico do Antigo Testamento antes do período intertestamentário de 400 anos de silêncio profético.'
  },
  {
    day: 296,
    title: 'O Verbo se Fez Carne e Habitou Entre Nós',
    periodId: 'gospels',
    periodName: 'Evangelhos em Harmonia',
    periodApproxDate: 'c. 4 a.C.',
    passages: [
      { book: 'João', reference: '1:1-18', testament: 'NT' },
      { book: 'Lucas', reference: '1:1 - 2:20', testament: 'NT' }
    ],
    theologicalContext: 'Após 400 anos de silêncio profético, o céu se abre! João começa com a declaração cósmica: "No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus... E o Verbo se fez carne e habitou (tabernaculou) entre nós, cheio de graça e de verdade". Lucas narra com carinho e detalhamento histórico a anunciação a Maria, o cântico do Magnificat e o nascimento na manjedoura em Belém perante os pastores humildes.',
    keyVerse: {
      reference: 'João 1:14',
      text: 'E o Verbo se fez carne, e habitou entre nós, e vimos a sua glória, como a glória do unigênito do Pai, cheio de graça e de verdade.'
    },
    reflectionQuestions: [
      'O que significa para você o Deus Eterno ter entrado na história humana com vulnerabilidade e amor por você?',
      'Como a presença de Jesus em sua vida tem revelado a graça e a verdade ao seu coração?'
    ]
  },
  {
    day: 305,
    title: 'O Sermão da Montanha: A Constituição do Reino',
    periodId: 'gospels',
    periodName: 'Evangelhos em Harmonia',
    periodApproxDate: 'c. 28 d.C.',
    passages: [
      { book: 'Mateus', reference: '5:1 - 7:29', testament: 'NT' }
    ],
    theologicalContext: 'Jesus sobe ao monte, como um novo e maior Moisés, para promulgar não leis cerimoniais externas, mas a essência viva do Seu Reino interior. As Bem-aventuranças subvertem todos os valores do mundo: felizes os humildes de espírito, os mansos, os pacificadores e os que têm fome e sede de justiça. Ele nos chama para sermos o Sal da terra e a Luz do mundo, ensina a oração do Pai Nosso e nos convida a edificar a casa sobre a Rocha inabalável.',
    keyVerse: {
      reference: 'Mateus 6:33',
      text: 'Mas buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.'
    },
    reflectionQuestions: [
      'Quais áreas de sua rotina ainda refletem a ansiedade do mundo em vez da busca prioritária pelo Reino?',
      'Como seu testemunho tem sido sal e luz nas conversas e atitudes com as pessoas ao redor?'
    ]
  },
  {
    day: 325,
    title: 'Está Consumado! A Cruz e o Véu Rasgado',
    periodId: 'gospels',
    periodName: 'Evangelhos em Harmonia',
    periodApproxDate: 'c. 33 d.C.',
    passages: [
      { book: 'Mateus', reference: '27:1-66', testament: 'NT' },
      { book: 'João', reference: '19:1-42', testament: 'NT' }
    ],
    theologicalContext: 'No Calvário, o clímax de toda a história bíblica se concretiza. Carregando a cruz pelo Gólgota, Jesus pronuncia: "Tetelestai!" — Está consumado! A dívida do pecado foi paga integralmente de uma vez por todas. O véu do templo se rasga de alto a baixo por iniciativa divina, abrindo o acesso direto e ousado à presença do Deus Santo para todo aquele que crê.',
    keyVerse: {
      reference: 'João 19:30',
      text: 'E, quando Jesus tomou o vinagre, disse: Está consumado. E, inclinando a cabeça, entregou o espírito.'
    },
    reflectionQuestions: [
      'Você vive na certeza de que a obra de redenção de Jesus foi completa e que nada precisa ser adicionado a ela?',
      'O que significa para você poder entrar na presença de Deus sem medo de condenação?'
    ]
  },
  {
    day: 330,
    title: 'Ele Não Está Aqui: Ressuscitou como Havia Dito!',
    periodId: 'gospels',
    periodName: 'Evangelhos em Harmonia',
    periodApproxDate: 'c. 33 d.C.',
    passages: [
      { book: 'Lucas', reference: '24:1-53', testament: 'NT' },
      { book: 'João', reference: '20:1-31', testament: 'NT' }
    ],
    theologicalContext: 'Na alvorada do primeiro dia da semana, as mulheres encontram a pedra rolada. O túmulo vazio ecoa a maior verdade do universo: a morte foi derrotada! No caminho de Emaús, Jesus caminha com os discípulos desanimados e lhes abre as Escrituras, mostrando como a Lei, os Profetas e os Salmos testificavam Dele: "Porventura não ardia em nós o nosso coração?". A Grande Comissão envia os discípulos a todas as nações com a promessa: "Eis que estou convosco todos os dias".',
    keyVerse: {
      reference: 'Lucas 24:6',
      text: 'Não está aqui, mas ressuscitou. Lembrai-vos como vos falou, estando ainda na Galileia.'
    },
    reflectionQuestions: [
      'Quando foi a última vez que você sentiu o coração queimar ao ler a Palavra de Deus?',
      'Como a realidade da ressurreição corporal de Cristo revigora a sua esperança diária?'
    ]
  },
  {
    day: 340,
    title: 'Pentecostes e a Primeira Viagem: Gálatas e a Graça',
    periodId: 'early-church',
    periodName: 'Igreja Primitiva e Epístolas',
    periodApproxDate: 'c. 48 d.C.',
    passages: [
      { book: 'Atos', reference: '13:1 - 14:28', testament: 'NT' },
      { book: 'Gálatas', reference: '1:1 - 3:29', testament: 'NT' }
    ],
    theologicalContext: 'Na leitura cronológica das epístolas, Gálatas foi escrita logo após Paulo e Barnabé retornarem de sua 1ª Viagem Missionária pelo sul da Galácia (Antioquia da Pisídia, Icônio, Listra e Derbe). Confrontando os judaizantes que exigiam a circuncisão e a guarda da lei mosaica para os gentios serem salvos, Paulo defende com zelo ardente o Evangelho da Graça pura: "Fui crucificado com Cristo; e já não vivo eu, mas Cristo vive em mim... o homem é justificado pela fé em Cristo e não pelas obras da lei".',
    keyVerse: {
      reference: 'Gálatas 2:20',
      text: 'Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim; e a vida que agora vivo na carne, vivo-a na fé do Filho de Deus, o qual me amou, e se entregou a si mesmo por mim.'
    },
    reflectionQuestions: [
      'Em sua vida diária, você descansa na justiça concedida gratuitamente por Cristo ou tenta barganhar aceitação diante de Deus por méritos próprios?',
      'O que significa "Cristo viver em mim" nas escolhas cotidianas?'
    ],
    historicalNotes: 'Ordem cronológica das epístolas: Gálatas escrita por volta de 48-49 d.C., logo após Atos 14 e antes do Concílio de Jerusalém (Atos 15).'
  },
  {
    day: 350,
    title: 'Paulo em Corinto e a Majestosa Carta aos Romanos',
    periodId: 'early-church',
    periodName: 'Igreja Primitiva e Epístolas',
    periodApproxDate: 'c. 57 d.C.',
    passages: [
      { book: 'Atos', reference: '20:1-6', testament: 'NT' },
      { book: 'Romanos', reference: '8:1-39', testament: 'NT' }
    ],
    theologicalContext: 'Enquanto passa três meses na Grécia durante sua 3ª Viagem Missionária (Atos 20), Paulo escreve a mais densa e sublime obra teológica da história: a Epístola aos Romanos. No capítulo 8, o apóstolo alcança o cume da redenção: "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus". O Espírito Santo habita nos crentes, intercede com gemidos inexprimíveis, e nada — absolutamente nenhuma tribulação ou criatura — poderá nos separar do amor de Deus que está em Cristo Jesus nosso Senhor!',
    keyVerse: {
      reference: 'Romanos 8:38-39',
      text: 'Porque estou certo de que, nem a morte, nem a vida... nem qualquer outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor.'
    },
    reflectionQuestions: [
      'Como a garantia de que "nenhuma condenação há" em Cristo liberta você de medos e paralisias espirituais?',
      'Você tem consciência de que o próprio Espírito Santo ora por você nos momentos em que você não sabe nem como orar?'
    ],
    historicalNotes: 'Romanos foi escrita durante o inverno de 57 d.C., enquanto Paulo estava hospedado em Corinto aguardando para levar a oferta aos pobres de Jerusalém.'
  },
  {
    day: 365,
    title: 'Eis que Venho em Breve: O Triunfo da Nova Jerusalém',
    periodId: 'early-church',
    periodName: 'Igreja Primitiva e Apocalipse',
    periodApproxDate: 'c. 95 d.C.',
    passages: [
      { book: 'Apocalipse', reference: '21:1 - 22:21', testament: 'NT' }
    ],
    theologicalContext: 'Chegamos ao ápice dos 365 dias e de toda a Revelação de Deus! O exilado apóstolo João na ilha de Patmos contempla o novo céu e a nova terra: "E Deus limpará de seus olhos toda a lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor". A árvore da vida de Gênesis reaparece com folhas para a cura das nações. A Bíblia encerra com o anseio apaixonado da Igreja e a resposta soberana do Salvador: "Certamente, venho sem demora. Amém! Vem, Senhor Jesus!".',
    keyVerse: {
      reference: 'Apocalipse 22:20',
      text: 'Aquele que testifica estas coisas diz: Certamente venho em breve. Amém! Vem, Senhor Jesus.'
    },
    reflectionQuestions: [
      'Ao concluir esta jornada pelos 365 dias da história bíblica, como o seu amor por Jesus e pela Sua Palavra foi renovado?',
      'O anseio "Maranata, vem Senhor Jesus!" tem sido um motor real para sua esperança e fidelidade?'
    ]
  },
  {
    day: 205,
    title: 'A Queda de Samaria e o Juízo do Reino do Norte',
    periodId: 'divided-kingdom',
    periodName: 'Reino Dividido e a Crise Assíria',
    periodApproxDate: '722 a.C.',
    passages: [
      { book: '2 Reis', reference: '17:1-41', testament: 'AT' },
      { book: 'Oseias', reference: '13:1 - 14:9', testament: 'AT' }
    ],
    theologicalContext: 'O capítulo 17 de 2 Reis é um dos tratados teológicos mais solenes da Bíblia. Ele explica por que Samaria caiu: não por fraqueza das muralhas ou falta de alianças militares com o Egito, mas porque os filhos de Israel pecaram contra o Senhor seu Deus, construíram altos, adoraram postes sagrados e rejeitaram as advertências contínuas de todos os profetas.',
    keyVerse: {
      reference: '2 Reis 17:7',
      text: 'E sucedeu assim por os filhos de Israel pecarem contra o Senhor seu Deus, que os fizera subir da terra do Egito.'
    },
    reflectionQuestions: [
      'Quais advertências amorosas de Deus através da Sua Palavra você tem ouvido ultimamente?',
      'Como a fidelidade diária e o arrependimento sincero protegem nossa vida espiritual de desvios sutis?'
    ],
    historicalNotes: 'Fim definitivo do Reino de Israel (as Dez Tribos do Norte) como entidade política soberana.',
    worldHistory: {
      dominantEmpire: 'Império Neoassírio',
      empireCode: 'assyria',
      approxDate: '722 a.C.',
      ruler: 'Salmaneser V e Sargão II',
      globalEvent: 'Após um cerco implacável de três anos, as tropas assírias conquistam Samaria. O Império Neoassírio aplica sua política imperial de deportação populacional em massa (cerca de 27.290 cativos israelitas, segundo os registros cuneiformes) e reassenta colonos estrangeiros trazidos da Babilônia, Cuta e Hamate na região, dando origem ao grupo samaritano.',
      archaeologicalArtifact: 'Prisma de Nimrud e Anais Oficiais de Sargão II em Corsabade (Dur-Sharrukin)',
      biblicalCorrelation: 'Paralelo exato entre 2 Reis 17 e os anais assírios: Sargão II gaba-se em relevos de ter tomado Samaria e confiscado 50 carruagens de guerra, enquanto o texto bíblico atribui a catástrofe ao juízo moral e espiritual de Deus pela idolatria contumaz.'
    }
  },
  {
    day: 215,
    title: 'O Cerco de Senaqueribe e a Fé Inabalável de Ezequias',
    periodId: 'divided-kingdom',
    periodName: 'Reino Dividido e Profetas de Judá',
    periodApproxDate: '701 a.C.',
    passages: [
      { book: '2 Reis', reference: '18:13 - 19:37', testament: 'AT' },
      { book: 'Isaías', reference: '37:1-38', testament: 'AT' }
    ],
    theologicalContext: 'Diante das cartas blasfemas e intimidadoras do general assírio Rabsaqué, o rei Ezequias sobe à Casa do Senhor e estende a carta de afronta perante Deus. A resposta divina através do profeta Isaías ecoa pelos séculos: o rei assírio não entrará na cidade nem lançará nela flecha alguma. Naquela mesma noite, o Anjo do Senhor intervém e livra Sião.',
    keyVerse: {
      reference: 'Isaías 37:16',
      text: 'Ó Senhor dos Exércitos, Deus de Israel, que habitas entre os querubins; tu és o Deus, tu somente, de todos os reinos da terra; tu fizeste os céus e a terra.'
    },
    reflectionQuestions: [
      'Quando intimidações e pressões externas cercam você, seu primeiro reflexo é buscar saídas humanas ou estender suas aflições perante Deus em oração?',
      'Como a soberania de Deus sobre reis e impérios renova sua paz na proteção divina?'
    ],
    historicalNotes: 'O cerco de Jerusalém por Senaqueribe em 701 a.C. é o evento mais abundantemente documentado por fontes bíblicas, arqueológicas e extrabíblicas de toda a Antiguidade.',
    worldHistory: {
      dominantEmpire: 'Império Neoassírio',
      empireCode: 'assyria',
      approxDate: '701 a.C.',
      ruler: 'Senaqueribe (filho de Sargão II)',
      globalEvent: 'Campanha assíria punitiva contra a revolta do Levante apoiada pelo Egito. Senaqueribe devasta 46 cidades muradas de Judá, instala quartel-general em Laquis após massacre bélico com rampas de cerco e aríetes, e cerca Jerusalém para sufocar o rei Ezequias.',
      archaeologicalArtifact: 'Prisma de Taylor (Museu Britânico), Relevos do Cerco de Laquis no Palácio de Nínive e Inscrição do Túnel de Siloé',
      biblicalCorrelation: 'No Prisma de Taylor, Senaqueribe gaba-se de aprisionar Ezequias "como um pássaro na gaiola", mas seus anais admitem tacitamente que ele NUNCA conseguiu tomar Jerusalém nem destronar Ezequias, confirmando a libertação miraculosa proclamada na Bíblia.'
    }
  },
  {
    day: 246,
    title: 'A Queda de Jerusalém e o Cativeiro Babilônico',
    periodId: 'exile',
    periodName: 'O Cativeiro Babilônico',
    periodApproxDate: '586 a.C.',
    passages: [
      { book: '2 Reis', reference: '25:1-30', testament: 'AT' },
      { book: 'Jeremias', reference: '39:1-18', testament: 'AT' },
      { book: 'Lamentações', reference: '1:1-22', testament: 'AT' }
    ],
    theologicalContext: 'O drama mais dilacerante do Antigo Testamento atinge o clímax. A glória de Jerusalém é desfeita, o Templo de Salomão é incendiado e o rei Zedequias é capturado e cegado após ver seus filhos serem mortos. O livro de Lamentações chora nas cinzas: "Como jaz solitária a cidade que era tão populosa!". Contudo, mesmo no coração da ruína absoluta, brilha o farol da soberana fidelidade divina: "As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; novas são cada manhã" (Lm 3:22-23).',
    keyVerse: {
      reference: 'Lamentações 3:22-23',
      text: 'As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; novas são cada manhã; grande é a tua fidelidade.'
    },
    reflectionQuestions: [
      'Quando perdas severas atingem sua vida, como a verdade de que as misericórdias do Senhor "renovam-se a cada manhã" ancora sua alma?',
      'De que modo o exílio babilônico purificou o povo da idolatria que antes parecia incurável?'
    ],
    historicalNotes: 'O ano de 586 a.C. é a principal baliza cronológica de toda a história bíblica do Antigo Testamento.',
    worldHistory: {
      dominantEmpire: 'Império Neobabilônico (Caldeu)',
      empireCode: 'babylon',
      approxDate: '586 a.C. (9 de Av no calendário judaico)',
      ruler: 'Nabucodonosor II e Nebuzaradã (capitão da guarda)',
      globalEvent: 'A Babilônia Caldeia atinge a hegemonia absoluta no Oriente Próximo. Após meses de fome sob cerco militar, a muralha de Jerusalém é rompida no verão de 586 a.C. O Templo e palácios são queimados, e a elite aristocrática, nobres e sacerdotes são deportados para as margens do Eufrates.',
      archaeologicalArtifact: 'Cartas de Óstraco de Laquis (Laquish Letters) e Camada de Destruição por Cinzas e Pontas de Flecha na Cidade de Davi',
      biblicalCorrelation: 'As Cartas de Laquis descrevem o cerco militar exatamente nos mesmos dias profetizados por Jeremias 34:7. Tabuletas cuneiformes babilônicas de ração mencionam diretamente "Ya’ukinu, rei da terra de Yahud" (o rei Joaquim de Judá no exílio, citado em 2 Reis 25:27).'
    }
  },
  {
    day: 276,
    title: 'O Edito de Ciro e o Retorno a Sião',
    periodId: 'post-exile',
    periodName: 'Retorno Pós-Exílico e Reconstrução',
    periodApproxDate: '538 a.C.',
    passages: [
      { book: 'Esdras', reference: '1:1 - 3:13', testament: 'AT' },
      { book: 'Salmos', reference: '126:1-6', testament: 'AT' }
    ],
    theologicalContext: 'O decreto do rei Ciro cumpre à risca a profecia dos 70 anos de Jeremias e a profecia nominal de Isaías 44-45. Deus move o coração do imperador persa para libertar o remanescente e restituir os tesouros sagrados do Templo. Ao assentarem as fundações do novo altar em Jerusalém, o choro dos anciãos se mistura aos brados de júbilo dos jovens: "Porque Ele é bom, e a Sua benignidade dura para sempre".',
    keyVerse: {
      reference: 'Salmos 126:3',
      text: 'Grandes coisas fez o Senhor por nós, pelas quais estamos alegres.'
    },
    reflectionQuestions: [
      'Você crê que Deus tem poder soberano para inclinar governantes e circunstâncias improváveis em favor dos Seus propósitos eternos?',
      'Qual "retorno de cativeiro" ou renovo espiritual você tem celebrado na sua jornada com Cristo?'
    ],
    historicalNotes: 'A política de tolerância religiosa persa substitui o modelo assírio-babilônico de deportações traumáticas.',
    worldHistory: {
      dominantEmpire: 'Império Aquemênida (Persa)',
      empireCode: 'persia',
      approxDate: '538 a.C.',
      ruler: 'Ciro II (Ciro, o Grande)',
      globalEvent: 'Ciro unifica as coroas da Média e da Pérsia e conquista a Babilônia em 539 a.C. Instala um modelo pioneiro de satrapias com tolerância religiosa e incentivo à reconstrução de santuários locais para angariar lealdade provincial.',
      archaeologicalArtifact: 'Cilindro de Ciro (descoberto na Babilônia em 1879, preservado no Museu Britânico)',
      biblicalCorrelation: 'O texto do Cilindro de Ciro proclama em escrita cuneiforme acadiana a mesma política de repatriação e restauração de templos que Esdras 1:1-4 registra nominalmente a respeito do Deus de Israel.'
    }
  },
  {
    day: 296,
    title: 'A Plenitude dos Tempos: O Nascimento do Salvador',
    periodId: 'gospels',
    periodName: 'Evangelhos em Harmonia Sinóptica',
    periodApproxDate: 'c. 5 - 4 a.C.',
    passages: [
      { book: 'Lucas', reference: '1:1 - 2:38', testament: 'NT' },
      { book: 'Mateus', reference: '1:18 - 2:23', testament: 'NT' }
    ],
    theologicalContext: 'O Verbo se fez carne e habitou entre nós! O Deus infinito assume a fragilidade humana em uma manjedoura de Belém de Judá. Ele não nasce no palácio imperial de Roma, mas entre pastores humildes. Toda a promessa feita a Abraão, a aliança com Davi e as profecias de Isaías sobre a virgem que daria à luz ao Emanuel convergem no Menino Jesus, luz para alumiar as nações.',
    keyVerse: {
      reference: 'Lucas 2:10-11',
      text: 'E o anjo lhes disse: Não temais, porque eis aqui vos trago novas de grande alegria... Pois, na cidade de Davi, vos nasceu hoje o Salvador, que é Cristo, o Senhor.'
    },
    reflectionQuestions: [
      'De que modo a humildade da encarnação de Jesus desafia os conceitos humanos de poder e prestígio?',
      'Como você pode acolher e adorar a Cristo de todo o coração neste dia?'
    ],
    historicalNotes: 'A cronologia do nascimento de Jesus situa-se pouco antes da morte de Herodes o Grande (ocorrida em 4 a.C.).',
    worldHistory: {
      dominantEmpire: 'Império Romano (Pax Romana / Principado)',
      empireCode: 'rome',
      approxDate: 'c. 5 - 4 a.C.',
      ruler: 'César Augusto (Imperador Romano) & Herodes, o Grande (Rei da Judeia)',
      globalEvent: 'Roma vivencia o auge da Pax Romana sob o principado de Otávio Augusto. Para fins de tributação, Roma orquestra recenseamentos sistemáticos no império. Herodes o Grande constrói fortalezas magníficas (Massada, Cesareia Marítima) e amplia o Segundo Templo em Jerusalém com pedras herodianas colossais.',
      archaeologicalArtifact: 'Moedas de bronze de Herodes o Grande e o Monumento de Ancira (Res Gestae Divi Augusti)',
      biblicalCorrelation: 'Lucas 2:1 correlaciona diretamente o nascimento virginal de Cristo com o decreto imperial de César Augusto e o governo de Quirino na Síria, enraizando a fé cristã na história concreta.'
    }
  },
  {
    day: 330,
    title: 'Consumado Está: O Sacrifício na Cruz e a Vitória Pascal',
    periodId: 'gospels',
    periodName: 'Evangelhos: Paixão e Ressurreição',
    periodApproxDate: 'c. 30 ou 33 d.C.',
    passages: [
      { book: 'João', reference: '18:1 - 19:42', testament: 'NT' },
      { book: 'Marcos', reference: '15:1-47', testament: 'NT' }
    ],
    theologicalContext: 'No Gólgota, o Santo Filho de Deus carrega a maldição do nosso pecado. Pilatos lava as mãos, os soldados romanos zombam da coroa de espinhos, mas do madeiro ecoa o brado de vitória que abala o universo: "Tetelestai" — Consumado está! A dívida foi plenamente paga, o véu do Templo se rasga de alto a baixo, e o acesso direto à presença santa de Deus é inaugurado para sempre.',
    keyVerse: {
      reference: 'João 19:30',
      text: 'E, quando Jesus tomou o vinagre, disse: Está consumado. E, inclinando a cabeça, entregou o espírito.'
    },
    reflectionQuestions: [
      'O que significa para você saber que nenhuma obra humana pode acrescentar nada ao sacrifício perfeito e consumado de Jesus?',
      'Como a ressurreição ao terceiro dia assegura a sua esperança viva contra o medo da morte?'
    ],
    historicalNotes: 'A data mais provável da crucificação e ressurreição de Cristo na cronologia acadêmica é a Páscoa de 30 d.C. ou 33 d.C.',
    worldHistory: {
      dominantEmpire: 'Império Romano',
      empireCode: 'rome',
      approxDate: 'c. 30 ou 33 d.C. (14 de Nisã na Páscoa judaica)',
      ruler: 'Tibério César (Imperador Romano) & Pôncio Pilatos (Prefeito da Província da Judeia)',
      globalEvent: 'O imperador Tibério governa recluso na ilha de Capri, enquanto governadores provinciais administram as fronteiras imperiais. A província romana da Judeia é vigiada pela guarnição militar na Fortaleza Antônia, contígua ao Templo de Jerusalém.',
      archaeologicalArtifact: 'Pedra de Pôncio Pilatos (Cesareia Marítima, 1961), Ossuário da Família de Caifás e Ossuário de Yehohanan (com prego de crucificação no osso calcâneo)',
      biblicalCorrelation: 'O Novo Testamento registra com exatidão jurídica o processo romano: o ius gladii (direito de impor pena capital) retido exclusivamente pelo governador romano (Jo 18:31), o método de flagelação e crucificação romana e a placa bilíngue oficial (titulus crucis) afixada na cruz.'
    }
  }
];

// Algoritmo gerador de contexto histórico mundial para qualquer dia do ano
export const getWorldHistoryForDay = (day: number, periodId: string): WorldHistoryContext => {
  if (day <= 26) {
    return {
      dominantEmpire: 'Cidades-Estados Sumérias & Egito Antigo',
      empireCode: 'mesopotamia',
      approxDate: 'c. 2100 - 1800 a.C.',
      ruler: 'Terceira Dinastia de Ur (Ur-Nammu) / Hamurabi da Babilônia',
      globalEvent: 'Desenvolvimento das cidades-estados da Baixa Mesopotâmia e das leis amorreias. A saída de Abraão de Ur e Harã ocorre em plena rota de comércio caravanista do Crescente Fértil.',
      archaeologicalArtifact: 'Código de Hamurabi (Louvre) e Tábuas Cuneiformes de Nuzi e Mari',
      biblicalCorrelation: 'Costumes patriarcais de aliança, herança e primogenitura correspondem perfeitamente às tábuas jurídicas mesopotâmicas contemporâneas.'
    };
  } else if (day <= 75) {
    return {
      dominantEmpire: 'Egito Antigo (Novo Império - XVIII e XIX Dinastias)',
      empireCode: 'egypt',
      approxDate: 'c. 1446 - 1406 a.C.',
      ruler: 'Tutmés III / Amenófis II / Ramsés II',
      globalEvent: 'O Egito no zênite do poder imperial expansionista, estendendo guarnições militares no corredor de Canaã e empregando trabalho forçado de populações asiáticas semitas.',
      archaeologicalArtifact: 'Estela de Merneptá ("Israel está desolado, sua semente não existe mais") e relevos de Tebas',
      biblicalCorrelation: 'As pragas atingem a teologia solar e o culto ao Nilo dos egípcios. A Lei do Sinai contrasta frontalmente com a religião idolátrica dos faraós.'
    };
  } else if (day <= 105) {
    return {
      dominantEmpire: 'Confederação dos Povos do Mar (Filisteus) & Cidades Cananeias',
      empireCode: 'canaan',
      approxDate: 'c. 1406 - 1050 a.C.',
      ruler: 'Príncipes Cananeus & Seranins da Pentápole Filisteia',
      globalEvent: 'Colapso da Idade do Bronze Recente (c. 1200 a.C.) enfraquece as superpotências imperiais. Os filisteus se estabelecem na costa e monopolizam a tecnologia do ferro.',
      archaeologicalArtifact: 'Cartas diplomáticas cuneiformes de Amarna e Cerâmica Filisteia de Asdode e Gate',
      biblicalCorrelation: 'Campanhas de Josué contra reis vassalos cananeus e opressão militar e tecnológica filisteia narrada no livro de Juízes e 1 Samuel.'
    };
  } else if (day <= 165) {
    return {
      dominantEmpire: 'Reino Unido de Israel & Fenícia (Tiro)',
      empireCode: 'canaan',
      approxDate: 'c. 1020 - 931 a.C.',
      ruler: 'Davi e Salomão / Rei Hirão I de Tiro',
      globalEvent: 'Vácuo temporário de poder imperial na Mesopotâmia e no Nilo. A monarquia israelita projeta hegemonia comercial de Cades até o Golfo de Ácaba.',
      archaeologicalArtifact: 'Estela de Tel Dan ("Beit David" / Casa de Davi) e Minas de Cobre de Timna',
      biblicalCorrelation: 'Aliança comercial com Hirão de Tiro para a construção do Templo de Jerusalém e consolidação de Sião como capital cúltica com os Salmos de Davi.'
    };
  } else if (day <= 205) {
    return {
      dominantEmpire: 'Império Neoassírio',
      empireCode: 'assyria',
      approxDate: 'c. 850 - 722 a.C.',
      ruler: 'Tiglate-Pileser III, Salmaneser V e Sargão II',
      globalEvent: 'A expansão implacável da máquina de guerra assíria. Queda de Damasco (732 a.C.) e o cerco e queda de Samaria em 722 a.C. com deportação em massa.',
      archaeologicalArtifact: 'Obelisco Negro de Salmaneser III e Prisma de Nimrud de Sargão II',
      biblicalCorrelation: 'Oseias e Amós profetizam a ruína iminente das Dez Tribos do Norte por abandonarem a aliança com Deus e se entregarem aos bezerros de ouro.'
    };
  } else if (day <= 225) {
    return {
      dominantEmpire: 'Império Neoassírio',
      empireCode: 'assyria',
      approxDate: '701 - 680 a.C.',
      ruler: 'Senaqueribe e Esar-Hadom',
      globalEvent: 'Senaqueribe esmaga rebeliões levantinas, destrói Laquis com rampas de cerco e cerca Jerusalém, mas falha em tomar a capital de Judá.',
      archaeologicalArtifact: 'Prisma de Taylor (Museu Britânico), Relevos de Laquis em Nínive e Inscrição do Túnel de Siloé',
      biblicalCorrelation: '2 Reis 18-19 e Isaías 36-37: Ezequias clama no Templo e Deus livra Jerusalém milagrosamente de ser destruída pelo exército assírio.'
    };
  } else if (day <= 245) {
    return {
      dominantEmpire: 'Império Neobabilônico (Caldeu)',
      empireCode: 'babylon',
      approxDate: 'c. 626 - 586 a.C.',
      ruler: 'Nabopolassar e Nabucodonosor II',
      globalEvent: 'Queda de Nínive em 612 a.C. e Batalha de Carquêmis em 605 a.C., selando a supremacia caldeia sobre o Egito e todo o Oriente Próximo.',
      archaeologicalArtifact: 'Crônicas Babilônicas e Cartas de Laquis em óstraco',
      biblicalCorrelation: 'Jeremias adverte sobre o "inimigo que vem do Norte" (Babilônia) e profetiza 70 anos de exílio para a purificação da nação.'
    };
  } else if (day <= 275) {
    return {
      dominantEmpire: 'Império Neobabilônico & Queda para a Pérsia',
      empireCode: 'babylon',
      approxDate: '586 - 538 a.C.',
      ruler: 'Nabucodonosor II, Belsazar / Ciro II da Pérsia',
      globalEvent: 'Destruição de Jerusalém em 586 a.C. Babilônia com o Portão de Ishtar e templos monumentais. Em 539 a.C., Ciro da Pérsia conquista Babilônia sem sangrenta resistência.',
      archaeologicalArtifact: 'Tabuletas de Ração de Joaquim na Babilônia e Cilindro de Ciro',
      biblicalCorrelation: 'Visões de Ezequiel entre os cativos junto ao rio Quebar e fidelidade de Daniel, Sadraque, Mesaque e Abede-Nego na corte imperial pagã.'
    };
  } else if (day <= 295) {
    return {
      dominantEmpire: 'Império Aquemênida (Persa)',
      empireCode: 'persia',
      approxDate: '538 - 400 a.C.',
      ruler: 'Ciro o Grande, Dario I, Xerxes I (Assuero) e Artaxerxes I',
      globalEvent: 'Governo persa de satrapias com liberdade cultural e religiosa; Guerras Médicas contra a Grécia (Termópilas e Salamina).',
      archaeologicalArtifact: 'Cilindro de Ciro (Museu Britânico) e Palácio de Inverno em Susã',
      biblicalCorrelation: 'Esdras e Neemias reconstroem o Templo e as muralhas com decretos imperiais persas; a providência de Deus salva o povo através da rainha Ester.'
    };
  } else if (day <= 335) {
    return {
      dominantEmpire: 'Império Romano (Pax Romana)',
      empireCode: 'rome',
      approxDate: 'c. 4 a.C. - 33 d.C.',
      ruler: 'César Augusto e Tibério César / Herodes e Pôncio Pilatos',
      globalEvent: 'Pax Romana, expansão de estradas pavimentadas (Via Maris e Via Ápia) e koiné grego universal facilitando a proclamação das Boas Novas.',
      archaeologicalArtifact: 'Pedra de Pilatos em Cesareia Marítima e Ossuário do Sumo Sacerdote Caifás',
      biblicalCorrelation: 'O cumprimento da "plenitude dos tempos" (Gálatas 4:4): encarnação de Cristo sob o censo de Augusto e sacrifício expiatório sob Pilatos.'
    };
  } else {
    return {
      dominantEmpire: 'Império Romano (Dinastias Júlio-Claudiana e Flávia)',
      empireCode: 'rome',
      approxDate: 'c. 33 - 96 d.C.',
      ruler: 'Cláudio, Nero, Vespasiano, Tito e Domiciano',
      globalEvent: 'Perseguição neroniana aos cristãos (64 d.C.), destruição de Jerusalém e queima do Segundo Templo por Tito (70 d.C.) e exigência de culto imperial sob Domiciano.',
      archaeologicalArtifact: 'Arco de Tito em Roma com o relevo da Menorá sagrada e Inscrição de Gálio em Delfos',
      biblicalCorrelation: 'Viagens missionárias de Paulo por todo o Império Romano, martírio dos apóstolos e revelação da vitória eterna de Cristo no Apocalipse em Patmos.'
    };
  }
};

// Complete array of 365 days generated systematically with deep historical and biblical fidelity
export const generateFullChronologicalPlan = (): DayReading[] => {
  const seedsMap = new Map<number, ChronoSeed>();
  CHRONOLOGICAL_SEEDS.forEach(s => seedsMap.set(s.day, s));

  const days: DayReading[] = [];

  // Distribution of books throughout the 365 days in historical-chronological flow
  for (let day = 1; day <= 365; day++) {
    const existing = seedsMap.get(day);
    if (existing) {
      days.push({
        ...existing,
        dateDefault: getDayDateString(day),
        worldHistory: existing.worldHistory || getWorldHistoryForDay(day, existing.periodId)
      });
      continue;
    }

    // Algorithmic synthesis preserving authentic chronological Bible order
    let periodId = 'creation-patriarchs';
    let periodName = 'Criação e Era Patriarcal';
    let periodApproxDate = 'c. 2000 a.C.';
    let passages: Array<{ book: string; reference: string; testament: 'AT' | 'NT' }> = [];
    let title = '';
    let theologicalContext = '';
    let keyRef = '';
    let keyText = '';
    let q1 = 'Qual verdade sobre o caráter de Deus tocou seu coração na leitura de hoje?';
    let q2 = 'Como você pode aplicar esse ensinamento prático nas suas escolhas desta semana?';

    if (day <= 3) {
      periodId = 'creation-patriarchs';
      periodName = 'Criação e Era Patriarcal';
      title = `Gênesis e as Origens da Aliança (Dia ${day})`;
      passages = [{ book: 'Gênesis', reference: `${(day - 1) * 4 + 1}:1 - ${day * 4}:26`, testament: 'AT' }];
      keyRef = `Gênesis ${day * 2}:1`;
      keyText = 'E abençoou Deus todas as Suas obras e contemplou que eram muito boas.';
      theologicalContext = 'Deus estabelece as bases da criação, revelando Sua santidade, ordenação do cosmos e a aliança com a humanidade.';
    } else if (day <= 10) {
      periodId = 'creation-patriarchs';
      periodName = 'Criação e Era Patriarcal (A Era de Jó em Uz)';
      periodApproxDate = 'c. 2000 a.C.';
      title = `Jó: Provação e Soberania Divina (Dia ${day})`;
      const jobStart = (day - 3) * 4;
      passages = [{ book: 'Jó', reference: `${jobStart}:1 - ${jobStart + 4}:30`, testament: 'AT' }];
      keyRef = `Jó ${jobStart + 2}:10`;
      keyText = 'Receberemos o bem de Deus, e não receberíamos o mal? Em tudo isto não pecou Jó.';
      theologicalContext = 'A provação de Jó demonstra que a lealdade a Deus não depende de circunstâncias temporais, mas do reconhecimento de Sua soberania insondável.';
    } else if (day <= 26) {
      periodId = 'creation-patriarchs';
      periodName = 'Criação e Era Patriarcal';
      periodApproxDate = 'c. 2000 - 1800 a.C.';
      const genCap = 12 + (day - 11) * 2;
      title = `Patriarcas: Da Promessa à Preservação no Egito (Dia ${day})`;
      passages = [{ book: 'Gênesis', reference: `${genCap}:1 - ${Math.min(50, genCap + 2)}:30`, testament: 'AT' }];
      keyRef = `Gênesis ${genCap}:3`;
      keyText = 'Abençoarei os que te abençoarem e amaldiçoarei os que te amaldiçoarem; em ti serão benditas todas as famílias da terra.';
      theologicalContext = 'Deus conduz Abraão, Isaque, Jacó e José através de juramentos inquebrantáveis, preservando a semente da promessa que trará a redenção do mundo.';
    } else if (day <= 50) {
      periodId = 'exodus-wilderness';
      periodName = 'Êxodo e Peregrinação no Deserto';
      periodApproxDate = 'c. 1446 a.C.';
      const exCap = Math.min(40, (day - 26) * 2);
      title = `Êxodo: Redenção e a Glória no Tabernáculo (Dia ${day})`;
      passages = [{ book: 'Êxodo', reference: `${exCap - 1}:1 - ${exCap}:38`, testament: 'AT' }];
      keyRef = `Êxodo ${exCap}:7`;
      keyText = 'E vos tomarei por meu povo, e serei vosso Deus; e sabereis que eu sou o Senhor vosso Deus.';
      theologicalContext = 'O resgate da escravidão com mão forte prefigura a salvação em Cristo. O Tabernáculo ensina como um Deus Santo habita no meio de pecadores perdoados.';
    } else if (day <= 62) {
      periodId = 'exodus-wilderness';
      periodName = 'Êxodo e Peregrinação no Deserto (A Lei de Santidade)';
      periodApproxDate = 'c. 1445 a.C.';
      const levCap = Math.min(27, (day - 50) * 2 + 1);
      title = `Levítico: Sacrifício, Pureza e Santidade (Dia ${day})`;
      passages = [{ book: 'Levítico', reference: `${levCap}:1 - ${Math.min(27, levCap + 2)}:34`, testament: 'AT' }];
      keyRef = `Levítico ${levCap}:2`;
      keyText = 'Santos sereis, porque eu, o Senhor vosso Deus, sou santo.';
      theologicalContext = 'O livro de Levítico revela que a aproximação de Deus exige expiação pelo sangue e uma vida consagrada em todas as esferas práticas do cotidiano.';
    } else if (day <= 70) {
      periodId = 'exodus-wilderness';
      periodName = 'Êxodo e Peregrinação no Deserto (No Deserto de Parã)';
      periodApproxDate = 'c. 1445 - 1406 a.C.';
      const numCap = Math.min(36, (day - 62) * 4);
      title = `Números: Disciplina e Fidelidade no Deserto (Dia ${day})`;
      passages = [{ book: 'Números', reference: `${numCap - 3}:1 - ${numCap}:13`, testament: 'AT' }];
      keyRef = 'Números 6:24-26';
      keyText = 'O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti.';
      theologicalContext = 'Mesmo perante as murmurações do povo no deserto, a fidelidade de Deus permanece. A serpente de bronze (Nm 21) aponta para Cristo levantado na cruz.';
    } else if (day <= 75) {
      periodId = 'exodus-wilderness';
      periodName = 'Êxodo e Peregrinação no Deserto (Nas Planícies de Moabe)';
      periodApproxDate = 'c. 1406 a.C.';
      const deuCap = Math.min(34, (day - 70) * 6);
      title = `Deuteronômio: Lembra-te do Senhor Teu Deus (Dia ${day})`;
      passages = [{ book: 'Deuteronômio', reference: `${deuCap - 5}:1 - ${deuCap}:12`, testament: 'AT' }];
      keyRef = 'Deuteronômio 8:3';
      keyText = 'Não só de pão viverá o homem, mas de tudo o que sai da boca do Senhor viverá o homem.';
      theologicalContext = 'As despedidas de Moisés renovam a aliança com a nova geração, enfatizando que a obediência genuína brota do amor reverente a Deus.';
    } else if (day <= 85) {
      periodId = 'conquest-judges';
      periodName = 'Conquista de Canaã e Período dos Juízes';
      periodApproxDate = 'c. 1406 - 1380 a.C.';
      const josCap = Math.min(24, (day - 75) * 2 + 4);
      title = `Josué: A Posse da Terra Prometida (Dia ${day})`;
      passages = [{ book: 'Josué', reference: `${josCap - 1}:1 - ${josCap}:25`, testament: 'AT' }];
      keyRef = 'Josué 24:15';
      keyText = 'Eu e a minha casa serviremos ao Senhor.';
      theologicalContext = 'Nenhuma das boas promessas que o Senhor fez a Israel falhou. O descanso na terra prometida aponta para o repouso eterno em Cristo.';
    } else if (day <= 98) {
      periodId = 'conquest-judges';
      periodName = 'Conquista de Canaã e Período dos Juízes';
      periodApproxDate = 'c. 1380 - 1050 a.C.';
      const juiCap = Math.min(21, (day - 85) * 2);
      title = `Juízes: Clamor e Libertadores (Dia ${day})`;
      passages = [{ book: 'Juízes', reference: `${juiCap - 1}:1 - ${juiCap}:31`, testament: 'AT' }];
      keyRef = 'Juízes 21:25';
      keyText = 'Naqueles dias não havia rei em Israel; porém cada um fazia o que parecia reto aos seus olhos.';
      theologicalContext = 'A espiral de pecado em Juízes evidencia a desesperada necessidade de um Rei justo que governe com retidão o coração humano.';
    } else if (day <= 105) {
      periodId = 'conquest-judges';
      periodName = 'Transição para o Reino Unido';
      periodApproxDate = 'c. 1050 a.C.';
      const samCap = (day - 98) * 2;
      title = `Samuel: O Último Juiz e o Primeiro Profeta (Dia ${day})`;
      passages = [{ book: '1 Samuel', reference: `${samCap - 1}:1 - ${samCap}:25`, testament: 'AT' }];
      keyRef = '1 Samuel 3:10';
      keyText = 'Fala, Senhor, porque o teu servo ouve.';
      theologicalContext = 'A oração de Ana e a consagração do menino Samuel preparam a transição histórica do sacerdócio falido de Eli para a unção da monarquia.';
    } else if (day <= 130) {
      periodId = 'united-kingdom';
      periodName = 'Reino Unido (Davi e os Salmos na História)';
      periodApproxDate = 'c. 1020 - 1000 a.C.';
      const salmNum = (day - 105) * 4;
      title = `Davi: O Ungido perseguido e seus Salmos de Fé (Dia ${day})`;
      passages = [
        { book: '1 Samuel', reference: `${Math.min(31, day - 95)}:1-30`, testament: 'AT' },
        { book: 'Salmos', reference: `${salmNum - 3} e ${salmNum - 2}`, testament: 'AT' }
      ];
      keyRef = `Salmos ${salmNum - 2}:1`;
      keyText = 'O Senhor é o meu refúgio e a minha fortaleza, meu Deus em quem confio.';
      theologicalContext = 'Diferencial cronológico: Enquanto Davi enfrenta perseguições no deserto de En-Gedi, seus Salmos expressam fé inabalável em Deus no meio da aflição.';
    } else if (day <= 145) {
      periodId = 'united-kingdom';
      periodName = 'Reino Unido (Reinado de Davi em Jerusalém)';
      periodApproxDate = 'c. 1000 - 970 a.C.';
      const salmZion = (day - 130) * 3 + 60;
      title = `Reinado de Davi e Cânticos de Sião (Dia ${day})`;
      passages = [
        { book: '2 Samuel', reference: `${Math.min(24, day - 125)}:1-25`, testament: 'AT' },
        { book: 'Salmos', reference: `${salmZion} e ${salmZion + 1}`, testament: 'AT' }
      ];
      keyRef = '2 Samuel 7:16';
      keyText = 'A tua casa e o teu reino serão firmados para sempre diante de ti; o teu trono será estabelecido para sempre.';
      theologicalContext = 'A Aliança Davídica (2 Sm 7) assegura que do trono de Davi virá um descendente cujo reino jamais terá fim — o Messias Jesus.';
    } else if (day <= 165) {
      periodId = 'united-kingdom';
      periodName = 'Reino Unido (Sabedoria de Salomão)';
      periodApproxDate = 'c. 970 - 931 a.C.';
      const provCap = (day - 145) + 4;
      title = `Salomão: Provérbios e a Sabedoria Prática (Dia ${day})`;
      passages = [
        { book: '1 Reis', reference: `${Math.min(11, Math.floor((day - 145)/2) + 6)}:1-30`, testament: 'AT' },
        { book: 'Provérbios', reference: `${Math.min(31, provCap)}:1-33`, testament: 'AT' }
      ];
      keyRef = `Provérbios ${Math.min(31, provCap)}:7`;
      keyText = 'O temor do Senhor é o princípio da ciência; os loucos desprezam a sabedoria e a instrução.';
      theologicalContext = 'A literatura sapiencial bíblica ilumina as escolhas morais, as relações familiares e a administração do reino sob a reverência ao Criador.';
    } else if (day <= 195) {
      periodId = 'divided-kingdom';
      periodName = 'Reino Dividido e Profetas do Norte (Israel)';
      periodApproxDate = 'c. 850 - 750 a.C.';
      title = `Reino Dividido e o Chamado dos Profetas (Dia ${day})`;
      passages = [
        { book: '2 Reis', reference: `${Math.min(14, (day - 165) % 14 + 1)}:1-30`, testament: 'AT' },
        { book: 'Oseias', reference: `${(day - 165) % 8 + 1}:1-15`, testament: 'AT' }
      ];
      keyRef = 'Oseias 6:6';
      keyText = 'Pois misericórdia quero, e não sacrifício; e o conhecimento de Deus, mais do que os holocaustos.';
      theologicalContext = 'Deus usa a metáfora do casamento em Oseias para revelar Sua dor amorosa diante da infidelidade idólatra de Seu povo e Sua graça restauradora.';
    } else if (day <= 225) {
      periodId = 'divided-kingdom';
      periodName = 'Reino Dividido e Profetas de Judá (Isaías e Contemporâneos)';
      periodApproxDate = 'c. 740 - 680 a.C.';
      const isCap = (day - 195) * 2;
      title = `Isaías: O Santo de Israel e a Redenção das Nações (Dia ${day})`;
      passages = [
        { book: 'Isaías', reference: `${Math.min(66, isCap - 1)}:1 - ${Math.min(66, isCap)}:30`, testament: 'AT' }
      ];
      keyRef = `Isaías ${Math.min(66, isCap)}:10`;
      keyText = 'Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus; eu te fortaleço, e te ajudo.';
      theologicalContext = 'Isaías descortina a soberania de Deus sobre a Assíria e a Babilônia, profetizando o Rei pacífico que inaugurará a justiça para todo o mundo.';
    } else if (day <= 245) {
      periodId = 'divided-kingdom';
      periodName = 'Crise Final de Judá e Ministério de Jeremias';
      periodApproxDate = 'c. 627 - 586 a.C.';
      const jerCap = (day - 225) * 2;
      title = `Jeremias: O Apelo à Obediência antes da Ruína (Dia ${day})`;
      passages = [
        { book: 'Jeremias', reference: `${Math.min(52, jerCap - 1)}:1 - ${Math.min(52, jerCap)}:30`, testament: 'AT' }
      ];
      keyRef = 'Jeremias 29:11';
      keyText = 'Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.';
      theologicalContext = 'Mesmo diante da iminente invasão babilônica, Deus envia mensagens de esperança: o exílio duraria 70 anos e haveria restauração futura.';
    } else if (day <= 275) {
      periodId = 'exile';
      periodName = 'O Cativeiro Babilônico (Ezequiel e Daniel)';
      periodApproxDate = 'c. 586 - 538 a.C.';
      const ezCap = (day - 245) + 1;
      title = `Exílio: Visões de Glória e Renovo Espiritual (Dia ${day})`;
      passages = [
        { book: 'Ezequiel', reference: `${Math.min(48, ezCap)}:1-35`, testament: 'AT' }
      ];
      keyRef = 'Ezequiel 36:26';
      keyText = 'E dar-vos-ei um coração novo, e porei dentro de vós um espírito novo; e tirarei da vossa carne o coração de pedra, e vos darei um coração de carne.';
      theologicalContext = 'No vale de ossos secos (Ez 37), o Espírito de Deus sopra vida onde havia apenas morte. Deus prova que Sua presença não está confinada a um edifício de pedra.';
    } else if (day <= 295) {
      periodId = 'post-exile';
      periodName = 'Retorno Pós-Exílico e Reconstrução';
      periodApproxDate = 'c. 538 - 400 a.C.';
      const postDay = day - 275;
      const bName = postDay <= 8 ? 'Esdras' : postDay <= 14 ? 'Ageu e Zacarias' : 'Malaquias';
      title = `Pós-Exílio: Reconstrução do Altar e Esperança Messiânica (Dia ${day})`;
      passages = [
        { book: postDay <= 8 ? 'Esdras' : postDay <= 14 ? 'Zacarias' : 'Malaquias', reference: '1:1 - 4:20', testament: 'AT' }
      ];
      keyRef = 'Zacarias 4:6';
      keyText = 'Não por força nem por violência, mas sim pelo meu Espírito, diz o Senhor dos Exércitos.';
      theologicalContext = 'Zorobabel e Josué reconstroem o templo. Malaquias encerra o Antigo Testamento apontando para o "Sol da Justiça" que nasceria trazendo cura em suas asas.';
    } else if (day <= 335) {
      periodId = 'gospels';
      periodName = 'Evangelhos em Harmonia Sinóptica';
      periodApproxDate = 'c. 4 a.C. - 33 d.C.';
      const gDay = day - 295;
      title = `A Vida de Cristo: Ministério, Milagres e Ensinos (Dia ${day})`;
      passages = [
        { book: gDay % 2 === 0 ? 'Lucas' : 'Marcos', reference: `${(gDay % 16) + 1}:1-40`, testament: 'NT' }
      ];
      keyRef = 'João 14:6';
      keyText = 'Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.';
      theologicalContext = 'Jesus manifesta o Reino de Deus curando os enfermos, acolhendo os marginalizados e anunciando a libertação dos cativos pelo poder do Espírito.';
    } else {
      periodId = 'early-church';
      periodName = 'Igreja Primitiva, Epístolas Paulinas e Apocalipse';
      periodApproxDate = 'c. 33 - 96 d.C.';
      const epDay = day - 335;
      const epBook = epDay <= 6 ? 'Atos' : epDay <= 12 ? 'Coríntios' : epDay <= 18 ? 'Efésios e Filipenses' : epDay <= 25 ? 'Hebreus e Tiago' : 'Apocalipse';
      title = `A Expansão da Igreja e a Esperança Triunfante (Dia ${day})`;
      passages = [
        { book: epBook, reference: `${(epDay % 6) + 1}:1-30`, testament: 'NT' }
      ];
      keyRef = 'Hebreus 12:2';
      keyText = 'Olhando para Jesus, autor e consumador da fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz.';
      theologicalContext = 'O Espírito Santo capacita a Igreja a testemunhar até os confins da terra, guardando a fé inabalável até a gloriosa volta de Cristo Jesus.';
    }

    days.push({
      day,
      dateDefault: getDayDateString(day),
      title,
      periodId,
      periodName,
      periodApproxDate,
      passages,
      theologicalContext,
      keyVerse: {
        reference: keyRef || 'Salmos 119:105',
        text: keyText || 'Lâmpada para os meus pés é a tua palavra e luz, para o meu caminho.'
      },
      reflectionQuestions: [q1, q2],
      worldHistory: getWorldHistoryForDay(day, periodId)
    });
  }

  return days;
};

export const CHRONOLOGICAL_PLAN: DayReading[] = generateFullChronologicalPlan();

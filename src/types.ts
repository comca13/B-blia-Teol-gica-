export type PlanType = 'chronological' | 'canonical';

export type MainRoute = 'BIBLIA' | 'PLANOS' | 'HISTORIA' | 'PERFIL';

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

export interface ArchaeologicalArtifact {
  id: string;
  name: string; // Ex: "Estela de Tel Dã", "Prisma de Senaqueribe", "Cilindro de Ciro", "Ossuário de Caifás"
  period: string; // Ex: "Século IX a.C."
  locationFound: string; // Ex: "Tel Dan, Norte de Israel"
  currentLocation: string; // Ex: "Museu de Israel, Jerusalém"
  significance: string; // Importância para a leitura bíblica corrente
  imageUrl?: string;
}

export interface GeographyContext {
  regionName: string; // Ex: "Crescente Fértil", "Planalto da Judeia", "Ásia Menor"
  modernLocation: string; // Ex: "Atual Iraque", "Atual Cisjordânia / Israel"
  coordinatesSummary?: string;
  mapReferenceUrl?: string; // Link para mapa interativo/satélite ou imagem
  topographyNote: string; // Relevância teológico-topográfica (ex: "A descida de Jerusalém a Jericó: desnível de 1.000m")
}

export type LiteraryGenre = 
  | 'NARRATIVA_HISTORICA'
  | 'LEI_TORA'
  | 'POESIA_SAPIENCIAL'
  | 'PROFECIA_CLASSICA'
  | 'APOCALIPTICA'
  | 'EVANGELHO_BIOGRAFIA'
  | 'PARABOLA'
  | 'EPISTOLA_PAULINA'
  | 'EPISTOLA_GERAL';

export interface GenreHermeneuticsGuide {
  genre: LiteraryGenre;
  label: string; // Ex: "Poesia Sapiencial", "Literatura Apocalíptica"
  description: string; // O que caracteriza esse gênero literário
  hermeneuticalRule: string; // Regra de ouro para interpretação
  commonPitfall: string; // Erro mais comum / anacronismo
}

export interface SitzImLeben {
  authorOrTradition: string; // Ex: "Paulo de Tarso (comunidade paulina)", "Tradição Sacerdotal (P)"
  originalAudience: string; // Ex: "Igreja mista (judeus e gentios) em Roma", "Exilados na Babilônia"
  existentialCrisis: string; // A questão central que motivou o texto
  theologicalTheme: string; // Grande eixo dogmático do trecho
}

export interface OriginalLanguageWord {
  id: string;
  term: string; // Termo na grafia original: ex: "חֶסֶד" ou "χάρις"
  transliteration: string; // Ex: "Hesed" ou "Charis"
  language: 'HEBRAICO' | 'ARAMAICO' | 'GREGO';
  strongNumber?: string; // Ex: "H2617", "G5485"
  literalTranslation: string; // Ex: "Lealdade pactual, amor leal, misericórdia constante"
  theologicalSignificance: string; // Explicação teológica do termo no original
  occurrencesNote?: string; // Onde mais ocorre com mesmo peso no cânone
}

export interface TypologyConnection {
  typeOldTestament: string; // O tipo/sombra (ex: "O cordeiro pascoal sem defeito em Êxodo 12")
  antitypeNewTestament: string; // O antítipo/cumprimento (ex: "Cristo, o Cordeiro pascal sacrificado por nós em 1 Coríntios 5:7")
  theologicalBridge: string; // Como a teologia bíblica conecta ambos
  intertextualCitations?: string[]; // Lista de versículos correlatos (ex: ["Is 53:7", "Jo 1:29", "1Pe 1:19"])
}

export type CulturalCategory = 
  | 'VIDA_QUOTIDIANA'    // Moradia, casamento, agricultura, profissões
  | 'POLITICA_E_SOCIEDADE' // Patronato romano, classes sociais, Sinédrio
  | 'ECONOMIA_E_MEDIDAS' // Moedas (denário, talento), pesos, distâncias
  | 'LITERATURA_E_IMAGINARIO'; // Cosmologia antiga, mitologia comparada, retórica

export interface CulturalContext {
  id: string;
  category: CulturalCategory;
  title: string; // Ex: "O Sistema de Patronato Romano", "O Valor do Denário"
  description: string; // A explicação historiográfica do conceito
  exegeticalRelevance: string; // Como esta informação altera a leitura do texto bíblico
  scriptureReferences: string[]; // Versículos onde este contexto é chave (ex: ["Mateus 20:1-16", "Apocalipse 6:6"])
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
  artifacts?: ArchaeologicalArtifact[];
  geography?: GeographyContext;
  genreGuide?: GenreHermeneuticsGuide;
  sitzImLeben?: SitzImLeben;
  originalLexicon?: OriginalLanguageWord[];
  typology?: TypologyConnection[];
  culturalContext?: CulturalContext[];
}

export interface ScriptureVerse {
  verse: number;
  text: string;
}

export type Verse = ScriptureVerse;

export interface ScriptureChapter {
  book: string;
  chapter: number;
  verses: ScriptureVerse[];
  startVerse?: number;
  endVerse?: number;
  bookNumber?: number;
  label?: string;
}

export type StudyDepthMode = 'DEVOCIONAL' | 'EXEGÉTICO_ACADÉMICO';

export interface ReaderPreferences {
  theme: 'light' | 'dark' | 'sepia';
  fontSize: number;
  fontFamily: 'serif' | 'sans';
  depthMode: StudyDepthMode;
  visiblePanels: {
    archaeology: boolean;
    lexicon: boolean;
    worldHistory: boolean;
    intertextuality: boolean;
    textualVariants: boolean;
  };
}

export interface TextualVariant {
  id: string;
  verseReference: string; // Ex: "Marcos 16:9-20", "João 7:53–8:11", "1 João 5:7-8"
  traditionOrManuscripts: string; // Ex: "Omissão no Códice Sinaítico (א) e Códice Vaticano (B)"
  massoreticVsSeptuagint?: string; // Diferenças relevantes entre TM e LXX (para o AT)
  scholarlyConsensus: string; // Resumo do consenso da crítica textual contemporânea (ex: NA28 / UBS5)
  significanceForTranslation: string; // Explicação de como diferentes traduções (ARC, ARA, NVI) vertem o texto
}

export type TheologicalCategory = 
  | 'SOTERIOLOGIA' 
  | 'ESCATOLOGIA' 
  | 'PACTOS_E_HISTORIA' 
  | 'CRISTOLOGIA_PATRISTICA'
  | 'TEOLOGIA_MODERNA';

export interface TheologicalSystem {
  id: string;
  name: string; // Ex: "Amilenismo", "Calvinismo", "Dispensacionalismo"
  proponents: string[]; // Ex: ["Agostinho", "Lutero", "Calvino"] ou ["Darby", "Scofield"]
  coreBeliefs: string[]; // Lista de 3 a 5 crenças principais (bullet points)
  historicalContext: string; // Quando e por que surgiu
}

export interface TheologicalDebate {
  id: string;
  category: TheologicalCategory;
  title: string; // Ex: "O Debate do Milênio", "A Natureza da Salvação"
  description: string; // Resumo do que está em jogo neste debate
  systems: TheologicalSystem[]; // Array contendo as visões que concorrem entre si
}

export type TheologicalNoteCategory =
  | 'TEOLOGIA_PROPRIAMENTE_DITA' // Deus, Trindade, Decretos
  | 'CRISTOLOGIA'               // Pessoa e Obra de Cristo
  | 'PNEUMATOLOGIA'             // Espírito Santo
  | 'ANTROPOLOGIA_E_HAMARTIOLOGIA' // Natureza humana e Queda
  | 'SOTERIOLOGIA'              // Salvação, Graça, Justificação
  | 'ECLESIOLOGIA'              // Igreja, Sacramentos/Ordenanças
  | 'ESCATOLOGIA'               // Últimas Coisas e Juízo
  | 'ARQUEOLOGIA_E_HISTORIA'    // Cultura material e contexto
  | 'PRATICA_DEVOCIONAL';       // Aplicação diária e oração

export interface UserTheologicalNote {
  id: string;
  date: string;
  readingDay: number;
  passageRef: string;
  category: TheologicalNoteCategory;
  tags: string[];
  title: string;
  content: string; // Suporte a Markdown
  createdAt: number;
  updatedAt: number;
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
  depthMode?: StudyDepthMode;
  visiblePanels?: {
    archaeology: boolean;
    lexicon: boolean;
    worldHistory: boolean;
    intertextuality: boolean;
    textualVariants: boolean;
  };
}

export interface ReminderSettings {
  enabled: boolean;
  time: string; // "07:00"
  notifyBrowser: boolean;
  phoneWhatsapp?: string;
}

export interface IntertestamentalSubPhase {
  id: string;
  title: string;
  period: string; // ex: "c. 430 - 332 a.C."
  rulingPower: string; // ex: "Império Aquemênida Tardio"
  description: string;
  theologicalImpact: string; // ex: "Consolidação da sinagoga e escribas"
  keyFiguresOrEvents: string[]; // ex: ["Artaxerxes II e III", "Fechamento do cânon do AT"]
}

export interface ContemporaryLiteratureItem {
  title: string; // ex: "Código de Hamurabi", "Epopeia de Gilgamesh", "Poemas Homéricos (Ilíada)", "Manuscritos do Mar Morto (Qumran)"
  authorOrOrigin: string; // ex: "Mesopotâmia / Babilônia", "Atenas, Grécia", "Comunidade Essênia de Qumran"
  approxDate: string; // ex: "c. 1750 a.C.", "c. 800 a.C."
  summary: string;
  biblicalParallel: string; // Relação com a revelação bíblica
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
  isIntertestamental?: boolean;
  subPhases?: IntertestamentalSubPhase[];
  contemporaryLiterature?: ContemporaryLiteratureItem[];
  biblicalTrackSummary?: string;
  empiresTrackSummary?: string;
  literatureTrackSummary?: string;
}

export type ChurchHistoryEra = 
  | 'PATRISTICA' 
  | 'MEDIEVAL' 
  | 'REFORMA' 
  | 'POS_REFORMA_DESPERTARES' 
  | 'CONTEMPORANEA';

export interface ChurchHistoryEvent {
  id: string;
  era: ChurchHistoryEra;
  title: string; // Ex: "O Sínodo de Dort", "A Fixação das 95 Teses", "O Concílio de Niceia"
  year: string; // Ex: "325 d.C.", "1517 d.C."
  keyFigures: string[]; // Ex: ["Atanásio", "Ário"] ou ["Martin Lutero"]
  description: string;
  historicalSignificance: string;
  category: 'CONCILIO' | 'REFORMA' | 'AVIVAMENTO' | 'PERSEGUICAO' | 'TEOLOGIA';
}

export interface TheologicalSystemComparison {
  topic: string; // Ex: "Depravação e Livre-Arbítrio", "Eleição e Predestinação", "A Natureza da Expiação", "A Eficácia da Graça", "Perseverança dos Santos"
  calvinismAcronym?: string; // T, U, L, I, P
  calvinismTitle: string; // Ex: "Depravação Total (Total Depravity)"
  calvinismView: string; // Perspetiva Reformada / Calvinista
  calvinismKeyPassages?: string[]; // Versículos base
  arminianismArticle?: string; // Artigo I, II, III, IV, V dos Remonstrantes
  arminianismTitle: string; // Ex: "Graça Preveniente e Livre-Arbítrio Restaurado"
  arminianismView: string; // Perspetiva Arminiana / Remonstrante
  arminianismKeyPassages?: string[]; // Versículos base
  historicalContext: string; // Contexto do debate (ex: Sínodo de Dort)
}

export interface EcumenicalCreed {
  id: string;
  title: string; // Ex: "Credo Niceno-Constantinopolitano"
  originalName: string; // Ex: "Symbolum Nicaeno-Constantinopolitanum"
  year: string; // Ex: "381 d.C."
  council: string; // Ex: "I Concílio de Constantinopla"
  historicalOccasion: string; // Refutação de Ário, Macedônio, Apolinário
  keyThemes: string[]; // ["Trindade", "Divindade do Espírito Santo", "Homoousios"]
  fullTextPt: string;
  latinOrGreekSnippet?: string;
  theologicalLegacy: string;
}

// ----------------------------------------------------
// JORNADAS TEMÁTICAS (TEOLOGIA BÍBLICA / REDEMPTIVE-HISTORICAL)
// ----------------------------------------------------

export type ThematicCategory = 'CRISTOLOGIA' | 'ESCATOLOGIA' | 'ESCATOlOGIA' | 'PACTO' | 'SANTIDADE' | 'REINO';

export interface ThematicReadingNode {
  day: number;
  passageRef: string; // Ex: "Gênesis 1:26-28; 2:15"
  thematicConnection: string; // Explicação teológica de como este texto avança o tema central
}

export interface ThematicPlan {
  id: string;
  title: string; // Ex: "A Teologia do Templo: Do Éden à Nova Jerusalém"
  shortDescription: string;
  fullDescription: string;
  themeCategory: 'CRISTOLOGIA' | 'ESCATOlOGIA' | 'PACTO' | 'SANTIDADE' | 'REINO' | 'ESCATOLOGIA';
  estimatedDays: number;
  readings: ThematicReadingNode[];
}

// ----------------------------------------------------
// COMENTÁRIOS HISTÓRICOS (VOZES DO PASSADO / PATRÍSTICA E REFORMA)
// ----------------------------------------------------

export type HistoricalEra = 
  | 'IGREJA_PRIMITIVA_E_PATRISTICA' 
  | 'IDADE_MEDIA_E_ESCOLASTICA' 
  | 'REFORMA_PROTESTANTE' 
  | 'PURITANISMO_E_POS_REFORMA'
  | 'ERA_MODERNA';

export interface Commentator {
  name: string; // Ex: "Agostinho de Hipona", "Martinho Lutero"
  era: HistoricalEra;
  shortBio: string; // Breve contexto de quem foi o autor (1-2 frases)
}

export interface HistoricalCommentary {
  id: string;
  passageRef: string; // Referência alvo (ex: "Gênesis 1:1", "Romanos 1:17")
  commentator: Commentator;
  quote: string; // A citação histórica em si
  sourceDocument: string; // Ex: "Confissões, Livro XI", "Prefácio à Carta aos Romanos"
  theologicalFocus: string; // Ex: "A Doutrina da Justificação", "A Criação ex nihilo"
}

// ----------------------------------------------------
// HARMONIA DOS EVANGELHOS (LEITURA PARALELA SINÓTICA)
// ----------------------------------------------------

export interface GospelReferences {
  matthew?: string; // Ex: "Mateus 14:13-21"
  mark?: string;    // Ex: "Marcos 6:30-44"
  luke?: string;    // Ex: "Lucas 9:10-17"
  john?: string;    // Ex: "João 6:1-15"
}

export interface GospelHarmonyEvent {
  id: string;
  title: string; // Ex: "A Multiplicação dos Pães e Peixes"
  category: 'MINISTERIO' | 'MILAGRE' | 'PARABOLA' | 'PAIXAO_E_RESSURREICAO' | 'NASCIMENTO';
  references: GospelReferences;
  theologicalEmphasis: string; // Explicação breve de por que os relatos diferem ou o que cada um foca
}

// ----------------------------------------------------
// BIBLIOTECA CONFESSIONAL E CREDAL (DOCUMENTOS HISTÓRICOS)
// ----------------------------------------------------

export type DocumentCategory = 
  | 'IGREJA_PRIMITIVA'     // Ex: Didaquê, Epístola a Diogneto
  | 'CREDO_ECUMENICO'      // Ex: Credo Apostólico, Credo Niceno, Calcedônia
  | 'CONFISSAO_REFORMADA'  // Ex: Westminster, Batista de 1689, Belga
  | 'CATECISMO'            // Ex: Heidelberg, Maior/Breve de Westminster
  | 'DECLARACAO_MODERNA';  // Ex: Declaração de Chicago, Pacto de Lausanne

export interface HistoricalDocument {
  id: string;
  title: string; // Ex: "O Credo Niceno-Constantinopolitano"
  year: string; // Ex: "381 d.C."
  category: DocumentCategory;
  historicalContext: string; // Breve explicação de por que o documento foi escrito (ex: combate ao Arianismo).
  content: string; // O texto integral do documento (suporte a Markdown ou parágrafos formatados).
  keyTheologicalThemes: string[]; // Ex: ["Trindade", "Cristologia", "Consubstancialidade"]
}

// ----------------------------------------------------
// APOLOGÉTICA E DIFICULDADES BÍBLICAS
// ----------------------------------------------------

export type ApologeticsCategory = 
  | 'CONTRADICAO_APARENTE' // Ex: Genealogias de Jesus, Morte de Judas
  | 'DILEMA_ETICO'         // Ex: Guerras de Canaã, Leis do AT
  | 'PRECISAO_HISTORICA'   // Ex: O Censo de Quirino, Êxodo
  | 'PROBLEMA_TEXTUAL';    // Ex: Traduções difíceis, variantes complexas

export interface BiblicalDifficulty {
  id: string;
  passageRefs: string[]; // Ex: ["Mateus 27:3-10", "Atos 1:18-19"]
  category: ApologeticsCategory;
  question: string; // Ex: "Como morreu Judas? Enforcou-se ou caiu e rebentou-se?"
  scholarlyResolution: string; // Explicação académica harmonizando ou explicando o contexto
  recommendedReading?: string; // Autores ou livros de referência para aprofundar
  targetVerses?: {
    book: string; // Ex: "Mateus", "Atos", "Josué", "Lucas", "Gênesis"
    chapter: number;
    startVerse?: number;
    endVerse?: number;
  }[];
}




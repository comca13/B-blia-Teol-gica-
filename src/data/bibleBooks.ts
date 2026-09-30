export interface BibleBookInfo {
  number: number; // 1 to 66
  namePt: string;
  nameEn: string;
  abbrevPt: string;
  abbrevEn: string;
  testament: 'AT' | 'NT';
  group: string;
  totalChapters: number;
  queryPt: string;
  queryEn: string;
}

export const ALL_BIBLE_BOOKS: BibleBookInfo[] = [
  // --- ANTIGO TESTAMENTO (39 Livros) ---
  // Pentateuco
  { number: 1, namePt: 'Gênesis', nameEn: 'Genesis', abbrevPt: 'Gn', abbrevEn: 'Gen', testament: 'AT', group: 'Pentateuco', totalChapters: 50, queryPt: 'genesis', queryEn: 'genesis' },
  { number: 2, namePt: 'Êxodo', nameEn: 'Exodus', abbrevPt: 'Êx', abbrevEn: 'Exo', testament: 'AT', group: 'Pentateuco', totalChapters: 40, queryPt: 'exodo', queryEn: 'exodus' },
  { number: 3, namePt: 'Levítico', nameEn: 'Leviticus', abbrevPt: 'Lv', abbrevEn: 'Lev', testament: 'AT', group: 'Pentateuco', totalChapters: 27, queryPt: 'levitico', queryEn: 'leviticus' },
  { number: 4, namePt: 'Números', nameEn: 'Numbers', abbrevPt: 'Nm', abbrevEn: 'Num', testament: 'AT', group: 'Pentateuco', totalChapters: 36, queryPt: 'numeros', queryEn: 'numbers' },
  { number: 5, namePt: 'Deuteronômio', nameEn: 'Deuteronomy', abbrevPt: 'Dt', abbrevEn: 'Deu', testament: 'AT', group: 'Pentateuco', totalChapters: 34, queryPt: 'deuteronomio', queryEn: 'deuteronomy' },

  // Históricos
  { number: 6, namePt: 'Josué', nameEn: 'Joshua', abbrevPt: 'Js', abbrevEn: 'Jos', testament: 'AT', group: 'Históricos', totalChapters: 24, queryPt: 'josue', queryEn: 'joshua' },
  { number: 7, namePt: 'Juízes', nameEn: 'Judges', abbrevPt: 'Jz', abbrevEn: 'Jdg', testament: 'AT', group: 'Históricos', totalChapters: 21, queryPt: 'juizes', queryEn: 'judges' },
  { number: 8, namePt: 'Rute', nameEn: 'Ruth', abbrevPt: 'Rt', abbrevEn: 'Rth', testament: 'AT', group: 'Históricos', totalChapters: 4, queryPt: 'rute', queryEn: 'ruth' },
  { number: 9, namePt: '1 Samuel', nameEn: '1 Samuel', abbrevPt: '1Sm', abbrevEn: '1Sa', testament: 'AT', group: 'Históricos', totalChapters: 31, queryPt: '1 samuel', queryEn: '1 samuel' },
  { number: 10, namePt: '2 Samuel', nameEn: '2 Samuel', abbrevPt: '2Sm', abbrevEn: '2Sa', testament: 'AT', group: 'Históricos', totalChapters: 24, queryPt: '2 samuel', queryEn: '2 samuel' },
  { number: 11, namePt: '1 Reis', nameEn: '1 Kings', abbrevPt: '1Rs', abbrevEn: '1Ki', testament: 'AT', group: 'Históricos', totalChapters: 22, queryPt: '1 reis', queryEn: '1 kings' },
  { number: 12, namePt: '2 Reis', nameEn: '2 Kings', abbrevPt: '2Rs', abbrevEn: '2Ki', testament: 'AT', group: 'Históricos', totalChapters: 25, queryPt: '2 reis', queryEn: '2 kings' },
  { number: 13, namePt: '1 Crônicas', nameEn: '1 Chronicles', abbrevPt: '1Cr', abbrevEn: '1Ch', testament: 'AT', group: 'Históricos', totalChapters: 29, queryPt: '1 cronicas', queryEn: '1 chronicles' },
  { number: 14, namePt: '2 Crônicas', nameEn: '2 Chronicles', abbrevPt: '2Cr', abbrevEn: '2Ch', testament: 'AT', group: 'Históricos', totalChapters: 36, queryPt: '2 cronicas', queryEn: '2 chronicles' },
  { number: 15, namePt: 'Esdras', nameEn: 'Ezra', abbrevPt: 'Ed', abbrevEn: 'Ezr', testament: 'AT', group: 'Históricos', totalChapters: 10, queryPt: 'esdras', queryEn: 'ezra' },
  { number: 16, namePt: 'Neemias', nameEn: 'Nehemiah', abbrevPt: 'Ne', abbrevEn: 'Neh', testament: 'AT', group: 'Históricos', totalChapters: 13, queryPt: 'neemias', queryEn: 'nehemiah' },
  { number: 17, namePt: 'Ester', nameEn: 'Esther', abbrevPt: 'Et', abbrevEn: 'Est', testament: 'AT', group: 'Históricos', totalChapters: 10, queryPt: 'ester', queryEn: 'esther' },

  // Poéticos e Sabedoria
  { number: 18, namePt: 'Jó', nameEn: 'Job', abbrevPt: 'Jó', abbrevEn: 'Job', testament: 'AT', group: 'Poéticos e Sabedoria', totalChapters: 42, queryPt: 'jo', queryEn: 'job' },
  { number: 19, namePt: 'Salmos', nameEn: 'Psalms', abbrevPt: 'Sl', abbrevEn: 'Psa', testament: 'AT', group: 'Poéticos e Sabedoria', totalChapters: 150, queryPt: 'salmos', queryEn: 'psalms' },
  { number: 20, namePt: 'Provérbios', nameEn: 'Proverbs', abbrevPt: 'Pv', abbrevEn: 'Pro', testament: 'AT', group: 'Poéticos e Sabedoria', totalChapters: 31, queryPt: 'proverbios', queryEn: 'proverbs' },
  { number: 21, namePt: 'Eclesiastes', nameEn: 'Ecclesiastes', abbrevPt: 'Ec', abbrevEn: 'Ecc', testament: 'AT', group: 'Poéticos e Sabedoria', totalChapters: 12, queryPt: 'eclesiastes', queryEn: 'ecclesiastes' },
  { number: 22, namePt: 'Cânticos (Cantares)', nameEn: 'Song of Solomon', abbrevPt: 'Ct', abbrevEn: 'Sng', testament: 'AT', group: 'Poéticos e Sabedoria', totalChapters: 8, queryPt: 'canticos', queryEn: 'song of solomon' },

  // Profetas Maiores
  { number: 23, namePt: 'Isaías', nameEn: 'Isaiah', abbrevPt: 'Is', abbrevEn: 'Isa', testament: 'AT', group: 'Profetas Maiores', totalChapters: 66, queryPt: 'isaias', queryEn: 'isaiah' },
  { number: 24, namePt: 'Jeremias', nameEn: 'Jeremiah', abbrevPt: 'Jr', abbrevEn: 'Jer', testament: 'AT', group: 'Profetas Maiores', totalChapters: 52, queryPt: 'jeremias', queryEn: 'jeremiah' },
  { number: 25, namePt: 'Lamentações', nameEn: 'Lamentations', abbrevPt: 'Lm', abbrevEn: 'Lam', testament: 'AT', group: 'Profetas Maiores', totalChapters: 5, queryPt: 'lamentacoes', queryEn: 'lamentations' },
  { number: 26, namePt: 'Ezequiel', nameEn: 'Ezekiel', abbrevPt: 'Ez', abbrevEn: 'Ezk', testament: 'AT', group: 'Profetas Maiores', totalChapters: 48, queryPt: 'ezequiel', queryEn: 'ezekiel' },
  { number: 27, namePt: 'Daniel', nameEn: 'Daniel', abbrevPt: 'Dn', abbrevEn: 'Dan', testament: 'AT', group: 'Profetas Maiores', totalChapters: 12, queryPt: 'daniel', queryEn: 'daniel' },

  // Profetas Menores
  { number: 28, namePt: 'Oseias', nameEn: 'Hosea', abbrevPt: 'Os', abbrevEn: 'Hos', testament: 'AT', group: 'Profetas Menores', totalChapters: 14, queryPt: 'oseias', queryEn: 'hosea' },
  { number: 29, namePt: 'Joel', nameEn: 'Joel', abbrevPt: 'Jl', abbrevEn: 'Jol', testament: 'AT', group: 'Profetas Menores', totalChapters: 3, queryPt: 'joel', queryEn: 'joel' },
  { number: 30, namePt: 'Amós', nameEn: 'Amos', abbrevPt: 'Am', abbrevEn: 'Amo', testament: 'AT', group: 'Profetas Menores', totalChapters: 9, queryPt: 'amos', queryEn: 'amos' },
  { number: 31, namePt: 'Obadias', nameEn: 'Obadiah', abbrevPt: 'Ob', abbrevEn: 'Oba', testament: 'AT', group: 'Profetas Menores', totalChapters: 1, queryPt: 'obadias', queryEn: 'obadiah' },
  { number: 32, namePt: 'Jonas', nameEn: 'Jonah', abbrevPt: 'Jn', abbrevEn: 'Jon', testament: 'AT', group: 'Profetas Menores', totalChapters: 4, queryPt: 'jonas', queryEn: 'jonah' },
  { number: 33, namePt: 'Miqueias', nameEn: 'Micah', abbrevPt: 'Mq', abbrevEn: 'Mic', testament: 'AT', group: 'Profetas Menores', totalChapters: 7, queryPt: 'miqueias', queryEn: 'micah' },
  { number: 34, namePt: 'Naum', nameEn: 'Nahum', abbrevPt: 'Na', abbrevEn: 'Nah', testament: 'AT', group: 'Profetas Menores', totalChapters: 3, queryPt: 'naum', queryEn: 'nahum' },
  { number: 35, namePt: 'Habacuque', nameEn: 'Habakkuk', abbrevPt: 'Hc', abbrevEn: 'Hab', testament: 'AT', group: 'Profetas Menores', totalChapters: 3, queryPt: 'habacuque', queryEn: 'habakkuk' },
  { number: 36, namePt: 'Sofonias', nameEn: 'Zephaniah', abbrevPt: 'Sf', abbrevEn: 'Zep', testament: 'AT', group: 'Profetas Menores', totalChapters: 3, queryPt: 'sofonias', queryEn: 'zephaniah' },
  { number: 37, namePt: 'Ageu', nameEn: 'Haggai', abbrevPt: 'Ag', abbrevEn: 'Hag', testament: 'AT', group: 'Profetas Menores', totalChapters: 2, queryPt: 'ageu', queryEn: 'haggai' },
  { number: 38, namePt: 'Zacarias', nameEn: 'Zechariah', abbrevPt: 'Zc', abbrevEn: 'Zec', testament: 'AT', group: 'Profetas Menores', totalChapters: 14, queryPt: 'zacarias', queryEn: 'zechariah' },
  { number: 39, namePt: 'Malaquias', nameEn: 'Malachi', abbrevPt: 'Ml', abbrevEn: 'Mal', testament: 'AT', group: 'Profetas Menores', totalChapters: 4, queryPt: 'malaquias', queryEn: 'malachi' },

  // --- NOVO TESTAMENTO (27 Livros) ---
  // Evangelhos
  { number: 40, namePt: 'Mateus', nameEn: 'Matthew', abbrevPt: 'Mt', abbrevEn: 'Mat', testament: 'NT', group: 'Evangelhos', totalChapters: 28, queryPt: 'mateus', queryEn: 'matthew' },
  { number: 41, namePt: 'Marcos', nameEn: 'Mark', abbrevPt: 'Mc', abbrevEn: 'Mrk', testament: 'NT', group: 'Evangelhos', totalChapters: 16, queryPt: 'marcos', queryEn: 'mark' },
  { number: 42, namePt: 'Lucas', nameEn: 'Luke', abbrevPt: 'Lc', abbrevEn: 'Luk', testament: 'NT', group: 'Evangelhos', totalChapters: 24, queryPt: 'lucas', queryEn: 'luke' },
  { number: 43, namePt: 'João', nameEn: 'John', abbrevPt: 'Jo', abbrevEn: 'Jhn', testament: 'NT', group: 'Evangelhos', totalChapters: 21, queryPt: 'joao', queryEn: 'john' },

  // História
  { number: 44, namePt: 'Atos dos Apóstolos', nameEn: 'Acts', abbrevPt: 'At', abbrevEn: 'Act', testament: 'NT', group: 'História', totalChapters: 28, queryPt: 'atos', queryEn: 'acts' },

  // Epístolas Paulinas
  { number: 45, namePt: 'Romanos', nameEn: 'Romans', abbrevPt: 'Rm', abbrevEn: 'Rom', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 16, queryPt: 'romanos', queryEn: 'romans' },
  { number: 46, namePt: '1 Coríntios', nameEn: '1 Corinthians', abbrevPt: '1Co', abbrevEn: '1Co', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 16, queryPt: '1 corintios', queryEn: '1 corinthians' },
  { number: 47, namePt: '2 Coríntios', nameEn: '2 Corinthians', abbrevPt: '2Co', abbrevEn: '2Co', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 13, queryPt: '2 corintios', queryEn: '2 corinthians' },
  { number: 48, namePt: 'Gálatas', nameEn: 'Galatians', abbrevPt: 'Gl', abbrevEn: 'Gal', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 6, queryPt: 'galatas', queryEn: 'galatians' },
  { number: 49, namePt: 'Efésios', nameEn: 'Ephesians', abbrevPt: 'Ef', abbrevEn: 'Eph', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 6, queryPt: 'efesios', queryEn: 'ephesians' },
  { number: 50, namePt: 'Filipenses', nameEn: 'Philippians', abbrevPt: 'Fp', abbrevEn: 'Php', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 4, queryPt: 'filipenses', queryEn: 'philippians' },
  { number: 51, namePt: 'Colossenses', nameEn: 'Colossians', abbrevPt: 'Cl', abbrevEn: 'Col', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 4, queryPt: 'colossenses', queryEn: 'colossians' },
  { number: 52, namePt: '1 Tessalonicenses', nameEn: '1 Thessalonians', abbrevPt: '1Ts', abbrevEn: '1Th', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 5, queryPt: '1 tessalonicenses', queryEn: '1 thessalonians' },
  { number: 53, namePt: '2 Tessalonicenses', nameEn: '2 Thessalonians', abbrevPt: '2Ts', abbrevEn: '2Th', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 3, queryPt: '2 tessalonicenses', queryEn: '2 thessalonians' },
  { number: 54, namePt: '1 Timóteo', nameEn: '1 Timothy', abbrevPt: '1Tm', abbrevEn: '1Ti', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 6, queryPt: '1 timoteo', queryEn: '1 timothy' },
  { number: 55, namePt: '2 Timóteo', nameEn: '2 Timothy', abbrevPt: '2Tm', abbrevEn: '2Ti', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 4, queryPt: '2 timoteo', queryEn: '2 timothy' },
  { number: 56, namePt: 'Tito', nameEn: 'Titus', abbrevPt: 'Tt', abbrevEn: 'Tit', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 3, queryPt: 'tito', queryEn: 'titus' },
  { number: 57, namePt: 'Filemom', nameEn: 'Philemon', abbrevPt: 'Fm', abbrevEn: 'Phm', testament: 'NT', group: 'Epístolas Paulinas', totalChapters: 1, queryPt: 'filemom', queryEn: 'philemon' },

  // Epístolas Gerais
  { number: 58, namePt: 'Hebreus', nameEn: 'Hebrews', abbrevPt: 'Hb', abbrevEn: 'Heb', testament: 'NT', group: 'Epístolas Gerais', totalChapters: 13, queryPt: 'hebreus', queryEn: 'hebrews' },
  { number: 59, namePt: 'Tiago', nameEn: 'James', abbrevPt: 'Tg', abbrevEn: 'Jas', testament: 'NT', group: 'Epístolas Gerais', totalChapters: 5, queryPt: 'tiago', queryEn: 'james' },
  { number: 60, namePt: '1 Pedro', nameEn: '1 Peter', abbrevPt: '1Pe', abbrevEn: '1Pe', testament: 'NT', group: 'Epístolas Gerais', totalChapters: 5, queryPt: '1 pedro', queryEn: '1 peter' },
  { number: 61, namePt: '2 Pedro', nameEn: '2 Peter', abbrevPt: '2Pe', abbrevEn: '2Pe', testament: 'NT', group: 'Epístolas Gerais', totalChapters: 3, queryPt: '2 pedro', queryEn: '2 peter' },
  { number: 62, namePt: '1 João', nameEn: '1 John', abbrevPt: '1Jo', abbrevEn: '1Jn', testament: 'NT', group: 'Epístolas Gerais', totalChapters: 5, queryPt: '1 joao', queryEn: '1 john' },
  { number: 63, namePt: '2 João', nameEn: '2 John', abbrevPt: '2Jo', abbrevEn: '2Jn', testament: 'NT', group: 'Epístolas Gerais', totalChapters: 1, queryPt: '2 joao', queryEn: '2 john' },
  { number: 64, namePt: '3 João', nameEn: '3 John', abbrevPt: '3Jo', abbrevEn: '3Jn', testament: 'NT', group: 'Epístolas Gerais', totalChapters: 1, queryPt: '3 joao', queryEn: '3 john' },
  { number: 65, namePt: 'Judas', nameEn: 'Jude', abbrevPt: 'Jd', abbrevEn: 'Jud', testament: 'NT', group: 'Epístolas Gerais', totalChapters: 1, queryPt: 'judas', queryEn: 'jude' },

  // Profecia
  { number: 66, namePt: 'Apocalipse', nameEn: 'Revelation', abbrevPt: 'Ap', abbrevEn: 'Rev', testament: 'NT', group: 'Profecia', totalChapters: 22, queryPt: 'apocalipse', queryEn: 'revelation' }
];

export const getBookByNumber = (num: number): BibleBookInfo => {
  return ALL_BIBLE_BOOKS.find(b => b.number === num) || ALL_BIBLE_BOOKS[0];
};

export const OLD_TESTAMENT_BOOKS = ALL_BIBLE_BOOKS.filter(b => b.testament === 'AT');
export const NEW_TESTAMENT_BOOKS = ALL_BIBLE_BOOKS.filter(b => b.testament === 'NT');

export const normalizeBibleStr = (str: string): string => {
  return (str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
};

export interface ParsedScripture {
  bookNumber: number;
  chapter: number;
  bookName: string;
}

/**
 * Analisa uma referência bíblica em texto (ex: "Malaquias 3-4", "João 10:22", "Lucas 2:1-7", "1 Samuel 16:7")
 * e localiza o número canônico do livro (1 a 66) e o capítulo inicial.
 */
export function parseScriptureReference(reference: string): ParsedScripture | null {
  if (!reference) return null;
  const clean = reference.trim();

  // Expressão regular para capturar: [Prefixo numérico opcional 1-3] + [Nome do Livro] + [Espaço] + [Capítulo]
  const match = clean.match(/^([1-3]?\s*[\p{L}\s]+?)\s+(\d+)(?:[:\-\s]|$)/iu);
  if (!match) {
    // Tenta encontrar apenas pelo nome do livro se não tiver capítulo explícito (ex: "Esdras e Neemias")
    const words = clean.split(/[\s,;]+/);
    for (const word of words) {
      const normWord = normalizeBibleStr(word);
      const found = ALL_BIBLE_BOOKS.find(b => 
        normalizeBibleStr(b.namePt) === normWord || 
        normalizeBibleStr(b.abbrevPt) === normWord || 
        normalizeBibleStr(b.queryPt) === normWord
      );
      if (found) {
        return { bookNumber: found.number, chapter: 1, bookName: found.namePt };
      }
    }
    return null;
  }

  const rawBook = normalizeBibleStr(match[1]);
  const chapter = parseInt(match[2], 10) || 1;

  // Busca o livro exato
  const found = ALL_BIBLE_BOOKS.find(b => {
    const pt = normalizeBibleStr(b.namePt);
    const abbrevPt = normalizeBibleStr(b.abbrevPt);
    const qPt = normalizeBibleStr(b.queryPt);
    const en = normalizeBibleStr(b.nameEn);
    const abbrevEn = normalizeBibleStr(b.abbrevEn);

    return pt === rawBook || 
           abbrevPt === rawBook || 
           qPt === rawBook ||
           en === rawBook ||
           abbrevEn === rawBook;
  }) || ALL_BIBLE_BOOKS.find(b => {
    const pt = normalizeBibleStr(b.namePt);
    return pt.startsWith(rawBook) || rawBook.startsWith(pt);
  });

  if (found) {
    return {
      bookNumber: found.number,
      chapter: Math.min(Math.max(1, chapter), found.totalChapters),
      bookName: found.namePt
    };
  }

  return null;
}

export interface BibleSearchResult {
  queryText: string;
  isJustChapter: boolean;
  book: BibleBookInfo | null;
  chapter: number | null;
  allMatches: BibleBookInfo[];
}

/**
 * Busca flexível de livros e capítulos, insensível a acentos/maiúsculas,
 * suportando termos como 'genesis', 'joao 3', 'joão 3:16', 'sl 23', 'salmo 23', '1 co 13', 'cap 5' ou '23'.
 */
export function parseBibleSearch(query: string, currentBookNumber: number = 1): BibleSearchResult {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      queryText: '',
      isJustChapter: false,
      book: null,
      chapter: null,
      allMatches: ALL_BIBLE_BOOKS
    };
  }

  const norm = normalizeBibleStr(trimmed);

  // 1. Verifica se digitou apenas número do capítulo ou 'cap X' ou 'capítulo X'
  const justChapterMatch = norm.match(/^(?:cap(?:itulo)?\.?\s*)?(\d+)$/i);
  if (justChapterMatch) {
    const chapNum = parseInt(justChapterMatch[1], 10);
    const currBook = ALL_BIBLE_BOOKS.find(b => b.number === currentBookNumber) || ALL_BIBLE_BOOKS[0];
    return {
      queryText: norm,
      isJustChapter: true,
      chapter: Math.min(Math.max(1, chapNum), currBook.totalChapters),
      book: currBook,
      allMatches: [currBook]
    };
  }

  // 2. Verifica se digitou '[Livro] [Capítulo](:[Versículo])?'
  const bookChapMatch = norm.match(/^([1-3]?\s*[\p{L}\s]+?)\s+(\d+)(?:[:\-\s]|$)/iu);
  let bookQuery = norm;
  let targetChapter: number | null = null;

  if (bookChapMatch) {
    bookQuery = bookChapMatch[1].trim();
    targetChapter = parseInt(bookChapMatch[2], 10);
  }

  // Filtra livros canônicos
  const matches = ALL_BIBLE_BOOKS.filter(b => {
    const pt = normalizeBibleStr(b.namePt);
    const ab = normalizeBibleStr(b.abbrevPt);
    const en = normalizeBibleStr(b.nameEn);
    const qPt = normalizeBibleStr(b.queryPt);
    const grp = normalizeBibleStr(b.group);

    // Aliases frequentes: "salmo" -> Salmos (19), "cantares" -> Cânticos (22)
    const isSalmo = (bookQuery === 'salmo' || bookQuery.startsWith('salm')) && b.number === 19;
    const isCantares = (bookQuery === 'cantar' || bookQuery.startsWith('cantar')) && b.number === 22;

    return pt.includes(bookQuery) ||
           ab === bookQuery ||
           qPt.includes(bookQuery) ||
           en.includes(bookQuery) ||
           grp.includes(bookQuery) ||
           isSalmo ||
           isCantares;
  });

  // Ordena para que os mais exatos fiquem no topo
  matches.sort((a, b) => {
    const aPt = normalizeBibleStr(a.namePt);
    const bPt = normalizeBibleStr(b.namePt);
    const aAb = normalizeBibleStr(a.abbrevPt);
    const bAb = normalizeBibleStr(b.abbrevPt);

    if (aPt === bookQuery || aAb === bookQuery) return -1;
    if (bPt === bookQuery || bAb === bookQuery) return 1;
    if (aPt.startsWith(bookQuery) && !bPt.startsWith(bookQuery)) return -1;
    if (bPt.startsWith(bookQuery) && !aPt.startsWith(bookQuery)) return 1;
    return 0;
  });

  const topBook = matches[0] || null;
  const finalChapter = (targetChapter && topBook) 
    ? Math.min(Math.max(1, targetChapter), topBook.totalChapters)
    : targetChapter;

  return {
    queryText: bookQuery,
    isJustChapter: false,
    book: topBook,
    chapter: finalChapter,
    allMatches: matches
  };
}

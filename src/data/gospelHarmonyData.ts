import { GospelHarmonyEvent } from '../types';

export interface EvangelistMeta {
  key: 'matthew' | 'mark' | 'luke' | 'john';
  name: string;
  initial: string;
  symbol: string;
  symbolDescription: string;
  primaryEmphasis: string;
  badgeClass: string;
  borderClass: string;
  accentBg: string;
}

export const EVANGELISTS_META: Record<'matthew' | 'mark' | 'luke' | 'john', EvangelistMeta> = {
  matthew: {
    key: 'matthew',
    name: 'Mateus',
    initial: 'Mt',
    symbol: 'Homem Alado',
    symbolDescription: 'A Genealogia Real e a Humanidade do Messias',
    primaryEmphasis: 'Jesus é o Rei Messiânico e Filho de Abraão que cumpre as profecias do Antigo Testamento.',
    badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    borderClass: 'border-amber-500/30',
    accentBg: 'bg-amber-950/30'
  },
  mark: {
    key: 'mark',
    name: 'Marcos',
    initial: 'Mc',
    symbol: 'Leão',
    symbolDescription: 'A Força Régia e a Voz que Clama no Deserto',
    primaryEmphasis: 'Jesus é o Servo Sofredor e Filho Poderoso de Deus que veio para dar a vida em resgate de muitos.',
    badgeClass: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    borderClass: 'border-rose-500/30',
    accentBg: 'bg-rose-950/30'
  },
  luke: {
    key: 'luke',
    name: 'Lucas',
    initial: 'Lc',
    symbol: 'Boi / Novilho',
    symbolDescription: 'O Sacrifício Sacerdotal e o Templo',
    primaryEmphasis: 'Jesus é o Filho do Homem, o Salvador universal dos marginalizados, gentios, pobres e pecadores.',
    badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    borderClass: 'border-emerald-500/30',
    accentBg: 'bg-emerald-950/30'
  },
  john: {
    key: 'john',
    name: 'João',
    initial: 'Jo',
    symbol: 'Águia',
    symbolDescription: 'O Voo Celestial e o Olhar Fitado na Glória do Pai',
    primaryEmphasis: 'Jesus é o Logos Eterno, a Palavra Encarnada e o Filho Unigênito que revela a glória do Pai.',
    badgeClass: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    borderClass: 'border-sky-500/30',
    accentBg: 'bg-sky-950/30'
  }
};

export const gospelHarmonyData: GospelHarmonyEvent[] = [
  // 1. O Batismo de Jesus
  {
    id: 'batismo-de-jesus',
    title: 'O Batismo de Jesus e a Teofania Trinitária',
    category: 'MINISTERIO',
    references: {
      matthew: 'Mateus 3:13-17',
      mark: 'Marcos 1:9-11',
      luke: 'Lucas 3:21-22',
      john: 'João 1:29-34'
    },
    theologicalEmphasis: 'A revelação inaugural do mistério da Trindade na inauguração do ministério público. Mateus inclui o diálogo de humildade com João Batista ("convém cumprir toda a justiça", tipologia do Servo do Senhor); Marcos destaca a urgência cósmica com o verbo schizomenous ("os céus rasgando-se"); Lucas observa Jesus orando no momento em que o Espírito desce em forma corpórea; João não descreve o rito em si, mas o testemunho oracular do Batista proclamando Jesus como o "Cordeiro de Deus que tira o pecado do mundo" e Aquele que batiza com o Espírito Santo.'
  },

  // 2. A Confissão de Pedro em Cesareia de Filipe
  {
    id: 'confissao-de-pedro',
    title: 'A Confissão de Pedro em Cesareia de Filipe',
    category: 'MINISTERIO',
    references: {
      matthew: 'Mateus 16:13-20',
      mark: 'Marcos 8:27-30',
      luke: 'Lucas 9:18-21',
      john: 'João 6:68-69'
    },
    theologicalEmphasis: 'O ponto de inflexão sinótico onde a identidade messiânica é formalmente declarada antes do caminho da cruz. Marcos e Lucas preservam a resposta concisa ("Tu és o Cristo" / "O Cristo de Deus"), preservando o motivo do segredo messiânico; Mateus adiciona a declaração eclesiológica monumental: a bem-aventurança a Simão Barjonas, a revelação pelo Pai e a promessa: "sobre esta pedra edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela"; João registra o paralelo após a debandada do discurso do Pão da Vida: "Senhor, para quem iremos? Tu tens as palavras da vida eterna".'
  },

  // 3. A Instituição da Ceia do Senhor e o Lava-Pés
  {
    id: 'instituicao-da-ceia',
    title: 'A Instituição da Ceia do Senhor e o Lava-Pés',
    category: 'PAIXAO_E_RESSURREICAO',
    references: {
      matthew: 'Mateus 26:26-30',
      mark: 'Marcos 14:22-26',
      luke: 'Lucas 22:14-20',
      john: 'João 13:1-17'
    },
    theologicalEmphasis: 'A resignificação redentora da Páscoa judaica sob a Nova Aliança no sangue de Cristo. Marcos e Mateus compartilham a fórmula das palavras da instituição do pão ("Isto é o meu corpo") e do cálice derramado "em favor de muitos para remissão de pecados"; Lucas acrescenta o mandamento memorial ("Fazei isto em memória de mim") e o anúncio escatológico do Reino; João omite intencionalmente as palavras sacramentais (já aprofundadas no cap. 6) para apresentar o Lava-Pés como encenação dramática e pedagógica da mesma atitude sacrificial de auto-humilhação que culminará na cruz.'
  },

  // 4. A Ressurreição e o Túmulo Vazio
  {
    id: 'ressurreicao-tumulo-vazio',
    title: 'A Ressurreição de Jesus e o Túmulo Vazio',
    category: 'PAIXAO_E_RESSURREICAO',
    references: {
      matthew: 'Mateus 28:1-10',
      mark: 'Marcos 16:1-8',
      luke: 'Lucas 24:1-12',
      john: 'João 20:1-18'
    },
    theologicalEmphasis: 'O clímax histórico e a vitória escatológica sobre a corrupção da morte. Mateus realça o abalo cósmico: um grande terremoto, o anjo descendo como relâmpago que aterroriza os guardas romanos e a aparição de Jesus às mulheres; Marcos conclui com as mulheres tomadas de espanto e reverência diante do jovem de vestes brancas; Lucas apresenta dois homens com vestes resplandecentes confrontando os discípulos ("Por que buscais entre os mortos aquele que vive?"); João focaliza a corrida de Pedro e do discípulo amado, a disposição exata dos lençóis e o comovente diálogo pessoal de Jesus ressurreto com Maria Madalena no jardim.'
  },

  // 5. A Multiplicação dos Pães e Peixes
  {
    id: 'multiplicacao-dos-paes',
    title: 'A Primeira Multiplicação dos Pães e Peixes',
    category: 'MILAGRE',
    references: {
      matthew: 'Mateus 14:13-21',
      mark: 'Marcos 6:30-44',
      luke: 'Lucas 9:10-17',
      john: 'João 6:1-15'
    },
    theologicalEmphasis: 'O único milagre público narrado nos quatro evangelhos canônicos, tipificando o novo maná no deserto e o banquete messiânico escatológico. Marcos detalha a compaixão de Jesus pelas ovelhas sem pastor e os grupos organizados como canteiros sobre a grama verde (Salmo 23); Mateus enfatiza a instrução aos discípulos ("Dai-lhes vós mesmos de comer"); Lucas situa o evento próximo a Betsaida relacionando-o à proclamação do Reino; João destaca a celebração da Páscoa judaica próxima e conecta o sinal diretamente ao solene sermão de Cristo como o "Pão da Vida que desceu do céu".'
  },

  // 6. A Transfiguração no Monte
  {
    id: 'a-transfiguracao',
    title: 'A Transfiguração no Monte da Revelação',
    category: 'MINISTERIO',
    references: {
      matthew: 'Mateus 17:1-9',
      mark: 'Marcos 9:2-10',
      luke: 'Lucas 9:28-36'
    },
    theologicalEmphasis: 'A manifestação antecipada da glória parousíaca de Jesus na presença de Moisés (a Lei) e Elias (os Profetas). Mateus ressalta o rosto que brilha como o sol e a nuvem luminosa (a Shekinah de Deus); Marcos enfatiza a brancura sobrenatural das vestes impossível de obter por qualquer tintureiro da terra; Lucas observa que Jesus subira para orar e revela o tema da conversa secreta: eles falavam sobre o "êxodo" (exodos) que Jesus haveria de consumar em Jerusalém através da Sua morte redentora.'
  },

  // 7. A Entrada Triunfal em Jerusalém
  {
    id: 'entrada-triunfal',
    title: 'A Entrada Triunfal em Jerusalém no Domingo de Ramos',
    category: 'MINISTERIO',
    references: {
      matthew: 'Mateus 21:1-11',
      mark: 'Marcos 11:1-11',
      luke: 'Lucas 19:28-40',
      john: 'João 12:12-19'
    },
    theologicalEmphasis: 'A apresentação pública do Messias como Rei pacífico em cumprimento a Zacarias 9:9 ("Eis que o teu Rei vem a ti, manso e montado num jumento"). Mateus salienta o cumprimento profético chamando Sião ao júbilo; Marcos mostra a chegada modesta e a inspeção do Templo ao entardecer; Lucas acrescenta as lágrimas de Jesus ao contemplar a iminente destruição de Jerusalém e a afirmação de que se os discípulos se calassem, as próprias pedras clamariam; João destaca os ramos de palmeira como símbolo nacional de vitória e o desespero dos líderes religiosos perante a adesão da multidão.'
  },

  // 8. A Purificação do Templo
  {
    id: 'purificacao-do-templo',
    title: 'A Purificação do Templo e o Juízo sobre o Culto',
    category: 'MINISTERIO',
    references: {
      matthew: 'Mateus 21:12-17',
      mark: 'Marcos 11:15-19',
      luke: 'Lucas 19:45-48',
      john: 'João 2:13-22'
    },
    theologicalEmphasis: 'O zelo profético de Jesus contra a mercantilização da casa de Seu Pai. Nos três sinóticos, o evento culmina nos dias finais em Jerusalém, servindo de acusação jurídica contra a casta sacerdotal corrompida ("A minha casa será chamada casa de oração; vós, porém, a tendes transformado em covil de salteadores"); João posiciona o evento no início do seu ministério (cap. 2), transformando-o num manifesto programático onde o próprio corpo crucificado e ressurreto de Jesus substitui o edifício físico de Herodes como santuário definitivo da Aliança.'
  },

  // 9. A Agonia no Getsêmani e a Prisão
  {
    id: 'agonia-getsemani',
    title: 'A Agonia no Getsêmani e a Submissão ao Cálice',
    category: 'PAIXAO_E_RESSURREICAO',
    references: {
      matthew: 'Mateus 26:36-56',
      mark: 'Marcos 14:32-52',
      luke: 'Lucas 22:39-53',
      john: 'João 18:1-12'
    },
    theologicalEmphasis: 'O confronto supremo onde o Filho voluntariamente se submete à vontade salvífica do Pai ao beber o cálice da ira divina contra o pecado. Mateus e Marcos registram o clamor doloroso em três momentos sucessivos ("Meu Pai, se é possível, passe de mim este cálice; todavia, não seja como eu quero, mas como tu queres"); Lucas acrescenta o detalhe da angústia extrema em que o suor se tornou como gotas de sangue caindo na terra e o anjo que desceu para fortalecê-lO; João salienta a soberania majestosa de Jesus: Ele sabe de tudo o que Lhe vai acontecer, vai ao encontro dos soldados e estes caem por terra quando Ele profere a fórmula divina "EU SOU" (egō eimi).'
  },

  // 10. A Crucificação e as Palavras na Cruz
  {
    id: 'crucificacao-e-morte',
    title: 'A Crucificação, Morte e as Sete Palavras da Cruz',
    category: 'PAIXAO_E_RESSURREICAO',
    references: {
      matthew: 'Mateus 27:32-56',
      mark: 'Marcos 15:21-41',
      luke: 'Lucas 23:26-49',
      john: 'João 19:17-37'
    },
    theologicalEmphasis: 'O sacrifício expiatório substitutivo e o clímax da redenção cristológica. Mateus e Marcos reportam o brado de desamparo e cumprimento do Salmo 22 ("Eloí, Eloí, lamá sabactâni?"), o véu rasgado e a confissão do centurião; Lucas focaliza o perdão intercessório ("Pai, perdoa-lhes"), a promessa ao ladrão arrependido ("Hoje estarás comigo no Paraíso") e a entrega serena ("Pai, nas tuas mãos entrego o meu espírito"); João traz a providência filial para com Maria, o cumprimento escriturístico ("Tenho sede"), o brado cósmico de vitória consumada ("Tetelestai - Está consumado!") e o sangue e água saindo do Seu lado ferido.'
  },

  // 11. O Nascimento e a Encarnação do Filho de Deus
  {
    id: 'nascimento-encarnacao',
    title: 'A Encarnação e o Nascimento de Jesus Cristo',
    category: 'NASCIMENTO',
    references: {
      matthew: 'Mateus 1:18-25; 2:1-12',
      luke: 'Lucas 1:26-38; 2:1-20',
      john: 'João 1:1-14'
    },
    theologicalEmphasis: 'O mistério de Deus assumindo a condição humana no tempo e no espaço. Mateus constrói o relato em torno da crise e obediência fiel de José, o sonho com o anjo, o cumprimento de Isaías 7:14 ("Emanuel - Deus conosco") e a visitação régia dos Magos do Oriente com ouro, incenso e mirra; Lucas relata a anunciação a Maria, o cântico profético do Magnificat, o decreto imperial romano, a manjedoura humilde em Belém e a proclamação celestial aos pastores no campo; João não traz relato narrativo da infância, mas o prólogo teológico mais profundo das Escrituras sobre a tabernaculação do Logos eterno ("E o Verbo se fez carne e habitou entre nós").'
  },

  // 12. As Tentações no Deserto
  {
    id: 'tentacoes-no-deserto',
    title: 'As Tentações de Jesus no Deserto da Judeia',
    category: 'MINISTERIO',
    references: {
      matthew: 'Mateus 4:1-11',
      mark: 'Marcos 1:12-13',
      luke: 'Lucas 4:1-13'
    },
    theologicalEmphasis: 'O Segundo Adão e o Verdadeiro Israel resistindo à prova onde a humanidade no Éden e Israel no deserto caíram. Jesus repele Satanás citando com precisão o livro de Deuteronômio (caps. 8 e 6). Mateus organiza a ordem das tentações culminando no monte elevado (a oferta satânica dos reinos do mundo versus a soberania de Deus); Lucas inverte a segunda e a terceira tentação para culminar no pináculo do Templo em Jerusalém (epicentro geográfico e teológico do seu Evangelho); Marcos condensa a narrativa em dois versículos poéticos: o Espírito que O impele, quarenta dias com as feras selvagens e os anjos que O serviam, prenunciando a paz da Nova Criação.'
  }
];

/**
 * Normalizes book names (e.g. "Mt", "Mateus", "São Mateus" -> "Mateus").
 */
function normalizeBook(name: string): string {
  const clean = name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  if (clean.includes('mateus') || clean === 'mt') return 'mateus';
  if (clean.includes('marcos') || clean === 'mc') return 'marcos';
  if (clean.includes('lucas') || clean === 'lc') return 'lucas';
  if (clean.includes('joao') || clean === 'jo') return 'joao';
  return clean;
}

/**
 * Parses chapter numbers from a reference string like "Mateus 14:13-21" or "Mateus 1:18-25; 2:1-12"
 */
function extractChaptersFromRef(ref?: string): number[] {
  if (!ref) return [];
  const chapters: number[] = [];
  // Match patterns like "14:" or "; 2:"
  const matches = ref.matchAll(/(?:^|[A-Za-zÀ-ÿ\s;])(\d+):/g);
  for (const m of matches) {
    if (m[1]) {
      const num = parseInt(m[1], 10);
      if (!chapters.includes(num)) {
        chapters.push(num);
      }
    }
  }
  return chapters;
}

/**
 * Checks if a GospelHarmonyEvent matches a book and chapter.
 */
export function isEventMatchingBookAndChapter(event: GospelHarmonyEvent, book: string, chapter: number): boolean {
  const normBook = normalizeBook(book);

  if (normBook === 'mateus' && event.references.matthew) {
    const chs = extractChaptersFromRef(event.references.matthew);
    return chs.includes(chapter);
  }
  if (normBook === 'marcos' && event.references.mark) {
    const chs = extractChaptersFromRef(event.references.mark);
    return chs.includes(chapter);
  }
  if (normBook === 'lucas' && event.references.luke) {
    const chs = extractChaptersFromRef(event.references.luke);
    return chs.includes(chapter);
  }
  if (normBook === 'joao' && event.references.john) {
    const chs = extractChaptersFromRef(event.references.john);
    return chs.includes(chapter);
  }

  return false;
}

/**
 * Returns all harmony events that match the book and chapter.
 */
export function getHarmonyEventsForBookChapter(book: string, chapter: number): GospelHarmonyEvent[] {
  return gospelHarmonyData.filter(event => isEventMatchingBookAndChapter(event, book, chapter));
}

/**
 * Returns the primary harmony event for a book and chapter if any.
 */
export function getFirstHarmonyEventForBookChapter(book: string, chapter: number): GospelHarmonyEvent | undefined {
  return gospelHarmonyData.find(event => isEventMatchingBookAndChapter(event, book, chapter));
}

/**
 * Returns a harmony event by ID.
 */
export function getHarmonyEventById(id: string): GospelHarmonyEvent | undefined {
  return gospelHarmonyData.find(e => e.id === id);
}

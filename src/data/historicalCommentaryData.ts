import { HistoricalCommentary, HistoricalEra } from '../types';

export const HISTORICAL_ERA_META: Record<HistoricalEra, {
  label: string;
  period: string;
  badgeColor: string;
  borderColor: string;
}> = {
  IGREJA_PRIMITIVA_E_PATRISTICA: {
    label: 'Patrística & Igreja Primitiva',
    period: 'Séc. I – VIII d.C.',
    badgeColor: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    borderColor: 'border-amber-500/30'
  },
  IDADE_MEDIA_E_ESCOLASTICA: {
    label: 'Idade Média & Escolástica',
    period: 'Séc. IX – XV d.C.',
    badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
    borderColor: 'border-indigo-500/30'
  },
  REFORMA_PROTESTANTE: {
    label: 'Reforma Protestante',
    period: 'Séc. XVI d.C.',
    badgeColor: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    borderColor: 'border-emerald-500/30'
  },
  PURITANISMO_E_POS_REFORMA: {
    label: 'Puritanismo & Pós-Reforma',
    period: 'Séc. XVII – XVIII d.C.',
    badgeColor: 'bg-sky-500/10 text-sky-300 border-sky-500/30',
    borderColor: 'border-sky-500/30'
  },
  ERA_MODERNA: {
    label: 'Era Moderna & Contemporânea',
    period: 'Séc. XIX – XXI d.C.',
    badgeColor: 'bg-stone-500/10 text-stone-300 border-stone-500/30',
    borderColor: 'border-stone-500/30'
  }
};

export const historicalCommentaries: HistoricalCommentary[] = [
  // 1. Gênesis 1: Agostinho de Hipona
  {
    id: 'gen-1-agostinho',
    passageRef: 'Gênesis 1:1-3',
    commentator: {
      name: 'Agostinho de Hipona',
      era: 'IGREJA_PRIMITIVA_E_PATRISTICA',
      shortBio: 'Bispo de Hipona no norte da África (354–430 d.C.), Doutor da Igreja e um dos pensadores mais influentes do Cristianismo ocidental.'
    },
    sourceDocument: 'Confissões, Livro XI, cap. 13-14 & A Cidade de Deus, Livro XI, cap. 6',
    theologicalFocus: 'A Criação ex nihilo e a Origem do Tempo',
    quote: 'Não foi no tempo que Tu fizeste todas as coisas, ó Deus; pois Tu mesmo és o Autor e Criador de todos os tempos. Nenhum tempo Te é coeterno, porque Tu és imutável, ao passo que o tempo não pode subsistir sem a mudança. O mundo não foi feito no tempo, mas simultaneamente com o tempo. Antes da criação, não havia tempo algum, nem passado, nem futuro; havia apenas a Tua eternidade indivisa. O universo foi trazido à existência a partir do nada (ex nihilo) pelo Teu Verbo todo-poderoso.'
  },

  // 2. João 1:1-14: João Crisóstomo
  {
    id: 'joao-1-crisostomo',
    passageRef: 'João 1:1-14',
    commentator: {
      name: 'João Crisóstomo',
      era: 'IGREJA_PRIMITIVA_E_PATRISTICA',
      shortBio: 'Patriarca de Constantinopla (c. 349–407 d.C.), cognominado "Boca de Ouro" pela sua eloquência inigualável na proclamação expositiva do Evangelho.'
    },
    sourceDocument: 'Homilias sobre o Evangelho de São João, Homilia II e III',
    theologicalFocus: 'A Divindade Eterna e a Encarnação do Logos',
    quote: 'Quando ouvires o evangelista proclamar: "No princípio era o Verbo", não imagines uma palavra passageira ou som articulado pela garganta, mas a Pessoa eterna do Filho, consubstancial ao Pai. E quando declara: "E o Verbo se fez carne", curva a tua mente com reverência e temor santo! Aquele que governa as hostes celestiais assumiu a fraqueza da nossa carne perecível, não abandonando a Sua divindade soberana, mas revestindo-se da nossa condição para curar e redimir a humanidade corrompida pelo pecado.'
  },

  // 3. Romanos 1:16-17: Martinho Lutero
  {
    id: 'romanos-1-lutero',
    passageRef: 'Romanos 1:16-17',
    commentator: {
      name: 'Martinho Lutero',
      era: 'REFORMA_PROTESTANTE',
      shortBio: 'Monge agostiniano, teólogo e professor em Wittenberg (1483–1546), cuja redisputa da justificação pela fé inaugurou a Reforma Protestante.'
    },
    sourceDocument: 'Prefácio à Epístola aos Romanos (1522) & Experiência da Torre',
    theologicalFocus: 'A Doutrina da Justificação pela Fé (Sola Fide)',
    quote: 'Eu odiava ardentemente a expressão "justiça de Deus", pois a compreendia segundo a filosofia aristotélica como aquela justiça ativa pela qual Deus pune severamente os pecadores. Dia e noite eu meditava aflito até que atentei para a conexão das palavras: "No Evangelho a justiça de Deus se revela de fé em fé, como está escrito: O justo viverá pela fé". Então compreendi que a justiça de Deus é aquela dádiva graciosa e passiva pela qual Deus nos justifica pela fé em Cristo. Senti que renasci de novo e que as próprias portas do Paraíso se haviam aberto diante de mim.'
  },

  // 4. Romanos 8:28-39: João Calvino
  {
    id: 'romanos-8-calvino',
    passageRef: 'Romanos 8:28-39',
    commentator: {
      name: 'João Calvino',
      era: 'REFORMA_PROTESTANTE',
      shortBio: 'Teólogo e pastor reformador de Genebra (1509–1564), célebre pelas Institutas da Religião Cristã e pelos comentários exegéticos do cânon bíblico.'
    },
    sourceDocument: 'Comentário sobre a Epístola aos Romanos, cap. 8',
    theologicalFocus: 'A Eleição Graciosa e a Inabalável Segurança da Salvação',
    quote: 'Paulo eleva-se a um cântico triunfante que desafia o inferno e o mundo inteiro: "Se Deus é por nós, quem será contra nós?". A nossa certeza de salvação não repousa sobre a instabilidade dos nossos méritos humanos, mas sobre o conselho eterno e irrevogável de Deus. Nem tribulação, angústia, fome ou espada nos separarão do amor do Pai manifesto na cruz de Cristo. Ele que não poupou Seu próprio Filho, como não nos dará graciosamente com Ele todas as coisas?'
  },

  // 5. Salmo 23: Agostinho de Hipona
  {
    id: 'salmo-23-agostinho',
    passageRef: 'Salmos 23:1-6',
    commentator: {
      name: 'Agostinho de Hipona',
      era: 'IGREJA_PRIMITIVA_E_PATRISTICA',
      shortBio: 'Bispo de Hipona (354–430 d.C.), autor de obras monumentais da teologia bíblica e patrística ocidental.'
    },
    sourceDocument: 'Enarrationes in Psalmos (Exposições sobre os Salmos), Salmo 22/23',
    theologicalFocus: 'Cristo, o Bom Pastor da Alma Redimida',
    quote: '"O Senhor é o meu pastor, nada me faltará": eis a voz radiante da Igreja lavada no sangue do Cordeiro. O Bom Pastor fez-me repousar em pastos verdejantes — as Escrituras sagradas onde a alma se alimenta da verdade incorruptível. Mesmo ao caminhar pelo vale da sombra da morte, que é esta vida presente sujeita a provações e à mortalidade corpórea, não temerei perigo algum, pois a Tua presença santa me cerca, e a Tua vara que castiga e o Teu cajado que guia são o meu refúgio perpétuo.'
  },

  // 6. Filipenses 2:5-11: Atanásio de Alexandria
  {
    id: 'filipenses-2-atanasio',
    passageRef: 'Filipenses 2:5-11',
    commentator: {
      name: 'Atanásio de Alexandria',
      era: 'IGREJA_PRIMITIVA_E_PATRISTICA',
      shortBio: 'Patriarca de Alexandria (c. 296–373 d.C.), campeão da ortodoxia nicena contra o arianismo e grande doutor da Encarnação.'
    },
    sourceDocument: 'De Incarnatione Verbi (Sobre a Encarnação do Verbo), § 8-10',
    theologicalFocus: 'A Kenosis e o Resgate da Humanidade Mortal',
    quote: 'Sendo Deus em glória imutável, o Verbo não reteve para Si o privilégio de ser igual a Deus, mas esvaziou-se tomando forma de servo. Ele assumiu o nosso corpo mortal para entregá-lo à cruz como oferenda pura e sacrifício substitutivo em benefício de todos. Ao morrer em nosso lugar, Ele despojou o poder da morte e aboliu a corrupção humana. Por isso o Pai O exaltou sobremaneira, para que toda língua confesse que Jesus Cristo é o Senhor dos céus e da terra.'
  },

  // 7. Mateus 5:1-12: João Crisóstomo
  {
    id: 'mateus-5-crisostomo',
    passageRef: 'Mateus 5:1-12',
    commentator: {
      name: 'João Crisóstomo',
      era: 'IGREJA_PRIMITIVA_E_PATRISTICA',
      shortBio: 'Patriarca de Constantinopla (c. 349–407 d.C.), extraordinário exegeta patrístico do Novo Testamento.'
    },
    sourceDocument: 'Homilias sobre o Evangelho de São Mateus, Homilia XV',
    theologicalFocus: 'A Humildade e as Bem-Aventuranças do Reino',
    quote: 'Por que o Senhor inaugurou o Seu Sermão da Montanha com os "pobres de espírito"? Porque a humildade de coração é o alicerce indispensável de todas as virtudes divinas. Assim como o orgulho foi o princípio da rebelião de Lúcifer e da ruína humana no Éden, a contrição espiritual é a única porta de acesso ao Reino de Deus. Ser pobre de espírito não é lamentar fraqueza material, mas despojar-se de toda pretensa soberba e reconhecer a absoluta mendicância diante da majestade santa do Criador.'
  },

  // 8. Efésios 2:8-10: Tomás de Aquino
  {
    id: 'efesios-2-aquino',
    passageRef: 'Efésios 2:8-10',
    commentator: {
      name: 'Tomás de Aquino',
      era: 'IDADE_MEDIA_E_ESCOLASTICA',
      shortBio: 'Doutor Angélico (1225–1274), frade dominicano e luminar máximo da teologia escolástica medieval.'
    },
    sourceDocument: 'Super Epistolam B. Pauli ad Ephesios Lectura, cap. 2, lectio 3',
    theologicalFocus: 'A Causa Eficiente da Salvação e o Chamado às Boas Obras',
    quote: 'Paulo declara com precisão insuperável que a graça é um benefício inteiramente imerecido: "Pela graça sois salvos, mediante a fé; e isto não vem de vós, é dom de Deus". A causa primordial da justificação não reside nas forças da criatura, mas exclusivamente na misericórdia gratuita do Altíssimo. E as obras que se seguem não são a raiz da salvação, mas os seus frutos legítimos: fomos criados em Cristo Jesus para as boas obras que Deus preparou para que andássemos nelas.'
  },

  // 9. Êxodo 3:13-15: Gregório de Nazianzo
  {
    id: 'exodo-3-gregorio',
    passageRef: 'Êxodo 3:13-15',
    commentator: {
      name: 'Gregório de Nazianzo',
      era: 'IGREJA_PRIMITIVA_E_PATRISTICA',
      shortBio: 'Arcebispo de Constantinopla (c. 329–390 d.C.), um dos grandes Padres Capadócios, cognominado "O Teólogo".'
    },
    sourceDocument: 'Discursos Teológicos, Discurso 28 (Segundo sobre Teologia), § 3',
    theologicalFocus: 'A Asseidade Absoluta e o Nome Divino ("EU SOU")',
    quote: 'Ao revelar a Moisés o Seu nome soberano: "EU SOU O QUE SOU", Deus manifestou que Ele é o Ser pleno e absoluto, a Fonte primeira de toda a existência que subsiste por Si mesma. No Deus eterno não há pretérito nem futuro, pois a Sua vida infinita não é fragmentada pelo tempo; Ele simplesmente É. Todas as criaturas recebem o ser por participação emprestada; somente Deus possui o Ser como a Sua própria essência inesgotável.'
  },

  // 10. Romanos 8:1-4: John Owen
  {
    id: 'romanos-8-owen',
    passageRef: 'Romanos 8:1-4',
    commentator: {
      name: 'John Owen',
      era: 'PURITANISMO_E_POS_REFORMA',
      shortBio: 'Deão de Christ Church em Oxford (1616–1683), considerado o maior teólogo sistemático do Puritanismo inglês.'
    },
    sourceDocument: 'Da Mortificação do Pecado nos Crentes & Justificação pela Fé',
    theologicalFocus: 'A Condenação do Pecado na Cruz e a Absolvição do Crente',
    quote: '"Nenhuma condenação há para os que estão em Cristo Jesus". A sentença de condenação eterna foi totalmente executada e exaurida sobre a humanidade de Cristo quando Ele suportou a ira da justiça divina na cruz do Calvário. O pecado foi ali julgado e destruído em seu poder judicial. Portanto, a alma que está unida a Cristo pela fé desfruta de uma paz inabalável: a lei já não pode condenar aquele cuja dívida foi integralmente paga com sangue imaculado.'
  }
];

/**
 * Normalizes text for loose matching (removes accents, lowercase).
 */
function normalizeStr(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Extracts book name and chapter number from a passage reference or string.
 * Ex: "Gênesis 1:1-3" -> { book: "Gênesis", chapter: 1 }
 * Ex: "Romanos 1" -> { book: "Romanos", chapter: 1 }
 */
export function parseBookAndChapter(ref: string): { book: string; chapter: number | null } {
  const match = ref.match(/^([1-3]?\s?[A-Za-zÀ-ÿ]+)\s*(\d+)?/);
  if (match) {
    return {
      book: match[1].trim(),
      chapter: match[2] ? parseInt(match[2], 10) : null
    };
  }
  return { book: ref.trim(), chapter: null };
}

/**
 * Returns historical commentaries matching a given book or chapter reference.
 * If no exact chapter match exists, it matches the book.
 * If reference is empty, returns all commentaries.
 */
export function getHistoricalCommentariesForPassage(
  passageOrBook: string,
  chapter?: number
): HistoricalCommentary[] {
  if (!passageOrBook) return historicalCommentaries;

  const { book: targetBook, chapter: targetChapter } = parseBookAndChapter(passageOrBook);
  const effectiveChapter = chapter ?? targetChapter;
  const normTargetBook = normalizeStr(targetBook);

  // First try matching both book and chapter
  if (effectiveChapter !== null && effectiveChapter !== undefined) {
    const chapterMatches = historicalCommentaries.filter(c => {
      const parsed = parseBookAndChapter(c.passageRef);
      const normBook = normalizeStr(parsed.book);
      return normBook === normTargetBook && parsed.chapter === effectiveChapter;
    });

    if (chapterMatches.length > 0) {
      return chapterMatches;
    }
  }

  // Fallback: match by book name
  const bookMatches = historicalCommentaries.filter(c => {
    const parsed = parseBookAndChapter(c.passageRef);
    const normBook = normalizeStr(parsed.book);
    return normBook === normTargetBook || normTargetBook.includes(normBook) || normBook.includes(normTargetBook);
  });

  return bookMatches;
}

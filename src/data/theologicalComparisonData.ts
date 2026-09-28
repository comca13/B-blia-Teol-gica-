import { TheologicalComparisonItem, ComparisonCategory, TheologicalVerseLink, TheologicalVerseMarker } from '../types';

export interface ComparisonCategoryMeta {
  id: ComparisonCategory;
  pillarNumber: number;
  label: string;
  shortTitle: string;
  description: string;
  iconName: string;
}

export const COMPARISON_CATEGORIES_META: Record<ComparisonCategory, ComparisonCategoryMeta> = {
  'Autoridade': {
    id: 'Autoridade',
    pillarNumber: 1,
    label: 'Autoridade e Revelação',
    shortTitle: 'Epistemologia Teológica',
    description: 'A fonte da doutrina, o cânon sagrado, o Santo Sínodo, o Magistério e a infalibilidade.',
    iconName: 'Scroll'
  },
  'Salvação': {
    id: 'Salvação',
    pillarNumber: 2,
    label: 'Soteriologia',
    shortTitle: 'Salvação e Graça',
    description: 'Justificação imputada, justiça infusa, Theosis (deificação), livre-arbítrio e o estado intermediário pós-morte.',
    iconName: 'Sparkles'
  },
  'Eclesiologia e Santos': {
    id: 'Eclesiologia e Santos',
    pillarNumber: 3,
    label: 'Eclesiologia e Devoção',
    shortTitle: 'Igreja, Ministério e Santos',
    description: 'Primado de honra vs. jurisdição papal, sacerdócio universal, Theotokos e a veneração dos santos.',
    iconName: 'Users'
  },
  'Sacramentos e Liturgia': {
    id: 'Sacramentos e Liturgia',
    pillarNumber: 4,
    label: 'Liturgia e Sacramentos',
    shortTitle: 'Ritos e Sacramentos',
    description: 'Os Santos Mistérios, a Presença Real Eucarística (Epiclese vs. Transubstanciação), a Cláusula Filioque e os Santos Ícones.',
    iconName: 'BookOpen'
  }
};

export const THEOLOGICAL_COMPARISONS: TheologicalComparisonItem[] = [
  // --------------------------------------------------------------------------
  // PILAR 1: AUTORIDADE E REVELAÇÃO (EPISTEMOLOGIA TEOLÓGICA)
  // --------------------------------------------------------------------------
  {
    id: 'fonte-revelacao',
    category: 'Autoridade',
    topic: 'Fonte Primordial de Fé e Regra Doutrinária',
    theologicalConsensus: {
      title: 'Consenso sobre a Inspiração Divina da Sagrada Escritura',
      summary: 'As três grandes tradições cristãs confessam unanimemente que as Sagradas Escrituras foram inspiradas pelo Espírito Santo (Theopneustos), constituindo o testemunho normativo e irrevogável da autorrevelação salvífica de Deus em Cristo Jesus.',
      sharedCreeds: ['Credo Apostólico', 'Credo Niceno-Constantinopolitano (381 d.C.)'],
      ecumenicalMilestones: ['Diálogo Teológico Internacional Católico-Ortodoxo', 'Comissão Mista Luterano-Católica']
    },
    catholicPosition: {
      title: 'Tríplice Autoridade: Escritura, Tradição e Magistério',
      summary: 'A Revelação divina é transmitida de forma inseparável pela Sagrada Escritura e pela Sagrada Tradição Apostólica oral e vivida. Ambas procedem da mesma fonte divina. O Magistério vivo da Igreja (o Papa e os bispos em comunhão) não é superior à Palavra, mas atua como seu intérprete autêntico e guardião infalível. Os três formam um tripé onde nenhum subsiste sem os outros.',
      biblicalBases: ['2 Tessalonicenses 2:15', '1 Timóteo 3:15', 'Mateus 16:18-19', 'João 21:25'],
      historicalSources: [
        'Constituição Dogmática Dei Verbum §9-10 (Concílio Vaticano II)',
        'Concílio de Trento, Sessão IV (Decreto sobre as Escrituras Canônicas e Tradições, 1546)',
        'Catecismo da Igreja Católica §80-85'
      ],
      primaryQuotes: [
        {
          source: 'Constituição Dogmática Dei Verbum §9',
          authorOrDocument: 'Concílio Vaticano II',
          yearOrEra: '1965',
          excerpt: 'A Sagrada Tradição e a Sagrada Escritura estão intimamente unidas e compenetradas entre si; pois ambas, brotando da mesma fonte divina, formam de certo modo um só todo e tendem para o mesmo fim.'
        },
        {
          source: 'Catecismo da Igreja Católica §85',
          authorOrDocument: 'Magistério Eclesiástico',
          yearOrEra: '1992',
          excerpt: 'O ofício de interpretar autenticamente a Palavra de Deus escrita ou transmitida foi confiado unicamente ao Magistério vivo da Igreja, cuja autoridade se exerce em nome de Jesus Cristo.'
        }
      ]
    },
    protestantPosition: {
      title: 'Sola Scriptura (Apenas a Escritura como Regra Infalível)',
      summary: 'Apenas a Bíblia hebraico-aramaica e grega inspirada por Deus possui autoridade infalível, suficiente e final em todas as matérias de fé, dogma e conduta cristã. A Tradição patrística e os credos têm alto valor histórico e ministerial para orientar a Igreja, mas são falíveis e devem ser continuamente testados, julgados e corrigidos pelo texto bíblico.',
      biblicalBases: ['2 Timóteo 3:16-17', 'Gálatas 1:8-9', 'Atos 17:11', 'Isaías 8:20'],
      historicalSources: [
        'Confissão de Fé de Westminster, Cap. I ("Da Sagrada Escritura", 1647)',
        'Artigos de Esmalcalde II.2 (Martinho Lutero, 1537)',
        'Confissão Belga, Artigos 3-7 (1561)'
      ],
      primaryQuotes: [
        {
          source: 'Confissão de Fé de Westminster I.VI',
          authorOrDocument: 'Assembleia de Divinos de Westminster',
          yearOrEra: '1647',
          excerpt: 'Todo o conselho de Deus concernente a todas as coisas necessárias para a sua própria glória e para a salvação, fé e vida do homem, ou é expressamente declarado na Escritura ou pode ser deduzido dela por boa e necessária consequência.'
        },
        {
          source: 'Artigos de Esmalcalde II.II.15',
          authorOrDocument: 'Martinho Lutero',
          yearOrEra: '1537',
          excerpt: 'A Palavra de Deus estabelece artigos de fé, e ninguém mais, nem mesmo um anjo.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'A Santa Tradição Como Vida Contínua do Espírito Santo na Igreja',
      summary: 'A Escritura Sagrada não existe isolada, mas é o cume escrito da Santa Tradição apostólica viva. A Igreja Ortodoxa entende a Tradição como a presença ininterrupta do Espírito Santo na Igreja através dos séculos, expressa nos 7 Concílios Ecumênicos, nos Santos Padres e na Liturgia Divina. A Igreja gerou o cânon sob a guia do Paráclito; portanto, Escritura e Tradição são orgânicas e inseparáveis.',
      biblicalBases: ['2 Tessalonicenses 2:15', '1 Coríntios 11:2', '2 Timóteo 1:13-14', 'João 16:13'],
      historicalSources: [
        'São João Damasceno, De Fide Orthodoxa IV.16',
        'Confissão de Dositeu (Sínodo de Jerusalém, 1672), Decreto II',
        'São Basílio Magno, Tratado sobre o Espírito Santo §66'
      ],
      primaryQuotes: [
        {
          source: 'Tratado sobre o Espírito Santo XXVII.66',
          authorOrDocument: 'São Basílio Magno',
          yearOrEra: '375 d.C.',
          excerpt: 'Entre as doutrinas e ensinamentos preservados na Igreja, alguns possuímos de ensinamento escrito, e outros recebemos transmitidos em mistério da tradição dos apóstolos; ambos têm a mesma força para a piedade.'
        },
        {
          source: 'Confissão de Dositeu, Decreto II',
          authorOrDocument: 'Sínodo Pan-Ortodoxo de Jerusalém',
          yearOrEra: '1672',
          excerpt: 'Cremos que a Sagrada Escritura é dada por Deus... Mas cremos igualmente que o testemunho da Igreja Católica e Apostólica não possui menor autoridade que a Sagrada Escritura.'
        }
      ]
    },
    linkedPassages: [
      {
        book: '2 Tessalonicenses',
        chapter: 2,
        verse: 15,
        referenceSnippet: '2Ts 2:15',
        exegeticalFocus: 'Guarda das tradições: oral vs. escrita na exegese apostólica.'
      },
      {
        book: '1 Timóteo',
        chapter: 3,
        verse: 15,
        referenceSnippet: '1Tm 3:15',
        exegeticalFocus: 'A Igreja como coluna e baluarte da verdade.'
      },
      {
        book: '2 Timóteo',
        chapter: 3,
        verse: 16,
        verseEnd: 17,
        referenceSnippet: '2Tm 3:16-17',
        exegeticalFocus: 'Inspiração divina (Theopneustos) e suficiência ministerial da Escritura.'
      },
      {
        book: 'Atos',
        chapter: 17,
        verse: 11,
        referenceSnippet: 'At 17:11',
        exegeticalFocus: 'Os bereanos examinando diariamente as Escrituras para conferir a pregação.'
      }
    ]
  },
  {
    id: 'canon-biblico',
    category: 'Autoridade',
    topic: 'O Cânon Bíblico (66 vs. 73 vs. 76/78 Livros)',
    theologicalConsensus: {
      title: 'Consenso sobre o Cânon do Novo Testamento (27 Livros)',
      summary: 'Católicos, Protestantes e Ortodoxos compartilham exatamente os mesmos 27 livros do Novo Testamento, firmados na Carta Festal de Santo Atanásio (367 d.C.) e ratificados pelos concílios de Hipona e Cartago.',
      sharedCreeds: ['Carta XXXIX de Santo Atanásio (367 d.C.)', 'Concílio de Cartago (397 d.C.)']
    },
    catholicPosition: {
      title: 'Cânon Amplo de 73 Livros (Com os 7 Deuterocanônicos)',
      summary: 'O Antigo Testamento inclui 46 livros, preservando a Septuaginta grega (LXX) usada pelos primeiros cristãos e apóstolos. Inclui Tobias, Judite, Sabedoria, Eclesiástico (Sirácida), Baruc, 1 e 2 Macabeus, além de adições em Ester e Daniel. O Concílio de Trento declarou solenemente a inspiração integral de toda a Vulgata Latina com seus livros deuterocanônicos.',
      biblicalBases: ['Hebreus 11:35 (alusão a 2 Macabeus 7)', 'Lucas 24:44', 'Romanos 3:2'],
      historicalSources: [
        'Concílio de Roma (382 d.C., Papa Dâmaso I)',
        'Concílio de Trento, Sessão IV (1546)',
        'Santo Agostinho, De Doctrina Christiana II.8'
      ],
      primaryQuotes: [
        {
          source: 'Concílio de Trento, Sessão IV (Decretum de Libris Sacris)',
          authorOrDocument: 'Concílio Ecumênico de Trento',
          yearOrEra: '1546',
          excerpt: 'Se alguém, pois, não aceitar como sagrados e canônicos esses livros inteiros com todas as suas partes... seja anátema.'
        }
      ]
    },
    protestantPosition: {
      title: 'Cânon Restrito de 66 Livros (Seguindo o Tanakh Hebraico)',
      summary: 'O Antigo Testamento tem 39 livros, limitando-se estritamente ao cânon hebraico confiado aos judeus da Palestina, o mesmo referendado por Jesus ("a Lei, os Profetas e os Salmos"). Os livros deuterocanônicos são classificados como "Apócrifos": considerados de grande utilidade histórica e ética, mas desprovidos de autoridade para fundamentar doutrinas.',
      biblicalBases: ['Romanos 3:1-2', 'Lucas 11:51', 'Lucas 24:44'],
      historicalSources: [
        'Confissão de Fé de Westminster 1.3',
        '39 Artigos da Religião da Igreja da Inglaterra (Artigo VI, 1563)',
        'São Jerônimo, Prologus Galeatus à Vulgata'
      ],
      primaryQuotes: [
        {
          source: '39 Artigos da Religião Anglicana, Artigo VI',
          authorOrDocument: 'Igreja da Inglaterra',
          yearOrEra: '1563',
          excerpt: 'E os outros livros (como diz Jerônimo) a Igreja os lê para exemplo de vida e instrução de costumes; mas não os aplica para estabelecer doutrina alguma.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'Cânon Extenso da Septuaginta (76 ou mais livros)',
      summary: 'A Igreja Ortodoxa adotou como texto primordial do Antigo Testamento a versão grega da Septuaginta (LXX), tradução inspirada pela qual os Apóstolos citaram as Escrituras. Por conseguinte, seu cânon inclui os deuterocanônicos e textos adicionais como 3 Macabeus, 1 Esdras (Esdras grego), a Oração de Manassés e o Salmo 151 (e em algumas tradições eslavas, 4 Macabeus como apêndice).',
      biblicalBases: ['Atos 7:14 (citando Gn 46:27 conforme LXX de 75 pessoas)', 'Hebreus 11:35'],
      historicalSources: [
        'Sínodo de Jerusalém (1672), Decreto III',
        'Cânon 85 dos Santos Apóstolos',
        'Concílio Quinisexto / Trullo (692 d.C.)'
      ],
      primaryQuotes: [
        {
          source: 'Confissão de Dositeu, Decreto III',
          authorOrDocument: 'Sínodo Pan-Ortodoxo de Jerusalém',
          yearOrEra: '1672',
          excerpt: 'Seguindo a regra da Igreja Católica, chamamos de Sagrada Escritura todos aqueles que Dositeu enumerou... a Sabedoria de Salomão, Judite, Tobias, a História do Dragão, a História de Suzana, os Macabeus e a Sabedoria de Sirac.'
        }
      ]
    },
    linkedPassages: [
      {
        book: 'Romanos',
        chapter: 3,
        verse: 1,
        verseEnd: 2,
        referenceSnippet: 'Rm 3:1-2',
        exegeticalFocus: 'Aos judeus foram confiados os oráculos de Deus.'
      },
      {
        book: 'Hebreus',
        chapter: 11,
        verse: 35,
        referenceSnippet: 'Hb 11:35',
        exegeticalFocus: 'Mulheres que receberam seus mortos pela ressurreição (alusão a 2 Macabeus 7).'
      },
      {
        book: 'Lucas',
        chapter: 24,
        verse: 44,
        referenceSnippet: 'Lc 24:44',
        exegeticalFocus: 'A tríplice divisão hebraica citada por Jesus: Lei, Profetas e Salmos.'
      }
    ]
  },
  {
    id: 'interpretacao-magisterio',
    category: 'Autoridade',
    topic: 'Interpretação da Escritura e Conciliaridade',
    theologicalConsensus: {
      title: 'Consenso sobre a Iluminação do Espírito Santo',
      summary: 'Todos os cristãos creem que o texto bíblico não pode ser adequadamente compreendido apenas pela sabedoria humana natural, mas exige a iluminação e operação santificadora do Espírito Santo no coração do leitor e na comunidade.',
      sharedCreeds: ['1 Coríntios 2:12-14', 'Credo Niceno ("Creio no Espírito Santo, Senhor e Doador da Vida")']
    },
    catholicPosition: {
      title: 'Magistério Autêntico da Sé Apostólica e do Colégio Episcopal',
      summary: 'A interpretação genuína e autêntica da Escritura não cabe ao juízo privado individual, mas ao corpo docente da Igreja estabelecido pelos sucessores dos Apóstolos sob a liderança do Bispo de Roma. Cristo garantiu a assistência contínua do Espírito Santo para conservar a Igreja sem erro doctrinal substancial.',
      biblicalBases: ['2 Pedro 1:20-21', 'Mateus 16:18-19', 'Lucas 10:16', '1 Timóteo 3:15'],
      historicalSources: [
        'Catecismo da Igreja Católica §85-87',
        'Constituição Dogmática Dei Verbum §10',
        'Concílio Vaticano II, Lumen Gentium §25'
      ],
      primaryQuotes: [
        {
          source: 'Catecismo da Igreja Católica §85',
          authorOrDocument: 'Magistério Ordinário',
          yearOrEra: '1992',
          excerpt: 'O encargo de interpretar autenticamente a Palavra de Deus foi confiado exclusivamente ao Magistério vivo da Igreja, que o exercita em nome de Jesus Cristo.'
        }
      ]
    },
    protestantPosition: {
      title: 'Livre Exame, Iluminação do Espírito e Perspicuidade',
      summary: 'O crente tem o direito e o dever sagrado de ler e examinar as Escrituras. Pela doutrina da perspicuidade (clareza), as verdades essenciais para a salvação são tão claras na Bíblia que qualquer pessoa simples, guiada pelo Espírito Santo e aplicando o método gramático-histórico, pode compreender o Evangelho da graça.',
      biblicalBases: ['Atos 17:11', '1 João 2:27', 'Salmo 119:105', '1 Coríntios 2:12-15'],
      historicalSources: [
        'Confissão de Westminster 1.7 ("Da Perspicuidade")',
        'Martinho Lutero, Da Escravidão da Vontade (1525)',
        'Segunda Confissão Helvética, Cap. II (1566)'
      ],
      primaryQuotes: [
        {
          source: 'Confissão de Fé de Westminster I.VII',
          authorOrDocument: 'Assembleia de Westminster',
          yearOrEra: '1647',
          excerpt: 'Não são todas as coisas na Escritura igualmente claras em si mesmas... Contudo, aquelas coisas que são necessárias serem conhecidas, cridas e observadas para a salvação, são tão claramente propostas e explicadas... que não só os doutos, mas também os indoutos, no devido uso dos meios ordinários, podem alcançar uma suficiente compreensão delas.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'Consenso Patrístico e a Mente da Igreja (Phrónema)',
      summary: 'A Bíblia deve ser interpretada exclusivamente dentro da comunhão eclesial e segundo o *Consensus Patrum* (consenso unânime dos Santos Padres e dos 7 Concílios Ecumênicos). A Ortodoxia rejeita tanto o individualismo protestante do livre exame quanto a centralização monárquica papal, defendendo a conciliaridade sinodal (*Sobornost*) guiada pelo Espírito Santo.',
      biblicalBases: ['2 Pedro 1:20-21', 'Atos 15:28 ("Pareceu bem ao Espírito Santo e a nós")', '1 Coríntios 12:12-27'],
      historicalSources: [
        'São Vicente de Lérins, Commonitorium II.6 ("Quod ubique, quod semper, quod ab omnibus")',
        'São João Crisóstomo, Homilias sobre as Epístolas Paulinas',
        'Cânon 19 do Concílio Quinisexto (692 d.C.)'
      ],
      primaryQuotes: [
        {
          source: 'Commonitorium II.6',
          authorOrDocument: 'São Vicente de Lérins',
          yearOrEra: '434 d.C.',
          excerpt: 'Na própria Igreja Católica, deve-se ter todo o cuidado para reter aquilo em que se creu em toda a parte, sempre e por todos (quod ubique, quod semper, quod ab omnibus creditum est).'
        }
      ]
    },
    linkedPassages: [
      {
        book: '2 Pedro',
        chapter: 1,
        verse: 20,
        verseEnd: 21,
        referenceSnippet: '2Pe 1:20-21',
        exegeticalFocus: 'Nenhuma profecia da Escritura é de particular elucidação.'
      },
      {
        book: 'Atos',
        chapter: 15,
        verse: 28,
        referenceSnippet: 'At 15:28',
        exegeticalFocus: 'O modelo conciliar apostólico: "Pareceu bem ao Espírito Santo e a nós".'
      },
      {
        book: '1 João',
        chapter: 2,
        verse: 27,
        referenceSnippet: '1Jo 2:27',
        exegeticalFocus: 'A unção do Santo que ensina sobre todas as coisas.'
      }
    ]
  },
  {
    id: 'infalibilidade-papal',
    category: 'Autoridade',
    topic: 'O Papado, Primado de Honra e Infalibilidade',
    theologicalConsensus: {
      title: 'Consenso sobre o Papel Proeminente de Pedro entre os Doze',
      summary: 'Católicos, Protestantes e Ortodoxos concordam unanimemente que o apóstolo Pedro exerceu uma liderança destacada entre os apóstolos no Novo Testamento, sendo o primeiro a confessar Cristo e pioneiro no Pentecostes.',
      sharedCreeds: ['Mateus 16:16', 'Atos 2:14-41']
    },
    catholicPosition: {
      title: 'Primado de Jurisdição Universal e Infalibilidade Ex Cathedra',
      summary: 'O Bispo de Roma é o sucessor de Pedro na Sé apostólica e Pastor Universal visível da Igreja militante. Quando fala *ex cathedra* — em matéria de fé ou moral para toda a Igreja —, o Romano Pontífice goza da assistência do Espírito Santo que o torna infalível, não necessitando do consentimento prévio de concílios.',
      biblicalBases: ['Mateus 16:18-19', 'Lucas 22:31-32', 'João 21:15-17'],
      historicalSources: [
        'Concílio Vaticano I, Constituição Dogmática Pastor Aeternus (1870)',
        'Concílio Vaticano II, Lumen Gentium §22-25',
        'Catecismo da Igreja Católica §882, §891'
      ],
      primaryQuotes: [
        {
          source: 'Pastor Aeternus, Cap. IV',
          authorOrDocument: 'Concílio Vaticano I',
          yearOrEra: '1870',
          excerpt: 'O Romano Pontífice, quando fala ex cathedra... possui aquela infalibilidade com que o Divino Redentor quis que sua Igreja fosse dotada para definir doutrinas concernentes à fé e aos costumes.'
        }
      ]
    },
    protestantPosition: {
      title: 'Rejeição Radical de Qualquer Autoridade Humana Infalível',
      summary: 'Cristo é a única Cabeça viva e suprema da Igreja universal. Pedro confessou que Cristo é a rocha (*petra*), e a Igreja é edificada sobre a confissão e sobre a pessoa de Jesus. Nenhuma autoridade eclesiástica individual possui imunidade ao erro; o papado histórico é considerado um desvio monárquico da simplicidade neotestamentária.',
      biblicalBases: ['1 Coríntios 3:11', 'Efésios 1:22-23', 'Colossenses 1:18', 'Gálatas 2:11-14'],
      historicalSources: [
        'Confissão de Westminster 25.6',
        'Tratado sobre o Poder e Primado do Papa (Filipe Melâncton, 1537)',
        'Confissão Escocesa (1560), Cap. XVI'
      ],
      primaryQuotes: [
        {
          source: 'Confissão de Fé de Westminster XXV.VI',
          authorOrDocument: 'Assembleia de Westminster',
          yearOrEra: '1647',
          excerpt: 'Não há outro chefe da Igreja senão o Senhor Jesus Cristo. Em sentido algum pode o Papa de Roma ser o chefe dela.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'Primazia de Honra (Primus Inter Pares) Sem Jurisdição Universal',
      summary: 'A Ortodoxia reconheceu historicamente a Sé de Roma antiga como a primeira em honra entre os patriarcados pentárquicos (Roma, Constantinopla, Alexandria, Antioquia e Jerusalém), mas jamais como uma jurisdição monárquica ou com prerrogativa de infalibilidade. A autoridade máxima e infalível da Igreja repousa no Concílio Ecumênico de todos os bispos em comunhão no Espírito Santo.',
      biblicalBases: ['Mateus 18:18 (poder conferido a todos os Apóstolos)', 'Gálatas 2:11 (Paulo resistindo a Pedro)', 'Atos 15:13-22 (Tiago presidindo o Concílio de Jerusalém)'],
      historicalSources: [
        'Encíclica dos Patriarcas Orientais de 1848 §15',
        'Cânon 28 do Concílio de Calcedônia (451 d.C.)',
        'São Fócio, Carta Encíclica aos Bispos Orientais (867 d.C.)'
      ],
      primaryQuotes: [
        {
          source: 'Encíclica dos Patriarcas Orientais §15',
          authorOrDocument: 'Patriarcados de Constantinopla, Alexandria, Antioquia e Jerusalém',
          yearOrEra: '1848',
          excerpt: 'Entre nós, nem Patriarcas nem Concílios jamais puderam introduzir novidades, pois o guardião da religião é o próprio corpo da Igreja, isto é, o próprio povo, que deseja que seu culto seja preservado inalterado.'
        }
      ]
    },
    linkedPassages: [
      {
        book: 'Mateus',
        chapter: 16,
        verse: 18,
        verseEnd: 19,
        referenceSnippet: 'Mt 16:18-19',
        exegeticalFocus: 'Tu és Pedro, e sobre esta pedra edificarei a minha igreja; chaves do Reino.'
      },
      {
        book: 'Gálatas',
        chapter: 2,
        verse: 11,
        verseEnd: 14,
        referenceSnippet: 'Gl 2:11-14',
        exegeticalFocus: 'Paulo resistindo a Pedro face a face em Antioquia.'
      },
      {
        book: '1 Coríntios',
        chapter: 3,
        verse: 11,
        referenceSnippet: '1Co 3:11',
        exegeticalFocus: 'Nenhum outro fundamento pode ser posto além de Jesus Cristo.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PILAR 2: SOTERIOLOGIA (SALVAÇÃO E GRAÇA)
  // --------------------------------------------------------------------------
  {
    id: 'justificacao-fe-obras',
    category: 'Salvação',
    topic: 'A Natureza da Justificação (Imputada vs. Infusa vs. Theosis)',
    theologicalConsensus: {
      title: 'Declaração Conjunta sobre a Doutrina da Justificação (1999)',
      summary: 'Marco ecumênico histórico assinado pela Federação Luterana Mundial e pela Igreja Católica (e posteriormente subscrito por Metodistas e Reformados): "Confessamos juntos que a justificação é obra do Deus trino... somente por graça, na fé na ação salvífica de Cristo e não com base em nossos méritos, somos aceitos por Deus".',
      sharedCreeds: ['Declaração Conjunta sobre a Justificação (Augsburgo, 1999) §15'],
      ecumenicalMilestones: ['Federação Luterana Mundial & Pontifício Conselho para a Unidade dos Cristãos (1999)']
    },
    catholicPosition: {
      title: 'Justificação Infusa e Transformadora Cooperada pela Caridade',
      summary: 'A justificação não é uma mera declaração forense externa, mas uma verdadeira renovação interior do homem pela infusão da graça santificante e das virtudes teologais (Fé, Esperança e Caridade) através do Batismo e sacramentos. O crente perdoado coopera com a graça, e suas boas obras animadas pelo amor aumentam o mérito e a justiça diante de Deus.',
      biblicalBases: ['Tiago 2:24', 'Gálatas 5:6', 'Romanos 2:6-7', 'Filipenses 2:12-13'],
      historicalSources: [
        'Concílio de Trento, Sessão VI (Decreto sobre a Justificação, 1547)',
        'Catecismo da Igreja Católica §1987-2005',
        'Santo Agostinho, De Gratia et Libero Arbitrio'
      ],
      primaryQuotes: [
        {
          source: 'Concílio de Trento, Sessão VI, Cânon 24',
          authorOrDocument: 'Concílio de Trento',
          yearOrEra: '1547',
          excerpt: 'Se alguém disser que a justiça recebida não é conservada e até aumentada diante de Deus pelas boas obras... seja anátema.'
        },
        {
          source: 'Catecismo da Igreja Católica §1999',
          authorOrDocument: 'Magistério Eclesiástico',
          yearOrEra: '1992',
          excerpt: 'A graça de Cristo é o dom gratuito que Deus nos dá da sua vida, infundida pelo Espírito Santo na nossa alma para a curar do pecado e a santificar: é a graça santificante ou deificante.'
        }
      ]
    },
    protestantPosition: {
      title: 'Justificação Forense Imputada Unicamente pela Fé (Sola Fide)',
      summary: 'O pecador é declarado legalmente justo diante do tribunal de Deus unicamente mediante a imputação (crédito) da perfeita justiça e expiação vicária de Jesus Cristo, recebida pela fé sem adição de qualquer mérito ou obra humana. As boas obras não são a causa, mérito ou condição prévia da justificação, mas seu fruto espontâneo e evidência necessária.',
      biblicalBases: ['Romanos 3:28', 'Romanos 4:5', 'Efésios 2:8-9', 'Gálatas 2:16'],
      historicalSources: [
        'Confissão de Augsburgo (Artigo IV, 1530)',
        'Confissão de Fé de Westminster, Cap. XI ("Da Justificação")',
        'João Calvino, Institutas da Religião Cristã III.11'
      ],
      primaryQuotes: [
        {
          source: 'Confissão de Augsburgo, Artigo IV ("Da Justificação")',
          authorOrDocument: 'Filipe Melâncton / Martinho Lutero',
          yearOrEra: '1530',
          excerpt: 'Não podemos alcançar a remissão do pecado e a justiça diante de Deus por nosso próprio mérito, obras ou satisfações, mas recebemos a remissão do pecado e somos justificados diante de Deus pela graça, por causa de Cristo, mediante a fé.'
        },
        {
          source: 'Confissão de Fé de Westminster XI.I',
          authorOrDocument: 'Assembleia de Westminster',
          yearOrEra: '1647',
          excerpt: 'Aqueles a quem Deus chama eficazmente, ele também justifica livremente... não por qualquer coisa operada neles ou feita por eles, mas unicamente por amor de Cristo; não imputando-lhes a própria fé... mas imputando a obediência e satisfação de Cristo.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'Theosis: Divinização e Participação nas Energias Incriadas',
      summary: 'A Ortodoxia recusa a linguagem primariamente jurídica e forense do Ocidente. A salvação é a *Theosis* (deificação do ser humano): o processo ontológico de união com Deus, onde o homem se torna participante da natureza divina (2 Pe 1:4) através da graça incriada e das energias divinas, sem jamais ser absorvido na essência inacessível de Deus. Ocorre em sinergia (*synergeia*) entre a graça divina e a liberdade humana.',
      biblicalBases: ['2 Pedro 1:4', 'Salmo 82:6', 'João 10:34-36', '1 Coríntios 3:9 ("cooperadores de Deus")'],
      historicalSources: [
        'Santo Atanásio de Alexandria, De Incarnatione Verbi §54 ("Deus se fez homem para que o homem se tornasse deus")',
        'São Gregório Palamas, Tríades em Defesa dos Santos Hesicastas',
        'São Máximo, o Confessor, Questões a Talássio'
      ],
      primaryQuotes: [
        {
          source: 'Da Encarnação do Verbo §54',
          authorOrDocument: 'Santo Atanásio Magno',
          yearOrEra: 'c. 318 d.C.',
          excerpt: 'Pois Ele se fez homem para que nós fôssemos deificados (theopoiēthōmen); e Ele se manifestou pelo corpo para que nós tivéssemos a ideia do Pai invisível.'
        },
        {
          source: 'Tríades em Defesa dos Santos Hesicastas III.1.24',
          authorOrDocument: 'São Gregório Palamas',
          yearOrEra: '1338',
          excerpt: 'A luz deificante é incriada, comunicando-se aos homens por graça divina; Deus permanece inacessível em sua essência, mas plenamente participável em suas energias.'
        }
      ]
    },
    linkedPassages: [
      {
        book: 'Romanos',
        chapter: 3,
        verse: 28,
        referenceSnippet: 'Rm 3:28',
        exegeticalFocus: 'Concluímos que o homem é justificado pela fé, independentemente das obras da lei.'
      },
      {
        book: 'Tiago',
        chapter: 2,
        verse: 24,
        referenceSnippet: 'Tg 2:24',
        exegeticalFocus: 'Vedes que o homem é justificado por obras e não somente pela fé.'
      },
      {
        book: '2 Pedro',
        chapter: 1,
        verse: 4,
        referenceSnippet: '2Pe 1:4',
        exegeticalFocus: 'Para que por elas vos torneis co-participantes da natureza divina.'
      },
      {
        book: 'Efésios',
        chapter: 2,
        verse: 8,
        verseEnd: 10,
        referenceSnippet: 'Ef 2:8-10',
        exegeticalFocus: 'Pela graça sois salvos, mediante a fé... criados em Cristo para boas obras.'
      }
    ]
  },
  {
    id: 'purgatorio-estado-intermediario',
    category: 'Salvação',
    topic: 'O Purgatório e o Estado Intermediário das Almas',
    theologicalConsensus: {
      title: 'Consenso sobre a Oração pelos Vivos e a Esperança na Ressurreição',
      summary: 'Todas as correntes cristãs afirmam a soberania de Cristo sobre a vida e a morte, aguardando com júbilo o Juízo Final e a ressurreição corpórea dos justos na volta gloriosa do Senhor.',
      sharedCreeds: ['Credo Niceno-Constantinopolitano ("Espero a ressurreição dos mortos e a vida do mundo que há de vir")']
    },
    catholicPosition: {
      title: 'Purgatório Dogmático e Satisfação Temporal das Penas',
      summary: 'Aqueles que morrem na graça e amizade de Deus, mas imperfeitamente purificados, passam após a morte por uma purificação purgatorial para expiar as penas temporais devidas aos pecados já perdoados, alcançando a santidade necessária para entrar na visão beatífica do céu. As orações, Missas e indulgências dos vivos os auxiliam.',
      biblicalBases: ['2 Macabeus 12:46', '1 Coríntios 3:13-15', 'Mateus 12:32', '1 Pedro 3:19'],
      historicalSources: [
        'Concílio de Florença (1439)',
        'Concílio de Trento, Sessão XXV (Decreto sobre o Purgatório, 1563)',
        'Catecismo da Igreja Católica §1030-1032'
      ],
      primaryQuotes: [
        {
          source: 'Catecismo da Igreja Católica §1030',
          authorOrDocument: 'Magistério Eclesiástico',
          yearOrEra: '1992',
          excerpt: 'Os que morrem na graça e na amizade de Deus, mas não de todo purificados, embora seguros da sua salvação eterna, sofrem depois da morte uma purificação, a fim de obterem a santidade necessária para entrar na alegria do Céu.'
        }
      ]
    },
    protestantPosition: {
      title: 'Rejeição Total do Purgatório (Suficiência Plena da Cruz)',
      summary: 'A morte sela imediatamente o destino eterno da alma: presença imediata e consciente com o Senhor para os crentes em Cristo, ou separação e condenação para os ímpios. O sangue de Cristo pagou integralmente a culpa e a pena de todos os pecados na cruz (Tetélestai). A doutrina de penas temporais purgatoriais e indulgências é rejeitada como contrária à expiação vicária consumada.',
      biblicalBases: ['Hebreus 9:27', 'Lucas 23:43', '2 Coríntios 5:8', 'Filipenses 1:23', 'João 19:30'],
      historicalSources: [
        'Confissão de Fé de Westminster 32.1',
        '39 Artigos de Religião (Artigo XXII)',
        'Confissão de Augsburgo, Apologia Artigo XII'
      ],
      primaryQuotes: [
        {
          source: '39 Artigos da Religião Anglicana, Artigo XXII',
          authorOrDocument: 'Igreja da Inglaterra',
          yearOrEra: '1563',
          excerpt: 'A doutrina romana sobre o Purgatório, Indulgências, Veneração e Adoração de Imagens e Relíquias... é uma coisa fútil, inventada em vão, sem fundamento algum na Escritura, e até repugnante à Palavra de Deus.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'Estado Intermediário com Oração pelos Defuntos, Sem Fogo Purgatorial',
      summary: 'A Igreja Ortodoxa reza fervorosamente pelos defuntos e crê que as almas dos justos aguardam a ressurreição no seio de Abraão com antegozo da glória, e podem ser consoladas pelas orações e pela Divina Liturgia. No entanto, rejeita terminantemente a doutrina católica latina de um Purgatório como local ou estado de fogo punitivo e contabilidade de satisfação jurídica de penas temporais.',
      biblicalBases: ['2 Timóteo 1:16-18 (oração por Onesíforo defunto)', 'Lucas 16:19-31', '1 Pedro 3:18-20'],
      historicalSources: [
        'São Marcos de Éfeso, Homilias sobre o Purgatório no Concílio de Florença (1439)',
        'Confissão Ortodoxa de Pedro Mogila (1640), Questão 66',
        'Liturgia Divina de São João Crisóstomo (Mementos dos Defuntos)'
      ],
      primaryQuotes: [
        {
          source: 'Primeira Homilia sobre o Purgatório',
          authorOrDocument: 'São Marcos de Éfeso',
          yearOrEra: '1439',
          excerpt: 'Não conhecemos qualquer fogo purificador temporal após a morte, nem cremos que as almas sofram torturas punitivas para expiar suas faltas perdoadas... Oramos para que Deus lhes conceda descanso e misericórdia.'
        }
      ]
    },
    linkedPassages: [
      {
        book: '1 Coríntios',
        chapter: 3,
        verse: 13,
        verseEnd: 15,
        referenceSnippet: '1Co 3:13-15',
        exegeticalFocus: 'A obra de cada um será provada pelo fogo; se a obra queimar, sofrerá dano.'
      },
      {
        book: 'Lucas',
        chapter: 23,
        verse: 43,
        referenceSnippet: 'Lc 23:43',
        exegeticalFocus: 'Hoje estarás comigo no Paraíso.'
      },
      {
        book: 'Hebreus',
        chapter: 9,
        verse: 27,
        referenceSnippet: 'Hb 9:27',
        exegeticalFocus: 'Aos homens está ordenado morrerem uma só vez, vindo depois disso o juízo.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PILAR 3: ECLESIOLOGIA, MINISTÉRIO E SANTOS
  // --------------------------------------------------------------------------
  {
    id: 'sacerdocio-ministerio',
    category: 'Eclesiologia e Santos',
    topic: 'O Ministério Sacerdotal e a Sucessão Apostólica',
    theologicalConsensus: {
      title: 'Consenso sobre o Chamado de Toda a Igreja a Servir a Deus',
      summary: 'Todas as tradições cristãs afirmam que todos os batizados foram consagrados para pertencer a Deus e são chamados a oferecer suas vidas como sacrifício vivo, santo e agradável ao Pai (Rm 12:1).',
      sharedCreeds: ['1 Pedro 2:9', 'Apocalipse 1:6']
    },
    catholicPosition: {
      title: 'Sacerdócio Ministerial Distinto Ontologicamente',
      summary: 'O sacerdócio ministerial conferido pelo sacramento da Ordem difere essencialmente e não apenas em grau do sacerdócio comum de todos os fiéis. O padre atua *in persona Christi Capitis* (na pessoa de Cristo Cabeça), especialmente ao oferecer o sacrifício eucarístico e absolver os pecados em nome de Deus, através de uma sucessão apostólica histórica ininterrupta.',
      biblicalBases: ['Hebreus 5:1-4', 'Lucas 22:19', 'João 20:22-23', 'Tito 1:5'],
      historicalSources: [
        'Concílio de Trento, Sessão XXIII (Sobre a Ordem)',
        'Concílio Vaticano II, Lumen Gentium §10, §28',
        'Catecismo da Igreja Católica §1548-1551'
      ],
      primaryQuotes: [
        {
          source: 'Lumen Gentium §10',
          authorOrDocument: 'Concílio Vaticano II',
          yearOrEra: '1964',
          excerpt: 'O sacerdócio comum dos fiéis e o sacerdócio ministerial ou hierárquico, embora difiram na essência e não apenas no grau, ordenam-se no entanto um ao outro; pois um e outro participam, a seu modo, do único sacerdócio de Cristo.'
        }
      ]
    },
    protestantPosition: {
      title: 'Sacerdócio Universal de Todos os Crentes (Sem Mediação Clérica)',
      summary: 'Cristo Jesus é o único Sumo Sacerdote e único Mediador entre Deus e os homens. Todos os crentes batizados têm acesso direto, ousado e imediato ao Santo dos Santos pelo sangue de Cristo, sem necessidade de sacerdotes intermediários para oferecer sacrifícios propiatórios. O pastorado é um ofício funcional de ensino e governo, não uma casta sacerdotal ontológica.',
      biblicalBases: ['1 Pedro 2:9', '1 Timóteo 2:5', 'Hebreus 4:14-16', 'Hebreus 10:19-22'],
      historicalSources: [
        'Martinho Lutero, À Nobreza Cristã da Nação Alemã (1520)',
        'Confissão de Augsburgo (Artigo XIV)',
        'Segunda Confissão Batista de Londres (1689), Cap. XXVI'
      ],
      primaryQuotes: [
        {
          source: 'À Nobreza Cristã da Nação Alemã',
          authorOrDocument: 'Martinho Lutero',
          yearOrEra: '1520',
          excerpt: 'Todos os cristãos são verdadeiramente de estado espiritual, e não há entre eles diferença alguma, exceto quanto ao ofício... Todos nós somos consagrados sacerdotes através do Batismo.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'Presbiterado Sacramental em Continuidade com os Santos Apóstolos',
      summary: 'A Ortodoxia mantém rigorosamente a tríplice ordem ministerial histórica (Bispos, Presbíteros e Diáconos) com sucessão apostólica contínua desde Pentecostes. O bispo é o ícone de Cristo e guardião da unidade na Eucaristia local. O clero atua como servidor dos Santos Mistérios, mas sempre integrado na sinodalidade orgânica da assembleia de todo o povo de Deus.',
      biblicalBases: ['1 Timóteo 3:1-13', 'Tito 1:5-9', 'Atos 14:23', 'Hebreus 13:17'],
      historicalSources: [
        'Santo Inácio de Antioquia, Epístola aos Esmirnenses VIII ("Onde estiver o Bispo, aí esteja a comunidade")',
        'São Cipriano de Cartago, De Catholicae Ecclesiae Unitate',
        'Dositeu, Confissão de Fé, Decreto X'
      ],
      primaryQuotes: [
        {
          source: 'Epístola aos Esmirnenses VIII',
          authorOrDocument: 'Santo Inácio de Antioquia',
          yearOrEra: 'c. 110 d.C.',
          excerpt: 'Onde quer que apareça o bispo, aí esteja a multidão, assim como onde quer que esteja Jesus Cristo, aí está a Igreja Católica.'
        }
      ]
    },
    linkedPassages: [
      {
        book: '1 Timóteo',
        chapter: 2,
        verse: 5,
        referenceSnippet: '1Tm 2:5',
        exegeticalFocus: 'Porque há um só Deus e um só Mediador entre Deus e os homens, Cristo Jesus.'
      },
      {
        book: '1 Pedro',
        chapter: 2,
        verse: 9,
        referenceSnippet: '1Pe 2:9',
        exegeticalFocus: 'Vós sois a geração eleita, o sacerdócio real, a nação santa.'
      },
      {
        book: 'Hebreus',
        chapter: 4,
        verse: 14,
        verseEnd: 16,
        referenceSnippet: 'Hb 4:14-16',
        exegeticalFocus: 'Tendo um grande sumo sacerdote que penetrou os céus, cheguemos com confiança.'
      }
    ]
  },
  {
    id: 'santos-e-maria',
    category: 'Eclesiologia e Santos',
    topic: 'Veneração de Santos, Theotokos e Mediação',
    theologicalConsensus: {
      title: 'Consenso sobre Maria como Theotokos no Concílio de Éfeso (431 d.C.)',
      summary: 'Todas as tradições históricas aceitam a definição cristológica do Concílio de Éfeso: a Virgem Maria é verdadeiramente "Theotokos" (Mãe de Deus / Aquela que gerou Deus), pois Aquele que dela nasceu segundo a carne é o Verbo Eterno divino encarnado.',
      sharedCreeds: ['Fórmula de União de 433 d.C.', 'Concílio Ecumênico de Éfeso (431 d.C.)']
    },
    catholicPosition: {
      title: 'Comunhão dos Santos, Dulia, Hiperdulia e Dogmas Marianos',
      summary: 'Cristo é o Mediador redentor único e absoluto, mas a caridade divina admite uma intercessão secundária e subordinada na comunhão dos santos do céu. Presta-se veneração aos santos (*dulia*) e especial veneração à Virgem Maria (*hiperdulia*). Proclama quatro dogmas marianos: Maternidade Divina, Virgindade Perpétua, Imaculada Conceição (1854) e Assunção Corporal (1950).',
      biblicalBases: ['Lucas 1:28, 42, 48', 'Apocalipse 5:8; 8:3-4 (taças de orações dos santos)', 'João 2:1-11 (Bodas de Caná)'],
      historicalSources: [
        'Papa Pio IX, Bula Ineffabilis Deus (1854, Imaculada Conceição)',
        'Papa Pio XII, Constituição Munificentissimus Deus (1950, Assunção)',
        'Catecismo da Igreja Católica §963-975'
      ],
      primaryQuotes: [
        {
          source: 'Catecismo da Igreja Católica §956',
          authorOrDocument: 'Magistério Eclesiástico',
          yearOrEra: '1992',
          excerpt: 'Pelo fato de os habitantes do Céu estarem mais intimamente unidos com Cristo, consolidam mais firmemente toda a Igreja na santidade... Não cessam de interceder por nós junto ao Pai.'
        }
      ]
    },
    protestantPosition: {
      title: 'Solus Christus: Oração e Súplica Dirigidas Somente a Deus',
      summary: 'A oração litúrgica e devocional deve ser dirigida com exclusividade à Santíssima Trindade (Pai, Filho e Espírito Santo). Maria é honrada como bendita entre as mulheres e exemplo supremo de submissão à vontade divina, mas não é mediadora, advogada nem alvo de orações. Os dogmas da Imaculada Conceição e da Assunção corporal são rejeitados por ausência de fundamento bíblico explícito.',
      biblicalBases: ['1 Timóteo 2:5', 'Mateus 6:9 ("Pai nosso que estás nos céus")', 'Colossenses 2:18', 'Filipenses 4:6'],
      historicalSources: [
        'Confissão de Augsburgo (Artigo XXI, "Do Culto aos Santos")',
        'Confissão de Fé de Westminster 21.2',
        'João Calvino, Tratado sobre as Relíquias (1543)'
      ],
      primaryQuotes: [
        {
          source: 'Confissão de Augsburgo, Artigo XXI',
          authorOrDocument: 'Filipe Melâncton',
          yearOrEra: '1530',
          excerpt: 'A Escritura não ensina a invocar os santos nem a pedir o seu socorro, porque nos propõe um único Cristo como Mediador, Propiciatório, Sumo Sacerdote e Intercessor.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'A Theotokos como Mais Honrada que os Querubins e a Nuvem de Testemunhas',
      summary: 'A Ortodoxia tem uma devoção riquíssima à Theotokos (a Sempre-Virgem Maria), louvada nos hinos como "mais venerável que os Querubins e incomparavelmente mais gloriosa que os Serafins". Rejeita a formulação ocidental da Imaculada Conceição por não crer na transmissão da culpa original agostiniana (crê no pecado ancestral como mortalidade herdada), e celebra com grande solenidade a Dormição da Theotokos (sua morte serena seguida pelo acolhimento de sua alma e corpo por Cristo).',
      biblicalBases: ['Lucas 1:48 ("todas as gerações me chamarão bem-aventurada")', 'Hebreus 12:1 ("nuvem de testemunhas")', 'Apocalipse 8:3-4'],
      historicalSources: [
        'Hino Akathistos à Mãe de Deus (século VI)',
        'São João Damasceno, Homilias sobre a Dormição da Santa Mãe de Deus',
        'Confissão de Dositeu, Decreto VIII'
      ],
      primaryQuotes: [
        {
          source: 'Hino Litúrgico da Divina Liturgia de São João Crisóstomo',
          authorOrDocument: 'Liturgia Bizantina',
          yearOrEra: 'século IV-V',
          excerpt: 'É verdadeiramente digno bendizer-te, ó Theotokos, sempre bem-aventurada e irrepreensível, e Mãe do nosso Deus. Mais honrada que os Querubins e mais gloriosa sem comparação que os Serafins!'
        }
      ]
    },
    linkedPassages: [
      {
        book: 'Lucas',
        chapter: 1,
        verse: 46,
        verseEnd: 48,
        referenceSnippet: 'Lc 1:46-48',
        exegeticalFocus: 'Magnificat: Minha alma engrandece ao Senhor... todas as gerações me proclamarão bem-aventurada.'
      },
      {
        book: 'Hebreus',
        chapter: 12,
        verse: 1,
        referenceSnippet: 'Hb 12:1',
        exegeticalFocus: 'Estando rodeados de tão grande nuvem de testemunhas.'
      },
      {
        book: 'Apocalipse',
        chapter: 8,
        verse: 3,
        verseEnd: 4,
        referenceSnippet: 'Ap 8:3-4',
        exegeticalFocus: 'A fumaça dos incensos subiu da mão do anjo com as orações dos santos.'
      }
    ]
  },

  // --------------------------------------------------------------------------
  // PILAR 4: LITURGIA, RITOS E SACRAMENTOS
  // --------------------------------------------------------------------------
  {
    id: 'eucaristia-presenca-real',
    category: 'Sacramentos e Liturgia',
    topic: 'A Eucaristia e a Presença de Cristo (Transubstanciação vs. Símbolo vs. Epiclese)',
    theologicalConsensus: {
      title: 'Consenso sobre a Instituição Divina da Ceia por Jesus',
      summary: 'Todas as ramificações do cristianismo obedecem reverentemente ao mandamento de Jesus Cristo na Última Ceia: "Fazei isto em memória de mim", repartindo o pão e o cálice como memorial e celebração da Nova Aliança em seu sangue.',
      sharedCreeds: ['1 Coríntios 11:23-26', 'Lucas 22:19-20']
    },
    catholicPosition: {
      title: 'Transubstanciação e Banquete Sacrificial Incruento da Missa',
      summary: 'Pela consagração sacerdotal, dá-se a mudança de toda a substância do pão no Corpo de Cristo e de toda a substância do vinho no Seu Sangue, permanecendo apenas os acidentes sensíveis externos (sabor, cor, forma). A Santa Missa é uma reapresentação sacramental incruenta do sacrifício perfeito do Calvário.',
      biblicalBases: ['João 6:51-56', 'Mateus 26:26-28', '1 Coríntios 10:16; 11:27-29'],
      historicalSources: [
        'IV Concílio de Latrão (1215)',
        'Concílio de Trento, Sessão XIII (Decreto sobre a Eucaristia, 1551)',
        'Catecismo da Igreja Católica §1373-1381'
      ],
      primaryQuotes: [
        {
          source: 'Concílio de Trento, Sessão XIII, Cânon 1',
          authorOrDocument: 'Concílio de Trento',
          yearOrEra: '1551',
          excerpt: 'Se alguém negar que no santíssimo sacramento da Eucaristia se contém verdadeira, real e substancialmente o corpo e sangue juntamente com a alma e divindade de nosso Senhor Jesus Cristo... seja anátema.'
        }
      ]
    },
    protestantPosition: {
      title: 'Pluralidade Histórica: União Sacramental, Presença Espiritual ou Memorial',
      summary: 'Três grandes posições convivem na Reforma:\n• Luterana: Consubstanciação / União Sacramental (presença real de Cristo *com, sob e em* os elementos materiais).\n• Reformada/Calvinista: Presença espiritual real (o crente se alimenta espiritualmente de Cristo pela fé pelo poder do Espírito Santo).\n• Zwingliana/Batista: Memorial e ordenança comemorativa solene ("fazei isto em memória de mim").',
      biblicalBases: ['1 Coríntios 11:23-26', 'Lucas 22:19', 'João 6:63 ("o espírito é o que vivifica; a carne para nada aproveita")'],
      historicalSources: [
        'Confissão de Fé de Westminster 29.7 (Presença espiritual)',
        'Confissão de Augsburgo (Artigo X, Presença real luterana)',
        'Colóquio de Marburgo (1529, debate Lutero vs. Zuínglio)'
      ],
      primaryQuotes: [
        {
          source: 'Confissão de Fé de Westminster XXIX.VII',
          authorOrDocument: 'Assembleia de Westminster',
          yearOrEra: '1647',
          excerpt: 'Os que comungam dignamente... não de um modo carnal e corporal, mas espiritualmente, pela fé, recebem a Cristo crucificado e todos os benefícios de sua morte e deles se alimentam.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'O Mistério Litúrgico Real e o Papel Central da Epiclese',
      summary: 'A Ortodoxia crê com fé inabalável que o pão levedado e o vinho misturado com água tépida (*Zeon*) tornam-se o verdadeiro Corpo e Sangue de Cristo pela ação do Espírito Santo invocada na solene *Epiclese*. Evita dogmatizar categorias aristotélicas ocidentais de "substância vs. acidentes", tratando a conversão como um Sagrado Mistério inefável e um banquete escatológico do Reino.',
      biblicalBases: ['João 6:53-58', '1 Coríntios 10:16', 'Lucas 22:19-20'],
      historicalSources: [
        'Liturgia de São Tiago, Irmão do Senhor (século I-II)',
        'Liturgia Divina de São João Crisóstomo (Oração da Epiclese)',
        'São João Damasceno, De Fide Orthodoxa IV.13'
      ],
      primaryQuotes: [
        {
          source: 'Oração da Solene Epiclese Eucarística',
          authorOrDocument: 'Liturgia de São João Crisóstomo',
          yearOrEra: 'século IV-V',
          excerpt: 'E faz deste pão o precioso Corpo do Teu Cristo, e do que está neste cálice o precioso Sangue do Teu Cristo, transformando-os pelo Teu Espírito Santo. Amém! Amém! Amém!'
        }
      ]
    },
    linkedPassages: [
      {
        book: 'João',
        chapter: 6,
        verse: 53,
        verseEnd: 56,
        referenceSnippet: 'Jo 6:53-56',
        exegeticalFocus: 'Quem come a minha carne e bebe o meu sangue tem a vida eterna, e eu o ressuscitarei no último dia.'
      },
      {
        book: '1 Coríntios',
        chapter: 11,
        verse: 23,
        verseEnd: 29,
        referenceSnippet: '1Co 11:23-29',
        exegeticalFocus: 'Instituição da Ceia, discernimento do corpo do Senhor e juízo.'
      },
      {
        book: 'Lucas',
        chapter: 22,
        verse: 19,
        verseEnd: 20,
        referenceSnippet: 'Lc 22:19-20',
        exegeticalFocus: 'Isto é o meu corpo oferecido por vós; este é o cálice da Nova Aliança no meu sangue.'
      }
    ]
  },
  {
    id: 'clausula-filioque',
    category: 'Sacramentos e Liturgia',
    topic: 'A Cláusula Filioque e a Procedência do Espírito Santo',
    theologicalConsensus: {
      title: 'Consenso na Divindade Plena e Coeterna da Terceira Pessoa da Trindade',
      summary: 'Católicos, Protestantes e Ortodoxos confessam convictamente a divindade plena do Espírito Santo, que é adorado e glorificado juntamente com o Pai e com o Filho, e que falou pelos profetas.',
      sharedCreeds: ['Credo Niceno-Constantinopolitano (381 d.C.)']
    },
    catholicPosition: {
      title: 'O Espírito Santo Procede do Pai e do Filho (Filioque)',
      summary: 'No Ocidente latino, a cláusula *Filioque* ("e do Filho") foi introduzida no Credo a partir do III Concílio de Toledo (589 d.C.) para proteger a divindade de Cristo contra o arianismo visigótico. Teologicamente, o Catolicismo ensina que o Espírito Santo procede eternamente do Pai e do Filho como de um único princípio e por uma única espiração de amor mútuo.',
      biblicalBases: ['João 15:26', 'João 16:7', 'Romanos 8:9 ("o Espírito de Cristo")', 'Gálatas 4:6'],
      historicalSources: [
        'III Concílio de Toledo (589 d.C.)',
        'II Concílio de Lyon (1274)',
        'Concílio de Florença (1439, Decreto pro Graecis)'
      ],
      primaryQuotes: [
        {
          source: 'Concílio de Florença, Sessão VI',
          authorOrDocument: 'Concílio Ecumênico de Florença',
          yearOrEra: '1439',
          excerpt: 'Definimos que o Espírito Santo é eternamente do Pai e do Filho, e que tem sua essência e seu ser subsistente ao mesmo tempo do Pai e do Filho, e que procede de ambos eternamente como de um só princípio.'
        }
      ]
    },
    protestantPosition: {
      title: 'Adoção Histórica Ocidental do Filioque na Teologia Confessional',
      summary: 'Os Reformadores clássicos (Lutero, Calvino, Cranmer) preservaram a recitação ocidental do Credo Niceno com o *Filioque*, herdada da tradição agostiniana. No entanto, teólogos protestantes contemporâneos e diálogos ecumênicos frequentemente reconhecem a legitimidade canônica do texto grego original de 381 d.C. e admitem omitir a cláusula em contextos ecumênicos.',
      biblicalBases: ['João 14:16, 26', 'João 15:26', 'João 16:13-14', 'Atos 2:33'],
      historicalSources: [
        'Confissão de Fé de Westminster 2.3',
        '39 Artigos de Religião (Artigo V)',
        'Confissão de Augsburgo (Artigo I)'
      ],
      primaryQuotes: [
        {
          source: 'Confissão de Fé de Westminster II.III',
          authorOrDocument: 'Assembleia de Westminster',
          yearOrEra: '1647',
          excerpt: 'O Espírito Santo é eternamente procedente do Pai e do Filho.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'Monarquia do Pai: O Espírito Procede Unicamente do Pai',
      summary: 'A Ortodoxia ensina a *Monarquia do Pai*, a única fonte (*archē*) e causa primordial na Trindade. O Credo Ecumênico de 381 d.C. define expressamente que o Espírito "procede do Pai" (Jo 15:26). A inserção unilateral ocidental do *Filioque* sem um Concílio Ecumênico foi a causa teológica central do Grande Cisma de 1054. Admite-se que o Espírito é enviado *no tempo através do Filho* (missão econômica), mas não procede ontologicamente do Filho em sua existência hipostática eterna.',
      biblicalBases: ['João 15:26 ("o Espírito da verdade, que procede do Pai")', 'Mateus 3:16-17', '1 Coríntios 8:6'],
      historicalSources: [
        'São Fócio, Mistagogia do Espírito Santo (século IX)',
        'Credo Niceno-Constantinopolitano Original Grego (381 d.C.)',
        'São João Damasceno, De Fide Orthodoxa I.8'
      ],
      primaryQuotes: [
        {
          source: 'Mistagogia do Espírito Santo §8',
          authorOrDocument: 'São Fócio, o Grande',
          yearOrEra: '886 d.C.',
          excerpt: 'Se o Espírito procede também do Filho, então há dois princípios e duas causas na Trindade, o que corrompe a monarquia do Pai proclamada pelos Evangelhos e pelos Pais.'
        },
        {
          source: 'Evangelho de São João 15:26 (Texto Canônico do Credo)',
          authorOrDocument: 'Texto do Novo Testamento Grego',
          yearOrEra: 'século I',
          excerpt: 'Quando vier o Consolador, que eu da parte do Pai vos hei de enviar, aquele Espírito da verdade, que procede do Pai (ho para tou Patros ekporeuetai), ele testificará de mim.'
        }
      ]
    },
    linkedPassages: [
      {
        book: 'João',
        chapter: 15,
        verse: 26,
        referenceSnippet: 'Jo 15:26',
        exegeticalFocus: 'O Espírito da verdade que procede do Pai, Ele dará testemunho de mim.'
      },
      {
        book: 'João',
        chapter: 16,
        verse: 7,
        referenceSnippet: 'Jo 16:7',
        exegeticalFocus: 'Se eu for, enviar-vo-lo-ei (missão econômica do Paráclito).'
      },
      {
        book: 'Romanos',
        chapter: 8,
        verse: 9,
        referenceSnippet: 'Rm 8:9',
        exegeticalFocus: 'Se alguém não tem o Espírito de Cristo, esse tal não é dele.'
      }
    ]
  },
  {
    id: 'icones-e-imagens',
    category: 'Sacramentos e Liturgia',
    topic: 'Veneração de Santos Ícones e Imagens Sagradas',
    theologicalConsensus: {
      title: 'Consenso contra a Idolatria e o Culto a Falsos Deuses',
      summary: 'Católicos, Protestantes e Ortodoxos rejeitam taxativamente qualquer forma de idolatria, condenando a atribuição de divindade ou poder sobrenatural intrínseco a objetos de madeira, pedra ou tela.',
      sharedCreeds: ['Êxodo 20:3-5', '1 João 5:21 ("guardai-vos dos ídolos")']
    },
    catholicPosition: {
      title: 'Imagens Didáticas e Veneração Relativa da Pessoa Representada',
      summary: 'Crucifixos, estátuas e telas sacras são instrumentos pedagógicos valiosos e objetos de veneração relativa (não de adoração latria, reservada a Deus). A honra prestada à imagem dirige-se e sobe à pessoa do protótipo representado (Cristo, a Virgem Maria ou os santos), conforme canonizado pelo II Concílio de Nicéia.',
      biblicalBases: ['Êxodo 25:18-20 (Querubins da Arca)', 'Números 21:8-9 (Serpente de bronze)', 'Colossenses 1:15 (Cristo, imagem do Deus invisível)'],
      historicalSources: [
        'II Concílio de Nicéia (787 d.C.)',
        'Concílio de Trento, Sessão XXV (Sobre as Imagens)',
        'Catecismo da Igreja Católica §2129-2132'
      ],
      primaryQuotes: [
        {
          source: 'Catecismo da Igreja Católica §2132',
          authorOrDocument: 'Magistério Eclesiástico',
          yearOrEra: '1992',
          excerpt: 'O culto da religião não se dirige às imagens em si mesmas como realidades, mas olha-as sob o seu aspecto próprio de imagens que nos conduzem ao Deus encarnado.'
        }
      ]
    },
    protestantPosition: {
      title: 'Rejeição Estrita do Culto Diante de Imagens Religiosas',
      summary: 'Com base na proibição explícita do Segundo Mandamento (Êx 20:4-5), o Protestantismo rejeita qualquer culto, prostração, beijo ou queima de incenso diante de imagens esculpidas ou pintadas. Templos protestantes históricos priorizam a sobriedade arquitetônica, adotando quando muito a cruz vazia como símbolo singelo da vitória de Cristo na ressurreição.',
      biblicalBases: ['Êxodo 20:4-5', 'Deuteronômio 4:15-19', 'Isaías 44:9-20', '2 Coríntios 5:7 ("andamos por fé e não por vista")'],
      historicalSources: [
        'Catecismo de Heidelberg, Perguntas 96-98',
        'Confissão de Fé de Westminster 21.1',
        'João Calvino, Institutas da Religião Cristã I.11'
      ],
      primaryQuotes: [
        {
          source: 'Catecismo de Heidelberg, Pergunta 98',
          authorOrDocument: 'Zacarias Ursinus',
          yearOrEra: '1563',
          excerpt: 'Poderão ser toleradas imagens nas igrejas como livros para os leigos? Não; porque não devemos ser mais sábios que Deus, que não quer que o seu povo seja ensinado por ídolos mudos, mas pela viva pregação da sua Palavra.'
        }
      ]
    },
    orthodoxPosition: {
      title: 'A Teologia da Encarnação dos Santos Ícones (Janelas para a Eternidade)',
      summary: 'Para a Ortodoxia, o Santo Ícone não é mera decoração artística nem estátua tridimensional, mas uma consequência dogmática imperativa da Encarnação do Verbo: já que Deus verdadeiramente se fez homem visível em Jesus Cristo, Ele pode e deve ser retratado em ícones. Presta-se aos ícones veneração beijando-os e incensando-os (*proskynesis*), direcionada ao protótipo no céu, reservando a adoração suprema (*latreia*) exclusivamente a Deus.',
      biblicalBases: ['Colossenses 1:15', 'João 1:14 ("O Verbo se fez carne e habitou entre nós")', '1 João 1:1'],
      historicalSources: [
        'II Concílio de Nicéia (7º Concílio Ecumênico, 787 d.C.)',
        'São João Damasceno, Três Tratados Apologéticos contra os que Rejeitam as Sagradas Imagens',
        'Domingo da Ortodoxia (Sinodikon da Ortodoxia, 843 d.C.)'
      ],
      primaryQuotes: [
        {
          source: 'Definição Dogmática do II Concílio de Nicéia',
          authorOrDocument: '7º Concílio Ecumênico',
          yearOrEra: '787 d.C.',
          excerpt: 'Quanto mais frequentemente eles são contemplados através de sua representação icônica, tanto mais aqueles que os contemplam são elevados à memória e ao amor dos protótipos... Pois a honra prestada ao ícone passa para o protótipo.'
        },
        {
          source: 'Tratados sobre as Sagradas Imagens I.16',
          authorOrDocument: 'São João Damasceno',
          yearOrEra: 'c. 730 d.C.',
          excerpt: 'Não adoro a matéria, mas adoro o Criador da matéria, que se fez matéria por minha causa e condescendeu em habitar na matéria, realizando minha salvação através da matéria.'
        }
      ]
    },
    linkedPassages: [
      {
        book: 'Colossenses',
        chapter: 1,
        verse: 15,
        referenceSnippet: 'Cl 1:15',
        exegeticalFocus: 'Ele é a imagem (eikōn) do Deus invisível, o primogênito de toda a criação.'
      },
      {
        book: 'Êxodo',
        chapter: 20,
        verse: 4,
        verseEnd: 5,
        referenceSnippet: 'Êx 20:4-5',
        exegeticalFocus: 'Não farás para ti imagem de escultura... não te curvarás a elas.'
      },
      {
        book: 'João',
        chapter: 1,
        verse: 14,
        referenceSnippet: 'Jo 1:14',
        exegeticalFocus: 'O Verbo se fez carne e habitou entre nós, e vimos a sua glória.'
      }
    ]
  }
];

// Helper functions for reading view integration

export function getTheologicalComparisonsByPassage(
  bookName: string,
  chapterNum?: number
): TheologicalComparisonItem[] {
  const normBook = bookName.trim().toLowerCase();

  return THEOLOGICAL_COMPARISONS.filter(item => {
    if (!item.linkedPassages) return false;
    return item.linkedPassages.some(p => {
      const matchBook = p.book.toLowerCase() === normBook || 
        normBook.includes(p.book.toLowerCase()) || 
        p.book.toLowerCase().includes(normBook);
      if (!matchBook) return false;
      if (chapterNum !== undefined && p.chapter !== undefined) {
        return p.chapter === chapterNum;
      }
      return true;
    });
  });
}

export function getTheologicalVerseMarkersForChapter(
  bookName: string,
  chapterNum: number
): Map<number, TheologicalVerseMarker> {
  const map = new Map<number, TheologicalVerseMarker>();
  if (!bookName) return map;

  const normalizeStr = (s: string) =>
    s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

  const normBook = normalizeStr(bookName);

  for (const item of THEOLOGICAL_COMPARISONS) {
    if (!item.linkedPassages) continue;
    for (const link of item.linkedPassages) {
      const linkNorm = normalizeStr(link.book);
      const matchBook = 
        linkNorm === normBook || 
        normBook.includes(linkNorm) || 
        linkNorm.includes(normBook);

      if (matchBook && link.chapter === chapterNum && link.verse !== undefined) {
        const start = link.verse;
        const end = link.verseEnd || link.verse;
        const pericopeRange = link.verseEnd ? `${link.verse}-${link.verseEnd}` : `${link.verse}`;

        for (let v = start; v <= end; v++) {
          if (!map.has(v)) {
            map.set(v, {
              item,
              link,
              isRangeStart: v === start,
              pericopeRange
            });
          }
        }
      }
    }
  }

  return map;
}

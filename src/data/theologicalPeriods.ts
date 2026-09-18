import { HistoricalPeriod } from '../types';

export const HISTORICAL_PERIODS: HistoricalPeriod[] = [
  {
    id: 'creation-patriarchs',
    name: 'Criação e Era Patriarcal',
    era: 'c. Primórdios a 1800 a.C.',
    startDay: 1,
    endDay: 26,
    description: 'A criação do cosmos, a queda da humanidade, o dilúvio, a aliança com Abraão, Isaque, Jacó, José e a provação de Jó nas planícies antigas.',
    color: '#D97706', // amber-600
    dominantPowers: ['Cidades-Estados Sumérias (Ur, Uruk)', 'Império Acádio', 'Antigo & Médio Império Egípcio', 'Antiga Babilônia (Hamurabi)'],
    worldContextSummary: 'Surgimento da escrita cuneiforme e hieroglífica. A migração de Abraão sai de Ur dos Caldeus durante o renascimento sumério. Os costumes patriarcais (adoção, servas e herança) encontram paralelo exato nas tábuas de Nuzi e no Código de Hamurabi (c. 1750 a.C.).',
    biblicalTrackSummary: 'Gênesis 1-50 & Jó: O Deus transcendente cria pela Palavra; a promessa da Semente (Gn 3:15) e a Aliança Abraâmica irrevogável (Gn 12, 15, 17).',
    empiresTrackSummary: 'Cidades-Estado Sumérias de Ur e Lagash, Unificação do Egito Antigo (Faraós Construtores das Pirâmides) e I Dinastia Babilônica.',
    literatureTrackSummary: 'Epopeia de Atrahasis, Enuma Elish (mito babilônico de criação), Epopeia de Gilgamesh (relato mesopotâmico do dilúvio) e o Código de Leis de Hamurabi.',
    contemporaryLiterature: [
      {
        title: 'Código de Leis de Hamurabi',
        authorOrOrigin: 'Mesopotâmia / I Dinastia Babilônica',
        approxDate: 'c. 1750 a.C.',
        summary: 'Monólito de diorito negro com 282 cláusulas regulando contratos familiares, herança, adoção e casamento no Oriente Próximo.',
        biblicalParallel: 'Esclarece os contratos de casamento e herança de Abraão, Sara, Hagar e Jacó em Padã-Arã com precisão documental.'
      },
      {
        title: 'Epopeia de Gilgamesh (Tabuleta XI)',
        authorOrOrigin: 'Biblioteca Real da Mesopotâmia / Epopéia Acádia',
        approxDate: 'c. 2100 - 1800 a.C.',
        summary: 'Relato poético em cuneiforme da jornada do herói de Uruk e seu encontro com Utnapishtim, o sobrevivente das grandes águas de um dilúvio primitivo.',
        biblicalParallel: 'Memória histórica primordial compartilhada do dilúvio, demonstrando que o relato de Noé reflete um evento de impacto civilizacional preservado sem mitologização politeísta na Bíblia.'
      }
    ],
    keySecularEvents: [
      {
        date: 'c. 2100 - 2000 a.C.',
        empire: 'Terceira Dinastia de Ur (Suméria)',
        event: 'Ziggurats monumentais em Ur e Eridu; rotas comerciais no Golfo Pérsico durante a juventude de Abraão antes do chamado divino para Canaã.',
        archaeologyRef: 'Estandarte de Ur e Ziggurat de Ur-Nammu'
      },
      {
        date: 'c. 1750 a.C.',
        empire: 'I Dinastia da Babilônia',
        event: 'Código de Leis de Hamurabi estabelece parâmetros jurídicos idênticos às práticas descritas nas narrativas de Jacó e Labão em Padã-Arã.',
        archaeologyRef: 'Estela de Diorito do Código de Hamurabi (Museu do Louvre)'
      }
    ]
  },
  {
    id: 'exodus-wilderness',
    name: 'Êxodo e Peregrinação no Deserto',
    era: 'c. 1446 - 1406 a.C.',
    startDay: 27,
    endDay: 75,
    description: 'Libertação da escravidão no Egito, a outorga da Lei no Monte Sinai, o Tabernáculo e os 40 anos de peregrinação no deserto até o Jordão.',
    color: '#DC2626', // red-600
    dominantPowers: ['Egito Antigo (XVIII e XIX Dinastias - Novo Império)', 'Império Hitita'],
    worldContextSummary: 'O Novo Império Egípcio atinge o zênite de seu poder imperialista sob faraós construtores (Tutmés III, Amenófis II e Ramsés II). Monumentos colossais em Tebas, Carnaque e Pi-Ramsés sustentados por trabalho compulsório servil.',
    biblicalTrackSummary: 'Êxodo, Levítico, Números, Deuteronômio: A redenção pela Páscoa, a revelação no Sinai e o santuário móvel da habitação de Javé.',
    empiresTrackSummary: 'Novo Império Egípcio em expansão militar até o rio Eufrates; Batalha de Cades entre o Faraó Ramsés II e os guerreiros Hititas de Muwatalli II.',
    literatureTrackSummary: 'Tratados de Vassalagem Hititas (estrutura jurídica idêntica à Aliança Sinaítica e ao livro de Deuteronômio), Papiro de Ipuwer e Hino a Aton.',
    contemporaryLiterature: [
      {
        title: 'Tratados de Suserania Hititas de Boğazköy',
        authorOrOrigin: 'Hatusa / Império Hitita',
        approxDate: 'c. 1400 - 1250 a.C.',
        summary: 'Tratados formais contendo preâmbulo histórico, estipulações, bênçãos, maldições e invocação de testemunhas cósmicas.',
        biblicalParallel: 'A estrutura exata dos Dez Mandamentos e de todo o livro de Deuteronômio segue com rigor os tratados de suserania do século XV a.C., provando sua antiguidade autêntica mosaica.'
      }
    ],
    keySecularEvents: [
      {
        date: 'c. 1446 a.C. / séc. XIII a.C.',
        empire: 'Novo Império Egípcio',
        event: 'As Dez Pragas atacam o panteão egípcio (Rá, Osíris, Ápis, Hapi/Nilo). O Faraó perde hegemonia militar sobre os semitas cananeus no Sinai.',
        archaeologyRef: 'Papiro de Ipwer e relevos de Pi-Ramsés no Delta oriental'
      },
      {
        date: 'c. 1208 a.C.',
        empire: 'XIX Dinastia Egípcia (Faraó Merneptá)',
        event: 'Inscrição triunfal militar de campanha militar em Canaã contendo a primeira menção extrabíblica direta e explícita ao povo de "Israel".',
        archaeologyRef: 'Estela de Israel / Estela de Merneptá (Museu Egípcio do Cairo)'
      }
    ]
  },
  {
    id: 'conquest-judges',
    name: 'Conquista de Canaã e Período dos Juízes',
    era: 'c. 1406 - 1050 a.C.',
    startDay: 76,
    endDay: 105,
    description: 'Josué liderando a tomada da terra prometida, os ciclos de apostasia e libertação pelos Juízes (Gideão, Sansão, Débora) e a graça de Rute.',
    color: '#16A34A', // green-600
    dominantPowers: ['Cidades-Estados Cananeias', 'Confederação dos Povos do Mar (Filisteus)', 'Império Hitita em colapso', 'XX Dinastia Egípcia em declínio'],
    worldContextSummary: 'O Colapso da Idade do Bronze Recente (c. 1200 a.C.): destruição de grandes impérios e cidades costeiras pela invasão dos Povos do Mar (incluindo os Filisteus/Peleset, que se instalam na planície litorânea da Palestina com tecnologia avançada de ferro fundido).',
    biblicalTrackSummary: 'Josué, Juízes e Rute: Queda de Jericó e Ai, distribuição das tribos e os ciclos espirais de pecado, servidão, clamor e libertação carismática.',
    empiresTrackSummary: 'Invasão dos Filisteus na costa da Filístia (Pentápole: Gaza, Ascalom, Asdode, Gate e Ecrom) com monopólio metalúrgico do ferro.',
    literatureTrackSummary: 'Cartas de Amarna (correspondência cuneiforme de governadores cananeus apelando desesperadamente ao Faraó por socorro militar contra os invasores "Habiru/Apiru").',
    contemporaryLiterature: [
      {
        title: 'Cartas Diplomáticas de Tell el-Amarna',
        authorOrOrigin: 'Canaã / Arquivos Reais Egípcios de Akenaton',
        approxDate: 'c. 1350 a.C.',
        summary: 'Tabuletas de argila cuneiforme enviadas pelos príncipes de Jerusalém (Abdi-Heba), Siquém e Megido relatando a perda de controle de cidades para os invasores "Habiru".',
        biblicalParallel: 'Corrobora o ambiente geopolítico e de instabilidade nas montanhas de Canaã durante o avanço das forças israelitas sob Josué.'
      }
    ],
    keySecularEvents: [
      {
        date: 'c. 1350 a.C.',
        empire: 'Cidades-Estado de Canaã sob suserania egípcia',
        event: 'Príncipes cananeus enviam mensagens desesperadas ao Faraó relatando que grupos nômades "Habiru" estão tomando aldeias e colinas.',
        archaeologyRef: 'Cartas de Amarna em argila cuneiforme (descobertas em 1887 no Egito)'
      },
      {
        date: 'c. 1177 a.C.',
        empire: 'Povos do Mar e Egito (Ramsés III)',
        event: 'Batalha do Delta: Ramsés III repele os Povos do Mar; sobreviventes filisteus instalam-se na costa sudoeste de Canaã (Gaza, Asdode, Ascalom, Gate e Ecrom).',
        archaeologyRef: 'Relevos monumentais do Templo de Medinet Habu'
      }
    ]
  },
  {
    id: 'united-kingdom',
    name: 'Monarquia Unida: Saul, Davi e Salomão',
    era: 'c. 1050 - 930 a.C.',
    startDay: 106,
    endDay: 165,
    description: 'A unificação das 12 tribos sob Samuel e Saul, a ascensão do Rei Davi como homem segundo o coração de Deus, os Salmos de Sião e o Templo dourado de Salomão.',
    color: '#2563EB', // blue-600
    dominantPowers: ['Reino de Israel Unido', 'Reino Fenício de Tiro (Rei Hirão)', 'Reino de Damasco (Aram)', 'Egito (XXI Dinastia)'],
    worldContextSummary: 'Vácuo de poder imperial no Antigo Oriente Próximo: tanto o Egito quanto a Assíria passam por séculos de fraqueza política. Isso permitiu a Davi e Salomão expandirem as fronteiras de Israel do Rio Eufrates até a fronteira do Egito, dominando as rotas comerciais da Via Maris e da Estrada dos Reis.',
    biblicalTrackSummary: '1 e 2 Samuel, 1 Reis 1-11, 1 Crônicas, Salmos davídicos, Provérbios, Eclesiastes e Cantares de Salomão.',
    empiresTrackSummary: 'Império Marítimo Fenício de Tiro e Biblos; Dinastia de Tanis no Egito; período de fraqueza dos reis assírios antes do ressurgimento neoassírio.',
    literatureTrackSummary: 'Inscrições Fenícias arcaicas (difusão do alfabeto consonantal fonético pelo Mediterrâneo), Sabedoria de Amenemope no Egito.',
    contemporaryLiterature: [
      {
        title: 'Instruções de Amenemope',
        authorOrOrigin: 'Egito Antigo',
        approxDate: 'c. 1100 - 1000 a.C.',
        summary: 'Papiro egípcio de sabedoria prática e exortações morais à honestidade, moderação e auxílio aos necessitados.',
        biblicalParallel: 'Demonstra paralelos temáticos e literários com o livro bíblico de Provérbios (caps. 22-24), evidenciando o ambiente sapiencial cosmopolita no qual Salomão governou.'
      }
    ],
    keySecularEvents: [
      {
        date: 'c. 1000 a.C.',
        empire: 'Reino de Israel (Rei Davi)',
        event: 'Davi conquista a fortaleza jebusita de Sião e estabelece Jerusalém como a capital política e espiritual unificada de todas as tribos.',
        archaeologyRef: 'A Estrutura de Pedra Escalonada e a Grande Estrutura de Pedra escavadas na Cidade de Davi (Eilat Mazar)'
      },
      {
        date: 'c. 960 a.C.',
        empire: 'Reino de Israel e Fenícia de Tiro',
        event: 'Salomão e o Rei Hirão de Tiro estabelecem aliança comercial: madeira de cedro do Líbano e artífices fenícios erguem o Primeiro Templo no Monte Moriá.',
        archaeologyRef: 'Minas de cobre de Salomão no Vale de Timna e portões de seis câmaras em Gezer, Hazor e Megido'
      }
    ]
  },
  {
    id: 'divided-kingdom',
    name: 'O Reino Dividido e os Profetas Pré-Exílicos',
    era: 'c. 930 - 586 a.C.',
    startDay: 166,
    endDay: 245,
    description: 'A divisão trágica entre Judá (sul) e Israel (norte), os reis idólatras, os ministérios de Elias e Eliseu, o avanço brutal da Assíria e a voz trovejante dos profetas (Amós, Oséias, Isaías, Miqueias, Jeremias).',
    color: '#7C3AED', // violet-600
    dominantPowers: ['Império Neoassírio (Tiglaz-Pileser III, Sargão II, Senaqueribe, Assurbanipal)', 'Reino de Damasco', 'Reino de Judá', 'Império Neobabilônico nascente'],
    worldContextSummary: 'A ascensão da maior máquina militar da antiguidade: o Império Neoassírio aperfeiçoa o cerco com aríetes, tortura psicológica e a política de deportação em massa de populações inteiras para evitar rebeliões. Em 722 a.C., a Samaria é conquistada e o Reino do Norte é destruído.',
    biblicalTrackSummary: '1 e 2 Reis, 2 Crônicas, Jonas, Amós, Oseias, Miqueias, Isaías, Sofonias, Naum, Habacuque e Jeremias 1-38.',
    empiresTrackSummary: 'Império Neoassírio dominando todo o Crescente Fértil; destruição de Nínive em 612 a.C. pelos Medos e Neobabilônios; Batalha de Carquêmis em 605 a.C.',
    literatureTrackSummary: 'Poemas Épicos de Homero (Ilíada e Odisseia na Grécia arcaica, c. 750 a.C.), Primeiros Jogos Olímpicos (776 a.C.), Fundação tradicional de Roma (753 a.C.), Biblioteca Real de Nínive de Assurbanipal.',
    contemporaryLiterature: [
      {
        title: 'A Ilíada e a Odisseia (Homero)',
        authorOrOrigin: 'Jônia / Grécia Arcaica',
        approxDate: 'c. 750 a.C.',
        summary: 'Poemas épicos fundadores da literatura e mitologia grega narrando a Guerra de Troia, a ira de Aquiles e a viagem de Odisseu.',
        biblicalParallel: 'Compostos na mesma época em que os profetas Isaías, Amós e Oséias denunciavam a injustiça social e anunciavam o Messias em Israel e Judá, contrastando o heroísmo trágico pagão com a santidade do Deus Soberano da Aliança.'
      },
      {
        title: 'Prisma de Senaqueribe (Taylor Prism)',
        authorOrOrigin: 'Nínive / Império Neoassírio',
        approxDate: '691 a.C.',
        summary: 'Crônica real assíria em escrita cuneiforme relatando o cerco a 46 fortalezas de Judá e o isolamento de Ezequias em Jerusalém.',
        biblicalParallel: 'Validação arqueológica estrita de 2 Reis 18-19 e Isaías 36-37, confirmando o pagamento de tributo e o livramento milagroso da capital de Judá.'
      }
    ],
    keySecularEvents: [
      {
        date: '722 a.C.',
        empire: 'Império Neoassírio (Salmaneser V e Sargão II)',
        event: 'Queda de Samaria após três anos de cerco; deportação das dez tribos do norte para a Mesopotâmia e Média (o fim do Reino de Israel).',
        archaeologyRef: 'Prisma de Sargão II em Corsabade detalhando o despojo de 27.290 cativos israelitas'
      },
      {
        date: '701 a.C.',
        empire: 'Império Neoassírio (Senaqueribe)',
        event: 'Senaqueribe devasta as fortalezas de Judá e cerca Jerusalém; Ezequias ora no templo e o Anjo do Senhor destrói o acampamento assírio.',
        archaeologyRef: 'Prisma de Senaqueribe (Taylor Prism) no Museu Britânico e Inscrição do Aqueduto de Siloé em Jerusalém'
      },
      {
        date: '605 a.C.',
        empire: 'Império Neobabilônico (Nabucodonosor II)',
        event: 'Batalha de Carquêmis: a Babilônia esmaga a coalizão egípcio-assíria; primeira deportação de cativos judeus a Babilônia (Daniel e seus amigos).',
        archaeologyRef: 'Crônica Babilônica (BM 21946) registrando a vitória no rio Eufrates'
      }
    ]
  },
  {
    id: 'exile',
    name: 'O Cativeiro Babilônico e os Profetas do Exílio',
    era: 'c. 586 - 538 a.C.',
    startDay: 246,
    endDay: 275,
    description: 'O cerco e destruição de Jerusalém e do Templo por Nabucodonosor, a dor de Lamentações, as visões da glória de Deus entre os cativos com Ezequiel e a fidelidade de Daniel na corte pagã.',
    color: '#059669', // emerald-600
    dominantPowers: ['Império Neobabilônico (Nabucodonosor II, Nabonido e Belsazar)', 'Império Medo', 'Império Persa sob Ciro II'],
    worldContextSummary: 'A Babilônia torna-se a maior metrópole murada do planeta, famosa pelo Templo de Marduque (Esagila), o Ziggurat Etemenanki e os Jardins Suspensos. No exílio, sem o Templo físico, nasce o judaísmo da sinagoga: estudo focado da Torá, oração e preservação meticulosa dos textos sagrados pelos escribas.',
    biblicalTrackSummary: 'Jeremias 39-52, Lamentações, Ezequiel e Daniel: A perda de Sião, a fidelidade nas fornalhas de Babilônia e a visão do Reino Eterno que jamais será destruído.',
    empiresTrackSummary: 'Império Caldeu / Neobabilônico; queda de Babilônia em 539 a.C. perante Ciro, o Grande da Pérsia, sem resistência violenta.',
    literatureTrackSummary: 'Filosofia Pré-Socrática na Grécia (Tales de Mileto, Pitágoras), Código Neobabilônico e crônicas cuneiformes dos festivais do Akitu.',
    contemporaryLiterature: [
      {
        title: 'Teoremas e Escritos de Tales de Mileto e Pitágoras',
        authorOrOrigin: 'Mileto e Magna Grécia',
        approxDate: 'c. 585 - 540 a.C.',
        summary: 'O despertar da razão e da matemática especulativa pré-socrática no mundo grego.',
        biblicalParallel: 'Enquanto os sábios jônios buscavam a substância primordial no cosmos (água, números), Daniel na corte babilônica recebia a revelação soberana do Ancião de Dias e do Filho do Homem regendo a história.'
      }
    ],
    keySecularEvents: [
      {
        date: '586 a.C. (9 de Av)',
        empire: 'Império Neobabilônico (Nabucodonosor II)',
        event: 'Queima de Jerusalém, demolição das muralhas e destruição do Primeiro Templo de Salomão. Terceira deportação para os canais da Babilônia.',
        archaeologyRef: 'Cartas de Laquis em óstracos e camada espessa de cinzas da destruição babilônica na Cidade Velha de Jerusalém'
      },
      {
        date: '539 a.C.',
        empire: 'Império Aquemênida Persa (Ciro II, o Grande)',
        event: 'Tropas persas desviam as águas do rio Eufrates e entram na Babilônia na noite do banquete sacrílego de Belsazar (Daniel 5).',
        archaeologyRef: 'Crônica de Nabonido e Cilindro de Ciro no Museu Britânico'
      }
    ]
  },
  {
    id: 'post-exile',
    name: 'Retorno Pós-Exílico e Reconstrução',
    era: 'c. 538 - 400 a.C.',
    startDay: 276,
    endDay: 295,
    description: 'O decreto de Ciro, retorno dos remanescentes sob Zorobabel, reconstrução do templo com Ageu e Zacarias, reformas de Esdras, Neemias e Ester.',
    color: '#0891B2', // cyan-600
    dominantPowers: ['Império Aquemênida (Persa)', 'Grécia Clássica (Guerras Médicas - Atenas e Esparta)'],
    worldContextSummary: 'A administração persa sob Ciro, Dario I e Artaxerxes substitui a deportação forçada por um modelo de autonomia cultural e religiosa nas satrapias em troca de impostos e lealdade. Ao mesmo tempo, no Ocidente, a Grécia vive o século de Péricles e trava as Guerras Greco-Pérsicas.',
    biblicalTrackSummary: 'Esdras 1-10, Ageu, Zacarias, Ester, Neemias e Malaquias: A reconstrução do Segundo Templo, as muralhas de Jerusalém e o fechamento do cânon hebraico do Antigo Testamento.',
    empiresTrackSummary: 'Império Aquemênida Persa (Susa, Persépolis); Guerras Médicas (Termópilas e Maratona); Século de Ouro de Péricles em Atenas e Guerra do Peloponeso.',
    literatureTrackSummary: 'Obras de Heródoto ("O Pai da História"), Tucídides, Diálogos de Platão, Filosofia de Sócrates em Atenas e tragédias de Sófocles e Ésquilo.',
    contemporaryLiterature: [
      {
        title: 'Histórias de Heródoto',
        authorOrOrigin: 'Halicarnasso / Atenas, Grécia',
        approxDate: 'c. 440 a.C.',
        summary: 'Investigação historiográfica das guerras entre gregos e persas, costumes dos povos persas, egípcios e babilônicos.',
        biblicalParallel: 'Oferece o panorama documental exato do reinado de Assuero (Xerxes I) e Artaxerxes I, corroborando os relatos de Ester e Neemias em Susã.'
      },
      {
        title: 'Apologia de Sócrates e Diálogos Platônicos',
        authorOrOrigin: 'Atenas, Grécia Clássica',
        approxDate: 'c. 400 - 380 a.C.',
        summary: 'Diálogos filosóficos sobre a virtude, o exame da alma e o julgamento moral humano perante a verdade.',
        biblicalParallel: 'Enquanto Malaquias profetizava em Judá sobre o Sol da Justiça com cura em Suas asas, a razão humana em Atenas atingia o ápice da reflexão moral filosófica, ansiando por verdade absoluta.'
      }
    ],
    keySecularEvents: [
      {
        date: '538 a.C.',
        empire: 'Império Aquemênida (Ciro II, o Grande)',
        event: 'Edito Real autoriza povos deportados a voltarem às suas pátrias ancestrais com suas imagens sagradas e utensílios sagrados para reconstruir seus santuários.',
        archaeologyRef: 'Cilindro de Ciro (declarado "a primeira carta de direitos humanos da Antiguidade", no Museu Britânico)'
      },
      {
        date: '486 - 465 a.C.',
        empire: 'Império Aquemênida (Xerxes I / Rei Assuero de Ester)',
        event: 'Xerxes comanda a gigantesca expedição contra a Grécia (Termópilas, Salamina e Plateia) enquanto em Susã desenrola-se o drama do livro bíblico de Ester.',
        archaeologyRef: 'Palácio de Inverno de Susã e inscrições reais de Persépolis'
      },
      {
        date: '445 a.C.',
        empire: 'Império Aquemênida (Artaxerxes I)',
        event: 'Neemias, copeiro do rei em Susã, recebe cartas imperiais oficiais com salvo-conduto e madeira das florestas reais para reconstruir as muralhas de Jerusalém em 52 dias.',
        archaeologyRef: 'Papiros Elefantinos no Egito e Textos de Pasárgada'
      }
    ]
  },
  {
    id: 'intertestamental',
    name: 'A Ponte do Segundo Templo (Período Intertestamentário)',
    era: 'c. 430 - 6 a.C.',
    startDay: 295,
    endDay: 296,
    isIntertestamental: true,
    description: 'Os 400 anos de "silêncio profético" canônico que transformaram o mundo: ascensão de Alexandre, o Grande, helenização forçada, a heroica revolta dos Macabeus, a Septuaginta (LXX), as seitas judaicas (fariseus e saduceus) e a Pax Romana preparando a vinda do Messias.',
    color: '#B45309', // amber-700
    dominantPowers: ['Império Persa Tardio', 'Império Grego-Macedônico (Alexandre, o Grande)', 'Reinos Helenísticos (Ptolomeus e Selêucidas)', 'Dinastia Hasmoneia', 'República e Império Romano'],
    worldContextSummary: 'Nenhum profeta com autoridade canônica escreveu textos inspirados em Israel durante este período, mas a providência de Deus moveu todas as peças da geopolítica: a língua grega tornou-se universal com a Septuaginta, a sinagoga tornou-se o centro comunitário de estudo das Escrituras e Roma pavimentou as estradas e impôs a ordem para que o Evangelho pudesse correr velozmente.',
    biblicalTrackSummary: 'Cumprimento das visões apocalípticas de Daniel (a estátua de Dn 2 e os quatro animais de Dn 7 e 8: Pérsia, Grécia, Reinos Divididos e Roma); expectativa fervorosa pelo Messias e o precursor João Batista.',
    empiresTrackSummary: 'Conquistas fulminantes de Alexandre, o Grande (334-323 a.C.); divisão entre Diádocos; tirania de Antíoco IV Epifânio; conquista da Judeia pelo general romano Pompeu em 63 a.C.',
    literatureTrackSummary: 'Tradução da Septuaginta (LXX em Alexandria, c. 250 a.C.), 1 e 2 Macabeus, Manuscritos do Mar Morto (Qumran), Obras de Cícero e Virgílio em Roma.',
    subPhases: [
      {
        id: 'persian-late',
        title: '1. Domínio Persa Tardio & Encerramento do AT',
        period: 'c. 430 - 332 a.C.',
        rulingPower: 'Império Aquemênida Tardio (Dario II, Artaxerxes II e III)',
        description: 'Período de relativa paz no qual os sacerdotes governam a província de Yehud sob tutela imperial. A Grande Sinagoga e escribas organizam e copiam os rolos canônicos das Escrituras hebraicas.',
        theologicalImpact: 'Consolidação das sinagogas como centros locais de oração e estudo da Torá tanto na Judeia quanto nas comunidades da Diáspora judaica.',
        keyFiguresOrEvents: ['Esdras e a tradição dos Homens da Grande Assembleia', 'Término da linhagem profética com Malaquias', 'Declínio da monarquia persa']
      },
      {
        id: 'hellenistic-seleucid',
        title: '2. Período Helenístico & Crise Selêucida',
        period: 'c. 332 - 167 a.C.',
        rulingPower: 'Império Macedônico de Alexandre e Reino Selêucida',
        description: 'Alexandre conquista a Pérsia e poupa Jerusalém em 332 a.C. Após sua morte, a Judeia é disputada entre Ptolomeus (Egito) e Selêucidas (Síria). Em 175 a.C., Antíoco IV Epifânio assume o trono selêucida, proíbe a circuncisão e sacrifica uma porca sobre o altar de Deus no Templo ("a abominação desoladora").',
        theologicalImpact: 'Tradução da Bíblia Hebraica para o grego em Alexandria (a Septuaginta - LXX), fornecendo o texto bíblico citado na maioria das vezes pelos apóstolos e evangelistas no NT.',
        keyFiguresOrEvents: ['Alexandre, o Grande', 'Ptolomeu II Filadelfo e a Septuaginta', 'Antíoco IV Epifânio e a profanação do Templo']
      },
      {
        id: 'maccabean-hasmonean',
        title: '3. A Revolta dos Macabeus & Dinastia Hasmoneia',
        period: 'c. 167 - 63 a.C.',
        rulingPower: 'Reino Independente Hasmoneu da Judeia',
        description: 'O sacerdote idoso Matatias e seus cinco filhos (destaque para Judas Macabeu, "O Martelo") iniciam uma guerra de guerrilha contra os exércitos selêucidas. Em 164 a.C., purificam o Templo (origem da festa de Hanukkah, celebrada por Jesus em João 10:22). Israel goza de 100 anos de independência nacional.',
        theologicalImpact: 'Desenvolvimento do fervor messiânico nacionalista e gradual secularização e corrupção da dinastia sacerdotal hasmoneia, que passa a acumular indevidamente a coroa real e a tiara do sumo sacerdócio.',
        keyFiguresOrEvents: ['Matatias e Judas Macabeu', 'Instituição do Hanukkah (Festa da Dedicação)', 'João Hircano e conquista da Idumeia']
      },
      {
        id: 'roman-conquest-herod',
        title: '4. Conquista Romana & Ascensão de Herodes, o Grande',
        period: 'c. 63 - 6 a.C.',
        rulingPower: 'República e Império Romano / Reino Cliente Herodiano',
        description: 'A guerra civil entre os irmãos hasmoneus Hircano II e Aristóbulo II leva o general romano Pompeu a invadir Jerusalém em 63 a.C., entrando a cavalo no Santo dos Santos. Em 37 a.C., Roma nomeia Herodes, o Grande (um idumeu convertido) como "Rei dos Judeus". Herodes reconstrói o Segundo Templo em escala colossal de mármore branco e ouro.',
        theologicalImpact: 'Criação da estrutura de dominação romana e clientelista idumeia contra a qual todo o ministério terreno de Jesus e dos apóstolos foi encenado.',
        keyFiguresOrEvents: ['Pompeu Magno invade o Templo', 'Júlio César e César Augusto consolidam a Pax Romana', 'Herodes reconstrói o Templo de Jerusalém']
      },
      {
        id: 'jewish-sects-development',
        title: '5. As Facções Religiosas & O Solo do Novo Testamento',
        period: 'Séculos II a.C. ao Século I d.C.',
        rulingPower: 'Sociedade Judaica sob ocupação romana',
        description: 'A reação cultural à helenização gera as grandes seitas judaicas: os Fariseus ("separados", zelo pela tradição oral dos anciãos), os Saduceus (aristocracia sacerdotal ligada ao Templo e simpatizante de Roma, rejeitam a ressurreição), os Essênios (monges ascéticos do deserto em Qumran que esconderam os Manuscritos do Mar Morto) e os Zelotes (guerrilheiros armados buscando a libertação de Roma pela espada).',
        theologicalImpact: 'Configuração do Sinédrio, dos tribunais locais e do mosaico espiritual exato com o qual Jesus dialoga, confronta e redime nos quatro Evangelhos.',
        keyFiguresOrEvents: ['Fariseus e os mestres Hillel e Shammai', 'Saduceus e o controle do Sinédrio', 'Comunidade Essênia de Qumran', 'Zelotes e insurgentes messiânicos']
      }
    ],
    contemporaryLiterature: [
      {
        title: 'A Septuaginta Grega (LXX)',
        authorOrOrigin: 'Alexandria, Egito Ptolomaico',
        approxDate: 'c. 250 - 150 a.C.',
        summary: 'Tradução do cânon do Antigo Testamento do hebraico e aramaico para a koiné grega universal.',
        biblicalParallel: 'Tornou as promessas messiânicas acessíveis a gentios em todo o Império Romano e serviu como a Bíblia padrão adotada pela Igreja Apostólica nos escritos do Novo Testamento.'
      },
      {
        title: 'Manuscritos do Mar Morto (Documentos da Seita de Qumran)',
        authorOrOrigin: 'Cavernas de Qumran / Essênios',
        approxDate: 'c. 150 a.C. - 68 d.C.',
        summary: 'Cópias milenares de livros bíblicos (Isaías, Salmos, Deuteronômio) e comentários teológicos (Peshers) sobre o fim dos tempos.',
        biblicalParallel: 'Evidenciam a preservação milagrosa das Escrituras hebraicas e o anseio messiânico ardente que ardia na Judeia nos dias que antecederam o nascimento de Jesus.'
      }
    ],
    keySecularEvents: [
      {
        date: '332 a.C.',
        empire: 'Império Macedônico (Alexandre, o Grande)',
        event: 'Alexandre marcha pelo corredor costeiro da Palestina após conquistar Tiro e Gaza, poupando Jerusalém e integrando a Judeia ao império helênico.',
        archaeologyRef: 'Relato historiográfico de Flávio Josefo (Antiguidades Judaicas XI.8) e moedas gregas cunhadas no Levante'
      },
      {
        date: '167 a.C.',
        empire: 'Império Selêucida (Antíoco IV Epifânio)',
        event: 'Profanação do Templo com sacrifício de porco e consagração a Zeus Olímpico; início da Revolta dos Macabeus sob Matatias e Judas.',
        archaeologyRef: '1 Macabeus 1-4 e escavações da fortaleza de Acra em Jerusalém'
      },
      {
        date: '63 a.C.',
        empire: 'República Romana (General Pompeu Magno)',
        event: 'Pompeu cerca o Monte do Templo, quebra a soberania judaica e transforma a Judeia em território tributário sob autoridade de Roma.',
        archaeologyRef: 'Flávio Josefo (Guerra dos Judeus I.7) e moedas romanas da vitória sobre a Judeia'
      }
    ]
  },
  {
    id: 'gospels',
    name: 'Evangelhos e Vida de Cristo em Harmonia',
    era: 'c. 4 a.C. - 33 d.C.',
    startDay: 296,
    endDay: 335,
    description: 'O cumprimento das profecias: encarnação, milagres, ensinamentos do Reino, morte vicária e a gloriosa ressurreição do Cordeiro de Deus.',
    color: '#EA580C', // orange-600
    dominantPowers: ['Império Romano (Pax Romana - Dinastia Júlio-Claudiana)', 'Dinastia Herodiana', 'Império Parta'],
    worldContextSummary: 'Sob o primeiro imperador César Augusto e seu sucessor Tibério, Roma impõe a Pax Romana com vasta rede de estradas pavimentadas (Via Maris, Via Ápia), erradicação da pirataria e a língua grega koiné como língua franca universal, preparando a "plenitude dos tempos" (Gálatas 4:4).',
    biblicalTrackSummary: 'Mateus, Marcos, Lucas e João harmonizados cronologicamente: Do nascimento em Belém ao ministério galileu, conflitos com o Sinédrio, a Última Ceia, a Cruz e a Ressurreição triunfal.',
    empiresTrackSummary: 'César Augusto (27 a.C. - 14 d.C.) e Tibério César (14 - 37 d.C.); Prefeitura Romana de Pôncio Pilatos na Judeia (26 - 36 d.C.); Tetrarquias de Herodes Ântipas e Filipe.',
    literatureTrackSummary: 'Eneida de Virgílio (epopeia patriótica imperial romana), Odes de Horácio, Histórias de Tito Lívio, Filosofia Estóica de Sêneca o Jovem.',
    contemporaryLiterature: [
      {
        title: 'Eneida de Virgílio',
        authorOrOrigin: 'Roma / Século de Augusto',
        approxDate: 'c. 19 a.C.',
        summary: 'A epopeia romana glorificando a fundação mítica de Roma por Eneias e a era de ouro profetizada sob César Augusto.',
        biblicalParallel: 'Enquanto Roma exaltava seu imperador como "filho dos deuses" e salvador secular do mundo, o anjo em Belém proclamava aos pastores pobres a chegada do verdadeiro Salvador e Senhor, Cristo o Rei.'
      },
      {
        title: 'Inscrição de Pôncio Pilatos em Cesareia',
        authorOrOrigin: 'Cesareia Marítima / Prefeitura da Judeia',
        approxDate: 'c. 26 - 36 d.C.',
        summary: 'Placa memorial de calcário gravada pelo prefeito romano da Judeia dedicando o Tibérieum.',
        biblicalParallel: 'Evidência epigráfica direta do governante romano que lavou as mãos e condenou Jesus à crucificação nos quatro Evangelhos.'
      }
    ],
    keySecularEvents: [
      {
        date: 'c. 4 a.C.',
        empire: 'Império Romano (César Augusto)',
        event: 'Decreto de recenseamento imperial em todo o mundo romano conduz José e Maria grávida da Galileia até Belém de Judá.',
        archaeologyRef: 'Moedas de Augusto e Herodes o Grande; Inscrição Res Gestae Divi Augusti'
      },
      {
        date: '26 - 36 d.C.',
        empire: 'Prefeitura Romana da Judeia',
        event: 'Pôncio Pilatos atua como o quinto prefeito da província da Judeia com sede em Cesareia Marítima e guarnição na Fortaleza Antônia em Jerusalém.',
        archaeologyRef: 'Pedra de Pilatos descoberta no teatro de Cesareia Marítima (1961) e Ossuário de Caifás'
      },
      {
        date: 'c. 30 / 33 d.C.',
        empire: 'Império Romano (Tibério César)',
        event: 'Julgamento perante Pilatos e execução pelo método romano de crucificação no monte Gólgota, fora dos muros da cidade.',
        archaeologyRef: 'Ossuário de Yehohanan (única evidência física direta de prego através de calcâneo humano de crucificação romana)'
      }
    ]
  },
  {
    id: 'early-church',
    name: 'A Igreja Primitiva, Cartas Paulinas e Apocalipse',
    era: 'c. 33 - 96 d.C.',
    startDay: 336,
    endDay: 365,
    description: 'O derramar do Pentecostes em Atos, as viagens missionárias de Paulo com suas epístolas inseridas em ordem histórica, epístolas gerais e o triunfo final em Apocalipse.',
    color: '#9333EA', // purple-600
    dominantPowers: ['Império Romano (Cláudio, Nero, Vespasiano, Tito e Domiciano)'],
    worldContextSummary: 'O cristianismo atravessa o Império Romano aproveitando o sistema de cidadania, o direito romano e a infraestrutura viária. Enfrenta crises dramáticas: a expulsão dos judeus de Roma por Cláudio (49 d.C.), a brutal perseguição neroniana pós-incêndio de Roma (64 d.C.), a Primeira Guerra Judaica com o cerco e queima de Jerusalém por Tito (70 d.C.) e o culto imperial forçado sob Domiciano (95 d.C.).',
    biblicalTrackSummary: 'Atos dos Apóstolos, Epístolas Paulinas (Gálatas, Tessalonicenses, Coríntios, Romanos, Prisão, Pastorais), Epístolas Gerais e o Apocalipse de João.',
    empiresTrackSummary: 'Imperadores Cláudio (41-54), Nero (54-68), o Ano dos Quatro Imperadores (69) e a Dinastia Flávia: Vespasiano (69-79), Tito (79-81) e Domiciano (81-96).',
    literatureTrackSummary: 'Obras de Sêneca (Cartas Morais), Histórias e Anais de Tácito, Vidas dos Césares de Suetônio, e os monumentais tratados de Flávio Josefo (Antiguidades e Guerra dos Judeus).',
    contemporaryLiterature: [
      {
        title: 'A Guerra dos Judeus & Antiguidades Judaicas (Flávio Josefo)',
        authorOrOrigin: 'Roma / Flávio Josefo',
        approxDate: 'c. 75 - 94 d.C.',
        summary: 'Crônica minuciosa escrita em Roma por um sacerdote judeu capturado detalhando a história de Israel, o ministério de João Batista, Jesus (Testimonium Flavianum), Tiago e o cerco e queima de Jerusalém em 70 d.C.',
        biblicalParallel: 'Fonte historiográfica contemporânea primordial de validação dos costumes, partidos religiosos e cumprimento exato das palavras de Jesus sobre a ruína do templo.'
      },
      {
        title: 'Cartas a Lucílio (Sêneca, o Jovem)',
        authorOrOrigin: 'Roma Imperial',
        approxDate: 'c. 63 - 65 d.C.',
        summary: 'Epístolas sobre a moral estóica, serenidade perante a morte e controle das paixões, escritas pelo conselheiro de Nero e irmão do procônsul Gálio de Atos 18.',
        biblicalParallel: 'Ilustra a busca existencial da elite romana enquanto Paulo, encarcerado na mesma cidade, escrevia Filipenses ("para mim o viver é Cristo e o morrer é lucro").'
      }
    ],
    keySecularEvents: [
      {
        date: '49 d.C.',
        empire: 'Império Romano (Imperador Cláudio)',
        event: 'Edito de Cláudio expulsa os judeus de Roma devido a tumultos "instigados por Chrestus" (cristãos), levando Áquila e Priscila a Corinto (Atos 18:2).',
        archaeologyRef: 'Registro histórico do historiador romano Suetônio (Vida de Cláudio 25.4)'
      },
      {
        date: '64 d.C.',
        empire: 'Império Romano (Imperador Nero)',
        event: 'Grande Incêndio de Roma: Nero acusa os cristãos como bodes expiatórios; martírio dos apóstolos Pedro (crucificado no Vaticano) e Paulo (decapitado na Via Ostiense).',
        archaeologyRef: 'Tácito, Anais XV.44 (relato pagão contemporâneo das execuções neronianas)'
      },
      {
        date: '70 d.C.',
        empire: 'Império Romano (General Tito / Dinastia Flávia)',
        event: 'Fim da Primeira Guerra Judaica: as legiões de Tito cercam Jerusalém, destroem a cidade e queimam o Segundo Templo, cumprindo a profecia de Jesus em Mateus 24:2.',
        archaeologyRef: 'Arco de Tito no Fórum Romano exibindo o saque da Menorá e a mesa dos pães da proposição'
      },
      {
        date: 'c. 95 d.C.',
        empire: 'Império Romano (Imperador Domiciano)',
        event: 'Exigência rigorosa de adoração ao imperador sob o título "Dominus et Deus" (Senhor e Deus). O apóstolo João é banido para a ilha penal de Patmos, onde recebe o Apocalipse.',
        archaeologyRef: 'Inscrições no Templo dos Sebastoi em Éfeso e moedas com a efígie de Domiciano'
      }
    ]
  }
];

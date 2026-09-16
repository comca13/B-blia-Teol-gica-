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
    color: '#059669', // emerald-600
    dominantPowers: ['Povos do Mar (Filisteus)', 'Cidades Cananeias Feudais', 'Fenícios'],
    worldContextSummary: 'O catastrófico Colapso da Idade do Bronze Recente (c. 1200 a.C.) destrói o Império Hitita e paralisa o Egito. A invasão dos Povos do Mar (Filisteus) introduz a metalurgia avançada do ferro na costa sul de Canaã.',
    keySecularEvents: [
      {
        date: 'c. 1350 a.C.',
        empire: 'Correspondência Diplomática de Amarna',
        event: 'Reis cananeus vassalos escrevem desesperados ao faraó Akhenaton denunciando invasores seminômades chamados "Habiru" conquistando cidades nas colinas.',
        archaeologyRef: 'Cartas de Amarna (Tábuas cuneiformes achadas no Egito)'
      },
      {
        date: 'c. 1175 a.C.',
        empire: 'Povos do Mar / Confederação Filisteia',
        event: 'Os Filisteus instalam a Pentápole (Gaza, Asdode, Ascalão, Gate, Ecrom), mantendo monopólio de fundição de armas de ferro contra os hebreus.',
        archaeologyRef: 'Relevos de Medinet Habu (Vitória de Ramsés III)'
      }
    ]
  },
  {
    id: 'united-kingdom',
    name: 'Reino Unido (Saul, Davi e Salomão)',
    era: 'c. 1050 - 931 a.C.',
    startDay: 106,
    endDay: 165,
    description: 'A transição para a monarquia, ascensão de Davi entrelaçada com seus Salmos nos momentos mais agudos, o templo suntuoso e a sabedoria de Salomão.',
    color: '#7C3AED', // violet-600
    dominantPowers: ['Monarquia de Israel', 'Reino Fenício de Tiro (Rei Hirão)', 'Egito (XXI Dinastia)'],
    worldContextSummary: 'Janela de ouro geopolítica única: as potências imperiais tradicionais (Assíria e Egito) passam por temporária letargia interna. Israel sob Davi e Salomão preenche o vácuo, construindo rotas comerciais intercontinentais que ligavam a Arábia, Fenícia e o Mar Vermelho.',
    keySecularEvents: [
      {
        date: 'c. 1000 - 970 a.C.',
        empire: 'Casa Real de Davi em Jerusalém',
        event: 'Davi conquista a fortaleza jebuseia de Sião e unifica as tribos sob Jerusalém como capital política e cúltica.',
        archaeologyRef: 'Estela de Tel Dan (inscrição "Beit David" / Casa de Davi) e Estrutura de Pedra Escalonada em Jerusalém'
      },
      {
        date: 'c. 960 a.C.',
        empire: 'Reino de Tiro & Israel Salomônico',
        event: 'Tratado internacional comercial com o rei Hirão de Tiro para envio de cedros do Líbano e artesãos bronzeiros para o Templo e palácios de Salomão.',
        archaeologyRef: 'Minas de Cobre de Timna e Portas Salomônicas de Hazor, Megido e Gezer'
      }
    ]
  },
  {
    id: 'divided-kingdom',
    name: 'Reino Dividido e Profetas Pré-Exílicos',
    era: 'c. 931 - 586 a.C.',
    startDay: 166,
    endDay: 245,
    description: 'A cisão entre Israel (Norte) e Judá (Sul), o ministério de Elias e Eliseu, e a voz estrondosa dos profetas (Amós, Oseias, Isaías, Miqueias, Jeremias).',
    color: '#2563EB', // blue-600
    dominantPowers: ['Império Neoassírio', 'Império Neobabilônico', 'Reino de Aram-Damasco', 'Egito (XXII Dinastia Líbia)'],
    worldContextSummary: 'A ascensão da máquina bélica assíria (Tiglate-Pileser III, Salmaneser V, Sargão II e Senaqueribe), caracterizada por empalamento, cerco com aríetes e deportações em massa. Após a queda de Samaria em 722 a.C., Judá sobrevive milagrosamente em 701 a.C. antes de cair para o Império Neobabilônico de Nabucodonosor.',
    keySecularEvents: [
      {
        date: '853 a.C.',
        empire: 'Império Neoassírio vs. Coalizão Levantina',
        event: 'Batalha de Carcar: Acabe, rei de Israel, mobiliza 2.000 carruagens em aliança contra o rei assírio Salmaneser III.',
        archaeologyRef: 'Monólito de Curkhe e Obelisco Negro de Salmaneser III (com o rei Jeú prestando tributo)'
      },
      {
        date: '722 a.C.',
        empire: 'Império Neoassírio (Salmaneser V & Sargão II)',
        event: 'Queda de Samaria após três anos de cerco impiedoso. As dez tribos do Reino do Norte são deportadas para a Mesopotâmia e a Média; colonos estrangeiros são assentados na região.',
        archaeologyRef: 'Prisma de Nimrud e Anais Oficiais de Sargão II em Corsabade'
      },
      {
        date: '701 a.C.',
        empire: 'Império Neoassírio (Senaqueribe)',
        event: 'Invasão de Judá: cerco e massacre de Laquis. Senaqueribe sitia Jerusalém, gabando-se de aprisionar o rei Ezequias "como um pássaro na gaiola", mas seu exército é misteriosamente aniquilado diante dos muros.',
        archaeologyRef: 'Prisma de Taylor (Museu Britânico), Relevos de Laquis no Palácio de Nínive e Inscrição do Túnel de Siloé'
      },
      {
        date: '605 a.C.',
        empire: 'Império Neobabilônico (Nabucodonosor II)',
        event: 'Batalha de Carquêmis: Babilônia desmantela o exército egípcio do Faraó Neco II e assume a suserania incontestada de todo o Levante.',
        archaeologyRef: 'Crônicas Babilônicas (Tabuletas BM 21946)'
      }
    ]
  },
  {
    id: 'exile',
    name: 'O Cativeiro Babilônico',
    era: 'c. 586 - 538 a.C.',
    startDay: 246,
    endDay: 275,
    description: 'A destruição de Jerusalém por Nabucodonosor, o lamento dos cativos à beira dos rios da Babilônia, e as visões proféticas de Ezequiel e Daniel.',
    color: '#4B5563', // gray-600
    dominantPowers: ['Império Neobabilônico (Caldeu)', 'Império Medo', 'Reino da Lídia'],
    worldContextSummary: 'A Babilônia torna-se a capital cultural e religiosa do mundo antigo com seus templos a Marduque, a Via Processional e os Jardins Suspensos. A corte imperial caldeia atrai e assimila nobres estrangeiros (como Daniel, Ananias, Misael e Azarias) na língua e sabedoria acadiana.',
    keySecularEvents: [
      {
        date: '586 a.C.',
        empire: 'Império Neobabilônico',
        event: 'Terceira e definitiva campanha contra Jerusalém: queima do Templo de Salomão, demolição das muralhas e deportação da elite intelectual e sacerdotal de Judá.',
        archaeologyRef: 'Cartas de Laquis (Óstracos descrevendo a queda dos postos de vigia de Judá) e Camada de Cinzas e Pontas de Flechas babilônicas na Cidade de Davi'
      },
      {
        date: '539 a.C.',
        empire: 'Império Aquemênida (Pérsia)',
        event: 'Queda de Babilônia: O general Gobrias e Ciro II (o Grande) desviam as águas do rio Eufrates e entram na Babilônia na noite do banquete de Belsazar sem resistência sangrenta.',
        archaeologyRef: 'Crônica de Nabonido e Cilindro de Ciro'
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
    id: 'gospels',
    name: 'Evangelhos e Vida de Cristo em Harmonia',
    era: 'c. 4 a.C. - 33 d.C.',
    startDay: 296,
    endDay: 335,
    description: 'O cumprimento das profecias: encarnação, milagres, ensinamentos do Reino, morte vicária e a gloriosa ressurreição do Cordeiro de Deus.',
    color: '#EA580C', // orange-600
    dominantPowers: ['Império Romano (Pax Romana - Dinastia Júlio-Claudiana)', 'Dinastia Herodiana', 'Império Parta'],
    worldContextSummary: 'Sob o primeiro imperador César Augusto e seu sucessor Tibério, Roma impõe a Pax Romana com vasta rede de estradas pavimentadas (Via Maris, Via Ápia), erradicação da pirataria e a língua grega koiné como língua franca universal, preparando a "plenitude dos tempos" (Gálatas 4:4).',
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

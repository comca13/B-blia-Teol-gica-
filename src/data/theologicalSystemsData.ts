import { TheologicalCategory, TheologicalDebate, TheologicalSystem } from '../types';

export interface TheologicalCategoryMeta {
  id: TheologicalCategory;
  name: string;
  shortName: string;
  subtitle: string;
  description: string;
}

export const THEOLOGICAL_CATEGORIES_META: Record<TheologicalCategory, TheologicalCategoryMeta> = {
  SOTERIOLOGIA: {
    id: 'SOTERIOLOGIA',
    name: 'Soteriologia & Doutrina da Graça',
    shortName: 'Soteriologia',
    subtitle: 'A Natureza da Salvação, Soberania e Vontade Humana',
    description: 'Debate histórico milenar sobre a Queda, a capacidade da vontade humana caída e como a graça divina soberana atua na justificação e preservação dos redimidos.'
  },
  PACTOS_E_HISTORIA: {
    id: 'PACTOS_E_HISTORIA',
    name: 'Histórico-Redentivo & Pactos',
    shortName: 'Pactos & História',
    subtitle: 'Como Deus Estrutura a História e Suas Alianças',
    description: 'Compreensão de como os pactos bíblicos se articulam: a continuidade entre Israel e a Igreja, as dispensações e a vigência da Lei mosaica sob o Novo Pacto.'
  },
  ESCATOLOGIA: {
    id: 'ESCATOLOGIA',
    name: 'Escatologia & O Milênio',
    shortName: 'Escatologia',
    subtitle: 'O Milênio e a Consumação dos Séculos',
    description: 'Diferentes interpretações proféticas de Apocalipse 20, o Reino de Deus na história terrena, a Grande Tribulação e a ordem dos eventos da Segunda Vinda de Cristo.'
  },
  CRISTOLOGIA_PATRISTICA: {
    id: 'CRISTOLOGIA_PATRISTICA',
    name: 'Cristologia Patrística',
    shortName: 'Cristologia',
    subtitle: 'A Pessoa e as Naturezas Divina e Humana de Cristo',
    description: 'Os grandes debates conciliares dos primeiros séculos que definiram a ortodoxia cristã: a consubstancialidade com o Pai e a união hipostática sem confusão nem divisão.'
  },
  TEOLOGIA_MODERNA: {
    id: 'TEOLOGIA_MODERNA',
    name: 'Teologia Moderna & Contemporânea',
    shortName: 'Teologia Moderna',
    subtitle: 'A Autoridade das Escrituras e a Reação à Modernidade',
    description: 'As respostas da fé cristã ao Iluminismo racionalista e às crises do século XX: Liberalismo, Neo-Ortodoxia Dialética e Fundamentalismo Evangélico.'
  }
};

export const THEOLOGICAL_DEBATES: TheologicalDebate[] = [
  // 1. EIXO SOTERIOLÓGICO
  {
    id: 'debate-soteriologia',
    category: 'SOTERIOLOGIA',
    title: 'A Natureza da Salvação, Depravação e Graça Soberana',
    description: 'Como Deus salva o pecador? A salvação é uma obra exclusivamente monergista da graça soberana de Deus ou requer uma cooperação sinergista da livre vontade humana? Analise as 7 correntes históricas mais influentes.',
    systems: [
      {
        id: 'pelagianismo',
        name: 'Pelagianismo',
        proponents: ['Pelágio (c. 354–418 d.C.)', 'Celéstio', 'Juliano de Eclano'],
        coreBeliefs: [
          'Negação do pecado original: o erro de Adão foi apenas um mau exemplo exterior, sem transmissão de corrupção ou culpa inata.',
          'O ser humano nasce moralmente neutro, dotado de livre-arbítrio pleno e intacto com a capacidade natural de não pecar (posse non peccare).',
          'A salvação pode ser alcançada pelo esforço moral e obediência estrita aos mandamentos da Lei divina.',
          'A graça divina é primordialmente externa: manifesta na Lei, na razão, nos ensinamentos morais e no exemplo sacrificial de Cristo.'
        ],
        historicalContext: 'Surgiu no início do século V em Roma e Cartago. Pelágio temia que a ênfase na fraqueza humana promovesse relaxamento moral. Foi condenado formalmente como heresia no Concílio de Cartago (418 d.C.) e no Concílio Ecumênico de Éfeso (431 d.C.).'
      },
      {
        id: 'agostinianismo',
        name: 'Agostinianismo',
        proponents: ['Santo Agostinho de Hipona (354–430 d.C.)', 'Fulgentius de Ruspe', 'Prosper da Aquitânia'],
        coreBeliefs: [
          'Depravação herdada e total da vontade humana decorrente da Queda: a humanidade é uma massa corrupta (massa damnata), incapaz de não pecar (non posse non peccare).',
          'Necessidade absoluta, interior e precedente da graça divina soberana para qualquer impulso de fé e conversão a Deus.',
          'Eleição incondicional: Deus escolhe eternamente quem salvar por puro beneplácito gracioso e misericórdia soberana, não por méritos previstos.',
          'Graça eficaz e perseverança final concedidas irresistivelmente aos eleitos (monergismo divino total).'
        ],
        historicalContext: 'Formulado sistematicamente nos tratados anti-pelagianos de Agostinho entre 412 e 430 d.C. Moldou profundamente a teologia latina ocidental e tornou-se o berço doutrinário dos reformadores do século XVI.'
      },
      {
        id: 'semi-pelagianismo',
        name: 'Semi-Pelagianismo',
        proponents: ['João Cassiano (c. 360–435 d.C.)', 'Vicente de Lérins', 'Fausto de Riez'],
        coreBeliefs: [
          'Tentativa de via média entre Pelágio e Agostinho: a humanidade após a Queda está gravemente doente espiritualmente, mas não espiritualmente morta.',
          'O homem pode tomar a iniciativa autônoma do primeiro passo da fé (initium fidei) exercendo seu livre-arbítrio enfraquecido.',
          'A graça divina intervém subsequentemente para cooperar, fortificar e levar a bom termo a salvação do indivíduo (sinergismo cooperativo).',
          'Rejeição da predestinação absoluta incondicional, preservando o desejo universal sincero de Deus de salvar todos os homens.'
        ],
        historicalContext: 'Desenvolvido nos mosteiros do sul da Gália (Marselha) no século V como salvaguarda da ascese e da responsabilidade moral. Foi refutado e rejeitado formalmente no II Concílio de Orange (529 d.C.).'
      },
      {
        id: 'calvinismo',
        name: 'Calvinismo (Tradição Reformada)',
        proponents: ['João Calvino', 'Teodoro de Beza', 'John Knox', 'Teólogos de Dort (1618–1619)'],
        coreBeliefs: [
          'Depravação Total: a corrupção do pecado atinge cada aspecto do ser humano (mente, afeições e vontade), tornando-o morto em delitos e cego a Deus.',
          'Eleição Incondicional: Deus escolheu salvar um povo específico antes da fundação do cosmos, baseado unicamente em Sua vontade graciosa soberana.',
          'Expiação Definida (Particular): a morte de Cristo na cruz adquiriu eficaz e infalivelmente a reconciliação real dos eleitos.',
          'Graça Irresistível (Vocação Eficaz) e Perseverança dos Santos: o Espírito recria o coração do eleito, preservando-o invencivelmente até a glória eterna.'
        ],
        historicalContext: 'Sistematizado a partir das Institutas da Religião Cristã de Calvino (1559) e consolidado nos Cânones do Sínodo Internacional de Dort (1618–1619) em resposta aos cinco artigos dos Remonstrantes holandeses (acróstico TULIP).'
      },
      {
        id: 'arminianismo',
        name: 'Arminianismo (Remonstrante / Wesleyano)',
        proponents: ['Jacobus Arminius (1560–1609)', 'Simon Episcopius', 'John Wesley (1703–1791)'],
        coreBeliefs: [
          'Depravação humana real superada universalmente pela Graça Preveniente, que liberta parcialmente a vontade de todos para crerem ou rejeitarem o Evangelho.',
          'Eleição Condicional: Deus elegeu para a salvação eterna aqueles que Ele prescientemente sabia que responderiam em fé salvífica e perseverante em Cristo.',
          'Expiação Ilimitada: Cristo morreu sacrificialmente por toda a raça humana sem exceção, mas os benefícios salvíficos só se tornam efetivos àqueles que creem.',
          'A graça santificadora é resistível pela dureza do coração humano; a preservação depende da fé contínua e perseverante em comunhão viva com Cristo.'
        ],
        historicalContext: 'Iniciado por teólogos holandeses na Remonstrância de 1610 e posteriormente revigorado com vigor evangelístico e santidade no Avivamento Metodista por John Wesley no século XVIII.'
      },
      {
        id: 'amiraldismo',
        name: 'Amiraldismo (Calvinismo de 4 Pontos)',
        proponents: ['Moïse Amyraut (1596–1664)', 'John Cameron', 'Academia de Saumur'],
        coreBeliefs: [
          'Hipotetismo Universal: Deus decretou enviar Seu Filho para pagar o resgate de todos os seres humanos se tão somente eles crerem (expiação universal em extensão e desígnio hipotético).',
          'Percebendo que ninguém creria por si mesmo devido à depravação total, Deus estabeleceu um segundo decreto secreto de eleição incondicional para aplicar eficazmente a salvação aos eleitos.',
          'Retenção de 4 dos 5 pontos do calvinismo clássico: Depravação Total, Eleição Incondicional, Graça Eficaz aos eleitos e Perseverança dos Santos.',
          'Diferenciação precisa entre o valor ilimitado e a oferta universal do sacrifício de Cristo e sua aplicação salvífica restrita aos eleitos de Deus.'
        ],
        historicalContext: 'Formulado na prestigiada Academia Reformada de Saumur (França) no século XVII. Moïse Amyraut procurou construir pontes teológicas com o luteranismo e moderar a linguagem escolástica da ortodoxia reformada estrita.'
      },
      {
        id: 'molinismo',
        name: 'Molinismo',
        proponents: ['Luis de Molina (1535–1600)', 'Francisco Suárez', 'William Lane Craig'],
        coreBeliefs: [
          'Conhecimento Médio (Scientia Media): Deus possui um conhecimento infalível pré-volitivo não apenas de tudo que poderia acontecer e do que de fato acontecerá, mas do que qualquer criatura livre escolheria em qualquer conjuntura contrafactual imaginável.',
          'Harmonização precisa da Soberania Divina Absoluta com o Livre-Arbítrio Libertário genuíno das criaturas morais.',
          'Deus escolheu soberanamente atualizar exatamente este mundo em que as decisões livres das criaturas realizam infalivelmente Seu plano providencial eterno.',
          'A graça soberana persuade sem coerção causal: o indivíduo é genuinamente livre para aceitar ou recusar a graça sob circunstâncias que Deus conhecia de antemão.'
        ],
        historicalContext: 'Desenvolvido pelo teólogo jesuíta espanhol Luis de Molina na obra "Concordia liberi arbitrii cum gratiae donis" (1588). Tornou-se um dos modelos filosófico-teológicos mais discutidos na apologética cristã contemporânea.'
      }
    ]
  },

  // 2. EIXO HISTÓRICO-REDENTIVO (PACTOS E DISPENSAÇÕES)
  {
    id: 'debate-pactos-historia',
    category: 'PACTOS_E_HISTORIA',
    title: 'A Estrutura dos Pactos, Dispensações e a Continuidade Bíblica',
    description: 'Como a Bíblia se articula historicamente? Há continuidade orgânica entre Israel e a Igreja sob um único Pacto da Graça, ou a história sagrada opera por dispensações distintas com descontinuidade teológica?',
    systems: [
      {
        id: 'teologia-do-pacto',
        name: 'Teologia do Pacto (Covenant Theology)',
        proponents: ['Johannes Cocceius', 'Herman Witsius', 'Teólogos de Westminster (1646)', 'Charles Hodge'],
        coreBeliefs: [
          'A revelação divina é unificada por três grandes pactos teológicos: Pacto da Redenção (eterno na Trindade), Pacto das Obras (com Adão no Éden) e Pacto da Graça (em Cristo após a Queda).',
          'Forte continuidade orgânica entre o Antigo e o Novo Testamento: a Igreja é o Israel espiritual continuado; há apenas um único povo de Deus através de todas as dispensações.',
          'Continuidade dos sinais pactual-federais: os filhos dos crentes pertencem à comunidade da aliança (circuncisão no AT correspondendo tipologicamente ao batismo infantil no NT).',
          'A Lei Moral (os Dez Mandamentos) permanece plenamente vigente como regra imutável de vida e santificação para o crente redimido (terceiro uso da Lei).'
        ],
        historicalContext: 'Desenvolvida nos séculos XVI e XVII na Suíça, Alemanha, Holanda e Ilhas Britânicas, encontrando sua formulação confessional canônica na Confissão de Fé de Westminster (1646).'
      },
      {
        id: 'dispensacionalismo',
        name: 'Dispensacionalismo',
        proponents: ['John Nelson Darby (1800–1882)', 'C. I. Scofield', 'Lewis Sperry Chafer', 'Charles Ryrie'],
        coreBeliefs: [
          'A história bíblica é governada por 7 dispensações administrativas distintas (Inocência, Consciência, Governo Humano, Promessa, Lei, Graça e Reino Milenar).',
          'Distinção radical, categórica e permanente entre Israel (povo terreno com promessas literais nacionais e territoriais) e a Igreja (povo celestial e corpo espiritual de Cristo).',
          'Aplicação de uma hermenêutica estritamente literal consistente a todas as profecias e alianças do Antigo Testamento, sem espiritualização pela Igreja.',
          'A era da Igreja é vista como um mistério ou "parêntese" profético inserido entre a 69ª e a 70ª semana de Daniel.'
        ],
        historicalContext: 'Originado na Grã-Bretanha no século XIX com John Nelson Darby e os Irmãos de Plymouth, alcançando influência massiva mundial após a publicação da Bíblia de Referência Scofield em 1909.'
      },
      {
        id: 'nova-teologia-da-alianca',
        name: 'Nova Teologia da Aliança (New Covenant Theology - NCT)',
        proponents: ['Douglas Moo', 'Thomas Schreiner', 'John Reisinger', 'D. A. Carson'],
        coreBeliefs: [
          'Rejeita tanto o Dispensacionalismo clássico (afirma um só povo de Deus em Cristo) quanto a Teologia do Pacto tradicional com seus pactos hipotéticos não explícitos no texto bíblico.',
          'O Antigo Pacto mosaico (incluindo as tábuas de pedra do Sinai) foi plenamente consumado e revogado como aliança na cruz do Calvário (Hb 8:13).',
          'A regra soberana de vida do crente redimido é a "Lei de Cristo" (os mandamentos e ensinamentos de Jesus e Seus apóstolos no NT), e não o código civil ou sabático do Decálogo mosaico.',
          'Batismo exclusivo para crentes professos regenerados (credobatismo), pois a comunidade do Novo Pacto é puramente de nascidos do Espírito (Jr 31:31-34).'
        ],
        historicalContext: 'Emergiu nos círculos batistas reformados no final do século XX com o objetivo de construir uma síntese bíblico-teológica sólida, superando a dicotomia rígida entre pactualistas presbiterianos e dispensacionalistas.'
      }
    ]
  },

  // 3. EIXO ESCATOLÓGICO (O MILÊNIO E ÚLTIMAS COISAS)
  {
    id: 'debate-escatologia',
    category: 'ESCATOLOGIA',
    title: 'O Milênio e a Consumação dos Séculos (Apocalipse 20)',
    description: 'Como interpretar o reinado milenar descrito em Apocalipse 20? O Milênio é uma era espiritual atual, um triunfo progressivo do Evangelho na terra, ou um reinado literal visível de Cristo estabelecido após Seu retorno físico?',
    systems: [
      {
        id: 'amilenismo',
        name: 'Amilenismo',
        proponents: ['Santo Agostinho', 'Martinho Lutero', 'João Calvino', 'Geerhardus Vos', 'Anthony Hoekema'],
        coreBeliefs: [
          'O "Milênio" de Apocalipse 20 não é um período cronológico estrito de mil anos, mas um número simbólico perfeito que representa toda a era da Igreja entre a 1ª e a 2ª vinda de Cristo.',
          'A prisão de Satanás refere-se à sua incapacidade de enganar as nações em massa para impedir a difusão mundial do Evangelho.',
          'O bem (o Reino espiritual de Deus) e o mal (a apostasia e iniquidade) crescem paralelamente na história até a parousia.',
          'A Segunda Vinda de Cristo é um evento simultâneo e definitivo que trará a ressurreição geral (de justos e ímpios), o Juízo Final e o Estado Eterno.'
        ],
        historicalContext: 'A visão hegemônica da Igreja ao longo da maior parte de sua história desde a era patrística tardia com Santo Agostinho (A Cidade de Deus) e reafirmada integralmente pelos reformadores do século XVI.'
      },
      {
        id: 'pos-milenismo',
        name: 'Pós-Milenismo',
        proponents: ['Jonathan Edwards', 'Charles Hodge', 'B. B. Warfield', 'Loraine Boettner', 'Greg Bahnsen'],
        coreBeliefs: [
          'A Grande Comissão será gloriosamente vitoriosa na história terrena através da ação irresistível do Espírito Santo sobre a pregação do Evangelho.',
          'O mundo experimentará uma era de ouro de justiça, paz e cristianização da sociedade e das instituições civis (o Milênio terrena).',
          'Cristo não reina fisicamente sobre um trono em Jerusalém, mas governa soberanamente dos céus por Sua Palavra e Espírito Santo nos corações das nações.',
          'A Segunda Vinda física e visível de Cristo ocorrerá após (post) este período triunfante milenar para o Juízo Final e consagração do novo céu e nova terra.'
        ],
        historicalContext: 'Ganhou enorme força entre os puritanos britânicos nos séculos XVII e XVIII e protagonizou a visão teológica do Primeiro Grande Despertar nos Estados Unidos sob Jonathan Edwards.'
      },
      {
        id: 'pre-milenismo-historico',
        name: 'Pré-Milenismo Histórico (Clássico)',
        proponents: ['Justino Mártir', 'Ireneu de Lyon', 'George Eldon Ladd', 'Wayne Grudem', 'John Piper'],
        coreBeliefs: [
          'A Segunda Vinda de Cristo é um acontecimento pré-milenar: Ele retornará corporalmente antes do estabelecimento de um Reino literal de mil anos sobre a terra.',
          'A Igreja passará pela Grande Tribulação profetizada (pós-tribulacionismo), sendo refinada pela perseguição do Anticristo até ser resgatada na vinda visível de Cristo.',
          'Na vinda de Cristo ocorre a primeira ressurreição (dos justos); Satanás é encarcerado fisicamente e Cristo governa as nações a partir de uma terra renovada.',
          'Ao término dos mil anos, Satanás é temporariamente solto, ocorre a rebelião final esmagada por Deus, a ressurreição dos ímpios e o Juízo do Grande Trono Branco.'
        ],
        historicalContext: 'A corrente escatológica predominante entre os primeiros Pais da Igreja nos séculos II e III d.C. (conhecida como quiliasmo antigo), revigorada no século XX por eruditos bíblicos como George Eldon Ladd.'
      },
      {
        id: 'pre-milenismo-dispensacionalista',
        name: 'Pré-Milenismo Dispensacionalista',
        proponents: ['John Nelson Darby', 'C. I. Scofield', 'Lewis Sperry Chafer', 'Hal Lindsey', 'Tim LaHaye'],
        coreBeliefs: [
          'Arrebatamento Iminente e Secreto: Cristo desce nos ares para arrebatar secretamente a Sua Igreja antes do início da Grande Tribulação de 7 anos (pré-tribulacionismo).',
          'A 70ª semana de Daniel ocorre na terra após o arrebatamento, trazendo pragas apocalípticas severas e a ascensão do Anticristo.',
          'Segunda Vinda Pública e Gloriosa de Cristo ao término dos 7 anos acompanhado da Igreja para destruir as hostes do mal no Armagedom e converter o remanescente de Israel.',
          'Cristo reina pessoalmente em um trono físico em Jerusalém por mil anos literais, com o templo reconstruído e as promessas davídicas nacionais de Israel plenamente consumadas.'
        ],
        historicalContext: 'Formulado no século XIX por Darby e amplamente popularizado nas Américas no século XX através da Bíblia de Scofield, seminários como Dallas Theological Seminary e publicações populares.'
      }
    ]
  },

  // 4. EIXO CRISTOLÓGICO (ERA PATRÍSTICA)
  {
    id: 'debate-cristologia',
    category: 'CRISTOLOGIA_PATRISTICA',
    title: 'A Identidade, Natureza e União Hipostática de Jesus Cristo',
    description: 'Quem é Jesus Cristo? Como harmonizar Sua plena divindade eterna com Sua autêntica e completa humanidade histórica? Conheça as posições debatidas nos Concílios Ecumênicos da Igreja Antiga.',
    systems: [
      {
        id: 'ortodoxia-calcedoniana',
        name: 'Ortodoxia Calcedoniana (451 d.C.)',
        proponents: ['Papa Leão Magno (Tomo de Leão)', 'Atanásio de Alexandria', 'Concílio de Calcedônia (IV Ecumênico)'],
        coreBeliefs: [
          'União Hipostática: Jesus Cristo é perfeito em divindade e perfeito em humanidade, verdadeiramente Deus (vere Deus) e verdadeiramente homem (vere homo).',
          'Duas naturezas completas (divina e humana) unidas inseparavelmente em uma única Pessoa e Subsistência divina (o Filho eterno, segunda pessoa da Trindade).',
          'As naturezas permanecem unidas "sem confusão, sem mudança, sem divisão e sem separação" (inconfuse, immutabiliter, indivise, inseparabiliter).',
          'Comunicação de Propriedades (communicatio idiomatum): as prerrogativas de ambas as naturezas são atribuídas à Pessoa única de Cristo.'
        ],
        historicalContext: 'Formulada no Concílio de Calcedônia (451 d.C.) para pôr fim a décadas de controvérsias amargas. Permanece como a confissão cristológica clássica de católicos, ortodoxos e de todas as confissões protestantes históricas.'
      },
      {
        id: 'arianismo',
        name: 'Arianismo',
        proponents: ['Ário de Alexandria (c. 256–336 d.C.)', 'Eusébio de Nicomédia'],
        coreBeliefs: [
          'Negação da coeternidade e consubstancialidade do Filho: "Houve um tempo em que o Filho não existia" (ēn pote hote ouk ēn).',
          'O Verbo (Logos) é a primeira e mais sublime criatura gerada por Deus a partir do nada (ex ouk ontōn), sendo o agente pelo qual o universo foi criado.',
          'Cristo é de substância semelhante (homoiousios) ao Pai, mas não da mesmíssima substância eterna (homoousios).',
          'Subordinação ontológica estrita de Cristo ao Pai Celestial.'
        ],
        historicalContext: 'Provocou a maior crise teológica do século IV. Convocou o I Concílio Ecumênico de Niceia (325 d.C.), onde foi condenado sob a heróica defesa de Santo Atanásio.'
      },
      {
        id: 'nestorianismo',
        name: 'Nestorianismo',
        proponents: ['Nestório (Patriarca de Constantinopla)', 'Teodoro de Mopsuéstia'],
        coreBeliefs: [
          'Separação extremada das duas naturezas de Cristo, fragmentando-as praticamente em duas pessoas ou sujeitos morais distintos operando em cooperação voluntária.',
          'Rejeição veemente do título Theotokos ("Portadora de Deus / Mãe de Deus") conferido a Maria, propondo em seu lugar Christotokos ("Mãe de Cristo"), pois Deus não pode nascer, sangrar ou morrer.',
          'Relutância em associar as fraquezas humanas e o sofrimento da cruz à natureza divina do Verbo eterno.'
        ],
        historicalContext: 'Condenado formalmente no III Concílio Ecumênico de Éfeso (431 d.C.) sob a liderança combativa de Cirilo de Alexandria. As comunidades nestorianas migraram para o Oriente, fundando a Igreja Assíria do Oriente na Pérsia.'
      },
      {
        id: 'monofisismo',
        name: 'Monofisismo (Eutiquianismo / Miafisismo)',
        proponents: ['Êutiques de Constantinopla (c. 380–456 d.C.)', 'Dióscoro de Alexandria'],
        coreBeliefs: [
          'Na encarnação, as naturezas humana e divina fundiram-se de modo que a humanidade foi absorvida pela divindade infinita "como uma gota de vinho derramada no oceano".',
          'Afirmação de uma única natureza compósita (mono-physis), resultando em um Cristo que não é plenamente consubstancial a nós em Sua humanidade.',
          'Enfraquecimento do papel sacerdotal de Cristo como verdadeiro representante humano na cruz.'
        ],
        historicalContext: 'Surgiu como uma reação extremada ao nestorianismo. Foi condenado categoricamente no Concílio de Calcedônia (451 d.C.), provocando o cisma das Igrejas Ortodoxas Orientais (Copta, Armênia, Etíope e Siríaca).'
      }
    ]
  },

  // 5. EIXO CONTEMPORÂNEO E MODERNO
  {
    id: 'debate-teologia-moderna',
    category: 'TEOLOGIA_MODERNA',
    title: 'A Autoridade das Escrituras e a Fé Cristã na Modernidade',
    description: 'Como a Igreja deve responder aos desafios do Iluminismo, da alta crítica e do colapso cultural ocidental? Analise o embate entre Liberalismo Teológico, Neo-Ortodoxia Barthiana e Fundamentalismo Bíblico.',
    systems: [
      {
        id: 'teologia-liberal',
        name: 'Teologia Liberal Clássica',
        proponents: ['Friedrich Schleiermacher (1768–1834)', 'Albrecht Ritschl', 'Adolf von Harnack'],
        coreBeliefs: [
          'A essência da religião não repousa em dogmas proposicionais divinos inerrantes, mas na experiência interior e sentimento de dependência absoluta de Deus (Gefühl).',
          'Adoção do método histórico-crítico racionalista: milagres bíblicos, ressurreição física e nascimento virginal são reinterpretados como mitos simbólicos da comunidade primitiva.',
          'A Bíblia é compreendida como um registro humano e falível da busca espiritual da humanidade, não como a Palavra de Deus verbalmente inspirada.',
          'Prioridade máxima conferida à ética fraterna universal, aos valores de justiça social e à moralidade compassiva de Jesus (Evangelho Social).'
        ],
        historicalContext: 'Floresceu no século XIX na Alemanha pós-iluminista e dominou as principais academias e denominações históricas da Europa e América do Norte até a Primeira Guerra Mundial.'
      },
      {
        id: 'neo-ortodoxia',
        name: 'Neo-Ortodoxia (Teologia Dialética / da Crise)',
        proponents: ['Karl Barth (1886–1968)', 'Emil Brunner', 'Reinhold Niebuhr'],
        coreBeliefs: [
          'Rejeição contundente do otimismo antropocêntrico liberal e redescoberta da transcendência absoluta e infinita de Deus (Deus Totaliter Aliter — Totalmente Outro).',
          'Jesus Cristo é a única e verdadeira Palavra de Deus; a Bíblia não é a Palavra de Deus em si de forma estática, mas torna-se Palavra viva no momento do encontro existencial do leitor com o Espírito.',
          'Teologia da Graça radicalmente cristocêntrica: todo o conhecimento salvífico de Deus decorre da Sua autorrevelação graciosa na cruz, e jamais da razão humana ou teologia natural.',
          'Reafirmação do pecado humano real e da necessidade desesperada de redenção contra o moralismo humanista burguês.'
        ],
        historicalContext: 'Iniciada com o comentário revolucionário de Karl Barth à Carta aos Romanos (1919) após o desastre da Primeira Guerra Mundial. Forneceu a espinha dorsal teológica da Igreja Confessante alemã contra a ideologia nazista (Declaração de Barmen, 1934).'
      },
      {
        id: 'fundamentalismo',
        name: 'Teologia Fundamentalista Evangélica',
        proponents: ['B. B. Warfield (1851–1921)', 'J. Gresham Machen', 'R. A. Torrey', 'James Orr'],
        coreBeliefs: [
          'Defesa intransigente dos "Cinco Fundamentos": Inerrância e Infalibilidade verbal da Bíblia, Nascimento Virginal, Expiação Substitutiva Literal de Cristo, Ressurreição Corporal Física e Segunda Vinda Visível.',
          'Rejeição completa do evolucionismo biológico, da teologia modernista e do método histórico-crítico racionalista que minava a autoridade bíblica.',
          'Fidelidade irrestrita à verdade proposicional objetiva da revelação divina e aos credos históricos da Reforma.',
          'Separação eclesiástica consciente de instituições, seminários e concílios que transigiram com a teologia liberal modernista.'
        ],
        historicalContext: 'Surgiu nos Estados Unidos entre 1910 e 1915 através dos doze volumes de ensaios "The Fundamentals", culminando na criação de novos seminários (como o Westminster Theological Seminary por Machen em 1929) e no movimento evangélico contemporâneo.'
      }
    ]
  }
];

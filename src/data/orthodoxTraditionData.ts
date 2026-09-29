import { OrthodoxTheologianFigure } from '../types';

export const goldenAgeData: OrthodoxTheologianFigure[] = [
  {
    id: 'gregory-nazianzen',
    name: 'São Gregório de Nazianzo (O Teólogo)',
    period: 'c. 329 – 390 d.C.',
    title: 'Arcebispo de Constantinopla e Doutor da Santíssima Trindade',
    shortDescription: 'Um dos Três Santos Hierarcas, cujos Cinco Discursos Teológicos definiram a ortodoxia trinitária e a plena divindade do Espírito Santo.',
    biography: `Nascido na Capadócia, amigo inseparável de São Basílio Magno desde os anos de estudo acadêmico em Atenas, Gregório foi ordenado sacerdote relutantemente, preferindo a vida contemplativa e monástica no deserto. Em 379, foi chamado à capital imperial, Constantinopla, onde a fé nicena estava quase extinta devido à hegemonia do arianismo. Numa humilde capela particular denominada Anástasis (Ressurreição), proferiu os imortais "Cinco Discursos Teológicos", cuja erudição retórica e profundidade pneumatológica converteram a capital e prepararam o terreno para o Concílio de Constantinopla I (381 d.C.), o qual presidiu temporariamente. Na Tradição Ortodoxa, apenas ele, o Apóstolo João e São Simeão, o Novo Teólogo, receberam formalmente o título canônico de "O Teólogo". Faleceu em retiro monástico em 390.`,
    coreThinking: [
      'A Triunidade Consubstancial (Homoousios): Deus é uma só Essência (Ousia) em três Hipóstases ou Pessoas reais (Pai, Filho e Espírito Santo), sem confusão nem divisão.',
      'A plena divindade do Espírito Santo: O Espírito não é criatura nem energia intermediária, mas Deus verdadeiro procedente eternamente do Pai.',
      'Soteriologia da Encarnação Integral: "O que não é assumido [por Cristo] não é curado; mas o que é unido a Deus é salvo" (Quod non est assumptum non est sanatum).'
    ],
    theologicalEmphasis: [
      'A monarquia do Pai (Monarchia Patros) como a única fonte, princípio e causa sem princípio da Divindade.',
      'Teologia apofática: Deus transcende a capacidade das palavras humanas e só pode ser conhecido intimamente por meio da purificação (Katharsis) e oração interior.',
      'Poesia e liturgia como os mais altos veículos de exposição teológica.'
    ],
    keyContributions: [
      'Redigiu as fórmulas definitivas que estabeleceram o Credo Niceno-Constantinopolitano sobre a processão do Espírito Santo.',
      'Refutou o apolinarianismo (que negava a mente humana racional em Cristo) e o arianismo.',
      'Celebrado na Ortodoxia na festa sinodal dos Três Santos Hierarcas (ao lado de Basílio Magno e João Crisóstomo).'
    ],
    legacy: `Padrão inabalável da teologia trinitária ortodoxa. Seus textos são cantados e recitados nas festas litúrgicas da Epifania e do Pentecostes em todo o Oriente cristão até os dias atuais.`,
    famousQuote: 'Não começo a pensar no Um sem que logo seja cercado pelo esplendor dos Três; nem começo a discernir os Três sem ser imediatamente reconduzido ao Um.',
    keyWorks: ['Cinco Discursos Teológicos (Orationes 27–31)', 'Epístola 101 (A Cledônio)', 'Poemas Teológicos e Autobiográficos']
  },
  {
    id: 'basil-great',
    name: 'São Basílio Magno (de Cesareia)',
    period: 'c. 330 – 379 d.C.',
    title: 'O Organizador do Monaquismo e Pai da Liturgia Bizantina',
    shortDescription: 'Bispo de Cesareia, mestre da caridade social, legislador do monaquismo oriental e defensor do Espírito Santo.',
    biography: `Nascido numa influente família de santos na Capadócia (irmão de São Gregório de Nissa e Santa Macrina), Basílio formou-se nos maiores centros intelectuais da antiguidade. Após distribuir seus bens aos pobres, viveu como eremita no Ponto e redigiu as regras monásticas que até hoje orientam todos os mosteiros ortodoxos (como os do Monte Athos). Eleito bispo de Cesareia da Capadócia em 370, confrontou destemidamente o imperador ariano Valente, recusando-se a negociar a fé nicena. Fundou a célebre "Basilíade", um complexo gigantesco pioneiro que incluía hospital, leprosário, albergue para viajantes e oficinas para desempregados. Redigiu a célebre Divina Liturgia de São Basílio, celebrada nos domingos da Grande Quaresma ortodoxa. Faleceu em 379, antes de ver o triunfo niceno em Constantinopla.`,
    coreThinking: [
      'Distinção terminológica exata entre Ousia (a natureza divina compartilhada) e Hypostasis (a subsistência particular de cada Pessoa divina).',
      'Harmonia e igualdade da adoração: Glória ao Pai com o Filho e juntamente com o Espírito Santo (Doxologia Trinitária).',
      'A ascese e a oração contemplativa como antídotos necessários contra as ilusões do mundo secular.'
    ],
    theologicalEmphasis: [
      'O Tratado "Sobre o Espírito Santo", demonstrando a igualdade de honra (Homotimia) da Terceira Pessoa da Trindade contra os pneumatômacos.',
      'Responsabilidade social como dever dogmático: o pão que sobra pertence ao faminto; a túnica guardada pertence ao desprovido.',
      'Estudo crítico e maduro dos clássicos gregos pelos jovens cristãos ("Aos Jovens").'
    ],
    keyContributions: [
      'Estruturou as Regras Monásticas (Maior e Menor) da Igreja Ortodoxa.',
      'Criou a Divina Liturgia de São Basílio Magno.',
      'Pioneirismo na medicina social e caridade institucionalizada com a Basilíade.'
    ],
    legacy: `Reverenciado como uma das maiores colunas episcopais da cristandade oriental, unindo a autoridade pastoral à mais profunda vida contemplativa e assistência aos necessitados.`,
    famousQuote: 'O pão que guardas em tua despensa pertence ao faminto; o manto que penduras em teu armário pertence ao nu; o calçado que apodrece em tua casa pertence ao descalço.',
    keyWorks: ['Tratado Sobre o Espírito Santo', 'Hexaêmero (Nove Homilias sobre a Criação)', 'Regras Monásticas', 'Aos Jovens']
  },
  {
    id: 'john-chrysostom',
    name: 'São João Crisóstomo (Boca de Ouro)',
    period: 'c. 349 – 407 d.C.',
    title: 'O Mestre da Pregação Bíblica e Padroeiro dos Pregadores',
    shortDescription: 'Patriarca de Constantinopla famoso pela exegese histórico-gramatical das Escrituras e pelo desassombro profético.',
    biography: `Nascido em Antioquia, foi educado pelo famoso mestre pagão Libânio, que se lamentou de que João fora levado pelos cristãos, pois o desejava como sucessor na retórica. Viveu anos de intensa ascese no deserto até adoecer e retornar a Antioquia, onde foi ordenado sacerdote. Por doze anos pregou sermões arrebatadores, versículo por versículo, explicando as cartas de Paulo e os Evangelhos à luz da prática moral e justiça social, recebendo do povo o título de "Crisóstomo" (Boca de Ouro). Em 397, foi consagrado Patriarca de Constantinopla contra a sua vontade. Na corte imperial, combateu o luxo ostentoso da nobreza, utilizou os orçamentos patriarcais para fundar hospitais e reformou a moral do clero. Enfrentou a hostilidade da Imperatriz Eudóxia e do Patriarca Teófilo de Alexandria, sendo deposto e enviado ao exílio forçado. Morreu esgotado em 407 nas margens do Mar Negro, pronunciando suas palavras finais: "Glória a Deus por tudo!".`,
    coreThinking: [
      'A Bíblia compreendida em seu contexto histórico-gramatical (Escola de Antioquia), focada na aplicação prática imediata e na regeneração moral dos crentes.',
      'A liturgia e a Eucaristia como o mistério sublime onde o céu desce à terra: quem comunga deve reconhecer o Cristo presente no altar e no pobre que esmola à porta da igreja.',
      'Sinfonia e limites do poder: a autoridade imperial terrena está radicalmente submissa à lei divina e ao julgamento de Cristo.'
    ],
    theologicalEmphasis: [
      'A Divina Liturgia de São João Crisóstomo, a forma litúrgica padrão rezada durante quase todo o ano litúrgico ortodoxo.',
      'Sermão Pascal de São João Crisóstomo, lido triunfalmente à meia-noite de cada Páscoa Ortodoxa.',
      'A santificação do lar e da família cristã concebida como uma "pequena igreja" (Ecclesia domestica).'
    ],
    keyContributions: [
      'O mais extenso e reverenciado corpus de comentários bíblicos e homilias de toda a Patrística Oriental.',
      'Fixação do rito da Divina Liturgia que leva o seu nome.',
      'Defesa inquebrantável da dignidade dos pobres contra as arbitrariedades imperiais.'
    ],
    legacy: `O mais popular e amado orador sagrado do Oriente cristão. Sua homilia pascal permanece como o hino supremo da vitória de Cristo sobre o inferno em toda a teologia ortodoxa.`,
    famousQuote: 'Onde está, ó morte, o teu aguilhão? Onde está, ó inferno, a tua vitória? Cristo ressuscitou e tu foste aniquilado! Cristo ressuscitou e os anjos regozijam-se!',
    keyWorks: ['Homilias sobre Mateus e Romanos', 'Tratado Sobre o Sacerdócio', 'Sermão Catequético Pascal', 'Comentários às Epístolas Paulinas']
  }
];

export const byzantineSynthesisData: OrthodoxTheologianFigure[] = [
  {
    id: 'maximus-confessor',
    name: 'São Máximo, o Confessor',
    period: 'c. 580 – 662 d.C.',
    title: 'O Teólogo da Vontade Divino-Humana de Cristo',
    shortDescription: 'Monge e filósofo bizantino que sofreu mutilações pelo dogma das duas vontades e operações em Cristo (Ditelismo).',
    biography: `Nascido em Constantinopla numa família aristocrática, foi primeiro-secretário do imperador Heráclio antes de renunciar à corte para se tornar monge em Crisópolis. Diante da heresia do Monotelismo — promovida pelos imperadores bizantinos e pelo patriarcado imperial para tentar conciliar politicamente com os monofisistas, alegando que Cristo tinha apenas uma vontade divino-humana —, Máximo liderou uma resistência teológica heróica. Conduziu o Concílio de Latrão de 649 em Roma ao lado do Papa São Martinho I. Preso e levado a Constantinopla, foi açoitado, teve a língua arrancada e a mão direita decepada para que não pudesse mais pregar nem escrever a verdade calcedoniana. Foi exilado na Geórgia (Cáucaso), onde morreu como "Confessor da Fé" em 662. O Terceiro Concílio de Constantinopla (680 d.C.) confirmou plenamente as suas teses.`,
    coreThinking: [
      'Ditelismo e Dienergismo: Cristo possui duas vontades naturais (uma divina e uma humana) e duas operações, correspondendo perfeitamente às Suas duas naturezas sem divisão nem confusão.',
      'A vontade humana de Cristo foi perfeitamente submissa e deificada pela Sua vontade divina no Getsêmani, curando a rebelião da vontade humana desde a queda edênica.',
      'Logos e Logoi: Cada criatura possui um "logos" (princípio, propósito e razão de ser) interior incutido pelo Logos divino; toda a criação está destinada a ser reconciliada e transfigurada em Cristo.'
    ],
    theologicalEmphasis: [
      'Teologia Cósmica da Deificação (Theosis): o homem foi criado como microcosmo para mediar e elevar a criação inteira a Deus.',
      'Psicologia espiritual profunda nos "Capítulos sobre a Caridade", curando a alma das paixões e do amor-próprio egotista (Philautia).',
      'A liturgia cósmica descrita na obra "Mistagogia".'
    ],
    keyContributions: [
      'Salvou a integridade da Cristologia de Calcedônia no Oriente, demonstrando que uma natureza sem vontade humana real não é verdadeiramente humana.',
      'Ponte definitiva entre a mística do deserto (Evágrio do Ponto) e a alta metafísica neoplatônica cristã.'
    ],
    legacy: `Uma das inteligências filosóficas mais complexas e admiráveis do cristianismo. Seu martírio físico assegurou que o dogma da plena humanidade e redenção da vontade livre em Cristo fosse preservado para sempre.`,
    famousQuote: 'Deus fez-Se homem para que o homem se tornasse Deus por graça.',
    keyWorks: ['Mistagogia', 'Capítulos sobre a Caridade', 'Quaestiones ad Thalassium', 'Ambigua']
  },
  {
    id: 'john-damascene',
    name: 'São João Damasceno (João de Damasco)',
    period: 'c. 676 – 749 d.C.',
    title: 'O Doutor dos Santos Ícones e Síntese da Fé Ortodoxa',
    shortDescription: 'Monge no mosteiro de Mar Saba e o último grande Padre da Igreja Oriental, defensor teológico dos ícones.',
    biography: `Nascido em Damasco sob o domínio do Califado Omíada, Mansur ibn Sarjun (seu nome de batismo) serviu como alto funcionário de finanças da corte muçulmana, sucedendo a seu pai. Mais tarde, renunciou aos títulos e à corte para se tornar monge no Mosteiro de São Sabas (Mar Saba), perto de Jerusalém. Quando o imperador bizantino Leão III iniciou o Iconoclasmo (destruição violenta de imagens sacras), João Damasceno, protegido sob a jurisdição do Califa e fora do alcance militar de Constantinopla, escreveu três memoráveis tratados apologéticos em defesa dos ícones. Ele articulou que a Encarnação divina redimiu e dignificou a matéria visível, tornando a representação de Cristo e dos santos não idolatria, mas proclamação de fé tangível. Autor de "A Fonte do Conhecimento", a primeira síntese teológica sistemática da Tradição Oriental. Faleceu em Mar Saba em 749.`,
    coreThinking: [
      'Fundamentação Cristológica do Ícone: Antes da Encarnação, Deus era invisível e incorpóreo, logo não podia ser pintado; mas desde que o Logos Se fez carne tangível, rejeitar o Seu ícone é negar a realidade física da Sua Encarnação.',
      'A Matéria Redimida: "Não adoro a matéria, mas o Criador da matéria, que Se fez matéria por minha causa e Se dignou habitar na matéria para operar a minha salvação".',
      'Distinção terminológica canônica: Proskynesis (veneração e honra devida aos ícones que remete ao protótipo) versus Latria (adoração exclusiva reservada unicamente a Deus).'
    ],
    theologicalEmphasis: [
      'Exposição Exata da Fé Ortodoxa: manual clássico que condensa os ensinamentos dos concílios e pais gregos.',
      'Poesia litúrgica e hinódia: compôs os cânones litúrgicos para a Páscoa e o Ofício Fúnebre bizantino.',
      'Apologética contra heresias, incluindo o islamismo primitivo.'
    ],
    keyContributions: [
      'Forneceu a fundamentação teológica que foi acolhida e ratificada pelo Sétimo Concílio Ecumênico (Niceia II, 787 d.C.).',
      'Sistematizou a teologia patrística grega de forma comparável ao que Tomás de Aquino faria séculos mais tarde no Ocidente.',
      'Estabeleceu o Octoechos (o livro litúrgico dos oito tons musicais bizantinos).'
    ],
    legacy: `Reverenciado como o selo conclusivo da Patrística Oriental. Suas orações de preparação e ação de graças após a Santa Comunhão são lidas diariamente pelos cristãos ortodoxos em todo o mundo.`,
    famousQuote: 'A honra prestada à imagem eleva-se ao seu protótipo. Quem venera o ícone venera nele a própria pessoa representada.',
    keyWorks: ['Exposição Exata da Fé Ortodoxa (De Fide Orthodoxa)', 'Três Tratados Apologéticos contra os que Rejeitam as Imagens Sagradas', 'A Fonte do Conhecimento']
  }
];

export const hesychasmData: OrthodoxTheologianFigure[] = [
  {
    id: 'gregory-palamas',
    name: 'São Gregório Palamas',
    period: '1296 – 1359 d.C.',
    title: 'O Doutor da Graça Incriada e Defensor dos Santos Hesicastas',
    shortDescription: 'Arcebispo de Tessalônica que defendeu a Oração de Jesus e o dogma da distinção entre a Essência e as Energias divinas.',
    biography: `Nascido em Constantinopla numa família nobre da corte do imperador Andrônico II Paleólogo, Gregório recebeu a mais refinada formação filosófica em Aristóteles. Aos vinte anos, abandonou a carreira imperial e partiu para a santa montanha do Monte Athos, vivendo sob a obediência de anciãos espirituais e praticando a ascese do Hesicasmo (a oração interior silenciosa contínua unida à respiração através da Oração de Jesus: "Senhor Jesus Cristo, Filho de Deus, tem piedade de mim, pecador"). Por volta de 1335, Barlaão da Calábria, monge e filósofo italo-grego influenciado pelo racionalismo escolástico ocidental, ridicularizou os hesicastas, afirmando que Deus é inteiramente incognoscível e que a luz de Deus vista pelos apóstolos no Monte Tabor fora uma luz física criada transitória. Palamas escreveu a monumental apologia "As Tríades em Defesa dos Santos Hesicastas", demonstrando que os homens podem de fato ter comunhão real e direta com Deus por meio das Suas Energias Incriadas. Aprovado nos Concílios de Constantinopla (1341, 1351), foi consagrado Arcebispo de Tessalônica. Faleceu em 1359.`,
    coreThinking: [
      'Distinção Real entre a Essência (Ousia) e as Energias (Energeiai) Incriadas de Deus: A Essência divina é totalmente inacessível e transcendente para anjos e homens; mas as Suas Energias são incriadas, acessíveis e comunicam a própria vida de Deus ao crente.',
      'A Luz do Tabor: A luz que os apóstolos Pedro, Tiago e João viram na Transfiguração não foi uma luz criada nem alucinação, mas a luz incriada e eterna da glória de Deus, que também envolve os santos no êxtase contemplativo.',
      'Participação Real e Theosis: O objetivo da vida cristã é a Deificação. Se a graça fosse criada (como dizia Barlaão), o homem jamais teria comunhão real com o próprio Deus, mas apenas com um intermediário criado.'
    ],
    theologicalEmphasis: [
      'A oração noética contínua (Hesiquia): união do intelecto (Nous) com o coração espiritual através do nome salvífico de Jesus.',
      'O corpo humano como templo chamado a participar da santificação e da transfiguração da graça divina juntamente com a alma.',
      'Fidelidade irrestrita à experiência viva dos santos Padres e eremitas contra a especulação silogística puramente acadêmica.'
    ],
    keyContributions: [
      'O Palamismo foi elevado a dogma oficial da Igreja Ortodoxa nos Concílios Hesicastas de Constantinopla no século XIV.',
      'Preservou a identidade teológica e mística singular do Oriente em face do influxo da escolástica racionalista latina.',
      'Sua memória é celebrada em toda a Ortodoxia no Segundo Domingo da Grande Quaresma (o Domingo da Luz Divina).'
    ],
    legacy: `O maior bastião da mística oriental pós-cismas. Seu ensinamento fundamenta a antologia espiritual da Filocalia, que moldou a alma do cristianismo russo, grego, sérvio e romeno.`,
    famousQuote: 'Deus é inacessível em Sua Essência, mas plenamente participável em Suas Energias Incriadas.',
    keyWorks: ['Tríades em Defesa dos Santos Hesicastas', 'Os 150 Capítulos', 'Homilias Teológicas e Espirituais']
  },
  {
    id: 'symeon-new-theologian',
    name: 'São Simeão, o Novo Teólogo',
    period: '949 – 1022 d.C.',
    title: 'O Místico da Luz Divina e da Experiência Viva do Espírito',
    shortDescription: 'Abade do mosteiro de São Mamas em Constantinopla, mestre da experiência consciente do Espírito Santo.',
    biography: `Nascido na Galácia na nobreza bizantina, foi preparado para uma alta carreira governamental antes de conhecer seu pai espiritual, Simeão o Piedoso, monge de Estúdio. Simeão ingressou na vida monástica e mais tarde tornou-se abade do Mosteiro de São Mamas em Constantinopla. Enfrentou forte oposição do clero oficial e de teólogos cortesãos (como Estêvão de Nicomédia) por defender corajosamente que a revelação direta e a experiência pessoal da Luz divina não eram privilégios exclusivos dos Apóstolos da era bíblica, mas uma realidade acessível e viva para qualquer crente regenerado e humilde. Foi exilado do mosteiro por um período antes de ser reabilitado. Deixou hinos líricos e místicos inigualáveis dedicados ao Amor Divino.`,
    coreThinking: [
      'A Experiência Consciente da Graça: Ninguém pode pretender ser cristão autêntico sem ter uma experiência real, tangível e consciente da presença luminosa do Espírito Santo em sua vida.',
      'A visão da Luz Incriada como o próprio Cristo Se manifestando à alma purificada de suas paixões.',
      'A teologia não é um exercício de erudição retórica ou silogismos, mas o fruto direto da oração em lágrimas, da pureza do coração e da contemplação mística.'
    ],
    theologicalEmphasis: [
      'A necessidade das lágrimas espirituais (Penthos / luto salutar) para abrir a visão do homem interior.',
      'A comunhão diária com a Santa Eucaristia vivenciada com temor reverente e plena entrega da alma.',
      'O ministério da confissão dos pensamentos ao pai espiritual (Geronda / Starets).'
    ],
    keyContributions: [
      'Revolucionou a hinódia e a teologia espiritual bizantina com seus 58 Hinos dos Amores Divinos.',
      'Um dos três únicos santos na história da Igreja Ortodoxa aos quais a tradição canônica conferiu formalmente o título de "O Teólogo".'
    ],
    legacy: `Profeta do avivamento místico ortodoxo interior. Antecipou em vários séculos as formulações palamitas sobre a oração pura e a Luz incriada.`,
    famousQuote: 'Nós nos tornamos membros de Cristo e Cristo se torna nossos membros... Sou miserável e pobre, mas vejo-me vestido com a luz do Seu amor.',
    keyWorks: ['Hinos dos Amores Divinos', 'Discursos Catequéticos', 'Capítulos Teológicos e Práticos']
  }
];

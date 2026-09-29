import { ChurchHistoryEvent } from '../../types';

export const posReformaEvents: ChurchHistoryEvent[] = [
  {
    id: 'sinodo-de-dort',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'O Sínodo de Dort e os Cânones de Dort',
    year: '1618 – 1619 d.C.',
    location: 'Dordrecht, República das Províncias Unidas (Holanda)',
    keyFigures: ['Johannes Bogerman', 'Simão Episcópio', 'Jacobus Arminius (postumamente)', 'Príncipe Maurício de Nassau'],
    category: 'CONCILIO',
    description: 'Convocado pelos Estados Gerais da Holanda com a presença de dezenas de delegados internacionais da Grã-Bretanha, Suíça e Alemanha, o Sínodo reuniu-se ao longo de 180 sessões para responder aos "Cinco Artigos dos Remonstrantes" (seguidores de Armínio). O Sínodo rejeitou as teses arminianas e formulou cinco capítulos doutrinários rigorosos que consagraram a soteriologia reformada clássica (mais tarde popularizada pelo acróstico mnemônico TULIP).',
    historicalContextDetailed: 'A jovem república holandesa estava à beira de uma guerra civil após conquistar a independência da Espanha católica. O debate teológico sobre a soberania divina e o livre-arbítrio dividia os mercadores liberais (liderados por Van Oldenbarnevelt) e os calvinistas conservadores apoiados pelo exército do estatuder Maurício de Nassau.',
    theologicalDebate: {
      coreControversy: 'A ordem e causa eficiente da salvação: a eleição é soberana e incondicional (monergismo) ou depende da fé humana prevista e da cooperação livre (sinergismo)?',
      hereticalOrChallengingView: 'A Remonstrância Arminiana: Depravação parcial recuperável pela graça preveniente; Eleição condicional baseada na fé prevista; Expiação universal ilimitada; Graça resistível; Possibilidade real de apostasia final dos regenerados.',
      orthodoxFormulation: 'Os Cânones Reformados de Dort (TULIP): 1. Depravação Total; 2. Eleição Incondicional Soberana; 3. Expiação Limitada / Redenção Particular Eficaz; 4. Graça Irresistível (Chamado Eficaz); 5. Perseverança Final e Preservação dos Santos.',
      dogmaticTerms: ['TULIP', 'Monergismo Soteriológico', 'Gratia Irresistibilis', 'Decretum Absolutum', 'Substituição Penal Particular']
    },
    primarySourceQuote: {
      text: 'A causa desta eleição graciosa é o exclusivo e beneplácito querer de Deus... Esta eleição não se baseia em uma fé prevista, nem na obediência da fé, como se fossem condições prévias exigidas no homem, mas os homens são eleitos justamente para que venham a ter fé e santidade.',
      author: 'Assembleia do Sínodo Internacional de Dort',
      work: 'Cânones de Dort (Primeiro Ponto de Doutrina, Artigo 9, 1619)'
    },
    historicalSignificance: 'O mais universal e influente concílio reformado de todos os tempos, consolidando com autoridade confessional internacional as "Três Formas de Unidade" da teologia reformada continental (junto com a Confissão Belga e o Catecismo de Heidelberg).',
    legacyPoints: [
      'Estabeleceu os cinco pontos clássicos do calvinismo que moldaram o pensamento puritano e o presbiterianismo mundial.',
      'Encomendou a célebre "Bíblia dos Estados" (Statenvertaling), uma tradução holandesa de excelência a partir dos textos originais hebraico e grego.',
      'Definiu a polaridade teológica fundamental (Calvinismo vs. Arminianismo) que reverbera em todo o evangelicalismo moderno.'
    ],
    scriptureReferences: ['Ef 1:4-6', 'Rm 9:11-18', 'Jo 10:14-16', 'Jo 6:37-44', 'Rm 8:28-39']
  },
  {
    id: 'confissao-westminster',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'A Assembleia e Confissão de Fé de Westminster',
    year: '1643 – 1648 d.C.',
    location: 'Abadia de Westminster, Londres, Inglaterra',
    keyFigures: ['William Twisse', 'George Gillespie', 'Samuel Rutherford', 'John Lightfoot'],
    category: 'TEOLOGIA',
    description: 'Durante a Guerra Civil Inglesa contra o absolutismo do rei Carlos I, o Parlamento convocou 121 eruditos e teólogos puritanos ingleses e escoceses para reformar a liturgia e doutrina da Igreja da Inglaterra. Reunidos na Capela de Henrique VII e na Câmara de Jerusalém da Abadia de Westminster ao longo de mais de mil sessões, produziram a Confissão de Fé de Westminster, o Catecismo Maior e o Breve Catecismo.',
    historicalContextDetailed: 'O conflito político e religioso entre a monarquia partidária do episcopado arminiano (Arcebispo William Laud) e os parlamentares puritanos presbiterianos culminou na solene Aliança da Liga Solene (Solemn League and Covenant). Os teólogos buscavam unificar a fé cristã na Inglaterra, Escócia e Irlanda sob a autoridade incontestável da Palavra de Deus.',
    theologicalDebate: {
      coreControversy: 'A pureza e rigor da teologia do pacto (Aliança das Obras e Aliança da Graça), a santidade do Dia do Senhor e o governo bíblico presbiteriano da Igreja.',
      hereticalOrChallengingView: 'O erastianismo (subordinação da Igreja à vontade do monarca secular), o ritualismo sacerdotal romanizante e os desvios antinômicos das seitas radicais.',
      orthodoxFormulation: 'A Escolástica Reformada Puritana: a soberania e providência imutáveis de Deus sobre todas as coisas; a teologia pactual bíblica; a doutrina da justificação como imputação forense exclusiva da justiça ativa e passiva de Cristo; o governo espiritual autônomo da Igreja através de presbíteros.',
      dogmaticTerms: ['Foedus Gratiae (Pacto da Graça)', 'Imputatio Iustitiae Christi', 'Dia do Senhor (Sabbatarianismo Cristão)', 'Pacto das Obras (Foedus Operum)']
    },
    primarySourceQuote: {
      text: 'O fim supremo e principal do homem é glorificar a Deus e alegrar-se nEle para todo o sempre... O Senhor Jesus Cristo é o único Cabeça da Igreja; nem pode o Papa de Roma, em qualquer sentido, ser o cabeça dela.',
      author: 'Divinos de Westminster',
      work: 'Breve Catecismo de Westminster (Pergunta 1) e Confissão de Fé (Capítulo XXV.6)'
    },
    historicalSignificance: 'O documento confessional mais sistemático, refinado e amplamente subscrito da teologia reformada e presbiteriana no mundo anglo-saxão e em todos os continentes.',
    legacyPoints: [
      'Tornou-se a base constitucional oficial da Igreja da Escócia e de todas as denominações presbiterianas globais.',
      'Serviu de modelo direto para a Confissão de Fé Batista de 1689 e a Declaração de Savoy (Congregacional) de 1658.',
      'Sua formulação sobre a liberdade de consciência e a soberania da lei divina exerceu enorme influência na gênese do constitucionalismo e dos direitos fundamentais ocidentais.'
    ],
    scriptureReferences: ['1Co 10:31', 'Sl 73:25-26', '2Tm 3:16-17', 'Rm 3:24-26', 'Cl 1:18']
  },
  {
    id: 'pietismo-spener',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'O Pietismo de Spener e o Reavivamento Morávio',
    year: '1675 d.C.',
    location: 'Frankfurt e Halle (Alemanha) / Herrnhut, Saxônia',
    keyFigures: ['Philipp Jakob Spener', 'August Hermann Francke', 'Conde Nikolaus von Zinzendorf'],
    category: 'AVIVAMENTO',
    description: 'Inquieto com a frieza intelectual da ortodoxia luterana pós-Guerra dos Trinta Anos, o pastor Philipp Jakob Spener publicou seu célebre manifesto "Pia Desideria" (Desejos Piedosos), propondo pequenos grupos domiciliares para estudo bíblico e oração mútua (ecclesiola in ecclesia). O movimento gerou a Universidade de Halle e, mais tarde, o refúgio dos Morávios em Herrnhut, liderados pelo Conde Zinzendorf.',
    historicalContextDetailed: 'Após as devastações traumáticas da Guerra dos Trinta Anos (1618–1648), a vida eclesiástica alemã cristalizara-se em debates escolásticos acadêmicos estéreis, enquanto a vida moral e devocional do povo definhava. Spener e Francke uniram a piedade do coração aquecido ao cuidado social intensivo de órfãos e desvalidos.',
    theologicalDebate: {
      coreControversy: 'O cristianismo autêntico resume-se à pura ortodoxia dogmática de cabeça ou exige a experiência viva do novo nascimento (regeneração interior) e da caridade ativa?',
      hereticalOrChallengingView: 'A ortodoxia morta (toter Glaube): a falsa segurança na membresia eclesiástica nominal externa sem conversão do coração e sem santificação pessoal.',
      orthodoxFormulation: 'A Teologia do Coração Regenerado (Pietas): a verdadeira teologia deve ser uma prática da piedade (habitus practicus); o sacerdócio universal de todos os crentes exige que leigos leiam a Bíblia, orem juntos e manifestem a fé pelo amor sacrificial e pelas missões transculturais.',
      dogmaticTerms: ['Ecclesiola in ecclesia (Pequena igreja dentro da igreja)', 'Pia Desideria', 'Novo Nascimento', 'Praxis Pietatis']
    },
    primarySourceQuote: {
      text: 'O nosso cristianismo não consiste apenas no conhecimento da verdade cristã, mas no exercício vivo e na prática ardente dessa mesma verdade; onde o coração não arde em amor a Cristo e ao próximo, a erudição da cabeça é apenas vaidade morta.',
      author: 'Philipp Jakob Spener',
      work: 'Pia Desideria (Desejos Piedosos para uma Reforma Agraciada da Verdadeira Igreja, 1675)'
    },
    historicalSignificance: 'Revitalizou o protestantismo europeu ao resgatar a oração comunitária fervorosa e a responsabilidade social cristã, dando origem à primeira onda missionária protestante global através dos Morávios.',
    legacyPoints: [
      'Em Herrnhut (1727), os Morávios iniciaram a histórica "Reunião de Oração Contínua de 100 Anos", intercedendo ininterruptamente dia e noite.',
      'Enviou centenas de missionários leigos voluntários para os escravos no Caribe, na Groenlândia e na África.',
      'A fé viva e serena dos morávios em meio a uma tempestade no Atlântico impactou indelevelmente John Wesley, catalisando sua conversão.'
    ],
    scriptureReferences: ['Tg 1:22-27', 'Jo 3:3-7', '1Pe 2:9', 'Cl 3:12-17', 'Gl 5:6']
  },
  {
    id: 'primeiro-grande-despertar',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'O Primeiro Grande Despertar nas Colônias Americanas',
    year: 'c. 1730 – 1745 d.C.',
    location: 'Nova Inglaterra e Treze Colônias (América do Norte) / Grã-Bretanha',
    keyFigures: ['Jonathan Edwards', 'George Whitefield', 'Gilbert Tennent'],
    category: 'AVIVAMENTO',
    description: 'Uma torrente colossal de arrependimento e convicção espiritual varreu as colônias britânicas na América do Norte. Em Northampton, o filósofo e teólogo puritano Jonathan Edwards pregou sermões inesquecíveis como "Pecadores nas Mãos de um Deus Irado", unindo rigor intelectual supremo com reverência santa. Concomitantemente, o evangelista George Whitefield pregava a multidões de mais de 20.000 pessoas em campos abertos.',
    historicalContextDetailed: 'As colônias americanas sofriam profunda indiferença moral e espiritual. O "Pacto pela Metade" (Half-Way Covenant) permitira que cidadãos não convertidos se tornassem membros das igrejas congregacionais. O Grande Despertar explodiu desmantelando o formalismo clerical e forjando a primeira identidade nacional compartilhada antes da independência dos EUA.',
    theologicalDebate: {
      coreControversy: 'A realidade sobrenatural da ação soberana do Espírito Santo na conversão humana e a legitimidade dos afetos religiosos genuínos no culto.',
      hereticalOrChallengingView: 'O deísmo iluminista racionalista e o moralismo institucional seco, que consideravam qualquer ardor devocional como mero "fanatismo vulgar e desordem emocional".',
      orthodoxFormulation: 'A Teologia dos Afetos Religiosos: a verdadeira religião consiste na transformação dos afetos soberanos da alma, que passa a odiar o pecado e contemplar a beleza e excelência divina de Cristo; a soberania graciosa de Deus na convicção dos pecadores.',
      dogmaticTerms: ['Afetos Religiosos', 'Despertar Espiritual (Awakening)', 'Convicção de Pecado', 'Pregação ao Ar Livre']
    },
    primarySourceQuote: {
      text: 'O Deus que vos segura sobre o abismo do inferno, quase da mesma forma que alguém segura uma aranha ou um inseto asqueroso sobre o fogo, abomina-vos e está terrivelmente exasperado... E não há outro motivo pelo qual não caístes nele neste exato instante senão porque a Sua mão graciosa vos tem sustentado.',
      author: 'Jonathan Edwards',
      work: 'Pecadores nas Mãos de um Deus Irado (Sermão em Enfield, 8 de julho de 1741)'
    },
    historicalSignificance: 'O primeiro movimento social, cultural e espiritual que uniu transversalmente todas as colônias americanas, estabelecendo o padrão dos grandes avivamentos evangélicos na história ocidental.',
    legacyPoints: [
      'O livro de Edwards "Um Tratado sobre os Afetos Religiosos" (1746) tornou-se a análise psicológica e teológica definitiva sobre o discernimento bíblico de avivamentos autênticos.',
      'Deu origem a grandes universidades americanas fundadas para treinar pregadores do avivamento, como Princeton, Dartmouth e Brown.',
      'Democratizou o acesso à liderança espiritual e estimulou a oposição moral precoce ao tráfico transatlântico de escravos.'
    ],
    scriptureReferences: ['Hc 3:2', 'Sl 85:6', 'At 2:37-39', 'Jo 16:8-11', 'Is 55:6-7']
  },
  {
    id: 'wesley-metodismo',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'John Wesley e o Reavivamento Metodista',
    year: '1738 d.C.',
    location: 'Rua Aldersgate, Londres / Ilhas Britânicas',
    keyFigures: ['John Wesley', 'Charles Wesley', 'George Whitefield'],
    category: 'AVIVAMENTO',
    description: 'Após anos de frustração moral e fracasso missionário na colônia da Geórgia, o sacerdote anglicano John Wesley participava de uma reunião na Rua Aldersgate em Londres em 24 de maio de 1738. Ao ouvir a leitura do prefácio de Martinho Lutero à Epístola aos Romanos, experimentou a célebre conversão do "coração estranhamente aquecido". Ele cavalgou mais de 400.000 quilômetros pregando a mineradores e proletários ao ar livre sobre a graça livre para todos.',
    historicalContextDetailed: 'A Revolução Industrial inglesa criara uma massa pauperizada e embrutecida nos cortiços e minas de carvão, completamente ignorada pela aristocrática Igreja Anglicana. Enquanto a França caminhava para a conflagração sangrenta da Revolução Francesa, o reavivamento metodista trouxe transformação moral, escolas dominicais e justiça social à classe trabalhadora.',
    theologicalDebate: {
      coreControversy: 'A universalidade da oferta da graça salvadora e a santificação prática do coração versus o hipercalvinismo fatalista e o deísmo estéril.',
      hereticalOrChallengingView: 'A complacência moral antinômica e o fatalismo que paralisava o chamado à pregação pública aos perdidos.',
      orthodoxFormulation: 'O Arminianismo Evangélico Wesleyano: a graça de Deus é livre para todos e livre em todos; o sangue de Cristo expiou os pecados de toda a humanidade; a justificação pela fé deve florescer em santificação real do coração e da vida (Perfeição Cristã ou Amor Perfeito a Deus e ao próximo).',
      dogmaticTerms: ['Graça Preveniente', 'Perfeição Cristã (Amor Perfeito)', 'Coração Estranhamente Aquecido', 'Classes e Sociedades Metodistas']
    },
    primarySourceQuote: {
      text: 'Cerca das oito e quarenta e cinco, enquanto ele descrevia a mudança que Deus opera no coração mediante a fé em Cristo, senti o meu coração estranhamente aquecido. Senti que confiava em Cristo, em Cristo somente para a salvação; e uma certeza me foi dada de que Ele havia tirado os meus pecados, sim, os meus, e me salvara da lei do pecado e da morte.',
      author: 'John Wesley',
      work: 'Diário de John Wesley (24 de maio de 1738)'
    },
    historicalSignificance: 'Movimento de renovação espiritual que transformou a sociedade britânica, evitou convulsões revolucionárias destrutivas e espalhou o metodismo e a teologia da santidade bíblica pelo mundo inteiro.',
    legacyPoints: [
      'Charles Wesley compôs mais de 6.000 hinos que revolucionaram a hinologia sacra cristã mundial (como "Eis dos Anjos Harmonia" e "Mil Línguas Eu Quisera Ter").',
      'Estruturou o sistema de "pequenas classes" (Class Meetings) de mútua prestação de contas que inspirou o moderno modelo de pequenos grupos.',
      'Liderou ativamente a cruzada parlamentar contra a escravidão britânica ao lado do seu discípulo William Wilberforce.'
    ],
    scriptureReferences: ['Rm 8:15-16', '1Jo 4:16-19', '1Ts 5:23-24', 'Tt 2:11-14', 'Mt 5:48']
  },
  {
    id: 'william-carey-missoes',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'William Carey e o Movimento Missionário Moderno',
    year: '1792 d.C.',
    location: 'Kettering e Nottingham (Inglaterra) / Serampore (Índia)',
    keyFigures: ['William Carey ("Pai das Missões Modernas")', 'Andrew Fuller', 'John Ryland'],
    category: 'AVIVAMENTO',
    description: 'Um humilde sapateiro autodidata e pastor batista inglês, William Carey, desafiou o marasmo de sua época ao publicar o tratado "Uma Investigação sobre a Obrigação dos Cristãos de Usar Meios para a Conversão dos Pagãos". Diante da oposição hipercalvinista que afirmava que Deus salvaria os pagãos sem ajuda humana, Carey pregou em Nottingham o sermão divisor de águas: "Espere grandes coisas de Deus; tente grandes coisas para Deus", partindo para a Índia onde viveu por quarenta anos sem jamais retornar à pátria.',
    historicalContextDetailed: 'O colonialismo mercantil da Companhia das Índias Orientais proibia a pregação missionária por temer prejuízos comerciais com os hindus. Estabelecendo-se na colônia dinamarquesa de Serampore, Carey, Ward e Marshman montaram uma gráfica, fundaram escolas para meninas e batalharam incansavelmente até que as autoridades britânicas proibissem o rito satânico do "Sati" (a queima viva de viúvas sobre a pira funerária de seus maridos falecidos).',
    theologicalDebate: {
      coreControversy: 'A Grande Comissão dada por Cristo em Mateus 28 é um mandamento perpétuo e obrigatório para todas as gerações da Igreja ou expirou com os doze Apóstolos?',
      hereticalOrChallengingView: 'O hipercalvinismo paralisante: a teoria de que proclamar o Evangelho aos povos não evangelizados e orar por sua salvação seria uma presunção humana que usurparia os decretos secretos de Deus.',
      orthodoxFormulation: 'A Teologia Missionária Bíblica Soberana: Deus soberanamente decreta tanto a salvação dos eleitos quanto os meios sagrados através dos quais essa salvação é alcançada — a pregação pública da Palavra, a oração e o envio sacrificial de missionários.',
      dogmaticTerms: ['A Grande Comissão Perpétua', 'Pai das Missões Modernas', 'Uso dos Meios Soberanos', 'Tradução Vernácula Transcultural']
    },
    primarySourceQuote: {
      text: 'Espere grandes coisas de Deus; tente grandes coisas para Deus! Se é nosso dever orar para que venha o Reino de Deus, é igualmente nosso dever sagrado utilizar todos os meios disponíveis para promover a expansão desse Reino sobre toda a terra.',
      author: 'William Carey',
      work: 'Sermão em Nottingham sobre Isaías 54:2-3 (30 de maio de 1792)'
    },
    historicalSignificance: 'Inaugurou o chamado "Grande Século das Missões" (Século XIX), no qual milhares de homens e mulheres deixaram o conforto do Ocidente para levar o Evangelho aos continentes africano, asiático e insular.',
    legacyPoints: [
      'Carey traduziu a Bíblia inteira ou porções dela para mais de quarenta línguas e dialetos indianos (bengali, sânscrito, marata, etc.).',
      'Fundou a Sociedade Missionária Batista de Kettering e o Serampore College, a primeira instituição de ensino superior da Índia.',
      'Inspirou o surgimento de dezenas de sociedades missionárias mundiais (London Missionary Society, China Inland Mission de Hudson Taylor, etc.).'
    ],
    scriptureReferences: ['Mt 28:18-20', 'Is 54:2-3', 'Rm 10:13-15', 'Ap 5:9-10', 'Mc 16:15']
  },
  {
    id: 'spurgeon-era-vitoriana',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'Charles Spurgeon: O "Príncipe dos Pregadores"',
    year: '1854 – 1892 d.C.',
    location: 'Metropolitan Tabernacle, Londres, Inglaterra',
    keyFigures: ['Charles Haddon Spurgeon', 'Susannah Spurgeon'],
    category: 'TEOLOGIA',
    description: 'Aos 19 anos de idade, o jovem Spurgeon assumiu o pastorado na capela de New Park Street em Londres, transferindo-se logo para o Metropolitan Tabernacle, construído para acomodar mais de 6.000 fiéis reunidos duas vezes a cada domingo. Pregador dotado de eloqüência ímpar e humor pungente, combateu a onda de secularismo vitoriano e enfrentou a célebre "Controvérsia do Declínio" (Down-Grade Controversy), retirando-se da União Batista britânica por sua recusa em condenar a teologia liberal modernista.',
    historicalContextDetailed: 'A era vitoriana britânica combinava auge econômico e imperial com a ascensão devastadora do darwinismo e da Alta Crítica racionalista bíblica alemã nas academias. Muitos pastores evangélicos capitulavam, negando a inerrância bíblica, a expiação penal vicária e a realidade do juízo eterno.',
    theologicalDebate: {
      coreControversy: 'A infalibilidade e inerrância da Escritura e a integridade do Evangelho bíblico versus a acomodação ao ceticismo racionalista liberal.',
      hereticalOrChallengingView: 'A Teologia Liberal Modernista: a Bíblia contém mitos que precisam ser desmitologizados pela ciência secular; a expiação não foi substituição penal judicial, mas apenas um comovente exemplo de amor moral.',
      orthodoxFormulation: 'A Inerrância Bíblica e a Cristocentricidade da Mensagem: toda a Escritura é divinamente inspirada e isenta de erro; o dever do pregador não é atualizar ou diluir a mensagem do Evangelho aos modismos da cultura, mas erguer a cruz de Cristo e a verdade eterna da Palavra.',
      dogmaticTerms: ['Down-Grade Controversy (Controvérsia do Declínio)', 'Inerrância Bíblica', 'Substituição Penal', 'Príncipe dos Pregadores']
    },
    primarySourceQuote: {
      text: 'Eu prego a Cristo e este crucificado! O Evangelho não precisa de defesas inteligentes; ele precisa ser solto! Soltai o leão! Ele defenderá a si próprio com o seu próprio poder. A Palavra de Deus é espada afiada de dois gumes que não precisa que ninguém a afie com filosofias humanas.',
      author: 'Charles Haddon Spurgeon',
      work: 'Sermões do Metropolitan Tabernacle e The Sword and the Trowel (A Espada e a Colher de Pedreiro)'
    },
    historicalSignificance: 'O pregador de língua inglesa mais lido e prolífico de todos os tempos. Seus sermões impressos semanais ultrapassaram 100 milhões de exemplares em vida, sendo lidos em todos os quadrantes do mundo.',
    legacyPoints: [
      'Fundou o Pastors\' College (atual Spurgeon\'s College), treinando quase 900 pastores durante seu ministério.',
      'Manteve o Orfanato de Stockwell e dezenas de instituições de assistência caritativa aos pobres do leste de Londres.',
      'Seu clássico devocional "Manhã e Noite" (Morning and Evening) e o comentário monumental sobre os Salmos ("O Tesouro de Davi") permanecem como best-sellers mundiais.'
    ],
    scriptureReferences: ['1Co 1:22-25', '1Co 2:1-5', 'Hb 4:12', '2Tm 4:1-5', 'Gl 6:14']
  }
];

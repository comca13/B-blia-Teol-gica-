import { ChurchHistoryEra, ChurchHistoryEvent, TheologicalSystemComparison, EcumenicalCreed } from '../types';

export const CHURCH_HISTORY_ERAS_INFO: Record<ChurchHistoryEra, {
  id: ChurchHistoryEra;
  name: string;
  period: string;
  description: string;
  color: string;
  badgeBg: string;
  iconName: string;
}> = {
  PATRISTICA: {
    id: 'PATRISTICA',
    name: 'Igreja Primitiva & Patrística',
    period: 'c. 30 – 590 d.C.',
    description: 'Da expansão apostólica às perseguições imperiais, definição do cânon sagrado, refutação das heresias trinitárias e os primeiros grandes concílios ecumênicos.',
    color: 'text-rose-400 border-rose-500/30',
    badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    iconName: 'Shield'
  },
  MEDIEVAL: {
    id: 'MEDIEVAL',
    name: 'Idade Média & Escolástica',
    period: 'c. 590 – 1517 d.C.',
    description: 'Consolidação institucional, florescimento do monasticismo, o Grande Cisma de 1054, a síntese teológica de Tomás de Aquino e os pré-reformadores.',
    color: 'text-amber-400 border-amber-500/30',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    iconName: 'Landmark'
  },
  REFORMA: {
    id: 'REFORMA',
    name: 'A Reforma Protestante',
    period: '1517 – 1648 d.C.',
    description: 'Retorno às fontes bíblicas (Ad Fontes), a justificação somente pela fé (Sola Fide), a autoridade soberana das Escrituras e a emergência das tradições reformadas, luteranas e anabatistas.',
    color: 'text-yellow-400 border-yellow-500/30',
    badgeBg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    iconName: 'Flame'
  },
  POS_REFORMA_DESPERTARES: {
    id: 'POS_REFORMA_DESPERTARES',
    name: 'Pós-Reforma & Grandes Despertares',
    period: '1648 – 1900 d.C.',
    description: 'Ortodoxia confessional, o debate soteriológico de Dort, pietismo do coração, o reavivamento wesleyano, os Grandes Despertares e a explosão missionária transcultural.',
    color: 'text-emerald-400 border-emerald-500/30',
    badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    iconName: 'Sparkles'
  },
  CONTEMPORANEA: {
    id: 'CONTEMPORANEA',
    name: 'Era Contemporânea & Global',
    period: '1900 d.C. – Presente',
    description: 'O avivamento pentecostal da Rua Azusa, a resistência cristã ao totalitarismo, os Manuscritos de Qumran, a apologética moderna e o deslocamento do cristianismo para o Sul Global.',
    color: 'text-sky-400 border-sky-500/30',
    badgeBg: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    iconName: 'Globe'
  }
};

export const CHURCH_HISTORY_EVENTS: ChurchHistoryEvent[] = [
  // 1. PATRÍSTICA
  {
    id: 'martirio-policarpo',
    era: 'PATRISTICA',
    title: 'Martírio de Policarpo de Esmirna',
    year: 'c. 155 d.C.',
    keyFigures: ['Policarpo de Esmirna', 'Discípulo do Apóstolo João'],
    description: 'Bispo de Esmirna e elo direto com a geração apostólica, Policarpo recusou-se a amaldiçoar a Cristo diante do procônsul romano, pronunciando a célebre frase: "Oitenta e seis anos o servi e Ele nunca me fez mal; como poderia blasfemar contra o meu Rei que me salvou?".',
    historicalSignificance: 'Demonstrou a resiliência inquebrantável dos mártires cristãos primitivos, inspirando a apologética de Tertuliano que imortalizou: "O sangue dos mártires é a semente da Igreja".',
    category: 'PERSEGUICAO'
  },
  {
    id: 'ireneu-gnosticismo',
    era: 'PATRISTICA',
    title: 'Ireneu de Lião e a Defesa contra o Gnosticismo',
    year: 'c. 180 d.C.',
    keyFigures: ['Ireneu de Lião', 'Valentino'],
    description: 'Em sua monumental obra "Contra as Heresias" (Adversus Haereses), Ireneu refutou as especulações gnósticas que rejeitavam a criação material e a verdadeira encarnação corpórea de Cristo, estabelecendo a Regra de Fé (Regula Fidei).',
    historicalSignificance: 'Formulou a teologia da "recapitulação" (Cristo como o Novo Adão que refaz a história humana na obediência) e cimentou a autoridade una do Antigo e Novo Testamentos.',
    category: 'TEOLOGIA'
  },
  {
    id: 'edito-milao',
    era: 'PATRISTICA',
    title: 'O Édito de Milão e o Fim das Perseguições Romanas',
    year: '313 d.C.',
    keyFigures: ['Constantino, o Grande', 'Licínio'],
    description: 'Após a grande perseguição imperial sob Diocleciano (303–311), Constantino e Licínio promulgaram a tolerância religiosa universal no Império Romano, restituindo propriedades confiscadas aos cristãos.',
    historicalSignificance: 'Marcou a transição da Igreja de comunidade marginalizada e perseguida para religião legalmente protegida, inaugurando novos desafios éticos e teológicos de simbiose entre Igreja e Estado.',
    category: 'REFORMA'
  },
  {
    id: 'concilio-niceia',
    era: 'PATRISTICA',
    title: 'I Concílio Ecumênico de Niceia',
    year: '325 d.C.',
    keyFigures: ['Atanásio de Alexandria', 'Ário de Alexandria', 'Constantino I'],
    description: 'Convocado para dirimir a heresia de Ário, que afirmava que o Filho era uma criatura ("houve um tempo em que Ele não era"). O concílio reuniu mais de 300 bispos e confessou que o Filho é coeterno e "consubstancial" (homoousios) ao Pai.',
    historicalSignificance: 'Primeiro concílio ecumênico geral da Cristandade; produziu o núcleo do Credo Niceno, salvaguardando a plena divindade ontológica de Jesus Cristo como fundamento da salvação.',
    category: 'CONCILIO'
  },
  {
    id: 'carta-atanasio-canon',
    era: 'PATRISTICA',
    title: 'A 39ª Carta Festal de Atanásio e a Fixação do Cânon do NT',
    year: '367 d.C.',
    keyFigures: ['Atanásio de Alexandria'],
    description: 'Na sua carta pastoral de Páscoa, Atanásio lista pela primeira vez com precisão exata os 27 livros inspirados do Novo Testamento, advertindo que "ninguém acrescente a estes, e nada deles seja tirado".',
    historicalSignificance: 'Documento histórico basilar que atesta o reconhecimento consensual e universal pela Igreja da autoridade canônica dos 27 livros apostólicos, posteriormente ratificados em Hipona (393) e Cartago (397).',
    category: 'TEOLOGIA'
  },
  {
    id: 'concilio-constantinopla-381',
    era: 'PATRISTICA',
    title: 'I Concílio de Constantinopla',
    year: '381 d.C.',
    keyFigures: ['Gregório de Nazianzo', 'Basílio de Cesareia', 'Gregório de Nissa (Padres Capadócios)'],
    description: 'Completou a teologia trinitária de Niceia ao refutar os macedonianos (pneumatômacos), que negavam a divindade do Espírito Santo, e os apolinarianos. Expandiu o artigo do Espírito Santo como "Senhor e Vivificador".',
    historicalSignificance: 'Promulgou o Credo Niceno-Constantinopolitano, aceito até hoje por reformados, ortodoxos, católicos e anglicanos como síntese clássica da Trindade: uma só substância (ousia), três pessoas (hypostaseis).',
    category: 'CONCILIO'
  },
  {
    id: 'agostinho-pelagio',
    era: 'PATRISTICA',
    title: 'Agostinho de Hipona e a Controvérsia Pelagiana',
    year: '412 – 430 d.C.',
    keyFigures: ['Agostinho de Hipona', 'Pelágio'],
    description: 'Pelágio ensinava que a humanidade nasce sem a mancha do pecado original e possui capacidade moral inata para cumprir os mandamentos sem graça sobrenatural. Agostinho defendeu vigorosamente a necessidade absoluta da graça soberana eficaz.',
    historicalSignificance: 'Lançou as bases teológicas da soteriologia ocidental sobre o pecado original, a depravação humana e a predestinação, que seriam redescobertas mais tarde pelos reformadores do século XVI.',
    category: 'TEOLOGIA'
  },
  {
    id: 'concilio-calcedonia',
    era: 'PATRISTICA',
    title: 'O Concílio de Calcedônia e a Definição Cristológica',
    year: '451 d.C.',
    keyFigures: ['Papa Leão I (Tomo de Leão)', 'Marciano', 'Êutiques'],
    description: 'Reuniu cerca de 500 bispos para refutar o monofisismo (que absorvia a humanidade de Cristo na divindade) e o nestorianismo (que dividia Cristo em duas pessoas). O concílio proclamou que Cristo é uma só Pessoa em duas naturezas (divina e humana), "sem confusão, sem mudança, sem divisão, sem separação".',
    historicalSignificance: 'Ponto culminante da cristologia ortodoxa histórica, assegurando que o Mediador é verdadeiro Deus para nos redimir e verdadeiro Homem para nos representar.',
    category: 'CONCILIO'
  },

  // 2. MEDIEVAL & ESCOLÁSTICA
  {
    id: 'pontificado-gregorio',
    era: 'MEDIEVAL',
    title: 'Pontificado de Gregório Magno e Expansão Missionária',
    year: '590 d.C.',
    keyFigures: ['Gregório I (Magno)', 'Agostinho de Cantuária'],
    description: 'Gregório assumiu a liderança de Roma em meio à ruína política, organizando o socorro aos pobres, a liturgia (canto gregoriano) e enviando missionários à Inglaterra anglo-saxã.',
    historicalSignificance: 'Consolidou o papado medieval e o modelo pastoral e administrativo da Cristandade ocidental na transição da Antiguidade para a Idade Média.',
    category: 'REFORMA'
  },
  {
    id: 'grande-cisma-1054',
    era: 'MEDIEVAL',
    title: 'O Grande Cisma do Oriente e Ocidente',
    year: '1054 d.C.',
    keyFigures: ['Cardeal Humberto', 'Patriarca Miguel Cerulário'],
    description: 'Após séculos de tensões teológicas (a cláusula Filioque no Credo), linguísticas (latim versus grego) e disputas sobre a primazia papal universal, Roma e Constantinopla excomungaram-se mutuamente.',
    historicalSignificance: 'Divisão formal permanente entre a Igreja Católica Romana no Ocidente e a Igreja Ortodoxa no Oriente, que perdura até os dias atuais.',
    category: 'TEOLOGIA'
  },
  {
    id: 'anselmo-cur-deus-homo',
    era: 'MEDIEVAL',
    title: 'Anselmo de Cantuária e a Expiação por Satisfação',
    year: '1098 d.C.',
    keyFigures: ['Anselmo de Cantuária'],
    description: 'Em seu clássico "Por que Deus se fez Homem?" (Cur Deus Homo), Anselmo articulou racionalmente que o pecado humano afrontou a honra infinita de Deus, exigindo uma satisfação que somente um Deus-Homem poderia prestar.',
    historicalSignificance: 'Pai da Escolástica; estruturou a teologia da expiação vicária de dívida e honra que pavimentou o caminho para a doutrina reformada da substituição penal.',
    category: 'TEOLOGIA'
  },
  {
    id: 'tomas-aquino-suma',
    era: 'MEDIEVAL',
    title: 'Tomás de Aquino e a Suma Teológica',
    year: '1265 – 1274 d.C.',
    keyFigures: ['Tomás de Aquino ("Doutor Angélico")'],
    description: 'Maior expoente da escolástica medieval, Tomás realizou a monumental síntese entre a revelação bíblica e a filosofia aristotélica, harmonizando fé e razão e delineando as Cinco Vias para a existência de Deus.',
    historicalSignificance: 'A obra tornou-se o padrão teológico do Catolicismo Romano (Tomismo) e influenciou profundamente o vocabulário filosófico de toda a teologia sistemática ocidental.',
    category: 'TEOLOGIA'
  },
  {
    id: 'pre-reformadores-wycliffe-hus',
    era: 'MEDIEVAL',
    title: 'A Estrela da Manhã: John Wycliffe e Jan Hus',
    year: '1380 – 1415 d.C.',
    keyFigures: ['John Wycliffe (Inglaterra)', 'Jan Hus (Boêmia)'],
    description: 'Wycliffe traduziu a Bíblia para o inglês vulgar e defendeu a autoridade suprema das Escrituras sobre papas e concílios. Jan Hus pregou suas ideias na Boêmia e foi queimado vivo na fogueira no Concílio de Constança (1415).',
    historicalSignificance: 'Considerados os pioneiros e precursores da Reforma Protestante. Ao morrer, Hus profetizou: "Hoje vocês assam um ganso (Hus significa ganso), mas daqui a cem anos surgirá um cisne que não poderão queimar".',
    category: 'REFORMA'
  },

  // 3. A REFORMA PROTESTANTE
  {
    id: 'lutero-95-teses',
    era: 'REFORMA',
    title: 'Martinho Lutero e as 95 Teses em Wittenberg',
    year: '1517 d.C.',
    keyFigures: ['Martinho Lutero', 'Johann Tetzel'],
    description: 'Em 31 de outubro de 1517, o monge agostiniano Martinho Lutero afixou na porta da Igreja do Castelo de Wittenberg 95 teses convocando um debate acadêmico contra a venda venal de indulgências papais.',
    historicalSignificance: 'Desencadeou a Reforma Protestante, redescobrindo o Evangelho da justificação exclusivamente pela graça mediante a fé em Jesus Cristo (Romanos 1:17).',
    category: 'REFORMA'
  },
  {
    id: 'dieta-de-worms',
    era: 'REFORMA',
    title: 'A Dieta de Worms: "A Minha Consciência está Cativa à Palavra"',
    year: '1521 d.C.',
    keyFigures: ['Martinho Lutero', 'Imperador Carlos V', 'João Eck'],
    description: 'Convocado diante do imperador do Sacro Império Romano-Germânico e legados papais para retratar-se de seus livros, Lutero declarou: "A menos que eu seja convencido pelo testemunho das Escrituras ou por razão evidente... não posso e não vou me retratar de nada... Que Deus me ajude. Amém!".',
    historicalSignificance: 'Fixou o princípio inegociável da primazia da Palavra de Deus sobre qualquer autoridade eclesiástica ou secular humana (Sola Scriptura).',
    category: 'REFORMA'
  },
  {
    id: 'reforma-suica-zwinglio',
    era: 'REFORMA',
    title: 'Ulrico Zuínglio e a Reforma Suíça em Zurique',
    year: '1519 – 1531 d.C.',
    keyFigures: ['Ulrico Zuínglio'],
    description: 'Em Zurique, Zuínglio iniciou a pregação expositiva sistemática versículo por versículo do Novo Testamento, abolindo o celibato obrigatório, imagens de escultura e enfatizando a Ceia do Senhor como memorial de comunhão.',
    historicalSignificance: 'Deu origem ao ramo Reformado da teologia protestante, que se diferenciou do luteranismo especialmente na eclesiologia e na teologia dos sacramentos no Colóquio de Marburgo (1529).',
    category: 'REFORMA'
  },
  {
    id: 'reforma-radical-anabatistas',
    era: 'REFORMA',
    title: 'Os Anabatistas e a Reforma Radical',
    year: '1525 d.C.',
    keyFigures: ['Conrad Grebel', 'Felix Manz', 'Menno Simons'],
    description: 'Defendiam que a Reforma Magisterial não havia ido longe o suficiente. Rejeitaram o batismo infantil em favor do credobatismo (batismo de confessantes), propuseram a total separação entre Igreja e Estado e abraçaram o pacifismo cristão.',
    historicalSignificance: 'Pioneiros históricos da liberdade religiosa, do voluntarismo na fé e da separação entre os poderes secular e religioso.',
    category: 'REFORMA'
  },
  {
    id: 'calvino-institutas',
    era: 'REFORMA',
    title: 'João Calvino e as Institutas da Religião Cristã',
    year: '1536 – 1559 d.C.',
    keyFigures: ['João Calvino', 'Guilherme Farel', 'Teodoro de Beza'],
    description: 'Aos 26 anos, Calvino publicou a primeira edição das Institutas, um compêndio teológico sistemático da fé reformada. Estabeleceu em Genebra um modelo de academia, ministério pastoral e disciplina bíblica.',
    historicalSignificance: 'A mais influente sistematização teológica do protestantismo histórico, fundamentando a soberania de Deus, a aliança graciosa e o governo presbiteriano.',
    category: 'TEOLOGIA'
  },
  {
    id: 'os-cinco-solas',
    era: 'REFORMA',
    title: 'A Formulação dos Cinco Solas da Reforma',
    year: 'c. 1560 d.C.',
    keyFigures: ['Martinho Lutero', 'João Calvino', 'Filipe Melâncton'],
    description: 'Os cinco pilares fundamentais articulados pelo protestantismo histórico: Sola Scriptura (Somente a Escritura), Sola Gratia (Somente a Graça), Sola Fide (Somente a Fé), Solus Christus (Somente Cristo) e Soli Deo Gloria (Glória Somente a Deus).',
    historicalSignificance: 'Síntese confessional da redescoberta do Evangelho, definindo a identidade de todas as igrejas nascidas da Reforma.',
    category: 'TEOLOGIA'
  },
  {
    id: 'concilio-trento',
    era: 'REFORMA',
    title: 'O Concílio de Trento e a Contrarreforma Católica',
    year: '1545 – 1563 d.C.',
    keyFigures: ['Papa Paulo III', 'Inácio de Loyola (Jesuítas)'],
    description: 'Resposta oficial da Igreja de Roma ao protestantismo. Reafirmou os sete sacramentos, a autoridade igual da Tradição e da Vulgata Latina, e anatemizou explicitamente a justificação pela fé somente (Sola Fide).',
    historicalSignificance: 'Definiu o dogma católico romano até o Concílio Vaticano II, selando a ruptura eclesiástica irreparável na Europa cristã.',
    category: 'CONCILIO'
  },

  // 4. PÓS-REFORMA & GRANDES DESPERTARES
  {
    id: 'sinodo-de-dort',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'O Sínodo de Dort e os Cânones de Dort',
    year: '1618 – 1619 d.C.',
    keyFigures: ['Johannes Bogerman', 'Simão Episcópio', 'Seguidores de Jacobus Arminius'],
    description: 'Convocado pelos Estados Gerais da Holanda com delegações internacionais para responder aos Cinco Artigos dos Remonstrantes (discípulos de Armínio). O Sínodo formulou cinco capítulos de doutrina conhecidos como os Cânones de Dort (acróstico TULIP).',
    historicalSignificance: 'Marco definidor do debate soteriológico entre a tradição Reformada/Calvinista e a tradição Arminiana, influenciando todo o protestantismo anglo-saxão.',
    category: 'CONCILIO'
  },
  {
    id: 'confissao-westminster',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'A Assembleia e Confissão de Fé de Westminster',
    year: '1643 – 1648 d.C.',
    keyFigures: ['121 teólogos puritanos ingleses e escoceses'],
    description: 'Reunidos na Abadia de Westminster durante a Guerra Civil Inglesa, redigiram a Confissão de Fé, o Catecismo Maior e o Breve Catecismo ("O fim supremo e principal do homem é glorificar a Deus e alegrar-se nele para sempre").',
    historicalSignificance: 'O documento confessional mais prestigioso e adotado pelo presbiterianismo mundial e teologia reformada clássica.',
    category: 'TEOLOGIA'
  },
  {
    id: 'pietismo-spener',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'O Pietismo de Spener e os Irmãos Morávios',
    year: '1675 d.C.',
    keyFigures: ['Philipp Jakob Spener (Pia Desideria)', 'Conde Zinzendorf'],
    description: 'Spener reagiu contra a ortodoxia fria e puramente intelectual, propondo pequenas reuniões de estudo bíblico e oração mútua (ecclesiola in ecclesia) e enfatizando o novo nascimento e o cristianismo prático.',
    historicalSignificance: 'Gerou o movimento morávio de oração contínua de 100 anos em Herrnhut e enviou os primeiros missionários aos confins da Terra, impactando decisivamente John Wesley.',
    category: 'AVIVAMENTO'
  },
  {
    id: 'primeiro-grande-despertar',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'O Primeiro Grande Despertar nas Colônias Americanas',
    year: 'c. 1730 – 1745 d.C.',
    keyFigures: ['Jonathan Edwards', 'George Whitefield'],
    description: 'Uma poderosa onda de convicção espiritual e conversões varreu a Nova Inglaterra e a Grã-Bretanha. Edwards pregou "Pecadores nas Mãos de um Deus Irado" e uniu rigor intelectual com ardente paixão devocional.',
    historicalSignificance: 'Primeiro grande movimento espiritual compartilhado que uniu as colônias americanas, forjando a identidade evangélica transdenominacional.',
    category: 'AVIVAMENTO'
  },
  {
    id: 'wesley-metodismo',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'John Wesley e o Reavivamento Metodista',
    year: '1738 d.C.',
    keyFigures: ['John Wesley', 'Charles Wesley'],
    description: 'Após sua conversão do coração aquecido na Rua Aldersgate em 1738, John Wesley viajou a cavalo centenas de milhares de quilômetros pregando a operários ao ar livre sobre a graça livre para todos e a santificação prática.',
    historicalSignificance: 'Salvou a Inglaterra de revoluções sangrentas semelhantes à francesa e disseminou o arminianismo evangélico em escala mundial através da hinologia de Charles e das classes de discipulado.',
    category: 'AVIVAMENTO'
  },
  {
    id: 'william-carey-missoes',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'William Carey e o Movimento Missionário Moderno',
    year: '1792 d.C.',
    keyFigures: ['William Carey ("Pai das Missões Modernas")', 'Andrew Fuller'],
    description: 'Carey publicou seu manifesto sobre a obrigação dos cristãos de usar meios para a conversão dos povos não alcançados e partiu para a Índia, traduzindo a Bíblia para dezenas de dialetos indianos sob o lema: "Espere grandes coisas de Deus; tente grandes coisas para Deus".',
    historicalSignificance: 'Inaugurou o "Grande Século" das missões protestantes mundiais para a África, Ásia e Américas.',
    category: 'AVIVAMENTO'
  },
  {
    id: 'spurgeon-era-vitoriana',
    era: 'POS_REFORMA_DESPERTARES',
    title: 'Charles Spurgeon: O "Príncipe dos Pregadores"',
    year: '1854 – 1892 d.C.',
    keyFigures: ['Charles Haddon Spurgeon'],
    description: 'No Tabernáculo Metropolitano de Londres, pregava para mais de 6.000 pessoas a cada domingo. Fundou um colégio pastoral, orfanatos e lutou na famosa "Controvérsia do Declínio" (Down-Grade Controversy) contra a infiltração do liberalismo teológico.',
    historicalSignificance: 'Seus sermões impressos ultrapassaram centenas de milhões de cópias, permanecendo como referencial de pregação cristocêntrica e apologética bíblica.',
    category: 'TEOLOGIA'
  },

  // 5. ERA CONTEMPORÂNEA & GLOBAL
  {
    id: 'avivamento-rua-azusa',
    era: 'CONTEMPORANEA',
    title: 'O Avivamento da Rua Azusa e o Pentecostalismo Global',
    year: '1906 d.C.',
    keyFigures: ['William J. Seymour'],
    description: 'Em uma humilde missão em Los Angeles liderada por Seymour, um pregador afro-americano caolho, manifestou-se um reavivamento contínuo caracterizado pelo batismo no Espírito Santo, glossolalia e reconciliação racial.',
    historicalSignificance: 'Deu origem ao Movimento Pentecostal e Carismático, que se tornou a corrente cristã de mais rápido crescimento numérico no século XX (mais de 600 milhões de fiéis hoje).',
    category: 'AVIVAMENTO'
  },
  {
    id: 'manuscritos-mar-morto',
    era: 'CONTEMPORANEA',
    title: 'Descoberta dos Manuscritos do Mar Morto em Qumran',
    year: '1947 d.C.',
    keyFigures: ['Pastores beduínos', 'E. L. Sukenik', 'Roland de Vaux'],
    description: 'Manuscritos bíblicos hebraicos do Antigo Testamento copiados mil anos antes do Códice de Leningrado foram encontrados preservados em vasos de cerâmica nas cavernas de Qumran.',
    historicalSignificance: 'A maior descoberta arqueológica bíblica do século XX; comprovou a impressionante e miraculosa fidelidade da transmissão do texto bíblico hebraico ao longo dos milênios.',
    category: 'TEOLOGIA'
  },
  {
    id: 'bonhoeffer-resistencia',
    era: 'CONTEMPORANEA',
    title: 'Dietrich Bonhoeffer e a Igreja Confessante',
    year: '1933 – 1945 d.C.',
    keyFigures: ['Dietrich Bonhoeffer', 'Karl Barth', 'Martin Niemöller'],
    description: 'Teólogo luterano autor de "O Custo do Discipulado", resistiu frontalmente à nazificação da Igreja na Alemanha através da Declaração Teológica de Barmen (1934). Foi enforcado no campo de concentração de Flossenbürg poucas semanas antes do fim da guerra.',
    historicalSignificance: 'Símbolo imperecível da recusa da graça barata ("graça que justifica o pecado, e não o pecador arrependido") e do testemunho profético contra a tirania secular.',
    category: 'PERSEGUICAO'
  },
  {
    id: 'cs-lewis-apologetica',
    era: 'CONTEMPORANEA',
    title: 'C.S. Lewis e o Renascimento da Apologética Intelectual',
    year: 'c. 1940 – 1963 d.C.',
    keyFigures: ['C.S. Lewis', 'J.R.R. Tolkien'],
    description: 'Professor em Oxford e Cambridge, Lewis usou transmissões da rádio BBC ("Cristianismo Puro e Simples") e obras alegóricas ("As Crônicas de Nárnia") para defender a plausibilidade racional e a beleza da fé cristã em um mundo secularizado.',
    historicalSignificance: 'Tornou-se o apologista cristão mais lido e influente da era moderna, inspirando gerações de intelectuais a amarem a Deus com o coração e a mente.',
    category: 'TEOLOGIA'
  },
  {
    id: 'pacto-lausanne-1974',
    era: 'CONTEMPORANEA',
    title: 'O Movimento de Lausanne para a Evangelização Mundial',
    year: '1974 d.C.',
    keyFigures: ['Billy Graham', 'John Stott'],
    description: 'Mais de 2.700 líderes evangélicos de 150 nações reuniram-se na Suíça e subscreveram o Pacto de Lausanne, redigido principalmente pelo teólogo John Stott, integrando o anúncio do Evangelho bíblico e a responsabilidade social cristã.',
    historicalSignificance: 'O mais abrangente manifesto teológico e missionário evangélico contemporâneo, focando esforços globais nos povos não alcançados.',
    category: 'AVIVAMENTO'
  },
  {
    id: 'deslocamento-sul-global',
    era: 'CONTEMPORANEA',
    title: 'O Deslocamento do Cristianismo para o Sul Global',
    year: 'Século XXI',
    keyFigures: ['Igrejas da América Latina, África Subsaariana e Ásia'],
    description: 'Pela primeira vez em mais de mil anos, a maioria demográfica dos cristãos do planeta reside na África, América Latina e Ásia, e não mais na Europa ou América do Norte. Milhares de missionários do Sul Global são agora enviados para reevangelizar o Ocidente secularizado.',
    historicalSignificance: 'A realização plena da visão pentecostal e apostólica de um povo redimido "de toda tribo, língua, povo e nação" (Apocalipse 5:9).',
    category: 'TEOLOGIA'
  }
];

export const THEOLOGICAL_COMPARISONS: TheologicalSystemComparison[] = [
  {
    topic: '1. Depravação Humana & O Livre-Arbítrio',
    calvinismAcronym: 'T',
    calvinismTitle: 'Depravação Total (Total Depravity)',
    calvinismView: 'Como consequência da Queda em Adão, todo o ser humano está moralmente morto em delitos e pecados (Ef 2:1-3) e escravizado pelo pecado (Rm 6:16-20). Embora o ser humano preserve a faculdade da volição e faça escolhas livres de acordo com seus desejos mais fortes, a sua natureza caída tem aversão a Deus e é espiritualmente incapaz de, por si mesma, querer, buscar ou aceitar a salvação sem uma regeneração monergista prévia efetuada pelo Espírito Santo (Rm 3:10-12; 1 Co 2:14; Jo 6:44).',
    calvinismKeyPassages: ['Efésios 2:1-5', 'Romanos 3:10-12', '1 Coríntios 2:14', 'João 6:44'],
    arminianismArticle: 'Artigos III & IV',
    arminianismTitle: 'Incapacidade Natural & Graça Preveniente',
    arminianismView: 'Armínio e os Remonstrantes concordavam plenamente que o homem natural está caído, depravado e não pode crer por suas próprias forças naturais não auxiliadas. Contudo, defendem que a graça preveniente de Deus — outorgada universalmente pelo sacrifício de Cristo e a iluminação do Espírito — restaura na alma humana caída a liberdade de responder ao convite do Evangelho ou resistir a ele. O livre-arbítrio libertado pela graça não é autossuficiência humana, mas a capacidade graciosa outorgada por Deus de receber o dom da fé (Jo 1:9; Tt 2:11).',
    arminianismKeyPassages: ['João 1:9', 'Tito 2:11', 'Atos 7:51', 'Apocalipse 3:20'],
    historicalContext: 'Ambos os lados rejeitaram categoricamente o Pelagianismo (que afirmava a bondade inata humana). A divergência central reside em se a graça divina opera de forma monergista e irresistível na vontade (Calvino) ou de forma sinergista e resistível através da graça preveniente restauradora (Armínio).'
  },
  {
    topic: '2. Eleição & Predestinação Divina',
    calvinismAcronym: 'U',
    calvinismTitle: 'Eleição Incondicional (Unconditional Election)',
    calvinismView: 'Antes da fundação do mundo, puramente segundo o beneplácito de sua soberana vontade e misericórdia infinita, Deus elegeu incondicionalmente um número definido de pecadores para a salvação em Cristo. Esta escolha eterna não foi motivada por qualquer virtude, fé futura ou boas obras previstas por Deus no homem, mas decorre unicamente da livre e graciosa escolha divina soberana (Ef 1:4-5; Rm 9:11-18; 2 Tm 1:9). A fé salvadora é o fruto da eleição divina, não a sua causa.',
    calvinismKeyPassages: ['Efésios 1:4-5', 'Romanos 9:11-16', '2 Timóteo 1:9', 'Atos 13:48'],
    arminianismArticle: 'Artigo I',
    arminianismTitle: 'Eleição Condicional à Fé Prevista',
    arminianismView: 'Deus decretou desde a eternidade salvar aqueles que Ele anteviu que creriam livremente em Seu Filho Jesus Cristo e perseverariam na fé até o fim, através da graça preveniente e cooperante do Espírito Santo. A eleição divina é, portanto, condicional à fé pessoal em Cristo. Em Romanos 8:29 ("aqueles que de antemão conheceu, também os predestinou"), o conhecimento prévio (prognōsis) de Deus antevê a resposta de fé do pecador ao Evangelho.',
    arminianismKeyPassages: ['Romanos 8:29', '1 Pedro 1:1-2', 'João 3:16', '1 Timóteo 2:3-4'],
    historicalContext: 'O debate foca na ordem dos decretos divinos: para o calvinismo, a fé é o dom dado aos eleitos; para o arminianismo clássico, a eleição é a determinação divina de salvar em Cristo todos aqueles que respondem afirmativamente com fé.'
  },
  {
    topic: '3. A Natureza e Extensão da Expiação',
    calvinismAcronym: 'L',
    calvinismTitle: 'Expiação Limitada / Redenção Particular',
    calvinismView: 'Embora a morte de Cristo na cruz tenha valor intrínseco e mérito infinitamente suficientes para redimir incontáveis mundos ("suficiente para todos, eficiente para os eleitos"), o propósito redentor específico e desígnio soberano de Deus na cruz foi garantir infalivelmente a salvação definitiva e a remissão real de pecados para o Seu povo eleito (Mt 1:21; Jo 10:11, 15; At 20:28; Ef 5:25). Cristo não apenas tornou a salvação hipoteticamente possível para todos, mas a assegurou infalivelmente para os Seus.',
    calvinismKeyPassages: ['João 10:11, 14-15', 'Mateus 1:21', 'Efésios 5:25', 'Hebreus 9:12'],
    arminianismArticle: 'Artigo II',
    arminianismTitle: 'Expiação Ilimitada / Universal Provisória',
    arminianismView: 'Jesus Cristo, o Salvador do mundo, morreu por todos os homens e por cada ser humano indistintamente, pagando o preço integral de resgate e expiação na cruz, de modo que Ele reconciliou o mundo com Deus (1 Jo 2:2; 2 Co 5:19; 1 Tm 2:6; Hb 2:9). No entanto, o benefício efetivo dessa expiação é condicional e só é aplicado àqueles que pessoalmente recebem a Cristo pela fé. A expiação é universal em sua provisão e intenção graciosa, mas particular em sua aplicação.',
    arminianismKeyPassages: ['1 João 2:2', '1 Timóteo 2:5-6', 'Hebreus 2:9', '2 Pedro 3:9'],
    historicalContext: 'Em Dort, este foi um dos pontos mais intensamente debatidos. Teólogos reformados enfatizavam que a cruz triunfou com eficácia plena e não pode falhar no que se propôs; os remonstrantes enfatizavam o convite sincero e universal do amor de Deus a todo pecador.'
  },
  {
    topic: '4. A Eficácia da Graça Salvadora',
    calvinismAcronym: 'I',
    calvinismTitle: 'Graça Irresistível / Chamado Eficaz',
    calvinismView: 'Além do chamado geral e externo do Evangelho pregado a todos os homens (que pode ser e frequentemente é resistido), o Espírito Santo aplica interiormente aos eleitos um chamado eficaz (monergismo divino). O Espírito regenera o coração espiritualmente morto, removendo o coração de pedra e concedendo um novo coração de carne (Ez 36:26), iluminando a mente e inclinando docemente e infalivelmente a vontade para abraçar alegremente a Cristo (Jo 6:37, 44-45; Fl 2:13).',
    calvinismKeyPassages: ['João 6:37, 44', 'Ezequiel 36:26', 'Romanos 8:30', 'Filipenses 2:13'],
    arminianismArticle: 'Artigo IV',
    arminianismTitle: 'Graça Resistível / Cooperação Sinergista',
    arminianismView: 'A graça salvadora de Deus é absolutamente necessária para o início, continuidade e consumação de todo bem espiritual na alma. Ninguém pode sequer pensar um bom pensamento sem ela. Todavia, como a Escritura adverte repetidamente sobre pessoas que "sempre resistem ao Espírito Santo" (At 7:51; Mt 23:37; Lc 7:30), a graça salvadora pode ser resistida pelo ser humano endurecido. Deus não coage a vontade humana; Ele a atrai graciosamente e convida amorosamente à comunhão.',
    arminianismKeyPassages: ['Atos 7:51', 'Mateus 23:37', 'Lucas 7:30', 'Hebreus 3:7-8'],
    historicalContext: 'A questão nuclear é: a regeneração precede a fé (visão calvinista, onde a nova vida dada pelo Espírito capacita o pecador a crer) ou a fé em resposta à graça precede a regeneração (visão arminiana clássica)?'
  },
  {
    topic: '5. A Perseverança dos Cristãos',
    calvinismAcronym: 'P',
    calvinismTitle: 'Perseverança dos Santos (Segurança Eterna)',
    calvinismView: 'Todos aqueles que Deus eternamente elegeu, Cristo redimiu na cruz e o Espírito Santo regenerou com vida nova nunca cairão total ou finalmente do estado de graça, mas serão sustentados pela fidelidade e poder onipotente de Deus até o dia final (Jo 10:27-29; Rm 8:35-39; Fl 1:6; 1 Pe 1:5). A perseverança na fé e santidade não é obra da carne humana, mas o resultado infalível da intercessão sacerdotal contínua de Cristo e do penhor irrevogável do Espírito Santo.',
    calvinismKeyPassages: ['João 10:27-29', 'Romanos 8:38-39', 'Filipenses 1:6', '1 Pedro 1:5'],
    arminianismArticle: 'Artigo V',
    arminianismTitle: 'Perseverança Condicional / Advertência contra a Queda',
    arminianismView: 'Aqueles que estão unidos a Cristo pela fé salvadora viva recebem poder e graça abundante do Espírito Santo para vencer o pecado, o mundo e o diabo enquanto permanecerem em comunhão com Ele. Originalmente, os Remonstrantes em 1610 afirmaram que precisavam de mais estudo bíblico sobre se alguém podia apostatar da fé. Posteriormente, o arminianismo clássico ensinou que, embora nenhum poder externo possa arrebatar o crente de Cristo, o próprio crente pode, por desleixo contínuo e endurecimento deliberado do coração, abandonar a fé e naufragar espiritualmente (Hb 6:4-6; 10:26-29; 2 Pe 2:20-22).',
    arminianismKeyPassages: ['Hebreus 6:4-6', 'Hebreus 10:26-29', '2 Pedro 2:20-22', 'Colossenses 1:21-23'],
    historicalContext: 'O debate pastoral reflete duas ênfases bíblicas preciosas: o conforto insubstituível das promessas inabaláveis de Deus (Ênfase Calvinista) e as advertências bíblicas solenes e reais contra a complacência e mornidão espiritual (Ênfase Arminiana).'
  }
];

export const ECUMENICAL_CREEDS: EcumenicalCreed[] = [
  {
    id: 'credo-apostolico',
    title: 'O Credo dos Apóstolos',
    originalName: 'Symbolum Apostolicum',
    year: 'Forma primitiva c. 140 d.C. (Forma recepta c. 700 d.C.)',
    council: 'Origem no Antigo Credo Romano Baptismal',
    historicalOccasion: 'Usado como a confissão pública de fé dos novos convertidos no batismo cristão primitivo, afirmando a fé trinitária e refutando o docetismo e o gnosticismo.',
    keyThemes: ['Criação do mundo por Deus Pai', 'Encarnação, Morte, Ressurreição e Ascensão de Cristo', 'Igreja Santa e Universal', 'Ressurreição da carne'],
    fullTextPt: `Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra;
E em Jesus Cristo, seu único Filho, nosso Senhor;
O qual foi concebido por obra do Espírito Santo, nasceu da virgem Maria;
Padeceu sob o poder de Pôncio Pilatos, foi crucificado, morto e sepultado;
Desceu ao hades; ao terceiro dia ressurgiu dos mortos;
Subiu ao céu, e está assentado à destra de Deus Pai Todo-Poderoso;
Donde há de vir a julgar os vivos e os mortos.

Creio no Espírito Santo;
Na santa Igreja universal;
Na comunhão dos santos;
Na remissão dos pecados;
Na ressurreição do corpo;
E na vida eterna. Amém.`,
    latinOrGreekSnippet: 'Credo in Deum Patrem omnipotentem, Creatorem caeli et terrae...',
    theologicalLegacy: 'A oração e confissão batismal mais universalmente recitada em todas as tradições da Cristandade ocidental (católica, anglicana, luterana, reformada e metodista).'
  },
  {
    id: 'credo-niceno-constantinopolitano',
    title: 'O Credo Niceno-Constantinopolitano',
    originalName: 'Symbolum Nicaeno-Constantinopolitanum',
    year: '381 d.C.',
    council: 'I Concílio de Niceia (325) & I Concílio de Constantinopla (381)',
    historicalOccasion: 'Formulado para refutar a heresia ariana (que negava que o Filho fosse plenamente Deus) e a heresia macedoniana (que negava a divindade e personalidade do Espírito Santo).',
    keyThemes: ['Homoousios (Consubstancial ao Pai)', 'Monogenēs (Unigênito, gerado não criado)', 'Divindade do Espírito Santo que procede do Pai', 'Um só batismo'],
    fullTextPt: `Cremos em um só Deus, Pai Todo-Poderoso, Criador do céu e da terra, de todas as coisas visíveis e invisíveis.

E em um só Senhor Jesus Cristo, Filho unigênito de Deus, gerado do Pai antes de todos os séculos; Luz de Luz, verdadeiro Deus de verdadeiro Deus; gerado, não criado, consubstancial (homoousios) com o Pai; por meio de quem todas as coisas foram feitas. O qual, por amor de nós homens e para a nossa salvação, desceu dos céus e se encarnou pelo Espírito Santo e da virgem Maria, e se fez homem. E foi crucificado por nós sob Pôncio Pilatos, padeceu e foi sepultado; e ressuscitou ao terceiro dia, segundo as Escrituras; e subiu aos céus, e está assentado à destra do Pai. E de novo virá com glória para julgar os vivos e os mortos; e o seu reino não terá fim.

E no Espírito Santo, Senhor e Vivificador, que procede do Pai [e do Filho]; que com o Pai e o Filho é juntamente adorado e glorificado; que falou por meio dos profetas.

Em uma só Igreja santa, universal e apostólica.
Confessamos um só batismo para a remissão dos pecados.
E esperamos a ressurreição dos mortos e a vida do século vindouro. Amém.`,
    latinOrGreekSnippet: 'Πιστεύομεν εἰς ἕνα Θεόν, Πατέρα Παντοκράτορα, ποιητὴν οὐρανοῦ καὶ γῆς... / Credo in unum Deum...',
    theologicalLegacy: 'A confissão de fé mais importante da história da Igreja, mantida inalterada e venerada conjuntamente pela Ortodoxia Oriental, Catolicismo Romano e pelas igrejas da Reforma Protestante.'
  },
  {
    id: 'definicao-calcedonia',
    title: 'A Definição Cristológica de Calcedônia',
    originalName: 'Definitio Fidei Chalcedonensis',
    year: '451 d.C.',
    council: 'IV Concílio Ecumênico de Calcedônia',
    historicalOccasion: 'Convocado para responder aos desvios de Êutiques (Monofisismo: fusão das naturezas) e Nestório (divisão de Cristo em duas pessoas), protegendo a integridade da salvação.',
    keyThemes: ['União Hipostática', 'Uma só Pessoa (Prosopon / Hypostasis)', 'Duas naturezas perfeitas: divina e humana', 'As Quatro Negativas Calcedonianas: sem confusão, sem mudança, sem divisão, sem separação'],
    fullTextPt: `Fiéis aos santos Pais, todos nós, a uma só voz, ensinamos a confessar um único e mesmo Filho, nosso Senhor Jesus Cristo:

Perfeito em divindade e perfeito em humanidade; verdadeiramente Deus e verdadeiramente homem, composto de alma racional e de corpo; consubstancial com o Pai segundo a divindade, e consubstancial conosco segundo a humanidade, em tudo semelhante a nós, exceto no pecado (Hb 4:15); gerado do Pai antes de todos os séculos segundo a divindade, e, nestes últimos dias, por amor de nós e para a nossa salvação, nascido da virgem Maria, mãe de Deus (Theotokos), segundo a humanidade.

Um único e mesmo Cristo, Filho, Senhor, Unigênito, que deve ser reconhecido em DUAS NATUREZAS,
SEM CONFUSÃO (asynchytōs),
SEM MUDANÇA (atreptōs),
SEM DIVISÃO (adiairetōs),
SEM SEPARAÇÃO (achōristōs);
de tal modo que a distinção das naturezas de modo algum é anulada pela união, mas, antes, são preservadas as propriedades peculiares de cada natureza, concorrendo em uma só pessoa (prosōpon) e em uma só subsistência (hypostasis), não partido ou dividido em duas pessoas, mas um único e mesmo Filho, o Unigênito, Deus Verbo, o Senhor Jesus Cristo;

como desde o princípio os profetas anunciaram a seu respeito, e o próprio Senhor Jesus Cristo nos ensinou, e o símbolo dos santos Pais nos transmitiu.`,
    latinOrGreekSnippet: '...in duabus naturis inconfuse, immutabiliter, indivise, inseparabiliter agnoscendum...',
    theologicalLegacy: 'A fronteira e baliza eterna da ortodoxia cristológica. Garante que se Jesus não for plenamente Deus, não pode nos salvar; se não for plenamente Homem, não pode nos representar.'
  },
  {
    id: 'credo-atanasiano',
    title: 'O Credo Atanasiano',
    originalName: 'Symbolum Quicunque Vult',
    year: 'c. final do séc. V – VI d.C.',
    council: 'Atribuído historicamente a Santo Atanásio de Alexandria',
    historicalOccasion: 'Composto para expor com máxima precisão lógica a doutrina da Santíssima Trindade e a dupla natureza da Encarnação de Cristo contra as sutilezas do arianismo e sabelianismo.',
    keyThemes: ['Trindade na Unidade', 'Igualdade e Coeternidade das Pessoas', 'Não confusão das Pessoas nem divisão da Substância', 'Dupla Natureza em Uma só Pessoa'],
    fullTextPt: `Todo aquele que quiser ser salvo deve, antes de tudo, professar a fé universal.
Aquele que não a guardar íntegra e inviolada perecerá sem dúvida eternamente.

Ora, a fé universal é esta: que veneremos um só Deus na Trindade, e a Trindade na Unidade;
Não confundindo as Pessoas, nem dividindo a Substância.
Pois uma é a Pessoa do Pai, outra a do Filho, outra a do Espírito Santo;
Mas uma só é a divindade do Pai, do Filho e do Espírito Santo, igual a glória, coeterna a majestade.

Qual o Pai, tal o Filho, tal o Espírito Santo:
O Pai é incriado, o Filho é incriado, o Espírito Santo é incriado;
O Pai é incomensurável, o Filho é incomensurável, o Espírito Santo é incomensurável;
O Pai é eterno, o Filho é eterno, o Espírito Santo é eterno;
E, contudo, não há três eternos, mas um só eterno;
Assim como não há três incriados, nem três incomensuráveis, mas um só incriado e um só incomensurável.

Do mesmo modo, o Pai é onipotente, o Filho é onipotente, o Espírito Santo é onipotente;
E, contudo, não há três onipotentes, mas um só onipotente.
Assim o Pai é Deus, o Filho é Deus, o Espírito Santo é Deus;
E, contudo, não há três Deuses, mas um só Deus.

Assim o Pai é Senhor, o Filho é Senhor, o Espírito Santo é Senhor;
E, contudo, não há três Senhores, mas um só Senhor.
Porque, assim como a verdade cristã nos obriga a confessar cada Pessoa individualmente como Deus e Senhor,
Assim a religião universal nos proíbe dizer que há três Deuses ou três Senhores.

O Pai por ninguém foi feito, nem criado, nem gerado.
O Filho é somente do Pai; não feito, nem criado, mas gerado.
O Espírito Santo é do Pai e do Filho; não feito, nem criado, nem gerado, mas procedente.

Há, pois, um só Pai, não três Pais; um só Filho, não três Filhos; um só Espírito Santo, não três Espíritos Santos.
E nesta Trindade nada é anterior ou posterior, nada maior ou menor;
Mas todas as três Pessoas são coeternas e iguais entre si;
De sorte que em tudo, como já foi dito acima, deve ser venerada a Unidade na Trindade e a Trindade na Unidade.
Portanto, quem quiser ser salvo deve pensar assim da Trindade.

Além disso, é necessário para a salvação eterna crer com fidelidade também na Encarnação de nosso Senhor Jesus Cristo.
A fé reta consiste em crermos e confessarmos que nosso Senhor Jesus Cristo, Filho de Deus, é Deus e Homem:
É Deus, gerado da substância do Pai antes dos séculos; e é Homem, nascido no tempo da substância de sua mãe;
Perfeito Deus, perfeito Homem, composto de alma racional e carne humana;
Igual ao Pai segundo a divindade, menor que o Pai segundo a humanidade.

O qual, embora seja Deus e Homem, contudo não é dois, mas um só Cristo;
Um, porém, não por conversão da divindade em carne, mas pela assunção da humanidade em Deus;
Um absolutamente, não por confusão de substância, mas por unidade de Pessoa.
Pois assim como a alma racional e a carne são um só homem, assim Deus e o Homem são um só Cristo;
O qual padeceu pela nossa salvação, desceu à mansão dos mortos, ressuscitou ao terceiro dia,
Subiu aos céus, está sentado à direita do Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos.

Esta é a fé universal: quem não crer nela com fidelidade e firmeza não poderá ser salvo.`,
    latinOrGreekSnippet: 'Quicumque vult salvus esse, ante omnia opus est, ut teneat catholicam fidem. Quam nisi quisque integram inviolatamque servaverit, absque dubio in aeternum peribit...',
    theologicalLegacy: 'A mais rigorosa, majestosa e detalhada confissão dos dogmas trinitário e cristológico já produzida na história da Igreja, reverenciada por todas as confissões da Reforma e do Ocidente.'
  }
];

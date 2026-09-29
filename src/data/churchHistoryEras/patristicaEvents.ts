import { ChurchHistoryEvent } from '../../types';

export const patristicaEvents: ChurchHistoryEvent[] = [
  {
    id: 'martirio-policarpo',
    era: 'PATRISTICA',
    title: 'Martírio de Policarpo de Esmirna',
    year: 'c. 155 d.C.',
    location: 'Esmirna, Ásia Menor (atual Izmir, Turquia)',
    keyFigures: ['Policarpo de Esmirna', 'Discípulo do Apóstolo João', 'Procônsul Estácio Quadrado'],
    category: 'PERSEGUICAO',
    description: 'Aos 86 anos de idade, Policarpo, venerável bispo de Esmirna e elo vivo com o apóstolo João, foi capturado pelos soldados romanos e conduzido perante a multidão no estádio da cidade. Intimado pelo magistrado imperial a jurar pela fortuna de César e amaldiçoar a Cristo para salvar a própria vida, recusou-se com serenidade celestial, declarando a fidelidade irrevogável do seu Senhor.',
    historicalContextDetailed: 'Sob o principado de Antonino Pio, a adesão ao culto imperial romano funcionava como teste supremo de lealdade cívica. Os cristãos eram taxados pejorativamente de "ateus" (atheoi) por rejeitarem os deuses pagãos e os sacrifícios públicos. A execução de Policarpo ocorreu em meio ao clamor popular pagão que exigia a erradicação dos dissidentes religiosos que abalavam a pax romana.',
    theologicalDebate: {
      coreControversy: 'O senhorio universal exclusivo de Cristo versus a submissão idólatra ao culto imperial romano.',
      hereticalOrChallengingView: 'A imposição da religião civil romana: a queima de incenso ao gênio de César como exigência inegociável de conformidade estatal.',
      orthodoxFormulation: 'A teologia do martírio cristão primitivo (martyria): o sacrifício da própria vida terrena como suprema imitação da Paixão de Cristo e proclamação incontestável de que apenas Jesus é o verdadeiro Senhor (Kyrios).',
      dogmaticTerms: ['Kyrios Christos', 'Martyria', 'Atheoi (acusação pagã)']
    },
    primarySourceQuote: {
      text: 'Oitenta e seis anos o servi e Ele nunca me fez mal algum; como poderia eu blasfemar contra o meu Rei que me salvou? Tu me ameaças com o fogo que queima por uma hora e logo se apaga, mas ignoras o fogo do julgamento futuro e do castigo eterno reservado aos ímpios.',
      author: 'Policarpo de Esmirna',
      work: 'Martírio de Policarpo (Carta Encíclica da Igreja de Esmirna, cap. IX)'
    },
    historicalSignificance: 'Demonstrou a resiliência inquebrantável das comunidades cristãs primitivas perante o poder bélico de Roma, desarmando o cinismo imperial e inspirando gerações de cristãos perseguidos em todo o Império.',
    legacyPoints: [
      'Estabeleceu o modelo literário e espiritual dos relatos de martírio (Acta Martyrum), amplamente lidos nas reuniões comunitárias.',
      'Inspirou o célebre axioma apologético de Tertuliano: "O sangue dos mártires é a semente de novos cristãos" (Apologeticum).',
      'Preservou o testemunho apostólico joanino intacto na transição para a era dos apologistas e padres da Igreja.'
    ],
    scriptureReferences: ['Ap 2:8-10', 'Fp 1:20-21', 'Mt 10:28-33', '2Tm 4:6-8']
  },
  {
    id: 'ireneu-gnosticismo',
    era: 'PATRISTICA',
    title: 'Ireneu de Lião e a Defesa contra o Gnosticismo',
    year: 'c. 180 d.C.',
    location: 'Lião (Lugdunum), Gália (atual França)',
    keyFigures: ['Ireneu de Lião', 'Valentino', 'Marcião'],
    category: 'TEOLOGIA',
    description: 'Após os sangrentos massacres da comunidade cristã de Lião em 177 d.C., Ireneu assumiu o episcopado e redigiu a sua monumental refutação em cinco volumes, "Contra as Heresias" (Adversus Haereses). A obra desmantelou os labirintos mitológicos do gnosticismo e estabeleceu a unidade cósmica da revelação de Deus nas Sagradas Escrituras.',
    historicalContextDetailed: 'No final do século II, escolas gnósticas lideradas por pensadores carismáticos como Valentino e Basilides atraíam fiéis prometendo um "conhecimento secreto superior" (gnosis). Desprezavam o mundo físico como uma criação acidental e maligna de um demiurgo inferior, esvaziando a salvação da sua historicidade e corporalidade.',
    theologicalDebate: {
      coreControversy: 'A bondade da criação material e a realidade corpórea da Encarnação versus o dualismo radical gnóstico.',
      hereticalOrChallengingView: 'O dualismo gnóstico-marcionita: o mundo material é intrinsecamente corrompido, o Deus do AT é vingativo e inferior, e o Cristo celestial possuiu apenas um corpo aparente (Docetismo).',
      orthodoxFormulation: 'A Teologia da Recapitulação (Anakephalaiosis): o único Deus vivo, Criador dos céus e da terra, assumiu verdadeira carne humana em Jesus Cristo, o Novo Adão, desfazendo a desobediência original e redimindo a criação.',
      dogmaticTerms: ['Anakephalaiosis (Recapitulação)', 'Regula Fidei (Regra da Fé)', 'Docetismo', 'Demiurgo']
    },
    primarySourceQuote: {
      text: 'O Verbo de Deus, Jesus Cristo nosso Senhor, por causa do seu amor infinito e soberano, fez-se aquilo que nós somos, a fim de fazer de nós aquilo que Ele mesmo é em plenitude.',
      author: 'Santo Ireneu de Lião',
      work: 'Contra as Heresias (Adversus Haereses), Prefácio do Livro V'
    },
    historicalSignificance: 'Articulou o primeiro sistema coerente de teologia dogmática católica e bíblica, fixando o princípio da "Regra de Fé" como norma para interpretar corretamente as Escrituras apostólicas.',
    legacyPoints: [
      'Cimentou a autoridade inseparável do Antigo e do Novo Testamento como um único cânon contínuo da aliança divina.',
      'Defendeu a ressurreição física da carne contra o idealismo platônico e esotérico.',
      'Consagrou a teologia cristocêntrica da recapitulação que influenciou profundamente tanto os Padres Gregos quanto os Reformadores.'
    ],
    scriptureReferences: ['Ef 1:9-10', 'Jo 1:14', '1Jo 4:1-3', 'Cl 1:15-20', 'Rm 5:12-19']
  },
  {
    id: 'edito-milao',
    era: 'PATRISTICA',
    title: 'O Édito de Milão e o Fim das Perseguições Romanas',
    year: '313 d.C.',
    location: 'Mediolano (atual Milão, Itália)',
    keyFigures: ['Constantino I (O Grande)', 'Licínio', 'Lactâncio'],
    category: 'REFORMA',
    description: 'Após séculos de marginalidade civil e o terrível expurgo sob a Grande Perseguição de Diocleciano (303–311), os imperadores Constantino e Licínio reuniram-se em Milão e promulgaram um decreto conjunto concedendo liberdade religiosa universal a todos os súditos e ordenando a imediata restituição das basílicas e patrimônios eclesiásticos espoliados.',
    historicalContextDetailed: 'O Império Romano vivia a transição turbulenta da Tetrarquia. A vitória de Constantino na Batalha da Ponte Mílvia (312), associada ao estandarte cristão (Labarum), transformou a política imperial. O Édito não impôs o cristianismo como religião oficial exclusiva, mas concedeu plena paridade de direitos jurídicos e imunidade ao clero.',
    theologicalDebate: {
      coreControversy: 'A liberdade de consciência no culto a Deus versus a coerção estatal politeísta; os desafios teológicos da aliança entre a Igreja e o Estado imperial.',
      hereticalOrChallengingView: 'A doutrina imperial pagã de que a prosperidade de Roma dependia do sacrifício universal forçado aos deuses tradicionais.',
      orthodoxFormulation: 'A proclamação da liberdade do ato de fé: Deus não aceita adoração coercitiva pela espada humana; a missão cristã desenvolve-se pelo testemunho, persuasão e santidade.',
      dogmaticTerms: ['Religio Licita', 'Libertas Religionis', 'Paz Constantiniana']
    },
    primarySourceQuote: {
      text: 'Julgamos ser justo e razoável conceder aos cristãos e a todos os homens a faculdade livre de seguir a religião que cada um quiser, de modo que toda divindade que resida no céu nos seja propícia e benévola a nós e a quantos vivem sob o nosso governo.',
      author: 'Constantino I e Licínio',
      work: 'Édito de Tolerância Religiosa de Milão (registrado por Lactâncio em De Mortibus Persecutorum, cap. 48)'
    },
    historicalSignificance: 'Ponto de inflexão decisivo da civilização ocidental, transferindo a Igreja das catacumbas secretas para o centro da vida cívica, arquitetônica, jurídica e acadêmica do mundo mediterrâneo.',
    legacyPoints: [
      'Encerrou definitivamente mais de dois séculos de martírios esporádicos e perseguições sangrentas promovidas pelo Estado romano.',
      'Propiciou as condições estruturais para a convocação e realização dos grandes Concílios Ecumênicos universais.',
      'Inaugurou uma nova era de desafios morais e pastorais, gerando tensões entre o poder temporal dos governantes e a fidelidade espiritual da Igreja.'
    ],
    scriptureReferences: ['1Tm 2:1-4', 'Rm 13:1-7', 'At 5:29', 'Sl 2:10-12']
  },
  {
    id: 'concilio-niceia',
    era: 'PATRISTICA',
    title: 'I Concílio Ecumênico de Niceia',
    year: '325 d.C.',
    location: 'Niceia, Bitínia (atual Iznik, Turquia)',
    keyFigures: ['Atanásio de Alexandria', 'Ário de Alexandria', 'Alexandre de Alexandria', 'Ósio de Córdova', 'Constantino I'],
    category: 'CONCILIO',
    description: 'Mais de 300 bispos de toda a Cristandade, muitos trazendo no corpo as cicatrizes indeléveis das perseguições imperiais, reuniram-se para deliberar sobre a crise ariana. Ário sustentava que o Verbo era uma criatura gerada a partir do nada. Sob a liderança teológica implacável de Atanásio, o Concílio confessou que o Filho é coeterno e consubstancial (Homoousios) ao Pai.',
    historicalContextDetailed: 'O presbítero alexandrino Ário havia composto versos populares para difundir seu ensino: "Houve um tempo em que o Filho não existia". A controvérsia ameaçava fraturar a Igreja no Egito, Síria e Ásia Menor, obrigando o imperador Constantino a financiar e sediar a primeira assembleia episcopal universal representativa.',
    theologicalDebate: {
      coreControversy: 'A deidade ontológica do Filho: Cristo é uma criatura criada e mutável ou é o próprio Deus eterno em substância com o Pai?',
      hereticalOrChallengingView: 'Arianismo: o Filho é a primeira e mais nobre das criaturas de Deus, através de quem o universo foi feito, mas Ele não partilha a essência eterna do Pai.',
      orthodoxFormulation: 'Ortodoxia Nicena: o Filho é "Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial (Homoousios) ao Pai".',
      dogmaticTerms: ['Homoousios (Consubstancial)', 'Homoiousios (de substância semelhante - partido semiariano)', 'Monogenēs (Unigênito)', 'Subordinação Ontológica']
    },
    primarySourceQuote: {
      text: 'Se o Filho fosse uma criatura, nós não poderíamos ser redimidos por Ele; pois nenhuma criatura finita possui o poder de salvar ou unir a humanidade a Deus. Aquele que nos une a Deus deve Ele próprio ser plenamente Deus em essência.',
      author: 'Santo Atanásio de Alexandria',
      work: 'Contra os Arianos (Orationes contra Arianos, II.67)'
    },
    historicalSignificance: 'Fundamento inegociável da ortodoxia trinitária cristã; demonstrou que a doutrina da divindade de Cristo é a salvaguarda absoluta da eficácia e suficiência da redenção humana.',
    legacyPoints: [
      'Promulgou o primeiro símbolo de fé universal da Igreja cristã unida (o núcleo do Credo Niceno).',
      'Adotou um termo filosófico grego (Homoousios) para blindar a exegese bíblica contra sutilezas e ambiguidades heréticas.',
      'Definiu a fórmula uniforme para o cálculo do Domingo da Páscoa na Cristandade.'
    ],
    scriptureReferences: ['Jo 1:1-3', 'Jo 10:30', 'Cl 1:15-17', 'Hb 1:1-4', 'Fp 2:5-11'],
    relatedCreedId: 'credo-niceno-constantinopolitano',
    relatedCouncilId: 'nicea-325'
  },
  {
    id: 'carta-atanasio-canon',
    era: 'PATRISTICA',
    title: 'A 39ª Carta Festal de Atanásio e a Fixação do Cânon do NT',
    year: '367 d.C.',
    location: 'Alexandria, Egito',
    keyFigures: ['Atanásio de Alexandria'],
    category: 'TEOLOGIA',
    description: 'Em sua trigésima nona carta pastoral anual de Páscoa, Atanásio de Alexandria enumerou pela primeira vez na história cristã a lista exata dos 27 livros inspirados que compõem o Novo Testamento, do Evangelho de Mateus ao Apocalipse de João, advertindo severamente os fiéis a não admitirem livros apócrifos forjados por hereges.',
    historicalContextDetailed: 'Durante os três primeiros séculos, embora houvesse amplo consenso sobre os Evangelhos e epístolas paulinas, livros como Hebreus, Tiago, 2 Pedro e Apocalipse enfrentavam dúvidas locais, enquanto textos piedosos como o Pastor de Hermas e a Didaquê eram lidos devocionalmente. O avanço de seitas apócrifas exigia uma delimitação clara da regra da fé escrita.',
    theologicalDebate: {
      coreControversy: 'A demarcação formal das fronteiras canônicas da Escritura Sagrada divinamente inspirada e autoautenticada.',
      hereticalOrChallengingView: 'A proliferação de evangelhos e apocalipses apócrifos gnósticos que pretendiam autoridade apostólica espúria para desviar as igrejas.',
      orthodoxFormulation: 'O reconhecimento corporativo do Cânon fechado: a Igreja não cria a autoridade das Escrituras, mas reconhece reverentemente os livros nos quais o Espírito Santo imprimiu o Seu testemunho apostólico verídico.',
      dogmaticTerms: ['Kanon (Vara de Medir / Regra)', 'Theopneustos (Inspirado por Deus)', 'Homologoumena vs. Antilegomena']
    },
    primarySourceQuote: {
      text: 'Nestes vinte e sete livros estão contidas as fontes da salvação, para que aquele que tem sede possa saciar-se com as palavras divinas que neles residem. Nestes somente a doutrina da piedade é proclamada. Que ninguém ouse acrescentar nada a eles, e que nada deles seja retirado.',
      author: 'Santo Atanásio de Alexandria',
      work: '39ª Carta Festal de Páscoa (367 d.C.)'
    },
    historicalSignificance: 'Fixou para a posteridade a lista idêntica dos 27 livros do Novo Testamento aceita unanimemente por Católicos, Ortodoxos e todas as denominações Protestantes.',
    legacyPoints: [
      'Foi imediatamente acolhida e ratificada nos concílios regionais ocidentais de Hipona (393 d.C.) e Cartago (397 d.C.).',
      'Protegeu a Igreja contra fábulas e interpolações esotéricas ao estabelecer a regra apostólica final da revelação divina.',
      'Serviu de guia para São Jerônimo ao estruturar a tradução bíblica latina oficial (Vulgata).'
    ],
    scriptureReferences: ['2Tm 3:16-17', '2Pe 1:20-21', 'Ap 22:18-19', 'Gl 1:8-9']
  },
  {
    id: 'concilio-constantinopla-381',
    era: 'PATRISTICA',
    title: 'I Concílio Ecumênico de Constantinopla',
    year: '381 d.C.',
    location: 'Constantinopla (atual Istambul, Turquia)',
    keyFigures: ['Gregório de Nazianzo', 'Basílio de Cesareia', 'Gregório de Nissa (Padres Capadócios)', 'Teodósio I'],
    category: 'CONCILIO',
    description: 'Convocado pelo imperador Teodósio I, 150 bispos ortodoxos reuniram-se para concluir a formulação trinitária de Niceia. O concílio condenou a heresia macedoniana (pneumatômacos), que rebaixava o Espírito Santo à condição de criatura, e o apolinarismo, que negava a alma humana racional de Cristo.',
    historicalContextDetailed: 'Mesmo após Niceia (325), o arianismo ressurgira com apoio de imperadores arianizantes como Constâncio II e Valente, exilando bispos ortodoxos. Paralelamente, surgiram grupos afirmando que o Espírito Santo era apenas uma força divina. A clarividência dos Padres Capadócios forneceu a gramática teológica que unificou o Oriente e o Ocidente.',
    theologicalDebate: {
      coreControversy: 'A plena divindade e personalidade do Espírito Santo e a integridade da natureza humana assumida por Cristo.',
      hereticalOrChallengingView: 'Macedonianismo: o Espírito Santo é uma força ou ministro criado subordinado ao Pai e ao Filho; Apolinarismo: o Verbo divino substituiu a mente e alma humana em Jesus.',
      orthodoxFormulation: 'A síntese trinitária clássica: Deus é Uma só Essência (Ousia) em Três Pessoas (Hypostaseis). O Espírito Santo é Senhor, Vivificador e digno da mesma adoração e glória do Pai e do Filho. O que Cristo não assumiu, não foi curado.',
      dogmaticTerms: ['Mia Ousia, Treis Hypostaseis', 'Pneumatômacos (Combatentes do Espírito)', 'Kyrios kai Zōopoion (Senhor e Vivificador)', 'Perichoresis (Circumincessão)']
    },
    primarySourceQuote: {
      text: 'O Espírito Santo é verdadeiramente Deus com o Pai e o Filho. Se Ele não for divino em substância, como poderá Ele nos deificar no batismo, como poderá Ele habitar em nós como templo sagrado e como poderá Ele nos ressuscitar no último dia?',
      author: 'São Gregório de Nazianzo (O Teólogo)',
      work: 'Orações Teológicas (Oratio 31, Sobre o Espírito Santo)'
    },
    historicalSignificance: 'Produziu a redação final do Credo Niceno-Constantinopolitano, o confessionário litúrgico e doutrinário mais importante, ecumênico e universal da história da Cristandade.',
    legacyPoints: [
      'Estabeleceu a pneumatologia bíblica definitiva professada por Católicos, Ortodoxos, Reformados e Luteranos.',
      'Refutou o apolinarismo, garantindo que Cristo assumiu mente, vontade e afeto humanos plenos para redimir todo o ser do homem.',
      'Completou a derrota eclesiástica final do arianismo no Império Romano do Oriente.'
    ],
    scriptureReferences: ['Mt 28:19', 'Jo 14:16-17', 'Jo 15:26', '1Co 2:10-12', '2Co 13:14'],
    relatedCreedId: 'credo-niceno-constantinopolitano',
    relatedCouncilId: 'constantinople-381'
  },
  {
    id: 'agostinho-pelagio',
    era: 'PATRISTICA',
    title: 'Agostinho de Hipona e a Controvérsia Pelagiana',
    year: '412 – 430 d.C.',
    location: 'Hipona, Norte da África (atual Annaba, Argélia) e Roma',
    keyFigures: ['Agostinho de Hipona', 'Pelágio (Monge Britânico)', 'Celéstio', 'Julião de Eclano'],
    category: 'TEOLOGIA',
    description: 'Pelágio ensinava em Roma que o pecado de Adão foi apenas um mau exemplo exterior, mantendo a vontade humana livre e plenamente capaz de alcançar a perfeição moral e a salvação sem a necessidade de uma regeneração interior sobrenatural. Agostinho ergueu-se com profundidade bíblica incomparável para demonstrar a escravidão do pecado original e a necessidade absoluta e soberana da graça eficaz.',
    historicalContextDetailed: 'Após o saque de Roma pelos visigodos de Alarico em 410 d.C., Pelágio e seus seguidores refugiaram-se no Norte da África. O rigor moralista pelagiano seduzia cristãos cultos, mas feria mortalmente a doutrina do batismo infantil para remissão de pecados e o sentido da oração cristã pela graça.',
    theologicalDebate: {
      coreControversy: 'A depravação radical da natureza humana e a monergia da graça divina versus a autonomia moralista do livre-arbítrio.',
      hereticalOrChallengingView: 'Pelagianismo: a natureza humana não herda culpa ou corrupção de Adão; o livre-arbítrio permanece imaculado e capaz de cumprir a lei divina por mérito pessoal sem graça interior.',
      orthodoxFormulation: 'A teologia agostiniana da graça: pelo pecado original, toda a raça humana tornou-se uma massa condenada (massa damnata), cuja vontade está escravizada pelo pecado (non posse non peccare); a salvação provém exclusivamente da graça soberana, regeneradora e eficaz outorgada por Deus.',
      dogmaticTerms: ['Peccatum Originale', 'Gratia Irresistibilis', 'Massa Damnata', 'Non posse non peccare', 'Monergismo']
    },
    primarySourceQuote: {
      text: 'Dá-me o que me ordenas, e ordena-me o que quiseres! Sem a tua graça curadora, a vontade humana é impotente para escolher o bem verdadeiro. Pois não é o livre-arbítrio que torna a graça eficaz, mas a graça salvadora que verdadeiramente liberta o arbítrio humano.',
      author: 'Santo Agostinho de Hipona',
      work: 'Confissões (Livro X.29) e Do Espírito e a Letra (De Spiritu et Littera)'
    },
    historicalSignificance: 'Configurou toda a soteriologia ocidental sobre o pecado, a graça e a justificação, tornando-se a matriz teológica fundamental retomada no século XVI pelos reformadores Martinho Lutero e João Calvino.',
    legacyPoints: [
      'Foi oficialmente confirmada e ratificada pelo Concílio de Cartago (418 d.C.) e pelo Concílio Ecumênico de Éfeso (431 d.C.).',
      'Fez da graça soberana de Deus o alicerce exclusivo de qualquer consolo e confiança pastoral do cristão diante da morte e do juízo.',
      'Influenciou decisivamente o Concílio de Orange (529 d.C.), que condenou o semipelagianismo e reafirmou a graça preveniente.'
    ],
    scriptureReferences: ['Rm 3:9-20', 'Rm 5:12-21', 'Ef 2:1-10', 'Jo 6:44', 'Sl 51:5']
  },
  {
    id: 'concilio-calcedonia',
    era: 'PATRISTICA',
    title: 'O Concílio de Calcedônia e a Definição Cristológica',
    year: '451 d.C.',
    location: 'Calcedônia, Ásia Menor (atual Kadıköy, Istambul, Turquia)',
    keyFigures: ['Papa Leão I (O Grande)', 'Êutiques de Constantinopla', 'Dioscoro de Alexandria', 'Imperatriz Pulquéria', 'Imperador Marciano'],
    category: 'CONCILIO',
    description: 'Mais de 500 bispos reuniram-se para solucionar a grave fratura cristológica do Oriente. Êutiques ensinava que após a união encarnada a humanidade de Cristo fora absorvida na sua divindade como uma gota de vinagre no oceano (Monofisismo). Inspirado no célebre Tomo Dogmático enviado pelo Papa Leão I de Roma, o Concílio formulou a clássica confissão das Duas Naturezas em Uma Só Pessoa.',
    historicalContextDetailed: 'O chamado "Latrocínio de Éfeso" (449 d.C.) havia aprovado o monofisismo sob coação armada de soldados e monges fanáticos de Dioscoro. Com a ascensão de Marciano e Pulquéria, um concílio geral transparente foi convocado em frente a Constantinopla para reexaminar as Escrituras e a fé patrística.',
    theologicalDebate: {
      coreControversy: 'Como a perfeita divindade e a perfeita humanidade subsistem em Jesus Cristo sem comprometer nem a Sua unidade pessoal nem as Suas naturezas.',
      hereticalOrChallengingView: 'Monofisismo (Êutiques): Cristo possui apenas uma natureza após a Encarnação (fusão/absorção); Nestorianismo: divisão moral de Cristo em duas pessoas e dois sujeitos autônomos.',
      orthodoxFormulation: 'A União Hipostática: Cristo é uma só Pessoa (Prosopon/Hypostasis) subsistindo em Duas Naturezas perfeitas (divina e humana), unidas "sem confusão, sem mudança, sem divisão, sem separação" (as Quatro Negativas de Calcedônia).',
      dogmaticTerms: ['União Hipostática', 'Asynchytōs (Sem Confusão)', 'Atreptōs (Sem Mudança)', 'Adiairetōs (Sem Divisão)', 'Achōristōs (Sem Separação)', 'Communicatio Idiomatum']
    },
    primarySourceQuote: {
      text: 'Um e o mesmo Cristo, Filho, Senhor, Unigênito, que deve ser reconhecido em duas naturezas, sem confusão, sem mudança, sem divisão, sem separação; de modo algum a distinção das naturezas sendo suprimida pela união, mas antes sendo preservadas as propriedades peculiares de cada uma.',
      author: 'Padres do IV Concílio Ecumênico',
      work: 'Definição Dogmática de Calcedônia (Definitio Fidei Chalcedonensis, 451 d.C.)'
    },
    historicalSignificance: 'A pedra angular da cristologia da Igreja universal. Garante que se Cristo não for verdadeiro Deus, Ele não pode nos reconciliar com o Pai; se não for verdadeiro homem, Ele não pode nos representar perante a justiça divina.',
    legacyPoints: [
      'Proporcionou a baliza hermenêutica cristológica adotada pelas tradições Católica, Ortodoxa, Luterana, Reformada e Anglicana.',
      'Provocou o afastamento das Igrejas Ortodoxas Orientais Não-Calcedonianas (Coptas, Armênias, Siríacas e Etíopes) que preferiram a fórmula miafisista ciriliana.',
      'Salvaguardou a integridade dos Evangelhos e as aflições genuínas da agonia e morte vicária do Homem-Deus na cruz.'
    ],
    scriptureReferences: ['Jo 1:14', 'Fp 2:6-8', 'Cl 2:9', '1Tm 2:5', 'Hb 2:14-18', 'Hb 4:15'],
    relatedCreedId: 'definicao-calcedonia',
    relatedCouncilId: 'chalcedon-451'
  }
];

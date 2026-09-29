import { TheologicalGlossaryTerm } from '../types';

export const theologicalGlossaryData: TheologicalGlossaryTerm[] = [
  {
    id: 'justificacao',
    term: 'Justificação',
    category: 'Salvação',
    originalLanguage: {
      word: 'δικαιόω',
      language: 'Grego',
      transliteration: 'dikaioō',
      literalMeaning: 'declarar justo, proferir veredito de absolvição'
    },
    overview: 'A raiz do debate soteriológico ocidental: trata-se de um veredito jurídico imputado ou de uma transformação moral ontológica interior?',
    catholicPerspective: {
      definition: 'Infusa e transformadora (justum facere). Não é apenas o perdão dos pecados, mas a renovação e santificação do homem interior pela graça recebida nos sacramentos. A fé precisa estar revestida da caridade para justificar.',
      primarySource: 'Concílio de Trento, Sessão VI, Decreto sobre a Justificação, Cap. VII'
    },
    protestantPerspective: {
      definition: 'Forense e imputada. Deus pronuncia o pecador perdoado e revestido da perfeita justiça de Cristo exclusivamente pela fé (Sola Fide). As boas obras são o fruto e a evidência necessária dessa declaração, nunca o seu mérito ou causa.',
      primarySource: 'Confissão de Fé de Westminster, Cap. XI; Artigos de Esmalcalde, Parte II, Art. I'
    },
    orthodoxPerspective: {
      definition: 'Compreendida dentro da Theosis (divinização). Evita as formulações puramente jurídicas ocidentais, encarando a salvação como união terapêutica contínua do crente com as energias divinas incriadas de Deus.',
      primarySource: 'Confissão de Dositeu (1672), Decreto XIII'
    },
    relatedVerses: ['Rm 3:28', 'Rm 5:1', 'Tg 2:24', 'Gl 2:16']
  },
  {
    id: 'graca',
    term: 'Graça',
    category: 'Salvação',
    originalLanguage: {
      word: 'χάρις',
      language: 'Grego',
      transliteration: 'charis',
      literalMeaning: 'favor imerecido, benevolência afetuosa'
    },
    overview: 'Enquanto no protestantismo clássico a graça é a atitude de favor imerecido de Deus ao pecador, na escolástica católica ela é também concebida como substância/qualidade santificante criada e infundida na alma.',
    catholicPerspective: {
      definition: 'Graça Santificante (habitual). Um dom sobrenatural e gratuito de Deus, infundido pelo Espírito Santo na alma através dos sacramentos para curá-la do pecado e torná-la participante da vida divina.',
      primarySource: 'Catecismo da Igreja Católica, §1996–§2000'
    },
    protestantPerspective: {
      definition: 'Favor divino imerecido e irrevogável. A atitude misericordiosa de Deus em Cristo para com o indigno (Sola Gratia). Não é uma substância transferível administrada por ritos, mas a livre iniciativa e misericórdia do Redentor.',
      primarySource: 'Institutas da Religião Cristã (Calvino), Livro III, Cap. XI'
    },
    orthodoxPerspective: {
      definition: 'As Energias Incriadas de Deus. A graça não é uma entidade criada intermediária; é o próprio Deus comunicando-se e concedendo comunhão com Sua vida incriada sem jamais dissolver Sua Essência transcendental.',
      primarySource: 'São Gregório Palamas, Tríades em Defesa dos Santos Hesicastas'
    },
    relatedVerses: ['Ef 2:8-9', 'Rm 11:6', '2Pe 1:4']
  },
  {
    id: 'latria-dulia',
    term: 'Latria vs. Dulia / Hiperdulia',
    category: 'Eclesiologia e Santos',
    originalLanguage: {
      word: 'λατρεία / δουλεία',
      language: 'Grego',
      transliteration: 'latreia / douleia',
      literalMeaning: 'adoração/serviço cúltico sacrificial vs. honra/servidão e deferência'
    },
    overview: 'Distinção crucial utilizada no cristianismo oriental e católico para diferenciar o culto reservado estritamente à divindade da veneração aos santos.',
    catholicPerspective: {
      definition: 'Latria é a adoração devida unicamente à Santíssima Trindade. Dulia é a veneração e respeito prestados aos santos como reflexos da glória divina. Hiperdulia é uma veneração de ordem eminente e especial reservada à Virgem Maria por sua maternidade divina.',
      primarySource: 'Santo Tomás de Aquino, Suma Teológica, II-II, q. 103; Concílio Vaticano II, Lumen Gentium §66'
    },
    protestantPerspective: {
      definition: 'Rejeição da distinção prática. Qualquer ato de oração, súplica cúltica, incensação ou prostração diante de figuras/estátuas na esfera da fé é considerado culto religioso que pertence unicamente a Deus (Solus Christus / Soli Deo Gloria).',
      primarySource: 'Segunda Confissão Helvética, Cap. V; Artigos de Esmalcalde, Parte II, Art. II'
    },
    orthodoxPerspective: {
      definition: 'Proskynesis (veneração honorífica) aos Santos Ícones e santos, transferindo-se a honra ao protótipo; e Latria (adoração exclusiva) reservada estritamente à Essência divina da Trindade.',
      primarySource: 'Concílio de Nicéia II (787 d.C.); São João Damasceno, Tratado sobre as Imagens Sagradas'
    },
    relatedVerses: ['Êx 20:4-5', 'Mt 4:10', '1Tm 2:5', 'Hb 12:1']
  },
  {
    id: 'theosis',
    term: 'Theosis (Divinização / Deificação)',
    category: 'Salvação',
    originalLanguage: {
      word: 'θέωσις',
      language: 'Grego',
      transliteration: 'theōsis',
      literalMeaning: 'tornar-se divino, divinização, deificação'
    },
    overview: 'O conceito soteriológico basilar do Oriente cristão: o homem foi criado para participar da glória e vida incriada de Deus através de Cristo no Espírito Santo.',
    catholicPerspective: {
      definition: 'Participação na natureza divina pela Graça Santificante e pela Visão Beatífica. A alma humana contempla a essência divina diretamente no céu pelo Lumen Gloriae, conservando sua distinção ontológica de criatura.',
      primarySource: 'Catecismo da Igreja Católica §460; Santo Tomás de Aquino, Summa Theologiae I, q. 12'
    },
    protestantPerspective: {
      definition: 'Geralmente articulada como "União com Cristo" (Unio Cum Christo) e Santificação Progressiva. Rejeita qualquer terminologia que possa sugerir divinização ontológica do crente ou fusão com Deus.',
      primarySource: 'João Calvino, Institutas da Religião Cristã, Livro III, Cap. I; Confissão de Westminster XIII'
    },
    orthodoxPerspective: {
      definition: 'O centro absoluto da soteriologia: "Deus se fez homem para que o homem se tornasse deus" (Santo Atanásio). O ser humano participa real e eternamente das Energias Divinas Incriadas, jamais da Essência incognoscível de Deus.',
      primarySource: 'Santo Atanásio, Da Encarnação do Verbo 54:3; São Gregório Palamas, Tríades'
    },
    relatedVerses: ['2Pe 1:4', 'Sl 82:6', 'Jo 10:34-36', '1Jo 3:2']
  },
  {
    id: 'filioque',
    term: 'Cláusula Filioque',
    category: 'Autoridade',
    originalLanguage: {
      word: 'Filioque',
      language: 'Latim',
      transliteration: 'fili-o-que',
      literalMeaning: 'e do Filho'
    },
    overview: 'Adição ocidental ao Credo Niceno-Constantinopolitano sobre a procedência eterna do Espírito Santo, pivô teológico do Cisma de 1054.',
    catholicPerspective: {
      definition: 'O Espírito Santo procede eternamente do Pai e do Filho (Filioque) como de um só princípio e por uma única espiração, expressando a perfeita consubstancialidade e amor mútuo entre o Pai e o Filho.',
      primarySource: 'Concílio de Florença (1439), Bula Laetentur Caeli; CIC §246-248'
    },
    protestantPerspective: {
      definition: 'A maioria dos reformadores históricos manteve o Filioque por herança do Credo dos Apóstolos e de Atanásio, embora os teólogos bíblicos contemporâneos reconheçam a irregularidade histórica de sua inserção unilateral sem concílio ecumênico.',
      primarySource: 'Confissão de Augsburgo Art. I; Confissão de Fé de Westminster Cap. II, §3'
    },
    orthodoxPerspective: {
      definition: 'Rejeição categórica. O Pai é a única fonte, causa e monarquia (Monarchia Patris) da Divindade. O Espírito procede unicamente do Pai (conforme João 15:26), embora seja enviado no tempo pelo Filho.',
      primarySource: 'São Fócio, Mistagogia do Espírito Santo; Concílio de Constantinopla (879-880)'
    },
    relatedVerses: ['Jo 15:26', 'Jo 14:26', 'Rm 8:9', 'Gl 4:6']
  },
  {
    id: 'paradosis',
    term: 'Paradosis (Tradição Apostólica)',
    category: 'Autoridade',
    originalLanguage: {
      word: 'παράδοσις',
      language: 'Grego',
      transliteration: 'paradosis',
      literalMeaning: 'entrega, transmissão, tradição que passa de mão em mão'
    },
    overview: 'O debate sobre se a revelação divina está contida exclusivamente nas Escrituras ou se subsiste igualmente na Tradição viva transmitida pela Igreja.',
    catholicPerspective: {
      definition: 'Sagrada Escritura e Sagrada Tradição formam um único depósito sagrado da palavra de Deus, interpretado autenticamente pelo Magistério vivo da Igreja guiado pelo Espírito Santo.',
      primarySource: 'Concílio Vaticano II, Constituição Dogmática Dei Verbum §9-10'
    },
    protestantPerspective: {
      definition: 'Sola Scriptura. A Escritura é a única regra infalível de fé e prática (Norma Normans). As tradições históricas da igreja são respeitadas apenas enquanto sujeitas e conformes ao texto bíblico (Norma Normata).',
      primarySource: 'Segunda Confissão Helvética Cap. II; Confissão Belga Art. VII'
    },
    orthodoxPerspective: {
      definition: 'A Tradição Santa é a própria vida contínua da Igreja no Espírito Santo. A Escritura não é exterior à Tradição, mas é o seu cume escrito e testemunho inerrante fixado pelos Santos Padres nos Concílios Ecumênicos.',
      primarySource: 'São Vicente de Lérins, Commonitórium; São Basílio Magno, Sobre o Espírito Santo 27:66'
    },
    relatedVerses: ['2Ts 2:15', '1Co 11:2', '2Tm 2:2', 'Mc 7:8-9']
  },
  {
    id: 'epiclese',
    term: 'Epíclese',
    category: 'Sacramentos e Liturgia',
    originalLanguage: {
      word: 'ἐπίκλησις',
      language: 'Grego',
      transliteration: 'epiklēsis',
      literalMeaning: 'invocação, chamado sobre'
    },
    overview: 'A oração que invoca a descida do Espírito Santo sobre os dons eucarísticos (pão e vinho) e sobre a assembleia dos fiéis.',
    catholicPerspective: {
      definition: 'Embora a Oração Eucarística inclua a epíclese antes e depois, a transubstanciação opera-se formalmente no instante em que o sacerdote pronuncia as Palavras da Instituição ("Isto é o meu corpo").',
      primarySource: 'Catecismo da Igreja Católica §1352-1353; Santo Tomás de Aquino, S.Th. III, q. 78'
    },
    protestantPerspective: {
      definition: 'Varia entre as tradições: para os luteranos, a eficácia está nas Palavras de Instituição de Cristo; para os reformados calvinistas, o Espírito Santo eleva espiritualmente o coração dos crentes ao céu durante a Ceia.',
      primarySource: 'Institutas da Religião Cristã IV, XVII; Livro de Concórdia (Fórmula de Concórdia VII)'
    },
    orthodoxPerspective: {
      definition: 'A consagração e mudança mística do pão e do vinho no Corpo e Sangue de Cristo culmina com a solene Epíclese da Divina Liturgia, onde toda a Trindade atua pelo Espírito invocado pelo povo e pelo clero.',
      primarySource: 'Divina Liturgia de São João Crisóstomo; São Cirilo de Jerusalém, Catequeses Mistagógicas V'
    },
    relatedVerses: ['Lc 22:19-20', '1Co 10:16', '1Co 11:24-25']
  },
  {
    id: 'sacramentum-mysterion',
    term: 'Sacramento vs. Mistério',
    category: 'Sacramentos e Liturgia',
    originalLanguage: {
      word: 'μυστήριον / sacramentum',
      language: 'Grego',
      transliteration: 'mysterion / sacramentum',
      literalMeaning: 'segredo divino revelado vs. juramento militar sagrado / garantia legal'
    },
    overview: 'A conceptualização dos atos sagrados da Igreja: como ritos eficazes juridicamente delimitados ou como mistérios insondáveis da graça divina.',
    catholicPerspective: {
      definition: 'Sete Sacramentos instituídos por Cristo, que conferem a graça que significam "ex opere operato" (pela própria ação realizada), independentemente do mérito moral do ministro.',
      primarySource: 'Concílio de Trento, Sessão VII, Decretos sobre os Sacramentos'
    },
    protestantPerspective: {
      definition: 'Apenas dois Sacramentos instituídos explicitamente por Cristo no Evangelho: Batismo e Santa Ceia. São sinais e selos visíveis da graça invisível, ineficazes sem a fé salvífica do recipiente.',
      primarySource: '39 Artigos de Religião, Art. XXV; Confissão de Augsburgo Art. XIII'
    },
    orthodoxPerspective: {
      definition: 'Santos Mistérios. Embora reconheça tradicionalmente os sete principais, a Ortodoxia não limita a ação sacramental a uma contagem estrita, vendo toda a vida e criação como mistério de graça redimida em Cristo.',
      primarySource: 'Confissão Ortodoxa de Pedro Mogila (1640); Alexander Schmemann, Para a Vida do Mundo'
    },
    relatedVerses: ['Ef 5:32', 'Mt 28:19', '1Co 11:23-26']
  },
  {
    id: 'metanoia-poenitentia',
    term: 'Metanoia vs. Penitência',
    category: 'Salvação',
    originalLanguage: {
      word: 'μετάνοια / poenitentia',
      language: 'Grego',
      transliteration: 'metanoia / poenitentia',
      literalMeaning: 'mudança radical de mente/coração vs. castigo, compensação, penitência'
    },
    overview: 'A tradução da Vulgata latina ("fazei penitência") versus o grego bíblico originou um dos debates fundamentais da Reforma Protestante.',
    catholicPerspective: {
      definition: 'O Sacramento da Penitência e Reconciliação exige contrição de coração, confissão auricular dos pecados ao sacerdote e satisfação (obras de penitência para remissão da pena temporal).',
      primarySource: 'Concílio de Trento, Sessão XIV, Doutrina sobre a Penitência; CIC §1422'
    },
    protestantPerspective: {
      definition: 'Metanoia é a transformação interior e arrependimento de coração gerado pelo Evangelho. Martinho Lutero abriu suas 95 Teses afirmando: "Ao dizer \'Arrependei-vos\', nosso Senhor quis que toda a vida dos crentes fosse arrependimento".',
      primarySource: 'Martinho Lutero, 95 Teses (Tese 1); Confissão de Westminster Cap. XV'
    },
    orthodoxPerspective: {
      definition: 'A Confissão é vista primariamente como um hospital espiritual e processo terapêutico com o pai espiritual (starets), e não como tribunal forense jurídico.',
      primarySource: 'São João Crisóstomo, Homilias sobre a Penitência; Filocalia'
    },
    relatedVerses: ['Mt 3:2', 'Mt 4:17', 'At 2:38', '2Co 7:10']
  },
  {
    id: 'synergia',
    term: 'Sinergismo vs. Monergismo',
    category: 'Salvação',
    originalLanguage: {
      word: 'συνεργία',
      language: 'Grego',
      transliteration: 'synergia',
      literalMeaning: 'trabalhar juntos, cooperação mútua'
    },
    overview: 'A questão de se a regeneração e salvação dependem exclusivamente da soberana graça de Deus (Monergismo) ou da cooperação entre a graça e a vontade humana (Sinergismo).',
    catholicPerspective: {
      definition: 'Sinergismo católico: a graça precedente (gratia praeveniens) desperta o livre-arbítrio ferido mas não aniquilado pelo pecado original, permitindo-lhe assentir ou resistir livremente.',
      primarySource: 'Concílio de Trento, Sessão VI, Cânones 4 e 5; CIC §1993'
    },
    protestantPerspective: {
      definition: 'Monergismo clássico reformado e luterano estrito: o homem morto em seus delitos é incapaz de cooperar para a sua regeneração; somente o Espírito Santo ressuscita espiritualmente o eleito (Graça Irresistível). Arminianos defendem sinergismo evangélico.',
      primarySource: 'Cânones de Dort, Cap. III/IV; Martinho Lutero, Do Arbítrio Escravo'
    },
    orthodoxPerspective: {
      definition: 'Sinergia clássica patrística: a salvação é a cooperação ininterrupta entre a livre graça divina e o livre-arbítrio humano. Deus não salva ninguém sem o consentimento voluntário da pessoa.',
      primarySource: 'São João Cassiano, Conferências XIII; São Máximo o Confessor'
    },
    relatedVerses: ['Fp 2:12-13', '1Co 3:9', 'Ef 2:1-5', 'Ap 3:20']
  },
  {
    id: 'imputatio-infusio',
    term: 'Imputação vs. Infusão',
    category: 'Salvação',
    originalLanguage: {
      word: 'imputatio / infusio',
      language: 'Latim',
      transliteration: 'imputatio / infusio',
      literalMeaning: 'atribuição à conta / derramamento no interior'
    },
    overview: 'A justiça pela qual o crente é salvo é imputada (creditada externamente como vestimenta) ou infundida (injetada no coração pela graça sacramental)?',
    catholicPerspective: {
      definition: 'Infusão da Caridade. Deus não apenas declara justo, mas faz o homem justo interiormente através da graça infundida no batismo, exigindo que o crente coopere para aumentar essa justiça pessoal.',
      primarySource: 'Concílio de Trento, Sessão VI, Cânon 11; Catecismo da Igreja Católica §1999'
    },
    protestantPerspective: {
      definition: 'Imputação da Justiça Alheia (Iustitia Aliena) de Cristo. A justiça que salva é extraterrena, perfeita e creditada integralmente ao pecador pela fé, mantendo a distinção irredutível entre Justificação e Santificação.',
      primarySource: 'Martinho Lutero, Comentário aos Gálatas; Confissão Belga Art. XXII'
    },
    orthodoxPerspective: {
      definition: 'Rejeição da dicotomia jurídica escolástica ocidental. A justiça de Deus é revelada no dinamismo da comunhão pessoal com Cristo ressurreto e habitação real do Espírito Santo.',
      primarySource: 'São Cirilo de Alexandria, Comentário à Epístola aos Romanos'
    },
    relatedVerses: ['Rm 4:3-6', '2Co 5:21', 'Fp 3:9']
  },
  {
    id: 'sobornost',
    term: 'Sobornost (Conciliaridade)',
    category: 'Eclesiologia e Santos',
    originalLanguage: {
      word: 'соборность',
      language: 'Grego',
      transliteration: 'sobornost (russo) / synodikotita (grego: συνοδικότητα)',
      literalMeaning: 'catolicidade como conciliaridade, união sinodal na diversidade'
    },
    overview: 'A concepção da autoridade eclesial como comunhão colegial de bispos iguais governando por consenso conciliar versus centralismo monárquico.',
    catholicPerspective: {
      definition: 'Colegialidade Episcopal sob a chefia suprema do Romano Pontífice. O Colégio dos Bispos só possui autoridade suprema quando reunido em comunhão e com a aprovação do Papa, que detém poder ordinário e universal.',
      primarySource: 'Concílio Vaticano II, Lumen Gentium §22; Código de Direito Canônico cân. 331'
    },
    protestantPerspective: {
      definition: 'Sacerdócio Universal de Todos os Crentes e conciliaridade presbiteriana/sinodal. Cristo é o único Cabeça da Igreja; as congregações e presbitérios decidem representativamente sob a Palavra de Deus.',
      primarySource: 'Confissão de Fé Escocesa Cap. XVI; Martinho Lutero, À Nobreza Cristã da Nação Alemã'
    },
    orthodoxPerspective: {
      definition: 'A Igreja é uma comunhão de igrejas autocéfalas locais irmãs, onde a suprema autoridade sobre a fé reside nos Concílios Ecumênicos e no consenso do Corpo de Cristo, rejeitando qualquer autoridade monárquica infalível individual.',
      primarySource: 'Encíclica dos Patriarcas Orientais de 1848; Aleksei Khomyakov, A Igreja é Uma'
    },
    relatedVerses: ['At 15:6-22', '1Pe 2:9', 'Mt 18:18-20', 'Ef 4:15-16']
  },
  {
    id: 'homoousios',
    term: 'Homoousios (Consubstancial)',
    category: 'Autoridade',
    originalLanguage: {
      word: 'ὁμοούσιος',
      language: 'Grego',
      transliteration: 'homoousios',
      literalMeaning: 'de uma mesma substância/essência (homos = igual/mesmo, ousia = essência)'
    },
    overview: 'O termo definidor do Concílio de Niceia I (325 d.C.) contra Ário, proclamando que o Filho é co-eterno e da mesmíssima essência divina do Pai.',
    catholicPerspective: {
      definition: 'Consubstancial ao Pai. O Filho não é feito nem de essência semelhante (homoiousios), mas ontologicamente uno em divindade com o Pai, mantendo a distinção das Pessoas.',
      primarySource: 'Credo Niceno (325 d.C.); Santo Atanásio, Contra os Arianos'
    },
    protestantPerspective: {
      definition: 'Confessado integralmente pela ortodoxia reformada e luterana nos credos ecumênicos clássicos como base inegociável da cristologia bíblica.',
      primarySource: 'Confissão de Augsburgo Art. I; Confissão de Fé de Westminster Cap. II'
    },
    orthodoxPerspective: {
      definition: 'A pedra angular da teologia trinitária e dos Três Santos Hierarcas: Deus é uma só Ousia em três Hipóstases reais, sem confusão nem divisão.',
      primarySource: 'São Gregório de Nazianzo, Discursos Teológicos; São Basílio Magno'
    },
    relatedVerses: ['Jo 10:30', 'Jo 1:1-3', 'Cl 1:15-19', 'Hb 1:3']
  },
  {
    id: 'theotokos',
    term: 'Theotokos (Mãe de Deus / Geradora de Deus)',
    category: 'Eclesiologia e Santos',
    originalLanguage: {
      word: 'Θεοτόκος',
      language: 'Grego',
      transliteration: 'theotokos',
      literalMeaning: 'aquela que deu à luz a Deus, geradora de Deus (Theos + tiktein)'
    },
    overview: 'Definido no Concílio de Éfeso (431 d.C.) contra Nestório para resguardar a união hipostática: Aquele que nasceu de Maria na carne é a própria Pessoa eterna do Filho de Deus.',
    catholicPerspective: {
      definition: 'Maternidade Divina dogmática. Porque Jesus é verdadeiramente Deus em uma só Pessoa divina, Maria é com toda a verdade a Mãe de Deus (Theotokos), merecedora de hiperdulia.',
      primarySource: 'Concílio de Éfeso (431 d.C.); Concílio Vaticano II, Lumen Gentium Cap. VIII'
    },
    protestantPerspective: {
      definition: 'Aceito pelos reformadores clássicos (Lutero, Calvino, Zwinglio) estritamente como título cristológico: resguarda a divindade da Pessoa de Cristo gerada no ventre, sem atribuir poderes mediadores à criatura.',
      primarySource: 'Martinho Lutero, Sobre os Concílios e a Igreja (1539); Segunda Confissão Helvética XI'
    },
    orthodoxPerspective: {
      definition: 'O cume da redenção da humanidade e centro da iconografia oriental. Maria, a Toda-Santa (Panagia), é a porta pela qual o Verbo Incriado adentrou a história cósmica.',
      primarySource: 'São Cirilo de Alexandria, Anátemas contra Nestório; São João Damasceno'
    },
    relatedVerses: ['Lc 1:43', 'Gl 4:4', 'Mt 1:23', 'Jo 1:14']
  },
  {
    id: 'hypostasis',
    term: 'Hipóstase e União Hipostática',
    category: 'Autoridade',
    originalLanguage: {
      word: 'ὑπόστασις',
      language: 'Grego',
      transliteration: 'hypostasis',
      literalMeaning: 'subsistência real, fundamento objetivo, indivíduo concreto'
    },
    overview: 'A distinção patrística entre Ousia (a natureza divina compartilhada) e Hipóstase (a pessoa singular: Pai, Filho ou Espírito Santo), e a união indissolúvel das naturezas humana e divina em Cristo.',
    catholicPerspective: {
      definition: 'União Hipostática: no Verbo Encarnado há uma só Pessoa divina subsistindo perfeitamente em duas naturezas (divina e humana), sem confusão, sem mudança, sem divisão e sem separação.',
      primarySource: 'Concílio de Calcedônia (451 d.C.); Santo Tomás de Aquino, S.Th. III, q. 2'
    },
    protestantPerspective: {
      definition: 'Fundamento de toda a soteriologia: somente Quem é plenamente Deus e plenamente homem numa só Pessoa poderia mediar e expiar os pecados de toda a humanidade.',
      primarySource: 'Segunda Confissão Helvética Cap. XI; Confissão Belga Art. XIX'
    },
    orthodoxPerspective: {
      definition: 'O dogma calcedoniano e ditelita defendido por São Máximo, o Confessor: Cristo possui duas vontades e operações naturais, unidas harmonicamente na Pessoa do Logos divino.',
      primarySource: 'Concílio de Calcedônia (451 d.C.); Terceiro Concílio de Constantinopla (680 d.C.)'
    },
    relatedVerses: ['Fp 2:5-8', '1Tm 2:5', 'Hb 1:3', 'Cl 2:9']
  }
];

export function getGlossaryTermById(id: string): TheologicalGlossaryTerm | undefined {
  return theologicalGlossaryData.find(term => term.id === id);
}

export function searchGlossaryTerms(query: string): TheologicalGlossaryTerm[] {
  if (!query.trim()) return theologicalGlossaryData;
  const q = query.toLowerCase().trim();
  return theologicalGlossaryData.filter(item => {
    return (
      item.term.toLowerCase().includes(q) ||
      item.overview.toLowerCase().includes(q) ||
      (item.originalLanguage?.word && item.originalLanguage.word.toLowerCase().includes(q)) ||
      (item.originalLanguage?.transliteration && item.originalLanguage.transliteration.toLowerCase().includes(q)) ||
      (item.originalLanguage?.literalMeaning && item.originalLanguage.literalMeaning.toLowerCase().includes(q)) ||
      item.catholicPerspective.definition.toLowerCase().includes(q) ||
      item.protestantPerspective.definition.toLowerCase().includes(q) ||
      (item.orthodoxPerspective?.definition && item.orthodoxPerspective.definition.toLowerCase().includes(q)) ||
      (item.relatedVerses && item.relatedVerses.some(v => v.toLowerCase().includes(q)))
    );
  });
}

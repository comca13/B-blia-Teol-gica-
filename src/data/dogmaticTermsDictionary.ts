export interface DogmaticTermExplanation {
  term: string;
  originalLanguage?: string;
  literalMeaning: string;
  theologicalSense: string;
  historicalOrigin: string;
  keyScripture?: string;
  category?: 'CRISTOLOGIA' | 'TRINDADE' | 'SOTERIOLOGIA' | 'ECLESIOLOGIA' | 'ESCRITURA' | 'MISSAO_HISTORIA' | 'ESCOLAS_PENSAMENTO';
}

export function normalizeDogmaticKey(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export const DOGMATIC_TERMS_DICTIONARY: Record<string, DogmaticTermExplanation> = {
  // --- ERA PATRÍSTICA ---
  'kyrios-christos': {
    term: 'Kyrios Christos',
    originalLanguage: 'Grego (Κύριος Χριστός)',
    literalMeaning: 'Cristo é o Senhor',
    theologicalSense: 'A confissão batismal primitiva mais radical da Igreja Antiga. Proclamava a divindade e soberania absoluta de Jesus sobre a vida, o cosmo e a história, confrontando frontalmente o culto imperial obrigatório de submissão a César ("Kyrios Kaisar").',
    historicalOrigin: 'Igreja Primitiva e Martírio de Policarpo (c. 155 d.C.)',
    keyScripture: 'Fp 2:11; 1Co 12:3; Rm 10:9',
    category: 'CRISTOLOGIA'
  },
  'martyria': {
    term: 'Martyria',
    originalLanguage: 'Grego (μαρτυρία)',
    literalMeaning: 'Testemunho / Dar testemunho até o sangue',
    theologicalSense: 'Conceito neotestamentário e patrístico onde o cristão sela o seu testemunho da verdade do Evangelho e da ressurreição mediante a fidelidade incondicional na perseguição, mesmo sob pena de morte no anfiteatro.',
    historicalOrigin: 'Perseguições Romanas e Martírio de Policarpo de Esmirna',
    keyScripture: 'Ap 12:11; At 1:8; Jo 15:27',
    category: 'ECLESIOLOGIA'
  },
  'atheoi': {
    term: 'Atheoi (acusação pagã)',
    originalLanguage: 'Grego (ἄθεοι)',
    literalMeaning: 'Sem deuses / Ímpios',
    theologicalSense: 'Acusação infundada lançada pelo Império Romano pagão contra os cristãos primitivos porque eles recusavam prestar culto aos ídolos do panteão greco-romano e ao gênio divino do imperador César.',
    historicalOrigin: 'Julgamento dos Santos Mártires (séculos I a IV)',
    keyScripture: 'Ef 2:12; 1Ts 1:9',
    category: 'MISSAO_HISTORIA'
  },
  'anakephalaiosis': {
    term: 'Anakephalaiosis (Recapitulação)',
    originalLanguage: 'Grego (ἀνακεφαλαίωσις)',
    literalMeaning: 'Reunir tudo sob uma só cabeça / Recapitulação',
    theologicalSense: 'A célebre teologia de Santo Ireneu de Lião: o Filho encarnado como o "Segundo Adão" repetiu e refez toda a história humana, desatando pela Sua perfeita obediência na cruz a desobediência e ruína cósmica geradas no Éden por Adão.',
    historicalOrigin: 'Ireneu de Lião, Contra as Heresias (Adversus Haereses, c. 180 d.C.)',
    keyScripture: 'Ef 1:10; 1Co 15:21-22; Rm 5:18-19',
    category: 'SOTERIOLOGIA'
  },
  'regula-fidei': {
    term: 'Regula Fidei (Regra da Fé)',
    originalLanguage: 'Latim (Regula Fidei) / Grego (ὁ κανὼν τῆς ἀληθείας)',
    literalMeaning: 'A régua ou norma canônica da fé',
    theologicalSense: 'A síntese imutável da doutrina apostólica transmitida oralmente e preservada nas Escrituras, utilizada pelos Pais da Igreja para desmascarar as reinterpretações esotéricas e heréticas do gnosticismo e marcionismo.',
    historicalOrigin: 'Patrística Primitiva (Ireneu de Lião e Tertuliano)',
    keyScripture: 'Jd 1:3; 2Tm 1:13-14; Gl 6:16',
    category: 'ESCRITURA'
  },
  'docetismo': {
    term: 'Docetismo',
    originalLanguage: 'Grego (dokein - δοκεῖν, parecer)',
    literalMeaning: 'Aparência / Ilusão',
    theologicalSense: 'Heresia cristológica dos séculos I e II que ensinava que o corpo físico, os sofrimentos e a morte de Jesus foram meras ilusões ou aparências visuais, negando a verdadeira humanidade de Cristo sob o pretexto de que a matéria seria intrinsecamente má.',
    historicalOrigin: 'Combate Joanino e de Santo Inácio de Antioquia',
    keyScripture: '1Jo 4:2-3; 2Jo 1:7; Jo 1:14',
    category: 'CRISTOLOGIA'
  },
  'demiurgo': {
    term: 'Demiurgo',
    originalLanguage: 'Grego (δημιουργός)',
    literalMeaning: 'Artesão / Criador subordinado',
    theologicalSense: 'Conceito do gnosticismo que postulava um falso deus menor, tolo ou malévolo (frequentemente identificado com o Deus criador do Antigo Testamento), distinto do Pai transcendente e bondoso revelado por Jesus Cristo.',
    historicalOrigin: 'Sistemas Gnósticos (Valentim e Marcião) refutados por Ireneu',
    keyScripture: 'Gn 1:1; Cl 1:16; Jo 1:3',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'religio-licita': {
    term: 'Religio Licita',
    originalLanguage: 'Latim',
    literalMeaning: 'Religião legalmente autorizada',
    theologicalSense: 'Estatuto de proteção legal conferido pelo direito público romano às práticas cultuais aceitas pelo Estado. Com o Édito de Milão em 313 d.C., o cristianismo deixou de ser ilícito e criminoso para gozar de plena legalidade civil.',
    historicalOrigin: 'Édito de Milão promulgado por Constantino e Licínio (313 d.C.)',
    keyScripture: '1Tm 2:1-2; Rm 13:1-4',
    category: 'MISSAO_HISTORIA'
  },
  'libertas-religionis': {
    term: 'Libertas Religionis',
    originalLanguage: 'Latim',
    literalMeaning: 'Liberdade de Religião e Culto',
    theologicalSense: 'O princípio proclamado em Milão de que a fé deve ser um ato da vontade livre da alma humana, e que cada cidadão tem o direito inviolável de seguir a divindade em que crê sem coação estatal ou penal.',
    historicalOrigin: 'Carta imperial de Milão (313 d.C.) e escritos de Lactâncio',
    keyScripture: '2Co 3:17; Rm 14:5',
    category: 'MISSAO_HISTORIA'
  },
  'paz-constantiniana': {
    term: 'Paz Constantiniana',
    originalLanguage: 'Historiografia Eclesiástica',
    literalMeaning: 'O período de cessação das perseguições sob Constantino',
    theologicalSense: 'A transição histórica em que a Igreja de mártires e catacumbas passou a usufruir de benevolência imperial, patrocínio civil e construções de basílicas, inaugurando novas oportunidades missionárias mas também dilemas de secularização.',
    historicalOrigin: 'Reinado de Constantino I (313–337 d.C.)',
    keyScripture: 'At 9:31',
    category: 'MISSAO_HISTORIA'
  },
  'homoousios': {
    term: 'Homoousios (Consubstancial)',
    originalLanguage: 'Grego (ὁμοούσιος)',
    literalMeaning: 'Da mesmíssima substância / Da mesma essência ontológica',
    theologicalSense: 'A pedra angular da ortodoxia nicena contra Ário: define que o Filho (Logos) não foi criado nem é inferior, mas possui perfeita e eternamente a mesmíssima essência divina, glória e atributos que Deus o Pai.',
    historicalOrigin: 'I Concílio Ecumênico de Niceia (325 d.C.)',
    keyScripture: 'Jo 10:30; Jo 1:1; Hb 1:3',
    category: 'TRINDADE'
  },
  'homoiousios': {
    term: 'Homoiousios (de substância semelhante)',
    originalLanguage: 'Grego (ὁμοιούσιος)',
    literalMeaning: 'De substância semelhante / Parecido na essência',
    theologicalSense: 'Termo sustentado pelo partido semiariano moderado que tentava evitar a palavra estrita "Homoousios". Argumentava que o Filho era semelhante ao Pai em substância ou poder, mas não ontologicamente coeterno ou idêntico em essência divina.',
    historicalOrigin: 'Controvérsia Ariana do Século IV',
    keyScripture: 'Jo 14:9; Cl 1:15',
    category: 'TRINDADE'
  },
  'monogenes': {
    term: 'Monogenēs (Unigênito)',
    originalLanguage: 'Grego (μονογενής)',
    literalMeaning: 'Único de sua espécie / Único gerado',
    theologicalSense: 'Expressa a filiação única e eterna de Cristo: gerado eternamente do Pai antes de todos os séculos, não feito nem criado (Gennēthenta, ou poiēthenta), sem começo temporal de existência.',
    historicalOrigin: 'Evangelho de João e Credo Niceno de 325 d.C.',
    keyScripture: 'Jo 1:14; Jo 1:18; Jo 3:16',
    category: 'CRISTOLOGIA'
  },
  'subordinacao-ontologica': {
    term: 'Subordinação Ontológica',
    originalLanguage: 'Terminologia Dogmática',
    literalMeaning: 'Hierarquia de essência inferior',
    theologicalSense: 'A heresia do arianismo segundo a qual o Filho seria ontologicamente menor ou derivado com essência inferior à do Pai. A ortodoxia cristã afirma a igualdade ontológica coeterna, distinguindo apenas a subordinação funcional ou voluntária na economia da salvação.',
    historicalOrigin: 'Refutação de Ário por Santo Atanásio',
    keyScripture: 'Jo 5:18; Fp 2:6',
    category: 'TRINDADE'
  },
  'kanon': {
    term: 'Kanon (Vara de Medir / Regra)',
    originalLanguage: 'Grego (κανών)',
    literalMeaning: 'Cana de medir / Padrão normativo',
    theologicalSense: 'A lista fechada e oficial dos livros das Sagradas Escrituras reconhecidos pelo testemunho interno do Espírito Santo e pela Igreja universal como inspirados por Deus e possuidores de autoridade divina infalível.',
    historicalOrigin: '39ª Carta Pascal de Atanásio (367 d.C.)',
    keyScripture: 'Gl 6:16; Fp 3:16; 2Tm 3:16',
    category: 'ESCRITURA'
  },
  'theopneustos': {
    term: 'Theopneustos (Inspirado por Deus)',
    originalLanguage: 'Grego (θεόπνευστος)',
    literalMeaning: 'Expirado por Deus / Soprado por Deus',
    theologicalSense: 'O atributo fundamental das Sagradas Escrituras: cada palavra do texto canônico procede do sopro divino do Espírito Santo sobre os autores humanos, garantindo sua inerrância, autoridade e suficiência salvífica.',
    historicalOrigin: 'Epístolas Paulinas e Tratados Patrísticos do Cânon',
    keyScripture: '2Tm 3:16; 2Pe 1:20-21',
    category: 'ESCRITURA'
  },
  'homologoumena-antilegomena': {
    term: 'Homologoumena vs. Antilegomena',
    originalLanguage: 'Grego (ὁμολογούμενα / ἀντιλεγόμενα)',
    literalMeaning: 'Livros aceitos universalmente vs. Livros disputados',
    theologicalSense: 'A clássica distinção patrística estabelecida por Eusébio e Atanásio: os "Homologoumena" foram aceitos instantaneamente por todas as igrejas apostólicas (Evangelhos, Epístolas Paulinas, etc.), enquanto os "Antilegomena" (Hebreus, Tiago, 2 Pedro, Judas, Apocalipse) passaram por rigoroso escrutínio antes do consenso unânime.',
    historicalOrigin: 'Eusébio de Cesareia e Atanásio de Alexandria (século IV)',
    keyScripture: '2Pe 3:15-16',
    category: 'ESCRITURA'
  },
  'mia-ousia': {
    term: 'Mia Ousia',
    originalLanguage: 'Grego (μία οὐσία)',
    literalMeaning: 'Uma só essência / Uma única substância divina',
    theologicalSense: 'A confissão clássica trinitária de que há um único e indivisível ser de Deus, compartilhado plenamente pelo Pai, pelo Filho e pelo Espírito Santo sem divisão ou fragmentação da divindade.',
    historicalOrigin: 'I Concílio de Constantinopla (381 d.C.) e Pais Capadócios',
    keyScripture: 'Dt 6:4; 1Co 8:4-6; Jo 10:30',
    category: 'TRINDADE'
  },
  'treis-hypostaseis': {
    term: 'Treis Hypostaseis',
    originalLanguage: 'Grego (τρεῖς ὑποστάσεις)',
    literalMeaning: 'Três subsistências / Três Pessoas reais',
    theologicalSense: 'A formulação dos Padres Capadócios (Basílio, Gregório de Nazianzo e Gregório de Níssa) afirmando que Deus existe eternamente como três Pessoas distintas em Suas relações hipostáticas, refutando o sabelianismo ou modalismo.',
    historicalOrigin: 'I Concílio Ecumênico de Constantinopla (381 d.C.)',
    keyScripture: 'Mt 28:19; 2Co 13:14',
    category: 'TRINDADE'
  },
  'pneumatomacos': {
    term: 'Pneumatômacos (Combatentes do Espírito)',
    originalLanguage: 'Grego (πνευματομάχοι)',
    literalMeaning: 'Guerreiros contra o Espírito Santo',
    theologicalSense: 'Designação dos hereges liderados por Macedônio que aceitavam a divindade de Cristo mas negavam a plena divindade e personalidade do Espírito Santo, rebaixando-O a uma criatura ou força ministerial servil.',
    historicalOrigin: 'Condenados no I Concílio de Constantinopla (381 d.C.)',
    keyScripture: 'At 5:3-4; 1Co 2:10-11',
    category: 'TRINDADE'
  },
  'kyrios-kai-zoopoion': {
    term: 'Kyrios kai Zōopoion (Senhor e Vivificador)',
    originalLanguage: 'Grego (τὸ Κύριον καὶ τὸ Ζῳοποιόν)',
    literalMeaning: 'Senhor e Vivificador / Aquele que dá vida',
    theologicalSense: 'O solene título outorgado ao Espírito Santo no Credo Niceno-Constantinopolitano de 381 d.C., proclamando Sua divindade eterna igual ao Pai e ao Filho e Sua ação regeneradora da alma humana.',
    historicalOrigin: 'Credo Niceno-Constantinopolitano (381 d.C.)',
    keyScripture: '2Co 3:17-18; Jo 6:63; Rm 8:11',
    category: 'TRINDADE'
  },
  'perichoresis': {
    term: 'Perichoresis (Circumincessão)',
    originalLanguage: 'Grego (περιχώρησις) / Latim (Circumincessio)',
    literalMeaning: 'Habitação mútua / Dança de comunhão e interpenetração',
    theologicalSense: 'A profunda doutrina de que as três Pessoas da Santíssima Trindade coexistem em comunhão mútua de amor infinito, estando cada uma perfeitamente presente na outra sem jamais fundirem as Suas identidades hipostáticas.',
    historicalOrigin: 'Padres Capadócios e São João Damasceno',
    keyScripture: 'Jo 14:10-11; Jo 17:21',
    category: 'TRINDADE'
  },
  'peccatum-originale': {
    term: 'Peccatum Originale',
    originalLanguage: 'Latim',
    literalMeaning: 'Pecado Original',
    theologicalSense: 'A doutrina agostiniana e bíblica de que a desobediência de Adão corrompeu radicalmente a natureza humana em todos os seus descendentes, transmitindo tanto a culpa jurídica quanto a depravação moral congênita da vontade.',
    historicalOrigin: 'Santo Agostinho de Hipona contra Pelágio (c. 412–430 d.C.)',
    keyScripture: 'Rm 5:12-19; Sl 51:5; Ef 2:3',
    category: 'SOTERIOLOGIA'
  },
  'gratia-irresistibilis': {
    term: 'Gratia Irresistibilis',
    originalLanguage: 'Latim',
    literalMeaning: 'Graça Irresistível / Chamado Eficaz',
    theologicalSense: 'A operação soberana e sobrenatural do Espírito Santo que recria a alma moralmente morta em delitos e pecados, infundindo um coração novo que livre e alegremente deseja crer e se render a Cristo sem ser frustrada pela dureza da carne.',
    historicalOrigin: 'Tratados Antipelagianos de Agostinho e Cânones de Dort (1619)',
    keyScripture: 'Jo 6:44; Jo 6:37; Ez 36:26-27',
    category: 'SOTERIOLOGIA'
  },
  'massa-damnata': {
    term: 'Massa Damnata',
    originalLanguage: 'Latim',
    literalMeaning: 'Massa de perdição / Humanidade caída condenável',
    theologicalSense: 'Expressão de Agostinho para descrever a condição de toda a raça humana pós-queda no Éden: merecedora por justiça da condenação eterna, de modo que a salvação de qualquer indivíduo decorre puramente da graça imerecida de Deus.',
    historicalOrigin: 'Santo Agostinho de Hipona (Sobre a Predestinação dos Santos)',
    keyScripture: 'Rm 3:19; Rm 9:21; Ef 2:1-3',
    category: 'SOTERIOLOGIA'
  },
  'non-posse-non-peccare': {
    term: 'Non posse non peccare',
    originalLanguage: 'Latim',
    literalMeaning: 'Incapaz de não pecar',
    theologicalSense: 'A definição agostiniana dos 4 estados da vontade humana: no estado caído (sub peccato), a alma humana possui livre-arbítrio apenas para escolher entre desejos mundanos, estando espiritualmente incapacitada de escolher a Deus por suas próprias forças sem a graça regeneradora.',
    historicalOrigin: 'Santo Agostinho de Hipona (Enchiridion)',
    keyScripture: 'Rm 8:7-8; 1Co 2:14; Jo 8:34',
    category: 'SOTERIOLOGIA'
  },
  'monergismo': {
    term: 'Monergismo',
    originalLanguage: 'Grego (monos - μόνος, único + ergon - ἔργον, trabalho)',
    literalMeaning: 'Operação de um só agente',
    theologicalSense: 'A doutrina bíblica de que a regeneração espiritual é obra exclusiva, unilateral e todo-poderosa de Deus Espírito Santo na alma caída, e não uma sinergia ou cooperação entre o esforço humano e o poder divino.',
    historicalOrigin: 'Controvérsia Pelagiana e Teologia da Reforma',
    keyScripture: 'Jo 1:13; Tt 3:5; Tg 1:18',
    category: 'SOTERIOLOGIA'
  },
  'uniao-hipostatica': {
    term: 'União Hipostática',
    originalLanguage: 'Grego (ἕνωσις καθ᾽ ὑπόστασιν)',
    literalMeaning: 'União na única subsistência ou Pessoa',
    theologicalSense: 'O dogma fundamental da Cristologia calcedoniana: as duas naturezas perfeitas e distintas de Cristo (a Divina e a Humana) estão unidas inseparavelmente na única Pessoa (hypostasis) do Filho eterno de Deus.',
    historicalOrigin: 'Concílio Ecumênico de Calcedônia (451 d.C.)',
    keyScripture: 'Jo 1:14; 1Tm 3:16; Cl 2:9',
    category: 'CRISTOLOGIA'
  },
  'asynchetos': {
    term: 'Asynchytōs (Sem Confusão)',
    originalLanguage: 'Grego (ἀσυγχύτως)',
    literalMeaning: 'Sem mistura ou fusão das naturezas',
    theologicalSense: 'A 1ª das Quatro Balizas Negativas de Calcedônia: refuta o monofisismo de Êutiques; a divindade e a humanidade em Cristo não se misturaram para formar uma terceira essência híbrida.',
    historicalOrigin: 'Definição Dogmática de Calcedônia (451 d.C.)',
    keyScripture: 'Hb 2:14-17',
    category: 'CRISTOLOGIA'
  },
  'atreptos': {
    term: 'Atreptōs (Sem Mudança)',
    originalLanguage: 'Grego (ἀτρέπτως)',
    literalMeaning: 'Sem alteração ou mutação de essência',
    theologicalSense: 'A 2ª Baliza de Calcedônia: a natureza divina do Verbo não sofreu mutação ao assumir a carne, nem a natureza humana foi deificada ou aniquilada em sua fragilidade criada.',
    historicalOrigin: 'Definição Dogmática de Calcedônia (451 d.C.)',
    keyScripture: 'Ml 3:6; Hb 13:8',
    category: 'CRISTOLOGIA'
  },
  'adiairetos': {
    term: 'Adiairetōs (Sem Divisão)',
    originalLanguage: 'Grego (ἀδιαιρέτως)',
    literalMeaning: 'Sem separação em duas pessoas distintas',
    theologicalSense: 'A 3ª Baliza de Calcedônia: refuta o nestorianismo; Cristo não é a justaposição de duas pessoas diferentes sob uma mesma carcaça moral, mas um único e mesmo Senhor.',
    historicalOrigin: 'Definição Dogmática de Calcedônia (451 d.C.)',
    keyScripture: '1Co 8:6; Ef 4:5',
    category: 'CRISTOLOGIA'
  },
  'achoristos': {
    term: 'Achōristōs (Sem Separação)',
    originalLanguage: 'Grego (ἀχωρίστως)',
    literalMeaning: 'Sem separação no tempo ou no espaço',
    theologicalSense: 'A 4ª Baliza de Calcedônia: as duas naturezas permaneceram unidas indissoluvelmente no momento da concepção virginal, na morte na cruz, na descida ao túmulo e por toda a eternidade glorificada.',
    historicalOrigin: 'Definição Dogmática de Calcedônia (451 d.C.)',
    keyScripture: 'Rm 8:3; Lc 24:39',
    category: 'CRISTOLOGIA'
  },
  'communicatio-idiomatum': {
    term: 'Communicatio Idiomatum',
    originalLanguage: 'Latim / Grego (ἀντίδοσις τῶν ἰδιωμάτων)',
    literalMeaning: 'Comunicação das propriedades das naturezas',
    theologicalSense: 'Princípio cristológico segundo o qual as propriedades e atos de cada uma das duas naturezas podem ser atribuídos com verdade à única Pessoa de Cristo (por exemplo: "o Senhor da glória foi crucificado" em 1Co 2:8).',
    historicalOrigin: 'Patrística e Concílio de Calcedônia',
    keyScripture: '1Co 2:8; At 20:28; 1Jo 1:1',
    category: 'CRISTOLOGIA'
  },

  // --- ERA MEDIEVAL & ESCOLÁSTICA ---
  'servus-servorum-dei': {
    term: 'Servus Servorum Dei',
    originalLanguage: 'Latim',
    literalMeaning: 'Servo dos Servos de Deus',
    theologicalSense: 'Título pastoral adotado pelo Papa São Gregório Magno para definir a autoridade eclesiástica não como tirania ou ambição mundana, mas como ministério de servidão humilde sacrificial ao povo de Deus.',
    historicalOrigin: 'Pontificado de Gregório Magno (590 d.C.)',
    keyScripture: 'Mt 20:26-28; Mc 10:44-45',
    category: 'ECLESIOLOGIA'
  },
  'regula-pastoralis': {
    term: 'Regula Pastoralis',
    originalLanguage: 'Latim',
    literalMeaning: 'A Regra Pastoral',
    theologicalSense: 'A obra clássica de Gregório Magno sobre a vocação pastoral, a cura das almas, o equilíbrio entre contemplação e ação compassiva e a exigência de santidade exemplar nos líderes espirituais.',
    historicalOrigin: 'São Gregório Magno (c. 590 d.C.)',
    keyScripture: '1Pe 5:1-4; 1Tm 3:1-7',
    category: 'ECLESIOLOGIA'
  },
  'cura-animarum': {
    term: 'Cura Animarum (Cuidado das Almas)',
    originalLanguage: 'Latim',
    literalMeaning: 'O cuidado médico e espiritual das almas',
    theologicalSense: 'A essência do ministério cristão no pensamento medieval e patrístico: o pastor como médico das aflições espirituais, aplicando a lei e o evangelho de acordo com a condição específica de cada ovelha.',
    historicalOrigin: 'Tradição Monástica e Pastoral Medieval',
    keyScripture: 'Hb 13:17; Ez 34:15-16',
    category: 'ECLESIOLOGIA'
  },
  'filioque': {
    term: 'Filioque',
    originalLanguage: 'Latim',
    literalMeaning: 'E do Filho',
    theologicalSense: 'A cláusula inserida pela Igreja Ocidental Latina no Credo Niceno-Constantinopolitano ("o Espírito procede do Pai e do Filho"), que gerou o choque milenar com o Oriente Ortodoxo no Grande Cisma de 1054.',
    historicalOrigin: 'Sínodo de Toledo (589 d.C.) e Grande Cisma de 1054',
    keyScripture: 'Jo 15:26; Jo 16:7; Gl 4:6',
    category: 'TRINDADE'
  },
  'monarquia-do-pai': {
    term: 'Monarquia do Pai',
    originalLanguage: 'Grego (Μοναρχία τοῦ Πατρός)',
    literalMeaning: 'Origem única e sem princípio de Deus Pai',
    theologicalSense: 'Princípio trinitário enfático na teologia oriental grega: Deus Pai é a única fonte hipostática eterna (Aitia / Pēgē Theotētos) tanto do Filho (por geração) quanto do Espírito Santo (por processão).',
    historicalOrigin: 'Teologia Bizantina e Patriarca Fócio',
    keyScripture: '1Co 8:6; Ef 4:6; Jo 14:28',
    category: 'TRINDADE'
  },
  'pentarquia': {
    term: 'Pentarquia',
    originalLanguage: 'Grego (Πενταρχία)',
    literalMeaning: 'Governo dos cinco tronos',
    theologicalSense: 'O modelo eclesiológico oriental da Igreja indivisa governada colegialmente e sinodalmente pelos cinco grandes patriarcados históricos: Roma, Constantinopla, Alexandria, Antioquia e Jerusalém.',
    historicalOrigin: 'Legislação do Imperador Justiniano (século VI)',
    keyScripture: 'At 15:2-6; Gl 2:9',
    category: 'ECLESIOLOGIA'
  },
  'primatus-petrinus': {
    term: 'Primatus Petrinus',
    originalLanguage: 'Latim',
    literalMeaning: 'Primazia de Pedro e de sua cátedra',
    theologicalSense: 'A doutrina ocidental segundo a qual o apóstolo Pedro recebeu autoridade de jurisdição superior sobre todo o rebanho de Cristo, transmitida de forma monárquica universal e infalível aos bispos da Sé de Roma.',
    historicalOrigin: 'Desenvolvimento Papal Medieval (Leão I, Gregório VII)',
    keyScripture: 'Mt 16:18-19; Lc 22:32; Jo 21:15-17',
    category: 'ECLESIOLOGIA'
  },
  'satisfactio-vicaria': {
    term: 'Satisfactio Vicaria',
    originalLanguage: 'Latim',
    literalMeaning: 'Satisfação substitutiva em favor de outro',
    theologicalSense: 'A teoria da expiação desenvolvida por Santo Anselmo de Cantuária: a honra infinita de Deus foi ofendida pelo pecado humano; como o homem deve e não pode pagar, e só Deus pode pagar mas não deve, a morte sacrificial do Deus-Homem na cruz satisfaz plenamente a justiça moral do universo.',
    historicalOrigin: 'Santo Anselmo de Cantuária, Cur Deus Homo (1098 d.C.)',
    keyScripture: 'Rm 3:25-26; 2Co 5:21; 1Tm 2:5-6',
    category: 'SOTERIOLOGIA'
  },
  'fides-quaerens-intellectum': {
    term: 'Fides quaerens intellectum',
    originalLanguage: 'Latim',
    literalMeaning: 'A fé em busca de entendimento racional',
    theologicalSense: 'O lema supremo da epistemologia cristã e da escolástica: o cristão não crê porque provou pela lógica humana prévia, mas crê na revelação de Deus e, a partir dessa fé viva, busca compreender a sabedoria divina.',
    historicalOrigin: 'Santo Anselmo de Cantuária (Proslogion, 1078 d.C.)',
    keyScripture: 'Is 7:9 (LXX/Vulgata); Hb 11:3; Cl 1:9',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'credo-ut-intelligam': {
    term: 'Credo ut intelligam',
    originalLanguage: 'Latim',
    literalMeaning: 'Creio para que possa compreender',
    theologicalSense: 'A máxima agostiniana adotada por Anselmo contra o racionalismo autônomo: a fé não é inimiga da razão, mas o órgão iluminado pela graça que cura a cegueira do intelecto para contemplar a verdade.',
    historicalOrigin: 'Agostinho e Anselmo de Cantuária',
    keyScripture: 'Sl 119:18; 1Co 2:14-15',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'honra-divina': {
    term: 'Honra Divina',
    originalLanguage: 'Termo Escolástico',
    literalMeaning: 'A glória e ordem justa soberana do Criador',
    theologicalSense: 'Em Anselmo, a integridade da ordem moral de Deus. O pecado é a tentativa de roubar de Deus a submissão que Lhe é devida; portanto, o perdão puro sem justiça subverteria a integridade do cosmos espiritual.',
    historicalOrigin: 'Cur Deus Homo de Santo Anselmo',
    keyScripture: 'Rm 1:21; Rm 3:23; Is 42:8',
    category: 'SOTERIOLOGIA'
  },
  'gratia-non-tollit-naturam': {
    term: 'Gratia non tollit naturam, sed perficit (A graça não anula a natureza, aperfeiçoa-a)',
    originalLanguage: 'Latim (Gratia non tollit naturam, sed perficit)',
    literalMeaning: 'A graça não destrói a natureza criada, mas a aperfeiçoa',
    theologicalSense: 'A síntese de Santo Tomás de Aquino: a redenção em Cristo não aniquila as faculdades criadas do ser humano (razão, afetos, corpo, ciências), mas as cura da corrupção do pecado e as eleva ao seu fim eterno em Deus.',
    historicalOrigin: 'Santo Tomás de Aquino, Suma Teológica (I, q. 1, a. 8)',
    keyScripture: 'Rm 12:1-2; Cl 2:2-3; 1Tm 4:4-5',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'quinque-viae': {
    term: 'Quinque Viae (Cinco Vias)',
    originalLanguage: 'Latim',
    literalMeaning: 'As cinco vias de demonstração racional',
    theologicalSense: 'Os cinco argumentos cosmológicos e teleológicos formulados por Tomás de Aquino para demonstrar a existência de Deus através dos efeitos observáveis na criação: Primeiro Motor, Causa Primeira, Contingência, Graus de Perfeição e Ordem Teleológica.',
    historicalOrigin: 'Suma Teológica de Tomás de Aquino (I, q. 2, a. 3)',
    keyScripture: 'Rm 1:19-20; Sl 19:1; Sb 13:5',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'analogia-entis': {
    term: 'Analogia Entis',
    originalLanguage: 'Latim',
    literalMeaning: 'Analogia do Ser',
    theologicalSense: 'O princípio metafísico escolástico de que a existência e os atributos das criaturas guardam uma semelhança análoga, porém infinitamente transcendida, com o Ser Supremo de Deus, permitindo ao homem falar com verdade e reverência sobre o Senhor.',
    historicalOrigin: 'Tradição Tomista Medieval',
    keyScripture: 'Is 55:8-9; At 17:28',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'transubstantiatio': {
    term: 'Transubstantiatio',
    originalLanguage: 'Latim',
    literalMeaning: 'Transubstanciação / Mudança de substância',
    theologicalSense: 'O dogma católico romano definido no IV Concílio de Latrão e Trento: na consagração eucarística, toda a substância do pão e do vinho transforma-se ontologicamente no Corpo e Sangue de Cristo, permanecendo apenas os acidentes sensíveis exteriores.',
    historicalOrigin: 'IV Concílio de Latrão (1215) e Tomás de Aquino',
    keyScripture: 'Mt 26:26-28; Jo 6:53-56; 1Co 11:24',
    category: 'ECLESIOLOGIA'
  },
  'sola-scriptura-embrionario': {
    term: 'Sola Scriptura embrionário',
    originalLanguage: 'Conceito Pré-Reformador',
    literalMeaning: 'A primazia exclusiva da Bíblia antes do século XVI',
    theologicalSense: 'A defesa ardente de John Wycliffe e Jan Hus afirmando que a Escritura Sagrada é a lei inerrante de Cristo e a autoridade suprema para julgar decretos papais, bulas, bispos e tradições clericais.',
    historicalOrigin: 'John Wycliffe (Oxford) e Jan Hus (Praga), séculos XIV e XV',
    keyScripture: 'Is 8:20; Mt 15:6-9; 2Tm 3:16',
    category: 'ESCRITURA'
  },
  'corpus-christi-mysticum': {
    term: 'Corpus Christi Mysticum',
    originalLanguage: 'Latim',
    literalMeaning: 'O Corpo Místico de Cristo',
    theologicalSense: 'Em Wycliffe e Hus, a verdadeira Igreja bíblica definida não pela corporação visível de prelados corruptos, mas como o corpo espiritual dos santos eleitos e predestinados por Deus em todos os tempos.',
    historicalOrigin: 'Tratado De Ecclesia de Jan Hus',
    keyScripture: 'Ef 1:22-23; 1Co 12:12-13; Cl 1:18',
    category: 'ECLESIOLOGIA'
  },
  'utraquismo': {
    term: 'Utraquismo (Cálice para os Leigos)',
    originalLanguage: 'Latim (sub utraque specie, sob ambas as espécies)',
    literalMeaning: 'Comunhão sob ambas as espécies',
    theologicalSense: 'A doutrina hussita da Boêmia que exigia o retorno ao mandamento bíblico de Cristo ("Bebei dele todos"), distribuindo aos fiéis leigos não apenas a hóstia, mas também o cálice com o vinho da Ceia.',
    historicalOrigin: 'Movimento Hussita e Concílio de Constança (1415)',
    keyScripture: 'Mt 26:27; 1Co 11:26-28',
    category: 'ECLESIOLOGIA'
  },
  'simonia': {
    term: 'Simonia',
    originalLanguage: 'Grego/Latim (em alusão a Simão Mago em Atos 8)',
    literalMeaning: 'Comércio de bens espirituais e eclesiásticos',
    theologicalSense: 'O pecado grave e escândalo generalizado da Idade Média de comprar e vender com dinheiro cargos clericais, bispados, ordenações sacramentais e perdões de penas espirituais.',
    historicalOrigin: 'Denunciada pelos Pré-Reformadores e Reformadores',
    keyScripture: 'At 8:18-22; 1Pe 5:2',
    category: 'ECLESIOLOGIA'
  },

  // --- ERA DA REFORMA PROTESTANTE ---
  'sola-gratia': {
    term: 'Sola Gratia',
    originalLanguage: 'Latim',
    literalMeaning: 'Somente a Graça',
    theologicalSense: 'Pilar inegociável da fé evangélica: a salvação do pecador é inteiramente uma iniciativa de amor e misericórdia imerecida de Deus, sem qualquer cooperação meritória, obras prévias ou capacidade autônoma da carne humana.',
    historicalOrigin: 'A Reforma Protestante (1517 d.C.)',
    keyScripture: 'Ef 2:8-9; Rm 11:6; Tt 3:4-5',
    category: 'SOTERIOLOGIA'
  },
  'thesaurus-meritorum': {
    term: 'Thesaurus Meritorum',
    originalLanguage: 'Latim',
    literalMeaning: 'Tesouro dos Méritos da Igreja',
    theologicalSense: 'Doutrina medieval católica segundo a qual a Igreja possui um reservatório inesgotável com os méritos infinitos de Cristo e as boas obras excedentes da Virgem Maria e dos santos, que o Papa podia dispensar em cartas de indulgências.',
    historicalOrigin: 'Refutado nas 95 Teses de Martinho Lutero (Tese 62)',
    keyScripture: 'Lc 17:10; 1Tm 2:5',
    category: 'SOTERIOLOGIA'
  },
  'poenitentia': {
    term: 'Poenitentia',
    originalLanguage: 'Latim / Grego (Metanoia - μετάνοια)',
    literalMeaning: 'Penitência vs. Arrependimento de coração',
    theologicalSense: 'O ponto de partida das 95 Teses: Lutero demonstrou que quando Jesus disse "Arrependei-vos" (Mt 4:17), Ele ordenou uma transformação interior profunda de toda a vida da pessoa, e não um sacramento formal administrado por moedas clericais.',
    historicalOrigin: 'Tese 1 das 95 Teses de Martinho Lutero (1517)',
    keyScripture: 'Mt 4:17; Mc 1:15; Lc 3:8',
    category: 'SOTERIOLOGIA'
  },
  'anfechtung': {
    term: 'Anfechtung (Agonia Espiritual)',
    originalLanguage: 'Alemão (Anfechtung)',
    literalMeaning: 'Angústia existencial profunda / Provação da alma diante de Deus',
    theologicalSense: 'O conceito luterano da crise profunda e pavorosa em que a pessoa percebe sua nudez moral e total condenação perante a santa justiça de Deus, descobrindo que suas forças monásticas são inúteis e que apenas a graça de Cristo na cruz pode salvá-la.',
    historicalOrigin: 'Experiência da Torre de Martinho Lutero',
    keyScripture: 'Sl 130:1-3; Rm 7:24; Is 6:5',
    category: 'SOTERIOLOGIA'
  },
  'sola-scriptura': {
    term: 'Sola Scriptura',
    originalLanguage: 'Latim',
    literalMeaning: 'Somente a Escritura',
    theologicalSense: 'O princípio formal da Reforma: a Bíblia é a única autoridade infalível, suficiente e suprema para governar a fé e a vida da Igreja (Norma normans non normata), soberana sobre todos os concílios, papas, tradições ou sínodos humanos.',
    historicalOrigin: 'Dieta de Worms (1521 d.C.) e Confissões Reformadas',
    keyScripture: '2Tm 3:16-17; Sl 119:105; Gl 1:8-9',
    category: 'ESCRITURA'
  },
  'norma-normans': {
    term: 'Norma normans non normata',
    originalLanguage: 'Latim',
    literalMeaning: 'A norma que normatiza e que não é normatizada',
    theologicalSense: 'Designação teológica do Sola Scriptura: a Bíblia é a regra mestra primária que julga e corrige todas as outras regras da teologia (credos, catecismos e confissões), mas não se submete ao julgamento de nenhuma autoridade humana.',
    historicalOrigin: 'Escolástica Reformada e Luterana',
    keyScripture: 'At 17:11; 1Ts 5:21',
    category: 'ESCRITURA'
  },
  'liberdade-da-consciencia': {
    term: 'Liberdade da Consciência Cristã',
    originalLanguage: 'Conceito da Reforma',
    literalMeaning: 'A consciência submissa unicamente à Palavra de Deus',
    theologicalSense: 'A proclamação histórica de Lutero em Worms: o Estado e a Igreja não têm direito moral de forçar uma pessoa a agir contra sua consciência iluminada e cativa pelas Escrituras Sagradas.',
    historicalOrigin: 'Discurso de Martinho Lutero na Dieta de Worms (1521)',
    keyScripture: 'At 4:19-20; At 5:29; Rm 14:23',
    category: 'MISSAO_HISTORIA'
  },
  'principio-regulador': {
    term: 'Princípio Regulador do Culto',
    originalLanguage: 'Teologia Reformada',
    literalMeaning: 'Regra estrita para o culto cristão',
    theologicalSense: 'Princípio defendido por Zuínglio e Calvino: no culto público a Deus, somente é lícito e aceitável aquilo que é explícita ou implicitamente ordenado pelas Escrituras. O que não é comandado na Bíblia é proibido.',
    historicalOrigin: 'Reforma em Zurique (1523) e Confissão de Westminster',
    keyScripture: 'Dt 12:32; Lv 10:1-3; Jo 4:23-24',
    category: 'ECLESIOLOGIA'
  },
  'lectio-continua': {
    term: 'Lectio Continua',
    originalLanguage: 'Latim',
    literalMeaning: 'Leitura e pregação contínua da Escritura',
    theologicalSense: 'A prática resgatada por Zuínglio e os reformadores de pregar expositivamente livros inteiros da Bíblia do primeiro versículo ao último, domingo após domingo, abandonando a fragmentação do lecionário medieval.',
    historicalOrigin: 'Ulrico Zuínglio na Catedral de Grossmünster (Zurique, 1519)',
    keyScripture: 'At 20:27; Lc 4:16-21',
    category: 'ECLESIOLOGIA'
  },
  'hoc-est-corpus-meum': {
    term: 'Hoc est corpus meum (debate sacramental)',
    originalLanguage: 'Latim',
    literalMeaning: 'Isto é o meu corpo',
    theologicalSense: 'A frase de Jesus na Última Ceia (Mt 26:26) que dividiu a Reforma em Marburgo (1529): Lutero defendeu a presença real física substancial (Consubstanciação), enquanto Zuínglio sustentou o sentido figurado e espiritual ("Isto significa o meu corpo").',
    historicalOrigin: 'Colóquio de Marburgo (1529 d.C.)',
    keyScripture: 'Mt 26:26; 1Co 11:24; Jo 6:63',
    category: 'ECLESIOLOGIA'
  },
  'memorialismo': {
    term: 'Memorialismo',
    originalLanguage: 'Teologia Sacramental',
    literalMeaning: 'A Ceia como memorial espiritual da cruz',
    theologicalSense: 'A visão de Ulrico Zuínglio de que os elementos do pão e do vinho são memoriais simbólicos e solenes através dos quais a Igreja reunida proclama e comemora a morte expiatória de Cristo até que Ele venha.',
    historicalOrigin: 'Reforma Suíça (Zurique, 1525)',
    keyScripture: 'Lc 22:19; 1Co 11:24-26',
    category: 'ECLESIOLOGIA'
  },
  'credobatismo': {
    term: 'Credobatismo',
    originalLanguage: 'Grego (credo, crer + baptisma, batismo)',
    literalMeaning: 'Batismo de crentes mediante confissão pessoal de fé',
    theologicalSense: 'A doutrina dos anabatistas e posteriormente dos batistas: o batismo com água foi instituído exclusivamente para aqueles que se arrependeram de forma consciente e professaram a fé pessoal em Jesus Cristo, excluindo o batismo de recém-nascidos.',
    historicalOrigin: 'Anabatismo de Zurique (Grebel e Manz, 1525)',
    keyScripture: 'At 2:38; At 8:36-38; Mt 28:19',
    category: 'ECLESIOLOGIA'
  },
  'corpus-christi-vs-christianum': {
    term: 'Corpus Christi vs. Corpus Christianum',
    originalLanguage: 'Eclesiologia Anabatista',
    literalMeaning: 'O Corpo de Cristo vs. A Sociedade Estatal Cristã',
    theologicalSense: 'A ruptura radical da Reforma com a cristandade medieval: a Igreja não é a totalidade dos cidadãos batizados coagidos pelo Estado, mas a comunidade voluntária de convertidos e discípulos santos regenerados pelo Espírito.',
    historicalOrigin: 'Confissão de Schleitheim (1527 d.C.)',
    keyScripture: 'Jo 18:36; 2Co 6:14-17',
    category: 'ECLESIOLOGIA'
  },
  'separacao-igreja-estado': {
    term: 'Separação Igreja-Estado',
    originalLanguage: 'Teologia Política Evangélica',
    literalMeaning: 'Autonomia do reino espiritual em relação à espada civil',
    theologicalSense: 'O princípio pioneiro dos reformadores radicais e batistas: o Estado empunha a espada temporal para conter o crime e manter a paz, mas jamais tem autoridade ou legitimidade para impor crenças teológicas, perseguições ou leis religiosas.',
    historicalOrigin: 'Confissão de Schleitheim (1527) e Roger Williams',
    keyScripture: 'Mt 22:21; Jo 18:36; At 5:29',
    category: 'MISSAO_HISTORIA'
  },
  'confissao-de-schleitheim': {
    term: 'Confissão de Schleitheim (1527)',
    originalLanguage: 'Alemão (Brüderliche Vereinigung)',
    literalMeaning: 'A União Fraternal de Schleitheim',
    theologicalSense: 'O documento fundacional do anabatismo suíço e alemão, redigido pelo mártir Michael Sattler, consagrando o batismo de crentes, a disciplina pela excomunhão (ban), o pacifismo cristão e a recusa do juramento civil.',
    historicalOrigin: 'Sínodo Anabatista de Schleitheim (1527 d.C.)',
    keyScripture: 'Mt 5:34; Mt 5:39; Mt 18:15-17',
    category: 'ECLESIOLOGIA'
  },
  'soli-deo-gloria': {
    term: 'Soli Deo Gloria',
    originalLanguage: 'Latim',
    literalMeaning: 'Somente a Deus a Glória',
    theologicalSense: 'O horizonte unificador de toda a teologia bíblica e reformada: toda a criação, providência, história e redenção têm como objetivo supremo manifestar a excelência inefável e gloriosa do caráter soberano de Deus.',
    historicalOrigin: 'Teologia de João Calvino e os Cinco Solas',
    keyScripture: 'Rm 11:36; 1Co 10:31; Is 48:11',
    category: 'TRINDADE'
  },
  'sensus-divinitatis': {
    term: 'Sensus Divinitatis',
    originalLanguage: 'Latim',
    literalMeaning: 'Senso da divindade congênito na alma',
    theologicalSense: 'Em João Calvino, a consciência inata e inescapável da existência de Deus impressa pelo Criador em todo ser humano, de modo que ninguém pode alegar ignorância moral e todos são indesculpáveis perante o juízo divino.',
    historicalOrigin: 'João Calvino, Institutas da Religião Cristã (Livro I, cap. III)',
    keyScripture: 'Rm 1:19-21; At 17:27-28',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'duplex-gratia': {
    term: 'Duplex Gratia (Justificação e Santificação)',
    originalLanguage: 'Latim',
    literalMeaning: 'A Dupla Graça em Cristo',
    theologicalSense: 'A doutrina calvinista de que ao estarmos unidos a Cristo pela fé, recebemos inseparavelmente dois dons: a Justificação (pela qual somos declarados justos e perdoados) e a Santificação (pela qual o Espírito purifica nossa vida prática). Não há uma sem a outra.',
    historicalOrigin: 'João Calvino, Institutas (Livro III, cap. XI)',
    keyScripture: '1Co 1:30; 1Co 6:11; Rm 8:30',
    category: 'SOTERIOLOGIA'
  },
  'unio-cum-christo': {
    term: 'Unio cum Christo (União com Cristo)',
    originalLanguage: 'Latim',
    literalMeaning: 'A união íntima e mística com Cristo',
    theologicalSense: 'O coração de toda a soteriologia bíblica segundo Calvino e os puritanos: todos os benefícios salvíficos (eleição, chamado, fé, justificação, adoção, santificação e glorificação) só se tornam reais e eficazes quando o crente é enxertado espiritualmente no Salvador.',
    historicalOrigin: 'João Calvino, Institutas (Livro III, cap. I)',
    keyScripture: 'Jo 15:4-5; Gl 2:20; Ef 1:3-4',
    category: 'SOTERIOLOGIA'
  },
  'sola-fide': {
    term: 'Sola Fide',
    originalLanguage: 'Latim',
    literalMeaning: 'Somente pela Fé',
    theologicalSense: 'O artigo pelo qual a Igreja fica de pé ou cai (Articulus stantis et cadentis ecclesiae): a fé salvadora é a mão vazia do mendigo que se apropria e descansa unicamente na justiça perfeita de Cristo, sem o acréscimo de méritos humanos.',
    historicalOrigin: 'Reforma Protestante (Lutero e Melâncton)',
    keyScripture: 'Rm 3:28; Rm 5:1; Gl 2:16',
    category: 'SOTERIOLOGIA'
  },
  'solus-christus': {
    term: 'Solus Christus',
    originalLanguage: 'Latim',
    literalMeaning: 'Somente Cristo',
    theologicalSense: 'Afirmação bíblica de que Jesus Cristo é o único Mediador infalível e suficiente entre Deus e os homens, descartando a mediação sacerdotal de clérigos, santos canonizados, anjos ou da Virgem Maria para a justificação.',
    historicalOrigin: 'Teologia dos Cinco Solas da Reforma',
    keyScripture: '1Tm 2:5; At 4:12; Hb 7:25',
    category: 'CRISTOLOGIA'
  },
  'iustitia-imputata': {
    term: 'Iustitia Imputata (Justiça Imputada)',
    originalLanguage: 'Latim',
    literalMeaning: 'Justiça creditada na conta forense',
    theologicalSense: 'A doutrina reformada da justificação forense: Deus não nos declara justos porque tenhamos nos tornado intrinsecamente santos, mas porque imputa (credita legalmente) a nós a obediência perfeita e os méritos do sangue de Cristo.',
    historicalOrigin: 'Ortodoxia Protestante e Confissão de Westminster',
    keyScripture: 'Rm 4:3-6; 2Co 5:21; Fp 3:9',
    category: 'SOTERIOLOGIA'
  },
  'gratia-infusa': {
    term: 'Gratia Infusa',
    originalLanguage: 'Latim',
    literalMeaning: 'Graça infundida moralmente na alma',
    theologicalSense: 'A doutrina católica romana reafirmada em Trento: a justificação não é uma mera sentença declaratória forense exterior, mas um processo interior em que a graça divina é derramada pelos sacramentos, transformando a alma para que mereça a vida eterna.',
    historicalOrigin: 'Concílio de Trento, Decreto sobre a Justificação (1547)',
    keyScripture: 'Rm 5:5; Tt 3:5',
    category: 'SOTERIOLOGIA'
  },
  'anathema-sit': {
    term: 'Anathema Sit',
    originalLanguage: 'Latim / Grego (ἀνάθεμα)',
    literalMeaning: 'Seja excomungado / Caia sob a maldição divina',
    theologicalSense: 'Fórmula canônica e conciliar utilizada no Concílio de Trento contra aqueles que professassem as doutrinas protestantes da justificação somente pela fé ou da suficiência exclusiva das Escrituras.',
    historicalOrigin: 'Concílio de Trento (1545–1563)',
    keyScripture: 'Gl 1:8-9; 1Co 16:22',
    category: 'ECLESIOLOGIA'
  },
  'septem-sacramenta': {
    term: 'Septem Sacramenta',
    originalLanguage: 'Latim',
    literalMeaning: 'Os Sete Sacramentos',
    theologicalSense: 'O dogma tridentino que fixou irrevogavelmente em sete os sacramentos da Igreja Católica Romana: Batismo, Confirmação (Crisma), Eucaristia, Penitência (Confissão), Unção dos Enfermos, Ordem e Matrimônio, contra os dois sacramentos bíblicos da Reforma.',
    historicalOrigin: 'Concílio de Trento, Sessão VII (1547)',
    keyScripture: 'Mt 28:19; 1Co 11:23-26',
    category: 'ECLESIOLOGIA'
  },
  'traditio-et-scriptura': {
    term: 'Traditio et Scriptura pari pietatis affectu',
    originalLanguage: 'Latim',
    literalMeaning: 'Tradição e Escritura com igual sentimento de devoção',
    theologicalSense: 'Decreto tridentino de 1546 afirmando que a revelação divina está contida conjuntamente tanto nos livros escritos das Escrituras (incluindo os deuterocanônicos da Vulgata) quanto nas tradições orais não escritas guardadas pela Sé Romana.',
    historicalOrigin: 'Concílio de Trento, Sessão IV (1546)',
    keyScripture: '2Ts 2:15; Mc 7:8-9',
    category: 'ESCRITURA'
  },

  // --- ERA PÓS-REFORMA & GRANDES DESPERTARES ---
  'tulip': {
    term: 'TULIP',
    originalLanguage: 'Acróstico Mnemônico Inglês',
    literalMeaning: 'Total Depravity, Unconditional Election, Limited Atonement, Irresistible Grace, Perseverance of the Saints',
    theologicalSense: 'A síntese clássica dos Cinco Pontos do Calvinismo formulados nos Cânones de Dort em 1619 para defender a soberania absoluta de Deus na salvação contra os Cinco Artigos da Remonstrância Arminiana.',
    historicalOrigin: 'Sínodo Internacional de Dort (1618–1619 d.C.)',
    keyScripture: 'Ef 1:4-11; Rm 9:11-18; Jo 10:27-29',
    category: 'SOTERIOLOGIA'
  },
  'monergismo-soteriologico': {
    term: 'Monergismo Soteriológico',
    originalLanguage: 'Teologia Dogmática',
    literalMeaning: 'A salvação como obra soberana exclusiva de Deus',
    theologicalSense: 'O consenso de Dort de que o homem espiritual e moralmente morto não possui livre-arbítrio para iniciar ou cooperar na sua própria regeneração; Deus soberanamente ressuscita o pecador pela graça eficaz.',
    historicalOrigin: 'Cânones de Dort (1619 d.C.)',
    keyScripture: 'Ef 2:4-5; Jo 1:12-13; At 16:14',
    category: 'SOTERIOLOGIA'
  },
  'decretum-absolutum': {
    term: 'Decretum Absolutum',
    originalLanguage: 'Latim',
    literalMeaning: 'Decreto Absoluto de Eleição',
    theologicalSense: 'O decreto eterno pelo qual Deus, puramente segundo o Seu beneplácito livre e misericordioso, elegeu em Cristo um número determinado de pecadores para a salvação, sem consideração a qualquer fé ou virtude prevista nelas.',
    historicalOrigin: 'Cânones de Dort, Capítulo I',
    keyScripture: 'Rm 9:11; 2Tm 1:9; Ef 1:4-5',
    category: 'SOTERIOLOGIA'
  },
  'substituicao-penal-particular': {
    term: 'Substituição Penal Particular',
    originalLanguage: 'Soteriologia Reformada',
    literalMeaning: 'Expiação definida e eficaz pelos eleitos',
    theologicalSense: 'A doutrina de que a morte de Cristo na cruz possui valor infinito, mas foi decretada para redimir e assegurar a salvação eficaz e infalível especificamente do rebanho eleito que o Pai Lhe confiou.',
    historicalOrigin: 'Cânones de Dort (Ponto II)',
    keyScripture: 'Jo 10:11-15; Is 53:11; Ef 5:25',
    category: 'SOTERIOLOGIA'
  },
  'foedus-gratiae': {
    term: 'Foedus Gratiae (Pacto da Graça)',
    originalLanguage: 'Latim',
    literalMeaning: 'A Aliança da Graça',
    theologicalSense: 'A estrutura central da teologia federal de Westminster: após o rompimento do Pacto das Obras em Adão, Deus estabeleceu uma Aliança da Graça em Cristo para conceder vida eterna e o Espírito Santo a todos os crentes mediante a fé.',
    historicalOrigin: 'Confissão de Fé de Westminster (Capítulo VII, 1647)',
    keyScripture: 'Gn 3:15; Jr 31:31-34; Hb 8:6-13',
    category: 'SOTERIOLOGIA'
  },
  'imputatio-iustitiae': {
    term: 'Imputatio Iustitiae Christi',
    originalLanguage: 'Latim',
    literalMeaning: 'Imputação da Justiça de Cristo',
    theologicalSense: 'O ensino de Westminster de que somos justificados não por qualquer virtude em nós, mas porque Deus credita a nós tanto a obediência ativa de Cristo (Sua vida sem pecado que cumpre toda a lei) quanto Sua obediência passiva (Seu sangue na cruz).',
    historicalOrigin: 'Confissão de Fé de Westminster (Capítulo XI)',
    keyScripture: '2Co 5:21; Rm 5:19; Gl 4:4-5',
    category: 'SOTERIOLOGIA'
  },
  'dia-do-senhor': {
    term: 'Dia do Senhor (Sabbatarianismo Cristão)',
    originalLanguage: 'Eclesiologia Puritana',
    literalMeaning: 'O domingo consagrado à adoração e descanso',
    theologicalSense: 'A doutrina de que o quarto mandamento moral do Decálogo permanece em vigor, tendo sido transferido do sétimo dia para o primeiro dia da semana (dia da Ressurreição de Jesus) como dia dedicado à comunhão, oração e descanso sagrado.',
    historicalOrigin: 'Confissão de Fé de Westminster (Capítulo XXI)',
    keyScripture: 'Êx 20:8-11; Ap 1:10; At 20:7',
    category: 'ECLESIOLOGIA'
  },
  'pacto-das-obras': {
    term: 'Pacto das Obras (Foedus Operum)',
    originalLanguage: 'Latim',
    literalMeaning: 'A Aliança da Criação e das Obras',
    theologicalSense: 'A aliança original que Deus firmou com Adão no Jardim do Éden, prometendo vida eterna sob a condição de obediência perfeita e pessoal e advertindo com a morte sob pena de desobediência.',
    historicalOrigin: 'Teologia Federal Reformada de Westminster',
    keyScripture: 'Gn 2:16-17; Os 6:7; Rm 5:12',
    category: 'SOTERIOLOGIA'
  },
  'ecclesiola-in-ecclesia': {
    term: 'Ecclesiola in ecclesia (Pequena igreja dentro da igreja)',
    originalLanguage: 'Latim',
    literalMeaning: 'Pequena congregação de comunhão dentro da grande igreja',
    theologicalSense: 'A estratégia do pietismo de Philip Jakob Spener: reunir pequenos grupos de fiéis em lares (Collegia Pietatis) para oração mútua, estudo bíblico e exortação piedosa, reavivando a congregação da frieza escolástica.',
    historicalOrigin: 'Philip Jakob Spener, Pia Desideria (1675 d.C.)',
    keyScripture: 'At 2:46; Cl 3:16; Hb 10:24-25',
    category: 'ECLESIOLOGIA'
  },
  'pia-desideria': {
    term: 'Pia Desideria',
    originalLanguage: 'Latim',
    literalMeaning: 'Desejos Piedosos / Santos Anseios',
    theologicalSense: 'O manifesto inaugural do pietismo alemão, redigido por Spener em Frankfurt, propondo o sacerdócio universal de todos os crentes, a renovação da pregação do coração e o amor fraternal ativo acima das controvérsias amargas.',
    historicalOrigin: 'Philip Jakob Spener (1675 d.C.)',
    keyScripture: '1Pe 2:9; Fp 2:1-4',
    category: 'MISSAO_HISTORIA'
  },
  'novo-nascimento': {
    term: 'Novo Nascimento',
    originalLanguage: 'Grego (gennēthē anōthen - γεννηθῇ ἄνωθεν)',
    literalMeaning: 'Ser gerado do alto pelo Espírito',
    theologicalSense: 'A doutrina bíblica e pietista da regeneração interior pessoal pelo Espírito Santo: a verdadeira fé não é mera ortodoxia de credos intelectuais, mas uma transformação viva que purifica os afetos e produz santidade.',
    historicalOrigin: 'Pietismo, Wesley e os Grandes Despertares',
    keyScripture: 'Jo 3:3-7; 2Co 5:17; 1Pe 1:23',
    category: 'SOTERIOLOGIA'
  },
  'praxis-pietatis': {
    term: 'Praxis Pietatis',
    originalLanguage: 'Latim',
    literalMeaning: 'A prática da verdadeira piedade cristã',
    theologicalSense: 'O princípio de que a teologia cristã deve culminar na vida prática de oração fervorosa, integridade de conduta moral e amor sacrificial aos desvalidos, e não ficar restrita a debates teóricos de gabinete.',
    historicalOrigin: 'Puritanismo Inglês e Pietismo Continental',
    keyScripture: '1Tm 4:7-8; Tg 1:22; Tt 2:11-12',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'afetos-religiosos': {
    term: 'Afetos Religiosos',
    originalLanguage: 'Teologia de Jonathan Edwards',
    literalMeaning: 'Os anseios e inclinações sagradas do coração',
    theologicalSense: 'A obra-prima de Jonathan Edwards (Religious Affections, 1746): o verdadeiro cristianismo bíblico opera no coração inclinando os afetos ao amor pela glória santa de Deus, diferenciando a autêntica obra do Espírito Santo das meras reações emocionais e histéricas.',
    historicalOrigin: 'Primeiro Grande Despertar Americano (1741–1746)',
    keyScripture: 'Sl 73:25-26; 1Pe 1:8; Fp 1:9-11',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'despertar-espiritual': {
    term: 'Despertar Espiritual (Awakening)',
    originalLanguage: 'Conceito Histórico do Avivamento',
    literalMeaning: 'Reavivamento e sopro vivificador soberano',
    theologicalSense: 'Um período extraordinário na história da Igreja onde Deus derrama o Espírito Santo com intensidade incomum, despertando multidões simultaneamente para convicção de pecado, sede pela Palavra e renovação moral e social de nações inteiras.',
    historicalOrigin: 'Primeiro Grande Despertar (Edwards e Whitefield, 1740)',
    keyScripture: 'Hc 3:2; Sl 85:6; At 2:1-4',
    category: 'MISSAO_HISTORIA'
  },
  'conviccao-de-pecado': {
    term: 'Convicção de Pecado',
    originalLanguage: 'Pneumatologia Evangélica',
    literalMeaning: 'Iluminação pelo Espírito da culpa perante a santidade de Deus',
    theologicalSense: 'A operação descrita por Edwards e pregada por George Whitefield: a alma percebe quão abominável é o pecado diante do Deus Todo-Poderoso, abandonando toda a autojustificação para clamar por socorro no sangue do Cordeiro.',
    historicalOrigin: 'Pregações de Whitefield e Sermão "Pecadores nas Mãos de um Deus Irado" (1741)',
    keyScripture: 'Jo 16:8; At 2:37; Sl 51:3-4',
    category: 'SOTERIOLOGIA'
  },
  'pregacao-ao-ar-livre': {
    term: 'Pregação ao Ar Livre',
    originalLanguage: 'Metodismo e Despertar Evangélico',
    literalMeaning: 'Evangelismo fora dos templos paroquiais fechados',
    theologicalSense: 'O método revolucionário de Whitefield e John Wesley: levar a proclamação das Boas-Novas de salvação aos campos, minas de carvão e praças públicas onde os pobres, operários e marginalizados podiam ouvir a Palavra da Vida.',
    historicalOrigin: 'Início do Ministério Metodista em Bristol e Kingswood (1739)',
    keyScripture: 'Lc 14:23; Mc 16:15; At 17:17',
    category: 'MISSAO_HISTORIA'
  },
  'graca-preveniente': {
    term: 'Graça Preveniente',
    originalLanguage: 'Latim (gratia praeveniens)',
    literalMeaning: 'A graça que precede e vai adiante',
    theologicalSense: 'Pilar do arminianismo e metodismo wesleyano: a graça universal de Deus que, decorrente do sacrifício de Cristo e da iluminação do Espírito, neutraliza os efeitos incapacitantes da depravação, capacitando o livre-arbítrio a crer no Evangelho ou resistir a ele.',
    historicalOrigin: 'John Wesley e a Tradição Arminiana',
    keyScripture: 'Jo 1:9; Tt 2:11; Rm 2:4',
    category: 'SOTERIOLOGIA'
  },
  'perfeicao-crista': {
    term: 'Perfeição Cristã (Amor Perfeito)',
    originalLanguage: 'Doutrina Wesleyana',
    literalMeaning: 'Santificação integral da alma em amor',
    theologicalSense: 'O ensino de John Wesley de que o crente pode e deve ser liberto pelo poder do Espírito Santo do domínio interior do pecado, vivendo uma vida governada inteiramente pelo amor indiviso a Deus e ao próximo nesta vida.',
    historicalOrigin: 'John Wesley, Breve Exposição da Perfeição Cristã (1766)',
    keyScripture: '1Ts 5:23-24; 1Jo 4:17-18; Mt 5:48',
    category: 'SOTERIOLOGIA'
  },
  'coracao-aquecido': {
    term: 'Coração Estranhamente Aquecido',
    originalLanguage: 'Diário de John Wesley',
    literalMeaning: 'A certeza interior e experimental da salvação',
    theologicalSense: 'A experiência de conversão evangélica de John Wesley na Rua Aldersgate em Londres (24 de maio de 1738) ao ouvir a leitura do prefácio de Lutero à Epístola aos Romanos, onde recebeu a convicção jubilosa de que Cristo havia perdoado os seus pecados pessoais.',
    historicalOrigin: 'Experiência de Aldersgate (1738 d.C.)',
    keyScripture: 'Rm 8:16; Gl 4:6; Lc 24:32',
    category: 'SOTERIOLOGIA'
  },
  'classes-metodistas': {
    term: 'Classes e Sociedades Metodistas',
    originalLanguage: 'Eclesiologia Wesleyana',
    literalMeaning: 'Grupos celulares de prestação de contas mútua',
    theologicalSense: 'A engrenagem do metodismo primitivo: pequenos núcleos semanais de discípulos reunidos para oração, discipulado íntimo, confissão recíproca e contribuição caridosa aos enfermos, transformando o tecido moral da Inglaterra do século XVIII.',
    historicalOrigin: 'Organização das Sociedades Metodistas por John Wesley (1742)',
    keyScripture: 'Tg 5:16; Hb 3:13; 1Ts 5:11',
    category: 'ECLESIOLOGIA'
  },
  'grande-comissao-perpetua': {
    term: 'A Grande Comissão Perpétua',
    originalLanguage: 'Missiologia Moderna',
    literalMeaning: 'O mandamento perpétuo de ir a todas as nações',
    theologicalSense: 'O manifesto de William Carey refutando o hipercalvinismo de sua época: o mandamento de Mateus 28:18-20 não expirou com os apóstolos bíblicos, mas obriga solene e continuamente a Igreja de Cristo a enviar missionários e recursos a todos os povos não alcançados da Terra.',
    historicalOrigin: 'William Carey, Uma Investigação sobre o Dever dos Cristãos (1792)',
    keyScripture: 'Mt 28:18-20; Rm 10:14-15; At 1:8',
    category: 'MISSAO_HISTORIA'
  },
  'pai-das-missoes': {
    term: 'Pai das Missões Modernas',
    originalLanguage: 'Historiografia Missionária',
    literalMeaning: 'O pioneiro do movimento missionário transcultural',
    theologicalSense: 'Título histórico de William Carey, que partiu da Inglaterra para a Índia, traduzindo as Escrituras Sagradas para dezenas de dialetos indianos, fundando escolas para os intocáveis e lutando contra a atroz queima de viúvas (Sati).',
    historicalOrigin: 'Sociedade Missionária Batista (1792 d.C.)',
    keyScripture: 'Is 54:2-3; Sl 96:3',
    category: 'MISSAO_HISTORIA'
  },
  'uso-dos-meios': {
    term: 'Uso dos Meios Soberanos',
    originalLanguage: 'Missiologia Reformada',
    literalMeaning: 'Deus ordena o fim da salvação e os meios para alcançá-la',
    theologicalSense: 'A resposta bíblica de Carey ao fatalismo de sua época: a soberania divina na eleição não anula nem desculpa a inação humana, mas inclui os meios ordenados por Deus (pregação, oração, envio, tradução e sacrifício de missionários).',
    historicalOrigin: 'Tratado de William Carey (1792)',
    keyScripture: 'Rm 10:17; 2Tm 2:10; 1Co 3:9',
    category: 'MISSAO_HISTORIA'
  },
  'traducao-vernacula': {
    term: 'Tradução Vernácula Transcultural',
    originalLanguage: 'Missiologia Linguística',
    literalMeaning: 'A Bíblia na língua materna de cada povo',
    theologicalSense: 'O princípio missiológico de que Deus fala na língua do coração de cada nação, tornando a tradução fiel das Escrituras Sagradas nos vernáculos indígenas a prioridade número um para a fundação de igrejas autóctones e maduras.',
    historicalOrigin: 'Colégio de Serampore (Carey, Marshman e Ward)',
    keyScripture: 'Ap 7:9; Ne 8:8; At 2:8',
    category: 'ESCRITURA'
  },
  'down-grade-controversy': {
    term: 'Down-Grade Controversy (Controvérsia do Declínio)',
    originalLanguage: 'Inglês (Down-Grade Controversy)',
    literalMeaning: 'A controvérsia sobre a descida/declínio na frouxidão doutrinária',
    theologicalSense: 'A corajosa batalha travada por Charles Spurgeon no final do século XIX, denunciando que muitas igrejas e seminários batistas britânicos estavam abandonando a inerrância das Escrituras e a expiação vicária em favor do liberalismo teológico e ceticismo moderno.',
    historicalOrigin: 'Charles H. Spurgeon e a Revista The Sword and the Trowel (1887)',
    keyScripture: 'Jd 1:3; 2Tm 4:3-4; Gl 1:6-9',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'inerrancia-biblica': {
    term: 'Inerrância Bíblica',
    originalLanguage: 'Teologia Sistemática',
    literalMeaning: 'Total ausência de erro nas Escrituras em seus autógrafos originais',
    theologicalSense: 'A doutrina de que a Bíblia, sendo inspirada pelo Deus da verdade, é inteiramente fidedigna e sem erro em tudo o que ensina, seja em matérias espirituais e teológicas, seja em registros históricos e cosmológicos.',
    historicalOrigin: 'Charles Spurgeon, B.B. Warfield e Declaração de Chicago (1978)',
    keyScripture: 'Sl 12:6; Sl 119:160; Jo 17:17; Tt 1:2',
    category: 'ESCRITURA'
  },
  'substituicao-penal': {
    term: 'Substituição Penal',
    originalLanguage: 'Soteriologia Evangélica Clássica',
    literalMeaning: 'Cristo sofreu a penalidade devida ao nosso pecado na cruz',
    theologicalSense: 'O núcleo do Evangelho bíblico defendido por Spurgeon: no Calvário, Jesus Cristo assumiu o nosso lugar como substituto legal inocente, suportando a justa ira condenatória de Deus contra os nossos pecados para nos imputar Sua justiça imaculada.',
    historicalOrigin: 'Escolástica Reformada e Pregações de Spurgeon',
    keyScripture: 'Is 53:5-6; 1Pe 2:24; 2Co 5:21; Gl 3:13',
    category: 'SOTERIOLOGIA'
  },
  'principe-dos-pregadores': {
    term: 'Príncipe dos Pregadores',
    originalLanguage: 'Título Histórico',
    literalMeaning: 'Mestre da proclamação bíblica expositiva e evangelística',
    theologicalSense: 'Designação atribuída a Charles Haddon Spurgeon, pastor do Tabernáculo Metropolitano de Londres, cujos sermões centrados na cruz e saturados de Cristo alcançaram milhões e foram lidos e impressos nos quatro cantos do mundo.',
    historicalOrigin: 'Ministério de Charles H. Spurgeon (1834–1892)',
    keyScripture: '1Co 1:23; 1Co 2:2; 2Tm 4:2',
    category: 'MISSAO_HISTORIA'
  },

  // --- ERA CONTEMPORÂNEA & GLOBAL ---
  'batismo-no-espirito-santo': {
    term: 'Batismo no Espírito Santo',
    originalLanguage: 'Pneumatologia Pentecostal',
    literalMeaning: 'Imersão no poder capacitador do Espírito de Deus',
    theologicalSense: 'A convicção pentecostal e carismática de uma experiência espiritual distinta e subsequente à conversão salvífica, na qual o crente recebe revestimento de poder celestial para testemunhar com intrepidez e operar os dons da graça de Deus.',
    historicalOrigin: 'Avivamento da Rua Azusa (William J. Seymour, Los Angeles, 1906)',
    keyScripture: 'At 1:5; At 1:8; At 2:4; Lc 24:49',
    category: 'SOTERIOLOGIA'
  },
  'glossolalia': {
    term: 'Glossolalia (Novas Línguas)',
    originalLanguage: 'Grego (γλῶσσαι - glōssai, línguas + lalein - λαλεῖν, falar)',
    literalMeaning: 'O falar em línguas espirituais',
    theologicalSense: 'O dom do Espírito Santo de orar e glorificar a Deus em idiomas humanos desconhecidos pelo orador ou em linguagens espirituais de edificação devocional pessoal, considerado no pentecostalismo clássico a evidência física inicial do batismo no Espírito.',
    historicalOrigin: 'Avivamento da Rua Azusa e Pentecostalismo Moderno',
    keyScripture: 'At 2:4; 1Co 14:2; 1Co 14:14-15; Mc 16:17',
    category: 'SOTERIOLOGIA'
  },
  'continuismo-carismatico': {
    term: 'Continuísmo Carismático',
    originalLanguage: 'Pneumatologia Contemporânea',
    literalMeaning: 'A continuidade ininterrupta de todos os dons espirituais',
    theologicalSense: 'A doutrina teológica que sustenta que todos os dons miraculosos e sobrenaturais do Espírito Santo (profecia, curas, milagres e línguas) continuam plenamente operantes e concedidos à Igreja até a Segunda Vinda de Jesus, refutando o cessacionismo.',
    historicalOrigin: 'Movimento Pentecostal e Carismático do Século XX',
    keyScripture: '1Co 1:7; 1Co 12:7-11; 1Co 13:8-12',
    category: 'ECLESIOLOGIA'
  },
  'reconciliacao-etnica': {
    term: 'Reconciliação Étnica no Espírito',
    originalLanguage: 'Historiografia de Azusa',
    literalMeaning: 'Unidade racial sob o sangue de Cristo',
    theologicalSense: 'A marca profética do Avivamento da Rua Azusa liderado pelo pastor afro-americano William J. Seymour em 1906: em uma época de segregação racial cruel ("Jim Crow"), brancos, negros, hispânicos e asiáticos ajoelhavam-se juntos como irmãos cheios do Espírito, superando preconceitos mundanos.',
    historicalOrigin: 'Missão da Fé Apostólica da Rua Azusa (1906–1909)',
    keyScripture: 'Gl 3:28; Ef 2:14-16; Cl 3:11',
    category: 'MISSAO_HISTORIA'
  },
  'graca-barata-vs-preciosa': {
    term: 'Graça Barata vs. Graça Preciosa (Billige Gnade vs. Teure Gnade)',
    originalLanguage: 'Alemão (Billige Gnade vs. Teure Gnade)',
    literalMeaning: 'A graça sem discipulado vs. A graça do chamado à cruz',
    theologicalSense: 'O alerta profético de Dietrich Bonhoeffer: "Graça barata é pregação do perdão sem arrependimento, comunhão sem disciplina, graça sem cruz". Já a "Graça preciosa" é o tesouro oculto no campo que custa ao discípulo a sua própria vida para seguir a Cristo.',
    historicalOrigin: 'Dietrich Bonhoeffer, Discipulado (Nachfolge, 1937)',
    keyScripture: 'Lc 9:23; Mt 13:44-46; Mc 8:34-35',
    category: 'SOTERIOLOGIA'
  },
  'declaracao-de-barmen': {
    term: 'Declaração Teológica de Barmen',
    originalLanguage: 'Alemão (Barmer Theologische Erklärung)',
    literalMeaning: 'A Confissão de Fé de Barmen (1934)',
    theologicalSense: 'O manifesto de resistência redigido por Karl Barth e a Igreja Confessante contra a idolatria do regime nazista de Hitler: confessou que Jesus Cristo é a única Palavra de Deus a ser obedecida, rejeitando a tentativa do Estado totalitário de subjugar a doutrina e a liberdade da Igreja.',
    historicalOrigin: 'Sínodo de Barmen (Alemanha, maio de 1934)',
    keyScripture: 'Jo 14:6; Jo 10:1-5; 1Co 3:11; At 4:19',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'status-confessionis': {
    term: 'Status Confessionis',
    originalLanguage: 'Latim',
    literalMeaning: 'Situação em que a própria integridade da confissão de fé está em jogo',
    theologicalSense: 'Momento crítico na história em que uma crise política, ética ou moral é tão extrema que a Igreja não pode calar-se ou ser neutra sem apostatar de Cristo. O silêncio perante o mal torna-se traição ao Evangelho.',
    historicalOrigin: 'Resistência da Igreja Confessante ao Nazismo e Dietrich Bonhoeffer',
    keyScripture: 'Pv 24:11-12; Gl 2:11-14; Mt 10:32-33',
    category: 'ECLESIOLOGIA'
  },
  'critica-textual-biblica': {
    term: 'Crítica Textual Bíblica',
    originalLanguage: 'Estudos Bíblicos Científicos',
    literalMeaning: 'O exame e comparação filológica dos manuscritos antigos',
    theologicalSense: 'A disciplina acadêmica que compara minuciosamente milhares de cópias manuscritas hebraicas, aramaicas e gregas da Bíblia para reconstituir com a máxima precisão científica e histórica as palavras exatas dos textos originais inspirados.',
    historicalOrigin: 'Descoberta de Qumran e Edições Críticas do Texto Bíblico',
    keyScripture: 'Lc 1:1-4; Pv 30:5; Sl 119:152',
    category: 'ESCRITURA'
  },
  'preservacao-providencial': {
    term: 'Preservação Providencial',
    originalLanguage: 'Teologia das Escrituras',
    literalMeaning: 'O cuidado soberano de Deus em guardar a Sua Palavra',
    theologicalSense: 'A doutrina que afirma que o Senhor Deus providencialmente zelou para que o texto das Escrituras Sagradas fosse preservado substancialmente puro e sem adulteração doutrinária ao longo de milênios de cópias manuscritas.',
    historicalOrigin: 'Confissão de Fé de Westminster e Descoberta dos Rolos de Qumran',
    keyScripture: 'Is 40:8; 1Pe 1:24-25; Mt 24:35',
    category: 'ESCRITURA'
  },
  'texto-massoretico': {
    term: 'Texto Massorético',
    originalLanguage: 'Hebraico (Masorah - מָסוֹרָה, tradição)',
    literalMeaning: 'O texto hebraico tradicional transmitido pelos escribas massoretas',
    theologicalSense: 'O texto padronizado do Antigo Testamento preservado com fidelidade incomparável pelos rabinos e eruditos massoretas entre os séculos VI e X d.C., cuja exatidão milenar foi comprovada de modo irrefutável com a descoberta dos manuscritos de Qumran.',
    historicalOrigin: 'Escola Massorética de Tiberíades e Qumran (1947)',
    keyScripture: 'Rm 3:2; Dt 4:2',
    category: 'ESCRITURA'
  },
  'grande-rolo-de-isaias': {
    term: 'Grande Rolo de Isaías (1QIsa)',
    originalLanguage: 'Arqueologia Bíblica de Qumran',
    literalMeaning: 'O manuscrito integral de Isaías da Caverna 1 de Qumran',
    theologicalSense: 'Um rolo de couro intacto com os 66 capítulos de Isaías datado de c. 125 a.C. — mais de mil anos mais antigo que os manuscritos hebraicos medievais então conhecidos —, provando a fidelidade textual estonteante das profecias messiânicas (incluindo Isaías 53).',
    historicalOrigin: 'Descoberta dos Manuscritos do Mar Morto em Qumran (1947)',
    keyScripture: 'Is 53; Is 40:8',
    category: 'ESCRITURA'
  },
  'trilema-de-lewis': {
    term: 'O Trilema de Lewis (Senhor, Lunático ou Mentiroso)',
    originalLanguage: 'Apologética Intelectual de C.S. Lewis',
    literalMeaning: 'Aut Deus aut homo malus (Ou Deus ou um homem insano/mau)',
    theologicalSense: 'O célebre argumento de C.S. Lewis demonstrando que Jesus afirmou ser o Deus Todo-Poderoso perdoador de pecados. Diante disso, não é logicamente honesto dizer que Ele foi apenas um "grande mestre de moral humana": ou Ele era um mentiroso perverso, ou um lunático ensandecido, ou Ele é exatamente o Senhor e Deus que disse ser.',
    historicalOrigin: 'C.S. Lewis, Cristianismo Puro e Simples (1952)',
    keyScripture: 'Jo 8:58; Jo 10:33; Mt 16:15-16',
    category: 'CRISTOLOGIA'
  },
  'argumento-do-desejo': {
    term: 'Argumento do Desejo',
    originalLanguage: 'Filosofia da Religião de Lewis',
    literalMeaning: 'O anseio pelo infinito comprova a existência da eternidade',
    theologicalSense: 'O argumento de Lewis: as criaturas não nascem com desejos naturais (como fome, sede ou afeto) sem que exista algo no mundo que possa satisfazê-los; se o coração humano possui um anseio profundo e inato que nada neste mundo finito pode preencher, a explicação mais provável é que o homem foi criado para outro mundo eterno com Deus.',
    historicalOrigin: 'C.S. Lewis, O Peso da Glória e Surpreendido pela Alegria',
    keyScripture: 'Ec 3:11; Sl 42:1-2; Sl 63:1',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'abolicao-do-homem': {
    term: 'Abolição do Homem',
    originalLanguage: 'Filosofia Moral de C.S. Lewis',
    literalMeaning: 'A destruição da humanidade pelo relativismo moral',
    theologicalSense: 'A defesa de C.S. Lewis sobre a Lei Moral Objetiva universal (o Tao): quando uma cultura destrói a crença em valores morais divinos objetivos, ela reduz os seres humanos a meros animais guiados por impulsos irracionais e manipulados por tiranos técnicos.',
    historicalOrigin: 'C.S. Lewis, The Abolition of Man (1943)',
    keyScripture: 'Rm 2:14-15; Pv 14:12',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'cristianismo-puro-e-simples': {
    term: 'Cristianismo Puro e Simples (Mere Christianity)',
    originalLanguage: 'Apologética Clássica de Lewis',
    literalMeaning: 'A fé cristã comum e universal professada por todas as tradições',
    theologicalSense: 'A metáfora de Lewis do cristianismo como um "grande salão comum" de onde saem várias portas para os quartos das diferentes confissões históricas, unidas pelo núcleo dogmático e histórico inegociável dos Credos Ecumênicos.',
    historicalOrigin: 'Palestras de C.S. Lewis na BBC durante a Segunda Guerra Mundial',
    keyScripture: 'Ef 4:4-6; Fp 1:27',
    category: 'ESCOLAS_PENSAMENTO'
  },
  'pacto-de-lausanne': {
    term: 'Pacto de Lausanne',
    originalLanguage: 'Missiologia Global Contemporânea',
    literalMeaning: 'O solene manifesto de cooperação para a evangelização mundial',
    theologicalSense: 'O documento histórico redigido por John Stott e aprovado por 2.400 líderes evangélicos de 150 países sob a liderança de Billy Graham em 1974, unindo a urgência da proclamação evangelística bíblica à responsabilidade social e ética cristã perante o mundo.',
    historicalOrigin: 'I Congresso Internacional de Evangelização Mundial em Lausanne (1974)',
    keyScripture: 'Mt 28:19-20; Mq 6:8; Lc 4:18-19',
    category: 'MISSAO_HISTORIA'
  },
  'missao-integral': {
    term: 'Missão Integral',
    originalLanguage: 'Missiologia Latino-Americana e de Lausanne',
    literalMeaning: 'Evangelismo em palavras e atos de misericórdia',
    theologicalSense: 'A compreensão bíblica articulada no Movimento de Lausanne (René Padilla e Samuel Escobar): o Evangelho de Jesus Cristo não redime apenas a alma para o céu, mas transforma toda a existência humana, exigindo que a proclamação da fé seja inseparável do socorro aos pobres, justiça social e amor sacrificial.',
    historicalOrigin: 'Pacto de Lausanne (1974 d.C.)',
    keyScripture: 'Tg 2:14-17; 1Jo 3:17-18; Mt 25:35-40',
    category: 'MISSAO_HISTORIA'
  },
  'povos-nao-alcancados': {
    term: 'Povos Não Alcançados (Unreached People Groups)',
    originalLanguage: 'Missiologia Estratégica de Ralph Winter',
    literalMeaning: 'Grupos étnicos e linguísticos sem acesso ao Evangelho de Cristo',
    theologicalSense: 'O conceito missiológico seminal apresentado por Ralph Winter em Lausanne: o foco da Grande Comissão não são apenas países geopolíticos, mas "panta ta ethne" — grupos etnolinguísticos que não possuem uma comunidade viável de cristãos nativos capazes de evangelizá-los sem auxílio externo transcultural.',
    historicalOrigin: 'Apresentação de Ralph Winter no Congresso de Lausanne (1974)',
    keyScripture: 'Mt 24:14; Mt 28:19; Ap 5:9',
    category: 'MISSAO_HISTORIA'
  },
  'inerrancia-e-suficiencia': {
    term: 'Inerrância e Suficiência da Escritura',
    originalLanguage: 'Teologia Evangélica Fundamental',
    literalMeaning: 'A Bíblia plenamente fidedigna e suficiente para salvação e vida',
    theologicalSense: 'A confissão irrevogável de Lausanne reafirmando que as Sagradas Escrituras são a revelação escrita infalível de Deus, sem erro em tudo o que afirmam, e contendo tudo o que é necessário para a fé, doutrina, missão e prática da Igreja.',
    historicalOrigin: 'Pacto de Lausanne, Artigo 2 (1974)',
    keyScripture: '2Tm 3:16-17; Sl 19:7-11; 2Pe 1:3',
    category: 'ESCRITURA'
  },
  'sul-global': {
    term: 'Sul Global (Global South)',
    originalLanguage: 'Sociologia e Demografia do Cristianismo',
    literalMeaning: 'O cristianismo na África, Ásia e América Latina',
    theologicalSense: 'A histórica transição demográfica do século XX e XXI em que o centro de gravidade numérico, missionário e teológico da Igreja mudou da Europa e América do Norte para o Sul Global, onde comunidades cristãs dinâmicas, vibrantes e perseguidas crescem exponencialmente.',
    historicalOrigin: 'Estudos Demográficos de Philip Jenkins (The Next Christendom, 2002)',
    keyScripture: 'Sl 72:8-11; Is 49:6; Ap 7:9',
    category: 'MISSAO_HISTORIA'
  },
  'igreja-policeentrica': {
    term: 'Igreja Policêntrica',
    originalLanguage: 'Missiologia Global',
    literalMeaning: 'A fé com múltiplos centros espirituais no mundo',
    theologicalSense: 'O reconhecimento contemporâneo de que o cristianismo mundial não possui mais um centro metropolitano único em Roma, Genebra ou Londres, mas floresce simultaneamente com liderança pujante em Nairóbi, Seul, São Paulo, Lagos e Manila.',
    historicalOrigin: 'Missiologia Global do Século XXI',
    keyScripture: 'Ef 2:19-22; 1Co 12:20-27',
    category: 'ECLESIOLOGIA'
  },
  'missao-reversa': {
    term: 'Missão Reversa (Reverse Mission)',
    originalLanguage: 'Missiologia Contemporânea',
    literalMeaning: 'Missionários do Sul Global evangelizando o Ocidente secularizado',
    theologicalSense: 'O fenômeno histórico contemporâneo onde missionários e pastores da África, Brasil e Coreia do Sul são enviados para plantar igrejas e revitalizar o cristianismo na Europa ocidental e na América do Norte, regiões que outrora enviaram os missionários pioneiros.',
    historicalOrigin: 'Fenômeno Missionário Pós-Colonial do Século XXI',
    keyScripture: 'At 13:1-3; Rm 1:14-16',
    category: 'MISSAO_HISTORIA'
  },
  'desocidentalizacao-da-fe': {
    term: 'Desocidentalização da Fé',
    originalLanguage: 'Teologia Global',
    literalMeaning: 'A redescoberta da universalidade cultural do Evangelho',
    theologicalSense: 'A constatação teológica de que o cristianismo não é uma religião intrinsecamente ocidental ou branca, mas uma fé que nasceu no Oriente Médio semita e que expressa a beleza do Evangelho em todas as culturas, línguas e etnias da humanidade.',
    historicalOrigin: 'Teologia Bíblica Mundial e Missiologia do Século XXI',
    keyScripture: 'Ap 5:9-10; At 10:34-35; Jo 4:21-24',
    category: 'MISSAO_HISTORIA'
  }
};

/**
 * Normaliza e busca a explicação de um termo dogmático.
 * Se não houver correspondência exata, realiza busca difusa inteligente.
 */
export function getDogmaticTermExplanation(rawTerm: string): DogmaticTermExplanation {
  if (!rawTerm) {
    return {
      term: 'Termo Teológico',
      literalMeaning: 'Formulação de fé cristã histórica',
      theologicalSense: 'Termo utilizado na história da Igreja para sintetizar uma doutrina bíblica.',
      historicalOrigin: 'Tradição Teológica da Igreja'
    };
  }

  const cleaned = rawTerm.trim();
  const normalized = normalizeDogmaticKey(cleaned);

  // 1. Busca direta por chave
  for (const [key, item] of Object.entries(DOGMATIC_TERMS_DICTIONARY)) {
    if (key === normalized || normalizeDogmaticKey(item.term) === normalized) {
      return item;
    }
  }

  // 2. Busca por inclusão de substring ou termos principais
  for (const [key, item] of Object.entries(DOGMATIC_TERMS_DICTIONARY)) {
    const itemNorm = normalizeDogmaticKey(item.term);
    if (normalized.includes(key) || key.includes(normalized) || itemNorm.includes(normalized) || normalized.includes(itemNorm)) {
      return item;
    }
  }

  // 3. Fallback inteligente estruturado caso o termo seja novo ou uma variação
  let languageHint = 'Terminologia Dogmática';
  if (/^[A-Z][a-z]+ (est|non|dei|sub|pro|cum|in|sit|ad)/i.test(cleaned) || /us$|um$|ia$|tio$/i.test(cleaned)) {
    languageHint = 'Origem em Latim Teológico';
  } else if (/os$|is$|sis$|ikos$/i.test(cleaned) || /[ἀ-ῼ]/.test(cleaned)) {
    languageHint = 'Origem em Grego Patrístico';
  }

  return {
    term: cleaned,
    originalLanguage: languageHint,
    literalMeaning: `Formulação conceitual: "${cleaned}"`,
    theologicalSense: `Expressão teológica formulada no curso dos debates doutrinários da Igreja para salvaguardar a ortodoxia bíblica, elucidar o mistério da fé e orientar a confissão cristã perante controvérsias históricas.`,
    historicalOrigin: 'Desenvolvimento Histórico-Dogmático da Cristandade',
    keyScripture: '2Tm 1:13-14'
  };
}

export function getAllDogmaticTerms(): DogmaticTermExplanation[] {
  return Object.values(DOGMATIC_TERMS_DICTIONARY);
}

import { TheologicalTimelineEvent, TimelineEventCategory } from '../types';

export const theologicalTimelineData: TheologicalTimelineEvent[] = [
  {
    id: 'niceia-1-325',
    year: 325,
    yearDisplay: '325 d.C.',
    title: 'Primeiro Concílio de Nicéia (I Concílio Ecumênico)',
    category: 'concilio',
    traditionImpact: ['catholic', 'protestant', 'orthodox'],
    summary: 'Definição da plena divindade do Filho e sua consubstancialidade (Homoousios) com o Pai, refutando a heresia de Ário.',
    historicalContext: 'Convocado pelo imperador Constantino I em Nicéia (atual İznik, Turquia) para dirimir a controvérsia ariana que ameaçava dividir a unidade do Império Romano.',
    theologicalSignificance: {
      catholicPerspective: 'Ato canônico fundamental do Magistério colegial sob os legados do Bispo de Roma (São Silvestre I), afirmando o Credo Niceno como regra perpétua de ortodoxia.',
      protestantPerspective: 'Recepção unânime por todos os reformadores como magistral formulação bíblica da plena igualdade e eternidade de Cristo.',
      orthodoxPerspective: 'Primeiro dos Sete Santos Concílios Ecumênicos infalíveis, guiados pelo Espírito Santo, que estabeleceu a Tradição dogmática imutável da Igreja.'
    },
    primaryDocumentOrCanon: {
      title: 'Credo Niceno Original (325)',
      excerpt: 'Cremos em um só Senhor Jesus Cristo, o Filho de Deus, gerado do Pai, unigênito, isto é, da substância do Pai (ek tēs ousias tou Patros), Deus de Deus, Luz da Luz, Deus verdadeiro de Deus verdadeiro, gerado não feito, consubstancial ao Pai (homoousion tō Patri).',
      citationRef: 'Atos do Concílio de Nicéia I; Denzinger-Hünermann (DH) 125'
    },
    keyFigures: ['Santo Atanásio de Alexandria', 'Ário de Alexandria', 'Osio de Córdoba', 'Imperador Constantino'],
    relatedScripturePassages: ['Jo 1:1-3', 'Jo 10:30', 'Hb 1:3', 'Cl 1:15-17']
  },
  {
    id: 'constantinopla-1-381',
    year: 381,
    yearDisplay: '381 d.C.',
    title: 'Primeiro Concílio de Constantinopla (II Concílio Ecumênico)',
    category: 'concilio',
    traditionImpact: ['catholic', 'protestant', 'orthodox'],
    summary: 'Proclamação solene da divindade do Espírito Santo ("Senhor e Fonte da Vida") contra os pneumatômacos, formulando o Credo Niceno-Constantinopolitano definitivo.',
    historicalContext: 'Convocado pelo imperador Teodósio I em Constantinopla para consolidar o triunfo da ortodoxia nicena e combater os seguidores de Macedônio que negavam a divindade do Espírito.',
    theologicalSignificance: {
      catholicPerspective: 'Fixação da forma ecumênica do Credo comum, ao qual séculos mais tarde o Ocidente agregou o Filioque sob a autoridade pontifícia.',
      protestantPerspective: 'Confissão clássica trinitária adotada pelos credos históricos luteranos, reformados e anglicanos.',
      orthodoxPerspective: 'O texto sagrado e intocável do Credo original. A Ortodoxia mantém que nenhum bispo ou sé tem autoridade para modificar ou adicionar termos a este cânon ecumênico.'
    },
    primaryDocumentOrCanon: {
      title: 'Credo Niceno-Constantinopolitano (381)',
      excerpt: 'Cremos no Espírito Santo, Senhor e Fonte da Vida, que procede do Pai (to ek tou Patros ekporeuomenon), que com o Pai e o Filho é adorado e glorificado, que falou pelos profetas.',
      citationRef: 'Concílio de Constantinopla I, Cânon dos Padres Capadócios; DH 150'
    },
    keyFigures: ['São Gregório Nazianzeno', 'São Basílio Magno', 'São Gregório de Nissa', 'Imperador Teodósio I'],
    relatedScripturePassages: ['Jo 15:26', 'Mt 28:19', '1Co 2:10-11', 'At 5:3-4']
  },
  {
    id: 'efeso-431',
    year: 431,
    yearDisplay: '431 d.C.',
    title: 'Concílio de Éfeso (III Concílio Ecumênico) & Ruptura Nestoriāna',
    category: 'concilio',
    traditionImpact: ['catholic', 'protestant', 'orthodox'],
    summary: 'Definição dogmática de Maria como Theotokos (Mãe de Deus) em decorrência da unidade pessoal do Verbo Encarnado, repudiando o nestorianismo.',
    historicalContext: 'Nestório, patriarca de Constantinopla, recusava chamar Maria de Theotokos, propondo Christotokos. São Cirilo de Alexandria liderou a defesa da união física do Verbo.',
    theologicalSignificance: {
      catholicPerspective: 'Fundamento cristológico de todas as prerrogativas marianas e triunfo da Sé Apostólica que apoiou firmemente São Cirilo de Alexandria.',
      protestantPerspective: 'Aceito como dogma cristológico fundamental: o título Theotokos é confessado não como exaltação autônoma de Maria, mas como garantia de que o Menino de Belém é Deus verdadeiro.',
      orthodoxPerspective: 'Afirmação da Theotokos como protótipo da humanidade redimida e figura cimeira da intercessão dos santos na Divina Liturgia.'
    },
    primaryDocumentOrCanon: {
      title: 'Doze Anátemas de São Cirilo contra Nestório',
      excerpt: 'Se alguém não confessar que o Emanuel é Deus em verdade e que, por conseguinte, a Santa Virgem é Mãe de Deus (Theotokos) — pois deu à luz segundo a carne o Verbo de Deus feito carne —, seja anátema.',
      citationRef: 'Concílio de Éfeso, Carta de Cirilo aprovada no Concílio; DH 252'
    },
    keyFigures: ['São Cirilo de Alexandria', 'Nestório', 'Papa Celestino I'],
    relatedScripturePassages: ['Lc 1:43', 'Gl 4:4', 'Mt 1:23']
  },
  {
    id: 'calcedonia-451',
    year: 451,
    yearDisplay: '451 d.C.',
    title: 'Concílio de Calcedônia (IV Concílio Ecumênico) & União Hipostática',
    category: 'concilio',
    traditionImpact: ['catholic', 'protestant', 'orthodox'],
    summary: 'A suprema definição cristológica: Cristo é reconhecido em duas naturezas (divina e humana), sem confusão, sem mudança, sem divisão e sem separação.',
    historicalContext: 'Em Calcedônia (atual Kadıköy, Istambul), os bispos acolheram o famoso Tomo a Flaviano do Papa São Leão Magno. O concílio gerou o cisma das Igrejas Não-Calcedonianas (Coptas, Armênios, Sírios).',
    theologicalSignificance: {
      catholicPerspective: 'O ápice da autoridade doutrinal do Papa como sucessor de Pedro: os padres conciliares aclamaram: "Pedro falou pela boca de Leão!".',
      protestantPerspective: 'A regra definitiva de toda cristologia reformada, puritana e luterana para refutar erros monofisistas e eutiquianos.',
      orthodoxPerspective: 'Quarto marco ecumênico inegociável da ortodoxia calcedoniana compartilhado com Bizâncio.'
    },
    primaryDocumentOrCanon: {
      title: 'Definição de Fé de Calcedônia (451)',
      excerpt: 'Um só e mesmo Cristo, Filho, Senhor, Unigênito, reconhecido em duas naturezas (en dyo physesin), sem confusão (asynchytōs), sem mutação (atreptōs), sem divisão (adiairetōs), sem separação (achōristōs), nunca sendo suprimida a distinção das naturezas pela união.',
      citationRef: 'Concílio de Calcedônia, Definição Dogmática; DH 301-302'
    },
    keyFigures: ['Papa São Leão I Magno', 'Flaviano de Constantinopla', 'Diósdoro de Alexandria', 'Imperador Marciano'],
    relatedScripturePassages: ['Fp 2:5-8', 'Cl 2:9', '1Tm 3:16', 'Jo 1:14']
  },
  {
    id: 'niceia-2-787',
    year: 787,
    yearDisplay: '787 d.C.',
    title: 'Segundo Concílio de Nicéia (VII Concílio Ecumênico) & Os Santos Ícones',
    category: 'concilio',
    traditionImpact: ['catholic', 'protestant', 'orthodox'],
    summary: 'Legitimação da veneração dos Santos Ícones: a honra prestada à imagem transita para o protótipo, distinguindo veneração (proskynesis) de adoração (latria).',
    historicalContext: 'Após décadas de perseguição iconoclasta sob imperadores bizantinos que destruíam representações artísticas de Cristo, a imperatriz Irene convocou o concílio para restaurar os ícones.',
    theologicalSignificance: {
      catholicPerspective: 'Aceito como 7º Concílio Ecumênico, ratificando a legitimidade do uso didático e devocional das imagens sagradas na Igreja ocidental.',
      protestantPerspective: 'Rejeitado ou visto com profunda reserva pela Reforma Reformada e Luterana como prelúdio da idolatria medieval e violação do Segundo Mandamento.',
      orthodoxPerspective: 'O "Triunfo da Ortodoxia": a confecção e veneração dos ícones é a prova visual suprema da real Encarnação histórica do Verbo Incriado.'
    },
    primaryDocumentOrCanon: {
      title: 'Definição Dogmática de Nicéia II (787)',
      excerpt: 'Definimos que as santas e preciosas imagens [...] devem ser expostas nas santas igrejas de Deus. Pois quanto mais frequentemente forem contempladas, tanto mais os que as olham são levados à recordação e amor dos seus protótipos, a saudá-los com uma veneração respeitosa (aspasmon kai timētiken proskynēsin), não com a verdadeira adoração (latreian) que compete apenas à natureza divina.',
      citationRef: 'Concílio de Nicéia II, Definição; DH 600-601'
    },
    keyFigures: ['São João Damasceno', 'Imperatriz Irene', 'São Tarásio de Constantinopla', 'Papa Adriano I'],
    relatedScripturePassages: ['Cl 1:15', 'Êx 25:18-22', 'Nm 21:8-9', 'Hb 9:5']
  },
  {
    id: 'focio-cisma-867',
    year: 867,
    yearDisplay: '867–879 d.C.',
    title: 'A Crise de Fócio e a Controvérsia do Filioque',
    category: 'cisma',
    traditionImpact: ['catholic', 'orthodox'],
    summary: 'Primeiro confronto canônico direto entre Constantinopla e Roma: condenação da inserção do Filioque no Credo e disputa jurisdicional sobre a cristianização dos eslavos.',
    historicalContext: 'O Patriarca Fócio de Constantinopla denunciou as inovações litúrgicas e dogmáticas introduzidas por missionários francos e germânicos apoiados por Roma.',
    theologicalSignificance: {
      catholicPerspective: 'Episódio de insubordinação patriarcal perante a sé romana; Roma mais tarde legitimou o 8º concílio de 869 que havia deposto Fócio.',
      protestantPerspective: 'Demonstra historicamente a emergência de rivalidades clericais humanas pelo monopólio do poder eclesiástico sobre a Europa.',
      orthodoxPerspective: 'São Fócio é reverenciado como o "Pilar da Ortodoxia", tendo redigido a refutação teológica magistral contra a alteração unilateral do Credo.'
    },
    primaryDocumentOrCanon: {
      title: 'São Fócio: Encíclica aos Tronos Orientais (867)',
      excerpt: 'Além dos erros precedentemente enumerados, ousaram introduzir na sacrossanta confissão de fé, confirmada por todos os Concílios Ecumênicos, a espúria adição de que o Espírito Santo não procede somente do Pai, mas também do Filho.',
      citationRef: 'São Fócio o Grande, Mistagogia do Espírito Santo; Patrologia Graeca (PG) 102'
    },
    keyFigures: ['São Fócio o Grande', 'Papa Nicolau I', 'Papa João VIII', 'Imperador Basílio I'],
    relatedScripturePassages: ['Jo 15:26', 'Gl 1:8']
  },
  {
    id: 'grande-cisma-1054',
    year: 1054,
    yearDisplay: '1054 d.C.',
    title: 'O Grande Cisma do Oriente e Ocidente',
    category: 'cisma',
    traditionImpact: ['catholic', 'orthodox'],
    summary: 'A excomunhão mútua entre os legados de Roma e o Patriarca de Constantinopla, fraturando institucionalmente a comunhão milenar entre Oriente e Ocidente.',
    historicalContext: 'Em 16 de julho de 1054, o Cardeal Humberto de Silva Candida colocou uma bula papal de excomunhão sobre o altar-mor da basílica de Santa Sofia; Cerulário reuniu o sínodo e anatemizou os legados.',
    theologicalSignificance: {
      catholicPerspective: 'Cisma doloroso no qual os gregos romperam com o centro perpétuo da unidade visível instituído por Cristo na Cátedra de Pedro.',
      protestantPerspective: 'Evidência histórica de que a reivindicação de supremacia papal universal foi o principal fator desagregador da catolicidade primitiva.',
      orthodoxPerspective: 'A triste separação do Ocidente papal, que abandonou a conciliaridade apostólica original em favor do absolutismo monárquico romano.'
    },
    primaryDocumentOrCanon: {
      title: 'Bula de Humberto de Silva Candida e Édito Sinodal de Cerulário',
      excerpt: 'Seja anátema com todos os hereges, com o Diabo e com seus anjos, a não ser que se emendem. Amém. (Bula Papal) / Que aqueles que blasfemam contra a fé ortodoxa e insultam o Espírito Santo sejam anátema. (Sínodo de Constantinopla)',
      citationRef: 'Mansi, Sacrorum Conciliorum Nova et Amplissima Collectio, XIX'
    },
    keyFigures: ['Patriarca Miguel Cerulário', 'Cardeal Humberto de Silva Candida', 'Papa Leão IX'],
    relatedScripturePassages: ['Jo 17:21', '1Co 1:10-13', 'Ef 4:3-6']
  },
  {
    id: 'ferrara-florenca-1439',
    year: 1439,
    yearDisplay: '1438–1439 d.C.',
    title: 'Concílio de Ferrara-Florença e a Recusa Popular Bizantina',
    category: 'concilio',
    traditionImpact: ['catholic', 'orthodox'],
    summary: 'Tentativa ecumênica oficial de reunificação entre Roma e os Patriarcados Orientais sob a Bula Laetentur Caeli, abortada pela oposição do clero e povo de Bizâncio liderados por São Marcos de Éfeso.',
    historicalContext: 'Sob iminente invasão turca-otomana de Constantinopla, o imperador João VIII Paleólogo viajou à Itália em busca de socorro militar ocidental mediante a aceitação da união com o Papa.',
    theologicalSignificance: {
      catholicPerspective: 'Considerado o 17º Concílio Ecumênico católico, onde os bispos orientais reconheceram a procedência do Espírito e a jurisdição do Papa.',
      protestantPerspective: 'Demonstração de como acordos teológicos forçados por conveniências geopolíticas não subsistem sem base bíblica autêntica.',
      orthodoxPerspective: 'São Marcos de Éfeso permaneceu como o único bispo a recusar a assinatura, preservando a pureza da fé contra o compromisso político.'
    },
    primaryDocumentOrCanon: {
      title: 'Decreto Laetentur Caeli (1439)',
      excerpt: 'Definimos que o Espírito Santo procede do Pai e do Filho eternamente [...] e que a Santa Sé Apostólica e o Romano Pontífice possuem o primado sobre todo o orbe da terra.',
      citationRef: 'Bula Laetentur Caeli do Papa Eugênio IV; DH 1300-1308'
    },
    keyFigures: ['São Marcos de Éfeso', 'Papa Eugênio IV', 'Imperador João VIII Paleólogo', 'Cardeal Bessarion'],
    relatedScripturePassages: ['Gl 2:11-14', '2Co 6:14']
  },
  {
    id: 'teses-lutero-1517',
    year: 1517,
    yearDisplay: '1517 d.C.',
    title: 'As 95 Teses de Martinho Lutero e a Eclosão da Reforma',
    category: 'confissao',
    traditionImpact: ['catholic', 'protestant'],
    summary: 'A afixação das 95 Teses na porta da Igreja do Castelo de Wittenberg, desafiando a venda de indulgências papais e redescobrindo a justificação gratuita pela graça.',
    historicalContext: 'Johann Tetzel comercializava indulgências papais para financiar a reconstrução da Basílica de São Pedro em Roma. Lutero propôs um debate acadêmico que incendiou a Europa.',
    theologicalSignificance: {
      catholicPerspective: 'Início de uma ruptura trágica da unidade da Igreja ocidental, respondida mais tarde pela Bula Exsurge Domine (1520) e pelo Concílio de Trento.',
      protestantPerspective: 'O despertar da Reforma do século XVI: retorno às Escrituras como suprema autoridade e redescoberta do Evangelho da justificação pela fé somente (Sola Fide).',
      orthodoxPerspective: 'O Oriente assistiu à controvérsia como consequência inevitável da hipertrofia jurídica escolástica papal ocidental.'
    },
    primaryDocumentOrCanon: {
      title: 'Martinho Lutero: 95 Teses (Teses 1 e 62)',
      excerpt: 'Tese 1: Dizendo nosso Senhor e Mestre Jesus Cristo: "Arrependei-vos...", quis que toda a vida dos fiéis fosse penitência. / Tese 62: O verdadeiro tesouro da Igreja é o sacrossanto Evangelho da glória e da graça de Deus.',
      citationRef: 'Martinho Lutero, Disputatio pro declaratione virtutis indulgentiarum (1517)'
    },
    keyFigures: ['Martinho Lutero', 'Johann Tetzel', 'Papa Leão X', 'Frederico o Sábio'],
    relatedScripturePassages: ['Rm 1:16-17', 'Ef 2:8-9', '1Tm 2:5', 'Mt 4:17']
  },
  {
    id: 'confissao-augsburgo-1530',
    year: 1530,
    yearDisplay: '1530 d.C.',
    title: 'A Confissão de Augsburgo (Confessio Augustana)',
    category: 'confissao',
    traditionImpact: ['catholic', 'protestant'],
    summary: 'A principal confissão de fé pública luterana, redigida por Filipe Melâncton e apresentada ao imperador Carlos V, delineando a doutrina evangélica e a catolicidade bíblica da Reforma.',
    historicalContext: 'A Dieta imperial de Augsburgo foi convocada pelo imperador do Sacro Império com o propósito de restaurar a unidade religiosa para enfrentar o avanço dos turcos no Leste Europeu.',
    theologicalSignificance: {
      catholicPerspective: 'Respondida pela Confutatio Pontificia, apontando os pontos em que a nova doutrina se afastava do magistério eclesiástico tradicional.',
      protestantPerspective: 'Documento fundacional do Protestantismo Histórico, demonstrando que a doutrina evangélica não era inovação herética, mas a fé apostólica e patrística purificada de abusos.',
      orthodoxPerspective: 'Mais tarde, teólogos luteranos de Tübingen enviaram a Confissão ao Patriarca Jeremias II de Constantinopla, gerando o primeiro diálogo teológico luterano-ortodoxo (1573-1581).'
    },
    primaryDocumentOrCanon: {
      title: 'Confissão de Augsburgo, Artigo IV (Da Justificação)',
      excerpt: 'Ensina-se também que não podemos obter remissão do pecado e justiça diante de Deus por mérito, obra ou satisfação nossos, mas que alcançamos a remissão do pecado e somos justificados diante de Deus por graça, por causa de Cristo, mediante a fé.',
      citationRef: 'Filipe Melâncton, Confessio Augustana (1530), Art. IV'
    },
    keyFigures: ['Filipe Melâncton', 'Carlos V', 'Martinho Lutero (em Coburgo)', 'Johann Eck'],
    relatedScripturePassages: ['Rm 3:21-28', 'Rm 4:5', 'Gl 2:16', 'Tt 3:5-7']
  },
  {
    id: 'concilio-trento-1545',
    year: 1545,
    yearDisplay: '1545–1563 d.C.',
    title: 'Concílio de Trento e a Reforma Católica',
    category: 'concilio',
    traditionImpact: ['catholic', 'protestant', 'orthodox'],
    summary: 'O 19º Concílio Ecumênico católico reuniu-se ao longo de 18 anos, codificando formalmente a teologia católica contra o protestantismo, fixando o cânon bíblico e decretando a renovação moral e pastoral.',
    historicalContext: 'Reunido na cidade episcopal de Trento (norte da Itália) sob três pontífices sucessivos, constituiu a resposta institucional mais profunda e rigorosa da Igreja Romana ao impacto da Reforma.',
    theologicalSignificance: {
      catholicPerspective: 'A bússola dogmática e disciplinar da Igreja Católica Romana durante 400 anos, definindo a Tradição, os 7 sacramentos e a justificação santificante.',
      protestantPerspective: 'Cristalização canônica da oposição católica aos Cinco Solas, pronunciando anátemas solenes contra quem sustentasse que o pecador é justificado unicamente pela fé.',
      orthodoxPerspective: 'A Ortodoxia concordou com a rejeição tridentina do Sola Scriptura protestante, mas recusou o absolutismo papal e as formulações latinas do Purgatório e do mérito.'
    },
    primaryDocumentOrCanon: {
      title: 'Concílio de Trento, Decreto sobre a Justificação (Cânon IX)',
      excerpt: 'Se alguém disser que o pecador é justificado somente pela fé, de tal modo que nada mais se exija para colaborar a fim de alcançar a graça da justificação [...], seja anátema.',
      citationRef: 'Concílio de Trento, Sessão VI (13 de janeiro de 1547), Cânon 9; DH 1559'
    },
    keyFigures: ['Papa Paulo III', 'Papa Pio IV', 'Cardeal Carlos Borromeu', 'Cardeal Roberto Belarmino'],
    relatedScripturePassages: ['Tg 2:24', '1Co 13:2', 'Gl 5:6']
  },
  {
    id: 'confissao-westminster-1647',
    year: 1647,
    yearDisplay: '1647 d.C.',
    title: 'A Confissão de Fé de Westminster',
    category: 'confissao',
    traditionImpact: ['protestant'],
    summary: 'O ápice da teologia sistemática reformada e do puritanismo anglo-escocês, articulando com máxima precisão o Sola Scriptura, a Soberania de Deus, a Teologia do Pacto e o governo presbiteriano.',
    historicalContext: 'Redigida pela Assembleia de Teólogos reunida na Abadia de Westminster em Londres por convocação do Parlamento inglês durante a Guerra Civil Inglesa.',
    theologicalSignificance: {
      catholicPerspective: 'Expressão mais acabada do calvinismo sistemático estrito, radicalmente oposta à sacramentalidade e à sucessão apostólica católica.',
      protestantPerspective: 'Padrão doutrinário adotado por igrejas presbiterianas e reformadas em todo o globo, famoso por sua riqueza exegética e equilíbrio sistemático.',
      orthodoxPerspective: 'Ilustra a lógica hiper-racionalista da predestinação incondicional ocidental agostiniana que a Ortodoxia rejeitou categoricamente.'
    },
    primaryDocumentOrCanon: {
      title: 'Confissão de Fé de Westminster, Capítulo I, §6 (Da Sagrada Escritura)',
      excerpt: 'Todo o conselho de Deus concernente a todas as coisas necessárias para a sua própria glória e para a salvação, fé e vida do homem, ou é expressamente declarado na Escritura, ou por boa e necessária consequência pode ser deduzido dela.',
      citationRef: 'A Confissão de Fé de Westminster (1647), Cap. I, Art. VI'
    },
    keyFigures: ['Alexander Henderson', 'Samuel Rutherford', 'Thomas Goodwin', 'Oliver Cromwell'],
    relatedScripturePassages: ['2Tm 3:16-17', 'Sl 19:7-9', 'Is 8:20']
  },
  {
    id: 'sinodo-jerusalem-1672',
    year: 1672,
    yearDisplay: '1672 d.C.',
    title: 'O Sínodo de Jerusalém (Confissão de Dositeu)',
    category: 'concilio',
    traditionImpact: ['orthodox', 'protestant', 'catholic'],
    summary: 'Reunião magna dos patriarcas ortodoxos na Igreja da Natividade em Belém para repudiar os ensinos calvinistas publicados sob o nome de Cirilo Lukaris e declarar a autêntica doutrina oriental.',
    historicalContext: 'O Patriarca Cirilo Lukaris de Constantinopla havia publicado uma "Confissão de Fé" de teor fortemente genebrino. O Patriarca Dositeu de Jerusalém convocou o sínodo para expurgar tais teses.',
    theologicalSignificance: {
      catholicPerspective: 'Constatou a proximidade da teologia sacramental ortodoxa com o catolicismo romano na rejeição conjunta das novidades doutrinárias protestantes.',
      protestantPerspective: 'Demonstrou que a Igreja Ortodoxa do século XVII havia adotado categorias aristotélico-escolásticas similares às de Trento para repudiar os reformadores.',
      orthodoxPerspective: 'Documento sinodal pan-ortodoxo de primeira grandeza, afirmando a sinergia salvífica, os Santos Mistérios e o Cânon tradicional da Septuaginta.'
    },
    primaryDocumentOrCanon: {
      title: 'Confissão de Dositeu, Decreto XIII',
      excerpt: 'Cremos que o homem é justificado não simplesmente pela fé somente, mas pela fé que opera pelo amor, isto é, pela fé e pelas obras juntas [...] Não vemos a justificação como mera imputação externa forense.',
      citationRef: 'Atos do Sínodo de Jerusalém (1672), Decreto 13'
    },
    keyFigures: ['Patriarca Dositeu II de Jerusalém', 'Cirilo Lukaris', 'Patriarca Nectário'],
    relatedScripturePassages: ['Tg 2:14-26', 'Gl 5:6']
  },
  {
    id: 'vaticano-1-1870',
    year: 1870,
    yearDisplay: '1870 d.C.',
    title: 'Concílio Vaticano I e os Dogmas Papais (Pastor Aeternus)',
    category: 'concilio',
    traditionImpact: ['catholic', 'protestant', 'orthodox'],
    summary: 'Definição dogmática solene da Infalibilidade Pontifícia e da Primazia de Jurisdição Universal e Imediata do Bispo de Roma sobre todas as igrejas.',
    historicalContext: 'Convocado pelo Papa Pio IX no contexto das turbulências políticas da unificação italiana (Risorgimento) e do fim iminente dos Estados Papais.',
    theologicalSignificance: {
      catholicPerspective: 'Dogma de fé divina e católica irrevogável: o Papa goza de especial assistência do Espírito Santo ao definir solenemente ex cathedra matéria de fé ou moral.',
      protestantPerspective: 'Rejeição total como suprema blasfêmia que usurpa a soberania de Cristo como único Cabeça e Mediador infalível de Sua Igreja.',
      orthodoxPerspective: 'Aprofundamento trágico da ferida do Cisma de 1054: transformar um bispo particular em juiz supremo e infalível sobre a Tradição conciliar milenar.'
    },
    primaryDocumentOrCanon: {
      title: 'Constituição Dogmática Pastor Aeternus, Cap. IV (1870)',
      excerpt: 'Ensinamos e definimos como dogma divinamente revelado que o Romano Pontífice, quando fala ex cathedra [...], goza daquela infalibilidade de que o Divino Redentor quis que estivesse dotada a sua Igreja. Portanto, tais definições do Romano Pontífice são irreformáveis por si mesmas, e não pelo consentimento da Igreja.',
      citationRef: 'Concílio Vaticano I, Sessão IV (18 de julho de 1870); DH 3074'
    },
    keyFigures: ['Papa Pio IX', 'Cardeal Henry Edward Manning', 'Ignaz von Döllinger', 'Cardeal Newman'],
    relatedScripturePassages: ['Mt 16:18-19', 'Lc 22:32', 'Jo 21:15-17']
  },
  {
    id: 'vaticano-2-1962',
    year: 1962,
    yearDisplay: '1962–1965 d.C.',
    title: 'Concílio Vaticano II e a Abertura Ecumênica Moderna',
    category: 'concilio',
    traditionImpact: ['catholic', 'protestant', 'orthodox'],
    summary: 'O 21º Concílio Ecumênico católico, convocado por São João XXIII para um "Aggiornamento" pastoral. Promulgou o decreto Unitatis Redintegratio e revogou mutuamente com Constantinopla os anátemas de 1054.',
    historicalContext: 'Mais de 2.500 bispos reuniram-se na Basílica de São Pedro, acompanhados por observadores oficiais protestantes e ortodoxos, transformando a relação com as demais confissões.',
    theologicalSignificance: {
      catholicPerspective: 'Revolução pastoral: os cristãos não-católicos deixaram de ser vistos como "hereges públicos" para serem reconhecidos como "irmãos separados" incorporados a Cristo pelo batismo.',
      protestantPerspective: 'Saudado pela maior abertura bíblica e litúrgica católica (leitura bíblica na língua vernácula), mantendo contudo as divergências teológicas de fundo.',
      orthodoxPerspective: 'Em 7 de dezembro de 1965, o Papa Paulo VI e o Patriarca Ecumênico Atenágoras I leram declarações simultâneas em Roma e Constantinopla cancelando as excomunhões mútuas de 1054.'
    },
    primaryDocumentOrCanon: {
      title: 'Declaração Conjunta de Paulo VI e Atenágoras I (1965)',
      excerpt: 'Desejam igualmente retirar da memória e do meio da Igreja as sentenças de excomunhão então pronunciadas, cuja lembrança age até nossos dias como um obstáculo à aproximação na caridade, e relegá-las ao esquecimento.',
      citationRef: 'Declaração Comum Católica-Ortodoxa lida no Vaticano II e no Fanar (1965); AAS 58'
    },
    keyFigures: ['Papa São João XXIII', 'Papa São Paulo VI', 'Patriarca Atenágoras I de Constantinopla', 'Cardeal Augustin Bea'],
    relatedScripturePassages: ['Jo 17:20-23', 'Ef 4:1-6']
  },
  {
    id: 'jddj-1999',
    year: 1999,
    yearDisplay: '1999 d.C.',
    title: 'Declaração Conjunta sobre a Doutrina da Justificação (JDDJ)',
    category: 'dialogo_ecumenico',
    traditionImpact: ['catholic', 'protestant'],
    summary: 'Acordo histórico assinado em Augsburgo entre a Federação Luterana Mundial e a Igreja Católica Romana, proclamando um consenso fundamental sobre a justificação pela fé e graça.',
    historicalContext: 'Após mais de três décadas de diálogo teológico internacional bilateral, os representantes assinaram a declaração no Dia da Reforma (31 de outubro de 1999).',
    theologicalSignificance: {
      catholicPerspective: 'Superação pastoral das condenações mútuas do século XVI: os anátemas de Trento não mais se aplicam à doutrina luterana expressa neste documento.',
      protestantPerspective: 'Marco de diálogo ecumênico, posteriormente subscrito pelo Conselho Metodista Mundial (2006) e pela Comunhão Mundial de Igrejas Reformadas (2017).',
      orthodoxPerspective: 'Testemunho do abrandamento das controvérsias jurídicas ocidentais, reforçando o foco bíblico comum na misericórdia de Deus.'
    },
    primaryDocumentOrCanon: {
      title: 'Declaração Conjunta Católico-Luterana sobre a Justificação, §15',
      excerpt: 'Juntos confessamos: Somente por graça, na fé na ação salvífica de Cristo e não por causa de nosso mérito, somos aceitos por Deus e recebemos o Espírito Santo, que nos renova os corações e nos capacita e chama para as boas obras.',
      citationRef: 'Federação Luterana Mundial e Pontifício Conselho para a Unidade dos Cristãos, JDDJ §15 (1999)'
    },
    keyFigures: ['Cardeal Edward Idris Cassidy', 'Bispo Christian Krause', 'Papa São João Paulo II'],
    relatedScripturePassages: ['Rm 3:23-24', 'Ef 2:8-10', 'Tt 3:4-7']
  }
];

export function getTimelineEventsByCategory(cat: TimelineEventCategory): TheologicalTimelineEvent[] {
  return theologicalTimelineData.filter(event => event.category === cat);
}

export function searchTimelineEvents(query: string): TheologicalTimelineEvent[] {
  if (!query.trim()) return theologicalTimelineData;
  const q = query.toLowerCase().trim();
  return theologicalTimelineData.filter(event => {
    return (
      event.title.toLowerCase().includes(q) ||
      event.yearDisplay.toLowerCase().includes(q) ||
      event.summary.toLowerCase().includes(q) ||
      event.historicalContext.toLowerCase().includes(q) ||
      (event.theologicalSignificance.catholicPerspective && event.theologicalSignificance.catholicPerspective.toLowerCase().includes(q)) ||
      (event.theologicalSignificance.protestantPerspective && event.theologicalSignificance.protestantPerspective.toLowerCase().includes(q)) ||
      (event.theologicalSignificance.orthodoxPerspective && event.theologicalSignificance.orthodoxPerspective.toLowerCase().includes(q)) ||
      event.keyFigures.some(figure => figure.toLowerCase().includes(q)) ||
      (event.primaryDocumentOrCanon && (
        event.primaryDocumentOrCanon.title.toLowerCase().includes(q) ||
        event.primaryDocumentOrCanon.excerpt.toLowerCase().includes(q)
      ))
    );
  });
}

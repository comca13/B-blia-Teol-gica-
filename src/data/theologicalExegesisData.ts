import { 
  GenreHermeneuticsGuide, 
  LiteraryGenre, 
  SitzImLeben, 
  OriginalLanguageWord, 
  TypologyConnection,
  BiblePassage
} from '../types';

export const GENRE_HERMENEUTICS_GUIDES: Record<LiteraryGenre, GenreHermeneuticsGuide> = {
  NARRATIVA_HISTORICA: {
    genre: 'NARRATIVA_HISTORICA',
    label: 'Narrativa Histórica',
    description: 'Relato teológico inspirado de fatos históricos reais que revelam as ações e o caráter soberano de Deus na vida de indivíduos e nações.',
    hermeneuticalRule: 'Distinga com precisão o descritivo do prescritivo: o que a Bíblia relata que alguém fez não é necessariamente o que Deus ordena que façamos. O herói supremo de toda narrativa bíblica é sempre o próprio Deus.',
    commonPitfall: 'Moralizar biografias transformando homens falhos (Sansão, Davi, Jacó) em modelos perfeitos de conduta ética ou ignorar o contexto pactual da narrativa.'
  },
  LEI_TORA: {
    genre: 'LEI_TORA',
    label: 'Lei & Instrução (Torá)',
    description: 'Estatutos, mandamentos civis, cerimoniais e morais dados no contexto da aliança de Deus com Israel no Sinai.',
    hermeneuticalRule: 'Interprete cada preceito sob a lente do caráter santo de Deus e seu cumprimento em Cristo (Mt 5:17). Busque o princípio moral atemporal subjacente à legislação antiga.',
    commonPitfall: 'Pretensão de aplicar leis teocráticas e rituais da Antiga Aliança diretamente à sociedade civil ou à Igreja contemporânea sem o crivo teológico da Nova Aliança.'
  },
  POESIA_SAPIENCIAL: {
    genre: 'POESIA_SAPIENCIAL',
    label: 'Poesia & Literatura Sapiencial',
    description: 'Expressão lírica da alma humana diante de Deus (Salmos, Lamentações) e reflexões existenciais práticas sobre a vida justa no temor do Senhor (Jó, Provérbios, Eclesiastes).',
    hermeneuticalRule: 'Decodifique o paralelismo hebraico (sinônimo, antitético, sintético) e a linguagem figurada imagética. Reconheça que a poesia comunica verdade através de afetos e metáforas.',
    commonPitfall: 'Tratar provérbios poéticos de observação geral da vida como promessas dogmáticas e infalíveis de prosperidade imediata em 100% dos casos.'
  },
  PROFECIA_CLASSICA: {
    genre: 'PROFECIA_CLASSICA',
    label: 'Profecia Clássica',
    description: 'Mensagens oraculares de denúncia contra a quebra do pacto e proclamação soberana de juízo e redenção futura, com ênfase primordial no chamado ao arrependimento contemporâneo.',
    hermeneuticalRule: 'Identifique primeiro o destinatário histórico original (Israel, Judá ou nações vizinhas) e a acusação pactual antes de saltar para o cumprimento escatológico ou messiânico.',
    commonPitfall: 'Tratar a profecia bíblica como charada futurista desprovida de compromisso moral, divorciando o texto de sua denúncia de idolatria e opressão social.'
  },
  APOCALIPTICA: {
    genre: 'APOCALIPTICA',
    label: 'Literatura Apocalíptica',
    description: 'Gênero nascido em tempos de crise aguda, usando rica linguagem simbólica, visões cósmicas e números sagrados para assegurar o triunfo final absoluto do Reino de Deus sobre o mal.',
    hermeneuticalRule: 'Interprete os símbolos de acordo com as chaves fornecidas no próprio texto e no cânone do Antigo Testamento. Busque o impacto teológico global da visão antes dos microdetalhes.',
    commonPitfall: 'Literalizar símbolos poéticos (como monstros híbridos e estrelas caindo) e montar tabelas cronológicas modernas sobre manchetes de jornal contemporâneas.'
  },
  EVANGELHO_BIOGRAFIA: {
    genre: 'EVANGELHO_BIOGRAFIA',
    label: 'Evangelho & Biografia Teológica',
    description: 'Testemunho apostólico do ministério, ensinos, morte expiatória e ressurreição triunfal de Jesus de Nazaré como o Ungido Messias de Deus e Salvador do cosmos.',
    hermeneuticalRule: 'Observe o propósito teológico e o público específico de cada evangelista (Mateus aos judeus, Marcos aos romanos, Lucas aos gentios cultos, João à universalidade).',
    commonPitfall: 'Desarmonizar superficialmente relatos complementares ou reduzir a vida de Cristo a um mero compêndio de filosofia moral, esvaziando a Cruz redentora.'
  },
  PARABOLA: {
    genre: 'PARABOLA',
    label: 'Parábola',
    description: 'Narrativa vívida e familiar extraída do cotidiano da Galileia ou da Judeia criada para provocar um choque de valores e ilustrar uma verdade central do Reino de Deus.',
    hermeneuticalRule: 'Procure o ponto focal teológico central (geralmente uma ou duas verdades decisivas do Reino) e o impacto surpreendente ou escandaloso na audiência original.',
    commonPitfall: 'Alegorizar cada minúcia narrativa (o jumento, as moedas, as duas dracmas) atribuindo significados ocultos que o Mestre nunca pretendeu comunicar.'
  },
  EPISTOLA_PAULINA: {
    genre: 'EPISTOLA_PAULINA',
    label: 'Epístola Paulina',
    description: 'Cartas doutrinárias e pastorais ocasionais redigidas pelo Apóstolo dos Gentios para instruir, edificar e corrigir comunidades e cooperadores no primeiro século.',
    hermeneuticalRule: 'Reconstrua a ocasião histórica (Sitz im Leben) da carta: quem eram os oponentes? Qual era o problema na comunidade? Siga o fluxo lógico da teologia (indicativo) para a ética prática (imperativo).',
    commonPitfall: 'Arrancar versículos isolados ("posso todas as coisas naquele que me fortalece") descontextualizados do argumento teológico e da exortação ao contentamento.'
  },
  EPISTOLA_GERAL: {
    genre: 'EPISTOLA_GERAL',
    label: 'Epístola Geral / Católica',
    description: 'Cartas apostólicas universais (Hebreus, Tiago, Pedro, João, Judas) dirigidas a amplos círculos de igrejas cristãs enfrentando sofrimento, heresias e perseguições.',
    hermeneuticalRule: 'Analise o vocabulário pastoral de resistência e lealdade cristã em meio à diáspora e à oposição cultural pagã.',
    commonPitfall: 'Colocar apóstolos em falso conflito doutrinário (ex: opor Paulo em Romanos 3 a Tiago em Tiago 2, ignorando que ambos combatem erros opostos sobre a fé viva).'
  }
};

export const SITZ_IM_LEBEN_DATABASE: Record<string, SitzImLeben> = {
  genesisCreationPatriarchs: {
    authorOrTradition: 'Moisés (Tradição mosaica formativa)',
    originalAudience: 'Comunidade dos hebreus recém-libertos da escravidão do Egito no deserto do Sinai',
    existentialCrisis: 'Crise de identidade após 400 anos imersos na cultura politeísta egípcia; necessidade de saber quem é o verdadeiro Deus e qual sua aliança pactual ancestral',
    theologicalTheme: 'Soberania absoluta de Javé sobre o cosmos (desmitologizando os deuses egípcios e babilônicos) e a eleição incondicional da linhagem abraâmica'
  },
  exodusWilderness: {
    authorOrTradition: 'Moisés, o mediador da Antiga Aliança',
    originalAudience: 'A congregação nômade de Israel acampada aos pés do Monte Sinai e marchando pelo deserto de Parã',
    existentialCrisis: 'Como um povo outrora escravo e de dura cerviz pode sobreviver e conviver com a presença de um Deus infinitamente Santo no meio do acampamento',
    theologicalTheme: 'Redenção pelo sangue pascal, a santidade da Lei moral e a habitação graciosa da glória de Deus no Tabernáculo'
  },
  deuteronomyRenew: {
    authorOrTradition: 'Moisés (Discursos testamentários finais)',
    originalAudience: 'A nova geração de israelitas nascida no deserto, às margens do Rio Jordão nas campinas de Moabe',
    existentialCrisis: 'A tentação de esquecer as alianças de Deus ao entrar na rica terra cananeia e ser seduzida pela idolatria e imoralidade dos cultos locais de fertilidade',
    theologicalTheme: 'O grande Shemá (Dt 6:4): amor exclusivo e indivisível a Javé, renovação do pacto e a memória salvífica como antídoto contra a apostasia'
  },
  psalmsDavidic: {
    authorOrTradition: 'Rei Davi, Asafe, os Filhos de Coré e os levitas cantores',
    originalAudience: 'A comunidade cúltica de Israel reunida nas festas de peregrinação em Sião e no Templo de Jerusalém',
    existentialCrisis: 'A dor da traição, a angústia da perseguição por inimigos, a culpa do pecado pessoal e os silêncios aparentes de Deus na história humana',
    theologicalTheme: 'A oração honesta que se transfigura em louvor pactual; a soberania do Rei messiânico e a habitação protetora de Javé'
  },
  isaiahProphecy: {
    authorOrTradition: 'Profeta Isaías, filho de Amoz (Jerusalém)',
    originalAudience: 'Os reis de Judá (Acaz, Ezequias) e o povo da capital sob o terror do avanço imperial militar da Assíria',
    existentialCrisis: 'O colapso da segurança nacional e a tentação de confiar em alianças políticas com o Egito em vez de descansar na promessa do Santo de Israel',
    theologicalTheme: 'A santidade transcendente de Deus, o Juízo purificador contra a injustiça social e a revelação gloriosa do Messias Emanuel e do Servo Sofredor'
  },
  jeremiahExileWarning: {
    authorOrTradition: 'Profeta Jeremias de Anatote (O profeta que chora)',
    originalAudience: 'A liderança corrupta, os falsos profetas e os habitantes de Jerusalém nos últimos anos antes da invasão babilônica',
    existentialCrisis: 'A falsa segurança de que "o Templo do Senhor" jamais permitiria a invasão estrangeira, mascarando uma sociedade apóstata e imoral',
    theologicalTheme: 'A inevitabilidade da disciplina divina pelo cativeiro caldeu e a promessa inquebrantável de uma Nova Aliança gravada no coração (Jr 31:31-34)'
  },
  romansPauline: {
    authorOrTradition: 'Paulo de Tarso, apóstolo de Cristo aos gentios (comunidade paulina em Corinto)',
    originalAudience: 'Comunidade cristã mista na capital do Império Romano (judeus recém-retornados do edito de Cláudio e gentios romanos)',
    existentialCrisis: 'Tensão étnica e teológica aguda entre crentes judeus e gentios sobre a Lei, a circuncisão e a primazia espiritual no Reino',
    theologicalTheme: 'A justiça de Deus revelada no Evangelho: justificação unicamente pela fé, sem distinção de raça ou mérito humano, inaugurando a reconciliação cósmica (Rm 1-8)'
  },
  gospelsMinistry: {
    authorOrTradition: 'Os Quatro Evangelistas (Mateus, Marcos, Lucas, João)',
    originalAudience: 'Igrejas do primeiro século em transição da matriz judaica para as cidades do mundo greco-romano sob ocupação imperial',
    existentialCrisis: 'Entender a verdadeira identidade e a realeza de Jesus face à perplexidade de sua crucificação como um maldito e a rejeição por parte das autoridades de Israel',
    theologicalTheme: 'A inauguração do Reino de Deus através da vida, ensinos, cruz expiatória e ressurreição vitoriosa de Jesus, o Cristo'
  },
  hebrewsGeneral: {
    authorOrTradition: 'Pastor apostólico erudito (círculo paulino/apoliniano)',
    originalAudience: 'Comunidade de cristãos de origem judaica enfrentando ostracismo social, espoliação de bens e cansaço espiritual',
    existentialCrisis: 'Tentação aguda de retroceder ao sistema ritual do templo judaico para escapar do vitupério e perseguição sofridos pelo nome de Jesus',
    theologicalTheme: 'A absoluta supremacia de Cristo sobre anjos, Moisés e Arão: Seu sacerdócio eterno segundo a ordem de Melquisedeque e o único sacrifício cabal'
  },
  revelationApocalypse: {
    authorOrTradition: 'Apóstolo João exilado na ilha penal de Patmos',
    originalAudience: 'As sete igrejas da província romana da Ásia Menor (Éfeso, Esmirna, Pérgamo, etc.)',
    existentialCrisis: 'Perseguição violenta imposta pelo culto imperial romano sob Domiciano; dilema entre queimar incenso a César como "Senhor e Deus" ou enfrentar o martírio',
    theologicalTheme: 'O Cordeiro que foi morto venceu: o controle soberano de Deus sobre a história, a ruína da Babilônia idólatra e o triunfo final da Nova Jerusalém'
  }
};

export const ORIGINAL_LANGUAGE_LEXICON: Record<string, OriginalLanguageWord> = {
  bara: {
    id: 'bara',
    term: 'בָּרָא',
    transliteration: 'Bara',
    language: 'HEBRAICO',
    strongNumber: 'H1254',
    literalTranslation: 'Criar do nada, trazer à existência por ato soberano exclusivo',
    theologicalSignificance: 'Verbo de uso teológico estritamente reservado a Deus no Antigo Testamento. Nenhum homem jamais é sujeito do verbo bara. Diferente de "fazer" (asah) ou "formar" (yatsar) que utilizam matéria prévia, bara denota a soberania absoluta do Criador ao fazer brotar a realidade do nada por Sua Palavra irresistível.',
    occurrencesNote: 'Gênesis 1:1, 1:21, 1:27; Isaías 40:26, 45:18'
  },
  tohuVaVohu: {
    id: 'tohu-vavohu',
    term: 'תֹּהוּ וָבֹהוּ',
    transliteration: 'Tohu va-Vohu',
    language: 'HEBRAICO',
    strongNumber: 'H8414 / H922',
    literalTranslation: 'Sem forma e vazio; estado informe e desprovido de habitantes',
    theologicalSignificance: 'Descreve o cosmos em seu estágio inicial embrionário antes da ordem divina. A criação nos dias 1 a 3 resolve o tohu (trazendo forma, separando luz, águas e terra), e nos dias 4 a 6 resolve o vohu (preenchendo os espaços com astros, animais e a humanidade).',
    occurrencesNote: 'Gênesis 1:2; Jeremias 4:23'
  },
  hesed: {
    id: 'hesed',
    term: 'חֶסֶד',
    transliteration: 'Hesed',
    language: 'HEBRAICO',
    strongNumber: 'H2617',
    literalTranslation: 'Amor pactual infalível, benevolência leal, misericórdia constante',
    theologicalSignificance: 'Uma das palavras teológicas mais densas das Escrituras. Não é uma mera emoção passageira, mas a fidelidade incondicional de Deus em manter Sua promessa de aliança mesmo quando o homem quebra o pacto. É o amor que se obriga a si mesmo por juramento sagrado.',
    occurrencesNote: 'Êxodo 34:6; Salmos 136 (em todos os 26 versículos); Lamentações 3:22'
  },
  berit: {
    id: 'berit',
    term: 'בְּרִית',
    transliteration: 'Berit',
    language: 'HEBRAICO',
    strongNumber: 'H1285',
    literalTranslation: 'Aliança sagrada, pacto solene selado com sangue',
    theologicalSignificance: 'O eixo estruturante de toda a revelação bíblica. Em hebraico não se "assina" uma aliança, mas "corta-se" uma aliança (karat berit), em alusão aos animais sacrificados entre os quais as partes passavam, invocando sobre si a maldição caso violassem a palavra empenhada.',
    occurrencesNote: 'Gênesis 15:18; 17:7; Êxodo 24:8; Jeremias 31:31'
  },
  tsedakah: {
    id: 'tsedakah',
    term: 'צְדָקָה',
    transliteration: 'Tsedakah',
    language: 'HEBRAICO',
    strongNumber: 'H6666',
    literalTranslation: 'Justiça pactual, fidelidade aos relacionamentos ordenados por Deus',
    theologicalSignificance: 'No pensamento bíblico, a justiça não é uma virtude abstrata aristotélica, mas a conduta que cumpre com retidão as obrigações de um relacionamento com Deus e com o próximo, especialmente defendendo os vulneráveis (o órfão, a viúva e o estrangeiro).',
    occurrencesNote: 'Gênesis 15:6; Isaías 1:27; Amós 5:24'
  },
  shalom: {
    id: 'shalom',
    term: 'שָׁלוֹם',
    transliteration: 'Shalom',
    language: 'HEBRAICO',
    strongNumber: 'H7965',
    literalTranslation: 'Paz integral, completude, harmonia cósmica e restauração total',
    theologicalSignificance: 'Muito além da simples ausência de guerra bélica. Shalom denota um estado em que todas as coisas funcionam sob o desígnio perfeito do Criador: integridade do corpo, prosperidade justa da comunidade, tranquilidade da alma e comunhão com Deus.',
    occurrencesNote: 'Números 6:26; Isaías 9:6; 53:5; Jeremias 29:11'
  },
  charis: {
    id: 'charis',
    term: 'χάρις',
    transliteration: 'Charis',
    language: 'GREGO',
    strongNumber: 'G5485',
    literalTranslation: 'Graça soberana, favor livre e imerecido concedido a quem merecia juízo',
    theologicalSignificance: 'O coração pulsante do Evangelho do Novo Testamento. Diferente da dádiva no mundo greco-romano (que exigia reciprocidade ou honra), a graça divina em Cristo é derramada sobre inimigos impiedosos, cancelando a dívida do pecado e conferindo justificação e vida eterna.',
    occurrencesNote: 'João 1:16; Romanos 3:24; Efésios 2:8-9'
  },
  pistis: {
    id: 'pistis',
    term: 'πίστις',
    transliteration: 'Pistis',
    language: 'GREGO',
    strongNumber: 'G4102',
    literalTranslation: 'Fé fiduciária, confiança leal, entrega firme da vontade',
    theologicalSignificance: 'Não se trata de mero consentimento intelectual ou crença cega, mas do abandono total de qualquer autoconfiança para repousar exclusivamente na suficiência da obra vicária de Cristo. Em Paulo, a fé é a mão vazia do mendigo estendida para receber o dom da graça.',
    occurrencesNote: 'Romanos 1:17; 3:28; Gálatas 2:16; Hebreus 11:1'
  },
  dikaiosyne: {
    id: 'dikaiosyne',
    term: 'δικαιοσύνη',
    transliteration: 'Dikaiosyne',
    language: 'GREGO',
    strongNumber: 'G1343',
    literalTranslation: 'Justiça, justificação, veredito forense declaratório de retidão',
    theologicalSignificance: 'Conceito crucial em Romanos. É a justiça perfeita de Cristo imputada (creditada) legalmente ao pecador culpado pelo tribunal celestial, declarando-o plenamente justo e livre de condenação, não por suas próprias obras, mas pela fé no sangue expiatório.',
    occurrencesNote: 'Romanos 3:21-22; 4:3-5; 5:17; 2 Coríntios 5:21'
  },
  logos: {
    id: 'logos',
    term: 'λόγος',
    transliteration: 'Logos',
    language: 'GREGO',
    strongNumber: 'G3056',
    literalTranslation: 'O Verbo, a Palavra eterna, Razão divina autoexpressa',
    theologicalSignificance: 'No prólogo de João (Jo 1:1-14), o termo une a rica teologia da Palavra criadora de Deus no Antigo Testamento (Dabar Yahweh) com o anseio da filosofia grega pela inteligência que sustenta o cosmos. O Logos não é um princípio cósmico impessoal, mas a Segunda Pessoa da Trindade que se fez carne.',
    occurrencesNote: 'João 1:1, 1:14; 1 João 1:1; Apocalipse 19:13'
  },
  hilasmos: {
    id: 'hilasmos',
    term: 'ἱλασμός',
    transliteration: 'Hilasmos',
    language: 'GREGO',
    strongNumber: 'G2434',
    literalTranslation: 'Propiciação, sacrifício que aplaca a justa ira divina e expia o pecado',
    theologicalSignificance: 'Define o que ocorreu na Cruz: Jesus absorveu em Si a plenitude do justo furor de Deus contra a iniquidade humana, satisfazendo as exigências de justiça do Santo e tornando possível a misericórdia graciosa sem comprometer a retidão moral do Criador.',
    occurrencesNote: 'Romanos 3:25 (hilasterion); 1 João 2:2; 4:10'
  }
};

export const TYPOLOGY_CONNECTIONS: TypologyConnection[] = [
  {
    typeOldTestament: 'Adão e a Queda Cósmica no Éden (Gênesis 3)',
    antitypeNewTestament: 'Cristo, o Último Adão e a Ressurreição (Romanos 5:12-19; 1 Coríntios 15:45-47)',
    theologicalBridge: 'Assim como pelo pecado e desobediência de um só homem (o primeiro Adão) a morte entrou no cosmos e reinou sobre todos, muito mais pela perfeita obediência do Segundo Homem (Cristo) a graça superabundou e a justiça reina para a vida eterna.',
    intertextualCitations: ['Gn 3:6', 'Rm 5:18', '1Co 15:22', '1Co 15:45']
  },
  {
    typeOldTestament: 'O Cordeiro Pascal sem defeito aspergido nos umbrais (Êxodo 12)',
    antitypeNewTestament: 'Cristo, nosso Cordeiro Pascal sacrificado (1 Coríntios 5:7; João 1:29; 1 Pedro 1:18-19)',
    theologicalBridge: 'O sangue do cordeiro imaculado livrou os primogênitos hebreus do anjo da destruição na noite do Êxodo; da mesma forma, o sangue aspergido de Cristo nos resgata do poder da condenação e da escravidão do pecado para a verdadeira liberdade.',
    intertextualCitations: ['Êx 12:13', 'Jo 1:29', '1Co 5:7', '1Pe 1:19', 'Ap 5:6']
  },
  {
    typeOldTestament: 'O Sacrifício de Isaque no Monte Moriá (Gênesis 22)',
    antitypeNewTestament: 'O Pai que não poupou Seu próprio Filho no Calvário (João 3:16; Romanos 8:32; Hebreus 11:17-19)',
    theologicalBridge: 'O pai amoroso conduzindo seu filho unigênito à colina com a lenha às costas, e o próprio Deus provendo o carneiro substitutivo: figura antecipada do Calvário, onde o Pai eterno entrega Seu Filho com o madeiro nas costas para ser o Substituto vicário do pecador.',
    intertextualCitations: ['Gn 22:8', 'Jo 3:16', 'Rm 8:32', 'Hb 11:19']
  },
  {
    typeOldTestament: 'A Serpente de Bronze erguida na haste no deserto (Números 21:4-9)',
    antitypeNewTestament: 'Cristo levantado na Cruz para a salvação de todo o que crer (João 3:14-15)',
    theologicalBridge: 'Os israelitas mordidos pelo veneno mortal das serpentes olhavam pela fé para o símbolo erguido e eram curados instantaneamente. Assim também, o pecador contaminado pelo veneno do pecado olha com fé para o Cristo levantado na Cruz e recebe a vida eterna.',
    intertextualCitations: ['Nm 21:9', 'Jo 3:14-15', 'Jo 12:32']
  },
  {
    typeOldTestament: 'O Sacerdócio Real de Melquisedeque (Gênesis 14; Salmo 110:4)',
    antitypeNewTestament: 'O Sacerdócio Eterno e Superior de Cristo (Hebreus 7:1-28)',
    theologicalBridge: 'Melquisedeque, sem registro de genealogia sacerdotal levítica, acumulava os títulos de Rei da Justiça e Rei da Paz (Salém), recebendo dízimos de Abraão. Cristo cumpre este tipo como o Sumo Sacerdote eterno e Rei que intercede perpetuamente pelos seus.',
    intertextualCitations: ['Gn 14:18', 'Sl 110:4', 'Hb 5:6', 'Hb 7:17']
  },
  {
    typeOldTestament: 'A Rocha Ferida de onde jorrou água viva em Refidim (Êxodo 17:1-7)',
    antitypeNewTestament: 'A Rocha Espiritual que seguia o povo era Cristo (1 Coríntios 10:4; João 7:37-38)',
    theologicalBridge: 'A rocha precisou ser golpeada pela vara do juízo de Deus para que águas abundantes fluíssem no deserto árido para matar a sede de um povo rebelde. Cristo foi ferido pelo juízo de Deus na cruz para que o Espírito Santo e a água da vida eterna jorrassem sobre os crentes.',
    intertextualCitations: ['Êx 17:6', 'Sl 78:15', 'Jo 7:38', '1Co 10:4']
  },
  {
    typeOldTestament: 'O Tabernáculo e o Véu do Santo dos Santos (Êxodo 25-40)',
    antitypeNewTestament: 'O Verbo que tabernaculou entre nós e o Véu de Sua Carne (João 1:14; Hebreus 10:19-22)',
    theologicalBridge: 'O Tabernáculo material era o local da habitação da Shekinah entre o povo, onde o véu impedia o acesso direto. Na morte de Cristo, o véu rasgou-se de alto a baixo, abrindo um novo e vivo caminho para entrarmos com intrepidez na presença santa de Deus.',
    intertextualCitations: ['Êx 26:31', 'Mt 27:51', 'Jo 1:14', 'Hb 10:20']
  },
  {
    typeOldTestament: 'O Sinal do Profeta Jonas três dias nas entranhas do peixe (Jonas 1:17)',
    antitypeNewTestament: 'A Ressurreição ao terceiro dia triunfando sobre a sepultura (Mateus 12:39-40)',
    theologicalBridge: 'Assim como Jonas esteve três dias e três noites no ventre do grande peixe e foi devolvido à terra seca para proclamar a salvação aos gentios de Nínive, assim o Filho do Homem esteve sepultado e ressurgiu triunfante ao terceiro dia para levar a salvação a todas as nações.',
    intertextualCitations: ['Jn 1:17', 'Mt 12:40', '1Co 15:4']
  }
];

export function getGenreForReading(dayNumber: number, passages?: BiblePassage[]): GenreHermeneuticsGuide {
  const firstBook = (passages && passages[0]?.book ? passages[0].book.toLowerCase() : '');

  // Epístolas Paulinas
  if (['romanos', '1 coríntios', '2 coríntios', 'gálatas', 'efésios', 'filipenses', 'colossenses', '1 tessalonicenses', '2 tessalonicenses', '1 timóteo', '2 timóteo', 'tito', 'filemom'].some(b => firstBook.includes(b))) {
    return GENRE_HERMENEUTICS_GUIDES.EPISTOLA_PAULINA;
  }

  // Epístolas Gerais
  if (['hebreus', 'tiago', '1 pedro', '2 pedro', '1 joão', '2 joão', '3 joão', 'judas'].some(b => firstBook.includes(b))) {
    return GENRE_HERMENEUTICS_GUIDES.EPISTOLA_GERAL;
  }

  // Apocalipse
  if (firstBook.includes('apocalipse') || firstBook.includes('revelation')) {
    return GENRE_HERMENEUTICS_GUIDES.APOCALIPTICA;
  }

  // Evangelhos
  if (['mateus', 'marcos', 'lucas', 'joão'].some(b => firstBook.includes(b))) {
    return GENRE_HERMENEUTICS_GUIDES.EVANGELHO_BIOGRAFIA;
  }

  // Poesia e Sabedoria
  if (['salmos', 'provérbios', 'eclesiastes', 'cantares', 'jó', 'lamentações'].some(b => firstBook.includes(b))) {
    return GENRE_HERMENEUTICS_GUIDES.POESIA_SAPIENCIAL;
  }

  // Profetas
  if (['isaías', 'jeremias', 'ezequiel', 'daniel', 'oséias', 'joel', 'amós', 'obadias', 'jonas', 'miqueias', 'naum', 'habacuque', 'sofonias', 'ageu', 'zacarias', 'malaquias'].some(b => firstBook.includes(b))) {
    if (firstBook.includes('daniel')) return GENRE_HERMENEUTICS_GUIDES.APOCALIPTICA;
    return GENRE_HERMENEUTICS_GUIDES.PROFECIA_CLASSICA;
  }

  // Lei / Torá
  if (['levítico', 'deuteronômio'].some(b => firstBook.includes(b))) {
    return GENRE_HERMENEUTICS_GUIDES.LEI_TORA;
  }

  if (firstBook.includes('êxodo') && dayNumber >= 40) {
    return GENRE_HERMENEUTICS_GUIDES.LEI_TORA;
  }

  // Default: Narrativa Histórica (Gênesis, Josué, Juízes, Samuel, Reis, Crônicas, Atos, etc.)
  return GENRE_HERMENEUTICS_GUIDES.NARRATIVA_HISTORICA;
}

export function getSitzImLebenForReading(dayNumber: number, passages?: BiblePassage[]): SitzImLeben {
  const firstBook = (passages && passages[0]?.book ? passages[0].book.toLowerCase() : '');

  if (firstBook.includes('romanos')) {
    return SITZ_IM_LEBEN_DATABASE.romansPauline;
  }
  if (firstBook.includes('hebreus')) {
    return SITZ_IM_LEBEN_DATABASE.hebrewsGeneral;
  }
  if (firstBook.includes('apocalipse')) {
    return SITZ_IM_LEBEN_DATABASE.revelationApocalypse;
  }
  if (['mateus', 'marcos', 'lucas', 'joão'].some(b => firstBook.includes(b))) {
    return SITZ_IM_LEBEN_DATABASE.gospelsMinistry;
  }
  if (['1 coríntios', '2 coríntios', 'gálatas', 'efésios', 'filipenses', 'colossenses'].some(b => firstBook.includes(b))) {
    return SITZ_IM_LEBEN_DATABASE.romansPauline;
  }
  if (['isaías'].some(b => firstBook.includes(b))) {
    return SITZ_IM_LEBEN_DATABASE.isaiahProphecy;
  }
  if (['jeremias', 'lamentações'].some(b => firstBook.includes(b))) {
    return SITZ_IM_LEBEN_DATABASE.jeremiahExileWarning;
  }
  if (['salmos'].some(b => firstBook.includes(b))) {
    return SITZ_IM_LEBEN_DATABASE.psalmsDavidic;
  }
  if (['deuteronômio'].some(b => firstBook.includes(b))) {
    return SITZ_IM_LEBEN_DATABASE.deuteronomyRenew;
  }
  if (['êxodo', 'levítico', 'números'].some(b => firstBook.includes(b))) {
    return SITZ_IM_LEBEN_DATABASE.exodusWilderness;
  }

  // Padrão: Gênesis / Patriarcas
  return SITZ_IM_LEBEN_DATABASE.genesisCreationPatriarchs;
}

export function getLexiconForReading(dayNumber: number, passages?: BiblePassage[]): OriginalLanguageWord[] {
  const firstBook = (passages && passages[0]?.book ? passages[0].book.toLowerCase() : '');

  // Novo Testamento
  if (['romanos', 'gálatas'].some(b => firstBook.includes(b))) {
    return [
      ORIGINAL_LANGUAGE_LEXICON.dikaiosyne,
      ORIGINAL_LANGUAGE_LEXICON.charis,
      ORIGINAL_LANGUAGE_LEXICON.pistis
    ];
  }
  if (['joão'].some(b => firstBook.includes(b))) {
    return [
      ORIGINAL_LANGUAGE_LEXICON.logos,
      ORIGINAL_LANGUAGE_LEXICON.charis
    ];
  }
  if (['1 joão', 'hebreus'].some(b => firstBook.includes(b))) {
    return [
      ORIGINAL_LANGUAGE_LEXICON.hilasmos,
      ORIGINAL_LANGUAGE_LEXICON.pistis
    ];
  }

  // Antigo Testamento
  if (firstBook.includes('gênesis')) {
    if (dayNumber <= 5) {
      return [
        ORIGINAL_LANGUAGE_LEXICON.bara,
        ORIGINAL_LANGUAGE_LEXICON.tohuVaVohu,
        ORIGINAL_LANGUAGE_LEXICON.berit
      ];
    }
    return [
      ORIGINAL_LANGUAGE_LEXICON.berit,
      ORIGINAL_LANGUAGE_LEXICON.tsedakah,
      ORIGINAL_LANGUAGE_LEXICON.hesed
    ];
  }

  if (firstBook.includes('salmos')) {
    return [
      ORIGINAL_LANGUAGE_LEXICON.hesed,
      ORIGINAL_LANGUAGE_LEXICON.shalom
    ];
  }

  if (firstBook.includes('isaías')) {
    return [
      ORIGINAL_LANGUAGE_LEXICON.shalom,
      ORIGINAL_LANGUAGE_LEXICON.tsedakah
    ];
  }

  return [
    ORIGINAL_LANGUAGE_LEXICON.hesed,
    ORIGINAL_LANGUAGE_LEXICON.berit
  ];
}

export function getTypologyForReading(dayNumber: number, passages?: BiblePassage[]): TypologyConnection[] {
  const firstBook = (passages && passages[0]?.book ? passages[0].book.toLowerCase() : '');

  if (firstBook.includes('gênesis')) {
    if (dayNumber <= 10) {
      return [TYPOLOGY_CONNECTIONS[0]]; // Adão e Cristo
    }
    if (dayNumber >= 15 && dayNumber <= 22) {
      return [TYPOLOGY_CONNECTIONS[2], TYPOLOGY_CONNECTIONS[4]]; // Isaque e Melquisedeque
    }
  }

  if (firstBook.includes('êxodo')) {
    return [TYPOLOGY_CONNECTIONS[1], TYPOLOGY_CONNECTIONS[5]]; // Cordeiro e Rocha
  }

  if (firstBook.includes('números')) {
    return [TYPOLOGY_CONNECTIONS[3]]; // Serpente de bronze
  }

  if (firstBook.includes('romanos')) {
    return [TYPOLOGY_CONNECTIONS[0]]; // Adão e Cristo
  }

  if (firstBook.includes('hebreus')) {
    return [TYPOLOGY_CONNECTIONS[4], TYPOLOGY_CONNECTIONS[6]]; // Melquisedeque e Tabernáculo
  }

  if (firstBook.includes('jonas') || firstBook.includes('mateus')) {
    return [TYPOLOGY_CONNECTIONS[7]]; // Sinal de Jonas
  }

  return [TYPOLOGY_CONNECTIONS[1]]; // Cordeiro Pascal
}

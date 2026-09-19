import { BiblicalDifficulty, ApologeticsCategory } from '../types';

export const APOLOGETICS_CATEGORY_META: Record<
  ApologeticsCategory,
  {
    label: string;
    shortLabel: string;
    icon: string;
    description: string;
    color: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
  }
> = {
  CONTRADICAO_APARENTE: {
    label: 'Aparente Contradição',
    shortLabel: 'Contradição',
    icon: 'GitCompare',
    description: 'Textos com divergências superficiais de perspectiva, ênfase teológica, números ou sequências cronológicas.',
    color: 'from-blue-950/40 via-slate-900 to-indigo-950/40 text-blue-300 border-blue-500/30',
    badgeBg: 'bg-blue-950/80',
    badgeBorder: 'border-blue-500/40',
    badgeText: 'text-blue-300'
  },
  DILEMA_ETICO: {
    label: 'Dilema Ético & Moral',
    shortLabel: 'Ética & Moral',
    icon: 'Scale',
    description: 'Passagens do Antigo Testamento que desafiam a sensibilidade moderna sobre juízo divino, guerra e legislação civil.',
    color: 'from-amber-950/40 via-stone-900 to-amber-950/30 text-amber-300 border-amber-500/30',
    badgeBg: 'bg-amber-950/80',
    badgeBorder: 'border-amber-500/40',
    badgeText: 'text-amber-300'
  },
  PRECISAO_HISTORICA: {
    label: 'Precisão Histórica & Arqueológica',
    shortLabel: 'História',
    icon: 'Landmark',
    description: 'Questões cronológicas, registros governamentais imperiais romanos ou evidências arqueológicas do Antigo Oriente.',
    color: 'from-emerald-950/40 via-stone-900 to-emerald-950/30 text-emerald-300 border-emerald-500/30',
    badgeBg: 'bg-emerald-950/80',
    badgeBorder: 'border-emerald-500/40',
    badgeText: 'text-emerald-300'
  },
  PROBLEMA_TEXTUAL: {
    label: 'Problema Textual & Tradução',
    shortLabel: 'Crítica Textual',
    icon: 'BookOpen',
    description: 'Variantes entre manuscritos hebraicos (Massorético), gregos (Septuaginta/NT) e nuances de termos idiomáticos.',
    color: 'from-purple-950/40 via-stone-900 to-purple-950/30 text-purple-300 border-purple-500/30',
    badgeBg: 'bg-purple-950/80',
    badgeBorder: 'border-purple-500/40',
    badgeText: 'text-purple-300'
  }
};

export const apologeticsData: BiblicalDifficulty[] = [
  {
    id: 'morte-de-judas',
    category: 'CONTRADICAO_APARENTE',
    passageRefs: ['Mateus 27:3-10', 'Atos 1:18-19'],
    question: 'Como morreu Judas Iscariotes? Ele enforcou-se ou caiu de cabeça para baixo e rebentou pelo meio?',
    scholarlyResolution: `A aparente discrepância entre os relatos de Mateus e Lucas (em Atos dos Apóstolos) resolve-se pela complementaridade fática, e não por contradição mútua.

1. **Perspectiva de Mateus (Mt 27:5):** Mateus registra o método imediato do ato do suicídio: tomado de remorso desesperado, Judas retirou-se e "enforcou-se" (*apēgxato*). O foco de Mateus é teológico e judaico: o cumprimento da profecia e a culpa moral da traição.

2. **Perspectiva de Lucas / Pedro (At 1:18):** Lucas relata o desfecho físico e vergonhoso do corpo: "precipitando-se, rompeu-se pelo meio, e todas as suas entranhas se derramaram" (*prēnēs genomenos elakēsen mesos*). A topografia tradicional de Jerusalém — em especial o Vale de Hinom (Geena), onde ficava o Campo do Oleiro (Aceldama) — é cercada por penhascos rochosos escarpados de até 15 metros com árvores salientes.

3. **Harmonização Histórico-Médica:** Conforme demonstrado por exegetas clássicos e patologistas forenses, Judas enforcou-se numa árvore sobre a ravina rochosa. Sob o calor escaldante da primavera de Jerusalém e a impureza cerimonial da Páscoa judaica (que impedia qualquer pessoa de tocar num cadáver antes das festas), o corpo pendurado sofreu rápida decomposição bacteriana e inchaço gasoso. Quando o ramo da árvore cedeu ou a corda se rompeu sob o peso, o corpo despencou sobre os rochedos pontiagudos abaixo, provocando a ruptura abdominal.

4. **Quem comprou o campo?** Mateus afirma que os chefes dos sacerdotes compraram o campo com as trinta moedas devolvidas; Lucas usa a figura retórica judaica da causação indireta (o campo foi adquirido com o dinheiro infame de Judas, logo, foi atribuído ao seu ato). Os dois relatos descrevem exatamente o mesmo evento sob ângulos forenses distintos.`,
    recommendedReading: 'F.F. Bruce, "The Acts of the Apostles" (Eerdmans); D.A. Carson, "Matthew" em The Expositor\'s Bible Commentary; Gleason L. Archer, "Enciclopédia de Dificuldades Bíblicas" (Vida).',
    targetVerses: [
      { book: 'Mateus', chapter: 27, startVerse: 3, endVerse: 10 },
      { book: 'Atos', chapter: 1, startVerse: 18, endVerse: 19 }
    ]
  },
  {
    id: 'campanhas-de-josue-e-cananeus',
    category: 'DILEMA_ETICO',
    passageRefs: ['Josué 10:40', 'Josué 11:16-23', 'Deuteronômio 20:16-18', 'Juízes 1:21-36'],
    question: 'As ordens de destruição total dos Cananeus em Josué foram um genocídio ordenado por Deus?',
    scholarlyResolution: `A compreensão das guerras de Josué exige discernimento entre a linguagem de retórica militar do Antigo Oriente Próximo e a teologia pactual do juízo divino:

1. **Retórica Militar Hiperbólica:** Documentos militares contemporâneos da Idade do Bronze (como as Inscrições de Mesa de Moabe, os anais egípcios de Tutemés III e as estelas hititas) empregavam sistematicamente expressões de aniquilação absoluta ("não restou sobrevivente algum", "destruiu tudo que respirava") como fórmulas estilísticas formais para vitória decisiva. A própria Escritura comprova isso: Josué 10:40 declara que Josué "destruiu tudo quanto tinha fôlego em Hebrom e Debir"; contudo, em Josué 15:13-15 e Juízes 1:10-11, os mesmos cananeus continuam habitando essas cidades e são conquistados posteriormente por Calebe e Otniel.

2. **Centros Militares Fortificados, não Populações Civis:** Cidades como Jericó e Ai eram fortalezas militares administrativas da coroa cananeia (guarnições de tropas e santuários pagãos), e não metrópoles residenciais repletas de civis. O ataque israelita visava neutralizar as forças de resistência que ameaçavam a existência física do povo.

3. **Juízo Moral Prolongado, não Limpeza Étnica:** Deus esperou pacientemente por 400 anos antes de intervir, porque "a medida da iniquidade dos amorreus ainda não estava cheia" (Gn 15:16). A cultura cananeia praticava atrocidades extremas: queima sistemática de crianças recém-nascidas em sacrifício a Moloque, prostituição ritual obrigatória e bestialidade institucionalizada (Lv 18:24-30). O juízo foi judicial e moral contra uma cultura degenerada, jamais étnico.

4. **A Graça aos Arrependidos:** Qualquer cananeu que abandonasse os ídolos e temesse ao Deus de Israel era poupado e acolhido no povo de Deus. Raabe, a prostituta cananeia de Jericó, não apenas foi salva com sua família por crer no Senhor, como integrou a linhagem genealógica do Rei Davi e do Messias Jesus (Mt 1:5).`,
    recommendedReading: 'Paul Copan, "Deus é um Monstro Moral?" (Vida Nova); K.A. Kitchen, "On the Reliability of the Old Testament" (Eerdmans); Richard S. Hess, "Joshua" (Tyndale Old Testament Commentaries).',
    targetVerses: [
      { book: 'Josué', chapter: 6, startVerse: 20, endVerse: 25 },
      { book: 'Josué', chapter: 10, startVerse: 40, endVerse: 43 },
      { book: 'Deuteronômio', chapter: 20, startVerse: 16, endVerse: 18 }
    ]
  },
  {
    id: 'genealogias-de-jesus',
    category: 'CONTRADICAO_APARENTE',
    passageRefs: ['Mateus 1:1-17', 'Lucas 3:23-38'],
    question: 'Por que as genealogias de Jesus em Mateus e Lucas são tão diferentes? Quem era o pai de José: Jacó ou Eli?',
    scholarlyResolution: `As duas genealogias servem a propósitos teológicos e jurídicos distintos e complementares na cultura do primeiro século:

1. **A Linhagem Real/Legal em Mateus (via José):** Mateus escreve primariamente para leitores judeus para provar que Jesus é o Messias Real, herdeiro legítimo do trono de Davi. Por isso, segue a linhagem régia descendente: de Abraão até Davi, e de Davi através de Salomão e dos reis sucessores de Judá. José, como pai legal e adotivo de Jesus, transmitiu a Cristo o direito dinástico ao trono davídico, mesmo não sendo seu pai biológico.

2. **A Linhagem Biológica em Lucas (via Maria):** Lucas, o médico e historiador dos gentios, apresenta Jesus como o Homem Perfeito e Salvador universal de toda a raça humana. Sua genealogia é ascendente e recua além de Abraão, alcançando Adão e Deus. Lucas 3:23 declara com precisão grega: Jesus era "como se cuidava, filho de José, filho de Eli...". Como não havia na língua hebraica ou aramaica termo específico para "genro", e as mulheres não costumavam figurar como cabeças de família nas tábuas genealógicas públicas, José foi registrado juridicamente como filho/genro de Eli (pai de Maria). Portanto, enquanto Mateus traça a linhagem de José via Salomão, Lucas traça a ascendência física de Maria através de Natã, outro filho de Davi.

3. **A Maldição de Jeconias (Conias):** Em Jeremias 22:30, Deus declarou que nenhum descendente biológico do rei Jeconias (Joaquim) prosperaria assentado no trono de Davi. Se Jesus fosse filho biológico de José (que descendia de Jeconias, Mt 1:11), estaria desqualificado para o trono. Pelo nascimento virginal, Jesus herdou o direito real através de José sem carregar a maldição do sangue de Conias, recebendo o sangue davídico puro através de Maria pela linhagem de Natã.`,
    recommendedReading: 'J. Gresham Machen, "The Virgin Birth of Christ"; Darrell L. Bock, "Luke 1:1-9:50" (Baker Exegetical Commentary); Craig L. Blomberg, "The Historical Reliability of the Gospels".',
    targetVerses: [
      { book: 'Mateus', chapter: 1, startVerse: 1, endVerse: 17 },
      { book: 'Lucas', chapter: 3, startVerse: 23, endVerse: 38 }
    ]
  },
  {
    id: 'censo-de-quirino',
    category: 'PRECISAO_HISTORICA',
    passageRefs: ['Lucas 2:1-2'],
    question: 'Lucas errou ao situar o censo de Quirino no nascimento de Jesus antes da morte de Herodes, o Grande (4 a.C.)?',
    scholarlyResolution: `Críticos históricos do século XIX afirmavam que Públio Sulpício Quirino só se tornou governador da Síria em 6 d.C. (conforme relatado por Flávio Josefo), cerca de dez anos após a morte de Herodes o Grande. No entanto, pesquisas exegéticas e descobertas arqueológicas modernas esclarecem a precisão do relato de Lucas:

1. **Nuance Gramatical do Grego (*protē*):** Lucas 2:2 declara: *hautē apochraphē prōtē egeneto hēgemoneuontos tēs Syrias Kyrēniou*. O adjetivo *prōtē* seguido de genitivo pode ser legitimamente traduzido como "este foi o censo *anterior* àquele feito quando Quirino governava a Síria" (uso similar de *prōtos* ocorre em João 1:15 e 15:18: "Ele era antes de mim"). Lucas estaria explicitamente distinguindo este primeiro recenseamento preparatório do famoso e tumultuado censo de 6 d.C., que provocou a revolta de Judas, o Galileu (mencionada pelo próprio Lucas em Atos 5:37).

2. **Governador em Dois Períodos Distintos:** A famosa inscrição epigráfica de Tíbur (*Lapis Tiburtinus* / *Titulus Tiburtinus*), preservada nos Museus Vaticanos, atesta que um proeminente oficial romano de alta patente serviu como governador (*legatus*) da província da Síria por **duas vezes distintas** (*iterum Syriam obtinuit*). A maioria dos historiadores romanos clássicos (incluindo Sir William Ramsay e Jerry Vardaman) identifica esse magistrado como o próprio Quirino, que realizou campanhas militares na Cilícia e Síria entre 6 a.C. e 4 a.C.

3. **Natureza dos Censos Romanos:** Inscrições egípcias de papiros mostram que os censos imperiais da era de Augusto ocorriam em ciclos de 14 anos, e seu processo de levantamento tributário e registro de propriedades demorava frequentemente vários anos para ser completado nas províncias vassalas.`,
    recommendedReading: 'Sir William Ramsay, "Was Christ Born at Bethlehem?"; Colin J. Hemer, "The Book of Acts in the Setting of Hellenic History"; Darrell L. Bock, "Luke" (Baker).',
    targetVerses: [
      { book: 'Lucas', chapter: 2, startVerse: 1, endVerse: 5 }
    ]
  },
  {
    id: 'censo-de-davi',
    category: 'CONTRADICAO_APARENTE',
    passageRefs: ['2 Samuel 24:1', '1 Crônicas 21:1'],
    question: 'Quem incitou Davi a fazer o censo militar de Israel: Deus ou Satanás?',
    scholarlyResolution: `A comparação entre 2 Samuel 24:1 ("A ira do Senhor tornou a acender-se contra Israel, e Ele incitou a Davi contra eles...") e 1 Crônicas 21:1 ("Então Satanás se levantou contra Israel, e incitou Davi a levantar o censo de Israel") ilustra a teologia bíblica clássica do compatibilismo e das causas primária e secundária.

1. **A Causa Primária Soberana vs. O Instrumento Secundário:** Da mesma forma como no livro de Jó, onde Satanás aflige Jó mas nada pode fazer além dos limites soberanamente demarcados por Deus (Jó 1:12; 2:6), e na traição de Judas, onde Satanás entrou no traidor (Lc 22:3) enquanto Cristo era entregue "pelo determinado conselho e presciência de Deus" (At 2:23), Deus utilizou a intenção maligna do Adversário para cumprir Seu propósito justo.

2. **O Contexto da Ira do Senhor contra Israel:** 2 Samuel esclarece que o povo de Israel já havia pecado contra Deus (provavelmente ligado às rebeliões de Absalão e Seba contra o ungido do Senhor). Em Seu juízo soberano, Deus retirou Sua graça restritiva sobre Davi, permitindo que Satanás tentasse o rei pelo orgulho do poder bélico e auto-suficiência militar.

3. **A Agência Moral e a Responsabilidade de Davi:** Davi não culpou nem a Deus nem a Satanás, mas confessou espontaneamente: "Muito pequei no que fiz; peço-te, ó Senhor, perdoa a iniquidade do teu servo, porque procedi mui loucamente" (2Sm 24:10). Os autores sagrados operam em diferentes níveis de causação: Samuel foca no decreto soberano judicial do Senhor, enquanto o Cronista pós-exílico expõe o adversário espiritual que instigou o ato.`,
    recommendedReading: 'Bruce K. Waltke, "Uma Teologia do Antigo Testamento"; D.A. Carson, "A Soberania de Deus e a Responsabilidade Humana" (Fiel); Gleason Archer, "Enciclopédia de Dificuldades Bíblicas".',
    targetVerses: [
      { book: '2 Samuel', chapter: 24, startVerse: 1, endVerse: 4 },
      { book: '1 Crônicas', chapter: 21, startVerse: 1, endVerse: 4 }
    ]
  },
  {
    id: 'narrativas-da-criacao',
    category: 'CONTRADICAO_APARENTE',
    passageRefs: ['Gênesis 1:1-2:3', 'Gênesis 2:4-25'],
    question: 'Gênesis 1 e Gênesis 2 são relatos contraditórios da Criação com ordens de acontecimentos diferentes?',
    scholarlyResolution: `A teoria crítica do século XIX propôs que Gênesis 1 e 2 seriam mitos de fontes independentes e conflitantes (fonte sacerdotal "P" e javista "J"). No entanto, a análise literária semítica demonstra que se trata de uma técnica narrativa hebraica padrão de "recapitulação panorâmica seguida de foco temático detalhado" (*toledoth*):

1. **Gênesis 1: Visão Cósmica Panorâmica e Cronológica:** Gênesis 1:1 a 2:3 fornece a estrutura cronológica universal em sete dias litúrgicos, organizando a formação (dias 1 a 3) e o preenchimento (dias 4 a 6) de todo o cosmos, culminando no descanso divino do sábado. O ser humano (homem e mulher) aparece como o ápice da criação no sexto dia.

2. **Gênesis 2: Foco Antropológico e Aliancista Local:** Gênesis 2:4 inicia a primeira seção de *Toledoth* ("Esta é a história dos céus e da terra..."). O texto não pretende reiniciar a cronologia universal, mas dar um "zoom cinematográfico" no Éden para detalhar a criação de Adão, a implantação do jardim, o mandato cultural pactual e a instituição sagrada do matrimônio com a formação de Eva.

3. **A Questão da Vegetação e dos Animais (Gn 2:5, 19):**
   - Em Gn 2:5, os termos hebraicos usados para vegetação são *siach hassadeh* (arbustos silvestres do campo) e *eseb hassadeh* (plantas cultivadas da lavoura), que dependiam especificamente do trabalho agrícola do homem e das chuvas sazonais pós-queda, e não da vegetação geral já criada no terceiro dia de Gn 1.
   - Em Gn 2:19, a forma verbal hebraica *wayyitser* é legitimamente traduzida como mais-que-perfeito: "Havendo, pois, o Senhor Deus formado da terra todo animal... os trouxe a Adão". O propósito não era relatar a ordem em que os animais foram criados, mas a nomeação e autoridade dada ao homem antes da formação da mulher.`,
    recommendedReading: 'Kenneth A. Mathews, "Genesis 1-11:26" (New American Commentary); Umberto Cassuto, "A Commentary on the Book of Genesis"; C. John Collins, "Genesis 1-4: A Linguistic, Literary, and Theological Approach".',
    targetVerses: [
      { book: 'Gênesis', chapter: 1, startVerse: 26, endVerse: 31 },
      { book: 'Gênesis', chapter: 2, startVerse: 4, endVerse: 25 }
    ]
  },
  {
    id: 'coracao-de-farao',
    category: 'DILEMA_ETICO',
    passageRefs: ['Êxodo 4:21', 'Êxodo 8:15', 'Êxodo 8:32', 'Êxodo 9:12', 'Romanos 9:17-18'],
    question: 'Deus foi injusto ao endurecer o coração de Faraó para depois puni-lo pelas pragas?',
    scholarlyResolution: `A leitura atenta do texto hebraico revela uma progressão dramática e moralmente justa na narrativa do Êxodo:

1. **A Auto-Obstinação Deliberada de Faraó:** Nas cinco primeiras pragas, o texto hebraico enfatiza repetidamente que o próprio Faraó "endureceu o seu coração" ou que "o coração de Faraó se agravou e não os ouviu" (Êx 7:13, 14, 22; 8:15, 19, 32; 9:7). Faraó, que se auto-proclamava um deus vivo no Egito, rejeitou com arrogância repetidos sinais e advertências claras mesmo quando seus próprios magos admitiram: "Isto é o dedo de Deus" (Êx 8:19).

2. **O Julgamento Judicial da Confirmação Divina:** Somente a partir da sexta praga (as úlceras, Êx 9:12) é que o texto passa a declarar que "o Senhor endureceu o coração de Faraó". Trata-se do princípio bíblico do juízo retributivo (conforme Paulo explica em Romanos 1:24-28: "Deus os entregou à disposição mental reprovável"). Deus não coagiu um homem inocente e maleável contra a sua vontade; antes, retirou Sua misericórdia e entregou Faraó à dureza que o tirano já havia livremente escolhido cultivar.

3. **Revelação da Soberania Divina e Libertação dos Oprimidos:** A paciência de Deus ao confrontar o império mais poderoso da época serviu para desmascarar o panteão de deuses egípcios (cada praga atingiu uma divindade específica do Nilo e do sol) e proclamar o Nome do Deus vivo por toda a terra.`,
    recommendedReading: 'John Piper, "A Justificação de Deus: Uma Exegese de Romanos 9:1-23"; Douglas K. Stuart, "Exodus" (New American Commentary); Walter C. Kaiser Jr., "Êxodo" em Comentário Bíblico Expositor.',
    targetVerses: [
      { book: 'Êxodo', chapter: 4, startVerse: 21, endVerse: 23 },
      { book: 'Êxodo', chapter: 8, startVerse: 15, endVerse: 32 },
      { book: 'Êxodo', chapter: 9, startVerse: 12, endVerse: 16 }
    ]
  },
  {
    id: 'inscricao-na-cruz',
    category: 'CONTRADICAO_APARENTE',
    passageRefs: ['Mateus 27:37', 'Marcos 15:26', 'Lucas 23:38', 'João 19:19-20'],
    question: 'Por que os quatro evangelistas trazem inscrições diferentes na placa da cruz de Jesus?',
    scholarlyResolution: `Os quatro evangelistas registram pequenas variações na inscrição (*titulus*) fixada acima da cabeça de Jesus na cruz:
- Mateus 27:37: *"Este é Jesus, o Rei dos Judeus"*
- Marcos 15:26: *"O Rei dos Judeus"*
- Lucas 23:38: *"Este é o Rei dos Judeus"*
- João 19:19: *"Jesus Nazareno, o Rei dos Judeus"*

1. **A Placa Era Escrita em Três Idiomas Oficiais:** João 19:20 informa expressamente um detalhe crucial esquecido pelos críticos: o título estava escrito em **Hebraico (Aramaico), Latim e Grego**. O latim oficial romano (*Iesus Nazarenus Rex Iudaeorum*), o grego coiné helenístico e o aramaico vernáculo local possuíam construções idiomáticas próprias para títulos acusatórios, explicando variações naturais de tradução direta para o grego dos Evangelhos.

2. **O Núcleo Essencial Idêntico:** Todos os quatro relatos coincidem 100% no elemento essencial da acusação jurídica formal pela qual Pilatos condenou Jesus: **"O Rei dos Judeus"** (*Ho Basileus tōn Ioudaiōn*). 

3. **Convenções Historiográficas Greco-Romanas:** Nenhum escritor da Antiguidade clássica utilizava aspas tipográficas modernas para citações literais palavra por palavra; citar a substância com brevidade ou adicionar o nome próprio ("Jesus", "Este é Jesus", "Jesus Nazareno") para identificar o réu era a prática historiográfica correta e universalmente aceita.`,
    recommendedReading: 'Craig S. Keener, "The Gospel of John: A Commentary"; F.F. Bruce, "The New Testament Documents: Are They Reliable?"; D.A. Carson, "The Gospel According to John".',
    targetVerses: [
      { book: 'Mateus', chapter: 27, startVerse: 35, endVerse: 38 },
      { book: 'Marcos', chapter: 15, startVerse: 25, endVerse: 28 },
      { book: 'Lucas', chapter: 23, startVerse: 36, endVerse: 39 },
      { book: 'João', chapter: 19, startVerse: 19, endVerse: 22 }
    ]
  },
  {
    id: 'ressurreicao-mulheres-e-anjos',
    category: 'CONTRADICAO_APARENTE',
    passageRefs: ['Mateus 28:1-8', 'Marcos 16:1-8', 'Lucas 24:1-10', 'João 20:1-18'],
    question: 'Quantas mulheres e quantos anjos estavam no sepulcro vazio de Jesus?',
    scholarlyResolution: `As diferenças entre os quatro relatos da manhã da Páscoa são a maior evidência histórica de autenticidade: relatos inventados em conluio teriam sido previamente harmonizados para remover qualquer aparente tensão.

1. **Quantas Mulheres?**
   - Mateus cita Maria Madalena e a outra Maria.
   - Marcos cita Maria Madalena, Maria mãe de Tiago e Salomé.
   - Lucas cita Maria Madalena, Joana, Maria mãe de Tiago e "as outras que estavam com elas".
   - João foca exclusivamente em Maria Madalena.
   *Resolução:* A menção de uma pessoa jamais exclui a presença de outras. O próprio evangelho de João prova que havia um grupo de mulheres: em João 20:2, Maria Madalena corre aos discípulos e diz: "Levaram o Senhor... e **não sabemos** [plural: *ouk oidamen*] onde o puseram". Ela usou o plural porque não estava sozinha no sepulcro. Cada autor destacou as testemunhas mais conhecidas para a sua comunidade.

2. **Quantos Anjos?**
   - Mateus e Marcos mencionam "um anjo" / "um jovem vestido de branco" sentado sobre a pedra ou à direita.
   - Lucas e João mencionam "dois varões com vestes resplandecentes" / "dois anjos vestidos de branco".
   *Resolução:* O princípio elementar da evidência jurídica atesta: quem vê dois, certamente viu um; mencionar quem falou como porta-voz do anúncio não nega a presença do companheiro que estava ao lado. Mateus e Marcos focalizaram o anjo mensageiro que proferiu a grande proclamação: "Ele não está aqui, porque já ressuscitou!".`,
    recommendedReading: 'N.T. Wright, "The Resurrection of the Son of God" (Fortress Press); Gary R. Habermas & Michael R. Licona, "The Case for the Resurrection of Jesus"; William Lane Craig, "Assessing the New Testament Evidence for the Historicity of the Resurrection of Jesus".',
    targetVerses: [
      { book: 'Mateus', chapter: 28, startVerse: 1, endVerse: 8 },
      { book: 'Marcos', chapter: 16, startVerse: 1, endVerse: 8 },
      { book: 'Lucas', chapter: 24, startVerse: 1, endVerse: 12 },
      { book: 'João', chapter: 20, startVerse: 1, endVerse: 13 }
    ]
  }
];

/**
 * Normaliza o nome do livro para matching
 */
function normalizeBook(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

/**
 * Retorna as dificuldades bíblicas que incidem sobre um versículo específico
 */
export function getDifficultiesForVerse(
  bookName: string,
  chapter: number,
  verseNumber: number
): BiblicalDifficulty[] {
  const normTarget = normalizeBook(bookName);

  return apologeticsData.filter(diff => {
    if (!diff.targetVerses) return false;
    return diff.targetVerses.some(tv => {
      const normTv = normalizeBook(tv.book);
      if (normTv !== normTarget && !normTarget.includes(normTv) && !normTv.includes(normTarget)) {
        return false;
      }
      if (tv.chapter !== chapter) return false;
      if (tv.startVerse !== undefined) {
        const end = tv.endVerse || tv.startVerse;
        return verseNumber >= tv.startVerse && verseNumber <= end;
      }
      return true;
    });
  });
}

/**
 * Retorna as dificuldades bíblicas que incidem sobre um capítulo inteiro
 */
export function getDifficultiesForChapter(
  bookName: string,
  chapter: number
): BiblicalDifficulty[] {
  const normTarget = normalizeBook(bookName);

  return apologeticsData.filter(diff => {
    if (!diff.targetVerses) {
      // Fallback para passageRefs
      return diff.passageRefs.some(ref => {
        const match = ref.match(/^([1-3]?\s?[A-Za-zÀ-ÿ]+)\s+(\d+)/);
        if (!match) return false;
        const b = normalizeBook(match[1]);
        const ch = parseInt(match[2], 10);
        return (b === normTarget || normTarget.includes(b)) && ch === chapter;
      });
    }

    return diff.targetVerses.some(tv => {
      const normTv = normalizeBook(tv.book);
      return (normTv === normTarget || normTarget.includes(normTv) || normTv.includes(normTarget)) && tv.chapter === chapter;
    });
  });
}

/**
 * Retorna as dificuldades associadas a uma referência genérica de passagem (ex: "Mateus 27:3-10" ou "Mateus 27")
 */
export function getDifficultiesForPassageRef(passageRef: string): BiblicalDifficulty[] {
  const match = passageRef.match(/^([1-3]?\s?[A-Za-zÀ-ÿ]+)\s*(\d*)/);
  if (!match) return [];
  const bookName = match[1].trim();
  const chapter = match[2] ? parseInt(match[2], 10) : 1;
  return getDifficultiesForChapter(bookName, chapter);
}

/**
 * Busca uma dificuldade pelo seu ID único
 */
export function getDifficultyById(id: string): BiblicalDifficulty | undefined {
  return apologeticsData.find(d => d.id === id);
}

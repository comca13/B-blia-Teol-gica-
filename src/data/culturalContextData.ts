import { CulturalCategory, CulturalContext, BiblePassage } from '../types';

export const CULTURAL_CATEGORIES_META: Record<CulturalCategory, {
  label: string;
  shortLabel: string;
  description: string;
  iconName: string;
  badgeColor: string;
}> = {
  VIDA_QUOTIDIANA: {
    label: 'Vida Quotidiana & Usos Sociais',
    shortLabel: 'Vida Quotidiana',
    description: 'Moradia, casamento, agricultura, profissões, refeições e dinâmicas familiares na Antiguidade.',
    iconName: 'Home',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
  },
  POLITICA_E_SOCIEDADE: {
    label: 'Política, Poder & Estrutura Social',
    shortLabel: 'Política & Sociedade',
    description: 'Patronato romano, classes civis, Sinédrio, honra/vergonha e cidadania imperial no século I.',
    iconName: 'Landmark',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30'
  },
  ECONOMIA_E_MEDIDAS: {
    label: 'Economia, Moedas & Medidas Antigas',
    shortLabel: 'Economia & Medidas',
    description: 'Moedas gregas e romanas (denário, talento), pesos, distâncias e o sistema fiscal tributário.',
    iconName: 'Coins',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
  },
  LITERATURA_E_IMAGINARIO: {
    label: 'Literatura, Cosmologia & Imaginário Antigo',
    shortLabel: 'Literatura & Imaginário',
    description: 'Cosmologia dos três níveis, firmamento (raqia), tratados de suserania e retórica do ANE.',
    iconName: 'BookMarked',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
  }
};

export const culturalContextData: CulturalContext[] = [
  // 1. ECONOMIA E MEDIDAS
  {
    id: 'o-denario-e-o-trabalho-diario',
    category: 'ECONOMIA_E_MEDIDAS',
    title: 'O Denário e o Trabalho Diário',
    description: 'O denário (denarius) era a moeda padrão de prata do Império Romano, pesando aproximadamente 3,85 gramas nos governos de Augusto e Tibério. No contexto socioeconômico da Judeia e Galileia do século I, um denário correspondia estritamente ao salário diário de subsistência de um jornaleiro agrícola ou soldado raso (Mateus 20:2). Com 1 denário, um trabalhador comprava normalmente cerca de 8 a 10 medidas (choenix) de trigo ou o triplo em cevada. Em tempos de escassez, a proporção mudava drasticamente: em Apocalipse 6:6, "uma medida de trigo por um denário e três medidas de cevada por um denário" indica inflação devastadora de fome, onde o trabalho de um dia inteiro comprava apenas a ração individual básica para um único homem, ou três medidas do cereal mais pobre (cevada) para alimentar sua família.',
    exegeticalRelevance: 'Ilumina imediatamente a Parábola dos Trabalhadores da Vinha (Mateus 20:1-16): o proprietário contrata homens na primeira hora por "um denário ao dia", garantindo a sobrevivência deles e de suas famílias. Quando Ele paga o mesmo denário aos contratados na undécima hora, não comete injustiça contratual com os primeiros, mas expressa generosidade misericordiosa salvífica — impedindo que a família daquele jornaleiro tardio passe fome naquela noite. Em Lucas 10:35, os 2 denários deixados pelo bom samaritano equivaliam a quase 14 dias de hospedagem e manutenção em uma estalagem rústica.',
    scriptureReferences: [
      'Mateus 20:1-16',
      'Apocalipse 6:6',
      'Mateus 22:19-21',
      'Lucas 10:35',
      'João 6:7'
    ]
  },
  {
    id: 'o-talento-incalculavel',
    category: 'ECONOMIA_E_MEDIDAS',
    title: 'O Talento: Uma Fortuna Hiperbólica Incalculável',
    description: 'O talento (tálanton) era a maior unidade monetária e de peso do mundo mediterrâneo antigo, equivalente a 6.000 denários ou dracmas (cerca de 26 a 34 kg de prata). Para um trabalhador livre comum que recebia 1 denário por dia trabalhado, 1 único talento equivalia a 6.000 dias úteis — aproximadamente 20 anos ininterruptos de labuta diária.',
    exegeticalRelevance: 'Na Parábola do Credor Incompassivo (Mateus 18:23-35), a dívida do primeiro servo de 10.000 talentos (60 milhões de denários) é uma quantia deliberadamente hiperbólica e astronômica. Como comparação histórica, a receita tributária anual de toda a província da Judeia, Samaria e Idumeia sob o império era de cerca de 600 talentos. Aquela dívida excedia o orçamento imperial de nações inteiras. Jesus usa esse número para ensinar que a dívida moral do homem para com o Deus Santo é humanamente impagável, tornando o perdão divino um ato de pura e imensa graça.',
    scriptureReferences: [
      'Mateus 18:23-35',
      'Mateus 25:14-30',
      '1 Crônicas 29:4-7'
    ]
  },
  {
    id: 'sistema-tributario-publicanos',
    category: 'ECONOMIA_E_MEDIDAS',
    title: 'O Sistema de Arrendamento de Impostos e os Publicanos (Telônai)',
    description: 'Roma não mantinha uma máquina burocrática arrecadadora em todas as províncias; arrendava o direito de cobrança tributária a consórcios que contratavam chefes locais (architelônai, como Zaqueu) e agentes de alfândega (telônai, como Levi/Mateus). Eles antecipavam a cota exigida por Roma e obtinham lucro extorquindo comerciantes nos postos alfandegários ao longo das rotas de caravana.',
    exegeticalRelevance: 'Explica o opróbrio social em que viviam os cobradores de impostos judaicos, vistos pelos conterrâneos como traidores da aliança e extorquistas imorais. Quando Zaqueu declara que restituirá quatro vezes mais (Lucas 19:8), ele voluntariamente aplica a si mesmo a pena reservada na Torá para o roubo deliberado com dolo (Êxodo 22:1), atestando a genuinidade da sua regeneração.',
    scriptureReferences: [
      'Lucas 19:1-10',
      'Mateus 9:9-13',
      'Lucas 18:9-14'
    ]
  },
  {
    id: 'pesos-e-o-siclo-santuario',
    category: 'ECONOMIA_E_MEDIDAS',
    title: 'O Siclo do Santuário e o Câmbio no Templo',
    description: 'No Segundo Templo, o imposto sagrado anual de meio siclo (Êxodo 30:13; Mateus 17:24) exigia exclusivamente o siclo tírio de prata, reputado pela altíssima pureza metálica (94%+), enquanto as moedas romanas portavam efígies do imperador divinizado, consideradas abominação idólatra.',
    exegeticalRelevance: 'Desvenda o zelo indignado de Jesus ao expulsar os cambistas no Templo (Marcos 11:15-18). As bancas de câmbio operavam com taxas extorsivas justamente no Pátio dos Gentios — o único espaço onde os não-judeus podiam aproximar-se para orar —, anulando o desígnio profético da Casa do Pai como lugar de oração para todos os povos.',
    scriptureReferences: [
      'Êxodo 30:11-16',
      'Mateus 17:24-27',
      'Marcos 11:15-18'
    ]
  },

  // 2. POLITICA E SOCIEDADE
  {
    id: 'o-patronato-romano-e-a-graca-charis',
    category: 'POLITICA_E_SOCIEDADE',
    title: 'O Patronato Romano e a "Graça" (Charis)',
    description: 'A ordem social do Império Romano do século I fundamentava-se na instituição do Patronato (patronus e cliens). O patrono — figura aristocrática influente e rica — concedia benefícios, proteção legal e sustento (sportula) ao seu cliente. Este benefício não merecido era denominado no grego helenístico "charis" (favor/graça). Em reciprocidade obrigatória, o cliente devia lealdade pública irrevogável, reverência diária (salutatio) e proclamação da honra de seu patrono em praça pública, atitude chamada "pistis" (fidelidade/lealdade). Ninguém recebia graça para permanecer ocioso ou autônomo; a graça estabelecia uma relação pactual viva de honra e compromisso.',
    exegeticalRelevance: 'Transforma radicalmente a exegese paulina da "Salvação pela Graça" (Efésios 2:8-9; Romanos 3:24; 5:1-2; Tito 2:11-14). Paulo apropria-se do vocabulário do patronato antigo, mas o subverte em dois pontos divinos: (1) O Supremo Patrono Soberano (Deus) não concede graça aos dignos ou influentes, mas aos Seus inimigos e desprovidos de honra moral; (2) A "fé" (pistis) bíblica não é mero assentimento filosófico estático, mas a lealdade confiante e a fidelidade prática devidas ao Benfeitor Celestial cuja graça nos resgatou.',
    scriptureReferences: [
      'Efésios 2:8-10',
      'Romanos 3:23-26',
      'Romanos 5:1-2',
      'Tito 2:11-14',
      'Lucas 22:24-27'
    ]
  },
  {
    id: 'sinedrio-e-faccoes-judaicas',
    category: 'POLITICA_E_SOCIEDADE',
    title: 'O Sinédrio e o Conflito Ideológico das Facções Judaicas',
    description: 'O Sinédrio (Sanhedrin) era a corte suprema de 71 membros em Jerusalém, presidida pelo Sumo Sacerdote. Era profundamente fraturado entre: (1) Saduceus — nobreza sacerdotal aristocrática e colaboracionista com o poder romano, que aceitava apenas os 5 livros da Torá escrita e rejeitava a ressurreição corpórea e a existência de anjos; (2) Fariseus — leigos piedosos devotados à pureza cotidiana e à Tradição Oral dos Anciãos (halachá), que aguardavam a ressurreição dos mortos.',
    exegeticalRelevance: 'Esclarece os desafios teológicos colocados a Jesus: a pergunta zombeteira sobre a mulher que casou com sete irmãos (Mateus 22:23-33) era um enigma típico saduceu para ridicularizar a fé dos fariseus. Quando o apóstolo Paulo é levado a julgamento em Atos 23:6-9, ele usa estrategicamente esse conflito sectário: "Irmãos, eu sou fariseu... é por causa da esperança da ressurreição dos mortos que sou julgado!", fazendo com que saduceus e fariseus travassem dissensão aberta no plenário.',
    scriptureReferences: [
      'Mateus 22:23-33',
      'Mateus 26:57-68',
      'Atos 23:1-10',
      'João 11:47-53'
    ]
  },
  {
    id: 'codigo-honra-vergonha',
    category: 'POLITICA_E_SOCIEDADE',
    title: 'A Cultura de Honra e Vergonha no Mediterrâneo Antigo',
    description: 'Enquanto o Ocidente contemporâneo é governado predominantemente pela dinâmica individualista de Culpa e Inocência perante a lei, as sociedades bíblicas mediterrâneas eram coletivistas e orientadas pelos polos de Honra (reconhecimento público do valor de alguém pela comunidade) e Vergonha (desonra e perda de status social público). A honra era um recurso escasso disputado continuamente por meio de desafios orais e réplicas em público.',
    exegeticalRelevance: 'Desvenda o escândalo inconcebível da Cruz (1 Coríntios 1:18-25; Gálatas 3:13). A crucificação romana era concebida pela elite como o suplício supremo da vergonha infame pública, desnudando o condenado perante a sociedade. Por isso, Hebreus 12:2 declara que Jesus suportou a cruz "desprezando a sua vergonha", ressignificando a honra celestial que só Deus pode conceder àquele que se humilha.',
    scriptureReferences: [
      'Hebreus 12:1-3',
      'Lucas 14:7-14',
      '1 Coríntios 1:26-31',
      'Filipenses 2:5-11'
    ]
  },
  {
    id: 'cidadania-romana-provocatio',
    category: 'POLITICA_E_SOCIEDADE',
    title: 'A Cidadania Romana e o Direito de Apelação (Provocatio)',
    description: 'Apenas uma minoria selecta das províncias possuía a cobiçada cidadania romana (civitas). O cidadão romano gozava do privilégio da Lex Julia de vi publica, sendo imune a torturas investigativas, flagelações sem julgamento e crucificação, detendo ainda o direito supremo de apelar pessoalmente ao tribunal do César em Roma (provocatio ad Caesarem).',
    exegeticalRelevance: 'Explica o pânico das autoridades municipais de Filipos (Atos 16:37-39) e do tribuno romano em Jerusalém (Atos 22:25-29) ao descobrirem que Paulo era cidadão romano de nascimento. Em Filipenses 3:20, quando Paulo escreve aos filipenses — cuja cidade era uma prestigiosa colônia militar romana —, afirma com soberba ousadia: "A nossa cidadania (politeuma) está nos céus", proclamando que a lealdade suprema dos cristãos não pertencia ao César de Roma, mas ao Rei Jesus.',
    scriptureReferences: [
      'Atos 16:35-40',
      'Atos 22:22-29',
      'Atos 25:9-12',
      'Filipenses 3:20-21'
    ]
  },

  // 3. VIDA QUOTIDIANA
  {
    id: 'casamento-e-divorcio-no-judaismo-do-segundo-templo',
    category: 'VIDA_QUOTIDIANA',
    title: 'Casamento e Divórcio no Judaísmo do Segundo Templo',
    description: 'No século I, o judaísmo debatia ferozmente o significado legal da expressão de Deuteronômio 24:1 ("se ela não achar graça aos seus olhos, por ter ele achado nela alguma coisa indecente", em hebraico ervat davar). Duas grandes escolas rabínicas dividiam o tema: (1) A Escola de Shammai adotava uma interpretação rigorosa e restrita: o divórcio era lícito única e exclusivamente diante de adultério comprovado ou imoralidade sexual ostensiva; (2) A Escola de Hillel adotava uma postura extremamente permissiva e laxa: o marido podia emitir carta de divórcio (sefer keritut) por "qualquer motivo" banal — desde a mulher queimar o prato da refeição até o marido encontrar outra mulher que considerasse mais atraente.',
    exegeticalRelevance: 'É esse o pano de fundo histórico e jurídico indispensável de Mateus 19:3: os fariseus abordam Jesus com a pergunta capciosa deliberada: "É lícito ao marido repudiar a sua mulher por qualquer motivo?". Eles queriam forçar Jesus a tomar partido entre o popular rabino Hillel ou o conservador Shammai. Em Sua resposta monumental, Jesus recusa a casuística legalista humana de ambas as escolas e eleva a discussão à intenção originária da Criação em Gênesis 1:27 e 2:24: "O que Deus uniu, não o separe o homem", fechando as portas à banalização machista do descarte conjugal da época.',
    scriptureReferences: [
      'Mateus 19:1-12',
      'Marcos 10:1-12',
      'Deuteronômio 24:1-4',
      'Gênesis 2:23-24',
      'Malaquias 2:14-16'
    ]
  },
  {
    id: 'moradias-e-telhados-de-argila',
    category: 'VIDA_QUOTIDIANA',
    title: 'A Arquitetura da Casa Palestina e os Telhados de Argila',
    description: 'As casas dos vilarejos da Galileia eram erguidas com pedras brutas de basalto ou calcário assentadas com argila. Os telhados eram planos, estruturados com troncos de figueira ou oliveira cobertos por gravetos, ramos, palha e uma espessa camada de argila socada com rolos de pedra. Uma escadaria externa dava acesso livre ao terraço, usado para secagem de grãos, oração e sono nas noites sufocantes de verão.',
    exegeticalRelevance: 'Elimina anacronismos sobre o milagre de Marcos 2:1-12 e Lucas 5:17-26. Os quatro amigos do paralítico não precisaram de marretas industriais para quebrar concreto armado; eles subiram a escadaria externa do terraço e removeram os juncos e a argila seca prensada da cobertura entre as vigas, fazendo uma abertura perfeita para descer a maca exatamente diante de Jesus na sala lotada.',
    scriptureReferences: [
      'Marcos 2:1-12',
      'Lucas 5:17-26',
      'Atos 10:9',
      'Deuteronômio 22:8'
    ]
  },
  {
    id: 'pastor-palestino-e-aprisco',
    category: 'VIDA_QUOTIDIANA',
    title: 'O Pastor do Levante e a Porta do Aprisco',
    description: 'O pastoreio no Antigo Oriente Próximo não operava por coerção ou cães de pastoreio perseguindo o rebanho pela retaguarda. O pastor caminhava sempre à frente, e as ovelhas seguiam o tom inconfundível de sua voz e seus assobios peculiares. À noite, os rebanhos eram conduzidos a apriscos de pedra rústica a céu aberto com uma única abertura estreita sem portão de madeira. O próprio pastor deitava-se atravessado nessa passagem, servindo o seu próprio corpo de barreira física viva contra predadores e assaltantes.',
    exegeticalRelevance: 'Confere força literal à declaração teológica de Cristo em João 10:7-9: "Em verdade, em verdade vos digo: Eu sou a porta das ovelhas". O bom pastor é a salvaguarda viva da vida dos seus: nenhum lobo entra sem confrontá-lo, e nenhuma ovelha sai para a perdição sem a sua permissão.',
    scriptureReferences: [
      'João 10:1-18',
      'Salmo 23:1-6',
      'Lucas 15:3-7',
      'Ezequiel 34:11-16'
    ]
  },
  {
    id: 'agricultura-e-chuvas-palestinas',
    category: 'VIDA_QUOTIDIANA',
    title: 'O Ciclo Pluvial Palestino: Chuvas Temporãs e Serôdias',
    description: 'Ao contrário do Egito (irrigado pelas enchentes regulares do Nilo) ou da Mesopotâmia (rios Tigre e Eufrates), a agricultura em Israel dependia exclusivamente do céu. As chuvas dividiam-se no ciclo vital: (1) Chuva Temporã (Yoreh, outono / outubro-novembro), amolecendo o solo ressecado para o arado e a semeadura; (2) Chuva Serôdia (Malqosh, primavera / março-abril), crucial para engrossar a espiga de trigo e cevada antes da colheita.',
    exegeticalRelevance: 'Explica por que no Antigo Testamento o dom da chuva é o selo mais palpável da fidelidade pactual de Deus (Deuteronômio 11:13-17). Em Tiago 5:7, a perseverança do lavrador na expectativa paciente das chuvas temporã e serôdia se torna o arquétipo da esperança cristã ativa aguardando a Parousia de Cristo.',
    scriptureReferences: [
      'Deuteronômio 11:13-17',
      'Joel 2:23',
      'Tiago 5:7-8',
      'Jeremias 5:24'
    ]
  },

  // 4. LITERATURA E IMAGINARIO
  {
    id: 'cosmologia-do-antigo-oriente-proximo',
    category: 'LITERATURA_E_IMAGINARIO',
    title: 'Cosmologia do Antigo Oriente Próximo: O Firmamento (Raqia) e as Águas Primordiais',
    description: 'No imaginário cosmológico compartilhado do Antigo Oriente Próximo (Mesopotâmia, Egito, Canaã), o cosmos não era concebido sob as categorias físicas da mecânica celeste moderna de Galileu e Newton, mas por uma fenomenologia visual observada a olho nu. O universo apresentava uma estrutura de três andares: as águas primordiais caóticas (em hebraico tehom), a abóbada estendida sobre a terra chamada "firmamento" ou expansão (raqia, denotando algo batido ou estendido como lâmina de metal) que continha as águas superiores celestes (chuvas), e a terra habitável sustentada acima do abismo aquático profundo.',
    exegeticalRelevance: 'Gênesis 1 deve ser lido em contraste polêmico radical com os mitos cosmogônicos vizinhos, notadamente o épico babilônico Enuma Elish. Neste último, o universo é criado através de uma guerra cósmica brutal e fratricida onde o deus Marduk assassina o monstro marinho Tiamat (o oceano primordial caótico) e corta seu cadáver ao meio para fazer o céu e a terra. Em contrapartida absoluta, a Torá hebraica dessacraliza o cosmos: não há batalha cósmica, deuses rivais ou monstros equivalentes; o Deus transcendente cria com calma e autoridade soberana absoluta pelo poder soberano de Sua Palavra ("E disse Deus: Haja... e houve"). Gênesis não tenciona lecionar física astronômica moderna, mas afirmar teologicamente que YHWH é o único Criador soberano de todo o cosmos.',
    scriptureReferences: [
      'Gênesis 1:1-10',
      'Êxodo 20:4',
      'Salmo 104:1-9',
      'Jó 38:4-11',
      'Filipenses 2:10-11'
    ]
  },
  {
    id: 'o-mar-e-monstros-caoticos',
    category: 'LITERATURA_E_IMAGINARIO',
    title: 'O Mar (Yam) e os Monstros Cósmicos (Leviatã e Raabe) no ANE',
    description: 'Na literatura ugarítica de Ras Shamra (Síria), o deus Yam personificava o mar revolto tempestuoso e o dragão de sete cabeças Lotan (o Leviatã bíblico), símbolos das forças anárquicas que ameaçavam a ordem da vida. A poesia veterotestamentária apropria-se dessas imagens culturais familiares como metáforas líricas para cantar o domínio de YHWH sobre as nações gentílicas opressoras (como o Egito faraônico, cognominado Raabe).',
    exegeticalRelevance: 'Ilumina a profecia de Apocalipse 21:1: na Nova Jerusalém, a proclamação de que "o mar já não existe" não se refere à destruição ecológica da molécula de água, mas ao banimento definitivo daquela fonte milenar de caos, perigo, separação e morte presente no imaginário antigo.',
    scriptureReferences: [
      'Salmo 74:12-17',
      'Isaías 27:1',
      'Isaías 51:9-10',
      'Jó 41:1-34',
      'Apocalipse 21:1'
    ]
  },
  {
    id: 'tratados-suserania-vassalagem',
    category: 'LITERATURA_E_IMAGINARIO',
    title: 'Os Tratados de Suserania Hititas e a Aliança do Sinai',
    description: 'No segundo milênio a.C., os monarcas hititas celebravam pactos formais com reinos vassalos seguindo um modelo diplomático rigoroso: (1) Preâmbulo identificando o Soberano; (2) Prólogo histórico das graças concedidas; (3) Estipulações de lealdade indivisa; (4) Depósito no templo para leitura pública; (5) Testemunhas; (6) Bênçãos e Maldições.',
    exegeticalRelevance: 'O livro de Deuteronômio e Josué 24 espelham milimetricamente esse padrão jurídico da Idade do Bronze. Isso evidencia que Deus comunicou Sua Aliança redentora encarnando-a na mais alta estrutura jurídica compreensível da época, onde Ele mesmo é o Grande Rei amoroso e Israel é o povo chamado a uma resposta de amor e obediência fiel.',
    scriptureReferences: [
      'Deuteronômio 5:1-6',
      'Deuteronômio 28:1-68',
      'Josué 24:1-28',
      'Êxodo 20:1-17'
    ]
  },
  {
    id: 'o-conceito-de-nome-antigo',
    category: 'LITERATURA_E_IMAGINARIO',
    title: 'O Conceito de Nome (Shem / Onoma): Essência e Autoridade',
    description: 'No mundo semítico antigo, o nome próprio não era um mero artifício fonético de catalogação burocrática, mas a revelação da própria essência viva, do caráter intrínseco, da autoridade e do destino do indivíduo.',
    exegeticalRelevance: 'Quando Deus revela Seu Nome sagrado YHWH a Moisés (Êxodo 3:14: "EU SOU O QUE SOU"), outorga à Aliança a certeza de Sua presença dinâmica autoexistente. Orar "em nome de Jesus" (João 14:13) não é uma fórmula mecânica ou amuleto verbal, mas orar em perfeita conformidade com o caráter, a soberania e a vontade do Senhor.',
    scriptureReferences: [
      'Êxodo 3:13-15',
      'Gênesis 2:19-20',
      'Filipenses 2:9-11',
      'Atos 4:12',
      'João 14:13-14'
    ]
  }
];

// Alias export for backward compatibility
export const CULTURAL_CONTEXTS = culturalContextData;

/**
 * Normalizes passage text to simplify matching.
 */
function normalizePassageText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Retrieves the most relevant Cultural Contexts for a given reading day and passages.
 * Matches specific passages first (e.g. Matthew 20 -> Denário, Matthew 19 -> Divórcio),
 * and falls back to chronological progress.
 */
export function getCulturalContextForDay(dayNumber: number, passages?: BiblePassage[]): CulturalContext[] {
  const passagesList = passages || [];
  const normalizedPassagesText = passagesList
    .map(p => `${p.book} ${p.reference}`)
    .map(normalizePassageText)
    .join(' ');

  // 1. Check for specific high-priority passage matches
  const matched: CulturalContext[] = [];

  for (const item of culturalContextData) {
    const isDirectMatch = item.scriptureReferences.some(ref => {
      const normalizedRef = normalizePassageText(ref);
      // Check full ref or book + chapter (e.g. "mateus 20")
      const bookAndChapter = normalizedRef.split(':')[0];
      return normalizedPassagesText.includes(bookAndChapter);
    });

    if (isDirectMatch && !matched.some(m => m.id === item.id)) {
      matched.push(item);
    }
  }

  // 2. Keyword detection in passage list
  if (normalizedPassagesText.includes('mateus 20') || normalizedPassagesText.includes('apocalipse 6')) {
    const denario = culturalContextData.find(c => c.id === 'o-denario-e-o-trabalho-diario');
    if (denario && !matched.some(m => m.id === denario.id)) matched.unshift(denario);
  }

  if (normalizedPassagesText.includes('mateus 19') || normalizedPassagesText.includes('marcos 10') || normalizedPassagesText.includes('deuteronomio 24')) {
    const divorcio = culturalContextData.find(c => c.id === 'casamento-e-divorcio-no-judaismo-do-segundo-templo');
    if (divorcio && !matched.some(m => m.id === divorcio.id)) matched.unshift(divorcio);
  }

  if (normalizedPassagesText.includes('genesis 1') || normalizedPassagesText.includes('genesis 2')) {
    const cosmo = culturalContextData.find(c => c.id === 'cosmologia-do-antigo-oriente-proximo');
    if (cosmo && !matched.some(m => m.id === cosmo.id)) matched.unshift(cosmo);
  }

  if (normalizedPassagesText.includes('romanos') || normalizedPassagesText.includes('efesios 2') || normalizedPassagesText.includes('tito 2')) {
    const patronato = culturalContextData.find(c => c.id === 'o-patronato-romano-e-a-graca-charis');
    if (patronato && !matched.some(m => m.id === patronato.id)) matched.unshift(patronato);
  }

  if (matched.length > 0) {
    return matched;
  }

  // 3. Fallback based on canonical/chronological progress
  if (dayNumber <= 50) {
    return [
      culturalContextData.find(c => c.id === 'cosmologia-do-antigo-oriente-proximo')!,
      culturalContextData.find(c => c.id === 'o-mar-e-monstros-caoticos')!,
      culturalContextData.find(c => c.id === 'o-conceito-de-nome-antigo')!
    ].filter(Boolean);
  }

  if (dayNumber <= 120) {
    return [
      culturalContextData.find(c => c.id === 'tratados-suserania-vassalagem')!,
      culturalContextData.find(c => c.id === 'pesos-e-o-siclo-santuario')!,
      culturalContextData.find(c => c.id === 'agricultura-e-chuvas-palestinas')!
    ].filter(Boolean);
  }

  if (dayNumber <= 240) {
    return [
      culturalContextData.find(c => c.id === 'pastor-palestino-e-aprisco')!,
      culturalContextData.find(c => c.id === 'codigo-honra-vergonha')!,
      culturalContextData.find(c => c.id === 'o-mar-e-monstros-caoticos')!
    ].filter(Boolean);
  }

  if (dayNumber <= 297) {
    return [
      culturalContextData.find(c => c.id === 'sinedrio-e-faccoes-judaicas')!,
      culturalContextData.find(c => c.id === 'o-denario-e-o-trabalho-diario')!,
      culturalContextData.find(c => c.id === 'o-talento-incalculavel')!
    ].filter(Boolean);
  }

  // Days 298 - 365 (Gospels & NT)
  return [
    culturalContextData.find(c => c.id === 'o-denario-e-o-trabalho-diario')!,
    culturalContextData.find(c => c.id === 'o-patronato-romano-e-a-graca-charis')!,
    culturalContextData.find(c => c.id === 'casamento-e-divorcio-no-judaismo-do-segundo-templo')!,
    culturalContextData.find(c => c.id === 'moradias-e-telhados-de-argila')!
  ].filter(Boolean);
}

/**
 * Retrieves Cultural Context for arbitrary Book & Chapter (for full Bible Reader / browse mode)
 */
export function getCulturalContextForBookChapter(bookName: string, chapter: number): CulturalContext[] {
  const normalizedQuery = normalizePassageText(`${bookName} ${chapter}`);

  const matched = culturalContextData.filter(item => {
    return item.scriptureReferences.some(ref => {
      const normalizedRef = normalizePassageText(ref).split(':')[0];
      return normalizedRef === normalizedQuery || normalizedQuery.includes(normalizedRef);
    });
  });

  if (matched.length > 0) {
    return matched;
  }

  // General heuristics by book
  const normBook = normalizePassageText(bookName);
  if (normBook.includes('genesis')) {
    return [culturalContextData.find(c => c.id === 'cosmologia-do-antigo-oriente-proximo')!].filter(Boolean);
  }
  if (normBook.includes('mateus') || normBook.includes('marcos') || normBook.includes('lucas')) {
    return [culturalContextData.find(c => c.id === 'o-denario-e-o-trabalho-diario')!].filter(Boolean);
  }
  if (normBook.includes('romanos') || normBook.includes('efesios') || normBook.includes('galatas')) {
    return [culturalContextData.find(c => c.id === 'o-patronato-romano-e-a-graca-charis')!].filter(Boolean);
  }

  return [];
}

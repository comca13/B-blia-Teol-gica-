import { ChurchHistoryEra, ChurchHistoryEvent, TheologicalSystemComparison, EcumenicalCreed } from '../types';
import { patristicaEvents } from './churchHistoryEras/patristicaEvents';
import { medievalEvents } from './churchHistoryEras/medievalEvents';
import { reformaEvents } from './churchHistoryEras/reformaEvents';
import { posReformaEvents } from './churchHistoryEras/posReformaEvents';
import { contemporaneaEvents } from './churchHistoryEras/contemporaneaEvents';

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
  ...patristicaEvents,
  ...medievalEvents,
  ...reformaEvents,
  ...posReformaEvents,
  ...contemporaneaEvents
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

import { ChurchHistoryEvent } from '../../types';

export const medievalEvents: ChurchHistoryEvent[] = [
  {
    id: 'pontificado-gregorio',
    era: 'MEDIEVAL',
    title: 'Pontificado de Gregório Magno e a Consolidação Ocidental',
    year: '590 d.C.',
    location: 'Roma, Itália',
    keyFigures: ['Gregório I (O Magno)', 'Agostinho de Cantuária'],
    category: 'REFORMA',
    description: 'Em meio ao colapso total da administração civil imperial em Roma, devastada por pragas e invasões lombardas, o monge beneditino Gregório foi aclamado bispo de Roma. Ele assumiu pessoalmente a assistência aos famintos, reformou a liturgia (canto gregoriano), sistematizou o cuidado pastoral (Regula Pastoralis) e enviou Agostinho com quarenta monges para evangelizar os anglo-saxões na Inglaterra.',
    historicalContextDetailed: 'A queda do Império Romano do Ocidente deixara a península itálica em ruínas e vácuo institucional. O poder bizantino em Ravena era ineficaz. Gregório negociou tréguas com os bárbaros lombardos, reorganizou os extensos domínios agrícolas da Sé romana como celeiro dos desvalidos e estabeleceu as bases morais da Europa medieval.',
    theologicalDebate: {
      coreControversy: 'A responsabilidade e o caráter do ministério pastoral cristão perante catástrofes sociais e a tarefa missionária aos povos pagãos germânicos.',
      hereticalOrChallengingView: 'A ambição mundana clerical e o isolamento monástico indiferente ao sofrimento e à ignorância espiritual das massas bárbaras.',
      orthodoxFormulation: 'A síntese de contemplação interior e ação caridosa exterior: o bispo como "Servo dos Servos de Deus" (Servus Servorum Dei), cuja autoridade decorre do serviço sacrificial e da fidelidade ao rebanho.',
      dogmaticTerms: ['Servus Servorum Dei', 'Regula Pastoralis', 'Cura Animarum (Cuidado das Almas)']
    },
    primarySourceQuote: {
      text: 'Aquele que governa as almas deve manter no íntimo a pureza dos pensamentos e na ação o zelo incontestável do serviço; não busque ser amado pelos homens, mas busque que a verdade divina seja amada através dele.',
      author: 'São Gregório Magno',
      work: 'Regra Pastoral (Regulae Pastoralis Liber, Parte II.1)'
    },
    historicalSignificance: 'Marcou a transição definitiva da Antiguidade Tardia para a Cristandade Medieval ocidental, firmando o papado como fiador da ordem moral e pioneiro das grandes missões transculturais.',
    legacyPoints: [
      'Seu manual "Regra Pastoral" tornou-se o texto formativo obrigatório de bispos e sacerdotes em toda a Europa por quase um milênio.',
      'A missão à Inglaterra estabeleceu a Sé de Cantuária e incorporou os povos anglo-saxões à fé cristã.',
      'Desenvolveu a teologia monástica e a espiritualidade litúrgica que moldaram a música e a disciplina dos mosteiros.'
    ],
    scriptureReferences: ['1Pe 5:1-4', 'Jo 21:15-17', 'Mt 20:25-28', '2Tm 4:1-5']
  },
  {
    id: 'grande-cisma-1054',
    era: 'MEDIEVAL',
    title: 'O Grande Cisma do Oriente e Ocidente',
    year: '1054 d.C.',
    location: 'Catedral de Santa Sofia, Constantinopla (atual Istambul)',
    keyFigures: ['Cardeal Humberto de Silva Candida', 'Patriarca Miguel Cerulário', 'Papa Leão IX'],
    category: 'TEOLOGIA',
    description: 'Em 16 de julho de 1054, o Cardeal Humberto, legado papal de Roma, adentrou a solene Catedral de Santa Sofia durante a Divina Liturgia e depositou no altar-mor uma bula de excomunhão contra o Patriarca Miguel Cerulário e seus clérigos. Dias depois, o sínodo de Constantinopla retribuiu o anátema contra os legados latinos, consolidando a ruptura formal milenar entre a Igreja Ocidental e a Oriental.',
    historicalContextDetailed: 'As tensões acumulavam-se há séculos: divergências linguísticas (latim no Ocidente, grego no Oriente), desconfiança política e diferenças rituais (uso de pão ázimo ou fermentado na Eucaristia, celibato clerical). No plano eclesiológico, Roma reivindicava jurisdição e primazia monárquica universal, enquanto Constantinopla defendia a conciliaridade (Pentarquia) de patriarcados autônomos.',
    theologicalDebate: {
      coreControversy: 'A autoridade eclesiástica papal e a ortodoxia trinitária da inserção ocidental da cláusula Filioque no Credo Niceno-Constantinopolitano.',
      hereticalOrChallengingView: 'Para o Oriente, a inserção unilateral da cláusula "e do Filho" (Filioque) por Roma comprometia a monarquia de Deus Pai na Trindade; para o Ocidente, a recusa oriental ameaçava a plena divindade do Filho e a ordem da salvação.',
      orthodoxFormulation: 'O debate sobre a procedência hipostática eterna do Espírito Santo: o Oriente sustenta que o Espírito procede eternamente "unicamente do Pai" (ek monou tou Patros) através do Filho; o Ocidente confessa a procedência "do Pai e do Filho" (a Patre Filioque procedit).',
      dogmaticTerms: ['Filioque', 'Monarquia do Pai', 'Pentarquia', 'Primatus Petrinus']
    },
    primarySourceQuote: {
      text: 'O Espírito da Verdade procede eternamente do Pai como de Sua única fonte hipostática eterna, e repousa no Filho; nenhum concílio nem bispo em terra tem o poder de adulterar o Símbolo sagrado que os Santos Padres compuseram em Niceia e Constantinopla.',
      author: 'Patriarca Fócio de Constantinopla (matriz do pensamento bizantino)',
      work: 'Encíclica aos Tronos Orientais e Mistagogia do Espírito Santo'
    },
    historicalSignificance: 'A maior e mais duradoura fratura estrutural da Cristandade histórica, separando para sempre a tradição Latina Ocidental (Catolicismo e mais tarde Protestantismo) da tradição Bizantina Oriental (Igreja Ortodoxa).',
    legacyPoints: [
      'Provocou o isolamento cultural e teológico recíproco entre o Oriente místico e o Ocidente escolástico racional.',
      'Agravou-se catastroficamente durante a Quarta Cruzada (1204 d.C.), quando cruzados latinos saquearam Constantinopla.',
      'As excomunhões mútuas só foram simbolicamente revogadas conjuntamente pelo Papa Paulo VI e pelo Patriarca Atenágoras I em 1965.'
    ],
    scriptureReferences: ['Jo 15:26', 'Jo 14:26', 'Jo 17:20-23', '1Co 1:10-13']
  },
  {
    id: 'anselmo-cur-deus-homo',
    era: 'MEDIEVAL',
    title: 'Anselmo de Cantuária e a Expiação por Satisfação',
    year: '1098 d.C.',
    location: 'Cantuária, Inglaterra / Mosteiro de Schiavi, Itália',
    keyFigures: ['Santo Anselmo de Cantuária', 'Boso (discípulo no diálogo)'],
    category: 'TEOLOGIA',
    description: 'Em seu monumental tratado "Cur Deus Homo" (Por Que Deus se Fez Homem?), Anselmo refutou a antiga teoria patristica dos "direitos de Satanás" e demonstrou pela razão iluminada pela fé que a honra e justiça infinitas de Deus foram ofendidas pelo pecado do homem. Como o homem deve a reparação que só Deus pode pagar, a salvação exigia necessariamente a Encarnação do Deus-Homem.',
    historicalContextDetailed: 'No alvorecer da Escolástica, Anselmo cunhou o método "a fé em busca de entendimento" (fides quaerens intellectum). Ele pretendia demonstrar a necessidade lógica inelutável da Encarnação e da Cruz mesmo a descrentes e pagãos (remoto Christo), utilizando rigorosos argumentos racionais subordinados à Bíblia.',
    theologicalDebate: {
      coreControversy: 'A lógica moral e judicial da Expiação: a morte de Cristo foi um resgate pago ao Diabo ou uma satisfação justa prestada à santa justiça de Deus?',
      hereticalOrChallengingView: 'A teoria do resgate clássica degenerada: Deus devia uma compensação jurídica ao diabo para resgatar as almas da humanidade.',
      orthodoxFormulation: 'A Teoria da Satisfação: o pecado é roubar a Deus a honra que Lhe é devida; Deus não pode simplesmente perdoar por negligência sem restabelecer a ordem da justiça moral do universo; o Deus-Homem ofereceu na cruz uma vida de valor infinito, satisfazendo a justiça e abrindo as portas da misericórdia.',
      dogmaticTerms: ['Satisfactio Vicaria', 'Fides quaerens intellectum', 'Credo ut intelligam', 'Honra Divina']
    },
    primarySourceQuote: {
      text: 'O homem não pode ser salvo a não ser que pague a Deus aquilo que deve pelo pecado; mas a dívida é tão imensa que somente Deus a pode pagar, ao passo que é o homem que tem a obrigação de pagá-la. Por isso, cumpria que o fizesse alguém que fosse Deus e Homem.',
      author: 'Santo Anselmo de Cantuária',
      work: 'Cur Deus Homo (Por Que Deus se Fez Homem?, Livro II, cap. VI)'
    },
    historicalSignificance: 'Fundou o método teológico escolástico e estabeleceu os fundamentos jurídicos e objetivos da teologia da expiação no Ocidente, que seriam aperfeiçoados pelos Reformadores na doutrina da Substituição Penal.',
    legacyPoints: [
      'Deslocou o foco teológico da redenção da esfera de Satanás para a santidade e justiça do próprio Deus.',
      'Sua epistemologia "Creio para poder compreender" (Credo ut intelligam) estabeleceu a primazia da revelação sobre a filosofia.',
      'Forneceu o alicerce clássico sobre o qual Calvino e os puritanos articularam a imputação forense dos méritos de Cristo.'
    ],
    scriptureReferences: ['Rm 3:24-26', '1Tm 2:5-6', 'Hb 9:14-15', 'Is 53:4-6', '2Co 5:21']
  },
  {
    id: 'tomas-aquino-suma',
    era: 'MEDIEVAL',
    title: 'Tomás de Aquino e a Suma Teológica',
    year: '1265 – 1274 d.C.',
    location: 'Paris, França / Roma e Nápoles, Itália',
    keyFigures: ['Santo Tomás de Aquino ("Doutor Angélico")', 'Alberto Magno'],
    category: 'TEOLOGIA',
    description: 'Maior expoente do pensamento medieval ocidental, o frei dominicano Tomás de Aquino produziu a monumental Suma Teológica (Summa Theologiae), estruturando milhares de artigos que harmonizaram a revelação bíblica, os Santos Padres (especialmente Agostinho) e a redescoberta filosofia aristotélica, afirmando que a graça não destrói a natureza, mas a aperfeiçoa.',
    historicalContextDetailed: 'A redescoberta das obras de Aristóteles através de traduções árabes (Averróis e Avicena) e bizantinas nas universidades de Paris e Bolonha gerara pânico na Igreja, com alguns mestres abraçando o racionalismo secular. Tomás foi pioneiro em "batizar" o rigor aristotélico a serviço da fé cristã ortopráxica.',
    theologicalDebate: {
      coreControversy: 'A relação ontológica e epistemológica entre a fé e a razão humana, e entre a teologia revelada e a filosofia natural.',
      hereticalOrChallengingView: 'A Teoria da Dupla Verdade (averroísmo latino): o que é filosoficamente verdadeiro pela razão humana pode ser falso pela fé religiosa cristã.',
      orthodoxFormulation: 'A síntese tomista: a verdade é una porque Deus é o Autor tanto da luz da razão natural quanto da luz da revelação sobrenatural. A razão pode alcançar preâmbulos da fé (como a existência de Deus através das Cinco Vias), mas os mistérios da Trindade e da Encarnação só são cognoscíveis pela graça da revelação divina.',
      dogmaticTerms: ['Gratia non tollit naturam, sed perficit (A graça não anula a natureza, aperfeiçoa-a)', 'Quinque Viae (Cinco Vias)', 'Analogia Entis', 'Transubstantiatio']
    },
    primarySourceQuote: {
      text: 'A graça divina não destrói a natureza humana criada, mas antes a cura e aperfeiçoa. Portanto, a razão natural deve servir à fé cristã assim como a inclinação natural da vontade é submissa e ordenada pela caridade divina sobrenatural.',
      author: 'Santo Tomás de Aquino',
      work: 'Suma Teológica (Summa Theologiae, I, q. 1, a. 8)'
    },
    historicalSignificance: 'A mais sistemática e influente compilação da teologia clássica ocidental, consagrada pelo Magistério Católico Romano como matriz dogmática e estudada por teólogos protestantes da Escolástica Reformada.',
    legacyPoints: [
      'Estabeleceu o vocabulário filosófico com que se formularam as distinções essenciais de soberania, providência e moralidade cristã.',
      'Suas Cinco Vias cosmológicas permanecem como referencial incontornável na apologética e na teologia natural.',
      'Sua ética das virtudes cardeais e teologais nutriu a reflexão da lei natural (Lex Naturalis) aplicada à dignidade humana.'
    ],
    scriptureReferences: ['Rm 1:19-20', 'Sl 19:1-4', '1Co 13:8-13', 'Cl 2:2-3', 'At 17:24-28']
  },
  {
    id: 'pre-reformadores-wycliffe-hus',
    era: 'MEDIEVAL',
    title: 'A Estrela da Manhã: John Wycliffe e Jan Hus',
    year: '1380 – 1415 d.C.',
    location: 'Oxford e Lutterworth (Inglaterra) / Praga e Constança (Boêmia)',
    keyFigures: ['John Wycliffe', 'Jan Hus', 'Rei Ricardo II', 'Imperador Sigismundo'],
    category: 'REFORMA',
    description: 'Em Oxford, John Wycliffe atacou as pretensões temporais e financeiras do papado, traduziu a Bíblia latina para o inglês vernáculo e proclamou a autoridade absoluta e soberana das Escrituras. Suas teses inflamaram a Boêmia através de Jan Hus, que pregou o retorno à pureza evangélica e à comunhão sob as duas espécies (Utraquismo), sendo queimado vivo na fogueira no Concílio de Constança em 1415.',
    historicalContextDetailed: 'A cristandade do século XIV sofria o escândalo do Cativeiro Babilônico de Avinhão e o Grande Cisma Ocidental (onde dois e até três papas se excomungavam mutuamente), enquanto a Peste Negra devastava a Europa. A ganância na venda de cargos eclesiásticos (simonia) e indulgências despertou apelos desesperados por reforma da cabeça aos membros.',
    theologicalDebate: {
      coreControversy: 'A autoridade suprema e normativa da Escritura Sagrada sobre o papado e a definição bíblica da verdadeira Igreja de Cristo.',
      hereticalOrChallengingView: 'O triunfalismo clerical absolutista: o Papa é infalível e soberano sobre os reis da terra; os fiéis não têm direito de ler a Bíblia na própria língua.',
      orthodoxFormulation: 'O Sola Scriptura embrionário e a Eclesiologia Bíblica: a Escritura é a lei de Cristo, suficiente e sem erro para governar a Igreja; a verdadeira Igreja é o corpo místico dos santos eleitos e predestinados por Deus, e não a hierarquia visível mundana.',
      dogmaticTerms: ['Sola Scriptura embrionário', 'Corpus Christi Mysticum', 'Utraquismo (Cálice para os Leigos)', 'Simonia']
    },
    primarySourceQuote: {
      text: 'Procura a verdade, ouve a verdade, aprende a verdade, ama a verdade, fala a verdade e defende a verdade até à morte! Pois a verdade de Cristo liberta da escravidão do pecado e triunfará sobre todas as forças do erro para sempre.',
      author: 'Mártir Jan Hus',
      work: 'Postila (Tratado sobre a Fé e a Verdade Bíblica)'
    },
    historicalSignificance: 'Precursores diretos e catalisadores da Reforma Protestante. Ao queimar na fogueira em Constança, a tradição registrou a célebre profecia de Hus: "Hoje assais um ganso (Hus em checo significa ganso), mas daqui a cem anos virá um cisne que não podereis calar".',
    legacyPoints: [
      'A tradução bíblica de Wycliffe colocou pela primeira vez a Palavra de Deus nas mãos do povo de língua inglesa através dos Lolardos.',
      'A resistência hussita na Boêmia fundou a Unitas Fratrum (Irmãos Boêmios), que preservou a herança evangélica até os Morávios.',
      'Cem anos exatos após o martírio de Hus (1515–1517), Martinho Lutero iniciou o seu magistério em Wittenberg evocando os mesmos princípios bíblicos.'
    ],
    scriptureReferences: ['Jo 8:31-32', '2Tm 3:15-17', '1Co 11:23-28', 'At 4:19-20', 'Sl 119:105']
  }
];

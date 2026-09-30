import { SecondTempleSection } from '../types';

export const secondTempleHistoricalData: SecondTempleSection[] = [
  {
    id: 'persian-era',
    title: 'A Época Persa Tardia e a Transição',
    period: 'c. 430 – 332 a.C.',
    rulingPower: 'Império Aquemênida (Persa)',
    summary: 'Período silencioso de consolidação da Lei mosaica sob a liderança dos escribas e do sacerdócio em Jerusalém, sob tolerância administrativa persa.',
    keyEvents: [
      'Organização do texto canônico das Escrituras hebraicas pela Grande Sinagoga.',
      'Surgimento das sinagogas locais como centros de instrução e oração para comunidades distantes de Jerusalém.',
      'Rivalidade amarga e cisma definitivo com a comunidade samaritana do Monte Gerizim.'
    ],
    religiousImpact: 'O sacerdócio assume poder tanto espiritual quanto cívico, preparando o terreno para a posterior aristocracia dos saduceus.',
    biblicalConnections: ['Últimos oráculos de Malaquias', 'Livros de Esdras e Neemias', 'Profecias de Daniel 8:1-4'],
    detailedConnections: [
      {
        id: 'conn-malachi',
        referenceDisplay: 'Últimos oráculos de Malaquias',
        scriptureReference: 'Malaquias 3-4',
        title: 'O Encerramento da Revelação Profética no AT',
        explanation: 'Malaquias ministra na transição da dominação persa tardia, repreendendo com rigor a apatia espiritual, a decadência moral do casamento e os sacrifícios corrompidos apresentados pelo sacerdócio levítico no Segundo Templo. O livro encerra a voz profética canônica do Antigo Testamento apontando para a promessa de que o "Mensageiro da Aliança" viria de repente ao Seu templo, precedido pelo ministério precursor de Elias — profecia cumprida 400 anos depois em João Batista.',
        theologicalContext: 'Inauguração dos chamados 400 anos de silêncio profético, alimentando a ardente expectativa messiânica de redenção.'
      },
      {
        id: 'conn-ezra-nehemiah',
        referenceDisplay: 'Livros de Esdras e Neemias',
        scriptureReference: 'Neemias 8-9',
        title: 'A Restauração Mosaica e a Origem dos Escribas',
        explanation: 'Sob éditos imperiais persas (Artaxerxes I), Esdras (o escriba hábil na Lei) e Neemias (o copeiro real que se tornou governador) reconstroem a muralha protetora de Jerusalém e lideram um avivamento da aliança com a leitura pública da Torá. É nesta época que se consolida a classe dos escribas (Soferim), responsáveis por copiar, interpretar e ensinar a Palavra, dando origem às primeiras sinagogas.',
        theologicalContext: 'Fundação da identidade espiritual judaica pós-exílica focada na preservação canônica das Escrituras.'
      },
      {
        id: 'conn-daniel-8',
        referenceDisplay: 'Profecias de Daniel 8:1-4',
        scriptureReference: 'Daniel 8:1-4',
        title: 'A Visão do Carneiro e a Hegemonia Medo-Persa',
        explanation: 'Daniel recebe às margens do rio Ulai a revelação profética de um carneiro com dois chifres elevados (um mais alto que o outro, simbolizando a fusão dos impérios Medo e Persa, no qual a dinastia persa superou a meda em poder militar). O animal investia vitoriosamente contra o ocidente, norte e sul sem que nenhum reino resistisse, retratando a extensão colossal do domínio persa antes da súbita investida grega de Alexandre.',
        theologicalContext: 'Demonstração de que a ascensão, glória e limites de todos os impérios humanos estão sob o decreto e soberania de Javé.'
      }
    ]
  },
  {
    id: 'hellenistic-era',
    title: 'A Conquista de Alexandre e a Helenização',
    period: '332 – 167 a.C.',
    rulingPower: 'Império Greco-Macedônio (Império Ptolomaico e Selêucida)',
    summary: 'Alexandre, o Grande, anexa o Oriente Próximo. Após sua morte prematura, a Judeia fica no meio da disputa acirrada entre os Ptolomeus (Egito) e os Selêucidas (Síria).',
    keyEvents: [
      'Fundação da cidade de Alexandria no Egito com um enorme bairro judaico.',
      'Tradução do Pentateuco e livros hebraicos para o grego: a Septuaginta (LXX).',
      'Antíoco IV Epifânio assume o trono selêucida, proíbe a circuncisão e sacrifica uma porca sobre o altar de Jerusalém (a abominação da desolação).'
    ],
    religiousImpact: 'Fratura profunda na sociedade judaica entre os helenizantes (que adotavam os costumes e academias gregas) e os Hasidim (os piedosos fiéis à Torá).',
    biblicalConnections: ['Cumprimento exato de Daniel 8 e 11', '1 e 2 Macabeus', 'Mateus 24:15'],
    detailedConnections: [
      {
        id: 'conn-daniel-8-11',
        referenceDisplay: 'Cumprimento exato de Daniel 8 e 11',
        scriptureReference: 'Daniel 11:2-21',
        title: 'As Guerras entre os Ptolomeus (Sul) e Selêucidas (Norte)',
        explanation: 'Daniel 8:5 prediz o "bode vindo do ocidente sem tocar o chão com um chifre notável", cumprido com precisão assombrosa na marcha relâmpago de Alexandre Magno em 332 a.C. Após sua morte em Babilônia, o império é repartido em quatro (os generais Diádocos). Daniel 11 detalha minuciosamente mais de 150 anos de guerras, intrigas conjugais e conspirações sangrentas entre o "Rei do Sul" (Egito ptolomaico) e o "Rei do Norte" (Síria selêucida), com a Terra Santa no epicentro do fogo cruzado.',
        theologicalContext: 'Uma das mais impressionantes provas de inerrância e pré-ciência profética de toda a Bíblia.'
      },
      {
        id: 'conn-maccabees-hebrews',
        referenceDisplay: '1 e 2 Macabeus (Paralelo Bíblico)',
        scriptureReference: 'Hebreus 11:35-38',
        title: 'A Resistência dos Santos à Fúria Idólatra Selêucida',
        explanation: 'Os registros históricos de Macabeus detalham a opressão tirânica de Antíoco IV Epifânio, que ordenou queimar todos os rolos da Bíblia encontrados, proibiu o sábado e a circuncisão sob pena de morte e ergueu um altar pagão no santuário. Os piedosos (Hasidim) e mães como a mãe dos sete mártires escolheram morrer sob tortura a renegar a aliança com Deus — contexto a que o autor de Hebreus 11:35 faz alusão direta: "uns foram torturados, não aceitando o seu livramento, para alcançarem uma melhor ressurreição".',
        theologicalContext: 'O testemunho inabalável de fé que preservou a chama monoteísta para a vinda do Messias.'
      },
      {
        id: 'conn-matthew-24',
        referenceDisplay: 'Mateus 24:15',
        scriptureReference: 'Mateus 24:15-16',
        title: 'A Abominação da Desolação Profetizada',
        explanation: 'Jesus faz referência explícita ao trauma de 167 a.C., quando Antíoco colocou a estátua de Zeus Olimpiano sobre o altar dos holocaustos em Jerusalém ("a abominação da desolação dita por Daniel"). Cristo instrui que tal profanação ocorreria novamente no futuro, servindo de sinal de fuga imediata para os discípulos antes que os exércitos imperiais de Roma sitiassem e arrasassem Jerusalém e o Templo em 70 d.C.',
        theologicalContext: 'Uso tipológico e escatológico fundamental de um acontecimento intertestamentário pelo próprio Senhor Jesus.'
      }
    ]
  },
  {
    id: 'hasmonean-revolt',
    title: 'A Revolta dos Macabeus e Dinastia Hasmoneia',
    period: '167 – 63 a.C.',
    rulingPower: 'Dinastia Hasmoneia Independente',
    summary: 'O sacerdote Matatias e seu filho Judas Macabeu deflagram uma guerra de guerrilha contra os exércitos sírios, reconquistando a independência judaica.',
    keyEvents: [
      'Purificação e rededicação milagrosa do Templo em 164 a.C. (Origem de Hanukkah).',
      'Os governantes hasmoneus acumulam os títulos de Sumo Sacerdote e Rei.',
      'Degeneração moral da dinastia em guerras civis sangrentas entre irmãos (Hircano II e Aristóbulo II).'
    ],
    religiousImpact: 'Consolidação das grandes seitas: Fariseus (separatistas piedosos), Saduceus (aristocratas do Templo) e Essênios (que se isolam em Qumran esperando o Messias).',
    biblicalConnections: ['João 10:22 (Festa da Dedicação / Hanukkah)', 'Mateus 3:7 (Origem das seitas)'],
    detailedConnections: [
      {
        id: 'conn-hanukkah-john10',
        referenceDisplay: 'João 10:22 (Festa da Dedicação / Hanukkah)',
        scriptureReference: 'João 10:22-30',
        title: 'Jesus no Templo durante a Festa de Hanukkah',
        explanation: 'O Evangelho de João registra: "Celebrava-se em Jerusalém a Festa da Dedicação (Hanukkah); e era inverno. Jesus passeava no templo, no pórtico de Salomão". Esta festividade celebrava a purificação e acendimento do candelabro do Templo em 25 de Quisleu de 164 a.C. por Judas Macabeu após a expulsão dos sírios. É precisamente neste memorial que os judeus perguntam: "Até quando nos deixarás em dúvida? Se tu és o Cristo, dize-nos francamente", ao que Jesus responde com a sublime confissão: "Eu e o Pai somos um".',
        theologicalContext: 'Cristo Se revela como a verdadeira Luz e a consagração definitiva do santuário eterno de Deus.'
      },
      {
        id: 'conn-matthew-sects',
        referenceDisplay: 'Mateus 3:7 (Origem das seitas)',
        scriptureReference: 'Mateus 3:7-10',
        title: 'O Surgimento dos Fariseus e Saduceus',
        explanation: 'Quando João Batista e Jesus confrontam os "Fariseus e Saduceus", estão lidando com partidos religiosos consolidados durante a monarquia hasmoneia. Os Fariseus (Perushim, "separados") nasceram para proteger a pureza ritual do povo contra os compromissos profanos com o helenismo; já os Saduceus (aristocracia sacerdotal ligada aos hasmoneus) dominaram o Sinédrio e a tesouraria do Templo, rejeitando a doutrina da ressurreição, dos anjos e da providência divina soberana.',
        theologicalContext: 'Cenário sociorreligioso primordial para compreender os debates sobre a Lei, tradição e autoridade nos Evangelhos.'
      }
    ]
  },
  {
    id: 'roman-domination',
    title: 'A Chegada de Roma e o Reinado de Herodes',
    period: '63 a.C. – 4 a.C.',
    rulingPower: 'República e Império Romano',
    summary: 'O general romano Pompeu conquista Jerusalém e entra no Santo dos Santos. Roma nomeia Herodes, o Grande (um idumeu pragmático e brutal), como Rei dos Judeus.',
    keyEvents: [
      'Herodes executa rivais hasmoneus e reconstrói o Segundo Templo em escala colossal.',
      'Instituição do censo e das guarnições romanas permanentes na Fortaleza Antônia.',
      'Nascimento de Jesus Cristo em Belém nos anos finais de Herodes.'
    ],
    religiousImpact: 'O messianismo popular atinge o ápice histórico: o povo anseia febrilmente por um Libertador militar que quebre as algemas romanas.',
    biblicalConnections: ['Lucas 2:1-2 (Censo de César Augusto)', 'Mateus 2 (Massacre dos inocentes por Herodes)'],
    detailedConnections: [
      {
        id: 'conn-luke-census',
        referenceDisplay: 'Lucas 2:1-2 (Censo de César Augusto)',
        scriptureReference: 'Lucas 2:1-7',
        title: 'O Decreto Imperial de César e a Providência em Belém',
        explanation: 'Lucas ancorou a narrativa da encarnação na cronologia imperial: César Augusto decreta o recenseamento tributário em todo o Império Romano sob o governo sírio de Quirino. Esta máquina administrativa romana foi o instrumento soberano de Deus para deslocar José e Maria de Nazaré da Galileia para a Judeia, fazendo com que o Filho de Deus nascesse exatamente em Belém de Judá, em estrito cumprimento da profecia messiânica de Miqueias 5:2 enunciada sete séculos antes.',
        theologicalContext: 'A soberania absoluta de Deus sobre as potências imperiais da Terra para o cumprimento de Seu plano redentor.'
      },
      {
        id: 'conn-matthew-herod',
        referenceDisplay: 'Mateus 2 (Massacre dos inocentes por Herodes)',
        scriptureReference: 'Mateus 2:1-18',
        title: 'A Paranoia Tirânica de Herodes e a Fuga para o Egito',
        explanation: 'Ao ser informado pelos magos do oriente da profecia de que nasceria o "Rei dos Judeus", Herodes, o Grande — cuja crueldade e paranoia patológica o levaram a assassinar sua esposa Miriam e três filhos legítimos —, ordena o massacre dos meninos de dois anos para baixo em Belém. O aviso em sonho concedido a José e a fuga para o Egito cumprem as Escrituras ("Do Egito chamei o meu filho", Oséias 11:1, e o choro de Raquel em Ramá, Jeremias 31:15).',
        theologicalContext: 'A vitória e preservação miraculosa do Messias prometido contra a fúria das potestades deste mundo.'
      }
    ]
  }
];

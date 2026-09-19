import { ThematicPlan, ThematicCategory } from '../types';

export const THEMATIC_CATEGORIES_META: Record<ThematicCategory, {
  label: string;
  badgeColor: string;
  borderColor: string;
  iconName: string;
}> = {
  CRISTOLOGIA: {
    label: 'Cristologia',
    badgeColor: 'bg-red-500/10 text-red-400 border-red-500/30',
    borderColor: 'border-red-500/40',
    iconName: 'Crown'
  },
  ESCATOlOGIA: {
    label: 'Escatologia',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    borderColor: 'border-indigo-500/40',
    iconName: 'Sparkles'
  },
  ESCATOLOGIA: {
    label: 'Escatologia',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    borderColor: 'border-indigo-500/40',
    iconName: 'Sparkles'
  },
  PACTO: {
    label: 'Teologia do Pacto',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    borderColor: 'border-amber-500/40',
    iconName: 'Scroll'
  },
  SANTIDADE: {
    label: 'Santidade & Adoração',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    borderColor: 'border-emerald-500/40',
    iconName: 'Flame'
  },
  REINO: {
    label: 'O Reino de Deus',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/30',
    borderColor: 'border-sky-500/40',
    iconName: 'Shield'
  }
};

export const thematicPlansData: ThematicPlan[] = [
  // 1. A TEOLOGIA DO TEMPLO
  {
    id: 'teologia-do-templo',
    title: 'A Teologia do Templo: Do Éden à Nova Jerusalém',
    shortDescription: 'Rastreie a morada da presença gloriosa de Deus: do jardim primordial do Éden, passando pelo Tabernáculo e o Templo, até encarnar em Cristo, habitar na Igreja e culminar no cosmos redimido.',
    fullDescription: 'Na teologia bíblica clássica (notadamente desenvolvida por teólogos como G.K. Beale), o Templo não é meramente uma construção de pedra em Jerusalém, mas o eixo arquitetônico de toda a História da Redenção. Desde o Éden — projetado como o primeiro santuário cósmico onde Deus passeava com o homem —, até o Tabernáculo portátil no deserto, a presença divina buscou comunhão com o Seu povo. Quando o Verbo se fez carne (João 1:14), Ele "tabernaculou" entre nós, sendo o verdadeiro e definitivo Templo. Pela Sua ressurreição e o envio do Espírito, a Igreja torna-se o templo vivo de pedras humanas, apontando para a Nova Jerusalém, onde não há templo algum, pois o Senhor Deus Todo-Poderoso e o Cordeiro são o seu templo perpétuo.',
    themeCategory: 'CRISTOLOGIA',
    estimatedDays: 7,
    readings: [
      {
        day: 1,
        passageRef: 'Gênesis 1:26-28; 2:8-17; 3:8-9',
        thematicConnection: 'O Éden como Santuário Primordial: Deus planta um jardim ao oriente e coloca Adão com a missão de "cultivar e guardar" (em hebraico abad e shamar — exatamente os mesmos dois termos técnicos sacerdotais usados mais tarde para o serviço dos levitas no Tabernáculo em Números 3:7-8). O Éden era o Santo dos Santos original da criação, onde o Criador andava na viração do dia em comunhão não corrompida com a humanidade.'
      },
      {
        day: 2,
        passageRef: 'Êxodo 25:8-9; 40:34-38',
        thematicConnection: 'O Tabernáculo Móvel no Deserto: Após a expulsão do Éden e a redenção de Israel da escravidão, Deus ordena: "E me farão um santuário, para que eu possa habitar no meio deles". Os candelabros em formato de amendoeira florindo e as cortinas de querubins reproduzem artisticamente a flora e os guardiões do Éden. Quando a obra é consagrada, a nuvem da Shekinah desce de forma tão densa que nem Moisés pode entrar: Deus voltou a acampar com os Seus.'
      },
      {
        day: 3,
        passageRef: '1 Reis 8:10-13, 22-30',
        thematicConnection: 'O Templo de Salomão e a Glória em Sião: O santuário nômade dá lugar à morada estável sobre o Monte Sião. Na oração dedicatória de Salomão, a tensão teológica atinge o ápice: "Mas, na verdade, habitaria Deus na terra? Eis que os céus, e até o céu dos céus, não te podem conter, quanto menos esta casa que edifiquei!". O templo é simultaneamente o ponto de encontro da oração humana e o tipo profético de uma habitação infinitamente maior.'
      },
      {
        day: 4,
        passageRef: 'João 1:14; 2:18-22',
        thematicConnection: 'Cristo: O Verdadeiro Templo Encarnado: O apóstolo João proclama: "E o Verbo se fez carne e habitou [eskenosen, literalmente tabernaculou] entre nós, e vimos a sua glória". Ao purificar o templo de Herodes, Jesus desafia os líderes religiosos: "Destruí este santuário, e em três dias o reconstruirei", referindo-se profeticamente ao santuário do Seu próprio corpo ressurreto. Em Cristo, a presença divina definitiva tocou o mundo caído.'
      },
      {
        day: 5,
        passageRef: '1 Coríntios 3:16-17; Efésios 2:19-22',
        thematicConnection: 'A Igreja: O Templo Vivo do Espírito Santo: Pela união mística com Cristo, os crentes deixam de ser estrangeiros para tornarem-se "edifício de Deus". O apóstolo Paulo declara com assombro: "Não sabeis que sois santuário de Deus e que o Espírito de Deus habita em vós?". A presença divina não habita mais em paredes de alvenaria ou tecidos bordados, mas nos corações regenerados dos santos edificados sobre a Rocha angular.'
      },
      {
        day: 6,
        passageRef: 'Hebreus 9:11-14, 23-28; 10:19-22',
        thematicConnection: 'O Santuário Celestial e o Véu Rasgado: O autor aos Hebreus demonstra que as estruturas do Antigo Testamento eram sombras e figuras do verdadeiro tabernáculo não feito por mãos humanas. Cristo entrou uma vez por todas no Santo dos Santos celestial, não com sangue de bodes ou novilhos, mas com Seu próprio sangue remidor, rasgando o véu e abrindo aos crentes um novo e vivo caminho para a presença íntima do Pai.'
      },
      {
        day: 7,
        passageRef: 'Apocalipse 21:1-5, 22-27',
        thematicConnection: 'A Consumação Cósmica: A Nova Jerusalém: Na visão final do apóstolo João, a cidade santa desce dos céus quadrangular — as dimensões cúbicas idênticas às do Santo dos Santos do Tabernáculo e do Templo de Salomão (1 Reis 6:20). João observa com espanto: "Nela não vi templo, porque o seu templo é o Senhor Deus Todo-Poderoso e o Cordeiro". Toda a criação redimida transformou-se no Santo dos Santos; a presença e comunhão plena do Éden foram eternamente restauradas e glorificadas.'
      }
    ]
  },

  // 2. O SÁBADO E O DESCANSO VERDADEIRO
  {
    id: 'sabado-e-descanso-verdadeiro',
    title: 'O Sábado e o Descanso Verdadeiro: Da Criação a Hebreus 4',
    shortDescription: 'Descubra a teologia do repouso de Deus: como o 7º dia da criação antecipa o libertar da escravidão na Lei, o alívio espiritual em Cristo e o eterno repouso sabático que resta para o povo de Deus.',
    fullDescription: 'O Sábado (Shabbat) é muito mais do que uma ordenança de 24 horas no calendário judaico: é um dos fios teológicos mais profundos que perpassam toda a revelação canônica. Instituído por Deus no sétimo dia da Criação ao coroar Sua obra perfeita, o descanso foi quebrado pela rebelião da Queda, que introduziu a fadiga, o suor do rosto e o cativeiro idolátrico. Na Lei Mosaica, o sábado surge como memorial da redenção do Egito. Contudo, todos os sábados temporais apontavam tipologicamente para Cristo, o verdadeiro Senhor do Sábado, que convida todos os cansados a encontrar alívio Nele. Em Hebreus 4, descobrimos que resta ainda um verdadeiro repouso sabático celestial para os crentes, consumado plenamente na eternidade.',
    themeCategory: 'PACTO',
    estimatedDays: 5,
    readings: [
      {
        day: 1,
        passageRef: 'Gênesis 2:1-3; 3:17-19',
        thematicConnection: 'O Sétimo Dia: O Descanso do Criador e a Fadiga da Queda: Deus cessa Sua obra criadora no sétimo dia não por esgotamento físico, mas para entronizar-se como Soberano e regozijar-se em Sua criação "muito boa". É notável que nos dias 1 a 6 a Escritura repete "houve tarde e manhã", mas o sétimo dia não possui essa fórmula de encerramento — o descanso de comunhão com Deus foi criado para ser permanente. Com a Queda em Gênesis 3, o repouso é fraturado: a terra produz espinhos e a subsistência do homem torna-se dor e suor.'
      },
      {
        day: 2,
        passageRef: 'Êxodo 20:8-11; Deuteronômio 5:12-15',
        thematicConnection: 'O Sábado na Aliança do Sinai: Criação e Redenção: Nos Dez Mandamentos, o sábado recebe dois fundamentos complementares de imensa riqueza teológica. Em Êxodo 20, o motivo é cosmológico: imitar o descanso do Deus Criador no 7º dia. Em Deuteronômio 5, o motivo é histórico-redentivo: "Lembra-te de que foste escravo na terra do Egito e que o Senhor teu Deus te tirou de lá com mão poderosa". O sábado era um protesto pactual sagrado contra a exploração ininterrupta do faraó: o povo redimido de Deus não é escravo da produção, mas filho da aliança.'
      },
      {
        day: 3,
        passageRef: 'Mateus 11:28-30; 12:1-14',
        thematicConnection: 'Cristo: O Senhor do Sábado e o Alívio da Alma: Confrontado pelo legalismo rabínico sufocante que transformou o presente do descanso em um fardo de regras minuciosas, Jesus faz a declaração revolucionária: "O Filho do Homem é Senhor até do sábado" e cura no dia sagrado restaurando a vida. Antes disso, Ele faz o supremo convite evangélico: "Vinde a mim todos os que estais cansados e oprimidos, e eu vos aliviarei... e encontrareis descanso para as vossas almas". O verdadeiro Sábado é uma Pessoa: descansar em Jesus é cessar da tentativa desesperada de justificar-se pelas obras da lei.'
      },
      {
        day: 4,
        passageRef: 'Hebreus 3:7-19; 4:1-11',
        thematicConnection: 'O Repouso Sabático que Resta ao Povo de Deus: O autor de Hebreus examina o Salmo 95 e argumenta com precisão teológica: se Josué tivesse dado aos israelitas o descanso definitivo na terra de Canaã, Deus não teria falado séculos depois por Davi sobre "um outro dia". Portanto, "resta ainda um repouso sabático [sabbatismos] para o povo de Deus". Aquele que creu em Cristo cessou de suas próprias obras de autojustiça e entrou no descanso da graça, aguardando com firmeza a herança que há de vir.'
      },
      {
        day: 5,
        passageRef: 'Isaías 66:22-23; Apocalipse 14:12-13; 22:1-5',
        thematicConnection: 'O Descanso Escatológico Final na Nova Criação: No encerramento da Bíblia, a voz do céu proclama a bênção eterna dos santos: "Bem-aventurados os mortos que desde agora morrem no Senhor... para que descansem das suas fadigas, pois as suas obras os acompanham". Na Nova Jerusalém, a maldição do suor e da dor cessa para sempre. O rio da água da vida e a árvore que dá fruto cada mês testemunham a fertilidade perpétua e o descanso ativo de um povo que reinará para todo o sempre.'
      }
    ]
  },

  // 3. O CORDEIRO E O SACRIFÍCIO
  {
    id: 'o-cordeiro-e-o-sacrificio',
    title: 'O Cordeiro e o Sacrifício: Do Éden ao Trono Celeste',
    shortDescription: 'Acompanhe a trajetória do sangue inocente: das túnicas de pele aos sacrifícios patriarcais, a Páscoa do Êxodo, o Servo Sofredor de Isaías e a aclamação triunfal do Cordeiro no Apocalipse.',
    fullDescription: 'Desde o momento em que o pecado entrou no mundo e cobriu a humanidade de nudez e culpa, Deus estabeleceu que sem derramamento de sangue não há remissão (Hebreus 9:22). Este plano temático traça a pedagogia divina dos sacrifícios vicários: o sangue do animal inocente cobrindo Adão e Eva, o sacrifício de Abel aceito pela fé, o substituto no monte Moriá que poupou Isaque, a proteção do sangue nos umbrais na noite da Páscoa egípcia e as profecias comoventes do Servo Sofredor em Isaías 53. Tudo converge para João Batista apontando no rio Jordão: "Eis o Cordeiro de Deus!", culminando na visão celestial onde o Cordeiro que foi morto governa o universo.',
    themeCategory: 'CRISTOLOGIA',
    estimatedDays: 6,
    readings: [
      {
        day: 1,
        passageRef: 'Gênesis 3:20-21; 4:1-7; Hebreus 11:4',
        thematicConnection: 'A Primeira Cobertura e o Sangue Inocente: Diante da insuficiência das folhas de figueira cosidas pelo próprio homem para ocultar sua culpa, o próprio Deus confecciona túnicas de peles para vestir Adão e Eva — exigindo a primeira morte animal registrada na história sagrada. No capítulo seguinte, Abel oferece as primícias gordas do seu rebanho e é aceito por Deus por sua fé na revelação sacrifical de que a aproximação a Deus exige substituição.'
      },
      {
        day: 2,
        passageRef: 'Gênesis 22:1-14; João 8:56',
        thematicConnection: 'O Monte Moriá: "Deus Proverá para Si o Cordeiro": No drama supremo da fé de Abraão, o patriarca sobe a montanha com seu único filho amado carregando a lenha no ombro (imagem profética de Cristo carregando Sua cruz). À indagação de Isaque ("Onde está o cordeiro para o holocausto?"), Abraão responde profeticamente: "Deus proverá para si o cordeiro". O carneiro substituto preso no matagal salva Isaque e prenuncia o Gólgota, localizado na mesma cordilheira montanhosa de Moriá.'
      },
      {
        day: 3,
        passageRef: 'Êxodo 12:1-14, 21-28; 1 Coríntios 5:7',
        thematicConnection: 'A Páscoa: O Cordeiro sem Defeito e o Sangue Protetor: No juízo sobre os deuses do Egito, Deus institui o sacrifício pascal: um cordeiro macho de um ano, perfeito e sem defeito. O sangue recolhido na bacia deveria ser aspergido nos umbrais e nas ombreiras das portas com um ramo de hissopo. O destruidor passa por cima (Passover / Pesach) das casas sob o sangue: a redenção do povo opera por meio de um juízo suportado por um substituto imaculado.'
      },
      {
        day: 4,
        passageRef: 'Levítico 16:7-10, 20-22; Isaías 53:4-12',
        thematicConnection: 'O Dia da Expiação (Yom Kippur) e o Cordeiro Mudo: No ritual do Yom Kippur, dois aspectos da expiação são tipificados: o primeiro bode é imolado (propiciação pela santidade ofendida de Deus) e sobre o segundo bode (o bode emissário) o sacerdote confessa todos os pecados de Israel, enviando-o para o deserto (expiação e remoção do pecado). Isaías 53 une esses fios na pessoa do Servo do Senhor: "Ele foi traspassado pelas nossas transgressões... como um cordeiro que é levado ao matadouro, e como a ovelha que é muda perante os seus tosquiadores, Ele não abriu a sua boca".'
      },
      {
        day: 5,
        passageRef: 'João 1:29-36; 1 Pedro 1:18-21',
        thematicConnection: 'A Revelação Histórica: "Eis o Cordeiro de Deus": Séculos de expectativa de animais sacrificados encontram seu cumprimento histórico quando João Batista proclama: "Eis o Cordeiro de Deus, que tira o pecado do mundo!". O apóstolo Pedro ratifica essa teologia: não fomos resgatados com coisas corruptíveis como prata ou ouro, mas com o precioso sangue de Cristo, como de um cordeiro sem defeito e sem mácula, conhecido antes da fundação do mundo.'
      },
      {
        day: 6,
        passageRef: 'Apocalipse 5:1-14; 7:9-17',
        thematicConnection: 'A Consumação do Cordeiro no Trono: O ápice do drama cósmico em Apocalipse: quando João chora porque ninguém é digno de abrir os selos do livro do destino humano, um dos anciãos diz: "Eis que o Leão da tribo de Judá venceu". Mas quando João olha para ver o Leão guerreiro, o que ele vê é: "um Cordeiro de pé, como havendo sido morto", no centro do trono. A vitória cósmica de Deus sobre o mal foi conquistada pelo amor sacrifical da cruz. As nações lavam suas vestes no sangue do Cordeiro e Ele para sempre os apascentará.'
      }
    ]
  },

  // 4. O REINO DE DEUS
  {
    id: 'o-reino-de-deus',
    title: 'O Reino de Deus: Da Teocracia de Israel à Soberania de Cristo',
    shortDescription: 'Explore a grande proclamação da Bíblia: Deus reina soberano sobre a História, inaugurou Seu Reino em Jesus e consumará a derrota definitiva do pecado e da morte.',
    fullDescription: 'O "Reino de Deus" (Malkut Yahweh / Basileia tou Theou) é o tema unificador de toda a revelação bíblica. Começa com o governo soberano de Deus sobre a criação, expressa-se na aliança teocrática com Israel, transita pela promessa de um Rei davídico messiânico eterno em 2 Samuel 7 e nas visões apocalípticas de Daniel sobre o Filho do Homem. Nos Evangelhos, Jesus inicia Seu ministério proclamando: "O tempo está cumprido, e o Reino de Deus está próximo; arrependei-vos e crede no Evangelho". A teologia bíblica reformada enfatiza a dinâmica do "Já e o Ainda Não": o Reino já foi inaugurado pela ressurreição de Jesus e a derramada do Espírito, mas aguarda sua manifestação visível consumada na Sua volta triunfal.',
    themeCategory: 'REINO',
    estimatedDays: 6,
    readings: [
      {
        day: 1,
        passageRef: 'Salmo 93:1-5; Salmo 103:19-22; 1 Crônicas 29:10-13',
        thematicConnection: 'A Realeza Universal do Criador Soberano: A Bíblia inicia assumindo que Deus é o Rei ontológico e absoluto do cosmos. Ele estabeleceu o Seu trono nos céus e o Seu reino domina sobre tudo. Davi entoa a grande doxologia: "Tua é, Senhor, a grandeza, o poder, a honra, a vitória e a majestade... teu é o reino, e tu te exaltaste como chefe sobre todos". A criação existe sob o senhorio benevolente do Deus vivo.'
      },
      {
        day: 2,
        passageRef: '1 Samuel 8:4-9; 2 Samuel 7:8-17; Salmo 2:1-12',
        thematicConnection: 'A Crise da Monarquia Terrena e a Aliança com a Casa de Davi: Quando Israel rejeita a teocracia pura para pedir um rei humano "como todas as outras nações", Deus concede a monarquia, mas a transforma no veículo da profecia messiânica. Em 2 Samuel 7, Deus faz aliança incondicional com Davi: "A tua casa e o teu reino serão firmados para sempre diante de ti; o teu trono será estabelecido para sempre". O Salmo 2 celebra este Filho Ungido a quem todas as nações da terra devem beijar e submeter-se.'
      },
      {
        day: 3,
        passageRef: 'Daniel 2:31-45; Daniel 7:13-14',
        thematicConnection: 'A Pedra não Cortada por Mãos e o Filho do Homem: Em meio ao cativeiro babilônico e à opressão dos impérios mundiais (Babilônia, Medo-Pérsia, Grécia e Roma), o profeta Daniel recebe a revelação da pedra que esmiúça a grande estátua pagã e torna-se um monte que enche a terra inteira: "Nos dias destes reis, o Deus do céu suscitará um reino que não será jamais destruído". No capítulo 7, Daniel vê "um como o Filho do Homem" vindo com as nuvens do céu até o Ancião de Dias, recebendo domínio eterno e glória que jamais passarão.'
      },
      {
        day: 4,
        passageRef: 'Marcos 1:14-15; Lucas 11:14-20; Lucas 17:20-21',
        thematicConnection: 'A Invasão do Reino em Jesus: O "Já e o Ainda Não": Jesus encerra 400 anos de silêncio profético com o anúncio: "O tempo está cumprido, e o Reino de Deus está próximo". A expulsão de demônios e as curas miraculosas não eram meros prodígios espetaculares, mas sinais tangíveis da invasão armada do Reino de Deus desmantelando o império das trevas: "Se eu expulso os demônios pelo dedo de Deus, certamente é chegado a vós o Reino de Deus". O Reino não veio com espalhafato militarista como os zelotes esperavam, mas espiritualmente nos corações.'
      },
      {
        day: 5,
        passageRef: 'Colossenses 1:13-14; Romanos 14:17; Filipenses 2:9-11',
        thematicConnection: 'A Cidadania Presente no Reino do Filho: Pela morte e ressurreição de Cristo, Deus "nos tirou do poder das trevas e nos transportou para o Reino do Filho do Seu amor". O Reino de Deus na era apostólica não é comida nem bebida, mas justiça, paz e alegria no Espírito Santo. Porque Jesus se humilhou até a morte de cruz, Deus o exaltou soberanamente para que ao nome de Jesus se dobre todo joelho nos céus, na terra e debaixo da terra, e toda língua confesse que Jesus Cristo é Senhor.'
      },
      {
        day: 6,
        passageRef: '1 Coríntios 15:24-28; Apocalipse 11:15; 19:11-16',
        thematicConnection: 'A Consumação Gloriosa do Reino: O ápice da História da Redenção: o sétimo anjo toca a trombeta e vozes no céu proclamam: "Os reinos do mundo vieram a ser de nosso Senhor e do seu Cristo, e ele reinará para todo o sempre!". Quando todos os inimigos forem subjugados sob os Seus pés — inclusive o último inimigo, a morte —, então o Filho entregará o Reino ao Deus e Pai, para que Deus seja tudo em todos.'
      }
    ]
  }
];

/**
 * Helper to get a thematic plan by ID.
 */
export function getThematicPlanById(id: string): ThematicPlan | undefined {
  return thematicPlansData.find(p => p.id === id);
}

/**
 * Helper to get thematic plans filtered by category.
 */
export function getThematicPlansByCategory(category: ThematicCategory | 'ALL'): ThematicPlan[] {
  if (category === 'ALL') return thematicPlansData;
  return thematicPlansData.filter(p => p.themeCategory === category);
}

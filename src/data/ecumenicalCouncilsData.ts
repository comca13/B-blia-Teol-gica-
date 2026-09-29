import { EcumenicalCouncil } from '../types';

export const ecumenicalCouncilsData: EcumenicalCouncil[] = [
  {
    id: 'niceia-i-325',
    number: 1,
    name: 'Primeiro Concílio de Niceia',
    year: 325,
    displayYear: '325 d.C.',
    convenedBy: 'Imperador Constantino, o Grande',
    location: 'Niceia (atual İznik, Turquia)',
    heresyAddressed: {
      name: 'Arianismo',
      proponent: 'Ário (Presbítero de Alexandria)',
      coreError: 'Ensinava que o Filho não era eterno, mas a primeira e mais elevada criatura de Deus: "Houve um tempo em que o Filho não existia".'
    },
    orthodoxResponse: {
      defenders: ['Santo Atanásio de Alexandria', 'São Nicolau de Mira', 'Ósio de Córdova'],
      dogmaticFormulation: 'O Filho é Deus verdadeiro de Deus verdadeiro, gerado, não criado, consubstancial ao Pai.',
      greekLatinTerms: ['Homoousios (Consubstancial / de mesma essência)', 'Genēthenta, ou poiēthenta (Gerado, não feito)']
    },
    historicalImpact: 'Redação da primeira parte do Credo de Niceia e fixação canônica da data da celebração da Páscoa cristã.'
  },
  {
    id: 'constantinopla-i-381',
    number: 2,
    name: 'Primeiro Concílio de Constantinopla',
    year: 381,
    displayYear: '381 d.C.',
    convenedBy: 'Imperador Teodósio I',
    location: 'Constantinopla (atual Istambul, Turquia)',
    heresyAddressed: {
      name: 'Pneumatomatismo (Macedonianismo) e Apolinarianismo',
      proponent: 'Macedônio e Apolinário de Laodiceia',
      coreError: 'Negava a divindade do Espírito Santo (reduzindo-o a servo) ou afirmava que Cristo não possuía uma mente humana racional (apenas o Logos divino).'
    },
    orthodoxResponse: {
      defenders: ['São Gregório de Nazianzo', 'São Gregório de Nissa', 'São Basílio Magno (póstumo)'],
      dogmaticFormulation: 'O Espírito Santo é Senhor que dá a vida, procede do Pai e com o Pai e o Filho recebe a mesma adoração e glória.',
      greekLatinTerms: ['To Kyrion, To Zōopoion (Senhor e Vivificador)', 'Homotimia (Igualdade de Honra)']
    },
    historicalImpact: 'Conclusão definitiva do Credo Niceno-Constantinopolitano proclamado em todas as liturgias cristãs até hoje.'
  },
  {
    id: 'efeso-431',
    number: 3,
    name: 'Concílio de Éfeso',
    year: 431,
    displayYear: '431 d.C.',
    convenedBy: 'Imperador Teodósio II',
    location: 'Éfeso (atual Turquia)',
    heresyAddressed: {
      name: 'Nestorianismo',
      proponent: 'Nestório (Patriarca de Constantinopla)',
      coreError: 'Dividia Cristo em duas pessoas distintas (uma divina e uma humana justapostas), recusando o título de Mãe de Deus a Maria, chamando-a apenas de Mãe de Cristo (Christotokos).'
    },
    orthodoxResponse: {
      defenders: ['São Cirilo de Alexandria', 'Papa Celestino I'],
      dogmaticFormulation: 'Cristo é uma só Pessoa (a Pessoa divina do Filho) unida inseparavelmente à natureza humana desde a concepção.',
      greekLatinTerms: ['Theotokos (Geradora de Deus / Mãe de Deus)', 'Henōsis Kath\' Hypostasin (União Hipostática)']
    },
    historicalImpact: 'Salvaguarda da união das naturezas em Cristo e primeiro grande cisma da Igreja do Oriente (Igreja Assíria).'
  },
  {
    id: 'calcedonia-451',
    number: 4,
    name: 'Concílio de Calcedônia',
    year: 451,
    displayYear: '451 d.C.',
    convenedBy: 'Imperador Marciano e Imperatriz Pulquéria',
    location: 'Calcedônia (Turquia)',
    heresyAddressed: {
      name: 'Monofisismo (Eutiquianismo)',
      proponent: 'Êutiques (Arquimandrita de Constantinopla)',
      coreError: 'Ensinava que após a Encarnação a natureza humana de Cristo foi totalmente absorvida pela divina, como uma gota de vinagre no oceano.'
    },
    orthodoxResponse: {
      defenders: ['Papa São Leão Magno (Tomo a Flaviano)', 'Santo Anatólio de Constantinopla'],
      dogmaticFormulation: 'Cristo deve ser reconhecido em duas naturezas perfeitas, sem confusão, sem mudança, sem divisão e sem separação.',
      greekLatinTerms: ['In Duabus Naturis (Em Duas Naturezas)', 'Asynchytōs, Atreptōs, Adiairetōs, Achōristōs (Os quatro advérbios calcedonianos)']
    },
    historicalImpact: 'A definição cristológica suprema do cristianismo histórico e separação das Igrejas Ortodoxas Orientais (Coptas, Armênios e Siríacos).'
  }
];

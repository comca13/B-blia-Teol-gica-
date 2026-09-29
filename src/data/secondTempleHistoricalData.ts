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
    biblicalConnections: ['Últimos oráculos de Malaquias', 'Livros de Esdras e Neemias', 'Profecias de Daniel 8:1-4']
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
    biblicalConnections: ['Cumprimento exato de Daniel 8 e 11', '1 e 2 Macabeus', 'Mateus 24:15']
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
    biblicalConnections: ['João 10:22 (Festa da Dedicação / Hanukkah)', 'Mateus 3:7 (Origem das seitas)']
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
    biblicalConnections: ['Lucas 2:1-2 (Censo de César Augusto)', 'Mateus 2 (Massacre dos inocentes por Herodes)']
  }
];

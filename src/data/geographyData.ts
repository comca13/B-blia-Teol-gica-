import { GeographyContext } from '../types';

export const MAJOR_BIBLICAL_GEOGRAPHIES: Record<string, GeographyContext> = {
  fertileCrescent: {
    regionName: 'O Crescente Fértil & Vale Mesopotâmico',
    modernLocation: 'Atual Iraque (Tigre e Eufrates), sudeste da Turquia e Síria',
    coordinatesSummary: '31°00\'N, 46°00\'L (Planície de Sinear / Ur dos Caldeus)',
    mapReferenceUrl: 'https://maps.google.com/?q=Ur,Iraq',
    topographyNote: 'Planícies aluviais formadas pelas cheias periódicas dos rios Tigre e Eufrates. Terra de irrigação artificial intensiva e solo fértil, berço da civilização urbana e rota percorrida por Abraão de Ur a Harã antes da subida para a terra de Canaã.'
  },
  judeanHighlands: {
    regionName: 'Planalto Central da Judeia & Montes de Jerusalém',
    modernLocation: 'Atual Cisjordânia / Israel (Jerusalém, Belém e Hebrom)',
    coordinatesSummary: '31°46\'N, 35°13\'L (Elevação: ~754 a 820m acima do nível do mar)',
    mapReferenceUrl: 'https://maps.google.com/?q=Mount+Moriah,Jerusalem',
    topographyNote: 'Cume montanhoso de calcário recortado por vales profundos (Hinom e Cedrom). O relevo íngreme conferia a Jerusalém defesas naturais formidáveis ("como os montes estão ao redor de Jerusalém, assim o Senhor está ao redor do Seu povo"). A subida íngreme desde o nível do mar até os cumes marcava a peregrinação das festas de romaria.'
  },
  jerichoDescent: {
    regionName: 'A Garganta do Deserto da Judeia: Jerusalém a Jericó',
    modernLocation: 'Atual Cisjordânia (Deserto da Judeia e Oásis de Jericó)',
    coordinatesSummary: '31°52\'N, 35°27\'L (Desnível dramático de +750m a -250m)',
    mapReferenceUrl: 'https://maps.google.com/?q=Jericho',
    topographyNote: 'A descida de Jerusalém a Jericó compreende um precipício árido com desnível brutal de mais de 1.000 metros em apenas 27 km de distância, atingindo a depressão do Vale do Jordão. Estrada rochosa e desértica cercada de despenhadeiros, famosa na antiguidade por emboscadas de salteadores (cenário real da parábola do Bom Samaritano).'
  },
  galileeSea: {
    regionName: 'Bacia do Mar da Galileia (Lago de Genesaré / Quinerete)',
    modernLocation: 'Norte de Israel (Galileia / Cafarnaum / Betsaida / Tiberíades)',
    coordinatesSummary: '32°48\'N, 35°36\'L (212 metros abaixo do nível do mar)',
    mapReferenceUrl: 'https://maps.google.com/?q=Sea+of+Galilee',
    topographyNote: 'Lago de água doce encravado na fenda tectônica sírio-africana, cercado pelas colinas de Golã e montanhas da Galileia. Essa topografia em forma de taça canaliza ventos frios do monte Hermom através das gargantas, provocando tempestades violentas e repentinas no lago (como nos relatos dos Evangelhos).'
  },
  jezreelValley: {
    regionName: 'Vale de Jezreel & Desfiladeiro de Megido',
    modernLocation: 'Norte de Israel (Planície de Esdrelom)',
    coordinatesSummary: '32°35\'N, 35°11\'L (Passo estratégico de Megido)',
    mapReferenceUrl: 'https://maps.google.com/?q=Tel+Megiddo',
    topographyNote: 'O corredor geográfico mais disputado do Levante antigo. Cortando Israel do Mar Mediterrâneo ao Rio Jordão, era o gargalo militar obrigatório da Via Maris conectando o Império Egípcio aos Impérios Mesopotâmicos. Palco de batalhas decisivas (Débora e Baraque, Gideão, a morte de Josias) e símbolo profético do Armagedom (Har-Magedon).'
  },
  sinaiWilderness: {
    regionName: 'Península do Sinai & Deserto de Parã',
    modernLocation: 'Atual República Árabe do Egito (Península do Sinai)',
    coordinatesSummary: '28°32\'N, 33°58\'L (Maciço de Granito do Jebel Musa / Monte Sinai)',
    mapReferenceUrl: 'https://maps.google.com/?q=Mount+Sinai,Egypt',
    topographyNote: 'Planalto montanhoso hiperárido de arenito e granito escuro, desprovido de vegetação permanente e cortado por uádis secos que sofrem inundações relâmpago. Ambiente implacável onde a sobrevivência de dois milhões de israelitas dependia exclusivamente do maná diário, da água da rocha e da coluna de nuvem e fogo.'
  },
  jordanValleyDeadSea: {
    regionName: 'Vale do Jordão Inferior e Fossa do Mar Salgado',
    modernLocation: 'Fronteira Israel-Cisjordânia-Jordânia',
    coordinatesSummary: '31°30\'N, 35°30\'L (Ponto mais baixo da crosta terrestre: -430m)',
    mapReferenceUrl: 'https://maps.google.com/?q=Dead+Sea',
    topographyNote: 'A maior depressão continental do planeta Terra, fruto de falha geológica ativa. Águas de salinidade extrema (mais de 30%) e depósitos de betume, enxofre e sal gema. Cenário da destruição de Sodoma e Gomorra, refúgio de Davi nas cavernas de En-Gedi e esconderijo dos Manuscritos em Qumran.'
  },
  mesopotamianExile: {
    regionName: 'Babilônia e Rios Quebar / Eufrates',
    modernLocation: 'Atual Iraque Central (Sul de Bagdá e Hillah)',
    coordinatesSummary: '32°32\'N, 44°25\'L (Sítio Arqueológico de Babilônia)',
    mapReferenceUrl: 'https://maps.google.com/?q=Babylon,Iraq',
    topographyNote: 'Vasta planície aluvial entrecortada por canais artificiais de navegação e irrigação imperial (o canal Quebar de Ezequiel 1:1). Paisagem plana dominada por ziggurats de tijolos cozidos, onde os cativos judeus choravam sentados à beira das águas lembrando-se de Sião (Salmo 137).'
  },
  asiaMinorAegean: {
    regionName: 'Província da Ásia Menor, Grécia e Mar Egeu',
    modernLocation: 'Atual Turquia Ocidental e Grécia (Éfeso, Atenas, Corinto, Patmos)',
    coordinatesSummary: '37°56\'N, 27°20\'L (Éfeso e Costa do Mar Egeu)',
    mapReferenceUrl: 'https://maps.google.com/?q=Ephesus,Turkey',
    topographyNote: 'Região montanhosa entrecortada por golfos e ilhas vulcânicas do Mar Egeu. Conectada por rotas romanas como a Via Inácia, permitiu que o apóstolo Paulo fundasse igrejas nos principais centros urbanos e portos cosmopolitas greco-romanos.'
  },
  romeImperialCenter: {
    regionName: 'Lácio & Cidade das Sete Colinas (Roma Imperial)',
    modernLocation: 'Roma, Península Itálica',
    coordinatesSummary: '41°53\'N, 12°29\'L (Colinas Palatino e Capitólio)',
    mapReferenceUrl: 'https://maps.google.com/?q=Colosseum,Rome',
    topographyNote: 'Bacia do rio Tibre cercada por sete colinas estratégicas, núcleo administrativo e militar de um império de 50 milhões de pessoas com a malha viária mais extensa do mundo ("todos os caminhos levam a Roma"), onde Paulo cumpriu prisão domiciliar e proclamou o Evangelho sem impedimento (Atos 28:30-31).'
  }
};

export function getGeographyForDay(
  dayNumber: number,
  periodId?: string,
  passages?: Array<{ book: string; reference: string }>
): GeographyContext {
  const pBooks = (passages || []).map(p => p.book.toLowerCase());

  // Novo Testamento - Igreja / Paulo / Apocalipse
  if (periodId === 'early-church' || dayNumber >= 336) {
    if (dayNumber >= 360) {
      return MAJOR_BIBLICAL_GEOGRAPHIES.romeImperialCenter;
    }
    return MAJOR_BIBLICAL_GEOGRAPHIES.asiaMinorAegean;
  }

  // Evangelhos / Jesus na Galileia e Jerusalém
  if (periodId === 'gospels' || (dayNumber >= 296 && dayNumber <= 335)) {
    if (dayNumber >= 322) {
      return MAJOR_BIBLICAL_GEOGRAPHIES.judeanHighlands;
    }
    if (dayNumber % 2 === 0) {
      return MAJOR_BIBLICAL_GEOGRAPHIES.jerichoDescent;
    }
    return MAJOR_BIBLICAL_GEOGRAPHIES.galileeSea;
  }

  // Pós-exílio e Ester
  if (periodId === 'post-exile' || (dayNumber >= 276 && dayNumber <= 295)) {
    return MAJOR_BIBLICAL_GEOGRAPHIES.judeanHighlands;
  }

  // Exílio na Babilônia
  if (periodId === 'exile' || (dayNumber >= 246 && dayNumber <= 275)) {
    return MAJOR_BIBLICAL_GEOGRAPHIES.mesopotamianExile;
  }

  // Reino Dividido
  if (periodId === 'divided-kingdom' || (dayNumber >= 166 && dayNumber <= 245)) {
    if (dayNumber >= 210 && dayNumber <= 225) {
      return MAJOR_BIBLICAL_GEOGRAPHIES.judeanHighlands;
    }
    return MAJOR_BIBLICAL_GEOGRAPHIES.jezreelValley;
  }

  // Reino Unido (Davi e Salomão)
  if (periodId === 'united-kingdom' || (dayNumber >= 106 && dayNumber <= 165)) {
    return MAJOR_BIBLICAL_GEOGRAPHIES.judeanHighlands;
  }

  // Conquista e Juízes
  if (periodId === 'conquest-judges' || (dayNumber >= 76 && dayNumber <= 105)) {
    return MAJOR_BIBLICAL_GEOGRAPHIES.jezreelValley;
  }

  // Êxodo e Peregrinação
  if (periodId === 'exodus-wilderness' || (dayNumber >= 27 && dayNumber <= 75)) {
    return MAJOR_BIBLICAL_GEOGRAPHIES.sinaiWilderness;
  }

  // Patriarcas e Criação
  if (dayNumber >= 17) {
    return MAJOR_BIBLICAL_GEOGRAPHIES.jordanValleyDeadSea;
  }
  return MAJOR_BIBLICAL_GEOGRAPHIES.fertileCrescent;
}

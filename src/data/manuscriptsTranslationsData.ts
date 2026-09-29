import { ManuscriptTranslationMilestone } from '../types';

export const manuscriptsTranslationsData: ManuscriptTranslationMilestone[] = [
  {
    id: 'rolos-mar-morto',
    title: 'Os Rolos do Mar Morto (Manuscritos de Qumran)',
    category: 'Códice / Manuscrito',
    period: 'c. 250 a.C. – 68 d.C.',
    figureOrOrigin: 'Comunidade Essênia de Qumran (Deserto da Judeia)',
    description: 'Mais de 900 manuscritos e fragmentos preservados milagrosamente em jarros de argila dentro de cavernas secas, descobertos em 1947 por um pastor beduíno.',
    significance: 'Forneceu cópias do Antigo Testamento (incluindo o Grande Rolo de Isaías completo) 1.000 anos mais antigas que o Texto Massorético, demonstrando a exatidão inalterada com que a Bíblia foi copiada ao longo dos séculos.',
    primaryLanguages: ['Hebraico Bíblico', 'Aramaico', 'Grego'],
    preservationLocation: 'Santuário do Livro (Museu de Israel, Jerusalém)'
  },
  {
    id: 'codex-sinaiticus',
    title: 'Codex Sinaiticus (Códice Aleph - א)',
    category: 'Códice / Manuscrito',
    period: 'c. 330 – 360 d.C.',
    figureOrOrigin: 'Mosteiro de Santa Catarina (Monte Sinai) / Constantinopla',
    description: 'O mais antigo manuscrito completo do Novo Testamento em grego uncial preservado em pergaminho de altíssima qualidade, resgatado no século XIX por Constantin von Tischendorf.',
    significance: 'Base primordial para as edições críticas modernas do Novo Testamento grego (Nestle-Aland e UBS), sendo testemunha-chave para o estudo de variantes textuais antigas.',
    primaryLanguages: ['Grego Koiné'],
    preservationLocation: 'British Library (Londres), Leipzig, São Petersburgo e Sinai'
  },
  {
    id: 'vulgata-jeronimo',
    title: 'A Vulgata Latina de São Jerônimo',
    category: 'Tradução Histórica',
    period: '382 – 405 d.C.',
    figureOrOrigin: 'São Jerônimo (sob comissão do Papa Dâmaso I em Belém)',
    description: 'Jerônimo mudou-se para uma caverna em Belém para traduzir o Antigo Testamento diretamente do hebraico original (Veritas Hebraica), e não da Septuaginta, revisando também os Evangelhos em latim.',
    significance: 'Tornou-se a Bíblia oficial da Cristandade Ocidental por mais de um milênio, padronizando a teologia ocidental e a liturgia latina.',
    primaryLanguages: ['Latim clássico / eclesiástico', 'Traduzido de Hebraico, Aramaico e Grego']
  },
  {
    id: 'william-tyndale',
    title: 'William Tyndale: O Pai da Bíblia Inglesa',
    category: 'Pioneiro / Mártir',
    period: 'c. 1494 – 1536 d.C.',
    figureOrOrigin: 'Inglaterra / Antuérpia',
    description: 'Erudito de Oxford e Cambridge que traduziu o Novo Testamento e grande parte do Antigo Testamento diretamente do grego e hebraico para o inglês, contrabandeando os exemplares em fardos de tecido.',
    significance: 'Traído e preso perto de Bruxelas, foi estrangulado e queimado em praça pública em 1536. Sua oração final ("Senhor, abre os olhos do Rei da Inglaterra!") foi ouvida anos depois. Mais de 80% da King James Version (1611) é texto direto de Tyndale.',
    primaryLanguages: ['Inglês', 'Traduzido de Hebraico e Grego']
  },
  {
    id: 'joao-ferreira-almeida',
    title: 'João Ferreira de Almeida: A Bíblia em Língua Portuguesa',
    category: 'Pioneiro / Mártir',
    period: '1628 – 1691 d.C.',
    figureOrOrigin: 'Portugal / Batávia (atual Jacarta, Indonésia)',
    description: 'Convertido à fé reformada na Ásia, Almeida dedicou a vida a traduzir as Escrituras a partir dos textos originais (Textus Receptus) para o idioma português sob oposição contínua.',
    significance: 'Publicou o Novo Testamento em Amsterdã em 1681. Faleceu em Batávia enquanto traduzia Ezequiel 48:31. Seu trabalho é a espinha dorsal de quase todas as Bíblias de língua portuguesa lidas no mundo.',
    primaryLanguages: ['Português', 'Traduzido de Hebraico e Grego']
  }
];

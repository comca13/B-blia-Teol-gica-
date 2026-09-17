import 'dotenv/config';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

const data = [
  {
    day: 1,
    theologicalContext: "O início da jornada canônica nos coloca diante do Criador e da genealogia do Messias.",
    historicalContext: "Formação de Israel no Egito.",
    reflectionQuestions: ["Como a criação molda sua identidade?", "Qual esperança o nascimento de Jesus traz?"],
    keyVerse: { reference: "Gênesis 1:1", text: "No princípio, criou Deus os céus e a terra." }
  },
  {
    day: 2,
    theologicalContext: "A queda do homem e a promessa inicial de redenção.",
    historicalContext: "O início da experiência humana fora do Éden.",
    reflectionQuestions: ["Como o pecado afeta sua percepção de Deus?", "Onde você encontra esperança?"],
    keyVerse: { reference: "Gênesis 3:15", text: "Porei inimizade entre ti e a mulher..." }
  },
  {
    day: 3,
    theologicalContext: "O juízo de Deus e o início da história das nações.",
    historicalContext: "O dilúvio e a aliança com Noé.",
    reflectionQuestions: ["Como você lida com a justiça de Deus?", "Qual é a sua aliança com Ele?"],
    keyVerse: { reference: "Gênesis 9:13", text: "O meu arco tenho posto nas nuvens..." }
  },
  {
    day: 4,
    theologicalContext: "A chamada de Abrão e o início da fé pactual.",
    historicalContext: "Migração de Ur para Canaã.",
    reflectionQuestions: ["O que Deus está pedindo para você deixar?", "Como você confia na promessa?"],
    keyVerse: { reference: "Gênesis 12:2", text: "Far-te-ei uma grande nação..." }
  },
  {
    day: 5,
    theologicalContext: "A provisão de Deus na aliança.",
    historicalContext: "O encontro com Melquisedeque.",
    reflectionQuestions: ["Quem é o seu Melquisedeque hoje?", "Como você agradece a vitória?"],
    keyVerse: { reference: "Gênesis 14:18", text: "Melquisedeque, rei de Salém, trouxe pão e vinho..." }
  },
  {
    day: 6,
    theologicalContext: "Deus confirma a aliança por meio de um sinal.",
    historicalContext: "A circuncisão como sinal da aliança.",
    reflectionQuestions: ["Qual é o sinal da sua aliança com Deus?", "Você confia nas promessas futuras?"],
    keyVerse: { reference: "Gênesis 17:7", text: "Estabelecerei a minha aliança..." }
  },
  {
    day: 7,
    theologicalContext: "A intercessão pelos pecadores e o juízo sobre Sodoma.",
    historicalContext: "A destruição das cidades da planície.",
    reflectionQuestions: ["Você intercede pelas pessoas ao seu redor?", "Como você vê a misericórdia de Deus?"],
    keyVerse: { reference: "Gênesis 18:25", text: "Não faria justiça o Juiz de toda a terra?" }
  },
  {
    day: 8,
    theologicalContext: "O teste supremo de fé e a obediência.",
    historicalContext: "O sacrifício de Isaque no Monte Moriá.",
    reflectionQuestions: ["O que é o seu 'Isaque' para Deus?", "Como você obedece sem entender tudo?"],
    keyVerse: { reference: "Gênesis 22:14", text: "O Senhor proverá." }
  },
  {
    day: 9,
    theologicalContext: "A fidelidade de Deus na busca por uma noiva.",
    historicalContext: "A busca por uma esposa para Isaque.",
    reflectionQuestions: ["Você busca a direção de Deus em decisões importantes?", "Como Deus conduz a sua vida?"],
    keyVerse: { reference: "Gênesis 24:27", text: "O Senhor me guiou no caminho." }
  },
  {
    day: 10,
    theologicalContext: "A bênção da aliança passa para a próxima geração.",
    historicalContext: "Jacó e a escada dos sonhos.",
    reflectionQuestions: ["Como você valoriza a herança espiritual?", "Deus está presente onde você menos espera?"],
    keyVerse: { reference: "Gênesis 28:15", text: "Eis que estou contigo..." }
  },
  {
    day: 11,
    theologicalContext: "A perseverança na busca pela bênção e a construção da família.",
    historicalContext: "Jacó serve por Raquel.",
    reflectionQuestions: ["Pelo que você está disposto a lutar?", "Deus honra sua perseverança?"],
    keyVerse: { reference: "Gênesis 29:20", text: "Assim serviu Jacó sete anos por Raquel..." }
  },
  {
    day: 12,
    theologicalContext: "A superação de conflitos familiares e a provisão divina.",
    historicalContext: "O retorno de Jacó para Canaã.",
    reflectionQuestions: ["Você busca reconciliação?", "Como você lida com o seu passado?"],
    keyVerse: { reference: "Gênesis 32:28", text: "Lutaste com Deus e com os homens..." }
  },
  {
    day: 13,
    theologicalContext: "A soberania de Deus acima das ações humanas.",
    historicalContext: "José é vendido como escravo.",
    reflectionQuestions: ["Como você lida com a traição?", "Deus está no controle da sua situação?"],
    keyVerse: { reference: "Gênesis 37:28", text: "Venderam José por vinte moedas de prata." }
  },
  {
    day: 14,
    theologicalContext: "A integridade em tempos de provação.",
    historicalContext: "José na casa de Potifar.",
    reflectionQuestions: ["Você mantém sua integridade mesmo sem ninguém olhando?", "Onde Deus está nas suas provações?"],
    keyVerse: { reference: "Gênesis 39:9", text: "Como, pois, cometeria eu este grande mal?" }
  },
  {
    day: 15,
    theologicalContext: "A fidelidade de Deus na prisão e no sofrimento.",
    historicalContext: "José na prisão.",
    reflectionQuestions: ["Como Deus está com você nos momentos mais difíceis?", "Você consegue manter a esperança?"],
    keyVerse: { reference: "Gênesis 39:21", text: "O Senhor estava com José..." }
  },
  {
    day: 16,
    theologicalContext: "A exaltação de Deus através de seus servos.",
    historicalContext: "José interpreta o sonho do Faraó.",
    reflectionQuestions: ["Quais dons Deus te deu para servir aos outros?", "Você reconhece que o talento vem de Deus?"],
    keyVerse: { reference: "Gênesis 41:16", text: "Isso não está em mim; Deus dará resposta de paz." }
  },
  {
    day: 17,
    theologicalContext: "A provisão divina em tempos de escassez.",
    historicalContext: "José como governador do Egito.",
    reflectionQuestions: ["Você confia na provisão de Deus?", "Como você pode ser um canal de bênção para outros?"],
    keyVerse: { reference: "Gênesis 41:41", text: "Pus-te sobre toda a terra do Egito." }
  },
  {
    day: 18,
    theologicalContext: "O teste do caráter e a transformação dos corações.",
    historicalContext: "José encontra seus irmãos.",
    reflectionQuestions: ["Como você lida com quem te feriu?", "Você é capaz de perdoar genuinamente?"],
    keyVerse: { reference: "Gênesis 45:5", text: "Deus me enviou adiante de vós, para preservar a vida." }
  },
  {
    day: 19,
    theologicalContext: "A reunião da família e a reconciliação.",
    historicalContext: "Jacó encontra José no Egito.",
    reflectionQuestions: ["Qual é a importância da união familiar?", "Como Deus cura as feridas do passado?"],
    keyVerse: { reference: "Gênesis 46:30", text: "Agora morrerei, pois já vi o teu rosto." }
  },
  {
    day: 20,
    theologicalContext: "O plano de Deus realizado através de gerações.",
    historicalContext: "O final da vida de Jacó e José.",
    reflectionQuestions: ["Você confia nas promessas de Deus para o futuro?", "O que você deixa como legado?"],
    keyVerse: { reference: "Gênesis 50:20", text: "Vós bem intentastes o mal contra mim; porém Deus o tornou em bem." }
  }
];

async function seed() {
  if (!db) {
    console.error("Firestore not initialized. Check firebase configuration.");
    return;
  }
  
  console.log("Starting seed...");
  for (const item of data) {
    const docRef = doc(db, 'readings', `canonical_${item.day}`);
    await setDoc(docRef, {
      theologicalContext: item.theologicalContext,
      historicalContext: item.historicalContext,
      reflectionQuestions: item.reflectionQuestions,
      keyVerse: item.keyVerse
    });
    console.log(`Seeded day ${item.day}`);
  }
  console.log("Seed finished.");
}

seed();

import 'dotenv/config';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { CHRONOLOGICAL_PLAN } from '../data/chronologicalPlan';
import { allAnnualReadings } from '../data/allReadings';

async function seedDatabase() {
  console.log("Iniciando a carga de dados para o Firestore (coletânea 'readings')...");

  try {
    // Seed Chronological
    for (const item of CHRONOLOGICAL_PLAN) {
      const docId = `chronological_${item.day}`;
      const data = {
        theologicalContext: item.theologicalContext || 'Conteúdo em desenvolvimento.',
        historicalContext: typeof item.worldHistory === 'string' ? item.worldHistory : (item.worldHistory?.globalEvent || 'Sem contexto histórico definido.'),
        reflectionQuestions: item.reflectionQuestions || [],
        keyVerse: item.keyVerse || { reference: 'N/A', text: 'N/A' },
        planType: 'chronological',
        day: item.day
      };
      await setDoc(doc(db, 'readings', docId), data);
      console.log(`[Chronological] Dia ${item.day} inserido com sucesso!`);
    }

    // Seed Canonical
    for (const item of allAnnualReadings) {
      const docId = `canonical_${item.day}`;
      const data = {
        theologicalContext: item.theologicalContext || 'Conteúdo em desenvolvimento.',
        historicalContext: item.historicalWorldContext || 'Sem contexto histórico definido.',
        reflectionQuestions: [item.reflectionQuestion || 'Reflita sobre a leitura de hoje.'],
        keyVerse: { reference: item.bibleReference || 'N/A', text: 'Versículo a ser definido.' },
        planType: 'canonical',
        day: item.day
      };
      await setDoc(doc(db, 'readings', docId), data);
      console.log(`[Canonical] Dia ${item.day} inserido com sucesso!`);
    }

    console.log("Carga completa de ambos os planos realizada com sucesso!");
  } catch (error) {
    console.error("Erro ao realizar o seed no Firestore:", error);
  }
}

seedDatabase();

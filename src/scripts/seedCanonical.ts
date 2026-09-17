import 'dotenv/config';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { allAnnualReadings } from '../data/allReadings';

async function seedDatabase() {
  console.log("Iniciando a carga de dados para o Firestore...");

  try {
    for (const item of allAnnualReadings) {
      // Cria um documento no Firestore para cada dia (ex: day_21, day_22...)
      const docRef = doc(db, 'readingPlans', `day_${item.day}`);
      await setDoc(docRef, item);
      console.log(`Dia ${item.day} inserido com sucesso!`);
    }
    console.log("Carga completa de todos os 365 dias realizada com sucesso!");
  } catch (error) {
    console.error("Erro ao realizar o seed no Firestore:", error);
  }
}

seedDatabase();

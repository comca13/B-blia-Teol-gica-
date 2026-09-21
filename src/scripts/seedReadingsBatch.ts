import 'dotenv/config';
import { db } from '../lib/firebase';
import { doc, writeBatch } from 'firebase/firestore';
import { CHRONOLOGICAL_PLAN } from '../data/chronologicalPlan';
import { CANONICAL_PLAN } from '../data/canonicalPlan';
import { apologeticsData } from '../data/apologeticsData';
import { CHURCH_HISTORY_EVENTS } from '../data/churchHistoryData';
import { BiblicalDifficulty, ChurchHistoryEvent } from '../types';

/**
 * Utilitário para dividir listas em pedaços (chunks) menores.
 * O Firestore possui um limite rígido de 500 operações por writeBatch.
 */
function chunkArray<T>(items: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

/**
 * Script de migração de alta performance utilizando Firestore Batch Writes.
 * Migra dados estáticos das pastas locais para coleções otimizadas do Firestore.
 */
async function runBatchMigration() {
  console.log('🚀 Iniciando Migração em Lote (Batch Writes) para o Firestore...');
  const BATCH_SIZE = 400; // Margem segura abaixo do limite de 500

  try {
    // 1. Migração do Plano Cronológico
    console.log(`\n📦 Migrando Plano Cronológico (${CHRONOLOGICAL_PLAN.length} dias)...`);
    const chronoChunks = chunkArray(CHRONOLOGICAL_PLAN, BATCH_SIZE);

    for (let i = 0; i < chronoChunks.length; i++) {
      const chunk = chronoChunks[i];
      const batch = writeBatch(db);

      for (const item of chunk) {
        const docRef = doc(db, 'readings', `chronological_${item.day}`);
        batch.set(docRef, {
          day: item.day,
          planType: 'chronological',
          title: item.title,
          theologicalContext: item.theologicalContext || '',
          historicalContext: typeof item.worldHistory === 'string' 
            ? item.worldHistory 
            : (item.worldHistory?.globalEvent || ''),
          reflectionQuestions: item.reflectionQuestions || [],
          keyVerse: item.keyVerse || { reference: '', text: '' },
          targetVerses: item.passages?.map(p => `${p.book} ${p.reference}`) || [],
          updatedAt: new Date().toISOString()
        }, { merge: true });
      }

      await batch.commit();
      console.log(`  ✓ Lote Cronológico ${i + 1}/${chronoChunks.length} gravado (${chunk.length} documentos)`);
    }

    // 2. Migração do Plano Canônico
    console.log(`\n📦 Migrando Plano Canônico (${CANONICAL_PLAN.length} dias)...`);
    const canonChunks = chunkArray(CANONICAL_PLAN, BATCH_SIZE);

    for (let i = 0; i < canonChunks.length; i++) {
      const chunk = canonChunks[i];
      const batch = writeBatch(db);

      for (const item of chunk) {
        const docRef = doc(db, 'readings', `canonical_${item.day}`);
        batch.set(docRef, {
          day: item.day,
          planType: 'canonical',
          title: item.title,
          theologicalContext: item.theologicalContext || '',
          historicalContext: item.historicalContext || '',
          reflectionQuestions: item.reflectionQuestions || [],
          keyVerse: item.keyVerse || { reference: '', text: '' },
          targetVerses: item.passages?.map(p => `${p.book} ${p.reference}`) || [],
          updatedAt: new Date().toISOString()
        }, { merge: true });
      }

      await batch.commit();
      console.log(`  ✓ Lote Canônico ${i + 1}/${canonChunks.length} gravado (${chunk.length} documentos)`);
    }

    // 3. Migração de Dados Apologéticos
    console.log(`\n🛡️ Migrando Coleção Apologética (${apologeticsData.length} tópicos)...`);
    const apolChunks = chunkArray<BiblicalDifficulty>(apologeticsData, BATCH_SIZE);

    for (let i = 0; i < apolChunks.length; i++) {
      const chunk = apolChunks[i];
      const batch = writeBatch(db);

      for (const item of chunk) {
        const docRef = doc(db, 'apologetics', item.id);
        batch.set(docRef, {
          ...item,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      }

      await batch.commit();
      console.log(`  ✓ Lote Apologética ${i + 1}/${apolChunks.length} gravado (${chunk.length} documentos)`);
    }

    // 4. Migração de História da Igreja
    console.log(`\n📜 Migrando Linha do Tempo da História da Igreja (${CHURCH_HISTORY_EVENTS.length} marcos)...`);
    const historyChunks = chunkArray<ChurchHistoryEvent>(CHURCH_HISTORY_EVENTS, BATCH_SIZE);

    for (let i = 0; i < historyChunks.length; i++) {
      const chunk = historyChunks[i];
      const batch = writeBatch(db);

      for (const item of chunk) {
        const docRef = doc(db, 'churchHistory', item.id);
        batch.set(docRef, {
          ...item,
          updatedAt: new Date().toISOString()
        }, { merge: true });
      }

      await batch.commit();
      console.log(`  ✓ Lote História ${i + 1}/${historyChunks.length} gravado (${chunk.length} documentos)`);
    }

    console.log('\n✨ Migração em Lote concluída com sucesso e integridade total!');
  } catch (error) {
    console.error('❌ Falha crítica durante o batch write:', error);
    process.exit(1);
  }
}

// Executa caso chamado diretamente pelo CLI
if (process.argv[1] && process.argv[1].endsWith('seedReadingsBatch.ts')) {
  runBatchMigration();
}

export { runBatchMigration };

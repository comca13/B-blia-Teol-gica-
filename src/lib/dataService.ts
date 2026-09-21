import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  startAfter, 
  QueryDocumentSnapshot,
  DocumentData,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from './firebase';
import { 
  DayReading, 
  ArchaeologicalArtifact, 
  GeographyContext,
  GenreHermeneuticsGuide,
  SitzImLeben,
  OriginalLanguageWord,
  TypologyConnection,
  ReaderSettings
} from '../types';

export interface ReadingContent {
  id?: string;
  day: number;
  planType: 'chronological' | 'canonical';
  title?: string;
  theologicalContext: string;
  historicalContext: string;
  reflectionQuestions: string[];
  keyVerse: {
    reference: string;
    text: string;
  };
  artifacts?: ArchaeologicalArtifact[];
  geography?: GeographyContext;
  genreGuide?: GenreHermeneuticsGuide;
  sitzImLeben?: SitzImLeben;
  originalLexicon?: OriginalLanguageWord[];
  typology?: TypologyConnection[];
}

export interface PaginatedReadingsResult {
  readings: ReadingContent[];
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;
  hasMore: boolean;
}

/**
 * Busca o conteúdo completo de leitura de um dia específico.
 * Graças ao cache persistente IndexedDB, esta chamada retorna instantaneamente
 * mesmo sem conexão ativa à internet.
 */
export const getReadingContent = async (
  planType: 'chronological' | 'canonical',
  day: number
): Promise<ReadingContent | null> => {
  if (!db) {
    console.warn('Firestore não inicializado');
    return null;
  }
  try {
    const docRef = doc(db, 'readings', `${planType}_${day}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...(docSnap.data() as ReadingContent) };
    } else {
      console.warn(`Nenhum conteúdo encontrado para ${planType} dia ${day}`);
      return null;
    }
  } catch (error) {
    console.error(`Erro ao carregar leitura do dia ${day} (${planType}):`, error);
    throw error;
  }
};

/**
 * Busca páginas de leituras sob demanda (Lazy Fetching) usando cursores de paginação do Firestore.
 * Evita o carregamento massivo de centenas de leituras simultâneas no bundle do cliente.
 * 
 * @param planType 'chronological' | 'canonical'
 * @param pageSize Quantidade de itens por página (ex: 20)
 * @param lastDocSnapshot Cursor do último documento retornado na página anterior
 */
export const getPaginatedReadings = async (
  planType: 'chronological' | 'canonical',
  pageSize: number = 20,
  lastDocSnapshot: QueryDocumentSnapshot<DocumentData> | null = null
): Promise<PaginatedReadingsResult> => {
  if (!db) {
    throw new Error('Firestore não está disponível');
  }

  try {
    const readingsRef = collection(db, 'readings');
    
    // Constrói a consulta base ordenada pelo dia da leitura
    let q = query(
      readingsRef,
      where('planType', '==', planType),
      orderBy('day', 'asc'),
      limit(pageSize)
    );

    // Adiciona o cursor se estiver avançando para a próxima página
    if (lastDocSnapshot) {
      q = query(
        readingsRef,
        where('planType', '==', planType),
        orderBy('day', 'asc'),
        startAfter(lastDocSnapshot),
        limit(pageSize)
      );
    }

    const snapshot = await getDocs(q);
    const readings: ReadingContent[] = [];

    snapshot.forEach((docSnap) => {
      readings.push({
        id: docSnap.id,
        ...(docSnap.data() as ReadingContent)
      });
    });

    const lastVisible = snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null;
    const hasMore = snapshot.docs.length === pageSize;

    return {
      readings,
      lastDoc: lastVisible,
      hasMore
    };
  } catch (error) {
    console.error('Erro ao paginar leituras no Firestore:', error);
    throw error;
  }
};

/**
 * Salva as notas pessoais do usuário autenticado no Firestore com suporte offline.
 */
export const saveUserNote = async (
  userId: string,
  day: number,
  noteText: string
): Promise<void> => {
  if (!db || !userId) {
    throw new Error('Usuário não autenticado ou banco offline');
  }

  try {
    const noteRef = doc(db, 'users', userId, 'personalNotes', `day_${day}`);
    await setDoc(noteRef, {
      userId,
      day,
      text: noteText,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error(`Erro ao salvar nota pessoal do dia ${day}:`, error);
    throw error;
  }
};

/**
 * Salva as configurações de leitor (tema, tamanho de fonte, velocidade de áudio) do usuário.
 */
export const saveReaderSettings = async (
  userId: string,
  settings: Partial<ReaderSettings>
): Promise<void> => {
  if (!db || !userId) return;

  try {
    const settingsRef = doc(db, 'users', userId, 'readerSettings', 'preferences');
    await setDoc(settingsRef, {
      ...settings,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error('Erro ao persistir preferências do leitor:', error);
    throw error;
  }
};

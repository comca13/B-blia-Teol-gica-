import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { DayReading } from '../types';

export interface ReadingContent {
  theologicalContext: string;
  historicalContext: string;
  reflectionQuestions: string[];
  keyVerse: {
    reference: string;
    text: string;
  };
}

export const getReadingContent = async (
  planType: 'chronological' | 'canonical',
  day: number
): Promise<ReadingContent | null> => {
  if (!db) {
    console.warn('Firestore not initialized');
    return null;
  }
  try {
    const docRef = doc(db, 'readings', `${planType}_${day}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as ReadingContent;
    } else {
      console.warn(`No content found for ${planType} day ${day}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching reading content:', error);
    return null;
  }
};

import { useState, useEffect, useCallback, useRef } from 'react';
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { getPaginatedReadings, ReadingContent } from '../lib/dataService';

export interface UseReadingsOptions {
  planType: 'chronological' | 'canonical';
  pageSize?: number;
}

export interface UseReadingsReturn {
  readings: ReadingContent[];
  loading: boolean;
  loadingMore: boolean;
  hasMore: boolean;
  error: string | null;
  loadMore: () => Promise<void>;
  refresh: () => Promise<void>;
}

/**
 * Hook customizado React para carregar cronogramas e leituras bíblicas sob demanda
 * utilizando cursores do Firestore (startAfter + limit), ideal para Infinite Scroll
 * e componentes de listas longas em PWAs.
 */
export function useReadings({ 
  planType, 
  pageSize = 20 
}: UseReadingsOptions): UseReadingsReturn {
  const [readings, setReadings] = useState<ReadingContent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Guarda o cursor da última leitura recebida sem disparar re-render desnecessário
  const lastDocRef = useRef<QueryDocumentSnapshot<DocumentData> | null>(null);
  const isFetchingRef = useRef<boolean>(false);

  // Carrega a primeira página ou recarrega a lista
  const fetchInitial = useCallback(async () => {
    setLoading(true);
    setError(null);
    lastDocRef.current = null;

    try {
      const result = await getPaginatedReadings(planType, pageSize, null);
      setReadings(result.readings);
      lastDocRef.current = result.lastDoc;
      setHasMore(result.hasMore);
    } catch (err: any) {
      console.error('Erro ao carregar leituras iniciais:', err);
      setError(err?.message || 'Falha ao carregar as leituras.');
    } finally {
      setLoading(false);
    }
  }, [planType, pageSize]);

  // Carrega a próxima página quando acionado pelo scroll ou botão
  const loadMore = useCallback(async () => {
    if (isFetchingRef.current || !hasMore || !lastDocRef.current) {
      return;
    }

    isFetchingRef.current = true;
    setLoadingMore(true);
    setError(null);

    try {
      const result = await getPaginatedReadings(planType, pageSize, lastDocRef.current);
      
      setReadings((prev) => [...prev, ...result.readings]);
      lastDocRef.current = result.lastDoc;
      setHasMore(result.hasMore);
    } catch (err: any) {
      console.error('Erro ao carregar mais leituras:', err);
      setError(err?.message || 'Falha ao carregar mais leituras.');
    } finally {
      setLoadingMore(false);
      isFetchingRef.current = false;
    }
  }, [planType, pageSize, hasMore]);

  // Efeito disparado na montagem ou quando o tipo de plano alterar
  useEffect(() => {
    fetchInitial();
  }, [fetchInitial]);

  return {
    readings,
    loading,
    loadingMore,
    hasMore,
    error,
    loadMore,
    refresh: fetchInitial
  };
}

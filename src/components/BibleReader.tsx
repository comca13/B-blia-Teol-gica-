import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  ALL_BIBLE_BOOKS, 
  BibleBookInfo, 
  OLD_TESTAMENT_BOOKS, 
  NEW_TESTAMENT_BOOKS 
} from '../data/bibleBooks';
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  BookOpen, 
  Copy, 
  Check, 
  RotateCcw,
  Sparkles,
  Scroll
} from 'lucide-react';
import { LiteraryGenreBadge } from './LiteraryGenreBadge';
import { SitzImLebenCard } from './SitzImLebenCard';
import { OriginalLexiconCard } from './OriginalLexiconCard';
import { IntertextualEchoesCard } from './IntertextualEchoesCard';
import { TextualVariantsCard } from './TextualVariantsCard';
import { TextualVariantIndicator } from './TextualVariantIndicator';
import { 
  getGenreForReading, 
  getSitzImLebenForReading, 
  getLexiconForReading, 
  getTypologyForReading 
} from '../data/theologicalExegesisData';
import { getTextualVariantsForPassage } from '../data/textualVariantsData';
import { BiblePassage } from '../types';

interface BibleReaderProps {
  initialBookNumber?: number;
  initialChapter?: number;
  currentPlan?: 'chronological' | 'canonical';
  currentDay?: number;
  onGoToDayReading?: (day: number) => void;
  onSectionChange?: (title: string, subtitle?: string) => void;
  isFocusMode?: boolean;
  onToggleFocusMode?: () => void;
}

export const BibleReader: React.FC<BibleReaderProps> = ({
  initialBookNumber,
  initialChapter,
  currentPlan,
  currentDay,
  onGoToDayReading,
  onSectionChange,
  isFocusMode = false,
  onToggleFocusMode
}) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [bookNumber, setBookNumber] = useState<number>(initialBookNumber || 1); // 1 = Gênesis
  const [chapter, setChapter] = useState<number>(initialChapter || 1);
  const [verses, setVerses] = useState<{ number: number; text: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Sync when initialBookNumber or initialChapter change
  useEffect(() => {
    if (initialBookNumber && initialBookNumber >= 1 && initialBookNumber <= 66) {
      setBookNumber(initialBookNumber);
    }
    if (initialChapter && initialChapter >= 1) {
      setChapter(initialChapter);
    }
  }, [initialBookNumber, initialChapter]);

  // Reading preferences
  const [fontSize, setFontSize] = useState<number>(18); // 16, 18, 20, 22
  const [copiedVerse, setCopiedVerse] = useState<number | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [testamentFilter, setTestamentFilter] = useState<'ALL' | 'AT' | 'NT'>('ALL');

  const contentRef = useRef<HTMLDivElement>(null);

  // Active Book Details
  const currentBook: BibleBookInfo = useMemo(() => {
    return ALL_BIBLE_BOOKS.find(b => b.number === bookNumber) || ALL_BIBLE_BOOKS[0];
  }, [bookNumber]);

  // Bubble up dynamic section title to Navbar (Single Source of Truth)
  const onSectionChangeRef = useRef(onSectionChange);
  useEffect(() => {
    onSectionChangeRef.current = onSectionChange;
  }, [onSectionChange]);

  const lastReportedSectionRef = useRef<{ title: string; subtitle: string } | null>(null);

  useEffect(() => {
    const bookName = language === 'pt' ? currentBook.namePt : currentBook.nameEn;
    const title = `${bookName} ${chapter}`;
    const subtitle = `Capítulo ${chapter} de ${currentBook.totalChapters} • ${currentBook.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'}`;

    if (
      lastReportedSectionRef.current?.title === title &&
      lastReportedSectionRef.current?.subtitle === subtitle
    ) {
      return;
    }

    lastReportedSectionRef.current = { title, subtitle };
    onSectionChangeRef.current?.(title, subtitle);
  }, [currentBook.namePt, currentBook.nameEn, currentBook.totalChapters, currentBook.testament, chapter, language]);

  // Context resolvers for the current book and chapter
  const bookPassage = useMemo<BiblePassage[]>(() => [{
    book: currentBook.namePt,
    reference: `${chapter}`,
    testament: currentBook.testament
  }], [currentBook.namePt, currentBook.testament, chapter]);

  const genreGuide = useMemo(() => getGenreForReading(1, bookPassage), [bookPassage]);
  const sitzImLeben = useMemo(() => getSitzImLebenForReading(1, bookPassage), [bookPassage]);
  const lexiconWords = useMemo(() => getLexiconForReading(1, bookPassage), [bookPassage]);
  const typologies = useMemo(() => getTypologyForReading(1, bookPassage), [bookPassage]);

  // Filtered books list for easy finding
  const filteredBooks = useMemo(() => {
    return ALL_BIBLE_BOOKS.filter(b => {
      const matchesTestament = testamentFilter === 'ALL' || b.testament === testamentFilter;
      const term = searchFilter.toLowerCase().trim();
      const matchesSearch = !term || 
        b.namePt.toLowerCase().includes(term) || 
        b.nameEn.toLowerCase().includes(term) ||
        b.abbrevPt.toLowerCase().includes(term) ||
        b.abbrevEn.toLowerCase().includes(term) ||
        b.group.toLowerCase().includes(term);
      return matchesTestament && matchesSearch;
    });
  }, [testamentFilter, searchFilter]);

  // Reset chapter if switching book to one with fewer chapters
  useEffect(() => {
    if (chapter > currentBook.totalChapters) {
      setChapter(1);
    }
  }, [currentBook, chapter]);

  // Scroll to top of chapter when changing book or chapter
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [bookNumber, chapter]);

  // Fetch Chapter Verses with Primary + Fallback APIs
  const fetchChapter = async () => {
    setLoading(true);
    setError(null);

    const bollsTranslation = language === 'pt' ? 'ARA' : 'WEB';
    const fallbackTranslation = language === 'pt' ? 'almeida' : 'kjv';
    const querySlug = language === 'pt' ? currentBook.queryPt : currentBook.queryEn;

    try {
      // 1. Primary: bolls.life (Ultra-fast, covers all 66 books 1..66)
      const primaryUrl = `https://bolls.life/get-chapter/${bollsTranslation}/${currentBook.number}/${chapter}/`;
      const res = await fetch(primaryUrl);
      
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const parsed = data.map((item: any) => ({
            number: item.verse,
            // Clean up any strong numbers or markup tags
            text: String(item.text || '').replace(/<[^>]+>/g, '').trim()
          }));
          setVerses(parsed);
          setLoading(false);
          return;
        }
      }

      // 2. Secondary Fallback: bible-api.com
      const secondaryUrl = `https://bible-api.com/${encodeURIComponent(querySlug)}+${chapter}?translation=${fallbackTranslation}`;
      const fallbackRes = await fetch(secondaryUrl);
      if (fallbackRes.ok) {
        const fbData = await fallbackRes.json();
        if (fbData && Array.isArray(fbData.verses) && fbData.verses.length > 0) {
          const parsed = fbData.verses.map((v: any) => ({
            number: v.verse,
            text: String(v.text || '').trim()
          }));
          setVerses(parsed);
          setLoading(false);
          return;
        }
      }

      throw new Error('Não foi possível carregar os versículos deste capítulo.');
    } catch (err: any) {
      console.error('Erro ao carregar texto bíblico:', err);
      setError('Falha ao conectar com os servidores bíblicos. Verifique sua conexão e tente novamente.');
      setVerses([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChapter();
  }, [language, bookNumber, chapter]);

  // Navigation: Previous Chapter
  const handlePrevChapter = () => {
    if (chapter > 1) {
      setChapter(prev => prev - 1);
    } else if (bookNumber > 1) {
      // Go to previous book's last chapter
      const prevBook = ALL_BIBLE_BOOKS.find(b => b.number === bookNumber - 1);
      if (prevBook) {
        setBookNumber(prevBook.number);
        setChapter(prevBook.totalChapters);
      }
    }
  };

  // Navigation: Next Chapter
  const handleNextChapter = () => {
    if (chapter < currentBook.totalChapters) {
      setChapter(prev => prev + 1);
    } else if (bookNumber < 66) {
      // Go to next book's chapter 1
      const nextBook = ALL_BIBLE_BOOKS.find(b => b.number === bookNumber + 1);
      if (nextBook) {
        setBookNumber(nextBook.number);
        setChapter(1);
      }
    }
  };

  // Copy verse to clipboard
  const handleCopyVerse = (verseNum: number, verseText: string) => {
    const bookTitle = language === 'pt' ? currentBook.namePt : currentBook.nameEn;
    const fullText = `"${verseText}" - ${bookTitle} ${chapter}:${verseNum}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopiedVerse(verseNum);
      setTimeout(() => setCopiedVerse(null), 2500);
    });
  };

  const handleReadingAreaClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, select, input, a, [role="button"], textarea, label')) return;
    onToggleFocusMode?.();
  };

  return (
    <div 
      ref={contentRef} 
      onClick={handleReadingAreaClick}
      className="pb-36 sm:pb-44 pt-2 px-3 sm:px-6 max-w-4xl mx-auto text-zinc-100 space-y-5"
    >
      
      {/* Plan Shortcut Banner if available */}
      {currentDay && onGoToDayReading && (
        <div className="bg-gradient-to-r from-amber-950/50 via-zinc-900 to-amber-950/40 border border-amber-500/30 rounded-2xl p-3.5 sm:p-4 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-amber-200">
                Seu Plano Ativo: {currentPlan === 'canonical' ? 'Plano Canônico' : 'Plano Cronológico'}
              </p>
              <p className="text-[11px] text-zinc-400">
                Leitura programada: <strong>Dia {currentDay} de 365</strong>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onGoToDayReading(currentDay)}
            className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-zinc-950 font-bold text-xs transition-colors shadow-xs flex items-center gap-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ir para Leitura do Dia {currentDay}</span>
          </button>
        </div>
      )}

      {/* Sleek Book & Translation Selector Bar */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-lg space-y-3.5">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="font-semibold text-amber-400 font-serif text-sm">
              {currentBook.number}. {language === 'pt' ? currentBook.namePt : currentBook.nameEn}
            </span>
            <span>•</span>
            <span>{currentBook.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'} ({currentBook.group})</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Font Size Adjusters */}
            <div className="flex items-center bg-zinc-800 border border-zinc-700 rounded-lg p-0.5">
              <button
                type="button"
                onClick={() => setFontSize(s => Math.max(14, s - 2))}
                disabled={fontSize <= 14}
                className="px-2 py-1 text-xs text-zinc-300 hover:text-white disabled:opacity-30 transition-colors"
                title="Diminuir tamanho da fonte"
              >
                A-
              </button>
              <span className="text-[11px] font-mono text-zinc-400 px-1 border-x border-zinc-700">
                {fontSize}px
              </span>
              <button
                type="button"
                onClick={() => setFontSize(s => Math.min(26, s + 2))}
                disabled={fontSize >= 26}
                className="px-2 py-1 text-xs text-zinc-300 hover:text-white disabled:opacity-30 transition-colors"
                title="Aumentar tamanho da fonte"
              >
                A+
              </button>
            </div>

            {/* Translation Language */}
            <div className="flex bg-zinc-800 p-1 rounded-lg border border-zinc-700">
              <button
                type="button"
                onClick={() => setLanguage('pt')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  language === 'pt' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Português: Almeida Revista e Atualizada"
              >
                PT (ARA)
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                  language === 'en' ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="English: World English Bible"
              >
                EN (WEB)
              </button>
            </div>
          </div>
        </div>

        {/* Book & Chapter Navigation Row */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          
          {/* Complete 66 Books Selector (Spans 7 cols on desktop) */}
          <div className="sm:col-span-7">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-1">
              Livro da Bíblia (1 a 66)
            </label>
            <div className="relative">
              <select
                value={bookNumber}
                onChange={(e) => {
                  setBookNumber(Number(e.target.value));
                  setChapter(1);
                }}
                className="w-full bg-zinc-950 border border-zinc-700 hover:border-amber-500/80 text-zinc-100 text-sm rounded-xl px-3.5 py-2.5 appearance-none focus:outline-hidden focus:ring-2 focus:ring-amber-500 transition-colors font-medium cursor-pointer"
              >
                <optgroup label="--- ANTIGO TESTAMENTO (39 Livros) ---">
                  {OLD_TESTAMENT_BOOKS.map((b) => (
                    <option key={b.number} value={b.number}>
                      {b.number}. {language === 'pt' ? b.namePt : b.nameEn} ({b.totalChapters} caps) - {b.group}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="--- NOVO TESTAMENTO (27 Livros) ---">
                  {NEW_TESTAMENT_BOOKS.map((b) => (
                    <option key={b.number} value={b.number}>
                      {b.number}. {language === 'pt' ? b.namePt : b.nameEn} ({b.totalChapters} caps) - {b.group}
                    </option>
                  ))}
                </optgroup>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>

          {/* Chapter Selector (Spans 5 cols on desktop) */}
          <div className="sm:col-span-5">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-1">
              Capítulo (1 a {currentBook.totalChapters})
            </label>
            <div className="relative">
              <select
                value={chapter}
                onChange={(e) => setChapter(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-700 hover:border-amber-500/80 text-zinc-100 text-sm rounded-xl px-3.5 py-2.5 appearance-none focus:outline-hidden focus:ring-2 focus:ring-amber-500 transition-colors font-medium cursor-pointer"
              >
                {Array.from({ length: currentBook.totalChapters }, (_, i) => i + 1).map((c) => (
                  <option key={c} value={c}>
                    Capítulo {c} de {currentBook.totalChapters}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
                <ChevronRight className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Filter Pill Tabs for Quick Book Browsing */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-zinc-800/80 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
            <span className="text-zinc-500 font-medium shrink-0 mr-1">Filtrar:</span>
            <button
              type="button"
              onClick={() => setTestamentFilter('ALL')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                testamentFilter === 'ALL'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-semibold'
                  : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-700/60'
              }`}
            >
              Todos (66)
            </button>
            <button
              type="button"
              onClick={() => setTestamentFilter('AT')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                testamentFilter === 'AT'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-semibold'
                  : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-700/60'
              }`}
            >
              Antigo Testamento (39)
            </button>
            <button
              type="button"
              onClick={() => setTestamentFilter('NT')}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors shrink-0 ${
                testamentFilter === 'NT'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-semibold'
                  : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-700/60'
              }`}
            >
              Novo Testamento (27)
            </button>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-zinc-400">
            <span>Categoria:</span>
            <span className="font-semibold text-amber-400">{currentBook.group}</span>
          </div>
        </div>

        {/* Quick Search for Books if filtered */}
        {testamentFilter !== 'ALL' && (
          <div className="flex flex-wrap gap-1.5 pt-2 max-h-36 overflow-y-auto p-1 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
            {filteredBooks.map((b) => (
              <button
                key={b.number}
                type="button"
                onClick={() => {
                  setBookNumber(b.number);
                  setChapter(1);
                }}
                className={`px-2 py-1 rounded-md text-[11px] font-medium transition-all ${
                  b.number === bookNumber
                    ? 'bg-amber-600 text-white font-bold shadow-xs'
                    : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                }`}
              >
                {b.abbrevPt} - {language === 'pt' ? b.namePt : b.nameEn}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Scripture Card */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-6">
        
        {/* Chapter Toolbar with Genre & Prev/Next navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-amber-500 tracking-wider uppercase">
              Capítulo {chapter} de {currentBook.totalChapters}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs text-zinc-400">
              Versão {language === 'pt' ? 'ARA (Almeida)' : 'WEB'}
            </span>
            {genreGuide && (
              <div className="ml-1">
                <LiteraryGenreBadge guide={genreGuide} />
              </div>
            )}
          </div>

          {/* Quick Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrevChapter}
              disabled={bookNumber === 1 && chapter === 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-xs font-semibold text-zinc-200 transition-colors border border-zinc-700"
              title="Capítulo Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Anterior</span>
            </button>

            <button
              type="button"
              onClick={handleNextChapter}
              disabled={bookNumber === 66 && chapter === currentBook.totalChapters}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-xs font-semibold text-zinc-200 transition-colors border border-zinc-700"
              title="Próximo Capítulo"
            >
              <span className="hidden sm:inline">Próximo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Verses Content View */}
        {loading ? (
          <div className="py-16 text-center space-y-3">
            <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-zinc-400 text-sm">
              Carregando {language === 'pt' ? currentBook.namePt : currentBook.nameEn} {chapter}...
            </p>
          </div>
        ) : error ? (
          <div className="py-10 text-center space-y-4 max-w-md mx-auto">
            <p className="text-red-400 text-sm leading-relaxed">
              {error}
            </p>
            <button
              type="button"
              onClick={fetchChapter}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Tentar Novamente
            </button>
          </div>
        ) : (
          <div 
            className="space-y-4 font-serif text-zinc-200 leading-relaxed"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.75 }}
          >
            {verses.map((v) => {
              const isCopied = copiedVerse === v.number;
              const verseVariants = getTextualVariantsForPassage(currentBook.namePt, chapter, v.number);

              return (
                <div
                  key={v.number}
                  className="group relative rounded-xl p-2 sm:p-2.5 transition-colors hover:bg-zinc-800/60 flex items-start gap-2.5"
                >
                  <div className="shrink-0 flex items-center gap-1 pt-0.5 select-none">
                    <span className="text-amber-500 font-sans text-xs sm:text-sm font-bold w-6 text-right">
                      {v.number}
                    </span>
                    {verseVariants.length > 0 && (
                      <TextualVariantIndicator variant={verseVariants[0]} compact={true} />
                    )}
                  </div>
                  
                  <p className="flex-1 text-zinc-200 text-justify break-words">
                    {v.text}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleCopyVerse(v.number, v.text)}
                    className="opacity-0 group-hover:opacity-100 focus:opacity-100 p-1.5 rounded-lg bg-zinc-800 hover:bg-amber-600 hover:text-white text-zinc-400 transition-all shrink-0 ml-1"
                    title="Copiar versículo"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Navigation between Chapters */}
        {!loading && !error && verses.length > 0 && (
          <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-zinc-400">
              Total de versículos: <span className="font-semibold text-zinc-200">{verses.length}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handlePrevChapter}
                disabled={bookNumber === 1 && chapter === 1}
                className="flex-1 sm:flex-initial justify-center px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-xs font-semibold text-zinc-200 transition-colors border border-zinc-700 flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Capítulo Anterior</span>
              </button>

              <button
                type="button"
                onClick={handleNextChapter}
                disabled={bookNumber === 66 && chapter === currentBook.totalChapters}
                className="flex-1 sm:flex-initial justify-center px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 disabled:opacity-30 text-xs font-semibold text-white transition-colors border border-amber-500 flex items-center gap-1.5 shadow-sm"
              >
                <span>Próximo Capítulo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Eixo Teológico, Hermenêutico e Exegético da Bíblia de Estudo */}
        {!loading && !error && (
          <div className="pt-6 border-t border-zinc-800 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Scroll className="w-4 h-4" />
              <span>Apoio Exegético & Teológico de {currentBook.namePt}</span>
            </div>

            {sitzImLeben && (
              <SitzImLebenCard sitzImLeben={sitzImLeben} defaultExpanded={false} />
            )}

            {lexiconWords && lexiconWords.length > 0 && (
              <OriginalLexiconCard words={lexiconWords} defaultExpanded={false} />
            )}

            {typologies && typologies.length > 0 && (
              <IntertextualEchoesCard typologies={typologies} defaultExpanded={false} />
            )}

            {/* Aparelho de Crítica Textual para o capítulo se houver */}
            {(() => {
              const chapterVariants = getTextualVariantsForPassage(currentBook.namePt, chapter);
              if (chapterVariants.length > 0) {
                return <TextualVariantsCard variants={chapterVariants} defaultExpanded={true} />;
              }
              return null;
            })()}
          </div>
        )}

      </div>
    </div>
  );
};

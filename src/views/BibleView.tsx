import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DayReading, ReaderSettings } from '../types';
import { Reader } from '../components/Reader';
import { BibleReader } from '../components/BibleReader';
import { BibleBookSelectorModal } from '../components/BibleBookSelectorModal';
import { ALL_BIBLE_BOOKS, BibleBookInfo, parseBibleSearch } from '../data/bibleBooks';
import { 
  BookOpen, 
  Calendar, 
  ChevronRight, 
  ChevronDown, 
  Search, 
  X, 
  Sparkles, 
  Scroll, 
  Layers 
} from 'lucide-react';

interface BibleViewProps {
  currentDayReading: DayReading;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: (day: number) => void;
  onToggleBookmark: (day: number) => void;
  onPrevDay: () => void;
  onNextDay: () => void;
  onBackToDashboard: () => void;
  settings: ReaderSettings;
  onUpdateSettings: (settings: ReaderSettings) => void;
  personalNote: string;
  onSaveNote: (day: number, note: string) => void;
  isFocusMode: boolean;
  onToggleFocusMode: () => void;
  isStudyDrawerOpen: boolean;
  onToggleStudyDrawer: () => void;
  onCloseStudyDrawer?: () => void;
  readingMode: 'plan-day' | 'browse-books';
  onReadingModeChange: (mode: 'plan-day' | 'browse-books') => void;
  onSectionChange?: (title: string, subtitle?: string) => void;
  isSettingsOpen?: boolean;
  onToggleSettings?: () => void;
  targetBookNumber?: number;
  targetChapterNumber?: number;
  targetNonce?: number;
}

export const BibleView: React.FC<BibleViewProps> = React.memo(({
  currentDayReading,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onPrevDay,
  onNextDay,
  onBackToDashboard,
  settings,
  onUpdateSettings,
  personalNote,
  onSaveNote,
  isFocusMode,
  onToggleFocusMode,
  isStudyDrawerOpen,
  onToggleStudyDrawer,
  onCloseStudyDrawer,
  readingMode,
  onReadingModeChange,
  onSectionChange,
  isSettingsOpen,
  onToggleSettings,
  targetBookNumber,
  targetChapterNumber,
  targetNonce
}) => {
  const [initialBook, setInitialBook] = useState<number>(targetBookNumber || 1);
  const [initialChapter, setInitialChapter] = useState<number>(targetChapterNumber || 1);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isBookModalOpen, setIsBookModalOpen] = useState<boolean>(false);
  const [bookForChaptersModal, setBookForChaptersModal] = useState<number | null>(null);
  const [dropdownTestamentFilter, setDropdownTestamentFilter] = useState<'ALL' | 'AT' | 'NT'>('ALL');

  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Sincroniza livro e capítulo alvos quando acionados externamente (ex: conexões bíblicas ou pesquisa global)
  useEffect(() => {
    if (targetBookNumber !== undefined) {
      setInitialBook(targetBookNumber);
      setInitialChapter(targetChapterNumber || 1);
      onReadingModeChange('browse-books');
    }
  }, [targetBookNumber, targetChapterNumber, targetNonce, onReadingModeChange]);

  // Fechamento seguro do menu suspenso em cliques fora (compatível com mouse e touch)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleOpenBibleAt = useCallback((bookNumber: number, chapter: number = 1) => {
    setInitialBook(bookNumber);
    setInitialChapter(chapter);
    onReadingModeChange('browse-books');
    setIsDropdownOpen(false);
    setSearchFilter('');
  }, [onReadingModeChange]);

  const handleBookChapterChange = useCallback((book: number, chap: number) => {
    setInitialBook(prev => (prev !== book ? book : prev));
    setInitialChapter(prev => (prev !== chap ? chap : prev));
  }, []);

  const currentBookInfo = useMemo(() => {
    return ALL_BIBLE_BOOKS.find(b => b.number === initialBook) || ALL_BIBLE_BOOKS[0];
  }, [initialBook]);

  // Análise flexível de busca (insensível a acentos, detecta livros, capítulos e abreviações)
  const parsedSearch = useMemo(() => {
    return parseBibleSearch(searchFilter, initialBook);
  }, [searchFilter, initialBook]);

  // Filtra livros para o menu dropdown
  const filteredDropdownBooks = useMemo(() => {
    return parsedSearch.allMatches.filter(book => {
      if (dropdownTestamentFilter === 'AT' && book.testament !== 'AT') return false;
      if (dropdownTestamentFilter === 'NT' && book.testament !== 'NT') return false;
      return true;
    });
  }, [parsedSearch, dropdownTestamentFilter]);

  // Categoriza resultados em Antigo e Novo Testamento
  const dropdownOldTestament = useMemo(() => {
    return filteredDropdownBooks.filter(b => b.testament === 'AT');
  }, [filteredDropdownBooks]);

  const dropdownNewTestament = useMemo(() => {
    return filteredDropdownBooks.filter(b => b.testament === 'NT');
  }, [filteredDropdownBooks]);

  return (
    <div className="w-full">
      {/* Mode Switcher Banner (hidden in Focus Mode) */}
      {!isFocusMode && (
        <div className="max-w-4xl mx-auto px-3 sm:px-6 pt-3 sm:pt-4">
          <div className="bg-gradient-to-r from-zinc-900/90 via-zinc-900/95 to-zinc-900/90 border border-zinc-800/90 p-3.5 sm:p-4 rounded-3xl mb-4 shadow-xl backdrop-blur-xl ring-1 ring-white/5">
            
            {/* Search Bar & Direct Selector Dropdown Container */}
            <div ref={searchContainerRef} className="relative mb-3.5">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Search Input with instant dropdown trigger */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400">
                    <Search className="h-4 w-4" />
                  </div>
                  <input
                    type="text"
                    placeholder="Buscar livro ou capítulo (ex: Gênesis, Gn, Sl 23, Mateus 5, Apocalipse)..."
                    className="block w-full pl-10 pr-9 py-2.5 sm:py-3 border border-zinc-700/80 rounded-2xl leading-5 bg-zinc-950/90 placeholder-zinc-500 focus:outline-hidden focus:placeholder-zinc-400 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-xs sm:text-sm text-zinc-100 transition-all shadow-inner"
                    value={searchFilter}
                    onChange={(e) => {
                      setSearchFilter(e.target.value);
                      setIsDropdownOpen(true);
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                  />
                  {searchFilter && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchFilter('');
                        setIsDropdownOpen(false);
                      }}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Direct Book Selector Modal Trigger Button */}
                <button
                  type="button"
                  onClick={() => setIsBookModalOpen(true)}
                  className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-zinc-850 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-500/50 rounded-2xl text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 transition-all flex items-center gap-2 shrink-0 shadow-sm cursor-pointer hover:shadow-md hover:scale-[1.02] active:scale-95"
                  title="Abrir navegador completo com os 66 livros bíblicos"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Navegador AT / NT</span>
                  <span className="sm:hidden">66 Livros</span>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                </button>
              </div>

              {/* Interactive Search Dropdown Categorized by AT & NT */}
              {isDropdownOpen && (
                <div 
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  className="absolute top-full left-0 right-0 mt-2 z-50 bg-zinc-900/95 border border-zinc-700/80 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 ring-1 ring-white/10"
                >
                  
                  {/* Dropdown Testament Filter Tabs */}
                  <div className="p-2.5 sm:p-3 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800/80 rounded-xl">
                      <button
                        type="button"
                        onClick={() => setDropdownTestamentFilter('ALL')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 cursor-pointer ${
                          dropdownTestamentFilter === 'ALL'
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                        }`}
                      >
                        Todos (66)
                      </button>
                      <button
                        type="button"
                        onClick={() => setDropdownTestamentFilter('AT')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                          dropdownTestamentFilter === 'AT'
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                        }`}
                      >
                        <span>📜</span>
                        <span className="hidden sm:inline">Antigo Testamento</span>
                        <span>(39)</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setDropdownTestamentFilter('NT')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                          dropdownTestamentFilter === 'NT'
                            ? 'bg-amber-600 text-white shadow-xs'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                        }`}
                      >
                        <span>✝️</span>
                        <span className="hidden sm:inline">Novo Testamento</span>
                        <span>(27)</span>
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(false)}
                      className="text-zinc-400 hover:text-zinc-200 p-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
                      title="Fechar menu suspenso"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Detected direct chapter jump card if user typed chapter */}
                  {parsedSearch.chapter && parsedSearch.book && (
                    <div className="p-3 bg-gradient-to-r from-amber-950/80 via-amber-900/60 to-amber-950/80 border-b border-amber-500/40 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 text-xs text-amber-200 min-w-0">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
                        <span className="truncate">
                          {parsedSearch.isJustChapter ? 'Capítulo: ' : 'Abrir: '}
                          <strong className="text-amber-300 font-bold">{parsedSearch.book.namePt} capítulo {parsedSearch.chapter}</strong>
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          if (parsedSearch.book && parsedSearch.chapter) {
                            handleOpenBibleAt(parsedSearch.book.number, parsedSearch.chapter);
                          }
                        }}
                        className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs rounded-xl transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
                      >
                        Ir agora ↗
                      </button>
                    </div>
                  )}

                  {/* Dropdown Results List */}
                  <div className="max-h-72 sm:max-h-80 overflow-y-auto p-3 space-y-3.5">
                    {filteredDropdownBooks.length === 0 ? (
                      <div className="text-center py-8 text-zinc-400 text-xs space-y-1">
                        <BookOpen className="w-8 h-8 mx-auto text-zinc-600 opacity-60" />
                        <p>Nenhum livro bíblico encontrado para &quot;{searchFilter}&quot;</p>
                      </div>
                    ) : (
                      <>
                        {/* Antigo Testamento Results */}
                        {dropdownOldTestament.length > 0 && (dropdownTestamentFilter === 'ALL' || dropdownTestamentFilter === 'AT') && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 px-2 py-1 text-[11px] font-bold tracking-wider uppercase text-amber-400 font-cinzel border-b border-zinc-800/80">
                              <span>📜</span>
                              <span>Antigo Testamento ({dropdownOldTestament.length})</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {dropdownOldTestament.map((book) => {
                                const isCurrent = initialBook === book.number;
                                return (
                                  <div
                                    key={book.number}
                                    onClick={() => {
                                      if (parsedSearch.chapter) {
                                        handleOpenBibleAt(book.number, parsedSearch.chapter);
                                      } else {
                                        setBookForChaptersModal(book.number);
                                        setIsBookModalOpen(true);
                                        setIsDropdownOpen(false);
                                      }
                                    }}
                                    className={`p-2.5 rounded-xl flex items-center justify-between gap-2.5 cursor-pointer transition-all duration-150 hover:-translate-y-0.5 group border ${
                                      isCurrent
                                        ? 'bg-amber-950/50 border-amber-500/50 text-amber-200 shadow-xs'
                                        : 'hover:bg-zinc-800/90 text-zinc-300 hover:text-white bg-zinc-950/40 border-zinc-800/60 hover:border-amber-500/40'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 border transition-colors ${
                                        isCurrent
                                          ? 'bg-amber-500 text-zinc-950 border-amber-400'
                                          : 'bg-zinc-800 text-amber-400 border-zinc-700/50 group-hover:bg-amber-500 group-hover:text-zinc-950'
                                      }`}>
                                        {book.abbrevPt}
                                      </span>
                                      <div className="min-w-0">
                                        <div className="text-xs font-bold truncate group-hover:text-amber-300 transition-colors">
                                          {book.namePt}
                                        </div>
                                        <div className="text-[10px] text-zinc-400 truncate">
                                          {book.totalChapters} caps • {book.group}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                                      <button
                                        type="button"
                                        onClick={() => handleOpenBibleAt(book.number, 1)}
                                        className="px-2 py-1 text-[10px] font-semibold rounded-lg bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 border border-zinc-700/60 hover:border-amber-400 transition-all active:scale-95"
                                        title={`Abrir ${book.namePt} Capítulo 1`}
                                      >
                                        Cap 1
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setBookForChaptersModal(book.number);
                                          setIsBookModalOpen(true);
                                          setIsDropdownOpen(false);
                                        }}
                                        className="px-2 py-1 text-[10px] font-semibold rounded-lg bg-amber-500/20 hover:bg-amber-500 hover:text-zinc-950 text-amber-300 border border-amber-500/30 hover:border-amber-400 transition-all flex items-center gap-1 active:scale-95"
                                        title={`Ver todos os ${book.totalChapters} capítulos de ${book.namePt}`}
                                      >
                                        <span>1..{book.totalChapters}</span>
                                        <ChevronRight className="w-3 h-3" />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Novo Testamento Results */}
                        {dropdownNewTestament.length > 0 && (dropdownTestamentFilter === 'ALL' || dropdownTestamentFilter === 'NT') && (
                          <div className="space-y-2 pt-1">
                            <div className="flex items-center gap-2 px-2 py-1 text-[11px] font-bold tracking-wider uppercase text-amber-400 font-cinzel border-b border-zinc-800/80">
                              <span>✝️</span>
                              <span>Novo Testamento ({dropdownNewTestament.length})</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {dropdownNewTestament.map((book) => {
                                const isCurrent = initialBook === book.number;
                                return (
                                  <div
                                    key={book.number}
                                    onClick={() => {
                                      if (parsedSearch.chapter) {
                                        handleOpenBibleAt(book.number, parsedSearch.chapter);
                                      } else {
                                        setBookForChaptersModal(book.number);
                                        setIsBookModalOpen(true);
                                        setIsDropdownOpen(false);
                                      }
                                    }}
                                    className={`p-2.5 rounded-xl flex items-center justify-between gap-2.5 cursor-pointer transition-all duration-150 hover:-translate-y-0.5 group border ${
                                      isCurrent
                                        ? 'bg-amber-950/50 border-amber-500/50 text-amber-200 shadow-xs'
                                        : 'hover:bg-zinc-800/90 text-zinc-300 hover:text-white bg-zinc-950/40 border-zinc-800/60 hover:border-amber-500/40'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 border transition-colors ${
                                        isCurrent
                                          ? 'bg-amber-500 text-zinc-950 border-amber-400'
                                          : 'bg-zinc-800 text-amber-400 border-zinc-700/50 group-hover:bg-amber-500 group-hover:text-zinc-950'
                                      }`}>
                                        {book.abbrevPt}
                                      </span>
                                      <div className="min-w-0">
                                        <div className="text-xs font-bold truncate group-hover:text-amber-300 transition-colors">
                                          {book.namePt}
                                        </div>
                                        <div className="text-[10px] text-zinc-400 truncate">
                                          {book.totalChapters} caps • {book.group}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                                      <button
                                        type="button"
                                        onClick={() => handleOpenBibleAt(book.number, 1)}
                                        className="px-2 py-1 text-[10px] font-semibold rounded-lg bg-zinc-800 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 border border-zinc-700/60 hover:border-amber-400 transition-all active:scale-95"
                                        title={`Abrir ${book.namePt} Capítulo 1`}
                                      >
                                        Cap 1
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => {
                                          setBookForChaptersModal(book.number);
                                          setIsBookModalOpen(true);
                                          setIsDropdownOpen(false);
                                        }}
                                        className="px-2 py-1 text-[10px] font-semibold rounded-lg bg-amber-500/20 hover:bg-amber-500 hover:text-zinc-950 text-amber-300 border border-amber-500/30 hover:border-amber-400 transition-all flex items-center gap-1 active:scale-95"
                                        title={`Ver todos os ${book.totalChapters} capítulos de ${book.namePt}`}
                                      >
                                        <span>1..{book.totalChapters}</span>
                                        <ChevronRight className="w-3 h-3" />
                                      </button>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Dropdown Footer Action: Open Full Modal */}
                  <div className="p-2.5 bg-zinc-950/95 border-t border-zinc-800 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setBookForChaptersModal(null);
                        setIsBookModalOpen(true);
                      }}
                      className="w-full py-2.5 px-3 rounded-2xl bg-zinc-850 hover:bg-zinc-800 text-amber-300 hover:text-amber-200 text-xs font-bold flex items-center justify-center gap-2 transition-all border border-zinc-700/70 hover:border-amber-500/40 cursor-pointer shadow-xs active:scale-95"
                    >
                      <Layers className="w-4 h-4 text-amber-400" />
                      <span>Abrir Seletor Completo com todos os 66 livros e capítulos</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Mode Switcher Tabs with Sleek Animated Pill Segmented Design */}
            <div className="relative p-1.5 bg-zinc-950/80 border border-zinc-800/80 rounded-2xl flex items-center justify-between gap-1.5 shadow-inner">
              <button
                type="button"
                onClick={() => onReadingModeChange('browse-books')}
                className={`relative flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer z-10 ${
                  readingMode === 'browse-books'
                    ? 'text-white font-bold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {readingMode === 'browse-books' && (
                  <motion.div
                    layoutId="activeBibleModePill"
                    className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl shadow-md shadow-amber-950/40 -z-10"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <BookOpen className="w-4 h-4" />
                <span>Bíblia Completa (66 Livros)</span>
              </button>

              <button
                type="button"
                onClick={() => onReadingModeChange('plan-day')}
                className={`relative flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer z-10 ${
                  readingMode === 'plan-day'
                    ? 'text-white font-bold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {readingMode === 'plan-day' && (
                  <motion.div
                    layoutId="activeBibleModePill"
                    className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 rounded-xl shadow-md shadow-amber-950/40 -z-10"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <Calendar className="w-4 h-4" />
                <span>Leitura do Dia {currentDayReading.day}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Book Navigation Modal */}
      <BibleBookSelectorModal
        isOpen={isBookModalOpen}
        onClose={() => {
          setIsBookModalOpen(false);
          setBookForChaptersModal(null);
        }}
        onSelectBook={handleOpenBibleAt}
        currentBookNumber={initialBook}
        currentChapter={initialChapter}
        initialBookForChapterSelect={bookForChaptersModal}
      />

      {/* Content Rendering with Fluid Animated Transitions */}
      <AnimatePresence mode="wait" initial={false}>
        {readingMode === 'plan-day' ? (
          <motion.div
            key="plan-day"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Reader
              dayReading={currentDayReading}
              isCompleted={isCompleted}
              isBookmarked={isBookmarked}
              onToggleComplete={onToggleComplete}
              onToggleBookmark={onToggleBookmark}
              onPrevDay={onPrevDay}
              onNextDay={onNextDay}
              onBackToDashboard={onBackToDashboard}
              settings={settings}
              onUpdateSettings={onUpdateSettings}
              personalNote={personalNote}
              onSaveNote={onSaveNote}
              onOpenBible={handleOpenBibleAt}
              isFocusMode={isFocusMode}
              onToggleFocusMode={onToggleFocusMode}
              isStudyDrawerOpen={isStudyDrawerOpen}
              onToggleStudyDrawer={onToggleStudyDrawer}
              onCloseStudyDrawer={onCloseStudyDrawer}
              isSettingsOpen={isSettingsOpen}
              onToggleSettings={onToggleSettings}
            />
          </motion.div>
        ) : (
          <motion.div
            key="browse-books"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full pt-2"
          >
            <BibleReader
              initialBookNumber={initialBook}
              initialChapter={initialChapter}
              searchFilter=""
              onBookChapterChange={handleBookChapterChange}
              onBackToDashboard={() => onReadingModeChange('plan-day')}
              onSectionChange={onSectionChange}
              isFocusMode={isFocusMode}
              onToggleFocusMode={onToggleFocusMode}
              isStudyDrawerOpen={isStudyDrawerOpen}
              onToggleStudyDrawer={onToggleStudyDrawer}
              onCloseStudyDrawer={onCloseStudyDrawer}
              targetNonce={targetNonce}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

BibleView.displayName = 'BibleView';

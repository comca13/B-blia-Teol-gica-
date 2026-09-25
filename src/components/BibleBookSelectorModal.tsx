import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  ALL_BIBLE_BOOKS, 
  BibleBookInfo, 
  OLD_TESTAMENT_BOOKS, 
  NEW_TESTAMENT_BOOKS 
} from '../data/bibleBooks';
import { 
  Search, 
  X, 
  BookOpen, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  Scroll, 
  Check, 
  ArrowLeft,
  BookMarked
} from 'lucide-react';

interface BibleBookSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBook: (bookNumber: number, chapter: number) => void;
  currentBookNumber?: number;
  currentChapter?: number;
}

type TestamentTab = 'ALL' | 'AT' | 'NT';

export const BibleBookSelectorModal: React.FC<BibleBookSelectorModalProps> = ({
  isOpen,
  onClose,
  onSelectBook,
  currentBookNumber = 1,
  currentChapter = 1
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTab, setSelectedTab] = useState<TestamentTab>('ALL');
  const [selectedGroup, setSelectedGroup] = useState<string>('ALL');
  const [bookForChapterSelect, setBookForChapterSelect] = useState<BibleBookInfo | null>(null);
  
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setSearchTerm('');
      setBookForChapterSelect(null);
    }
  }, [isOpen]);

  // Handle ESC key to close or go back to books list
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        if (bookForChapterSelect) {
          setBookForChapterSelect(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, bookForChapterSelect, onClose]);

  // Available groups for current testament tab
  const availableGroups = useMemo(() => {
    let sourceBooks = ALL_BIBLE_BOOKS;
    if (selectedTab === 'AT') sourceBooks = OLD_TESTAMENT_BOOKS;
    if (selectedTab === 'NT') sourceBooks = NEW_TESTAMENT_BOOKS;
    
    const groups = Array.from(new Set(sourceBooks.map(b => b.group)));
    return ['ALL', ...groups];
  }, [selectedTab]);

  // Filter books according to search and filters
  const filteredBooks = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    
    // Check if user typed something like "João 3" or "Sl 23"
    const matchWithChapter = term.match(/^([1-3]?\s?[a-záàâãéèêíïóôõöúçñ\s]+?)\s*(\d+)$/i);
    const bookSearchTerm = matchWithChapter ? matchWithChapter[1].trim() : term;

    return ALL_BIBLE_BOOKS.filter(book => {
      // Filter by testament
      if (selectedTab === 'AT' && book.testament !== 'AT') return false;
      if (selectedTab === 'NT' && book.testament !== 'NT') return false;

      // Filter by group
      if (selectedGroup !== 'ALL' && book.group !== selectedGroup) return false;

      // Filter by search query
      if (!term) return true;

      const pt = book.namePt.toLowerCase();
      const en = book.nameEn.toLowerCase();
      const abbrevPt = book.abbrevPt.toLowerCase();
      const abbrevEn = book.abbrevEn.toLowerCase();
      const numStr = book.number.toString();
      const groupStr = book.group.toLowerCase();

      return (
        pt.includes(bookSearchTerm) ||
        en.includes(bookSearchTerm) ||
        abbrevPt === bookSearchTerm ||
        abbrevEn === bookSearchTerm ||
        numStr === bookSearchTerm ||
        groupStr.includes(bookSearchTerm)
      );
    });
  }, [searchTerm, selectedTab, selectedGroup]);

  // Split into Old and New Testament for categorized presentation
  const oldTestamentFiltered = useMemo(() => {
    return filteredBooks.filter(b => b.testament === 'AT');
  }, [filteredBooks]);

  const newTestamentFiltered = useMemo(() => {
    return filteredBooks.filter(b => b.testament === 'NT');
  }, [filteredBooks]);

  // Detected chapter from search term (e.g. "Lucas 15" -> targetChapter = 15)
  const targetChapterFromSearch = useMemo(() => {
    const match = searchTerm.trim().match(/\s+(\d+)$/);
    if (match) {
      return parseInt(match[1], 10);
    }
    return null;
  }, [searchTerm]);

  const handleSelectBookItem = (book: BibleBookInfo) => {
    if (targetChapterFromSearch) {
      const validChapter = Math.min(Math.max(1, targetChapterFromSearch), book.totalChapters);
      onSelectBook(book.number, validChapter);
      onClose();
    } else {
      // Open chapter selection for this book
      setBookForChapterSelect(book);
    }
  };

  const handleSelectDirectChapter = (book: BibleBookInfo, chapter: number, e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectBook(book.number, chapter);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[88vh] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-700/80 rounded-3xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden text-zinc-100 ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with refined typography & styling */}
        <div className="p-4 sm:p-5 border-b border-zinc-800/90 bg-zinc-900/95 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500/25 to-amber-600/10 text-amber-400 flex items-center justify-center border border-amber-500/30 shadow-inner">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-zinc-100 font-cinzel tracking-wide">
                  Navegação Bíblica
                </h2>
                <span className="text-[11px] font-semibold font-sans px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-xs">
                  66 Livros
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Navegue instantaneamente pelo Cânon Sagrado do Antigo e Novo Testamento
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-xl transition-colors flex items-center gap-1.5"
              title="Fechar (Esc)"
            >
              <kbd className="hidden sm:inline text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                ESC
              </kbd>
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chapter Selection View (if a book is active) */}
        {bookForChapterSelect ? (
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
            {/* Navigation back and book meta */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
              <button
                type="button"
                onClick={() => setBookForChapterSelect(null)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 border border-zinc-700/60 transition-all hover:-translate-x-0.5 shadow-xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar à lista de livros</span>
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {bookForChapterSelect.testament === 'AT' ? '📜 Antigo Testamento' : '✝️ Novo Testamento'}
                </span>
                <span className="text-xs text-zinc-400 hidden sm:inline">•</span>
                <span className="text-xs text-zinc-400 hidden sm:inline font-medium">
                  {bookForChapterSelect.group}
                </span>
              </div>
            </div>

            {/* Book Highlight Card with Rich Gradient */}
            <div className="bg-gradient-to-r from-amber-950/40 via-zinc-900 to-zinc-900 border border-amber-500/30 rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-mono px-2.5 py-1 rounded-xl bg-amber-500/25 text-amber-300 font-bold border border-amber-500/40 shadow-xs">
                    {bookForChapterSelect.abbrevPt}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-100 tracking-wide">
                    {bookForChapterSelect.namePt}
                  </h3>
                  <span className="text-xs sm:text-sm text-zinc-400 italic">
                    ({bookForChapterSelect.nameEn})
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 flex items-center gap-2">
                  <span>Escolha qualquer um dos <strong>{bookForChapterSelect.totalChapters} capítulos</strong> para ler:</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelectBook(bookForChapterSelect.number, 1);
                  onClose();
                }}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs sm:text-sm rounded-xl transition-all duration-150 shadow-md shadow-amber-950/40 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ler do Início (Capítulo 1)</span>
              </button>
            </div>

            {/* Chapter Selection Grid with Enhanced Tactile Tiles */}
            <div>
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Grade de Capítulos (1 a {bookForChapterSelect.totalChapters})
                </span>
                {currentBookNumber === bookForChapterSelect.number && (
                  <span className="text-xs text-amber-400 flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    Capítulo atual de leitura: {currentChapter}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2.5 sm:gap-3">
                {Array.from({ length: bookForChapterSelect.totalChapters }, (_, i) => i + 1).map((chapNum) => {
                  const isCurrent = 
                    currentBookNumber === bookForChapterSelect.number && 
                    currentChapter === chapNum;

                  return (
                    <button
                      key={chapNum}
                      type="button"
                      onClick={() => {
                        onSelectBook(bookForChapterSelect.number, chapNum);
                        onClose();
                      }}
                      className={`h-12 rounded-xl text-sm font-bold transition-all duration-150 flex items-center justify-center border shadow-xs hover:scale-105 active:scale-95 cursor-pointer ${
                        isCurrent
                          ? 'bg-gradient-to-br from-amber-400 to-amber-500 text-zinc-950 font-extrabold border-amber-300 shadow-md shadow-amber-500/20 ring-2 ring-amber-400/50 scale-105'
                          : 'bg-zinc-850 hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-400 border-zinc-700/60 text-zinc-200'
                      }`}
                      title={`${bookForChapterSelect.namePt} capítulo ${chapNum}`}
                    >
                      <span>{chapNum}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Search and Filter Controls */}
            <div className="p-4 sm:p-5 border-b border-zinc-800/80 bg-zinc-900/70 space-y-3.5">
              {/* Refined Search input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar por livro, abreviação ou capítulo (ex: Gênesis, Gn, Sl 23, Mateus 5, Apocalipse)..."
                  className="w-full pl-11 pr-11 py-3 bg-zinc-950/90 border border-zinc-700/80 rounded-2xl text-sm text-zinc-100 placeholder-zinc-500 focus:outline-hidden focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 shadow-inner transition-all"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-400 hover:text-zinc-200 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Primary Testament Selector Buttons with Pill Aesthetic */}
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-1.5 p-1 bg-zinc-950/90 border border-zinc-800 rounded-2xl shadow-inner">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTab('ALL');
                      setSelectedGroup('ALL');
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                      selectedTab === 'ALL'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                    }`}
                  >
                    Todos (66)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTab('AT');
                      setSelectedGroup('ALL');
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                      selectedTab === 'AT'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                    }`}
                  >
                    <span>📜</span>
                    <span>Antigo Testamento (39)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTab('NT');
                      setSelectedGroup('ALL');
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                      selectedTab === 'NT'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-850'
                    }`}
                  >
                    <span>✝️</span>
                    <span>Novo Testamento (27)</span>
                  </button>
                </div>

                <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>{filteredBooks.length} {filteredBooks.length === 1 ? 'livro encontrado' : 'livros encontrados'}</span>
                </div>
              </div>

              {/* Secondary Genre Filter Chips with smooth scrolling */}
              {availableGroups.length > 2 && (
                <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none text-xs">
                  <span className="text-zinc-400 font-semibold shrink-0 mr-1 text-[11px] uppercase tracking-wider">
                    Gênero:
                  </span>
                  {availableGroups.map((grp) => (
                    <button
                      key={grp}
                      type="button"
                      onClick={() => setSelectedGroup(grp)}
                      className={`px-3 py-1 rounded-xl text-[11px] font-medium transition-all shrink-0 cursor-pointer ${
                        selectedGroup === grp
                          ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-bold shadow-xs'
                          : 'bg-zinc-850/80 text-zinc-400 hover:text-zinc-200 border border-zinc-700/50 hover:bg-zinc-800'
                      }`}
                    >
                      {grp === 'ALL' ? 'Todos os Gêneros' : grp}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Books List Grouped by Testament */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-7">
              {filteredBooks.length === 0 ? (
                <div className="text-center py-14 text-zinc-400 space-y-3">
                  <BookOpen className="w-12 h-12 mx-auto text-zinc-600 opacity-60" />
                  <p className="text-base font-medium text-zinc-300">
                    Nenhum livro bíblico encontrado para &quot;{searchTerm}&quot;
                  </p>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto">
                    Tente digitar o nome (ex: Gênesis, Romanos), a abreviação (ex: Gn, Sl, Rm, Ap) ou o número de um capítulo.
                  </p>
                </div>
              ) : (
                <>
                  {/* Antigo Testamento Section */}
                  {oldTestamentFiltered.length > 0 && (selectedTab === 'ALL' || selectedTab === 'AT') && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2.5 border-b border-amber-500/25">
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">📜</span>
                          <h3 className="font-cinzel font-bold text-amber-300 text-sm sm:text-base tracking-wider">
                            ANTIGO TESTAMENTO
                          </h3>
                          <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-amber-950/70 text-amber-300 border border-amber-800/70 font-semibold shadow-xs">
                            {oldTestamentFiltered.length} {oldTestamentFiltered.length === 1 ? 'livro' : 'livros'}
                          </span>
                        </div>
                        <span className="text-xs text-zinc-400 hidden sm:inline font-medium">
                          Pentateuco, Históricos, Poéticos e Proféticos
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {oldTestamentFiltered.map((book) => {
                          const isCurrent = currentBookNumber === book.number;
                          return (
                            <div
                              key={book.number}
                              onClick={() => handleSelectBookItem(book)}
                              className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer group flex items-center justify-between gap-3 shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.015] ${
                                isCurrent
                                  ? 'bg-amber-950/45 border-amber-500/60 ring-2 ring-amber-500/20 shadow-amber-950/30'
                                  : 'bg-zinc-950/70 hover:bg-zinc-850 border-zinc-800/90 hover:border-amber-500/40'
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs sm:text-sm font-bold shadow-xs transition-colors duration-200 ${
                                  isCurrent
                                    ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/30'
                                    : 'bg-zinc-850 text-amber-400 border border-zinc-700/60 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-400'
                                }`}>
                                  {book.abbrevPt}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs sm:text-sm font-bold text-zinc-100 group-hover:text-amber-300 transition-colors truncate">
                                      {book.namePt}
                                    </span>
                                    {isCurrent && (
                                      <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                                        Lendo
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 mt-0.5">
                                    <span className="font-medium">{book.totalChapters} caps</span>
                                    <span>•</span>
                                    <span className="truncate text-zinc-500">{book.group}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                  type="button"
                                  onClick={(e) => handleSelectDirectChapter(book, 1, e)}
                                  className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-zinc-800/90 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 transition-all border border-zinc-700/60 hover:border-amber-400 shadow-xs active:scale-95"
                                  title="Abrir Capítulo 1"
                                >
                                  Cap 1
                                </button>
                                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Novo Testamento Section */}
                  {newTestamentFiltered.length > 0 && (selectedTab === 'ALL' || selectedTab === 'NT') && (
                    <div className="space-y-3.5 pt-2">
                      <div className="flex items-center justify-between pb-2.5 border-b border-amber-500/25">
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">✝️</span>
                          <h3 className="font-cinzel font-bold text-amber-300 text-sm sm:text-base tracking-wider">
                            NOVO TESTAMENTO
                          </h3>
                          <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-amber-950/70 text-amber-300 border border-amber-800/70 font-semibold shadow-xs">
                            {newTestamentFiltered.length} {newTestamentFiltered.length === 1 ? 'livro' : 'livros'}
                          </span>
                        </div>
                        <span className="text-xs text-zinc-400 hidden sm:inline font-medium">
                          Evangelhos, História, Epístolas e Revelação
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {newTestamentFiltered.map((book) => {
                          const isCurrent = currentBookNumber === book.number;
                          return (
                            <div
                              key={book.number}
                              onClick={() => handleSelectBookItem(book)}
                              className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer group flex items-center justify-between gap-3 shadow-xs hover:shadow-lg hover:-translate-y-0.5 hover:scale-[1.015] ${
                                isCurrent
                                  ? 'bg-amber-950/45 border-amber-500/60 ring-2 ring-amber-500/20 shadow-amber-950/30'
                                  : 'bg-zinc-950/70 hover:bg-zinc-850 border-zinc-800/90 hover:border-amber-500/40'
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 font-mono text-xs sm:text-sm font-bold shadow-xs transition-colors duration-200 ${
                                  isCurrent
                                    ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/30'
                                    : 'bg-zinc-850 text-amber-400 border border-zinc-700/60 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-400'
                                }`}>
                                  {book.abbrevPt}
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-xs sm:text-sm font-bold text-zinc-100 group-hover:text-amber-300 transition-colors truncate">
                                      {book.namePt}
                                    </span>
                                    {isCurrent && (
                                      <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                                        Lendo
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-2 text-[11px] text-zinc-400 mt-0.5">
                                    <span className="font-medium">{book.totalChapters} caps</span>
                                    <span>•</span>
                                    <span className="truncate text-zinc-500">{book.group}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0">
                                <button
                                  type="button"
                                  onClick={(e) => handleSelectDirectChapter(book, 1, e)}
                                  className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-zinc-800/90 hover:bg-amber-500 hover:text-zinc-950 text-zinc-300 transition-all border border-zinc-700/60 hover:border-amber-400 shadow-xs active:scale-95"
                                  title="Abrir Capítulo 1"
                                >
                                  Cap 1
                                </button>
                                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5" />
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
          </>
        )}

        {/* Footer */}
        <div className="p-3.5 sm:p-4 border-t border-zinc-800/90 bg-zinc-950/90 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-amber-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Dica:
            </span>
            <span>Clique no livro para abrir todos os capítulos ou no botão &quot;Cap 1&quot; para ir direto.</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold transition-all cursor-pointer shadow-xs active:scale-95"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

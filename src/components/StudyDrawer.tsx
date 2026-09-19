import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, Map, Book, BookOpen, Scale, Sparkles, Compass, Landmark, Search, Layers, ShieldQuestion, Filter } from 'lucide-react';
import { CulturalContext, HistoricalCommentary, GospelHarmonyEvent, BiblicalDifficulty, ApologeticsCategory } from '../types';
import { CulturalContextCard } from './CulturalContextCard';
import { HistoricalCommentaryCard } from './HistoricalCommentaryCard';
import { GospelHarmonyGrid } from './GospelHarmonyGrid';
import { ApologeticsCard } from './ApologeticsCard';
import { getHistoricalCommentariesForPassage, historicalCommentaries as allHistoricalCommentaries } from '../data/historicalCommentaryData';
import { getHarmonyEventsForBookChapter, gospelHarmonyData } from '../data/gospelHarmonyData';
import { getDifficultiesForPassageRef, apologeticsData, APOLOGETICS_CATEGORY_META } from '../data/apologeticsData';

export type StudyDrawerTab = 'context' | 'archaeology' | 'linguistics' | 'theology' | 'tradition' | 'harmony' | 'apologetics';

interface StudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  contextHistoryContent?: React.ReactNode;
  archaeologyCultureContent?: React.ReactNode;
  culturalContexts?: CulturalContext[];
  linguisticsTextContent?: React.ReactNode;
  theologyEchoesContent?: React.ReactNode;
  traditionContent?: React.ReactNode;
  historicalCommentaries?: HistoricalCommentary[];
  harmonyEvents?: GospelHarmonyEvent[];
  currentPassageRef?: string;
  initialTab?: StudyDrawerTab;
  initialDifficultyId?: string;
  onNavigateToPassage?: (passageRef: string) => void;
}

export const StudyDrawer: React.FC<StudyDrawerProps> = React.memo(({
  isOpen,
  onClose,
  contextHistoryContent,
  archaeologyCultureContent,
  culturalContexts,
  linguisticsTextContent,
  theologyEchoesContent,
  traditionContent,
  historicalCommentaries: providedCommentaries,
  harmonyEvents: providedHarmonyEvents,
  currentPassageRef,
  initialTab = 'context',
  initialDifficultyId,
  onNavigateToPassage
}) => {
  const [activeTab, setActiveTab] = useState<StudyDrawerTab>(initialTab);
  const [traditionFilter, setTraditionFilter] = useState<'current' | 'all'>('current');
  const [traditionSearch, setTraditionSearch] = useState('');
  const [harmonyFilter, setHarmonyFilter] = useState<'current' | 'all'>('current');
  const [selectedHarmonyId, setSelectedHarmonyId] = useState<string>(gospelHarmonyData[0].id);

  // Apologetics tab states
  const [apologeticsFilter, setApologeticsFilter] = useState<'current' | 'all'>('current');
  const [apologeticsCategory, setApologeticsCategory] = useState<'ALL' | ApologeticsCategory>('ALL');
  const [apologeticsSearch, setApologeticsSearch] = useState('');
  const [focusedDifficultyId, setFocusedDifficultyId] = useState<string | undefined>(initialDifficultyId);

  // Synchronize initialTab and initialDifficultyId if provided externally
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  useEffect(() => {
    if (initialDifficultyId) {
      setFocusedDifficultyId(initialDifficultyId);
      setActiveTab('apologetics');
      // If the difficulty isn't in current passage, switch filter to 'all' so it's visible
      setApologeticsFilter('all');
    }
  }, [initialDifficultyId]);

  // Resolve matching commentaries based on current passage
  const matchingCommentaries = useMemo(() => {
    if (providedCommentaries && providedCommentaries.length > 0) {
      return providedCommentaries;
    }
    if (currentPassageRef) {
      return getHistoricalCommentariesForPassage(currentPassageRef);
    }
    return [];
  }, [providedCommentaries, currentPassageRef]);

  // Resolve matching apologetics difficulties based on current passage
  const matchingDifficulties = useMemo(() => {
    if (currentPassageRef) {
      return getDifficultiesForPassageRef(currentPassageRef);
    }
    return [];
  }, [currentPassageRef]);

  // Filtered difficulties for the Apologetics tab
  const displayedDifficulties = useMemo(() => {
    const baseList = apologeticsFilter === 'current' ? matchingDifficulties : apologeticsData;
    
    return baseList.filter(item => {
      // Category filter
      if (apologeticsCategory !== 'ALL' && item.category !== apologeticsCategory) {
        return false;
      }
      // Text search
      if (apologeticsSearch.trim()) {
        const q = apologeticsSearch.toLowerCase();
        const matchesQ = 
          item.question.toLowerCase().includes(q) ||
          item.scholarlyResolution.toLowerCase().includes(q) ||
          item.passageRefs.some(ref => ref.toLowerCase().includes(q)) ||
          (item.recommendedReading && item.recommendedReading.toLowerCase().includes(q));
        if (!matchesQ) return false;
      }
      return true;
    });
  }, [apologeticsFilter, matchingDifficulties, apologeticsCategory, apologeticsSearch]);

  // Resolve matching gospel harmony events based on current passage
  const matchingHarmonyEvents = useMemo(() => {
    if (providedHarmonyEvents && providedHarmonyEvents.length > 0) {
      return providedHarmonyEvents;
    }
    if (currentPassageRef) {
      const match = currentPassageRef.match(/^([1-3]?\s?[A-Za-zÀ-ÿ]+)\s*(\d*)/);
      if (match) {
        const b = match[1].trim();
        const ch = match[2] ? parseInt(match[2], 10) : 1;
        return getHarmonyEventsForBookChapter(b, ch);
      }
    }
    return [];
  }, [providedHarmonyEvents, currentPassageRef]);

  // Automatically switch harmony filter if no matching events
  useEffect(() => {
    if (matchingHarmonyEvents.length > 0) {
      setSelectedHarmonyId(matchingHarmonyEvents[0].id);
    }
  }, [matchingHarmonyEvents]);

  // Commentaries to display under 'tradition' tab
  const displayedCommentaries = useMemo(() => {
    const baseList = traditionFilter === 'current' ? matchingCommentaries : allHistoricalCommentaries;
    if (!traditionSearch.trim()) return baseList;
    const q = traditionSearch.toLowerCase();
    return baseList.filter(c => 
      c.passageRef.toLowerCase().includes(q) ||
      c.commentator.name.toLowerCase().includes(q) ||
      c.theologicalFocus.toLowerCase().includes(q) ||
      c.quote.toLowerCase().includes(q) ||
      c.sourceDocument.toLowerCase().includes(q)
    );
  }, [traditionFilter, matchingCommentaries, traditionSearch]);

  // Surgical Scroll Position Retention & Background Scroll Locking
  const scrollPosRef = useRef<number>(0);

  useEffect(() => {
    if (!isOpen) return;

    // 1. Record the exact vertical reading position
    const currentScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    scrollPosRef.current = currentScrollY;

    // 2. Save previous styles
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const prevWidth = document.body.style.width;
    const prevOverflowY = document.body.style.overflowY;

    // 3. Lock body in place without shifting content or resetting scroll to 0
    document.body.style.position = 'fixed';
    document.body.style.top = `-${currentScrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflowY = 'scroll'; // Preserves scrollbar gutter, preventing width shift

    return () => {
      // 4. Surgically restore body position
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      document.body.style.width = prevWidth;
      document.body.style.overflowY = prevOverflowY;

      // 5. Instantly restore exact reading position down to the millimeter
      window.scrollTo(0, scrollPosRef.current);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Touch gesture to drag down and close on mobile bottom sheet
  const touchStartY = useRef<number | null>(null);
  const touchCurrentY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchStartY.current !== null && touchCurrentY.current !== null) {
      const deltaY = touchCurrentY.current - touchStartY.current;
      // If user swiped down by 50px or more, close drawer
      if (deltaY > 50) {
        onClose();
      }
    }
    touchStartY.current = null;
    touchCurrentY.current = null;
  };

  const tabs = [
    { id: 'context' as const, label: 'Contexto & História', shortLabel: 'Contexto', icon: Map },
    { id: 'archaeology' as const, label: 'Arqueologia & Cultura', shortLabel: 'Arqueologia', icon: Book },
    { id: 'linguistics' as const, label: 'Linguística & Texto', shortLabel: 'Linguística', icon: BookOpen },
    { id: 'theology' as const, label: 'Teologia & Ecos', shortLabel: 'Teologia', icon: Scale },
    { id: 'tradition' as const, label: '🏛️ Tradição & Pais da Igreja', shortLabel: 'Tradição', icon: Landmark, badge: matchingCommentaries.length > 0 ? matchingCommentaries.length : undefined },
    { id: 'harmony' as const, label: '⚡ Harmonia dos Evangelhos', shortLabel: 'Harmonia', icon: Layers, badge: matchingHarmonyEvents.length > 0 ? matchingHarmonyEvents.length : undefined },
    { id: 'apologetics' as const, label: '🛡️ Apologética & Dificuldades', shortLabel: 'Apologética', icon: ShieldQuestion, badge: matchingDifficulties.length > 0 ? matchingDifficulties.length : undefined },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with fade-in and touch containment */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 transition-opacity animate-in fade-in duration-200" 
        onClick={onClose}
        onTouchMove={(e) => e.preventDefault()}
        aria-hidden="true"
      />
      
      {/* Drawer Container:
          - Mobile (< md): Bottom Sheet sliding from bottom (h-[82vh], rounded-t-3xl, border-t)
          - Desktop (md:): Side Drawer sliding from right (h-full, inset-y-0 right-0, rounded-none, border-l)
      */}
      <aside 
        aria-label="Painel de Estudo Acadêmico"
        style={{ overscrollBehaviorY: 'contain' }}
        className="fixed bottom-0 left-0 w-full h-[85vh] max-h-[88vh] rounded-t-3xl border-t border-zinc-700/80 shadow-2xl z-50 flex flex-col bg-zinc-950 text-stone-100 overscroll-contain md:bottom-auto md:top-0 md:inset-y-0 md:right-0 md:left-auto md:w-full md:max-w-xl md:lg:max-w-2xl md:h-full md:max-h-none md:rounded-none md:border-t-0 md:border-l md:border-zinc-800 animate-in slide-in-from-bottom-10 md:slide-in-from-right-10 duration-300 ease-out"
      >
        {/* Mobile Drag Handle with swipe-to-close */}
        <div 
          className="md:hidden flex items-center justify-center pt-3 pb-1 cursor-pointer select-none touch-none"
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          title="Deslizar para baixo para fechar"
        >
          <div className="w-12 h-1.5 rounded-full bg-zinc-600 hover:bg-zinc-500 transition-colors" />
        </div>

        {/* Header with touch gesture support */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 border-b border-zinc-800/80 bg-zinc-900/60 select-none"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm sm:text-base text-stone-100">
                Aparelho de Estudo & Erudição
              </h3>
              <p className="text-[11px] text-zinc-400">
                {currentPassageRef ? `Passagem: ${currentPassageRef}` : 'Aprofundamento histórico, patrístico e exegético'}
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose} 
            className="p-1.5 sm:p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors"
            title="Fechar painel (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 5 Tabs Navigation */}
        <div className="flex border-b border-zinc-800 bg-zinc-900/40 divide-x divide-zinc-800/60 overflow-x-auto scrollbar-none">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[68px] py-2.5 px-1 sm:px-2 flex flex-col items-center gap-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all relative ${
                  isActive 
                    ? 'text-amber-400 border-b-2 border-amber-500 bg-zinc-850/80 shadow-inner' 
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
              >
                <div className="relative">
                  <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${isActive ? 'text-amber-400 scale-105' : 'text-zinc-400'}`} />
                  {tab.badge !== undefined && (
                    <span className="absolute -top-1 -right-2 px-1 text-[9px] font-bold rounded-full bg-amber-600 text-white leading-tight">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="truncate w-full text-center">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content with strictly contained scroll */}
        <div 
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 overscroll-contain"
          style={{ 
            overscrollBehaviorY: 'contain',
            WebkitOverflowScrolling: 'touch' 
          }}
        >
          {/* TAB 1: CONTEXTO & HISTÓRIA */}
          {activeTab === 'context' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {contextHistoryContent || (
                <p className="text-xs text-zinc-500 text-center py-8">
                  Nenhum contexto histórico adicional registrado para esta passagem.
                </p>
              )}
            </div>
          )}

          {/* TAB 2: ARQUEOLOGIA & CULTURA */}
          {activeTab === 'archaeology' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {culturalContexts && culturalContexts.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <Compass className="w-4 h-4 text-amber-400" />
                    <span>Contexto Cultural & Costumes Antigos</span>
                  </div>
                  {culturalContexts.map(ctx => (
                    <CulturalContextCard key={ctx.id} context={ctx} />
                  ))}
                </div>
              )}
              {archaeologyCultureContent}
              {!archaeologyCultureContent && (!culturalContexts || culturalContexts.length === 0) && (
                <p className="text-xs text-zinc-500 text-center py-8">
                  Nenhum artefato arqueológico ou dado cultural específico registrado para o dia.
                </p>
              )}
            </div>
          )}

          {/* TAB 3: LINGUÍSTICA & TEXTO */}
          {activeTab === 'linguistics' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {linguisticsTextContent || (
                <p className="text-xs text-zinc-500 text-center py-8">
                  Nenhuma chave de léxico ou variante textual registrada para o texto de hoje.
                </p>
              )}
            </div>
          )}

          {/* TAB 4: TEOLOGIA & ECOS */}
          {activeTab === 'theology' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {theologyEchoesContent || (
                <p className="text-xs text-zinc-500 text-center py-8">
                  Nenhum eco intertextual ou desdobramento de sistema teológico específico para hoje.
                </p>
              )}
            </div>
          )}

          {/* TAB 5: TRADIÇÃO & PAIS DA IGREJA (VOZES DO PASSADO) */}
          {activeTab === 'tradition' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Header Card with Information */}
              <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-800/40 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Landmark className="w-4 h-4" />
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="font-serif font-bold text-stone-100 text-sm">
                    Vozes do Passado (Patrística & Reforma)
                  </h4>
                  <p className="text-stone-300 leading-relaxed">
                    Acompanhe a interpretação das Escrituras através dos séculos com os testemunhos de Agostinho, João Crisóstomo, Martinho Lutero, João Calvino e Tomás de Aquino.
                  </p>
                </div>
              </div>

              {/* Filter controls if no direct matches or user wants to browse */}
              <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between text-xs">
                <div className="inline-flex p-0.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setTraditionFilter('current')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      traditionFilter === 'current'
                        ? 'bg-amber-600 text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Passagem Atual ({matchingCommentaries.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setTraditionFilter('all')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      traditionFilter === 'all'
                        ? 'bg-amber-600 text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Ver Todos ({allHistoricalCommentaries.length})
                  </button>
                </div>

                {/* Mini search input */}
                <div className="relative flex-1 sm:max-w-[200px]">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    value={traditionSearch}
                    onChange={(e) => setTraditionSearch(e.target.value)}
                    placeholder="Filtrar por autor, tema..."
                    className="w-full pl-8 pr-2.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-stone-100 placeholder-zinc-500 focus:outline-hidden focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Optional Custom Tradition Content */}
              {traditionContent}

              {/* Render Historical Commentaries */}
              {displayedCommentaries.length > 0 ? (
                <div className="space-y-4">
                  {displayedCommentaries.map(comm => (
                    <HistoricalCommentaryCard key={comm.id} commentary={comm} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 px-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 space-y-2.5">
                  <Landmark className="w-8 h-8 text-zinc-600 mx-auto" />
                  <p className="font-serif text-sm text-zinc-300">
                    Nenhum comentário histórico registrado para esta passagem específica.
                  </p>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                    {currentPassageRef 
                      ? `Atualmente a passagem é "${currentPassageRef}". Clique em "Ver Todos" acima para explorar as reflexões patrísticas e reformadas de Gênesis 1, João 1, Romanos 1 e 8, Salmo 23, Mateus 5 e Efésios 2.`
                      : 'Clique em "Ver Todos" acima para explorar todas as citações da Tradição da Igreja.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setTraditionFilter('all')}
                    className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-amber-600 text-zinc-200 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <span>Explorar todas as 10 Vozes do Passado</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: HARMONIA DOS EVANGELHOS (SINÓPTICA) */}
          {activeTab === 'harmony' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Filter controls: Passagem Atual vs Todos os Eventos */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pb-2 border-b border-zinc-800">
                <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800 self-start">
                  <button
                    type="button"
                    onClick={() => setHarmonyFilter('current')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      harmonyFilter === 'current'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <span>Passagem Atual</span>
                    {matchingHarmonyEvents.length > 0 && (
                      <span className="w-4 h-4 rounded-full bg-amber-400 text-zinc-950 text-[10px] font-bold flex items-center justify-center">
                        {matchingHarmonyEvents.length}
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setHarmonyFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      harmonyFilter === 'all'
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    Todos os Eventos ({gospelHarmonyData.length})
                  </button>
                </div>
              </div>

              {/* Event selector pills when in 'all' mode */}
              {harmonyFilter === 'all' && (
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {gospelHarmonyData.map(ev => (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => setSelectedHarmonyId(ev.id)}
                      className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                        selectedHarmonyId === ev.id
                          ? 'bg-amber-600 text-white'
                          : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                      }`}
                    >
                      {ev.title.split(' e ')[0].split(' no ')[0]}
                    </button>
                  ))}
                </div>
              )}

              {/* Render harmony grids */}
              {harmonyFilter === 'current' ? (
                matchingHarmonyEvents.length > 0 ? (
                  <div className="space-y-4">
                    {matchingHarmonyEvents.map(ev => (
                      <GospelHarmonyGrid
                        key={ev.id}
                        event={ev}
                        onNavigateToPassage={onNavigateToPassage}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 px-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 space-y-2.5">
                    <Layers className="w-8 h-8 text-zinc-600 mx-auto" />
                    <p className="font-serif text-sm text-zinc-300">
                      Nenhum evento paralelo sinótico registrado para esta passagem.
                    </p>
                    <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                      A harmonia dos evangelhos mapeia os grandes relatos comuns entre Mateus, Marcos, Lucas e João.
                    </p>
                    <button
                      type="button"
                      onClick={() => setHarmonyFilter('all')}
                      className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-amber-600 text-zinc-200 hover:text-white text-xs font-semibold transition-colors"
                    >
                      <span>Explorar todos os {gospelHarmonyData.length} eventos dos Evangelhos</span>
                    </button>
                  </div>
                )
              ) : (
                (() => {
                  const ev = gospelHarmonyData.find(e => e.id === selectedHarmonyId) || gospelHarmonyData[0];
                  return (
                    <GospelHarmonyGrid
                      event={ev}
                      onNavigateToPassage={onNavigateToPassage}
                    />
                  );
                })()
              )}
            </div>
          )}

          {/* TAB 7: APOLOGÉTICA & DIFICULDADES BÍBLICAS */}
          {activeTab === 'apologetics' && (
            <div className="space-y-5 animate-in fade-in duration-200">
              {/* Educational header banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/40 border border-blue-500/30 flex items-start gap-3">
                <ShieldQuestion className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <h4 className="font-serif font-bold text-stone-100 text-sm">
                    Apologética & Dificuldades Bíblicas
                  </h4>
                  <p className="text-stone-300 leading-relaxed">
                    Esclarecimento exegético, histórico e gramatical para passagens complexas, aparentes contradições e dilemas éticos das Escrituras, preservando o princípio da honestidade académica e sobriedade teológica.
                  </p>
                </div>
              </div>

              {/* Filter controls: Passagem Atual vs Todas as Dificuldades */}
              <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between text-xs">
                <div className="inline-flex p-0.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setApologeticsFilter('current')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                      apologeticsFilter === 'current'
                        ? 'bg-blue-600 text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>Passagem Atual</span>
                    {matchingDifficulties.length > 0 && (
                      <span className="w-4 h-4 rounded-full bg-blue-300 text-zinc-950 text-[10px] font-bold flex items-center justify-center">
                        {matchingDifficulties.length}
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setApologeticsFilter('all')}
                    className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                      apologeticsFilter === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Ver Todas ({apologeticsData.length})
                  </button>
                </div>

                {/* Mini search input */}
                <div className="relative flex-1 sm:max-w-[200px]">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    type="text"
                    value={apologeticsSearch}
                    onChange={(e) => setApologeticsSearch(e.target.value)}
                    placeholder="Filtrar por tema ou texto..."
                    className="w-full pl-8 pr-2.5 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-stone-100 placeholder-zinc-500 focus:outline-hidden focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Category Filter Chips */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                <button
                  type="button"
                  onClick={() => setApologeticsCategory('ALL')}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-colors shrink-0 ${
                    apologeticsCategory === 'ALL'
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40 font-semibold'
                      : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                  }`}
                >
                  Todas ({apologeticsData.length})
                </button>
                {(['CONTRADICAO_APARENTE', 'DILEMA_ETICO', 'PRECISAO_HISTORICA', 'PROBLEMA_TEXTUAL'] as ApologeticsCategory[]).map(cat => {
                  const meta = APOLOGETICS_CATEGORY_META[cat];
                  const count = (apologeticsFilter === 'current' ? matchingDifficulties : apologeticsData).filter(d => d.category === cat).length;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setApologeticsCategory(cat)}
                      className={`px-2.5 py-1 rounded-lg font-medium transition-colors shrink-0 flex items-center gap-1.5 ${
                        apologeticsCategory === cat
                          ? `${meta.badgeBg} ${meta.badgeText} border ${meta.badgeBorder} font-semibold`
                          : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                      }`}
                    >
                      <span>{meta.shortLabel}</span>
                      <span className="text-[10px] opacity-75">({count})</span>
                    </button>
                  );
                })}
              </div>

              {/* Render Difficulties Cards */}
              {displayedDifficulties.length > 0 ? (
                <div className="space-y-4">
                  {displayedDifficulties.map(diff => (
                    <ApologeticsCard
                      key={diff.id}
                      difficulty={diff}
                      defaultExpanded={displayedDifficulties.length === 1 || focusedDifficultyId === diff.id}
                      highlighted={focusedDifficultyId === diff.id}
                      onNavigateToPassage={onNavigateToPassage}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 px-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 space-y-2.5">
                  <ShieldQuestion className="w-8 h-8 text-zinc-600 mx-auto" />
                  <p className="font-serif text-sm text-zinc-300">
                    Nenhuma dificuldade apologética registrada para os filtros atuais.
                  </p>
                  <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                    {currentPassageRef && apologeticsFilter === 'current'
                      ? `Atualmente a passagem é "${currentPassageRef}". Clique em "Ver Todas" acima para explorar as resoluções sobre a morte de Judas, guerras de Canaã, genealogias de Jesus, o censo de Quirino e muito mais.`
                      : 'Nenhum resultado corresponde à busca ou categoria selecionada.'}
                  </p>
                  {apologeticsFilter === 'current' && (
                    <button
                      type="button"
                      onClick={() => {
                        setApologeticsFilter('all');
                        setApologeticsCategory('ALL');
                        setApologeticsSearch('');
                      }}
                      className="mt-2 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-blue-600 text-zinc-200 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <span>Explorar todas as {apologeticsData.length} questões apologéticas</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </aside>
    </>
  );
});

StudyDrawer.displayName = 'StudyDrawer';

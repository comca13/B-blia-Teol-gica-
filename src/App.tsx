import React, { useState, useEffect, useMemo, useCallback, Suspense, lazy } from 'react';
import { MainRoute, PlanType, ReaderSettings, ReminderSettings, UserProgress } from './types';
import { CHRONOLOGICAL_PLAN } from './data/chronologicalPlan';
import { CANONICAL_PLAN } from './data/canonicalPlan';
import { 
  loadUserProgress, 
  saveUserProgress, 
  loadReaderSettings, 
  saveReaderSettings, 
  loadReminderSettings, 
  saveReminderSettings,
  loadUserName,
  saveUserName
} from './utils/storage';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { OfflineIndicator } from './components/OfflineIndicator';
import { ViewLoadingSkeleton } from './components/ViewLoadingSkeleton';
import { BibleView } from './views/BibleView';
import { GlobalSearchModal, GlobalSearchTarget } from './components/GlobalSearchModal';
import { HistorySubTab } from './views/HistoryView';
import { GlobalContextTab } from './views/GlobalContextView';
import { SavedFavoriteItem } from './utils/favoritesStorage';

// Lazy loading views for instant initial paint and reduced bundle footprint
const PlansView = lazy(() => import('./views/PlansView').then(m => ({ default: m.PlansView })));
const HistoryView = lazy(() => import('./views/HistoryView').then(m => ({ default: m.HistoryView })));
const GlobalContextView = lazy(() => import('./views/GlobalContextView').then(m => ({ default: m.GlobalContextView })));
const ProfileView = lazy(() => import('./views/ProfileView').then(m => ({ default: m.ProfileView })));

export default function App() {
  const [activeRoute, setActiveRoute] = useState<MainRoute>('BIBLIA');
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress());
  const [readerSettings, setReaderSettings] = useState<ReaderSettings>(loadReaderSettings());
  const [reminderSettings, setReminderSettings] = useState<ReminderSettings>(loadReminderSettings());
  const [userName, setUserName] = useState<string>(loadUserName());

  // Global Search & Deep Navigation State
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [historySubTab, setHistorySubTab] = useState<HistorySubTab | undefined>(undefined);
  const [historyTargetFigureId, setHistoryTargetFigureId] = useState<string | undefined>(undefined);
  const [historyTargetTopicId, setHistoryTargetTopicId] = useState<string | undefined>(undefined);
  const [globalContextTab, setGlobalContextTab] = useState<GlobalContextTab | undefined>(undefined);
  const [globalContextTargetId, setGlobalContextTargetId] = useState<string | undefined>(undefined);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigateSearchTarget = useCallback((target: GlobalSearchTarget) => {
    setIsSearchOpen(false);
    if (target.route === 'HISTORIA') {
      if (target.historySubTab) {
        setHistorySubTab(target.historySubTab as HistorySubTab);
      }
      if (target.historySubTab === 'catholic-protestant') {
        setHistoryTargetTopicId(target.targetId);
        setHistoryTargetFigureId(undefined);
      } else {
        setHistoryTargetFigureId(target.targetId);
        setHistoryTargetTopicId(undefined);
      }
      setActiveRoute('HISTORIA');
    } else if (target.route === 'GLOBAL_CONTEXT') {
      if (target.globalContextTab) {
        setGlobalContextTab(target.globalContextTab);
      }
      setGlobalContextTargetId(target.targetId);
      setActiveRoute('GLOBAL_CONTEXT');
    } else {
      setActiveRoute(target.route);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleNavigateFavorite = useCallback((fav: SavedFavoriteItem) => {
    switch (fav.entityType) {
      case 'theologian-reformation':
        setHistorySubTab('reformation');
        setHistoryTargetFigureId(fav.id);
        setActiveRoute('HISTORIA');
        break;
      case 'theologian-catholic':
        setHistorySubTab('catholic');
        setHistoryTargetFigureId(fav.id);
        setActiveRoute('HISTORIA');
        break;
      case 'theologian-orthodox':
        setHistorySubTab('orthodox');
        setHistoryTargetFigureId(fav.id);
        setActiveRoute('HISTORIA');
        break;
      case 'council':
        setGlobalContextTab('councils');
        setGlobalContextTargetId(fav.id);
        setActiveRoute('GLOBAL_CONTEXT');
        break;
      case 'manuscript':
        setGlobalContextTab('manuscripts');
        setGlobalContextTargetId(fav.id);
        setActiveRoute('GLOBAL_CONTEXT');
        break;
      case 'comparison':
        setHistorySubTab('catholic-protestant');
        setHistoryTargetTopicId(fav.id);
        setActiveRoute('HISTORIA');
        break;
      case 'church-history-event':
        setHistorySubTab('church');
        setHistoryTargetFigureId(fav.id);
        setActiveRoute('HISTORIA');
        break;
      case 'glossary':
        setHistorySubTab('catholic-protestant');
        setActiveRoute('HISTORIA');
        break;
      default:
        setActiveRoute('HISTORIA');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);
  const [isStudyDrawerOpen, setIsStudyDrawerOpen] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [bibleReadingMode, setBibleReadingMode] = useState<'plan-day' | 'browse-books'>('browse-books');
  const [bibleSectionInfo, setBibleSectionInfo] = useState<{ title: string; subtitle?: string }>({
    title: 'Gênesis 1',
    subtitle: 'Livro 1 de 66 • Antigo Testamento'
  });

  const handleToggleFocusMode = useCallback(() => {
    setIsFocusMode(prev => {
      const next = !prev;
      if (next) {
        setIsStudyDrawerOpen(false);
        setIsSettingsOpen(false);
      }
      return next;
    });
  }, []);

  const handleToggleStudyDrawer = useCallback(() => {
    setIsStudyDrawerOpen(prev => !prev);
  }, []);

  const handleCloseStudyDrawer = useCallback(() => {
    setIsStudyDrawerOpen(false);
  }, []);

  const handleToggleSettings = useCallback(() => {
    setIsSettingsOpen(prev => !prev);
  }, []);

  const handleSectionChange = useCallback((title: string, subtitle?: string) => {
    setBibleSectionInfo(prev => {
      if (prev.title === title && prev.subtitle === subtitle) {
        return prev;
      }
      return { title, subtitle };
    });
  }, []);

  // Active plan dataset
  const currentPlanDays = progress.planType === 'chronological' ? CHRONOLOGICAL_PLAN : CANONICAL_PLAN;
  const currentReading = currentPlanDays[selectedDayNumber - 1] || currentPlanDays[0];

  // Save progress on change
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Save settings on change
  useEffect(() => {
    saveReaderSettings(readerSettings);
    // Dark theme support
    const root = document.documentElement;
    root.classList.add('dark');
  }, [readerSettings]);

  // Handle plan selection
  const handleSelectPlan = (newPlan: PlanType) => {
    if (newPlan !== progress.planType) {
      setProgress(prev => ({
        ...prev,
        planType: newPlan
      }));
    }
  };

  // Toggle complete day
  const handleToggleComplete = (day: number) => {
    setProgress(prev => {
      const exists = prev.completedDays.includes(day);
      let newCompleted: number[];
      let newStreak = prev.streak;

      if (exists) {
        newCompleted = prev.completedDays.filter(d => d !== day);
      } else {
        newCompleted = [...prev.completedDays, day].sort((a, b) => a - b);
        newStreak = prev.streak + 1;
      }

      return {
        ...prev,
        completedDays: newCompleted,
        streak: newStreak,
        lastReadDate: new Date().toISOString().split('T')[0]
      };
    });
  };

  // Toggle bookmark
  const handleToggleBookmark = (day: number) => {
    setProgress(prev => {
      const exists = prev.bookmarks.includes(day);
      const newBookmarks = exists 
        ? prev.bookmarks.filter(b => b !== day)
        : [...prev.bookmarks, day];

      return {
        ...prev,
        bookmarks: newBookmarks
      };
    });
  };

  // Save personal note
  const handleSaveNote = (day: number, note: string) => {
    setProgress(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [day]: note
      }
    }));
  };

  // Previous & Next navigation
  const handlePrevDay = () => {
    if (selectedDayNumber > 1) {
      setSelectedDayNumber(prev => prev - 1);
    }
  };

  const handleNextDay = () => {
    if (selectedDayNumber < 365) {
      setSelectedDayNumber(prev => prev + 1);
    }
  };

  const handleUpdateReminderSettings = (newSettings: ReminderSettings) => {
    setReminderSettings(newSettings);
    saveReminderSettings(newSettings);
  };

  const handleUpdateUserName = (newName: string) => {
    setUserName(newName);
    saveUserName(newName);
  };

  // Scroll direction state for auto-hiding top & bottom navigation on scroll down
  const [isScrolledDown, setIsScrolledDown] = useState<boolean>(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Always show navbar near top of page
          if (currentScrollY <= 45) {
            setIsScrolledDown(false);
            lastScrollY = currentScrollY;
            ticking = false;
            return;
          }

          const deltaY = currentScrollY - lastScrollY;

          // Only trigger if scroll delta exceeds threshold to avoid micro-movements
          if (Math.abs(deltaY) > 8) {
            if (deltaY > 0 && currentScrollY > 70) {
              // Scrolling down: auto-hide bars
              setIsScrolledDown(true);
            } else if (deltaY < 0) {
              // Scrolling up: reveal bars
              setIsScrolledDown(false);
            }
            lastScrollY = currentScrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll state whenever route, day, or reading mode changes
  useEffect(() => {
    setIsScrolledDown(false);
  }, [activeRoute, selectedDayNumber, bibleReadingMode]);

  // Keep navigation visible if study drawer or settings are open
  const isNavHidden = isScrolledDown && !isStudyDrawerOpen && !isSettingsOpen;

  // Dynamic Navbar Title & Subtitle based on Route
  const { navTitle, navSubtitle } = useMemo(() => {
    const percent = Math.round((progress.completedDays.length / 365) * 100);
    switch (activeRoute) {
      case 'BIBLIA':
        if (bibleReadingMode === 'browse-books' && bibleSectionInfo) {
          return {
            navTitle: bibleSectionInfo.title,
            navSubtitle: bibleSectionInfo.subtitle || 'Bíblia Sagrada Completa'
          };
        }
        return {
          navTitle: currentReading.title,
          navSubtitle: `Dia ${selectedDayNumber} de 365 • ${currentReading.periodName}`
        };
      case 'PLANOS':
        return {
          navTitle: progress.planType === 'chronological' ? 'Plano Cronológico' : 'Plano Canônico',
          navSubtitle: `${progress.completedDays.length} de 365 dias lidos (${percent}%)`
        };
      case 'HISTORIA':
        return {
          navTitle: 'História da Igreja & Teologia',
          navSubtitle: 'Eras Patrística à Contemporânea, Credos e Sistemas'
        };
      case 'GLOBAL_CONTEXT':
        return {
          navTitle: 'Mundo & Concílios',
          navSubtitle: 'Sincronismos Mundiais, Segundo Templo e Manuscritos'
        };
      case 'PERFIL':
        return {
          navTitle: userName || 'Perfil & Caderno Teológico',
          navSubtitle: `${progress.streak} dias seguidos • Teologia Sistemática`
        };
      default:
        return {
          navTitle: 'Cronos & Cânon',
          navSubtitle: 'Bíblia Teológica 365'
        };
    }
  }, [activeRoute, bibleReadingMode, bibleSectionInfo, currentReading, selectedDayNumber, progress, userName]);

  return (
    <div className="min-h-screen bg-zinc-950 text-stone-100 flex flex-col font-sans selection:bg-amber-900 selection:text-amber-100">
      
      {/* 1. Header Simplificado (Navbar com Single Source of Truth) */}
      <Navbar
        activeRoute={activeRoute}
        dynamicTitle={navTitle}
        dynamicSubtitle={navSubtitle}
        isFocusMode={isFocusMode}
        onToggleFocusMode={handleToggleFocusMode}
        isStudyDrawerOpen={isStudyDrawerOpen}
        onToggleStudyDrawer={handleToggleStudyDrawer}
        onToggleSettings={handleToggleSettings}
        streak={progress.streak}
        onGoToHome={() => {
          setActiveRoute('BIBLIA');
          setBibleReadingMode('browse-books');
          setIsFocusMode(false);
        }}
        isNavHidden={isNavHidden}
        onNavigateRoute={setActiveRoute}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Área Central de Visualização (pt-14 sm:pt-16 garante que a Navbar fixa não cubra as abas nem o conteúdo) */}
      <main className={`flex-1 ${isFocusMode ? 'pt-2' : 'pt-14 sm:pt-16'} transition-[padding] duration-200`}>
        {activeRoute === 'BIBLIA' && (
          <BibleView
            currentDayReading={currentReading}
            isCompleted={progress.completedDays.includes(selectedDayNumber)}
            isBookmarked={progress.bookmarks.includes(selectedDayNumber)}
            onToggleComplete={handleToggleComplete}
            onToggleBookmark={handleToggleBookmark}
            onPrevDay={handlePrevDay}
            onNextDay={handleNextDay}
            onBackToDashboard={() => setActiveRoute('PLANOS')}
            settings={readerSettings}
            onUpdateSettings={setReaderSettings}
            personalNote={progress.notes[selectedDayNumber] || ''}
            onSaveNote={handleSaveNote}
            isFocusMode={isFocusMode}
            onToggleFocusMode={handleToggleFocusMode}
            isStudyDrawerOpen={isStudyDrawerOpen}
            onToggleStudyDrawer={handleToggleStudyDrawer}
            onCloseStudyDrawer={handleCloseStudyDrawer}
            isSettingsOpen={isSettingsOpen}
            onToggleSettings={handleToggleSettings}
            readingMode={bibleReadingMode}
            onReadingModeChange={setBibleReadingMode}
            onSectionChange={handleSectionChange}
          />
        )}

        {activeRoute === 'PLANOS' && (
          <Suspense fallback={<ViewLoadingSkeleton label="Carregando Planos de Leitura..." />}>
            <PlansView
              activePlan={progress.planType}
              onSelectPlan={handleSelectPlan}
              progress={progress}
              days={currentPlanDays}
              onToggleComplete={handleToggleComplete}
              onSelectDay={(day) => {
                setSelectedDayNumber(day);
                setBibleReadingMode('plan-day');
                setActiveRoute('BIBLIA');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              currentDayNumber={selectedDayNumber}
              onSelectThematicPassage={(passageRef) => {
                setBibleReadingMode('browse-books');
                setActiveRoute('BIBLIA');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </Suspense>
        )}

        {activeRoute === 'HISTORIA' && (
          <Suspense fallback={<ViewLoadingSkeleton label="Carregando História da Igreja e Teologia..." />}>
            <HistoryView
              initialTab={historySubTab}
              targetFigureId={historyTargetFigureId}
              targetTopicId={historyTargetTopicId}
              onNavigateToPassage={(passageRef) => {
                setBibleReadingMode('browse-books');
                setActiveRoute('BIBLIA');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </Suspense>
        )}

        {activeRoute === 'GLOBAL_CONTEXT' && (
          <Suspense fallback={<ViewLoadingSkeleton label="Carregando Contexto Global e Concílios..." />}>
            <GlobalContextView 
              initialTab={globalContextTab}
              initialExpandedId={globalContextTargetId}
              onNavigateToPassage={(passageRef) => {
                setBibleReadingMode('browse-books');
                setActiveRoute('BIBLIA');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </Suspense>
        )}

        {activeRoute === 'PERFIL' && (
          <Suspense fallback={<ViewLoadingSkeleton label="Carregando Perfil e Caderno..." />}>
            <ProfileView
              userName={userName}
              onUpdateUserName={handleUpdateUserName}
              progress={progress}
              settings={readerSettings}
              onUpdateSettings={setReaderSettings}
              reminderSettings={reminderSettings}
              onUpdateReminderSettings={handleUpdateReminderSettings}
              currentDayReading={currentReading}
              onNavigateToFavorite={handleNavigateFavorite}
            />
          </Suspense>
        )}
      </main>

      {/* 3. Barra de Navegação Inferior Flutuante (animada suavemente via CSS translate em Focus Mode e auto-hide no scroll) */}
      <BottomNav
        isFocusMode={isFocusMode}
        isNavHidden={isNavHidden}
        activeRoute={activeRoute}
        onRouteChange={(route) => {
          if (route === 'BIBLIA') {
            setBibleReadingMode('browse-books');
          }
          setActiveRoute(route);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Indicador de Conexão Offline */}
      <OfflineIndicator />

      {/* Modal de Pesquisa Global Omnisearch (Cmd+K / Ctrl+K) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToTarget={handleNavigateSearchTarget}
      />

    </div>
  );
}

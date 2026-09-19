import React, { useState, useEffect, useMemo, useCallback } from 'react';
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
import { BibleView } from './views/BibleView';
import { PlansView } from './views/PlansView';
import { HistoryView } from './views/HistoryView';
import { ProfileView } from './views/ProfileView';

export default function App() {
  const [activeRoute, setActiveRoute] = useState<MainRoute>('BIBLIA');
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress());
  const [readerSettings, setReaderSettings] = useState<ReaderSettings>(loadReaderSettings());
  const [reminderSettings, setReminderSettings] = useState<ReminderSettings>(loadReminderSettings());
  const [userName, setUserName] = useState<string>(loadUserName());

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
      />

      {/* 2. Área Central de Visualização */}
      <main className="flex-1">
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
            isSettingsOpen={isSettingsOpen}
            onToggleSettings={handleToggleSettings}
            readingMode={bibleReadingMode}
            onReadingModeChange={setBibleReadingMode}
            onSectionChange={handleSectionChange}
          />
        )}

        {activeRoute === 'PLANOS' && (
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
          />
        )}

        {activeRoute === 'HISTORIA' && (
          <HistoryView />
        )}

        {activeRoute === 'PERFIL' && (
          <ProfileView
            userName={userName}
            onUpdateUserName={handleUpdateUserName}
            progress={progress}
            settings={readerSettings}
            onUpdateSettings={setReaderSettings}
            reminderSettings={reminderSettings}
            onUpdateReminderSettings={handleUpdateReminderSettings}
            currentDayReading={currentReading}
          />
        )}
      </main>

      {/* 3. Barra de Navegação Inferior Flutuante (animada suavemente via CSS translate em Focus Mode) */}
      <BottomNav
        isFocusMode={isFocusMode}
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

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { PlanType, ReadingTheme, ReaderSettings, ReminderSettings, UserProgress } from './types';
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
import { Dashboard } from './components/Dashboard';
import { Reader } from './components/Reader';
import { BibleReader } from './components/BibleReader';
import { ChronologicalTimelineModal } from './components/ChronologicalTimelineModal';
import { PlanComparisonModal } from './components/PlanComparisonModal';
import { RemindersModal } from './components/RemindersModal';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress());
  const [readerSettings, setReaderSettings] = useState<ReaderSettings>(loadReaderSettings());
  const [reminderSettings, setReminderSettings] = useState<ReminderSettings>(loadReminderSettings());
  const [userName, setUserName] = useState<string>(loadUserName());

  const [currentView, setCurrentView] = useState<'dashboard' | 'reader' | 'bible'>('dashboard');
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(1);

  // Modals
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [isPlanInfoOpen, setIsPlanInfoOpen] = useState(false);
  const [isRemindersOpen, setIsRemindersOpen] = useState(false);

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
    // Apply theme classes to root document
    const root = document.documentElement;
    root.classList.remove('dark', 'sepia-theme');
    if (readerSettings.theme === 'dark') {
      root.classList.add('dark');
    } else if (readerSettings.theme === 'sepia') {
      root.classList.add('sepia-theme');
    }
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

  // Open Reader directly at day
  const handleOpenDay = (day: number) => {
    setSelectedDayNumber(day);
    setCurrentView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const handleThemeChange = (newTheme: ReadingTheme) => {
    setReaderSettings(prev => ({ ...prev, theme: newTheme }));
  };

  const handleSaveReminders = (newSettings: ReminderSettings) => {
    setReminderSettings(newSettings);
    saveReminderSettings(newSettings);
  };

  const handleUpdateUserName = (newName: string) => {
    setUserName(newName);
    saveUserName(newName);
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      
      {/* Top Navigation */}
      <Navbar
        planType={progress.planType}
        onSelectPlan={handleSelectPlan}
        streak={progress.streak}
        completedCount={progress.completedDays.length}
        theme={readerSettings.theme}
        onThemeChange={handleThemeChange}
        onOpenReminders={() => setIsRemindersOpen(true)}
        onOpenPlanInfo={() => setIsPlanInfoOpen(true)}
        onOpenTimeline={() => setIsTimelineOpen(true)}
        currentView={currentView}
        onGoToDashboard={() => setCurrentView('dashboard')}
      />

      {/* Main View Area */}
      <div className="flex-1">
        {currentView === 'dashboard' ? (
          <Dashboard
            planType={progress.planType}
            onSelectPlan={handleSelectPlan}
            days={currentPlanDays}
            progress={progress}
            onToggleComplete={handleToggleComplete}
            onOpenDay={handleOpenDay}
            onOpenTimeline={() => setIsTimelineOpen(true)}
            onOpenPlanInfo={() => setIsPlanInfoOpen(true)}
            onOpenBibleReader={() => setCurrentView('bible')}
            userName={userName}
            onUpdateUserName={handleUpdateUserName}
          />
        ) : currentView === 'reader' ? (
          <Reader
            dayReading={currentReading}
            isCompleted={progress.completedDays.includes(selectedDayNumber)}
            isBookmarked={progress.bookmarks.includes(selectedDayNumber)}
            onToggleComplete={handleToggleComplete}
            onToggleBookmark={handleToggleBookmark}
            onPrevDay={handlePrevDay}
            onNextDay={handleNextDay}
            onBackToDashboard={() => setCurrentView('dashboard')}
            settings={readerSettings}
            onUpdateSettings={setReaderSettings}
            personalNote={progress.notes[selectedDayNumber] || ''}
            onSaveNote={handleSaveNote}
          />
        ) : (
          <div className="pt-4 pb-20">
            <button 
              onClick={() => setCurrentView('dashboard')}
              className="ml-4 mb-4 px-4 py-2 bg-zinc-800 text-zinc-100 rounded-lg hover:bg-zinc-700"
            >
              Voltar ao Painel
            </button>
            <BibleReader />
          </div>
        )}
      </div>

      {/* Modals */}
      <ChronologicalTimelineModal
        isOpen={isTimelineOpen}
        onClose={() => setIsTimelineOpen(false)}
        onSelectDay={handleOpenDay}
        currentDay={selectedDayNumber}
      />

      <PlanComparisonModal
        isOpen={isPlanInfoOpen}
        onClose={() => setIsPlanInfoOpen(false)}
        activePlan={progress.planType}
        onSelectPlan={handleSelectPlan}
      />

      <RemindersModal
        isOpen={isRemindersOpen}
        onClose={() => setIsRemindersOpen(false)}
        settings={reminderSettings}
        onSaveSettings={handleSaveReminders}
        todayReading={currentReading}
      />

      {/* Subtle Footer */}
      <footer className="border-t border-stone-200 dark:border-zinc-800 py-6 px-4 text-center text-xs text-stone-500 dark:text-stone-400 bg-white/50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-serif">
            <strong>Cronos & Cânon</strong> • Leitura Bíblica em 365 Dias (Tradução João Ferreira de Almeida)
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlanInfoOpen(true)}
              className="hover:underline text-amber-800 dark:text-amber-400 font-medium"
            >
              Sobre os Planos
            </button>
            <span>•</span>
            <button
              onClick={() => setIsTimelineOpen(true)}
              className="hover:underline text-amber-800 dark:text-amber-400 font-medium"
            >
              Linha do Tempo
            </button>
            <span>•</span>
            <button
              onClick={() => setIsRemindersOpen(true)}
              className="hover:underline text-amber-800 dark:text-amber-400 font-medium"
            >
              Lembretes
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

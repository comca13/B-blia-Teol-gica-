import React, { useState } from 'react';
import { DayReading, ReaderSettings, UserProgress } from '../types';
import { Reader } from '../components/Reader';
import { BibleReader } from '../components/BibleReader';
import { BookOpen, Calendar, ChevronRight, Layers } from 'lucide-react';

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
  readingMode: 'plan-day' | 'browse-books';
  onReadingModeChange: (mode: 'plan-day' | 'browse-books') => void;
  onSectionChange?: (title: string, subtitle?: string) => void;
  isSettingsOpen?: boolean;
  onToggleSettings?: () => void;
}

export const BibleView: React.FC<BibleViewProps> = ({
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
  readingMode,
  onReadingModeChange,
  onSectionChange,
  isSettingsOpen,
  onToggleSettings
}) => {
  const [initialBook, setInitialBook] = useState<number>(1);
  const [initialChapter, setInitialChapter] = useState<number>(1);

  const handleOpenBibleAt = (bookNumber: number, chapter: number) => {
    setInitialBook(bookNumber);
    setInitialChapter(chapter);
    onReadingModeChange('browse-books');
  };

  return (
    <div className="w-full">
      {/* Mode Switcher Banner (hidden in Focus Mode) */}
      {!isFocusMode && (
        <div className="max-w-4xl mx-auto px-3 sm:px-6 pt-3 sm:pt-4">
          <div className="flex items-center justify-between bg-zinc-900/60 border border-zinc-800/80 p-1.5 rounded-2xl">
            <button
              type="button"
              onClick={() => onReadingModeChange('browse-books')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                readingMode === 'browse-books'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-stone-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Bíblia Completa (66 Livros)</span>
            </button>

            <button
              type="button"
              onClick={() => onReadingModeChange('plan-day')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                readingMode === 'plan-day'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-stone-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Leitura do Dia {currentDayReading.day}</span>
            </button>
          </div>
        </div>
      )}

      {/* Content Rendering */}
      {readingMode === 'plan-day' ? (
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
          isSettingsOpen={isSettingsOpen}
          onToggleSettings={onToggleSettings}
        />
      ) : (
        <div className="pt-2">
          <BibleReader
            initialBookNumber={initialBook}
            initialChapter={initialChapter}
            onBackToDashboard={() => onReadingModeChange('plan-day')}
            onSectionChange={onSectionChange}
            isFocusMode={isFocusMode}
            onToggleFocusMode={onToggleFocusMode}
          />
        </div>
      )}
    </div>
  );
};

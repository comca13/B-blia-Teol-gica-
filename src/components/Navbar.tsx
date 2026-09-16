import React from 'react';
import { PlanType, ReadingTheme } from '../types';
import { 
  BookOpen, 
  Compass, 
  Flame, 
  Sun, 
  Moon, 
  Coffee, 
  Bell, 
  Info,
  Calendar,
  Layers
} from 'lucide-react';

interface NavbarProps {
  planType: PlanType;
  onSelectPlan: (plan: PlanType) => void;
  streak: number;
  completedCount: number;
  theme: ReadingTheme;
  onThemeChange: (theme: ReadingTheme) => void;
  onOpenReminders: () => void;
  onOpenPlanInfo: () => void;
  onOpenTimeline: () => void;
  currentView: 'dashboard' | 'reader';
  onGoToDashboard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  planType,
  onSelectPlan,
  streak,
  completedCount,
  theme,
  onThemeChange,
  onOpenReminders,
  onOpenPlanInfo,
  onOpenTimeline,
  currentView,
  onGoToDashboard
}) => {
  const percent = Math.round((completedCount / 365) * 100);

  return (
    <header className="sticky top-0 z-40 w-full border-b transition-colors backdrop-blur-md bg-white/95 dark:bg-zinc-900/95 border-stone-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-1.5 sm:gap-2">
        {/* Brand & Logo */}
        <div 
          className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0 min-w-0" 
          onClick={onGoToDashboard}
          title="Ir para o Painel Principal"
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-700 dark:bg-amber-600 flex items-center justify-center text-white shadow-xs shrink-0">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="min-w-0">
            <h1 className="font-serif text-base sm:text-xl font-bold tracking-tight text-stone-900 dark:text-stone-100 truncate">
              Cronos & Cânon
            </h1>
            <p className="text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400 font-sans hidden sm:block truncate">
              Leitura Bíblica Anual em 365 Dias
            </p>
          </div>
        </div>

        {/* Plan Switcher Pills (Desktop view only - on mobile it moves to secondary full-width bar) */}
        <div className="hidden md:flex items-center bg-stone-100 dark:bg-zinc-800 p-1 rounded-xl text-xs font-medium border border-stone-200 dark:border-zinc-700 shrink-0">
          <button
            type="button"
            onClick={() => onSelectPlan('chronological')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              planType === 'chronological'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
            }`}
            title="Lê os livros na ordem que os fatos aconteceram (Salmos na vida de Davi, profetas nos Reis)"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Histórico-Cronológico</span>
            <span className="px-1.5 py-0.2 text-[9px] uppercase font-bold bg-amber-950/40 rounded">Destaque</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectPlan('canonical')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              planType === 'canonical'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
            }`}
            title="Ordem tradicional das Bíblias (Gênesis ao Apocalipse)"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Canônico</span>
          </button>
        </div>

        {/* Right Actions: Streak, Reminders, Timeline, Theme */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Timeline Modal Trigger (Desktop/Tablet only) */}
          <button
            type="button"
            onClick={onOpenTimeline}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-zinc-800 border border-stone-200 dark:border-zinc-700 transition-colors"
            title="Visualizar a Linha do Tempo das Eras Bíblicas"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden lg:inline">Linha do Tempo</span>
          </button>

          {/* Streak indicator */}
          <div 
            className="flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg text-[11px] sm:text-xs font-semibold text-amber-800 dark:text-amber-300 shrink-0"
            title={`${streak} dias seguidos de constância`}
          >
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse shrink-0" />
            <span>{streak}d</span>
          </div>

          {/* Progress pill (desktop only) */}
          <div 
            className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 bg-stone-100 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700 rounded-lg text-xs font-medium text-stone-700 dark:text-stone-300 cursor-pointer"
            onClick={onGoToDashboard}
            title={`${completedCount} de 365 dias lidos (${percent}%)`}
          >
            <span className="text-amber-700 dark:text-amber-400 font-bold">{percent}%</span>
            <span className="text-stone-400 dark:text-stone-500">({completedCount}/365)</span>
          </div>

          {/* Reminders button */}
          <button
            type="button"
            onClick={onOpenReminders}
            className="p-1.5 sm:p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
            title="Lembretes diários e notificações"
          >
            <Bell className="w-4 h-4" />
          </button>

          {/* Plan Info button */}
          <button
            type="button"
            onClick={onOpenPlanInfo}
            className="p-1.5 sm:p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
            title="Comparativo dos Planos"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Theme Switcher */}
          <div className="flex items-center border border-stone-200 dark:border-zinc-700 rounded-lg p-0.5 bg-stone-50 dark:bg-zinc-800/80 shrink-0">
            <button
              type="button"
              onClick={() => onThemeChange('light')}
              className={`p-1 sm:p-1.5 rounded-md transition-colors ${
                theme === 'light'
                  ? 'bg-white dark:bg-zinc-700 text-amber-700 shadow-xs font-bold'
                  : 'text-stone-500 hover:text-stone-900 dark:text-stone-400'
              }`}
              title="Modo Claro"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onThemeChange('sepia')}
              className={`p-1 sm:p-1.5 rounded-md transition-colors ${
                theme === 'sepia'
                  ? 'bg-[#EADDC9] text-amber-950 shadow-xs font-bold'
                  : 'text-stone-500 hover:text-stone-900 dark:text-stone-400'
              }`}
              title="Modo Sépia (Pergaminho)"
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onThemeChange('dark')}
              className={`p-1 sm:p-1.5 rounded-md transition-colors ${
                theme === 'dark'
                  ? 'bg-zinc-700 text-stone-100 shadow-xs font-bold'
                  : 'text-stone-500 hover:text-stone-900 dark:text-stone-400'
              }`}
              title="Modo Escuro (OLED)"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Plan Switcher for Mobile Devices (Only on Dashboard view) */}
      {currentView === 'dashboard' && (
        <div className="md:hidden px-3 py-1.5 border-t border-stone-200 dark:border-zinc-800 bg-stone-50/90 dark:bg-zinc-900/90">
          <div className="grid grid-cols-2 gap-1 bg-stone-200/60 dark:bg-zinc-800/90 p-1 rounded-xl text-xs font-medium border border-stone-200/80 dark:border-zinc-700">
            <button
              type="button"
              onClick={() => onSelectPlan('chronological')}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs transition-all ${
                planType === 'chronological'
                  ? 'bg-amber-800 text-white shadow-xs font-bold'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Cronológico</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectPlan('canonical')}
              className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs transition-all ${
                planType === 'canonical'
                  ? 'bg-amber-800 text-white shadow-xs font-bold'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Canônico</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

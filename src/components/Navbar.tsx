import React from 'react';
import { BookOpen, Flame, Eye, EyeOff, Layers, Settings2 } from 'lucide-react';
import { MainRoute } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  activeRoute: MainRoute;
  dynamicTitle: string;
  dynamicSubtitle?: string;
  isFocusMode?: boolean;
  onToggleFocusMode?: () => void;
  isStudyDrawerOpen?: boolean;
  onToggleStudyDrawer?: () => void;
  isSettingsOpen?: boolean;
  onToggleSettings?: () => void;
  streak: number;
  onGoToHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeRoute,
  dynamicTitle,
  dynamicSubtitle,
  isFocusMode = false,
  onToggleFocusMode,
  isStudyDrawerOpen = false,
  onToggleStudyDrawer,
  isSettingsOpen = false,
  onToggleSettings,
  streak,
  onGoToHome
}) => {
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-30 w-full border-b transition-transform duration-300 ease-in-out backdrop-blur-md bg-zinc-950/90 border-zinc-800/80 ${
        isFocusMode ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
        
        {/* Esquerda: Logo da Bíblia Teológica */}
        <div 
          className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0"
          onClick={onGoToHome}
          title="Ir para o início"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs shrink-0">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-sm sm:text-base font-bold text-stone-100 tracking-tight leading-none">
              Bíblia Teológica
            </h1>
            <span className="text-[10px] text-amber-500/90 font-medium">
              Cronos & Cânon 365
            </span>
          </div>
        </div>

        {/* Centro: Título Dinâmico baseado na View Ativa */}
        <div className="flex-1 text-center px-2 min-w-0">
          <h2 className="font-serif text-sm sm:text-base font-bold text-stone-100 truncate">
            {dynamicTitle}
          </h2>
          {dynamicSubtitle && (
            <p className="text-[10px] sm:text-[11px] text-stone-400 truncate">
              {dynamicSubtitle}
            </p>
          )}
        </div>

        {/* Direita: Ações contextuais da tela */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Se estiver na rota BÍBLIA: Botão Modo Foco, Definições e Painel de Estudo */}
          {activeRoute === 'BIBLIA' && onToggleFocusMode && (
            <button
              type="button"
              onClick={onToggleFocusMode}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isFocusMode
                  ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                  : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60'
              }`}
              title={isFocusMode ? 'Desativar Modo Foco' : 'Ativar Modo Foco (Leitura Imersiva)'}
            >
              {isFocusMode ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Modo Foco Ativo</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Modo Foco</span>
                </>
              )}
            </button>
          )}

          {activeRoute === 'BIBLIA' && !isFocusMode && onToggleSettings && (
            <button
              type="button"
              onClick={onToggleSettings}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isSettingsOpen
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60'
              }`}
              title="Definições de Leitura (Fonte e Tipografia)"
            >
              <Settings2 className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Definições</span>
            </button>
          )}

          {activeRoute === 'BIBLIA' && !isFocusMode && onToggleStudyDrawer && (
            <button
              type="button"
              onClick={onToggleStudyDrawer}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isStudyDrawerOpen
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60'
              }`}
              title="Abrir Gaveta de Estudos Acadêmicos"
            >
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Painel de Estudo</span>
            </button>
          )}

          {/* Botão de Instalar App (PWA) */}
          <PWAInstallButton />

          {/* Indicador de Constância (Streak) */}
          <div 
            className="flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-amber-950/40 border border-amber-800/40 rounded-xl text-[11px] sm:text-xs font-semibold text-amber-300 shrink-0"
            title={`${streak} dias seguidos de leitura bíblica`}
          >
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse shrink-0" />
            <span>{streak}d</span>
          </div>
        </div>

      </div>
    </header>
  );
};

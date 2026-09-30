import React from 'react';
import { BookOpen, Flame, Eye, EyeOff, Layers, Globe2, Search, Sparkles, User, Cloud, RefreshCw } from 'lucide-react';
import { MainRoute } from '../types';
import { PWAInstallButton } from './PWAInstallButton';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  activeRoute: MainRoute;
  dynamicTitle: string;
  dynamicSubtitle?: string;
  isFocusMode?: boolean;
  onToggleFocusMode?: () => void;
  isStudyDrawerOpen?: boolean;
  onToggleStudyDrawer?: () => void;
  streak: number;
  onGoToHome: () => void;
  isNavHidden?: boolean;
  onNavigateRoute?: (route: MainRoute) => void;
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeRoute,
  dynamicTitle,
  dynamicSubtitle,
  isFocusMode = false,
  onToggleFocusMode,
  isStudyDrawerOpen = false,
  onToggleStudyDrawer,
  streak,
  onGoToHome,
  isNavHidden = false,
  onNavigateRoute,
  onOpenSearch
}) => {
  const isHidden = isFocusMode || isNavHidden;
  const { user, signInWithGoogle, syncState } = useAuth();

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-30 w-full border-b transition-transform duration-300 ease-in-out backdrop-blur-md bg-zinc-950/90 border-zinc-800/80 shadow-xs ${
        isHidden ? '-translate-y-full pointer-events-none' : 'translate-y-0'
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

          {/* Botão de Pesquisa Global (Omnisearch / Cmd+K) */}
          {onOpenSearch && !isFocusMode && activeRoute !== 'APRESENTACAO' && (
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 transition-all shadow-xs cursor-pointer"
              title="Pesquisa Global Teológica (Cmd+K / Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">Buscar</span>
              <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.2 bg-zinc-800 text-[10px] font-mono text-zinc-400 rounded border border-zinc-700">
                ⌘K
              </kbd>
            </button>
          )}

          {/* Botão de Mundo & Concílios (Contexto Histórico Global) */}
          {onNavigateRoute && !isFocusMode && activeRoute !== 'APRESENTACAO' && (
            <button
              type="button"
              onClick={() => onNavigateRoute(activeRoute === 'GLOBAL_CONTEXT' ? 'BIBLIA' : 'GLOBAL_CONTEXT')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeRoute === 'GLOBAL_CONTEXT'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60'
              }`}
              title="Contexto Histórico Global, Segundo Templo e Concílios"
            >
              <Globe2 className={`w-3.5 h-3.5 ${activeRoute === 'GLOBAL_CONTEXT' ? 'text-white' : 'text-indigo-400'}`} />
              <span className="hidden sm:inline">Mundo & Concílios</span>
            </button>
          )}

          {/* Botão de Instalar App (PWA) */}
          <PWAInstallButton />

          {/* Indicador de Constância (Streak) */}
          {activeRoute !== 'APRESENTACAO' && (
            <div 
              className="flex items-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-amber-950/40 border border-amber-800/40 rounded-xl text-[11px] sm:text-xs font-semibold text-amber-300 shrink-0"
              title={`${streak} dias seguidos de leitura bíblica`}
            >
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse shrink-0" />
              <span>{streak}d</span>
            </div>
          )}

          {/* Botão de Conectar Google / Perfil Sincronizado */}
          {!isFocusMode && (
            user ? (
              <button
                type="button"
                onClick={() => onNavigateRoute ? onNavigateRoute('PERFIL') : undefined}
                className="relative flex items-center gap-1.5 p-1 sm:px-2 sm:py-1 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-stone-200 border border-zinc-700/60 transition-all cursor-pointer shrink-0"
                title={`${user.displayName || user.email} (Conectado via Google • Sincronizado)`}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden bg-amber-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || 'Usuário'} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <User className="w-3.5 h-3.5" />
                  )}
                </div>
                <span className="hidden xl:inline text-xs font-medium max-w-[85px] truncate">
                  {user.displayName?.split(' ')[0] || 'Perfil'}
                </span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-zinc-950" title="Sincronizado na Nuvem" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => signInWithGoogle()}
                disabled={syncState === 'syncing'}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs border border-amber-500/40 transition-all shadow-xs cursor-pointer disabled:opacity-50 shrink-0"
                title="Conectar Conta do Google para salvar dados na nuvem"
              >
                {syncState === 'syncing' ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#ffffff" d="M12 5c1.54 0 2.89.55 3.96 1.45l2.97-2.97C17.06 1.77 14.7 1 12 1 7.42 1 3.53 3.61 1.63 7.41l3.64 2.82C6.15 7.23 8.84 5 12 5z"/>
                    <path fill="#ffffff" d="M23.49 12.28c0-.79-.07-1.54-.19-2.28H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.65 2.84c2.14-1.97 3.37-4.88 3.37-8.65z"/>
                    <path fill="#ffffff" d="M5.27 14.77c-.24-.71-.38-1.47-.38-2.27s.14-1.56.38-2.27L1.63 7.41C.59 9.48 0 11.67 0 14s.59 4.52 1.63 6.59l3.64-2.82z"/>
                    <path fill="#ffffff" d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.65-2.84c-1.07.72-2.45 1.15-4.28 1.15-3.16 0-5.85-2.23-6.73-5.23L1.63 16.59C3.53 20.39 7.42 23 12 23z"/>
                  </svg>
                )}
                <span className="hidden sm:inline">Google</span>
              </button>
            )
          )}
        </div>

      </div>
    </header>
  );
};

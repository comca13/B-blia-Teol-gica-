import React, { useState, useEffect } from 'react';
import { X, Map, Book, BookOpen, Scale, Sparkles } from 'lucide-react';

interface StudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  contextHistoryContent: React.ReactNode;
  archaeologyCultureContent: React.ReactNode;
  linguisticsTextContent: React.ReactNode;
  theologyEchoesContent: React.ReactNode;
}

export const StudyDrawer: React.FC<StudyDrawerProps> = ({
  isOpen,
  onClose,
  contextHistoryContent,
  archaeologyCultureContent,
  linguisticsTextContent,
  theologyEchoesContent
}) => {
  const [activeTab, setActiveTab] = useState<'context' | 'archaeology' | 'linguistics' | 'theology'>('context');

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

  const tabs = [
    { id: 'context', label: 'Contexto & História', shortLabel: 'Contexto', icon: Map },
    { id: 'archaeology', label: 'Arqueologia & Cultura', shortLabel: 'Arqueologia', icon: Book },
    { id: 'linguistics', label: 'Linguística & Texto', shortLabel: 'Linguística', icon: BookOpen },
    { id: 'theology', label: 'Teologia & Ecos', shortLabel: 'Teologia', icon: Scale },
  ] as const;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with fade-in */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 transition-opacity animate-in fade-in duration-200" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer Container:
          - Mobile (< md): Bottom Sheet sliding from bottom (h-[82vh], rounded-t-3xl, border-t)
          - Desktop (md:): Side Drawer sliding from right (h-full, inset-y-0 right-0, rounded-none, border-l)
      */}
      <aside 
        aria-label="Painel de Estudo Acadêmico"
        className="fixed bottom-0 left-0 w-full h-[82vh] max-h-[85vh] rounded-t-3xl border-t border-zinc-700/80 shadow-2xl z-50 flex flex-col bg-zinc-950 text-stone-100 md:bottom-auto md:top-0 md:inset-y-0 md:right-0 md:left-auto md:w-full md:max-w-lg md:lg:max-w-xl md:h-full md:max-h-none md:rounded-none md:border-t-0 md:border-l md:border-zinc-800 animate-in slide-in-from-bottom-10 md:slide-in-from-right-10 duration-300 ease-out"
      >
        {/* Mobile Drag Handle */}
        <div 
          className="md:hidden flex items-center justify-center pt-3 pb-1 cursor-pointer select-none"
          onClick={onClose}
          title="Deslizar para baixo para fechar"
        >
          <div className="w-12 h-1.5 rounded-full bg-zinc-600 hover:bg-zinc-500 transition-colors" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-zinc-800/80 bg-zinc-900/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm sm:text-base text-stone-100">
                Aparelho de Estudo & Erudição
              </h3>
              <p className="text-[11px] text-zinc-400">
                Aprofundamento histórico, linguístico e teológico
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 sm:p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors"
            title="Fechar painel (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Tabs */}
        <div className="flex border-b border-zinc-800 bg-zinc-900/40 divide-x divide-zinc-800/60">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-1 sm:px-2 flex flex-col items-center gap-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all ${
                  isActive 
                    ? 'text-amber-400 border-b-2 border-amber-500 bg-zinc-850/80 shadow-inner' 
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
              >
                <Icon className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${isActive ? 'text-amber-400 scale-105' : 'text-zinc-400'}`} />
                <span className="truncate w-full text-center">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {activeTab === 'context' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {contextHistoryContent || (
                <p className="text-xs text-zinc-500 text-center py-8">
                  Nenhum contexto histórico adicional registrado para esta passagem.
                </p>
              )}
            </div>
          )}

          {activeTab === 'archaeology' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {archaeologyCultureContent || (
                <p className="text-xs text-zinc-500 text-center py-8">
                  Nenhum artefato arqueológico ou dado cultural específico registrado para o dia.
                </p>
              )}
            </div>
          )}

          {activeTab === 'linguistics' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {linguisticsTextContent || (
                <p className="text-xs text-zinc-500 text-center py-8">
                  Nenhuma chave de léxico ou variante textual registrada para o texto de hoje.
                </p>
              )}
            </div>
          )}

          {activeTab === 'theology' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {theologyEchoesContent || (
                <p className="text-xs text-zinc-500 text-center py-8">
                  Nenhum eco intertextual ou desdobramento de sistema teológico específico para hoje.
                </p>
              )}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

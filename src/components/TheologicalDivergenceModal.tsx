import React, { useEffect } from 'react';
import { X, Scale } from 'lucide-react';
import { TheologicalDivergenceView } from './TheologicalDivergenceView';
import { ComparisonCategory } from '../types';

interface TheologicalDivergenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopicId?: string;
  initialCategory?: ComparisonCategory | 'all';
  onNavigateToPassage?: (reference: string) => void;
}

export const TheologicalDivergenceModal: React.FC<TheologicalDivergenceModalProps> = ({
  isOpen,
  onClose,
  initialTopicId,
  initialCategory = 'all',
  onNavigateToPassage
}) => {
  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Comparador Teológico Tripartite: Catolicismo, Protestantismo e Ortodoxia"
    >
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 border border-zinc-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-zinc-100 ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 bg-zinc-900/95 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-zinc-100">
                  Catolicismo • Protestantismo • Ortodoxia Oriental
                </h3>
                <span className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Panorama Tripartite
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Análise comparativa imparcial com fontes primárias, citações diretas e consensos ecumênicos
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Fechar comparador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          <TheologicalDivergenceView
            initialTopicId={initialTopicId}
            initialCategory={initialCategory}
            onNavigateToPassage={(ref) => {
              onClose();
              onNavigateToPassage?.(ref);
            }}
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between text-xs text-zinc-400 shrink-0">
          <span>Fonte: Concílio de Trento, Catecismo Romano, Confissão de Westminster e Cânones Históricos.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

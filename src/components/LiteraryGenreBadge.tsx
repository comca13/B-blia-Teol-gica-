import React, { useState, useEffect } from 'react';
import { GenreHermeneuticsGuide } from '../types';
import { BookMarked, HelpCircle, X, CheckCircle2, AlertTriangle, BookOpen, Check } from 'lucide-react';

interface LiteraryGenreBadgeProps {
  guide: GenreHermeneuticsGuide;
}

export const LiteraryGenreBadge: React.FC<LiteraryGenreBadgeProps> = ({ guide }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!guide) return null;

  return (
    <>
      {/* Pill Badge Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 border border-amber-600/40 hover:border-amber-500 transition-all duration-150 shadow-xs group cursor-pointer active:scale-95 select-none"
        title="Clique para ver as Diretrizes Hermenêuticas deste gênero literário"
        aria-expanded={isOpen}
      >
        <BookMarked className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
        <span className="font-serif font-bold text-amber-200">{guide.label}</span>
        <HelpCircle className="w-3 h-3 text-amber-400/80" />
      </button>

      {/* Hermeneutical Rules Centered Modal Dialog (Perfect alignment, no edge clipping) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-5 bg-black/75 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="genre-dialog-title"
        >
          <div 
            className="relative w-full max-w-lg max-h-[88vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-amber-500/40 shadow-2xl p-5 sm:p-6 space-y-4 text-zinc-100 ring-1 ring-white/10 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-zinc-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
                    Gênero Literário • Formgeschichte
                  </span>
                  <h3 id="genre-dialog-title" className="font-cinzel text-lg sm:text-xl font-bold text-amber-100 tracking-wide">
                    {guide.label}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-zinc-100 rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Fechar popover hermenêutico"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Theological Description */}
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-serif">
              {guide.description}
            </p>

            {/* Hermeneutical Golden Rule */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>Regra de Ouro Hermenêutica:</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100/90 font-serif leading-relaxed pl-6">
                {guide.hermeneuticalRule}
              </p>
            </div>

            {/* Common Pitfall Warning */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-rose-950/30 border border-rose-500/40 space-y-1.5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-rose-400">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>Erro Frequente / Armadilha a Evitar:</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-100/90 font-serif leading-relaxed pl-6">
                {guide.commonPitfall}
              </p>
            </div>

            {/* Modal Footer with Dismiss button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-amber-300 hover:text-amber-200 border border-zinc-700 font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-xs active:scale-95 flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4 text-amber-400" />
                <span>Entendido / Fechar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

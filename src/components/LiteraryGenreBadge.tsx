import React, { useState, useRef, useEffect } from 'react';
import { GenreHermeneuticsGuide } from '../types';
import { BookMarked, HelpCircle, X, CheckCircle2, AlertTriangle, Sparkles, BookOpen } from 'lucide-react';

interface LiteraryGenreBadgeProps {
  guide: GenreHermeneuticsGuide;
}

export const LiteraryGenreBadge: React.FC<LiteraryGenreBadgeProps> = ({ guide }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!guide) return null;

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      {/* Pill Badge Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-950/40 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 border border-amber-600/30 hover:border-amber-500 hover:bg-amber-900/40 transition-all shadow-xs group"
        title="Clique para ver as Diretrizes Hermenêuticas deste gênero literário"
        aria-expanded={isOpen}
      >
        <BookMarked className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
        <span className="font-serif font-semibold">{guide.label}</span>
        <HelpCircle className="w-3 h-3 text-amber-700/70 dark:text-amber-400/60" />
      </button>

      {/* Hermeneutical Rules Popover */}
      {isOpen && (
        <div className="absolute left-0 mt-2 z-50 w-80 sm:w-96 rounded-2xl bg-stone-900 dark:bg-stone-950 text-stone-100 border border-amber-500/40 shadow-2xl p-4 sm:p-5 space-y-3.5 animate-in fade-in zoom-in-95 duration-150">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-2 border-b border-stone-800 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <BookOpen className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 block font-bold">
                  Gênero Literário • Formgeschichte
                </span>
                <h4 className="font-serif text-sm font-bold text-amber-200">
                  {guide.label}
                </h4>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors"
              aria-label="Fechar popover hermenêutico"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-stone-300 leading-relaxed font-serif">
            {guide.description}
          </p>

          {/* Hermeneutical Golden Rule */}
          <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-600/30 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Regra de Ouro Hermenêutica:</span>
            </div>
            <p className="text-xs text-stone-200 font-serif leading-relaxed">
              {guide.hermeneuticalRule}
            </p>
          </div>

          {/* Common Pitfall Warning */}
          <div className="p-3 rounded-xl bg-red-950/20 border border-red-600/30 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-red-400">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>Erro Frequente / Armadilha a Evitar:</span>
            </div>
            <p className="text-xs text-stone-200 font-serif leading-relaxed">
              {guide.commonPitfall}
            </p>
          </div>

        </div>
      )}
    </div>
  );
};

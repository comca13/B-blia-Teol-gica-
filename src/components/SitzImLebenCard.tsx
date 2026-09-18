import React, { useState } from 'react';
import { SitzImLeben } from '../types';
import { Feather, Users, Flame, BookOpen, ChevronDown, ChevronUp, Scroll, Sparkles } from 'lucide-react';

interface SitzImLebenCardProps {
  sitzImLeben: SitzImLeben;
  defaultExpanded?: boolean;
}

export const SitzImLebenCard: React.FC<SitzImLebenCardProps> = ({
  sitzImLeben,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  if (!sitzImLeben) return null;

  return (
    <div className="bg-stone-900/80 dark:bg-stone-950/70 border border-stone-800 dark:border-stone-800/80 rounded-2xl shadow-md overflow-hidden transition-all duration-200">
      
      {/* Header / Clickable Toggle */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-r from-amber-950/30 via-stone-900/60 to-stone-900/20 border-b border-stone-800 hover:bg-stone-800/40 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
            <Scroll className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-sm sm:text-base font-bold text-amber-200 tracking-wide truncate">
                Sitz im Leben (A Situação Vital & Histórica)
              </h3>
              <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                Ocasião Histórica
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 truncate">
              {sitzImLeben.authorOrTradition} • {sitzImLeben.originalAudience}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-amber-400/80 hidden sm:inline font-sans">
            {isExpanded ? 'Recolher' : 'Expandir'}
          </span>
          <button
            type="button"
            className="p-1 rounded-lg text-stone-400 hover:text-amber-300 transition-colors"
            aria-label={isExpanded ? 'Recolher Sitz im Leben' : 'Expandir Sitz im Leben'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded 4 Pillars Grid */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-3.5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            
            {/* 1. Autor & Tradição */}
            <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-amber-400 font-semibold font-serif">
                <Feather className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Autor & Matriz de Tradição</span>
              </div>
              <p className="text-stone-300 font-serif leading-relaxed">
                {sitzImLeben.authorOrTradition}
              </p>
            </div>

            {/* 2. Destinatários Originais */}
            <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-sky-400 font-semibold font-serif">
                <Users className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Destinatários e Ouvintes Originais</span>
              </div>
              <p className="text-stone-300 font-serif leading-relaxed">
                {sitzImLeben.originalAudience}
              </p>
            </div>

            {/* 3. A Crise / Desafio Imediato */}
            <div className="p-3.5 rounded-xl bg-red-950/15 border border-red-900/30 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-red-400 font-semibold font-serif">
                <Flame className="w-4 h-4 text-red-400 shrink-0" />
                <span>A Crise Vital ou Ocasião Motivadora</span>
              </div>
              <p className="text-stone-300 font-serif leading-relaxed">
                {sitzImLeben.existentialCrisis}
              </p>
            </div>

            {/* 4. Propósito Teológico Central */}
            <div className="p-3.5 rounded-xl bg-emerald-950/15 border border-emerald-900/30 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold font-serif">
                <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Propósito Teológico Central do Trecho</span>
              </div>
              <p className="text-stone-300 font-serif leading-relaxed">
                {sitzImLeben.theologicalTheme}
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

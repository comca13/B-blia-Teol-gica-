import React, { useState } from 'react';
import { OriginalLanguageWord } from '../types';
import { Languages, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react';

interface OriginalLexiconCardProps {
  words: OriginalLanguageWord[];
  defaultExpanded?: boolean;
}

export const OriginalLexiconCard: React.FC<OriginalLexiconCardProps> = ({
  words,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [selectedWordIndex, setSelectedWordIndex] = useState<number>(0);

  if (!words || words.length === 0) return null;

  const currentWord = words[selectedWordIndex] || words[0];
  const isHebrew = currentWord.language === 'HEBRAICO' || currentWord.language === 'ARAMAICO';

  return (
    <div className="bg-stone-900/80 dark:bg-stone-950/70 border border-amber-500/30 rounded-2xl shadow-md overflow-hidden transition-all duration-200">
      
      {/* Header / Clickable Toggle */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-r from-amber-950/30 via-stone-900/60 to-stone-900/20 border-b border-amber-500/20 hover:bg-stone-800/40 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
            <Languages className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-sm sm:text-base font-bold text-amber-200 tracking-wide truncate">
                Chaves Linguísticas & Léxico Original
              </h3>
              <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                {words.length} {words.length === 1 ? 'Termo' : 'Termos'} ({currentWord.language})
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 truncate">
              {currentWord.term} ({currentWord.transliteration}) — {currentWord.literalTranslation}
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
            aria-label={isExpanded ? 'Recolher léxico original' : 'Expandir léxico original'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4">
          
          {/* Tabs if more than one word */}
          {words.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {words.map((w, idx) => (
                <button
                  key={w.id}
                  type="button"
                  onClick={() => setSelectedWordIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all flex items-center gap-1.5 ${
                    selectedWordIndex === idx
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
                  }`}
                >
                  <span className="font-serif font-bold">{w.transliteration}</span>
                  <span className="opacity-70">({w.term})</span>
                </button>
              ))}
            </div>
          )}

          {/* Main Word Focus Panel */}
          <div className="p-4 rounded-2xl bg-stone-950/80 border border-amber-500/20 space-y-4 shadow-inner">
            
            {/* Term Display Banner with RTL/LTR typographic support */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-800">
              <div className="flex items-baseline gap-3">
                <span 
                  className={`text-2xl sm:text-3xl font-serif text-amber-300 font-bold ${
                    isHebrew ? 'tracking-wider' : ''
                  }`}
                  dir={isHebrew ? 'rtl' : 'ltr'}
                >
                  {currentWord.term}
                </span>
                <span className="text-base sm:text-lg font-serif italic text-stone-200">
                  /{currentWord.transliteration}/
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-stone-900 border border-stone-800 text-xs font-mono text-amber-400">
                  {currentWord.language}
                </span>
                {currentWord.strongNumber && (
                  <span className="px-2 py-0.5 rounded-md bg-amber-950/60 border border-amber-800 text-xs font-mono text-amber-300" title="Número de Concordância de Strong">
                    Strong: {currentWord.strongNumber}
                  </span>
                )}
              </div>
            </div>

            {/* Literal Meaning */}
            <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1">
              <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">
                Significado Literal & Etimológico
              </span>
              <p className="text-xs sm:text-sm font-serif text-stone-200 font-semibold">
                "{currentWord.literalTranslation}"
              </p>
            </div>

            {/* Theological Significance */}
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/30 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Impacto Teológico & Hermenêutico (Nuances do Original):</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                {currentWord.theologicalSignificance}
              </p>
            </div>

            {/* Occurrences in Canon Note if present */}
            {currentWord.occurrencesNote && (
              <div className="text-[11px] text-stone-400 font-mono flex items-center gap-1.5 pt-1">
                <BookOpen className="w-3 h-3 text-amber-500 shrink-0" />
                <span>Passagens de Destaque no Cânon: {currentWord.occurrencesNote}</span>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
};

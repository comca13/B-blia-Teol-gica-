import React, { useState } from 'react';
import { TypologyConnection } from '../types';
import { GitCompare, ArrowRight, BookOpen, ChevronDown, ChevronUp, Sparkles, Layers } from 'lucide-react';

interface IntertextualEchoesCardProps {
  typologies: TypologyConnection[];
  defaultExpanded?: boolean;
}

export const IntertextualEchoesCard: React.FC<IntertextualEchoesCardProps> = ({
  typologies,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [selectedTypologyIndex, setSelectedTypologyIndex] = useState<number>(0);

  if (!typologies || typologies.length === 0) return null;

  const currentTypology = typologies[selectedTypologyIndex] || typologies[0];

  return (
    <div className="bg-stone-900/80 dark:bg-stone-950/70 border border-purple-500/30 rounded-2xl shadow-md overflow-hidden transition-all duration-200">
      
      {/* Header / Clickable Toggle */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-r from-purple-950/30 via-stone-900/60 to-stone-900/20 border-b border-purple-500/20 hover:bg-stone-800/40 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 shadow-xs">
            <GitCompare className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-sm sm:text-base font-bold text-purple-200 tracking-wide truncate">
                Tipologia Bíblica & Ecos Intertextuais
              </h3>
              <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 shrink-0">
                Sombra & Cumprimento
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 truncate">
              {currentTypology.typeOldTestament.split('(')[0]} ➔ {currentTypology.antitypeNewTestament.split('(')[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-purple-400/80 hidden sm:inline font-sans">
            {isExpanded ? 'Recolher' : 'Expandir'}
          </span>
          <button
            type="button"
            className="p-1 rounded-lg text-stone-400 hover:text-purple-300 transition-colors"
            aria-label={isExpanded ? 'Recolher tipologia bíblica' : 'Expandir tipologia bíblica'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4">
          
          {/* Multiple Typologies Tabs */}
          {typologies.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {typologies.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedTypologyIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    selectedTypologyIndex === idx
                      ? 'bg-purple-700 text-white shadow-xs'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-stone-700'
                  }`}
                >
                  Conexão {idx + 1}
                </button>
              ))}
            </div>
          )}

          {/* Symmetrical Bridge / Mirror Layout */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center">
            
            {/* Left Column: Old Testament Type / Shadow */}
            <div className="md:col-span-5 p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider">
                    O Tipo • Sombra no Antigo Testamento
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 font-mono">
                    AT
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-amber-200 leading-snug">
                  {currentTypology.typeOldTestament}
                </h4>
              </div>
            </div>

            {/* Central Connector Indicator */}
            <div className="md:col-span-1 flex items-center justify-center py-1 md:py-0">
              <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center shadow-xs">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Right Column: New Testament Antitype / Fulfillment */}
            <div className="md:col-span-5 p-4 rounded-2xl bg-purple-950/25 border border-purple-500/30 space-y-2 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-purple-300 tracking-wider">
                    O Antítipo • Cumprimento em Cristo & NT
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800 font-mono">
                    NT
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-purple-100 leading-snug">
                  {currentTypology.antitypeNewTestament}
                </h4>
              </div>
            </div>

          </div>

          {/* Theological Covenant Bridge */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-purple-950/15 border border-purple-900/40 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>A Ponte Teológica da Revelação Pactual:</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-200 font-serif leading-relaxed">
              {currentTypology.theologicalBridge}
            </p>

            {/* Intertextual Passages Pills */}
            {currentTypology.intertextualCitations && currentTypology.intertextualCitations.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-purple-900/30">
                <span className="text-[11px] text-stone-400 font-sans font-medium mr-1">
                  Ecos no Cânone:
                </span>
                {currentTypology.intertextualCitations.map((ref, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-stone-900 text-[11px] font-mono text-purple-300 border border-purple-900/40"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
};

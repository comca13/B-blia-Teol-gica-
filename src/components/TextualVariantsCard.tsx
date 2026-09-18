import React, { useState } from 'react';
import { TextualVariant } from '../types';
import { Scroll, ChevronDown, ChevronUp, Layers, Scale } from 'lucide-react';
import { TextualCriticismModal } from './TextualCriticismModal';

interface TextualVariantsCardProps {
  variants: TextualVariant[];
  defaultExpanded?: boolean;
}

export const TextualVariantsCard: React.FC<TextualVariantsCardProps> = ({
  variants,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [selectedVariant, setSelectedVariant] = useState<TextualVariant | null>(null);

  if (!variants || variants.length === 0) return null;

  return (
    <div className="bg-stone-900/80 dark:bg-stone-950/70 border border-amber-500/30 rounded-2xl shadow-md overflow-hidden transition-all duration-200">
      {/* Header */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-r from-amber-950/30 via-stone-900/60 to-stone-900/20 border-b border-amber-500/20 hover:bg-stone-800/40 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
            <Scroll className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-sm sm:text-base font-bold text-amber-200 tracking-wide truncate">
                Aparato de Crítica Textual & Variantes de Manuscritos
              </h3>
              <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                {variants.length} {variants.length === 1 ? 'Nota Crítica' : 'Notas Críticas'}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 truncate">
              {variants.map(v => v.verseReference).join(', ')}
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
            aria-label={isExpanded ? 'Recolher críticas textuais' : 'Expandir críticas textuais'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded List */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-3">
          <p className="text-xs text-stone-400 font-sans leading-relaxed">
            Consulte as variantes textuais documentadas nos principais códices (Sinaítico א, Vaticano B, Manuscritos de Qumran e Septuaginta LXX):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {variants.map((variant) => (
              <div
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 hover:border-amber-500/50 hover:bg-stone-800/60 transition-all cursor-pointer space-y-2 group shadow-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif font-bold text-xs text-amber-300 group-hover:text-amber-200">
                    {variant.verseReference}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-900">
                    Ver Análise
                  </span>
                </div>
                <p className="text-stone-300 text-xs font-serif line-clamp-2 leading-relaxed">
                  {variant.scholarlyConsensus}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedVariant && (
        <TextualCriticismModal
          isOpen={!!selectedVariant}
          onClose={() => setSelectedVariant(null)}
          variant={selectedVariant}
        />
      )}
    </div>
  );
};

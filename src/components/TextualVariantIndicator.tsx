import React, { useState } from 'react';
import { TextualVariant } from '../types';
import { FileText, Scroll, HelpCircle } from 'lucide-react';
import { TextualCriticismModal } from './TextualCriticismModal';

interface TextualVariantIndicatorProps {
  variant: TextualVariant;
  compact?: boolean;
}

export const TextualVariantIndicator: React.FC<TextualVariantIndicatorProps> = ({
  variant,
  compact = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (!variant) return null;

  if (compact) {
    return (
      <>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-500/15 hover:bg-amber-500/25 text-amber-400 border border-amber-500/30 transition-all cursor-pointer shadow-2xs select-none"
          title={`Variante Textual em ${variant.verseReference}. Clique para abrir o aparato de crítica textual.`}
          aria-label={`Ver variante textual de ${variant.verseReference}`}
        >
          <Scroll className="w-3 h-3 text-amber-400" />
          <span>[var.]</span>
        </button>

        <TextualCriticismModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          variant={variant}
        />
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-amber-950/30 hover:bg-amber-900/40 text-amber-200 border border-amber-500/40 transition-all shadow-xs group cursor-pointer text-left"
        title={`Aparato Textual: ${variant.verseReference}`}
      >
        <div className="w-5 h-5 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <Scroll className="w-3.5 h-3.5" />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="font-serif font-bold">{variant.verseReference}</span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
            Aparato Crítico
          </span>
        </div>
        <HelpCircle className="w-3 h-3 text-amber-400/60 ml-auto" />
      </button>

      <TextualCriticismModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant={variant}
      />
    </>
  );
};

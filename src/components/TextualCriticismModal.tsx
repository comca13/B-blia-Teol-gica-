import React from 'react';
import { TextualVariant } from '../types';
import { X, Scroll, BookOpen, Layers, CheckCircle2, Languages, Scale } from 'lucide-react';

interface TextualCriticismModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant: TextualVariant | null;
}

export const TextualCriticismModal: React.FC<TextualCriticismModalProps> = ({
  isOpen,
  onClose,
  variant
}) => {
  if (!isOpen || !variant) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="textual-criticism-title"
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-3xl bg-stone-900 dark:bg-stone-950 text-stone-100 border border-amber-500/40 shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-amber-950/40 via-stone-900 to-stone-900/60 border-b border-stone-800 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
              <Scroll className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold">
                  Aparelho de Crítica Textual • Variantes de Manuscritos
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono">
                  NA28 / UBS5
                </span>
              </div>
              <h3 id="textual-criticism-title" className="font-serif text-lg sm:text-xl font-bold text-amber-200">
                {variant.verseReference}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Fechar modal de crítica textual"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed font-sans">
          
          {/* Manuscritos & Tradições Testemunhas */}
          <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Testemunhas Manuscritas & Tradição Textual</span>
            </div>
            <p className="text-stone-300 font-serif leading-relaxed">
              {variant.traditionOrManuscripts}
            </p>
          </div>

          {/* Massorético vs Septuaginta (se existir) */}
          {variant.massoreticVsSeptuagint && (
            <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-800/40 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-serif font-bold text-xs uppercase tracking-wider">
                <Languages className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Texto Massorético (TM) vs Septuaginta (LXX) & Qumran</span>
              </div>
              <p className="text-stone-200 font-serif leading-relaxed">
                {variant.massoreticVsSeptuagint}
              </p>
            </div>
          )}

          {/* Consenso dos Especialistas (NA28 / UBS5) */}
          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-700/40 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-serif font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Consenso Acadêmico da Crítica Textual Contemporânea</span>
            </div>
            <p className="text-stone-200 font-serif leading-relaxed">
              {variant.scholarlyConsensus}
            </p>
          </div>

          {/* Impacto para as Traduções Bíblicas em Português */}
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-700/40 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-xs uppercase tracking-wider">
              <Scale className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Impacto nas Traduções (ARA, ARC, NVI, NAA, BJ)</span>
            </div>
            <p className="text-stone-200 font-serif leading-relaxed">
              {variant.significanceForTranslation}
            </p>
          </div>

          {/* Nota Pastoral Hermenêutica */}
          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 text-[11px] text-stone-400 font-serif leading-relaxed">
            <span className="font-bold text-stone-300">Princípio Fundamental da Crítica Textual: </span>
            Nenhuma variante textual substancial afeta qualquer doutrina cristã essencial (como a divindade de Cristo, a salvação pela graça ou a ressurreição). O aparato textual reflete a transparência e a riqueza da preservação providencial do cânone bíblico.
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-900 border-t border-stone-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
          >
            Fechar Análise
          </button>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { HISTORICAL_PERIODS } from '../data/theologicalPeriods';
import { X, Calendar, Compass, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

interface TimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDay: (day: number) => void;
  currentDay: number;
}

export const ChronologicalTimelineModal: React.FC<TimelineModalProps> = ({
  isOpen,
  onClose,
  onSelectDay,
  currentDay
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-zinc-800 flex items-center justify-between bg-stone-50/70 dark:bg-zinc-800/50">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 truncate">
                Linha do Tempo Cronológica
              </h2>
              <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 truncate">
                Livros, profetas e epístolas na ordem histórica real (365 Dias)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-lg hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          <div className="bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-xl p-3 sm:p-4 text-xs text-amber-900 dark:text-amber-300 leading-relaxed">
            <strong className="font-semibold block mb-1">💡 Por que a Ordem Cronológica é Revolucionária?</strong>
            Na Bíblia tradicional, os profetas (Isaías, Amós, Jeremias) e os poéticos (Salmos, Jó) estão agrupados por estilo literário. 
            No Plano Cronológico, eles são <strong>reintegrados ao momento exato em que viveram</strong>: você lê o Salmo de arrependimento logo após o pecado de Davi com Natã, e lê os profetas enquanto os reis decidem guerras!
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-amber-300 dark:border-amber-800 ml-2.5 sm:ml-4 pl-4 sm:pl-6 space-y-6 sm:space-y-8">
            {HISTORICAL_PERIODS.map((period, idx) => {
              const isCurrent = currentDay >= period.startDay && currentDay <= period.endDay;

              return (
                <div key={period.id} className="relative group">
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-white dark:border-zinc-900 transition-all ${
                      isCurrent 
                        ? 'bg-amber-600 ring-4 ring-amber-300 dark:ring-amber-900/60 scale-125' 
                        : 'bg-stone-400 dark:bg-zinc-600'
                    }`} 
                  />

                  <div className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                    isCurrent 
                      ? 'bg-stone-50 dark:bg-zinc-800/90 border-amber-300 dark:border-amber-700 shadow-xs' 
                      : 'bg-white dark:bg-zinc-850 border-stone-200 dark:border-zinc-800 hover:border-amber-300 dark:hover:border-zinc-700'
                  }`}>
                    <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-2">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span 
                          className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-white tracking-wide"
                          style={{ backgroundColor: period.color }}
                        >
                          Dias {period.startDay} – {period.endDay}
                        </span>
                        <span className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-mono">
                          {period.era}
                        </span>
                      </div>
                      {isCurrent && (
                        <span className="text-[11px] sm:text-xs font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Você está aqui (Dia {currentDay})
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 mb-1">
                      {period.name}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-3">
                      {period.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-stone-100 dark:border-zinc-800 text-xs">
                      <span className="text-stone-500 dark:text-stone-400 font-medium text-[11px] sm:text-xs">
                        Total: {period.endDay - period.startDay + 1} dias de leitura
                      </span>
                      <button
                        onClick={() => {
                          onSelectDay(period.startDay);
                          onClose();
                        }}
                        className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 font-semibold hover:underline text-xs"
                      >
                        <span>Ir para Início da Era (Dia {period.startDay})</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 border-t border-stone-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-850 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-900 dark:bg-stone-200 dark:hover:bg-white text-white dark:text-stone-900 text-xs font-medium rounded-xl transition-colors"
          >
            Fechar Linha do Tempo
          </button>
        </div>

      </div>
    </div>
  );
};

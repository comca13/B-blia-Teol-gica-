import React from 'react';
import { PlanType } from '../types';
import { X, Check, Compass, Layers, Sparkles, BookOpen } from 'lucide-react';

interface PlanComparisonProps {
  isOpen: boolean;
  onClose: () => void;
  activePlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
}

export const PlanComparisonModal: React.FC<PlanComparisonProps> = ({
  isOpen,
  onClose,
  activePlan,
  onSelectPlan,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-zinc-800 flex items-center justify-between bg-stone-50/70 dark:bg-zinc-800/50">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 truncate">
                Comparativo dos Planos
              </h2>
              <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 truncate">
                Escolha a melhor estratégia para seus 365 dias
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

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Chronological Plan Card */}
            <div className={`p-4 sm:p-5 rounded-2xl border-2 flex flex-col justify-between transition-all ${
              activePlan === 'chronological'
                ? 'border-amber-600 bg-amber-50/30 dark:bg-amber-950/20 shadow-xs'
                : 'border-stone-200 dark:border-zinc-800 hover:border-amber-300'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                    O Grande Diferencial
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 mb-1.5">
                  Plano Histórico-Cronológico
                </h3>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  Segue a ordem real dos fatos no tempo, resolvendo o maior desafio de quem se perde na cronologia bíblica.
                </p>

                <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300 mb-5">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Jó no tempo certo:</strong> lido durante a era patriarcal de Gênesis.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Salmos nos momentos de Davi:</strong> o Salmo 34 e 142 na caverna fugindo de Saul; o Salmo 51 após a repreensão de Natã.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Profetas nos Reis:</strong> Amós e Oseias inseridos durante os reinados históricos de Reis e Crônicas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Epístolas em Atos:</strong> as cartas de Paulo lidas nas cidades exatas de suas viagens missionárias.</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelectPlan('chronological');
                  onClose();
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-colors ${
                  activePlan === 'chronological'
                    ? 'bg-amber-700 text-white shadow-xs cursor-default'
                    : 'bg-stone-100 dark:bg-zinc-800 text-stone-800 dark:text-stone-200 hover:bg-amber-600 hover:text-white'
                }`}
              >
                {activePlan === 'chronological' ? 'Plano Ativo no Momento' : 'Mudar para Este Plano'}
              </button>
            </div>

            {/* Canonical Plan Card */}
            <div className={`p-4 sm:p-5 rounded-2xl border-2 flex flex-col justify-between transition-all ${
              activePlan === 'canonical'
                ? 'border-amber-600 bg-amber-50/30 dark:bg-amber-950/20 shadow-xs'
                : 'border-stone-200 dark:border-zinc-800 hover:border-amber-300'
            }`}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-stone-700 dark:bg-zinc-700 text-white flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-stone-300">
                    Estrutura Tradicional
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 mb-1.5">
                  Plano Canônico Balanceado
                </h3>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                  Ideal para quem deseja a sequência canônica impressa tradicional, dividida em porções equilibradas para não se tornar cansativo.
                </p>

                <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300 mb-5">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-stone-600 dark:text-stone-400 shrink-0 mt-0.5" />
                    <span><strong>Familiaridade:</strong> segue a ordem convencional dos 66 livros da Bíblia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-stone-600 dark:text-stone-400 shrink-0 mt-0.5" />
                    <span><strong>Dieta Diária Balanceada:</strong> porções do Antigo Testamento, Salmos e Novo Testamento.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-stone-600 dark:text-stone-400 shrink-0 mt-0.5" />
                    <span><strong>Ritmo constante:</strong> porções para cerca de 15 a 20 minutos diários.</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelectPlan('canonical');
                  onClose();
                }}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-colors ${
                  activePlan === 'canonical'
                    ? 'bg-amber-700 text-white shadow-xs cursor-default'
                    : 'bg-stone-100 dark:bg-zinc-800 text-stone-800 dark:text-stone-200 hover:bg-amber-600 hover:text-white'
                }`}
              >
                {activePlan === 'canonical' ? 'Plano Ativo no Momento' : 'Mudar para Este Plano'}
              </button>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 border-t border-zinc-800 bg-zinc-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-900 dark:bg-stone-200 dark:hover:bg-white text-white dark:text-stone-900 text-xs font-medium rounded-xl transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { THEOLOGICAL_COMPARISONS } from '../data/churchHistoryData';
import { TheologicalSystemComparison } from '../types';
import { Scale, BookOpen, ShieldCheck, HelpCircle, Columns, Eye, ChevronDown, ChevronUp, History, Info } from 'lucide-react';

interface TheologicalSystemsCardProps {
  defaultExpanded?: boolean;
}

export const TheologicalSystemsCard: React.FC<TheologicalSystemsCardProps> = ({
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [activeTopicIndex, setActiveTopicIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'side-by-side' | 'detailed-points'>('side-by-side');
  const [showDortHistory, setShowDortHistory] = useState(false);

  const currentTopic = THEOLOGICAL_COMPARISONS[activeTopicIndex];

  return (
    <div className="rounded-2xl border border-amber-900/30 dark:border-amber-700/30 bg-stone-900/90 dark:bg-zinc-900/90 text-stone-200 overflow-hidden shadow-xl backdrop-blur-xs transition-all">
      {/* Header Banner */}
      <div 
        className="p-4 sm:p-5 bg-gradient-to-r from-amber-950/70 via-stone-900 to-amber-950/60 border-b border-amber-800/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-600/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-amber-400 font-sans">
                Matriz Comparativa Soteriológica
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Sínodo de Dort (1618–1619)
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-serif font-bold text-stone-100 flex items-center gap-2">
              Calvinismo Reformado vs. Arminianismo Clássico
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowDortHistory(!showDortHistory);
            }}
            className="px-2.5 py-1 text-xs rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 flex items-center gap-1.5 transition-colors"
            title="Contexto histórico do Sínodo de Dort"
          >
            <History className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">História do Debate</span>
          </button>

          <button
            type="button"
            className="p-1 rounded-lg text-stone-400 hover:text-stone-200"
            aria-label="Expandir ou recolher"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-5">
          {/* History Collapsible Box */}
          {showDortHistory && (
            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/30 text-xs text-stone-300 space-y-2 leading-relaxed animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider text-[11px]">
                <Info className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Contexto Histórico do Sínodo de Dort (1618–1619)</span>
              </div>
              <p>
                Após a morte do professor holandês <strong>Jacobus Arminius</strong> (1560–1609), seus seguidores (liderados por Jan Uytenbogaert e Simão Episcópio) publicaram em 1610 um documento denominado <em>Remonstrância</em>, contendo <strong>Cinco Artigos Teológicos</strong> sobre a predestinação e a graça.
              </p>
              <p>
                Para avaliar a controvérsia, os Estados Gerais da Holanda convocaram o <strong>Sínodo Internacional de Dort</strong> (Dordrecht), com teólogos holandeses e delegações da Inglaterra, Escócia, Alemanha e Suíça. O sínodo rejeitou os artigos dos Remonstrantes e formulou os <strong>Cânones de Dort</strong> em 5 pontos doutrinários — historicamente sintetizados no acróstico em língua inglesa <strong>TULIP</strong>.
              </p>
              <p className="text-[11px] text-amber-300/80 italic">
                Nota de postura acadêmica: Ambas as correntes derivam do solo comum da Reforma Protestante, afirmam a inerrância bíblica e confessam a Trindade e a salvação pela graça através da fé em Cristo Jesus. O debate reside nos mecanismos misteriosos da aplicação salvífica divina.
              </p>
            </div>
          )}

          {/* Quick Select Buttons for the 5 points */}
          <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-stone-800">
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full no-scrollbar">
              {THEOLOGICAL_COMPARISONS.map((item, idx) => (
                <button
                  key={item.topic}
                  type="button"
                  onClick={() => setActiveTopicIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                    activeTopicIndex === idx
                      ? 'bg-amber-600 text-white border-amber-500 shadow-md'
                      : 'bg-stone-800/80 hover:bg-stone-800 text-stone-300 border-stone-700'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-black/30 flex items-center justify-center text-[10px] font-bold">
                    {item.calvinismAcronym}
                  </span>
                  <span>{item.topic.split('.')[1]?.trim() || item.topic}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1 shrink-0 bg-stone-800 p-1 rounded-lg border border-stone-700">
              <button
                type="button"
                onClick={() => setViewMode('side-by-side')}
                className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                  viewMode === 'side-by-side' ? 'bg-amber-700 text-white' : 'text-stone-400 hover:text-white'
                }`}
                title="Visualização em colunas paralelas"
              >
                <Columns className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Colunas</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('detailed-points')}
                className={`p-1.5 rounded text-xs transition-colors flex items-center gap-1 ${
                  viewMode === 'detailed-points' ? 'bg-amber-700 text-white' : 'text-stone-400 hover:text-white'
                }`}
                title="Visualização integral e aprofundada"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Detalhado</span>
              </button>
            </div>
          </div>

          {/* Active Topic Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
            <h4 className="text-sm sm:text-base font-serif font-bold text-amber-300">
              {currentTopic.topic}
            </h4>
            <span className="text-[11px] text-stone-400 font-sans">
              Ponto {activeTopicIndex + 1} de 5 dos Cânones de Dort & Artigos dos Remonstrantes
            </span>
          </div>

          {/* Comparison Cards Grid */}
          <div className={`grid gap-4 ${viewMode === 'side-by-side' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
            {/* Calvinist View */}
            <div className="rounded-xl border border-blue-900/40 bg-blue-950/20 p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-blue-900/30">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-700 text-white text-xs font-black flex items-center justify-center font-serif shadow-xs">
                      {currentTopic.calvinismAcronym}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-blue-400 font-bold block">
                        Perspetiva Reformada / Calvinista
                      </span>
                      <h5 className="font-bold text-sm sm:text-base text-stone-100 font-serif">
                        {currentTopic.calvinismTitle}
                      </h5>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-900/40 text-blue-300 border border-blue-700/40">
                    Cânones de Dort
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed text-justify">
                  {currentTopic.calvinismView}
                </p>
              </div>

              {currentTopic.calvinismKeyPassages && (
                <div className="pt-3 border-t border-blue-900/30 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    Textos Bíblicos Clave:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentTopic.calvinismKeyPassages.map((ref) => (
                      <span
                        key={ref}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-blue-900/30 text-blue-200 border border-blue-800/40 font-mono"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Arminian View */}
            <div className="rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-4 sm:p-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-3 border-b border-emerald-900/30">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-700 text-white text-xs font-black flex items-center justify-center font-serif shadow-xs">
                      {currentTopic.arminianismArticle?.replace('Artigo', 'Art.').replace('Artigos', 'Arts.') || 'ARM'}
                    </span>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold block">
                        Perspetiva Arminiana Clássica / Wesleyana
                      </span>
                      <h5 className="font-bold text-sm sm:text-base text-stone-100 font-serif">
                        {currentTopic.arminianismTitle}
                      </h5>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-900/40 text-emerald-300 border border-emerald-700/40">
                    Remonstrantes (1610)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed text-justify">
                  {currentTopic.arminianismView}
                </p>
              </div>

              {currentTopic.arminianismKeyPassages && (
                <div className="pt-3 border-t border-emerald-900/30 space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    Textos Bíblicos Clave:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentTopic.arminianismKeyPassages.map((ref) => (
                      <span
                        key={ref}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-emerald-900/30 text-emerald-200 border border-emerald-800/40 font-mono"
                      >
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Context Note at bottom of card */}
          <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800 text-xs text-stone-400 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-stone-200 block">Síntese Hermenêutica:</strong>
              <p className="leading-relaxed">
                {currentTopic.historicalContext}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

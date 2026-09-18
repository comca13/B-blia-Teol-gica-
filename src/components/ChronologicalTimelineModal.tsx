import React, { useState } from 'react';
import { HISTORICAL_PERIODS } from '../data/theologicalPeriods';
import { HistoricalPeriod } from '../types';
import { 
  X, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Crown, 
  BookOpen, 
  Scroll, 
  Layers, 
  Sparkles, 
  Eye, 
  Filter, 
  Landmark, 
  Info,
  Calendar
} from 'lucide-react';
import { SecondTempleBridgeModal } from './SecondTempleBridgeModal';

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
  // Filters for the 3 Tracks
  const [showBiblicalTrack, setShowBiblicalTrack] = useState<boolean>(true);
  const [showEmpiresTrack, setShowEmpiresTrack] = useState<boolean>(true);
  const [showLiteratureTrack, setShowLiteratureTrack] = useState<boolean>(true);

  // Selected period for deep-dive comparative synopsis
  const [selectedPeriodId, setSelectedPeriodId] = useState<string | null>(null);

  // State to open the Second Temple Bridge Modal
  const [isSecondTempleModalOpen, setIsSecondTempleModalOpen] = useState<boolean>(false);

  // View mode: 'parallel-grid' (sincronic 3-track view) vs 'flow' (compact vertical flow)
  const [viewMode, setViewMode] = useState<'parallel-grid' | 'flow'>('parallel-grid');

  if (!isOpen) return null;

  const selectedPeriod = HISTORICAL_PERIODS.find(p => p.id === selectedPeriodId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-stone-900 border border-stone-800 rounded-2xl w-full max-w-6xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden text-stone-100">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between bg-stone-950/70">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-base sm:text-xl font-bold text-stone-100 truncate">
                  Linha do Tempo Cronológica Sincrônica
                </h2>
                <span className="hidden sm:inline text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  3 Trilhas Paralelas
                </span>
              </div>
              <p className="text-xs text-stone-400 truncate">
                Conectando Eventos Bíblicos, Impérios Mundiais e Literatura/Filosofia Contemporânea (365 Dias)
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsSecondTempleModalOpen(true)}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-950/50 hover:bg-amber-900/60 text-amber-300 border border-amber-500/30 transition-colors"
            >
              <Scroll className="w-3.5 h-3.5 text-amber-400" />
              <span>A Ponte do Segundo Templo</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-stone-400 hover:text-stone-200 rounded-lg hover:bg-stone-800 transition-colors"
              aria-label="Fechar Linha do Tempo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Controls & Track Filters Bar */}
        <div className="p-3 sm:px-6 sm:py-3.5 border-b border-stone-800/80 bg-stone-900/90 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          {/* 3-Track Toggles */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-stone-400 font-medium flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Trilhas:</span>
            </span>

            {/* Track 1: Biblical */}
            <button
              type="button"
              onClick={() => setShowBiblicalTrack(!showBiblicalTrack)}
              className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                showBiblicalTrack 
                  ? 'bg-amber-600 text-white shadow-xs' 
                  : 'bg-stone-800 text-stone-400 opacity-60'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>1. Bíblica</span>
            </button>

            {/* Track 2: Empires */}
            <button
              type="button"
              onClick={() => setShowEmpiresTrack(!showEmpiresTrack)}
              className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                showEmpiresTrack 
                  ? 'bg-red-700 text-white shadow-xs' 
                  : 'bg-stone-800 text-stone-400 opacity-60'
              }`}
            >
              <Crown className="w-3 h-3" />
              <span>2. Grandes Impérios</span>
            </button>

            {/* Track 3: Literature & Philosophy */}
            <button
              type="button"
              onClick={() => setShowLiteratureTrack(!showLiteratureTrack)}
              className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-all ${
                showLiteratureTrack 
                  ? 'bg-cyan-700 text-white shadow-xs' 
                  : 'bg-stone-800 text-stone-400 opacity-60'
              }`}
            >
              <Scroll className="w-3 h-3" />
              <span>3. Filosofia & Literatura</span>
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-stone-950 p-1 rounded-xl border border-stone-800">
            <button
              type="button"
              onClick={() => setViewMode('parallel-grid')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                viewMode === 'parallel-grid'
                  ? 'bg-stone-800 text-amber-300 font-semibold shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Visão Sincrônica
            </button>
            <button
              type="button"
              onClick={() => setViewMode('flow')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                viewMode === 'flow'
                  ? 'bg-stone-800 text-amber-300 font-semibold shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Fluxo Contínuo
            </button>
          </div>

        </div>

        {/* Content Body */}
        <div className="p-3 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          
          {/* Pedagogical Note */}
          <div className="bg-stone-950 border border-stone-800 rounded-xl p-3.5 sm:p-4 text-xs text-stone-300 leading-relaxed flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-serif block mb-0.5">
                A Bíblia no Cenário da História Mundial:
              </strong>
              Os profetas e reis bíblicos não viveram no vácuo espiritual. Esta linha do tempo em 3 camadas demonstra exatamente o que acontecia nos impérios mundiais e na literatura dos filósofos no mesmo momento em que as Escrituras eram inspiradas por Deus.
            </div>
          </div>

          {/* Periods List */}
          <div className="space-y-4 sm:space-y-6">
            {HISTORICAL_PERIODS.map((period) => {
              const isCurrent = currentDay >= period.startDay && currentDay <= period.endDay;
              const isExpanded = selectedPeriodId === period.id;

              return (
                <div 
                  key={period.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isCurrent 
                      ? 'bg-stone-800/80 border-amber-500 shadow-md ring-1 ring-amber-500/50' 
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                  }`}
                >
                  {/* Period Header */}
                  <div className="p-3.5 sm:p-4 bg-stone-900/80 border-b border-stone-800/80 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span 
                        className="w-3 h-3 rounded-full shrink-0 shadow-xs"
                        style={{ backgroundColor: period.color }}
                      />
                      <span className="font-serif font-bold text-sm sm:text-base text-stone-100">
                        {period.name}
                      </span>
                      <span className="text-xs font-mono text-amber-400/90">
                        ({period.era})
                      </span>
                      {period.isIntertestamental && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          Ponte do Segundo Templo
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {isCurrent && (
                        <span className="text-xs font-semibold text-amber-400 flex items-center gap-1 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-700">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Dia {currentDay} (Você está aqui)
                        </span>
                      )}

                      <span className="text-[11px] text-stone-400 font-mono hidden sm:inline">
                        Dias {period.startDay} – {period.endDay}
                      </span>

                      <button
                        type="button"
                        onClick={() => setSelectedPeriodId(isExpanded ? null : period.id)}
                        className="px-2.5 py-1 text-xs rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                      >
                        {isExpanded ? 'Ocultar Detalhes' : 'Sinopse & Literatura'}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          onSelectDay(period.startDay);
                          onClose();
                        }}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-white flex items-center gap-1 transition-colors shadow-xs"
                      >
                        <span>Ler (Dia {period.startDay})</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* 3 Parallel Tracks Display */}
                  {viewMode === 'parallel-grid' ? (
                    <div className="p-3 sm:p-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      
                      {/* Track 1: Biblical Track */}
                      {showBiblicalTrack && (
                        <div className="p-3 rounded-xl bg-amber-950/15 border border-amber-500/20 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-amber-400 font-semibold font-serif">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>1. Trilha Bíblica</span>
                          </div>
                          <p className="text-stone-300 leading-relaxed font-serif">
                            {period.biblicalTrackSummary || period.description}
                          </p>
                        </div>
                      )}

                      {/* Track 2: Empires Track */}
                      {showEmpiresTrack && (
                        <div className="p-3 rounded-xl bg-red-950/15 border border-red-500/20 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-red-300 font-semibold font-serif">
                            <Crown className="w-3.5 h-3.5" />
                            <span>2. Grandes Impérios Mundiais</span>
                          </div>
                          <p className="text-stone-300 leading-relaxed font-serif">
                            {period.empiresTrackSummary || period.worldContextSummary}
                          </p>
                          {period.dominantPowers && period.dominantPowers.length > 0 && (
                            <div className="flex flex-wrap gap-1 pt-1">
                              {period.dominantPowers.map((pow, i) => (
                                <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-md bg-stone-900 text-stone-300 border border-stone-800">
                                  {pow}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Track 3: Literature & Philosophy Track */}
                      {showLiteratureTrack && (
                        <div className="p-3 rounded-xl bg-cyan-950/15 border border-cyan-500/20 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-cyan-300 font-semibold font-serif">
                            <Scroll className="w-3.5 h-3.5" />
                            <span>3. Literatura & Filosofia Contemporânea</span>
                          </div>
                          <p className="text-stone-300 leading-relaxed font-serif">
                            {period.literatureTrackSummary || 'Produção de crônicas régias, épicos mitológicos e tratados jurídicos da época.'}
                          </p>
                          {period.contemporaryLiterature && period.contemporaryLiterature.length > 0 && (
                            <div className="pt-1 text-[11px] text-cyan-200/90 font-mono">
                              Obras: {period.contemporaryLiterature.map(l => l.title).join(', ')}
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  ) : (
                    /* Compact Flow View */
                    <div className="p-3 sm:p-4 space-y-2 text-xs">
                      <p className="text-stone-300 font-serif leading-relaxed">
                        {period.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-stone-400">
                        <span>Potências: {period.dominantPowers?.join(' • ')}</span>
                      </div>
                    </div>
                  )}

                  {/* Expanded Comparative Synopsis & Archaeology Deep Dive */}
                  {isExpanded && (
                    <div className="p-3.5 sm:p-5 border-t border-stone-800 bg-stone-950 space-y-4 text-xs animate-in fade-in duration-150">
                      
                      <div className="space-y-1">
                        <h4 className="font-serif font-bold text-amber-300 text-sm flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          <span>Sinopse Histórica Comparada & Cultura Material</span>
                        </h4>
                        <p className="text-stone-300 leading-relaxed">
                          {period.worldContextSummary}
                        </p>
                      </div>

                      {/* Contemporary Literature Breakdown */}
                      {period.contemporaryLiterature && period.contemporaryLiterature.length > 0 && (
                        <div className="space-y-2">
                          <h5 className="text-[11px] uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-1">
                            <Scroll className="w-3.5 h-3.5" />
                            <span>Literatura e Pensamento Contemporâneo:</span>
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {period.contemporaryLiterature.map((lit, idx) => (
                              <div key={idx} className="p-2.5 rounded-xl bg-stone-900 border border-cyan-900/40 space-y-1">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="font-semibold text-cyan-200 font-serif">{lit.title}</span>
                                  <span className="text-[10px] font-mono text-stone-400">{lit.approxDate}</span>
                                </div>
                                <p className="text-[11px] text-stone-300 leading-snug">{lit.summary}</p>
                                <p className="text-[11px] text-amber-300/90 font-serif italic pt-1 border-t border-stone-800">
                                  {lit.biblicalParallel}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Archaeological References and Key Secular Events */}
                      {period.keySecularEvents && period.keySecularEvents.length > 0 && (
                        <div className="space-y-2">
                          <h5 className="text-[11px] uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1">
                            <Landmark className="w-3.5 h-3.5" />
                            <span>Eventos Seculares & Evidências Arqueológicas:</span>
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {period.keySecularEvents.map((evt, idx) => (
                              <div key={idx} className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 space-y-1">
                                <div className="flex items-center justify-between text-xs">
                                  <span className="font-bold text-stone-200">{evt.empire}</span>
                                  <span className="text-[10px] font-mono text-amber-400">{evt.date}</span>
                                </div>
                                <p className="text-[11px] text-stone-300 leading-snug">{evt.event}</p>
                                {evt.archaeologyRef && (
                                  <div className="text-[10px] text-stone-400 flex items-center gap-1 pt-1 border-t border-stone-800">
                                    <Landmark className="w-3 h-3 text-amber-500 shrink-0" />
                                    <span>Artefato: {evt.archaeologyRef}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* If Intertestamental period, link to bridge modal */}
                      {period.isIntertestamental && (
                        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center justify-between gap-2">
                          <div className="space-y-0.5">
                            <span className="text-xs font-bold text-amber-300 block font-serif">
                              Explorar as 5 Sub-Fases da Transição Intertestamentária
                            </span>
                            <span className="text-[11px] text-stone-300 block">
                              Maccabeus, Helenismo, Septuaginta e o nascimento das seitas judaicas.
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setIsSecondTempleModalOpen(true)}
                            className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shrink-0 shadow-xs"
                          >
                            Abrir Guia das 5 Fases
                          </button>
                        </div>
                      )}

                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 border-t border-stone-800 bg-stone-950 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-stone-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Plano de Leitura com Sincronia Histórica Global Ativada</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl transition-colors"
          >
            Fechar Linha do Tempo
          </button>
        </div>

      </div>

      {/* Embedded Second Temple Bridge Modal */}
      <SecondTempleBridgeModal
        isOpen={isSecondTempleModalOpen}
        onClose={() => setIsSecondTempleModalOpen(false)}
        onNavigateToNewTestament={() => {
          onSelectDay(296);
          onClose();
        }}
      />

    </div>
  );
};

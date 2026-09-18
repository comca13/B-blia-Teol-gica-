import React, { useState } from 'react';
import { HISTORICAL_PERIODS } from '../data/theologicalPeriods';
import { IntertestamentalSubPhase } from '../types';
import { 
  X, 
  BookOpen, 
  Crown, 
  Scroll, 
  Flame, 
  ShieldAlert, 
  Sparkles, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

interface SecondTempleBridgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToNewTestament?: () => void;
}

export const SecondTempleBridgeModal: React.FC<SecondTempleBridgeModalProps> = ({
  isOpen,
  onClose,
  onNavigateToNewTestament
}) => {
  const intertestamentalPeriod = HISTORICAL_PERIODS.find(p => p.id === 'intertestamental');
  const subPhases: IntertestamentalSubPhase[] = intertestamentalPeriod?.subPhases || [];

  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const currentPhase = subPhases[activePhaseIndex] || subPhases[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-stone-900 border border-amber-500/40 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-stone-100">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-amber-500/20 flex items-center justify-between bg-gradient-to-r from-amber-950/60 via-stone-900 to-stone-900">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
              <Scroll className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-base sm:text-xl font-bold text-amber-200 truncate">
                  A Ponte do Segundo Templo
                </h2>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  400 Anos Silenciosos
                </span>
              </div>
              <p className="text-xs text-stone-400 truncate">
                O que aconteceu entre Malaquias e o Nascimento de Jesus Cristo (c. 430 a 6 a.C.)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800 transition-colors shrink-0"
            aria-label="Fechar modal da ponte do segundo templo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Introductory Theological Context Banner */}
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-4 text-xs sm:text-sm text-stone-200 space-y-2 leading-relaxed">
            <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>A Providência Divina no "Silêncio Profético"</span>
            </div>
            <p>
              Ao encerrar o Antigo Testamento com o profeta Malaquias, cessa a revelação profética canônica oficial em Israel por quatro séculos. No entanto, a mão soberana de Deus não permaneceu inativa: este período transformou radicalmente a língua, a política e a cultura para preparar a <strong>"plenitude dos tempos"</strong> (Gálatas 4:4), momento exato no qual o Filho de Deus veio ao mundo.
            </p>
          </div>

          {/* 5 Sub-phases Navigation Tabs */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-400">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>As 5 Fases da Transição Intertestamentária:</span>
              </span>
              <span className="text-[11px] font-mono text-amber-400">Fase {activePhaseIndex + 1} de {subPhases.length}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
              {subPhases.map((phase, idx) => (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-2 rounded-xl text-left transition-all border text-xs flex flex-col justify-between min-h-[64px] ${
                    activePhaseIndex === idx
                      ? 'bg-amber-600/25 border-amber-500 text-white shadow-xs'
                      : 'bg-stone-800/60 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                  }`}
                >
                  <span className="text-[10px] font-mono text-amber-400 font-bold block">
                    {idx + 1}. {phase.period.split('(')[0]}
                  </span>
                  <span className="font-serif font-semibold text-[11px] line-clamp-2 leading-tight">
                    {phase.title.replace(/^\d+\.\s*/, '')}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Sub-Phase Focus Card */}
          {currentPhase && (
            <div className="p-4 sm:p-5 rounded-2xl bg-stone-950/80 border border-amber-500/30 space-y-4 shadow-inner">
              
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-amber-200">
                    {currentPhase.title}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono">
                    {currentPhase.period} • Dominador: <span className="text-amber-400">{currentPhase.rulingPower}</span>
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-950 text-amber-300 border border-amber-800">
                  {currentPhase.rulingPower}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed font-serif">
                <p>{currentPhase.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Impacto Teológico & Hermenêutico:</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {currentPhase.theologicalImpact}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Figuras-Chave e Fatos Históricos:</span>
                  </div>
                  <ul className="text-xs text-stone-300 space-y-1">
                    {currentPhase.keyFiguresOrEvents.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* Deep-Dive Architectural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            
            <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-xs sm:text-sm">
                <Scroll className="w-4 h-4" />
                <h4>A Septuaginta (LXX): A Bíblia do Primeiro Século</h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Por volta de 250 a.C. em Alexandria, os rolos do Antigo Testamento foram traduzidos para a língua grega koiné. Foi a Septuaginta que permitiu aos gentios conhecerem os profetas e forneceu aos apóstolos e autores do Novo Testamento a base textual para demonstrar que Jesus é o Messias prometido.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/40 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-serif font-bold text-xs sm:text-sm">
                <Crown className="w-4 h-4" />
                <h4>O Solo Religioso: Fariseus, Saduceus e Sinagogas</h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Sem os eventos intertestamentários, os Evangelhos seriam incompreensíveis: foi a resistência à helenização que gerou os Fariseus; a aliança aristocrática com governantes que originou os Saduceus; e a dispersão que espalhou as Sinagogas por todo o Império Romano, tornando-as o primeiro ponto de pregação do apóstolo Paulo.
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-950 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-stone-400 text-center sm:text-left">
            Totalmente articulado com a cronologia bíblica dos 365 dias.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-xl transition-colors"
            >
              Concluir Leitura Histórica
            </button>
            {onNavigateToNewTestament && (
              <button
                onClick={() => {
                  onNavigateToNewTestament();
                  onClose();
                }}
                className="w-full sm:w-auto px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Ir para os Evangelhos (Dia 296)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

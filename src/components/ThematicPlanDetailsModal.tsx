import React, { useState, useEffect, useCallback } from 'react';
import { ThematicPlan } from '../types';
import { THEMATIC_CATEGORIES_META } from '../data/thematicPlansData';
import { getCategoryIcon } from './ThematicPlanCard';
import { 
  X, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  BookOpen, 
  Compass, 
  Check, 
  RotateCcw,
  Share2
} from 'lucide-react';

interface ThematicPlanDetailsModalProps {
  plan: ThematicPlan | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPassage?: (passageRef: string) => void;
}

export const ThematicPlanDetailsModal: React.FC<ThematicPlanDetailsModalProps> = React.memo(({
  plan,
  isOpen,
  onClose,
  onSelectPassage
}) => {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [copiedDay, setCopiedDay] = useState<number | null>(null);

  // Keyboard accessibility: Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Load completed days from localStorage whenever plan changes
  useEffect(() => {
    if (!plan?.id) {
      setCompletedDays([]);
      return;
    }
    try {
      const stored = localStorage.getItem(`thematic_plan_progress_${plan.id}`);
      if (stored) {
        setCompletedDays(JSON.parse(stored));
      } else {
        setCompletedDays([]);
      }
    } catch {
      setCompletedDays([]);
    }
  }, [plan?.id]);

  // Defensive early return if modal is closed or plan is not available
  if (!isOpen || !plan) return null;

  // Defensive normalization with nullish coalescing
  const readings = plan.readings ?? [];
  const estimatedDays = plan.estimatedDays ?? (readings.length > 0 ? readings.length : 1);
  const planTitle = plan.title ?? 'Jornada Temática';
  const fullDescription = plan.fullDescription ?? '';
  const themeCategory = plan.themeCategory ?? 'CRONOLOGIA_MESSIANICA';

  const meta = THEMATIC_CATEGORIES_META[themeCategory] ?? {
    label: themeCategory,
    badgeColor: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    borderColor: 'border-zinc-700',
    iconName: 'Compass'
  };

  const handleToggleDay = useCallback((day: number) => {
    if (!plan?.id) return;
    setCompletedDays(prev => {
      const isDone = prev.includes(day);
      const newCompleted = isDone 
        ? prev.filter(d => d !== day)
        : [...prev, day].sort((a, b) => a - b);

      try {
        localStorage.setItem(`thematic_plan_progress_${plan.id}`, JSON.stringify(newCompleted));
      } catch {
        // ignore
      }
      return newCompleted;
    });
  }, [plan?.id]);

  const handleResetProgress = useCallback(() => {
    if (!plan?.id) return;
    if (window.confirm(`Deseja reiniciar o progresso da jornada "${planTitle}"?`)) {
      setCompletedDays([]);
      try {
        localStorage.removeItem(`thematic_plan_progress_${plan.id}`);
      } catch {
        // ignore
      }
    }
  }, [plan?.id, planTitle]);

  const handleCopyPassage = useCallback((day: number, ref: string) => {
    navigator.clipboard.writeText(`${planTitle} - Dia ${day}: ${ref}`);
    setCopiedDay(day);
    setTimeout(() => setCopiedDay(null), 2000);
  }, [planTitle]);

  const progressPercent = Math.min(100, Math.round((completedDays.length / estimatedDays) * 100));

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="thematic-plan-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Sticky Header */}
        <div className="p-5 sm:p-6 pb-4 border-b border-zinc-800/90 bg-zinc-900/95 sticky top-0 z-20 flex items-start justify-between gap-3">
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${meta.badgeColor}`}>
                {getCategoryIcon(themeCategory)}
                <span>{meta.label}</span>
              </span>

              <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-700/60">
                <Calendar className="w-3 h-3 text-amber-400" />
                <span>{estimatedDays} Dias</span>
              </span>

              {completedDays.length > 0 && (
                <span className="text-xs font-bold text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded-full">
                  {completedDays.length}/{estimatedDays} concluídos ({progressPercent}%)
                </span>
              )}
            </div>

            <h2 id="thematic-plan-title" className="font-serif text-xl sm:text-2xl font-bold text-stone-100 leading-snug">
              {planTitle}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Progress Bar */}
          <div className="space-y-1.5 bg-zinc-950/50 border border-zinc-800/80 p-3.5 rounded-2xl">
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">Progresso da Jornada</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-amber-400">{progressPercent}%</span>
                {completedDays.length > 0 && (
                  <button
                    type="button"
                    onClick={handleResetProgress}
                    className="text-[11px] text-zinc-500 hover:text-amber-400 flex items-center gap-1 ml-2 transition-colors"
                    title="Reiniciar progresso"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reiniciar</span>
                  </button>
                )}
              </div>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-600 to-amber-400 h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.max(progressPercent, completedDays.length > 0 ? 5 : 0)}%` }}
              />
            </div>
          </div>

          {/* Full Theological Introduction */}
          <div className="rounded-2xl bg-zinc-950/60 border border-zinc-800/80 p-4 sm:p-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Visão Panorâmica da História da Redenção</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              {fullDescription}
            </p>
          </div>

          {/* Vertical Timeline of Readings */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-200 flex items-center gap-2">
                <span>Roteiro de Leitura Diária</span>
                <span className="text-xs font-mono font-normal text-zinc-400">({readings.length} etapas)</span>
              </h3>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-800 space-y-6">
              {readings.map((reading, idx) => {
                const readingDay = reading?.day ?? idx + 1;
                const passageRef = reading?.passageRef ?? '';
                const thematicConnection = reading?.thematicConnection ?? '';
                const isDayCompleted = completedDays.includes(readingDay);

                return (
                  <div key={readingDay} className="relative group">
                    {/* Node Bullet on the timeline */}
                    <button
                      type="button"
                      onClick={() => handleToggleDay(readingDay)}
                      className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${
                        isDayCompleted
                          ? 'bg-amber-600 text-white ring-4 ring-zinc-900 shadow-md'
                          : 'bg-zinc-900 border-2 border-zinc-700 text-zinc-400 hover:border-amber-500 hover:text-white'
                      }`}
                      title={isDayCompleted ? 'Marcar como não lido' : 'Marcar como lido'}
                    >
                      {isDayCompleted ? (
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                      ) : (
                        <span className="text-[10px] sm:text-xs font-bold font-mono">{readingDay}</span>
                      )}
                    </button>

                    {/* Card Content for this Day */}
                    <div 
                      className={`rounded-2xl border transition-all p-4 sm:p-5 space-y-3 ${
                        isDayCompleted
                          ? 'bg-zinc-900/40 border-zinc-800/80'
                          : 'bg-zinc-900/90 border-zinc-800 hover:border-zinc-700 shadow-xs'
                      }`}
                    >
                      {/* Day Header & Passage Ref */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold px-2.5 py-0.5 rounded-md font-mono ${
                            isDayCompleted 
                              ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/40' 
                              : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                          }`}>
                            Dia {readingDay} de {estimatedDays}
                          </span>
                          <span className="text-xs text-zinc-400">
                            {isDayCompleted ? '✓ Concluído' : 'Pendente'}
                          </span>
                        </div>

                        {/* Passage Reference Actions */}
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-xs sm:text-sm font-bold text-amber-200 bg-zinc-950 px-2.5 py-1 rounded-lg border border-zinc-800">
                            {passageRef}
                          </span>

                          <button
                            type="button"
                            onClick={() => handleCopyPassage(readingDay, passageRef)}
                            className="p-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                            title="Copiar referência bíblica"
                          >
                            {copiedDay === readingDay ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                          </button>

                          {onSelectPassage && passageRef && (
                            <button
                              type="button"
                              onClick={() => {
                                onSelectPassage(passageRef);
                                onClose();
                              }}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold shadow-xs transition-colors"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Ler</span>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Thematic Connection: Theological Comment Embedded */}
                      {thematicConnection && (
                        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-950/20 border-t border-r border-b border-amber-800/30 p-3.5 sm:p-4 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>Fio Condutor da Teologia Bíblica</span>
                          </div>
                          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-serif">
                            {thematicConnection}
                          </p>
                        </div>
                      )}

                      {/* Day completion toggle button */}
                      <div className="flex justify-end pt-1">
                        <button
                          type="button"
                          onClick={() => handleToggleDay(readingDay)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                            isDayCompleted
                              ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                              : 'bg-zinc-950 hover:bg-zinc-800 text-amber-400 border border-zinc-800'
                          }`}
                        >
                          {isDayCompleted ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Concluído</span>
                            </>
                          ) : (
                            <>
                              <Circle className="w-3.5 h-3.5 text-zinc-500" />
                              <span>Marcar como lido</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between gap-3">
          <p className="text-xs text-zinc-400">
            {completedDays.length === estimatedDays 
              ? 'Parabéns! Você completou toda esta jornada temática.' 
              : `${Math.max(0, estimatedDays - completedDays.length)} leituras restantes nesta jornada.`}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
});

ThematicPlanDetailsModal.displayName = 'ThematicPlanDetailsModal';

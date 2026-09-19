import React from 'react';
import { ThematicPlan } from '../types';
import { THEMATIC_CATEGORIES_META } from '../data/thematicPlansData';
import { Calendar, ArrowRight, BookOpen, Crown, Sparkles, Scroll, Flame, Shield, Compass } from 'lucide-react';

interface ThematicPlanCardProps {
  plan: ThematicPlan;
  onSelect: (plan: ThematicPlan) => void;
  completedDaysCount?: number;
}

export const getCategoryIcon = (category: string, className = "w-3.5 h-3.5") => {
  switch (category) {
    case 'CRISTOLOGIA':
      return <Crown className={className} />;
    case 'ESCATOlOGIA':
    case 'ESCATOLOGIA':
      return <Sparkles className={className} />;
    case 'PACTO':
      return <Scroll className={className} />;
    case 'SANTIDADE':
      return <Flame className={className} />;
    case 'REINO':
      return <Shield className={className} />;
    default:
      return <Compass className={className} />;
  }
};

export const ThematicPlanCard: React.FC<ThematicPlanCardProps> = ({
  plan,
  onSelect,
  completedDaysCount = 0
}) => {
  const meta = THEMATIC_CATEGORIES_META[plan.themeCategory] || {
    label: plan.themeCategory,
    badgeColor: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    borderColor: 'border-zinc-700',
    iconName: 'Compass'
  };

  const isCompleted = completedDaysCount >= plan.estimatedDays;
  const progressPercent = Math.min(100, Math.round((completedDaysCount / plan.estimatedDays) * 100));

  return (
    <div 
      onClick={() => onSelect(plan)}
      className="group relative flex flex-col justify-between rounded-3xl bg-zinc-900/80 border border-zinc-800/90 hover:border-amber-500/50 p-5 sm:p-6 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 cursor-pointer"
    >
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border tracking-wide ${meta.badgeColor}`}>
            {getCategoryIcon(plan.themeCategory)}
            <span>{meta.label}</span>
          </span>

          <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 bg-zinc-800/70 border border-zinc-700/60 px-2.5 py-0.5 rounded-full">
            <Calendar className="w-3 h-3 text-amber-400" />
            <span>{plan.estimatedDays} Dias</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors leading-snug">
          {plan.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3 font-sans">
          {plan.shortDescription}
        </p>

        {/* Readings sample list */}
        <div className="space-y-1.5 pt-1">
          <div className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
            Trajetória do Fio Bíblico:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {plan.readings.slice(0, 3).map((r, i) => (
              <span 
                key={i} 
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-950/80 text-zinc-400 border border-zinc-800"
              >
                Dia {r.day}: {r.passageRef.split(';')[0]}
              </span>
            ))}
            {plan.readings.length > 3 && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/50 text-zinc-500">
                +{plan.readings.length - 3} passagens
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Progress & Action Footer */}
      <div className="mt-6 pt-4 border-t border-zinc-800/70 flex items-center justify-between gap-3">
        <div>
          {completedDaysCount > 0 ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400">
                {completedDaysCount}/{plan.estimatedDays} lidos
              </span>
              <span className="text-[10px] text-zinc-500">
                ({progressPercent}%)
              </span>
            </div>
          ) : (
            <span className="text-xs text-zinc-500 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
              <span>Plano não iniciado</span>
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(plan);
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-600/90 hover:bg-amber-600 text-white text-xs font-bold transition-all group-hover:translate-x-0.5 shadow-xs"
        >
          <span>{completedDaysCount > 0 ? 'Continuar' : 'Explorar'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

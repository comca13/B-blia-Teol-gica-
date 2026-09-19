import React from 'react';
import { ShieldQuestion } from 'lucide-react';
import { BiblicalDifficulty } from '../types';
import { APOLOGETICS_CATEGORY_META } from '../data/apologeticsData';

interface ApologeticsBadgeProps {
  difficulty: BiblicalDifficulty;
  onClick: (difficulty: BiblicalDifficulty) => void;
  compact?: boolean;
}

export const ApologeticsBadge: React.FC<ApologeticsBadgeProps> = React.memo(({
  difficulty,
  onClick,
  compact = true
}) => {
  const meta = APOLOGETICS_CATEGORY_META[difficulty.category];

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick(difficulty);
      }}
      title={`Apologética & Dificuldade Bíblica: ${difficulty.question}`}
      aria-label={`Esclarecimento apologético: ${difficulty.question}`}
      className={`group relative inline-flex items-center gap-1 rounded-md transition-all duration-200 cursor-pointer select-none focus:outline-hidden focus:ring-1 focus:ring-blue-400 ${
        compact
          ? 'px-1.5 py-0.5 text-[10px] bg-slate-900/90 hover:bg-blue-950 text-blue-300 hover:text-blue-200 border border-blue-500/30 hover:border-blue-400/60 shadow-xs'
          : 'px-2.5 py-1 text-xs bg-slate-900 hover:bg-blue-950 text-blue-200 border border-blue-500/40'
      }`}
    >
      <ShieldQuestion className="w-3 h-3 text-blue-400 group-hover:text-blue-300 shrink-0" />
      <span className="font-sans font-semibold tracking-tight">
        {compact ? 'Dificuldade' : meta.shortLabel}
      </span>
      {/* Subtle indicator dot */}
      <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
    </button>
  );
});

ApologeticsBadge.displayName = 'ApologeticsBadge';

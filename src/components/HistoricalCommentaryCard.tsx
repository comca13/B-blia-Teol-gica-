import React, { useState } from 'react';
import { HistoricalCommentary } from '../types';
import { HISTORICAL_ERA_META } from '../data/historicalCommentaryData';
import { Quote, BookOpen, User, Info, Bookmark, Landmark, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

interface HistoricalCommentaryCardProps {
  commentary: HistoricalCommentary;
  defaultExpanded?: boolean;
}

export const HistoricalCommentaryCard: React.FC<HistoricalCommentaryCardProps> = ({
  commentary,
  defaultExpanded = true
}) => {
  const [showBio, setShowBio] = useState(false);
  const eraMeta = HISTORICAL_ERA_META[commentary.commentator.era] || {
    label: commentary.commentator.era,
    period: '',
    badgeColor: 'bg-zinc-800 text-zinc-300 border-zinc-700',
    borderColor: 'border-zinc-700'
  };

  return (
    <article className="group relative rounded-2xl bg-gradient-to-br from-stone-900/90 via-zinc-900/90 to-zinc-950 border border-amber-900/30 hover:border-amber-700/50 p-5 sm:p-6 transition-all duration-200 shadow-md">
      
      {/* Watermark Quote Icon in background */}
      <div className="absolute right-4 top-4 text-amber-500/10 pointer-events-none group-hover:text-amber-500/15 transition-colors">
        <Quote className="w-16 h-16" />
      </div>

      {/* Top Header: Passage Ref & Theological Focus */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-xs font-bold text-amber-300 bg-amber-950/60 border border-amber-800/50 px-2.5 py-0.5 rounded-md">
            {commentary.passageRef}
          </span>

          <span className="text-[11px] font-semibold text-amber-200/80 bg-zinc-800/80 border border-zinc-700/70 px-2.5 py-0.5 rounded-full flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{commentary.theologicalFocus}</span>
          </span>
        </div>

        {/* Era Badge */}
        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${eraMeta.badgeColor}`}>
          {eraMeta.label}
        </span>
      </div>

      {/* Quote Body with Editorial Styling */}
      <div className="relative z-10 my-4 pl-4 sm:pl-5 border-l-2 border-amber-500/70 space-y-2">
        <Quote className="w-5 h-5 text-amber-400 fill-amber-400/20 mb-1 shrink-0" />
        <p className="font-serif text-sm sm:text-base text-stone-200 leading-relaxed italic select-text">
          "{commentary.quote}"
        </p>
      </div>

      {/* Author & Document Source Details */}
      <div className="relative z-10 pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-stone-100 text-sm">
              {commentary.commentator.name}
            </span>
            <button
              type="button"
              onClick={() => setShowBio(!showBio)}
              className="text-[11px] text-amber-400/80 hover:text-amber-300 flex items-center gap-0.5 underline decoration-dotted transition-colors"
              title="Ver biografia do autor"
            >
              <Info className="w-3 h-3" />
              <span>{showBio ? 'Ocultar bio' : 'Quem foi?'}</span>
            </button>
          </div>

          <p className="text-[11px] text-zinc-400 font-mono flex items-center gap-1.5 truncate">
            <BookOpen className="w-3 h-3 text-zinc-500 shrink-0" />
            <span className="truncate">{commentary.sourceDocument}</span>
            {eraMeta.period && (
              <span className="text-zinc-500 shrink-0">({eraMeta.period})</span>
            )}
          </p>
        </div>
      </div>

      {/* Expandable Mini Bio */}
      {showBio && (
        <div className="relative z-10 mt-3 p-3 rounded-xl bg-zinc-950/80 border border-zinc-800/90 text-xs text-zinc-300 animate-in fade-in duration-150 space-y-1">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-[11px]">
            <User className="w-3.5 h-3.5" />
            <span>Sobre {commentary.commentator.name}</span>
          </div>
          <p className="leading-relaxed text-zinc-400">
            {commentary.commentator.shortBio}
          </p>
        </div>
      )}
    </article>
  );
};

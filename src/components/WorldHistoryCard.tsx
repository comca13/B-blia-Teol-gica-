import React from 'react';
import { Globe, BookOpen, Landmark, Calendar } from 'lucide-react';
import { WorldHistoryContext } from '../types';

interface Props {
  context: WorldHistoryContext;
}

export const WorldHistoryCard: React.FC<Props> = ({ context }) => {
  return (
    <div className="bg-stone-50/50 dark:bg-zinc-900/40 border border-stone-200 dark:border-zinc-800 rounded-2xl p-5 shadow-xs transition-all hover:border-amber-300 dark:hover:border-amber-900/50">
      <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-serif font-bold text-sm mb-3">
        <Globe className="w-4 h-4" />
        <h3>Panorama Histórico Mundial</h3>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-stone-200 dark:bg-zinc-800 text-[10px] uppercase font-bold tracking-wider text-stone-700 dark:text-stone-300">
            {context.dominantEmpire}
          </span>
          <div className="flex items-center gap-1 text-[11px] text-stone-500 font-mono">
            <Calendar className="w-3 h-3" />
            {context.approxDate}
          </div>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-stone-700 dark:text-stone-300 font-serif">
          {context.globalEvent}
        </p>

        <div className="pt-2 border-t border-stone-200/60 dark:border-zinc-800 text-xs">
          <div className="flex items-start gap-2 text-amber-900/80 dark:text-amber-300/80 italic">
            <BookOpen className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <p>{context.biblicalCorrelation}</p>
          </div>
          {context.archaeologicalArtifact && (
            <div className="mt-2 flex items-start gap-2 text-stone-500 dark:text-stone-400">
              <Landmark className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <p>Evidência arqueológica: {context.archaeologicalArtifact}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

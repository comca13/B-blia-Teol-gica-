import React from 'react';
import { Landmark } from 'lucide-react';

interface Props {
  context: string;
}

export const HistoricalContextCard: React.FC<Props> = ({ context }) => {
  return (
    <div className="bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200/50 dark:border-amber-900/40 rounded-2xl p-5 shadow-xs transition-all hover:border-amber-400 dark:hover:border-amber-700/50">
      <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-serif font-bold text-sm mb-3">
        <Landmark className="w-4 h-4" />
        <h3>Panorama Histórico Mundial</h3>
      </div>
      <p className="text-xs sm:text-sm leading-relaxed text-stone-800 dark:text-stone-200 font-serif">
        {context}
      </p>
    </div>
  );
};

import React from 'react';
import { BookOpen } from 'lucide-react';

interface ViewLoadingSkeletonProps {
  label?: string;
}

export const ViewLoadingSkeleton: React.FC<ViewLoadingSkeletonProps> = ({ 
  label = 'Carregando módulo teológico...' 
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[50vh] text-center animate-in fade-in duration-300">
      <div className="relative mb-5 flex items-center justify-center">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center animate-pulse">
          <BookOpen className="w-7 h-7 text-amber-500 animate-pulse" />
        </div>
        <div className="absolute -inset-1 rounded-2xl bg-amber-500/10 blur-sm -z-10" />
      </div>

      <p className="font-serif text-sm font-medium text-stone-300 tracking-wide mb-3">
        {label}
      </p>

      {/* Shimmer skeleton bars */}
      <div className="w-full max-w-md space-y-3 mt-4">
        <div className="h-4 bg-zinc-800/80 rounded-md animate-pulse w-3/4 mx-auto" />
        <div className="h-3 bg-zinc-850 rounded-md animate-pulse w-1/2 mx-auto" />
        <div className="h-20 bg-zinc-900/60 border border-zinc-800/60 rounded-xl animate-pulse mt-4" />
      </div>
    </div>
  );
};

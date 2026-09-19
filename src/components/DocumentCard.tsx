import React from 'react';
import { HistoricalDocument } from '../types';
import { DOCUMENT_CATEGORY_META } from '../data/confessionalDocumentsData';
import { Calendar, ChevronRight, BookOpen, Sparkles, Scroll } from 'lucide-react';

interface DocumentCardProps {
  document: HistoricalDocument;
  onSelect: (document: HistoricalDocument) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = React.memo(({ document, onSelect }) => {
  const categoryMeta = DOCUMENT_CATEGORY_META[document.category];

  return (
    <div
      onClick={() => onSelect(document)}
      className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/70 hover:bg-zinc-900 border border-zinc-800/80 hover:border-amber-500/50 p-5 transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-amber-950/20 cursor-pointer overflow-hidden text-left"
    >
      {/* Decorative subtle ambient glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all pointer-events-none" />

      <div className="space-y-3.5 relative z-10">
        {/* Category & Year Header */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border bg-gradient-to-r ${categoryMeta.color}`}>
            <Scroll className="w-3 h-3" />
            <span>{categoryMeta.label}</span>
          </span>

          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-800/90 text-amber-300 font-mono text-xs border border-zinc-700/60 font-medium">
            <Calendar className="w-3 h-3 text-amber-400" />
            <span>{document.year}</span>
          </div>
        </div>

        {/* Title */}
        <div>
          <h3 className="font-serif text-base sm:text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors leading-snug">
            {document.title}
          </h3>
        </div>

        {/* Historical Context Snippet */}
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
          {document.historicalContext}
        </p>

        {/* Theological Themes Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {document.keyTheologicalThemes.map((theme, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-800/70 border border-zinc-700/50 text-[11px] text-zinc-300 font-medium"
            >
              <Sparkles className="w-2.5 h-2.5 text-amber-400/70" />
              <span>{theme}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 group-hover:text-amber-300 font-semibold transition-colors">
        <span className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Ler Documento Integral</span>
        </span>
        <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-zinc-500 group-hover:text-amber-400" />
      </div>
    </div>
  );
});

DocumentCard.displayName = 'DocumentCard';

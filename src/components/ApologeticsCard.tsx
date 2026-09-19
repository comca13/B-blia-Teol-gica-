import React, { useState } from 'react';
import { 
  ShieldQuestion, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  GitCompare, 
  Scale, 
  Landmark, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { BiblicalDifficulty, ApologeticsCategory } from '../types';
import { APOLOGETICS_CATEGORY_META } from '../data/apologeticsData';

interface ApologeticsCardProps {
  difficulty: BiblicalDifficulty;
  defaultExpanded?: boolean;
  onNavigateToPassage?: (passageRef: string) => void;
  highlighted?: boolean;
}

export const ApologeticsCard: React.FC<ApologeticsCardProps> = React.memo(({
  difficulty,
  defaultExpanded = true,
  onNavigateToPassage,
  highlighted = false
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const meta = APOLOGETICS_CATEGORY_META[difficulty.category] || APOLOGETICS_CATEGORY_META.CONTRADICAO_APARENTE;

  const renderCategoryIcon = (cat: ApologeticsCategory) => {
    switch (cat) {
      case 'CONTRADICAO_APARENTE':
        return <GitCompare className="w-3.5 h-3.5 text-blue-400" />;
      case 'DILEMA_ETICO':
        return <Scale className="w-3.5 h-3.5 text-amber-400" />;
      case 'PRECISAO_HISTORICA':
        return <Landmark className="w-3.5 h-3.5 text-emerald-400" />;
      case 'PROBLEMA_TEXTUAL':
        return <BookOpen className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <ShieldQuestion className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  // Render formatted markdown-like text (bold, paragraphs, numbered lists)
  const renderFormattedResolution = (text: string) => {
    const paragraphs = text.split('\n\n');

    return (
      <div className="space-y-3 text-stone-300 font-serif leading-relaxed text-sm">
        {paragraphs.map((para, idx) => {
          // Check if paragraph starts with a number (e.g. "1. ")
          const isListItem = /^\d+\.\s/.test(para);

          // Simple bold parser
          const parts = para.split(/(\*\*.*?\*\*|\*.*?\*)/g);

          return (
            <p 
              key={idx} 
              className={`${isListItem ? 'pl-3 border-l-2 border-slate-700/60 py-0.5' : ''}`}
            >
              {parts.map((part, pIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return (
                    <strong key={pIdx} className="font-semibold text-stone-100 font-sans">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                if (part.startsWith('*') && part.endsWith('*')) {
                  return (
                    <em key={pIdx} className="italic text-amber-200/90">
                      {part.slice(1, -1)}
                    </em>
                  );
                }
                return part;
              })}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <article 
      id={`apologetics-${difficulty.id}`}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        highlighted 
          ? 'bg-slate-900/90 border-blue-400/80 shadow-xl ring-2 ring-blue-500/30' 
          : 'bg-zinc-900/80 border-zinc-800 hover:border-zinc-700/80'
      }`}
    >
      {/* Header section (Always clickable to expand/collapse) */}
      <div 
        onClick={() => setIsExpanded(prev => !prev)}
        className="p-4 sm:p-5 cursor-pointer select-none space-y-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Category Chip */}
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${meta.badgeBg} ${meta.badgeBorder} ${meta.badgeText}`}>
              {renderCategoryIcon(difficulty.category)}
              <span>{meta.label}</span>
            </span>
          </div>

          {/* Expand/Collapse Chevron */}
          <button
            type="button"
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label={isExpanded ? 'Recolher resolução' : 'Expandir resolução'}
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Question Title */}
        <h3 className="font-serif text-base sm:text-lg font-bold text-stone-100 leading-snug">
          {difficulty.question}
        </h3>

        {/* Passage reference chips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[11px] text-zinc-500 font-sans uppercase tracking-wider font-semibold mr-1">
            Passagens Relacionadas:
          </span>
          {difficulty.passageRefs.map((ref, rIdx) => (
            <button
              key={rIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onNavigateToPassage) {
                  onNavigateToPassage(ref);
                }
              }}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-zinc-800/90 hover:bg-blue-900/60 text-stone-200 hover:text-blue-200 border border-zinc-700/70 hover:border-blue-500/50 text-xs font-mono transition-colors cursor-pointer"
              title={`Navegar para ${ref}`}
            >
              <span>{ref}</span>
              {onNavigateToPassage && <ArrowRight className="w-3 h-3 text-zinc-500 hover:text-blue-300" />}
            </button>
          ))}
        </div>
      </div>

      {/* Expanded Body: Scholarly Resolution */}
      {isExpanded && (
        <div className="px-4 pb-5 sm:px-5 sm:pb-6 space-y-4 pt-1 border-t border-zinc-800/80 animate-in fade-in duration-200">
          
          <div className="bg-zinc-950/60 rounded-xl p-4 sm:p-5 border border-zinc-800/60 space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b border-zinc-800/70">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 font-sans">
                Resolução Exegética & Histórica
              </h4>
            </div>

            {renderFormattedResolution(difficulty.scholarlyResolution)}
          </div>

          {/* Recommended Reading / Academic Sources */}
          {difficulty.recommendedReading && (
            <div className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-stone-300">
              <BookOpen className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-semibold text-blue-300 block font-sans">
                  Bibliografia & Leitura Recomendada para Aprofundamento:
                </span>
                <p className="text-stone-400 font-serif leading-relaxed italic">
                  {difficulty.recommendedReading}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
});

ApologeticsCard.displayName = 'ApologeticsCard';

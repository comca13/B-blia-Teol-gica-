import React, { useState } from 'react';
import { TheologicalComparisonItem, TheologicalVerseLink } from '../types';
import { Scale, Info } from 'lucide-react';
import { TheologicalDivergenceModal } from './TheologicalDivergenceModal';

interface TheologicalDivergenceBadgeProps {
  item: TheologicalComparisonItem;
  link?: TheologicalVerseLink;
  pericopeRange?: string;
  compact?: boolean;
  variant?: 'pill' | 'discrete';
  onNavigateToPassage?: (reference: string) => void;
  onClick?: () => void;
}

export const TheologicalDivergenceBadge: React.FC<TheologicalDivergenceBadgeProps> = React.memo(({
  item,
  link,
  pericopeRange,
  compact = true,
  variant = 'pill',
  onNavigateToPassage,
  onClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    } else {
      setIsOpen(true);
    }
  };

  const refInfo = link?.referenceSnippet || (pericopeRange ? `v. ${pericopeRange}` : '');
  const titleText = `Divergência Teológica: ${item.topic} (Catolicismo, Protestantismo e Ortodoxia)${refInfo ? ` [${refInfo}]` : ''} — Clique para abrir no Painel de Estudo`;

  // Discrete badge (used alongside verse numbers in BibleReader / ScriptureBody)
  if (variant === 'discrete') {
    return (
      <>
        <button
          type="button"
          onClick={handleClick}
          title={titleText}
          aria-label={titleText}
          className="group relative inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-amber-500/15 hover:bg-amber-500/30 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-amber-100 text-[10px] font-sans font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xs select-none focus:outline-hidden focus:ring-1 focus:ring-amber-400"
        >
          <Scale className="w-3 h-3 text-amber-400 group-hover:text-amber-200 shrink-0" />
          <span className="font-semibold tracking-tight">Doutrina</span>
          <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
        </button>

        {!onClick && (
          <TheologicalDivergenceModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            initialTopicId={item.id}
            initialCategory={item.category}
            onNavigateToPassage={onNavigateToPassage}
          />
        )}
      </>
    );
  }

  // Pill badge (used in section headers / chapter headers)
  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 rounded-full transition-all duration-150 cursor-pointer shadow-xs border select-none group active:scale-95 ${
          compact
            ? 'px-2.5 py-0.5 text-[11px] bg-gradient-to-r from-amber-950/60 to-indigo-950/60 hover:from-amber-900/70 hover:to-indigo-900/70 text-amber-200 border-amber-500/40 hover:border-amber-400'
            : 'px-3.5 py-1.5 text-xs bg-gradient-to-r from-amber-950/80 to-indigo-950/80 hover:from-amber-900 hover:to-indigo-900 text-amber-100 border-amber-500/50 hover:border-amber-400 font-semibold'
        }`}
        title={titleText}
      >
        <Scale className="w-3 h-3 text-amber-400 group-hover:scale-110 transition-transform shrink-0" />
        <span className="font-serif font-bold truncate max-w-[200px] sm:max-w-none">
          {compact ? `Divergência: ${item.topic}` : `Divergência Histórica: ${item.topic}`}
        </span>
        <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 font-mono hidden xs:inline">
          Tripartite
        </span>
      </button>

      {!onClick && (
        <TheologicalDivergenceModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          initialTopicId={item.id}
          initialCategory={item.category}
          onNavigateToPassage={onNavigateToPassage}
        />
      )}
    </>
  );
});

TheologicalDivergenceBadge.displayName = 'TheologicalDivergenceBadge';

import React, { useState } from 'react';
import { CulturalContext, CulturalCategory } from '../types';
import { CULTURAL_CATEGORIES_META, culturalContextData } from '../data/culturalContextData';
import { 
  Coins, 
  Landmark, 
  Home, 
  BookMarked, 
  Compass, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  Filter,
  Search
} from 'lucide-react';

interface CulturalContextCardProps {
  context?: CulturalContext;
  contexts?: CulturalContext[];
  title?: string;
  defaultExpanded?: boolean;
  onSelectPassage?: (reference: string) => void;
  className?: string;
}

/**
 * Returns the appropriate Lucide React icon based on the CulturalCategory.
 */
export const getCulturalCategoryIcon = (category: CulturalCategory, className = "w-4 h-4") => {
  switch (category) {
    case 'ECONOMIA_E_MEDIDAS':
      return <Coins className={className} />;
    case 'POLITICA_E_SOCIEDADE':
      return <Landmark className={className} />;
    case 'VIDA_QUOTIDIANA':
      return <Home className={className} />;
    case 'LITERATURA_E_IMAGINARIO':
      return <BookMarked className={className} />;
    default:
      return <Compass className={className} />;
  }
};

/**
 * Single Cultural Context Card with Clean Academic Design and Progressive Disclosure.
 */
export const SingleCulturalContextCard: React.FC<{
  context: CulturalContext;
  defaultExpanded?: boolean;
  onSelectPassage?: (reference: string) => void;
  className?: string;
}> = React.memo(({ context, defaultExpanded = true, onSelectPassage, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const meta = CULTURAL_CATEGORIES_META[context.category] || {
    label: context.category,
    badgeColor: 'bg-zinc-800 text-zinc-300 border-zinc-700'
  };

  return (
    <article 
      className={`rounded-2xl bg-zinc-900/70 border border-zinc-800/90 overflow-hidden transition-all duration-200 hover:border-zinc-700 ${className}`}
    >
      {/* Header: Title + Category Icon + Badge */}
      <div 
        onClick={() => setIsExpanded(prev => !prev)}
        className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer select-none bg-zinc-900/40 hover:bg-zinc-850/60 transition-colors"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsExpanded(prev => !prev);
          }
        }}
        aria-expanded={isExpanded}
      >
        <div className="space-y-2 flex-1">
          {/* Category Badge & References */}
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full border tracking-wide ${meta.badgeColor}`}>
              {getCulturalCategoryIcon(context.category, "w-3.5 h-3.5")}
              <span>{meta.label}</span>
            </span>

            {context.scriptureReferences && context.scriptureReferences.length > 0 && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-800/90 text-zinc-400 border border-zinc-700/60">
                {context.scriptureReferences[0]}
                {context.scriptureReferences.length > 1 && ` +${context.scriptureReferences.length - 1}`}
              </span>
            )}
          </div>

          {/* Title */}
          <h4 className="font-serif font-bold text-base sm:text-lg text-stone-100 flex items-center gap-2">
            {context.title}
          </h4>
        </div>

        {/* Expand / Collapse Button */}
        <div className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors shrink-0 mt-1">
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      {/* Body: Progressive Disclosure */}
      {isExpanded && (
        <div className="p-4 sm:p-5 pt-1 space-y-4 border-t border-zinc-800/70 animate-in fade-in duration-200">
          
          {/* Historiographical Description */}
          <div className="space-y-1.5 pt-2">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-zinc-500" />
              <span>Descrição Historiográfica</span>
            </h5>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              {context.description}
            </p>
          </div>

          {/* Exegetical Relevance (Relevância para a Leitura) */}
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-950/20 border-t border-r border-b border-amber-800/30 p-3.5 sm:p-4 space-y-1.5">
            <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Relevância para a Leitura</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-serif">
              {context.exegeticalRelevance}
            </p>
          </div>

          {/* Scripture References */}
          {context.scriptureReferences && context.scriptureReferences.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-zinc-400 block">
                Passagens-chave correlacionadas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {context.scriptureReferences.map((ref, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectPassage) onSelectPassage(ref);
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-amber-300 hover:text-amber-200 text-xs font-mono border border-zinc-700/80 transition-colors"
                    title={`Examinar referência: ${ref}`}
                  >
                    <span>{ref}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </article>
  );
});

SingleCulturalContextCard.displayName = 'SingleCulturalContextCard';

/**
 * Main CulturalContextCard Component:
 * - If single `context` provided, renders directly.
 * - If `contexts` array provided, renders searchable, filterable catalog.
 */
export const CulturalContextCard: React.FC<CulturalContextCardProps> = React.memo(({
  context,
  contexts,
  title = "Contexto Cultural & Literário da Antiguidade",
  defaultExpanded = true,
  onSelectPassage,
  className = ''
}) => {
  // If a single context is provided directly, render it cleanly
  if (context) {
    return (
      <SingleCulturalContextCard 
        context={context} 
        defaultExpanded={defaultExpanded} 
        onSelectPassage={onSelectPassage}
        className={className}
      />
    );
  }

  // Multi-contexts mode
  const list = (contexts && contexts.length > 0) ? contexts : culturalContextData;
  const [selectedCategory, setSelectedCategory] = useState<CulturalCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredList = list.filter(item => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    if (!matchesCategory) return false;
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.exegeticalRelevance.toLowerCase().includes(query) ||
      item.scriptureReferences.some(ref => ref.toLowerCase().includes(query))
    );
  });

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header bar with Search and Category filters */}
      <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-4 sm:p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Compass className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-stone-100 flex items-center gap-2">
                <span>{title}</span>
                <span className="text-xs font-sans px-2 py-0.5 rounded-full bg-zinc-800 text-amber-300 border border-zinc-700">
                  {filteredList.length}
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                Usos e costumes, economia, direito romano e imaginário do Antigo Oriente Próximo.
              </p>
            </div>
          </div>

          {/* Search input */}
          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar denário, patronato..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-200 placeholder-zinc-500 focus:outline-none focus:border-amber-500/60"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 flex items-center gap-1.5 ${
              selectedCategory === 'ALL'
                ? 'bg-amber-500 text-zinc-950 font-bold shadow-xs'
                : 'bg-zinc-800/80 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Filter className="w-3 h-3" />
            <span>Todos ({list.length})</span>
          </button>

          {(Object.keys(CULTURAL_CATEGORIES_META) as CulturalCategory[]).map(catKey => {
            const meta = CULTURAL_CATEGORIES_META[catKey];
            const isSelected = selectedCategory === catKey;
            const count = list.filter(i => i.category === catKey).length;

            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setSelectedCategory(catKey)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-500 text-zinc-950 font-bold shadow-xs'
                    : 'bg-zinc-800/80 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {getCulturalCategoryIcon(catKey, "w-3 h-3")}
                <span>{meta.shortLabel}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                  isSelected ? 'bg-amber-600 text-amber-100' : 'bg-zinc-700/60 text-zinc-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards List */}
      {filteredList.length === 0 ? (
        <div className="text-center py-8 rounded-xl bg-zinc-950/40 border border-zinc-800 text-zinc-500 text-xs">
          Nenhum contexto cultural encontrado para os critérios selecionados.
        </div>
      ) : (
        <div className="space-y-3">
          {filteredList.map((item, idx) => (
            <SingleCulturalContextCard
              key={item.id}
              context={item}
              defaultExpanded={idx === 0}
              onSelectPassage={onSelectPassage}
            />
          ))}
        </div>
      )}
    </div>
  );
});

CulturalContextCard.displayName = 'CulturalContextCard';

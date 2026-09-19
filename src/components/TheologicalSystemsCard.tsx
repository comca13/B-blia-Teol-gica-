import React, { useState, useMemo, useEffect } from 'react';
import { 
  TheologicalDebate, 
  TheologicalCategory, 
  TheologicalSystem 
} from '../types';
import { 
  THEOLOGICAL_DEBATES, 
  THEOLOGICAL_CATEGORIES_META 
} from '../data/theologicalSystemsData';
import { 
  Scale, 
  Users, 
  History, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  LayoutGrid, 
  ListFilter, 
  BookOpen, 
  Compass, 
  ShieldCheck, 
  Info,
  CheckCircle2,
  Scroll,
  Clock
} from 'lucide-react';

interface TheologicalSystemsCardProps {
  debate?: TheologicalDebate;
  category?: TheologicalCategory;
  defaultExpanded?: boolean;
  showCategoryNav?: boolean;
  onSelectCategory?: (cat: TheologicalCategory) => void;
}

export const TheologicalSystemsCard: React.FC<TheologicalSystemsCardProps> = ({
  debate: externalDebate,
  category: externalCategory,
  defaultExpanded = true,
  showCategoryNav = false,
  onSelectCategory
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [internalCategory, setInternalCategory] = useState<TheologicalCategory>(
    externalCategory || externalDebate?.category || 'SOTERIOLOGIA'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');
  const [selectedSystemId, setSelectedSystemId] = useState<string | null>(null);

  // Sync internalCategory whenever externalCategory or externalDebate.category changes
  useEffect(() => {
    if (externalCategory) {
      setInternalCategory(externalCategory);
    } else if (externalDebate?.category) {
      setInternalCategory(externalDebate.category);
    }
  }, [externalCategory, externalDebate?.category]);

  // Determine active category with priority to explicit props
  const activeCategory = externalCategory || (externalDebate ? externalDebate.category : internalCategory);
  
  const activeDebate = useMemo(() => {
    if (externalDebate && externalDebate.category === activeCategory) {
      return externalDebate;
    }
    const found = THEOLOGICAL_DEBATES.find(d => d.category === activeCategory);
    return found || THEOLOGICAL_DEBATES[0];
  }, [externalDebate, activeCategory]);

  const categoryMeta = THEOLOGICAL_CATEGORIES_META[activeDebate.category] || THEOLOGICAL_CATEGORIES_META.SOTERIOLOGIA;

  // Reset selection and query when active category changes
  useEffect(() => {
    setSelectedSystemId(null);
    setSearchQuery('');
  }, [activeCategory]);

  // Filtered systems within active debate
  const filteredSystems = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeDebate.systems;
    }
    const q = searchQuery.toLowerCase();
    return activeDebate.systems.filter(sys => 
      sys.name.toLowerCase().includes(q) ||
      sys.proponents.some(p => p.toLowerCase().includes(q)) ||
      sys.coreBeliefs.some(b => b.toLowerCase().includes(q)) ||
      sys.historicalContext.toLowerCase().includes(q)
    );
  }, [activeDebate, searchQuery]);

  const handleCategoryChange = (cat: TheologicalCategory) => {
    setInternalCategory(cat);
    onSelectCategory?.(cat);
    setSearchQuery('');
    setSelectedSystemId(null);
  };

  // Determine optimal grid columns based on count
  const getGridColsClass = (count: number) => {
    if (viewMode === 'detailed') return 'grid-cols-1';
    if (count === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    if (count === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4';
    if (count >= 5) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    return 'grid-cols-1 md:grid-cols-2';
  };

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 text-stone-200 overflow-hidden shadow-xl backdrop-blur-xs transition-all">
      
      {/* Header Banner */}
      <div 
        className="p-5 sm:p-6 bg-gradient-to-r from-zinc-900 via-stone-900 to-zinc-950 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-mono font-bold text-amber-400">
                {categoryMeta.name}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-zinc-800 text-stone-300 border border-zinc-700">
                {activeDebate.systems.length} Sistemas Históricos
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-serif font-bold text-stone-100">
              {activeDebate.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            className="p-2 rounded-xl text-zinc-400 hover:text-stone-200 hover:bg-zinc-800 transition-colors"
            aria-label="Expandir ou recolher"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* Category Navigation Pills (if enabled or standalone) */}
          {showCategoryNav && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              {(Object.keys(THEOLOGICAL_CATEGORIES_META) as TheologicalCategory[]).map(catKey => {
                const meta = THEOLOGICAL_CATEGORIES_META[catKey];
                const isCurrent = activeCategory === catKey;
                return (
                  <button
                    key={catKey}
                    type="button"
                    onClick={() => handleCategoryChange(catKey)}
                    className={`py-2 px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                      isCurrent
                        ? 'bg-amber-600 text-white border-amber-500 shadow-sm'
                        : 'bg-zinc-900/90 text-zinc-400 hover:text-stone-200 hover:bg-zinc-800 border-zinc-800'
                    }`}
                  >
                    {meta.shortName}
                  </button>
                );
              })}
            </div>
          )}

          {/* Academic Overview Box */}
          <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 text-xs sm:text-sm text-stone-300 space-y-2 leading-relaxed">
            <div className="flex items-center gap-2 text-amber-400 font-mono font-bold uppercase tracking-wider text-[11px]">
              <Info className="w-4 h-4 shrink-0" />
              <span>Panorama Histórico do Debate</span>
            </div>
            <p className="text-zinc-300">
              {activeDebate.description}
            </p>
          </div>

          {/* Controls Bar: Search & View Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-1 border-b border-zinc-800/80">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar sistema, teólogo ou conceito teológico..."
                className="w-full pl-9 pr-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs sm:text-sm text-stone-100 placeholder-zinc-500 focus:outline-hidden focus:border-amber-500 transition-colors"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 shrink-0 bg-zinc-950 p-1 rounded-xl border border-zinc-800 self-end sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 px-2.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  viewMode === 'grid' ? 'bg-amber-600 text-white shadow-xs' : 'text-zinc-400 hover:text-stone-200'
                }`}
                title="Visualização em grade comparativa lado a lado"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="text-[11px]">Grelha</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('detailed')}
                className={`p-1.5 px-2.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  viewMode === 'detailed' ? 'bg-amber-600 text-white shadow-xs' : 'text-zinc-400 hover:text-stone-200'
                }`}
                title="Visualização em lista detalhada vertical"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span className="text-[11px]">Lista</span>
              </button>
            </div>
          </div>

          {/* Systems Count Indicator */}
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
            <span>
              Exibindo <strong className="text-stone-200">{filteredSystems.length}</strong> de {activeDebate.systems.length} correntes teológicas
            </span>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-amber-400 hover:underline text-[11px]"
              >
                Limpar filtro
              </button>
            )}
          </div>

          {/* Dynamic Comparison Grid */}
          {filteredSystems.length === 0 ? (
            <div className="p-8 rounded-2xl border border-dashed border-zinc-800 text-center text-sm text-zinc-500 font-serif">
              Nenhum sistema teológico corresponde aos termos de pesquisa inseridos.
            </div>
          ) : (
            <div className={`grid gap-4.5 ${getGridColsClass(filteredSystems.length)}`}>
              {filteredSystems.map((system, idx) => {
                const isSelected = selectedSystemId === system.id;
                return (
                  <div
                    key={system.id}
                    onClick={() => setSelectedSystemId(isSelected ? null : system.id)}
                    className={`rounded-2xl border transition-all duration-200 flex flex-col justify-between bg-zinc-950/70 p-4 sm:p-5 hover:border-zinc-700 ${
                      isSelected 
                        ? 'border-amber-500/70 ring-1 ring-amber-500/30 shadow-lg' 
                        : 'border-zinc-800/80 shadow-md'
                    }`}
                  >
                    <div className="space-y-4">
                      
                      {/* System Header */}
                      <div className="pb-3 border-b border-zinc-800/70">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] font-mono font-bold text-amber-400/90 px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/30">
                            #{String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500 uppercase">
                            {categoryMeta.shortName}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-base sm:text-lg text-stone-100 leading-snug">
                          {system.name}
                        </h4>
                      </div>

                      {/* Proponents Section */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-amber-400" />
                          Principais Proponentes & Expoentes:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {system.proponents.map((proponent, pIdx) => (
                            <span 
                              key={pIdx}
                              className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-stone-300 font-sans"
                            >
                              {proponent}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Core Beliefs (Bullet Points) */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          Crenças & Afirmações Nucleares:
                        </span>
                        <ul className="space-y-2 text-xs sm:text-[13px] text-stone-300/90 leading-relaxed font-sans">
                          {system.coreBeliefs.map((belief, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                              <span>{belief}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Historical Context Callout */}
                    <div className="mt-5 pt-3.5 border-t border-zinc-800/70">
                      <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-stone-300 space-y-1">
                        <div className="flex items-center gap-1.5 text-amber-300 font-mono font-semibold text-[10px] uppercase">
                          <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>Gênese & Contexto Histórico:</span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-relaxed">
                          {system.historicalContext}
                        </p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}
    </div>
  );
};

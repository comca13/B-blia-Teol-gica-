import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  X, 
  BookOpen, 
  Flame, 
  Church, 
  Sun, 
  Scale, 
  Scroll, 
  FileText, 
  ChevronRight, 
  Command, 
  ArrowUp, 
  ArrowDown, 
  CornerDownLeft 
} from 'lucide-react';
import { MainRoute } from '../types';
import { theologicalGlossaryData } from '../data/theologicalVocabularyData';
import { preReformersData, lutherData, postReformersData } from '../data/reformationHistoryData';
import { patristicData, scholasticData, counterReformationData } from '../data/catholicTraditionData';
import { goldenAgeData, byzantineSynthesisData, hesychasmData } from '../data/orthodoxTraditionData';
import { ecumenicalCouncilsData } from '../data/ecumenicalCouncilsData';
import { manuscriptsTranslationsData } from '../data/manuscriptsTranslationsData';
import { THEOLOGICAL_COMPARISONS } from '../data/theologicalComparisonData';

export type SearchCategoryName = 
  | 'Termo do Glossário' 
  | 'A Reforma Protestante' 
  | 'Tradição Católica' 
  | 'Tradição Ortodoxa' 
  | 'Concílio Ecumênico' 
  | 'Manuscrito / Tradução' 
  | 'Divergência Teológica';

export interface GlobalSearchTarget {
  route: MainRoute;
  historySubTab?: string;
  globalContextTab?: 'world-sync' | 'second-temple' | 'councils' | 'manuscripts';
  targetId?: string;
}

export interface SearchItem {
  id: string;
  category: SearchCategoryName;
  title: string;
  subtitle: string;
  badge: string;
  searchText: string;
  snippet: string;
  target: GlobalSearchTarget;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTarget: (target: GlobalSearchTarget) => void;
}

// Normalize text for diacritic-insensitive search
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTarget
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global index compiled from all datasets
  const allSearchableItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // 1. Glossário Teológico
    theologicalGlossaryData.forEach(item => {
      items.push({
        id: `glossary-${item.id}`,
        category: 'Termo do Glossário',
        title: item.term,
        subtitle: item.originalLanguage 
          ? `${item.originalLanguage.word} (${item.originalLanguage.transliteration})`
          : item.category,
        badge: item.category,
        snippet: item.overview,
        searchText: `${item.term} ${item.overview} ${item.originalLanguage?.word || ''} ${item.originalLanguage?.transliteration || ''} ${item.originalLanguage?.literalMeaning || ''} ${item.catholicPerspective.definition} ${item.protestantPerspective.definition} ${item.orthodoxPerspective?.definition || ''}`,
        target: {
          route: 'HISTORIA',
          historySubTab: 'catholic-protestant',
          targetId: item.id
        }
      });
    });

    // 2. Reforma Protestante
    const allReformers = [
      ...preReformersData.map(f => ({ ...f, era: 'Pré-Reforma' })),
      { ...lutherData, era: 'Lutero e Wittenberg' },
      ...postReformersData.map(f => ({ ...f, era: 'Pós-Reforma & Suíça' }))
    ];
    allReformers.forEach(f => {
      items.push({
        id: `ref-${f.id}`,
        category: 'A Reforma Protestante',
        title: f.name,
        subtitle: `${f.title} (${f.period})`,
        badge: f.era,
        snippet: f.shortDescription || f.famousQuote || f.legacy,
        searchText: `${f.name} ${f.title} ${f.shortDescription} ${f.biography} ${f.famousQuote || ''} ${f.coreThinking.join(' ')} ${f.keyWorks?.join(' ') || ''}`,
        target: {
          route: 'HISTORIA',
          historySubTab: 'reformation',
          targetId: f.id
        }
      });
    });

    // 3. Tradição Católica
    const allCatholics = [
      ...patristicData.map(f => ({ ...f, era: 'Patrística Latina' })),
      ...scholasticData.map(f => ({ ...f, era: 'Escolástica Medieval' })),
      ...counterReformationData.map(f => ({ ...f, era: 'Contra-Reforma & Doutores' }))
    ];
    allCatholics.forEach(f => {
      items.push({
        id: `cath-${f.id}`,
        category: 'Tradição Católica',
        title: f.name,
        subtitle: `${f.title} (${f.period})`,
        badge: f.era,
        snippet: f.shortDescription || f.famousQuote || f.legacy,
        searchText: `${f.name} ${f.title} ${f.shortDescription} ${f.biography} ${f.famousQuote || ''} ${f.coreThinking.join(' ')} ${f.keyWorks?.join(' ') || ''}`,
        target: {
          route: 'HISTORIA',
          historySubTab: 'catholic',
          targetId: f.id
        }
      });
    });

    // 4. Tradição Ortodoxa
    const allOrthodox = [
      ...goldenAgeData.map(f => ({ ...f, era: 'Três Hierarcas (Séc. IV-V)' })),
      ...byzantineSynthesisData.map(f => ({ ...f, era: 'Síntese Bizantina e Ícones' })),
      ...hesychasmData.map(f => ({ ...f, era: 'Hesicasmo e Luz Incriada' }))
    ];
    allOrthodox.forEach(f => {
      items.push({
        id: `orth-${f.id}`,
        category: 'Tradição Ortodoxa',
        title: f.name,
        subtitle: `${f.title} (${f.period})`,
        badge: f.era,
        snippet: f.shortDescription || f.famousQuote || f.legacy,
        searchText: `${f.name} ${f.title} ${f.shortDescription} ${f.biography} ${f.famousQuote || ''} ${f.coreThinking.join(' ')} ${f.keyWorks?.join(' ') || ''}`,
        target: {
          route: 'HISTORIA',
          historySubTab: 'orthodox',
          targetId: f.id
        }
      });
    });

    // 5. Concílios Ecumênicos
    ecumenicalCouncilsData.forEach(c => {
      items.push({
        id: `council-${c.id}`,
        category: 'Concílio Ecumênico',
        title: c.name,
        subtitle: `${c.displayYear} • ${c.location} (Convocado por ${c.convenedBy})`,
        badge: `Heresia: ${c.heresyAddressed.name}`,
        snippet: `Dogma: ${c.orthodoxResponse.dogmaticFormulation}. Termos: ${c.orthodoxResponse.greekLatinTerms.join(', ')}`,
        searchText: `${c.name} ${c.displayYear} ${c.location} ${c.convenedBy} ${c.heresyAddressed.name} ${c.heresyAddressed.proponent} ${c.heresyAddressed.coreError} ${c.orthodoxResponse.dogmaticFormulation} ${c.orthodoxResponse.greekLatinTerms.join(' ')} ${c.orthodoxResponse.defenders.join(' ')} ${c.historicalImpact}`,
        target: {
          route: 'GLOBAL_CONTEXT',
          globalContextTab: 'councils',
          targetId: c.id
        }
      });
    });

    // 6. Manuscritos e Traduções
    manuscriptsTranslationsData.forEach(m => {
      items.push({
        id: `manuscript-${m.id}`,
        category: 'Manuscrito / Tradução',
        title: m.title,
        subtitle: `${m.figureOrOrigin} (${m.period})`,
        badge: m.category,
        snippet: m.significance || m.description,
        searchText: `${m.title} ${m.figureOrOrigin} ${m.period} ${m.description} ${m.significance} ${m.primaryLanguages.join(' ')} ${m.preservationLocation || ''}`,
        target: {
          route: 'GLOBAL_CONTEXT',
          globalContextTab: 'manuscripts',
          targetId: m.id
        }
      });
    });

    // 7. Divergências Teológicas Tripartite
    THEOLOGICAL_COMPARISONS.forEach(t => {
      items.push({
        id: `comp-${t.id}`,
        category: 'Divergência Teológica',
        title: t.topic,
        subtitle: `Pilar: ${t.category} • Consenso & Posições Tripartite`,
        badge: t.category,
        snippet: t.theologicalConsensus.summary,
        searchText: `${t.topic} ${t.category} ${t.theologicalConsensus.summary} ${t.catholicPosition.title} ${t.catholicPosition.summary} ${t.protestantPosition.title} ${t.protestantPosition.summary} ${t.orthodoxPosition.title} ${t.orthodoxPosition.summary} ${t.linkedPassages.map(p => p.referenceSnippet).join(' ')}`,
        target: {
          route: 'HISTORIA',
          historySubTab: 'catholic-protestant',
          targetId: t.id
        }
      });
    });

    return items;
  }, []);

  // Filter items matching query
  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      // Suggest high-value initial items
      return allSearchableItems.slice(0, 12);
    }

    const q = normalize(query.trim());
    return allSearchableItems.filter(item => {
      return normalize(item.title).includes(q) || normalize(item.searchText).includes(q);
    }).slice(0, 30);
  }, [allSearchableItems, query]);

  // Group filtered results by category
  const groupedResults = useMemo(() => {
    const groups: Record<SearchCategoryName, SearchItem[]> = {
      'Termo do Glossário': [],
      'A Reforma Protestante': [],
      'Tradição Católica': [],
      'Tradição Ortodoxa': [],
      'Concílio Ecumênico': [],
      'Manuscrito / Tradução': [],
      'Divergência Teológica': []
    };

    filteredResults.forEach(item => {
      if (groups[item.category]) {
        groups[item.category].push(item);
      }
    });

    return groups;
  }, [filteredResults]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredResults.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredResults.length) % Math.max(1, filteredResults.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          handleSelect(filteredResults[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex]);

  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (item: SearchItem) => {
    onClose();
    onNavigateToTarget(item.target);
  };

  if (!isOpen) return null;

  const getCategoryIcon = (category: SearchCategoryName) => {
    switch (category) {
      case 'Termo do Glossário': return <BookOpen className="w-4 h-4 text-amber-400" />;
      case 'A Reforma Protestante': return <Flame className="w-4 h-4 text-blue-400" />;
      case 'Tradição Católica': return <Church className="w-4 h-4 text-amber-500" />;
      case 'Tradição Ortodoxa': return <Sun className="w-4 h-4 text-emerald-400" />;
      case 'Concílio Ecumênico': return <Scale className="w-4 h-4 text-indigo-400" />;
      case 'Manuscrito / Tradução': return <FileText className="w-4 h-4 text-teal-400" />;
      case 'Divergência Teológica': return <Scroll className="w-4 h-4 text-purple-400" />;
      default: return <BookOpen className="w-4 h-4 text-zinc-400" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-10 sm:pt-20 px-3 sm:px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-zinc-100 ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-3.5 sm:p-4 border-b border-zinc-800 bg-zinc-950 flex items-center gap-3 shrink-0">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar em toda a Bíblia Teológica (Lutero, Calcedônia, Theosis, Graça, Qumran, Trento...)"
            className="w-full bg-transparent text-sm sm:text-base text-stone-100 placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-zinc-800 border border-zinc-700 rounded-md">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div ref={listRef} className="flex-1 overflow-y-auto p-2 sm:p-4 space-y-5">
          {filteredResults.length === 0 ? (
            <div className="p-8 text-center text-zinc-400 space-y-2">
              <BookOpen className="w-10 h-10 text-zinc-600 mx-auto" />
              <p className="font-semibold text-sm">Nenhum resultado teológico encontrado para "{query}"</p>
              <p className="text-xs text-zinc-500 max-w-md mx-auto">
                Tente buscar por conceitos (justificação, epiclese), doutores (Agostinho, Crisóstomo), concílios (Niceia, Éfeso) ou manuscritos (Sinaiticus, Tyndale).
              </p>
            </div>
          ) : (
            (Object.keys(groupedResults) as SearchCategoryName[]).map(catName => {
              const items = groupedResults[catName];
              if (items.length === 0) return null;

              return (
                <div key={catName} className="space-y-1.5">
                  <div className="flex items-center gap-2 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                    {getCategoryIcon(catName)}
                    <span>{catName}</span>
                    <span className="text-[10px] px-1.5 py-0.2 bg-zinc-800 rounded-full text-zinc-400">
                      {items.length}
                    </span>
                  </div>

                  <div className="space-y-1">
                    {items.map(item => {
                      const itemFlatIndex = filteredResults.findIndex(r => r.id === item.id);
                      const isSelected = itemFlatIndex === selectedIndex;

                      return (
                        <div
                          key={item.id}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setSelectedIndex(itemFlatIndex)}
                          className={`p-3 rounded-xl cursor-pointer transition-all duration-150 flex items-start justify-between gap-3 border ${
                            isSelected
                              ? 'bg-amber-950/40 border-amber-500/50 shadow-sm text-stone-100'
                              : 'bg-zinc-850/50 hover:bg-zinc-800/60 border-zinc-800 text-zinc-300'
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="font-bold text-sm text-stone-100 font-serif">
                                {item.title}
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 font-mono">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-xs text-amber-400/90 font-medium truncate mb-1">
                              {item.subtitle}
                            </p>
                            <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                              {item.snippet}
                            </p>
                          </div>

                          <div className="shrink-0 pt-1 text-zinc-400">
                            <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-amber-400' : ''}`} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Bottom Keyboard Instructions */}
        <div className="p-3 border-t border-zinc-800 bg-zinc-950 flex flex-wrap items-center justify-between text-[11px] text-zinc-400 shrink-0 gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-[10px] flex items-center">
                <ArrowUp className="w-2.5 h-2.5" /><ArrowDown className="w-2.5 h-2.5" />
              </kbd>
              Navegar
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-[10px] flex items-center">
                <CornerDownLeft className="w-2.5 h-2.5" />
              </kbd>
              Abrir
            </span>
          </div>

          <div className="flex items-center gap-1 text-zinc-500">
            <span>Atalho global:</span>
            <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-zinc-700 rounded text-[10px] font-mono">
              Cmd / Ctrl + K
            </kbd>
          </div>
        </div>
      </div>
    </div>
  );
};

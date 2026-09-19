import React, { useState, useMemo, useEffect } from 'react';
import { 
  X, 
  Search, 
  Filter, 
  Calendar, 
  BookOpen, 
  Scale, 
  Scroll, 
  Landmark, 
  Flame, 
  Sparkles, 
  Globe, 
  Shield, 
  Users, 
  Copy, 
  Check, 
  ChevronRight,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { ChurchHistoryEra, ChurchHistoryEvent, EcumenicalCreed } from '../types';
import { 
  CHURCH_HISTORY_ERAS_INFO, 
  CHURCH_HISTORY_EVENTS, 
  ECUMENICAL_CREEDS 
} from '../data/churchHistoryData';
import { TheologicalSystemsCard } from './TheologicalSystemsCard';

interface ChurchHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'timeline' | 'theological-systems' | 'creeds';
}

export const ChurchHistoryModal: React.FC<ChurchHistoryModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'timeline'
}) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'theological-systems' | 'creeds'>(initialTab);
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCreedId, setSelectedCreedId] = useState<string>(ECUMENICAL_CREEDS[0].id);
  const [copiedCreed, setCopiedCreed] = useState(false);

  // Sync tab if initialTab changes
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Filter events
  const filteredEvents = useMemo(() => {
    return CHURCH_HISTORY_EVENTS.filter(event => {
      // Era filter
      if (selectedEra !== 'all' && event.era !== selectedEra) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && event.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = event.title.toLowerCase().includes(q);
        const matchesYear = event.year.toLowerCase().includes(q);
        const matchesDesc = event.description.toLowerCase().includes(q);
        const matchesSignificance = event.historicalSignificance.toLowerCase().includes(q);
        const matchesFigures = event.keyFigures.some(f => f.toLowerCase().includes(q));
        if (!matchesTitle && !matchesYear && !matchesDesc && !matchesSignificance && !matchesFigures) {
          return false;
        }
      }
      return true;
    });
  }, [selectedEra, selectedCategory, searchQuery]);

  const activeCreed = useMemo(() => {
    return ECUMENICAL_CREEDS.find(c => c.id === selectedCreedId) || ECUMENICAL_CREEDS[0];
  }, [selectedCreedId]);

  const handleCopyCreed = () => {
    if (!activeCreed) return;
    const textToCopy = `${activeCreed.title} (${activeCreed.year})\n${activeCreed.council}\n\n${activeCreed.fullTextPt}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedCreed(true);
    setTimeout(() => setCopiedCreed(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-2xl border border-amber-900/40 dark:border-amber-700/40 bg-stone-950 dark:bg-zinc-950 text-stone-200 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 border-b border-amber-900/30 bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-700/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-inner">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-400 font-sans">
                  Enciclopédia de Tradição Cristã
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[9px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Dos Apóstolos à Era Contemporânea
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-serif font-bold text-stone-100">
                História da Igreja & Tradição Teológica
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800/80 transition-colors shrink-0"
            title="Fechar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-stone-800 bg-stone-900/50 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar shrink-0">
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'timeline'
                  ? 'bg-amber-600 text-white shadow-md border border-amber-500'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Linha do Tempo (5 Eras)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('theological-systems')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'theological-systems'
                  ? 'bg-amber-600 text-white shadow-md border border-amber-500'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Sistemas Teológicos (5 Eixos)</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('creeds')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'creeds'
                  ? 'bg-amber-600 text-white shadow-md border border-amber-500'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
              }`}
            >
              <Scroll className="w-4 h-4" />
              <span>Grandes Credos Ecumênicos</span>
            </button>
          </div>

          <span className="text-[11px] text-stone-500 hidden md:block">
            {activeTab === 'timeline' ? `${filteredEvents.length} marcos históricos` : ''}
          </span>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* TAB 1: LINHA DO TEMPO DA CRISTANDADE */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              {/* Eras Quick Summary Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {(Object.keys(CHURCH_HISTORY_ERAS_INFO) as ChurchHistoryEra[]).map((eraKey) => {
                  const eraInfo = CHURCH_HISTORY_ERAS_INFO[eraKey];
                  const isSelected = selectedEra === eraKey;
                  return (
                    <button
                      key={eraKey}
                      type="button"
                      onClick={() => setSelectedEra(isSelected ? 'all' : eraKey)}
                      className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? `${eraInfo.badgeBg} border-amber-500 ring-1 ring-amber-500`
                          : 'bg-stone-900/60 hover:bg-stone-800/60 border-stone-800 text-stone-300'
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 truncate">
                        {eraInfo.period}
                      </span>
                      <span className="text-xs font-serif font-bold text-stone-100 line-clamp-1 mt-0.5">
                        {eraInfo.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Filters & Search Toolbar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 p-3 rounded-xl bg-stone-900/70 border border-stone-800">
                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar evento, teólogo, ano..."
                    className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-hidden focus:ring-1 focus:ring-amber-500"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white text-xs"
                    >
                      ×
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                  <div className="flex items-center gap-1 text-[11px] text-stone-400 shrink-0">
                    <Filter className="w-3.5 h-3.5" />
                    <span>Categoria:</span>
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-2.5 py-1.5 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-300 focus:outline-hidden focus:ring-1 focus:ring-amber-500 shrink-0"
                  >
                    <option value="all">Todas as Categorias</option>
                    <option value="CONCILIO">Concílios Ecumênicos</option>
                    <option value="REFORMA">Reforma & Eclesiologia</option>
                    <option value="TEOLOGIA">Doutrina & Teologia</option>
                    <option value="AVIVAMENTO">Avivamentos & Missões</option>
                    <option value="PERSEGUICAO">Mártires & Perseguições</option>
                  </select>

                  {selectedEra !== 'all' && (
                    <button
                      type="button"
                      onClick={() => setSelectedEra('all')}
                      className="px-2 py-1 rounded bg-amber-950 text-amber-300 text-[10px] hover:bg-amber-900 border border-amber-700/50 shrink-0"
                    >
                      Limpar Era
                    </button>
                  )}
                </div>
              </div>

              {/* Timeline Items List */}
              {filteredEvents.length === 0 ? (
                <div className="p-8 text-center rounded-2xl bg-stone-900/30 border border-stone-800 text-stone-400 space-y-2">
                  <p className="text-sm font-medium">Nenhum marco histórico corresponde aos filtros selecionados.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedEra('all');
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    className="px-3 py-1 text-xs rounded-lg bg-amber-600 text-white hover:bg-amber-700"
                  >
                    Redefinir Filtros
                  </button>
                </div>
              ) : (
                <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-900/40 space-y-6">
                  {filteredEvents.map((evt) => {
                    const eraInfo = CHURCH_HISTORY_ERAS_INFO[evt.era];
                    return (
                      <div key={evt.id} className="relative group">
                        {/* Timeline Node Dot */}
                        <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-stone-950 border-2 border-amber-500 flex items-center justify-center group-hover:scale-125 transition-transform shadow-xs">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        </div>

                        {/* Event Card */}
                        <div className="p-4 sm:p-5 rounded-2xl border border-stone-800 bg-stone-900/70 hover:bg-stone-900/90 hover:border-amber-700/50 transition-all shadow-md space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                {evt.year}
                              </span>
                              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${eraInfo.badgeBg}`}>
                                {eraInfo.name}
                              </span>
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-stone-800 text-stone-300 border border-stone-700">
                                {evt.category}
                              </span>
                            </div>

                            {evt.keyFigures && evt.keyFigures.length > 0 && (
                              <div className="flex items-center gap-1.5 text-[11px] text-stone-400">
                                <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span className="font-semibold text-stone-300">
                                  {evt.keyFigures.join(', ')}
                                </span>
                              </div>
                            )}
                          </div>

                          <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                            {evt.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed text-justify">
                            {evt.description}
                          </p>

                          <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-200/90 space-y-1">
                            <span className="font-bold uppercase tracking-wider text-[10px] text-amber-400 block">
                              Significado Histórico & Impacto Teológico:
                            </span>
                            <p className="leading-relaxed">
                              {evt.historicalSignificance}
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

          {/* TAB 2: MATRIZ COMPARATIVA DE SISTEMAS TEOLÓGICOS (5 EIXOS) */}
          {activeTab === 'theological-systems' && (
            <div className="space-y-4">
              <TheologicalSystemsCard defaultExpanded={true} showCategoryNav={true} />
            </div>
          )}

          {/* TAB 3: GRANDES CREDOS E CONCÍLIOS ECUMÊNICOS */}
          {activeTab === 'creeds' && (
            <div className="space-y-6">
              {/* Creed Selector Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {ECUMENICAL_CREEDS.map((creed) => {
                  const isSelected = selectedCreedId === creed.id;
                  return (
                    <button
                      key={creed.id}
                      type="button"
                      onClick={() => setSelectedCreedId(creed.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-amber-950/40 border-amber-500 ring-1 ring-amber-500 shadow-md'
                          : 'bg-stone-900/60 hover:bg-stone-800/70 border-stone-800 text-stone-300'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                          {creed.year}
                        </span>
                        <h4 className="text-sm font-serif font-bold text-stone-100">
                          {creed.title}
                        </h4>
                      </div>
                      <span className="text-[11px] text-stone-400 truncate mt-2">
                        {creed.council}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Creed Viewer Card */}
              <div className="rounded-2xl border border-stone-800 bg-stone-900/70 p-5 sm:p-7 space-y-5 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-amber-400">
                        {activeCreed.year}
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-300 font-medium italic">
                        {activeCreed.originalName}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-serif font-bold text-stone-100 mt-1">
                      {activeCreed.title}
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {activeCreed.council}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyCreed}
                    className="px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-semibold flex items-center gap-2 self-start sm:self-auto transition-colors"
                  >
                    {copiedCreed ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-stone-400" />
                        <span>Copiar Texto</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Historical Occasion / Heresies Refuted */}
                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-700/30 text-xs text-stone-300 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-amber-400">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Ocasião Histórica & Heresias Refutadas:</span>
                  </div>
                  <p className="leading-relaxed">
                    {activeCreed.historicalOccasion}
                  </p>
                </div>

                {/* Key Themes Badges */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] text-stone-400 uppercase font-bold tracking-wider">
                    Temas Centrais:
                  </span>
                  {activeCreed.keyThemes.map((theme) => (
                    <span
                      key={theme}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-stone-800 text-amber-200 border border-stone-700"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                {/* Full Text of the Creed */}
                <div className="p-5 sm:p-6 rounded-xl bg-stone-950/80 border border-amber-900/30 font-serif text-stone-200 text-sm sm:text-base leading-relaxed whitespace-pre-line shadow-inner">
                  {activeCreed.fullTextPt}
                </div>

                {/* Greek / Latin Snippet */}
                {activeCreed.latinOrGreekSnippet && (
                  <div className="p-3 rounded-lg bg-stone-950 border border-stone-800 text-stone-400 font-mono text-xs italic">
                    <span className="text-stone-500 not-italic font-bold mr-2">Texto nos Idiomas Históricos:</span>
                    {activeCreed.latinOrGreekSnippet}
                  </div>
                )}

                {/* Theological Legacy */}
                <div className="p-3.5 rounded-xl bg-stone-800/40 border border-stone-700 text-xs text-stone-300 space-y-1">
                  <strong className="text-amber-300 block font-sans uppercase tracking-wider text-[10px]">
                    Legado na Tradição Cristã Universal:
                  </strong>
                  <p className="leading-relaxed">
                    {activeCreed.theologicalLegacy}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 border-t border-stone-800 bg-stone-900/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-400 shrink-0">
          <p className="font-serif text-center sm:text-left">
            <em>"Lembra-te dos dias da antiguidade, atenta para os anos de muitas gerações"</em> (Deuteronômio 32:7)
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs transition-colors"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};

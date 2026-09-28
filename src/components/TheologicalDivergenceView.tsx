import React, { useState, useMemo, useEffect } from 'react';
import { 
  TheologicalComparisonItem, 
  ComparisonCategory,
  TheologicalTraditionId
} from '../types';
import { 
  THEOLOGICAL_COMPARISONS, 
  COMPARISON_CATEGORIES_META 
} from '../data/theologicalComparisonData';
import { 
  Scale, 
  Search, 
  BookOpen, 
  Scroll, 
  Sparkles, 
  Users, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Cross,
  Languages,
  Calendar
} from 'lucide-react';
import { TheologicalGlossaryView } from './TheologicalGlossaryView';
import { TheologicalTimelineView } from './TheologicalTimelineView';

export type DivergenceSection = 'pillars' | 'glossary' | 'timeline';

interface TheologicalDivergenceViewProps {
  onNavigateToPassage?: (reference: string) => void;
  initialTopicId?: string;
  initialCategory?: ComparisonCategory | 'all';
  initialSection?: DivergenceSection;
}

type ViewFilter = 'all' | TheologicalTraditionId;

export const TheologicalDivergenceView: React.FC<TheologicalDivergenceViewProps> = ({
  onNavigateToPassage,
  initialTopicId,
  initialCategory = 'all',
  initialSection = 'pillars'
}) => {
  const [activeSection, setActiveSection] = useState<DivergenceSection>(initialSection);
  const [selectedCategory, setSelectedCategory] = useState<ComparisonCategory | 'all'>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTraditionTab, setActiveTraditionTab] = useState<ViewFilter>('all');
  const [expandedQuotes, setExpandedQuotes] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Synchronize when initialTopicId or initialSection changes externally
  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection]);

  useEffect(() => {
    if (initialTopicId) {
      setActiveSection('pillars');
      const targetItem = THEOLOGICAL_COMPARISONS.find(item => item.id === initialTopicId);
      if (targetItem) {
        setSelectedCategory(prev => (prev === 'all' || prev === targetItem.category ? prev : 'all'));
        setExpandedQuotes(prev => ({ ...prev, [initialTopicId]: true }));
      }
      const timer = setTimeout(() => {
        const el = document.getElementById(`topic-${initialTopicId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [initialTopicId]);

  // Filter comparisons by category and search
  const filteredComparisons = useMemo(() => {
    return THEOLOGICAL_COMPARISONS.filter(item => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTopic = item.topic.toLowerCase().includes(query);
        const matchesCatTitle = item.catholicPosition.title.toLowerCase().includes(query);
        const matchesCatSummary = item.catholicPosition.summary.toLowerCase().includes(query);
        const matchesProtTitle = item.protestantPosition.title.toLowerCase().includes(query);
        const matchesProtSummary = item.protestantPosition.summary.toLowerCase().includes(query);
        const matchesOrthTitle = item.orthodoxPosition?.title.toLowerCase().includes(query) ?? false;
        const matchesOrthSummary = item.orthodoxPosition?.summary.toLowerCase().includes(query) ?? false;
        const matchesConsensus = item.theologicalConsensus?.summary.toLowerCase().includes(query) ?? false;

        const matchesSources = [
          ...item.catholicPosition.historicalSources,
          ...item.protestantPosition.historicalSources,
          ...(item.orthodoxPosition?.historicalSources || [])
        ].some(s => s.toLowerCase().includes(query));

        const matchesVerses = [
          ...item.catholicPosition.biblicalBases,
          ...item.protestantPosition.biblicalBases,
          ...(item.orthodoxPosition?.biblicalBases || [])
        ].some(v => v.toLowerCase().includes(query));

        return (
          matchesTopic || 
          matchesCatTitle || 
          matchesCatSummary || 
          matchesProtTitle || 
          matchesProtSummary || 
          matchesOrthTitle || 
          matchesOrthSummary || 
          matchesConsensus ||
          matchesSources || 
          matchesVerses
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const toggleQuotes = (itemId: string) => {
    setExpandedQuotes(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleCopyComparison = (item: TheologicalComparisonItem) => {
    let textToCopy = `=== ${item.topic.toUpperCase()} (Catolicismo vs. Protestantismo vs. Ortodoxia) ===\n\n` +
      `[IGREJA CATÓLICA APOSTÓLICA ROMANA]\n` +
      `Posição: ${item.catholicPosition.title}\n` +
      `Síntese: ${item.catholicPosition.summary}\n` +
      `Bases Bíblicas: ${item.catholicPosition.biblicalBases.join(', ')}\n` +
      `Fontes: ${item.catholicPosition.historicalSources.join('; ')}\n\n` +
      `[PROTESTANTISMO CONFESSIONAL / HISTÓRICO]\n` +
      `Posição: ${item.protestantPosition.title}\n` +
      `Síntese: ${item.protestantPosition.summary}\n` +
      `Bases Bíblicas: ${item.protestantPosition.biblicalBases.join(', ')}\n` +
      `Fontes: ${item.protestantPosition.historicalSources.join('; ')}\n\n` +
      `[IGREJA ORTODOXA ORIENTAL]\n` +
      `Posição: ${item.orthodoxPosition.title}\n` +
      `Síntese: ${item.orthodoxPosition.summary}\n` +
      `Bases Bíblicas: ${item.orthodoxPosition.biblicalBases.join(', ')}\n` +
      `Fontes: ${item.orthodoxPosition.historicalSources.join('; ')}\n\n`;

    if (item.theologicalConsensus) {
      textToCopy += `[PONTO DE CONVERGÊNCIA / CONSENSO]\n` +
        `${item.theologicalConsensus.title}: ${item.theologicalConsensus.summary}\n\n`;
    }

    textToCopy += `Fonte: Bíblia Teológica - Módulo Tripartite de Teologia Histórica`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getPillarIcon = (cat: ComparisonCategory) => {
    switch (cat) {
      case 'Autoridade':
        return <Scroll className="w-4 h-4 text-amber-400" />;
      case 'Salvação':
        return <Sparkles className="w-4 h-4 text-amber-300" />;
      case 'Eclesiologia e Santos':
        return <Users className="w-4 h-4 text-indigo-400" />;
      case 'Sacramentos e Liturgia':
        return <BookOpen className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner de Apresentação e Rigor Acadêmico */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-950/40 via-zinc-900 to-emerald-950/40 border border-amber-500/30 p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>Panorama Histórico Tripartite • Rigor Acadêmico & Voz Própria</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-cinzel text-zinc-100 tracking-wide">
              Catolicismo, Protestantismo & Ortodoxia Oriental
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-serif">
              Análise comparativa imparcial dos quatro pilares teológicos fundamentais da cristandade. Cada tradição é apresentada segundo seus próprios documentos canônicos, fontes primárias e exegese bíblica original.
            </p>
          </div>

          {/* Selos das 3 Tradições */}
          <div className="flex flex-wrap lg:flex-col gap-2 shrink-0 text-xs font-serif">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-950/40 border border-amber-500/40 text-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span className="font-semibold">Igreja Católica Romana</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-950/40 border border-indigo-500/40 text-indigo-200">
              <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
              <span className="font-semibold">Protestantismo Confessional</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="font-semibold">Igreja Ortodoxa Oriental</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-navegação do Módulo: Pilares, Glossário & Linha do Tempo */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-zinc-800/80">
        <button
          type="button"
          onClick={() => setActiveSection('pillars')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeSection === 'pillars'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Comparador dos 4 Pilares</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSection('glossary')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeSection === 'glossary'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
          }`}
        >
          <Languages className="w-4 h-4" />
          <span>Glossário de Vocabulário Diferenciado</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSection('timeline')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeSection === 'timeline'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Linha do Tempo dos Cismas & Dogmas</span>
        </button>
      </div>

      {activeSection === 'pillars' && (
        <div className="space-y-6">
          {/* Barra de Filtros e Busca */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 space-y-4 shadow-lg">
            
            {/* Barra de Busca e Alternância de Visualização */}
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar por dogma, termo grego/latino (ex: Theosis, Filioque, Sola Fide, Transubstanciação)..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-hidden focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Segmented Tradition Tab Selector */}
          <div className="flex items-center gap-1 p-1 bg-zinc-950 rounded-xl border border-zinc-800 shrink-0 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTraditionTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTraditionTab === 'all'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              Tripartite (3 Vias)
            </button>
            <button
              type="button"
              onClick={() => setActiveTraditionTab('catholic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTraditionTab === 'catholic'
                  ? 'bg-amber-500 text-zinc-950 shadow-xs'
                  : 'text-zinc-400 hover:text-amber-300 hover:bg-zinc-900'
              }`}
            >
              Catolicismo
            </button>
            <button
              type="button"
              onClick={() => setActiveTraditionTab('protestant')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTraditionTab === 'protestant'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-indigo-300 hover:bg-zinc-900'
              }`}
            >
              Protestantismo
            </button>
            <button
              type="button"
              onClick={() => setActiveTraditionTab('orthodox')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTraditionTab === 'orthodox'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-emerald-300 hover:bg-zinc-900'
              }`}
            >
              Ortodoxia Oriental
            </button>
          </div>
        </div>

        {/* Eixos Sistemáticos (4 Pilares) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer border ${
              selectedCategory === 'all'
                ? 'bg-amber-600 text-white border-amber-500 shadow-md'
                : 'bg-zinc-950/80 text-zinc-400 hover:text-zinc-200 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <span>Todos os Pilares</span>
            <span className="text-[10px] opacity-75 font-mono">({THEOLOGICAL_COMPARISONS.length})</span>
          </button>

          {(Object.keys(COMPARISON_CATEGORIES_META) as ComparisonCategory[]).map(catKey => {
            const meta = COMPARISON_CATEGORIES_META[catKey];
            const isSelected = selectedCategory === catKey;
            const count = THEOLOGICAL_COMPARISONS.filter(i => i.category === catKey).length;
            return (
              <button
                key={catKey}
                type="button"
                onClick={() => setSelectedCategory(isSelected ? 'all' : catKey)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-500 shadow-md'
                    : 'bg-zinc-950/80 text-zinc-400 hover:text-zinc-200 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {getPillarIcon(catKey)}
                <span>Pilar {meta.pillarNumber}: {meta.shortTitle}</span>
                <span className="text-[10px] opacity-75 font-mono">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lista de Tópicos Comparados */}
      <div className="space-y-8">
        {filteredComparisons.map((item, index) => {
          const isQuotesOpen = expandedQuotes[item.id] || false;
          const showCatholic = activeTraditionTab === 'all' || activeTraditionTab === 'catholic';
          const showProtestant = activeTraditionTab === 'all' || activeTraditionTab === 'protestant';
          const showOrthodox = activeTraditionTab === 'all' || activeTraditionTab === 'orthodox';

          const isTargetTopic = initialTopicId === item.id;

          return (
            <article
              key={item.id}
              id={`topic-${item.id}`}
              className={`border rounded-3xl p-5 sm:p-7 shadow-2xl space-y-6 transition-all duration-300 ${
                isTargetTopic
                  ? 'bg-gradient-to-b from-amber-950/25 via-zinc-900/95 to-zinc-900 border-amber-500/60 ring-2 ring-amber-500/50 shadow-amber-950/40'
                  : 'bg-zinc-900/90 border-zinc-800/90 ring-1 ring-white/5'
              }`}
            >
              {/* Cabeçalho do Tópico */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="text-amber-400 font-semibold uppercase tracking-wider">
                      {COMPARISON_CATEGORIES_META[item.category].label}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-zinc-400">Tópico #{index + 1}</span>
                    {isTargetTopic && (
                      <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40 flex items-center gap-1 animate-pulse">
                        <Scale className="w-3 h-3 text-amber-400" />
                        Passagem Selecionada
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold font-cinzel text-zinc-100">
                    {item.topic}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => toggleQuotes(item.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border ${
                      isQuotesOpen
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-zinc-850 hover:bg-zinc-800 text-zinc-300 border-zinc-700/60'
                    }`}
                    title="Exibir excertos literais de documentos históricos primários"
                  >
                    <Quote className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isQuotesOpen ? 'Ocultar Fontes Primárias' : 'Citações de Fontes Primárias'}</span>
                    {isQuotesOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyComparison(item)}
                    className="p-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors cursor-pointer"
                    title="Copiar síntese deste debate teológico"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Seção 0: Consenso e Terreno Teológico Comum */}
              {item.theologicalConsensus && (
                <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-emerald-950/30 via-zinc-950/80 to-amber-950/30 border border-emerald-500/30 shadow-inner space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-serif font-bold text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Terreno Comum & Consenso Ecumênico Histórico</span>
                  </div>
                  <h4 className="text-sm font-serif font-bold text-stone-200">
                    {item.theologicalConsensus.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                    {item.theologicalConsensus.summary}
                  </p>
                  {item.theologicalConsensus.sharedCreeds && item.theologicalConsensus.sharedCreeds.length > 0 && (
                    <div className="pt-1 flex flex-wrap items-center gap-1.5 text-[11px] text-emerald-300">
                      <span className="text-stone-400 font-sans">Documentos Compartilhados:</span>
                      {item.theologicalConsensus.sharedCreeds.map((creed, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 font-serif">
                          {creed}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Grelha de Colunas: Católico vs. Protestante vs. Ortodoxo */}
              <div className={`grid gap-5 ${
                activeTraditionTab === 'all'
                  ? 'grid-cols-1 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                
                {/* 1. Lado Católico */}
                {showCatholic && (
                  <div className="flex flex-col rounded-2xl bg-gradient-to-b from-amber-950/20 via-zinc-950/80 to-zinc-950/60 border border-amber-500/30 p-5 space-y-4 shadow-sm hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-xs" />
                        <h4 className="font-serif text-sm font-bold text-amber-200 tracking-wide uppercase">
                          Igreja Católica Romana
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        Magistério & Tradição
                      </span>
                    </div>

                    <div className="space-y-2 flex-1">
                      <h5 className="font-serif text-base sm:text-lg font-bold text-amber-100">
                        {item.catholicPosition.title}
                      </h5>
                      <p className="font-serif text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {item.catholicPosition.summary}
                      </p>
                    </div>

                    {/* Bases Bíblicas Católicas */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-amber-400/90">
                        Bases Bíblicas Centrais:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.catholicPosition.biblicalBases.map((verse, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => onNavigateToPassage?.(verse)}
                            className="px-2.5 py-1 rounded-lg bg-amber-950/50 hover:bg-amber-900/60 text-amber-200 border border-amber-500/30 hover:border-amber-400 text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1"
                            title={`Navegar para ${verse}`}
                          >
                            <span>{verse}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fontes Primárias Católicas */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-400">
                        Fontes Histórico-Canônicas:
                      </span>
                      <ul className="text-xs text-stone-400 font-serif space-y-1 list-disc list-inside">
                        {item.catholicPosition.historicalSources.map((src, idx) => (
                          <li key={idx} className="leading-snug">
                            {src}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 2. Lado Protestante */}
                {showProtestant && (
                  <div className="flex flex-col rounded-2xl bg-gradient-to-b from-indigo-950/20 via-zinc-950/80 to-zinc-950/60 border border-indigo-500/30 p-5 space-y-4 shadow-sm hover:border-indigo-500/50 transition-colors">
                    <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-xs" />
                        <h4 className="font-serif text-sm font-bold text-indigo-200 tracking-wide uppercase">
                          Protestantismo Confessional
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        Sola Scriptura
                      </span>
                    </div>

                    <div className="space-y-2 flex-1">
                      <h5 className="font-serif text-base sm:text-lg font-bold text-indigo-100">
                        {item.protestantPosition.title}
                      </h5>
                      <p className="font-serif text-xs sm:text-sm text-stone-300 leading-relaxed whitespace-pre-line">
                        {item.protestantPosition.summary}
                      </p>
                    </div>

                    {/* Bases Bíblicas Protestantes */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-indigo-400/90">
                        Bases Bíblicas Centrais:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.protestantPosition.biblicalBases.map((verse, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => onNavigateToPassage?.(verse)}
                            className="px-2.5 py-1 rounded-lg bg-indigo-950/50 hover:bg-indigo-900/60 text-indigo-200 border border-indigo-500/30 hover:border-indigo-400 text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1"
                            title={`Navegar para ${verse}`}
                          >
                            <span>{verse}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fontes Primárias Protestantes */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-400">
                        Confissões & Credos Reformados:
                      </span>
                      <ul className="text-xs text-stone-400 font-serif space-y-1 list-disc list-inside">
                        {item.protestantPosition.historicalSources.map((src, idx) => (
                          <li key={idx} className="leading-snug">
                            {src}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* 3. Lado Ortodoxo Oriental */}
                {showOrthodox && (
                  <div className="flex flex-col rounded-2xl bg-gradient-to-b from-emerald-950/20 via-zinc-950/80 to-zinc-950/60 border border-emerald-500/30 p-5 space-y-4 shadow-sm hover:border-emerald-500/50 transition-colors">
                    <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-xs" />
                        <h4 className="font-serif text-sm font-bold text-emerald-200 tracking-wide uppercase">
                          Igreja Ortodoxa Oriental
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        7 Concílios & Theosis
                      </span>
                    </div>

                    <div className="space-y-2 flex-1">
                      <h5 className="font-serif text-base sm:text-lg font-bold text-emerald-100">
                        {item.orthodoxPosition.title}
                      </h5>
                      <p className="font-serif text-xs sm:text-sm text-stone-300 leading-relaxed whitespace-pre-line">
                        {item.orthodoxPosition.summary}
                      </p>
                    </div>

                    {/* Bases Bíblicas Ortodoxas */}
                    <div className="space-y-1.5 pt-2 border-t border-zinc-800/80">
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-emerald-400/90">
                        Bases Bíblicas Centrais:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.orthodoxPosition.biblicalBases.map((verse, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => onNavigateToPassage?.(verse)}
                            className="px-2.5 py-1 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-200 border border-emerald-500/30 hover:border-emerald-400 text-xs font-mono font-medium transition-colors cursor-pointer flex items-center gap-1"
                            title={`Navegar para ${verse}`}
                          >
                            <span>{verse}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Fontes Primárias Ortodoxas */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-stone-400">
                        Concílios Ecumênicos & Pais Gregos:
                      </span>
                      <ul className="text-xs text-stone-400 font-serif space-y-1 list-disc list-inside">
                        {item.orthodoxPosition.historicalSources.map((src, idx) => (
                          <li key={idx} className="leading-snug">
                            {src}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

              </div>

              {/* Seção Expansível de Citações Literais de Documentos Primários ("Voz Própria") */}
              {isQuotesOpen && (
                <div className="rounded-2xl p-4 sm:p-6 bg-zinc-950/90 border border-amber-500/20 space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider text-amber-400">
                    <Quote className="w-4 h-4" />
                    <span>Excertos Literais de Documentos Canônicos e Confessionais</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Citações Católicas */}
                    {item.catholicPosition.primaryQuotes && (
                      <div className="space-y-3">
                        <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          Fontes Católicas
                        </span>
                        {item.catholicPosition.primaryQuotes.map((quote, qIdx) => (
                          <blockquote
                            key={qIdx}
                            className="p-3.5 rounded-xl bg-amber-950/20 border-l-2 border-amber-500 text-xs font-serif text-stone-300 space-y-1.5"
                          >
                            <p className="italic leading-relaxed">
                              "{quote.excerpt}"
                            </p>
                            <footer className="text-[10px] text-amber-400 font-sans font-semibold not-italic">
                              — {quote.source} ({quote.authorOrDocument}, {quote.yearOrEra})
                            </footer>
                          </blockquote>
                        ))}
                      </div>
                    )}

                    {/* Citações Protestantes */}
                    {item.protestantPosition.primaryQuotes && (
                      <div className="space-y-3">
                        <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-indigo-400" />
                          Fontes Protestantes
                        </span>
                        {item.protestantPosition.primaryQuotes.map((quote, qIdx) => (
                          <blockquote
                            key={qIdx}
                            className="p-3.5 rounded-xl bg-indigo-950/20 border-l-2 border-indigo-500 text-xs font-serif text-stone-300 space-y-1.5"
                          >
                            <p className="italic leading-relaxed">
                              "{quote.excerpt}"
                            </p>
                            <footer className="text-[10px] text-indigo-400 font-sans font-semibold not-italic">
                              — {quote.source} ({quote.authorOrDocument}, {quote.yearOrEra})
                            </footer>
                          </blockquote>
                        ))}
                      </div>
                    )}

                    {/* Citações Ortodoxas */}
                    {item.orthodoxPosition.primaryQuotes && (
                      <div className="space-y-3">
                        <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          Fontes Ortodoxas
                        </span>
                        {item.orthodoxPosition.primaryQuotes.map((quote, qIdx) => (
                          <blockquote
                            key={qIdx}
                            className="p-3.5 rounded-xl bg-emerald-950/20 border-l-2 border-emerald-500 text-xs font-serif text-stone-300 space-y-1.5"
                          >
                            <p className="italic leading-relaxed">
                              "{quote.excerpt}"
                            </p>
                            <footer className="text-[10px] text-emerald-400 font-sans font-semibold not-italic">
                              — {quote.source} ({quote.authorOrDocument}, {quote.yearOrEra})
                            </footer>
                          </blockquote>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Versículos Vinculados com Foco Exegético */}
              {item.linkedPassages && item.linkedPassages.length > 0 && (
                <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-zinc-500 font-sans font-medium">Perícopes Vinculadas no Leitor:</span>
                    {item.linkedPassages.map((p, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => onNavigateToPassage?.(p.referenceSnippet || `${p.book} ${p.chapter}`)}
                        className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-amber-300 hover:text-amber-200 border border-zinc-700/80 text-xs font-mono font-semibold transition-colors cursor-pointer flex items-center gap-1"
                        title={p.exegeticalFocus || `Abrir ${p.referenceSnippet} no leitor`}
                      >
                        <BookOpen className="w-3 h-3 text-amber-400" />
                        <span>{p.referenceSnippet || `${p.book} ${p.chapter}`}</span>
                      </button>
                    ))}
                  </div>

                  <span className="text-[11px] text-zinc-500 italic font-serif">
                    Clique nas perícopes para saltar diretamente ao texto sagrado no leitor bíblico.
                  </span>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  )}

  {activeSection === 'glossary' && (
    <TheologicalGlossaryView onNavigateToPassage={onNavigateToPassage} />
  )}

  {activeSection === 'timeline' && (
    <TheologicalTimelineView onNavigateToPassage={onNavigateToPassage} />
  )}
</div>
  );
};


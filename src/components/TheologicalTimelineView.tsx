import React, { useState, useMemo } from 'react';
import { TheologicalTimelineEvent, TimelineEventCategory, TheologicalTraditionId } from '../types';
import { theologicalTimelineData } from '../data/theologicalTimelineData';
import { 
  Landmark, 
  GitFork, 
  Scroll, 
  HeartHandshake, 
  Search, 
  BookOpen, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Quote,
  Calendar,
  Users
} from 'lucide-react';

interface TheologicalTimelineViewProps {
  onNavigateToPassage?: (reference: string) => void;
}

export const TheologicalTimelineView: React.FC<TheologicalTimelineViewProps> = ({
  onNavigateToPassage
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TimelineEventCategory | 'all'>('all');
  const [selectedTradition, setSelectedTradition] = useState<TheologicalTraditionId | 'all'>('all');
  const [expandedEvents, setExpandedEvents] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredEvents = useMemo(() => {
    return theologicalTimelineData.filter(event => {
      // Category filter
      if (selectedCategory !== 'all' && event.category !== selectedCategory) {
        return false;
      }
      // Tradition filter
      if (selectedTradition !== 'all' && !event.traditionImpact.includes(selectedTradition)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = event.title.toLowerCase().includes(q);
        const matchesYear = event.yearDisplay.toLowerCase().includes(q) || event.year.toString().includes(q);
        const matchesSummary = event.summary.toLowerCase().includes(q);
        const matchesHistory = event.historicalContext.toLowerCase().includes(q);
        const matchesCath = event.theologicalSignificance.catholicPerspective?.toLowerCase().includes(q) ?? false;
        const matchesProt = event.theologicalSignificance.protestantPerspective?.toLowerCase().includes(q) ?? false;
        const matchesOrth = event.theologicalSignificance.orthodoxPerspective?.toLowerCase().includes(q) ?? false;
        const matchesFigures = event.keyFigures.some(f => f.toLowerCase().includes(q));
        const matchesDoc = event.primaryDocumentOrCanon && (
          event.primaryDocumentOrCanon.title.toLowerCase().includes(q) ||
          event.primaryDocumentOrCanon.excerpt.toLowerCase().includes(q) ||
          event.primaryDocumentOrCanon.citationRef.toLowerCase().includes(q)
        );

        return matchesTitle || matchesYear || matchesSummary || matchesHistory || matchesCath || matchesProt || matchesOrth || matchesFigures || matchesDoc;
      }
      return true;
    });
  }, [selectedCategory, selectedTradition, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedEvents(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopy = (event: TheologicalTimelineEvent) => {
    let text = `=== MARCO TEOLÓGICO: ${event.title.toUpperCase()} (${event.yearDisplay}) ===\n\n`;
    text += `Síntese: ${event.summary}\n`;
    text += `Contexto Histórico: ${event.historicalContext}\n\n`;
    if (event.theologicalSignificance.catholicPerspective) {
      text += `[VISÃO CATÓLICA]\n${event.theologicalSignificance.catholicPerspective}\n\n`;
    }
    if (event.theologicalSignificance.protestantPerspective) {
      text += `[VISÃO PROTESTANTE]\n${event.theologicalSignificance.protestantPerspective}\n\n`;
    }
    if (event.theologicalSignificance.orthodoxPerspective) {
      text += `[VISÃO ORTODOXA]\n${event.theologicalSignificance.orthodoxPerspective}\n\n`;
    }
    if (event.primaryDocumentOrCanon) {
      text += `[DOCUMENTO PRIMÁRIO / CÂNON]\n"${event.primaryDocumentOrCanon.title}": "${event.primaryDocumentOrCanon.excerpt}"\nRef: ${event.primaryDocumentOrCanon.citationRef}\n\n`;
    }
    text += `Protagonistas: ${event.keyFigures.join(', ')}\n`;
    if (event.relatedScripturePassages) {
      text += `Passagens Bíblicas: ${event.relatedScripturePassages.join(', ')}\n`;
    }

    navigator.clipboard.writeText(text);
    setCopiedId(event.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getCategoryMeta = (cat: TimelineEventCategory) => {
    switch (cat) {
      case 'concilio':
        return { label: 'Concílio Ecumênico', icon: Landmark, color: 'text-amber-400 bg-amber-950/40 border-amber-500/30' };
      case 'cisma':
        return { label: 'Cisma / Ruptura', icon: GitFork, color: 'text-rose-400 bg-rose-950/40 border-rose-500/30' };
      case 'confissao':
        return { label: 'Confissão de Fé', icon: Scroll, color: 'text-indigo-400 bg-indigo-950/40 border-indigo-500/30' };
      case 'dialogo_ecumenico':
        return { label: 'Diálogo Ecumênico', icon: HeartHandshake, color: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-stone-900 via-zinc-900 to-amber-950/30 border border-amber-500/25 rounded-2xl p-5 sm:p-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5" />
              <span>Cronologia dos Cismas & Definições Dogmáticas</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-zinc-100">
              Linha do Tempo dos Cismas & Dogmas
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-serif leading-relaxed max-w-2xl">
              Dos primeiros Concílios Ecumênicos indivisos ao Grande Cisma de 1054, à Reforma Protestante, às definições tridentinas e vaticanas, e aos acordos ecumênicos contemporâneos.
            </p>
          </div>
          <div className="shrink-0 text-xs text-amber-400 font-mono bg-zinc-950/60 px-3 py-1.5 rounded-xl border border-zinc-800">
            {filteredEvents.length} {filteredEvents.length === 1 ? 'marco' : 'marcos'} cronológicos
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 space-y-3.5 shadow-md">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar marco histórico, ano, papa, concílio ou reformador (ex: Nicéia, 1054, Lutero, Trento, Calcedônia)..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-hidden focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Tradition selector */}
          <div className="flex items-center gap-1 p-1 bg-zinc-950 rounded-xl border border-zinc-800 shrink-0 overflow-x-auto">
            <button
              type="button"
              onClick={() => setSelectedTradition('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTradition === 'all'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              Todas as Tradições
            </button>
            <button
              type="button"
              onClick={() => setSelectedTradition('catholic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTradition === 'catholic'
                  ? 'bg-amber-500 text-zinc-950 shadow-xs'
                  : 'text-zinc-400 hover:text-amber-300 hover:bg-zinc-900'
              }`}
            >
              Catolicismo
            </button>
            <button
              type="button"
              onClick={() => setSelectedTradition('protestant')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTradition === 'protestant'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-indigo-300 hover:bg-zinc-900'
              }`}
            >
              Protestantismo
            </button>
            <button
              type="button"
              onClick={() => setSelectedTradition('orthodox')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedTradition === 'orthodox'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-emerald-300 hover:bg-zinc-900'
              }`}
            >
              Ortodoxia
            </button>
          </div>
        </div>

        {/* Categories pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'Todos os Marcos' },
            { id: 'concilio', label: '🏛️ Concílios Ecumênicos' },
            { id: 'cisma', label: '⚔️ Cismas Históricos' },
            { id: 'confissao', label: '📜 Confissões de Fé' },
            { id: 'dialogo_ecumenico', label: '🤝 Diálogos Ecumênicos' }
          ].map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedCategory(item.id as TimelineEventCategory | 'all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory === item.id
                  ? 'bg-amber-600/90 text-white border-amber-500 shadow-xs'
                  : 'bg-zinc-950/80 text-zinc-400 hover:text-zinc-200 border-zinc-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="relative pl-4 sm:pl-6 space-y-6 before:content-[''] before:absolute before:left-[19px] sm:before:left-[27px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-zinc-700 before:to-emerald-500">
        {filteredEvents.map(event => {
          const catMeta = getCategoryMeta(event.category);
          const CatIcon = catMeta.icon;
          const isExpanded = expandedEvents[event.id] ?? false;

          return (
            <article
              key={event.id}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[5px] sm:-left-[1px] top-4 w-4 h-4 rounded-full bg-zinc-950 border-2 border-amber-400 flex items-center justify-center shadow-md group-hover:scale-125 transition-transform z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              </div>

              {/* Event Card */}
              <div className="bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-5 sm:p-6 shadow-lg transition-all space-y-4">
                {/* Header: Year, Category, Title */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-zinc-800/80 pb-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {event.yearDisplay}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-md border ${catMeta.color}`}>
                        <CatIcon className="w-3 h-3" />
                        <span>{catMeta.label}</span>
                      </span>

                      {/* Traditions badges */}
                      <div className="flex items-center gap-1">
                        {event.traditionImpact.includes('catholic') && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-600/30">
                            Católica
                          </span>
                        )}
                        {event.traditionImpact.includes('protestant') && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-600/30">
                            Protestante
                          </span>
                        )}
                        {event.traditionImpact.includes('orthodox') && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-600/30">
                            Ortodoxa
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold font-cinzel text-zinc-100">
                      {event.title}
                    </h4>
                  </div>

                  {/* Actions: Copy */}
                  <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                    <button
                      type="button"
                      onClick={() => handleCopy(event)}
                      className="px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border border-zinc-700/60"
                      title="Copiar dados deste marco histórico"
                    >
                      {copiedId === event.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Summary & Historical Context */}
                <div className="space-y-2 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
                  <p>
                    <strong className="text-amber-400">Definição / Fato: </strong>
                    {event.summary}
                  </p>
                  <p className="text-zinc-400 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/80">
                    <strong className="text-zinc-300">Contexto Histórico: </strong>
                    {event.historicalContext}
                  </p>
                </div>

                {/* Primary Document Quote Box */}
                {event.primaryDocumentOrCanon && (
                  <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2 text-amber-300 text-xs font-bold font-cinzel">
                      <Scroll className="w-4 h-4 text-amber-400" />
                      <span>Documento Canônico Primário: {event.primaryDocumentOrCanon.title}</span>
                    </div>
                    <blockquote className="text-xs text-zinc-200 font-serif italic pl-3 border-l-2 border-amber-400/60 leading-relaxed">
                      "{event.primaryDocumentOrCanon.excerpt}"
                    </blockquote>
                    <div className="text-[11px] text-amber-300/80 font-mono pt-1">
                      Referência: {event.primaryDocumentOrCanon.citationRef}
                    </div>
                  </div>
                )}

                {/* Toggle Detailed Theological Perspectives */}
                <button
                  type="button"
                  onClick={() => toggleExpand(event.id)}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-zinc-950/60 hover:bg-zinc-850/80 border border-zinc-800 text-xs text-zinc-300 hover:text-white font-medium transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-amber-400" />
                    <span>Como as 3 Tradições interpretam este marco</span>
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-zinc-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                  )}
                </button>

                {/* Expanded Perspectives */}
                {isExpanded && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                    {event.theologicalSignificance.catholicPerspective && (
                      <div className="bg-amber-950/15 border border-amber-500/25 rounded-xl p-3.5 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <h6 className="text-[11px] font-bold text-amber-300 uppercase tracking-wider font-cinzel">
                            Visão Católica
                          </h6>
                        </div>
                        <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                          {event.theologicalSignificance.catholicPerspective}
                        </p>
                      </div>
                    )}

                    {event.theologicalSignificance.protestantPerspective && (
                      <div className="bg-indigo-950/15 border border-indigo-500/25 rounded-xl p-3.5 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-indigo-400" />
                          <h6 className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider font-cinzel">
                            Visão Protestante
                          </h6>
                        </div>
                        <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                          {event.theologicalSignificance.protestantPerspective}
                        </p>
                      </div>
                    )}

                    {event.theologicalSignificance.orthodoxPerspective && (
                      <div className="bg-emerald-950/15 border border-emerald-500/25 rounded-xl p-3.5 space-y-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <h6 className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider font-cinzel">
                            Visão Ortodoxa
                          </h6>
                        </div>
                        <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                          {event.theologicalSignificance.orthodoxPerspective}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Key Figures & Biblical Passages Footer */}
                <div className="pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-zinc-400">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-zinc-500">Protagonistas:</span>
                    {event.keyFigures.map(fig => (
                      <span
                        key={fig}
                        className="px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 font-serif text-[11px] border border-zinc-700/60"
                      >
                        {fig}
                      </span>
                    ))}
                  </div>

                  {event.relatedScripturePassages && event.relatedScripturePassages.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1">
                      <span className="text-zinc-500">Passagens:</span>
                      {event.relatedScripturePassages.map(ref => (
                        <button
                          key={ref}
                          type="button"
                          onClick={() => onNavigateToPassage && onNavigateToPassage(ref)}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-800/60 hover:bg-amber-600/30 text-amber-300 text-[11px] border border-zinc-700/50 hover:border-amber-500/40 cursor-pointer transition-colors"
                        >
                          <span>{ref}</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}

        {filteredEvents.length === 0 && (
          <div className="text-center py-12 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <Landmark className="w-10 h-10 text-zinc-600 mx-auto mb-2" />
            <p className="text-sm text-zinc-400 font-serif">Nenhum marco histórico encontrado para sua busca.</p>
          </div>
        )}
      </div>
    </div>
  );
};

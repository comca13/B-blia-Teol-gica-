import React, { useState, useMemo } from 'react';
import { 
  Landmark, 
  Scale, 
  Scroll, 
  Compass, 
  Search, 
  Sparkles, 
  Calendar, 
  BookOpen, 
  Copy, 
  Check, 
  Users, 
  Crown, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { 
  CHURCH_HISTORY_ERAS_INFO, 
  CHURCH_HISTORY_EVENTS, 
  ECUMENICAL_CREEDS 
} from '../data/churchHistoryData';
import { HISTORICAL_PERIODS } from '../data/theologicalPeriods';
import { TheologicalSystemsCard } from '../components/TheologicalSystemsCard';
import { IntertestamentalSubPhase } from '../types';

type HistorySubTab = 'church' | 'theology' | 'creeds' | 'second-temple' | 'biblical-timeline';

export const HistoryView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HistorySubTab>('church');
  
  // Church History Filter State
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Creeds State
  const [selectedCreedId, setSelectedCreedId] = useState<string>(ECUMENICAL_CREEDS[0].id);
  const [copiedCreed, setCopiedCreed] = useState(false);

  // Second Temple Phase State
  const intertestamentalPeriod = HISTORICAL_PERIODS.find(p => p.id === 'intertestamental');
  const subPhases: IntertestamentalSubPhase[] = intertestamentalPeriod?.subPhases || [];
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const currentPhase = subPhases[activePhaseIndex] || subPhases[0];

  // Selected Creed
  const selectedCreed = useMemo(() => {
    return ECUMENICAL_CREEDS.find(c => c.id === selectedCreedId) || ECUMENICAL_CREEDS[0];
  }, [selectedCreedId]);

  // Filter Church Events
  const filteredEvents = useMemo(() => {
    return CHURCH_HISTORY_EVENTS.filter(event => {
      const matchesEra = selectedEra === 'all' || event.era === selectedEra;
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      const matchesSearch = 
        searchQuery === '' ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.keyFigures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesEra && matchesCategory && matchesSearch;
    });
  }, [selectedEra, selectedCategory, searchQuery]);

  const handleCopyCreed = () => {
    if (selectedCreed) {
      navigator.clipboard.writeText(`${selectedCreed.title}\n(${selectedCreed.year})\n\n${selectedCreed.textPt}`);
      setCopiedCreed(true);
      setTimeout(() => setCopiedCreed(false), 2000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-6">
      
      {/* Header Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Landmark className="w-3.5 h-3.5" />
              <span>Erudição Histórica & Teológica</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
              História da Igreja, Teologia & Tradição Bíblica
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Explore as 5 eras da fé cristã, o período intertestamentário dos 400 anos, os credos ecumênicos e os grandes sistemas teológicos.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
        {[
          { id: 'church', label: 'História da Igreja', icon: Landmark },
          { id: 'theology', label: 'Sistemas Teológicos', icon: Scale },
          { id: 'creeds', label: 'Grandes Credos', icon: Scroll },
          { id: 'second-temple', label: 'Segundo Templo', icon: BookOpen },
          { id: 'biblical-timeline', label: 'Eras Bíblicas', icon: Compass },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as HistorySubTab)}
              className={`flex items-center gap-2 py-2.5 px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 1. HISTÓRIA DA IGREJA */}
      {activeTab === 'church' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Era Cards Carousel/Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {Object.values(CHURCH_HISTORY_ERAS_INFO).map(era => {
              const isSelected = selectedEra === era.id;
              return (
                <button
                  key={era.id}
                  type="button"
                  onClick={() => setSelectedEra(isSelected ? 'all' : era.id)}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-500 bg-amber-950/30 shadow-md'
                      : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:bg-zinc-850'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-amber-400 block mb-1">
                      {era.period}
                    </span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-100 line-clamp-2">
                      {era.name}
                    </h4>
                  </div>
                  <span className="text-[10px] text-zinc-400 mt-2 block line-clamp-1">
                    {era.description}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Category Filter */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-3.5 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar evento, autor (ex: Agostinho, Lutero, Calvino)..."
                className="w-full pl-9 pr-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs sm:text-sm text-stone-100 placeholder-zinc-500 focus:outline-hidden focus:border-amber-500"
              />
            </div>

            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {[
                { id: 'all', label: 'Todas as Categorias' },
                { id: 'theology', label: 'Teologia' },
                { id: 'council', label: 'Concílios' },
                { id: 'monasticism', label: 'Monasticismo' },
                { id: 'reformation', label: 'Reforma' },
                { id: 'persecution', label: 'Perseguição' }
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-zinc-800 text-zinc-400 hover:text-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Events List */}
          <div className="space-y-3">
            <span className="text-xs text-zinc-400 px-1 block">
              Mostrando {filteredEvents.length} marcos históricos
            </span>

            {filteredEvents.map(event => (
              <div 
                key={event.id}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {event.year}
                    </span>
                    <h4 className="font-serif font-bold text-sm sm:text-base text-stone-100">
                      {event.title}
                    </h4>
                  </div>
                  <span className="text-[11px] font-medium text-zinc-400">
                    {event.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                  {event.description}
                </p>

                {event.theologicalImpact && (
                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs text-amber-200/90 mb-3">
                    <strong>Impacto Teológico:</strong> {event.theologicalImpact}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-zinc-800/50">
                  <span className="text-[11px] text-zinc-400 flex items-center gap-1 mr-1">
                    <Users className="w-3.5 h-3.5 text-zinc-400" /> Figuras Chave:
                  </span>
                  {event.keyFigures.map((figure, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded-md text-[11px] bg-zinc-800 text-zinc-300"
                    >
                      {figure}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. SISTEMAS TEOLÓGICOS */}
      {activeTab === 'theology' && (
        <div className="animate-in fade-in duration-200">
          <TheologicalSystemsCard defaultExpanded={true} />
        </div>
      )}

      {/* 3. GRANDES CREDOS */}
      {activeTab === 'creeds' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Creed Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {ECUMENICAL_CREEDS.map(creed => (
              <button
                key={creed.id}
                type="button"
                onClick={() => setSelectedCreedId(creed.id)}
                className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCreedId === creed.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                {creed.title} ({creed.year})
              </button>
            ))}
          </div>

          {/* Active Creed Detail Card */}
          <div className="p-5 sm:p-7 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  {selectedCreed.year} • {selectedCreed.context}
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-100">
                  {selectedCreed.title}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Significado: {selectedCreed.significance}
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyCreed}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors self-start sm:self-auto"
              >
                {copiedCreed ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCreed ? 'Copiado!' : 'Copiar Texto'}</span>
              </button>
            </div>

            {/* Portuguese Text */}
            <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3">
                Texto em Português
              </h4>
              <p className="font-serif text-sm sm:text-base text-stone-200 leading-relaxed whitespace-pre-line">
                {selectedCreed.textPt}
              </p>
            </div>

            {/* Original Latin/Greek text */}
            {selectedCreed.textOriginal && (
              <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800/60">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold mb-3">
                  Texto Original (Latim / Grego)
                </h4>
                <p className="font-serif italic text-xs sm:text-sm text-zinc-400 leading-relaxed whitespace-pre-line">
                  {selectedCreed.textOriginal}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. SEGUNDO TEMPLO (400 ANOS) */}
      {activeTab === 'second-temple' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-950/20 border border-amber-800/40 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
            <strong>O Silêncio Profético Que Mudou o Mundo:</strong> Durante os 400 anos entre Malaquias e Mateus, o judaísmo foi profundamente transformado pela opressão persa, o helenismo de Alexandre o Grande, a revolta dos Macabeus e a pax romana.
          </div>

          {/* Phases selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {subPhases.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={phase.id}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all ${
                    isActive
                      ? 'border-amber-500 bg-amber-950/30 shadow-md'
                      : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold text-amber-400 block">
                    {phase.period}
                  </span>
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-100 truncate mt-1">
                    {phase.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Phase Details */}
          {currentPhase && (
            <div className="p-5 sm:p-6 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {currentPhase.period}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100">
                    {currentPhase.title}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold">
                  {currentPhase.rulingPower}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {currentPhase.description}
              </p>

              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Legado para o Novo Testamento
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {currentPhase.theologicalImpact}
                </p>
              </div>

              {currentPhase.keyFiguresOrEvents && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                    Acontecimentos & Personagens Críticos
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {currentPhase.keyFiguresOrEvents.map((evt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{evt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 5. LINHA DO TEMPO BÍBLICA */}
      {activeTab === 'biblical-timeline' && (
        <div className="space-y-3 animate-in fade-in duration-200">
          {HISTORICAL_PERIODS.map(period => (
            <div 
              key={period.id}
              className="p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {period.era}
                  </span>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-stone-100">
                    {period.name}
                  </h4>
                </div>
                {period.dominantPowers && period.dominantPowers.length > 0 && (
                  <span className="text-xs text-zinc-400">
                    {period.dominantPowers.join(' • ')}
                  </span>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-2">
                {period.description}
              </p>

              {period.worldContextSummary && (
                <p className="text-xs text-amber-400/90 font-medium">
                  <strong>Panorama Mundial:</strong> {period.worldContextSummary}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

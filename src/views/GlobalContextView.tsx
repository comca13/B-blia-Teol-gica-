import React, { useState, useEffect } from 'react';
import { 
  Globe2, 
  Columns, 
  Scale, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  MapPin, 
  Sparkles, 
  AlertCircle, 
  BookMarked,
  Layers,
  Bookmark,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { worldHistorySyncData } from '../data/worldHistorySyncData';
import { secondTempleHistoricalData } from '../data/secondTempleHistoricalData';
import { ecumenicalCouncilsData } from '../data/ecumenicalCouncilsData';
import { manuscriptsTranslationsData } from '../data/manuscriptsTranslationsData';
import { theologicalGlossaryData } from '../data/theologicalVocabularyData';
import { TheologicalGlossaryTerm } from '../types';
import { TheologicalTermModal } from '../components/TheologicalTermModal';
import { BiblicalConnectionCard } from '../components/BiblicalConnectionCard';
import { isFavorite, toggleFavorite, FAVORITES_UPDATED_EVENT } from '../utils/favoritesStorage';

export type GlobalContextTab = 'world-sync' | 'second-temple' | 'councils' | 'manuscripts';

interface GlobalContextViewProps {
  initialTab?: GlobalContextTab;
  initialExpandedId?: string;
  onNavigateToPassage?: (reference: string) => void;
  onOpenFullGlossary?: () => void;
}

export const GlobalContextView: React.FC<GlobalContextViewProps> = ({
  initialTab = 'world-sync',
  initialExpandedId,
  onNavigateToPassage,
  onOpenFullGlossary
}) => {
  const [activeTab, setActiveTab] = useState<GlobalContextTab>(initialTab);
  const [expandedId, setExpandedId] = useState<string | null>(initialExpandedId || null);
  const [favoritesMap, setFavoritesMap] = useState<Record<string, boolean>>({});

  // Theological Term Modal State
  const [selectedTerm, setSelectedTerm] = useState<TheologicalGlossaryTerm | null>(null);
  const [isTermModalOpen, setIsTermModalOpen] = useState(false);

  // Sync favorites
  useEffect(() => {
    const updateFavs = () => {
      const map: Record<string, boolean> = {};
      ecumenicalCouncilsData.forEach(c => {
        map[c.id] = isFavorite(c.id);
      });
      manuscriptsTranslationsData.forEach(m => {
        map[m.id] = isFavorite(m.id);
      });
      setFavoritesMap(map);
    };

    updateFavs();
    window.addEventListener(FAVORITES_UPDATED_EVENT, updateFavs);
    return () => window.removeEventListener(FAVORITES_UPDATED_EVENT, updateFavs);
  }, []);

  // Sync external navigation props
  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
    if (initialExpandedId) setExpandedId(initialExpandedId);
  }, [initialTab, initialExpandedId]);

  const toggle = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const handleToggleCouncilBookmark = (e: React.MouseEvent, council: typeof ecumenicalCouncilsData[0]) => {
    e.stopPropagation();
    toggleFavorite({
      id: council.id,
      entityType: 'council',
      title: council.name,
      subtitle: `${council.displayYear} • ${council.location}`,
      categoryOrTradition: 'Concílio Ecumênico'
    });
  };

  const handleToggleManuscriptBookmark = (e: React.MouseEvent, item: typeof manuscriptsTranslationsData[0]) => {
    e.stopPropagation();
    toggleFavorite({
      id: item.id,
      entityType: 'manuscript',
      title: item.title,
      subtitle: `${item.figureOrOrigin} (${item.period})`,
      categoryOrTradition: item.category
    });
  };

  // Click on Greek/Latin term: find in glossary or synthesize
  const handleTermClick = (termString: string) => {
    const clean = termString.toLowerCase().replace(/[\(\),.]/g, '').trim();
    
    // Look for exact or partial match in glossary
    const match = theologicalGlossaryData.find(g => {
      const gTerm = g.term.toLowerCase();
      const gOrig = g.originalLanguage?.transliteration.toLowerCase() || '';
      const gWord = g.originalLanguage?.word.toLowerCase() || '';
      return clean.includes(g.id) || g.id.includes(clean) || clean.includes(gOrig) || gOrig.includes(clean) || gTerm.includes(clean);
    });

    if (match) {
      setSelectedTerm(match);
      setIsTermModalOpen(true);
    } else {
      // Create lightweight term card preview
      const fallbackTerm: TheologicalGlossaryTerm = {
        id: `term-${clean}`,
        term: termString,
        category: 'Autoridade',
        originalLanguage: {
          word: termString,
          language: 'Grego',
          transliteration: termString,
          literalMeaning: 'Termo dogmático formulado nos Concílios Ecumênicos'
        },
        overview: `Termo técnico canônico utilizado para definir com exatidão a ortodoxia cristã e refutar ambiguidades heréticas durante as controvérsias conciliares da Igreja indivisa.`,
        catholicPerspective: {
          definition: `Reconhecido como definição dogmática infalível da fé cristã em comunhão com o Magistério e a Sé de Roma.`,
          primarySource: `Cânones dos Concílios Ecumênicos`
        },
        protestantPerspective: {
          definition: `Subscrito com reverência pelas confissões da Reforma como confissão fiel da revelação bíblica sobre a Trindade e Cristo.`,
          primarySource: `Confissão de Augsburgo Art. I; Confissão de Westminster Cap. II`
        },
        orthodoxPerspective: {
          definition: `Guardião da integridade do mistério da Encarnação e da Theosis, iluminado pelo consenso dos Santos Padres reunidos no Espírito Santo.`,
          primarySource: `Santos Padres Conciliares`
        },
        relatedVerses: ['Jo 1:1', 'Jo 1:14', 'Cl 2:9', '1Tm 3:16']
      };
      setSelectedTerm(fallbackTerm);
      setIsTermModalOpen(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 mb-3 border border-indigo-700/40">
          <Globe2 className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-bold font-serif text-stone-900 dark:text-stone-100">
          Contexto Histórico Global e Tradição
        </h1>
        <p className="text-sm text-stone-600 dark:text-stone-400 max-w-xl mx-auto mt-2">
          Sincronismos mundiais, a transição do Segundo Templo, os Concílios Ecumênicos e a preservação dos manuscritos sagrados.
        </p>
      </div>

      {/* Sub-Navegação Horizontal */}
      <div className="flex border-b border-stone-200 dark:border-stone-800 mb-6 gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          type="button"
          onClick={() => { setActiveTab('world-sync'); setExpandedId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'world-sync'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Globe2 className="w-4 h-4" />
          <span>Sincronismo Mundial</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('second-temple'); setExpandedId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'second-temple'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Columns className="w-4 h-4" />
          <span>Segundo Templo (400 Anos)</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('councils'); setExpandedId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'councils'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Concílios e Heresias</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('manuscripts'); setExpandedId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeTab === 'manuscripts'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Manuscritos e Traduções</span>
        </button>
      </div>

      {/* 1. Sincronismo Histórico Mundial */}
      {activeTab === 'world-sync' && (
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/20 text-xs text-indigo-900 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/40">
            Compreenda o que estava acontecendo na China, Grécia, Roma, Índia e Américas nos exatos momentos dos acontecimentos bíblicos.
          </div>
          {worldHistorySyncData.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} id={`sync-${item.id}`} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40 cursor-pointer"
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-base font-bold font-serif text-stone-900 dark:text-stone-100 mb-1">
                      {item.biblicalEpoch}
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      {item.biblicalContext}
                    </p>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
                </button>

                {isExpanded && (
                  <div className="p-5 border-t border-stone-200 dark:border-stone-800 bg-stone-50/40 dark:bg-stone-900/60 space-y-4 text-xs">
                    <div>
                      <h4 className="font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-mono">
                        <Globe2 className="w-3.5 h-3.5 text-indigo-600" />
                        Civilizações Contemporâneas Globais
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {item.contemporaryCivilizations.map((civ, idx) => (
                          <div key={idx} className="p-3 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
                            <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-0.5">
                              {civ.region}: {civ.civilization}
                            </span>
                            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                              {civ.historicalMilestones}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40">
                      <span className="font-bold text-indigo-900 dark:text-indigo-200 block mb-1">
                        Impacto Filosófico e Cultural Global:
                      </span>
                      <p className="text-stone-700 dark:text-stone-300">
                        {item.philosophicalCulturalImpact}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 2. Período Intertestamentário */}
      {activeTab === 'second-temple' && (
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800">
            A ponte entre Malaquias e Mateus: como os impérios persa, selêucida e romano moldaram o cenário religioso em que Jesus e os apóstolos pregaram.
          </div>
          {secondTempleHistoricalData.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} id={`temple-${item.id}`} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40 cursor-pointer"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold font-serif text-stone-900 dark:text-stone-100">
                        {item.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      Potência Dominante: {item.rulingPower}
                    </p>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
                </button>

                {isExpanded && (
                  <div className="p-5 border-t border-stone-200 dark:border-stone-800 bg-stone-50/40 dark:bg-stone-900/60 space-y-4 text-xs">
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {item.summary}
                    </p>
                    <div>
                      <h4 className="font-bold text-stone-500 uppercase tracking-wider mb-2 font-mono">
                        Marcos Históricos Decisivos
                      </h4>
                      <ul className="space-y-1.5">
                        {item.keyEvents.map((event, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                            <span>{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-stone-900 dark:text-stone-100 block mb-1">
                        Impacto Religioso (Gênese de Seitas e Tradições):
                      </span>
                      <p className="text-stone-600 dark:text-stone-300">
                        {item.religiousImpact}
                      </p>
                    </div>
                    {item.detailedConnections && item.detailedConnections.length > 0 ? (
                      <div className="space-y-2.5 pt-2 border-t border-stone-200/60 dark:border-stone-800">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            Conexões Bíblicas Explicadas ({item.detailedConnections.length})
                          </span>
                          <span className="text-[11px] text-stone-400 hidden sm:inline">
                            Clique para expandir a explicação teológica ou ler o capítulo
                          </span>
                        </div>
                        <div className="space-y-2">
                          {item.detailedConnections.map((conn) => (
                            <BiblicalConnectionCard
                              key={conn.id}
                              connection={conn}
                              onNavigateToPassage={onNavigateToPassage}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1.5 items-center">
                        <span className="text-stone-500 font-semibold mr-1">Conexões Bíblicas:</span>
                        {item.biblicalConnections.map((conn, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => onNavigateToPassage?.(conn)}
                            className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/60 hover:bg-indigo-200 dark:hover:bg-indigo-900 text-indigo-800 dark:text-indigo-300 font-mono transition-colors cursor-pointer"
                          >
                            {conn}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 3. Concílios Ecumênicos e Heresias */}
      {activeTab === 'councils' && (
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800">
            A ortodoxia trinitária e cristológica forjada nos grandes concílios da Igreja indivisa. 
            <span className="text-indigo-500 font-semibold ml-1">Clique nos termos gregos/latinos para abrir o verbete doutrinário completo.</span>
          </div>
          {ecumenicalCouncilsData.map(council => {
            const isExpanded = expandedId === council.id;
            const isBookmarked = !!favoritesMap[council.id];

            return (
              <div key={council.id} id={`council-${council.id}`} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm">
                <div
                  onClick={() => toggle(council.id)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40 cursor-pointer select-none"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold font-serif text-stone-900 dark:text-stone-100">
                        {council.name}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 font-medium">
                        {council.displayYear}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-indigo-500" />
                      {council.location} • Convocado por {council.convenedBy}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => handleToggleCouncilBookmark(e, council)}
                      className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                        isBookmarked 
                          ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' 
                          : 'bg-zinc-800/60 hover:bg-zinc-750 border-zinc-700/60 text-zinc-400 hover:text-white'
                      }`}
                      title={isBookmarked ? 'Remover dos favoritos' : 'Favoritar concílio'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>

                    <div className="text-stone-400 hover:text-indigo-500 p-2">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-5 border-t border-stone-200 dark:border-stone-800 bg-stone-50/40 dark:bg-stone-900/60 space-y-4 text-xs">
                    {/* Heresia combatida */}
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 rounded-lg">
                      <div className="flex items-center gap-1.5 text-red-700 dark:text-red-400 font-bold mb-1">
                        <AlertCircle className="w-4 h-4" />
                        Heresia Combatida: {council.heresyAddressed.name} ({council.heresyAddressed.proponent})
                      </div>
                      <p className="text-stone-700 dark:text-stone-300">
                        {council.heresyAddressed.coreError}
                      </p>
                    </div>

                    {/* Resposta Ortodoxa */}
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 rounded-lg">
                      <div className="text-emerald-800 dark:text-emerald-300 font-bold mb-1">
                        Definição Dogmática Ortodoxa:
                      </div>
                      <p className="text-stone-700 dark:text-stone-300 mb-2 leading-relaxed">
                        {council.orthodoxResponse.dogmaticFormulation}
                      </p>
                      
                      {/* Termos gregos e latinos clicáveis */}
                      <div className="space-y-1 mb-2">
                        <span className="text-[10px] uppercase font-bold text-stone-400 font-mono block">
                          Termos Dogmáticos Conciliares (Clique para abrir o verbete completo):
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {council.orthodoxResponse.greekLatinTerms.map((term, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleTermClick(term)}
                              className="px-2.5 py-1 rounded-md bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:hover:bg-emerald-800/60 text-emerald-900 dark:text-emerald-200 font-mono text-[11px] transition-colors flex items-center gap-1 border border-emerald-300 dark:border-emerald-700/60 cursor-pointer shadow-xs"
                              title={`Consultar verbete no Glossário: ${term}`}
                            >
                              <BookOpen className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                              <span>{term}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <span className="text-[11px] text-stone-500 block pt-1">
                        Principais Defensores: {council.orthodoxResponse.defenders.join(', ')}
                      </span>
                    </div>

                    <p className="text-stone-600 dark:text-stone-400 italic">
                      Legado Histórico: {council.historicalImpact}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* 4. História dos Manuscritos e Traduções */}
      {activeTab === 'manuscripts' && (
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800">
            A saga de preservação, cópia e tradução do texto bíblico: dos pergaminhos achados nas cavernas aos mártires que verteram as Escrituras no idioma do povo.
          </div>
          {manuscriptsTranslationsData.map(item => {
            const isExpanded = expandedId === item.id;
            const isBookmarked = !!favoritesMap[item.id];

            return (
              <div key={item.id} id={`manuscript-${item.id}`} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm">
                <div
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40 cursor-pointer select-none"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold font-serif text-stone-900 dark:text-stone-100">
                        {item.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 font-medium">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500">
                      {item.figureOrOrigin} • {item.period}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => handleToggleManuscriptBookmark(e, item)}
                      className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                        isBookmarked 
                          ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' 
                          : 'bg-zinc-800/60 hover:bg-zinc-750 border-zinc-700/60 text-zinc-400 hover:text-white'
                      }`}
                      title={isBookmarked ? 'Remover dos favoritos' : 'Favoritar manuscrito'}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>

                    <div className="text-stone-400 hover:text-indigo-500 p-2">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {isExpanded && (
                  <div className="p-5 border-t border-stone-200 dark:border-stone-800 bg-stone-50/40 dark:bg-stone-900/60 space-y-3 text-xs">
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1 font-mono uppercase text-[11px] tracking-wider">
                        Significado e Relevância Crítica:
                      </span>
                      <p className="text-stone-600 dark:text-stone-300">
                        {item.significance}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1 text-[11px] text-stone-500">
                      <span><strong>Idiomas:</strong> {item.primaryLanguages.join(', ')}</span>
                      {item.preservationLocation && (
                        <span>• <strong>Localização Atual:</strong> {item.preservationLocation}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Interativo de Termo Teológico */}
      <TheologicalTermModal
        term={selectedTerm}
        isOpen={isTermModalOpen}
        onClose={() => setIsTermModalOpen(false)}
        onNavigateToPassage={onNavigateToPassage}
        onOpenFullGlossary={onOpenFullGlossary}
      />
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Flame, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Quote, 
  BookMarked, 
  Award, 
  Calendar,
  Sparkles,
  Sun,
  ShieldAlert,
  Bookmark,
  Copy,
  Check,
  Scale
} from 'lucide-react';
import { goldenAgeData, byzantineSynthesisData, hesychasmData } from '../data/orthodoxTraditionData';
import { OrthodoxTheologianFigure, OrthodoxEra } from '../types';
import { isFavorite, toggleFavorite, FAVORITES_UPDATED_EVENT } from '../utils/favoritesStorage';

interface OrthodoxTraditionViewProps {
  initialFigureId?: string;
  onNavigateToDivergenceTopic?: (topicId: string) => void;
}

export const OrthodoxTraditionView: React.FC<OrthodoxTraditionViewProps> = ({
  initialFigureId,
  onNavigateToDivergenceTopic
}) => {
  const [activeEra, setActiveEra] = useState<OrthodoxEra>('golden-age');
  const [expandedFigureId, setExpandedFigureId] = useState<string | null>(initialFigureId || null);
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);
  const [favoritesMap, setFavoritesMap] = useState<Record<string, boolean>>({});

  // Sync favorites
  useEffect(() => {
    const updateFavs = () => {
      const allFigures = [...goldenAgeData, ...byzantineSynthesisData, ...hesychasmData];
      const map: Record<string, boolean> = {};
      allFigures.forEach(f => {
        map[f.id] = isFavorite(f.id);
      });
      setFavoritesMap(map);
    };

    updateFavs();
    window.addEventListener(FAVORITES_UPDATED_EVENT, updateFavs);
    return () => window.removeEventListener(FAVORITES_UPDATED_EVENT, updateFavs);
  }, []);

  // Sync initialFigureId if passed
  useEffect(() => {
    if (initialFigureId) {
      if (goldenAgeData.some(f => f.id === initialFigureId)) {
        setActiveEra('golden-age');
      } else if (byzantineSynthesisData.some(f => f.id === initialFigureId)) {
        setActiveEra('byzantine-synthesis');
      } else if (hesychasmData.some(f => f.id === initialFigureId)) {
        setActiveEra('hesychasm');
      }
      setExpandedFigureId(initialFigureId);
    }
  }, [initialFigureId]);

  const toggleFigure = (id: string) => {
    setExpandedFigureId(prev => prev === id ? null : id);
  };

  const handleToggleBookmark = (e: React.MouseEvent, figure: OrthodoxTheologianFigure) => {
    e.stopPropagation();
    toggleFavorite({
      id: figure.id,
      entityType: 'theologian-orthodox',
      title: figure.name,
      subtitle: `${figure.title} (${figure.period})`,
      categoryOrTradition: 'Tradição Ortodoxa',
      quote: figure.famousQuote
    });
  };

  const handleCopyQuote = (e: React.MouseEvent, figure: OrthodoxTheologianFigure) => {
    e.stopPropagation();
    if (!figure.famousQuote) return;
    const formatted = `"${figure.famousQuote}" — ${figure.name} (${figure.period}) | Bíblia Teológica`;
    navigator.clipboard.writeText(formatted);
    setCopiedQuoteId(figure.id);
    setTimeout(() => setCopiedQuoteId(null), 2500);
  };

  const getRelatedTopicId = (figureId: string): string => {
    if (figureId.includes('palamas') || figureId.includes('symeon')) return 'justificacao-fe-obras';
    if (figureId.includes('damascene')) return 'eucaristia-presenca';
    if (figureId.includes('chrysostom') || figureId.includes('basil') || figureId.includes('gregory')) return 'interpretacao-magisterio';
    return 'justificacao-fe-obras';
  };

  const renderFigureCard = (figure: OrthodoxTheologianFigure) => {
    const isExpanded = expandedFigureId === figure.id;
    const isBookmarked = !!favoritesMap[figure.id];
    const isQuoteCopied = copiedQuoteId === figure.id;

    return (
      <div 
        key={figure.id}
        id={`figure-${figure.id}`}
        className="mb-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
      >
        {/* Cabeçalho colapsável */}
        <div
          onClick={() => toggleFigure(figure.id)}
          className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40 transition-colors cursor-pointer select-none"
        >
          <div className="flex-1 pr-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                {figure.name}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-sans font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3 text-emerald-500" />
                {figure.period}
              </span>
            </div>
            <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
              {figure.title}
            </p>
            <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
              {figure.shortDescription}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Bookmark button */}
            <button
              type="button"
              onClick={(e) => handleToggleBookmark(e, figure)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' 
                  : 'bg-zinc-800/60 hover:bg-zinc-750 border-zinc-700/60 text-zinc-400 hover:text-white'
              }`}
              title={isBookmarked ? 'Remover dos favoritos' : 'Favoritar teólogo'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>

            <div className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-2">
              {isExpanded ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </div>
        </div>

        {/* Conteúdo expandido */}
        {isExpanded && (
          <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50/40 dark:bg-stone-900/60 space-y-6 animate-fadeIn">
            {/* Citação Famosa */}
            {figure.famousQuote && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600 text-stone-800 dark:text-stone-200 text-sm flex items-start justify-between gap-3 shadow-inner">
                <div className="flex items-start gap-3 flex-1">
                  <Quote className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-serif italic">"{figure.famousQuote}"</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => handleCopyQuote(e, figure)}
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  title="Copiar citação com referência"
                >
                  {isQuoteCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-300">Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copiar Citação</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Ação Contextual: Ver Divergências Relacionadas */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-800">
              <span className="text-xs text-zinc-400">
                Deseja consultar o comparador teológico tripartite sobre a perspectiva deste Padre?
              </span>
              <button
                type="button"
                onClick={() => onNavigateToDivergenceTopic?.(getRelatedTopicId(figure.id))}
                className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ver Divergências Relacionadas</span>
              </button>
            </div>

            {/* Biografia Completa */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                Vida e Contexto Histórico
              </h4>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed text-justify font-sans">
                {figure.biography}
              </p>
            </div>

            {/* Pilares do Pensamento */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                Pilares do Pensamento Teológico
              </h4>
              <ul className="space-y-1.5">
                {figure.coreThinking.map((item, idx) => (
                  <li key={idx} className="text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ênfases Doutrinárias */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-emerald-600" />
                Ênfases Litúrgicas e Espirituais
              </h4>
              <ul className="space-y-1.5">
                {figure.theologicalEmphasis.map((item, idx) => (
                  <li key={idx} className="text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contribuições Dogmáticas */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                Contribuições Canônicas para a Ortodoxia
              </h4>
              <div className="space-y-2">
                {figure.keyContributions.map((contrib, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-stone-800 dark:text-stone-200">
                    {contrib}
                  </div>
                ))}
              </div>
            </div>

            {/* Legado Histórico */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />
                Legado Litúrgico e Patrístico
              </h4>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed bg-white dark:bg-stone-800 p-3 rounded-lg border border-stone-200 dark:border-stone-700">
                {figure.legacy}
              </p>
            </div>

            {/* Obras Notáveis */}
            {figure.keyWorks && figure.keyWorks.length > 0 && (
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5 text-emerald-600" />
                  Tratados e Textos Fundamentais
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {figure.keyWorks.map((work, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-300 font-serif">
                      {work}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Cabeçalho */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 mb-3">
          <Flame className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-bold font-serif text-stone-900 dark:text-stone-100">
          A Tradição Teológica Ortodoxa Oriental
        </h1>
        <p className="text-sm text-stone-600 dark:text-stone-400 max-w-xl mx-auto mt-2">
          Fundamentos bibliográficos e dogmáticos dos Santos Padres Gregos, dos Defensores dos Ícones e da Tradição Hesicasta.
        </p>
      </div>

      {/* Sub-abas */}
      <div className="flex border-b border-stone-200 dark:border-stone-800 mb-6 gap-2 sm:gap-4 overflow-x-auto pb-1">
        <button
          onClick={() => { setActiveEra('golden-age'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeEra === 'golden-age'
              ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Sun className="w-4 h-4" />
          <span>A Idade de Ouro e Três Hierarcas (Séc. IV – V)</span>
        </button>

        <button
          onClick={() => { setActiveEra('byzantine-synthesis'); setExpandedFigureId('john-damascene'); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeEra === 'byzantine-synthesis'
              ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>A Síntese Bizantina e Defesa dos Ícones</span>
        </button>

        <button
          onClick={() => { setActiveEra('hesychasm'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeEra === 'hesychasm'
              ? 'border-emerald-600 text-emerald-600 dark:text-emerald-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Flame className="w-4 h-4" />
          <span>A Tradição Hesicasta e Luz Incriada</span>
        </button>
      </div>

      {/* Conteúdo Dinâmico */}
      <div>
        {activeEra === 'golden-age' && (
          <div>
            <div className="mb-4 p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400">
              Os arquitetos da ortodoxia trinitária e da liturgia bizantina que fixaram a divindade do Espírito Santo e a centralidade do mistério eucarístico.
            </div>
            {goldenAgeData.map(renderFigureCard)}
          </div>
        )}

        {activeEra === 'byzantine-synthesis' && (
          <div>
            <div className="mb-4 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 text-xs text-emerald-800 dark:text-emerald-300">
              A resposta teológica à questão das vontades de Cristo e à crise iconoclasta: a matéria é santificada e redimida pela Encarnação.
            </div>
            {byzantineSynthesisData.map(renderFigureCard)}
          </div>
        )}

        {activeEra === 'hesychasm' && (
          <div>
            <div className="mb-4 p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400">
              A teologia do Monte Athos e de São Gregório Palamas: a salvação como Theosis (deificação real) através da participação direta nas Energias Incriadas de Deus.
            </div>
            {hesychasmData.map(renderFigureCard)}
          </div>
        )}
      </div>
    </div>
  );
};

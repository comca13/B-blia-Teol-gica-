import React, { useState, useEffect } from 'react';
import { 
  Church, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Quote, 
  BookMarked, 
  Award, 
  Calendar,
  Sparkles,
  ShieldCheck,
  Bookmark,
  Copy,
  Check,
  Scale
} from 'lucide-react';
import { patristicData, scholasticData, counterReformationData } from '../data/catholicTraditionData';
import { CatholicTheologianFigure, CatholicEra } from '../types';
import { isFavorite, toggleFavorite, FAVORITES_UPDATED_EVENT } from '../utils/favoritesStorage';

interface CatholicTraditionViewProps {
  initialFigureId?: string;
  onNavigateToDivergenceTopic?: (topicId: string) => void;
}

export const CatholicTraditionView: React.FC<CatholicTraditionViewProps> = ({
  initialFigureId,
  onNavigateToDivergenceTopic
}) => {
  const [activeEra, setActiveEra] = useState<CatholicEra>('patristic');
  const [expandedFigureId, setExpandedFigureId] = useState<string | null>(initialFigureId || null);
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);
  const [favoritesMap, setFavoritesMap] = useState<Record<string, boolean>>({});

  // Sync favorites
  useEffect(() => {
    const updateFavs = () => {
      const allFigures = [...patristicData, ...scholasticData, ...counterReformationData];
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
      if (patristicData.some(f => f.id === initialFigureId)) {
        setActiveEra('patristic');
      } else if (scholasticData.some(f => f.id === initialFigureId)) {
        setActiveEra('scholastic');
      } else if (counterReformationData.some(f => f.id === initialFigureId)) {
        setActiveEra('counter-reformation');
      }
      setExpandedFigureId(initialFigureId);
    }
  }, [initialFigureId]);

  const toggleFigure = (id: string) => {
    setExpandedFigureId(prev => prev === id ? null : id);
  };

  const handleToggleBookmark = (e: React.MouseEvent, figure: CatholicTheologianFigure) => {
    e.stopPropagation();
    toggleFavorite({
      id: figure.id,
      entityType: 'theologian-catholic',
      title: figure.name,
      subtitle: `${figure.title} (${figure.period})`,
      categoryOrTradition: 'Tradição Católica',
      quote: figure.famousQuote
    });
  };

  const handleCopyQuote = (e: React.MouseEvent, figure: CatholicTheologianFigure) => {
    e.stopPropagation();
    if (!figure.famousQuote) return;
    const formatted = `"${figure.famousQuote}" — ${figure.name} (${figure.period}) | Bíblia Teológica`;
    navigator.clipboard.writeText(formatted);
    setCopiedQuoteId(figure.id);
    setTimeout(() => setCopiedQuoteId(null), 2500);
  };

  const getRelatedTopicId = (figureId: string): string => {
    if (figureId.includes('augustine')) return 'justificacao-fe-obras';
    if (figureId.includes('aquinas')) return 'eucaristia-presenca';
    if (figureId.includes('bellarmine')) return 'interpretacao-magisterio';
    return 'justificacao-fe-obras';
  };

  const renderFigureCard = (figure: CatholicTheologianFigure) => {
    const isExpanded = expandedFigureId === figure.id;
    const isBookmarked = !!favoritesMap[figure.id];
    const isQuoteCopied = copiedQuoteId === figure.id;

    return (
      <div 
        key={figure.id}
        id={`figure-${figure.id}`}
        className="mb-4 bg-zinc-900/90 dark:bg-stone-900 border border-zinc-800 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
      >
        {/* Cabeçalho colapsável */}
        <div
          onClick={() => toggleFigure(figure.id)}
          className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-800/40 transition-colors cursor-pointer select-none"
        >
          <div className="flex-1 pr-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg font-bold font-serif text-stone-100">
                {figure.name}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-950/70 text-amber-300 border border-amber-800/50 font-sans font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-400" />
                {figure.period}
              </span>
            </div>
            <p className="text-xs font-semibold text-amber-400 mb-1">
              {figure.title}
            </p>
            <p className="text-xs text-stone-400 line-clamp-2">
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

            <div className="text-stone-400 hover:text-amber-400 p-2">
              {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-400" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </div>
        </div>

        {/* Conteúdo expandido */}
        {isExpanded && (
          <div className="p-6 border-t border-zinc-800 dark:border-stone-800 bg-zinc-950/50 space-y-6 animate-fadeIn">
            {/* Citação Famosa */}
            {figure.famousQuote && (
              <div className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 text-stone-200 text-sm flex items-start justify-between gap-3 shadow-inner">
                <div className="flex items-start gap-3 flex-1">
                  <Quote className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-serif italic">"{figure.famousQuote}"</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => handleCopyQuote(e, figure)}
                  className="px-2.5 py-1.5 rounded-lg bg-amber-950/60 hover:bg-amber-900/60 border border-amber-500/40 text-amber-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  title="Copiar citação com citação bibliográfica"
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
                Gostaria de analisar o debate ecumênico tripartite sobre as teses deste Doutor?
              </span>
              <button
                type="button"
                onClick={() => onNavigateToDivergenceTopic?.(getRelatedTopicId(figure.id))}
                className="px-3 py-1.5 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/40 text-amber-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span>Ver Divergências Relacionadas</span>
              </button>
            </div>

            {/* Biografia Completa */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                Vida e Contexto Histórico
              </h4>
              <p className="text-sm text-stone-300 leading-relaxed text-justify font-sans">
                {figure.biography}
              </p>
            </div>

            {/* Pilares do Pensamento */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Pilares do Pensamento Teológico
              </h4>
              <ul className="space-y-1.5">
                {figure.coreThinking.map((item, idx) => (
                  <li key={idx} className="text-xs text-stone-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ênfases Doutrinárias */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Ênfases Doutrinárias e Eclesiais
              </h4>
              <ul className="space-y-1.5">
                {figure.theologicalEmphasis.map((item, idx) => (
                  <li key={idx} className="text-xs text-stone-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contribuições Dogmáticas */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Contribuições Dogmáticas Perenes
              </h4>
              <div className="space-y-2">
                {figure.keyContributions.map((contrib, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-900/40 text-xs text-stone-200">
                    {contrib}
                  </div>
                ))}
              </div>
            </div>

            {/* Legado Histórico */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <BookMarked className="w-3.5 h-3.5 text-amber-400" />
                Legado Histórico e Eclesial
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                {figure.legacy}
              </p>
            </div>

            {/* Obras Notáveis */}
            {figure.keyWorks && figure.keyWorks.length > 0 && (
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  Tratados e Textos Fundamentais
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {figure.keyWorks.map((work, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-stone-300 border border-zinc-700 font-serif">
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
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-amber-950/60 text-amber-300 mb-3 border border-amber-700/40">
          <Church className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-bold font-serif text-stone-100">
          A Tradição e Doutores Católicos
        </h1>
        <p className="text-sm text-stone-400 max-w-xl mx-auto mt-2">
          Fontes primárias, teologia sacramental e dogmática da Patrística Latina, da Escolástica Medieval e dos Santos Doutores.
        </p>
      </div>

      {/* Sub-abas */}
      <div className="flex border-b border-zinc-800 mb-6 gap-2 sm:gap-4 overflow-x-auto pb-1">
        <button
          onClick={() => { setActiveEra('patristic'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeEra === 'patristic'
              ? 'border-amber-500 text-amber-400'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>A Patrística Latina (Séc. IV – V)</span>
        </button>

        <button
          onClick={() => { setActiveEra('scholastic'); setExpandedFigureId('thomas-aquinas'); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeEra === 'scholastic'
              ? 'border-amber-500 text-amber-400'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>A Escolástica Medieval (Séc. XIII)</span>
        </button>

        <button
          onClick={() => { setActiveEra('counter-reformation'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeEra === 'counter-reformation'
              ? 'border-amber-500 text-amber-400'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          <Church className="w-4 h-4" />
          <span>A Contra-Reforma e Doutores Modernos</span>
        </button>
      </div>

      {/* Conteúdo Dinâmico */}
      <div>
        {activeEra === 'patristic' && (
          <div>
            <div className="mb-4 p-4 rounded-lg bg-zinc-900 text-xs text-stone-300 border border-zinc-800">
              O florescimento do pensamento teológico latino em diálogo com a filosofia clássica, fixando a doutrina da graça, a eclesiologia e a Vulgata.
            </div>
            {patristicData.map(renderFigureCard)}
          </div>
        )}

        {activeEra === 'scholastic' && (
          <div>
            <div className="mb-4 p-4 rounded-lg bg-amber-950/20 text-xs text-amber-300 border border-amber-900/40">
              A harmonia entre Fé e Razão: o ápice da síntese aristotélico-tomista nas grandes universidades medievais e o desenvolvimento dos sacramentos.
            </div>
            {scholasticData.map(renderFigureCard)}
          </div>
        )}

        {activeEra === 'counter-reformation' && (
          <div>
            <div className="mb-4 p-4 rounded-lg bg-zinc-900 text-xs text-stone-300 border border-zinc-800">
              A renovação espiritual pós-Trento, a sistematização da teologia moral e dogmática, e o florescimento dos mestres de oração e doutores da Igreja.
            </div>
            {counterReformationData.map(renderFigureCard)}
          </div>
        )}
      </div>
    </div>
  );
};

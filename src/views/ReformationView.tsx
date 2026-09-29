import React, { useState, useEffect } from 'react';
import { 
  Scroll, 
  Flame, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Quote, 
  BookMarked, 
  Cross, 
  Calendar,
  Layers,
  Sparkles,
  Bookmark,
  Copy,
  Check,
  Scale
} from 'lucide-react';
import { preReformersData, lutherData, postReformersData } from '../data/reformationHistoryData';
import { ReformerFigure, ReformationEra } from '../types';
import { isFavorite, toggleFavorite, FAVORITES_UPDATED_EVENT } from '../utils/favoritesStorage';

interface ReformationViewProps {
  initialFigureId?: string;
  onNavigateToDivergenceTopic?: (topicId: string) => void;
}

export const ReformationView: React.FC<ReformationViewProps> = ({
  initialFigureId,
  onNavigateToDivergenceTopic
}) => {
  const [activeEra, setActiveEra] = useState<ReformationEra>('pre-reformers');
  const [expandedFigureId, setExpandedFigureId] = useState<string | null>(initialFigureId || null);
  const [copiedQuoteId, setCopiedQuoteId] = useState<string | null>(null);
  const [favoritesMap, setFavoritesMap] = useState<Record<string, boolean>>({});

  // Sync favorites
  useEffect(() => {
    const updateFavs = () => {
      const allFigures = [...preReformersData, lutherData, ...postReformersData];
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
      if (preReformersData.some(f => f.id === initialFigureId)) {
        setActiveEra('pre-reformers');
      } else if (lutherData.id === initialFigureId) {
        setActiveEra('luther');
      } else if (postReformersData.some(f => f.id === initialFigureId)) {
        setActiveEra('post-reformers');
      }
      setExpandedFigureId(initialFigureId);
    }
  }, [initialFigureId]);

  const toggleFigure = (id: string) => {
    setExpandedFigureId(prev => prev === id ? null : id);
  };

  const handleToggleBookmark = (e: React.MouseEvent, figure: ReformerFigure) => {
    e.stopPropagation();
    toggleFavorite({
      id: figure.id,
      entityType: 'theologian-reformation',
      title: figure.name,
      subtitle: `${figure.title} (${figure.period})`,
      categoryOrTradition: 'Reforma Protestante',
      quote: figure.famousQuote
    });
  };

  const handleCopyQuote = (e: React.MouseEvent, figure: ReformerFigure) => {
    e.stopPropagation();
    if (!figure.famousQuote) return;
    const formatted = `"${figure.famousQuote}" — ${figure.name} (${figure.period}) | Bíblia Teológica`;
    navigator.clipboard.writeText(formatted);
    setCopiedQuoteId(figure.id);
    setTimeout(() => setCopiedQuoteId(null), 2500);
  };

  const getRelatedTopicId = (figureId: string): string => {
    if (figureId.includes('luther') || figureId.includes('melanchthon') || figureId.includes('wycliffe') || figureId.includes('hus')) {
      return 'justificacao-fe-obras';
    }
    if (figureId.includes('calvin') || figureId.includes('zwingli') || figureId.includes('knox')) {
      return 'fonte-revelacao';
    }
    return 'justificacao-fe-obras';
  };

  const renderFigureCard = (figure: ReformerFigure) => {
    const isExpanded = expandedFigureId === figure.id;
    const isBookmarked = !!favoritesMap[figure.id];
    const isQuoteCopied = copiedQuoteId === figure.id;

    return (
      <div 
        key={figure.id}
        id={`figure-${figure.id}`}
        className="mb-4 bg-zinc-900/90 dark:bg-zinc-900/95 border border-zinc-800/90 rounded-2xl overflow-hidden shadow-lg transition-all duration-200"
      >
        {/* Cabeçalho colapsável */}
        <div
          onClick={() => toggleFigure(figure.id)}
          className="w-full text-left p-5 sm:p-6 flex items-center justify-between hover:bg-zinc-850/60 transition-colors cursor-pointer select-none"
        >
          <div className="flex-1 pr-4">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-100">
                {figure.name}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 font-sans font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3 text-blue-400" />
                {figure.period}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-blue-400 mb-1">
              {figure.title}
            </p>
            <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
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

            <div className="text-zinc-400 hover:text-blue-400 p-2">
              {isExpanded ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
            </div>
          </div>
        </div>

        {/* Conteúdo detalhado revelado ao expandir */}
        {isExpanded && (
          <div className="p-5 sm:p-7 border-t border-zinc-800/80 bg-zinc-950/50 space-y-6 animate-in fade-in duration-200">
            {/* Citação Famosa com botão de cópia formatada */}
            {figure.famousQuote && (
              <div className="p-4 rounded-xl bg-blue-500/10 border-l-4 border-blue-500 text-stone-200 text-sm flex items-start justify-between gap-3 shadow-inner">
                <div className="flex items-start gap-3 flex-1">
                  <Quote className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="font-serif italic">"{figure.famousQuote}"</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => handleCopyQuote(e, figure)}
                  className="px-2.5 py-1.5 rounded-lg bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
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
                Gostaria de ver o debate teológico tripartite sobre as ênfases deste autor?
              </span>
              <button
                type="button"
                onClick={() => onNavigateToDivergenceTopic?.(getRelatedTopicId(figure.id))}
                className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
              >
                <Scale className="w-3.5 h-3.5 text-blue-400" />
                <span>Ver Divergências Relacionadas</span>
              </button>
            </div>

            {/* Biografia Completa */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400/90 mb-2 flex items-center gap-1.5 font-mono">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                Biografia e Contexto Histórico
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed text-justify font-sans">
                {figure.biography}
              </p>
            </div>

            {/* Linhas de Pensamento */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400/90 mb-2 flex items-center gap-1.5 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Pensamento Teológico Central
              </h4>
              <ul className="space-y-2">
                {figure.coreThinking.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-stone-300 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ênfases e Práticas */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400 mb-2 flex items-center gap-1.5 font-mono">
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                Ênfases Principais e Ações
              </h4>
              <ul className="space-y-2">
                {figure.theologicalEmphasis.map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-stone-300 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divergências Teológicas */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-red-400 mb-2 flex items-center gap-1.5 font-mono">
                <Flame className="w-3.5 h-3.5 text-red-400" />
                Principais Divergências com Roma ou Entre Reformadores
              </h4>
              <div className="space-y-2">
                {figure.keyDivergences.map((div, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-red-950/20 border border-red-900/40 text-xs sm:text-sm text-stone-200 leading-relaxed">
                    {div}
                  </div>
                ))}
              </div>
            </div>

            {/* Legado Histórico */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400/90 mb-2 flex items-center gap-1.5 font-mono">
                <Cross className="w-3.5 h-3.5 text-blue-400" />
                Legado Histórico e Teológico
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed bg-zinc-900/90 p-4 rounded-xl border border-zinc-800">
                {figure.legacy}
              </p>
            </div>

            {/* Obras Notáveis */}
            {figure.keyWorks && figure.keyWorks.length > 0 && (
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-blue-400/90 mb-2.5 flex items-center gap-1.5 font-mono">
                  <BookMarked className="w-3.5 h-3.5 text-blue-400" />
                  Obras e Escritos Notáveis
                </h4>
                <div className="flex flex-wrap gap-2">
                  {figure.keyWorks.map((work, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-zinc-800 text-blue-200 border border-zinc-700/60 font-serif">
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
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Título da Aba Principal */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 shadow-lg">
          <Flame className="w-7 h-7" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-100 tracking-tight">
          A Reforma Protestante e suas Raízes
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Explore as trajetórias, convicções inegociáveis, obras magnas e legados dos homens que recuperaram as doutrinas da Graça e da autoridade suprema das Escrituras Sagradas.
        </p>
      </div>

      {/* Sub-abas de Períodos da Reforma */}
      <div className="flex items-center justify-center border-b border-zinc-800 gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-none">
        <button
          type="button"
          onClick={() => { setActiveEra('pre-reformers'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeEra === 'pre-reformers'
              ? 'border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-xl'
              : 'border-transparent text-zinc-400 hover:text-stone-200 hover:bg-zinc-900/50 rounded-t-xl'
          }`}
        >
          <Scroll className="w-4 h-4" />
          <span>Pré-Reformadores (Séc. XIV–XV)</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveEra('luther'); setExpandedFigureId('martin-luther'); }}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeEra === 'luther'
              ? 'border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-xl'
              : 'border-transparent text-zinc-400 hover:text-stone-200 hover:bg-zinc-900/50 rounded-t-xl'
          }`}
        >
          <Flame className="w-4 h-4" />
          <span>Martinho Lutero (Wittenberg)</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveEra('post-reformers'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all cursor-pointer whitespace-nowrap ${
            activeEra === 'post-reformers'
              ? 'border-blue-500 text-blue-400 bg-blue-500/10 rounded-t-xl'
              : 'border-transparent text-zinc-400 hover:text-stone-200 hover:bg-zinc-900/50 rounded-t-xl'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Pós-Reformadores (Séc. XVI)</span>
        </button>
      </div>

      {/* Conteúdo dos Cards de Acordo com a Sub-aba Selecionada */}
      <div className="space-y-4 pt-2">
        {activeEra === 'pre-reformers' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200/90 leading-relaxed">
              <strong>As Vozes no Deserto:</strong> Séculos antes da publicação das 95 Teses, precursores como John Wycliffe na Inglaterra e Jan Hus na Boêmia desafiaram as prerrogativas papais, defenderam a tradução da Bíblia na língua vernácula e pagaram o preço com o martírio.
            </div>
            {preReformersData.map(renderFigureCard)}
          </div>
        )}

        {activeEra === 'luther' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200/90 leading-relaxed">
              <strong>O Epicentro da Reforma:</strong> Martinho Lutero e a redescoberta da Justificação Somente pela Fé (<em>Sola Fide</em>). O embate diante da Dieta Imperial de Worms e a tradução inigualável do Novo Testamento no Castelo de Wartburg.
            </div>
            {renderFigureCard(lutherData)}
          </div>
        )}

        {activeEra === 'post-reformers' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-200/90 leading-relaxed">
              <strong>A Consolidação Teológica Continental:</strong> A sistematização magistral da fé reformada por João Calvino em Genebra, a defesa de Filipe Melâncton na Confissão de Augsburgo e o desassombro profético de John Knox na Escócia.
            </div>
            {postReformersData.map(renderFigureCard)}
          </div>
        )}
      </div>
    </div>
  );
};

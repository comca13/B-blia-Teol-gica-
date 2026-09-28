import React, { useState } from 'react';
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
  Sparkles
} from 'lucide-react';
import { preReformersData, lutherData, postReformersData } from '../data/reformationHistoryData';
import { ReformerFigure, ReformationEra } from '../types';

export const ReformationView: React.FC = () => {
  const [activeEra, setActiveEra] = useState<ReformationEra>('pre-reformers');
  const [expandedFigureId, setExpandedFigureId] = useState<string | null>(null);

  const toggleFigure = (id: string) => {
    setExpandedFigureId(prev => prev === id ? null : id);
  };

  const renderFigureCard = (figure: ReformerFigure) => {
    const isExpanded = expandedFigureId === figure.id;

    return (
      <div 
        key={figure.id}
        className="mb-4 bg-zinc-900/90 dark:bg-zinc-900/95 border border-zinc-800/90 rounded-2xl overflow-hidden shadow-lg transition-all duration-200"
      >
        {/* Cabeçalho colapsável (sempre visível) */}
        <button
          type="button"
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

          <div className="text-zinc-400 hover:text-blue-400 p-2 shrink-0 transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {/* Conteúdo detalhado revelado ao expandir */}
        {isExpanded && (
          <div className="p-5 sm:p-7 border-t border-zinc-800/80 bg-zinc-950/50 space-y-6 animate-in fade-in duration-200">
            {/* Citação Famosa */}
            {figure.famousQuote && (
              <div className="p-4 rounded-xl bg-blue-500/10 border-l-4 border-blue-500 text-stone-200 italic text-sm flex gap-3 shadow-inner">
                <Quote className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <span className="font-serif">"{figure.famousQuote}"</span>
              </div>
            )}

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
        <h1 className="text-2xl sm:text-3xl font-bold font-cinzel text-stone-100 tracking-wide">
          A Reforma Protestante
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto font-serif leading-relaxed">
          Estudo histórico, bibliográfico e doutrinário dos precursores medievais, do catalisador de Wittenberg e dos grandes sistematizadores da fé reformada.
        </p>
      </div>

      {/* Sub-abas de Navegação Histórica */}
      <div className="flex border-b border-zinc-800 gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          type="button"
          onClick={() => { setActiveEra('pre-reformers'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeEra === 'pre-reformers'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Scroll className="w-4 h-4" />
          <span>Pré-Reformadores (Séc. XII – XV)</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveEra('luther'); setExpandedFigureId('martin-luther'); }}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeEra === 'luther'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <Flame className="w-4 h-4" />
          <span>Martinho Lutero (1517)</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveEra('post-reformers'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
            activeEra === 'post-reformers'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-zinc-400 hover:text-zinc-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Pós-Reformadores e Consolidação</span>
        </button>
      </div>

      {/* Listagem Dinâmica da Sub-Aba Ativa */}
      <div className="space-y-4">
        {activeEra === 'pre-reformers' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              Estes homens viveram séculos antes das 95 Teses e pagaram frequentemente com a própria vida pela defesa do retorno às Escrituras Sagradas e da pureza eclesial. Clique em cada figura para consultar os seus dados completos.
            </div>
            {preReformersData.map(renderFigureCard)}
          </div>
        )}

        {activeEra === 'luther' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs sm:text-sm text-blue-300 font-serif leading-relaxed">
              O ponto central de viragem: o monge agostiniano que desafiou o papado romano e recuperou a certeza da justificação pela graça mediante a fé (Sola Fide).
            </div>
            {renderFigureCard(lutherData)}
          </div>
        )}

        {activeEra === 'post-reformers' && (
          <div className="space-y-4 animate-in fade-in duration-150">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed">
              A segunda e terceira gerações que estruturaram teologicamente, eclesiasticamente e socialmente os desdobramentos da Reforma em Genebra, Zurique, na Escócia e nos Países Baixos.
            </div>
            {postReformersData.map(renderFigureCard)}
          </div>
        )}
      </div>
    </div>
  );
};

ReformationView.displayName = 'ReformationView';

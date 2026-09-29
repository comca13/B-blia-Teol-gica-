import React, { useState } from 'react';
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
  ShieldAlert
} from 'lucide-react';
import { goldenAgeData, byzantineSynthesisData, hesychasmData } from '../data/orthodoxTraditionData';
import { OrthodoxTheologianFigure, OrthodoxEra } from '../types';

export const OrthodoxTraditionView: React.FC = () => {
  const [activeEra, setActiveEra] = useState<OrthodoxEra>('golden-age');
  const [expandedFigureId, setExpandedFigureId] = useState<string | null>(null);

  const toggleFigure = (id: string) => {
    setExpandedFigureId(prev => prev === id ? null : id);
  };

  const renderFigureCard = (figure: OrthodoxTheologianFigure) => {
    const isExpanded = expandedFigureId === figure.id;

    return (
      <div 
        key={figure.id}
        className="mb-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
      >
        {/* Cabeçalho colapsável */}
        <button
          onClick={() => toggleFigure(figure.id)}
          className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40 transition-colors"
        >
          <div className="flex-1 pr-4">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                {figure.name}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-sans font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" />
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

          <div className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-2">
            {isExpanded ? <ChevronUp className="w-5 h-5 text-emerald-600" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {/* Conteúdo expandido */}
        {isExpanded && (
          <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50/40 dark:bg-stone-900/60 space-y-6 animate-fadeIn">
            {/* Citação Famosa */}
            {figure.famousQuote && (
              <div className="p-4 rounded-lg bg-emerald-500/10 border-l-4 border-emerald-600 text-stone-800 dark:text-stone-200 italic text-sm flex gap-3">
                <Quote className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>"{figure.famousQuote}"</span>
              </div>
            )}

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
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
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
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
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
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
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

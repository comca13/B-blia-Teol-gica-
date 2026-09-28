import React, { useState } from 'react';
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
  Crown
} from 'lucide-react';
import { patristicData, scholasticData, counterReformationData } from '../data/catholicTraditionData';
import { CatholicTheologianFigure, CatholicEra } from '../types';

export const CatholicTraditionView: React.FC = () => {
  const [activeEra, setActiveEra] = useState<CatholicEra>('patristic');
  const [expandedFigureId, setExpandedFigureId] = useState<string | null>(null);

  const toggleFigure = (id: string) => {
    setExpandedFigureId(prev => prev === id ? null : id);
  };

  const renderFigureCard = (figure: CatholicTheologianFigure) => {
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
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 font-sans font-medium flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {figure.period}
              </span>
            </div>
            <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1">
              {figure.title}
            </p>
            <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
              {figure.shortDescription}
            </p>
          </div>

          <div className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-2">
            {isExpanded ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {/* Conteúdo expandido */}
        {isExpanded && (
          <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50/40 dark:bg-stone-900/60 space-y-6 animate-fadeIn">
            {/* Citação Famosa */}
            {figure.famousQuote && (
              <div className="p-4 rounded-lg bg-blue-500/10 border-l-4 border-blue-600 text-stone-800 dark:text-stone-200 italic text-sm flex gap-3">
                <Quote className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>"{figure.famousQuote}"</span>
              </div>
            )}

            {/* Biografia Completa */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                Biografia e Contexto Histórico
              </h4>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed text-justify font-sans">
                {figure.biography}
              </p>
            </div>

            {/* Pensamento Central */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Pilares do Pensamento Teológico
              </h4>
              <ul className="space-y-1.5">
                {figure.coreThinking.map((item, idx) => (
                  <li key={idx} className="text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ênfases e Formulações Teológicas */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                Ênfases Doutrinárias e Teológicas
              </h4>
              <ul className="space-y-1.5">
                {figure.theologicalEmphasis.map((item, idx) => (
                  <li key={idx} className="text-xs text-stone-700 dark:text-stone-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contribuições Dogmáticas Perenes */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                Contribuições Dogmáticas e Eclesiais para a Igreja Católica
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
                <Crown className="w-3.5 h-3.5 text-blue-600" />
                Legado e Magistério
              </h4>
              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed bg-white dark:bg-stone-800 p-3 rounded-lg border border-stone-200 dark:border-stone-700">
                {figure.legacy}
              </p>
            </div>

            {/* Obras Notáveis */}
            {figure.keyWorks && figure.keyWorks.length > 0 && (
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                  <BookMarked className="w-3.5 h-3.5 text-blue-600" />
                  Principais Tratados e Escritos
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
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 mb-3">
          <Church className="w-7 h-7" />
        </div>
        <h1 className="text-3xl font-bold font-serif text-stone-900 dark:text-stone-100">
          A Tradição e Doutores Católicos
        </h1>
        <p className="text-sm text-stone-600 dark:text-stone-400 max-w-xl mx-auto mt-2">
          Fundamentos bibliográficos e sistemáticos dos Padres da Igreja, dos Doutores da Escolástica e dos teólogos da Contra-Reforma.
        </p>
      </div>

      {/* Sub-abas */}
      <div className="flex border-b border-stone-200 dark:border-stone-800 mb-6 gap-2 sm:gap-4 overflow-x-auto pb-1">
        <button
          onClick={() => { setActiveEra('patristic'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeEra === 'patristic'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Church className="w-4 h-4" />
          <span>Patrística e Padres da Igreja (Séc. I – VIII)</span>
        </button>

        <button
          onClick={() => { setActiveEra('scholastic'); setExpandedFigureId('thomas-aquinas'); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeEra === 'scholastic'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>A Escolástica e Síntese Medieval</span>
        </button>

        <button
          onClick={() => { setActiveEra('counter-reformation'); setExpandedFigureId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeEra === 'counter-reformation'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Contra-Reforma e Doutores Modernos</span>
        </button>
      </div>

      {/* Conteúdo Dinâmico */}
      <div>
        {activeEra === 'patristic' && (
          <div>
            <div className="mb-4 p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400">
              Os Pais Apostólicos e Doutores Antigos que defenderam a sucessão apostólica, fixaram o cânon bíblico e refutaram as primeiras grandes heresias cristológicas e trinitárias.
            </div>
            {patristicData.map(renderFigureCard)}
          </div>
        )}

        {activeEra === 'scholastic' && (
          <div>
            <div className="mb-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 text-xs text-blue-800 dark:text-blue-300">
              O florescimento do pensamento medieval: a harmonização da fé com a razão e a sistematização dos sacramentos e da moral católica.
            </div>
            {scholasticData.map(renderFigureCard)}
          </div>
        )}

        {activeEra === 'counter-reformation' && (
          <div>
            <div className="mb-4 p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400">
              A resposta teológica e mística do Concílio de Trento: apologética das controvérsias, cartografia da vida interior e a santificação universal dos fiéis.
            </div>
            {counterReformationData.map(renderFigureCard)}
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
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
  Layers
} from 'lucide-react';
import { worldHistorySyncData } from '../data/worldHistorySyncData';
import { secondTempleHistoricalData } from '../data/secondTempleHistoricalData';
import { ecumenicalCouncilsData } from '../data/ecumenicalCouncilsData';
import { manuscriptsTranslationsData } from '../data/manuscriptsTranslationsData';

type GlobalContextTab = 'world-sync' | 'second-temple' | 'councils' | 'manuscripts';

export const GlobalContextView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GlobalContextTab>('world-sync');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Título Principal */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 mb-3">
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
      <div className="flex border-b border-stone-200 dark:border-stone-800 mb-6 gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => { setActiveTab('world-sync'); setExpandedId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'world-sync'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Globe2 className="w-4 h-4" />
          <span>Sincronismo Mundial</span>
        </button>

        <button
          onClick={() => { setActiveTab('second-temple'); setExpandedId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'second-temple'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Columns className="w-4 h-4" />
          <span>Segundo Templo (400 Anos)</span>
        </button>

        <button
          onClick={() => { setActiveTab('councils'); setExpandedId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
            activeTab === 'councils'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
          }`}
        >
          <Scale className="w-4 h-4" />
          <span>Concílios e Heresias</span>
        </button>

        <button
          onClick={() => { setActiveTab('manuscripts'); setExpandedId(null); }}
          className={`flex items-center gap-2 py-3 px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
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
          <div className="p-4 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/20 text-xs text-indigo-900 dark:text-indigo-300">
            Compreenda o que estava acontecendo na China, Grécia, Roma, Índia e Américas nos exatos momentos dos acontecimentos bíblicos.
          </div>
          {worldHistorySyncData.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40"
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
                      <h4 className="font-bold text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
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
          <div className="p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400">
            A ponte entre Malaquias e Mateus: como os impérios persa, selêucida e romano moldaram o cenário religioso em que Jesus e os apóstolos pregaram.
          </div>
          {secondTempleHistoricalData.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40"
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
                      <h4 className="font-bold text-stone-500 uppercase tracking-wider mb-2">
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
                    <div className="flex flex-wrap gap-1.5 items-center">
                      <span className="text-stone-500 font-semibold mr-1">Conexões Bíblicas:</span>
                      {item.biblicalConnections.map((conn, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300 font-sans">
                          {conn}
                        </span>
                      ))}
                    </div>
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
          <div className="p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400">
            A ortodoxia trinitária e cristológica forjada nos grandes concílios da Igreja indivisa contra as heresias que ameaçavam a integridade do Evangelho.
          </div>
          {ecumenicalCouncilsData.map(council => {
            const isExpanded = expandedId === council.id;
            return (
              <div key={council.id} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggle(council.id)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40"
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
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
                </button>

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
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {council.orthodoxResponse.greekLatinTerms.map((term, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/50 text-emerald-900 dark:text-emerald-200 font-mono text-[11px]">
                            {term}
                          </span>
                        ))}
                      </div>
                      <span className="text-[11px] text-stone-500">
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
          <div className="p-4 rounded-lg bg-stone-100 dark:bg-stone-800/50 text-xs text-stone-600 dark:text-stone-400">
            A saga de preservação, cópia e tradução do texto bíblico: dos pergaminhos achados nas cavernas aos mártires que verteram as Escrituras no idioma do povo.
          </div>
          {manuscriptsTranslationsData.map(item => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 flex items-center justify-between hover:bg-stone-50/80 dark:hover:bg-stone-800/40"
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
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-indigo-600" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
                </button>

                {isExpanded && (
                  <div className="p-5 border-t border-stone-200 dark:border-stone-800 bg-stone-50/40 dark:bg-stone-900/60 space-y-3 text-xs">
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="p-3 bg-white dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700">
                      <span className="font-bold text-indigo-700 dark:text-indigo-300 block mb-1">
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
    </div>
  );
};

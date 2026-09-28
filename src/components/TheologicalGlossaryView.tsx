import React, { useState, useMemo } from 'react';
import { TheologicalGlossaryTerm, ComparisonCategory, TheologicalTraditionId } from '../types';
import { theologicalGlossaryData } from '../data/theologicalVocabularyData';
import { 
  Search, 
  BookOpen, 
  Languages, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  Scroll,
  Users,
  Quote
} from 'lucide-react';

interface TheologicalGlossaryViewProps {
  onNavigateToPassage?: (reference: string) => void;
}

export const TheologicalGlossaryView: React.FC<TheologicalGlossaryViewProps> = ({
  onNavigateToPassage
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ComparisonCategory | 'all'>('all');
  const [activeTraditionTab, setActiveTraditionTab] = useState<'all' | TheologicalTraditionId>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return theologicalGlossaryData.filter(item => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTerm = item.term.toLowerCase().includes(q);
        const matchesOverview = item.overview.toLowerCase().includes(q);
        const matchesOriginal = item.originalLanguage && (
          item.originalLanguage.word.toLowerCase().includes(q) ||
          item.originalLanguage.transliteration.toLowerCase().includes(q) ||
          item.originalLanguage.literalMeaning.toLowerCase().includes(q)
        );
        const matchesCath = item.catholicPerspective.definition.toLowerCase().includes(q) ||
          item.catholicPerspective.primarySource.toLowerCase().includes(q);
        const matchesProt = item.protestantPerspective.definition.toLowerCase().includes(q) ||
          item.protestantPerspective.primarySource.toLowerCase().includes(q);
        const matchesOrth = item.orthodoxPerspective && (
          item.orthodoxPerspective.definition.toLowerCase().includes(q) ||
          item.orthodoxPerspective.primarySource.toLowerCase().includes(q)
        );
        const matchesVerses = item.relatedVerses?.some(v => v.toLowerCase().includes(q)) ?? false;

        return matchesTerm || matchesOverview || matchesOriginal || matchesCath || matchesProt || matchesOrth || matchesVerses;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopy = (term: TheologicalGlossaryTerm) => {
    let text = `=== GLOSSÁRIO TEOLÓGICO: ${term.term.toUpperCase()} ===\n`;
    if (term.originalLanguage) {
      text += `Original: ${term.originalLanguage.word} (${term.originalLanguage.transliteration} - ${term.originalLanguage.language})\n`;
      text += `Sentido Literal: "${term.originalLanguage.literalMeaning}"\n\n`;
    }
    text += `Visão Geral: ${term.overview}\n\n`;
    text += `[CATOLICISMO ROMANO]\n${term.catholicPerspective.definition}\nFonte: ${term.catholicPerspective.primarySource}\n\n`;
    text += `[PROTESTANTISMO HISTÓRICO]\n${term.protestantPerspective.definition}\nFonte: ${term.protestantPerspective.primarySource}\n\n`;
    if (term.orthodoxPerspective) {
      text += `[ORTODOXIA ORIENTAL]\n${term.orthodoxPerspective.definition}\nFonte: ${term.orthodoxPerspective.primarySource}\n\n`;
    }
    if (term.relatedVerses && term.relatedVerses.length > 0) {
      text += `Passagens Bíblicas: ${term.relatedVerses.join(', ')}\n`;
    }

    navigator.clipboard.writeText(text);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const categories: (ComparisonCategory | 'all')[] = [
    'all',
    'Salvação',
    'Autoridade',
    'Eclesiologia e Santos',
    'Sacramentos e Liturgia'
  ];

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950/30 to-stone-900 border border-amber-500/25 rounded-2xl p-5 sm:p-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold">
              <Languages className="w-3.5 h-3.5" />
              <span>Vocabulário Diferenciado & Etimologia Bíblica</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-cinzel text-zinc-100">
              Glossário Teológico Tripartite
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-serif leading-relaxed max-w-2xl">
              Os mesmos termos hebraicos, gregos e latinos receberam acepções ontológicas, jurídicas e místicas distintas no decorrer dos séculos. Explore a raiz original e o significado técnico em cada tradição cristã.
            </p>
          </div>
          <div className="shrink-0 text-xs text-amber-400 font-mono bg-zinc-950/60 px-3 py-1.5 rounded-xl border border-zinc-800">
            {filteredTerms.length} {filteredTerms.length === 1 ? 'termo' : 'termos'} indexados
          </div>
        </div>
      </div>

      {/* Search and Category Filter */}
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 space-y-3.5 shadow-md">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar termo bíblico, palavra grega/latina (ex: dikaioō, theōsis, charis, Filioque)..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 focus:outline-hidden focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Tradition selector */}
          <div className="flex items-center gap-1 p-1 bg-zinc-950 rounded-xl border border-zinc-800 shrink-0 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTraditionTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTraditionTab === 'all'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              Tripartite
            </button>
            <button
              type="button"
              onClick={() => setActiveTraditionTab('catholic')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTraditionTab === 'catholic'
                  ? 'bg-amber-500 text-zinc-950 shadow-xs'
                  : 'text-zinc-400 hover:text-amber-300 hover:bg-zinc-900'
              }`}
            >
              Catolicismo
            </button>
            <button
              type="button"
              onClick={() => setActiveTraditionTab('protestant')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTraditionTab === 'protestant'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-indigo-300 hover:bg-zinc-900'
              }`}
            >
              Protestantismo
            </button>
            <button
              type="button"
              onClick={() => setActiveTraditionTab('orthodox')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTraditionTab === 'orthodox'
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
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-amber-600/90 text-white border-amber-500 shadow-xs'
                  : 'bg-zinc-950/80 text-zinc-400 hover:text-zinc-200 border-zinc-800'
              }`}
            >
              {cat === 'all' ? 'Todas as Categorias' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Terms List */}
      <div className="space-y-4">
        {filteredTerms.map(term => (
          <article
            key={term.id}
            className="bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-5 sm:p-6 shadow-lg transition-all"
          >
            {/* Top Term Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-zinc-800/80 pb-4 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h4 className="text-lg sm:text-xl font-bold font-cinzel text-zinc-100">
                    {term.term}
                  </h4>
                  {term.category && (
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-zinc-800 text-amber-400 border border-zinc-700">
                      {term.category}
                    </span>
                  )}
                </div>

                {/* Original Root Snippet */}
                {term.originalLanguage && (
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300 font-serif">
                    <span className="px-2 py-0.5 rounded-md bg-amber-950/50 border border-amber-600/30 text-amber-300 font-semibold font-mono">
                      {term.originalLanguage.word}
                    </span>
                    <span className="text-zinc-400 italic">
                      ({term.originalLanguage.transliteration} • {term.originalLanguage.language})
                    </span>
                    <span className="text-zinc-400">
                      — Literal: <strong className="text-zinc-200">"{term.originalLanguage.literalMeaning}"</strong>
                    </span>
                  </div>
                )}
              </div>

              {/* Action: Copy */}
              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(term)}
                  className="px-2.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border border-zinc-700/60"
                  title="Copiar definição completa"
                >
                  {copiedId === term.id ? (
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

            {/* Overview */}
            <p className="text-xs sm:text-sm text-zinc-300 font-serif leading-relaxed mb-4 bg-zinc-950/50 p-3.5 rounded-xl border border-zinc-800/80">
              <strong className="text-amber-400">Visão Geral: </strong>
              {term.overview}
            </p>

            {/* Tripartite Grid / Filtered Views */}
            <div className={`grid gap-3.5 ${
              activeTraditionTab === 'all'
                ? 'grid-cols-1 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}>
              {/* Catolicismo */}
              {(activeTraditionTab === 'all' || activeTraditionTab === 'catholic') && (
                <div className="bg-amber-950/15 border border-amber-500/30 rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                    <h5 className="text-xs font-bold uppercase tracking-wider text-amber-300 font-cinzel">
                      Catolicismo Romano
                    </h5>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {term.catholicPerspective.definition}
                  </p>
                  <div className="pt-2 border-t border-amber-500/20 flex items-start gap-1.5 text-[11px] text-amber-300/90 font-serif">
                    <Quote className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span className="italic">{term.catholicPerspective.primarySource}</span>
                  </div>
                </div>
              )}

              {/* Protestantismo */}
              {(activeTraditionTab === 'all' || activeTraditionTab === 'protestant') && (
                <div className="bg-indigo-950/15 border border-indigo-500/30 rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 shrink-0" />
                    <h5 className="text-xs font-bold uppercase tracking-wider text-indigo-300 font-cinzel">
                      Protestantismo Confessional
                    </h5>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {term.protestantPerspective.definition}
                  </p>
                  <div className="pt-2 border-t border-indigo-500/20 flex items-start gap-1.5 text-[11px] text-indigo-300/90 font-serif">
                    <Quote className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="italic">{term.protestantPerspective.primarySource}</span>
                  </div>
                </div>
              )}

              {/* Ortodoxia Oriental */}
              {term.orthodoxPerspective && (activeTraditionTab === 'all' || activeTraditionTab === 'orthodox') && (
                <div className="bg-emerald-950/15 border border-emerald-500/30 rounded-xl p-4 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-300 font-cinzel">
                      Ortodoxia Oriental
                    </h5>
                  </div>
                  <p className="text-xs text-zinc-300 font-serif leading-relaxed">
                    {term.orthodoxPerspective.definition}
                  </p>
                  <div className="pt-2 border-t border-emerald-500/20 flex items-start gap-1.5 text-[11px] text-emerald-300/90 font-serif">
                    <Quote className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="italic">{term.orthodoxPerspective.primarySource}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Related Biblical Passages */}
            {term.relatedVerses && term.relatedVerses.length > 0 && (
              <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-zinc-500 font-medium">Passagens bíblicas centrais:</span>
                {term.relatedVerses.map(verse => (
                  <button
                    key={verse}
                    type="button"
                    onClick={() => onNavigateToPassage && onNavigateToPassage(verse)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-800/80 hover:bg-amber-600/30 text-zinc-300 hover:text-amber-200 border border-zinc-700 hover:border-amber-500/50 transition-colors cursor-pointer font-serif text-[11px]"
                  >
                    <span>{verse}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </button>
                ))}
              </div>
            )}
          </article>
        ))}

        {filteredTerms.length === 0 && (
          <div className="text-center py-12 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <BookOpen className="w-10 h-10 text-zinc-600 mx-auto mb-2" />
            <p className="text-sm text-zinc-400 font-serif">Nenhum termo encontrado para sua busca.</p>
          </div>
        )}
      </div>
    </div>
  );
};

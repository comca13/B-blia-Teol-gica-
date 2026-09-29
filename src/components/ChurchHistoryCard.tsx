import React, { useState, useEffect } from 'react';
import { 
  Landmark, 
  Flame, 
  Sparkles, 
  Shield, 
  Scale, 
  MapPin, 
  Users, 
  Bookmark, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  BookOpen, 
  Scroll, 
  Quote, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { ChurchHistoryEvent, TheologicalGlossaryTerm } from '../types';
import { CHURCH_HISTORY_ERAS_INFO, ECUMENICAL_CREEDS } from '../data/churchHistoryData';
import { getGlossaryTermById, searchGlossaryTerms } from '../data/theologicalVocabularyData';
import { isFavorite, toggleFavorite, SavedFavoriteItem } from '../utils/favoritesStorage';
import { DogmaticTermPopover } from './DogmaticTermPopover';
import { getDogmaticTermExplanation, DogmaticTermExplanation } from '../data/dogmaticTermsDictionary';

export interface ChurchHistoryCardProps {
  event: ChurchHistoryEvent;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  onNavigateToPassage?: (reference: string) => void;
  onNavigateToCreed?: (creedId: string) => void;
  onOpenGlossaryTerm?: (term: TheologicalGlossaryTerm) => void;
}

export type ChurchHistoryInnerTab = 'contexto' | 'debate' | 'citacoes' | 'legado';

export const ChurchHistoryCard: React.FC<ChurchHistoryCardProps> = ({
  event,
  isExpanded = false,
  onToggleExpand,
  onNavigateToPassage,
  onNavigateToCreed,
  onOpenGlossaryTerm
}) => {
  const [activeTab, setActiveTab] = useState<ChurchHistoryInnerTab>('contexto');
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [selectedDogmaticTerm, setSelectedDogmaticTerm] = useState<DogmaticTermExplanation | null>(null);
  const [termAnchorRect, setTermAnchorRect] = useState<DOMRect | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Sync bookmark status
  useEffect(() => {
    setIsBookmarked(isFavorite(event.id));

    const handleUpdate = () => {
      setIsBookmarked(isFavorite(event.id));
    };

    window.addEventListener('theological-favorites-updated', handleUpdate);
    return () => window.removeEventListener('theological-favorites-updated', handleUpdate);
  }, [event.id]);

  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    const item: Omit<SavedFavoriteItem, 'savedAt'> = {
      id: event.id,
      entityType: 'church-history-event',
      title: event.title,
      subtitle: `${event.year} • ${event.location || CHURCH_HISTORY_ERAS_INFO[event.era].name}`,
      categoryOrTradition: `História: ${event.category}`,
      quote: event.primarySourceQuote?.text
    };
    const newState = toggleFavorite(item);
    setIsBookmarked(newState);
  };

  const handleCopyQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!event.primarySourceQuote) return;
    const formatted = `"${event.primarySourceQuote.text}"\n— ${event.primarySourceQuote.author}${event.primarySourceQuote.work ? ` (${event.primarySourceQuote.work})` : ''}\n\n[Bíblia Teológica: ${event.title}, ${event.year}]`;
    navigator.clipboard.writeText(formatted);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2000);
  };

  const eraInfo = CHURCH_HISTORY_ERAS_INFO[event.era];

  // Category visual metadata
  const categoryBadge = {
    TEOLOGIA: { label: 'Teologia & Doutrina', icon: Scale, style: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
    CONCILIO: { label: 'Concílio Ecumênico', icon: Landmark, style: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' },
    AVIVAMENTO: { label: 'Avivamento & Missões', icon: Sparkles, style: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
    REFORMA: { label: 'Reforma Eclesiástica', icon: Flame, style: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30' },
    PERSEGUICAO: { label: 'Perseguição & Mártires', icon: Shield, style: 'bg-rose-500/10 text-rose-300 border-rose-500/30' }
  }[event.category] || { label: event.category, icon: Landmark, style: 'bg-zinc-800 text-zinc-400 border-zinc-700' };

  const CategoryIcon = categoryBadge.icon;

  // Find linked creed title if applicable
  const linkedCreed = event.relatedCreedId 
    ? ECUMENICAL_CREEDS.find(c => c.id === event.relatedCreedId) 
    : undefined;

  const handleDogmaticTermClick = (e: React.MouseEvent<HTMLButtonElement>, termText: string) => {
    e.stopPropagation();
    const explanation = getDogmaticTermExplanation(termText);
    const rect = e.currentTarget.getBoundingClientRect();
    setSelectedDogmaticTerm(explanation);
    setTermAnchorRect(rect);
    setIsPopoverOpen(true);
  };

  const handleTermClick = (termText: string) => {
    if (!onOpenGlossaryTerm) return;
    // Attempt exact match
    let found = getGlossaryTermById(termText.toLowerCase().replace(/\s+/g, '-'));
    if (!found) {
      const results = searchGlossaryTerms(termText);
      if (results.length > 0) found = results[0];
    }
    if (found) {
      onOpenGlossaryTerm(found);
    }
  };

  return (
    <div 
      id={`church-event-${event.id}`}
      className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${
        isExpanded 
          ? 'bg-zinc-900/95 border-amber-500/50 shadow-xl shadow-amber-950/20 ring-1 ring-amber-500/20' 
          : 'bg-zinc-900/70 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/90 shadow-sm'
      }`}
    >
      {/* CARD HEADER (Always Visible) */}
      <div 
        onClick={onToggleExpand}
        className="p-4 sm:p-5 cursor-pointer select-none space-y-3"
      >
        {/* Top Badges & Quick Actions */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {/* Year Badge */}
            <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-xs">
              {event.year}
            </span>

            {/* Era Badge */}
            <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${eraInfo.badgeBg}`}>
              {eraInfo.name}
            </span>

            {/* Category Badge */}
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-medium border ${categoryBadge.style}`}>
              <CategoryIcon className="w-3 h-3" />
              <span>{categoryBadge.label}</span>
            </span>

            {/* Location (if available) */}
            {event.location && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
                <MapPin className="w-3 h-3 text-zinc-500" />
                <span>{event.location}</span>
              </span>
            )}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 ml-auto">
            {/* Bookmark button */}
            <button
              type="button"
              onClick={handleToggleBookmark}
              title={isBookmarked ? "Remover dos favoritos" : "Salvar marco histórico"}
              className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' 
                  : 'bg-zinc-800/70 border-zinc-700/60 text-zinc-400 hover:text-white hover:bg-zinc-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            </button>

            {/* Expand / Collapse Indicator */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleExpand?.();
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                isExpanded
                  ? 'bg-amber-600 text-white border-amber-500 shadow-xs'
                  : 'bg-zinc-800 text-stone-200 hover:bg-zinc-750 border-zinc-700'
              }`}
            >
              <span className="hidden xs:inline">
                {isExpanded ? 'Recolher' : 'Aprofundar'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-3.5 h-3.5 text-white" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
              )}
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-base sm:text-lg font-bold text-stone-100 group-hover:text-amber-200 transition-colors leading-snug">
          {event.title}
        </h3>

        {/* Executive Summary */}
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed text-justify sm:text-left">
          {event.description}
        </p>

        {/* Key Figures Pill Row */}
        {event.keyFigures && event.keyFigures.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] text-zinc-400 flex items-center gap-1 mr-1 shrink-0">
              <Users className="w-3 h-3 text-amber-400/80" /> Figuras centrais:
            </span>
            {event.keyFigures.map((figure, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-800/90 text-stone-200 border border-zinc-700/50"
              >
                {figure}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* EXPANDABLE SECTION: 4 THEMATIC TABS */}
      {isExpanded && (
        <div className="border-t border-zinc-800/90 bg-zinc-950/70 p-4 sm:p-6 space-y-5 animate-in fade-in duration-200">
          
          {/* Sub-Navigation Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-zinc-800/80">
            {[
              { id: 'contexto', label: 'Contexto Histórico', icon: Landmark },
              { id: 'debate', label: 'Debate Teológico', icon: Scale },
              { id: 'citacoes', label: 'Fontes & Citações', icon: Scroll },
              { id: 'legado', label: 'Legado & Conexões', icon: BookOpen }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as ChurchHistoryInnerTab)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-t-xl text-xs font-semibold whitespace-nowrap transition-colors border-b-2 cursor-pointer ${
                    isActive
                      ? 'border-amber-500 text-amber-400 bg-amber-950/20'
                      : 'border-transparent text-zinc-400 hover:text-stone-200 hover:bg-zinc-900/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: CONTEXTO HISTÓRICO */}
          {activeTab === 'contexto' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400/90 font-bold flex items-center gap-1.5">
                  <Landmark className="w-3.5 h-3.5" />
                  Bastidores Políticos, Geográficos e Culturais:
                </span>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-line text-justify sm:text-left bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/80">
                  {event.historicalContextDetailed || event.description}
                </p>
              </div>

              {event.historicalSignificance && (
                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 text-xs sm:text-sm text-amber-200/90 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-amber-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Significado Histórico & Eclesiológico:</span>
                  </div>
                  <p className="leading-relaxed text-stone-200">
                    {event.historicalSignificance}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: DEBATE TEOLÓGICO */}
          {activeTab === 'debate' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {event.theologicalDebate ? (
                <>
                  {/* Controvérsia Central */}
                  <div className="p-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5" />
                      Controvérsia Doutrinária Central:
                    </span>
                    <p className="text-xs sm:text-sm font-serif font-bold text-stone-100">
                      {event.theologicalDebate.coreControversy}
                    </p>
                  </div>

                  {/* 2-Column Comparativo: Visão Divergente vs. Formulação Ortodoxa */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {/* Lado Herético / Desafio */}
                    <div className="p-4 rounded-2xl bg-rose-950/15 border border-rose-900/30 space-y-2">
                      <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span>Posição Divergente / Herética Refutada:</span>
                      </div>
                      <p className="text-xs text-rose-200/90 leading-relaxed text-justify sm:text-left">
                        {event.theologicalDebate.hereticalOrChallengingView}
                      </p>
                    </div>

                    {/* Lado Ortodoxo */}
                    <div className="p-4 rounded-2xl bg-emerald-950/15 border border-emerald-900/30 space-y-2">
                      <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Formulação Bíblica & Ortodoxa Definida:</span>
                      </div>
                      <p className="text-xs text-emerald-200/90 leading-relaxed text-justify sm:text-left">
                        {event.theologicalDebate.orthodoxFormulation}
                      </p>
                    </div>
                  </div>

                  {/* Termos Dogmáticos Chave */}
                  {event.theologicalDebate.dogmaticTerms && event.theologicalDebate.dogmaticTerms.length > 0 && (
                    <div className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                        Termos Dogmáticos & Teológicos Formulados:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.theologicalDebate.dogmaticTerms.map((term, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={(e) => handleDogmaticTermClick(e, term)}
                            title={`Clique para ler explicação rápida de "${term}"`}
                            className="px-2.5 py-1 rounded-xl text-xs font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/25 hover:bg-amber-500/20 hover:border-amber-500/60 transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs group"
                          >
                            <span>{term}</span>
                            <Sparkles className="w-3 h-3 text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="p-6 text-center text-zinc-400 text-xs italic">
                  O detalhamento teológico formal deste marco histórico está sintetizado no contexto e legado.
                </div>
              )}
            </div>
          )}

          {/* TAB 3: CITAÇÕES & FONTES PRIMÁRIAS */}
          {activeTab === 'citacoes' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {event.primarySourceQuote ? (
                <div className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between gap-2 border-b border-stone-800 pb-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                      <Quote className="w-3.5 h-3.5" />
                      <span>Citação de Fonte Primária Autêntica</span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyQuote}
                      className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-stone-200 border border-zinc-700 text-[11px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedQuote ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-300">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-zinc-400" />
                          <span>Copiar Citação</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Quote Body */}
                  <blockquote className="font-serif italic text-sm sm:text-base text-stone-100 leading-relaxed pl-3 border-l-2 border-amber-500">
                    "{event.primarySourceQuote.text}"
                  </blockquote>

                  {/* Author & Work Attribution */}
                  <div className="pt-2 text-right">
                    <span className="text-xs font-semibold text-amber-300 block">
                      — {event.primarySourceQuote.author}
                    </span>
                    {event.primarySourceQuote.work && (
                      <span className="text-[11px] text-zinc-400 italic block">
                        {event.primarySourceQuote.work}
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center text-zinc-400 text-xs italic">
                  Nenhuma citação de fonte primária cadastrada diretamente para este evento.
                </div>
              )}
            </div>
          )}

          {/* TAB 4: LEGADO & CONEXÕES CRUZADAS */}
          {activeTab === 'legado' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              {/* Pontos de Legado Histórico */}
              {event.legacyPoints && event.legacyPoints.length > 0 && (
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                    Impactos e Frutos Duradouros para a Igreja Hoje:
                  </span>
                  <ul className="space-y-2">
                    {event.legacyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-200 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conexão com os Grandes Credos */}
              {event.relatedCreedId && linkedCreed && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/30 to-zinc-900 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                      <Scroll className="w-3.5 h-3.5" />
                      Credo Ecumênico Vinculado:
                    </span>
                    <h5 className="font-serif font-bold text-sm text-stone-100">
                      {linkedCreed.title} ({linkedCreed.year})
                    </h5>
                    <p className="text-[11px] text-zinc-400">
                      {linkedCreed.council}
                    </p>
                  </div>

                  {onNavigateToCreed && (
                    <button
                      type="button"
                      onClick={() => onNavigateToCreed(linkedCreed.id)}
                      className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-xs"
                    >
                      <Scroll className="w-3.5 h-3.5" />
                      <span>Ver Texto Integral do Credo</span>
                    </button>
                  )}
                </div>
              )}

              {/* Conexão com Escrituras Sagradas */}
              {event.scriptureReferences && event.scriptureReferences.length > 0 && (
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Passagens Bíblicas Fundamentais do Embate:
                    </span>
                    <span className="text-[10px] text-zinc-500 hidden sm:inline">
                      Clique para ler o texto sagrado
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {event.scriptureReferences.map((ref, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => onNavigateToPassage?.(ref)}
                        title={`Abrir ${ref} na Bíblia`}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-amber-600/30 text-stone-200 hover:text-amber-300 border border-zinc-700 hover:border-amber-500/50 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <BookOpen className="w-3 h-3 text-amber-400" />
                        <span>{ref}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      )}

      {/* Popover Explicativo Rápido do Termo Dogmático */}
      <DogmaticTermPopover
        term={selectedDogmaticTerm}
        isOpen={isPopoverOpen}
        anchorRect={termAnchorRect}
        onClose={() => {
          setIsPopoverOpen(false);
          setSelectedDogmaticTerm(null);
          setTermAnchorRect(null);
        }}
        onNavigateToPassage={onNavigateToPassage}
      />
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { PlanType, UserProgress, DayReading, ThematicPlan, ThematicCategory } from '../types';
import { HISTORICAL_PERIODS } from '../data/theologicalPeriods';
import { CANONICAL_PLAN } from '../data/canonicalPlan';
import { CHRONOLOGICAL_PLAN } from '../data/chronologicalPlan';
import { thematicPlansData, THEMATIC_CATEGORIES_META } from '../data/thematicPlansData';
import { ThematicPlanCard } from '../components/ThematicPlanCard';
import { ThematicPlanDetailsModal } from '../components/ThematicPlanDetailsModal';
import { 
  Compass, 
  Layers, 
  Check, 
  Sparkles, 
  Flame, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Search, 
  Filter, 
  Bookmark, 
  ArrowRight,
  BookOpen,
  Scroll,
  Info,
  CheckCheck
} from 'lucide-react';

interface PlansViewProps {
  activePlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
  progress: UserProgress;
  days: DayReading[];
  onToggleComplete: (day: number) => void;
  onSelectDay: (day: number) => void;
  currentDayNumber: number;
  onSelectThematicPassage?: (passageRef: string) => void;
}

export const PlansView: React.FC<PlansViewProps> = ({
  activePlan,
  onSelectPlan,
  progress,
  days,
  onToggleComplete,
  onSelectDay,
  currentDayNumber,
  onSelectThematicPassage
}) => {
  // 3 Main Tabs: 1. Canônico, 2. Cronológico, 3. Jornadas Temáticas
  const [activeTab, setActiveTab] = useState<'canonical' | 'chronological' | 'thematic'>(
    activePlan === 'canonical' ? 'canonical' : 'chronological'
  );

  // States for 365 days browser (used in canonical and chronological tabs)
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'pending' | 'bookmarked'>('all');

  // States for Thematic Journeys tab
  const [thematicSearchTerm, setThematicSearchTerm] = useState('');
  const [selectedThemeCategory, setSelectedThemeCategory] = useState<ThematicCategory | 'ALL'>('ALL');
  const [selectedThematicPlan, setSelectedThematicPlan] = useState<ThematicPlan | null>(null);

  const percent = Math.round((progress.completedDays.length / 365) * 100);

  // Pick dataset based on current tab: canonical or chronological
  const currentTabDays = useMemo(() => {
    if (activeTab === 'canonical') return CANONICAL_PLAN;
    if (activeTab === 'chronological') return CHRONOLOGICAL_PLAN;
    return days;
  }, [activeTab, days]);

  // Filter 365 days for the active canonical/chronological tab
  const filteredDays = useMemo(() => {
    return currentTabDays.filter(day => {
      const matchesSearch = 
        day.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        day.day.toString().includes(searchTerm) ||
        day.passages.some(p => 
          p.reference.toLowerCase().includes(searchTerm.toLowerCase()) || 
          p.book.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesPeriod = selectedPeriod === 'all' || day.periodId === selectedPeriod;

      const isCompleted = progress.completedDays.includes(day.day);
      const isBookmarked = progress.bookmarks.includes(day.day);

      let matchesStatus = true;
      if (statusFilter === 'completed') matchesStatus = isCompleted;
      if (statusFilter === 'pending') matchesStatus = !isCompleted;
      if (statusFilter === 'bookmarked') matchesStatus = isBookmarked;

      return matchesSearch && matchesPeriod && matchesStatus;
    });
  }, [currentTabDays, searchTerm, selectedPeriod, statusFilter, progress]);

  // Filter Thematic Plans
  const filteredThematicPlans = useMemo(() => {
    return thematicPlansData.filter(plan => {
      const matchesCategory = 
        selectedThemeCategory === 'ALL' || 
        plan.themeCategory === selectedThemeCategory ||
        (selectedThemeCategory === 'ESCATOLOGIA' && plan.themeCategory === 'ESCATOlOGIA');

      const matchesSearch = 
        plan.title.toLowerCase().includes(thematicSearchTerm.toLowerCase()) ||
        plan.shortDescription.toLowerCase().includes(thematicSearchTerm.toLowerCase()) ||
        plan.readings.some(r => r.passageRef.toLowerCase().includes(thematicSearchTerm.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [thematicSearchTerm, selectedThemeCategory]);

  // Helper to get completed days for a thematic plan from localStorage
  const getThematicCompletedCount = (planId: string) => {
    try {
      const stored = localStorage.getItem(`thematic_plan_progress_${planId}`);
      if (stored) {
        const arr = JSON.parse(stored);
        return Array.isArray(arr) ? arr.length : 0;
      }
    } catch {
      return 0;
    }
    return 0;
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-6">
      
      {/* Top Banner: Overview & Progress */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-5 sm:p-7 shadow-xl">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Plataforma de Leitura & Teologia Bíblica</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
              {activeTab === 'canonical' && '1. Plano Canônico Balanceado'}
              {activeTab === 'chronological' && '2. Plano Histórico-Cronológico'}
              {activeTab === 'thematic' && '3. Jornadas Temáticas (Teologia Bíblica)'}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              {activeTab === 'canonical' && 'Leitura contínua na ordem impressa tradicional dos 66 livros da Bíblia sagrada, de Gênesis ao Apocalipse.'}
              {activeTab === 'chronological' && 'Leitura segundo a cronologia real dos eventos históricos (Salmos nos episódios de Davi, Profetas nos Reis, Epístolas em Atos).'}
              {activeTab === 'thematic' && 'Estudos focados em rastrear os grandes fios condutores da Redenção (Templo, Sábado, O Cordeiro, O Reino) desde o Éden até a Consumação.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">
                {percent}%
              </span>
              <p className="text-[11px] text-zinc-400">
                {progress.completedDays.length} de 365 dias do plano anual
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-800/40 text-amber-400 flex flex-col items-center">
              <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
              <span className="text-xs font-bold mt-0.5">{progress.streak}d</span>
            </div>
          </div>
        </div>

        {/* Annual Progress Bar */}
        <div className="mt-5">
          <div className="w-full bg-zinc-800/80 rounded-full h-2.5 overflow-hidden p-0.5">
            <div 
              className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 h-full rounded-full transition-all duration-500 shadow-xs"
              style={{ width: `${Math.max(percent, 2)}%` }}
            />
          </div>
        </div>
      </section>

      {/* 3 Main Navigation Tabs */}
      <div className="flex items-center justify-center">
        <div className="inline-flex p-1 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-md flex-wrap justify-center gap-1">
          {/* Tab 1: Canônico */}
          <button
            type="button"
            onClick={() => setActiveTab('canonical')}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'canonical'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>1. Canônico</span>
            {activePlan === 'canonical' && (
              <span className="w-2 h-2 rounded-full bg-emerald-400" title="Seu plano ativo" />
            )}
          </button>

          {/* Tab 2: Cronológico */}
          <button
            type="button"
            onClick={() => setActiveTab('chronological')}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'chronological'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>2. Cronológico</span>
            {activePlan === 'chronological' && (
              <span className="w-2 h-2 rounded-full bg-emerald-400" title="Seu plano ativo" />
            )}
          </button>

          {/* Tab 3: Jornadas Temáticas */}
          <button
            type="button"
            onClick={() => setActiveTab('thematic')}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'thematic'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>3. Jornadas Temáticas</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Novo
            </span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ABA 1: CANÔNICO & ABA 2: CRONOLÓGICO */}
      {/* ========================================================================= */}
      {(activeTab === 'canonical' || activeTab === 'chronological') && (
        <div className="space-y-5">
          {/* Plan Activation Status Banner */}
          <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-800/40 text-amber-400 flex items-center justify-center shrink-0">
                {activeTab === 'canonical' ? <Layers className="w-5 h-5" /> : <Compass className="w-5 h-5" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif font-bold text-stone-100 text-sm sm:text-base">
                    {activeTab === 'canonical' ? 'Plano Canônico Tradicional' : 'Plano Histórico-Cronológico'}
                  </h4>
                  {activePlan === activeTab ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                      <CheckCheck className="w-3 h-3 text-emerald-400" />
                      <span>Plano Ativo</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-zinc-500">Inativo</span>
                  )}
                </div>
                <p className="text-xs text-zinc-400">
                  {activeTab === 'canonical'
                    ? '365 dias lendo os livros na sequência canônica impressa (Gênesis a Apocalipse).'
                    : '365 dias sincronizando livros históricos, proféticos e poéticos em tempo real.'}
                </p>
              </div>
            </div>

            {activePlan !== activeTab && (
              <button
                type="button"
                onClick={() => onSelectPlan(activeTab)}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors shrink-0 shadow-xs"
              >
                Definir como Meu Plano Principal
              </button>
            )}
          </div>

          {/* Search & Filters Bar */}
          <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-3.5 space-y-3">
            <div className="flex flex-col sm:flex-row gap-2.5">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Pesquisar por dia, livro bíblico ou passagem..."
                  className="w-full pl-9 pr-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs sm:text-sm text-stone-100 placeholder-zinc-500 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
                {(['all', 'pending', 'completed', 'bookmarked'] as const).map(status => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setStatusFilter(status)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                      statusFilter === status
                        ? 'bg-amber-600 text-white'
                        : 'bg-zinc-800 text-zinc-400 hover:text-stone-200'
                    }`}
                  >
                    {status === 'all' && 'Todos'}
                    {status === 'pending' && 'Pendentes'}
                    {status === 'completed' && 'Lidos'}
                    {status === 'bookmarked' && 'Favoritos'}
                  </button>
                ))}
              </div>
            </div>

            {/* Historical Period Selector for Chronological tab */}
            {activeTab === 'chronological' && (
              <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-thin">
                <button
                  type="button"
                  onClick={() => setSelectedPeriod('all')}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors ${
                    selectedPeriod === 'all'
                      ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                >
                  Todas as Eras ({CHRONOLOGICAL_PLAN.length})
                </button>
                {HISTORICAL_PERIODS.map(period => (
                  <button
                    key={period.id}
                    type="button"
                    onClick={() => setSelectedPeriod(period.id)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-colors ${
                      selectedPeriod === period.id
                        ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                    }`}
                  >
                    {period.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Days Grid */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
              <span>Mostrando {filteredDays.length} leituras</span>
              <button
                type="button"
                onClick={() => {
                  if (activePlan !== activeTab) onSelectPlan(activeTab);
                  onSelectDay(currentDayNumber);
                }}
                className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Ir para a Leitura Atual (Dia {currentDayNumber})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredDays.map(day => {
                const isCompleted = progress.completedDays.includes(day.day);
                const isCurrent = day.day === currentDayNumber;

                return (
                  <div
                    key={day.day}
                    className={`relative group rounded-2xl border p-3.5 sm:p-4 transition-all flex flex-col justify-between ${
                      isCurrent
                        ? 'border-amber-500 bg-amber-950/20 shadow-md shadow-amber-950/30'
                        : isCompleted
                        ? 'border-zinc-800/80 bg-zinc-900/40 hover:border-zinc-700'
                        : 'border-zinc-800 bg-zinc-900/70 hover:border-zinc-700 hover:bg-zinc-850'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded-md text-xs font-mono font-bold ${
                            isCurrent
                              ? 'bg-amber-600 text-white'
                              : 'bg-zinc-800 text-zinc-300'
                          }`}>
                            Dia {day.day}
                          </span>
                          <span className="text-[11px] text-zinc-400 truncate max-w-[140px] sm:max-w-[180px]">
                            {day.periodName || (activeTab === 'canonical' ? 'Ordem Canônica' : 'Cronologia')}
                          </span>
                        </div>

                        {/* Completion check toggle */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleComplete(day.day);
                          }}
                          className={`p-1 rounded-lg transition-colors ${
                            isCompleted
                              ? 'text-emerald-400 hover:text-emerald-300'
                              : 'text-zinc-500 hover:text-zinc-300'
                          }`}
                          title={isCompleted ? 'Marcar como não lido' : 'Marcar como concluído'}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 fill-emerald-500/20" />
                          ) : (
                            <Circle className="w-5 h-5" />
                          )}
                        </button>
                      </div>

                      <h4 className="font-serif font-bold text-sm sm:text-base text-stone-100 group-hover:text-amber-300 transition-colors">
                        {day.title}
                      </h4>

                      <p className="text-xs text-amber-400/90 font-mono mt-1">
                        {day.passages.map(p => p.reference).join(' • ')}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between">
                      <span className="text-[11px] text-zinc-400">
                        {day.targetBook}
                      </span>

                      <button
                        type="button"
                        onClick={() => {
                          if (activePlan !== activeTab) {
                            onSelectPlan(activeTab);
                          }
                          onSelectDay(day.day);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-amber-600 text-zinc-200 hover:text-white transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Ler Agora</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ABA 3: JORNADAS TEMÁTICAS (TEOLOGIA BÍBLICA) */}
      {/* ========================================================================= */}
      {activeTab === 'thematic' && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Informative Biblical Theology Header Card */}
          <div className="rounded-3xl bg-gradient-to-br from-amber-950/30 via-zinc-900 to-zinc-950 border border-amber-800/40 p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Scroll className="w-4 h-4 text-amber-400" />
              <span>Teologia Bíblica & História da Redenção</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100">
              Rastreando os Grandes Fios Condutores das Escrituras
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans max-w-3xl">
              Em vez de ler sequencialmente livro por livro, as <strong>Jornadas Temáticas</strong> traçam um único tema estrutural através de todo o cânon bíblico — da Criação e Queda no Éden, passando pelas alianças e tipos proféticos de Israel, até o cumprimento pleno na morte e ressurreição de Cristo e a consumação na Nova Criação. Cada etapa inclui um comentário exegético fundamentado na Teologia Bíblica clássica (Geerhardus Vos, G.K. Beale).
            </p>
          </div>

          {/* Thematic Filters & Search */}
          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-4 space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={thematicSearchTerm}
                  onChange={(e) => setThematicSearchTerm(e.target.value)}
                  placeholder="Pesquisar tema, palavra-chave ou passagem bíblica..."
                  className="w-full pl-9 pr-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs sm:text-sm text-stone-100 placeholder-zinc-500 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-thin">
                <button
                  type="button"
                  onClick={() => setSelectedThemeCategory('ALL')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedThemeCategory === 'ALL'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  Todos ({thematicPlansData.length})
                </button>

                {(['CRISTOLOGIA', 'PACTO', 'REINO', 'ESCATOLOGIA', 'SANTIDADE'] as const).map(cat => {
                  const meta = THEMATIC_CATEGORIES_META[cat];
                  const count = thematicPlansData.filter(p => p.themeCategory === cat || (cat === 'ESCATOLOGIA' && p.themeCategory === 'ESCATOlOGIA')).length;
                  if (count === 0) return null;

                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedThemeCategory(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        selectedThemeCategory === cat
                          ? 'bg-amber-600 text-white shadow-xs'
                          : 'bg-zinc-800 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {meta?.label || cat} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Thematic Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {filteredThematicPlans.map(plan => (
              <ThematicPlanCard
                key={plan.id}
                plan={plan}
                onSelect={(selected) => setSelectedThematicPlan(selected)}
                completedDaysCount={getThematicCompletedCount(plan.id)}
              />
            ))}
          </div>

          {filteredThematicPlans.length === 0 && (
            <div className="text-center py-12 bg-zinc-900/30 rounded-3xl border border-zinc-800/60 p-6 space-y-2">
              <Info className="w-8 h-8 text-zinc-500 mx-auto" />
              <p className="font-serif text-base text-zinc-300">Nenhuma jornada temática encontrada</p>
              <p className="text-xs text-zinc-500">Tente ajustar a busca ou os filtros de categoria.</p>
            </div>
          )}
        </div>
      )}

      {/* Details Modal for Thematic Plan */}
      <ThematicPlanDetailsModal
        plan={selectedThematicPlan}
        isOpen={!!selectedThematicPlan}
        onClose={() => setSelectedThematicPlan(null)}
        onSelectPassage={onSelectThematicPassage}
      />

    </div>
  );
};

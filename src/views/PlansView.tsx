import React, { useState, useMemo } from 'react';
import { PlanType, UserProgress, DayReading } from '../types';
import { HISTORICAL_PERIODS } from '../data/theologicalPeriods';
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
  BookOpen
} from 'lucide-react';

interface PlansViewProps {
  activePlan: PlanType;
  onSelectPlan: (plan: PlanType) => void;
  progress: UserProgress;
  days: DayReading[];
  onToggleComplete: (day: number) => void;
  onSelectDay: (day: number) => void;
  currentDayNumber: number;
}

export const PlansView: React.FC<PlansViewProps> = ({
  activePlan,
  onSelectPlan,
  progress,
  days,
  onToggleComplete,
  onSelectDay,
  currentDayNumber
}) => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'browser'>('browser');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'pending' | 'bookmarked'>('all');

  const percent = Math.round((progress.completedDays.length / 365) * 100);

  // Filter days for browser
  const filteredDays = useMemo(() => {
    return days.filter(day => {
      const matchesSearch = 
        day.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        day.day.toString().includes(searchTerm) ||
        day.passages.some(p => p.reference.toLowerCase().includes(searchTerm.toLowerCase()) || p.book.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesPeriod = selectedPeriod === 'all' || day.periodId === selectedPeriod;

      const isCompleted = progress.completedDays.includes(day.day);
      const isBookmarked = progress.bookmarks.includes(day.day);

      let matchesStatus = true;
      if (statusFilter === 'completed') matchesStatus = isCompleted;
      if (statusFilter === 'pending') matchesStatus = !isCompleted;
      if (statusFilter === 'bookmarked') matchesStatus = isBookmarked;

      return matchesSearch && matchesPeriod && matchesStatus;
    });
  }, [days, searchTerm, selectedPeriod, statusFilter, progress]);

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-6">
      
      {/* Annual Progress Header Card */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-5 sm:p-7 shadow-xl">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Jornada de Leitura Anual</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
              {activePlan === 'chronological' ? 'Plano Histórico-Cronológico' : 'Plano Canônico Balanceado'}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              {activePlan === 'chronological'
                ? 'Lendo os livros conforme a cronologia dos eventos (Salmos na vida de Davi, Profetas nos Reis, Epístolas em Atos).'
                : 'Lendo na ordem canônica tradicional impressa dos 66 livros bíblicos, de Gênesis ao Apocalipse.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-400">
                {percent}%
              </span>
              <p className="text-[11px] text-zinc-400">
                {progress.completedDays.length} de 365 dias lidos
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-amber-950/40 border border-amber-800/40 text-amber-400 flex flex-col items-center">
              <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
              <span className="text-xs font-bold mt-0.5">{progress.streak}d</span>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-5">
          <div className="w-full bg-zinc-800/80 rounded-full h-2.5 overflow-hidden p-0.5">
            <div 
              className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-400 h-full rounded-full transition-all duration-500 shadow-xs"
              style={{ width: `${Math.max(percent, 2)}%` }}
            />
          </div>
        </div>
      </section>

      {/* Internal Navigation Tabs */}
      <div className="flex items-center justify-center">
        <div className="inline-flex p-1 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveTab('browser')}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'browser'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Navegador dos 365 Dias
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'comparison'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Comparativo & Troca de Plano
          </button>
        </div>
      </div>

      {/* TAB 1: BROWSER DOS 365 DIAS */}
      {activeTab === 'browser' && (
        <section className="space-y-4">
          {/* Filters Bar */}
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

            {/* Period Selector */}
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
                Todas as Eras ({days.length})
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
          </div>

          {/* Days Grid / List */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
              <span>Mostrando {filteredDays.length} leituras</span>
              <button
                type="button"
                onClick={() => onSelectDay(currentDayNumber)}
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
                            {day.periodName}
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
                        onClick={() => onSelectDay(day.day)}
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
        </section>
      )}

      {/* TAB 2: COMPARATIVO & TROCA DE PLANO */}
      {activeTab === 'comparison' && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Card Cronológico */}
          <div className={`p-5 sm:p-6 rounded-3xl border-2 flex flex-col justify-between transition-all ${
            activePlan === 'chronological'
              ? 'border-amber-600 bg-amber-950/20 shadow-xl'
              : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
                  <Compass className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Mais Recomendado
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100 mb-2">
                Plano Histórico-Cronológico
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                Organiza a leitura pela linha do tempo real dos acontecimentos. Você não lê profecias ou salmos desconectados, mas dentro do exato contexto histórico dos reis e viagens missionárias.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Jó na era patriarcal:</strong> lido contemporâneo a Abraão em Gênesis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Salmos nos episódios de Davi:</strong> orações nas cavernas e arrependimento com Bateseba.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Profetas nos Reis:</strong> Amós e Isaías lidos durante os reinados históricos de Judá e Israel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Epístolas em Atos:</strong> as cartas de Paulo inseridas nas cidades exatas das viagens missionárias.</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectPlan('chronological')}
              className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlan === 'chronological'
                  ? 'bg-amber-600 text-white shadow-md cursor-default'
                  : 'bg-zinc-800 hover:bg-amber-600 text-zinc-200 hover:text-white'
              }`}
            >
              {activePlan === 'chronological' ? '✓ Plano Ativo Atual' : 'Mudar para Plano Cronológico'}
            </button>
          </div>

          {/* Card Canônico */}
          <div className={`p-5 sm:p-6 rounded-3xl border-2 flex flex-col justify-between transition-all ${
            activePlan === 'canonical'
              ? 'border-amber-600 bg-amber-950/20 shadow-xl'
              : 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700'
          }`}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-zinc-800 text-white flex items-center justify-center shadow-xs">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-800 text-zinc-300">
                  Estrutura Tradicional
                </span>
              </div>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100 mb-2">
                Plano Canônico Balanceado
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                Respeita a ordem convencional das Bíblias impressas, com blocos equilibrados de leitura diária (3 a 4 capítulos por dia) para percorrer todo o cânon bíblico sem sobrecarga.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span><strong>Familiaridade máxima:</strong> segue a sequência impressa de Gênesis ao Apocalipse.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span><strong>Divisão balanceada:</strong> média de 3 a 4 capítulos por dia (aprox. 15 minutos).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span><strong>Visão de conjunto:</strong> ideal para quem está acostumado com leitura sequencial por livro.</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => onSelectPlan('canonical')}
              className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activePlan === 'canonical'
                  ? 'bg-amber-600 text-white shadow-md cursor-default'
                  : 'bg-zinc-800 hover:bg-amber-600 text-zinc-200 hover:text-white'
              }`}
            >
              {activePlan === 'canonical' ? '✓ Plano Ativo Atual' : 'Mudar para Plano Canônico'}
            </button>
          </div>
        </section>
      )}

    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { DayReading, PlanType, UserProgress } from '../types';
import { HISTORICAL_PERIODS } from '../data/theologicalPeriods';
import { 
  BookOpen, 
  CheckCircle2, 
  Circle, 
  Compass, 
  Layers, 
  Flame, 
  Calendar, 
  Search, 
  Filter, 
  ArrowRight, 
  Sparkles, 
  Bookmark, 
  Check, 
  Trophy, 
  Clock,
  ChevronRight,
  TrendingUp,
  User,
  Edit2
} from 'lucide-react';

interface DashboardProps {
  planType: PlanType;
  onSelectPlan: (plan: PlanType) => void;
  days: DayReading[];
  progress: UserProgress;
  onToggleComplete: (day: number) => void;
  onOpenDay: (day: number) => void;
  onOpenTimeline: () => void;
  onOpenPlanInfo: () => void;
  userName: string;
  onUpdateUserName: (name: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  planType,
  onSelectPlan,
  days,
  progress,
  onToggleComplete,
  onOpenDay,
  onOpenTimeline,
  onOpenPlanInfo,
  userName,
  onUpdateUserName
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'pending' | 'bookmarked'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'grid' | 'table'>('cards');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(userName);

  const completedSet = useMemo(() => new Set(progress.completedDays), [progress.completedDays]);
  const bookmarkedSet = useMemo(() => new Set(progress.bookmarks), [progress.bookmarks]);

  // Overall Statistics
  const completedCount = completedSet.size;
  const percent = Math.round((completedCount / 365) * 100);
  const daysRemaining = 365 - completedCount;
  
  // Find current day to recommend: first incomplete day or today
  const recommendedDay = useMemo(() => {
    for (let d = 1; d <= 365; d++) {
      if (!completedSet.has(d)) return d;
    }
    return 1;
  }, [completedSet]);

  const recommendedReading = days[recommendedDay - 1] || days[0];

  // Filtered readings
  const filteredDays = useMemo(() => {
    return days.filter((d) => {
      // Search
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesDay = String(d.day) === query.trim();
        const matchesTitle = d.title.toLowerCase().includes(query);
        const matchesPassage = d.passages.some(p => p.book.toLowerCase().includes(query) || p.reference.toLowerCase().includes(query));
        const matchesContext = d.theologicalContext.toLowerCase().includes(query);
        if (!matchesDay && !matchesTitle && !matchesPassage && !matchesContext) return false;
      }

      // Historical Period filter (for chronological)
      if (selectedPeriod !== 'all' && d.periodId !== selectedPeriod) {
        return false;
      }

      // Status filter
      if (filterStatus === 'completed' && !completedSet.has(d.day)) return false;
      if (filterStatus === 'pending' && completedSet.has(d.day)) return false;
      if (filterStatus === 'bookmarked' && !bookmarkedSet.has(d.day)) return false;

      return true;
    });
  }, [days, searchTerm, selectedPeriod, filterStatus, completedSet, bookmarkedSet]);

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdateUserName(tempName.trim());
    }
    setIsEditingName(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-6 sm:space-y-8 w-full overflow-hidden">
      
      {/* Welcome & User Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-900 via-stone-800 to-stone-900 text-white shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              Painel do Leitor
            </span>
            <span className="text-stone-400">•</span>
            {isEditingName ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="px-2 py-0.5 rounded bg-stone-700 text-xs text-white border border-stone-600 focus:outline-hidden max-w-[140px]"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={handleSaveName}
                  className="px-2 py-0.5 bg-amber-600 text-xs font-bold rounded shrink-0"
                >
                  Salvar
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setTempName(userName);
                  setIsEditingName(true);
                }}
                className="inline-flex items-center gap-1.5 text-xs text-stone-300 hover:text-white"
                title="Clique para editar seu nome"
              >
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold truncate max-w-[140px] sm:max-w-xs">{userName}</span>
                <Edit2 className="w-3 h-3 text-stone-400 shrink-0" />
              </button>
            )}
          </div>

          <h2 className="font-serif text-xl sm:text-3xl font-bold">
            Constância na Palavra, Vida no Espírito
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
            Plano Ativo: <strong className="text-amber-300">{planType === 'chronological' ? 'Ordem Histórico-Cronológica' : 'Ordem Canônica Tradicional'}</strong>. 
            Mantenha o ritmo diário para concluir a Bíblia inteira neste ano.
          </p>
        </div>

        {/* Quick switch button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenPlanInfo}
            className="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold backdrop-blur-xs transition-colors flex items-center gap-2"
          >
            <Compass className="w-4 h-4 text-amber-300 shrink-0" />
            <span>Ver Estratégia dos Planos</span>
          </button>
        </div>
      </div>

      {/* Progress & Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        
        {/* Progress Percentage Card */}
        <div className="p-4 sm:p-5 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Progresso Anual
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-800 dark:text-amber-400 font-serif">
              {percent}%
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400">
              Você concluiu {percent}% da leitura anual
            </p>
          </div>
          {/* Circular Progress Ring */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
            <svg className="w-14 h-14 sm:w-16 sm:h-16 transform -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="23"
                stroke="currentColor"
                strokeWidth="4.5"
                className="text-stone-100 dark:text-zinc-800"
                fill="transparent"
              />
              <circle
                cx="28"
                cy="28"
                r="23"
                stroke="currentColor"
                strokeWidth="4.5"
                className="text-amber-600 transition-all duration-500"
                strokeDasharray={144.5}
                strokeDashoffset={144.5 - (144.5 * percent) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
            <span className="absolute font-bold text-xs text-stone-800 dark:text-stone-200">
              {percent}%
            </span>
          </div>
        </div>

        {/* Days Completed Card */}
        <div className="p-4 sm:p-5 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Dias Concluídos
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif">
              {completedCount} <span className="text-sm font-normal text-stone-400">/ 365</span>
            </div>
            <p className="text-[11px] text-stone-500 dark:text-stone-400">
              {daysRemaining} dias restantes para completar
            </p>
          </div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Streak Days Card */}
        <div className="p-4 sm:p-5 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
              Constância (Streak)
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 font-serif flex items-center gap-1.5">
              <span>{progress.streak}</span>
              <span className="text-sm font-normal text-stone-400">dias</span>
            </div>
            <p className="text-[11px] text-orange-600 dark:text-orange-400 font-medium">
              Fogo sagrado da disciplina diária
            </p>
          </div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 fill-orange-500 animate-pulse" />
          </div>
        </div>

        {/* Timeline Era Card */}
        <div 
          onClick={onOpenTimeline}
          className="p-4 sm:p-5 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 shadow-xs flex items-center justify-between cursor-pointer hover:border-amber-400 transition-colors group"
        >
          <div className="space-y-1 pr-2 min-w-0">
            <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1">
              <Compass className="w-3 h-3 shrink-0" />
              <span className="truncate">Era Atual da Leitura</span>
            </span>
            <div className="text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
              {recommendedReading.periodName}
            </div>
            <p className="text-[11px] text-amber-700 dark:text-amber-300 group-hover:underline flex items-center gap-1">
              <span>Explorar Linha do Tempo</span>
              <ChevronRight className="w-3 h-3 shrink-0" />
            </p>
          </div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

      </div>

      {/* Recommended Next Reading Banner (Hero CTA) */}
      <div className="rounded-2xl border-2 border-amber-600/60 dark:border-amber-500/40 p-4 sm:p-6 bg-amber-50/60 dark:bg-amber-950/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 shadow-sm">
        <div className="space-y-2 max-w-3xl min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-700 text-white">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>Próxima Leitura • Dia {recommendedReading.day}</span>
          </div>

          <h3 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-100 break-words">
            {recommendedReading.title}
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
            <strong>Contexto:</strong> {recommendedReading.theologicalContext}
          </p>

          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-amber-900 dark:text-amber-300 font-serif font-bold">
            <span className="text-stone-500 dark:text-stone-400 font-sans font-normal text-xs">Passagens:</span>
            {recommendedReading.passages.map((p, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md bg-white dark:bg-zinc-800 border border-amber-200 dark:border-amber-900">
                {p.book} {p.reference}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => onOpenDay(recommendedReading.day)}
          className="w-full md:w-auto px-5 py-3.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-amber-950/20 flex items-center justify-center gap-2 shrink-0 group"
        >
          <span>Abrir Leitor Diário (Dia {recommendedReading.day})</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
        </button>
      </div>

      {/* Filter and Search Controls for 365 Days */}
      <div className="space-y-3 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
              Cronograma dos 365 Dias
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400">
              Navegue, pesquise por livro bíblico, filtre por período ou acompanhe suas leituras
            </p>
          </div>

          {/* View mode toggle - Optimized for mobile without overflow */}
          <div className="w-full sm:w-auto">
            <div className="grid grid-cols-3 sm:flex rounded-xl border border-stone-200 dark:border-zinc-700 p-0.5 bg-stone-100 dark:bg-zinc-800 text-xs w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setViewMode('cards')}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors text-center ${
                  viewMode === 'cards' ? 'bg-white dark:bg-zinc-700 text-stone-900 dark:text-white shadow-xs font-semibold' : 'text-stone-500'
                }`}
              >
                <span>Cartões</span>
                <span className="hidden sm:inline"> Detalhados</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors text-center ${
                  viewMode === 'grid' ? 'bg-white dark:bg-zinc-700 text-stone-900 dark:text-white shadow-xs font-semibold' : 'text-stone-500'
                }`}
              >
                Grade 365
              </button>
              <button
                type="button"
                onClick={() => setViewMode('table')}
                className={`px-2.5 py-1.5 rounded-lg font-medium transition-colors text-center ${
                  viewMode === 'table' ? 'bg-white dark:bg-zinc-700 text-stone-900 dark:text-white shadow-xs font-semibold' : 'text-stone-500'
                }`}
              >
                <span>Lista</span>
                <span className="hidden sm:inline"> Compacta</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Buscar livro, dia ou tema..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-600"
            />
          </div>

          {/* Historical Period Dropdown */}
          <div>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-stone-900 dark:text-stone-100 focus:outline-hidden focus:ring-2 focus:ring-amber-600 truncate"
            >
              <option value="all">Todos os Períodos Bíblicos (365 Dias)</option>
              {HISTORICAL_PERIODS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} (Dias {p.startDay} - {p.endDay})
                </option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div className="grid grid-cols-3 rounded-xl border border-stone-200 dark:border-zinc-700 p-0.5 bg-stone-50 dark:bg-zinc-850 text-xs text-center">
            <button
              type="button"
              onClick={() => setFilterStatus('all')}
              className={`py-1.5 px-1 rounded-lg font-medium transition-colors truncate text-[11px] sm:text-xs ${
                filterStatus === 'all' ? 'bg-white dark:bg-zinc-700 text-stone-900 dark:text-white shadow-xs font-semibold' : 'text-stone-500'
              }`}
            >
              Todos ({days.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('pending')}
              className={`py-1.5 px-1 rounded-lg font-medium transition-colors truncate text-[11px] sm:text-xs ${
                filterStatus === 'pending' ? 'bg-white dark:bg-zinc-700 text-stone-900 dark:text-white shadow-xs font-semibold' : 'text-stone-500'
              }`}
            >
              Pendentes ({365 - completedCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('completed')}
              className={`py-1.5 px-1 rounded-lg font-medium transition-colors truncate text-[11px] sm:text-xs ${
                filterStatus === 'completed' ? 'bg-white dark:bg-zinc-700 text-stone-900 dark:text-white shadow-xs font-semibold' : 'text-stone-500'
              }`}
            >
              Lidos ({completedCount})
            </button>
          </div>

          {/* Quick jump to bookmarked */}
          <button
            type="button"
            onClick={() => setFilterStatus(filterStatus === 'bookmarked' ? 'all' : 'bookmarked')}
            className={`px-3 py-2 text-xs font-semibold rounded-xl border flex items-center justify-center gap-2 transition-colors ${
              filterStatus === 'bookmarked'
                ? 'bg-amber-100 border-amber-300 text-amber-900 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200'
                : 'border-stone-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-stone-700 dark:text-stone-300 hover:bg-stone-50'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="truncate">Favoritos ({bookmarkedSet.size})</span>
          </button>
        </div>
      </div>

      {/* RENDER VIEW: Cards Mode */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDays.map((reading) => {
            const isRead = completedSet.has(reading.day);
            const isSaved = bookmarkedSet.has(reading.day);

            return (
              <div
                key={reading.day}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isRead
                    ? 'bg-stone-50/70 dark:bg-zinc-900/40 border-stone-200 dark:border-zinc-800/80 opacity-90'
                    : 'bg-white dark:bg-zinc-900 border-stone-200 dark:border-zinc-800 shadow-xs hover:border-amber-400 dark:hover:border-amber-700'
                }`}
              >
                <div>
                  {/* Top Day Badge and Read Toggle */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300">
                        Dia {reading.day}
                      </span>
                      <span className="text-[11px] text-stone-500 dark:text-stone-400">
                        {reading.dateDefault}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onToggleComplete(reading.day)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isRead
                          ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40'
                          : 'text-stone-300 hover:text-stone-500 dark:text-zinc-600'
                      }`}
                      title={isRead ? 'Marcar como não lido' : 'Marcar como lido'}
                    >
                      <CheckCircle2 className="w-5 h-5 fill-current" />
                    </button>
                  </div>

                  {/* Period Tag */}
                  <div className="text-[11px] font-semibold text-amber-800 dark:text-amber-400 mb-1 flex items-center gap-1">
                    <Compass className="w-3 h-3" />
                    <span className="truncate">{reading.periodName}</span>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 mb-2 line-clamp-1">
                    {reading.title}
                  </h4>

                  {/* Passages */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {reading.passages.map((p, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-stone-100 dark:bg-zinc-800 text-stone-700 dark:text-stone-300"
                      >
                        {p.book} {p.reference}
                      </span>
                    ))}
                  </div>

                  {/* Theological preview */}
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed mb-4">
                    {reading.theologicalContext}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-stone-100 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">
                    ~15 min de leitura
                  </span>

                  <button
                    type="button"
                    onClick={() => onOpenDay(reading.day)}
                    className="px-3 py-1.5 bg-stone-100 hover:bg-amber-700 hover:text-white dark:bg-zinc-800 dark:hover:bg-amber-700 text-stone-800 dark:text-stone-200 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>Ler Agora</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* RENDER VIEW: 365 Grid Matrix Mode */}
      {viewMode === 'grid' && (
        <div className="p-3.5 sm:p-6 rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-3 sm:space-y-4 w-full overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 pb-2 border-b border-stone-100 dark:border-zinc-800">
            <span className="text-[11px] sm:text-xs">Matriz Completa dos 365 Dias (toque para ler):</span>
            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-emerald-600 inline-block shrink-0" /> Lido
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-amber-600 inline-block shrink-0" /> Próximo
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded bg-stone-200 dark:bg-zinc-700 inline-block shrink-0" /> Pendente
              </span>
            </div>
          </div>

          <div className="grid grid-cols-7 min-[480px]:grid-cols-10 sm:grid-cols-12 md:grid-cols-15 lg:grid-cols-25 gap-1 sm:gap-1.5 w-full">
            {days.map((reading) => {
              const isRead = completedSet.has(reading.day);
              const isCurrent = reading.day === recommendedDay;

              return (
                <button
                  key={reading.day}
                  type="button"
                  onClick={() => onOpenDay(reading.day)}
                  className={`aspect-square w-full rounded-md text-[10px] sm:text-[11px] font-mono font-bold flex items-center justify-center transition-all p-0.5 ${
                    isRead
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : isCurrent
                      ? 'bg-amber-600 text-white ring-2 ring-amber-400 font-extrabold scale-105'
                      : 'bg-stone-100 hover:bg-stone-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-stone-700 dark:text-stone-300'
                  }`}
                  title={`Dia ${reading.day}: ${reading.title} (${reading.passages.map(p => p.book).join(', ')})`}
                >
                  {reading.day}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* RENDER VIEW: Compact Table / List Mode */}
      {viewMode === 'table' && (
        <div className="rounded-2xl border border-stone-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden w-full">
          <div className="divide-y divide-stone-100 dark:divide-zinc-800">
            {filteredDays.map((reading) => {
              const isRead = completedSet.has(reading.day);

              return (
                <div
                  key={reading.day}
                  className="p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 hover:bg-stone-50 dark:hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <button
                      type="button"
                      onClick={() => onToggleComplete(reading.day)}
                      className={`p-1 rounded transition-colors shrink-0 mt-0.5 sm:mt-0 ${
                        isRead ? 'text-emerald-600' : 'text-stone-300 hover:text-stone-500'
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5 fill-current" />
                    </button>

                    <div className="space-y-0.5 min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="font-mono text-xs font-bold text-amber-800 dark:text-amber-400 shrink-0">
                          Dia {reading.day}
                        </span>
                        <span className="text-stone-400 text-xs hidden sm:inline">•</span>
                        <span className="font-serif text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
                          {reading.title}
                        </span>
                      </div>
                      <div className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 truncate">
                        {reading.passages.map(p => `${p.book} ${p.reference}`).join(', ')} • {reading.periodName}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => onOpenDay(reading.day)}
                      className="w-full sm:w-auto text-center px-3 py-1.5 bg-stone-100 hover:bg-amber-700 hover:text-white dark:bg-zinc-800 dark:hover:bg-amber-700 text-xs font-semibold rounded-lg transition-colors"
                    >
                      Ler Texto Bíblico
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredDays.length === 0 && (
        <div className="p-12 text-center rounded-2xl border border-dashed border-stone-300 dark:border-zinc-700 space-y-3">
          <BookOpen className="w-8 h-8 mx-auto text-stone-400" />
          <h4 className="font-serif font-bold text-stone-800 dark:text-stone-200">
            Nenhum dia encontrado com esses filtros
          </h4>
          <p className="text-xs text-stone-500">
            Tente pesquisar com outro termo ou limpe os filtros de período e status.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSelectedPeriod('all');
              setFilterStatus('all');
            }}
            className="px-4 py-2 rounded-xl bg-amber-700 text-white text-xs font-bold"
          >
            Limpar Filtros
          </button>
        </div>
      )}

    </div>
  );
};

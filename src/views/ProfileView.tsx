import React, { useState, useEffect } from 'react';
import { UserProgress, ReaderSettings as ReaderSettingsType, ReminderSettings, DayReading } from '../types';
import { PersonalNotes } from '../components/PersonalNotes';
import { ReaderSettings } from '../components/ReaderSettings';
import { PWAInstallButton } from '../components/PWAInstallButton';
import { useAuth } from '../context/AuthContext';
import { 
  User, 
  Flame, 
  BookOpen, 
  Bookmark, 
  Sliders, 
  BookMarked, 
  Bell, 
  Check, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Edit2,
  Trash2,
  ExternalLink,
  Copy,
  Quote,
  Church,
  Sun,
  Scale,
  FileText,
  Scroll,
  Cloud,
  RefreshCw,
  LogOut,
  AlertCircle
} from 'lucide-react';
import { loadFavorites, removeFavorite, SavedFavoriteItem, FAVORITES_UPDATED_EVENT } from '../utils/favoritesStorage';

interface ProfileViewProps {
  userName: string;
  onUpdateUserName: (name: string) => void;
  progress: UserProgress;
  settings: ReaderSettingsType;
  onUpdateSettings: (settings: ReaderSettingsType) => void;
  reminderSettings: ReminderSettings;
  onUpdateReminderSettings: (reminders: ReminderSettings) => void;
  currentDayReading: DayReading;
  onNavigateToFavorite?: (item: SavedFavoriteItem) => void;
  onOpenPresentation?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  userName,
  onUpdateUserName,
  progress,
  settings,
  onUpdateSettings,
  reminderSettings,
  onUpdateReminderSettings,
  currentDayReading,
  onNavigateToFavorite,
  onOpenPresentation
}) => {
  const [activeTab, setActiveTab] = useState<'notebook' | 'favorites' | 'settings' | 'reminders'>('notebook');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(userName);
  const [favoritesList, setFavoritesList] = useState<SavedFavoriteItem[]>(loadFavorites());
  const [favoritesCategoryFilter, setFavoritesCategoryFilter] = useState<string>('all');
  const [copiedFavoriteId, setCopiedFavoriteId] = useState<string | null>(null);

  // Sync favorites
  useEffect(() => {
    const handleUpdate = () => {
      setFavoritesList(loadFavorites());
    };
    window.addEventListener(FAVORITES_UPDATED_EVENT, handleUpdate);
    return () => window.removeEventListener(FAVORITES_UPDATED_EVENT, handleUpdate);
  }, []);

  // Reminders local state
  const [reminderEnabled, setReminderEnabled] = useState(reminderSettings.enabled);
  const [reminderTime, setReminderTime] = useState(reminderSettings.time || '07:00');
  const [savedFeedback, setSavedFeedback] = useState<string | null>(null);

  const { user, signInWithGoogle, signOutUser, forceSync, syncState, lastSyncedAt, errorMessage } = useAuth();
  const percent = Math.round((progress.completedDays.length / 365) * 100);

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdateUserName(tempName.trim());
    }
    setIsEditingName(false);
  };

  const handleSaveReminders = () => {
    onUpdateReminderSettings({
      ...reminderSettings,
      enabled: reminderEnabled,
      time: reminderTime
    });
    setSavedFeedback('Lembrete salvo com sucesso!');
    setTimeout(() => setSavedFeedback(null), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-6">
      
      {/* Profile & Metrics Header */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-zinc-900 to-zinc-950 border border-zinc-800 p-5 sm:p-7 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          
          {/* User Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-amber-600/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shadow-xs shrink-0 overflow-hidden">
              {user?.photoURL ? (
                <img 
                  src={user.photoURL} 
                  alt={user.displayName || userName} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
              ) : (
                <User className="w-7 h-7" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                {isEditingName ? (
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="px-2.5 py-1 bg-zinc-950 border border-amber-500 rounded-lg text-sm text-stone-100 font-bold focus:outline-hidden"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={handleSaveName}
                      className="p-1 rounded-lg bg-amber-600 text-white hover:bg-amber-500"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
                      {user?.displayName || userName || 'Leitor da Palavra'}
                    </h2>
                    {!user && (
                      <button
                        type="button"
                        onClick={() => setIsEditingName(true)}
                        className="p-1 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors"
                        title="Editar nome"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 mt-0.5">
                <p className="text-xs text-zinc-400">
                  Plano {progress.planType === 'chronological' ? 'Histórico-Cronológico' : 'Canônico'} • 365 Dias
                </p>
                {user ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                    <Cloud className="w-2.5 h-2.5" /> Nuvem Ativa
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-800 text-zinc-400 border border-zinc-700/60">
                    Local / Não Sincronizado
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0">
            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 text-center">
              <div className="flex items-center justify-center gap-1 text-orange-400 mb-0.5">
                <Flame className="w-4 h-4 fill-orange-500" />
                <span className="font-serif text-base sm:text-lg font-bold">{progress.streak}d</span>
              </div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Constância</span>
            </div>

            <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 text-center">
              <div className="text-amber-400 font-serif text-base sm:text-lg font-bold mb-0.5">
                {percent}%
              </div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">{progress.completedDays.length}/365 lidos</span>
            </div>

            <button
              type="button"
              onClick={() => setActiveTab('favorites')}
              className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 text-center hover:border-amber-500/50 transition-colors cursor-pointer"
              title="Ver Marcadores e Favoritos Teológicos"
            >
              <div className="flex items-center justify-center gap-1 text-amber-300 mb-0.5">
                <Bookmark className="w-4 h-4 fill-amber-400" />
                <span className="font-serif text-base sm:text-lg font-bold">{progress.bookmarks.length + favoritesList.length}</span>
              </div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block">Marcados</span>
            </button>
          </div>

        </div>

        {/* Progress bar */}
        <div>
          <div className="w-full bg-zinc-800/80 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-600 to-yellow-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${Math.max(percent, 1)}%` }}
            />
          </div>
        </div>

        {/* Google Cloud Account Status Bar */}
        <div className="pt-2 border-t border-zinc-800/80">
          {user ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-200">{user.email}</span>
                    <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-900/50 text-emerald-300 border border-emerald-700/50 font-medium">
                      Conectado via Google
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    {syncState === 'syncing' ? (
                      <span className="text-amber-400 inline-flex items-center gap-1">
                        <RefreshCw className="w-3 h-3 animate-spin" /> Sincronizando dados com a nuvem...
                      </span>
                    ) : (
                      <span>Todas as suas marcações, anotações e favoritos estão salvos e sincronizados.</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => forceSync()}
                  disabled={syncState === 'syncing'}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-850 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-semibold transition-all cursor-pointer disabled:opacity-50"
                  title="Forçar sincronização com a nuvem agora"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${syncState === 'syncing' ? 'animate-spin text-amber-400' : ''}`} />
                  <span>Sincronizar</span>
                </button>

                <button
                  type="button"
                  onClick={() => signOutUser()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/40 hover:bg-red-900/50 text-red-300 hover:text-red-200 border border-red-800/40 text-xs font-semibold transition-all cursor-pointer"
                  title="Desconectar conta Google deste dispositivo"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Desconectar</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-950/30 via-zinc-950 to-zinc-950 border border-amber-500/30">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-stone-100 flex items-center gap-1.5">
                    <Cloud className="w-4 h-4 text-amber-400" /> Conectar Conta do Google
                  </span>
                  <span className="text-[10px] px-2 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                    Recomendado
                  </span>
                </div>
                <p className="text-xs text-zinc-300">
                  Salve seu progresso de 365 dias, bloco de notas e marcadores para acessar em qualquer celular ou computador.
                </p>
                <p className="text-[11px] text-amber-400/90 font-medium">
                  ✓ Suas anotações locais serão mescladas automaticamente com sua conta sem perdas.
                </p>
              </div>

              <button
                type="button"
                onClick={() => signInWithGoogle()}
                disabled={syncState === 'syncing'}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer disabled:opacity-50"
              >
                {syncState === 'syncing' ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Conectando...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#ffffff" d="M12 5c1.54 0 2.89.55 3.96 1.45l2.97-2.97C17.06 1.77 14.7 1 12 1 7.42 1 3.53 3.61 1.63 7.41l3.64 2.82C6.15 7.23 8.84 5 12 5z"/>
                      <path fill="#ffffff" d="M23.49 12.28c0-.79-.07-1.54-.19-2.28H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.65 2.84c2.14-1.97 3.37-4.88 3.37-8.65z"/>
                      <path fill="#ffffff" d="M5.27 14.77c-.24-.71-.38-1.47-.38-2.27s.14-1.56.38-2.27L1.63 7.41C.59 9.48 0 11.67 0 14s.59 4.52 1.63 6.59l3.64-2.82z"/>
                      <path fill="#ffffff" d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.65-2.84c-1.07.72-2.45 1.15-4.28 1.15-3.16 0-5.85-2.23-6.73-5.23L1.63 16.59C3.53 20.39 7.42 23 12 23z"/>
                    </svg>
                    <span>Entrar com Google</span>
                  </>
                )}
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="mt-2 p-2.5 rounded-xl bg-red-950/60 border border-red-800/60 text-xs text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}
        </div>
      </section>

      {/* Sub-tabs for Profile */}
      <div className="flex items-center justify-center">
        <div className="inline-flex flex-wrap p-1 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('notebook')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'notebook'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>Caderno Teológico</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('favorites')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'favorites'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Marcadores ({favoritesList.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>Tipografia</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('reminders')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'reminders'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Bell className="w-4 h-4" />
            <span>Lembretes</span>
          </button>
        </div>
      </div>

      {/* TAB 1: CADERNO TEOLÓGICO */}
      {activeTab === 'notebook' && (
        <div className="animate-in fade-in duration-200">
          <PersonalNotes 
            dayId={currentDayReading.day}
            passageRef={currentDayReading.passages.map(p => p.reference).join(', ')}
          />
        </div>
      )}

      {/* TAB 2: MARCADORES & FAVORITOS TEOLÓGICOS */}
      {activeTab === 'favorites' && (
        <div className="space-y-5 animate-in fade-in duration-200">
          <div className="p-4 sm:p-5 rounded-3xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-100 flex items-center gap-2">
                <Bookmark className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>Marcadores & Favoritos Teológicos</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Coleção pessoal de teólogos, credos, concílios, códices e termos dogmáticos salvos para consulta.
              </p>
            </div>
            <div className="text-xs font-mono text-amber-300 bg-amber-950/60 px-3 py-1.5 rounded-xl border border-amber-800/60 shrink-0">
              {favoritesList.length} itens salvos
            </div>
          </div>

          {/* Categorias Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {[
              { id: 'all', label: 'Todos', count: favoritesList.length },
              { id: 'church-history-event', label: 'Marcos Históricos', count: favoritesList.filter(f => f.entityType === 'church-history-event').length },
              { id: 'theologian-reformation', label: 'Reforma', count: favoritesList.filter(f => f.entityType === 'theologian-reformation').length },
              { id: 'theologian-catholic', label: 'Católica', count: favoritesList.filter(f => f.entityType === 'theologian-catholic').length },
              { id: 'theologian-orthodox', label: 'Ortodoxa', count: favoritesList.filter(f => f.entityType === 'theologian-orthodox').length },
              { id: 'council', label: 'Concílios', count: favoritesList.filter(f => f.entityType === 'council').length },
              { id: 'manuscript', label: 'Manuscritos', count: favoritesList.filter(f => f.entityType === 'manuscript').length },
              { id: 'glossary', label: 'Glossário', count: favoritesList.filter(f => f.entityType === 'glossary').length },
            ].map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFavoritesCategoryFilter(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                  favoritesCategoryFilter === cat.id
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  favoritesCategoryFilter === cat.id ? 'bg-amber-700/80 text-white' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Favorites List */}
          {(() => {
            const filtered = favoritesCategoryFilter === 'all'
              ? favoritesList
              : favoritesList.filter(f => f.entityType === favoritesCategoryFilter);

            if (filtered.length === 0) {
              return (
                <div className="p-8 sm:p-12 text-center rounded-3xl bg-zinc-900/40 border border-zinc-800/80 space-y-3">
                  <Bookmark className="w-10 h-10 text-zinc-600 mx-auto" />
                  <p className="font-serif font-bold text-base text-stone-300">
                    Nenhum marcador encontrado nesta categoria
                  </p>
                  <p className="text-xs text-zinc-400 max-w-md mx-auto">
                    Ao navegar pela História da Igreja, Concílios, Manuscritos e Tradições, clique no ícone de marcador para salvar e construir sua biblioteca teológica de referência.
                  </p>
                </div>
              );
            }

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filtered.map(fav => (
                  <div 
                    key={fav.id}
                    className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800/90 hover:border-amber-500/40 shadow-sm transition-all flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-800 text-amber-400 border border-zinc-700 font-bold uppercase tracking-wider">
                          {fav.categoryOrTradition || fav.entityType}
                        </span>
                        <span className="text-[10px] text-zinc-500">
                          {new Date(fav.savedAt).toLocaleDateString('pt-BR')}
                        </span>
                      </div>

                      <h4 className="font-serif font-bold text-base text-stone-100">
                        {fav.title}
                      </h4>
                      {fav.subtitle && (
                        <p className="text-xs text-zinc-400 mt-0.5">
                          {fav.subtitle}
                        </p>
                      )}

                      {fav.quote && (
                        <div className="mt-3 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/80 text-xs text-stone-300 italic font-serif leading-relaxed relative">
                          <Quote className="w-3.5 h-3.5 text-amber-500/40 absolute -top-2 left-2" />
                          "{fav.quote}"
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-zinc-800/70">
                      {onNavigateToFavorite && (
                        <button
                          type="button"
                          onClick={() => onNavigateToFavorite(fav)}
                          className="px-3 py-1.5 rounded-xl bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 text-xs font-semibold border border-amber-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Abrir no Módulo</span>
                        </button>
                      )}

                      <div className="flex items-center gap-1.5 ml-auto">
                        {fav.quote && (
                          <button
                            type="button"
                            onClick={() => {
                              const text = `"${fav.quote}" — ${fav.title} | Bíblia Teológica`;
                              navigator.clipboard.writeText(text);
                              setCopiedFavoriteId(fav.id);
                              setTimeout(() => setCopiedFavoriteId(null), 2000);
                            }}
                            className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-750 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors cursor-pointer"
                            title="Copiar citação"
                          >
                            {copiedFavoriteId === fav.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() => removeFavorite(fav.id)}
                          className="p-1.5 rounded-lg bg-zinc-800 hover:bg-red-950/40 text-zinc-400 hover:text-red-400 border border-zinc-700/60 hover:border-red-800/60 transition-colors cursor-pointer"
                          title="Remover dos favoritos"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      )}

      {/* TAB 3: CONFIGURAÇÕES DE LEITURA & TIPOGRAFIA */}
      {activeTab === 'settings' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
            Ajuste a tipografia e as preferências de profundidade para sua experiência de leitura imersiva.
          </div>

          <ReaderSettings
            isFocusMode={false}
            setIsFocusMode={() => {}}
            fontSize={settings.fontSize}
            setFontSize={(fontSize) => onUpdateSettings({ ...settings, fontSize })}
            fontFamily={settings.fontFamily}
            setFontFamily={(fontFamily) => onUpdateSettings({ ...settings, fontFamily })}
            depthMode={settings.depthMode}
            setDepthMode={(depthMode) => onUpdateSettings({ ...settings, depthMode })}
            visiblePanels={settings.visiblePanels}
            onTogglePanel={(panelKey) => {
              const currentPanels = settings.visiblePanels || {
                archaeology: true,
                lexicon: true,
                worldHistory: true,
                intertextuality: true,
                textualVariants: true,
              };
              onUpdateSettings({
                ...settings,
                visiblePanels: {
                  ...currentPanels,
                  [panelKey]: !currentPanels[panelKey]
                }
              });
            }}
          />

          {/* Seção de Instalação do Aplicativo (PWA) */}
          <PWAInstallButton variant="card" />
        </div>
      )}

      {/* TAB 3: LEMBRETES */}
      {activeTab === 'reminders' && (
        <div className="p-5 sm:p-7 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-xl space-y-5 animate-in fade-in duration-200">
          <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-stone-100">
                Lembretes Diários de Leitura
              </h3>
              <p className="text-xs text-zinc-400">
                Mantenha a constância da sua jornada com notificações personalizadas
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80">
              <div>
                <span className="text-sm font-semibold text-stone-200 block">
                  Ativar Lembretes Diários
                </span>
                <span className="text-xs text-zinc-400">
                  Aviso para sua leitura da Bíblia Teológica
                </span>
              </div>
              <input
                type="checkbox"
                checked={reminderEnabled}
                onChange={(e) => setReminderEnabled(e.target.checked)}
                className="w-5 h-5 rounded-md accent-amber-600 cursor-pointer"
              />
            </div>

            {reminderEnabled && (
              <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-stone-200 font-medium">Horário da Leitura:</span>
                </div>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="px-3 py-1.5 bg-zinc-900 border border-zinc-700 rounded-xl text-stone-100 font-mono text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>
            )}

            <button
              type="button"
              onClick={handleSaveReminders}
              className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
            >
              Salvar Preferências de Lembrete
            </button>

            {savedFeedback && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 text-xs flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>{savedFeedback}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Opção Discreta de Rever Apresentação e Tour da Plataforma */}
      {onOpenPresentation && (
        <div className="pt-4 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div>
            <span className="font-semibold text-stone-300">Conheça todos os recursos da plataforma:</span>
            <p className="text-[11px] text-zinc-500">
              Rever a visão geral da tese teológica, os 2 planos de leitura, o arsenal exegético e os concílios ecumênicos.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenPresentation}
            className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 text-amber-400 hover:text-amber-300 border border-zinc-800 hover:border-amber-500/40 transition-all font-semibold shrink-0 cursor-pointer text-xs"
          >
            Rever Apresentação do Site
          </button>
        </div>
      )}

    </div>
  );
};

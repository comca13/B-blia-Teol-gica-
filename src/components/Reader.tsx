import React, { useState, useEffect, useRef, useMemo } from 'react';
import { DayReading, ReaderSettings, ScriptureChapter } from '../types';
import { getScriptureForPlanDay, parseDayPassagesToTargets } from '../lib/biblePlanService';
import { getScriptureForDay } from '../data/biblicalTexts';
import { getReadingContent, ReadingContent } from '../lib/dataService';
import confetti from 'canvas-confetti';
import { ReaderSettings as ReaderSettingsComponent } from './ReaderSettings';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Bookmark, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw, 
  Sparkles, 
  Settings2, 
  FileText, 
  Share2, 
  Quote, 
  HelpCircle,
  Clock,
  Compass,
  Check,
  BookOpen,
  Copy,
  Layers,
  RefreshCw,
  Highlighter
} from 'lucide-react';

import { WorldHistoryCard } from './WorldHistoryCard';
import { HistoricalContextCard } from './HistoricalContextCard';
import { ArchaeologyCard } from './ArchaeologyCard';
import { BiblicalMapCard } from './BiblicalMapCard';
import { SecondTempleBridgeModal } from './SecondTempleBridgeModal';
import { LiteraryGenreBadge } from './LiteraryGenreBadge';
import { SitzImLebenCard } from './SitzImLebenCard';
import { OriginalLexiconCard } from './OriginalLexiconCard';
import { IntertextualEchoesCard } from './IntertextualEchoesCard';
import { TextualVariantsCard } from './TextualVariantsCard';
import { TextualVariantIndicator } from './TextualVariantIndicator';
import { PersonalNotes } from './PersonalNotes';
import { getArtifactsForDay } from '../data/archaeologicalData';
import { getGeographyForDay } from '../data/geographyData';
import { 
  getGenreForReading, 
  getSitzImLebenForReading, 
  getLexiconForReading, 
  getTypologyForReading 
} from '../data/theologicalExegesisData';
import { 
  getTextualVariantsForDay, 
  getTextualVariantsForPassage 
} from '../data/textualVariantsData';
import { Scroll } from 'lucide-react';

interface ReaderProps {
  dayReading: DayReading;
  isCompleted: boolean;
  isBookmarked: boolean;
  onToggleComplete: (day: number) => void;
  onToggleBookmark: (day: number) => void;
  onPrevDay: () => void;
  onNextDay: () => void;
  onBackToDashboard: () => void;
  settings: ReaderSettings;
  onUpdateSettings: (settings: ReaderSettings) => void;
  personalNote: string;
  onSaveNote: (day: number, note: string) => void;
  onOpenBible?: (bookNumber: number, chapter: number) => void;
}

export const Reader: React.FC<ReaderProps> = ({
  dayReading,
  isCompleted,
  isBookmarked,
  onToggleComplete,
  onToggleBookmark,
  onPrevDay,
  onNextDay,
  onBackToDashboard,
  settings,
  onUpdateSettings,
  personalNote,
  onSaveNote,
  onOpenBible
}) => {
  const [chapters, setChapters] = useState<ScriptureChapter[]>([]);
  const [loadingScripture, setLoadingScripture] = useState<boolean>(true);
  const [scriptureTranslation, setScriptureTranslation] = useState<'ARA' | 'WEB'>('ARA');
  const [activeChapterFilter, setActiveChapterFilter] = useState<number | 'all'>('all');
  const [copiedVerseKey, setCopiedVerseKey] = useState<string | null>(null);
  const [highlightedVerses, setHighlightedVerses] = useState<Record<string, boolean>>({});

  const [enrichedContent, setEnrichedContent] = useState<ReadingContent | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(settings.audioSpeed || 1.0);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);
  const [noteText, setNoteText] = useState(personalNote);
  const [isNoteSaved, setIsNoteSaved] = useState(false);
  const [isSecondTempleModalOpen, setIsSecondTempleModalOpen] = useState(false);

  // Targets assigned for this day
  const assignedTargets = useMemo(() => {
    return parseDayPassagesToTargets(dayReading.passages);
  }, [dayReading.passages]);

  // Historiography & Archaeology contextual data resolvers
  const effectiveArtifacts = useMemo(() => {
    if (dayReading.artifacts && dayReading.artifacts.length > 0) {
      return dayReading.artifacts;
    }
    if (enrichedContent?.artifacts && enrichedContent.artifacts.length > 0) {
      return enrichedContent.artifacts;
    }
    return getArtifactsForDay(dayReading.day, dayReading.periodId, dayReading.passages);
  }, [dayReading, enrichedContent]);

  const effectiveGeography = useMemo(() => {
    if (dayReading.geography) {
      return dayReading.geography;
    }
    if (enrichedContent?.geography) {
      return enrichedContent.geography;
    }
    return getGeographyForDay(dayReading.day, dayReading.periodId, dayReading.passages);
  }, [dayReading, enrichedContent]);

  // Hermeneutical, Exegetical and Typological Context Resolvers
  const effectiveGenreGuide = useMemo(() => {
    if (dayReading.genreGuide) return dayReading.genreGuide;
    if (enrichedContent?.genreGuide) return enrichedContent.genreGuide;
    return getGenreForReading(dayReading.day, dayReading.passages);
  }, [dayReading, enrichedContent]);

  const effectiveSitzImLeben = useMemo(() => {
    if (dayReading.sitzImLeben) return dayReading.sitzImLeben;
    if (enrichedContent?.sitzImLeben) return enrichedContent.sitzImLeben;
    return getSitzImLebenForReading(dayReading.day, dayReading.passages);
  }, [dayReading, enrichedContent]);

  const effectiveLexicon = useMemo(() => {
    if (dayReading.originalLexicon && dayReading.originalLexicon.length > 0) return dayReading.originalLexicon;
    if (enrichedContent?.originalLexicon && enrichedContent.originalLexicon.length > 0) return enrichedContent.originalLexicon;
    return getLexiconForReading(dayReading.day, dayReading.passages);
  }, [dayReading, enrichedContent]);

  const effectiveTypology = useMemo(() => {
    if (dayReading.typology && dayReading.typology.length > 0) return dayReading.typology;
    if (enrichedContent?.typology && enrichedContent.typology.length > 0) return enrichedContent.typology;
    return getTypologyForReading(dayReading.day, dayReading.passages);
  }, [dayReading, enrichedContent]);

  const effectiveTextualVariants = useMemo(() => {
    return getTextualVariantsForDay(dayReading.day, dayReading.passages);
  }, [dayReading]);

  const depthMode = settings.depthMode || 'EXEGÉTICO_ACADÉMICO';
  const visiblePanels = settings.visiblePanels || {
    archaeology: true,
    lexicon: true,
    worldHistory: true,
    intertextuality: true,
    textualVariants: true,
  };

  const isIntertestamentalNear = dayReading.day >= 294 && dayReading.day <= 297;

  // Load Scripture Text and Firestore content for this day
  const loadScriptureData = async () => {
    setLoadingScripture(true);
    try {
      const fullChapters = await getScriptureForPlanDay(
        dayReading.day, 
        dayReading.passages, 
        scriptureTranslation
      );
      if (fullChapters && fullChapters.length > 0) {
        setChapters(fullChapters);
      } else {
        // Fallback to curated texts if offline or not in cache
        const fallbackChapters = await getScriptureForDay(
          dayReading.day, 
          dayReading.title, 
          dayReading.passages
        );
        setChapters(fallbackChapters);
      }
    } catch (err) {
      console.warn('Failed to load scripture:', err);
      const fallbackChapters = await getScriptureForDay(
        dayReading.day, 
        dayReading.title, 
        dayReading.passages
      );
      setChapters(fallbackChapters);
    } finally {
      setLoadingScripture(false);
    }
  };

  useEffect(() => {
    loadScriptureData();
    setActiveChapterFilter('all');
  }, [dayReading.day, scriptureTranslation]);

  useEffect(() => {
    const loadContent = async () => {
      const planType = dayReading.periodId === 'canonical-flow' ? 'canonical' : 'chronological';
      const content = await getReadingContent(planType, dayReading.day);
      setEnrichedContent(content);
    };

    loadContent();
    setNoteText(personalNote);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    stopAudio();
  }, [dayReading.day]);

  // Handle Copy Verse to clipboard
  const handleCopyVerse = (bookName: string, chapterNum: number, verseNum: number, verseText: string) => {
    const fullCitation = `"${verseText}" — ${bookName} ${chapterNum}:${verseNum} (${scriptureTranslation === 'ARA' ? 'ARA' : 'WEB'})`;
    navigator.clipboard.writeText(fullCitation);
    const key = `${bookName}-${chapterNum}-${verseNum}`;
    setCopiedVerseKey(key);
    setTimeout(() => {
      setCopiedVerseKey(null);
    }, 2000);
  };

  // Toggle highlight for a verse
  const toggleHighlightVerse = (bookName: string, chapterNum: number, verseNum: number) => {
    const key = `${bookName}-${chapterNum}-${verseNum}`;
    setHighlightedVerses(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Handle Complete with Confetti
  const handleCompleteClick = () => {
    const willBeCompleted = !isCompleted;
    onToggleComplete(dayReading.day);
    if (willBeCompleted) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  // Web Speech API for Audio Narration
  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
  };

  const toggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não possui suporte a síntese de voz.');
      return;
    }

    if (isPlayingAudio) {
      stopAudio();
      return;
    }

    // Build complete narrative text from all loaded chapters
    const fullText = [
      `Leitura do Dia ${dayReading.day}: ${dayReading.title}.`,
      `Contexto Teológico: ${enrichedContent?.theologicalContext || dayReading.theologicalContext}`,
      ...chapters.flatMap(ch => [
        `${ch.book}, capítulo ${ch.chapter}.`,
        ...ch.verses.map(v => `Versículo ${v.verse}: ${v.text}`)
      ])
    ].join(' ');

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = scriptureTranslation === 'ARA' ? 'pt-BR' : 'en-US';
    utterance.rate = audioSpeed;

    const voices = window.speechSynthesis.getVoices();
    const voiceLang = scriptureTranslation === 'ARA' ? 'pt' : 'en';
    const chosenVoice = voices.find(v => v.lang.startsWith(voiceLang)) || null;
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    utterance.onend = () => {
      setIsPlayingAudio(false);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleSpeedChange = (speed: number) => {
    setAudioSpeed(speed);
    onUpdateSettings({ ...settings, audioSpeed: speed });
    if (isPlayingAudio) {
      stopAudio();
      setTimeout(toggleAudio, 100);
    }
  };

  const handleSaveNoteChange = (val: string) => {
    setNoteText(val);
    onSaveNote(dayReading.day, val);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  // Font class resolver
  const getFontFamilyClass = () => {
    switch (settings.fontFamily) {
      case 'cinzel':
        return 'font-serif';
      case 'sans':
        return 'font-sans';
      case 'lora':
      default:
        return 'font-serif';
    }
  };

  // Theme container classes (Exclusive Dark Mode)
  const getThemeContainerClasses = () => {
    return 'bg-zinc-950 text-stone-200 border-zinc-800';
  };

  // Filter chapters to display
  const chaptersToDisplay = activeChapterFilter === 'all'
    ? chapters
    : chapters.filter((_, idx) => idx === activeChapterFilter);

  const totalVersesCount = useMemo(() => {
    return chapters.reduce((sum, ch) => sum + ch.verses.length, 0);
  }, [chapters]);

  return (
    <div className={`min-h-[calc(100vh-4rem)] transition-colors ${getThemeContainerClasses()}`}>
      
      {/* Toast confirmation for copied verse */}
      {copiedVerseKey && (
        <div className="fixed bottom-6 right-6 z-50 bg-amber-500 text-zinc-950 px-4 py-2 rounded-xl text-xs font-bold shadow-xl flex items-center gap-2 animate-bounce">
          <Check className="w-4 h-4" />
          <span>Versículo copiado para a área de transferência!</span>
        </div>
      )}

      {/* Sticky Reader Bar */}
      <div className="sticky top-14 sm:top-16 z-30 border-b backdrop-blur-md px-2 sm:px-4 py-2 flex items-center justify-between gap-1 sm:gap-2 border-inherit bg-inherit/95 w-full">
        {/* Left: Back & Day Navigation */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={onBackToDashboard}
            className="flex items-center gap-1 p-1.5 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-700 transition-colors"
            title="Voltar ao Painel"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Painel</span>
          </button>

          <div className="flex items-center text-[11px] sm:text-xs">
            <button
              type="button"
              disabled={dayReading.day <= 1}
              onClick={onPrevDay}
              className="p-1 sm:p-1.5 rounded-md hover:bg-zinc-800 disabled:opacity-30 transition-colors text-stone-300"
              title="Dia Anterior"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-semibold px-0.5 sm:px-1 whitespace-nowrap text-stone-200">
              D{dayReading.day}<span className="text-zinc-500 font-normal hidden sm:inline">/365</span>
            </span>
            <button
              type="button"
              disabled={dayReading.day >= 365}
              onClick={onNextDay}
              className="p-1 sm:p-1.5 rounded-md hover:bg-zinc-800 disabled:opacity-30 transition-colors text-stone-300"
              title="Próximo Dia"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center: Audio Player Quick Control & Bible Shortcut */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold transition-all ${
              isPlayingAudio
                ? 'bg-amber-600 text-white shadow-xs ring-2 ring-amber-400'
                : 'bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 hover:bg-amber-200'
            }`}
            title={isPlayingAudio ? 'Pausar Áudio' : 'Ouvir Narração Completa'}
          >
            {isPlayingAudio ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current animate-pulse shrink-0" />
                <span className="hidden sm:inline">Pausar</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current shrink-0" />
                <span className="hidden sm:inline">Áudio</span>
              </>
            )}
          </button>

          {isPlayingAudio && (
            <div className="hidden md:flex items-center gap-1 text-[11px] font-mono px-2 py-1 bg-stone-100 dark:bg-zinc-800 rounded-lg">
              {[0.75, 1.0, 1.25, 1.5].map((s) => (
                <button
                  key={s}
                  onClick={() => handleSpeedChange(s)}
                  className={`px-1 rounded ${audioSpeed === s ? 'font-bold text-amber-600' : 'text-stone-400'}`}
                >
                  {s}x
                </button>
              ))}
            </div>
          )}

          {/* Quick jump to Bible Reader if onOpenBible exists */}
          {onOpenBible && assignedTargets.length > 0 && (
            <button
              type="button"
              onClick={() => onOpenBible(assignedTargets[0].bookNumber, assignedTargets[0].chapter)}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
              title="Abrir na Bíblia Completa"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Bíblia de Estudo</span>
            </button>
          )}
        </div>

        {/* Right actions: Settings Drawer, Bookmark, Complete Button */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onToggleBookmark(dayReading.day)}
            className={`p-1.5 sm:p-2 rounded-lg transition-colors shrink-0 ${
              isBookmarked 
                ? 'text-amber-600 fill-amber-600 bg-amber-50 dark:bg-amber-950/30' 
                : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
            }`}
            title="Favoritar / Salvar Leitura"
          >
            <Bookmark className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setShowSettingsDrawer(!showSettingsDrawer)}
            className="p-1.5 sm:p-2 rounded-lg text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
            title="Ajustar Tipografia e Tamanho de Fonte"
          >
            <Settings2 className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleCompleteClick}
            className={`flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
              isCompleted
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-stone-800 hover:bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
            }`}
          >
            <CheckCircle className={`w-3.5 h-3.5 shrink-0 ${isCompleted ? 'fill-white text-emerald-600' : ''}`} />
            <span className="whitespace-nowrap">{isCompleted ? 'Lido ✓' : 'Concluir'}</span>
          </button>
        </div>
      </div>

      {/* Typography & Appearance Drawer */}
      {showSettingsDrawer && (
        <div className="border-b px-3 sm:px-4 py-2.5 sm:py-3 bg-zinc-900/95 border-zinc-800 w-full">
          <ReaderSettingsComponent
            isFocusMode={isFocusMode}
            setIsFocusMode={setIsFocusMode}
            fontSize={
              settings.fontSize <= 14 ? 'sm' :
              settings.fontSize <= 18 ? 'base' :
              settings.fontSize <= 22 ? 'lg' : 'xl'
            }
            setFontSize={(size) => {
              const newSize = size === 'sm' ? 14 : size === 'base' ? 18 : size === 'lg' ? 22 : 26;
              onUpdateSettings({ ...settings, fontSize: newSize });
            }}
            fontFamily={settings.fontFamily === 'sans' ? 'sans' : 'serif'}
            setFontFamily={(font) => {
              onUpdateSettings({ ...settings, fontFamily: font === 'sans' ? 'sans' : 'lora' });
            }}
            depthMode={depthMode}
            setDepthMode={(newMode) => {
              onUpdateSettings({ ...settings, depthMode: newMode });
            }}
            visiblePanels={visiblePanels}
            onTogglePanel={(panelKey) => {
              onUpdateSettings({
                ...settings,
                visiblePanels: {
                  ...visiblePanels,
                  [panelKey]: !visiblePanels[panelKey]
                }
              });
            }}
          />
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-8 space-y-6 sm:space-y-8 w-full overflow-hidden">
        
        {/* Title Header */}
        <div className="text-center space-y-2 pb-4 border-b border-inherit">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/70 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300">
            <Compass className="w-3.5 h-3.5" />
            <span>{dayReading.periodName}</span>
            {dayReading.periodApproxDate && (
              <span className="text-amber-700/60 dark:text-amber-400/60 font-normal">
                • {dayReading.periodApproxDate}
              </span>
            )}
          </div>

          <h1 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight">
            {dayReading.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-sm font-medium text-stone-500 dark:text-stone-400">
            <span>{dayReading.dateDefault}</span>
            <span>•</span>
            <span className="font-serif text-amber-800 dark:text-amber-400 font-semibold">
              {dayReading.passages.map(p => `${p.book} ${p.reference}`).join(' | ')}
            </span>
            {assignedTargets.length > 0 && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-amber-400 font-sans border border-zinc-700">
                {assignedTargets.length} {assignedTargets.length === 1 ? 'capítulo' : 'capítulos'}
              </span>
            )}
          </div>

          {/* Literary Genre & Hermeneutics Badge */}
          {effectiveGenreGuide && (
            <div className="pt-1 flex justify-center">
              <LiteraryGenreBadge guide={effectiveGenreGuide} />
            </div>
          )}
        </div>

        {/* Contexto Teológico Diário - Pilar Principal */}
        <section 
          aria-label="Contexto Teológico Diário"
          className="rounded-2xl p-4 sm:p-7 border relative overflow-hidden bg-amber-50/40 dark:bg-amber-950/15 border-amber-200/80 dark:border-amber-900/40 shadow-xs"
        >
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-serif font-bold text-sm sm:text-base mb-2 sm:mb-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <h2 className="break-words">Contexto Teológico & Histórico do Dia</h2>
          </div>

          <p className="text-xs sm:text-base leading-relaxed text-stone-800 dark:text-stone-200 font-serif mb-4 sm:mb-5">
            {enrichedContent?.theologicalContext || dayReading.theologicalContext}
          </p>

          {/* Key verse highlight quote */}
          <div className="p-3 sm:p-4 rounded-xl bg-zinc-900/80 border border-amber-900/40 flex items-start gap-2.5 sm:gap-3 my-3 sm:my-4">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="min-w-0 flex-1">
              <p className="font-serif italic text-xs sm:text-base text-stone-900 dark:text-stone-100 leading-snug mb-1 break-words">
                "{enrichedContent?.keyVerse.text || dayReading.keyVerse.text}"
              </p>
              <p className="text-[11px] sm:text-xs font-semibold text-amber-800 dark:text-amber-400">
                — {enrichedContent?.keyVerse.reference || dayReading.keyVerse.reference} (João Ferreira de Almeida)
              </p>
            </div>
          </div>

          {/* Historical cross-connection note if present */}
          {dayReading.historicalNotes && (
            <div className="text-[11px] sm:text-xs text-amber-900/80 dark:text-amber-300/80 bg-amber-100/50 dark:bg-amber-900/20 p-2.5 sm:p-3 rounded-lg border border-amber-200/50 dark:border-amber-900/30 mt-3 break-words">
              <strong>Conexão Cronológica:</strong> {dayReading.historicalNotes}
            </div>
          )}

          {/* World History Panorama Card */}
          {dayReading.worldHistory && (
            <div className="mt-4">
              <WorldHistoryCard context={dayReading.worldHistory} />
            </div>
          )}

          {/* Historical Context Card */}
          {dayReading.historicalContext && (
            <div className="mt-4">
              <HistoricalContextCard context={dayReading.historicalContext} />
            </div>
          )}

          {/* Intertestamental Transition Bridge Banner */}
          {isIntertestamentalNear && (
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-amber-950/70 via-stone-900 to-amber-950/40 border border-amber-500/40 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Scroll className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-amber-200 text-xs sm:text-sm">
                    A Ponte do Segundo Templo: O que aconteceu entre o AT e o NT?
                  </h4>
                  <p className="text-[11px] sm:text-xs text-stone-300">
                    400 anos de transformações: Macabeus, Septuaginta (LXX), Fariseus e Saduceus.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsSecondTempleModalOpen(true)}
                className="w-full sm:w-auto px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center gap-1.5 shadow-xs transition-colors shrink-0"
              >
                <span>Explorar Guia Histórico</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Archaeology & Material Culture Card (conditional on depthMode and visiblePanels) */}
          {depthMode === 'EXEGÉTICO_ACADÉMICO' && visiblePanels.archaeology && effectiveArtifacts && effectiveArtifacts.length > 0 && (
            <div className="mt-4">
              <ArchaeologyCard artifacts={effectiveArtifacts} />
            </div>
          )}

          {/* Biblical Geography & Historical Cartography Card */}
          {effectiveGeography && (
            <div className="mt-4">
              <BiblicalMapCard geography={effectiveGeography} />
            </div>
          )}

          {/* Eixo Teológico, Hermenêutico & Exegético */}
          {/* Sitz im Leben (A Situação Vital do Texto) */}
          {effectiveSitzImLeben && (
            <div className="mt-4">
              <SitzImLebenCard sitzImLeben={effectiveSitzImLeben} />
            </div>
          )}

          {/* Chaves Linguísticas & Léxico Original (conditional on depthMode and visiblePanels) */}
          {depthMode === 'EXEGÉTICO_ACADÉMICO' && visiblePanels.lexicon && effectiveLexicon && effectiveLexicon.length > 0 && (
            <div className="mt-4">
              <OriginalLexiconCard words={effectiveLexicon} />
            </div>
          )}

          {/* Tipologia Bíblica & Ecos Intertextuais (conditional on depthMode and visiblePanels) */}
          {depthMode === 'EXEGÉTICO_ACADÉMICO' && visiblePanels.intertextuality && effectiveTypology && effectiveTypology.length > 0 && (
            <div className="mt-4">
              <IntertextualEchoesCard typologies={effectiveTypology} />
            </div>
          )}

          {/* Aparelho de Crítica Textual & Variantes de Manuscritos (C2) */}
          {depthMode === 'EXEGÉTICO_ACADÉMICO' && visiblePanels.textualVariants && effectiveTextualVariants && effectiveTextualVariants.length > 0 && (
            <div className="mt-4">
              <TextualVariantsCard variants={effectiveTextualVariants} />
            </div>
          )}

          {/* Indicador suave quando em Modo Devocional */}
          {depthMode === 'DEVOCIONAL' && (
            <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/80 flex items-center justify-between gap-2 font-sans">
              <span>🌿 <strong>Modo Devocional Ativo:</strong> foco em oração, edificação e meditação prática.</span>
              <button
                type="button"
                onClick={() => onUpdateSettings({ ...settings, depthMode: 'EXEGÉTICO_ACADÉMICO' })}
                className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-[11px] font-semibold transition-colors shrink-0"
              >
                Alternar para Exegético
              </button>
            </div>
          )}

          {/* Reflection Prompts */}
          <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-amber-200/50 dark:border-amber-900/30">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Para Meditar e Praticar Hoje:</span>
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              {(enrichedContent?.reflectionQuestions || dayReading.reflectionQuestions).map((q, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">•</span>
                  <span className="break-words">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Audio Player Card with Progress */}
        <section 
          aria-label="Áudio da Leitura"
          className="p-3.5 sm:p-4 rounded-xl border border-inherit bg-stone-50/60 dark:bg-zinc-900/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0">
              <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 truncate">
                Áudio Narração da Leitura Completa
              </h4>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                {isPlayingAudio 
                  ? 'Reproduzindo narração dos capítulos de hoje...' 
                  : `Ouça os ${chapters.length} capítulos do dia (${totalVersesCount} versículos)`}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={toggleAudio}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                isPlayingAudio 
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-800 hover:bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
              }`}
            >
              {isPlayingAudio ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlayingAudio ? 'Pausar Áudio' : 'Ouvir Tudo'}</span>
            </button>

            {isPlayingAudio && (
              <button
                type="button"
                onClick={stopAudio}
                className="p-2 rounded-xl border border-stone-200 dark:border-zinc-700 text-stone-500 hover:text-stone-900 dark:hover:text-white shrink-0"
                title="Parar áudio"
              >
                <VolumeX className="w-4 h-4" />
              </button>
            )}
          </div>
        </section>

        {/* SCRIPTURE READING HEADER & CONTROLS */}
        <div className="pt-2 border-t border-inherit">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-100">
                  Texto Bíblico Completo do Dia
                </h2>
              </div>
              <p className="text-xs text-stone-400 mt-0.5">
                Capítulos e versículos determinados para hoje ({dayReading.passages.map(p => `${p.book} ${p.reference}`).join(', ')})
              </p>
            </div>

            {/* Translation switch and refresh */}
            <div className="flex items-center gap-2">
              <div className="flex bg-zinc-900 p-1 rounded-xl border border-zinc-800">
                <button
                  type="button"
                  onClick={() => setScriptureTranslation('ARA')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    scriptureTranslation === 'ARA'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  title="Almeida Revista e Atualizada"
                >
                  Almeida (ARA)
                </button>
                <button
                  type="button"
                  onClick={() => setScriptureTranslation('WEB')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    scriptureTranslation === 'WEB'
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                  title="World English Bible"
                >
                  English (WEB)
                </button>
              </div>

              <button
                type="button"
                onClick={loadScriptureData}
                disabled={loadingScripture}
                className="p-1.5 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors disabled:opacity-50"
                title="Recarregar texto bíblico"
              >
                <RefreshCw className={`w-4 h-4 ${loadingScripture ? 'animate-spin text-amber-500' : ''}`} />
              </button>
            </div>
          </div>

          {/* Chapter Quick Tabs (if day has multiple chapters) */}
          {chapters.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
              <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5" />
                Navegar:
              </span>

              <button
                type="button"
                onClick={() => setActiveChapterFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  activeChapterFilter === 'all'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                }`}
              >
                Todos os Capítulos ({chapters.length})
              </button>

              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveChapterFilter(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    activeChapterFilter === idx
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                  }`}
                >
                  {ch.book} {ch.chapter}
                  <span className="ml-1 text-[10px] opacity-70">
                    ({ch.verses.length}v)
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* LOADING SKELETON */}
        {loadingScripture && (
          <div className="py-12 px-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 text-center space-y-4 animate-pulse">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 mx-auto flex items-center justify-center border border-amber-500/30">
              <BookOpen className="w-5 h-5 animate-bounce" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-base sm:text-lg font-bold text-zinc-200">
                Carregando Texto Bíblico Completo...
              </h3>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">
                Buscando todos os versículos de {dayReading.passages.map(p => `${p.book} ${p.reference}`).join(', ')} na versão {scriptureTranslation === 'ARA' ? 'Almeida Revista e Atualizada' : 'World English Bible'}...
              </p>
            </div>
            <div className="space-y-2 max-w-lg mx-auto pt-2">
              <div className="h-4 bg-zinc-800 rounded w-full"></div>
              <div className="h-4 bg-zinc-800 rounded w-5/6 mx-auto"></div>
              <div className="h-4 bg-zinc-800 rounded w-4/6 mx-auto"></div>
            </div>
          </div>
        )}

        {/* Scripture Reading Content */}
        {!loadingScripture && chapters.length === 0 && (
          <div className="py-12 px-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center space-y-4">
            <p className="text-sm text-zinc-300">
              Não foi possível carregar os versículos para esta data no momento.
            </p>
            <button
              type="button"
              onClick={loadScriptureData}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        )}

        {!loadingScripture && chapters.length > 0 && (
          <section 
            aria-label="Texto Bíblico do Dia"
            className={`space-y-10 ${getFontFamilyClass()}`}
            style={{ 
              fontSize: `${settings.fontSize}px`, 
              lineHeight: settings.lineHeight 
            }}
          >
            {chaptersToDisplay.map((chap, cIdx) => (
              <article 
                key={`${chap.book}-${chap.chapter}-${cIdx}`} 
                className="p-5 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 shadow-xs space-y-5"
              >
                {/* Chapter Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-3.5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-xl sm:text-2xl text-amber-400 font-serif">
                      {chap.book} {chap.chapter}
                    </h3>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800 text-amber-300 font-sans border border-zinc-700">
                      {chap.verses.length} versículos
                    </span>
                    <span className="hidden sm:inline text-xs text-zinc-500 font-sans">
                      {scriptureTranslation === 'ARA' ? 'Almeida Revista e Atualizada' : 'World English Bible'}
                    </span>
                  </div>

                  {/* Action button: Open full book in BibleReader */}
                  {onOpenBible && (
                    <button
                      type="button"
                      onClick={() => onOpenBible(chap.bookNumber || 1, chap.chapter)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-medium border border-zinc-700 transition-colors shadow-xs"
                      title={`Abrir ${chap.book} na Bíblia de Estudo`}
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      <span>Abrir na Bíblia</span>
                    </button>
                  )}
                </div>

                {/* Optional note if reading plan specified a sub-range */}
                {chap.startVerse && chap.endVerse && (
                  <div className="text-[11px] font-sans px-3 py-1.5 rounded-lg bg-amber-950/30 text-amber-300 border border-amber-900/40 inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Foco do Plano: Versículos {chap.startVerse} ao {chap.endVerse}</span>
                  </div>
                )}

                {/* Verses List */}
                <div className="space-y-3">
                  {chap.verses.map((verse) => {
                    const verseKey = `${chap.book}-${chap.chapter}-${verse.verse}`;
                    const isHighlighted = !!highlightedVerses[verseKey];
                    const isInTargetRange = !chap.startVerse || (verse.verse >= chap.startVerse && (!chap.endVerse || verse.verse <= chap.endVerse));

                    const verseVariants = getTextualVariantsForPassage(chap.book, chap.chapter, verse.verse);

                    return (
                      <p 
                        key={verse.verse} 
                        className={`group relative transition-all rounded-xl p-2 sm:p-2.5 flex items-start gap-2 ${
                          isHighlighted
                            ? 'bg-amber-500/20 ring-1 ring-amber-500/40 text-amber-100'
                            : isInTargetRange
                              ? 'hover:bg-zinc-800/60'
                              : 'opacity-70 hover:opacity-100 hover:bg-zinc-800/40'
                        }`}
                      >
                        <div className="flex items-center gap-1 shrink-0 mt-1 select-none">
                          <sup className="font-sans font-bold text-xs text-amber-400">
                            {verse.verse}
                          </sup>
                          {verseVariants.length > 0 && (
                            <TextualVariantIndicator variant={verseVariants[0]} compact={true} />
                          )}
                        </div>

                        <span className="flex-1 leading-relaxed">
                          {verse.text}
                        </span>

                        {/* Hover Action icons: Copy & Highlight */}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shrink-0 select-none ml-2">
                          <button
                            type="button"
                            onClick={() => toggleHighlightVerse(chap.book, chap.chapter, verse.verse)}
                            className={`p-1 rounded-md transition-colors ${
                              isHighlighted ? 'text-amber-400 bg-amber-500/30' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'
                            }`}
                            title={isHighlighted ? 'Remover destaque' : 'Destacar versículo'}
                          >
                            <Highlighter className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCopyVerse(chap.book, chap.chapter, verse.verse, verse.text)}
                            className="p-1 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                            title="Copiar versículo com citação"
                          >
                            <Copy className="w-3.5 h-3.5" />
                          </button>
                        </span>
                      </p>
                    );
                  })}
                </div>
              </article>
            ))}
          </section>
        )}

        {/* Caderno de Teologia Sistemática Pessoal & Diário Devocional (C3) */}
        <section className="pt-6 border-t border-inherit">
          <PersonalNotes 
            dayId={dayReading.day} 
            passageRef={dayReading.passages.map(p => `${p.book} ${p.reference}`).join(', ')} 
          />
        </section>

        {/* Bottom Navigation & Complete CTA */}
        <div className="py-6 border-t border-inherit flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            disabled={dayReading.day <= 1}
            onClick={onPrevDay}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-inherit text-xs font-semibold flex items-center justify-center gap-2 hover:bg-stone-100 dark:hover:bg-zinc-800 disabled:opacity-40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Dia Anterior ({dayReading.day - 1})</span>
          </button>

          <button
            type="button"
            onClick={handleCompleteClick}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md ${
              isCompleted
                ? 'bg-emerald-600 text-white shadow-emerald-900/20'
                : 'bg-amber-700 hover:bg-amber-800 text-white shadow-amber-900/20'
            }`}
          >
            <CheckCircle className={`w-4 h-4 ${isCompleted ? 'fill-white text-emerald-600' : ''}`} />
            <span>
              {isCompleted ? 'Leitura Concluída! (Clique para desmarcar)' : 'Marcar Leitura de Hoje como Concluída'}
            </span>
          </button>

          <button
            type="button"
            disabled={dayReading.day >= 365}
            onClick={onNextDay}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-inherit text-xs font-semibold flex items-center justify-center gap-2 hover:bg-stone-100 dark:hover:bg-zinc-800 disabled:opacity-40 transition-colors"
          >
            <span>Próximo Dia ({dayReading.day + 1})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </main>

      {/* Second Temple Bridge Transition Modal */}
      <SecondTempleBridgeModal
        isOpen={isSecondTempleModalOpen}
        onClose={() => setIsSecondTempleModalOpen(false)}
      />
    </div>
  );
};

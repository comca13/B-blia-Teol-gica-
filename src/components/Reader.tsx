import React, { useState, useEffect, useRef } from 'react';
import { DayReading, ReaderSettings, ReadingTheme, ScriptureChapter } from '../types';
import { getScriptureForDay } from '../data/biblicalTexts';
import { getReadingContent, ReadingContent } from '../lib/dataService';
import confetti from 'canvas-confetti';
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
  Check
} from 'lucide-react';

import { WorldHistoryCard } from './WorldHistoryCard';
import { HistoricalContextCard } from './HistoricalContextCard';

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
  onSaveNote
}) => {
  const [chapters, setChapters] = useState<ScriptureChapter[]>([]);
  const [enrichedContent, setEnrichedContent] = useState<ReadingContent | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(settings.audioSpeed || 1.0);
  const [showSettingsDrawer, setShowSettingsDrawer] = useState(false);
  const [noteText, setNoteText] = useState(personalNote);
  const [isNoteSaved, setIsNoteSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'text' | 'context' | 'notes'>('text');

  // Load Scripture Text and Firestore content for this day
  useEffect(() => {
    const loadData = async () => {
      const textData = await getScriptureForDay(dayReading.day, dayReading.title, dayReading.passages);
      setChapters(textData);
      
      // Determine plan type from dayReading.periodId
      const planType = dayReading.periodId === 'canonical-flow' ? 'canonical' : 'chronological';
      const content = await getReadingContent(planType, dayReading.day);
      setEnrichedContent(content);
    };

    loadData();
    setNoteText(personalNote);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    stopAudio();
  }, [dayReading.day]);

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

    // Build the narrative text
    const fullText = [
      `Leitura do Dia ${dayReading.day}: ${dayReading.title}.`,
      `Contexto Teológico: ${dayReading.theologicalContext}`,
      ...chapters.flatMap(ch => [
        `${ch.book}, capítulo ${ch.chapter}.`,
        ...ch.verses.map(v => `Versículo ${v.verse}: ${v.text}`)
      ])
    ].join(' ');

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'pt-BR';
    utterance.rate = audioSpeed;

    // Pick best Portuguese voice if available
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang.startsWith('pt')) || null;
    if (ptVoice) {
      utterance.voice = ptVoice;
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

  // Theme container classes
  const getThemeContainerClasses = () => {
    switch (settings.theme) {
      case 'sepia':
        return 'bg-[#F9F5EC] text-[#332A21] border-[#EADDC9]';
      case 'dark':
        return 'bg-zinc-950 text-stone-200 border-zinc-800';
      case 'light':
      default:
        return 'bg-white text-stone-900 border-stone-200';
    }
  };

  return (
    <div className={`min-h-[calc(100vh-4rem)] transition-colors ${getThemeContainerClasses()}`}>
      
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
              className="p-1 sm:p-1.5 rounded-md hover:bg-stone-100 dark:hover:bg-zinc-800 disabled:opacity-30 transition-colors"
              title="Dia Anterior"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <span className="font-semibold px-0.5 sm:px-1 whitespace-nowrap text-stone-900 dark:text-stone-100">
              D{dayReading.day}<span className="text-stone-400 font-normal hidden sm:inline">/365</span>
            </span>
            <button
              type="button"
              disabled={dayReading.day >= 365}
              onClick={onNextDay}
              className="p-1 sm:p-1.5 rounded-md hover:bg-stone-100 dark:hover:bg-zinc-800 disabled:opacity-30 transition-colors"
              title="Próximo Dia"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center: Audio Player Quick Control */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleAudio}
            className={`flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl text-xs font-semibold transition-all ${
              isPlayingAudio
                ? 'bg-amber-600 text-white shadow-xs ring-2 ring-amber-400'
                : 'bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 hover:bg-amber-200'
            }`}
            title={isPlayingAudio ? 'Pausar Áudio' : 'Ouvir Narração'}
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
        <div className="border-b px-3 sm:px-4 py-2.5 sm:py-3 bg-stone-50/95 dark:bg-zinc-900/95 border-inherit text-xs flex flex-wrap items-center justify-between gap-2.5 sm:gap-4 w-full">
          {/* Font Family */}
          <div className="flex items-center gap-2">
            <span className="text-stone-500 dark:text-stone-400 font-medium">Fonte:</span>
            <div className="flex rounded-lg border border-stone-200 dark:border-zinc-700 overflow-hidden">
              <button
                type="button"
                onClick={() => onUpdateSettings({ ...settings, fontFamily: 'lora' })}
                className={`px-2.5 sm:px-3 py-1 font-serif ${settings.fontFamily === 'lora' ? 'bg-amber-800 text-white' : 'hover:bg-stone-200 dark:hover:bg-zinc-800'}`}
              >
                Serifada
              </button>
              <button
                type="button"
                onClick={() => onUpdateSettings({ ...settings, fontFamily: 'sans' })}
                className={`px-2.5 sm:px-3 py-1 font-sans ${settings.fontFamily === 'sans' ? 'bg-amber-800 text-white' : 'hover:bg-stone-200 dark:hover:bg-zinc-800'}`}
              >
                Sem Serifa
              </button>
            </div>
          </div>

          {/* Font Size */}
          <div className="flex items-center gap-2">
            <span className="text-stone-500 dark:text-stone-400 font-medium">Tamanho:</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => onUpdateSettings({ ...settings, fontSize: Math.max(14, settings.fontSize - 2) })}
                className="w-7 h-7 rounded border border-stone-200 dark:border-zinc-700 font-bold hover:bg-stone-100 dark:hover:bg-zinc-800"
              >
                A-
              </button>
              <span className="w-8 text-center font-mono text-[11px]">{settings.fontSize}px</span>
              <button
                type="button"
                onClick={() => onUpdateSettings({ ...settings, fontSize: Math.min(28, settings.fontSize + 2) })}
                className="w-7 h-7 rounded border border-stone-200 dark:border-zinc-700 font-bold hover:bg-stone-100 dark:hover:bg-zinc-800"
              >
                A+
              </button>
            </div>
          </div>

          {/* Theme */}
          <div className="flex items-center gap-2">
            <span className="text-stone-500 dark:text-stone-400 font-medium">Fundo:</span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => onUpdateSettings({ ...settings, theme: 'light' })}
                className={`px-2 py-1 rounded border text-[11px] ${settings.theme === 'light' ? 'border-amber-700 bg-white font-bold text-amber-900' : 'border-stone-300'}`}
              >
                Claro
              </button>
              <button
                type="button"
                onClick={() => onUpdateSettings({ ...settings, theme: 'sepia' })}
                className={`px-2 py-1 rounded border text-[11px] ${settings.theme === 'sepia' ? 'border-amber-800 bg-[#EADDC9] font-bold text-amber-950' : 'border-[#EADDC9] bg-[#F9F5EC]'}`}
              >
                Sépia
              </button>
              <button
                type="button"
                onClick={() => onUpdateSettings({ ...settings, theme: 'dark' })}
                className={`px-2 py-1 rounded border text-[11px] ${settings.theme === 'dark' ? 'border-amber-500 bg-zinc-800 font-bold text-white' : 'border-zinc-700 bg-zinc-900 text-stone-300'}`}
              >
                Escuro
              </button>
            </div>
          </div>
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
          </div>
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
          <div className="p-3 sm:p-4 rounded-xl bg-white/80 dark:bg-zinc-900/70 border border-amber-200/60 dark:border-amber-900/30 flex items-start gap-2.5 sm:gap-3 my-3 sm:my-4">
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
                Áudio Narração Integrada
              </h4>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                {isPlayingAudio ? 'Reproduzindo voz em português...' : 'Ouça enquanto se desloca ou trabalha'}
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
              <span>{isPlayingAudio ? 'Pausar Áudio' : 'Ouvir Texto'}</span>
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

        {/* Scripture Reading Content */}
        <section 
          aria-label="Texto Bíblico do Dia"
          className={`space-y-8 ${getFontFamilyClass()}`}
          style={{ 
            fontSize: `${settings.fontSize}px`, 
            lineHeight: settings.lineHeight 
          }}
        >
          {chapters.map((chap, cIdx) => (
            <article key={cIdx} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-inherit pb-2">
                <h3 className="font-bold text-xl sm:text-2xl text-amber-800 dark:text-amber-400">
                  {chap.book} {chap.chapter}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded bg-stone-100 dark:bg-zinc-800 text-stone-500 font-sans">
                  João Ferreira de Almeida
                </span>
              </div>

              <div className="space-y-3">
                {chap.verses.map((verse) => (
                  <p key={verse.verse} className="group relative transition-colors hover:bg-amber-50/40 dark:hover:bg-amber-950/20 rounded p-1">
                    <sup className="font-sans font-bold text-xs text-amber-700 dark:text-amber-400 select-none mr-2">
                      {verse.verse}
                    </sup>
                    <span>{verse.text}</span>
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        {/* Personal Notes / Devotional Diary for the Day */}
        <section className="pt-6 border-t border-inherit space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-600 dark:text-stone-300">
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Anotações Pessoais & Oração do Dia {dayReading.day}</span>
            </div>
            {isNoteSaved && (
              <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                <Check className="w-3 h-3" />
                Salvo no seu dispositivo
              </span>
            )}
          </div>

          <textarea
            value={noteText}
            onChange={(e) => handleSaveNoteChange(e.target.value)}
            placeholder="O que Deus falou ao seu coração hoje? Escreva aqui suas reflexões, pedidos de oração ou aplicações práticas..."
            rows={4}
            className="w-full p-4 rounded-xl border border-stone-200 dark:border-zinc-700 bg-stone-50/50 dark:bg-zinc-900/60 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-600 transition-all font-sans resize-y"
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
    </div>
  );
};

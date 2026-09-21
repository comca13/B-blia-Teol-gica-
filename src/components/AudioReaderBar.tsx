import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Mic, Volume2 } from 'lucide-react';
import { speechEngine, VoiceTone, AudioPlaybackState } from '../utils/speech';

interface AudioReaderBarProps {
  chapterTitle: string;
  chapterContent: string;
}

export const AudioReaderBar: React.FC<AudioReaderBarProps> = ({ chapterTitle, chapterContent }) => {
  const [supported, setSupported] = useState<boolean>(true);
  const [tone, setTone] = useState<VoiceTone>(() => {
    return (localStorage.getItem('theological_tts_tone') as VoiceTone) || 'baritono';
  });

  const [playbackState, setPlaybackState] = useState<AudioPlaybackState>({
    isPlaying: false,
    isPaused: false,
    currentChunkIndex: 0,
    totalChunks: 0,
    currentText: '',
  });

  // Rastreia a versão do capítulo para interromper reprodução se mudar de livro/capítulo
  const previousChapterRef = useRef<string>(chapterTitle);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }

    const unsubscribe = speechEngine.subscribe(setPlaybackState);

    return () => {
      unsubscribe();
      speechEngine.stop();
    };
  }, []);

  // Se o usuário mudar de capítulo na interface, interrompe a leitura anterior
  useEffect(() => {
    if (previousChapterRef.current !== chapterTitle) {
      previousChapterRef.current = chapterTitle;
      if (playbackState.isPlaying) {
        speechEngine.stop();
      }
    }
  }, [chapterTitle, playbackState.isPlaying]);

  if (!supported) return null;

  const handleToneChange = (newTone: VoiceTone) => {
    setTone(newTone);
    localStorage.setItem('theological_tts_tone', newTone);
    speechEngine.setTone(newTone);
  };

  const togglePlay = () => {
    if (!playbackState.isPlaying) {
      const fullText = `${chapterTitle}. ${chapterContent}`;
      speechEngine.speak(fullText, { tone });
    } else if (playbackState.isPaused) {
      speechEngine.resume();
    } else {
      speechEngine.pause();
    }
  };

  const handleStop = () => {
    speechEngine.stop();
  };

  const progress = playbackState.totalChunks > 0
    ? Math.round((playbackState.currentChunkIndex / playbackState.totalChunks) * 100)
    : 0;

  return (
    <section 
      aria-label="Controles de Audiolivro"
      className="bg-stone-900/95 backdrop-blur-md border border-stone-800 rounded-xl p-3 shadow-xl flex flex-col gap-2 my-4 transition-all"
    >
      <div className="flex items-center justify-between flex-wrap gap-3">
        {/* Controles de Reprodução */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            aria-label={playbackState.isPlaying && !playbackState.isPaused ? "Pausar narração" : "Iniciar narração"}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 active:scale-95 text-stone-100 font-medium rounded-lg transition-all shadow-md text-sm cursor-pointer"
          >
            {playbackState.isPlaying && !playbackState.isPaused ? (
              <>
                <Pause size={16} className="text-stone-100" />
                <span>Pausar</span>
              </>
            ) : (
              <>
                <Play size={16} className="fill-stone-100 text-stone-100" />
                <span>{playbackState.isPaused ? 'Continuar' : 'Ouvir Capítulo'}</span>
              </>
            )}
          </button>

          {playbackState.isPlaying && (
            <button
              onClick={handleStop}
              aria-label="Parar narração"
              className="p-2 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-all cursor-pointer"
              title="Parar áudio"
            >
              <Square size={16} />
            </button>
          )}

          {playbackState.isPlaying && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-amber-400/90 font-medium px-2 py-1 bg-amber-950/40 border border-amber-800/40 rounded-md">
              <Volume2 size={13} className="animate-pulse" />
              <span>{playbackState.isPaused ? 'Em pausa' : 'Narrando...'}</span>
            </div>
          )}
        </div>

        {/* Seletor de Tonalidade Acústica */}
        <div className="flex items-center bg-stone-950 p-1 rounded-lg border border-stone-800/80">
          <span className="text-[11px] font-semibold tracking-wider text-stone-400 px-2 flex items-center gap-1">
            <Mic size={12} className="text-amber-500" /> TIMBRE:
          </span>

          <button
            type="button"
            onClick={() => handleToneChange('grave')}
            className={`px-3 py-1 rounded text-xs font-medium transition-all cursor-pointer ${
              tone === 'grave'
                ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Grave
          </button>

          <button
            type="button"
            onClick={() => handleToneChange('baritono')}
            className={`px-3 py-1 rounded text-xs font-medium transition-all cursor-pointer ${
              tone === 'baritono'
                ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Barítono
          </button>
        </div>
      </div>

      {/* Barra de Progresso do Capítulo */}
      {playbackState.isPlaying && (
        <div className="flex items-center gap-2 mt-1">
          <div className="w-full bg-stone-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-amber-500 h-full transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[10px] text-stone-400 font-mono min-w-[28px] text-right">
            {progress}%
          </span>
        </div>
      )}
    </section>
  );
};

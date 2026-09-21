import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Square, Mic } from 'lucide-react';
import { speechEngine, VoiceTone } from '../utils/speech';

interface AudioBarProps {
  chapterTitle: string;
  chapterContent: string;
}

export const AudioReaderBar: React.FC<AudioBarProps> = ({ chapterTitle, chapterContent }) => {
  const [tone, setTone] = useState<VoiceTone>(() => {
    return (localStorage.getItem('theological_tts_tone') as VoiceTone) || 'baritono';
  });
  
  const [playbackState, setPlaybackState] = useState({
    isPlaying: false,
    isPaused: false,
    currentChunkIndex: 0,
    totalChunks: 0,
  });

  useEffect(() => {
    const unsubscribe = speechEngine.subscribe(setPlaybackState);
    return () => {
      unsubscribe();
      speechEngine.stop();
    };
  }, []);

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

  const progressPercent = playbackState.totalChunks > 0
    ? Math.round((playbackState.currentChunkIndex / playbackState.totalChunks) * 100)
    : 0;

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-3 shadow-lg flex flex-col gap-2 my-4">
      <div className="flex items-center justify-between flex-wrap gap-3">
        {/* Controles Principais */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 active:scale-95 text-white font-medium rounded-lg transition-all shadow-md text-sm"
          >
            {playbackState.isPlaying && !playbackState.isPaused ? (
              <>
                <Pause size={16} /> Pausar
              </>
            ) : (
              <>
                <Play size={16} /> {playbackState.isPaused ? 'Continuar' : 'Ouvir Capítulo'}
              </>
            )}
          </button>

          {playbackState.isPlaying && (
            <button
              onClick={handleStop}
              className="p-2 text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded-lg transition-all"
              title="Interromper leitura"
            >
              <Square size={16} />
            </button>
          )}
        </div>

        {/* Seletor de Tonalidade (Grave vs Barítono) */}
        <div className="flex items-center bg-stone-950 p-1 rounded-lg border border-stone-800">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 px-2 flex items-center gap-1">
            <Mic size={13} className="text-amber-500" /> Tom:
          </span>

          <button
            onClick={() => handleToneChange('grave')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              tone === 'grave'
                ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Grave
          </button>

          <button
            onClick={() => handleToneChange('baritono')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              tone === 'baritono'
                ? 'bg-amber-600/30 text-amber-300 border border-amber-500/50 shadow-sm'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            Barítono
          </button>
        </div>
      </div>

      {/* Barra de Progresso da Narração */}
      {playbackState.isPlaying && (
        <div className="w-full bg-stone-800 rounded-full h-1.5 overflow-hidden mt-1">
          <div
            className="bg-amber-500 h-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </div>
  );
};

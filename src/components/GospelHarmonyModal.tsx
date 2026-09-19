import React, { useState, useEffect } from 'react';
import { GospelHarmonyEvent } from '../types';
import { gospelHarmonyData } from '../data/gospelHarmonyData';
import { GospelHarmonyGrid } from './GospelHarmonyGrid';
import { X, Layers, Sparkles, BookOpen, Compass } from 'lucide-react';

interface GospelHarmonyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEvent?: GospelHarmonyEvent;
  onNavigateToPassage?: (passageRef: string) => void;
  currentBook?: string;
  currentChapter?: number;
}

export const GospelHarmonyModal: React.FC<GospelHarmonyModalProps> = ({
  isOpen,
  onClose,
  initialEvent,
  onNavigateToPassage,
  currentBook,
  currentChapter
}) => {
  const [selectedEventId, setSelectedEventId] = useState<string>(
    initialEvent?.id || gospelHarmonyData[0].id
  );

  useEffect(() => {
    if (initialEvent) {
      setSelectedEventId(initialEvent.id);
    }
  }, [initialEvent]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentEvent = gospelHarmonyData.find(e => e.id === selectedEventId) || gospelHarmonyData[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-zinc-800 bg-zinc-900/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-base sm:text-lg text-stone-100 flex items-center gap-2">
                <span>Harmonia dos Evangelhos</span>
                <span className="text-xs font-mono font-normal px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  Leitura Paralela
                </span>
              </h2>
              <p className="text-xs text-zinc-400">
                Comparação exegética das narrativas de Mateus, Marcos, Lucas e João
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-colors"
            title="Fechar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Event Quick Selector Bar */}
        <div className="px-4 sm:px-6 py-2.5 bg-zinc-900/40 border-b border-zinc-800/80 overflow-x-auto scrollbar-none flex items-center gap-2 shrink-0">
          <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            Eventos:
          </span>
          {gospelHarmonyData.map(ev => (
            <button
              key={ev.id}
              type="button"
              onClick={() => setSelectedEventId(ev.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                selectedEventId === ev.id
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {ev.title.split(' e ')[0].split(' no ')[0].split(' em ')[0]}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          <GospelHarmonyGrid
            event={currentEvent}
            onNavigateToPassage={(ref) => {
              if (onNavigateToPassage) {
                onNavigateToPassage(ref);
                onClose();
              }
            }}
            currentBook={currentBook}
            currentChapter={currentChapter}
          />
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3 border-t border-zinc-800/80 bg-zinc-900/60 flex items-center justify-between text-xs text-zinc-400 shrink-0">
          <span>{gospelHarmonyData.length} grandes eventos sinóticos mapeados</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};

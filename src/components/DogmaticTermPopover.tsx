import React, { useEffect, useRef, useState } from 'react';
import { 
  X, 
  Sparkles, 
  BookOpen, 
  Landmark, 
  Copy, 
  Check, 
  Languages, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { DogmaticTermExplanation } from '../data/dogmaticTermsDictionary';

export interface DogmaticTermPopoverProps {
  term: DogmaticTermExplanation | null;
  isOpen: boolean;
  onClose: () => void;
  anchorRect?: DOMRect | null;
  onNavigateToPassage?: (reference: string) => void;
}

export const DogmaticTermPopover: React.FC<DogmaticTermPopoverProps> = ({
  term,
  isOpen,
  onClose,
  anchorRect,
  onNavigateToPassage
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  // Fecha no ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Calcula posição flutuante ancorada ao elemento clicado
  useEffect(() => {
    if (!isOpen || !anchorRect) {
      setCoords(null);
      return;
    }

    const popoverWidth = Math.min(window.innerWidth - 32, 400);
    const popoverHeight = 280; // Estimativa de altura

    let left = anchorRect.left + anchorRect.width / 2 - popoverWidth / 2;
    // Evita sair das bordas da tela
    if (left < 16) left = 16;
    if (left + popoverWidth > window.innerWidth - 16) {
      left = window.innerWidth - popoverWidth - 16;
    }

    // Tenta posicionar acima do botão; se não couber, posiciona abaixo
    let top = anchorRect.top - popoverHeight - 12;
    if (top < 16) {
      top = anchorRect.bottom + 12;
    }

    setCoords({ top, left });
  }, [isOpen, anchorRect]);

  if (!isOpen || !term) return null;

  const handleCopy = () => {
    const text = `${term.term} (${term.originalLanguage || 'Teologia'}): "${term.literalMeaning}"\n\nSentido Teológico: ${term.theologicalSense}\nOrigem Histórica: ${term.historicalOrigin}${term.keyScripture ? `\nPassagem Bíblica: ${term.keyScripture}` : ''}\n\n[Bíblia Teológica: Cronos & Cânon]`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop transparente / semitransparente para clique fora */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-150" 
      />

      {/* Popover / Cartão Flutuante */}
      <div
        ref={popoverRef}
        style={coords ? { 
          position: 'fixed', 
          top: `${coords.top}px`, 
          left: `${coords.left}px`,
          width: `min(calc(100vw - 32px), 420px)`
        } : undefined}
        className={`relative z-10 w-full max-w-md bg-zinc-950/98 border border-amber-500/50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-2xl shadow-black/90 ring-1 ring-amber-500/30 space-y-3.5 animate-in fade-in zoom-in-95 duration-150 ${
          !coords ? 'mx-auto' : ''
        }`}
      >
        {/* Cabeçalho */}
        <div className="flex items-start justify-between gap-2 border-b border-zinc-800/80 pb-2.5">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                Termo Teológico
              </span>

              {term.originalLanguage && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                  <Languages className="w-3 h-3 text-zinc-400" />
                  {term.originalLanguage}
                </span>
              )}
            </div>

            <h4 className="font-serif font-bold text-base sm:text-lg text-stone-100 leading-snug">
              {term.term}
            </h4>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              title="Copiar definição do termo"
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-stone-200 border border-zinc-800 transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-stone-200 border border-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tradução Literal */}
        <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs">
          <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-amber-400 block mb-0.5">
            Tradução / Significado Literal:
          </span>
          <p className="font-serif italic font-semibold text-stone-200">
            "{term.literalMeaning}"
          </p>
        </div>

        {/* Sentido Teológico & Dogmático */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-zinc-400 block">
            Sentido Dogmático & Teológico:
          </span>
          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed text-justify sm:text-left bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
            {term.theologicalSense}
          </p>
        </div>

        {/* Rodapé: Origem Histórica e Escritura */}
        <div className="pt-2 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-zinc-400">
          <div className="flex items-center gap-1.5 text-zinc-400 truncate">
            <Landmark className="w-3 h-3 text-amber-500/90 shrink-0" />
            <span className="truncate">{term.historicalOrigin}</span>
          </div>

          {term.keyScripture && onNavigateToPassage && (
            <button
              type="button"
              onClick={() => {
                const firstRef = term.keyScripture?.split(';')[0]?.trim() || '';
                onNavigateToPassage(firstRef);
                onClose();
              }}
              title={`Ler ${term.keyScripture} na Bíblia`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-amber-600/30 text-amber-300 border border-zinc-700 hover:border-amber-500/50 transition-colors cursor-pointer self-start sm:self-auto font-medium"
            >
              <BookOpen className="w-3 h-3 text-amber-400" />
              <span>{term.keyScripture}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Copy, 
  Check, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { DetailedBiblicalConnection } from '../types';

export interface BiblicalConnectionCardProps {
  connection: DetailedBiblicalConnection;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  onNavigateToPassage?: (reference: string) => void;
}

export const BiblicalConnectionCard: React.FC<BiblicalConnectionCardProps> = ({
  connection,
  isExpanded: controlledExpanded,
  onToggleExpand: controlledToggle,
  onNavigateToPassage
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  // Permite tanto modo controlado quanto não-controlado
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  const toggle = controlledToggle !== undefined ? controlledToggle : () => setInternalExpanded(prev => !prev);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `[Conexão Bíblica: ${connection.referenceDisplay}]\n${connection.title}\n\n${connection.explanation}${connection.theologicalContext ? `\n\nContexto Teológico: ${connection.theologicalContext}` : ''}\n\nPassagem Bíblica: ${connection.scriptureReference} (Bíblia Teológica)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavigate = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigateToPassage?.(connection.scriptureReference);
  };

  return (
    <div 
      className={`rounded-xl sm:rounded-2xl border transition-all duration-200 overflow-hidden ${
        isExpanded 
          ? 'bg-zinc-900/95 border-amber-500/50 shadow-md ring-1 ring-amber-500/20' 
          : 'bg-zinc-900/70 border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900/90'
      }`}
    >
      {/* Header Bar (Sempre visível) */}
      <div 
        onClick={toggle}
        className="p-3 sm:p-3.5 flex items-center justify-between gap-2.5 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2 min-w-0">
          <span className="p-1 rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/30 shrink-0">
            <BookOpen className="w-3.5 h-3.5" />
          </span>
          <div className="min-w-0">
            <span className="font-mono text-xs sm:text-sm font-semibold text-stone-200 truncate block">
              {connection.referenceDisplay}
            </span>
            <span className="text-[11px] text-zinc-400 line-clamp-1">
              {connection.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 ml-auto">
          {/* Botão de abrir texto diretamente */}
          <button
            type="button"
            onClick={handleNavigate}
            title={`Abrir ${connection.scriptureReference} no leitor bíblico`}
            className="px-2 py-1 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30 text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span className="hidden xs:inline">Ler</span>
            <ExternalLink className="w-3 h-3" />
          </button>

          {/* Botão expandir/recolher */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            className="p-1 rounded-lg text-zinc-400 hover:text-stone-100 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-amber-400" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Gaveta de Explicação Detalhada */}
      {isExpanded && (
        <div className="p-3.5 sm:p-4 border-t border-zinc-800 bg-zinc-950/60 space-y-3 animate-in fade-in duration-150">
          {/* Título & Ações */}
          <div className="flex items-start justify-between gap-2">
            <h5 className="font-serif font-bold text-sm text-amber-200 leading-snug">
              {connection.title}
            </h5>

            <button
              type="button"
              onClick={handleCopy}
              title="Copiar explicação"
              className="p-1.5 rounded-lg bg-zinc-850 hover:bg-zinc-800 text-zinc-400 hover:text-stone-200 border border-zinc-800 text-xs shrink-0 cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Explicação Histórica e Textual */}
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed text-justify sm:text-left bg-zinc-900/60 p-3 rounded-xl border border-zinc-800/80">
            {connection.explanation}
          </p>

          {/* Contexto Teológico & Cumprimento */}
          {connection.theologicalContext && (
            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-950/20 border border-amber-800/30 text-xs text-amber-200/90 space-y-1">
              <span className="font-bold uppercase tracking-wider text-[10px] text-amber-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Significado Teológico & Cumprimento Bíblico:
              </span>
              <p className="leading-relaxed">
                {connection.theologicalContext}
              </p>
            </div>
          )}

          {/* Botão de Leitura Bíblica Proeminente */}
          <div className="pt-1 flex items-center justify-end">
            <button
              type="button"
              onClick={handleNavigate}
              className="px-3.5 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Abrir {connection.scriptureReference} na Bíblia</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

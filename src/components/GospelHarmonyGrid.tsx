import React, { useState } from 'react';
import { GospelHarmonyEvent } from '../types';
import { EVANGELISTS_META } from '../data/gospelHarmonyData';
import { 
  Sparkles, 
  BookOpen, 
  Copy, 
  Check, 
  ExternalLink, 
  Scroll, 
  Compass, 
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface GospelHarmonyGridProps {
  event: GospelHarmonyEvent;
  onNavigateToPassage?: (passageRef: string) => void;
  currentBook?: string;
  currentChapter?: number;
}

const CATEGORY_LABELS: Record<GospelHarmonyEvent['category'], { label: string; color: string }> = {
  MINISTERIO: { label: 'Ministério Público', color: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
  MILAGRE: { label: 'Sinal & Milagre', color: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
  PARABOLA: { label: 'Parábola do Reino', color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' },
  PAIXAO_E_RESSURREICAO: { label: 'Paixão, Cruz & Ressurreição', color: 'bg-rose-500/10 text-rose-300 border-rose-500/30' },
  NASCIMENTO: { label: 'Encarnação & Nascimento', color: 'bg-sky-500/10 text-sky-300 border-sky-500/30' }
};

const EVANGELISTS_LIST: Array<'matthew' | 'mark' | 'luke' | 'john'> = [
  'matthew',
  'mark',
  'luke',
  'john'
];

export const GospelHarmonyGrid: React.FC<GospelHarmonyGridProps> = ({
  event,
  onNavigateToPassage,
  currentBook,
  currentChapter
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeMobileEvangelist, setActiveMobileEvangelist] = useState<'matthew' | 'mark' | 'luke' | 'john' | 'all'>('all');

  const catInfo = CATEGORY_LABELS[event.category] || {
    label: event.category,
    color: 'bg-zinc-800 text-zinc-300 border-zinc-700'
  };

  const handleCopy = (refText: string, key: string) => {
    navigator.clipboard.writeText(refText);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="rounded-3xl bg-gradient-to-br from-zinc-900/95 via-stone-900/90 to-zinc-950 border border-zinc-800 p-4 sm:p-6 shadow-xl space-y-5">
      
      {/* Header: Category Badge and Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${catInfo.color}`}>
              {catInfo.label}
            </span>
            <span className="text-[11px] font-mono text-zinc-400">
              Harmonia dos Evangelhos
            </span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100">
            {event.title}
          </h3>
        </div>

        {/* Mobile Filter Tabs (< md) */}
        <div className="md:hidden flex items-center gap-1 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveMobileEvangelist('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              activeMobileEvangelist === 'all'
                ? 'bg-amber-600 text-white'
                : 'bg-zinc-800 text-zinc-400'
            }`}
          >
            Todos (4)
          </button>
          {EVANGELISTS_LIST.map(k => {
            const hasRef = !!event.references[k];
            const meta = EVANGELISTS_META[k];
            return (
              <button
                key={k}
                type="button"
                onClick={() => setActiveMobileEvangelist(k)}
                className={`px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1 ${
                  activeMobileEvangelist === k
                    ? 'bg-amber-600 text-white'
                    : hasRef
                    ? 'bg-zinc-800 text-zinc-300'
                    : 'bg-zinc-900 text-zinc-600 opacity-60'
                }`}
              >
                <span>{meta.initial}</span>
                {!hasRef && <span className="text-[10px]">•</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP VIEW (md: and up): 4-Column Parallel Comparison Grid */}
      {/* ========================================================================= */}
      <div className="hidden md:grid md:grid-cols-4 gap-3.5">
        {EVANGELISTS_LIST.map(k => {
          const meta = EVANGELISTS_META[k];
          const ref = event.references[k];
          const isPresent = !!ref;

          return (
            <div
              key={k}
              className={`rounded-2xl border p-4 flex flex-col justify-between transition-all duration-200 ${
                isPresent
                  ? `${meta.borderClass} ${meta.accentBg} hover:border-amber-500/60 shadow-xs`
                  : 'border-zinc-800/60 bg-zinc-950/40 opacity-60'
              }`}
            >
              <div>
                {/* Evangelist Header */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-serif font-bold text-xs border ${meta.badgeClass}`}>
                      {meta.initial}
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-stone-100 text-sm leading-tight">
                        {meta.name}
                      </h4>
                      <p className="text-[10px] text-zinc-400 truncate max-w-[100px]">
                        {meta.symbol}
                      </p>
                    </div>
                  </div>

                  {isPresent && (
                    <button
                      type="button"
                      onClick={() => handleCopy(ref, k)}
                      className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                      title="Copiar referência"
                    >
                      {copiedKey === k ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  )}
                </div>

                {/* Reference Box */}
                {isPresent ? (
                  <div className="mt-2 space-y-2">
                    <div className="p-2.5 rounded-xl bg-zinc-950/90 border border-zinc-800 text-xs">
                      <span className="font-mono font-bold text-amber-300 block text-xs">
                        {ref}
                      </span>
                      <p className="text-[10px] text-zinc-400 mt-1 line-clamp-2 leading-snug">
                        {meta.primaryEmphasis}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 p-3 rounded-xl bg-zinc-900/30 border border-dashed border-zinc-800 text-center">
                    <p className="text-[11px] text-zinc-500 italic">
                      Omissão intencional
                    </p>
                    <p className="text-[10px] text-zinc-600 mt-0.5">
                      Não relatado neste evangelista
                    </p>
                  </div>
                )}
              </div>

              {/* Action: Open in Reader if present */}
              {isPresent && onNavigateToPassage && (
                <button
                  type="button"
                  onClick={() => onNavigateToPassage(ref)}
                  className="mt-3 w-full py-1.5 px-2 rounded-xl bg-zinc-900 hover:bg-amber-600 text-zinc-300 hover:text-white text-[11px] font-semibold transition-colors flex items-center justify-center gap-1 border border-zinc-800 hover:border-amber-500"
                >
                  <BookOpen className="w-3 h-3" />
                  <span>Ler relato</span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* MOBILE VIEW (< md): Stacked / Filtered Accordion Cards */}
      {/* ========================================================================= */}
      <div className="md:hidden space-y-3">
        {EVANGELISTS_LIST.map(k => {
          if (activeMobileEvangelist !== 'all' && activeMobileEvangelist !== k) {
            return null;
          }

          const meta = EVANGELISTS_META[k];
          const ref = event.references[k];
          const isPresent = !!ref;

          return (
            <div
              key={k}
              className={`rounded-2xl border p-3.5 transition-all ${
                isPresent
                  ? `${meta.borderClass} ${meta.accentBg}`
                  : 'border-zinc-800/60 bg-zinc-950/40 opacity-70'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-serif font-bold text-xs border ${meta.badgeClass}`}>
                    {meta.initial}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif font-bold text-stone-100 text-sm">
                        Evangelho de {meta.name}
                      </h4>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        ({meta.symbol})
                      </span>
                    </div>
                    {isPresent ? (
                      <span className="font-mono text-xs font-bold text-amber-300">
                        {ref}
                      </span>
                    ) : (
                      <span className="text-xs text-zinc-500 italic">
                        Omissão temática intencional
                      </span>
                    )}
                  </div>
                </div>

                {isPresent && (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => handleCopy(ref, k)}
                      className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-900/60 border border-zinc-800"
                      title="Copiar"
                    >
                      {copiedKey === k ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    {onNavigateToPassage && (
                      <button
                        type="button"
                        onClick={() => onNavigateToPassage(ref)}
                        className="p-1.5 rounded-lg text-amber-400 hover:text-amber-300 bg-zinc-900/60 border border-zinc-800"
                        title="Ler"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}
              </div>

              {isPresent && (
                <div className="mt-2 pt-2 border-t border-zinc-800/60">
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    <strong className="text-stone-300">Ênfase de {meta.name}:</strong> {meta.primaryEmphasis}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* THEOLOGICAL EMPHASIS CARD: Highlighted comparative exegesis box */}
      {/* ========================================================================= */}
      <div className="rounded-2xl bg-amber-950/30 border border-amber-800/40 p-4 sm:p-5 space-y-2.5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Ênfases Teológicas Comparadas (Exegese Sinótica)</span>
        </div>

        <p className="font-serif text-xs sm:text-sm text-stone-200 leading-relaxed">
          {event.theologicalEmphasis}
        </p>

        <div className="pt-2 border-t border-amber-900/40 flex items-center justify-between text-[11px] text-amber-400/80 font-mono">
          <span>Perspectiva Redentiva-Histórica dos 4 Evangelhos</span>
          <span className="hidden sm:inline">Tetramorfo Profético (Ez 1 / Ap 4)</span>
        </div>
      </div>

    </div>
  );
};

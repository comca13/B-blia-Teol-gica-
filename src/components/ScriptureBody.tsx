import React, { useMemo, useCallback } from 'react';
import { ScriptureChapter, BiblicalDifficulty, Verse } from '../types';
import { BookOpen, Sparkles, Highlighter, Copy } from 'lucide-react';
import { TextualVariantIndicator } from './TextualVariantIndicator';
import { ApologeticsBadge } from './ApologeticsBadge';
import { AudioReaderBar } from './AudioReaderBar';
import { getTextualVariantsForPassage } from '../data/textualVariantsData';
import { getDifficultiesForVerse } from '../data/apologeticsData';

interface VerseItemProps {
  book: string;
  chapter: number;
  verse: Verse;
  isHighlighted: boolean;
  isInTargetRange: boolean;
  onToggleHighlightVerse: (bookName: string, chapterNum: number, verseNum: number) => void;
  onCopyVerse: (bookName: string, chapterNum: number, verseNum: number, verseText: string) => void;
  onOpenDifficulty?: (difficulty: BiblicalDifficulty) => void;
}

/**
 * Isolated memoized verse row. Prevents heavy re-renders of dozens/hundreds of verses
 * when unrelated parent states (like drawer toggle, audio player, or settings) change.
 */
const VerseItem: React.FC<VerseItemProps> = React.memo(({
  book,
  chapter,
  verse,
  isHighlighted,
  isInTargetRange,
  onToggleHighlightVerse,
  onCopyVerse,
  onOpenDifficulty
}) => {
  // Heavy textual lookups memoized per specific verse
  const verseVariants = useMemo(
    () => getTextualVariantsForPassage(book, chapter, verse.verse),
    [book, chapter, verse.verse]
  );

  const verseDifficulties = useMemo(
    () => getDifficultiesForVerse(book, chapter, verse.verse),
    [book, chapter, verse.verse]
  );

  // Stabilized callbacks
  const handleToggle = useCallback(() => {
    onToggleHighlightVerse(book, chapter, verse.verse);
  }, [onToggleHighlightVerse, book, chapter, verse.verse]);

  const handleCopy = useCallback(() => {
    onCopyVerse(book, chapter, verse.verse, verse.text);
  }, [onCopyVerse, book, chapter, verse.verse, verse.text]);

  const handleDifficultyClick = useCallback((diff: BiblicalDifficulty) => {
    if (onOpenDifficulty) {
      onOpenDifficulty(diff);
    }
  }, [onOpenDifficulty]);

  return (
    <div 
      className={`group relative transition-all rounded-xl p-2 sm:p-2.5 flex items-start gap-2 ${
        isHighlighted
          ? 'bg-amber-500/20 ring-1 ring-amber-500/40 text-amber-100'
          : isInTargetRange
            ? 'hover:bg-zinc-800/60'
            : 'opacity-70 hover:opacity-100 hover:bg-zinc-800/40'
      }`}
    >
      <div className="flex items-center gap-1.5 shrink-0 mt-0.5 select-none">
        <sup className="font-sans font-bold text-xs text-amber-400">
          {verse.verse}
        </sup>
        {verseVariants.length > 0 && (
          <TextualVariantIndicator variant={verseVariants[0]} compact={true} />
        )}
        {verseDifficulties.length > 0 && (
          <ApologeticsBadge
            difficulty={verseDifficulties[0]}
            onClick={handleDifficultyClick}
          />
        )}
      </div>

      <span className="flex-1 leading-relaxed">
        {verse.text}
      </span>

      {/* Hover Action icons: Copy & Highlight */}
      <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shrink-0 select-none ml-2">
        <button
          type="button"
          onClick={handleToggle}
          className={`p-1 rounded-md transition-colors ${
            isHighlighted ? 'text-amber-400 bg-amber-500/30' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800'
          }`}
          title={isHighlighted ? 'Remover destaque' : 'Destacar versículo'}
        >
          <Highlighter className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="p-1 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
          title="Copiar versículo com citação"
        >
          <Copy className="w-3.5 h-3.5" />
        </button>
      </span>
    </div>
  );
});

VerseItem.displayName = 'VerseItem';

export interface ScriptureBodyProps {
  chapters: ScriptureChapter[];
  scriptureTranslation: 'ARA' | 'WEB';
  fontFamilyClass: string;
  fontSize: number;
  lineHeight: number;
  highlightedVerses: Record<string, boolean>;
  onToggleHighlightVerse: (bookName: string, chapterNum: number, verseNum: number) => void;
  onCopyVerse: (bookName: string, chapterNum: number, verseNum: number, verseText: string) => void;
  onOpenBible?: (bookNumber: number, chapter: number) => void;
  onOpenDifficulty?: (difficulty: BiblicalDifficulty) => void;
}

export const ScriptureBody = React.memo<ScriptureBodyProps>(({
  chapters,
  scriptureTranslation,
  fontFamilyClass,
  fontSize,
  lineHeight,
  highlightedVerses,
  onToggleHighlightVerse,
  onCopyVerse,
  onOpenBible,
  onOpenDifficulty
}) => {
  if (!chapters || chapters.length === 0) {
    return null;
  }

  return (
    <section 
      aria-label="Texto Bíblico do Dia"
      className={`space-y-10 ${fontFamilyClass}`}
      style={{ 
        fontSize: `${fontSize}px`, 
        lineHeight: lineHeight 
      }}
    >
      {chapters.map((chap, cIdx) => {
        const bookName = chap?.book ?? '';
        const chapterNum = chap?.chapter ?? 1;
        const versesList = chap?.verses ?? [];

        return (
          <article 
            key={`${bookName}-${chapterNum}-${cIdx}`} 
            className="p-5 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 shadow-xs space-y-5"
          >
            {/* Chapter Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-3.5">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-xl sm:text-2xl text-amber-400 font-serif">
                  {bookName} {chapterNum}
                </h3>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-zinc-800 text-amber-300 font-sans border border-zinc-700">
                  {versesList.length} versículos
                </span>
                <span className="hidden sm:inline text-xs text-zinc-500 font-sans">
                  {scriptureTranslation === 'ARA' ? 'Almeida Revista e Atualizada' : 'World English Bible'}
                </span>
              </div>

              {/* Action button: Open full book in BibleReader */}
              {onOpenBible && (
                <button
                  type="button"
                  onClick={() => onOpenBible(chap.bookNumber || 1, chapterNum)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-medium border border-zinc-700 transition-colors shadow-xs"
                  title={`Abrir ${bookName} na Bíblia de Estudo`}
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

            {/* Barra de Narração Integrada do Capítulo */}
            <AudioReaderBar 
              chapterTitle={`${bookName} capítulo ${chapterNum}`}
              chapterContent={versesList.map(v => v.text).join(' ')}
            />

            {/* Verses List */}
            <div className="space-y-3">
              {versesList.map((verse) => {
                const verseKey = `${bookName}-${chapterNum}-${verse.verse}`;
                const isHighlighted = !!highlightedVerses?.[verseKey];
                const isInTargetRange = !chap.startVerse || (verse.verse >= chap.startVerse && (!chap.endVerse || verse.verse <= chap.endVerse));

                return (
                  <VerseItem
                    key={verse.verse}
                    book={bookName}
                    chapter={chapterNum}
                    verse={verse}
                    isHighlighted={isHighlighted}
                    isInTargetRange={isInTargetRange}
                    onToggleHighlightVerse={onToggleHighlightVerse}
                    onCopyVerse={onCopyVerse}
                    onOpenDifficulty={onOpenDifficulty}
                  />
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
});

ScriptureBody.displayName = 'ScriptureBody';

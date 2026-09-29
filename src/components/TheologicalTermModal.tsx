import React from 'react';
import { X, BookOpen, Languages, Sparkles, Scroll, Users, Bookmark, Check, Copy } from 'lucide-react';
import { TheologicalGlossaryTerm } from '../types';
import { isFavorite, toggleFavorite } from '../utils/favoritesStorage';

interface TheologicalTermModalProps {
  term: TheologicalGlossaryTerm | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToPassage?: (reference: string) => void;
  onOpenFullGlossary?: () => void;
}

export const TheologicalTermModal: React.FC<TheologicalTermModalProps> = ({
  term,
  isOpen,
  onClose,
  onNavigateToPassage,
  onOpenFullGlossary
}) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (term) {
      setIsBookmarked(isFavorite(term.id));
    }
  }, [term]);

  if (!isOpen || !term) return null;

  const handleToggleBookmark = () => {
    const newState = toggleFavorite({
      id: term.id,
      entityType: 'glossary',
      title: term.term,
      subtitle: term.originalLanguage ? `${term.originalLanguage.word} (${term.originalLanguage.transliteration})` : undefined,
      categoryOrTradition: `Glossário: ${term.category}`
    });
    setIsBookmarked(newState);
  };

  const handleCopyDefinition = () => {
    const text = `${term.term} (${term.originalLanguage?.word || ''} - ${term.originalLanguage?.transliteration || ''}): ${term.overview}\n\n• Católica: ${term.catholicPerspective.definition}\n• Protestante: ${term.protestantPerspective.definition}\n• Ortodoxa: ${term.orthodoxPerspective?.definition || 'N/A'}\n\nFonte: Bíblia Teológica (Cronos & Cânon)`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-zinc-100 ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 shrink-0">
              <Languages className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-stone-100">
                  {term.term}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 font-mono">
                  {term.category}
                </span>
              </div>
              {term.originalLanguage && (
                <p className="text-xs text-stone-400 font-mono">
                  {term.originalLanguage.word} • <em>{term.originalLanguage.transliteration}</em> — {term.originalLanguage.literalMeaning}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleToggleBookmark}
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isBookmarked 
                  ? 'bg-amber-600/30 border-amber-500 text-amber-300' 
                  : 'bg-zinc-850 hover:bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-white'
              }`}
              title={isBookmarked ? 'Remover dos salvos' : 'Salvar nos favoritos'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
            <button
              type="button"
              onClick={handleCopyDefinition}
              className="p-2 rounded-xl bg-zinc-850 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              title="Copiar definição completa"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs leading-relaxed">
          {/* Overview */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-stone-200 text-xs sm:text-sm">
            <span className="font-bold text-amber-400 block mb-1">Síntese Conceitual:</span>
            {term.overview}
          </div>

          {/* Tripartite perspectives */}
          <div className="space-y-3">
            {/* Catholic */}
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/40 space-y-1">
              <span className="font-bold text-amber-400 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Perspectiva Católica
              </span>
              <p className="text-stone-300">{term.catholicPerspective.definition}</p>
              <p className="text-[10px] text-amber-400/80 italic font-mono pt-1">
                Fonte: {term.catholicPerspective.primarySource}
              </p>
            </div>

            {/* Protestant */}
            <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-800/40 space-y-1">
              <span className="font-bold text-blue-400 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Perspectiva Protestante / Reformada
              </span>
              <p className="text-stone-300">{term.protestantPerspective.definition}</p>
              <p className="text-[10px] text-blue-400/80 italic font-mono pt-1">
                Fonte: {term.protestantPerspective.primarySource}
              </p>
            </div>

            {/* Orthodox */}
            {term.orthodoxPerspective && (
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-1">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Perspectiva Ortodoxa Oriental
                </span>
                <p className="text-stone-300">{term.orthodoxPerspective.definition}</p>
                <p className="text-[10px] text-emerald-400/80 italic font-mono pt-1">
                  Fonte: {term.orthodoxPerspective.primarySource}
                </p>
              </div>
            )}
          </div>

          {/* Verses */}
          {term.relatedVerses && term.relatedVerses.length > 0 && (
            <div className="pt-2 border-t border-zinc-800">
              <span className="font-bold text-stone-400 block mb-2 uppercase text-[10px] tracking-wider">
                Passagens Bíblicas Chave:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {term.relatedVerses.map((verse, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      onClose();
                      onNavigateToPassage?.(verse);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-zinc-700 font-mono text-[11px] transition-colors cursor-pointer"
                  >
                    {verse}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between">
          {onOpenFullGlossary ? (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenFullGlossary();
              }}
              className="text-xs text-amber-400 hover:text-amber-300 font-semibold cursor-pointer underline"
            >
              Abrir Glossário Teológico Completo
            </button>
          ) : <span />}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-stone-200 font-semibold cursor-pointer transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { HistoricalDocument } from '../types';
import { DOCUMENT_CATEGORY_META } from '../data/confessionalDocumentsData';
import { 
  X, 
  Copy, 
  Check, 
  Calendar, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Type, 
  Scroll, 
  Sparkles,
  BookOpen
} from 'lucide-react';

interface DocumentReaderModalProps {
  document: HistoricalDocument | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentReaderModal: React.FC<DocumentReaderModalProps> = ({
  document,
  isOpen,
  onClose
}) => {
  const [copied, setCopied] = useState(false);
  const [isContextExpanded, setIsContextExpanded] = useState(true);
  const [fontSize, setFontSize] = useState<number>(18); // 16, 18, 20, 22

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset context state when document changes
  useEffect(() => {
    setIsContextExpanded(true);
  }, [document?.id]);

  if (!isOpen || !document) return null;

  const categoryMeta = DOCUMENT_CATEGORY_META[document.category];

  const handleCopy = () => {
    const fullText = `${document.title} (${document.year})\n\nContexto Histórico:\n${document.historicalContext}\n\n---\n\n${document.content}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  /**
   * Helper function to render text with Markdown-style bold, headers, blockquotes and lists
   */
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');

    return (
      <div className="space-y-4">
        {lines.map((line, idx) => {
          const trimmed = line.trim();

          // Horizontal rule
          if (trimmed === '---') {
            return <hr key={idx} className="my-6 border-zinc-800" />;
          }

          // Header 2 / 3
          if (trimmed.startsWith('### ')) {
            return (
              <h3 key={idx} className="font-serif text-xl sm:text-2xl font-bold text-amber-400 mt-6 mb-2 tracking-wide">
                {trimmed.replace('### ', '')}
              </h3>
            );
          }
          if (trimmed.startsWith('#### ')) {
            return (
              <h4 key={idx} className="font-serif text-lg sm:text-xl font-semibold text-stone-200 mt-5 mb-2 border-b border-zinc-800/80 pb-1">
                {trimmed.replace('#### ', '')}
              </h4>
            );
          }
          if (trimmed.startsWith('## ')) {
            return (
              <h2 key={idx} className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 mt-7 mb-3 text-center">
                {trimmed.replace('## ', '')}
              </h2>
            );
          }

          // Blockquote
          if (trimmed.startsWith('> ')) {
            const quoteContent = trimmed.replace(/^>\s*/, '');
            return (
              <blockquote key={idx} className="border-l-3 border-amber-500/70 bg-amber-950/20 px-4 py-2 rounded-r-xl italic text-stone-300 my-2">
                {renderInlineStyles(quoteContent)}
              </blockquote>
            );
          }

          // List item
          if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
            const listContent = trimmed.replace(/^(\*|-)\s+/, '');
            return (
              <div key={idx} className="flex items-start gap-2 ml-3 my-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                <span className="text-zinc-200 leading-relaxed">
                  {renderInlineStyles(listContent)}
                </span>
              </div>
            );
          }

          // Empty line (paragraph break)
          if (!trimmed) {
            return <div key={idx} className="h-2" />;
          }

          // Standard paragraph
          return (
            <p key={idx} className="leading-relaxed text-zinc-200">
              {renderInlineStyles(line)}
            </p>
          );
        })}
      </div>
    );
  };

  /**
   * Helper to parse bold (**text**) and italic (*text*) inside text strings
   */
  const renderInlineStyles = (text: string) => {
    // Basic regex parser for **bold** and *italic*
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-stone-100">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return (
          <em key={index} className="italic text-amber-200/90">
            {part.slice(1, -1)}
          </em>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-4xl h-[92vh] max-h-[900px] flex flex-col bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="document-modal-title"
      >
        {/* Sticky Top Bar Controls */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-800/90 bg-zinc-900/90 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border bg-gradient-to-r ${categoryMeta.color}`}>
              <Scroll className="w-3.5 h-3.5" />
              <span>{categoryMeta.label}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-800 text-amber-300 font-mono text-xs border border-zinc-700">
              <Calendar className="w-3 h-3 text-amber-400" />
              <span>{document.year}</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Font Size Adjuster */}
            <div className="flex items-center bg-zinc-800/90 border border-zinc-700 rounded-xl p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setFontSize(prev => Math.max(14, prev - 2))}
                disabled={fontSize <= 14}
                className="px-2 py-1 hover:bg-zinc-700 disabled:opacity-30 rounded-lg text-zinc-300 transition-colors font-bold"
                title="Diminuir fonte"
              >
                A-
              </button>
              <span className="px-1.5 text-zinc-400 font-mono text-[11px]">{fontSize}px</span>
              <button
                type="button"
                onClick={() => setFontSize(prev => Math.min(24, prev + 2))}
                disabled={fontSize >= 24}
                className="px-2 py-1 hover:bg-zinc-700 disabled:opacity-30 rounded-lg text-zinc-300 transition-colors font-bold"
                title="Aumentar fonte"
              >
                A+
              </button>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors border border-zinc-700"
              title="Copiar texto integral"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span className="hidden sm:inline">{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors border border-zinc-700"
              title="Fechar (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Reading Area */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-10 py-6 sm:py-8 space-y-6 scrollbar-thin">
          
          {/* Header Title Section */}
          <div className="space-y-3 pb-2 border-b border-zinc-800">
            <h1 
              id="document-modal-title"
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-100 leading-tight"
            >
              {document.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="sm:hidden inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-800 text-amber-300 font-mono text-xs border border-zinc-700">
                <Calendar className="w-3 h-3 text-amber-400" />
                <span>{document.year}</span>
              </span>

              {document.keyTheologicalThemes.map((theme, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-xs text-zinc-300 font-medium"
                >
                  <Sparkles className="w-3 h-3 text-amber-400/80" />
                  <span>{theme}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Collapsible Historical & Theological Context Header */}
          <div className="rounded-2xl bg-amber-950/20 border border-amber-500/30 overflow-hidden">
            <button
              type="button"
              onClick={() => setIsContextExpanded(!isContextExpanded)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-amber-950/30 transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-amber-300">
                    Por que este documento foi escrito? (Contexto Histórico & Teológico)
                  </h4>
                  <span className="text-[11px] text-zinc-400">
                    Compreenda a ocasião histórica e os desvios doutrinários combatidos
                  </span>
                </div>
              </div>
              {isContextExpanded ? (
                <ChevronUp className="w-4 h-4 text-amber-400 shrink-0 ml-2" />
              ) : (
                <ChevronDown className="w-4 h-4 text-amber-400 shrink-0 ml-2" />
              )}
            </button>

            {isContextExpanded && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-amber-500/20 space-y-2">
                <p>{document.historicalContext}</p>
              </div>
            )}
          </div>

          {/* Full Document Content Body (Optimized for Reading) */}
          <div 
            className="font-serif text-zinc-200 leading-relaxed max-w-3xl mx-auto py-2"
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.7 }}
          >
            {renderFormattedContent(document.content)}
          </div>

          {/* End of Document Footer Note */}
          <div className="mt-12 pt-6 border-t border-zinc-800/80 text-center space-y-2 text-xs text-zinc-500">
            <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-amber-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <p className="font-serif italic text-zinc-400">
              Preservando a sã doutrina e a herança dos santos ao longo dos séculos.
            </p>
            <p className="font-mono text-[10px] text-zinc-600">
              Bíblia Teológica • Biblioteca Confessional & Credal
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

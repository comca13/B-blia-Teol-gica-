import React, { useState, useEffect, useMemo } from 'react';
import { UserTheologicalNote, TheologicalNoteCategory } from '../types';
import { 
  loadTheologicalNotes, 
  saveTheologicalNotes, 
  THEOLOGICAL_CATEGORY_LABELS, 
  exportNotesAsMarkdown 
} from '../utils/storage';
import { 
  BookOpen, 
  Bookmark, 
  Download, 
  Copy, 
  Check, 
  Plus, 
  Trash2, 
  Edit3, 
  Tag, 
  Search, 
  Layers, 
  Sparkles,
  Calendar,
  Filter,
  CheckCircle2
} from 'lucide-react';

interface PersonalNotesProps {
  dayId: number;
  passageRef?: string;
}

export const PersonalNotes: React.FC<PersonalNotesProps> = ({ 
  dayId, 
  passageRef = `Dia ${dayId}` 
}) => {
  const [notes, setNotes] = useState<UserTheologicalNote[]>([]);
  const [activeView, setActiveView] = useState<'DAILY' | 'SYSTEMATIC'>('DAILY');
  
  // Note Form State
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<TheologicalNoteCategory>('PRATICA_DEVOCIONAL');
  const [tagInput, setTagInput] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  
  // Filtering & Feedback State
  const [selectedLocusFilter, setSelectedLocusFilter] = useState<TheologicalNoteCategory | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedStatus, setCopiedStatus] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<boolean>(false);

  // Load notes on mount
  useEffect(() => {
    const loaded = loadTheologicalNotes();
    setNotes(loaded);
  }, []);

  // Notes filtered for current day
  const dailyNotes = useMemo(() => {
    return notes.filter(n => n.readingDay === dayId);
  }, [notes, dayId]);

  // Notes filtered for systematic view
  const systematicFilteredNotes = useMemo(() => {
    return notes.filter(n => {
      const matchesLocus = selectedLocusFilter === 'ALL' || n.category === selectedLocusFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        n.title.toLowerCase().includes(q) || 
        n.content.toLowerCase().includes(q) || 
        n.passageRef.toLowerCase().includes(q) ||
        n.tags.some(t => t.toLowerCase().includes(q));

      return matchesLocus && matchesSearch;
    });
  }, [notes, selectedLocusFilter, searchQuery]);

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const n of notes) {
      counts[n.category] = (counts[n.category] || 0) + 1;
    }
    return counts;
  }, [notes]);

  const handleAddTag = () => {
    const clean = tagInput.trim().toLowerCase().replace(/^#/, '');
    if (clean && !tags.includes(clean)) {
      setTags([...tags, clean]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const now = Date.now();
    let updatedList: UserTheologicalNote[];

    if (editingNoteId) {
      updatedList = notes.map(n => {
        if (n.id === editingNoteId) {
          return {
            ...n,
            title: title.trim() || `Reflexão de ${passageRef}`,
            content: content.trim(),
            category,
            tags,
            passageRef,
            updatedAt: now,
          };
        }
        return n;
      });
    } else {
      const newNote: UserTheologicalNote = {
        id: `note-${now}-${Math.random().toString(36).substr(2, 5)}`,
        date: new Date().toISOString().split('T')[0],
        readingDay: dayId,
        passageRef,
        category,
        tags,
        title: title.trim() || `Reflexão de ${passageRef}`,
        content: content.trim(),
        createdAt: now,
        updatedAt: now,
      };
      updatedList = [newNote, ...notes];
    }

    setNotes(updatedList);
    saveTheologicalNotes(updatedList);

    // Reset Form
    setEditingNoteId(null);
    setTitle('');
    setContent('');
    setCategory('PRATICA_DEVOCIONAL');
    setTags([]);
    setTagInput('');

    setSaveStatus(true);
    setTimeout(() => setSaveStatus(false), 2500);
  };

  const handleEditNote = (note: UserTheologicalNote) => {
    setEditingNoteId(note.id);
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setTags(note.tags || []);
    setActiveView('DAILY');
  };

  const handleDeleteNote = (id: string) => {
    if (window.confirm('Tem certeza de que deseja excluir esta anotação teológica?')) {
      const updated = notes.filter(n => n.id !== id);
      setNotes(updated);
      saveTheologicalNotes(updated);
      if (editingNoteId === id) {
        setEditingNoteId(null);
        setTitle('');
        setContent('');
        setTags([]);
      }
    }
  };

  const handleExportMarkdown = () => {
    const md = exportNotesAsMarkdown(notes);
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `caderno-teologia-sistematica-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyClipboard = async () => {
    const md = exportNotesAsMarkdown(notes);
    try {
      await navigator.clipboard.writeText(md);
      setCopiedStatus(true);
      setTimeout(() => setCopiedStatus(false), 2500);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  return (
    <div className="bg-stone-900/90 dark:bg-stone-950/80 border border-stone-800 dark:border-stone-800/80 rounded-2xl p-4 sm:p-6 shadow-xl space-y-6">
      
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
                Ferramenta de Estudo Pessoal
              </span>
              <h3 className="font-serif text-base sm:text-lg font-bold text-amber-200">
                Caderno de Teologia Sistemática & Diário
              </h3>
            </div>
          </div>
        </div>

        {/* Action Controls & Export Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* View Mode Toggle: Daily vs Systematic */}
          <div className="inline-flex p-1 rounded-xl bg-stone-950 border border-stone-800 text-xs">
            <button
              type="button"
              onClick={() => setActiveView('DAILY')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeView === 'DAILY'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Notas do Dia {dayId} ({dailyNotes.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView('SYSTEMATIC')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeView === 'SYSTEMATIC'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Caderno Sistemático ({notes.length})</span>
            </button>
          </div>

          {/* Export Buttons */}
          <button
            type="button"
            onClick={handleExportMarkdown}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition-colors"
            title="Exportar todas as anotações em formato Markdown (.md)"
            aria-label="Exportar Caderno em Markdown"
          >
            <Download className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleCopyClipboard}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white border border-stone-700 transition-colors"
            title="Copiar todas as anotações para a Área de Transferência"
            aria-label="Copiar Anotações"
          >
            {copiedStatus ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {copiedStatus && (
        <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-600/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4" />
          <span>Todas as anotações do Caderno foram copiadas para a área de transferência com formatação Markdown!</span>
        </div>
      )}

      {/* VIEW 1: DAILY READING NOTES & EDITOR */}
      {activeView === 'DAILY' && (
        <div className="space-y-6">
          
          {/* Note Composer Form */}
          <form onSubmit={handleSaveNote} className="p-4 sm:p-5 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Edit3 className="w-3.5 h-3.5" />
                {editingNoteId ? 'Editar Anotação Teológica' : 'Nova Anotação para Esta Passagem'}
              </span>

              {editingNoteId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingNoteId(null);
                    setTitle('');
                    setContent('');
                    setTags([]);
                  }}
                  className="text-xs text-stone-400 hover:text-stone-200"
                >
                  Cancelar Edição
                </button>
              )}
            </div>

            {/* Note Title */}
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={`Título da Reflexão (ex: A Eleição Soberana em ${passageRef})`}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Systematic Theology Category Selector */}
            <div>
              <label className="block text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
                Locus Teológico (Classificação Sistemática):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.entries(THEOLOGICAL_CATEGORY_LABELS) as [TheologicalNoteCategory, { label: string; locus: string; description: string }][]).map(([key, meta]) => {
                  const isSelected = category === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCategory(key)}
                      className={`p-2 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-amber-950/60 border-amber-500 text-amber-200 shadow-xs'
                          : 'bg-stone-900/60 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <div className="font-serif font-bold text-xs truncate text-stone-200">
                        {meta.label}
                      </div>
                      <div className="text-[10px] font-mono text-stone-500 truncate">
                        {meta.locus}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Textarea */}
            <div>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Escreva suas anotações exegéticas, observações do texto bíblico, meditação ou orações (suporte a Markdown)..."
                rows={4}
                required
                className="w-full p-3.5 rounded-xl bg-stone-900 border border-stone-800 text-xs sm:text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors resize-y font-serif leading-relaxed"
              />
            </div>

            {/* Tags Input */}
            <div>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                    placeholder="Adicionar tags (ex: justificação, aliança, promessa) e tecle Enter..."
                    className="w-full pl-8 pr-3 py-2 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                  <Tag className="w-3.5 h-3.5 text-stone-500 absolute left-2.5 top-2.5" />
                </div>
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 border border-stone-700"
                >
                  Adicionar
                </button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-900 border border-stone-800 text-[11px] font-mono text-amber-300"
                    >
                      #{t}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(t)}
                        className="hover:text-red-400 ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Bar */}
            <div className="flex items-center justify-between pt-2">
              {saveStatus ? (
                <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Salvo com sucesso!
                </span>
              ) : (
                <span className="text-[11px] text-stone-500">
                  Salvo no navegador local de forma segura.
                </span>
              )}

              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                <span>{editingNoteId ? 'Atualizar Anotação' : 'Gravar Anotação'}</span>
              </button>
            </div>
          </form>

          {/* List of existing notes for current day */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-400">
              Anotações Registradas para o Dia {dayId} ({dailyNotes.length}):
            </h4>

            {dailyNotes.length === 0 ? (
              <div className="p-4 rounded-xl bg-stone-950/40 border border-dashed border-stone-800 text-center text-xs text-stone-500 font-serif">
                Nenhuma anotação registrada ainda para este dia. Use o formulário acima para registrar insights teológicos, orações ou aplicações.
              </div>
            ) : (
              <div className="space-y-3">
                {dailyNotes.map((n) => {
                  const meta = THEOLOGICAL_CATEGORY_LABELS[n.category] || { label: n.category, locus: '' };
                  return (
                    <div
                      key={n.id}
                      className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2.5 transition-all shadow-xs"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
                              {meta.label} ({meta.locus})
                            </span>
                            <span className="text-xs text-stone-400 font-mono">
                              {n.date}
                            </span>
                          </div>
                          <h5 className="font-serif font-bold text-sm text-stone-100 mt-1">
                            {n.title}
                          </h5>
                        </div>

                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleEditNote(n)}
                            className="p-1.5 text-stone-400 hover:text-amber-300 hover:bg-stone-800 rounded-lg transition-colors"
                            title="Editar anotação"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteNote(n.id)}
                            className="p-1.5 text-stone-400 hover:text-red-400 hover:bg-stone-800 rounded-lg transition-colors"
                            title="Excluir anotação"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-300 font-serif whitespace-pre-wrap leading-relaxed">
                        {n.content}
                      </p>

                      {n.tags && n.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {n.tags.map(t => (
                            <span key={t} className="text-[10px] font-mono text-stone-500 bg-stone-950 px-1.5 py-0.5 rounded border border-stone-800">
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      )}

      {/* VIEW 2: CADERNO DE TEOLOGIA SISTEMÁTICA (AGRUPADOR POR LOCI) */}
      {activeView === 'SYSTEMATIC' && (
        <div className="space-y-5">
          
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar em todo o caderno sistemático por tema, palavra-chave ou citação bíblica..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-500"
              />
              <Search className="w-4 h-4 text-stone-500 absolute left-3 top-2.5" />
            </div>

            {/* Quick summary pill */}
            <div className="text-xs text-stone-400 font-mono shrink-0 self-center">
              Exibindo {systematicFilteredNotes.length} de {notes.length} anotações
            </div>
          </div>

          {/* Loci Selector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => setSelectedLocusFilter('ALL')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                selectedLocusFilter === 'ALL'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
              }`}
            >
              Todos os Loci ({notes.length})
            </button>

            {(Object.entries(THEOLOGICAL_CATEGORY_LABELS) as [TheologicalNoteCategory, { label: string; locus: string; description: string }][]).map(([key, meta]) => {
              const count = categoryCounts[key] || 0;
              const isSelected = selectedLocusFilter === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedLocusFilter(key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                  }`}
                >
                  <span>{meta.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-amber-800 text-amber-100' : 'bg-stone-800 text-stone-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Systematic Notes Stream */}
          <div className="space-y-3">
            {systematicFilteredNotes.length === 0 ? (
              <div className="p-8 rounded-2xl bg-stone-950/60 border border-dashed border-stone-800 text-center space-y-2">
                <BookOpen className="w-8 h-8 text-stone-600 mx-auto" />
                <p className="text-sm font-serif text-stone-400">
                  Nenhuma anotação encontrada para este critério de busca ou Locus Teológico.
                </p>
                <p className="text-xs text-stone-500">
                  Alterne para a aba "Notas do Dia" para registrar uma nova anotação.
                </p>
              </div>
            ) : (
              systematicFilteredNotes.map((note) => {
                const meta = THEOLOGICAL_CATEGORY_LABELS[note.category] || { label: note.category, locus: '', description: '' };
                return (
                  <div
                    key={note.id}
                    className="p-4 sm:p-5 rounded-2xl bg-stone-900 border border-stone-800 hover:border-stone-700 transition-all space-y-3 shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800/80 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-amber-950 text-amber-300 border border-amber-900/60 font-bold">
                          {meta.label} • {meta.locus}
                        </span>
                        <span className="text-xs font-serif font-bold text-amber-400">
                          {note.passageRef} (Dia {note.readingDay})
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-stone-400">
                        <span className="font-mono text-[11px]">{note.date}</span>
                        <button
                          type="button"
                          onClick={() => handleEditNote(note)}
                          className="p-1 hover:text-amber-300 transition-colors"
                          title="Editar anotação"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteNote(note.id)}
                          className="p-1 hover:text-red-400 transition-colors"
                          title="Excluir anotação"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <h4 className="font-serif font-bold text-sm sm:text-base text-stone-100">
                      {note.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-300 font-serif whitespace-pre-wrap leading-relaxed">
                      {note.content}
                    </p>

                    {note.tags && note.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {note.tags.map(t => (
                          <span key={t} className="text-[10px] font-mono text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

        </div>
      )}

    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { BookMarked, Save } from 'lucide-react';

interface JournalEntryProps {
  day: number;
}

export const JournalEntry: React.FC<JournalEntryProps> = ({ day }) => {
  const [note, setNote] = useState('');

  // Carrega nota salva no carregamento
  useEffect(() => {
    const savedNote = localStorage.getItem(`journal_day_${day}`);
    if (savedNote) setNote(savedNote);
  }, [day]);

  // Salva nota ao mudar
  const handleSave = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setNote(value);
    localStorage.setItem(`journal_day_${day}`, value);
  };

  return (
    <div className="mt-6 p-5 bg-stone-50 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 rounded-2xl">
      <div className="flex items-center gap-2 text-stone-800 dark:text-stone-200 font-serif font-bold text-sm mb-3">
        <BookMarked className="w-4 h-4" />
        <h3>Minhas Reflexões</h3>
      </div>
      <textarea
        value={note}
        onChange={handleSave}
        placeholder="Escreva suas reflexões sobre a leitura de hoje..."
        className="w-full h-32 p-3 bg-white dark:bg-black border border-stone-200 dark:border-zinc-700 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-amber-500 transition-all resize-none outline-none"
      />
      <div className="flex justify-end mt-2 text-[10px] text-stone-400">
        <span className="flex items-center gap-1"><Save className="w-3 h-3"/> Salvo automaticamente</span>
      </div>
    </div>
  );
};

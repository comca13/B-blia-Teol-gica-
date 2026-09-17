import React, { useState, useEffect } from 'react';

interface PersonalNotesProps {
  dayId: number;
}

export const PersonalNotes: React.FC<PersonalNotesProps> = ({ dayId }) => {
  const [note, setNote] = useState('');
  const [savedStatus, setSavedStatus] = useState(false);

  // Carrega nota salva no localStorage ao mudar o dia
  useEffect(() => {
    const savedNote = localStorage.getItem(`cronos_note_day_${dayId}`);
    if (savedNote) {
      setNote(savedNote);
    } else {
      setNote('');
    }
    setSavedStatus(false);
  }, [dayId]);

  const handleSave = () => {
    localStorage.setItem(`cronos_note_day_${dayId}`, note);
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2500);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wide flex items-center gap-2">
          <span>📓</span> Meu Diário de Reflexão (Dia {dayId})
        </h3>
        {savedStatus && (
          <span className="text-xs text-emerald-400 font-medium animate-pulse">
            ✓ Salvo com sucesso!
          </span>
        )}
      </div>
      <p className="text-xs text-zinc-400 mb-3">
        Escreva suas anotações pessoais, orações ou insights teológicos deste dia. Suas notas ficam salvas de forma segura no seu navegador.
      </p>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Escreva sua reflexão aqui..."
        rows={4}
        className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-zinc-200 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-y"
      />
      <div className="flex justify-end mt-3">
        <button
          onClick={handleSave}
          className="bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md"
        >
          Salvar Reflexão
        </button>
      </div>
    </div>
  );
};

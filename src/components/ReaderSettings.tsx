import React from 'react';

interface ReaderSettingsProps {
  isFocusMode: boolean;
  setIsFocusMode: (val: boolean) => void;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  setFontSize: (size: 'sm' | 'base' | 'lg' | 'xl') => void;
  fontFamily: 'serif' | 'sans';
  setFontFamily: (font: 'serif' | 'sans') => void;
}

export const ReaderSettings: React.FC<ReaderSettingsProps> = ({
  isFocusMode,
  setIsFocusMode,
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
}) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 mb-6 shadow-lg flex flex-wrap items-center justify-between gap-4 text-zinc-300">
      <div className="flex items-center gap-4">
        {/* Controle do Modo Foco */}
        <button
          onClick={() => setIsFocusMode(!isFocusMode)}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
            isFocusMode
              ? 'bg-amber-500 text-zinc-950 shadow-md'
              : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
          }`}
        >
          {isFocusMode ? '✨ Modo Foco Ativo' : '🔲 Ativar Modo Foco'}
        </button>

        {/* Escolha de Tipografia */}
        <div className="hidden sm:flex items-center bg-zinc-800 rounded-lg p-1 border border-zinc-700 text-xs">
          <button
            onClick={() => setFontFamily('serif')}
            className={`px-2.5 py-1 rounded ${fontFamily === 'serif' ? 'bg-zinc-700 text-amber-400 font-bold' : 'text-zinc-400'}`}
          >
            Serif (Merriweather)
          </button>
          <button
            onClick={() => setFontFamily('sans')}
            className={`px-2.5 py-1 rounded ${fontFamily === 'sans' ? 'bg-zinc-700 text-amber-400 font-bold' : 'text-zinc-400'}`}
          >
            Sans (Inter)
          </button>
        </div>
      </div>

      {/* Ajuste de Tamanho de Fonte */}
      <div className="flex items-center gap-2 text-xs">
        <span className="text-zinc-500">Texto:</span>
        {(['sm', 'base', 'lg', 'xl'] as const).map((size) => (
          <button
            key={size}
            onClick={() => setFontSize(size)}
            className={`w-7 h-7 rounded-lg font-bold flex items-center justify-center transition-colors ${
              fontSize === size
                ? 'bg-amber-500 text-zinc-950'
                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
            }`}
          >
            {size === 'sm' ? 'A-' : size === 'xl' ? 'A+' : size.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

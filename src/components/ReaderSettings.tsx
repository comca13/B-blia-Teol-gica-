import React, { useState, useEffect } from 'react';
import { StudyDepthMode } from '../types';
import { Heart, GraduationCap, Sparkles, Layers, Sliders, Check, Mic } from 'lucide-react';
import { speechEngine, VoiceTone } from '../utils/speech';

interface ReaderSettingsProps {
  isFocusMode: boolean;
  setIsFocusMode: (val: boolean) => void;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  setFontSize: (size: 'sm' | 'base' | 'lg' | 'xl') => void;
  fontFamily: 'serif' | 'sans';
  setFontFamily: (font: 'serif' | 'sans') => void;
  depthMode?: StudyDepthMode;
  setDepthMode?: (mode: StudyDepthMode) => void;
  visiblePanels?: {
    archaeology: boolean;
    lexicon: boolean;
    worldHistory: boolean;
    intertextuality: boolean;
    textualVariants: boolean;
  };
  onTogglePanel?: (panelKey: 'archaeology' | 'lexicon' | 'worldHistory' | 'intertextuality' | 'textualVariants') => void;
}

export const ReaderSettings: React.FC<ReaderSettingsProps> = ({
  isFocusMode,
  setIsFocusMode,
  fontSize,
  setFontSize,
  fontFamily,
  setFontFamily,
  depthMode = 'EXEGÉTICO_ACADÉMICO',
  setDepthMode,
  visiblePanels = {
    archaeology: true,
    lexicon: true,
    worldHistory: true,
    intertextuality: true,
    textualVariants: true,
  },
  onTogglePanel
}) => {
  const [tone, setTone] = useState<VoiceTone>(() => {
    return (localStorage.getItem('theological_tts_tone') as VoiceTone) || 'baritono';
  });

  const handleToneChange = (newTone: VoiceTone) => {
    setTone(newTone);
    localStorage.setItem('theological_tts_tone', newTone);
    speechEngine.setTone(newTone);
  };
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3.5 sm:p-4 shadow-xl space-y-3.5 text-zinc-300">
      
      {/* 1. SELETOR DE NÍVEL DE PROFUNDIDADE (C1) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400 font-bold block">
            Nível de Profundidade Teológica
          </span>
          <p className="text-xs text-zinc-400">
            {depthMode === 'DEVOCIONAL' 
              ? 'Modo Devocional: foco em edificação, oração e aplicação prática' 
              : 'Modo Acadêmico: exegese profunda, léxico original, crítica textual e arqueologia'}
          </p>
        </div>

        {setDepthMode && (
          <div className="inline-flex p-1 rounded-xl bg-zinc-950 border border-zinc-800 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setDepthMode('DEVOCIONAL')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                depthMode === 'DEVOCIONAL'
                  ? 'bg-rose-950 text-rose-200 border border-rose-700/50 shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${depthMode === 'DEVOCIONAL' ? 'fill-rose-400 text-rose-400' : 'text-zinc-400'}`} />
              <span>Devocional</span>
            </button>

            <button
              type="button"
              onClick={() => setDepthMode('EXEGÉTICO_ACADÉMICO')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                depthMode === 'EXEGÉTICO_ACADÉMICO'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Exegético / Acadêmico</span>
            </button>
          </div>
        )}
      </div>

      {/* 2. CONTROLES DE TIPOGRAFIA, TAMANHO E FOCO */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Tipografia & Modo Foco */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Modo Foco */}
          <button
            type="button"
            onClick={() => setIsFocusMode(!isFocusMode)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              isFocusMode
                ? 'bg-amber-500 text-zinc-950 shadow-md ring-2 ring-amber-400'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isFocusMode ? 'Modo Foco Ativo' : 'Ativar Modo Foco'}</span>
          </button>

          {/* Tipografia */}
          <div className="flex items-center bg-zinc-800 rounded-xl p-1 border border-zinc-700">
            <button
              type="button"
              onClick={() => setFontFamily('serif')}
              className={`px-2.5 py-1 rounded-lg transition-colors font-serif ${
                fontFamily === 'serif' ? 'bg-zinc-700 text-amber-400 font-bold shadow-xs' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Serif (Clássico)
            </button>
            <button
              type="button"
              onClick={() => setFontFamily('sans')}
              className={`px-2.5 py-1 rounded-lg transition-colors font-sans ${
                fontFamily === 'sans' ? 'bg-zinc-700 text-amber-400 font-bold shadow-xs' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Sans (Moderno)
            </button>
          </div>
        </div>

        {/* Tamanho da Fonte */}
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 font-medium">Tamanho:</span>
          <div className="flex items-center gap-1 bg-zinc-800 p-1 rounded-xl border border-zinc-700">
            {(['sm', 'base', 'lg', 'xl'] as const).map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setFontSize(size)}
                className={`w-7 h-7 rounded-lg font-bold flex items-center justify-center transition-all ${
                  fontSize === size
                    ? 'bg-amber-500 text-zinc-950 shadow-xs'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700'
                }`}
              >
                {size === 'sm' ? 'A-' : size === 'xl' ? 'A+' : size.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* 3. TOM DA NARRAÇÃO TEOLÓGICA (GRAVE VS BARÍTONO) */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-zinc-800 text-xs">
        <div className="flex items-center gap-2">
          <Mic className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-zinc-300 font-medium">Tom da Narração (Áudio):</span>
        </div>

        <div className="flex items-center bg-zinc-950 p-1 rounded-xl border border-zinc-800">
          <button
            type="button"
            onClick={() => handleToneChange('grave')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              tone === 'grave'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            Grave (0.78)
          </button>

          <button
            type="button"
            onClick={() => handleToneChange('baritono')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              tone === 'baritono'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            Barítono (0.89)
          </button>
        </div>
      </div>

      {/* 3. FILTROS RÁPIDOS DE PAINÉIS VISÍVEIS (SE DISPONÍVEL) */}
      {onTogglePanel && depthMode === 'EXEGÉTICO_ACADÉMICO' && (
        <div className="pt-2 border-t border-zinc-800 flex flex-wrap items-center gap-2 text-[11px]">
          <span className="text-zinc-500 flex items-center gap-1">
            <Layers className="w-3 h-3" /> Módulos Ativos:
          </span>
          
          <button
            type="button"
            onClick={() => onTogglePanel('archaeology')}
            className={`px-2 py-0.5 rounded-md border transition-colors flex items-center gap-1 ${
              visiblePanels.archaeology 
                ? 'bg-amber-950/60 border-amber-700 text-amber-300' 
                : 'bg-zinc-950 border-zinc-800 text-zinc-500 line-through'
            }`}
          >
            <span>Arqueologia</span>
          </button>

          <button
            type="button"
            onClick={() => onTogglePanel('lexicon')}
            className={`px-2 py-0.5 rounded-md border transition-colors flex items-center gap-1 ${
              visiblePanels.lexicon 
                ? 'bg-amber-950/60 border-amber-700 text-amber-300' 
                : 'bg-zinc-950 border-zinc-800 text-zinc-500 line-through'
            }`}
          >
            <span>Léxico Original</span>
          </button>

          <button
            type="button"
            onClick={() => onTogglePanel('worldHistory')}
            className={`px-2 py-0.5 rounded-md border transition-colors flex items-center gap-1 ${
              visiblePanels.worldHistory 
                ? 'bg-amber-950/60 border-amber-700 text-amber-300' 
                : 'bg-zinc-950 border-zinc-800 text-zinc-500 line-through'
            }`}
          >
            <span>História Mundial</span>
          </button>

          <button
            type="button"
            onClick={() => onTogglePanel('intertextuality')}
            className={`px-2 py-0.5 rounded-md border transition-colors flex items-center gap-1 ${
              visiblePanels.intertextuality 
                ? 'bg-purple-950/60 border-purple-700 text-purple-300' 
                : 'bg-zinc-950 border-zinc-800 text-zinc-500 line-through'
            }`}
          >
            <span>Tipologia</span>
          </button>

          <button
            type="button"
            onClick={() => onTogglePanel('textualVariants')}
            className={`px-2 py-0.5 rounded-md border transition-colors flex items-center gap-1 ${
              visiblePanels.textualVariants 
                ? 'bg-blue-950/60 border-blue-700 text-blue-300' 
                : 'bg-zinc-950 border-zinc-800 text-zinc-500 line-through'
            }`}
          >
            <span>Crítica Textual</span>
          </button>
        </div>
      )}

    </div>
  );
};

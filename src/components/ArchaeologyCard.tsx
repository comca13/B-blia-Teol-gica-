import React, { useState } from 'react';
import { ArchaeologicalArtifact } from '../types';
import { Landmark, Compass, ChevronDown, ChevronUp, MapPin, Eye, Building2, Sparkles } from 'lucide-react';

interface ArchaeologyCardProps {
  artifacts: ArchaeologicalArtifact[];
  defaultExpanded?: boolean;
}

export const ArchaeologyCard: React.FC<ArchaeologyCardProps> = ({
  artifacts,
  defaultExpanded = true
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [selectedArtifactIndex, setSelectedArtifactIndex] = useState<number>(0);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  if (!artifacts || artifacts.length === 0) return null;

  const currentArtifact = artifacts[selectedArtifactIndex] || artifacts[0];

  return (
    <div className="bg-stone-900/80 dark:bg-stone-950/70 border border-amber-600/30 rounded-2xl shadow-md overflow-hidden transition-all duration-200">
      
      {/* Header / Clickable Toggle */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-r from-amber-950/40 via-stone-900/60 to-stone-900/30 border-b border-amber-600/20 hover:bg-amber-950/30 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
            <Landmark className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-sm sm:text-base font-bold text-amber-200 tracking-wide truncate">
                Arqueologia & Cultura Material
              </h3>
              <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                {artifacts.length} {artifacts.length === 1 ? 'Evidência' : 'Evidências'}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 truncate">
              {currentArtifact.name} • {currentArtifact.period}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-amber-400/80 hidden sm:inline font-sans">
            {isExpanded ? 'Recolher' : 'Expandir'}
          </span>
          <button
            type="button"
            className="p-1 rounded-lg text-amber-400/80 hover:text-amber-300 hover:bg-amber-500/10 transition-colors"
            aria-label={isExpanded ? 'Recolher card arqueológico' : 'Expandir card arqueológico'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4">
          
          {/* Multiple artifacts selector tabs if more than one */}
          {artifacts.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {artifacts.map((art, idx) => (
                <button
                  key={art.id}
                  type="button"
                  onClick={() => setSelectedArtifactIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                    selectedArtifactIndex === idx
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 border border-stone-700/60'
                  }`}
                >
                  {art.name}
                </button>
              ))}
            </div>
          )}

          {/* Main Artifact Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            
            {/* Optional Artifact Photo or Museum Schema */}
            {currentArtifact.imageUrl && !imageErrorMap[currentArtifact.id] ? (
              <div className="md:col-span-4 rounded-xl overflow-hidden border border-amber-600/30 bg-stone-950/60 shadow-inner group relative">
                <img
                  src={currentArtifact.imageUrl}
                  alt={currentArtifact.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImageErrorMap(prev => ({ ...prev, [currentArtifact.id]: true }))}
                  className="w-full h-44 sm:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent flex items-end p-2.5">
                  <span className="text-[10px] text-amber-300/90 font-medium flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    Artefato Autêntico Catalogado
                  </span>
                </div>
              </div>
            ) : null}

            {/* Information Column */}
            <div className={`${currentArtifact.imageUrl && !imageErrorMap[currentArtifact.id] ? 'md:col-span-8' : 'md:col-span-12'} space-y-3`}>
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-amber-300 font-serif">
                  {currentArtifact.name}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-stone-800 text-[11px] font-mono text-amber-400/90 border border-stone-700">
                  {currentArtifact.period}
                </span>
              </div>

              {/* Discovery and Preservation Location Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-stone-800/40 border border-stone-800 text-stone-300">
                  <Compass className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">
                      Local de Descoberta
                    </span>
                    <span className="text-stone-200">{currentArtifact.locationFound}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 p-2.5 rounded-xl bg-stone-800/40 border border-stone-800 text-stone-300">
                  <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">
                      Guarda Atual / Museu
                    </span>
                    <span className="text-stone-200">{currentArtifact.currentLocation}</span>
                  </div>
                </div>
              </div>

              {/* Academic & Theological Significance */}
              <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-900/40 space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Âncora na Cultura Material & Relevância Bíblica:</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
                  {currentArtifact.significance}
                </p>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

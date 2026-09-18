import React, { useState } from 'react';
import { GeographyContext } from '../types';
import { MapPin, Compass, Mountain, ExternalLink, Globe, ChevronDown, ChevronUp, Navigation } from 'lucide-react';

interface BiblicalMapCardProps {
  geography: GeographyContext;
  defaultExpanded?: boolean;
}

export const BiblicalMapCard: React.FC<BiblicalMapCardProps> = ({
  geography,
  defaultExpanded = false
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  if (!geography) return null;

  return (
    <div className="bg-stone-900/80 dark:bg-stone-950/70 border border-emerald-600/30 rounded-2xl shadow-md overflow-hidden transition-all duration-200">
      
      {/* Header / Clickable Toggle */}
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-3 bg-gradient-to-r from-emerald-950/30 via-stone-900/60 to-stone-900/30 border-b border-emerald-600/20 hover:bg-emerald-950/20 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
            <Compass className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-sm sm:text-base font-bold text-emerald-200 tracking-wide truncate">
                Geografia Bíblica & Cartografia Histórica
              </h3>
              <span className="text-[10px] font-sans font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                Topografia Sagrada
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 truncate">
              {geography.regionName} • {geography.modernLocation}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-emerald-400/80 hidden sm:inline font-sans">
            {isExpanded ? 'Recolher' : 'Expandir'}
          </span>
          <button
            type="button"
            className="p-1 rounded-lg text-emerald-400/80 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors"
            aria-label={isExpanded ? 'Recolher geografia bíblica' : 'Expandir geografia bíblica'}
          >
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="p-4 sm:p-5 space-y-4">
          
          {/* Geopolitical Coordinates & Territory Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-stone-800/40 border border-stone-800 flex items-start gap-2.5">
              <Globe className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">
                  Região Bíblica & Geopolítica Antiga
                </span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-300 font-serif">
                  {geography.regionName}
                </span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-stone-800/40 border border-stone-800 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider block">
                  Localização Geográfica Moderna
                </span>
                <span className="text-xs sm:text-sm font-semibold text-stone-200">
                  {geography.modernLocation}
                </span>
              </div>
            </div>
          </div>

          {/* Coordinates Summary if present */}
          {geography.coordinatesSummary && (
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                <span>Coordenadas / Relevo: {geography.coordinatesSummary}</span>
              </div>
              {geography.mapReferenceUrl && (
                <a
                  href={geography.mapReferenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:text-emerald-300 font-sans font-semibold hover:underline"
                >
                  <span>Ver Mapa Satélite</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}

          {/* Topographical and Theological Note */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-1.5">
            <div className="flex items-center gap-1.5 text-emerald-300 font-semibold text-xs">
              <Mountain className="w-3.5 h-3.5 text-emerald-400" />
              <span>Significado Teológico da Topografia:</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
              {geography.topographyNote}
            </p>
          </div>

        </div>
      )}

    </div>
  );
};

import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/usePWAInstall';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 sm:right-auto sm:max-w-md z-40 flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-900/95 border border-amber-500/40 text-xs text-amber-200 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom duration-300">
      <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
        <WifiOff className="w-4 h-4 text-amber-400" />
      </div>
      <div>
        <strong className="block text-stone-100 font-semibold">Modo Offline</strong>
        A Bíblia Teológica está utilizando os textos e dados armazenados em cache.
      </div>
    </div>
  );
};

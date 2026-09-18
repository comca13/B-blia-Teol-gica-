import React, { useState } from 'react';
import { Download, Smartphone } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { PWAInstallModal } from './PWAInstallModal';

interface PWAInstallButtonProps {
  variant?: 'navbar' | 'compact' | 'card';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ 
  variant = 'navbar',
  className = ''
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);

  // If already running as an installed standalone PWA, hide the button
  if (isInstalled) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      const installed = await install();
      if (!installed) {
        setShowModal(true);
      }
    } else {
      setShowModal(true);
    }
  };

  if (variant === 'card') {
    return (
      <>
        <div className={`p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 to-zinc-900 border border-amber-500/30 shadow-lg space-y-3 ${className}`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md border border-amber-500/40 bg-zinc-950 shrink-0">
              <img src="/icon.svg" alt="Bíblia Teológica" className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-serif text-base font-bold text-stone-100">
                Instalar no Desktop ou Celular
              </h4>
              <p className="text-xs text-stone-400">
                Adicione a Bíblia Teológica como aplicativo no seu computador, tablet ou celular.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleClick}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              <Download className="w-4 h-4" />
              {isInstallable ? 'Instalar Agora' : isIOS ? 'Instalar no iOS (iPhone/iPad)' : 'Ver Como Instalar'}
            </button>
          </div>
        </div>

        <PWAInstallModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 hover:text-amber-200 border border-amber-500/40 transition-all active:scale-95 shrink-0 ${className}`}
        title="Instalar Bíblia Teológica no seu Desktop ou Celular"
      >
        <Download className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
        <span className="hidden sm:inline">Instalar App</span>
        <span className="sm:hidden">Instalar</span>
      </button>

      <PWAInstallModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

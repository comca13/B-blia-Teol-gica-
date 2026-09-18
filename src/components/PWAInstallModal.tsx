import React, { useState } from 'react';
import { Download, Laptop, Smartphone, Tablet, X, CheckCircle2, Share, PlusSquare, ArrowRight, BookOpen } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, isDesktop, install } = usePWAInstall();
  const [activeDeviceTab, setActiveDeviceTab] = useState<'auto' | 'desktop' | 'android' | 'ios'>(
    isIOS ? 'ios' : isAndroid ? 'android' : 'desktop'
  );
  const [installSuccess, setInstallSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstallSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2200);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-zinc-900 border border-zinc-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Open Bible icon and badge */}
        <div className="relative p-5 sm:p-6 bg-gradient-to-b from-amber-950/40 via-zinc-900 to-zinc-900 border-b border-zinc-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 transition-colors"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-lg border border-amber-500/30 bg-zinc-950 shrink-0 flex items-center justify-center">
              <img 
                src="/icon.svg" 
                alt="Ícone Bíblia Aberta" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <BookOpen className="w-3 h-3" /> Aplicativo PWA
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-100 tracking-tight mt-1 truncate">
                Bíblia Teológica
              </h2>
              <p className="text-xs text-stone-400 truncate">
                Instale no Computador, Celular ou Tablet
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Quick status banner */}
          {isInstalled ? (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-3 text-emerald-300 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="font-semibold block text-emerald-200">Aplicativo Já Instalado!</strong>
                A Bíblia Teológica está rodando como app no seu dispositivo.
              </div>
            </div>
          ) : installSuccess ? (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 flex items-center gap-3 text-emerald-300 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <strong className="font-semibold block text-emerald-200">Instalação Iniciada!</strong>
                O atalho com o ícone da Bíblia Aberta foi adicionado ao seu dispositivo.
              </div>
            </div>
          ) : isInstallable ? (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-amber-200">Pronto para Instalação Instantânea</h4>
                  <p className="text-xs text-stone-400">Seu navegador suporta instalação com 1 clique.</p>
                </div>
              </div>
              <button
                onClick={handleInstallClick}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                Instalar "Bíblia Teológica" Agora
              </button>
            </div>
          ) : null}

          {/* Platform Tabs Selector */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-2">
              Instruções por Dispositivo
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setActiveDeviceTab('desktop')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  activeDeviceTab === 'desktop'
                    ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                    : 'bg-zinc-800/60 border-zinc-700/60 text-zinc-400 hover:text-white'
                }`}
              >
                <Laptop className="w-4 h-4" />
                <span>Desktop (PC/Mac)</span>
              </button>

              <button
                onClick={() => setActiveDeviceTab('android')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  activeDeviceTab === 'android'
                    ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                    : 'bg-zinc-800/60 border-zinc-700/60 text-zinc-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Android</span>
              </button>

              <button
                onClick={() => setActiveDeviceTab('ios')}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                  activeDeviceTab === 'ios'
                    ? 'bg-amber-500/15 border-amber-500/50 text-amber-300'
                    : 'bg-zinc-800/60 border-zinc-700/60 text-zinc-400 hover:text-white'
                }`}
              >
                <Tablet className="w-4 h-4" />
                <span>iPhone / iPad</span>
              </button>
            </div>
          </div>

          {/* Tab Content: Desktop */}
          {activeDeviceTab === 'desktop' && (
            <div className="space-y-3 p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
              <h4 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
                <Laptop className="w-4 h-4 text-amber-400" />
                No Computador (Chrome, Edge, Brave, Opera)
              </h4>
              <ol className="text-xs text-stone-300 space-y-2.5 list-decimal list-inside pl-1 leading-relaxed">
                <li>
                  {isInstallable ? (
                    <span>Clique no botão amarelo <strong>"Instalar Agora"</strong> acima.</span>
                  ) : (
                    <span>
                      Olhe para a <strong>barra de endereços</strong> do navegador (ao lado da estrela de favoritos) e clique no ícone de <strong>Instalar</strong> (⊕ ou monitor com seta).
                    </span>
                  )}
                </li>
                <li>
                  Ou clique nos <strong>três pontinhos (⋮)</strong> no canto superior direito do navegador.
                </li>
                <li>
                  Selecione <strong>"Salvar e compartilhar"</strong> → <strong>"Instalar Bíblia Teológica..."</strong>
                </li>
                <li>
                  Um atalho com o ícone da <strong>Bíblia Aberta</strong> será criado na sua Área de Trabalho e barra de tarefas!
                </li>
              </ol>
            </div>
          )}

          {/* Tab Content: Android */}
          {activeDeviceTab === 'android' && (
            <div className="space-y-3 p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
              <h4 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-400" />
                No Celular e Tablet Android (Chrome)
              </h4>
              <ol className="text-xs text-stone-300 space-y-2.5 list-decimal list-inside pl-1 leading-relaxed">
                <li>
                  {isInstallable ? (
                    <span>Toque no botão <strong>"Instalar Agora"</strong> para confirmação imediata.</span>
                  ) : (
                    <span>Toque no menu de <strong>três pontos (⋮)</strong> no topo do Google Chrome.</span>
                  )}
                </li>
                <li>
                  Selecione a opção <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.
                </li>
                <li>
                  Confirme com o nome <strong>"Bíblia Teológica"</strong>.
                </li>
                <li>
                  O aplicativo será adicionado à tela inicial e gaveta de apps com o ícone da <strong>Bíblia Aberta</strong>.
                </li>
              </ol>
            </div>
          )}

          {/* Tab Content: iOS Safari */}
          {activeDeviceTab === 'ios' && (
            <div className="space-y-3 p-4 rounded-2xl bg-zinc-950 border border-zinc-800">
              <h4 className="text-sm font-semibold text-stone-200 flex items-center gap-2">
                <Tablet className="w-4 h-4 text-amber-400" />
                No iPhone e iPad (Safari)
              </h4>
              <ol className="text-xs text-stone-300 space-y-2.5 list-decimal list-inside pl-1 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-400">1.</span>
                  <span>Certifique-se de estar usando o navegador <strong>Safari</strong> no iOS.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-400">2.</span>
                  <span className="flex items-center gap-1.5 flex-wrap">
                    Toque no botão de <strong>Compartilhar</strong>
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-stone-200">
                      <Share className="w-3 h-3 text-blue-400" /> Compartilhar
                    </span>
                    na barra inferior do Safari.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-400">3.</span>
                  <span className="flex items-center gap-1.5 flex-wrap">
                    Role a lista e selecione 
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-stone-200">
                      <PlusSquare className="w-3 h-3 text-amber-400" /> Adicionar à Tela de Início
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-400">4.</span>
                  <span>
                    Confirme o nome <strong>"Bíblia Teológica"</strong> e toque em <strong>"Adicionar"</strong> no canto superior direito.
                  </span>
                </li>
              </ol>
            </div>
          )}

          {/* Advantages of PWA */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 rounded-xl bg-zinc-850/60 border border-zinc-800 text-xs">
              <span className="text-amber-400 font-semibold block mb-0.5">⚡ Tela Cheia Nativa</span>
              <p className="text-[11px] text-zinc-400">Sem barras de navegação do browser, como um app da loja.</p>
            </div>
            <div className="p-3 rounded-xl bg-zinc-850/60 border border-zinc-800 text-xs">
              <span className="text-amber-400 font-semibold block mb-0.5">📖 Ícone Bíblia Aberta</span>
              <p className="text-[11px] text-zinc-400">Acesso direto com um toque na tela inicial do seu aparelho.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-stone-200 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

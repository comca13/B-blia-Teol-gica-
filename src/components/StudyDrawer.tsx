import React, { useState } from 'react';
import { X, Map, Book, BookOpen, Layers, Landmark, Scale, Scroll } from 'lucide-react';

interface StudyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  // Passing components/elements to be rendered in tabs
  contextHistoryContent: React.ReactNode;
  archaeologyCultureContent: React.ReactNode;
  linguisticsTextContent: React.ReactNode;
  theologyEchoesContent: React.ReactNode;
}

export const StudyDrawer: React.FC<StudyDrawerProps> = ({
  isOpen,
  onClose,
  contextHistoryContent,
  archaeologyCultureContent,
  linguisticsTextContent,
  theologyEchoesContent
}) => {
  const [activeTab, setActiveTab] = useState<'context' | 'archaeology' | 'linguistics' | 'theology'>('context');

  const tabs = [
    { id: 'context', label: 'Contexto & História', icon: Map },
    { id: 'archaeology', label: 'Arqueologia & Cultura', icon: Book },
    { id: 'linguistics', label: 'Linguística & Texto', icon: BookOpen },
    { id: 'theology', label: 'Teologia & Ecos', icon: Scale },
  ] as const;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay for mobile */}
      <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h3 className="font-serif font-bold text-lg text-stone-100">Painel de Estudo</h3>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-800">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 p-3 flex flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                  activeTab === tab.id ? 'text-amber-500 border-b-2 border-amber-500 bg-zinc-900' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="truncate w-full text-center">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === 'context' && contextHistoryContent}
          {activeTab === 'archaeology' && archaeologyCultureContent}
          {activeTab === 'linguistics' && linguisticsTextContent}
          {activeTab === 'theology' && theologyEchoesContent}
        </div>
      </div>
    </>
  );
};

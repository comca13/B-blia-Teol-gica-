import React from 'react';
import { BookOpen, CalendarDays, Landmark, User } from 'lucide-react';
import { MainRoute } from '../types';

interface BottomNavProps {
  activeRoute: MainRoute;
  onRouteChange: (route: MainRoute) => void;
  isFocusMode?: boolean;
  isNavHidden?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeRoute,
  onRouteChange,
  isFocusMode = false,
  isNavHidden = false
}) => {
  const isHidden = isFocusMode || isNavHidden;

  const navItems: Array<{
    route: MainRoute;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = [
    {
      route: 'BIBLIA',
      label: 'Bíblia',
      icon: BookOpen
    },
    {
      route: 'PLANOS',
      label: 'Planos',
      icon: CalendarDays
    },
    {
      route: 'HISTORIA',
      label: 'História',
      icon: Landmark
    },
    {
      route: 'PERFIL',
      label: 'Perfil',
      icon: User
    }
  ];

  return (
    <nav 
      aria-label="Navegação Principal"
      className={`fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[96%] sm:w-[92%] max-w-xl transition-transform duration-300 ease-in-out ${
        isHidden ? 'translate-y-[200%] pointer-events-none' : 'translate-y-0'
      }`}
    >
      <div className="relative flex items-center justify-between p-1 sm:p-2 rounded-full bg-zinc-900/95 backdrop-blur-xl border border-zinc-750/80 dark:border-zinc-800 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300">
        {navItems.map((item) => {
          const isActive = activeRoute === item.route;
          const Icon = item.icon;

          return (
            <button
              key={item.route}
              type="button"
              onClick={() => onRouteChange(item.route)}
              title={item.label}
              aria-label={item.label}
              className={`relative flex-1 flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-1.5 sm:py-2 px-1 sm:px-2.5 rounded-full transition-all duration-200 select-none group min-w-0 ${
                isActive
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 font-medium'
              }`}
            >
              <Icon 
                className={`w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0 transition-transform duration-200 ${
                  isActive ? 'scale-110 text-white' : 'group-hover:scale-105'
                }`} 
              />
              <span className={`text-[10px] sm:text-xs tracking-tight truncate leading-tight ${isActive ? 'font-bold' : 'font-normal'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

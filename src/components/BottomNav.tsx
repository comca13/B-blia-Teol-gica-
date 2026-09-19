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
      className={`fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md sm:max-w-lg transition-transform duration-300 ease-in-out ${
        isHidden ? 'translate-y-[200%] pointer-events-none' : 'translate-y-0'
      }`}
    >
      <div className="relative flex items-center justify-between p-1.5 sm:p-2 rounded-full bg-zinc-900/90 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-750/80 dark:border-zinc-800 shadow-[0_12px_40px_rgba(0,0,0,0.5)] transition-all duration-300">
        {navItems.map((item) => {
          const isActive = activeRoute === item.route;
          const Icon = item.icon;

          return (
            <button
              key={item.route}
              type="button"
              onClick={() => onRouteChange(item.route)}
              className={`relative flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-3 rounded-full transition-all duration-300 select-none group ${
                isActive
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/40 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 font-medium'
              }`}
            >
              <Icon 
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                  isActive ? 'scale-110 text-white' : 'group-hover:scale-105'
                }`} 
              />
              <span className={`text-xs sm:text-sm tracking-wide ${isActive ? 'inline-block' : 'hidden xs:inline-block sm:inline-block'}`}>
                {item.label}
              </span>

              {/* Active dot indicator on very small screens if label is hidden */}
              {isActive && (
                <span className="xs:hidden sm:hidden absolute -bottom-0.5 w-1 h-1 rounded-full bg-amber-200 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

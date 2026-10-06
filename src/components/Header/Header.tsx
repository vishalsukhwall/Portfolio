import React from 'react';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { cn } from '@utils/cn';
import { NavBar } from './NavBar';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from './ThemeToggle';
import { PORTFOLIO_NAME } from '@utils/constants';

export const Header: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 20;

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center items-center px-4 sm:px-8 pointer-events-none">
      <div 
        className={cn(
          "pointer-events-auto w-full max-w-4xl lg:max-w-5xl flex items-center justify-between px-6 sm:px-8 py-3 rounded-full transition-all duration-300",
          "bg-white/75 dark:bg-neutral-950/70 backdrop-blur-xl border border-black/[0.08] dark:border-teal-950/40 shadow-lg shadow-black/5 dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
          isScrolled && "bg-white/90 dark:bg-neutral-950/90 border-black/[0.12] dark:border-neutral-800 shadow-xl scale-[0.99]"
        )}
      >
        {/* Left: Brand Name */}
        <a 
          href="#home" 
          className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-white hover:opacity-90 transition-opacity flex items-center gap-0.5 select-none shrink-0"
          aria-label="Home"
        >
          <span>{PORTFOLIO_NAME || 'Vishal Sukhwal'}</span>
        </a>
        
        {/* Center: Nav Links */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <NavBar />
        </div>

        {/* Right: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
import React from 'react';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { cn } from '@utils/cn';
import { NavBar } from './NavBar';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { PORTFOLIO_NAME } from '@utils/constants';

export const Header: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 20;

  return (
    <header className="fixed top-6 inset-x-0 z-50 flex justify-center items-center px-4 sm:px-8 pointer-events-none">
      <div 
        className={cn(
          "pointer-events-auto w-full max-w-4xl lg:max-w-5xl flex items-center justify-between px-6 sm:px-8 py-3 rounded-full transition-all duration-300",
          "bg-neutral-950/70 backdrop-blur-xl border border-teal-950/40 shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
          isScrolled && "bg-neutral-950/90 border-neutral-800 shadow-2xl scale-[0.99]"
        )}
      >
        {/* 1. Left: Brand Name with Cyan Dot */}
        <a 
          href="#home" 
          className="text-base sm:text-lg font-bold tracking-tight text-white hover:opacity-90 transition-opacity flex items-center gap-0.5 select-none shrink-0"
          aria-label="Home"
        >
          <span>{PORTFOLIO_NAME || 'Vishal Sukhwal'}</span>
          <span className="text-teal-400 font-extrabold text-xl leading-none"></span>
        </a>
        
        {/* 2. Center: Centered Nav Links Pill */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <NavBar />
        </div>

        {/* 3. Right: Divider + Theme Toggle + Mobile Menu */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden md:block h-4 w-[1px] bg-neutral-800" />
          
          <div className="flex items-center gap-2 text-teal-400">
            <ThemeToggle />
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
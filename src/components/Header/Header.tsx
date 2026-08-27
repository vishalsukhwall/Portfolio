import React from 'react';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { cn } from '@utils/cn';
import { Container } from '@components/common/Container';
import { NavBar } from './NavBar';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';


import { PORTFOLIO_NAME } from '@utils/constants';


export const Header: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const isScrolled = scrollY > 0;

  return (
    <header 
      className={cn(
        "fixed top-0 inset-x-0 z-50 h-16 transition-all duration-300",
        "bg-neutral-900/70 light:bg-white/70 backdrop-blur-lg border-b border-white/10 dark:border-white/10 light:border-black/10",
        isScrolled && "shadow-md"
      )}
    >
      <Container className="h-full flex justify-between items-center">
        <a 
          href="#home" 
          className="text-xl font-bold tracking-tight hover:text-accent transition-colors flex items-center gap-1"
          aria-label="Home"
        >
          <span className="text-cyan-400">&lt;</span>
          <span>{PORTFOLIO_NAME.split(' ')[0]}</span>
          <span className="text-cyan-400">/&gt;</span>
        </a>
        
        <div className="flex items-center gap-4">
          <NavBar />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
};
Header.displayName = 'Header';

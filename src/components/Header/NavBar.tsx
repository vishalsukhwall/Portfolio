import React from 'react';
import { NAV_LINKS } from '@utils/constants';
import { useInteractionStore } from '@stores/interactionStore';
import { cn } from '@utils/cn';

export const NavBar: React.FC = () => {
  const { activeSection } = useInteractionStore();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      if (targetId === 'contact') {
        // Contact ke liye exact vertical screen center scroll
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      } else {
        // Baaki sabhi sections ke liye navbar offset scroll
        const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 p-1 rounded-full border border-neutral-800/60" aria-label="Main navigation">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.href.replace('#', '');
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className={cn(
              "text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200",
              isActive 
                ? "bg-neutral-800 text-white font-semibold shadow-sm" 
                : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
};

NavBar.displayName = 'NavBar';
export default NavBar;
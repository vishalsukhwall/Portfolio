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
      const y = element.getBoundingClientRect().top + window.pageYOffset - 64; // SCROLL_OFFSET
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.href.replace('#', '');
        return (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className={cn(
              "text-sm font-medium transition-colors relative py-2",
              isActive ? "text-accent" : "text-neutral-400 hover:text-accent"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {link.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-t-full" />
            )}
          </a>
        );
      })}
    </nav>
  );
};
NavBar.displayName = 'NavBar';

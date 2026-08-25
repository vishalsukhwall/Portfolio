import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInteractionStore } from '@stores/interactionStore';
import { NAV_LINKS } from '@utils/constants';
import { cn } from '@utils/cn';

export const MobileMenu: React.FC = () => {
  const { mobileMenuOpen, setMobileMenuOpen, activeSection } = useInteractionStore();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.style.overflow = '';
      return undefined;
    }
  }, [mobileMenuOpen, setMobileMenuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 relative z-50 text-neutral-400 hover:text-accent focus:outline-none"
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between items-center relative">
          <span className={cn("w-full h-0.5 bg-current transform transition-all duration-300", mobileMenuOpen ? "rotate-45 translate-y-2.5" : "")} />
          <span className={cn("w-full h-0.5 bg-current transition-all duration-300", mobileMenuOpen ? "opacity-0" : "")} />
          <span className={cn("w-full h-0.5 bg-current transform transition-all duration-300", mobileMenuOpen ? "-rotate-45 -translate-y-2" : "")} />
        </div>
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.nav
              id="mobile-menu"
              ref={menuRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-neutral-900 border-l border-white/10 z-50 flex flex-col p-6 shadow-2xl"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-6 mt-16">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={cn(
                        "text-lg font-medium transition-colors p-2 rounded-md",
                        isActive ? "text-accent bg-accent/10" : "text-neutral-400 hover:text-accent hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
MobileMenu.displayName = 'MobileMenu';

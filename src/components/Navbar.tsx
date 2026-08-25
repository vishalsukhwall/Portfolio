import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolioData';

const navItems = [
  { label: 'About',       href: '#about' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [activeSection,  setActiveSection]  = useState('');
  const [menuOpen,       setMenuOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.35 }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        style={{
          height: 70,
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(15, 23, 42, 0.08)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(0, 0, 0, 0.04)' : 'none',
          transition: 'background 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="relative group"
          data-cursor
        >
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            {personal.initials}
          </span>
          <span
            className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full bg-sky-500"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.href}>
                <button
                  onClick={() => scrollTo(item.href)}
                  data-cursor
                  className="relative text-sm font-extrabold uppercase tracking-widest transition-colors duration-200"
                  style={{ color: isActive ? '#0ea5e9' : '#64748b' }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-dot"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-sky-500"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full bg-sky-50 text-sky-600 font-extrabold text-xs uppercase tracking-widest border border-sky-100 hover:bg-sky-500 hover:text-white transition-all shadow-sm"
            data-cursor
          >
            Hire Me
          </a>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 border border-slate-200"
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor
          >
            {menuOpen
              ? <X size={18} className="text-slate-900" />
              : <Menu size={18} className="text-slate-900" />
            }
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center"
            style={{
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(30px)',
            }}
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 44px) 35px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 44px) 35px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 44px) 35px)' }}
            transition={{ duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul className="flex flex-col items-center gap-10">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ y: 28, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 28, opacity: 0 }}
                  transition={{ delay: i * 0.06 + 0.08, duration: 0.38 }}
                >
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-4xl font-black transition-colors text-slate-900"
                    data-cursor
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 28, opacity: 0 }}
                transition={{ delay: navItems.length * 0.06 + 0.08, duration: 0.38 }}
              >
                <a
                  href={`mailto:${personal.email}`}
                  className="px-10 py-4 rounded-full bg-sky-500 text-white font-extrabold text-sm uppercase tracking-widest shadow-lg shadow-sky-500/30"
                  data-cursor
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

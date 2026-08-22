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
          background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(2,132,199,0.1)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(2,132,199,0.06)' : 'none',
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
          <span className="text-2xl font-black tracking-tighter gradient-text-sky">
            {personal.initials}
          </span>
          <span
            className="absolute -bottom-0.5 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full"
            style={{ background: 'linear-gradient(90deg, #0284c7, #38bdf8)' }}
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
                  className="relative text-sm font-semibold transition-colors duration-200"
                  style={{ color: isActive ? '#0284c7' : '#475569' }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-dot"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #0284c7, #38bdf8)',
                        boxShadow: '0 0 6px rgba(2,132,199,0.5)',
                      }}
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
            className="hidden md:block magnetic-btn magnetic-btn-primary"
            data-cursor
            style={{ padding: '10px 24px', fontSize: '0.85rem' }}
          >
            Hire Me
          </a>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl"
            style={{
              background: 'rgba(2,132,199,0.07)',
              border: '1px solid rgba(2,132,199,0.15)',
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            data-cursor
          >
            {menuOpen
              ? <X size={18} color="#0284c7" />
              : <Menu size={18} color="#0284c7" />
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
              background: 'rgba(240,248,255,0.97)',
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
                    className="text-4xl font-black transition-colors"
                    style={{ color: '#0f172a' }}
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
                  className="magnetic-btn magnetic-btn-primary"
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

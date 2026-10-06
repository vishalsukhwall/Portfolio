import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@hooks/useTheme';
import { cn } from '@utils/cn';
import { soundFX } from '@utils/themeSound';
import { usePreferredReducedMotion } from '@hooks/usePreferredReducedMotion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { toggleTheme, isDark } = useTheme();
  const prefersReducedMotion = usePreferredReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 3D Tilt state
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Shockwave burst & particles state
  const [particles, setParticles] = useState<Particle[]>([]);
  const [shockwaves, setShockwaves] = useState<{ id: number; color: string }[]>([]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (prefersReducedMotion || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // 3D tilt angles (max ~14 degrees)
      const rX = -(y / (rect.height / 2)) * 14;
      const rY = (x / (rect.width / 2)) * 14;

      setRotateX(rX);
      setRotateY(rY);
    },
    [prefersReducedMotion]
  );

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const triggerToggle = () => {
    const nextThemeIsDark = !isDark;
    const nextTheme = nextThemeIsDark ? 'dark' : 'light';

    // 1. Explicitly fire dual-way sound FX on EVERY click before/during state change
    soundFX.playThemeToggleSound(nextThemeIsDark);

    // 2. Generate radial shockwave & particle burst
    const now = Date.now();
    const burstColor = nextTheme === 'light' ? '#f59e0b' : '#06b6d4'; // amber for light, cyan for dark
    const secondaryColor = nextTheme === 'light' ? '#fbbf24' : '#2dd4bf';

    // Add shockwave ring
    setShockwaves((prev) => [...prev, { id: now, color: burstColor }]);
    setTimeout(() => {
      setShockwaves((prev) => prev.filter((s) => s.id !== now));
    }, 700);

    // Generate 10 radial particles
    if (!prefersReducedMotion) {
      const newParticles: Particle[] = Array.from({ length: 10 }, (_, i) => {
        const angle = (i / 10) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
        const distance = 26 + Math.random() * 18;
        return {
          id: now + i,
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          size: Math.random() * 3 + 2,
          color: i % 2 === 0 ? burstColor : secondaryColor,
        };
      });

      setParticles(newParticles);
      setTimeout(() => {
        setParticles([]);
      }, 600);
    }

    // 3. Toggle actual theme state
    toggleTheme();
  };

  return (
    <div className="relative inline-flex items-center justify-center" style={{ perspective: '1000px' }}>
      {/* Shockwave Rings */}
      <AnimatePresence>
        {shockwaves.map((wave) => (
          <motion.span
            key={wave.id}
            initial={{ scale: 0.8, opacity: 0.9 }}
            animate={{ scale: 2.4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="absolute rounded-full pointer-events-none z-0"
            style={{
              width: '42px',
              height: '42px',
              border: `2px solid ${wave.color}`,
              boxShadow: `0 0 16px ${wave.color}`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Radial Burst Particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{ x: p.x, y: p.y, scale: 0, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="absolute rounded-full pointer-events-none z-30"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              boxShadow: `0 0 6px ${p.color}`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main 3D Interactive Button */}
      <motion.button
        ref={buttonRef}
        onClick={triggerToggle}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        type="button"
        whileTap={{ scale: 0.9, translateZ: -8 }}
        animate={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          y: isHovered && !prefersReducedMotion ? -2 : 0,
        }}
        transition={{ type: 'spring', stiffness: 380, damping: 22 }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={cn(
          'relative group p-2.5 rounded-2xl transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400',
          'bg-gradient-to-b from-white/90 to-neutral-100/90 dark:from-neutral-900/90 dark:to-neutral-950/90',
          'border border-neutral-200/90 dark:border-neutral-800/90',
          'shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)]',
          'dark:shadow-[0_6px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)]',
          'cursor-pointer select-none',
          className
        )}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode (Click for sound & 3D reaction)`}
      >
        {/* Ambient Backlight Glow behind icon */}
        <div
          className={cn(
            'absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-md -z-10',
            isDark ? 'bg-amber-400/25' : 'bg-cyan-500/25'
          )}
        />

        {/* 3D Floating Icon Stage */}
        <div
          className="relative w-5 h-5 flex items-center justify-center"
          style={{ transform: 'translateZ(18px)', transformStyle: 'preserve-3d' }}
        >
          {/* Sun Icon (Represents switching to Light mode or active light state) */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 absolute text-amber-500 dark:text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
            initial={false}
            animate={{
              scale: isDark ? 1 : 0,
              rotate: isDark ? 0 : 120,
              opacity: isDark ? 1 : 0,
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity={0.2} />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </motion.svg>

          {/* Moon Icon (Represents switching to Dark mode or active dark state) */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 absolute text-neutral-800 dark:text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
            initial={false}
            animate={{
              scale: isDark ? 0 : 1,
              rotate: isDark ? -120 : 0,
              opacity: isDark ? 0 : 1,
            }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" fillOpacity={0.2} />
          </motion.svg>
        </div>

        {/* 3D Glass Specular Sheen on Hover */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
          }}
        />
      </motion.button>
    </div>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
export default ThemeToggle;
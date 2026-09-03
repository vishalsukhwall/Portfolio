import React, { useState, useCallback } from 'react';
import { cn } from '@utils/cn';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative min-h-screen w-full flex flex-col items-center justify-center",
        "overflow-hidden bg-[#050608] px-4 sm:px-6 lg:px-8 selection:bg-teal-500/30"
      )}
    >
      {/* Dynamic Green Cursor Spotlight Light */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.14), rgba(16, 185, 129, 0.04) 40%, transparent 80%)`,
        }}
      />

      {/* Subtle Static Center Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/[0.04] rounded-full blur-[140px] pointer-events-none z-0" 
      />

      {/* Centered Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <HeroContent />
      </div>

    </section>
  );
};

Hero.displayName = 'Hero';

export { Hero };
export default Hero;
import React from 'react';
import { cn } from '@utils/cn';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className={cn(
        "relative min-h-screen w-full flex flex-col items-center justify-center",
        "overflow-hidden bg-neutral-950 px-4 sm:px-6 lg:px-8"
      )}
    >
      {/* Subtle Glow in background (Optional) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none z-0" 
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
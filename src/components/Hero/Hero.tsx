import React from 'react';
import { cn } from '@utils/cn';
import HeroContent from './HeroContent';
import HeroCanvas from './HeroCanvas';
import ScrollIndicator from './ScrollIndicator';


const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className={cn(
        "relative min-h-screen w-full",
        "flex flex-col lg:grid lg:grid-cols-2",
        "overflow-hidden bg-neutral-50 dark:bg-neutral-950"
      )}
    >
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 z-10">
        <HeroContent />
      </div>
      
      <div className="h-[60vh] lg:h-full w-full relative z-0">
        <HeroCanvas />
      </div>

      <ScrollIndicator />
    </section>
  );
};

Hero.displayName = 'Hero';

export { Hero };
export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@hooks/useScrollPosition';
import { usePreferredReducedMotion } from '@hooks/usePreferredReducedMotion';

const ScrollIndicator: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const prefersReducedMotion = usePreferredReducedMotion();
  
  const opacity = Math.max(1 - scrollY / 100, 0);

  if (opacity === 0) return null;

  return (
    <motion.div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      style={{ opacity }}
      aria-hidden="true"
    >
      <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">
        Scroll
      </span>
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-neutral-400 dark:text-neutral-500"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

ScrollIndicator.displayName = 'ScrollIndicator';

export default ScrollIndicator;

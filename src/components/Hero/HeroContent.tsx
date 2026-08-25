import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils/cn';
import { PORTFOLIO_NAME, PORTFOLIO_TITLE, PORTFOLIO_DESCRIPTION } from '@utils/constants';
import { usePreferredReducedMotion } from '@hooks/usePreferredReducedMotion';

const GradientText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
    {children}
  </span>
);

const HeroContent: React.FC = () => {
  const prefersReducedMotion = usePreferredReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <motion.div
      className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 mt-16 lg:mt-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="mb-2 text-cyan-500 font-medium tracking-wide">
        Hello, I'm
      </motion.div>
      
      <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
        <GradientText>{PORTFOLIO_NAME || 'Portfolio Name'}</GradientText>
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-6 font-mono">
        {PORTFOLIO_TITLE || 'Full Stack Developer'}
      </motion.p>
      
      <motion.p variants={itemVariants} className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 max-w-lg mb-8 leading-relaxed">
        {PORTFOLIO_DESCRIPTION || 'I build exceptional and accessible digital experiences for the web.'}
      </motion.p>
      
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a 
          href="#projects" 
          className={cn(
            "px-8 py-3 rounded-full font-medium transition-all duration-300",
            "bg-neutral-900 dark:bg-neutral-50 text-white dark:text-neutral-900",
            "hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
          )}
        >
          View My Work
        </a>
        <a 
          href="#contact" 
          className={cn(
            "px-8 py-3 rounded-full font-medium transition-all duration-300",
            "bg-transparent border border-neutral-300 dark:border-neutral-700",
            "text-neutral-900 dark:text-neutral-50",
            "hover:border-cyan-500 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400",
            "hover:scale-105 active:scale-95"
          )}
        >
          Get in Touch
        </a>
      </motion.div>
    </motion.div>
  );
};

HeroContent.displayName = 'HeroContent';

export default HeroContent;

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@utils/cn';
import { PORTFOLIO_DESCRIPTION } from '@utils/constants';
import { usePreferredReducedMotion } from '@hooks/usePreferredReducedMotion';

const HeroContent: React.FC = () => {
  const prefersReducedMotion = usePreferredReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center z-10 w-full max-w-5xl mx-auto py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* 1. Status Pill Badge */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-300/90 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mb-6 shadow-sm backdrop-blur-md transition-colors"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Available for Full-time & Projects
      </motion.div>

      {/* 2. Main Name Heading - High Contrast in Light and Dark Modes */}
      <motion.h1
        variants={itemVariants}
        className="text-5xl sm:text-[4.2rem] md:text-[5.2rem] lg:text-[7.5rem] font-extrabold tracking-tight mb-6 select-none leading-[1.03]"
      >
        <span className="block bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800 dark:from-white dark:via-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent">
          Vishal
        </span>
        <span className="block bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800 dark:from-white dark:via-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent">
          Sukhwal
        </span>
      </motion.h1>

      {/* 3. Subheadings & Description */}
      <motion.div variants={itemVariants} className="space-y-3 mb-10 max-w-2xl mx-auto">
        <p className="text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-300">
          Full Stack Engineer <span className="text-teal-600 dark:text-teal-400 font-bold mx-2">✕</span> AI & Machine Learning Specialist
        </p>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {PORTFOLIO_DESCRIPTION || (
            <>Building scalable digital products with <span className="text-neutral-900 dark:text-white font-semibold">Speed</span> & <span className="text-neutral-900 dark:text-white font-semibold">Intelligence</span>.</>
          )}
        </p>
      </motion.div>

      {/* 4. Rounded Pill Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
      >
        <a
          href="#projects"
          className={cn(
            "inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 transform-gpu",
            "bg-neutral-900 text-white hover:bg-neutral-800 shadow-md",
            "dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 dark:shadow-white/10",
            "hover:-translate-y-0.5 active:translate-y-0"
          )}
        >
          View Work
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        <a
          href="#contact"
          className={cn(
            "px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 transform-gpu",
            "bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-400 shadow-sm",
            "dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white dark:hover:border-neutral-700 backdrop-blur-md",
            "hover:-translate-y-0.5 active:translate-y-0"
          )}
        >
          Contact Me
        </a>
      </motion.div>
    </motion.div>
  );
};

HeroContent.displayName = 'HeroContent';

export default HeroContent;
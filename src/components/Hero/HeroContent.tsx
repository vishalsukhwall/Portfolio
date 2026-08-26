import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { cn } from '@utils/cn';
import { 
  PORTFOLIO_NAME, 
  PORTFOLIO_TITLES, 
  PORTFOLIO_TITLE, 
  PORTFOLIO_DESCRIPTION 
} from '@utils/constants';
import { usePreferredReducedMotion } from '@hooks/usePreferredReducedMotion';

const GradientText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-pink-500 drop-shadow-[0_4px_24px_rgba(0,212,255,0.25)]">
    {children}
  </span>
);

const HeroContent: React.FC = () => {
  const prefersReducedMotion = usePreferredReducedMotion();
  const titles = PORTFOLIO_TITLES || [PORTFOLIO_TITLE || 'Full Stack Developer'];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth typewriter loop for titles under name
  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayText(titles[0]);
      return;
    }

    const currentTitle = titles[titleIndex % titles.length];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles, prefersReducedMotion]);

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
      className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 mt-16 lg:mt-0"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Intro Badge */}
      <motion.div 
  variants={itemVariants} 
  className="mb-3 text-xs md:text-sm font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase"
>
  Hi there, I'm
</motion.div>
      
      {/* Main Name */}
      <motion.h1 
        variants={itemVariants} 
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight text-neutral-900 dark:text-neutral-50"
      >
        <GradientText>{PORTFOLIO_NAME || 'Vishal Sukhwal'}</GradientText>
      </motion.h1>
      
      {/* Dynamic Titles Loop */}
      <motion.div 
        variants={itemVariants} 
        className="h-8 sm:h-9 flex items-center mb-6 font-mono text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300"
      >
       <span className="text-red-500 mr-2 font-mono font-black drop-shadow-[0_0_12px_rgba(239,68,68,0.9)] animate-pulse">~</span>
        <span className="text-cyan-600 dark:text-cyan-400">{displayText}</span>
        <span className="animate-pulse ml-0.5 text-pink-500 font-bold"></span>
      </motion.div>
      
      {/* Description */}
      <motion.p 
        variants={itemVariants} 
        className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-lg mb-8 leading-relaxed"
      >
        {PORTFOLIO_DESCRIPTION || 'Building high-performance web applications, interactive 3D experiences, and modern scalable solutions.'}
      </motion.p>
      
      {/* 3D Interactive Buttons */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a 
          href="#projects" 
          className={cn(
            "relative group px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 transform-gpu",
            "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25",
            "hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/40 active:translate-y-0"
          )}
        >
          <span className="relative z-10">View My Work</span>
          <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <a 
          href="#contact" 
          className={cn(
            "px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 transform-gpu",
            "bg-neutral-900/5 dark:bg-neutral-900/80 backdrop-blur-md",
            "border border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100",
            "hover:-translate-y-1 hover:border-pink-500/50 hover:text-pink-500 dark:hover:text-pink-400 hover:shadow-lg hover:shadow-pink-500/10 active:translate-y-0"
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
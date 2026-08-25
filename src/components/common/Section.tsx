import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils/cn';
import { useInView } from '@hooks/useInView';
import { usePreferredReducedMotion } from '@hooks/usePreferredReducedMotion';
import { Container } from './Container';
import { GradientText } from './GradientText';

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className, title, subtitle }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const prefersReducedMotion = usePreferredReducedMotion();

  const animationVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section
      id={id}
      ref={ref as any}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      className={cn("py-20 md:py-28", className)}
    >
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <GradientText>{title}</GradientText>
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </motion.section>
  );
};
Section.displayName = 'Section';

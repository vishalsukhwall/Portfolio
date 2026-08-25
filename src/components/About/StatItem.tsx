import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '@components/common/GradientText';
import { useInView } from '@hooks/useInView';

export interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

export const StatItem: React.FC<StatItemProps> = ({ value, label, delay = 0 }) => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, type: 'spring' }}
      className="flex flex-col items-center justify-center p-6 bg-neutral-900/30 rounded-2xl border border-white/5"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <GradientText>{value}</GradientText>
      </div>
      <div className="text-sm md:text-base text-neutral-400 font-medium tracking-wide uppercase">
        {label}
      </div>
    </motion.div>
  );
};
StatItem.displayName = 'StatItem';

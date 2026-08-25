import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@data/skills';
import { SkillCard } from './SkillCard';

export const SkillsGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
    >
      {skills.map((skill) => (
        <motion.div key={skill.category} variants={itemVariants}>
          <SkillCard {...skill} />
        </motion.div>
      ))}
    </motion.div>
  );
};
SkillsGrid.displayName = 'SkillsGrid';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@components/common/Section';
import { SkillsGrid } from './SkillsGrid';
import { StatItem } from './StatItem';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="I'm a creative technologist passionate about building performant, accessible, and beautiful web experiences."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-16"
      >
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-neutral-300 leading-relaxed">
            With over 5 years of experience in full-stack development, I specialize in React, TypeScript, and modern web architectures. I bridge the gap between design and engineering, creating applications that are not only visually striking but also structurally robust and scalable.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto w-full">
          <StatItem value="5+" label="Years Experience" delay={0.1} />
          <StatItem value="50+" label="Projects Completed" delay={0.2} />
          <StatItem value="30+" label="Happy Clients" delay={0.3} />
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
          <h3 className="text-2xl font-bold mb-8 text-center">My Arsenal</h3>
          <SkillsGrid />
        </motion.div>
      </motion.div>
    </Section>
  );
};
About.displayName = 'About';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '@data/projects';
import type { Project } from '@/types/project';

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          onClick={() => onProjectClick(project)}
        />
      ))}
    </motion.div>
  );
};

ProjectGrid.displayName = 'ProjectGrid';

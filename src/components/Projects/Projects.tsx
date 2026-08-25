import React, { useState } from 'react';
import { ProjectGrid } from './ProjectGrid';
import { ProjectModal } from './ProjectModal';
import type { Project } from '@/types/project';
import { Section } from '@components/common/Section';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optional: delay nullifying project to allow exit animation to run
    setTimeout(() => {
      if (!isModalOpen) {
        setSelectedProject(null);
      }
    }, 300);
  };

  return (
    <Section 
      id="projects" 
      title="Featured Projects" 
      className="bg-neutral-950 text-white"
    >
      <ProjectGrid onProjectClick={handleProjectClick} />
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </Section>
  );
};

Projects.displayName = 'Projects';

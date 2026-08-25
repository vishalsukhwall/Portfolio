import React, { useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@utils/cn';
import type { Project } from '@/types/project';
import { TechBadge } from './TechBadge';
import { usePreferredReducedMotion } from '@hooks/usePreferredReducedMotion';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = usePreferredReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  const isFeatured = project.featured;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: 'easeOut',
        delay: prefersReducedMotion ? 0 : index * 0.1 
      }
    }
  };

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={cn(
        'group relative rounded-xl overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900',
        isFeatured ? 'md:col-span-2' : ''
      )}
      style={{ perspective: '1000px' }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="w-full h-full bg-neutral-900/50 border border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-accent"
        style={{
          transform: prefersReducedMotion ? 'none' : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'none' : 'transform 0.5s ease-out'
        }}
      >
        <div 
          className="w-full aspect-video relative overflow-hidden"
          style={{ background: project.image }}
        >
          <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-accent/20 transition-colors duration-500 mix-blend-overlay" />
        </div>
        
        <div className="p-6 flex flex-col h-[calc(100%-56.25%)]">
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
          <p className="text-neutral-400 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech: string) => (
              <TechBadge key={tech} name={tech} />
            ))}
            {project.technologies.length > 4 && (
              <TechBadge name={`+${project.technologies.length - 4}`} />
            )}
          </div>
          
          <div className="flex items-center gap-4 mt-auto">
            <span className="text-sm font-medium text-accent group-hover:underline underline-offset-4">
              View Details &rarr;
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.displayName = 'ProjectCard';

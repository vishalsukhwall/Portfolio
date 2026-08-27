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

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: 'easeOut',
        delay: prefersReducedMotion ? 0 : index * 0.08 
      }
    }
  };

  const isImagePath = project.image.startsWith('/') || project.image.startsWith('http');

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={cn(
        'group relative rounded-2xl overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-accent'
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
        className="w-full h-full bg-neutral-900/70 border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-accent/60 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] flex flex-col"
        style={{
          transform: prefersReducedMotion ? 'none' : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'none' : 'transform 0.4s ease-out'
        }}
      >
        {/* Thumbnail Image Container */}
        <div className="w-full h-48 sm:h-52 relative overflow-hidden bg-neutral-950">
          {isImagePath ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
            />
          ) : (
            <div 
              className="w-full h-full" 
              style={{ background: project.image }} 
            />
          )}
          <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-accent/10 transition-colors duration-300 mix-blend-overlay" />
        </div>
        
        {/* Card Body */}
        <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
          <div>
            <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-sm line-clamp-2 leading-relaxed">
              {project.description}
              
            </p>
          </div>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech: string) => (
                <TechBadge key={tech} name={tech} />
              ))}
              {project.technologies.length > 4 && (
                <TechBadge name={`+${project.technologies.length - 4}`} />
              )}
            </div>
            
            <div className="flex items-center text-sm font-semibold text-accent group-hover:translate-x-1 transition-transform">
              View Details &rarr;
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
import React, { useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@utils/cn';
import type { Project } from '@/types/project';
import { TechBadge } from './TechBadge';
import { usePreferredReducedMotion } from '@hooks/usePreferredReducedMotion';

interface ExtendedProject extends Project {
  badge?: string;
  metrics?: {
    label1?: string;
    value1?: string;
    label2?: string;
    value2?: string;
  };
}

interface ProjectCardProps {
  project: ExtendedProject;
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

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

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
    hidden: { opacity: 0, y: 30, scale: 0.97 },
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

  const isImagePath = project.image?.startsWith('/') || project.image?.startsWith('http');
  const badgeText = project.badge || (project.technologies?.[0] ? `${project.technologies[0].toUpperCase()} APP` : 'FEATURED');

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={cn(
        'group relative w-full rounded-[32px] sm:rounded-[36px] overflow-hidden cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-teal-400'
      )}
      style={{ perspective: '1200px' }}
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
        className="w-full bg-[#0b0d10]/95 backdrop-blur-2xl border border-neutral-800/80 rounded-[32px] sm:rounded-[36px] overflow-hidden transition-all duration-300 group-hover:border-neutral-700 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col"
        style={{
          transform: prefersReducedMotion ? 'none' : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.01 : 1})`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'none' : 'transform 0.4s ease-out'
        }}
      >
        {/* Thumbnail Viewport Area */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#07080b]">
          {isImagePath ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-center opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" 
            />
          ) : (
            <div 
              className="w-full h-full" 
              style={{ background: project.image || '#12141a' }} 
            />
          )}
          
          {/* Subtle Viewport Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-black/40" />

          {/* Top Tag Badge */}
          <div className="absolute top-5 right-5 z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/60 text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-bold shadow-lg">
              {badgeText}
            </span>
          </div>
        </div>
        
        {/* Card Body */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
          
          {/* Title & Metrics Row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-800/80 pb-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
              {project.title}
            </h3>

            {/* Metrics (Optional / Dynamic) */}
            <div className="flex items-center gap-6">
              <div className="text-left sm:text-right">
                <div className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider uppercase">
                  {project.metrics?.label1 || 'LIGHTHOUSE'}
                </div>
                <div className="text-sm font-mono font-bold text-neutral-200">
                  {project.metrics?.value1 || '100'}
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider uppercase">
                  {project.metrics?.label2 || 'SEO'}
                </div>
                <div className="text-sm font-mono font-bold text-neutral-200">
                  {project.metrics?.value2 || 'Top 1%'}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed line-clamp-3 font-normal">
            {project.description}
          </p>
          
          {/* Tech Badges & CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            
            {/* Tech Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {project.technologies?.slice(0, 4).map((tech: string) => (
                <TechBadge key={tech} name={tech} />
              ))}
              {project.technologies && project.technologies.length > 4 && (
                <TechBadge name={`+${project.technologies.length - 4}`} />
              )}
            </div>
            
            {/* Action CTA Button */}
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs group-hover:bg-neutral-200 transition-all group-hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span>View Project</span>
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
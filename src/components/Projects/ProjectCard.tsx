import React, { useRef, useState, useCallback } from 'react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const prefersReducedMotion = usePreferredReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const rawX = e.clientX - rect.left;
    const rawY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((rawY - centerY) / centerY) * -5;
    const rotateY = ((rawX - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
    setMousePosition({
      x: (rawX / rect.width) * 100,
      y: (rawY / rect.height) * 100,
      rawX,
      rawY,
    });
  }, [prefersReducedMotion]);

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
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.45, 
        ease: [0.16, 1, 0.3, 1],
        delay: prefersReducedMotion ? 0 : index * 0.08 
      }
    }
  };

  const isImagePath = Boolean(
    project.image && 
    (project.image.startsWith('/') || project.image.startsWith('http')) && 
    !imageFailed
  );

  const badgeText = project.badge || (project.technologies?.[0] ? `${project.technologies[0].toUpperCase()} PLATFORM` : 'FEATURED SYSTEM');

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={cn(
        'group relative w-full rounded-[32px] sm:rounded-[36px] overflow-visible cursor-pointer outline-none select-none focus-visible:ring-2 focus-visible:ring-teal-400/80'
      )}
      style={{ perspective: '1400px' }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open preview and logs for ${project.title}`}
    >
      {/* Outer Border Light Follower (Spotlight Glow) */}
      <div 
        className="pointer-events-none absolute -inset-[1px] rounded-[33px] sm:rounded-[37px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 blur-[1px]"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(45,212,191,0.25), transparent 70%)`
        }}
      />

      {/* Main Glassmorphic Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className="relative z-10 w-full bg-[#0b0d10]/95 backdrop-blur-2xl border border-neutral-800/80 group-hover:border-neutral-700/80 rounded-[32px] sm:rounded-[36px] overflow-hidden transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col"
        style={{
          transform: prefersReducedMotion 
            ? 'none' 
            : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(${isHovered ? -4 : 0}px)`,
          transformStyle: 'preserve-3d',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Subtle Radial Surface Glare */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 mix-blend-soft-light"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.rawX}px ${mousePosition.rawY}px, rgba(255,255,255,0.08), transparent 80%)`
          }}
        />

        {/* Viewport Area */}
        <div 
          className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden bg-[#07090e] border-b border-neutral-800/60"
          style={{ transform: 'translateZ(15px)' }}
        >
          {isImagePath ? (
            <img 
              src={project.image} 
              alt={project.title}
              onError={() => setImageFailed(true)}
              className="w-full h-full object-cover object-top opacity-85 transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100" 
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0e1626] via-[#07090e] to-black">
              <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
              <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 text-2xl shadow-[0_0_25px_rgba(20,184,166,0.2)]">
                ⚡
              </div>
              <p className="mt-3 text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                {project.title}
              </p>
            </div>
          )}

          {/* Shadow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-black/30 pointer-events-none" />

          {/* Top Tag Badge */}
          <div className="absolute top-5 right-5 z-20">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700/80 text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-bold shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              {badgeText}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div 
          className="p-6 sm:p-8 md:p-9 flex flex-col justify-between space-y-6"
          style={{ transform: 'translateZ(25px)' }}
        >
          {/* Header Row: Title & Metrics */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-800/80 pb-5">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-6 self-start sm:self-auto">
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
          <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed line-clamp-2 font-normal">
            {project.description}
          </p>

          {/* Tech Badges & Interactive CTA */}
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

            {/* Live CTA Button */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs group-hover:bg-neutral-200 transition-all duration-300 group-hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span>View System</span>
              <svg 
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2.5} 
                viewBox="0 0 24 24"
              >
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
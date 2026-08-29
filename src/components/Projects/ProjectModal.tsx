import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types/project';
import { TechBadge } from './TechBadge';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  const isImagePath = project.image.startsWith('/') || project.image.startsWith('http');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          {/* Backdrop with Ambient Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0b0d10] rounded-[32px] shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-neutral-800 z-10 scrollbar-hide text-white"
          >
            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 z-30 p-2.5 bg-[#12141a]/90 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-all border border-neutral-700/80 backdrop-blur-md hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Banner Image / Viewport */}
            <div className="w-full h-64 sm:h-72 relative overflow-hidden bg-[#07080b]">
              {isImagePath ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-90"
                />
              ) : (
                <div className="w-full h-full" style={{ background: project.image }} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-black/40" />

              {/* Tag Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/60 text-[10px] font-mono uppercase tracking-widest text-[#2dd4bf] font-bold shadow-lg flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                  CASE STUDY
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 md:p-10 -mt-6 relative z-10 space-y-6">
              <div>
                <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>

              {/* Overview Description */}
              <div className="text-neutral-300 text-sm sm:text-[15px] leading-relaxed font-normal border-b border-neutral-800/80 pb-6">
                <p>{project.description}</p>
              </div>

              {/* Case Study Details */}
              {project.caseStudy && (
                <div className="space-y-4 pt-2">
                  <div className="bg-[#12141a]/60 border border-neutral-800/80 rounded-2xl p-5 space-y-1.5">
                    <h3 className="text-xs font-mono font-bold text-rose-400 tracking-wider uppercase flex items-center gap-2">
                      <span>•</span> The Challenge
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {project.caseStudy.challenge}
                    </p>
                  </div>

                  <div className="bg-[#12141a]/60 border border-neutral-800/80 rounded-2xl p-5 space-y-1.5">
                    <h3 className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase flex items-center gap-2">
                      <span>•</span> The Solution
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </div>

                  <div className="bg-[#12141a]/60 border border-neutral-800/80 rounded-2xl p-5 space-y-1.5">
                    <h3 className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase flex items-center gap-2">
                      <span>•</span> The Result
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {project.caseStudy.result}
                    </p>
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800/80">
                <div className="flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-bold text-xs rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    >
                      <span>Live Demo</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#12141a] text-neutral-200 border border-neutral-800 hover:border-neutral-600 font-semibold text-xs rounded-full hover:text-white transition-all hover:scale-105"
                    >
                      <span>View Source</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

ProjectModal.displayName = 'ProjectModal';
export default ProjectModal;
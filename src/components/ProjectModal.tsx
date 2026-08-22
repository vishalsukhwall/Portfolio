import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Tag } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import type { projects } from '../data/portfolioData';

type Project = typeof projects[number];

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[200]"
            style={{ background: 'rgba(15,23,42,0.35)', backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-[201] inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2
                       top-1/2 -translate-y-1/2 w-full md:w-[600px] rounded-3xl overflow-hidden"
            style={{
              background: '#ffffff',
              border: `1.5px solid rgba(2,132,199,0.2)`,
              boxShadow: `0 0 0 1px rgba(2,132,199,0.08),
                          0 24px 64px rgba(2,132,199,0.18),
                          0 8px 24px rgba(0,0,0,0.08)`,
            }}
            initial={{ opacity: 0, scale: 0.88, y: '-40%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%' }}
            exit={{ opacity: 0, scale: 0.88, y: '-40%' }}
            transition={{ duration: 0.32, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Top color bar */}
            <div
              className="h-1.5 w-full"
              style={{ background: 'linear-gradient(90deg, #0284c7, #38bdf8, #00a8ff)' }}
            />

            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-1.5"
                    style={{ color: '#0284c7' }}
                  >
                    {project.subtitle}
                  </p>
                  <h3
                    className="text-3xl font-black tracking-tight"
                    style={{ color: '#0f172a', lineHeight: 1.1 }}
                  >
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  data-cursor
                  className="flex items-center justify-center w-10 h-10 rounded-xl transition-all"
                  style={{
                    background: 'rgba(2,132,199,0.06)',
                    border: '1px solid rgba(2,132,199,0.15)',
                  }}
                >
                  <X size={16} color="#475569" />
                </button>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: '#475569', lineHeight: 1.75 }}
              >
                {project.longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-chip flex items-center gap-1.5">
                    <Tag size={9} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                    className="flex-1 magnetic-btn magnetic-btn-primary flex items-center justify-center gap-2"
                    style={{ fontSize: '0.875rem', padding: '12px 20px' }}
                  >
                    <ExternalLink size={14} />
                    View Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="flex-1 magnetic-btn magnetic-btn-secondary flex items-center justify-center gap-2"
                  style={{ fontSize: '0.875rem', padding: '12px 20px' }}
                >
                  <GithubIcon size={14} color="#0284c7" />
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

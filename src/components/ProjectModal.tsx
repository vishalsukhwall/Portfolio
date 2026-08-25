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
            style={{ background: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-[201] inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2
                       top-1/2 -translate-y-1/2 w-full md:w-[600px] rounded-3xl overflow-hidden bg-white border border-slate-200 text-slate-900"
            style={{
              boxShadow: `0 24px 64px rgba(15, 23, 42, 0.15), 0 0 40px rgba(2, 132, 199, 0.05)`,
            }}
            initial={{ opacity: 0, scale: 0.88, y: '-40%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%' }}
            exit={{ opacity: 0, scale: 0.88, y: '-40%' }}
            transition={{ duration: 0.32, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Top color bar */}
            <div
              className="h-1.5 w-full"
              style={{ background: 'linear-gradient(90deg, #0284c7, #38bdf8, #bae6fd)' }}
            />

            <div className="p-8 sm:p-10 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="text-xs font-extrabold tracking-widest uppercase mb-2 text-sky-600"
                  >
                    {project.subtitle}
                  </p>
                  <h3
                    className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900"
                    style={{ lineHeight: 1.1 }}
                  >
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  data-cursor
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all text-slate-500 hover:text-slate-900 shadow-2xs"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              {/* Description */}
              <p
                className="text-sm sm:text-base leading-relaxed text-slate-600 font-medium"
              >
                {project.longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-100 uppercase tracking-wide">
                    <Tag size={12} strokeWidth={2.5} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-100">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                    className="w-full sm:w-auto flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-500/20"
                  >
                    <ExternalLink size={16} strokeWidth={2.5} />
                    View Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="w-full sm:w-auto flex-1 py-3.5 px-5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-2xs"
                >
                  <GithubIcon size={16} />
                  View Source
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
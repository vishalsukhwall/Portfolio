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
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-[201] inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2
                       top-1/2 -translate-y-1/2 w-full md:w-[600px] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 text-white"
            style={{
              boxShadow: `0 24px 64px rgba(0,0,0,0.6), 0 0 40px rgba(56,189,248,0.1)`,
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

            <div className="p-8 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-1.5 text-sky-400"
                  >
                    {project.subtitle}
                  </p>
                  <h3
                    className="text-2xl sm:text-3xl font-black tracking-tight text-white"
                    style={{ lineHeight: 1.1 }}
                  >
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  data-cursor
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all text-slate-300 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed text-slate-300"
              >
                {project.longDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-sky-300 bg-sky-950/80 border border-sky-800/60">
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                    className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-700 hover:to-cyan-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-500/20"
                  >
                    <ExternalLink size={14} />
                    View Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="flex-1 py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <GithubIcon size={14} />
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

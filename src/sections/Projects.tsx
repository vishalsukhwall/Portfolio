import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import FlipSection from '../components/FlipSection';

// ─── Clean Project Card (No 3D Tilt, Matte Black Theme) ─────────────────────
function ProjectCard({
  project,
  onClick,
}: {
  project: typeof projects[0];
  onClick: () => void;
}) {
  return (
    <div className="h-full">
      <motion.div
        className="h-full rounded-2xl bg-slate-900/60 border border-slate-800 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:border-sky-500/40 hover:bg-slate-900/90 hover:shadow-xl cursor-pointer relative overflow-hidden text-left backdrop-blur-sm"
        onClick={onClick}
      >
        {/* Subtle top accent gradient bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: 'linear-gradient(90deg, #38bdf8, #0284c7, #38bdf8)',
          }}
        />

        {/* Content Block */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-slate-950 text-sky-400 border border-slate-800">
              {project.subtitle}
            </span>
            <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:border-sky-500/40 transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug group-hover:text-sky-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2.5 line-clamp-3 font-light">
              {project.description}
            </p>
          </div>
        </div>

        {/* Footer & Actions */}
        <div className="pt-5 space-y-4 border-t border-white/5 mt-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-300 bg-slate-950 border border-slate-800 uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              data-cursor
              className="text-xs font-extrabold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
            >
              <Code2 size={14} /> Case Details
            </button>

            <div className="flex items-center gap-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  data-cursor
                  className="w-8 h-8 rounded-lg bg-slate-950 text-sky-400 border border-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all cursor-pointer"
                  title="Live Demo"
                >
                  <ExternalLink size={15} />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                data-cursor
                className="w-8 h-8 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
                title="Source Code"
              >
                <GithubIcon size={15} />
              </a>
            </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
}

// ─── Section Component ────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <FlipSection>
      <section
        id="projects"
        className="relative overflow-hidden bg-[#030712] text-slate-100 py-20 sm:py-28 border-b border-white/5"
      >
        {/* Soft Ambient Dark Light Decoration */}
        <div
          className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-10 -z-10"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl text-left mb-14 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-[11px] font-bold tracking-widest uppercase">
              <Sparkles size={13} className="text-sky-400" />
              Featured Engineering
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2]">
              Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Projects.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed pt-1">
              Production-grade applications spanning full-stack TypeScript systems, scalable cloud platforms, and machine learning pipelines.
            </p>
          </motion.div>

          {/* 3-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </div>

        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </section>
    </FlipSection>
  );
}
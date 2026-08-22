import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Sparkles, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projects } from '../data/portfolioData';
import ProjectModal from '../components/ProjectModal';
import FlipSection from '../components/FlipSection';

// ─── 3D Tilt Project Card ────────────────────────────────────────────────────
function ProjectCard({
  project,
  onClick,
}: {
  project: typeof projects[0];
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setTilt({ x: 0, y: 0 });
      }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        className="h-full rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800/80 shadow-xl p-8 flex flex-col justify-between transition-all duration-300 group hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/10 cursor-pointer relative overflow-hidden text-left"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          y: hover ? -6 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={onClick}
      >
        {/* Subtle top accent gradient bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(90deg, #0284c7, #38bdf8, #00a8ff)',
            opacity: hover ? 1 : 0.4,
          }}
        />

        {/* Content Block */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-950/80 text-sky-300 border border-sky-800/60">
              {project.subtitle}
            </span>
            <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-sky-400 group-hover:bg-slate-800 transition-colors">
              <ArrowUpRight size={16} />
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug group-hover:text-sky-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2.5 line-clamp-3 font-normal">
              {project.description}
            </p>
          </div>
        </div>

        {/* Footer & Actions */}
        <div className="pt-6 space-y-4 border-t border-slate-800/80 mt-6">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-300 bg-slate-800/70 border border-slate-700/60"
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
              className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
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
                  className="w-8 h-8 rounded-lg bg-sky-950/80 text-sky-300 border border-sky-800/60 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-2xs cursor-pointer"
                  title="Live Demo"
                >
                  <ExternalLink size={14} />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                data-cursor
                className="w-8 h-8 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all shadow-2xs cursor-pointer"
                title="Source Code"
              >
                <GithubIcon size={14} />
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
        className="section-padding relative overflow-hidden bg-slate-950 text-slate-100 py-24 sm:py-32"
      >
        {/* Soft Ambient Glow */}
        <div
          className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.5) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-sky-400 text-xs font-bold tracking-widest uppercase shadow-2xs">
              <Sparkles size={13} className="text-sky-400" />
              Featured Engineering
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Flagship <span className="gradient-text-sky">Projects</span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
              Production-grade applications spanning full-stack TypeScript systems, scalable cloud platforms, and machine learning pipelines.
            </p>
          </motion.div>

          {/* 3-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
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

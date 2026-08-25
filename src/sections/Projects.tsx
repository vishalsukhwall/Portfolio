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
        className="h-full rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-sm p-8 flex flex-col justify-between transition-all duration-300 group hover:border-sky-300 hover:bg-white hover:shadow-xl cursor-pointer relative overflow-hidden text-left"
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
            background: 'linear-gradient(90deg, #0284c7, #38bdf8, #bae6fd)',
            opacity: hover ? 1 : 0,
          }}
        />

        {/* Content Block */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-100">
              {project.subtitle}
            </span>
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-sky-600 group-hover:border-sky-200 transition-colors shadow-2xs">
              <ArrowUpRight size={16} />
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-sky-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-3 line-clamp-3 font-normal">
              {project.description}
            </p>
          </div>
        </div>

        {/* Footer & Actions */}
        <div className="pt-6 space-y-4 border-t border-slate-200/60 mt-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[10px] font-bold text-slate-600 bg-white border border-slate-200 uppercase tracking-wide shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 pt-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClick();
              }}
              data-cursor
              className="text-xs font-extrabold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
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
                  className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 border border-sky-200/80 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all shadow-2xs cursor-pointer"
                  title="Live Demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                data-cursor
                className="w-9 h-9 rounded-lg bg-white text-slate-700 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-2xs cursor-pointer"
                title="Source Code"
              >
                <GithubIcon size={16} />
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
        className="relative overflow-hidden bg-white text-slate-900 py-28 sm:py-36 border-b border-slate-100"
      >
        {/* Soft Ambient Light Decoration */}
        <div
          className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-3xl opacity-20 -z-10"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl text-left mb-16 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase shadow-2xs">
              <Sparkles size={13} className="text-sky-500" />
              Featured Engineering
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Flagship <span className="text-sky-600">Projects.</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed pt-2">
              Production-grade applications spanning full-stack TypeScript systems, scalable cloud platforms, and machine learning pipelines.
            </p>
          </motion.div>

          {/* 3-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

import React, { useState, useRef, useEffect } from 'react';
import type { Project } from '@/types/project';
import { ProjectModal } from './ProjectModal';

interface DeckProject {
  id: string;
  number: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  metrics: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
  techStack: { name: string; icon: string; color: string }[];
  liveUrl: string;
  githubUrl?: string;
  fullProjectData?: Partial<Project>;
}

const projectsDeckData: DeckProject[] = [
  {
    id: 'aarambhh',
    number: '01',
    name: 'AARAMBHH PLATFORM',
    badge: 'FULL STACK APP',
    title: 'Aarambhh Platform',
    description:
      'Engineered a scalable full-stack community & resource management portal with high-performance server rendering and real-time state management.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    metrics: {
      label1: 'PERFORMANCE',
      value1: '99',
      label2: 'UPTIME',
      value2: '99.9%',
    },
    techStack: [
      { name: 'React', icon: '⚛️', color: 'border-cyan-500/30 text-cyan-400' },
      { name: 'TypeScript', icon: 'TS', color: 'border-blue-500/30 text-blue-400' },
      { name: 'MongoDB', icon: '🍃', color: 'border-emerald-500/30 text-emerald-400' },
      { name: 'Tailwind', icon: '🌊', color: 'border-teal-500/30 text-teal-400' },
    ],
    liveUrl: 'https://wealthynames.vercel.app/#blog',
  },
  {
    id: 'lakshpath',
    number: '02',
    name: 'LAKSHPATH GLOBAL',
    badge: 'VISA PLATFORM',
    title: 'Lakshpath Global',
    description:
      'High-performance static architecture engineered for international scalability. Zero-JS content loads ensure accessibility in low-bandwidth immigration regions.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    metrics: {
      label1: 'LIGHTHOUSE',
      value1: '100',
      label2: 'SEO',
      value2: 'Top 1%',
    },
    techStack: [
      { name: 'Astro', icon: '🚀', color: 'border-orange-500/30 text-orange-400' },
      { name: 'Svelte', icon: '🔥', color: 'border-red-500/30 text-red-400' },
      { name: 'Tailwind', icon: '🌊', color: 'border-teal-500/30 text-teal-400' },
    ],
    liveUrl: '#',
  },
  {
    id: 'ai-career',
    number: '03',
    name: 'AI CAREER MENTOR',
    badge: 'AI / LLM AGENT',
    title: 'AI Career Mentor',
    description:
      'Autonomous intelligent guidance workflow powered by Hugging Face models and interactive Streamlit UI, providing instant roadmap generation and automated resume critiques.',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    metrics: {
      label1: 'LATENCY',
      value1: '<1.2s',
      label2: 'ACCURACY',
      value2: '96%',
    },
    techStack: [
      { name: 'Python', icon: '🐍', color: 'border-yellow-500/30 text-yellow-400' },
      { name: 'Streamlit', icon: '👑', color: 'border-rose-500/30 text-rose-400' },
      { name: 'HuggingFace', icon: '🤗', color: 'border-amber-500/30 text-amber-400' },
    ],
    liveUrl: '#',
  },
  {
    id: 'spam-detect',
    number: '04',
    name: 'SMS SPAM DETECTOR',
    badge: 'ML PIPELINE',
    title: 'SMS Spam Detection Pipeline',
    description:
      'Real-time NLP classification model trained with Naive Bayes algorithms and deployed via RESTful Flask API endpoints for high-throughput message verification.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    metrics: {
      label1: 'PRECISION',
      value1: '98.4%',
      label2: 'RESPONSE',
      value2: '12ms',
    },
    techStack: [
      { name: 'Python', icon: '🐍', color: 'border-yellow-500/30 text-yellow-400' },
      { name: 'Scikit-Learn', icon: '⚙️', color: 'border-orange-500/30 text-orange-400' },
      { name: 'Flask', icon: '🧪', color: 'border-neutral-500/30 text-neutral-300' },
    ],
    liveUrl: '#',
  },
  {
    id: 'wealthy-names',
    number: '05',
    name: 'WEALTHY NAMES',
    badge: 'LIVE WEB APP',
    title: 'Wealthy Names Web',
    description:
      'Modern responsive web application built with React and TypeScript, fully optimized for fast loading and deployed seamlessly on Vercel edge networks.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    metrics: {
      label1: 'PERF SCORE',
      value1: '99',
      label2: 'SEO',
      value2: '100',
    },
    techStack: [
      { name: 'React', icon: '⚛️', color: 'border-cyan-500/30 text-cyan-400' },
      { name: 'TypeScript', icon: 'TS', color: 'border-blue-500/30 text-blue-400' },
      { name: 'Vercel', icon: '▲', color: 'border-neutral-400/30 text-neutral-200' },
    ],
    liveUrl: 'https://wealthynames.vercel.app/#blog',
  },
];

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sync scroll on wheel / drag
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.clientWidth;
    const newIdx = Math.round(scrollLeft / itemWidth);
    if (newIdx !== currentIndex && newIdx >= 0 && newIdx < projectsDeckData.length) {
      setCurrentIndex(newIdx);
    }
  };

  // Convert vertical mouse wheel into smooth horizontal scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        // Prevent default body scrolling while hovering inside the deck container
        const isAtStart = container.scrollLeft === 0 && e.deltaY < 0;
        const isAtEnd =
          container.scrollLeft + container.clientWidth >= container.scrollWidth - 5 &&
          e.deltaY > 0;

        if (!isAtStart && !isAtEnd) {
          e.preventDefault();
          container.scrollBy({
            left: e.deltaY * 1.5,
            behavior: 'auto',
          });
        }
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, []);

  const scrollToProject = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const itemWidth = container.clientWidth;
    container.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : projectsDeckData.length - 1;
    scrollToProject(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = currentIndex < projectsDeckData.length - 1 ? currentIndex + 1 : 0;
    scrollToProject(nextIdx);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-[#050608] text-white scroll-mt-24 selection:bg-teal-500/30"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-teal-500/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Deck Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch space-y-8 lg:space-y-12 lg:sticky lg:top-28">
            
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#2dd4bf] font-mono text-xs tracking-widest uppercase font-bold">
                <span className="w-2 h-2 rounded-full bg-[#2dd4bf] inline-block animate-pulse" />
                <span>SYSTEM LOGS</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-serif font-black tracking-tight text-white leading-none">
                PROJECT <br />
                DECK
              </h2>
            </div>

            {/* Project List / Tabs */}
            <div className="space-y-2 py-2">
              {projectsDeckData.map((project, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => scrollToProject(idx)}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-mono text-xs tracking-wider transition-all duration-300 text-left ${
                      isActive
                        ? 'bg-[#12161f] text-white font-bold border border-neutral-700/60 shadow-[0_0_20px_rgba(45,212,191,0.08)]'
                        : 'text-neutral-500 hover:text-neutral-300 hover:bg-[#0c0e14]/60'
                    }`}
                  >
                    <span className={isActive ? 'text-[#2dd4bf]' : 'text-neutral-600'}>
                      {project.number}
                    </span>
                    <span className="truncate">{project.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-10 h-10 rounded-xl bg-[#0e1015] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-10 h-10 rounded-xl bg-[#0e1015] border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <a
                href="https://github.com/vishalsukhwal33"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e1015] border border-neutral-800 text-xs font-semibold text-neutral-300 hover:text-white hover:border-neutral-600 transition-all hover:scale-105"
              >
                <span>View Archives</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Horizontal Scroll Container (Snap Carousel) */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="lg:col-span-8 w-full flex flex-row overflow-x-auto snap-x snap-mandatory scrollbar-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {projectsDeckData.map((project) => (
              <div
                key={project.id}
                className="w-full shrink-0 snap-center px-1"
              >
                <div className="bg-[#0b0d10]/95 backdrop-blur-2xl border border-neutral-800/80 rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-500 hover:border-neutral-700">
                  
                  {/* Viewport Mockup Area */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#07080b] group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center opacity-85 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-black/40" />

                    {/* Top Tag Badge */}
                    <div className="absolute top-5 right-5">
                      <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/60 text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-bold shadow-lg">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="p-6 sm:p-8 md:p-10 space-y-6">
                    
                    {/* Title & Metrics Row */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-800/80 pb-5">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>

                      {/* Metrics */}
                      <div className="flex items-center gap-6">
                        <div className="text-left sm:text-right">
                          <div className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider uppercase">
                            {project.metrics.label1}
                          </div>
                          <div className="text-sm font-mono font-bold text-neutral-200">
                            {project.metrics.value1}
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider uppercase">
                            {project.metrics.label2}
                          </div>
                          <div className="text-sm font-mono font-bold text-neutral-200">
                            {project.metrics.value2}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tech Badges & Live CTA Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      
                      {/* Tech Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.techStack.map((tech) => (
                          <div
                            key={tech.name}
                            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#12141a]/90 border text-xs font-semibold ${tech.color}`}
                          >
                            <span>{tech.icon}</span>
                            <span>{tech.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Live Demo Action */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      >
                        <span>Live Demo</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>

                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal Integration */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

Projects.displayName = 'Projects';
export default Projects;
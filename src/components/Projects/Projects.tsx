import React, { useState, useRef, useEffect } from 'react';

interface DeckProject {
  id: string;
  number: string;
  name: string;
  badge: string;
  title: string;
  description: string;
  accentBg: string;
  previewIcon: string;
  previewSubtitle: string;
  metrics: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
  techStack: { name: string; icon: string; color: string }[];
  liveUrl: string;
  githubUrl?: string;
  challenge?: string;
  solution?: string;
  result?: string;
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
    accentBg: 'from-teal-950/60 via-[#07090e] to-black',
    previewIcon: '🚀',
    previewSubtitle: 'Next-Gen Community Ecosystem',
    metrics: {
      label1: 'PERFORMANCE',
      value1: '99',
      label2: 'UPTIME',
      value2: '99.9%',
    },
    techStack: [
      { name: 'React', icon: '⚛️', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20' },
      { name: 'TypeScript', icon: 'TS', color: 'border-blue-500/30 text-blue-400 bg-blue-950/20' },
      { name: 'MongoDB', icon: '🍃', color: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20' },
      { name: 'Tailwind', icon: '🌊', color: 'border-teal-500/30 text-teal-400 bg-teal-950/20' },
    ],
    liveUrl: 'https://wealthynames.vercel.app/#blog',
    challenge: 'Handling complex relational data flow while maintaining sub-100ms render speeds across dynamic user sessions.',
    solution: 'Implemented optimized caching layers, modular component architecture, and indexed MongoDB queries.',
    result: 'Reduced initial page load latency by 45% and scaled user interactions seamlessly.',
  },
  {
    id: 'lakshpath',
    number: '02',
    name: 'LAKSHPATH GLOBAL',
    badge: 'VISA PLATFORM',
    title: 'Lakshpath Global',
    description:
      'High-performance static architecture engineered for international scalability. Zero-JS content loads ensure accessibility in low-bandwidth immigration regions.',
    accentBg: 'from-amber-950/50 via-[#07090e] to-black',
    previewIcon: '🌍',
    previewSubtitle: 'Zero-JS Fast Static Engine',
    metrics: {
      label1: 'LIGHTHOUSE',
      value1: '100',
      label2: 'SEO',
      value2: 'Top 1%',
    },
    techStack: [
      { name: 'Astro', icon: '🚀', color: 'border-orange-500/30 text-orange-400 bg-orange-950/20' },
      { name: 'Svelte', icon: '🔥', color: 'border-red-500/30 text-red-400 bg-red-950/20' },
      { name: 'Tailwind', icon: '🌊', color: 'border-teal-500/30 text-teal-400 bg-teal-950/20' },
    ],
    liveUrl: '#',
    challenge: 'Target audience frequently browses from weak network infrastructure where heavy JS bundles fail to load.',
    solution: 'Designed zero-JS static islands using modern asset pipelines for instant global delivery.',
    result: 'Achieved flawless 100/100 Google Lighthouse scores across Performance, Accessibility, and SEO.',
  },
  {
    id: 'ai-career',
    number: '03',
    name: 'AI CAREER MENTOR',
    badge: 'AI / LLM AGENT',
    title: 'AI Career Mentor',
    description:
      'Autonomous intelligent guidance workflow powered by Hugging Face models and interactive Streamlit UI, providing instant roadmap generation and automated resume critiques.',
    accentBg: 'from-rose-950/50 via-[#07090e] to-black',
    previewIcon: '🤖',
    previewSubtitle: 'LLM Inference & Roadmap AI',
    metrics: {
      label1: 'LATENCY',
      value1: '<1.2s',
      label2: 'ACCURACY',
      value2: '96%',
    },
    techStack: [
      { name: 'Python', icon: '🐍', color: 'border-yellow-500/30 text-yellow-400 bg-yellow-950/20' },
      { name: 'Streamlit', icon: '👑', color: 'border-rose-500/30 text-rose-400 bg-rose-950/20' },
      { name: 'HuggingFace', icon: '🤗', color: 'border-amber-500/30 text-amber-400 bg-amber-950/20' },
    ],
    liveUrl: '#',
    challenge: 'Formatting raw unstructured resume text and matching it against dynamic industry skill graphs.',
    solution: 'Engineered specialized few-shot prompt pipelines coupled with Hugging Face inference APIs.',
    result: 'Generates tailored technical roadmaps and actionable resume feedback in under 1.5 seconds.',
  },
  {
    id: 'spam-detect',
    number: '04',
    name: 'SMS SPAM DETECTOR',
    badge: 'ML PIPELINE',
    title: 'SMS Spam Detection Pipeline',
    description:
      'Real-time NLP classification model trained with Naive Bayes algorithms and deployed via RESTful Flask API endpoints for high-throughput message verification.',
    accentBg: 'from-blue-950/50 via-[#07090e] to-black',
    previewIcon: '🛡️',
    previewSubtitle: 'Scikit-Learn NLP Engine',
    metrics: {
      label1: 'PRECISION',
      value1: '98.4%',
      label2: 'RESPONSE',
      value2: '12ms',
    },
    techStack: [
      { name: 'Python', icon: '🐍', color: 'border-yellow-500/30 text-yellow-400 bg-yellow-950/20' },
      { name: 'Scikit-Learn', icon: '⚙️', color: 'border-orange-500/30 text-orange-400 bg-orange-950/20' },
      { name: 'Flask', icon: '🧪', color: 'border-neutral-500/30 text-neutral-300 bg-neutral-900' },
    ],
    liveUrl: '#',
    challenge: 'Mitigating false-positive classifications on transactional notification templates.',
    solution: 'Trained a Multinomial Naive Bayes classifier with TF-IDF vectorization and custom n-gram tokenization.',
    result: 'Attained 98.4% precision with sub-15 millisecond API inference turnaround.',
  },
  {
    id: 'wealthy-names',
    number: '05',
    name: 'WEALTHY NAMES',
    badge: 'LIVE WEB APP',
    title: 'Wealthy Names Web',
    description:
      'Modern responsive web application built with React and TypeScript, fully optimized for fast loading and deployed seamlessly on Vercel edge networks.',
    accentBg: 'from-purple-950/50 via-[#07090e] to-black',
    previewIcon: '⚡',
    previewSubtitle: 'React + Edge Deployed',
    metrics: {
      label1: 'PERF SCORE',
      value1: '99',
      label2: 'SEO',
      value2: '100',
    },
    techStack: [
      { name: 'React', icon: '⚛️', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20' },
      { name: 'TypeScript', icon: 'TS', color: 'border-blue-500/30 text-blue-400 bg-blue-950/20' },
      { name: 'Vercel', icon: '▲', color: 'border-neutral-400/30 text-neutral-200 bg-neutral-900' },
    ],
    liveUrl: 'https://wealthynames.vercel.app/#blog',
    challenge: 'Building an ultra-responsive, mobile-first design with smooth animation triggers.',
    solution: 'Utilized React state hooks alongside Tailwind JIT compilation and Vercel edge caching.',
    result: 'Zero render lag across mobile viewports and instant asset hydration.',
  },
];

export const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const [modalProject, setModalProject] = useState<DeckProject | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const currentIndexRef = useRef<number>(0);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  // Global Wheel Scroll Lock & Transition
  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      if (!sectionRef.current || isTransitioningRef.current || modalProject) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isInViewport = rect.top <= 120 && rect.bottom >= windowHeight - 120;

      if (!isInViewport) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;
      const cur = currentIndexRef.current;
      const maxIndex = projectsDeckData.length - 1;

      if (isScrollingDown && cur < maxIndex) {
        e.preventDefault();
        isTransitioningRef.current = true;
        setDirection('down');
        setCurrentIndex(cur + 1);
        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 500);
      } else if (isScrollingUp && cur > 0) {
        e.preventDefault();
        isTransitioningRef.current = true;
        setDirection('up');
        setCurrentIndex(cur - 1);
        setTimeout(() => {
          isTransitioningRef.current = false;
        }, 500);
      }
    };

    window.addEventListener('wheel', handleGlobalWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleGlobalWheel);
  }, [modalProject]);

  const handlePrev = () => {
    setDirection('up');
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projectsDeckData.length - 1));
  };

  const handleNext = () => {
    setDirection('down');
    setCurrentIndex((prev) => (prev < projectsDeckData.length - 1 ? prev + 1 : 0));
  };

  const activeProject = projectsDeckData[currentIndex];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#050608] text-white scroll-mt-20 selection:bg-teal-500/30 flex items-center justify-center overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-[550px] h-[550px] bg-teal-500/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-purple-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Deck Navigation */}
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch space-y-8 lg:space-y-10">
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

            {/* Tabs List */}
            <div className="space-y-2 py-2">
              {projectsDeckData.map((project, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 'down' : 'up');
                      setCurrentIndex(idx);
                    }}
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

          {/* RIGHT COLUMN: Static Card Viewport with Inner Layer Transitions */}
          <div className="lg:col-span-8 w-full bg-[#0b0d10]/95 backdrop-blur-2xl border border-neutral-800/80 rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-neutral-700">
            
            {/* 1. Static Visual Image/Banner Frame (Never moves up or leaves container) */}
            <div 
              onClick={() => setModalProject(activeProject)}
              className="relative w-full h-[220px] sm:h-[260px] overflow-hidden bg-[#07090e] cursor-pointer group"
            >
              {/* Inner animated visual layer */}
              <div 
                key={`img-${activeProject.id}`}
                className={`w-full h-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${activeProject.accentBg} transition-all duration-500 ease-out`}
                style={{
                  animation: `${direction === 'down' ? 'slideFromBottom' : 'slideFromTop'} 0.45s ease-out forwards`
                }}
              >
                <div className="absolute w-72 h-72 rounded-full bg-white/[0.04] blur-3xl pointer-events-none" />
                <div className="relative z-10 text-center space-y-2 p-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-110">
                    {activeProject.previewIcon}
                  </div>
                  <p className="text-sm font-mono font-bold text-white tracking-wider uppercase">
                    {activeProject.title}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {activeProject.previewSubtitle}
                  </p>
                </div>
              </div>

              {/* Bottom Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-transparent to-black/20 pointer-events-none" />

              {/* Top Tag Badge */}
              <div className="absolute top-5 right-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-neutral-700/80 text-[10px] font-mono uppercase tracking-widest text-neutral-300 font-bold shadow-lg">
                  {activeProject.badge}
                </span>
              </div>
            </div>

            {/* 2. Inner Content Body (Animated smoothly in place) */}
            <div 
              key={`content-${activeProject.id}`}
              className="p-6 sm:p-8 md:p-10 space-y-6 transition-all duration-500 ease-out"
              style={{
                animation: `${direction === 'down' ? 'fadeInUp' : 'fadeInDown'} 0.45s ease-out forwards`
              }}
            >
              {/* Header Title & Metrics */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-neutral-800/80 pb-5">
                <h3 
                  onClick={() => setModalProject(activeProject)}
                  className="text-2xl sm:text-3xl font-bold text-white tracking-tight cursor-pointer hover:text-teal-300 transition-colors"
                >
                  {activeProject.title}
                </h3>

                <div className="flex items-center gap-6">
                  <div className="text-left sm:text-right">
                    <div className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider uppercase">
                      {activeProject.metrics.label1}
                    </div>
                    <div className="text-sm font-mono font-bold text-neutral-200">
                      {activeProject.metrics.value1}
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider uppercase">
                      {activeProject.metrics.label2}
                    </div>
                    <div className="text-sm font-mono font-bold text-neutral-200">
                      {activeProject.metrics.value2}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-400 text-sm sm:text-[15px] leading-relaxed font-normal min-h-[48px]">
                {activeProject.description}
              </p>

              {/* Tech Badges & CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex flex-wrap items-center gap-2">
                  {activeProject.techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold ${tech.color}`}
                    >
                      <span>{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setModalProject(activeProject)}
                    className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 text-xs font-semibold text-neutral-300 hover:text-white hover:border-neutral-500 transition-all hover:scale-105"
                  >
                    Details
                  </button>

                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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

        </div>
      </div>

      {/* Embedded CSS Keyframes for In-Place Smooth Slide & Fade */}
      <style>{`
        @keyframes slideFromBottom {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes slideFromTop {
          from { opacity: 0; transform: translateY(-18px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            onClick={() => setModalProject(null)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
          />
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0b0d10] border border-neutral-800 rounded-[28px] p-6 sm:p-8 z-10 text-white space-y-6 shadow-2xl">
            <button
              onClick={() => setModalProject(null)}
              className="absolute top-5 right-5 p-2 bg-neutral-800 rounded-full text-neutral-300 hover:text-white"
            >
              ✕
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold">{modalProject.title}</h2>
            <p className="text-neutral-400 text-sm leading-relaxed">{modalProject.description}</p>
            {modalProject.challenge && (
              <div className="space-y-3 bg-[#12141a]/60 p-4 rounded-xl border border-neutral-800">
                <div className="text-xs font-mono font-bold text-rose-400">CHALLENGE: {modalProject.challenge}</div>
                <div className="text-xs font-mono font-bold text-cyan-400">SOLUTION: {modalProject.solution}</div>
                <div className="text-xs font-mono font-bold text-emerald-400">RESULT: {modalProject.result}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

Projects.displayName = 'Projects';
export default Projects;
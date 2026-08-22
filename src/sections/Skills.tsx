import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import FlipSection from '../components/FlipSection';
import { Terminal, Cpu, Database, Wrench, Sparkles } from 'lucide-react';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
  };

  // Structured enterprise skill categories
  const skillGroups = [
    {
      title: 'AI & Machine Learning',
      icon: <Cpu size={20} className="text-sky-400" />,
      desc: 'Predictive intelligence, statistical models, & data pipelines',
      badge: 'Core Focus',
      items: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Flask API', 'TensorFlow Basics', 'Model Evaluation', 'Feature Engineering']
    },
    {
      title: 'Full-Stack Web Engineering',
      icon: <Terminal size={20} className="text-sky-400" />,
      desc: 'Type-safe client architectures & responsive full-stack platforms',
      badge: 'Production Ready',
      items: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Node.js', 'HTML5 / CSS3', 'Tailwind CSS', 'REST APIs', 'Vite']
    },
    {
      title: 'Core CS & Data Storage',
      icon: <Database size={20} className="text-sky-400" />,
      desc: 'Algorithms, algorithmic complexity, & schema architecture',
      badge: 'Strong Foundation',
      items: ['Data Structures & Algorithms', '100+ Problems Solved', 'MongoDB (NoSQL)', 'MySQL (RDBMS)', 'Object-Oriented Design', 'DBMS & Indexing']
    },
    {
      title: 'Workflow & Developer Tools',
      icon: <Wrench size={20} className="text-sky-400" />,
      desc: 'Version control, deployment pipelines, & engineering tooling',
      badge: 'Productivity',
      items: ['Git & GitHub', 'Vercel Deployment', 'Postman', 'VS Code', 'Jupyter Notebook', 'Chrome DevTools', 'Linux CLI', 'Prompt Engineering']
    }
  ];

  return (
    <FlipSection>
      <section
        id="skills"
        className="section-padding relative overflow-hidden bg-slate-950 text-slate-100 py-24 sm:py-32"
      >
        {/* Soft Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.5) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-16"
          >
            {/* Centered Section Header */}
            <div className="space-y-4 max-w-3xl mx-auto text-center">
              <motion.div variants={item} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-sky-400 text-xs font-bold tracking-widest uppercase shadow-2xs">
                <Sparkles size={13} className="text-sky-400" />
                Technical Competencies
              </motion.div>

              <motion.h2 variants={item} className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Skills & <span className="gradient-text-sky">Technical Stack</span>
              </motion.h2>

              <motion.p variants={item} className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
                A balanced combination of foundational computer science principles, modern full-stack development, and predictive machine learning models.
              </motion.p>
            </div>

            {/* 4-Pillar Centered Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {skillGroups.map((group) => (
                <motion.div
                  key={group.title}
                  variants={item}
                  className="p-8 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800/80 hover:border-sky-500/40 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform flex-shrink-0">
                          {group.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white tracking-tight">{group.title}</h3>
                          <p className="text-xs text-slate-400 font-medium leading-relaxed">{group.desc}</p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-800 text-sky-300 border border-slate-700 flex-shrink-0">
                        {group.badge}
                      </span>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          data-cursor
                          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800/70 border border-slate-700/80 hover:bg-sky-950 hover:border-sky-500 hover:text-sky-300 transition-all cursor-default shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>
    </FlipSection>
  );
}
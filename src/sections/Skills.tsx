import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import FlipSection from '../components/FlipSection';
import { Sparkles } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
  };

  const skillGroups = [
    {
      category: 'Artificial Intelligence & Machine Learning',
      skills: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Flask API', 'TensorFlow', 'Model Tuning', 'Feature Engineering']
    },
    {
      category: 'Full-Stack Web Engineering',
      skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Node.js', 'Tailwind CSS', 'HTML5 / CSS3', 'REST APIs', 'Vite']
    },
    {
      category: 'Core Computer Science & Databases',
      skills: ['Data Structures & Algorithms', 'MongoDB (NoSQL)', 'MySQL (RDBMS)', 'Object-Oriented Design', 'Database Indexing', 'System Architecture']
    },
    {
      category: 'Developer Tooling & Workflow',
      skills: ['Git & GitHub', 'Vercel Deployments', 'Postman', 'Linux CLI', 'Jupyter Notebook', 'Prompt Engineering']
    }
  ];

  return (
    <FlipSection>
      <section
        id="skills"
        className="relative overflow-hidden bg-[#030712] text-slate-100 py-24 sm:py-32 border-b border-white/5"
      >
        <div ref={ref} className="max-w-5xl mx-auto px-6 sm:px-12 w-full relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-16"
          >
            {/* Section Header */}
            <div className="space-y-4 text-left">
              <motion.div variants={item} className="inline-flex items-center gap-2 text-sky-400 text-xs font-bold tracking-widest uppercase">
                <Sparkles size={13} className="text-sky-400" />
                Technical Competencies
              </motion.div>

              <motion.h2 variants={item} className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Stack</span>
              </motion.h2>

              <motion.p variants={item} className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                A rigorous toolkit spanning machine learning workflows, type-safe full-stack web architectures, and foundational computer science principles.
              </motion.p>
            </div>

            {/* Clean Structured List (No Boxes, No Overlap) */}
            <div className="space-y-12">
              {skillGroups.map((group, idx) => (
                <motion.div variants={item} key={idx} className="space-y-4">
                  <h3 className="text-sm font-bold tracking-widest uppercase text-sky-400 border-b border-white/10 pb-2">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-3 pt-1">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 bg-slate-900/80 border border-slate-800/80 hover:border-sky-500/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
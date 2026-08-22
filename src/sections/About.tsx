import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { MapPin, GraduationCap, Star, Code2, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { personal, education } from '../data/portfolioData';
import FlipSection from '../components/FlipSection';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const stats = [
  { value: '9.1', label: 'CGPA Score', suffix: '/10', desc: 'MCA Academic Excellence' },
  { value: '100+', label: 'DSA Solved', suffix: '', desc: 'LeetCode & GeeksForGeeks' },
  { value: '3+', label: 'Flagship Apps', suffix: '', desc: 'Full-Stack & ML Systems' },
  { value: '1', label: 'Internship', suffix: '', desc: 'Kvanta Labs Full-Stack' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item: Variants = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <FlipSection>
      <section
        id="about"
        className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white py-24 sm:py-32"
      >
        {/* Subtle Ambient Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.4) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-8 w-full relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-20"
          >
            {/* Centered Header Section */}
            <div className="space-y-6 max-w-4xl mx-auto text-center">
              <motion.div 
                variants={item} 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/80 border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase shadow-sm mx-auto"
              >
                <Sparkles size={14} className="text-sky-600" />
                About Vishal Sukhwal
              </motion.div>

              <motion.h2
                variants={item}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight"
              >
                Architecting modern software with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                  precision & intelligence
                </span>
              </motion.h2>

              <motion.p 
                variants={item} 
                className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto"
              >
                Bridging rigorous computer science foundations, full-stack web engineering, and predictive machine learning models to deliver fast, reliable, and high-impact applications.
              </motion.p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
              
              {/* Left Column: Bio & Education */}
              <div className="space-y-6 flex flex-col">
                {/* Bio Card */}
                <motion.div 
                  variants={item} 
                  className="flex-1 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100">
                    <div className="p-2 rounded-lg bg-sky-100">
                      <Terminal size={18} className="text-sky-600" />
                    </div>
                    <span className="text-sky-600 font-bold text-xs uppercase tracking-wider">Background & Philosophy</span>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                      {personal.about}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      I focus on clean component architectures in React/TypeScript, efficient schema design in MongoDB and SQL, and crafting production-grade machine learning pipelines with Python and Scikit-Learn.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row gap-3 text-xs font-semibold text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-sky-600 flex-shrink-0" />
                        <span>{personal.location}</span>
                      </div>
                      <span className="hidden sm:inline text-slate-300">•</span>
                      <span className="text-sky-600 font-bold">Open for Full-Time Roles</span>
                    </div>
                  </div>
                </motion.div>

                {/* Education Card */}
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    variants={item}
                    className="p-7 rounded-2xl bg-gradient-to-br from-sky-50/80 to-white border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                        <GraduationCap size={26} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                          <h4 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
                            {edu.degree}
                          </h4>
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-sky-100 text-sky-700 border border-sky-200 flex-shrink-0 whitespace-nowrap">
                            <Star size={12} className="fill-sky-600 text-sky-600" />
                            CGPA {edu.cgpa}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-700 mb-1">{edu.institution}</p>
                        <p className="text-xs text-slate-500 font-medium">
                          {edu.location} • {edu.year}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Stats & Mindset */}
              <div className="space-y-6 flex flex-col">
                
                {/* 2x2 Stats Grid */}
                <div className="grid grid-cols-2 gap-5 flex-1">
                  {stats.map((s, idx) => (
                    <motion.div
                      key={s.label}
                      variants={item}
                      className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-sky-300 transition-all group flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-slate-500">{s.label}</span>
                        <ArrowUpRight size={14} className="text-slate-300 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                      </div>
                      <div className="mb-3">
                        <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 leading-none">
                          {s.value}
                          {s.suffix && <span className="text-lg font-bold text-sky-600 ml-1">{s.suffix}</span>}
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight h-8 flex items-start">
                        {s.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Engineering Mindset Banner */}
                <motion.div 
                  variants={item} 
                  className="p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                    <div className="p-2 rounded-lg bg-sky-500/20">
                      <Code2 size={18} className="text-sky-400" />
                    </div>
                    <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Engineering Mindset</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Committed to type-safe code, scalable component systems, optimized algorithmic efficiency, and writing clean, maintainable documentation for production excellence.
                  </p>
                </motion.div>

              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </FlipSection>
  );
}
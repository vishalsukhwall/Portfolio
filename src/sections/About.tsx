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
        className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/40 to-white py-24 sm:py-32 flex items-center justify-center"
      >
        {/* Subtle Ambient Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.4) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-5xl mx-auto px-6 md:px-8 w-full relative z-10 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-16 flex flex-col items-center"
          >
            {/* Centered Header Section */}
            <div className="space-y-4 max-w-3xl mx-auto text-center">
              <motion.div 
                variants={item} 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase shadow-xs"
              >
                <Sparkles size={13} className="text-sky-600" />
                About Vishal Sukhwal
              </motion.div>

              <motion.h2
                variants={item}
                className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
              >
                Architecting modern software with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500">
                  precision & intelligence
                </span>
              </motion.h2>

              <motion.p 
                variants={item} 
                className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
              >
                Bridging computer science foundations, full-stack web engineering, and predictive machine learning models to deliver reliable, high-impact applications.
              </motion.p>
            </div>

            {/* Main Content Grid — Centered & Balanced */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full text-left">
              
              {/* Left Column: Bio & Education */}
              <div className="space-y-6 flex flex-col">
                {/* Bio Card */}
                <motion.div 
                  variants={item} 
                  className="flex-1 p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                    <div className="p-2 rounded-lg bg-sky-100">
                      <Terminal size={16} className="text-sky-600" />
                    </div>
                    <span className="text-sky-600 font-bold text-xs uppercase tracking-wider">Background & Philosophy</span>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                      {personal.about}
                    </p>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Focused on clean component architectures in React/TypeScript, efficient schema design in MongoDB and SQL, and crafting production-grade machine learning pipelines with Python and Scikit-Learn.
                    </p>

                    <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-sky-600 flex-shrink-0" />
                        <span>{personal.location}</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <span className="text-sky-600 font-bold">Open for Full-Time Roles</span>
                    </div>
                  </div>
                </motion.div>

                {/* Education Card */}
                {education.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    variants={item}
                    className="p-6 rounded-2xl bg-gradient-to-br from-sky-50/70 to-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                        <GraduationCap size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-1.5">
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                            {edu.degree}
                          </h4>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-100 text-sky-700 border border-sky-200 flex-shrink-0 w-fit">
                            <Star size={11} className="fill-sky-600 text-sky-600" />
                            CGPA {edu.cgpa}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-slate-700 mb-0.5">{edu.institution}</p>
                        <p className="text-[11px] text-slate-500 font-medium">
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
                  {stats.map((s) => (
                    <motion.div
                      key={s.label}
                      variants={item}
                      className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all group flex flex-col justify-between"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-[10px] font-bold tracking-wider uppercase text-slate-400">{s.label}</span>
                        <ArrowUpRight size={13} className="text-slate-300 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
                      </div>
                      <div className="mb-2">
                        <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-500 leading-none">
                          {s.value}
                          {s.suffix && <span className="text-base font-bold text-sky-600 ml-0.5">{s.suffix}</span>}
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium leading-tight">
                        {s.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Engineering Mindset Banner */}
                <motion.div 
                  variants={item} 
                  className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-800">
                    <div className="p-1.5 rounded-lg bg-sky-500/20">
                      <Code2 size={16} className="text-sky-400" />
                    </div>
                    <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Engineering Mindset</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Committed to type-safe code, scalable component systems, optimized algorithmic efficiency, and writing clean documentation for production excellence.
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
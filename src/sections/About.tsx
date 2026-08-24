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
        className="section-padding relative overflow-hidden bg-white text-black py-28 sm:py-36 flex flex-col items-center justify-center min-h-screen"
      >
        {/* Soft Ambient Radial Glow (Centered) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex flex-col items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-20 w-full max-w-6xl mx-auto"
          >
            {/* Centered Header Section with generous spacing */}
            <div className="space-y-6 max-w-3xl mx-auto text-center flex flex-col items-center">
              <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase shadow-xs">
                <Sparkles size={13} className="text-sky-500" />
                About Vishal Sukhwal
              </motion.div>

              <motion.h2
                variants={item}
                className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight"
              >
                Architecting modern software with{' '}
                <span className="text-sky-600">
                  precision & intelligence.
                </span>
              </motion.h2>

              <motion.p variants={item} className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
                Bridging rigorous computer science foundations, full-stack web engineering, and predictive machine learning models to deliver fast, reliable, and high-impact applications.
              </motion.p>
            </div>

            {/* 2-Column Balanced Enterprise Grid with increased vertical rhythm and gaps */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch w-full">
              
              {/* Left Column: Bio Narrative & Education (Span 6) */}
              <motion.div variants={item} className="lg:col-span-6 flex flex-col justify-between space-y-8">
                <div className="p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl space-y-6">
                  <div className="flex items-center gap-2.5 text-sky-600 font-bold text-xs uppercase tracking-wider">
                    <Terminal size={16} />
                    <span>Background & Philosophy</span>
                  </div>
                  
                  <p className="text-black text-sm sm:text-base leading-relaxed font-normal">
                    {personal.about}
                  </p>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                    I focus on clean component architectures in React/TypeScript, efficient schema design in MongoDB and SQL, and crafting production-grade machine learning pipelines with Python and Scikit-Learn.
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-700 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-black">
                      <MapPin size={14} className="text-sky-600" />
                      <span>{personal.location}</span>
                    </div>
                    <span className="text-slate-300">•</span>
                    <span className="text-sky-600 font-bold">Open for Full-Time Roles</span>
                  </div>
                </div>

                {/* Education Card */}
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex items-start gap-5 hover:border-sky-400 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <GraduationCap size={26} />
                    </div>
                    <div className="space-y-2 w-full min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-black text-sm sm:text-base truncate">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 flex-shrink-0">
                          <Star size={12} className="fill-sky-500 text-sky-500" />
                          CGPA {edu.cgpa}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-700">{edu.institution}</p>
                      <p className="text-xs text-slate-500 font-medium">
                        {edu.location} • {edu.year}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Right Column: Key Stats & Mindset (Span 6) */}
              <motion.div variants={item} className="lg:col-span-6 flex flex-col justify-between space-y-8">
                
                {/* 2x2 Stats Grid with wider spacing */}
                <div className="grid grid-cols-2 gap-6 flex-1">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-8 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col justify-between hover:border-sky-400 hover:shadow-2xl transition-all group"
                    >
                      <div className="flex items-center justify-between text-slate-500 mb-4">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-600">{s.label}</span>
                        <ArrowUpRight size={16} className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <div className="my-3">
                        <div className="text-3xl sm:text-4xl font-black text-sky-600 tracking-tight leading-none">
                          {s.value}
                          <span className="text-lg font-bold text-sky-500 ml-0.5">{s.suffix}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Engineering Mindset Banner Card */}
                <div className="p-8 rounded-3xl bg-white/90 border border-slate-200 shadow-xl space-y-3">
                  <div className="flex items-center gap-2 text-sky-600 text-xs font-bold tracking-widest uppercase">
                    <Code2 size={16} />
                    <span>Engineering Mindset</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    Committed to type-safe code, scalable component systems, optimized algorithmic efficiency, and writing clean, maintainable documentation.
                  </p>
                </div>

              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </FlipSection>
  );
}
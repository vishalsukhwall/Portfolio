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
        className="section-padding relative overflow-hidden bg-white text-black py-24 sm:py-32"
      >
        {/* Soft Ambient Radial Glow (Light Mode) */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.2) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-16"
          >
            {/* Centered Header Section */}
            <div className="space-y-4 max-w-3xl mx-auto text-center">
              <motion.div variants={item} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase shadow-2xs">
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

              <motion.p variants={item} className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                Bridging rigorous computer science foundations, full-stack web engineering, and predictive machine learning models to deliver fast, reliable, and high-impact applications.
              </motion.p>
            </div>

            {/* 2-Column Balanced Enterprise Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
              
              {/* Left Column: Bio Narrative & Education (Span 6) */}
              <motion.div variants={item} className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="p-8 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl space-y-5">
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

                  <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-1 text-black">
                      <MapPin size={14} className="text-sky-600" />
                      <span>{personal.location}</span>
                    </div>
                    <span className="text-slate-400">•</span>
                    <span className="text-sky-600 font-bold">Open for Full-Time Roles</span>
                  </div>
                </div>

                {/* Education Card */}
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex items-start gap-4 hover:border-sky-400 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <GraduationCap size={24} />
                    </div>
                    <div className="space-y-1 w-full min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-black text-sm sm:text-base truncate">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200 flex-shrink-0">
                          <Star size={11} className="fill-sky-500 text-sky-500" />
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
              <motion.div variants={item} className="lg:col-span-6 flex flex-col justify-between space-y-6">
                
                {/* 2x2 Stats Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 flex-1">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl flex flex-col justify-between hover:border-sky-400 hover:shadow-2xl transition-all group"
                    >
                      <div className="flex items-center justify-between text-slate-500">
                        <span className="text-[11px] font-bold tracking-wider uppercase text-slate-600">{s.label}</span>
                        <ArrowUpRight size={15} className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </div>
                      <div className="my-2.5">
                        <div className="text-3xl sm:text-4xl font-black text-sky-600 tracking-tight leading-none">
                          {s.value}
                          <span className="text-lg font-bold text-sky-500 ml-0.5">{s.suffix}</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium leading-tight">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Engineering Mindset Banner Card */}
                <div className="p-6 rounded-2xl bg-white/90 border border-slate-200 shadow-xl space-y-2">
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
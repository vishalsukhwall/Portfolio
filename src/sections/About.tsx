import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Code2, Cpu, Database, Zap, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { personal, education } from '../data/portfolioData';
import FlipSection from '../components/FlipSection';

// Premium easing for smooth, professional animations
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Core technical pillars
const strengths = [
  {
    icon: Cpu,
    title: 'AI & Machine Learning',
    description: 'Building predictive models and intelligent systems that scale with production data.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    description: 'Crafting robust, performant web applications with modern React and TypeScript.',
  },
  {
    icon: Database,
    title: 'Data & Algorithms',
    description: 'Strong foundation in DSA, system design, and computational complexity.',
  },
  {
    icon: Zap,
    title: 'Performance & UX',
    description: 'Optimizing systems for speed, efficiency, and delightful user experiences.',
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  // Container animation with staggered children
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Individual item fade-up animation
  const itemVariant: Variants = {
    hidden: { y: 16, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: EASE },
    },
  };

  // Card-specific animation
  const cardVariant: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <FlipSection>
      <section
        id="about"
        className="relative w-full bg-[#030712] text-slate-100 py-20 sm:py-28 overflow-hidden border-b border-white/5"
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl opacity-20 -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl opacity-10 -z-10"></div>
        </div>

        {/* Main content container */}
        <div ref={sectionRef} className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-16 sm:space-y-20"
          >
            {/* ============ SECTION HEADER ============ */}
            <div className="space-y-5 max-w-3xl">
              {/* Badge */}
              <motion.div variants={itemVariant}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                  <span className="text-[11px] font-semibold tracking-wide text-sky-400 uppercase">
                    Professional Profile
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariant}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.2] text-white"
              >
                <span>Crafting intelligent systems with technical excellence</span>
              </motion.h1>

              {/* Subheading / Bio */}
              <motion.p
                variants={itemVariant}
                className="text-base sm:text-lg text-slate-400 leading-relaxed font-light"
              >
                {personal.about}
              </motion.p>
            </div>

            {/* ============ STRENGTHS GRID ============ */}
            <motion.div variants={itemVariant} className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {strengths.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={cardVariant}
                      className="group relative p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/90 transition-all duration-300 ease-out backdrop-blur-sm flex flex-col space-y-4"
                    >
                      {/* Icon Container */}
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:shadow-sm transition-all duration-300">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      {/* Text Content */}
                      <div className="space-y-1.5 flex-1 flex flex-col">
                        <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-sky-400/40 transition-all duration-300"></div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ============ ACADEMIC BACKGROUND ============ */}
            <motion.div variants={itemVariant} className="w-full">
              <div className="space-y-6">
                {/* Section label */}
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                  <span className="text-[11px] font-semibold tracking-wide text-slate-400 uppercase">
                    Academic Foundation
                  </span>
                </div>

                {/* Education cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {education.map((edu) => (
                    <motion.div
                      key={edu.degree}
                      variants={cardVariant}
                      className="group relative p-7 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/90 transition-all duration-300 ease-out backdrop-blur-sm flex flex-col justify-between space-y-6"
                    >
                      {/* Top Section: Icon + Degree Info */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0 group-hover:shadow-sm transition-all duration-300">
                            <GraduationCap size={24} strokeWidth={1.6} />
                          </div>

                          {/* Degree & Institution */}
                          <div className="space-y-1 flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                              {edu.degree}
                            </h3>
                            <p className="text-xs sm:text-sm font-medium text-slate-400">
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        {/* Location & Year */}
                        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                          <div className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-sky-400 flex-shrink-0" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-sky-400 flex-shrink-0" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-white/5 group-hover:bg-white/10 transition-colors duration-300"></div>

                      {/* Bottom Section: Performance */}
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                          Performance
                        </span>
                        <div className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 group-hover:shadow-xs transition-all duration-300">
                          <span className="text-xs font-bold text-sky-400">
                            {edu.cgpa}/10
                          </span>
                        </div>
                      </div>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-sky-400/40 transition-all duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </FlipSection>
  );
}
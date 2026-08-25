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

  // Card-specific animation (slightly more pronounced)
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
        className="relative w-full bg-white text-slate-900 py-28 sm:py-36 lg:py-44 overflow-hidden border-b border-slate-100/50"
      >
        {/* Subtle background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-50/20 rounded-full blur-3xl opacity-30 -z-10"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-50/10 rounded-full blur-3xl opacity-20 -z-10"></div>
        </div>

        {/* Main content container */}
        <div ref={sectionRef} className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-20 sm:space-y-28 lg:space-y-32"
          >
            {/* ============ SECTION HEADER ============ */}
            <div className="space-y-6 sm:space-y-10 max-w-4xl">
              {/* Badge */}
              <motion.div variants={itemVariant}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50/60 border border-sky-200/80 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
                  <span className="text-xs font-semibold tracking-wide text-sky-700 uppercase">
                    Professional Profile
                  </span>
                </div>
              </motion.div>

              {/* Hero Headline */}
              <motion.h1
                variants={itemVariant}
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] text-slate-900"
              >
                <span className="block">Crafting</span>
                <span className="block">
                  <span className="relative">
                    intelligent systems
                    <span className="absolute bottom-1 left-0 right-0 h-1 bg-sky-500/20 -z-10 blur-sm"></span>
                  </span>
                </span>
                <span className="block">with technical excellence</span>
              </motion.h1>

              {/* Subheading / Bio */}
              <motion.p
                variants={itemVariant}
                className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl font-light"
              >
                {personal.about}
              </motion.p>
            </div>

            {/* ============ STRENGTHS GRID ============ */}
            <motion.div variants={itemVariant} className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {strengths.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={cardVariant}
                      className="group relative p-8 sm:p-9 lg:p-10 rounded-2xl bg-slate-50/40 border border-slate-200/60 hover:border-sky-300/80 hover:bg-white/60 transition-all duration-500 ease-out backdrop-blur-sm flex flex-col space-y-5"
                    >
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-xl bg-white border border-sky-200/50 flex items-center justify-center text-sky-600 group-hover:shadow-md transition-all duration-500">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>

                      {/* Text Content */}
                      <div className="space-y-2 flex-1 flex flex-col">
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-sky-500/30 transition-all duration-500"></div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ============ ACADEMIC BACKGROUND ============ */}
            <motion.div variants={itemVariant} className="w-full">
              <div className="space-y-8">
                {/* Section label */}
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
                  <span className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Academic Foundation
                  </span>
                </div>

                {/* Education cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {education.map((edu) => (
                    <motion.div
                      key={edu.degree}
                      variants={cardVariant}
                      className="group relative p-9 sm:p-10 lg:p-12 rounded-2xl bg-slate-50/40 border border-slate-200/60 hover:border-sky-300/80 hover:bg-white/60 transition-all duration-500 ease-out backdrop-blur-sm flex flex-col justify-between space-y-8"
                    >
                      {/* Top Section: Icon + Degree Info */}
                      <div className="space-y-6">
                        <div className="flex items-start gap-5 sm:gap-6">
                          {/* Icon */}
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-sky-200/50 flex items-center justify-center text-sky-600 flex-shrink-0 group-hover:shadow-md transition-all duration-500">
                            <GraduationCap size={32} strokeWidth={1.6} />
                          </div>

                          {/* Degree & Institution */}
                          <div className="space-y-1 flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                              {edu.degree}
                            </h3>
                            <p className="text-sm sm:text-base font-medium text-slate-600">
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        {/* Location & Year */}
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-sky-600 flex-shrink-0" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-sky-600 flex-shrink-0" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-slate-200/50 group-hover:bg-slate-300/30 transition-colors duration-500"></div>

                      {/* Bottom Section: Performance */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                          Performance
                        </span>
                        <div className="px-3.5 py-2 rounded-lg bg-sky-50/80 border border-sky-200/60 group-hover:shadow-md transition-all duration-500">
                          <span className="text-sm font-bold text-sky-700">
                            {edu.cgpa}/10
                          </span>
                        </div>
                      </div>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-sky-500/30 transition-all duration-500"></div>
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
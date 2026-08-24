import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Code2, Cpu, Database, Award, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { personal, education } from '../data/portfolioData';
import FlipSection from '../components/FlipSection';

const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

const highlights = [
  { icon: Cpu, label: 'AI/ML Systems', desc: 'Designing intelligent pipelines that scale with data' },
  { icon: Code2, label: 'Full-Stack Engineering', desc: 'Building robust applications with React & TypeScript' },
  { icon: Database, label: 'Data Structures', desc: 'Strong foundation in DSA, algorithms & optimization' },
  { icon: Award, label: 'Technical Excellence', desc: 'Consistent high performance and continuous learning' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: EASE } },
  };

  const cardVariant: Variants = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <FlipSection>
      <section
        id="about"
        className="relative overflow-hidden bg-white text-slate-900 py-40 sm:py-48 lg:py-56 border-b border-slate-100"
      >
        <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-32 sm:space-y-40"
          >
            {/* ===== HERO SECTION: Profile Overview ===== */}
            <div className="space-y-8 max-w-4xl">
              <motion.div
                variants={item}
                className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-slate-500"
              >
                <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                <span>About This Developer</span>
              </motion.div>

              <motion.h1
                variants={item}
                className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[0.95] space-y-2"
              >
                <span className="block">Engineering</span>
                <span className="block">scalable solutions with</span>
                <span className="block">
                  <span className="text-sky-600">technical rigor.</span>
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl pt-4 font-normal"
              >
                {personal.about}
              </motion.p>
            </div>

            {/* ===== HIGHLIGHTS GRID: Core Technical Pillars ===== */}
            <motion.div
              variants={item}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {highlights.map((h, index) => {
                const IconComponent = h.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariant}
                    className="group p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:bg-white transition-all duration-300 flex flex-col space-y-5"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>

                    <div className="space-y-3 flex-1">
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                        {h.label}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ===== EDUCATION SECTION: Academic Foundation ===== */}
            <motion.div variants={item} className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                  Academic Credentials
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.degree}
                    variants={cardVariant}
                    className="group p-10 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:bg-white transition-all duration-300 flex flex-col justify-between space-y-8"
                  >
                    {/* Header with Icon & Info */}
                    <div className="space-y-5">
                      <div className="flex items-start gap-5">
                        <div className="w-16 h-16 rounded-xl bg-white border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                          <GraduationCap size={32} strokeWidth={1.3} />
                        </div>

                        <div className="space-y-2 flex-1">
                          <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl tracking-tight">
                            {edu.degree}
                          </h3>
                          <p className="text-base font-medium text-slate-700">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                            <MapPin size={16} className="text-sky-600 flex-shrink-0" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                            <Calendar size={16} className="text-sky-600 flex-shrink-0" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-slate-200"></div>

                    {/* Performance Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
                        CGPA
                      </span>
                      <div className="px-4 py-2 rounded-lg bg-sky-50 border border-sky-200 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                        <span className="text-sm font-bold text-sky-700">
                          {edu.cgpa} / 10
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Optional: Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-50/30 rounded-full blur-3xl -z-10 opacity-40"></div>
      </section>
    </FlipSection>
  );
}
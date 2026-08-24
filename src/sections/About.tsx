import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { MapPin, GraduationCap, Terminal } from 'lucide-react';
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
        <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-20"
          >
            {/* Centered Header Section */}
            <div className="space-y-6 max-w-3xl mx-auto text-center">
              <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase">
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

              <motion.p variants={item} className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                {personal.about}
              </motion.p>
            </div>

            {/* Clean 2-Column Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Background & Education */}
              <motion.div variants={item} className="lg:col-span-6 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sky-600 font-bold text-xs uppercase tracking-wider">
                    <Terminal size={16} />
                    <span>Background & Philosophy</span>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    I focus on clean component architectures in React/TypeScript, efficient schema design in MongoDB and SQL, and crafting production-grade machine learning pipelines with Python and Scikit-Learn.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 pt-2">
                    <MapPin size={14} className="text-sky-600" />
                    <span>{personal.location}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-sky-600 font-bold">Open for Full-Time Roles</span>
                  </div>
                </div>

                {/* Education Section */}
                <div className="space-y-4">
                  <div className="text-sky-600 font-bold text-xs uppercase tracking-wider">Education</div>
                  {education.map((edu) => (
                    <div
                      key={edu.degree}
                      className="p-6 rounded-2xl bg-sky-50/40 border border-sky-100 flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0 shadow-xs">
                        <GraduationCap size={22} />
                      </div>
                      <div className="space-y-1 w-full min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-bold text-black text-sm sm:text-base truncate">
                            {edu.degree}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white text-sky-700 border border-sky-200 flex-shrink-0">
                            CGPA {edu.cgpa}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-slate-700">{edu.institution}</p>
                        <p className="text-xs text-slate-500">{edu.location} • {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Key Stats Grid */}
              <motion.div variants={item} className="lg:col-span-6 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="p-6 rounded-2xl bg-sky-50/30 border border-sky-100 flex flex-col justify-between space-y-4"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{s.label}</span>
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-sky-600 tracking-tight leading-none">
                        {s.value}
                        <span className="text-base font-bold text-sky-500 ml-0.5">{s.suffix}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
    </FlipSection>
  );
}
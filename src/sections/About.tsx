import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';
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
    show: { transition: { staggerChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <FlipSection>
      <section
        id="about"
        className="relative overflow-hidden bg-white text-black py-24 sm:py-32 flex flex-col items-center justify-center"
      >
        <div ref={ref} className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-16 w-full text-center"
          >
            {/* Header Section */}
            <div className="space-y-4 max-w-2xl mx-auto flex flex-col items-center">
              <motion.span variants={item} className="text-sky-600 text-xs font-bold tracking-widest uppercase">
                About Me
              </motion.span>

              <motion.h2
                variants={item}
                className="text-3xl sm:text-5xl font-black text-black tracking-tight leading-tight"
              >
                Architecting software with{' '}
                <span className="text-sky-600">precision & intelligence.</span>
              </motion.h2>

              <motion.p variants={item} className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                {personal.about}
              </motion.p>

              <motion.div variants={item} className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 pt-2">
                <MapPin size={14} className="text-sky-600" />
                <span>{personal.location}</span>
                <span className="text-slate-300">•</span>
                <span className="text-sky-600">Open for Full-Time Roles</span>
              </motion.div>
            </div>

            {/* Clean Stats Grid (No chaotic cards) */}
            <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-slate-100">
              {stats.map((s) => (
                <div key={s.label} className="space-y-1 flex flex-col items-center text-center">
                  <div className="text-3xl sm:text-4xl font-black text-sky-600 tracking-tight">
                    {s.value}<span className="text-lg font-bold text-sky-500">{s.suffix}</span>
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-black">{s.label}</div>
                  <div className="text-[11px] text-slate-500">{s.desc}</div>
                </div>
              ))}
            </motion.div>

            {/* Education & Background Streamlined */}
            <motion.div variants={item} className="max-w-2xl mx-auto w-full text-left space-y-6">
              <h3 className="text-sm font-bold tracking-widest uppercase text-sky-600 text-center">Education</h3>
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-6 rounded-2xl bg-sky-50/50 border border-sky-100 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0 shadow-sm">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-sm sm:text-base">{edu.degree}</h4>
                      <p className="text-xs sm:text-sm text-slate-600">{edu.institution}</p>
                      <p className="text-xs text-slate-400">{edu.location} • {edu.year}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-sky-700 border border-sky-200 shadow-xs whitespace-nowrap">
                    CGPA {edu.cgpa}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>
    </FlipSection>
  );
}
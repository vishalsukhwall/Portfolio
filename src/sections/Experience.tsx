import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, CalendarDays, MapPin, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { experience } from '../data/portfolioData';
import FlipSection from '../components/FlipSection';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <FlipSection>
      <section
        id="experience"
        className="relative overflow-hidden bg-[#030712] text-slate-100 py-20 sm:py-28 border-b border-white/5"
      >
        {/* Soft Ambient Dark Light Decoration */}
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-10 -z-10"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 w-full relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl text-left mb-14 sm:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-[11px] font-bold tracking-widest uppercase">
              <Sparkles size={13} className="text-sky-400" />
              Career Journey
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2]">
              Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Industry Roles.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed pt-1">
              Demonstrated track record of delivering responsive frontend architectures, designing scalable database structures, and collaborating across engineering workflows.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto md:mx-0 md:ml-4">
            {/* Continuous Vertical Line */}
            <div
              className="absolute top-4 bottom-4 w-[2px] rounded-full"
              style={{
                left: '1.25rem',
                background: 'linear-gradient(to bottom, #38bdf8 0%, rgba(56, 189, 248, 0.3) 50%, rgba(56, 189, 248, 0.05) 100%)',
              }}
            />

            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-12 sm:pl-16 pb-12 last:pb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Glowing Timeline Marker */}
                <div
                  className="absolute top-3 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-sky-400 bg-slate-950 flex items-center justify-center shadow-sm shadow-sky-500/20"
                  style={{ left: '1.25rem' }}
                >
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                </div>

                {/* Experience Card */}
                <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900/90 transition-all duration-300 space-y-6 backdrop-blur-sm">
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-white/5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0 shadow-xs">
                        <Briefcase size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sky-400 font-bold text-sm mt-1">
                          <Building2 size={15} strokeWidth={2} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-400">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                        <CalendarDays size={14} className="text-sky-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800">
                        <MapPin size={14} className="text-sky-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3 pt-1">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                        <CheckCircle2
                          size={16}
                          className="text-sky-400 flex-shrink-0 mt-1"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mr-2">Technologies:</span>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-bold text-sky-300 bg-slate-950 border border-slate-800 uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </FlipSection>
  );
}
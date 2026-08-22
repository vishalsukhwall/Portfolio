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
        className="section-padding relative overflow-hidden bg-slate-950 text-slate-100 py-24 sm:py-32"
      >
        {/* Ambient Radial Glow */}
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.5) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-sky-400 text-xs font-bold tracking-widest uppercase shadow-2xs">
              <Sparkles size={13} className="text-sky-400" />
              Career Journey
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Work Experience & <span className="gradient-text-sky">Industry Roles</span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
              Demonstrated track record of delivering responsive frontend architectures, designing scalable database structures, and collaborating across engineering workflows.
            </p>
          </motion.div>

          {/* Centered Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Continuous Vertical Line */}
            <div
              className="absolute top-4 bottom-4 w-0.5 rounded-full"
              style={{
                left: '1.25rem',
                background: 'linear-gradient(to bottom, #0284c7 0%, #0369a1 50%, rgba(2, 132, 199, 0.1) 100%)',
              }}
            />

            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                className="relative pl-12 sm:pl-16 pb-12 last:pb-0"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                {/* Glowing Timeline Marker */}
                <div
                  className="absolute top-3 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-sky-400 bg-slate-950 flex items-center justify-center shadow-md shadow-sky-500/30"
                  style={{ left: '1.25rem' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                </div>

                {/* Experience Card */}
                <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800/80 shadow-xl hover:border-sky-500/40 hover:shadow-2xl transition-all duration-300 space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 flex-shrink-0">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm mt-0.5">
                          <Building2 size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-400">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700">
                        <CalendarDays size={13} className="text-sky-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/70 border border-slate-700">
                        <MapPin size={13} className="text-sky-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3.5">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                        <CheckCircle2
                          size={17}
                          className="text-sky-400 flex-shrink-0 mt-0.5"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">Technologies:</span>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg text-xs font-semibold text-sky-300 bg-sky-950/80 border border-sky-800/60 shadow-2xs"
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

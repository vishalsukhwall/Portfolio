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
        className="section-padding relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-sky-100/40 to-sky-50/70 py-24 sm:py-32"
      >
        {/* Ambient Radial Glow */}
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(186,230,253,0.7) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-300 text-sky-700 text-xs font-bold tracking-widest uppercase shadow-2xs">
              <Sparkles size={13} className="text-sky-600" />
              Career Journey
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Work Experience & <span className="gradient-text-sky">Industry Roles</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
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
                background: 'linear-gradient(to bottom, #0284c7 0%, #38bdf8 50%, rgba(2, 132, 199, 0.2) 100%)',
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
                  className="absolute top-3 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-sky-600 bg-white flex items-center justify-center shadow-md shadow-sky-500/20"
                  style={{ left: '1.25rem' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-600 animate-pulse" />
                </div>

                {/* Experience Card */}
                <div className="p-8 sm:p-10 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 flex-shrink-0">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sky-700 font-semibold text-sm mt-0.5">
                          <Building2 size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
                        <CalendarDays size={13} className="text-sky-600" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200">
                        <MapPin size={13} className="text-sky-600" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3.5">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm leading-relaxed">
                        <CheckCircle2
                          size={17}
                          className="text-sky-600 flex-shrink-0 mt-0.5"
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
                        className="px-3 py-1 rounded-lg text-xs font-semibold text-sky-800 bg-sky-50 border border-sky-200/80 shadow-2xs"
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

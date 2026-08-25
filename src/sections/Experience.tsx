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
        className="relative overflow-hidden bg-white text-slate-900 py-28 sm:py-36 border-b border-slate-100"
      >
        {/* Soft Ambient Light Decoration */}
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-3xl opacity-20 -z-10"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl text-left mb-16 sm:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase shadow-2xs">
              <Sparkles size={13} className="text-sky-500" />
              Career Journey
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Work Experience & <span className="text-sky-600">Industry Roles.</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed pt-2">
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
                background: 'linear-gradient(to bottom, #0284c7 0%, #38bdf8 50%, rgba(14, 165, 233, 0.1) 100%)',
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
                  className="absolute top-3 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-sky-500 bg-white flex items-center justify-center shadow-sm shadow-sky-200"
                  style={{ left: '1.25rem' }}
                >
                  <div className="w-2 h-2 rounded-full bg-sky-500" />
                </div>

                {/* Experience Card */}
                <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-sky-300 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-6">
                  
                  {/* Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200/60">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-sky-200/80 flex items-center justify-center text-sky-600 flex-shrink-0 shadow-sm">
                        <Briefcase size={24} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sky-600 font-bold text-sm sm:text-base mt-1">
                          <Building2 size={16} strokeWidth={2} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-600">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                        <CalendarDays size={14} className="text-sky-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                        <MapPin size={14} className="text-sky-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-4 pt-2">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2
                          size={18}
                          className="text-sky-500 flex-shrink-0 mt-1"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="pt-4 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mr-2">Technologies:</span>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md text-xs font-bold text-sky-700 bg-sky-50 border border-sky-100 uppercase tracking-wide"
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

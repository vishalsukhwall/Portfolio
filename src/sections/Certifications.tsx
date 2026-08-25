import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Sparkles, CheckCircle } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import FlipSection from '../components/FlipSection';

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <FlipSection>
      <section
        id="certifications"
        className="relative overflow-hidden bg-white text-slate-900 py-28 sm:py-36 border-b border-slate-100"
      >
        {/* Soft Ambient Light Decoration */}
        <div
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none blur-3xl opacity-20 -z-10"
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
              Verified Credentials
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Licenses & <span className="text-sky-600">Certifications.</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed pt-2">
              Continuous commitment to advancing knowledge in autonomous AI agents, practical hackathons, and algorithmic problem solving.
            </p>
          </motion.div>

          {/* 3-Column Centered Responsive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-sm hover:border-sky-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-sky-200/80 flex items-center justify-center text-sky-600 group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm">
                      {cert.icon || <Award size={28} strokeWidth={1.8} />}
                    </div>
                    <span className="px-3 py-1.5 rounded-lg text-[11px] font-extrabold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-100">
                      {cert.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-sky-600 font-bold mt-2">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <CheckCircle size={16} className="text-sky-500" strokeWidth={2.5} />
                  <span>Verified Competency</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </FlipSection>
  );
}

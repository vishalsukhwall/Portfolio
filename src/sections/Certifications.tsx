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
        className="section-padding relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-sky-100/40 to-sky-50/70 py-24 sm:py-32"
      >
        {/* Soft Ambient Glow */}
        <div
          className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none blur-3xl opacity-30"
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
              Verified Credentials
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Licenses & <span className="gradient-text-sky">Certifications</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Continuous commitment to advancing knowledge in autonomous AI agents, practical hackathons, and algorithmic problem solving.
            </p>
          </motion.div>

          {/* 3-Column Centered Responsive Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="p-8 rounded-2xl bg-white/85 backdrop-blur-md border border-sky-200/80 shadow-sm hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between group text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-2xl group-hover:scale-105 transition-transform flex-shrink-0">
                      {cert.icon || <Award size={22} className="text-sky-600" />}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      {cert.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-sky-700 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-sky-600 font-semibold mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <CheckCircle size={14} className="text-sky-600" />
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

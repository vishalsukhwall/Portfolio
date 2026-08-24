import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import FlipSection from '../components/FlipSection';
import { Layers, Cpu, Server, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Skills() {
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

  // Senior-tier structured architecture categories
  const skillCategories = [
    {
      title: 'Artificial Intelligence & ML Pipelines',
      icon: <Cpu size={22} className="text-sky-600" />,
      description: 'Designing data-driven predictive workflows, feature engineering, and inference APIs.',
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'Scikit-Learn', level: 'Production' },
        { name: 'Pandas & NumPy', level: 'Advanced' },
        { name: 'Flask / REST APIs', level: 'Production' },
        { name: 'TensorFlow Basics', level: 'Experienced' },
        { name: 'Model Evaluation & Tuning', level: 'Advanced' }
      ]
    },
    {
      title: 'Full-Stack Web Architecture',
      icon: <Layers size={22} className="text-sky-600" />,
      description: 'Building type-safe, highly responsive web applications with modern component patterns.',
      skills: [
        { name: 'React.js / Next.js ecosystem', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'JavaScript (ES6+)', level: 'Expert' },
        { name: 'Tailwind CSS / UI Systems', level: 'Expert' },
        { name: 'HTML5 / Semantic DOM', level: 'Expert' },
        { name: 'State Management & Hooks', level: 'Advanced' }
      ]
    },
    {
      title: 'Backend, Databases & Core CS',
      icon: <Server size={22} className="text-sky-600" />,
      description: 'Optimizing algorithmic complexity, schema design, and secure server-side logic.',
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Advanced' },
        { name: 'Node.js / Express', level: 'Experienced' },
        { name: 'MongoDB (NoSQL)', level: 'Production' },
        { name: 'MySQL / RDBMS', level: 'Production' },
        { name: 'Object-Oriented Design', level: 'Advanced' },
        { name: 'API Design & Optimization', level: 'Advanced' }
      ]
    },
    {
      title: 'DevOps, Tooling & Engineering Workflow',
      icon: <Wrench size={22} className="text-sky-600" />,
      description: 'Leveraging modern version control, continuous deployment, and development tooling.',
      skills: [
        { name: 'Git & GitHub Workflows', level: 'Advanced' },
        { name: 'Vercel / Cloud Deployments', level: 'Production' },
        { name: 'Postman & API Testing', level: 'Advanced' },
        { name: 'Linux CLI & Scripting', level: 'Experienced' },
        { name: 'Jupyter & Dev Environments', level: 'Advanced' },
        { name: 'Prompt Engineering & AI Tools', level: 'Expert' }
      ]
    }
  ];

  return (
    <FlipSection>
      <section
        id="skills"
        className="relative overflow-hidden bg-white text-slate-900 py-28 sm:py-36 border-b border-slate-100"
      >
        {/* Soft Ambient Light Decoration */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-3xl opacity-20 -z-10"
          style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)' }}
        />

        <div ref={ref} className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-20"
          >
            {/* Section Header */}
            <div className="space-y-4 max-w-3xl text-left">
              <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold tracking-widest uppercase shadow-2xs">
                <Sparkles size={13} className="text-sky-500" />
                Technical Architecture & Expertise
              </motion.div>

              <motion.h2 variants={item} className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Core engineering stack & <span className="text-sky-600">domain competencies.</span>
              </motion.h2>

              <motion.p variants={item} className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed pt-2">
                A production-tested toolkit bridging rigorous computer science foundations, full-stack web engineering, and scalable machine learning workflows.
              </motion.p>
            </div>

            {/* Architecture Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {skillCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-sky-300 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group space-y-8"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-sky-200/80 flex items-center justify-center text-sky-600 shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{category.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed pt-1">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills List with Proficiency Tags */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/60">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/60 hover:border-sky-200 transition-all shadow-2xs group/item"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <CheckCircle2 size={15} className="text-sky-500 flex-shrink-0" />
                          <span className="text-xs sm:text-sm font-bold text-slate-800 truncate">{skill.name}</span>
                        </div>
                        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-100 flex-shrink-0 uppercase tracking-wider">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>
    </FlipSection>
  );
}
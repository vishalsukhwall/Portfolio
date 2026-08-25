import React from 'react';
import { Terminal, Layout, Cpu, Database } from 'lucide-react';
import FlipSection from '../components/FlipSection';

export default function Skills() {
  const categories = [
    { 
      title: "Languages", 
      items: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'], 
      icon: <Terminal size={20} /> 
    },
    { 
      title: "Web Technologies", 
      items: ['React.js', 'Node.js', 'Flask', 'HTML5', 'Tailwind CSS', 'Vite', 'REST APIs'], 
      icon: <Layout size={20} /> 
    },
    { 
      title: "Core Concepts", 
      items: ['Data Structures & Algorithms', 'Object-Oriented Design', 'DBMS & Indexing', 'System Architecture'], 
      icon: <Cpu size={20} /> 
    },
    { 
      title: "Tools & Databases", 
      items: ['MongoDB', 'MySQL', 'Git & GitHub', 'Vercel', 'Postman', 'Linux CLI'], 
      icon: <Database size={20} /> 
    },
  ];

  return (
    <FlipSection>
      <section id="skills" className="py-32 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto bg-[#030712] text-slate-100 border-b border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-sky-400 text-xs tracking-[0.25em] uppercase font-semibold block mb-3">Capabilities</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">TECHNICAL EXPERTISE</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/60 border border-slate-800 p-10 rounded-xl text-center flex flex-col items-center hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-slate-950 border border-slate-800 text-sky-400 mb-8">
                {cat.icon}
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-8">{cat.title}</h3>
              <ul className="space-y-3 w-full">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-400 py-1.5 border-b border-white/5 last:border-none font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </FlipSection>
  );
} 
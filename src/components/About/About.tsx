import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-[#050608] text-white scroll-mt-24 selection:bg-teal-500/30">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-28 left-10 w-[500px] h-[500px] bg-teal-500/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-80 right-10 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-24 relative z-10">
        
        {/* TOP SPLIT: Left Narrative & Right Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 space-y-7">
            
            {/* Tag */}
            <div className="flex items-center gap-2.5 text-teal-400 font-mono text-[11px] tracking-widest uppercase font-bold">
              <span className="w-6 h-[1.5px] bg-teal-400 inline-block" />
              <span>01. ABOUT ME</span>
            </div>

            {/* Main Catchy Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-white">
              Bridging the gap between{' '}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Creative Code & AI.
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-neutral-400 text-[14px] sm:text-[15px] leading-relaxed font-normal">
              <p>
                Hello! I'm <strong className="text-white font-medium">Vishal</strong>. My journey started with a simple curiosity: <span className="text-neutral-200 italic font-serif">"How can I make this computer do the work for me?"</span>
              </p>
              <p>
                Today, I operate at the intersection of <strong className="text-white font-semibold">Full Stack Engineering</strong> and <strong className="text-white font-semibold">Autonomous Intelligence</strong>. I don't just build pretty websites; I engineer scalable digital ecosystems that work while you sleep.
              </p>
              <p>
                While others copy-paste data, my clients relax as my <strong className="text-teal-400 font-semibold">n8n workflows</strong> and <strong className="text-teal-400 font-semibold">AI Agents</strong> handle the heavy lifting automatically.
              </p>
              <p className="pt-2 text-neutral-300">
                My philosophy is simple:{' '}
                <span className="underline decoration-teal-400/80 decoration-2 underline-offset-4 font-bold text-white cursor-pointer hover:text-teal-300 transition-colors">
                  If it can be automated, it should be.
                </span>
              </p>
            </div>
          </div>

          {/* Right Column: 2x2 Metric Cards + Current Focus Box */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Stat 1 */}
              <div className="group relative bg-[#0b0d11]/90 backdrop-blur-xl border border-neutral-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-center transition-all duration-300 hover:border-teal-400/40 hover:bg-[#0e1117] hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:-translate-y-1 cursor-default">
                <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-2 group-hover:text-teal-300 transition-colors">
                  2+
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                  Years Experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="group relative bg-[#0b0d11]/90 backdrop-blur-xl border border-neutral-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-center transition-all duration-300 hover:border-cyan-400/40 hover:bg-[#0e1117] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 cursor-default">
                <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  10+
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                  Projects Delivered
                </span>
              </div>

              {/* Stat 3 */}
              <div className="group relative bg-[#0b0d11]/90 backdrop-blur-xl border border-neutral-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-center transition-all duration-300 hover:border-purple-400/40 hover:bg-[#0e1117] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1 cursor-default">
                <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                  500+
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                  Hours Automated
                </span>
              </div>

              {/* Stat 4 */}
              <div className="group relative bg-[#0b0d11]/90 backdrop-blur-xl border border-neutral-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-center transition-all duration-300 hover:border-emerald-400/40 hover:bg-[#0e1117] hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1 cursor-default">
                <span className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight mb-2 group-hover:text-emerald-300 transition-colors">
                  &lt;24h
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                  Response Time
                </span>
              </div>

            </div>

            {/* Current Focus Highlight Card */}
            <div className="group relative bg-[#0b0d11]/90 backdrop-blur-xl border border-neutral-800/80 rounded-2xl p-6 sm:p-7 flex items-stretch justify-between overflow-hidden transition-all duration-300 hover:border-teal-400/40 hover:shadow-[0_0_35px_rgba(20,184,166,0.12)] hover:-translate-y-0.5">
              
              <div className="space-y-2 pr-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)] animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-teal-400 uppercase tracking-widest">
                    Current Focus
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-neutral-300 leading-relaxed">
                  Building a multi-agent system for automated SaaS customer onboarding using Google ADK & Gemini AI.
                </p>
              </div>

              {/* Right Teal Accent Panel */}
              <div className="hidden sm:block w-20 bg-gradient-to-br from-teal-950/40 to-teal-900/20 border border-teal-500/20 rounded-xl shrink-0 group-hover:border-teal-500/40 transition-colors" />

            </div>

          </div>

        </div>

        {/* BOTTOM SECTION: 02. TECHNICAL ARSENAL + BENTO GRID */}
        <div className="space-y-8 pt-6">
          
          {/* Section 02 Exact 3-Line Heading */}
          <div className="flex flex-col items-start text-left w-full space-y-4">
            {/* Tag */}
            <div className="flex items-center gap-2.5 text-[#2dd4bf] font-mono text-xs tracking-widest uppercase font-bold">
              <span className="w-6 h-[1.5px] bg-[#2dd4bf] inline-block" />
              <span>02. TECHNICAL ARSENAL</span>
            </div>

            {/* Exact 3-Line Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.08] flex flex-col items-start text-left">
              <span className="text-white block font-extrabold">
                Full Stack Engineering
              </span>
              <span className="bg-gradient-to-r from-[#2dd4bf] via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent block font-extrabold">
                Meets Autonomous
              </span>
              <span className="bg-gradient-to-r from-[#818cf8] via-[#c084fc] to-[#e879f9] bg-clip-text text-transparent block font-extrabold">
                Intelligence<span className="text-[#e879f9]">.</span>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal leading-relaxed pt-1">
              A complete command of the digital stack. From low-level algorithms in C++ to high-level AI orchestration in Python.
            </p>
          </div>

          {/* Bento Grid Cards */}
          <div className="space-y-4 pt-2">
            
            {/* ROW 1: AI & Automation (Col 7) + CS Core (Col 5) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* 1. AI & Automation */}
              <div className="group lg:col-span-7 bg-[#0b0d10]/95 backdrop-blur-xl border border-neutral-800/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between hover:border-teal-500/30 transition-all duration-300 shadow-2xl">
                <div className="flex items-center gap-3.5 mb-7">
                  <div className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">AI & Automation</h3>
                    <p className="text-xs text-neutral-400">Agentic Workflows & LLMs</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  
                  {/* n8n */}
                  <div className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-[#12141a]/80 border border-neutral-800/70 hover:border-rose-500/50 hover:bg-[#161922] hover:shadow-[0_0_20px_rgba(244,63,94,0.2)] hover:scale-[1.03] transition-all duration-300 cursor-pointer group">
                    <svg className="w-7 h-7 mb-2.5 fill-none stroke-rose-400 stroke-2" viewBox="0 0 24 24">
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="7" r="3" />
                      <circle cx="18" cy="17" r="3" />
                      <path d="M8.7 10.7l6.6-2.4M8.7 13.3l6.6 2.4" />
                    </svg>
                    <span className="text-xs font-semibold text-neutral-200 group-hover:text-white">n8n</span>
                  </div>

                  {/* AI Agents */}
                  <div className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-[#12141a]/80 border border-neutral-800/70 hover:border-emerald-400/50 hover:bg-[#161922] hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:scale-[1.03] transition-all duration-300 cursor-pointer group">
                    <svg className="w-7 h-7 mb-2.5 fill-none stroke-emerald-400 stroke-2" viewBox="0 0 24 24">
                      <rect x="4" y="8" width="16" height="12" rx="3" />
                      <circle cx="9" cy="14" r="1.5" fill="#34d399" />
                      <circle cx="15" cy="14" r="1.5" fill="#34d399" />
                      <path d="M12 2v6M9 2h6" />
                    </svg>
                    <span className="text-xs font-semibold text-neutral-200 group-hover:text-white">AI Agents</span>
                  </div>

                  {/* Python */}
                  <div className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-[#12141a]/80 border border-neutral-800/70 hover:border-yellow-400/50 hover:bg-[#161922] hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:scale-[1.03] transition-all duration-300 cursor-pointer group">
                    <svg className="w-7 h-7 mb-2.5 fill-none" viewBox="0 0 24 24">
                      <path d="M11.9 1C8.2 1 8.5 2.6 8.5 2.6l.01 1.7h3.5v.5H5.4S3.1 4.5 3.1 8.3c0 3.7 2 3.6 2 3.6h1.2V10.2s-.1-2 2-2h3.4s1.9.1 1.9-1.8V2.8S13.6 1 11.9 1z" fill="#38bdf8" />
                      <circle cx="7" cy="3" r="0.7" fill="#fff" />
                      <path d="M12.1 23c3.7 0 3.4-1.6 3.4-1.6l-.01-1.7h-3.5v-.5h6.6s2.3.3 2.3-3.5c0-3.7-2-3.6-2-3.6h-1.2v1.7s.1 2-2 2h-3.4s-1.9-.1-1.9 1.8v3.6s0 1.8 1.7 1.8z" fill="#facc15" />
                      <circle cx="17" cy="21" r="0.7" fill="#fff" />
                    </svg>
                    <span className="text-xs font-semibold text-neutral-200 group-hover:text-white">Python</span>
                  </div>

                  {/* OpenAI */}
                  <div className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-[#12141a]/80 border border-neutral-800/70 hover:border-teal-400/50 hover:bg-[#161922] hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:scale-[1.03] transition-all duration-300 cursor-pointer group">
                    <svg className="w-7 h-7 mb-2.5 fill-none stroke-teal-300 stroke-[1.6]" viewBox="0 0 24 24">
                      <path d="M12 2a4 4 0 0 1 3.5 2.1l.5.9 2.5-.5a4 4 0 0 1 4.5 3.1 4 4 0 0 1-.9 3.8l-.7.7 1.7 1.9a4 4 0 0 1-.8 5.4 4 4 0 0 1-3.9.5l-1-.4-.6 2.4a4 4 0 0 1-4.7 2.9 4 4 0 0 1-3-2.6l-.2-1-2.4.6a4 4 0 0 1-4.7-2.9 4 4 0 0 1 .8-3.8l.8-.8-1.8-1.9a4 4 0 0 1 .8-5.4 4 4 0 0 1 3.9-.5l1 .4.6-2.4a4 4 0 0 1 4-2.4z" />
                    </svg>
                    <span className="text-xs font-semibold text-neutral-200 group-hover:text-white">OpenAI</span>
                  </div>

                  {/* LangChain */}
                  <div className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-[#12141a]/80 border border-neutral-800/70 hover:border-emerald-400/50 hover:bg-[#161922] hover:shadow-[0_0_20px_rgba(52,211,153,0.2)] hover:scale-[1.03] transition-all duration-300 cursor-pointer group">
                    <div className="w-8 h-8 mb-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M3.9 12c0-1.7 1.4-3.1 3.1-3.1h4V7H7c-2.8 0-5 2.2-5 5s2.2 5 5 5h4v-1.9H7c-1.7 0-3.1-1.4-3.1-3.1zm5.1 1h6v-2H9v2zm8-6h-4v1.9h4c1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1h-4V17h4c2.8 0 5-2.2 5-5s-2.2-5-5-5z" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-neutral-200 group-hover:text-white">LangChain</span>
                  </div>

                  {/* Flask */}
                  <div className="flex flex-col items-center justify-center py-5 px-3 rounded-2xl bg-[#12141a]/80 border border-neutral-800/70 hover:border-neutral-400/50 hover:bg-[#161922] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.03] transition-all duration-300 cursor-pointer group">
                    <svg className="w-7 h-7 mb-2.5 fill-none stroke-neutral-300 stroke-2" viewBox="0 0 24 24">
                      <path d="M10 2h4M12 2v7l5 9a2.5 2.5 0 0 1-2.2 3.7H9.2A2.5 2.5 0 0 1 7 18l5-9V2" />
                    </svg>
                    <span className="text-xs font-semibold text-neutral-200 group-hover:text-white">Flask</span>
                  </div>

                </div>
              </div>

              {/* 2. CS Core */}
              <div className="lg:col-span-5 bg-[#0b0d10]/95 backdrop-blur-xl border border-neutral-800/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 shadow-2xl">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">CS Core</h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { 
                      name: 'C', 
                      badge: (
                        <span className="w-7 h-7 rounded-full bg-neutral-800/90 text-neutral-300 flex items-center justify-center font-bold text-xs font-mono">
                          C
                        </span>
                      ),
                      glow: 'hover:border-neutral-400/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                    },
                    { 
                      name: 'C++', 
                      badge: (
                        <span className="w-7 h-7 rounded-full bg-blue-950/80 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-[11px] font-mono">
                          C++
                        </span>
                      ),
                      glow: 'hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                    },
                    { 
                      name: 'Java', 
                      badge: (
                        <span className="w-7 h-7 rounded-full bg-orange-950/80 text-orange-400 border border-orange-500/30 flex items-center justify-center text-xs">
                          ☕
                        </span>
                      ),
                      glow: 'hover:border-orange-400/50 hover:shadow-[0_0_15px_rgba(251,146,60,0.15)]'
                    },
                    { 
                      name: 'Spring', 
                      badge: (
                        <span className="w-7 h-7 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs">
                          🌱
                        </span>
                      ),
                      glow: 'hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]'
                    },
                  ].map((item) => (
                    <div 
                      key={item.name}
                      className={`flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-[#12141a]/80 border border-neutral-800/70 hover:bg-[#161922] transition-all duration-300 cursor-pointer ${item.glow}`}
                    >
                      {item.badge}
                      <span className="text-xs font-semibold text-neutral-200">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ROW 2: Frontend (Col 7) + Backend (Col 5) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              
              {/* 3. Frontend Ecosystem */}
              <div className="lg:col-span-7 bg-[#0b0d10]/95 backdrop-blur-xl border border-neutral-800/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300 shadow-2xl">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">Frontend Ecosystem</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { name: 'JavaScript', tag: 'JS', style: 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30', glow: 'hover:border-yellow-400/50 hover:shadow-[0_0_15px_rgba(250,204,21,0.2)]' },
                    { name: 'TypeScript', tag: 'TS', style: 'bg-blue-500/15 text-blue-400 border border-blue-500/30', glow: 'hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]' },
                    { name: 'React', tag: '⚛️', style: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30', glow: 'hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]' },
                    { name: 'Next.js', tag: '▲', style: 'bg-neutral-800 text-white border border-neutral-700', glow: 'hover:border-neutral-300/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]' },
                    { name: 'Astro', tag: '🚀', style: 'bg-orange-500/15 text-orange-400 border border-orange-500/30', glow: 'hover:border-orange-500/50 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]' },
                    { name: 'Svelte', tag: '🔥', style: 'bg-red-500/15 text-red-400 border border-red-500/30', glow: 'hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]' },
                    { name: 'Redux', tag: '🟣', style: 'bg-purple-500/15 text-purple-400 border border-purple-500/30', glow: 'hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(192,132,252,0.2)]' },
                    { name: 'Tailwind', tag: '🌊', style: 'bg-teal-500/15 text-teal-400 border border-teal-500/30', glow: 'hover:border-teal-400/50 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)]' },
                  ].map((item) => (
                    <div 
                      key={item.name}
                      className={`flex items-center gap-2.5 px-3.5 py-3 rounded-2xl bg-[#12141a]/80 border border-neutral-800/70 hover:bg-[#161922] transition-all duration-300 hover:scale-[1.03] cursor-pointer ${item.glow}`}
                    >
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.style}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs font-semibold text-neutral-200 truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Backend & Data */}
              <div className="lg:col-span-5 bg-[#0b0d10]/95 backdrop-blur-xl border border-neutral-800/80 rounded-[32px] p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 shadow-2xl">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">Backend & Data</h3>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { name: 'Node.js', icon: '🟢', glow: 'hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]' },
                    { name: 'Express', tag: 'ex', glow: 'hover:border-neutral-300/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]' },
                    { name: 'NestJS', icon: '🦁', glow: 'hover:border-rose-500/50 hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]' },
                    { name: 'PostgreSQL', icon: '🐘', glow: 'hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]' },
                    { name: 'MongoDB', icon: '🍃', glow: 'hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.2)]' },
                    { name: 'Redis', tag: 'R', glow: 'hover:border-red-500/50 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]' },
                  ].map((item) => (
                    <div 
                      key={item.name}
                      className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#12141a]/80 border border-neutral-800/70 hover:bg-[#161922] transition-all duration-300 hover:scale-[1.02] cursor-pointer ${item.glow}`}
                    >
                      {item.icon ? (
                        <span className="text-sm shrink-0">{item.icon}</span>
                      ) : (
                        <span className="text-xs font-mono font-bold px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-300">
                          {item.tag}
                        </span>
                      )}
                      <span className="text-xs font-semibold text-neutral-200 truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            

            {/* ROW 3: DevOps & Cloud */}
            <div className="bg-[#0b0d10]/95 backdrop-blur-xl border border-neutral-800/80 rounded-[24px] px-6 py-4 flex flex-wrap items-center justify-between gap-4 hover:border-orange-500/30 transition-all duration-300 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 text-sm shadow-[0_0_10px_rgba(249,115,22,0.15)]">
                  📦
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">DevOps & Cloud</h3>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  { name: 'Docker', tag: '🐳' },
                  { name: 'Git', tag: '🐙' },
                  { name: 'Linux', tag: '🐧' },
                  { name: 'Vercel', tag: '▲' },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12141a]/80 border border-neutral-800 text-xs font-semibold text-neutral-300 transition-all duration-300 hover:border-orange-400/50 hover:text-white hover:scale-105 cursor-pointer"
                  >
                    <span>{tool.tag}</span>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

About.displayName = 'About';
export default About;
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personal } from '../data/portfolioData';
import FlipSection from '../components/FlipSection';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Direct Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      highlight: true,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn Profile',
      value: 'linkedin.com/in/vishal-sukhwal',
      href: personal.linkedin,
      highlight: false,
    },
    {
      icon: GithubIcon,
      label: 'GitHub Portfolio',
      value: 'github.com/vishalsukhwall',
      href: personal.github,
      highlight: false,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personal.location,
      href: '#',
      highlight: false,
    },
  ];

  return (
    <FlipSection direction="bottom">
      <section
        id="contact"
        className="relative overflow-hidden bg-white text-slate-900 py-28 sm:py-36 border-b border-slate-100"
      >
        {/* Soft Ambient Light Decoration */}
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-3xl opacity-20 -z-10"
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
              Get In Touch
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Let's Build Something <span className="text-sky-600">Exceptional.</span>
            </h2>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed pt-2">
              Actively open for Software Engineer roles, Full-Stack positions, and AI/ML opportunities. Let's discuss how I can contribute to your team.
            </p>
          </motion.div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Channels (Span 5) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noreferrer"
                    data-cursor
                    className={`flex items-center justify-between p-6 rounded-3xl border transition-all duration-300 group text-left ${
                      info.highlight
                        ? 'bg-white border-sky-300 shadow-md hover:shadow-lg'
                        : 'bg-slate-50/70 border-slate-200/80 hover:border-sky-300 hover:bg-white hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-sky-200/80 text-sky-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                      <div className="min-w-0 space-y-0.5">
                        <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                          {info.label}
                        </p>
                        <p className="text-base font-bold text-slate-900 truncate group-hover:text-sky-600 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight size={20} className="text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-3" />
                  </a>
                );
              })}
            </motion.div>

            {/* Right Column: Contact Form (Span 7) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl text-left"
            >
              {status === 'success' ? (
                <div className="py-16 text-center space-y-5">
                  <div className="w-20 h-20 bg-sky-50 text-sky-600 rounded-full flex items-center justify-center mx-auto border border-sky-100 shadow-sm">
                    <CheckCircle2 size={40} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900">Message Delivered!</h3>
                  <p className="text-base text-slate-600 max-w-sm mx-auto font-medium">
                    Thank you for reaching out, Vishal Sukhwal will respond to your inquiry within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-8 py-3.5 rounded-full bg-slate-100 border border-slate-200 hover:bg-slate-200 text-sm font-bold text-slate-800 transition-all cursor-pointer shadow-2xs"
                    type="button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-2 text-sky-600 text-xs font-extrabold uppercase tracking-wider mb-2">
                    <MessageSquare size={16} strokeWidth={2.5} />
                    <span>Direct Inquiry Form</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Subject</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                      placeholder="Opportunity / Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Message</label>
                    <textarea 
                      rows={5} 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none transition-all resize-none placeholder:text-slate-400 placeholder:font-normal"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={status === 'sending'}
                      data-cursor
                      className="w-full py-4.5 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white font-black text-sm uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 cursor-pointer hover:scale-[1.01]"
                    >
                      {status === 'sending' ? (
                        <span className="animate-pulse">Sending Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send size={16} strokeWidth={2.5} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

          </div>

        </div>
      </section>
    </FlipSection>
  );
}
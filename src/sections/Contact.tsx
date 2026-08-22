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
        className="section-padding relative overflow-hidden bg-white py-24 sm:py-32"
      >
        <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          
          {/* Centered Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-700 text-xs font-bold tracking-widest uppercase shadow-2xs">
              <Sparkles size={13} className="text-sky-600" />
              Get In Touch
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Let's Build Something <span className="gradient-text-sky">Exceptional</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
              Actively open for Software Engineer roles, Full-Stack positions, and AI/ML opportunities. Let's discuss how I can contribute to your team.
            </p>
          </motion.div>

          {/* Symmetrically Centered Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Direct Channels (Span 5) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 space-y-4"
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
                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 group text-left ${
                      info.highlight
                        ? 'bg-gradient-to-r from-sky-50 to-white border-sky-300 shadow-sm hover:shadow-md'
                        : 'bg-white border-slate-200/90 hover:border-sky-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-11 h-11 rounded-xl bg-sky-100/80 text-sky-600 border border-sky-200/80 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {info.label}
                        </p>
                        <p className="text-sm font-bold text-slate-800 truncate group-hover:text-sky-600 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-slate-300 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-2" />
                  </a>
                );
              })}
            </motion.div>

            {/* Right Column: Contact Form (Span 7) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-xl shadow-sky-500/5 text-left"
            >
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto border border-sky-200">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Message Delivered!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out, Vishal Sukhwal will respond to your inquiry within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-all cursor-pointer"
                    type="button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-2">
                    <MessageSquare size={14} />
                    <span>Direct Inquiry Form</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Subject</label>
                    <input 
                      type="text" 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 focus:outline-none transition-all"
                      placeholder="Opportunity / Project Inquiry"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Message</label>
                    <textarea 
                      rows={4} 
                      required 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 focus:outline-none transition-all resize-none"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={status === 'sending'}
                      data-cursor
                      className="w-full py-4 bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-700 hover:to-cyan-600 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 cursor-pointer hover:scale-[1.01]"
                    >
                      {status === 'sending' ? (
                        <span className="animate-pulse">Sending Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit Message</span>
                          <Send size={14} />
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
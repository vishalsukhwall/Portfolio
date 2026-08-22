import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personal } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-100 pt-24 pb-12 border-t border-slate-900">
      {/* Floating Scroll to Top Pill / Button */}
      <div className="absolute left-1/2 -top-6 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          data-cursor
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl shadow-sky-500/20 bg-gradient-to-r from-sky-600 to-cyan-500 text-white hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black gradient-text-sky tracking-tight">
              {personal.name}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-400">
              MCA Graduate • Full-Stack Developer & AI/ML Enthusiast
            </p>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 hover:text-sky-400 transition-colors"
                  data-cursor
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: GithubIcon, href: personal.github, label: 'GitHub' },
              { icon: LinkedinIcon, href: personal.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:bg-sky-600 hover:text-white hover:border-sky-500 transition-all shadow-sm"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-900" />

        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} {personal.name}. Built with precision in React, TypeScript, Tailwind CSS & Three.js.</p>
          <p className="text-slate-400 font-semibold">Udaipur, Rajasthan, India</p>
        </div>

      </div>
    </footer>
  );
}
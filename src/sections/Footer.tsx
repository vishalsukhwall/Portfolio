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
    <footer className="relative bg-white text-slate-900 pt-28 pb-12">
      {/* Floating Scroll to Top Pill / Button */}
      <div className="absolute left-1/2 -top-7 -translate-x-1/2">
        <button
          onClick={scrollToTop}
          data-cursor
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 cursor-pointer shadow-xl shadow-sky-500/20 bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:scale-105 border-4 border-white"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full space-y-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {personal.name}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
              MCA Graduate • Full-Stack Developer & AI/ML
            </p>
          </div>

          {/* Nav Links */}
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-500 hover:text-sky-600 transition-colors"
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
                className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-sm"
              >
                <Icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-200" />

        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-slate-400">
          <p>© {new Date().getFullYear()} {personal.name}. Built with precision in React, TypeScript, Tailwind CSS & Three.js.</p>
          <p className="text-slate-500 uppercase tracking-wider">Udaipur, Rajasthan, India</p>
        </div>

      </div>
    </footer>
  );
}
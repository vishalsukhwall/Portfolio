import React from 'react';
import { socialLinks } from '@data/socialLinks';

const getIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'github':
      return (
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      );
    case 'linkedin':
      return (
        <>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </>
      );
    case 'instagram':
      return (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </>
      );
    case 'email':
      return (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </>
      );
    default:
      return null;
  }
};

// Platform-wise custom hover glow & borders
const getPlatformStyle = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'github':
      return 'hover:border-neutral-400 hover:text-white hover:shadow-[0_8px_25px_rgba(255,255,255,0.25)]';
    case 'linkedin':
      return 'hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_8px_25px_rgba(10,102,194,0.35)]';
    case 'instagram':
      return 'hover:border-pink-500 hover:text-pink-400 hover:shadow-[0_8px_25px_rgba(225,48,108,0.4)]';
    case 'email':
      return 'hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_8px_25px_rgba(0,212,255,0.35)]';
    default:
      return 'hover:border-accent hover:text-accent hover:shadow-[0_8px_25px_rgba(0,212,255,0.3)]';
  }
};

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4 flex-wrap items-center">
      {socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className={`relative group w-11 h-11 rounded-xl bg-neutral-900/80 backdrop-blur-md flex items-center justify-center text-neutral-400 border border-neutral-800 transition-all duration-300 transform-gpu hover:-translate-y-1.5 hover:scale-110 active:scale-95 ${getPlatformStyle(
            link.platform
          )}`}
        >
          {/* Subtle 3D Top Glare */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            {getIcon(link.icon || link.platform)}
          </svg>
        </a>
      ))}
    </div>
  );
};

SocialLinks.displayName = 'SocialLinks';
export default SocialLinks;
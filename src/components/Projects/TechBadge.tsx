import React from 'react';
import { cn } from '@utils/cn';

interface TechBadgeProps {
  name: string;
  className?: string;
}

// Brand icon & color mappings for modern visual pill badges
const techMeta: Record<string, { icon: string; style: string }> = {
  // Frontend
  react: { icon: '⚛️', style: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20' },
  'next.js': { icon: '▲', style: 'border-neutral-700 text-white bg-neutral-900' },
  nextjs: { icon: '▲', style: 'border-neutral-700 text-white bg-neutral-900' },
  typescript: { icon: 'TS', style: 'border-blue-500/30 text-blue-400 bg-blue-950/20' },
  javascript: { icon: 'JS', style: 'border-yellow-500/30 text-yellow-400 bg-yellow-950/20' },
  tailwind: { icon: '🌊', style: 'border-teal-500/30 text-teal-400 bg-teal-950/20' },
  tailwindcss: { icon: '🌊', style: 'border-teal-500/30 text-teal-400 bg-teal-950/20' },
  astro: { icon: '🚀', style: 'border-orange-500/30 text-orange-400 bg-orange-950/20' },
  svelte: { icon: '🔥', style: 'border-red-500/30 text-red-400 bg-red-950/20' },
  redux: { icon: '🟣', style: 'border-purple-500/30 text-purple-400 bg-purple-950/20' },

  // Backend & DB
  'node.js': { icon: '🟢', style: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20' },
  nodejs: { icon: '🟢', style: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20' },
  express: { icon: '⚡', style: 'border-neutral-700 text-neutral-300 bg-neutral-900' },
  nestjs: { icon: '🦁', style: 'border-rose-500/30 text-rose-400 bg-rose-950/20' },
  mongodb: { icon: '🍃', style: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20' },
  postgresql: { icon: '🐘', style: 'border-blue-400/30 text-blue-300 bg-blue-950/20' },
  redis: { icon: '🔴', style: 'border-red-500/30 text-red-400 bg-red-950/20' },

  // AI / ML & Python
  python: { icon: '🐍', style: 'border-yellow-500/30 text-yellow-400 bg-yellow-950/20' },
  flask: { icon: '🧪', style: 'border-neutral-600 text-neutral-300 bg-neutral-900' },
  streamlit: { icon: '👑', style: 'border-rose-500/30 text-rose-400 bg-rose-950/20' },
  huggingface: { icon: '🤗', style: 'border-amber-500/30 text-amber-400 bg-amber-950/20' },
  'scikit-learn': { icon: '⚙️', style: 'border-orange-500/30 text-orange-400 bg-orange-950/20' },
  openai: { icon: '🤖', style: 'border-teal-400/30 text-teal-300 bg-teal-950/20' },
  langchain: { icon: '🦜', style: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/20' },
  n8n: { icon: '🔀', style: 'border-rose-500/30 text-rose-400 bg-rose-950/20' },

  // DevOps & Cloud
  docker: { icon: '🐳', style: 'border-blue-500/30 text-blue-400 bg-blue-950/20' },
  git: { icon: '🐙', style: 'border-orange-500/30 text-orange-400 bg-orange-950/20' },
  linux: { icon: '🐧', style: 'border-neutral-600 text-neutral-300 bg-neutral-900' },
  vercel: { icon: '▲', style: 'border-neutral-700 text-neutral-200 bg-neutral-900' },
};

export const TechBadge: React.FC<TechBadgeProps> = ({ name, className }) => {
  const normalizedKey = name.toLowerCase().trim();
  const config = techMeta[normalizedKey] || {
    icon: '✦',
    style: 'border-neutral-800 text-neutral-300 bg-[#12141a]/90',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 select-none shadow-sm',
        config.style,
        className
      )}
    >
      <span className="text-[11px] shrink-0">{config.icon}</span>
      <span className="truncate">{name}</span>
    </span>
  );
};

TechBadge.displayName = 'TechBadge';
export default TechBadge;
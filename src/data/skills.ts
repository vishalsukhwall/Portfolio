export interface SkillItem {
  name: string;
  tag?: string;
  icon?: string;
  colorClass: string;
}

export interface SkillCategory {
  category: string;
  subtitle?: string;
  icon: string;
  accentColor: string;
  headerBadgeColor: string;
  skills: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: 'AI & Automation',
    subtitle: 'Agentic Workflows & LLMs',
    icon: '🤖',
    accentColor: 'teal',
    headerBadgeColor: 'bg-teal-500/10 border-teal-500/20 text-teal-400',
    skills: [
      { name: 'n8n', icon: '🔗', colorClass: 'text-rose-400' },
      { name: 'AI Agents', icon: '🤖', colorClass: 'text-emerald-400' },
      { name: 'Python', icon: '🐍', colorClass: 'text-yellow-400' },
      { name: 'OpenAI', icon: '✨', colorClass: 'text-teal-300' },
      { name: 'LangChain', icon: '🦜', colorClass: 'text-emerald-400' },
      { name: 'Flask', icon: '🌶️', colorClass: 'text-orange-400' },
    ]
  },
  {
    category: 'CS Core',
    subtitle: 'Data Structures & Architecture',
    icon: '💻',
    accentColor: 'cyan',
    headerBadgeColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    skills: [
      { name: 'C', tag: 'C', colorClass: 'text-neutral-300 bg-neutral-800' },
      { name: 'C++', tag: 'C++', colorClass: 'text-cyan-400 bg-cyan-950/50 border border-cyan-800/50' },
      { name: 'Java', tag: '☕', colorClass: 'text-orange-400 bg-orange-950/50 border border-orange-800/50' },
      { name: 'Spring', tag: '🌱', colorClass: 'text-emerald-400 bg-emerald-950/50 border border-emerald-800/50' },
    ]
  },
  {
    category: 'Frontend Ecosystem',
    subtitle: 'Modern Web Interfaces',
    icon: '🖥️',
    accentColor: 'purple',
    headerBadgeColor: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    skills: [
      { name: 'JavaScript', tag: 'JS', colorClass: 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30' },
      { name: 'TypeScript', tag: 'TS', colorClass: 'bg-blue-500/15 text-blue-400 border border-blue-500/30' },
      { name: 'React', tag: '⚛️', colorClass: 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30' },
      { name: 'Next.js', tag: '▲', colorClass: 'bg-neutral-800 text-white border border-neutral-700' },
      { name: 'Astro', tag: '🚀', colorClass: 'bg-orange-500/15 text-orange-400 border border-orange-500/30' },
      { name: 'Svelte', tag: '🔥', colorClass: 'bg-red-500/15 text-red-400 border border-red-500/30' },
      { name: 'Redux', tag: '🟣', colorClass: 'bg-purple-500/15 text-purple-400 border border-purple-500/30' },
      { name: 'Tailwind', tag: '🌊', colorClass: 'bg-teal-500/15 text-teal-400 border border-teal-500/30' },
    ]
  },
  {
    category: 'Backend & Data',
    subtitle: 'APIs & Scalable Databases',
    icon: '🗄️',
    accentColor: 'emerald',
    headerBadgeColor: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    skills: [
      { name: 'Node.js', icon: '🟢', colorClass: 'text-emerald-400' },
      { name: 'Express', tag: 'ex', colorClass: 'text-neutral-400 bg-neutral-800 font-mono' },
      { name: 'NestJS', icon: '🦁', colorClass: 'text-red-400' },
      { name: 'PostgreSQL', icon: '🐘', colorClass: 'text-blue-400' },
      { name: 'MongoDB', icon: '🍃', colorClass: 'text-emerald-400' },
      { name: 'Redis', tag: 'R', colorClass: 'text-red-500 bg-red-950/40 font-mono' },
    ]
  },
  {
    category: 'DevOps & Cloud',
    subtitle: 'Deployment & Tooling',
    icon: '📦',
    accentColor: 'orange',
    headerBadgeColor: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    skills: [
      { name: 'Docker', icon: '🐳', colorClass: 'text-sky-400' },
      { name: 'Git', icon: '🐙', colorClass: 'text-orange-400' },
      { name: 'Linux', icon: '🐧', colorClass: 'text-yellow-400' },
      { name: 'Vercel', icon: '▲', colorClass: 'text-white' },
    ]
  }
];
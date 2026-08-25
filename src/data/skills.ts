export interface SkillCategory {
  icon: string;
  category: string;
  skills: string[];
  description: string;
  proficiency: number;
}

export const skills: SkillCategory[] = [
  {
    icon: '💻',
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Vue.js'],
    description: 'Building responsive, accessible, and highly interactive user interfaces.',
    proficiency: 5
  },
  {
    icon: '⚙️',
    category: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Redis'],
    description: 'Designing scalable architectures and robust server-side applications.',
    proficiency: 4
  },
  {
    icon: '🧊',
    category: '3D & WebGL',
    skills: ['Three.js', 'React Three Fiber', 'WebGL', 'Shaders', 'Blender', 'Unity'],
    description: 'Creating immersive digital experiences and interactive 3D visualizations.',
    proficiency: 4
  },
  {
    icon: '🎨',
    category: 'Design',
    skills: ['Figma', 'Adobe Suite', 'UI/UX', 'Prototyping', 'Design Systems', 'Motion Design'],
    description: 'Crafting user-centric designs with strong attention to typography and motion.',
    proficiency: 4
  },
  {
    icon: '🚀',
    category: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform', 'Linux'],
    description: 'Automating deployments and managing cloud infrastructure efficiently.',
    proficiency: 3
  },
  {
    icon: '🛠️',
    category: 'Tools',
    skills: ['Git', 'VS Code', 'Webpack/Vite', 'Jest', 'Storybook', 'Agile'],
    description: 'Utilizing modern tooling and methodologies to ensure high code quality.',
    proficiency: 4
  }
];

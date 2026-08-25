import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'nebula-dashboard',
    title: 'Nebula Dashboard',
    description: 'A comprehensive analytics dashboard featuring interactive 3D data visualizations.',
    image: 'linear-gradient(135deg, #0a0a2e 0%, #1a0a3e 50%, #00d4ff 100%)',
    technologies: ['React', 'Three.js', 'D3.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://example.com/nebula',
    githubUrl: 'https://github.com/example/nebula',
    featured: true,
    caseStudy: {
      challenge: 'Visualizing multi-dimensional complex datasets without overwhelming the user.',
      solution: 'Implemented WebGL-accelerated 3D scatter plots allowing seamless exploration of millions of data points.',
      result: 'Increased user engagement by 45% and reduced data interpretation time significantly.',
      images: []
    }
  },
  {
    id: 'ecotrack',
    title: 'EcoTrack',
    description: 'A sustainability tracking platform for modern enterprises to monitor carbon footprint.',
    image: 'linear-gradient(135deg, #0a2e0a 0%, #1a3e1a 50%, #00ff88 100%)',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'GraphQL'],
    liveUrl: 'https://example.com/ecotrack',
    githubUrl: 'https://github.com/example/ecotrack',
    featured: true,
    caseStudy: {
      challenge: 'Aggregating fragmented emissions data across diverse enterprise supply chains.',
      solution: 'Built a robust GraphQL API combined with an intuitive React interface to simplify data entry and reporting.',
      result: 'Adopted by 20+ enterprise clients in the first quarter of launch.',
      images: []
    }
  },
  {
    id: 'synthwave',
    title: 'SynthWave',
    description: 'An interactive music visualizer powered by real-time audio analysis and custom shaders.',
    image: 'linear-gradient(135deg, #2e0a2e 0%, #3e1a3e 50%, #ff006e 100%)',
    technologies: ['Three.js', 'Web Audio API', 'GLSL', 'Vite'],
    githubUrl: 'https://github.com/example/synthwave',
    featured: false,
    caseStudy: {
      challenge: 'Synchronizing complex WebGL shader animations with high-frequency audio data in real-time.',
      solution: 'Utilized custom GLSL materials directly driven by Fast Fourier Transform (FFT) frequencies from the Web Audio API.',
      result: 'Achieved a consistent 60FPS visualization across multiple device tiers.',
      images: []
    }
  },
  {
    id: 'codeforge',
    title: 'CodeForge',
    description: 'A collaborative, real-time code editor tailored for technical interviews.',
    image: 'linear-gradient(135deg, #1a1a2e 0%, #2a2a3e 50%, #ffaa00 100%)',
    technologies: ['React', 'Yjs', 'WebSockets', 'Monaco Editor'],
    liveUrl: 'https://example.com/codeforge',
    featured: false,
    caseStudy: {
      challenge: 'Handling simultaneous edits and resolving conflicts in real-time between multiple users.',
      solution: 'Integrated Conflict-free Replicated Data Types (CRDTs) via Yjs and WebSocket broadcasting.',
      result: 'Provided a seamless zero-conflict collaborative editing experience used in over 1,000 interviews.',
      images: []
    }
  }
];

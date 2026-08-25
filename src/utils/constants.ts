import type { NavLink } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export const ANIMATION_DURATION = {
  micro: 150,
  fast: 200,
  base: 300,
  normal: 400,
  slow: 600,
  slower: 800,
  slowest: 1000
};

export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

export const HEADER_HEIGHT = 64;
export const SCROLL_OFFSET = 80;

export const CAMERA_CONFIG = {
  position: [0, 0, 8] as const,
  fov: 75,
  near: 0.1,
  far: 1000
};

export const CANVAS_CONFIG = {
  dpr: [1, 2] as [number, number],
  shadows: true
};

export const LIGHTING_CONFIG = {
  ambient: { intensity: 0.5, color: '#ffffff' },
  directional: { position: [10, 10, 5] as const, intensity: 1, color: '#ffffff' },
  pointLight1: { position: [-10, -10, -5] as const, intensity: 2, color: '#00d4ff' }, // cyan
  pointLight2: { position: [10, -10, 5] as const, intensity: 2, color: '#ff006e' }    // pink
};

export const MESH_CONFIG = {
  geometry: { radius: 1.5, detail: 3 },
  material: {
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1.0,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1
  }
};

export const PORTFOLIO_NAME = import.meta.env.VITE_PORTFOLIO_NAME || 'Vishal Sukhwal';
export const PORTFOLIO_TITLE = import.meta.env.VITE_PORTFOLIO_TITLE || 'Software Engineer & Full-Stack Developer';
export const PORTFOLIO_DESCRIPTION = import.meta.env.VITE_PORTFOLIO_DESCRIPTION || 'Building high-performance web applications, interactive 3D experiences, and modern scalable solutions.';
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'vishalsukhwal@example.com';

export const SOCIAL_URLS = {
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com',
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com',
  twitter: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com'
};

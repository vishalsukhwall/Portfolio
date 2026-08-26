import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'wealthy-names',
    title: 'Wealthy Names',
    description: 'A responsive platform featuring curated domain and brand naming tools with integrated content and blogs.',
    image: 'linear-gradient(135deg, #0a0a2e 0%, #1a0a3e 50%, #00d4ff 100%)',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://wealthynames.vercel.app/',
    githubUrl: 'https://github.com/vishalsukhwall/wealthnames',
    featured: true,
    caseStudy: {
      challenge: 'Building a responsive and intuitive interface for seamless domain discovery and dynamic content management.',
      solution: 'Developed modular React components with TypeScript and optimized client-side performance deployed on Vercel.',
      result: 'Delivered a smooth, fast-loading user interface with clean navigation and high reliability.',
      images: []
    }
  },
  {
    id: 'ai-career-mentor',
    title: 'AI Career Mentor',
    description: 'An AI-powered guidance platform delivering automated roadmaps and mentorship insights using open-source LLMs.',
    image: 'linear-gradient(135deg, #0a2e0a 0%, #1a3e1a 50%, #00ff88 100%)',
    technologies: ['Python', 'Streamlit', 'Hugging Face API', 'NLP'],
    githubUrl: 'https://github.com/vishalsukhwall',
    featured: true,
    caseStudy: {
      challenge: 'Creating an accessible, interactive tool to parse career profiles and recommend structured learning paths in real-time.',
      solution: 'Integrated Hugging Face inference APIs within a lightweight Streamlit web application interface.',
      result: 'Enabled users to receive instant, contextual career mentorship recommendations.',
      images: []
    }
  },
  {
    id: 'aarambhh',
    title: 'AARAMBHH Full-Stack App',
    description: 'A scalable web application featuring end-to-end data workflows, structured APIs, and intuitive user dashboards.',
    image: 'linear-gradient(135deg, #2e0a2e 0%, #3e1a3e 50%, #ff006e 100%)',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/vishalsukhwall',
    featured: false,
    caseStudy: {
      challenge: 'Designing a full-stack architecture that cleanly separates client-side state from backend database queries.',
      solution: 'Built RESTful services with Node.js/Express, integrated MongoDB schemas, and connected a type-safe React frontend.',
      result: 'Achieved streamlined data persistence and clean, modular component code.',
      images: []
    }
  },
  {
    id: 'sms-spam-detector',
    title: 'SMS Spam Detection Engine',
    description: 'A Machine Learning text classification pipeline serving NLP-driven spam prediction through a Flask web interface.',
    image: 'linear-gradient(135deg, #1a1a2e 0%, #2a2a3e 50%, #ffaa00 100%)',
    technologies: ['Python', 'Scikit-Learn', 'Flask', 'Naive Bayes', 'NLP'],
    githubUrl: 'https://github.com/vishalsukhwall',
    featured: false,
    caseStudy: {
      challenge: 'Accurately classifying text messages as spam while minimizing false positives on legitimate user inputs.',
      solution: 'Implemented text preprocessing with TF-IDF vectorization and trained a Multinomial Naive Bayes classification model.',
      result: 'Attained high classification accuracy and served predictions via a responsive Flask application.',
      images: []
    }
  }
];
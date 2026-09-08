import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 'dog-vs-cat',
    title: 'Dog vs Cat Classifier',
    description: 'A deep learning computer vision web application classifying dog and cat breeds in real time using transfer learning with MobileNetV2.',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'TensorFlow', 'MobileNetV2', 'Flask', 'Render'],
    liveUrl: 'https://dog-vs-cat-classifier-v58n.onrender.com',
    githubUrl: 'https://github.com/vishalsukhwall/dog-vs-cat-classifier',
    featured: true,
    caseStudy: {
      challenge: 'Deploying deep learning models under strict cloud memory limits (<512MB RAM) without crashing server instances.',
      solution: 'Used lightweight MobileNetV2 transfer learning weights paired with an optimized Flask REST endpoint for real-time inference.',
      result: 'Reduced server memory footprint by >70% while keeping prediction response time under 150ms.',
      images: []
    }
  },
  {
    id: 'ai-career-mentor',
    title: 'AI Career Mentor',
    description: 'An AI-powered guidance platform delivering automated roadmaps and mentorship insights using open-source LLMs.',
    image: 'linear-gradient(135deg, #0a2e0a 0%, #1a3e1a 50%, #00ff88 100%)',
    technologies: ['Python', 'Streamlit', 'Hugging Face API', 'NLP', 'Render'],
    liveUrl: 'https://ai-career-mentor-nanf.onrender.com/',
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
    id: 'sms-spam-detector',
    title: 'SMS Spam Detection Engine',
    description: 'A Machine Learning text classification pipeline serving NLP-driven spam prediction through a Flask web interface.',
    image: 'linear-gradient(135deg, #1a1a2e 0%, #2a2a3e 50%, #ffaa00 100%)',
    technologies: ['Python', 'Scikit-Learn', 'Flask', 'Naive Bayes', 'NLP', 'Render'],
    liveUrl: 'https://sms-spam-detection-1-b9nj.onrender.com/',
    githubUrl: 'https://github.com/vishalsukhwall',
    featured: false,
    caseStudy: {
      challenge: 'Accurately classifying text messages as spam while minimizing false positives on legitimate user inputs.',
      solution: 'Implemented text preprocessing with TF-IDF vectorization and trained a Multinomial Naive Bayes classification model.',
      result: 'Attained high classification accuracy and served predictions via a responsive Flask application.',
      images: []
    }
  },
  {
    id: 'wealthy-names',
    title: 'Wealthy Names',
    description: 'A responsive platform featuring curated domain and brand naming tools with integrated content and blogs.',
    image: '/wealthynames.png',
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
  }
];
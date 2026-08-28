export interface Project {

  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  caseStudy?: {
    challenge: string;
    solution: string;
    result: string;
    images: string[];
    
  };
}

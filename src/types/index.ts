// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  technologies: string[];
  category: 'personal' | 'academic' | 'freelance' | 'hackathon';
  featured?: boolean;
}

// Competitive Programming Profile
export interface CodingProfile {
  platform: string;
  username: string;
  url: string;
  rating?: string;
  solved?: number;
  icon: string;
}

// Achievement
export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
  url?: string;
  category: 'certification' | 'award' | 'badge';
}

// Hackathon
export interface Hackathon {
  id: string;
  name: string;
  date: string;
  projectName: string;
  role: string;
  result?: string;
  description?: string;
  teamSize?: number;
}

// Team Project
export interface TeamProject {
  id: string;
  title: string;
  description: string;
  role: string;
  teamSize: number;
  contributions: string[];
}

// Extracurricular
export interface Extracurricular {
  id: string;
  title: string;
  organization?: string;
  description: string;
  period?: string;
}

// Social Link
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Navigation Link
export interface NavLink {
  name: string;
  href: string;
}
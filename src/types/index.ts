export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  title: string;
  period: string;
  description: string;
  location?: string;
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  year: string;
  image: string;
  url?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

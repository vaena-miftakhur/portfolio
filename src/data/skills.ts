import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'React', level: 80 },
      { name: 'Astro', level: 70 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 75 },
      { name: 'Prisma', level: 70 },
      { name: 'REST API', level: 78 },
      { name: 'Python', level: 70 },
      { name: 'Flask', level: 65 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 65 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'Vercel', level: 75 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

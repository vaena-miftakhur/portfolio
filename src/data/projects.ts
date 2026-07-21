import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Temu Lapangan',
    description:
      'Sistem Pendukung Keputusan untuk rekomendasi lapangan futsal menggunakan metode SAW, TOPSIS, dan Weighted Product. Dilengkapi fitur manajemen jadwal, harga, dan ulasan pengguna.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'MySQL', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: 'https://github.com/vaena-miftakhur/fe_uas_pemweb2.git',
    image: '/images/project-temu-lapangan.png',
  },
  {
    id: 2,
    title: 'BatikAI',
    description:
      'Klasifikasi motif batik menggunakan MobileNetV2 dengan penjelasan AI dari Groq. Dilengkapi fitur sketch-to-batik generation menggunakan Pollinations.ai.',
    techStack: ['Python', 'Flask', 'TensorFlow', 'MobileNetV2', 'Groq AI'],
    demoUrl: '#',
    githubUrl: 'https://github.com/vaena-miftakhur/Batik-AI',
    image: '/images/project-batakai.png',
  },
  {
    id: 3,
    title: 'Event Management System',
    description:
      'Aplikasi manajemen event full-stack dengan fitur pendaftaran peserta, manajemen tiket, dan dashboard admin.',
    techStack: ['React', 'Express', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    demoUrl: 'https://fe-vaena.vercel.app',
    githubUrl: 'https://github.com/vaena-miftakhur',
    image: '/images/project-event.png',
  },
  {
    id: 4,
    title: 'TapSecure',
    description:
      'Sistem absensi berbasis RFID dengan enkripsi SHA-256/AES, multithreading, dan dukungan tiga bahasa (i18n). Dibangun dengan Java Swing dan MongoDB.',
    techStack: ['Java', 'Swing', 'MongoDB', 'SHA-256', 'AES'],
    githubUrl: 'https://github.com/vaena-miftakhur/TapSecure',
    image: '/images/project-tapsecure.png',
  },
];
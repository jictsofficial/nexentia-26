// src/data/competitions.ts

export interface SubCompetition {
  name: string;
  description: string;
}

export interface Competition {
  slug: string;
  title: string;
  subtitle: string;
  logoSrc: string;
  category: string;
  subCompetitions: SubCompetition[];
}

export const competitionsData: Competition[] = [
  {
    slug: 'codinex',
    title: 'CODINEX',
    subtitle: 'Web Development Competition',
    logoSrc: '/logos/codinex.png',
    category: 'CODINEX',
    subCompetitions: [
      {
        name: 'Web Development',
        description: 'Design and build a Teacher Performance & Development Tracking System that includes teacher profiles, visual analytics, and interactive dashboards to celebrate teaching excellence.',
      },
    ],
  },
  {
    slug: 'nextron',
    title: 'NEXTRON',
    subtitle: 'Robotics & IoT Challenge',
    logoSrc: '/logos/nextron.png', 
    category: 'NEXTRON',
    subCompetitions: [
      {
        name: 'Robotics & IoT',
        description: 'Develop robotic solutions under categories like TechForge, AssistAI, BioSync, MotionCore, AgriVerse, or FrontierX.',
      },
    ],
  },
  {
    slug: 'pixelynx',
    title: 'PIXELYNX',
    subtitle: 'Digital Poster Designing',
    logoSrc: '/logos/pixelynx.png',
    category: 'PIXELYNX',
    subCompetitions: [
      {
        name: 'Digital Poster Designing',
        description: 'A creative digital artwork based on the theme: "Future of Innovations".',
      },
    ],
  },
  {
    slug: 'cipherx',
    title: 'CIPHERX',
    subtitle: 'Quiz Competition',
    logoSrc: '/logos/cipher.png',
    category: 'CIPHERX',
    subCompetitions: [
      {
        name: 'Quiz Competition',
        description: 'The challenge will follow a crossword-style ICT puzzle format based on the G.C.E. Advanced Level ICT syllabus.',
      },
    ],
  },
  {
    slug: 'voicesnx',
    title: 'VOICESNX',
    subtitle: 'Debate Competition',
    logoSrc: '/logos/voicesnx.png',
    category: 'VOICESNX',
    subCompetitions: [
      {
        name: 'Debate',
        description: 'Argue for or against the given motion: "The Power of Human Innovation Will Remain Greater Than Artificial Intelligence."',
      },
    ],
  },
  {
    slug: 'visualnx',
    title: 'VISUALNX',
    subtitle: 'Video Editing',
    logoSrc: '/logos/visualnx.png',
    category: 'VISUALNX',
    subCompetitions: [
      {
        name: 'Video Editing',
        description: 'Create a video on "School in the Year 2050" or design a "Gadget Commercial Parody".',
      },
    ],
  },
  {
    slug: 'framenx',
    title: 'FRAMENX',
    subtitle: 'Presentation',
    logoSrc: '/logos/framenx.png',
    category: 'FRAMENX',
    subCompetitions: [
      {
        name: 'Presentation',
        description: 'The presentation must be based on the theme "Quantum Computing: Unlocking the Impossible."',
      },
    ],
  },
  {
    slug: 'most-popular',
    title: 'Most Popular',
    subtitle: 'Most Popular School ICT Society',
    logoSrc: '/logos/award.png',
    category: 'MOST POPULAR SOCIETY',
    subCompetitions: [],
  },
];
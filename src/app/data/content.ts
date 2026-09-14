const base = import.meta.env.BASE_URL;

export const profile = {
  name: 'Ehsan Kabeer',
  role: 'Software Engineer',
  school: 'B.S. Computer Science @ University of Michigan',
  location: 'Ann Arbor, Michigan',
  email: 'eskabeer@umich.edu',
  github: 'https://github.com/EhsanKabeer',
  linkedin: 'https://www.linkedin.com/in/ehsan-kabeer-401129274/',
  /** Edit this as your recruiting cycle changes, or set to '' to hide the badge. */
  availability: 'Open to Summer 2027 SWE internships',
  intro:
    'I build products people actually use. Right now I’m the founding engineer at Prayr, a cross-platform mobile app with 150,000+ downloads, and I study CS at Michigan. My work spans React Native and native Kotlin/Swift modules, Python backends, and ML fine-tuning pipelines.',
  stats: [
    { value: '150K+', label: 'app downloads' },
    { value: '4.8★', label: 'across 1,600+ reviews' },
    { value: '3', label: 'engineering roles' },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: 'Prayr',
    role: 'Founding Engineer',
    period: 'Oct 2025 — Present',
    location: 'Ann Arbor, MI',
    stack: ['React Native', 'Firebase', 'Kotlin', 'Swift'],
    bullets: [
      'Built and launched Prayr, a cross-platform mobile app using React Native, Firebase, and native Kotlin/Swift modules, growing it to 150,000+ downloads and a 4.8/5 rating across 1,600+ reviews.',
      'Built the core feature set on a Firebase backend — home-screen widgets, progress tracking, and a rebuilt onboarding flow — shipped to users across both iOS and Android.',
      'Engineered app blocking from scratch in Kotlin on Android, which exposes no first-party blocking API, and on iOS via Apple Screen Time; 90% of surveyed users reported improved focus and habit consistency.',
      'Ran the release cycle through version 4.1, triaging user reviews and support requests into prioritized bug fixes and feature work.',
    ],
  },
  {
    company: 'TechCompiler Data Systems',
    role: 'Software Engineer Intern',
    period: 'Jun 2025 — Aug 2025',
    location: 'Rochester, NY',
    stack: ['Python', 'Flask', 'PostgreSQL', 'PyTorch', 'LoRA'],
    bullets: [
      'Shipped full-stack features for an ML-powered recruiting platform serving an international client, converting stakeholder requirements into production workflows for sourcing, filtering, and screening applicants.',
      'Designed and optimized a LoRA-based fine-tuning pipeline for SQLCoder on a 30,000-example dataset, raising validation accuracy from 68% to 81% while cutting training time from 24 hours to 8.',
      'Built Python and Flask backend services with REST APIs over PostgreSQL data models for recruiter and applicant profile management, then carried the same features through to the frontend UI.',
    ],
  },
  {
    company: 'Nobel',
    role: 'Data Engineering Intern',
    period: 'May 2023 — Aug 2023',
    location: 'Remote',
    stack: ['SQL', 'Python', 'Pandas', 'ETL'],
    bullets: [
      'Partnered with an intern team on an FDA-sponsored project, using SQL and Python to clean and restructure multi-source healthcare datasets into formats non-technical stakeholders could query directly.',
      'Designed a doctor-facing vaccine information database, modeling clinical data into a normalized SQL schema and building Pandas workflows that made reference information faster to organize and retrieve.',
      'Strengthened ETL/ELT pipelines with added validation steps, improving query performance and data completeness for the healthcare workers and patients relying on the information.',
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  period: string;
  stack: string[];
  metrics?: { value: string; label: string }[];
  images: string[];
  /** Phone screenshots letterbox ('contain'); wide desktop captures fill the frame ('cover'). */
  fit: 'cover' | 'contain';
  /** Visual identity only — tints the card's accent line, media glow and tagline. */
  accent: string;
  /** Shown instead of screenshots when a project has none. */
  placeholder?: { glyph: string; caption: string };
  links: { href: string; label: string; kind: 'github' | 'appstore' | 'playstore' | 'live' }[];
  featured?: boolean;
};

/** Ordered by impact — flagship first, coursework last. */
export const projects: Project[] = [
  {
    id: 'prayr',
    title: 'Prayr',
    tagline: 'Salah tracking & focus, on iOS and Android',
    description:
      'A published cross-platform app that helps people stay consistent with prayer and protect their focus. Location-aware prayer times, home-screen widgets, smart reminders, and a progress dashboard — plus app blocking built from scratch in Kotlin on Android and through Apple Screen Time on iOS.',
    period: 'Oct 2025 — Present',
    stack: ['React Native', 'Firebase', 'Kotlin', 'Swift'],
    metrics: [
      { value: '150K+', label: 'downloads' },
      { value: '4.8/5', label: 'across 1,600+ reviews' },
      { value: 'iOS + Android', label: 'shipped to both stores' },
    ],
    images: [1, 2, 3, 4, 5].map((n) => `${base}PrayrImgs/${n}.jpg`),
    fit: 'contain',
    accent: '#2dd4bf',
    links: [
      {
        href: 'https://apps.apple.com/us/app/prayr-salah-focus/id6752878561',
        label: 'App Store',
        kind: 'appstore',
      },
      {
        href: 'https://play.google.com/store/apps/details?id=com.prayr_android',
        label: 'Google Play',
        kind: 'playstore',
      },
    ],
    featured: true,
  },
  {
    id: 'chathub',
    title: 'ChatHub',
    tagline: 'Discord-style real-time messaging',
    description:
      'A real-time messaging platform with servers, text channels, and private DMs, validated under concurrent multi-user load testing. WebSocket event handling drives live messages, typing indicators, and online/offline presence over JWT-authenticated sessions, with full message history persisted in MongoDB.',
    period: 'Mar 2025 — May 2025',
    stack: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'JWT'],
    images: [`${base}dicordCloneImgs/0-deploys.png`],
    fit: 'cover',
    accent: '#818cf8',
    links: [{ href: 'https://github.com/EhsanKabeer/Discord-clone', label: 'View code', kind: 'github' }],
  },
  {
    id: 'flockr',
    title: 'Flockr',
    tagline: 'Full-stack social feed',
    description:
      'A Twitter-style social app covering the core loop end to end: posting, likes, retweets, comments, a follow system, and editable profiles over a real-time database, with authentication handled through NextAuth.',
    period: 'Apr 2025 — May 2025',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind', 'Firebase', 'NextAuth'],
    images: [`${base}FlockrImgs/0-feed.png`, `${base}FlockrImgs/0b-explore.png`],
    fit: 'cover',
    accent: '#a78bfa',
    links: [{ href: 'https://github.com/EhsanKabeer/Flockr', label: 'View code', kind: 'github' }],
  },
  {
    id: 'finance-dashboard',
    title: 'Personal Finance Dashboard',
    tagline: 'Bank data in, spending insights out',
    description:
      'A containerized full-stack dashboard that pulls real account and transaction data from the Capital One sandbox API over an OAuth2 authorization flow. A Spring Boot service brokers the OAuth2 client and exposes a REST API over PostgreSQL; a React and TypeScript frontend renders balances and spending breakdowns with Chart.js. The whole stack — database, backend, frontend — runs from a single Docker Compose file.',
    period: 'May 2025',
    stack: ['Java', 'Spring Boot', 'OAuth2', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    images: [],
    fit: 'cover',
    accent: '#34d399',
    placeholder: { glyph: '{ }', caption: 'Spring Boot · OAuth2 · Docker Compose' },
    links: [
      {
        href: 'https://github.com/EhsanKabeer/personal-finance-dashboard',
        label: 'View code',
        kind: 'github',
      },
    ],
  },
  {
    id: 'nutrition-ml',
    title: 'Nutrition & Food Ratings',
    tagline: 'Can nutrition facts predict a recipe rating?',
    description:
      'An end-to-end data science study on Food.com recipe data: merging and cleaning two multi-million-row tables, parsing nutrition blobs into typed features, and exploring the relationship between nutrition and ratings with interactive Plotly charts. I then framed it as a regression problem and tuned past a linear baseline using standard scaling, polynomial features, and Ridge/Lasso with cross-validated hyperparameters.',
    period: 'Apr 2025',
    stack: ['Python', 'Pandas', 'scikit-learn', 'Plotly', 'Jupyter'],
    images: [1, 2, 3].map((n) => `${base}NutritionImgs/${n}.png`),
    fit: 'cover',
    accent: '#f59e0b',
    links: [
      {
        href: 'https://ehsankabeer.github.io/How-nutrition-influences-food-ratings-byEhsan/',
        label: 'Read the writeup',
        kind: 'live',
      },
      {
        href: 'https://github.com/EhsanKabeer/How-nutrition-influences-food-ratings-byEhsan',
        label: 'View code',
        kind: 'github',
      },
    ],
  },
  {
    id: 'insta485',
    title: 'Insta485',
    tagline: 'Instagram clone, server-rendered to SPA',
    description:
      'An Instagram-style social app built for Michigan\u2019s Web Systems course, rebuilt from a server-rendered application into a client-side React single-page app that talks to a REST API — feed, posts, likes, comments, and infinite scroll.',
    period: 'Fall 2025',
    stack: ['React', 'JavaScript', 'Python', 'Flask', 'REST API'],
    images: [1, 2, 3].map((n) => `${base}insta445imgs/${n}.png`),
    fit: 'cover',
    accent: '#f472b6',
    links: [
      {
        href: 'https://github.com/EhsanKabeer/p3-insta485-clientside',
        label: 'View code',
        kind: 'github',
      },
    ],
  },
  {
    id: 'node-express-apis',
    title: 'Node & Express API Series',
    tagline: 'Nine backend services, built from the ground up',
    description:
      'A run of production-shaped REST APIs built while working through a structured Node/Express backend curriculum: a task manager, a store API with search, numeric filtering and pagination, a JWT auth service, a jobs API, file upload and transactional email, Stripe payments, and a full e-commerce API with an auth workflow. Built incrementally rather than copied — the commit history walks through adding custom error handling, then auth endpoints, then filtering and pagination.',
    period: 'Jul 2026 — Aug 2026',
    stack: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Stripe'],
    images: [],
    fit: 'cover',
    accent: '#fb923c',
    placeholder: { glyph: '9', caption: 'REST · JWT · Mongoose · Stripe' },
    links: [
      {
        href: 'https://github.com/EhsanKabeer/node-express-projects',
        label: 'View code',
        kind: 'github',
      },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL', 'Kotlin', 'Swift'],
  },
  {
    group: 'Frameworks & Libraries',
    items: ['React', 'React Native', 'Next.js', 'Node.js', 'Express', 'Flask', 'FastAPI', 'PyTorch', 'Pandas'],
  },
  {
    group: 'Data & Infrastructure',
    items: ['PostgreSQL', 'MongoDB', 'Firebase', 'REST APIs', 'Docker', 'Git / GitHub', 'AWS', 'Google Cloud'],
  },
];

export const education = {
  school: 'University of Michigan',
  degree: 'Bachelor of Science, Computer Science',
  period: 'Expected December 2027',
  location: 'Ann Arbor, Michigan',
  gpa: '3.5 GPA',
  coursework: ['Data Structures & Algorithms', 'Machine Learning', 'Web Systems', 'Computer Organization'],
};

export const navLinks = [
  { id: 'work', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

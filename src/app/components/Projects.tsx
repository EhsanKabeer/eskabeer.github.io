import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Insta485',
    description: 'Instagram-style full-stack web app (client-side).',
    images: ['/insta445imgs/1.png', '/insta445imgs/2.png', '/insta445imgs/3.png'],
    projectUrl: 'https://github.com/EhsanKabeer/p3-insta485-clientside',
    githubUrl: 'https://github.com/EhsanKabeer/p3-insta485-clientside',
    showGithub: true,
  },
  {
    id: 2,
    title: 'ChatHub',
    description: 'Full-stack real-time messaging app inspired by Discord. React, Node/Express, Socket.io, MongoDB. Servers, text channels, DMs, live typing and presence.',
    images: ['/dicordCloneImgs/1.png', '/dicordCloneImgs/2.png', '/dicordCloneImgs/3.png', '/dicordCloneImgs/4.png', '/dicordCloneImgs/5.png'],
    projectUrl: 'https://github.com/EhsanKabeer/Discord-clone',
    githubUrl: 'https://github.com/EhsanKabeer/Discord-clone',
    showGithub: true,
  },
  {
    id: 3,
    title: 'Flockr',
    description: 'Full-stack Twitter clone. Next.js 14, TypeScript, Tailwind, Firebase, NextAuth. Tweets, likes, retweets, comments, follow system, real-time feed.',
    images: ['/FlockrImgs/1.png', '/FlockrImgs/2.png', '/FlockrImgs/3.png', '/FlockrImgs/4.png', '/FlockrImgs/5.png'],
    projectUrl: 'https://github.com/EhsanKabeer/Flockr',
    githubUrl: 'https://github.com/EhsanKabeer/Flockr',
    showGithub: true,
  },
  {
    id: 4,
    title: 'Prayr',
    description: 'Published iOS app for prayer tracking and focus. Prayer times, reminders, app blocking during prayer, progress dashboard. 450+ ratings (5 stars), 3,000+ downloads, recently launched on the Play Store.',
    images: ['/PrayrImgs/1.jpg', '/PrayrImgs/2.jpg', '/PrayrImgs/3.jpg', '/PrayrImgs/4.jpg', '/PrayrImgs/5.jpg'],
    projectUrl: 'https://apps.apple.com/us/app/prayr-salah-focus/id6752878561',
    githubUrl: '',
    showGithub: false,
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [imageIndex, setImageIndex] = useState(0);
  const total = project.images.length;
  const prev = () => setImageIndex((i) => (i - 1 + total) % total);
  const next = () => setImageIndex((i) => (i + 1) % total);

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="relative h-72 bg-gray-900 flex items-center justify-center overflow-hidden">
        {project.images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{
              opacity: i === imageIndex ? 1 : 0,
              zIndex: i === imageIndex ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: i === imageIndex ? 'auto' : 'none',
            }}
          >
            <ImageWithFallback
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className="max-w-full max-h-full w-auto h-full object-contain"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 text-xs text-white/80">
              {imageIndex + 1} / {total}
            </div>
          </>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        <div className="flex gap-3">
          {project.showGithub ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          ) : (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Smartphone size={16} />
              App Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

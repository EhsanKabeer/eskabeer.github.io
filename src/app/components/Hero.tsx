import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/content';

export function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center px-5 pt-28 pb-20 md:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        {profile.availability && (
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{ border: '1px solid var(--line)', background: 'rgba(255,255,255,0.03)' }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                style={{ backgroundColor: '#4ade80' }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ backgroundColor: '#4ade80' }}
              />
            </span>
            <span className="font-mono-ui text-xs text-muted">{profile.availability}</span>
          </div>
        )}

        <h1 className="max-w-4xl text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-3xl text-xl leading-snug text-white/90 md:text-2xl">
          <span className="accent-text font-semibold">{profile.role}</span>
          <span className="text-muted"> · {profile.school}</span>
        </p>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <button
            onClick={() => go('projects')}
            className="rounded-xl px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(100deg, var(--accent) 0%, #6d5ef0 100%)',
              boxShadow: '0 8px 30px -12px rgba(139,124,255,0.8)',
            }}
          >
            View my work
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition-colors"
            style={{ border: '1px solid var(--line-strong)', background: 'rgba(255,255,255,0.03)' }}
          >
            <Mail size={16} />
            Email me
          </a>
          <div className="flex items-center gap-1 sm:ml-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl p-3 text-muted transition-colors hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl p-3 text-muted transition-colors hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 border-t pt-8"
          style={{ borderColor: 'var(--line)' }}
        >
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 font-mono-ui text-xs text-dim">{stat.label}</div>
            </div>
          ))}
          <div className="flex items-center gap-2 text-sm text-dim sm:ml-auto">
            <MapPin size={15} />
            {profile.location}
          </div>
        </div>
      </div>

      <button
        onClick={() => go('work')}
        aria-label="Scroll to experience"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-dim transition-colors hover:text-white md:block"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}

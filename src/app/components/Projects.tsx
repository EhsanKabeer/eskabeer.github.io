import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight, ChevronLeft, ChevronRight, Github, Smartphone } from 'lucide-react';
import { projects, type Project } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

function LinkButton({ link, primary }: { link: Project['links'][0]; primary?: boolean }) {
  const Icon =
    link.kind === 'github'
      ? Github
      : link.kind === 'appstore' || link.kind === 'playstore'
        ? Smartphone
        : ArrowUpRight;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
      style={
        primary
          ? { background: 'linear-gradient(100deg, var(--accent) 0%, #6d5ef0 100%)', color: '#fff' }
          : {
              border: '1px solid var(--line-strong)',
              background: 'rgba(255,255,255,0.04)',
              color: 'var(--text)',
            }
      }
    >
      <Icon size={15} />
      {link.label}
    </a>
  );
}

/** Screenshot carousel, or a designed panel for projects without screenshots. */
function Gallery({ project, tall }: { project: Project; tall?: boolean }) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const height = tall ? 'h-[22rem] md:h-[27rem]' : 'h-56';
  const cover = project.fit === 'cover';

  if (!total) {
    return (
      <div
        className={`relative flex ${height} items-center justify-center overflow-hidden rounded-xl`}
        style={{
          background:
            'radial-gradient(80% 90% at 50% 0%, rgba(139,124,255,0.16) 0%, transparent 70%), rgba(255,255,255,0.02)',
          border: '1px solid var(--line)',
        }}
      >
        <div className="text-center">
          <div
            className="font-mono-ui text-5xl font-medium"
            style={{ color: 'var(--accent-soft)', opacity: 0.75 }}
          >
            {project.placeholder?.glyph}
          </div>
          <p className="mt-4 font-mono-ui text-xs text-dim">{project.placeholder?.caption}</p>
        </div>
      </div>
    );
  }

  const step = (delta: number) => setIndex((i) => (i + delta + total) % total);

  return (
    <div
      className={`group/gallery relative ${height} overflow-hidden rounded-xl`}
      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--line)' }}
    >
      {project.images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 flex items-center justify-center ${cover ? '' : 'p-3'}`}
          style={{
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.35s ease',
            pointerEvents: i === index ? 'auto' : 'none',
          }}
        >
          <ImageWithFallback
            src={src}
            alt={`${project.title} screenshot ${i + 1}`}
            className={
              cover
                ? 'h-full w-full object-cover object-top'
                : 'max-h-full max-w-full object-contain'
            }
          />
        </div>
      ))}

      {cover && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20"
          style={{ background: 'linear-gradient(to top, rgba(5,6,12,0.85), transparent)' }}
        />
      )}

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white opacity-0 transition-opacity group-hover/gallery:opacity-100 focus-visible:opacity-100"
            style={{ background: 'rgba(5,6,12,0.72)', border: '1px solid var(--line-strong)' }}
          >
            <ChevronLeft size={17} />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-white opacity-0 transition-opacity group-hover/gallery:opacity-100 focus-visible:opacity-100"
            style={{ background: 'rgba(5,6,12,0.72)', border: '1px solid var(--line-strong)' }}
          >
            <ChevronRight size={17} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {project.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setIndex(i)}
                aria-label={`Screenshot ${i + 1}`}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === index ? '1.25rem' : '0.375rem',
                  background: i === index ? 'var(--accent-soft)' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article
        className="card overflow-hidden p-5 md:p-7"
        style={{ background: 'rgba(139,124,255,0.045)', borderColor: 'rgba(139,124,255,0.22)' }}
      >
        <div className="grid gap-7 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span
                className="chip"
                style={{
                  color: 'var(--accent-soft)',
                  borderColor: 'rgba(139,124,255,0.35)',
                  background: 'rgba(139,124,255,0.1)',
                }}
              >
                Flagship
              </span>
              <span className="font-mono-ui text-xs text-dim">{project.period}</span>
            </div>

            <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-2 text-lg text-muted">{project.tagline}</p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>

            {project.metrics && (
              <div
                className="mt-6 grid grid-cols-3 gap-4 border-y py-5"
                style={{ borderColor: 'var(--line)' }}
              >
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-lg font-semibold tracking-tight text-white md:text-xl">
                      {metric.value}
                    </div>
                    <div className="mt-1 font-mono-ui text-[0.68rem] leading-snug text-dim">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link, i) => (
                <LinkButton key={link.href} link={link} primary={i === 0} />
              ))}
            </div>
          </div>

          <Gallery project={project} tall />
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="card flex h-full flex-col p-5">
        <Gallery project={project} />

        <div className="flex flex-1 flex-col pt-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
            <span className="font-mono-ui text-[0.68rem] whitespace-nowrap text-dim">
              {project.period}
            </span>
          </div>
          <p className="mt-1 text-sm" style={{ color: 'var(--accent-soft)' }}>
            {project.tagline}
          </p>
          <p className="mt-3 text-[0.9rem] leading-relaxed text-muted">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {project.links.map((link) => (
              <LinkButton key={link.href} link={link} />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          description="Ordered by impact — a published app with real users first, coursework last."
        />

        <div className="space-y-6">
          {featured && <FeaturedProject project={featured} />}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 70} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

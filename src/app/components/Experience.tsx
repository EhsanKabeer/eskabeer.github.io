import { experience } from '../data/content';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="work" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped"
          description="Three roles across consumer mobile, ML-backed product work, and healthcare data engineering."
        />

        <ol className="relative">
          {experience.map((job, index) => (
            <Reveal as="li" key={job.company} delay={index * 80} className="relative block">
              <div className="grid gap-x-10 gap-y-4 border-t py-9 md:grid-cols-[minmax(0,13rem)_1fr]"
                   style={{ borderColor: 'var(--line)' }}>
                <div>
                  <p className="font-mono-ui text-xs tracking-wide" style={{ color: 'var(--accent-soft)' }}>
                    {job.period}
                  </p>
                  <p className="mt-2 font-mono-ui text-xs text-dim">{job.location}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-[1.4rem]">
                    {job.role}
                  </h3>
                  <p className="mt-1.5 font-mono-ui text-[0.8rem] text-dim">{job.company}</p>

                  <ul className="mt-5 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                        <span
                          className="mt-[0.58rem] h-[5px] w-[5px] shrink-0 rounded-full"
                          style={{ backgroundColor: 'var(--accent)', opacity: 0.9 }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

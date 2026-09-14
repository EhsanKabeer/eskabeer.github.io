import { GraduationCap } from 'lucide-react';
import { education } from '../data/content';
import { Reveal } from './Reveal';

export function Education() {
  return (
    <section className="relative px-5 pb-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="card p-7 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: 'rgba(139,124,255,0.12)',
                    border: '1px solid rgba(139,124,255,0.25)',
                    color: 'var(--accent-soft)',
                  }}
                >
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="eyebrow mb-2">Education</p>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {education.school}
                  </h3>
                  <p className="mt-1 text-base text-muted">{education.degree}</p>
                  <p className="mt-1 font-mono-ui text-xs text-dim">
                    {education.location} · {education.gpa}
                  </p>
                </div>
              </div>
              <p
                className="font-mono-ui text-xs md:text-right"
                style={{ color: 'var(--accent-soft)' }}
              >
                {education.period}
              </p>
            </div>

            <div className="mt-7 border-t pt-6" style={{ borderColor: 'var(--line)' }}>
              <p className="mb-3 font-mono-ui text-xs text-dim">Relevant coursework</p>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span key={course} className="chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

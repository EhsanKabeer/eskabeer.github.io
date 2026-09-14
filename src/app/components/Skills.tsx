import { skills } from '../data/content';

/** Visual identity only — one colour per group, matching the project accents. */
const groupAccents = ['#7c6eff', '#2dd4bf', '#f59e0b'];
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="What I reach for day to day, grouped by how I actually use it."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.group} delay={index * 90}>
              <div
                className="card h-full p-6"
                style={{ ['--card-accent' as string]: groupAccents[index % groupAccents.length] }}
              >
                <h3 className="text-sm font-semibold tracking-tight text-white">{group.group}</h3>
                <div className="group-rule my-4" />
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

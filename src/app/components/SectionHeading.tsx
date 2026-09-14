import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{description}</p>
      )}
      <div
        className="mt-6 h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, rgba(139,124,255,0.6) 0%, rgba(255,255,255,0.10) 28%, transparent 100%)',
        }}
      />
    </Reveal>
  );
}

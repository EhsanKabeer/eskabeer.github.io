import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mb-14 md:mb-16">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-[2rem] font-bold leading-tight tracking-tight text-white md:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted">{description}</p>
      )}
    </Reveal>
  );
}

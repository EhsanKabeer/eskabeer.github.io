import { profile } from '../data/content';

export function Footer() {
  return (
    <footer className="relative px-5 pb-10 md:px-8">
      <div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t pt-8 sm:flex-row"
        style={{ borderColor: 'var(--line)' }}
      >
        <p className="font-mono-ui text-xs text-dim">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono-ui text-xs text-dim">Built with React, Vite & Tailwind</p>
      </div>
    </footer>
  );
}

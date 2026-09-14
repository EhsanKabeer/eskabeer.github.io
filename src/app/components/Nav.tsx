import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/content';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(5,6,12,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--line)' : 'transparent'}`,
      }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-mono-ui text-sm font-medium tracking-tight text-white"
        >
          ehsan<span style={{ color: 'var(--accent)' }}>.</span>kabeer
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="rounded-lg px-3 py-2 text-sm transition-colors"
              style={{
                color: active === link.id ? 'var(--text)' : 'var(--text-muted)',
                backgroundColor: active === link.id ? 'rgba(255,255,255,0.06)' : 'transparent',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="ml-3 rounded-lg px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(100deg, var(--accent) 0%, #6d5ef0 100%)' }}
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden text-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden px-5 pb-4"
          style={{
            backgroundColor: 'rgba(5,6,12,0.96)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          <div className="flex flex-col gap-1 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="rounded-lg px-3 py-3 text-left text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 rounded-lg px-4 py-3 text-center text-sm font-medium text-white"
              style={{ background: 'linear-gradient(100deg, var(--accent) 0%, #6d5ef0 100%)' }}
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

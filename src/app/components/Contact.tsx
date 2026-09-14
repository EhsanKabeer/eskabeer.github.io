import { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../data/content';
import { Reveal } from './Reveal';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${form.name || 'someone'}`;
    const body = `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const fieldStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--line)',
    color: 'var(--text)',
  };

  return (
    <section id="contact" className="relative px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow mb-3">Contact</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Let's build something
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              I'm looking for software engineering internships and always happy to talk about mobile,
              full-stack, or ML work. The fastest way to reach me is email.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 text-base text-muted transition-colors hover:text-white"
              >
                <Mail size={17} style={{ color: 'var(--accent-soft)' }} />
                {profile.email}
                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-base text-muted transition-colors hover:text-white"
              >
                <Github size={17} style={{ color: 'var(--accent-soft)' }} />
                github.com/EhsanKabeer
                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-base text-muted transition-colors hover:text-white"
              >
                <Linkedin size={17} style={{ color: 'var(--accent-soft)' }} />
                LinkedIn
                <ArrowUpRight
                  size={15}
                  className="opacity-0 transition-opacity group-hover:opacity-100"
                />
              </a>
              <p className="flex items-center gap-3 text-base text-dim">
                <MapPin size={17} style={{ color: 'var(--accent-soft)' }} />
                {profile.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <form onSubmit={handleSubmit} className="card p-6 md:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono-ui text-xs text-dim">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-lg px-3 text-sm outline-none transition-colors"
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block font-mono-ui text-xs text-dim">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-lg px-3 text-sm outline-none transition-colors"
                    style={fieldStyle}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block font-mono-ui text-xs text-dim">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg px-3 py-3 text-sm outline-none transition-colors"
                  style={fieldStyle}
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-lg py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(100deg, var(--accent) 0%, #6d5ef0 100%)',
                  boxShadow: '0 8px 28px -14px rgba(139,124,255,0.9)',
                }}
              >
                Send message
              </button>

              <p className="mt-3 text-center font-mono-ui text-[0.68rem] text-dim">
                {sent ? (
                  <>
                    Opening your email app — if nothing happened, write to{' '}
                    <a href={`mailto:${profile.email}`} className="underline">
                      {profile.email}
                    </a>
                    .
                  </>
                ) : (
                  'Opens in your email client — no data is stored.'
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

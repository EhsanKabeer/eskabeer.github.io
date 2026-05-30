import { useState } from 'react';
import { MapPin, Github, Linkedin } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

const CONTACT_EMAIL = 'eskabeer@umich.edu';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio inquiry from ${formData.name || 'someone'}`;
    const body = `${formData.message}\n\n— ${formData.name}${formData.email ? ` (${formData.email})` : ''}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Let's Connect
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Have a project in mind? Let's create something amazing together.
        </p>

        <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
          <MapPin size={18} />
          <span>Ann Arbor, Michigan</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-2 text-center">
              Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-800/50 border-gray-700 focus:border-purple-500 h-12"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-center">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-800/50 border-gray-700 focus:border-purple-500 h-12"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-2 text-center">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-800/50 border-gray-700 focus:border-purple-500 min-h-[120px] resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 hover:from-blue-600 hover:via-purple-600 hover:to-purple-700 text-white font-medium"
          >
            Send Message
          </Button>
          {sent && (
            <p className="text-center text-sm text-green-400">
              Opening your email app... if nothing happens, reach me at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-green-300">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          )}
        </form>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/EhsanKabeer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ehsan-kabeer-401129274/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-400 hover:text-white transition-colors">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}

import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 bg-clip-text text-transparent">
          Ehsan Kabeer
        </h1>
        <p className="text-xl md:text-2xl text-gray-400">
          CS Student @ UMich
        </p>
      </div>
      
      <button
        onClick={scrollToProjects}
        className="absolute bottom-12 animate-bounce cursor-pointer text-gray-400 hover:text-white transition-colors"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

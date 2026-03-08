const skills = [
  'C',
  'C++',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Swift',
  'Python',
  'MongoDB',
  'Firebase',
];

export function Skills() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Skills & Technologies</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 rounded-xl px-6 py-8 text-center hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <span className="text-lg font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

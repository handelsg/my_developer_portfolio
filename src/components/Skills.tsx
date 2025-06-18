
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 80 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades <span className="text-green-400">Técnicas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="bg-black p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-8 text-green-400 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-3">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-green-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-800 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { Code2, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "React", level: 4 },
        { name: "TypeScript", level: 4 },
        { name: "Next.js", level: 3 },
        { name: "Tailwind CSS", level: 5 },
        { name: "JavaScript", level: 4 }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 4 },
        { name: "Python", level: 3 },
        { name: "Express.js", level: 4 },
        { name: "PostgreSQL", level: 3 },
        { name: "MongoDB", level: 3 }
      ]
    },
    {
      title: "Ferramentas",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 5 },
        { name: "Docker", level: 3 },
        { name: "AWS", level: 3 },
        { name: "Figma", level: 4 },
        { name: "VS Code", level: 5 }
      ]
    }
  ];

  const getLevelText = (level: number) => {
    switch (level) {
      case 5: return "Expert";
      case 4: return "Avançado";
      case 3: return "Intermediário";
      case 2: return "Básico";
      default: return "Iniciante";
    }
  };

  const getLevelWidth = (level: number) => {
    return `${(level / 5) * 100}%`;
  };

  const getLevelColor = (level: number) => {
    switch (level) {
      case 5: return "from-green-400 to-green-600";
      case 4: return "from-green-500 to-green-700";
      case 3: return "from-yellow-400 to-yellow-600";
      case 2: return "from-orange-400 to-orange-600";
      default: return "from-red-400 to-red-600";
    }
  };

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
              <div className="flex items-center gap-3 mb-8">
                <div className="text-green-400">{category.icon}</div>
                <h3 className="text-2xl font-bold text-green-400">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-green-400 font-semibold text-sm">
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                        style={{ 
                          width: getLevelWidth(skill.level),
                          animation: `skillProgress 1.5s ease-out forwards`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-black p-6 rounded-xl border border-green-500/20">
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              <span className="text-sm text-gray-400">Expert (5/5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-gradient-to-r from-green-500 to-green-700 rounded-full"></div>
              <span className="text-sm text-gray-400">Avançado (4/5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
              <span className="text-sm text-gray-400">Intermediário (3/5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
              <span className="text-sm text-gray-400">Básico (2/5)</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes skillProgress {
            from { 
              width: 0%; 
              transform: scaleX(0);
            }
            to { 
              width: var(--target-width);
              transform: scaleX(1);
            }
          }
        `
      }} />
    </section>
  );
};

export default Skills;

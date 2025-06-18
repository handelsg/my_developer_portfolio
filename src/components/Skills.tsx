
import React from 'react';
import { Star, StarHalf } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "Next.js", level: 4 },
        { name: "Tailwind CSS", level: 5 },
        { name: "JavaScript", level: 5 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 4 },
        { name: "Python", level: 4 },
        { name: "Express.js", level: 4 },
        { name: "PostgreSQL", level: 3 },
        { name: "MongoDB", level: 3 }
      ]
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", level: 5 },
        { name: "Docker", level: 3 },
        { name: "AWS", level: 3 },
        { name: "Figma", level: 4 },
        { name: "VS Code", level: 5 }
      ]
    }
  ];

  const renderStars = (level: number) => {
    const stars = [];
    const fullStars = Math.floor(level);
    const hasHalfStar = level % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={16} className="fill-green-400 text-green-400" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half" size={16} className="fill-green-400 text-green-400" />
      );
    }
    
    const emptyStars = 5 - Math.ceil(level);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} className="text-gray-600" />
      );
    }
    
    return stars;
  };

  const getLevelText = (level: number) => {
    if (level >= 4.5) return "Avançado";
    if (level >= 3.5) return "Intermediário";
    if (level >= 2.5) return "Básico";
    return "Iniciante";
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
              <h3 className="text-2xl font-bold mb-8 text-green-400 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-green-400 font-semibold text-sm">
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {renderStars(skill.level)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-black p-4 rounded-xl border border-green-500/20">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={12} className="fill-green-400 text-green-400" />
                ))}
              </div>
              <span className="text-sm text-gray-400">Avançado</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4].map(i => (
                  <Star key={i} size={12} className="fill-green-400 text-green-400" />
                ))}
                <Star size={12} className="text-gray-600" />
              </div>
              <span className="text-sm text-gray-400">Intermediário</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3].map(i => (
                  <Star key={i} size={12} className="fill-green-400 text-green-400" />
                ))}
                {[1,2].map(i => (
                  <Star key={`empty-${i}`} size={12} className="text-gray-600" />
                ))}
              </div>
              <span className="text-sm text-gray-400">Básico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

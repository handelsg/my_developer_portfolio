
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Desenvolvedor Full Stack Sênior",
      period: "2022 - Presente",
      description: "Lidero o desenvolvimento de aplicações web complexas, mentoro desenvolvedores júnior e colaboro na arquitetura de sistemas escaláveis.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      achievements: [
        "Reduziu tempo de carregamento das aplicações em 40%",
        "Implementou arquitetura de microserviços",
        "Mentoria de 3 desenvolvedores júnior"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Desenvolvedor Frontend",
      period: "2020 - 2022",
      description: "Desenvolvi interfaces modernas e responsivas, integrei APIs RESTful e participei ativamente no processo de UX/UI design.",
      technologies: ["Vue.js", "JavaScript", "SASS", "Firebase", "Figma"],
      achievements: [
        "Aumentou taxa de conversão em 25%",
        "Implementou sistema de design consistente",
        "Otimizou performance para dispositivos móveis"
      ]
    },
    {
      company: "WebAgency Pro",
      position: "Desenvolvedor Frontend Júnior",
      period: "2019 - 2020",
      description: "Minha primeira experiência profissional, onde aprendi as bases do desenvolvimento web e trabalhei em projetos variados para diferentes clientes.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress"],
      achievements: [
        "Entregou mais de 15 projetos para clientes",
        "Aprendeu fundamentos de SEO e acessibilidade",
        "Contribuiu para melhoria de processos internos"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experiência Profissional
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Minha jornada profissional e as contribuições que fiz em cada empresa
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.company} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-cyan-400">{exp.position}</h3>
                      <p className="text-xl text-purple-400 font-semibold">{exp.company}</p>
                      <p className="text-gray-400">{exp.period}</p>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2 text-cyan-400">Principais conquistas:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start">
                            <span className="text-cyan-400 mr-2">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm font-medium border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

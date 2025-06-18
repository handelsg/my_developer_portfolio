
import React from 'react';
import { Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Desenvolvedor Full Stack Sênior",
      period: "2022 - Presente",
      description: "Liderança técnica no desenvolvimento de aplicações web escaláveis, mentoria de desenvolvedores júnior e definição de arquiteturas de sistemas.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
      achievements: [
        "Reduziu tempo de carregamento das aplicações em 40%",
        "Implementou arquitetura de microserviços robusta",
        "Mentoria de 3 desenvolvedores júnior com crescimento comprovado"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Desenvolvedor Frontend",
      period: "2020 - 2022",
      description: "Desenvolvimento de interfaces modernas e responsivas, integração de APIs RESTful e colaboração ativa no processo de UX/UI design.",
      technologies: ["Vue.js", "JavaScript", "SASS", "Firebase", "Figma"],
      achievements: [
        "Aumentou taxa de conversão em 25% através de otimizações UX",
        "Implementou sistema de design consistente em toda aplicação",
        "Otimizou performance para dispositivos móveis"
      ]
    },
    {
      company: "WebAgency Pro",
      position: "Desenvolvedor Frontend Júnior",
      period: "2019 - 2020",
      description: "Início da carreira profissional com foco em desenvolvimento web, aprendizado das melhores práticas e entrega de projetos para diversos clientes.",
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "WordPress"],
      achievements: [
        "Entregou mais de 15 projetos para clientes diversos",
        "Dominou fundamentos de SEO e acessibilidade web",
        "Contribuiu ativamente para melhoria de processos internos"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiência <span className="text-green-400">Profissional</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trajetória profissional com foco em crescimento contínuo e entrega de resultados
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="bg-black p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                    <p className="text-xl text-green-400 font-semibold mb-4">{exp.company}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-green-400">Principais Conquistas:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start">
                            <span className="text-green-400 mr-3 mt-1">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-green-400 rounded-lg text-sm font-medium border border-green-500/20"
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


import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "Universidade Federal de Tecnologia",
      degree: "Bacharelado em Ciência da Computação",
      period: "2016 - 2020",
      description: "Formação sólida em fundamentos da computação, algoritmos, estruturas de dados e engenharia de software.",
      highlights: [
        "Projeto de conclusão em Machine Learning",
        "Monitor de Programação por 2 semestres",
        "Participação em hackathons universitários"
      ]
    },
    {
      institution: "Rocketseat",
      degree: "Bootcamp GoStack",
      period: "2021",
      description: "Bootcamp intensivo focado em desenvolvimento full-stack com as tecnologias mais modernas do mercado.",
      highlights: [
        "Desenvolvimento de 3 aplicações completas",
        "Metodologias ágeis e clean code",
        "Deploy e DevOps"
      ]
    },
    {
      institution: "AWS",
      degree: "AWS Solutions Architect Associate",
      period: "2022",
      description: "Certificação em arquitetura de soluções na nuvem AWS, cobrindo desde fundamentos até práticas avançadas.",
      highlights: [
        "Arquitetura de aplicações escaláveis",
        "Serviços de computação e armazenamento",
        "Segurança e otimização de custos"
      ]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Formação
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Minha jornada educacional e certificações que me prepararam para os desafios atuais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div key={edu.institution} className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                <p className="text-lg text-purple-400 font-semibold">{edu.institution}</p>
                <p className="text-gray-400">{edu.period}</p>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
              
              <div>
                <h4 className="text-lg font-semibold mb-2 text-cyan-400">Destaques:</h4>
                <ul className="space-y-1">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-cyan-400 mr-2">▸</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

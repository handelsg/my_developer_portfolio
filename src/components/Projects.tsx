
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com painel administrativo, sistema de pagamentos integrado e gestão avançada de estoque.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management System",
      description: "Sistema de gerenciamento de tarefas com colaboração em tempo real, notificações push e dashboard de analytics.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Shadcn/ui"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Dashboard meteorológico com previsões detalhadas, mapas interativos e sistema de alertas personalizados.",
      technologies: ["React", "D3.js", "Express.js", "MongoDB", "Chart.js"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      title: "Social Media Analytics",
      description: "Ferramenta profissional de análise de redes sociais com visualização de dados e relatórios automatizados.",
      technologies: ["Vue.js", "Python", "FastAPI", "Redis", "Docker"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos em <span className="text-green-400">Destaque</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Seleção dos meus principais projetos que demonstram experiência técnica e capacidade de entrega
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="group bg-gray-900 rounded-2xl overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-green-400">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-black text-green-400 rounded-lg text-sm font-medium border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                  >
                    <Github size={20} />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

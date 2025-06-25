
import React from 'react';
import { GitBranch, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('project1Title'),
      description: t('project1Description'),
      technologies: ["Next.js", "FastAPI", "MongoDB", "IA Generativa", "Python"],
      github: "https://github.com/handelsg/project-tcc-frontend",
      demo: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      title: t('project2Title'),
      description: t('project2Description'),
      technologies: ["ASP.NET MVC", "C#", "SQL Server", "Entity Framework", "Bootstrap"],
      github: "https://github.com/handelsg/ecommerce-completo-aspnet-mvc",
      demo: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: t('project3Title'),
      description: t('project3Description'),
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Swagger"],
      github: "https://github.com/handelsg/ECOMMERCEAPI",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: t('project4Title'),
      description: t('project4Description'),
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/handelsg",
      demo: "#",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('projectsTitle')} <span className="text-green-400">{t('projectsHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('projectsSubtitle')}
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                  >
                    <GitBranch size={20} />
                    <span>{t('viewCode')}</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    <ExternalLink size={20} />
                    <span>{t('viewDemo')}</span>
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

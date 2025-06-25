
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Banese",
      position: t('frontendDeveloper'),
      period: "Jul 2024 - " + t('present'),
      location: "Sergipe, Brasil",
      description: t('baneseFrontendDescription'),
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Scrum"],
      achievements: [
        t('baneseFrontendAchievement1'),
        t('baneseFrontendAchievement2'),
        t('baneseFrontendAchievement3'),
        t('baneseFrontendAchievement4'),
        t('baneseFrontendAchievement5')
      ]
    },
    {
      company: "Banese LABES",
      position: t('aiResearcherDeveloper'),
      period: "Jan 2024 - Jul 2024",
      location: "Sergipe, Brasil",
      description: t('baneseLabesDescription'),
      technologies: ["Python", "React", "Neural Networks", "Generative AI", "Machine Learning"],
      achievements: [
        t('baneseLabesAchievement1'),
        t('baneseLabesAchievement2'),
        t('baneseLabesAchievement3'),
        t('baneseLabesAchievement4')
      ]
    },
    {
      company: t('publicSecuritySecretary'),
      position: t('fullstackDeveloper'),
      period: "Jan 2023 - Dez 2024",
      location: "Sergipe, Brasil",
      description: t('sspDescription'),
      technologies: [".NET", "C#", "Angular", "JavaScript", "HTML", "CSS", "SQL Server"],
      achievements: [
        t('sspAchievement1'),
        t('sspAchievement2'),
        t('sspAchievement3'),
        t('sspAchievement4')
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('experienceTitle')} <span className="text-green-400">{t('professional')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('experienceSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.company + exp.period} className="bg-black p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">{exp.period}</span>
                      <MapPin className="w-4 h-4 text-gray-400 ml-4" />
                      <span className="text-gray-400 text-sm">{exp.location}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                    <p className="text-xl text-green-400 font-semibold mb-4">{exp.company}</p>
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-green-400">{t('mainAchievements')}</h4>
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


import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      institution: "Universidade Federal de Tecnologia",
      degree: t('computerScienceDegree'),
      period: "2016 - 2020",
      type: "graduation",
      description: t('computerScienceDescription'),
      highlights: [
        t('computerScienceHighlight1'),
        t('computerScienceHighlight2'),
        t('computerScienceHighlight3')
      ]
    },
    {
      institution: "Rocketseat",
      degree: t('nextjsCourseDegree'),
      period: "2021",
      type: "course",
      description: t('nextjsCourseDescription'),
      highlights: [
        t('nextjsCourseHighlight1'),
        t('nextjsCourseHighlight2'),
        t('nextjsCourseHighlight3')
      ]
    },
    {
      institution: "Google Cloud",
      degree: t('googleCloudDegree'),
      period: "2022",
      type: "certification",
      description: t('googleCloudDescription'),
      highlights: [
        t('googleCloudHighlight1'),
        t('googleCloudHighlight2'),
        t('googleCloudHighlight3')
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'graduation': return <GraduationCap className="w-6 h-6" />;
      case 'certification': return <Award className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('educationTitle')} <span className="text-green-400">{t('educationHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('educationSubtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={edu.institution} className="bg-gray-900 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 border border-green-500/30">
                    {getIcon(edu.type)}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-green-400 mb-2">{edu.degree}</h3>
                      <p className="text-xl text-white font-semibold">{edu.institution}</p>
                    </div>
                    <span className="text-gray-400 font-medium mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{edu.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-400">{t('mainHighlights')}</h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-3 mt-1">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

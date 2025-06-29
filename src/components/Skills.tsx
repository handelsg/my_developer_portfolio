
import React from 'react';
import { Code2, Database, Wrench, Users, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const hardSkillCategories = [
    {
      title: t('frontend'),
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Next.js", level: 5 },
        { name: "React", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "JavaScript", level: 5 },
        { name: "Tailwind CSS", level: 5 }
      ]
    },
    {
      title: t('backend'),
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "C#", level: 4 },
        { name: "ASP.NET", level: 4 },
        { name: "Python", level: 4 },
        { name: "Node.js", level: 3 },
        { name: "SQL", level: 4 }
      ]
    },
    {
      title: t('tools'),
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 5 },
        { name: "Docker", level: 3 },
        { name: "Redis", level: 3 },
        { name: "PWA", level: 4 },
        { name: "UI/UX Design", level: 4 }
      ]
    }
  ];

  const softSkills = [
    t('teamwork'),
    t('agileMethodologies'),
    t('effectiveCommunication'),
    t('problemSolving'),
    t('criticalThinking'),
    t('continuousLearning'),
    t('projectManagement'),
    t('codeVersioning'),
    t('codeReview')
  ];

  const languages = [
    { name: t('portuguese'), level: t('native'), flag: '🇧🇷' },
    { name: t('english'), level: t('advanced'), flag: '🇺🇸' },
    { name: t('spanish'), level: t('intermediate'), flag: '🇪🇸' }
  ];

  const getLevelText = (level: number) => {
    switch (level) {
      case 5: return t('expert');
      case 4: return t('advanced');
      case 3: return t('intermediate');
      case 2: return t('basic');
      default: return t('beginner');
    }
  };

  const getLevelColor = (level: number) => {
    switch (level) {
      case 5: return '#10b981'; // green-500
      case 4: return '#22c55e'; // green-600
      case 3: return '#eab308'; // yellow-500
      case 2: return '#f97316'; // orange-500
      default: return '#ef4444'; // red-500
    }
  };

  const CircularProgress = ({ level, size = 80 }: { level: number; size?: number }) => {
    const percentage = (level / 5) * 100;
    const strokeWidth = 6;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#374151"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={getLevelColor(level)}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              animation: `circleProgress-${level} 2s ease-out forwards`
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">{level}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('skillsTitle').split(' ')[0]} <span className="text-green-400">{t('skillsTitle').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('skillsSubtitle')}
          </p>
        </div>

        {/* Hard Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-green-400">{t('hardSkills')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {hardSkillCategories.map((category) => (
              <div key={category.title} className="bg-black p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-green-400">{category.icon}</div>
                  <h4 className="text-2xl font-bold text-green-400">{category.title}</h4>
                </div>
                
                <div className="space-y-8">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-6">
                      <CircularProgress level={skill.level} size={60} />
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-white font-medium text-lg">{skill.name}</span>
                        </div>
                        <span className="text-green-400 font-semibold text-sm">
                          {getLevelText(skill.level)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-green-400">{t('softSkills')}</h3>
          <div className="bg-black p-8 rounded-2xl border border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-green-400" />
              <h4 className="text-xl font-bold text-green-400">{t('interpersonalSkills')}</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-900 rounded-lg border border-green-500/10">
                  <span className="text-green-400">▸</span>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-green-400">{t('languagesSpoken')}</h3>
          <div className="bg-black p-8 rounded-2xl border border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-green-400" />
              <h4 className="text-xl font-bold text-green-400">{t('communicationLanguages')}</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-green-500/10">
                  <span className="text-3xl">{lang.flag}</span>
                  <div>
                    <p className="text-white font-semibold">{lang.name}</p>
                    <p className="text-green-400 text-sm">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-black p-6 rounded-xl border border-green-500/20">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400">{t('expert')} (5/5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-600 rounded-full"></div>
              <span className="text-sm text-gray-400">{t('advanced')} (4/5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-gray-400">{t('intermediate')} (3/5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-400">{t('basic')} (2/5)</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes circleProgress-1 {
            from { stroke-dashoffset: ${2 * Math.PI * 27}; }
            to { stroke-dashoffset: ${2 * Math.PI * 27 - (0.2 * 2 * Math.PI * 27)}; }
          }
          @keyframes circleProgress-2 {
            from { stroke-dashoffset: ${2 * Math.PI * 27}; }
            to { stroke-dashoffset: ${2 * Math.PI * 27 - (0.4 * 2 * Math.PI * 27)}; }
          }
          @keyframes circleProgress-3 {
            from { stroke-dashoffset: ${2 * Math.PI * 27}; }
            to { stroke-dashoffset: ${2 * Math.PI * 27 - (0.6 * 2 * Math.PI * 27)}; }
          }
          @keyframes circleProgress-4 {
            from { stroke-dashoffset: ${2 * Math.PI * 27}; }
            to { stroke-dashoffset: ${2 * Math.PI * 27 - (0.8 * 2 * Math.PI * 27)}; }
          }
          @keyframes circleProgress-5 {
            from { stroke-dashoffset: ${2 * Math.PI * 27}; }
            to { stroke-dashoffset: ${2 * Math.PI * 27 - (1.0 * 2 * Math.PI * 27)}; }
          }
        `
      }} />
    </section>
  );
};

export default Skills;

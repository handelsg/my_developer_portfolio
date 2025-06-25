
import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Awards = () => {
  const { t } = useLanguage();

  const awards = [
    {
      title: "NASA Space Apps Challenge 2024",
      achievement: t('globalStageSelected'),
      description: t('nasaGlobalDescription'),
      icon: <Star className="w-8 h-8" />,
      year: "2024",
      color: "from-yellow-500 to-orange-500",
      category: t('globalCompetition')
    },
    {
      title: "NASA Space Apps Challenge 2023",
      achievement: t('localWinner'),
      description: t('nasaLocalDescription'),
      icon: <Trophy className="w-8 h-8" />,
      year: "2023",
      color: "from-green-500 to-emerald-500",
      category: t('localCompetition')
    },
    {
      title: "Google Cloud Skills Boost",
      achievement: t('cloudCertification'),
      description: t('googleCloudBoostDescription'),
      icon: <Medal className="w-8 h-8" />,
      year: "2022",
      color: "from-blue-500 to-cyan-500",
      category: t('professionalCertification')
    }
  ];

  return (
    <section id="awards" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('awardsTitle')} <span className="text-green-400">{t('recognitions')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('awardsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div key={award.title} className="group relative overflow-hidden">
              <div className="bg-gray-900 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 h-full">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${award.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {award.icon}
                  </div>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-2">
                    {award.category}
                  </span>
                  <div className="text-2xl font-bold text-green-400 mb-1">{award.year}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-center text-white">{award.title}</h3>
                <p className="text-lg font-semibold text-green-400 mb-4 text-center">{award.achievement}</p>
                <p className="text-gray-300 text-center leading-relaxed">{award.description}</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-900 px-8 py-4 rounded-xl border border-green-500/20">
            <Trophy className="w-6 h-6 text-green-400" />
            <span className="text-gray-300">{t('competitiveSpirit')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

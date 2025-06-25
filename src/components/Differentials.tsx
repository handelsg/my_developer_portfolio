
import React from 'react';
import { Lightbulb, Rocket, Users, TrendingUp, Code, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Differentials = () => {
  const { t } = useLanguage();

  const differentials = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t('fullstackExpertise'),
      description: t('fullstackExpertiseDesc'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('technicalTranslation'),
      description: t('technicalTranslationDesc'),
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('globalRecognition'),
      description: t('globalRecognitionDesc'),
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('collaborativeEnvironment'),
      description: t('collaborativeEnvironmentDesc'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('continuousInnovation'),
      description: t('continuousInnovationDesc'),
      color: "from-red-500 to-rose-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: t('deliveryFocus'),
      description: t('deliveryFocusDesc'),
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="differentials" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('differentialsTitle')} <span className="text-green-400">{t('competitive')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('differentialsSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div key={differential.title} className="group relative">
              <div className="bg-gray-900 p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 h-full hover:transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${differential.color} flex items-center justify-center text-white mb-4 group-hover:animate-pulse`}>
                    {differential.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-center text-green-400">{differential.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed">{differential.description}</p>
              </div>
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-500 to-green-400 p-[2px] rounded-xl">
            <div className="bg-black px-8 py-4 rounded-xl">
              <p className="text-green-400 font-semibold text-lg">
                {t('readyForChallenges')} 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;

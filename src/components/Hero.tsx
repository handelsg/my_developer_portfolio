
import React from 'react';
import { ArrowDown, Code2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6">
              <Code2 className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">{t('fullStackDeveloper')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('heroGreeting')}
              <span className="text-green-400 block">{t('heroName')}</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                {t('viewProjects')}
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                {t('getInTouch')}
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-green-500/30 via-green-400/20 to-green-600/10 rounded-full flex items-center justify-center border border-green-500/30 overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/3b810a4a-0532-4cd6-8b99-33a5f3ea2bbf.png"
                  alt="Handels Gomes"
                  className="w-80 h-80 rounded-full object-cover border-4 border-green-500/40 shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 via-transparent to-green-400/10 rounded-full"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-green-400" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

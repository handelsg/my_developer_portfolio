
import React from 'react';
import { Mail, Github, Linkedin, Download, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  const handleDownloadCV = () => {
    // For now, we'll create placeholder CV files. In a real scenario, you would host these files
    const cvUrl = language === 'en' 
      ? '/cv/handels-gomes-cv-en.pdf' 
      : '/cv/handels-gomes-cv-pt.pdf';
    
    // Create a temporary link to download the CV
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = language === 'en' ? 'Handels-Gomes-CV-EN.pdf' : 'Handels-Gomes-CV-PT.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Download CV in ${language === 'en' ? 'English' : 'Portuguese'}`);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contactTitle').split(' ')[0]} <span className="text-green-400">{t('contactTitle').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400">{t('contactInfo')}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {t('contactDescription')}
                </p>
              </div>
              
              <div className="space-y-6">
                <a
                  href="mailto:handelsantanagomes@gmail.com"
                  className="flex items-center gap-4 p-4 bg-black rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-200 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{t('email')}</p>
                    <p className="text-gray-400">handelsantanagomes@gmail.com</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/handelsg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-200 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors duration-200">
                    <Linkedin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-gray-400">linkedin.com/in/handelsg</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/handelsg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-200 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors duration-200">
                    <Github className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <p className="text-gray-400">github.com/handelsg</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-black p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-6 text-green-400">{t('downloadCV')}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {t('downloadCVDescription')}
              </p>
              
              <button
                onClick={handleDownloadCV}
                className="w-full bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 mb-8"
              >
                <Download size={24} />
                {t('downloadFullCV')}
              </button>
              
              <div className="p-6 bg-gray-800/50 rounded-xl border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  {t('currentStatus')}
                </h4>
                <p className="text-white font-medium mb-2">{t('availableForOpportunities')}</p>
                <p className="text-gray-400 text-sm">
                  {t('interestedInPositions')}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-green-500/20">
          <p className="text-gray-400">
            {t('developedWith')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React, { useState } from 'react';
import { Mail, GitBranch, Users, Download, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { sendEmail } from '@/lib/emailService';

interface EmailData {
  from_name: string;
  from_email: string;
  company: string;
  message: string;
  to_email: string;
}


const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const emailData: EmailData = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'handelsantanagomes@gmail.com',
      };
      
      await sendEmail(emailData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadCV = (lang: 'en' | 'pt') => {
    const cvUrl = lang === 'en' 
      ? '/cv/handels-gomes-cv-en.pdf' 
      : '/cv/handels-gomes-cv-pt.pdf';
    
    // Create a temporary link to download the CV
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = lang === 'en' ? 'Handels-Gomes-CV-EN.pdf' : 'Handels-Gomes-CV-PT.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log(`Download CV in ${lang === 'en' ? 'English' : 'Portuguese'}`);
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

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400">{t('contactInfo')}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {t('contactDescription')}
                </p>
              </div>
              
              <div className="space-y-6">{/* ...existing contact links... */}
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
                    <Users className="w-6 h-6 text-green-400" />
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
                    <GitBranch className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <p className="text-gray-400">github.com/handelsg</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-black p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-6 text-green-400">{t('contactForm')}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('contactFormDescription')}
              </p>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/40 rounded-lg">
                  <p className="text-green-400 font-semibold">{t('messageSent')}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/40 rounded-lg">
                  <p className="text-red-400 font-semibold">{t('messageError')}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-green-400 font-semibold mb-2">
                    {t('nameField')} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-green-500/20 rounded-lg focus:border-green-500/60 focus:outline-none text-white placeholder-gray-400"
                    placeholder={t('nameField')}
                  />
                </div>
                
                <div>
                  <label className="block text-green-400 font-semibold mb-2">
                    {t('emailField')} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-green-500/20 rounded-lg focus:border-green-500/60 focus:outline-none text-white placeholder-gray-400"
                    placeholder={t('emailField')}
                  />
                </div>
                
                <div>
                  <label className="block text-green-400 font-semibold mb-2">
                    {t('companyField')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-green-500/20 rounded-lg focus:border-green-500/60 focus:outline-none text-white placeholder-gray-400"
                    placeholder={t('companyField')}
                  />
                </div>
                
                <div>
                  <label className="block text-green-400 font-semibold mb-2">
                    {t('messageField')} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-green-500/20 rounded-lg focus:border-green-500/60 focus:outline-none text-white placeholder-gray-400 resize-vertical"
                    placeholder={t('messageField')}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  {isSubmitting ? t('sendingButton') : t('sendButton')}
                </button>
              </form>
            </div>
            
            {/* Download CV */}
            <div className="bg-black p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-6 text-green-400">{t('downloadCV')}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('downloadCVDescription')}
              </p>
              
              <div className="mb-8">
                <p className="text-green-400 font-semibold mb-4">{t('chooseLanguage')}</p>
                <div className="space-y-3">
                  <button
                    onClick={() => handleDownloadCV('en')}
                    className="w-full bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Download size={20} />
                    {t('downloadCVEnglish')}
                  </button>
                  
                  <button
                    onClick={() => handleDownloadCV('pt')}
                    className="w-full bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Download size={20} />
                    {t('downloadCVPortuguese')}
                  </button>
                </div>
              </div>
              
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

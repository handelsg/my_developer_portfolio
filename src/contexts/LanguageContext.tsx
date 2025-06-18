
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
    
    // Skills section
    skillsTitle: 'Technical Skills',
    skillsSubtitle: 'Technologies and tools I master to create complete and efficient solutions',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    beginner: 'Beginner',
    basic: 'Basic',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    expert: 'Expert',
  },
  pt: {
    // Header
    home: 'Início',
    skills: 'Habilidades',
    projects: 'Projetos',
    experience: 'Experiência',
    education: 'Formação',
    contact: 'Contato',
    
    // Skills section
    skillsTitle: 'Habilidades Técnicas',
    skillsSubtitle: 'Tecnologias e ferramentas que domino para criar soluções completas e eficientes',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Ferramentas',
    beginner: 'Iniciante',
    basic: 'Básico',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
    expert: 'Expert',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

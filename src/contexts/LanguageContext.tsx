
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
    
    // Hero section
    fullStackDeveloper: 'Full Stack Developer',
    heroGreeting: 'Hello, I am',
    heroName: 'Handels Gomes',
    heroDescription: 'Full Stack Developer specialized in creating modern and scalable digital solutions. I transform ideas into functional and impactful applications.',
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',
    
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
    
    // Contact section
    contactTitle: 'Let\'s Talk?',
    contactSubtitle: 'I\'m always open to new opportunities and challenging projects. Get in touch!',
    contactInfo: 'Contact Information',
    contactDescription: 'Full Stack Developer focused on modern technologies, seeking opportunities to contribute with innovative solutions and positively impact teams and projects.',
    email: 'Email',
    downloadCV: 'Download CV',
    downloadCVDescription: 'Download my complete resume in PDF with details about experience, projects and technical qualifications.',
    downloadFullCV: 'Download Full CV (PDF)',
    currentStatus: 'Current Status',
    availableForOpportunities: 'Available for new opportunities',
    interestedInPositions: 'Interested in Full Stack positions and challenging projects',
    developedWith: 'Developed with ❤️ using React, TypeScript and Tailwind CSS',
  },
  pt: {
    // Header
    home: 'Início',
    skills: 'Habilidades',
    projects: 'Projetos',
    experience: 'Experiência',
    education: 'Formação',
    contact: 'Contato',
    
    // Hero section
    fullStackDeveloper: 'Desenvolvedor Full Stack',
    heroGreeting: 'Olá, eu sou',
    heroName: 'Handels Gomes',
    heroDescription: 'Desenvolvedor Full Stack especializado em criar soluções digitais modernas e escaláveis. Transformo ideias em aplicações funcionais e impactantes.',
    viewProjects: 'Ver Projetos',
    getInTouch: 'Entre em Contato',
    
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
    
    // Contact section
    contactTitle: 'Vamos Conversar?',
    contactSubtitle: 'Estou sempre aberto a novas oportunidades e projetos desafiadores. Entre em contato!',
    contactInfo: 'Informações de Contato',
    contactDescription: 'Desenvolvedor Full Stack com foco em tecnologias modernas, buscando oportunidades para contribuir com soluções inovadoras e impactar positivamente equipes e projetos.',
    email: 'E-mail',
    downloadCV: 'Download CV',
    downloadCVDescription: 'Baixe meu currículo completo em PDF com detalhes sobre experiência, projetos e qualificações técnicas.',
    downloadFullCV: 'Baixar CV Completo (PDF)',
    currentStatus: 'Status Atual',
    availableForOpportunities: 'Disponível para novas oportunidades',
    interestedInPositions: 'Interessado em posições Full Stack e projetos desafiadores',
    developedWith: 'Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS',
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

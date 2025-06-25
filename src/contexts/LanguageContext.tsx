
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
    heroName: 'Handel Gomes',
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
    
    // Projects section
    projectsTitle: 'Featured',
    projectsHighlight: 'Projects',
    projectsSubtitle: 'Selection of my main projects that demonstrate technical expertise and delivery capacity',
    viewCode: 'Code',
    viewDemo: 'Demo',
    
    // Education section
    educationTitle: 'Academic',
    educationHighlight: 'Background',
    educationSubtitle: 'Continuous education and certifications that support my technical expertise',
    mainHighlights: 'Main Highlights:',
    computerScienceDegree: 'Bachelor in Computer Science',
    computerScienceDescription: 'Solid foundation in computing fundamentals, algorithms, data structures and software engineering with focus on practical applications.',
    computerScienceHighlight1: 'Final project in applied Machine Learning',
    computerScienceHighlight2: 'Programming tutor for 2 consecutive semesters',
    computerScienceHighlight3: 'Participation in university hackathons with awards',
    nextjsCourseDegree: 'Complete Next.js Course',
    nextjsCourseDescription: 'Comprehensive course focused on modern React development with Next.js, covering from fundamentals to advanced concepts and deployment.',
    nextjsCourseHighlight1: 'Development of 5 complete applications from scratch',
    nextjsCourseHighlight2: 'Server-side rendering and static generation',
    nextjsCourseHighlight3: 'Performance optimization and best practices',
    googleCloudDegree: 'Google Cloud Architect Associate',
    googleCloudDescription: 'Professional certification in Google Cloud Platform architecture, covering scalable solutions design and cloud infrastructure management.',
    googleCloudHighlight1: 'Scalable and resilient applications architecture',
    googleCloudHighlight2: 'Computing, storage and networking services',
    googleCloudHighlight3: 'Security, monitoring and cost optimization',
    
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
    heroName: 'Handel Gomes',
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
    
    // Projects section
    projectsTitle: 'Projetos em',
    projectsHighlight: 'Destaque',
    projectsSubtitle: 'Seleção dos meus principais projetos que demonstram experiência técnica e capacidade de entrega',
    viewCode: 'Código',
    viewDemo: 'Demo',
    
    // Education section
    educationTitle: 'Formação',
    educationHighlight: 'Acadêmica',
    educationSubtitle: 'Educação contínua e certificações que fundamentam minha expertise técnica',
    mainHighlights: 'Principais Destaques:',
    computerScienceDegree: 'Bacharelado em Ciência da Computação',
    computerScienceDescription: 'Formação sólida em fundamentos da computação, algoritmos, estruturas de dados e engenharia de software com foco em aplicações práticas.',
    computerScienceHighlight1: 'Projeto de conclusão em Machine Learning aplicado',
    computerScienceHighlight2: 'Monitor de Programação por 2 semestres consecutivos',
    computerScienceHighlight3: 'Participação em hackathons universitários com premiações',
    nextjsCourseDegree: 'Curso Completo de Next.js',
    nextjsCourseDescription: 'Curso abrangente focado em desenvolvimento React moderno com Next.js, cobrindo desde fundamentos até conceitos avançados e deploy.',
    nextjsCourseHighlight1: 'Desenvolvimento de 5 aplicações completas do zero',
    nextjsCourseHighlight2: 'Server-side rendering e geração estática',
    nextjsCourseHighlight3: 'Otimização de performance e boas práticas',
    googleCloudDegree: 'Google Cloud Architect Associate',
    googleCloudDescription: 'Certificação profissional em arquitetura Google Cloud Platform, cobrindo design de soluções escaláveis e gerenciamento de infraestrutura em nuvem.',
    googleCloudHighlight1: 'Arquitetura de aplicações escaláveis e resilientes',
    googleCloudHighlight2: 'Serviços de computação, armazenamento e networking',
    googleCloudHighlight3: 'Segurança, monitoramento e otimização de custos',
    
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

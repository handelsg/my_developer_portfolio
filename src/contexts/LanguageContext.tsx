
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
    professionalSummary: 'Professional Summary',
    professionalSummaryText: 'Proactive and committed Full Stack developer in delivering efficient and well-structured solutions. I seek a professional challenge where I can apply my experience in developing innovative systems, combining technology and usability to create robust and scalable applications.',
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',
    
    // Skills section
    skillsTitle: 'Technical Skills',
    skillsSubtitle: 'Technologies and tools I master to create complete and efficient solutions',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools',
    hardSkills: 'Hard Skills',
    softSkills: 'Soft Skills',
    interpersonalSkills: 'Interpersonal Skills',
    languagesSpoken: 'Languages Spoken',
    communicationLanguages: 'Communication Languages',
    teamwork: 'Teamwork',
    agileMethodologies: 'Agile Methodologies (Scrum)',
    effectiveCommunication: 'Effective Communication',
    problemSolving: 'Problem Solving',
    criticalThinking: 'Critical Thinking',
    continuousLearning: 'Continuous Learning',
    projectManagement: 'Project Management',
    codeVersioning: 'Code Versioning',
    codeReview: 'Code Review',
    portuguese: 'Portuguese',
    english: 'English',
    spanish: 'Spanish',
    native: 'Native',
    beginner: 'Beginner',
    basic: 'Basic',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    expert: 'Expert',

    // Awards section
    awardsTitle: 'Awards and',
    recognitions: 'Recognitions',
    awardsSubtitle: 'Recognition received for technical excellence and innovation in global competitions',
    globalStageSelected: 'Selected for Global Stage',
    localWinner: 'Local Winner',
    cloudCertification: 'Cloud Certification',
    nasaGlobalDescription: 'Selected among thousands of teams worldwide to compete in the global stage of NASA Space Apps Challenge, representing innovative solutions for space challenges.',
    nasaLocalDescription: 'Winner of the local edition of NASA Space Apps Challenge, developing creative solutions for space exploration and Earth observation challenges.',
    googleCloudBoostDescription: 'Professional certification in Google Cloud Platform, demonstrating expertise in cloud architecture and scalable solutions.',
    globalCompetition: 'Global Competition',
    localCompetition: 'Local Competition',
    professionalCertification: 'Professional Certification',
    competitiveSpirit: 'Innovation and competitive spirit driving technological excellence',

    // Experience section
    experienceTitle: 'Professional',
    professional: 'Experience',
    experienceSubtitle: 'Professional trajectory focused on continuous growth and results delivery',
    present: 'Present',
    frontendDeveloper: 'Frontend Developer',
    aiResearcherDeveloper: 'AI Researcher and Developer',
    fullstackDeveloper: 'Fullstack Developer',
    publicSecuritySecretary: 'Public Security Secretary of Sergipe State',
    mainAchievements: 'Main Achievements:',
    
    // Banese Frontend
    baneseFrontendDescription: 'Development of high-performance web applications using Next.js. Working in agile environment, participating in sprint planning, daily meetings and retrospectives.',
    baneseFrontendAchievement1: 'Development of high-performance web applications using Next.js',
    baneseFrontendAchievement2: 'Working in agile environment with Scrum methodology',
    baneseFrontendAchievement3: 'Architectural decisions for scalable and sustainable solutions',
    baneseFrontendAchievement4: 'Translation of complex financial concepts into intuitive interfaces',
    baneseFrontendAchievement5: 'Collaboration with stakeholders to align development efforts',

    // Banese LABES
    baneseLabesDescription: 'In-depth study of neural networks and language models. Practical application of generative AI in an innovative project.',
    baneseLabesAchievement1: 'In-depth study of neural networks and language models',
    baneseLabesAchievement2: 'Practical application of generative AI in innovative project',
    baneseLabesAchievement3: 'Development of dynamic interfaces using React for AI integration',
    baneseLabesAchievement4: 'Consolidation of practical knowledge in emerging technologies',

    // SSP
    sspDescription: 'Development and maintenance of systems using .NET, C#, Angular, JavaScript, HTML and CSS. Creation of integrated systems to optimize critical public management processes.',
    sspAchievement1: 'Development and maintenance of systems using .NET and Angular',
    sspAchievement2: 'Creation of integrated systems for critical public management processes',
    sspAchievement3: 'Implementation of new features and performance optimization',
    sspAchievement4: 'Collaborative work with multidisciplinary teams ensuring quality deliveries',

    // Differentials section
    differentialsTitle: 'Competitive',
    competitive: 'Differentials',
    differentialsSubtitle: 'What makes me unique in the technology market and ready for new challenges',
    fullstackExpertise: 'Solid Frontend and Backend Experience',
    fullstackExpertiseDesc: 'Complete domain of the software development cycle, from user interface to server architecture.',
    technicalTranslation: 'Technical Concept Translation',
    technicalTranslationDesc: 'Ability to transform complex technical concepts into intuitive and accessible solutions.',
    globalRecognition: 'Global Technology Recognition',
    globalRecognitionDesc: 'Proven track record of participation and recognition in global technology challenges.',
    collaborativeEnvironment: 'Agile and Collaborative Environments',
    collaborativeEnvironmentDesc: 'Skill to work in agile and collaborative environments, ensuring quality deliveries.',
    continuousInnovation: 'Continuous Learning and Innovation',
    continuousInnovationDesc: 'Commitment to continuous learning and technological innovation.',
    deliveryFocus: 'Results and Quality Focus',
    deliveryFocusDesc: 'Strong focus on delivering results and maintaining high quality standards.',
    readyForChallenges: 'Ready for new challenges and innovative projects',
    
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
    professionalSummary: 'Resumo Profissional',
    professionalSummaryText: 'Desenvolvedor Fullstack proativo e comprometido em entregar soluções eficientes e bem estruturadas. Busco um desafio profissional onde possa aplicar minha experiência no desenvolvimento de sistemas inovadores, combinando tecnologia e usabilidade para criar aplicações robustas e escaláveis.',
    viewProjects: 'Ver Projetos',
    getInTouch: 'Entre em Contato',
    
    // Skills section
    skillsTitle: 'Habilidades Técnicas',
    skillsSubtitle: 'Tecnologias e ferramentas que domino para criar soluções completas e eficientes',
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Ferramentas',
    hardSkills: 'Hard Skills',
    softSkills: 'Soft Skills',
    interpersonalSkills: 'Habilidades Interpessoais',
    languagesSpoken: 'Idiomas Falados',
    communicationLanguages: 'Idiomas de Comunicação',
    teamwork: 'Trabalho em Equipe',
    agileMethodologies: 'Metodologias Ágeis (Scrum)',
    effectiveCommunication: 'Comunicação Eficaz',
    problemSolving: 'Resolução de Problemas',
    criticalThinking: 'Pensamento Crítico',
    continuousLearning: 'Aprendizagem Contínua',
    projectManagement: 'Gestão de Projetos',
    codeVersioning: 'Versionamento de Código',
    codeReview: 'Revisão de Código',
    portuguese: 'Português',
    english: 'Inglês',
    spanish: 'Espanhol',
    native: 'Nativo',
    beginner: 'Iniciante',
    basic: 'Básico',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
    expert: 'Expert',

    // Awards section
    awardsTitle: 'Prêmios e',
    recognitions: 'Reconhecimentos',
    awardsSubtitle: 'Reconhecimentos recebidos por excelência técnica e inovação em competições globais',
    globalStageSelected: 'Selecionado para Etapa Global',
    localWinner: 'Vencedor Local',
    cloudCertification: 'Certificação Cloud',
    nasaGlobalDescription: 'Selecionado entre milhares de equipes mundialmente para competir na etapa global do NASA Space Apps Challenge, representando soluções inovadoras para desafios espaciais.',
    nasaLocalDescription: 'Vencedor da edição local do NASA Space Apps Challenge, desenvolvendo soluções criativas para desafios de exploração espacial e observação da Terra.',
    googleCloudBoostDescription: 'Certificação profissional em Google Cloud Platform, demonstrando expertise em arquitetura de nuvem e soluções escaláveis.',
    globalCompetition: 'Competição Global',
    localCompetition: 'Competição Local',
    professionalCertification: 'Certificação Profissional',
    competitiveSpirit: 'Inovação e espírito competitivo impulsionando a excelência tecnológica',

    // Experience section
    experienceTitle: 'Experiência',
    professional: 'Profissional',
    experienceSubtitle: 'Trajetória profissional com foco em crescimento contínuo e entrega de resultados',
    present: 'Presente',
    frontendDeveloper: 'Desenvolvedor Frontend',
    aiResearcherDeveloper: 'Pesquisador e Desenvolvedor em IA',
    fullstackDeveloper: 'Desenvolvedor Fullstack',
    publicSecuritySecretary: 'Secretaria de Segurança Pública do Estado de Sergipe',
    mainAchievements: 'Principais Conquistas:',
    
    // Banese Frontend
    baneseFrontendDescription: 'Desenvolvimento de aplicações web de alta performance utilizando Next.js. Atuação em ambiente ágil, participando de planejamentos de sprint, reuniões diárias e retrospectivas.',
    baneseFrontendAchievement1: 'Desenvolvimento de aplicações web de alta performance utilizando Next.js',
    baneseFrontendAchievement2: 'Atuação em ambiente ágil com metodologia Scrum',
    baneseFrontendAchievement3: 'Tomada de decisões arquiteturais para soluções escaláveis e sustentáveis',
    baneseFrontendAchievement4: 'Tradução de conceitos financeiros complexos em interfaces intuitivas',
    baneseFrontendAchievement5: 'Colaboração com stakeholders para alinhar esforços de desenvolvimento',

    // Banese LABES
    baneseLabesDescription: 'Estudo aprofundado em redes neurais e modelos de linguagem. Aplicação prática de IA generativa em projeto inovador.',
    baneseLabesAchievement1: 'Estudo aprofundado em redes neurais e modelos de linguagem',
    baneseLabesAchievement2: 'Aplicação prática de IA generativa em projeto inovador',
    baneseLabesAchievement3: 'Desenvolvimento de interfaces dinâmicas utilizando React para integração com IA',
    baneseLabesAchievement4: 'Consolidação de conhecimento prático em tecnologias emergentes',

    // SSP
    sspDescription: 'Desenvolvimento e manutenção de sistemas utilizando .NET, C#, Angular, JavaScript, HTML e CSS. Criação de sistemas integrados para otimizar processos críticos da gestão pública.',
    sspAchievement1: 'Desenvolvimento e manutenção de sistemas utilizando .NET e Angular',
    sspAchievement2: 'Criação de sistemas integrados para processos críticos da gestão pública',
    sspAchievement3: 'Implementação de novas funcionalidades e otimização de desempenho',
    sspAchievement4: 'Trabalho colaborativo com equipes multidisciplinares garantindo entregas de qualidade',

    // Differentials section
    differentialsTitle: 'Diferenciais',
    competitive: 'Competitivos',
    differentialsSubtitle: 'O que me torna único no mercado de tecnologia e pronto para novos desafios',
    fullstackExpertise: 'Experiência Sólida Frontend e Backend',
    fullstackExpertiseDesc: 'Domínio completo do ciclo de desenvolvimento de software, desde interface de usuário até arquitetura de servidor.',
    technicalTranslation: 'Tradução de Conceitos Técnicos',
    technicalTranslationDesc: 'Capacidade de transformar conceitos técnicos complexos em soluções intuitivas e acessíveis.',
    globalRecognition: 'Reconhecimento Global em Tecnologia',
    globalRecognitionDesc: 'Histórico comprovado de participação e reconhecimento em desafios globais de tecnologia.',
    collaborativeEnvironment: 'Ambientes Ágeis e Colaborativos',
    collaborativeEnvironmentDesc: 'Habilidade para trabalhar em ambientes ágeis e colaborativos, garantindo entregas de qualidade.',
    continuousInnovation: 'Aprendizado Contínuo e Inovação',
    continuousInnovationDesc: 'Comprometimento com aprendizado contínuo e inovação tecnológica.',
    deliveryFocus: 'Foco em Resultados e Qualidade',
    deliveryFocusDesc: 'Forte foco na entrega de resultados e manutenção de altos padrões de qualidade.',
    readyForChallenges: 'Pronto para novos desafios e projetos inovadores',
    
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
  const [language, setLanguage] = useState<Language>('pt');

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

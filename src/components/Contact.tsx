
import React from 'react';
import { Mail, Github, Linkedin, Download, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleDownloadCV = () => {
    console.log('Download CV');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-green-400">Conversar?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos desafiadores. Entre em contato!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-400">Informações de Contato</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  Desenvolvedor Full Stack com foco em tecnologias modernas, 
                  buscando oportunidades para contribuir com soluções inovadoras 
                  e impactar positivamente equipes e projetos.
                </p>
              </div>
              
              <div className="space-y-6">
                <a
                  href="mailto:seu.email@exemplo.com"
                  className="flex items-center gap-4 p-4 bg-black rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-200 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">E-mail</p>
                    <p className="text-gray-400">seu.email@exemplo.com</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/seu-perfil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-200 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors duration-200">
                    <Linkedin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-gray-400">linkedin.com/in/seu-perfil</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-black rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-200 group"
                >
                  <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors duration-200">
                    <Github className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <p className="text-gray-400">github.com/seu-usuario</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-black p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Download CV</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Baixe meu currículo completo em PDF com detalhes sobre 
                experiência, projetos e qualificações técnicas.
              </p>
              
              <button
                onClick={handleDownloadCV}
                className="w-full bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-3 mb-8"
              >
                <Download size={24} />
                Baixar CV Completo (PDF)
              </button>
              
              <div className="p-6 bg-gray-800/50 rounded-xl border border-green-500/20">
                <h4 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  Status Atual
                </h4>
                <p className="text-white font-medium mb-2">Disponível para novas oportunidades</p>
                <p className="text-gray-400 text-sm">
                  Interessado em posições Full Stack e projetos desafiadores
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-green-500/20">
          <p className="text-gray-400">
            Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

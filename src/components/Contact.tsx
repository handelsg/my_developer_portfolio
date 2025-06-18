
import React from 'react';
import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';

const Contact = () => {
  const handleDownloadCV = () => {
    // Aqui você pode implementar o download do CV
    console.log('Download CV');
  };

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Vamos Conversar?
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e projetos interessantes. 
            Entre em contato comigo!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Entre em Contato</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Estou buscando novas oportunidades como desenvolvedor full-stack, 
                onde possa contribuir com minha experiência em tecnologias modernas 
                e paixão por criar soluções inovadoras.
              </p>
              
              <div className="space-y-4">
                <a
                  href="mailto:seu.email@exemplo.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <div className="bg-gray-800 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-200">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-sm text-gray-400">seu.email@exemplo.com</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com/in/seu-perfil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <div className="bg-gray-800 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-200">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-gray-400">linkedin.com/in/seu-perfil</p>
                  </div>
                </a>
                
                <a
                  href="https://github.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <div className="bg-gray-800 p-3 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-200">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-gray-400">github.com/seu-usuario</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Download CV</h3>
              <p className="text-gray-300 mb-6">
                Baixe meu currículo completo em PDF para mais detalhes sobre 
                minha experiência e qualificações.
              </p>
              
              <button
                onClick={handleDownloadCV}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
              >
                <ArrowDown size={20} />
                Baixar CV (PDF)
              </button>
              
              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-cyan-400 mb-2">Status:</h4>
                <p className="text-green-400 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Disponível para novas oportunidades
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400">
            Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-400">
            &lt;DevPortfolio/&gt;
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Início', 'Habilidades', 'Projetos', 'Experiência', 'Formação', 'Contato'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(['hero', 'skills', 'projects', 'experience', 'education', 'contact'][index])}
                className="text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-green-500/20">
            {['Início', 'Habilidades', 'Projetos', 'Experiência', 'Formação', 'Contato'].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(['hero', 'skills', 'projects', 'experience', 'education', 'contact'][index])}
                className="block text-gray-300 hover:text-green-400 transition-colors duration-200 font-medium py-3 w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

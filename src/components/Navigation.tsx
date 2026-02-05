
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/5 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/24a02f18-61cf-48b2-9d66-cad256a68099.png" 
                alt="HypeApp Logo" 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollTo('business-section')}
              className="text-white/80 hover:text-[#C9F05C] transition-colors duration-300"
            >
              Contratar influenciadores
            </button>
            <button
              onClick={() => scrollTo('influencer-section')}
              className="text-white/80 hover:text-[#FF3E94] transition-colors duration-300"
            >
              Quero ser influencer
            </button>
            <Link
              to="/murais-campanhas"
              className="text-white/80 hover:text-[#7D3FFF] transition-colors duration-300"
            >
              Murais de Campanhas
            </Link>
            <button
              onClick={() => scrollTo('influslab-section')}
              className="text-white/80 hover:text-[#7D3FFF] transition-colors duration-300"
            >
              Comunidade InflusLab
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollTo('business-section')}
              className="block w-full text-left text-white/80 hover:text-[#C9F05C] transition-colors duration-300 py-2"
            >
              Contratar influenciadores
            </button>
            <button
              onClick={() => scrollTo('influencer-section')}
              className="block w-full text-left text-white/80 hover:text-[#FF3E94] transition-colors duration-300 py-2"
            >
              Quero ser influencer
            </button>
            <Link
              to="/murais-campanhas"
              className="block w-full text-left text-white/80 hover:text-[#7D3FFF] transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Murais de Campanhas
            </Link>
            <button
              onClick={() => scrollTo('influslab-section')}
              className="block w-full text-left text-white/80 hover:text-[#7D3FFF] transition-colors duration-300 py-2"
            >
              Comunidade InflusLab
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

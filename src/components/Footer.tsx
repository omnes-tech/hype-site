
import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { title: "Termos de Uso", href: "/termos-de-uso" },
    { title: "Política de Privacidade", href: "/politica-de-privacidade" },
    { title: "Contato", href: "#" },
    { title: "Blog", href: "#" }
  ];

  return (
    <footer className="py-16 px-4 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/24a02f18-61cf-48b2-9d66-cad256a68099.png" 
                alt="HypeApp Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              A plataforma que conecta marcas e influenciadores de forma inteligente e eficiente.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      className="text-gray-400 hover:text-[#C9F05C] transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-[#C9F05C] transition-colors duration-300"
                    >
                      {link.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Fale Conosco</h4>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-[#C9F05C]" />
              <p className="text-gray-400">contato@vocenohype.com.br</p>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <p className="text-gray-400">+55 11 3834 – 5221</p>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-8 mb-4 md:mb-0">
            <span className="text-gray-400">© 2025 HypeApp. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Powered by</span>
            <span className="text-[#C9F05C] font-semibold">Você no Hype</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

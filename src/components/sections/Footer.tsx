
import { Heart } from "lucide-react";

export const Footer = () => {
  const handleContactClick = () => {
    // Trigger the WhatsApp modal by dispatching a custom event
    const event = new CustomEvent('openWhatsAppModal');
    window.dispatchEvent(event);
  };

  const footerLinks = [
    { name: "Termos de Uso", href: "/termos-de-uso" },
    { name: "Política de Privacidade", href: "/politica-de-privacidade" },
    { name: "Contato", onClick: handleContactClick },
    { name: "Blog", href: "#" }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo e descrição */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-6">
              <img 
                src="/lovable-uploads/9bc26b08-d5d1-4569-b05d-5b63028817e6.png" 
                alt="HypeApp Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              A plataforma líder em influencer marketing no Brasil. Conectamos marcas aos melhores creators para campanhas de resultado.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            {footerLinks.map((link, index) => (
              link.onClick ? (
                <button
                  key={index}
                  onClick={link.onClick}
                  className="text-gray-400 hover:text-lime-400 transition-colors text-base cursor-pointer"
                >
                  {link.name}
                </button>
              ) : (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-lime-400 transition-colors text-base"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 HypeApp. Todos os direitos reservados.
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>🇧🇷 Feito no Brasil</span>
                <span className="flex items-center gap-1">
                  Feito com <Heart className="w-4 h-4 text-red-500 fill-current" /> para creators
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

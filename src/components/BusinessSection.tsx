
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Target, CreditCard, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BusinessSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Target className="w-6 md:w-8 h-6 md:h-8 text-[#C9F05C]" />,
      title: "Contrate um mural de campanhas",
      description: "Publique suas campanhas em nosso mural e alcance milhares de influenciadores"
    },
    {
      icon: <Users className="w-6 md:w-8 h-6 md:h-8 text-[#FF3E94]" />,
      title: "Receba candidaturas de influenciadores",
      description: "Influenciadores se candidatam às suas campanhas automaticamente"
    },
    {
      icon: <CreditCard className="w-6 md:w-8 h-6 md:h-8 text-[#7D3FFF]" />,
      title: "Compre créditos para contato direto",
      description: "Fale diretamente com perfis de interesse usando nosso sistema de créditos"
    },
    {
      icon: <BarChart3 className="w-6 md:w-8 h-6 md:h-8 text-[#C9F05C]" />,
      title: "Relatórios atualizados",
      description: "Acompanhe o desempenho das suas campanhas com dados precisos"
    }
  ];

  const handleExperimentarClick = () => {
    navigate('/murais-campanhas');
    // Scroll to form after navigation
    setTimeout(() => {
      const formElement = document.getElementById('comece-agora');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="business-section" className="py-12 md:py-20 px-4 bg-gradient-to-r from-black/50 to-[#7D3FFF]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
              Como funciona para{' '}
              <span className="text-[#C9F05C]">empresas</span> e{' '}
              <span className="text-[#FF3E94]">agências</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4 text-left">
                  <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 bg-white/5 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{feature.title}</h3>
                    <p className="text-sm md:text-base text-white/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleExperimentarClick}
              size="lg"
              className="w-full md:w-auto bg-transparent border border-[#C9F05C] text-[#C9F05C] hover:bg-[#C9F05C]/10 transition-all duration-300 shadow-none px-6 md:px-8 py-3 md:py-4"
            >
              Experimentar plataforma
            </Button>
          </div>
          
          {/* Right side - Image */}
          <div className="lg:order-2 mt-8 lg:mt-0">
            <img
              src="/lovable-uploads/79c55165-3d21-4523-ac3e-b1b066b4472e.png"
              alt="Mockup do Mural de Campanhas"
              className="w-full h-auto object-contain rounded-lg max-w-md mx-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;

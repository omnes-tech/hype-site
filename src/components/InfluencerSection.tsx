
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Globe, Users, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InfluencerSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Smartphone className="w-6 md:w-8 h-6 md:h-8 text-[#C9F05C]" />,
      title: "App gratuito",
      description: "Baixe nosso app sem custo e comece a monetizar seu conteúdo hoje mesmo"
    },
    {
      icon: <Users className="w-6 md:w-8 h-6 md:h-8 text-[#FF3E94]" />,
      title: "Para todos os tamanhos",
      description: "Desde nano influenciadores até mega influenciadores, todos são bem-vindos"
    },
    {
      icon: <Globe className="w-6 md:w-8 h-6 md:h-8 text-[#7D3FFF]" />,
      title: "Você visível para grandes marcas",
      description: "Oportunidades de campanhas em todas as regiões do país"
    },
    {
      icon: <Gift className="w-6 md:w-8 h-6 md:h-8 text-[#C9F05C]" />,
      title: "Acesso aos Murais e InflusLab",
      description: "Participe das campanhas e da nossa comunidade exclusiva gratuitamente"
    }
  ];

  const handleInfluencerRedirect = () => {
    navigate('/influenciadores');
  };

  return (
    <section id="influencer-section" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Mockup */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/e76dd21d-367b-4ce0-8d79-e4b47c8e1c3b.png" 
                alt="HypeApp para influenciadores" 
                className="w-full h-auto object-contain rounded-lg max-w-md mx-auto lg:max-w-none"
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
              Como funciona para{' '}
              <span className="text-[#C9F05C]">influenciadores</span>
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
              onClick={handleInfluencerRedirect}
              size="lg"
              className="w-full md:w-auto bg-transparent border border-[#FF3E94] text-[#FF3E94] hover:bg-[#FF3E94]/10 transition-all duration-300 shadow-none px-6 md:px-8 py-3 md:py-4"
            >
              Me cadastrar no app
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerSection;

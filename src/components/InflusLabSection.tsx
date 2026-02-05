
import React from 'react';
import { Users, Video, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InflusLabSection = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-[#7D3FFF] drop-shadow-lg" style={{filter: 'drop-shadow(0 4px 8px rgba(125, 63, 255, 0.3))'}} />,
      title: "Comunidades abertas e gratuitas",
      description: "Participe de grupos de discussão e networking com outros criadores de conteúdo"
    },
    {
      icon: <Video className="w-12 h-12 text-[#FF3E94] drop-shadow-lg" style={{filter: 'drop-shadow(0 4px 8px rgba(255, 62, 148, 0.3))'}} />,
      title: "Lives com grandes influenciadores",
      description: "Acesso exclusivo a lives e mentorias com influenciadores de sucesso (plano pago)"
    },
    {
      icon: <Crown className="w-12 h-12 text-[#C9F05C] drop-shadow-lg" style={{filter: 'drop-shadow(0 4px 8px rgba(201, 240, 92, 0.3))'}} />,
      title: "Comunidades exclusivas com empresas",
      description: "Conecte-se diretamente com marcas em grupos privados e exclusivos"
    }
  ];

  return (
    <section id="influslab-section" className="py-20 px-4 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/lovable-uploads/0d1a71eb-d6c4-42cc-8514-95869ef843a7.png")'
        }}
      />
      
      {/* Floating bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Green bubbles */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-[#C9F05C]/40 rounded-full blur-sm animate-float" style={{ animationDelay: '0s', animationDuration: '8s' }} />
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-[#C9F05C]/30 rounded-full blur-sm animate-float" style={{ animationDelay: '2s', animationDuration: '10s' }} />
        <div className="absolute top-1/3 left-3/4 w-8 h-8 bg-[#C9F05C]/50 rounded-full blur-sm animate-float" style={{ animationDelay: '4s', animationDuration: '12s' }} />
        
        {/* Pink bubbles */}
        <div className="absolute top-1/2 right-20 w-20 h-20 bg-[#FF3E94]/40 rounded-full blur-sm animate-float" style={{ animationDelay: '1s', animationDuration: '9s' }} />
        <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-[#FF3E94]/30 rounded-full blur-sm animate-float" style={{ animationDelay: '3s', animationDuration: '11s' }} />
        <div className="absolute top-10 right-1/2 w-10 h-10 bg-[#FF3E94]/50 rounded-full blur-sm animate-float" style={{ animationDelay: '5s', animationDuration: '7s' }} />
        
        {/* Purple bubbles */}
        <div className="absolute bottom-1/4 left-1/2 w-18 h-18 bg-[#7D3FFF]/40 rounded-full blur-sm animate-float" style={{ animationDelay: '1.5s', animationDuration: '13s' }} />
        <div className="absolute top-3/4 right-10 w-6 h-6 bg-[#7D3FFF]/60 rounded-full blur-sm animate-float" style={{ animationDelay: '3.5s', animationDuration: '6s' }} />
        <div className="absolute top-1/4 left-1/3 w-22 h-22 bg-[#7D3FFF]/30 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s', animationDuration: '14s' }} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo - doubled in size */}
        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/bd9fa68d-3522-42cc-8ad5-5eb052b417e9.png" 
            alt="InflusLab Logo" 
            className="h-48 w-auto drop-shadow-2xl"
          />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
          InflusLab – A comunidade dos influenciadores
        </h2>
        
        <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto drop-shadow-md">
          Mais que uma plataforma, somos uma comunidade que conecta criadores de conteúdo e oferece oportunidades únicas de crescimento.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-md border border-white/30 rounded-xl p-8 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white drop-shadow-md">{feature.title}</h3>
              <p className="text-white/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 text-white font-semibold border border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg backdrop-blur-md"
          onClick={() => window.open('https://influslab.com.br/', '_blank')}
        >
          Acesse a comunidade
        </Button>
      </div>
    </section>
  );
};

export default InflusLabSection;

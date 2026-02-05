
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Heart, Users, MessageCircle, Hash, Camera, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToBusinessSection = () => {
    // Scroll para a seção "Como funciona para empresas e agências" (BusinessSection)
    const element = document.querySelector('[data-section="business"]') || document.getElementById('business-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToInfluencerSection = () => {
    // Scroll para a seção "Como funciona para influenciadores" (InfluencerSection)
    const element = document.querySelector('[data-section="influencer"]') || document.getElementById('influencer-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Banner Background */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/e6aba667-7a0f-494d-8352-8f6ad6758390.png" 
          alt="Banner Grupo Colina" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Floating particles and icons with glass effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-[float_6s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Floating marketing icons with glass effect */}
        <div className="absolute top-20 left-10 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_8s_ease-in-out_infinite]">
          <Heart className="w-5 h-5 text-[#FF3E94]" />
        </div>
        
        <div className="absolute top-1/3 right-20 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_7s_ease-in-out_infinite_1s]">
          <Users className="w-5 h-5 text-[#C9F05C]" />
        </div>
        
        <div className="absolute bottom-1/3 left-20 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_9s_ease-in-out_infinite_2s]">
          <MessageCircle className="w-5 h-5 text-[#7D3FFF]" />
        </div>
        
        <div className="absolute top-2/3 right-10 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_6s_ease-in-out_infinite_3s]">
          <Hash className="w-5 h-5 text-[#FF3E94]" />
        </div>
        
        <div className="absolute bottom-20 right-1/3 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_8s_ease-in-out_infinite_4s]">
          <Camera className="w-5 h-5 text-[#C9F05C]" />
        </div>
        
        <div className="absolute top-1/4 left-1/3 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_7s_ease-in-out_infinite_5s]">
          <Star className="w-5 h-5 text-[#7D3FFF]" />
        </div>
        
        {/* Additional smaller floating elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`glass-particle-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-br from-[#C9F05C]/20 to-[#FF3E94]/20 backdrop-blur-sm rounded-full border border-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Encontre influenciadores para sua marca{' '}
          <span className="text-[#C9F05C]">de forma rápida</span>,{' '}
          <span className="text-[#FF3E94]">prática</span> e{' '}
          <span className="text-[#7D3FFF]">acessível</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          O HypeApp conecta você com criadores de conteúdo de todos os tamanhos e regiões do Brasil.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={scrollToBusinessSection}
            size="lg"
            className="bg-transparent border border-[#C9F05C] text-[#C9F05C] hover:bg-[#C9F05C]/10 transition-all duration-300 shadow-none px-8 py-4 text-lg"
          >
            Experimente buscar influenciadores
          </Button>
          
          <Button
            onClick={scrollToInfluencerSection}
            size="lg"
            className="bg-transparent border border-[#FF3E94] text-[#FF3E94] hover:bg-[#FF3E94]/10 transition-all duration-300 shadow-none px-8 py-4 text-lg flex items-center gap-2"
          >
            <Download size={20} />
            Se candidate em uma campanha
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

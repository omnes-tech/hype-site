import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Heart, Users, MessageCircle, Hash, Camera, Star, Trophy, Gift, Gamepad2 } from 'lucide-react';

const CampaignSection = () => {
  const scrollToBusinessSection = () => {
    const element = document.querySelector('[data-section="business"]') || document.getElementById('business-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToInfluencerSection = () => {
    const element = document.querySelector('[data-section="influencer"]') || document.getElementById('influencer-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20" />
      
      {/* Floating banners and icons */}
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
        
        {/* Floating campaign banners - smaller size and more spread out */}
        <div className="absolute top-10 left-5 w-48 h-14 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_10s_ease-in-out_infinite] overflow-hidden">
          <img 
            src="/lovable-uploads/cbbcc102-6058-4694-9871-b7d45ecf1866.png" 
            alt="FreeFire Campaign" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="absolute top-1/4 right-20 w-48 h-14 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_12s_ease-in-out_infinite_2s] overflow-hidden">
          <img 
            src="/lovable-uploads/70369674-2b34-4990-bb83-9647ba7b47e0.png" 
            alt="Poupa Tempo RJ Campaign" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="absolute bottom-1/2 left-10 w-48 h-14 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_14s_ease-in-out_infinite_4s] overflow-hidden">
          <img 
            src="/lovable-uploads/135bb399-bdc7-4ff2-adcf-b90ea56f0bbc.png" 
            alt="Jardim Botânico Campaign" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="absolute top-3/4 right-5 w-48 h-14 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_8s_ease-in-out_infinite_1s] overflow-hidden">
          <img 
            src="/lovable-uploads/e7e94153-e9de-4217-86d9-90ce8f7955c8.png" 
            alt="Oppo Campaign" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="absolute bottom-10 left-1/4 w-48 h-14 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_11s_ease-in-out_infinite_3s] overflow-hidden">
          <img 
            src="/lovable-uploads/0decb8ec-236f-472b-b48e-7337926ae9a6.png" 
            alt="UAI Minas Gerais Campaign" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="absolute top-16 left-2/3 w-48 h-14 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_9s_ease-in-out_infinite_5s] overflow-hidden">
          <img 
            src="/lovable-uploads/ed6bde09-a9e1-4cf9-b053-de670f4e7c94.png" 
            alt="Zoo São Paulo Campaign" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="absolute bottom-1/4 right-1/2 w-48 h-14 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_13s_ease-in-out_infinite_6s] overflow-hidden">
          <img 
            src="/lovable-uploads/4826aa2d-ca28-4861-bbe3-070cc530d5c2.png" 
            alt="Free Fire x Naruto Campaign" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        <div className="absolute top-2/3 left-32 w-48 h-14 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_15s_ease-in-out_infinite_7s] overflow-hidden">
          <img 
            src="/lovable-uploads/fc108385-a342-41bf-a423-07ed8e988d9c.png" 
            alt="Grupo Colina Campaign" 
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        
        {/* Floating marketing icons with glass effect - Left side */}
        <div className="absolute top-20 left-5 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_8s_ease-in-out_infinite]">
          <Heart className="w-5 h-5 text-[#FF3E94]" />
        </div>
        
        <div className="absolute top-1/3 left-16 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_7s_ease-in-out_infinite_1s]">
          <Users className="w-5 h-5 text-[#C9F05C]" />
        </div>
        
        <div className="absolute bottom-1/3 left-8 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_9s_ease-in-out_infinite_2s]">
          <MessageCircle className="w-5 h-5 text-[#7D3FFF]" />
        </div>
        
        <div className="absolute top-2/3 left-20 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_6s_ease-in-out_infinite_3s]">
          <Trophy className="w-5 h-5 text-[#FF3E94]" />
        </div>
        
        <div className="absolute bottom-20 left-5 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_8s_ease-in-out_infinite_4s]">
          <Gift className="w-5 h-5 text-[#C9F05C]" />
        </div>
        
        <div className="absolute top-1/4 left-12 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_7s_ease-in-out_infinite_5s]">
          <Gamepad2 className="w-5 h-5 text-[#7D3FFF]" />
        </div>
        
        {/* Floating marketing icons with glass effect - Right side */}
        <div className="absolute top-20 right-10 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_8s_ease-in-out_infinite]">
          <Heart className="w-5 h-5 text-[#FF3E94]" />
        </div>
        
        <div className="absolute top-1/3 right-20 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_7s_ease-in-out_infinite_1s]">
          <Users className="w-5 h-5 text-[#C9F05C]" />
        </div>
        
        <div className="absolute bottom-1/3 right-40 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_9s_ease-in-out_infinite_2s]">
          <MessageCircle className="w-5 h-5 text-[#7D3FFF]" />
        </div>
        
        <div className="absolute top-2/3 right-10 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_6s_ease-in-out_infinite_3s]">
          <Hash className="w-5 h-5 text-[#FF3E94]" />
        </div>
        
        <div className="absolute bottom-20 right-1/3 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_8s_ease-in-out_infinite_4s]">
          <Camera className="w-5 h-5 text-[#C9F05C]" />
        </div>
        
        <div className="absolute top-1/4 right-1/2 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 animate-[float_7s_ease-in-out_infinite_5s]">
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

export default CampaignSection;

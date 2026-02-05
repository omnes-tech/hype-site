
import { Button } from "@/components/ui/button";
import { Upload, Bell, Users, MessageCircle, Play } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: <Upload className="w-8 h-8 text-white" />,
      title: "Você publica seu banner",
      description: "Faça upload da sua campanha com todos os detalhes"
    },
    {
      number: "2", 
      icon: <Bell className="w-8 h-8 text-white" />,
      title: "Enviamos notificação para influenciadores",
      description: "Milhares de creators recebem sua oportunidade"
    },
    {
      number: "3",
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Eles se candidatam",
      description: "Influenciadores interessados enviam propostas"
    },
    {
      number: "4",
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      title: "Você escolhe e conversa com quem quiser",
      description: "Chat direto para negociar valores e detalhes"
    },
    {
      number: "5",
      icon: <Play className="w-8 h-8 text-white" />,
      title: "Sua campanha vai ao ar",
      description: "Acompanhe resultados em tempo real"
    }
  ];

  const scrollToPlansSection = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como funciona?
          </h2>
          <p className="text-xl text-gray-400">
            5 passos simples para conectar sua marca aos melhores influenciadores
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block max-w-7xl mx-auto mb-16">
          <div className="relative">
            {/* Linha conectora horizontal */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-700"></div>
            
            <div className="flex justify-between items-start relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center max-w-xs">
                  {/* Número rosa */}
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mb-4 relative z-10">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  
                  {/* Ícone com degradê */}
                  <div className="w-24 h-24 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center mb-6 relative z-10">
                    {step.icon}
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-white font-bold text-lg mb-3 text-center leading-tight">
                    {step.title}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-400 text-sm text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden max-w-2xl mx-auto mb-16">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  {/* Número rosa */}
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  
                  {/* Ícone com degradê */}
                  <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-green-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 text-white">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToPlansSection}
            className="bg-black border-2 border-lime-400 text-lime-400 hover:bg-lime-400/5 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300"
          >
            Testar gratuitamente
          </Button>
        </div>
      </div>
    </section>
  );
};

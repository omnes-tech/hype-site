
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, Target, TrendingUp } from "lucide-react";

export const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Rede de +50k influencers",
      description: "Acesso à maior base de criadores de conteúdo do Brasil"
    },
    {
      icon: MessageCircle,
      title: "Chat direto",
      description: "Comunicação direta com influenciadores sem intermediários"
    },
    {
      icon: Target,
      title: "Segmentação precisa",
      description: "Encontre o perfil ideal para sua marca com filtros avançados"
    },
    {
      icon: TrendingUp,
      title: "Analytics em tempo real",
      description: "Acompanhe resultados e métricas detalhadas das campanhas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Por que escolher o HypeApp?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400">
              Descubra os diferenciais que fazem do HypeApp a melhor escolha para sua estratégia de marketing digital
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="mx-4 w-2 h-2 bg-lime-400 rounded-full"></div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div>
            <img 
              src="/lovable-uploads/3f65dcec-ca40-4169-a28b-51e114cb800e.png" 
              alt="Rede de +50k influencers" 
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="md:hidden flex justify-center my-6">
              <div className="w-12 h-px bg-gray-600"></div>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/cb566ac4-3085-471b-819b-4a1c1b44d68d.png" 
              alt="Chat direto" 
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="md:hidden flex justify-center my-6">
              <div className="w-12 h-px bg-gray-600"></div>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/0d373143-744d-4e4a-bf13-4b4d38b8b18c.png" 
              alt="Segmentação precisa" 
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="md:hidden flex justify-center my-6">
              <div className="w-12 h-px bg-gray-600"></div>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/0bbdfeb2-5b1d-4f41-a04c-a007f6399c0e.png" 
              alt="Analytics em tempo real" 
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Bottom Separator */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          <div className="mx-4 flex space-x-1">
            <div className="w-1 h-1 bg-lime-400 rounded-full"></div>
            <div className="w-1 h-1 bg-pink-500 rounded-full"></div>
            <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

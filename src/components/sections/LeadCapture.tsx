
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, Target, TrendingUp } from "lucide-react";

export const LeadCapture = () => {
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
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para encontrar os melhores influenciadores?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-lime-400 mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-400">
              Junte-se a mais de 1000 empresas que já confiam no HypeApp para suas campanhas
            </p>
          </div>
        </div>

        {/* Decorative Separator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
          <div className="mx-6 flex items-center space-x-2">
            <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent"></div>
        </div>

        {/* Benefits Cards Section */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                <Card className="bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
                
                {/* Vertical separator between cards */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent max-w-xs"></div>
          <div className="mx-8 text-center">
            <div className="w-8 h-8 bg-gradient-to-r from-lime-400 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent max-w-xs"></div>
        </div>
      </div>
    </section>
  );
};

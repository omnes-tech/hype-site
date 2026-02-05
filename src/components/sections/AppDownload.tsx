
import { Button } from "@/components/ui/button";
import { Smartphone, Heart, Bell } from "lucide-react";
import { handleAppDownload } from "@/utils/downloadTracking";

export const AppDownload = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leve o HypeApp para qualquer lugar
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Nosso app mobile te permite gerenciar campanhas, descobrir novos creators e acompanhar resultados mesmo quando você está fora do escritório.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Interface otimizada</h3>
                    <p className="text-gray-400">Experiência mobile nativa com todas as funcionalidades da versão web</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Acesso offline</h3>
                    <p className="text-gray-400">Seus dados salvos localmente para consulta mesmo sem internet</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Notificações inteligentes</h3>
                    <p className="text-gray-400">Receba alertas sobre novas candidaturas e atualizações de campanhas</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-black font-semibold px-8 py-4 rounded-lg text-lg shadow-lg shadow-lime-400/25 hover:shadow-lime-400/40 transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleAppDownload('ios', 'https://apps.apple.com/br/app/hype-app/id1616326354')}
                >
                  Download para iOS
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => handleAppDownload('android', 'https://play.google.com/store/apps/details?id=br.com.hypeapp&pcampaignid=web_share')}
                >
                  Download para Android
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Bell key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-400">4.8/5</span>
                </div>
                <div className="text-gray-400">+50.000 downloads</div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                {/* Mockup do celular */}
                <div className="w-80 h-[600px] bg-gray-900 rounded-[3rem] mx-auto p-4 border-8 border-gray-800 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-black to-gray-900 rounded-[2rem] flex flex-col">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 py-4 text-white text-sm">
                      <span>9:41</span>
                      <div className="flex gap-2">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* App content */}
                    <div className="flex-1 px-6 pb-6">
                      <div className="text-center mb-6">
                        <h3 className="text-white font-bold text-lg">HypeApp</h3>
                        <p className="text-gray-400 text-sm">Influencer Marketing</p>
                      </div>
                      
                      {/* Cards dos influenciadores */}
                      <div className="space-y-3">
                        <div className="bg-gray-800 rounded-lg p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-lime-400 rounded-full"></div>
                          <div className="flex-1">
                            <div className="w-24 h-2 bg-gray-600 rounded mb-1"></div>
                            <div className="w-16 h-2 bg-gray-700 rounded"></div>
                          </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-pink-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="w-20 h-2 bg-gray-600 rounded mb-1"></div>
                            <div className="w-12 h-2 bg-gray-700 rounded"></div>
                          </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3 flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="w-28 h-2 bg-gray-600 rounded mb-1"></div>
                            <div className="w-14 h-2 bg-gray-700 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-lime-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-pink-500 rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

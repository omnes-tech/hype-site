import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Smartphone, Bell, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSearchInfluencersClick = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleTestClick = () => {
    const formSection = document.getElementById('comece-agora');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleWhatsAppClick = () => {
    const event = new CustomEvent('openWhatsAppModal');
    window.dispatchEvent(event);
    setIsModalOpen(false);
  };
  const handleEmailClick = () => {
    const email = 'contato@vocenohype.com.br';
    const subject = 'Contato - HypeApp';
    const body = 'Olá, gostaria de entrar em contato sobre:';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    try {
      tempLink.click();
      setTimeout(() => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
      }, 1000);
    } catch (error) {
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    } finally {
      document.body.removeChild(tempLink);
    }
    setIsModalOpen(false);
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900/20 overflow-hidden">
      {/* Floating Icons - Influencer Marketing Theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Ring Light */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-lime-400 to-lime-300 opacity-20 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-white opacity-50"></div>
        </div>
        
        {/* Analytics/Chart */}
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-400 opacity-30 animate-bounce rounded-lg flex items-center justify-center">
          <div className="w-6 h-1 bg-white rounded"></div>
        </div>
        
        {/* Camera */}
        <div className="absolute bottom-40 left-20 w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-400 opacity-25 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 bg-white rounded-sm"></div>
        </div>
        
        {/* Heart */}
        <div className="absolute top-60 right-40 animate-bounce">
          <Heart className="w-8 h-8 text-lime-400 opacity-40 fill-current" />
        </div>
        
        {/* Smartphone */}
        <div className="absolute bottom-60 right-10 animate-pulse">
          <Smartphone className="w-10 h-10 text-pink-500 opacity-30" />
        </div>

        {/* Bell/Notification */}
        <div className="absolute top-32 right-60 animate-bounce">
          <Bell className="w-6 h-6 text-purple-400 opacity-40" />
        </div>

        {/* Additional floating elements */}
        <div className="absolute bottom-32 left-40 w-6 h-6 bg-gradient-to-r from-lime-400 to-pink-500 opacity-30 animate-pulse rounded-full"></div>
        <div className="absolute top-80 left-60 w-4 h-4 bg-purple-500 opacity-20 animate-bounce rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-lime-400 to-white bg-clip-text text-transparent leading-tight md:text-6xl py-[10px]">
            Teste o mural de campanhas do HypeApp de forma gratuita
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Conecte sua marca a +8000 influenciadores de todo o Brasil, em minutos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button onClick={handleSearchInfluencersClick} className="bg-transparent border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-none hover:shadow-none">
              Experimente buscar influenciadores
            </Button>
            
            <Button onClick={handleTestClick} className="bg-transparent border-2 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-none hover:shadow-none">
              Testar gratuitamente
            </Button>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-none hover:shadow-none">
                  Falar com um especialista
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md mx-auto bg-white rounded-xl shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-center text-gray-800 font-semibold text-xl">
                    Como prefere entrar em contato?
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <p className="text-center text-gray-600 leading-relaxed">
                    Escolha a forma que preferir para falar com nossa equipe:
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button onClick={handleEmailClick} className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar e-mail
                    </Button>
                    <Button onClick={handleWhatsAppClick} className="w-full border border-gray-300 text-gray-700 font-semibold py-3 hover:bg-gray-50">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>;
};
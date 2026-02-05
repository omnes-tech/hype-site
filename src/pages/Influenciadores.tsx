
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Target, Users, TrendingUp, Shield, MessageCircle, Star, CheckCircle, Home, ArrowLeft, Smartphone, Globe, Gift, DollarSign, Megaphone, Heart, Camera, FileText, Lock, HandHeart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { handleAppDownload } from "@/utils/downloadTracking";

const Influenciadores = () => {
  const navigate = useNavigate();

  const marketGrowthStats = [
    {
      icon: DollarSign,
      title: "Mercado de R$ 2,8 bilhões",
      description: "Crescimento de 30% ao ano no Brasil",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Users,
      title: "Nanos são os preferidos",
      description: "85% das marcas preferem micro e nano influenciadores",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Heart,
      title: "Autenticidade em alta",
      description: "Engajamento real vale mais que números grandes",
      color: "from-pink-400 to-pink-600"
    }
  ];

  const opportunities = [
    {
      icon: Target,
      title: "Campanhas com marcas de todo o Brasil",
      description: "Acesse oportunidades reais com empresas de diversos segmentos",
      emoji: "🎯"
    },
    {
      icon: Users,
      title: "Cadastro rápido e completo",
      description: "Configure seu perfil em poucos minutos",
      emoji: "⚡"
    },
    {
      icon: TrendingUp,
      title: "Ferramentas para mostrar seu potencial",
      description: "Destaque suas métricas e conquiste mais marcas",
      emoji: "📈"
    },
    {
      icon: MessageCircle,
      title: "Uma comunidade inteira pra te apoiar",
      description: "Conecte-se com outros creators na InflusLab",
      emoji: "🤝"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Baixe o app",
      description: "Disponível na Play Store ou App Store",
      icon: Smartphone,
      emoji: "📲",
      color: "from-lime-400 to-green-500"
    },
    {
      number: "2",
      title: "Cadastre-se",
      description: "Rapidamente com seus dados",
      icon: Users,
      emoji: "👤",
      color: "from-blue-400 to-purple-500"
    },
    {
      number: "3",
      title: "Atualize seu perfil",
      description: "Com prints e métricas de engajamento",
      icon: Camera,
      emoji: "📸",
      color: "from-pink-400 to-red-500"
    },
    {
      number: "4",
      title: "Acesse campanhas",
      description: "Na aba 'Murais' ou receba notificações",
      icon: FileText,
      emoji: "🗂️",
      color: "from-yellow-400 to-orange-500"
    },
    {
      number: "5",
      title: "Candidate-se",
      description: "Com um clique e aguarde o retorno",
      icon: HandHeart,
      emoji: "✋",
      color: "from-green-400 to-teal-500"
    },
    {
      number: "6",
      title: "Participe da InflusLab",
      description: "Lives semanais com especialistas",
      icon: Users,
      emoji: "🔬",
      color: "from-purple-400 to-indigo-500"
    },
    {
      number: "7",
      title: "Negocie e receba",
      description: "Diretamente pelo app com segurança",
      icon: Lock,
      emoji: "🤝",
      color: "from-cyan-400 to-blue-500"
    }
  ];

  const security = [
    "Você negocia direto com a marca, com o apoio do app",
    "Todo o histórico da campanha fica registrado",
    "Você recebe o briefing da campanha dentro do app",
    "Pagamentos e entregas são controlados na própria plataforma"
  ];

  const faqs = [
    {
      question: "Preciso ter muitos seguidores?",
      answer: "Não! Trabalhamos com influenciadores de todos os tamanhos, desde nano até mega influenciadores. O que importa é ter engajamento real e autenticidade com sua audiência."
    },
    {
      question: "É realmente gratuito?",
      answer: "Sim! O HypeApp é 100% gratuito para influenciadores. Você pode se cadastrar, participar de campanhas e acessar a InflusLab sem nenhum custo."
    },
    {
      question: "Como as marcas entram em contato?",
      answer: "As marcas podem te encontrar através do nosso sistema de busca ou você pode se candidatar às campanhas no mural. Toda comunicação acontece dentro do app de forma segura."
    },
    {
      question: "Quanto tempo demora para ser aprovado?",
      answer: "O tempo varia de acordo com cada campanha e marca. Algumas respondem em horas, outras podem levar alguns dias. Você receberá notificações sobre todas as atualizações."
    }
  ];

  const testimonials = [
    { quote: "Buscamos engajamento, não só números.", author: "Marca parceira" },
    { quote: "Queremos quem fala com pessoas reais.", author: "Empresa cliente" },
    { quote: "Autenticidade é nosso critério principal.", author: "Brand manager" }
  ];

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Back to Home Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          onClick={handleBackToHome}
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          size="sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900/30 to-pink-900/20 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated particles */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-lime-400 to-pink-500 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Floating icons */}
          <div className="absolute top-20 left-10 animate-bounce">
            <div className="w-16 h-16 bg-gradient-to-r from-lime-400/20 to-lime-300/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Smartphone className="w-8 h-8 text-lime-400" />
            </div>
          </div>
          
          <div className="absolute top-40 right-20 animate-float">
            <div className="w-14 h-14 bg-gradient-to-r from-pink-500/20 to-pink-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Heart className="w-7 h-7 text-pink-500 fill-current" />
            </div>
          </div>
          
          <div className="absolute bottom-40 left-20 animate-pulse">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Camera className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Mockup do app */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/e76dd21d-367b-4ce0-8d79-e4b47c8e1c3b.png" 
                alt="HypeApp Mockup" 
                className="w-64 h-auto mx-auto animate-float"
              />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-lime-400 to-pink-500 bg-clip-text text-transparent leading-tight">
              Transforme sua influência em oportunidade com o HypeApp
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Encontre campanhas, conecte-se com marcas e cresça com o app mais completo para influenciadores – <span className="text-lime-400 font-semibold">100% gratuito</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <img 
                src="/lovable-uploads/84e8f256-9268-447b-923f-8fed8e10196b.png" 
                alt="Disponível na App Store" 
                className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                onClick={() => handleAppDownload('ios', 'https://apps.apple.com/br/app/hype-app/id1616326354')}
              />
              <img 
                src="/lovable-uploads/df39d372-4ff4-4558-af27-1fc43f6b4a41.png" 
                alt="Disponível no Google Play" 
                className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                onClick={() => handleAppDownload('android', 'https://play.google.com/store/apps/details?id=br.com.hypeapp&pcampaignid=web_share')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Market Growth Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Oportunidades reais no marketing de influência
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
              O mercado de marketing de influência movimenta bilhões todos os anos e cresce em ritmo acelerado. 
              E não é só para grandes celebridades: nanos e micro influenciadores têm se tornado os queridinhos das marcas 
              pela autenticidade e engajamento real com suas comunidades.
            </p>
          </div>

          {/* Market Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {marketGrowthStats.map((stat, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6 text-center relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{stat.title}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials bubbles */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-xs border border-white/20">
                  <p className="text-sm text-white italic">"{testimonial.quote}"</p>
                  <p className="text-xs text-gray-400 mt-2">— {testimonial.author}</p>
                </div>
                <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white/10 rotate-45 border-r border-b border-white/20"></div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <p className="text-2xl text-lime-400 font-semibold mb-8">
              Com o HypeApp, você acessa tudo isso gratuitamente:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{opportunity.emoji}</div>
                  <div className="w-16 h-16 bg-gradient-to-r from-lime-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <opportunity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{opportunity.title}</h3>
                  <p className="text-gray-400">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-lime-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Como funciona – Passo a passo simples
            </h2>
            <p className="text-xl text-gray-400">
              7 passos para começar sua jornada no marketing de influência
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-7 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    {/* Connection line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-lime-400 to-pink-500 opacity-30 hidden lg:block"></div>
                    )}
                    
                    {/* Step number */}
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto relative z-10">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    
                    {/* Emoji */}
                    <div className="text-4xl mb-4 group-hover:animate-bounce">{step.emoji}</div>
                    
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden max-w-2xl mx-auto mb-16">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mb-3">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                    
                    <div className="text-3xl mb-3 group-hover:animate-bounce">{step.emoji}</div>
                    
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-6 h-6 text-white" />
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
        </div>
      </section>

      {/* InflusLab Section - Laboratory Theme */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 via-black to-black relative overflow-hidden">
        {/* Lab background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-16 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-60 right-40 w-12 h-20 bg-lime-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Lab equipment icons */}
            <div className="flex justify-center gap-8 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-purple-400/20 rounded-lg flex items-center justify-center backdrop-blur-sm animate-float">
                <div className="w-8 h-8 bg-purple-400 rounded-full opacity-60"></div>
              </div>
              <div className="w-12 h-20 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-t-full backdrop-blur-sm animate-float" style={{animationDelay: '1s'}}>
                <div className="w-8 h-8 bg-cyan-400 rounded-full mx-auto mt-2 opacity-60 animate-pulse"></div>
              </div>
              <div className="w-14 h-16 bg-gradient-to-t from-lime-500/20 to-transparent rounded-full backdrop-blur-sm animate-float" style={{animationDelay: '2s'}}>
                <div className="w-6 h-6 bg-lime-400 rounded-full mx-auto mt-2 opacity-60 animate-bounce"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🔬 Junte-se à InflusLab
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              A InflusLab é a comunidade oficial do HypeApp – com conteúdos exclusivos, dicas práticas e networking real com outros criadores de conteúdo.
            </p>
            <p className="text-2xl text-lime-400 font-semibold mb-8">
              Aqui você cresce de verdade.
            </p>

            {/* Lab features */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="text-3xl mb-3">🧪</div>
                <h3 className="text-white font-semibold mb-2">Lives Semanais</h3>
                <p className="text-gray-400 text-sm">Com especialistas e influenciadores de sucesso</p>
              </div>
              <div className="bg-cyan-900/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="text-white font-semibold mb-2">Networking Real</h3>
                <p className="text-gray-400 text-sm">Conecte-se com outros creators</p>
              </div>
              <div className="bg-lime-900/30 backdrop-blur-sm rounded-xl p-6 border border-lime-500/20">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-white font-semibold mb-2">Conteúdo Exclusivo</h3>
                <p className="text-gray-400 text-sm">Dicas práticas para crescer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🔐 Tudo isso com segurança e profissionalismo
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {security.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                <div className="w-8 h-8 bg-gradient-to-r from-lime-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perguntas Frequentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 px-6"
                >
                  <AccordionTrigger className="text-white hover:text-lime-400 text-left text-lg font-semibold py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-pink-900/20 relative overflow-hidden">
        {/* Celebration elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`celebration-${i}`}
              className="absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            >
              {['🎉', '✨', '🚀', '💫', '🌟'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Você é o próximo a fechar uma campanha com grandes marcas
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Baixe o app agora mesmo e dê o próximo passo na sua jornada como influenciador.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <img 
                src="/lovable-uploads/84e8f256-9268-447b-923f-8fed8e10196b.png" 
                alt="Disponível na App Store" 
                className="h-16 w-auto cursor-pointer hover:scale-110 transition-transform duration-300 hover:shadow-2xl"
                onClick={() => handleAppDownload('ios', 'https://apps.apple.com/br/app/hype-app/id1616326354')}
              />
              <img 
                src="/lovable-uploads/df39d372-4ff4-4558-af27-1fc43f6b4a41.png" 
                alt="Disponível no Google Play" 
                className="h-16 w-auto cursor-pointer hover:scale-110 transition-transform duration-300 hover:shadow-2xl"
                onClick={() => handleAppDownload('android', 'https://play.google.com/store/apps/details?id=br.com.hypeapp&pcampaignid=web_share')}
              />
            </div>

            <Button
              onClick={handleBackToHome}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 text-lg"
            >
              <Home className="w-5 h-5 mr-2" />
              Voltar para página principal
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Influenciadores;

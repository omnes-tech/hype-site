
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Star, Crown, Gift } from "lucide-react";
import { useState } from "react";

export const PlanUpsell = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  const handleFreeClick = () => {
    const formSection = document.getElementById('comece-agora');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handlePaidPlanClick = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
    setUserName("");
    setUserEmail("");
    setErrors({ name: "", email: "" });
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "" };
    
    // Validar nome
    if (!userName.trim()) {
      newErrors.name = "Nome é obrigatório";
    } else if (userName.trim().toLowerCase() === "test" || userName.trim().toLowerCase() === "teste") {
      newErrors.name = "Por favor, insira seu nome real";
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userEmail.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!emailRegex.test(userEmail)) {
      newErrors.email = "Email inválido";
    } else if (userEmail.trim().toLowerCase().includes("test") || userEmail.trim().toLowerCase().includes("teste")) {
      newErrors.email = "Por favor, insira seu email real";
    }
    
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  const getUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
    };
  };

  const getPageIdentifier = () => {
    const pathname = window.location.pathname;
    
    if (pathname === '/') {
      return 'hypeApp principal';
    } else if (pathname === '/influenciadores') {
      return '/influenciadores';
    } else if (pathname === '/murais-campanhas') {
      return '/murais-campanhas';
    }
    
    return pathname;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    const planMappings: { [key: string]: string } = {
      'Semanal': 'weekly',
      'Quinzenal': 'fortnightly',
      'Mensal': 'monthly'
    };

    const planPrices: { [key: string]: string } = {
      'Semanal': 'R$ 289,90',
      'Quinzenal': 'R$ 499,90',
      'Mensal': 'R$ 899,90'
    };
    
    const planName = planMappings[selectedPlan!];
    const encodedName = encodeURIComponent(userName.trim());
    const encodedEmail = encodeURIComponent(userEmail.trim());

    // Enviar dados para o webhook
    const webhookUrl = 'https://vocenohype.app.n8n.cloud/webhook/57dcd02d-9b02-4dfd-b018-b905ac3571ad';
    
    try {
      const utmParams = getUTMParams();
      const pageIdentifier = getPageIdentifier();
      
      const payload = {
        ...utmParams,
        plano: selectedPlan,
        nome: userName.trim(),
        email: userEmail.trim(),
        page_title: pageIdentifier,
        valor_plano: planPrices[selectedPlan!],
        timestamp: new Date().toISOString(),
      };

      // Enviar para o webhook (não bloquear o pagamento se falhar)
      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).catch(error => {
        console.warn('Erro ao enviar dados do plano:', error);
      });
    } catch (error) {
      console.warn('Erro no tracking do plano:', error);
    }
    
    const url = `https://backoffice.hypeapp.com.br/payments/mercadopago/${planName}/?name=${encodedName}&email=${encodedEmail}`;
    
    window.open(url, '_blank');
    setIsModalOpen(false);
  };

  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "",
      description: "Conheça por tempo limitado nosso catalogo ou crie um mural para sentir a força que HypeApp tem ao disponibilizar em minutos milhares de influenciadores para a sua campanha",
      features: [
        "6 horas para experimentar o catalogo",
        "Abra um mural e veja os influenciadores se candidatarem",
        "Pague apenas quando for conversar e negociar com influenciadores"
      ],
      popular: false,
      icon: Gift
    },
    {
      name: "Semanal",
      subtitle: "7 DIAS",
      price: "R$ 289,90",
      originalPrice: "R$ 399,90",
      period: "",
      description: "Ideal para campanhas rápidas e testes iniciais",
      features: [
        "Exibição do banner por 7 dias",
        "2 push notification durante os 7 dias",
        "Envio do banner pelo usuário",
        "Acesso ao painel para gerenciamento do banner",
        "Chat direto com os influenciadores que se candidatarem"
      ],
      popular: false,
      icon: Star
    },
    {
      name: "Quinzenal",
      subtitle: "15 DIAS",
      price: "R$ 499,90",
      originalPrice: "R$ 699,90",
      period: "",
      description: "Para campanhas com maior alcance e duração",
      features: [
        "Exibição do banner por 15 dias",
        "5 push notification durante os 15 dias",
        "Envio do banner pelo usuário",
        "Acesso ao painel para gerenciamento do banner",
        "Chat direto com os influenciadores que se candidatarem"
      ],
      popular: true,
      icon: Crown
    },
    {
      name: "Mensal",
      subtitle: "30 DIAS",
      price: "R$ 899,90",
      originalPrice: "R$ 1.099,90",
      period: "",
      description: "Solução completa para campanhas extensas",
      features: [
        "Exibição do banner por 30 dias",
        "10 push notification durante os 30 dias",
        "Criação do banner pela nossa equipe",
        "Acesso ao painel para gerenciamento do banner",
        "Chat direto com os influenciadores que se candidatarem",
        "Suporte no gerenciamento da campanha"
      ],
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Planos disponíveis
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Escolha o plano ideal para o tamanho da sua empresa e necessidades de campanha
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-gray-900/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-lime-400 scale-105' : ''
              } ${plan.name === 'Gratuito' ? 'ring-2 ring-purple-400' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-lime-400 to-pink-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              {plan.name === 'Gratuito' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Recomendado
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                {plan.subtitle && (
                  <p className="text-gray-400 text-sm font-semibold">{plan.subtitle}</p>
                )}
                <div className="flex flex-col items-center gap-1">
                  {plan.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">{plan.originalPrice}</span>
                  )}
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl md:text-3xl font-bold text-lime-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm">RECURSOS</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-xs leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={() => {
                    if (plan.name === 'Gratuito') {
                      handleFreeClick();
                    } else {
                      handlePaidPlanClick(plan.name);
                    }
                  }}
                  className={`w-full font-bold rounded-full transition-all duration-300 py-3 ${
                    plan.name === 'Gratuito' 
                      ? 'bg-purple-600 hover:bg-purple-700 text-white border-none'
                      : 'bg-black border-2 border-lime-400 text-lime-400 hover:bg-lime-400/5'
                  }`}
                >
                  {plan.name === 'Gratuito' ? 'Começar grátis' : 'Contratar'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal para coleta de dados */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">
              Finalizar contratação - {selectedPlan}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-300">
                Nome completo *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="mt-1 bg-gray-800 border-gray-600 text-white"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="mt-1 bg-gray-800 border-gray-600 text-white"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                onClick={() => setIsModalOpen(false)}
                variant="outline"
                className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!userName.trim() || !userEmail.trim() || !!errors.name || !!errors.email}
                className="flex-1 bg-lime-500 hover:bg-lime-600 text-black font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prosseguir para pagamento
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

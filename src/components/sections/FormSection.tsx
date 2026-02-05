import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heart, Mail, User, CheckCircle, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
interface FormData {
  name: string;
  email: string;
  phone: string;
}
interface UTMParams {
  utm_medium: string;
  utm_source: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referal: string;
  pageTitle: string;
}
export const FormSection = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isValid
    }
  } = useForm<FormData>({ mode: 'onChange' });
  const {
    toast
  } = useToast();
  const [showThankYou, setShowThankYou] = useState(false);
  const [utmParams, setUtmParams] = useState<UTMParams>({
    utm_medium: '',
    utm_source: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
    referal: '',
    pageTitle: ''
  });
  useEffect(() => {
    // Capturar parâmetros UTM da URL
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = document.referrer;
    const pageTitle = document.title;
    setUtmParams({
      utm_medium: urlParams.get('utm_medium') || '',
      utm_source: urlParams.get('utm_source') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
      referal: referrer,
      pageTitle: pageTitle
    });
    console.log('UTM Parameters captured:', {
      utm_medium: urlParams.get('utm_medium'),
      utm_source: urlParams.get('utm_source'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content'),
      referal: referrer,
      pageTitle: pageTitle
    });
  }, []);
  const onSubmit = async (data: FormData) => {
    console.log('Form submission started:', data);
    const apiData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      ...utmParams
    };
    console.log('Data being sent to API:', apiData);
    try {
      const response = await fetch('https://vocenohype.app.n8n.cloud/webhook/b2b/mural-de-campanha-fremmium/4e3e48ca-c157-45bc-8146-9a5d59f5ccc7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(apiData)
      });
      console.log('API response status:', response.status);
      if (!response.ok || response.status < 200 || response.status >= 300) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      console.log('API request successful');

      // Mostrar mensagem de agradecimento personalizada
      setShowThankYou(true);
      toast({
        title: "Sucesso!",
        description: "Suas informações foram enviadas. Em breve você receberá o acesso gratuito!"
      });
    } catch (error) {
      console.error('Error sending to API:', error);
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar suas informações. Tente novamente.",
        variant: "destructive"
      });
    }
  };
  if (showThankYou) {
    return <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl shadow-lime-400/20 border-0">
              <CardContent className="p-12 text-center">
                <div className="mb-8">
                  <CheckCircle className="w-20 h-20 text-lime-400 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Obrigado! 🎉
                  </h2>
                  <p className="text-xl text-gray-700 mb-6">
                    Suas informações foram recebidas com sucesso!
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-lime-50 to-green-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    O que acontece agora?
                  </h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">1</div>
                      <p className="text-gray-700">Você receberá um e-mail com suas credenciais de acesso em até 5 minutos</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">2</div>
                      <p className="text-gray-700">Acesse nosso catálogo completo de influenciadores</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center text-black text-sm font-bold mt-0.5">3</div>
                      <p className="text-gray-700">Encontre os criadores ideais para sua próxima campanha</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Precisa de ajuda? Entre em contato conosco:
                  </p>
                  <div className="flex justify-center gap-4 text-sm">
                    <span className="text-lime-600 font-medium">📧 suporte@hypeapp.com</span>
                    <span className="text-lime-600 font-medium">📱 WhatsApp: (11) 99999-9999</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>;
  }
  return <section id="comece-agora" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comece agora seu teste gratuito
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Receba acesso por tempo limitado ao catálogo de influenciadores ou crie seu mural, receba influenciadores e começe sua campanha
            </p>
          </div>

          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl shadow-purple-500/10 border-0">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-lime-400 to-pink-500 h-2 rounded-full w-1/3"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                1º passo para impulsionar sua marca com influenciadores
              </h3>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input {...register("name", {
                  required: "Nome é obrigatório",
                  minLength: {
                    value: 2,
                    message: "Nome deve ter pelo menos 2 caracteres"
                  },
                  pattern: {
                    value: /^[A-Za-zÀ-ÿ\s]+$/,
                    message: "Nome deve conter apenas letras e espaços"
                  }
                })} placeholder="Nome completo" className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-lime-400 focus:ring-lime-400 rounded-lg" />
                  <span className="text-xs text-gray-500 mt-1 block ml-12">Ex: João Silva</span>
                  {errors.name && <span className="text-xs text-red-500 mt-1 block ml-12">{errors.name.message}</span>}
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input {...register("email", {
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido"
                  }
                })} type="email" placeholder="E-mail profissional" className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-lime-400 focus:ring-lime-400 rounded-lg" />
                  <span className="text-xs text-gray-500 mt-1 block ml-12">Ex: marketing@minhaempresa.com</span>
                  {errors.email && <span className="text-xs text-red-500 mt-1 block ml-12">{errors.email.message}</span>}
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input {...register("phone", {
                  required: "Telefone é obrigatório",
                  pattern: {
                    value: /^[\+]?[1-9][\d]{0,15}$/,
                    message: "Telefone inválido"
                  }
                })} type="tel" placeholder="Telefone" className="pl-12 h-14 text-lg border-2 border-gray-200 focus:border-lime-400 focus:ring-lime-400 rounded-lg" />
                  <span className="text-xs text-gray-500 mt-1 block ml-12">Ex: 11999999999</span>
                  {errors.phone && <span className="text-xs text-red-500 mt-1 block ml-12">{errors.phone.message}</span>}
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !isValid} 
                  className="w-full bg-black border-2 border-lime-400 text-lime-400 hover:bg-lime-400/5 font-bold py-4 h-14 rounded-full text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Liberar acesso gratuito"}
                </Button>

                {/* Trust bar */}
                <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-lime-400 fill-current" />
                    <span className="text-sm text-gray-600">+8000 influenciadores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500 fill-current" />
                    <span className="text-sm text-gray-600">+500 campanhas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-purple-500 fill-current" />
                    <span className="text-sm text-gray-600">Teste 100% gratuito</span>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
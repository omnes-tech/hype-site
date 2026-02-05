
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona o teste gratuito?",
      answer: "O teste gratuito te dá acesso completo ao catálogo de mais de 8.000 influenciadores, ferramentas de busca e filtros avançados. Você pode fazer até 5 contatos por mês sem nenhum custo."
    },
    {
      question: "Como vocês selecionam os influenciadores?",
      answer: "Temos uma equipe dedicada que analisa métricas de engajamento, qualidade do conteúdo, histórico de campanhas e autenticidade da audiência. Todos os creators passam por um processo de verificação antes de entrar na plataforma."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim, você pode cancelar sua assinatura a qualquer momento sem multas ou taxas adicionais. Seu acesso permanecerá ativo até o final do período já pago."
    },
    {
      question: "Vocês oferecem suporte para criação de campanhas?",
      answer: "Sim! Temos uma equipe de especialistas em influencer marketing que pode te ajudar desde a estratégia até a execução das campanhas. O suporte varia conforme o plano escolhido."
    },
    {
      question: "Como funciona o pagamento aos influenciadores?",
      answer: "O pagamento é feito diretamente entre você e o influenciador. Facilitamos a comunicação e fornecemos templates de contrato, mas não intermediamos os pagamentos."
    },
    {
      question: "Posso usar a plataforma para campanhas internacionais?",
      answer: "Atualmente focamos no mercado brasileiro, mas temos influenciadores que criam conteúdo em outros idiomas e têm audiência internacional. Entre em contato para necessidades específicas."
    }
  ];

  const handleWhatsAppClick = () => {
    // Dispatch the same event that opens the WhatsApp modal
    const event = new CustomEvent('openWhatsAppModal');
    window.dispatchEvent(event);
  };

  const handleEmailClick = () => {
    const email = 'contato@vocenohype.com.br';
    const subject = 'Contato - HypeApp';
    const body = 'Olá, gostaria de entrar em contato sobre:';
    
    // Try to open default email client
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Create a temporary link to test if mailto works
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.style.display = 'none';
    document.body.appendChild(tempLink);
    
    try {
      tempLink.click();
      
      // If mailto doesn't work (no default email client), open Gmail as fallback
      setTimeout(() => {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
      }, 1000);
      
    } catch (error) {
      // Fallback to Gmail directly
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    } finally {
      document.body.removeChild(tempLink);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-400">
              Tire suas dúvidas sobre o HypeApp
            </p>
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

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Não encontrou sua resposta?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="inline-flex items-center justify-center px-6 py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-500 transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar e-mail
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md mx-auto bg-white rounded-xl shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-center text-gray-800 font-semibold text-xl">
                      Fale com nosso time por e-mail
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <p className="text-center text-gray-600 leading-relaxed">
                      Não encontrou o que procurava em nosso atendimento? Clique no botão abaixo para enviar um e-mail diretamente para nossa equipe: <span className="font-semibold text-gray-800">contato@vocenohype.com.br</span>
                    </p>
                    <Button 
                      onClick={handleEmailClick}
                      className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3"
                    >
                      Enviar E-mail para o Suporte
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

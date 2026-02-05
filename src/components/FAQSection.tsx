
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona o HypeApp?",
      answer: "O HypeApp conecta influenciadores e marcas de forma simples. Influenciadores se cadastram gratuitamente e podem se candidatar a campanhas. Empresas publicam campanhas no mural e recebem candidaturas automaticamente."
    },
    {
      question: "É gratuito para influenciadores?",
      answer: "Sim! O app é 100% gratuito para influenciadores. Você pode se cadastrar, participar de campanhas e acessar a comunidade InflusLab sem nenhum custo."
    },
    {
      question: "Como as empresas contratam influenciadores?",
      answer: "Empresas podem publicar campanhas no mural ou usar nosso sistema de créditos para contatar influenciadores diretamente. Oferecemos ferramentas completas de gestão e relatórios."
    },
    {
      question: "Que tipos de campanhas posso encontrar?",
      answer: "Temos campanhas para todos os segmentos: moda, beleza, tecnologia, alimentação, viagens e muito mais. Desde nano até mega influenciadores encontram oportunidades adequadas."
    },
    {
      question: "Como funciona a comunidade InflusLab?",
      answer: "A InflusLab é nossa comunidade exclusiva com grupos gratuitos para networking, lives pagas com grandes influenciadores e comunidades privadas com marcas parceiras."
    },
    {
      question: "Preciso ter muitos seguidores para participar?",
      answer: "Não! Aceitamos influenciadores de todos os tamanhos. Temos campanhas específicas para nano, micro, macro e mega influenciadores. O importante é ter engajamento e autenticidade."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6"
            >
              <AccordionTrigger className="text-white hover:text-[#C9F05C] transition-colors text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

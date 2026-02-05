import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
export const Testimonials = () => {
  const testimonials = [{
    name: "Maria Silva",
    role: "Gerente de Marketing",
    company: "Fashion Brand",
    content: "O HypeApp revolucionou nossas campanhas. Em 2 semanas conseguimos 50+ propostas de influenciadores qualificados.",
    avatar: "/lovable-uploads/bd9fa68d-3522-42cc-8ad5-5eb052b417e9.png",
    rating: 5,
    bgColor: "from-gray-900/90 to-gray-800/80"
  }, {
    name: "João Santos",
    role: "Influenciador Digital",
    company: "@joaofitness",
    content: "Finalmente uma plataforma que conecta brands sérias com creators. Já fechei 5 parcerias incríveis aqui.",
    avatar: "/lovable-uploads/416a43f5-74b5-4c4f-9070-363440f71a80.png",
    rating: 5,
    bgColor: "from-gray-900/90 to-gray-800/80"
  }, {
    name: "Ana Costa",
    role: "Diretora Comercial",
    company: "TechStart",
    content: "ROI impressionante! Nossa última campanha no HypeApp gerou 300% mais engajamento que outras plataformas.",
    avatar: "/lovable-uploads/52a9e8c3-fd25-4c61-8fc5-ffdba2cb55a3.png",
    rating: 5,
    bgColor: "from-gray-900/90 to-gray-800/80"
  }];
  return <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Resultados reais de quem já usa o HypeApp
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => <Card key={index} className={`bg-gradient-to-br ${testimonial.bgColor} backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105`}>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-r from-lime-400 to-pink-500 p-0.5">
                    <img src={testimonial.avatar} alt={testimonial.name} onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    fallback.style.display = 'flex';
                    fallback.textContent = testimonial.name.split(' ').map(n => n[0]).join('');
                  }
                }} className="w-full h-full rounded-full bg-gray-800 object-contain" />
                    <div className="w-full h-full rounded-full bg-gray-800 hidden items-center justify-center text-white font-bold text-lg"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm mb-1">{testimonial.role}</p>
                    <p className="text-lime-400 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl px-6 md:px-8 py-6 border border-gray-700">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-lime-400">4.9/5</div>
              <div className="text-gray-400 text-sm">Avaliação média</div>
            </div>
            <div className="w-px h-8 md:h-12 bg-gray-700 hidden md:block"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-500">+500</div>
              <div className="text-gray-400 text-sm">Campanhas realizadas</div>
            </div>
            <div className="w-px h-8 md:h-12 bg-gray-700 hidden md:block"></div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-500">98%</div>
              <div className="text-gray-400 text-sm">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
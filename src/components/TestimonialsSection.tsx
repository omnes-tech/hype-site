
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      type: 'influencer',
      name: 'Ana Silva',
      handle: '@anasilva',
      text: 'O HypeApp mudou minha vida! Consegui parcerias incríveis e aumentei minha renda em 300% em apenas 6 meses.',
      rating: 5,
      avatar: 'AS'
    },
    {
      type: 'business',
      name: 'Pedro Santos',
      company: 'Marketing Manager - TechCorp',
      text: 'Encontramos influenciadores perfeitos para nossa marca. A plataforma é intuitiva e os resultados são impressionantes.',
      rating: 5,
      avatar: 'PS'
    },
    {
      type: 'influencer',
      name: 'Carla Mendes',
      handle: '@carlamakeup',
      text: 'Adoro a comunidade InflusLab! Aprendi muito com outros criadores e as oportunidades não param de chegar.',
      rating: 5,
      avatar: 'CM'
    },
    {
      type: 'business',
      name: 'Rafael Lima',
      company: 'CEO - StyleBrand',
      text: 'A qualidade dos influenciadores é excepcional. Nossa última campanha teve um ROI de 400% graças ao HypeApp.',
      rating: 5,
      avatar: 'RL'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Light background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#C9F05C]/10 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#7D3FFF]/10 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#C9F05C]/15 rounded-full blur-xl animate-[pulse_5s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-[#7D3FFF]/10 rounded-full blur-lg animate-[pulse_7s_ease-in-out_infinite_3s]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
          O que dizem nossos influenciadores e empresas
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:scale-105 transition-all duration-300 relative overflow-hidden"
              style={{
                boxShadow: index % 2 === 0 
                  ? '0 0 30px rgba(201, 240, 92, 0.3), inset 0 0 30px rgba(201, 240, 92, 0.1)' 
                  : '0 0 30px rgba(125, 63, 255, 0.3), inset 0 0 30px rgba(125, 63, 255, 0.1)'
              }}
            >
              {/* Glowing border effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-20"
                style={{
                  background: index % 2 === 0 
                    ? 'linear-gradient(45deg, rgba(201, 240, 92, 0.3), transparent, rgba(201, 240, 92, 0.3))'
                    : 'linear-gradient(45deg, rgba(125, 63, 255, 0.3), transparent, rgba(125, 63, 255, 0.3))'
                }}
              />
              
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9F05C] to-[#FF3E94] rounded-full flex items-center justify-center text-black font-bold">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.type === 'influencer' ? testimonial.handle : testimonial.company}
                  </p>
                </div>
                <div className="flex gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

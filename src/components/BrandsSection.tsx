
import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';

const BrandsSection = () => {
  const brands = [
    {
      name: 'Zoo São Paulo',
      logo: '/lovable-uploads/61518924-5f1b-4744-8742-3182b39e17a9.png'
    },
    {
      name: 'Shopee',
      logo: '/lovable-uploads/52949354-e7c4-49c7-9465-6116dd918c28.png'
    },
    {
      name: 'Tenda Atacado',
      logo: '/lovable-uploads/9044e658-986e-4bdf-b1c2-b65d62c973c7.png'
    },
    {
      name: 'Realme',
      logo: '/lovable-uploads/29a0860c-ccd6-43b6-a636-5d795fc34d7f.png'
    },
    {
      name: 'TNT',
      logo: '/lovable-uploads/343bbd3d-fe6d-43b2-b318-5ad41ebf0d35.png'
    },
    {
      name: 'Méliuz',
      logo: '/lovable-uploads/d64bb687-1c37-4952-a1e8-8e3f736b69f9.png'
    },
    {
      name: 'Papelito',
      logo: '/lovable-uploads/828d3500-967b-41df-9152-2d03f1f7bddd.png'
    },
    {
      name: 'GraniAmici',
      logo: '/lovable-uploads/416a43f5-74b5-4c4f-9070-363440f71a80.png'
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden">
      {/* Enhanced background light effects - responsive */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 md:w-64 h-32 md:h-64 bg-[#C9F05C]/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-10 w-24 md:w-48 h-24 md:h-48 bg-[#FF3E94]/15 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/2 left-1/3 w-16 md:w-32 h-16 md:h-32 bg-[#7D3FFF]/20 rounded-full blur-xl animate-[pulse_5s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-1/3 left-1/4 w-12 md:w-24 h-12 md:h-24 bg-[#C9F05C]/15 rounded-full blur-lg animate-[pulse_7s_ease-in-out_infinite_3s]" />
        
        {/* Additional moving elements - hide some on mobile */}
        <div className="absolute top-1/4 right-1/4 w-8 md:w-16 h-8 md:h-16 bg-[#FF3E94]/10 rounded-full blur-md animate-[pulse_8s_ease-in-out_infinite_2.5s]" />
        <div className="absolute bottom-1/4 left-2/3 w-10 md:w-20 h-10 md:h-20 bg-[#7D3FFF]/15 rounded-full blur-lg animate-[pulse_9s_ease-in-out_infinite_4s] hidden md:block" />
      </div>

      {/* Floating particles - fewer on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-[#C9F05C] rounded-full animate-[float_6s_ease-in-out_infinite]" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-[#FF3E94] rounded-full animate-[float_7s_ease-in-out_infinite] hidden md:block" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-[#7D3FFF] rounded-full animate-[float_8s_ease-in-out_infinite] hidden md:block" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-[#C9F05C] rounded-full animate-[float_5s_ease-in-out_infinite]" 
             style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-16 text-white">
          Marcas que confiam no{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9F05C] to-[#FF3E94]">
            HypeApp
          </span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoPlay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            })
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 flex items-center justify-center hover:scale-105 hover:bg-white/10 transition-all duration-300 cursor-pointer group h-24 md:h-32">
                  {/* Individual light effect behind each logo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9F05C]/5 via-transparent to-[#FF3E94]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white/2 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <img 
                    src={brand.logo} 
                    alt={brand.name}
                    className="max-w-full max-h-12 md:max-h-16 w-auto h-auto object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white/10 border-white/20 hover:bg-white/20 text-white hidden md:flex" />
          <CarouselNext className="bg-white/10 border-white/20 hover:bg-white/20 text-white hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default BrandsSection;

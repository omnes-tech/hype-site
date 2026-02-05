
import React from 'react';
import { handleAppDownload } from "@/utils/downloadTracking";

const DownloadSection = () => {
  return (
    <section className="py-8 md:py-16 px-4 bg-gradient-to-r from-[#7D3FFF]/10 to-black relative overflow-hidden">
      {/* Custom design behind mockup - responsive */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-10 w-32 md:w-96 h-32 md:h-96 bg-gradient-to-br from-[#C9F05C]/30 via-[#FF3E94]/20 to-[#7D3FFF]/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-24 md:w-64 h-24 md:h-64 bg-gradient-to-tl from-[#FF3E94]/40 to-transparent rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite_1s]" />
        <div className="absolute top-10 right-1/3 w-12 md:w-32 h-12 md:h-32 bg-[#C9F05C]/50 rounded-full blur-xl animate-[pulse_6s_ease-in-out_infinite_2s]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left relative z-10 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-6 bg-gradient-to-r from-[#C9F05C] via-[#FF3E94] to-[#7D3FFF] bg-clip-text text-transparent drop-shadow-2xl">
              Baixe o app e comece agora mesmo
            </h2>
            
            <p className="text-base md:text-xl text-white/70 mb-4 md:mb-8">
              Disponível para iOS e Android. Faça o download gratuito e entre para a maior comunidade de influenciadores do Brasil.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center">
              <img 
                src="/lovable-uploads/84e8f256-9268-447b-923f-8fed8e10196b.png" 
                alt="Disponível na App Store" 
                className="h-10 md:h-14 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleAppDownload('ios', 'https://apps.apple.com/br/app/hype-app/id1616326354')}
              />
              <img 
                src="/lovable-uploads/df39d372-4ff4-4558-af27-1fc43f6b4a41.png" 
                alt="Disponível no Google Play" 
                className="h-10 md:h-14 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleAppDownload('android', 'https://play.google.com/store/apps/details?id=br.com.hypeapp&pcampaignid=web_share')}
              />
            </div>
          </div>
          
          {/* Right side - Real phone mockup - responsive */}
          <div className="flex justify-center relative order-1 lg:order-2">
            {/* Enhanced background design - responsive */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 md:w-80 h-32 md:h-80 bg-gradient-to-br from-[#C9F05C]/20 via-[#FF3E94]/15 to-[#7D3FFF]/20 rounded-full blur-2xl animate-pulse" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-28 md:w-64 h-28 md:h-64 border-2 border-[#C9F05C]/30 rounded-full animate-[pulse_3s_ease-in-out_infinite]" />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 md:w-48 h-24 md:h-48 border border-[#FF3E94]/40 rounded-full animate-[pulse_4s_ease-in-out_infinite_1s]" />
            </div>
            
            <img 
              src="/lovable-uploads/00c0c46f-6c6f-4365-9be9-c855d64bc1cc.png" 
              alt="HypeApp no celular" 
              className="max-w-full h-auto max-h-56 md:max-h-96 drop-shadow-2xl hover:scale-105 transition-transform duration-300 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;

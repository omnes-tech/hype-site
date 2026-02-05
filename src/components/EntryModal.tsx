
import React from 'react';

interface EntryModalProps {
  onSelectOption: (sectionId: string) => void;
}

const EntryModal = ({ onSelectOption }: EntryModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blurred backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" />
      
      {/* Modal content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-md mx-4 text-center">
        {/* HypeApp Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/24a02f18-61cf-48b2-9d66-cad256a68099.png" 
            alt="HypeApp Logo" 
            className="h-20 w-auto"
          />
        </div>
        
        <h2 className="text-2xl font-bold mb-8 text-white">
          Você está aqui para...
        </h2>
        
        <div className="space-y-4">
          <button
            onClick={() => onSelectOption('influencer-section')}
            className="w-full bg-transparent border-2 border-[#C9F05C] text-[#C9F05C] font-bold text-lg py-3 px-6 rounded-xl hover:bg-[#C9F05C]/10 transition-colors duration-300"
          >
            Sou influenciador
          </button>
          
          <button
            onClick={() => onSelectOption('business-section')}
            className="w-full bg-transparent border-2 border-[#FF3E94] text-[#FF3E94] font-bold text-lg py-3 px-6 rounded-xl hover:bg-[#FF3E94]/10 transition-colors duration-300"
          >
            Sou Agência/Empresa
          </button>
          
          <button
            onClick={() => onSelectOption('campaign-section')}
            className="w-full bg-transparent border-2 border-[#7D3FFF] text-[#7D3FFF] font-bold text-lg py-3 px-6 rounded-xl hover:bg-[#7D3FFF]/10 transition-colors duration-300"
          >
            Quero conhecer os dois
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntryModal;

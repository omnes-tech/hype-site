
import React from 'react';
import { Users, Megaphone, Building2 } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-12 h-12 text-[#C9F05C]" />,
      number: "+8000",
      label: "influenciadores"
    },
    {
      icon: <Megaphone className="w-12 h-12 text-[#FF3E94]" />,
      number: "+500",
      label: "campanhas publicadas"
    },
    {
      icon: <Building2 className="w-12 h-12 text-[#7D3FFF]" />,
      number: "+50",
      label: "segmentos atendidos"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#7D3FFF]/10 to-black/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white">
          Números da plataforma
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
              <div className="flex justify-center mb-6">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                {stat.number}
              </div>
              <div className="text-white/70 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

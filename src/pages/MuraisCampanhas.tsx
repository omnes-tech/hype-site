
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PlanUpsell } from "@/components/sections/PlanUpsell";
import { FormSection } from "@/components/sections/FormSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MuraisCampanhas = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Botão Voltar */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          onClick={handleVoltar}
          variant="outline"
          size="sm"
          className="bg-black/80 border-white/20 text-white hover:bg-white/10 backdrop-blur-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
      </div>

      <Hero />
      <Benefits />
      <HowItWorks />
      <PlanUpsell />
      <FormSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default MuraisCampanhas;

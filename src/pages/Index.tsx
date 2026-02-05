
import React, { useState, useEffect } from 'react';
import EntryModal from '../components/EntryModal';
import Navigation from '../components/Navigation';
import CampaignSection from '../components/CampaignSection';
import BusinessSection from '../components/BusinessSection';
import InfluencerSection from '../components/InfluencerSection';
import StatsSection from '../components/StatsSection';
import BrandsSection from '../components/BrandsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import InflusLabSection from '../components/InflusLabSection';
import FAQSection from '../components/FAQSection';
import DownloadSection from '../components/DownloadSection';
import Footer from '../components/Footer';

const Index = () => {
  const [showModal, setShowModal] = useState(true);

  const scrollToSection = (sectionId: string) => {
    setShowModal(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {showModal && <EntryModal onSelectOption={scrollToSection} />}
      
      <Navigation />
      
      <main>
        <CampaignSection />
        <BusinessSection />
        <InfluencerSection />
        <StatsSection />
        <BrandsSection />
        <TestimonialsSection />
        <InflusLabSection />
        <FAQSection />
        <DownloadSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

import React, { useEffect } from 'react';
import Hero from './section/hero';
import AudienceSection from './section/AudienceSection';
import MethodJourneySection from './section/MethodJourneySection';
import EventDetailsSection from './section/EventDetailsSection';
import PricingSection from './section/PricingSection';
import TestimonialsSection from './section/TestimonialsSection';
import DiferenciaisSection from './section/DiferenciaisSection';
import CristoferLeoneSectionn from './section/CristoferLeoneSectionn';
import FinalCtaSection from './section/FinalCtaSection';
import FAQSection from './section/FAQSection';
import Footer from './section/Footer';

const App = () => {
  useEffect(() => {
    // Adiciona a fonte Montserrat
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Adiciona classes ao body
    document.body.className = 'bg-[#0c1220] text-white font-[Montserrat] overflow-x-hidden';
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <main className="flex flex-col w-full bg-[#0c1220]">
      <Hero />
      <AudienceSection />
      <MethodJourneySection />
      <PricingSection />
      <TestimonialsSection />
      <DiferenciaisSection />
      <CristoferLeoneSectionn />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default App;
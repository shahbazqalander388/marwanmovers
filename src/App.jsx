import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { MovingTypes } from './components/MovingTypes';
import { Gallery } from './components/Gallery';
import { AreasServed } from './components/AreasServed';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { QuoteCTA } from './components/QuoteCTA';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { QuoteModal } from './components/QuoteModal';

function MainLayout() {
  const { isRtl } = useLanguage();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenQuote = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedService('');
  };

  const handleSelectServiceFromSection = (serviceName) => {
    setSelectedService(serviceName);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsQuoteModalOpen(true);
    }
  };

  return (
    <div className={`min-h-screen bg-white text-slate-900 ${isRtl ? 'font-arabic' : 'font-sans'}`}>
      {/* Sticky Upper Header (TopBar + Navbar) on both Mobile and Laptop/Desktop views */}
      <header className="sticky top-0 z-40 w-full shadow-md bg-white">
        <TopBar />
        <Navbar onOpenQuote={() => handleOpenQuote()} />
      </header>

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Services Section (12 Services) */}
        <Services onSelectService={handleSelectServiceFromSection} />

        {/* 4. Moving Types Section */}
        <MovingTypes onSelectType={handleSelectServiceFromSection} />

        {/* 5. Real Fleet & Operations Gallery (5 High-Resolution Images & Lightbox) */}
        <Gallery />

        {/* 6. Areas We Serve (All 7 Emirates & Al Ain) */}
        <AreasServed />

        {/* 6. Why Choose Us (8 Trust Pillars) */}
        <WhyChooseUs />

        {/* 7. How It Works (4 Steps) */}
        <HowItWorks />

        {/* 8. Conversion Call-To-Action Banner */}
        <QuoteCTA onOpenQuote={() => handleOpenQuote()} />

        {/* 9. Frequently Asked Questions (Accordion) */}
        <FAQ />

        {/* 10. Contact & Quote Request Form */}
        <ContactSection initialService={selectedService} />

        {/* 11. Google Maps Section */}
        <MapSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating WhatsApp & Call Buttons */}
      <FloatingActions />

      {/* Global Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        preselectedService={selectedService}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}

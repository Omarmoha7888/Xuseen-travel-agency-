import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ToastProvider } from './components/Toast';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatsCounter } from './components/StatsCounter';
import { FeaturedServices } from './components/FeaturedServices';
import { AboutUsSection } from './components/AboutUsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TravelGallery } from './components/TravelGallery';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { RequestServiceModal } from './components/RequestServiceModal';
import { TrackRequestModal } from './components/TrackRequestModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';

const MainApp: React.FC = () => {
  const { isRtl } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');

  // Modal states
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestServiceId, setRequestServiceId] = useState<string | undefined>(undefined);
  const [requestPrefill, setRequestPrefill] = useState<{ destination?: string; departureDate?: string } | undefined>(undefined);

  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [trackRequestId, setTrackRequestId] = useState<string | undefined>(undefined);
  const [trackQuery, setTrackQuery] = useState<string | undefined>(undefined);

  const [detailServiceId, setDetailServiceId] = useState<string | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleOpenRequest = (serviceId?: string, prefill?: { destination?: string; departureDate?: string }) => {
    setRequestServiceId(serviceId);
    setRequestPrefill(prefill);
    setIsRequestModalOpen(true);
  };

  const handleOpenTrack = (reqId?: string, query?: string) => {
    setTrackRequestId(reqId);
    setTrackQuery(query);
    setIsTrackModalOpen(true);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact-us');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-[#D4AF37] selection:text-black ${isRtl ? 'font-cairo' : 'font-sans'}`}>
      
      {/* Top Sticky Luxury Navbar */}
      <Navbar
        onRequestService={handleOpenRequest}
        onTrackRequest={() => handleOpenTrack()}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onSelectServiceDetail={(id) => setDetailServiceId(id)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Quick Booking Widget */}
        <HeroSection
          onRequestService={handleOpenRequest}
          onContactClick={scrollToContact}
          onTrackClick={() => handleOpenTrack()}
        />

        {/* 2. Key Stats Counter */}
        <StatsCounter />

        {/* 3. Featured Services Directory */}
        <FeaturedServices
          onSelectServiceDetail={(id) => setDetailServiceId(id)}
          onRequestService={handleOpenRequest}
        />

        {/* 4. About Us Section */}
        <AboutUsSection />

        {/* 5. Why Choose Us Feature Cards */}
        <WhyChooseUs />

        {/* 6. Client Testimonials */}
        <TestimonialsSection />

        {/* 7. Travel Media Gallery */}
        <TravelGallery />

        {/* 8. Frequently Asked Questions */}
        <FAQSection onContactClick={scrollToContact} />

        {/* 9. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Luxury Footer */}
      <Footer
        onRequestService={handleOpenRequest}
        onTrackRequest={() => handleOpenTrack()}
        onSelectServiceDetail={(id) => setDetailServiceId(id)}
      />

      {/* Request Service Modal */}
      <RequestServiceModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        initialServiceId={requestServiceId}
        prefillData={requestPrefill}
        onTrackCreatedRequest={(reqId, email) => {
          handleOpenTrack(reqId, email);
        }}
      />

      {/* Track Request Portal Modal */}
      <TrackRequestModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
        initialRequestId={trackRequestId}
        initialQuery={trackQuery}
      />

      {/* Service Detail / Guide Modal */}
      <ServiceDetailModal
        serviceId={detailServiceId}
        onClose={() => setDetailServiceId(null)}
        onRequestService={(id) => handleOpenRequest(id)}
        onContactClick={scrollToContact}
        onSelectAnotherService={(id) => setDetailServiceId(id)}
      />

      {/* Global Quick Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectService={(id) => setDetailServiceId(id)}
        onRequestService={(id) => handleOpenRequest(id)}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <MainApp />
      </ToastProvider>
    </LanguageProvider>
  );
}

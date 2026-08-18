import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Search, 
  Phone, 
  Mail, 
  Compass, 
  FileText, 
  ChevronDown, 
  Menu, 
  X, 
  Plane, 
  Hotel, 
  Moon, 
  Palmtree, 
  Car, 
  Package, 
  ShieldCheck,
  Clock,
  Home,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface NavbarProps {
  onRequestService: (serviceId?: string) => void;
  onTrackRequest: () => void;
  onOpenSearch: () => void;
  onSelectServiceDetail: (serviceId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onRequestService,
  onTrackRequest,
  onOpenSearch,
  onSelectServiceDetail,
  activeSection
}) => {
  const { language, setLanguage, t, isRtl } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const serviceCategories = [
    { id: 'flight-booking', name: t.nav.flightBooking, icon: Plane, desc: 'International & domestic flights' },
    { id: 'visa-processing-tourist', name: t.nav.visaServices, icon: FileText, desc: 'Dubai, Turkey, Europe & global visas' },
    { id: 'hajj-packages', name: t.nav.hajjUmrah, icon: Moon, desc: 'VIP Hajj & Year-round Umrah' },
    { id: 'hotel-booking', name: t.nav.hotels, icon: Hotel, desc: '5-star & luxury resort stays' },
    { id: 'holiday-tour-packages', name: t.nav.holidayPackages, icon: Palmtree, desc: 'Bespoke international vacations' },
    { id: 'airport-transfers-car-rental', name: t.nav.airportTransfer + ' & ' + t.nav.carRental, icon: Car, desc: 'VIP pickup, drop-off & rentals' },
    { id: 'cargo-logistics-services', name: t.nav.cargoServices, icon: Package, desc: 'Express air freight forwarding' },
    { id: 'travel-insurance', name: 'Travel Insurance', icon: ShieldCheck, desc: 'Embassy-approved coverage' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
        {/* Top Luxury Announcement & Contact Bar (Desktop) */}
        <div className="bg-[#080808] border-b border-[#D4AF37]/15 text-xs text-gray-400 py-1.5 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a href="tel:+252612483838" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span dir="ltr">+252 61 2483838</span>
              </a>
              <a href="tel:+252612141414" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span dir="ltr">+252 61 2141414</span>
              </a>
              <a href="mailto:balcadtravel@gmail.com" className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>balcadtravel@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-400">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Sat - Thu: 8:00 AM - 8:30 PM (EAT)</span>
              </div>
              <div className="h-3 w-px bg-gray-800" />
              <button 
                onClick={onTrackRequest}
                className="text-[#D4AF37] hover:underline flex items-center gap-1 font-medium"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{t.nav.trackRequest}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl py-2.5 sm:py-3 border-b border-[#D4AF37]/20' 
            : 'bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/80 to-transparent backdrop-blur-sm py-3 sm:py-4 border-b border-white/5'
        }`}>
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
            
            {/* Logo & Brand Identity */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="flex items-center group touch-manipulation"
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                onClick={() => scrollToSection('hero')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === 'hero' ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-gray-200 hover:text-[#D4AF37]'
                }`}
              >
                {t.nav.home}
              </button>

              <button
                onClick={() => scrollToSection('about-us')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === 'about-us' ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-gray-200 hover:text-[#D4AF37]'
                }`}
              >
                {t.nav.aboutUs}
              </button>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => scrollToSection('services')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                    activeSection === 'services' ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-gray-200 hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{t.nav.services}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                </button>

                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-80 bg-[#141414] border border-[#D4AF37]/30 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl"
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {serviceCategories.map((service) => {
                          const IconComponent = service.icon;
                          return (
                            <button
                              key={service.id}
                              onClick={() => {
                                setIsServicesDropdownOpen(false);
                                onSelectServiceDetail(service.id);
                              }}
                              className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#1E1E1E] transition-all text-left group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                                <IconComponent className="w-4 h-4 text-[#D4AF37] group-hover:text-black" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium text-white group-hover:text-[#D4AF37] transition-colors">
                                  {service.name}
                                </div>
                                <div className="text-[11px] text-gray-400 leading-tight line-clamp-1">
                                  {service.desc}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => {
                  onSelectServiceDetail('visa-processing-tourist');
                }}
                className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-[#D4AF37] rounded-lg transition-colors"
              >
                {t.nav.visaServices}
              </button>

              <button
                onClick={() => {
                  onSelectServiceDetail('flight-booking');
                }}
                className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-[#D4AF37] rounded-lg transition-colors"
              >
                {t.nav.flightBooking}
              </button>

              <button
                onClick={() => {
                  onSelectServiceDetail('hajj-packages');
                }}
                className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-[#D4AF37] rounded-lg transition-colors"
              >
                {t.nav.hajjUmrah}
              </button>

              <button
                onClick={() => scrollToSection('contact-us')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === 'contact-us' ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-gray-200 hover:text-[#D4AF37]'
                }`}
              >
                {t.nav.contactUs}
              </button>

              <button
                onClick={() => scrollToSection('faq')}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === 'faq' ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-gray-200 hover:text-[#D4AF37]'
                }`}
              >
                {t.nav.faq}
              </button>
            </div>

            {/* Right Action Icons & Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Global Search Button */}
              <button
                onClick={onOpenSearch}
                className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-gray-300 hover:text-[#D4AF37] transition-all touch-manipulation"
                title="Search visas, flights, and FAQs"
                aria-label="Search"
              >
                <Search className="w-4 h-4 sm:w-4 sm:h-4" />
              </button>

              {/* Language Selector Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-gray-200 text-xs font-semibold uppercase transition-all touch-manipulation"
                  aria-label="Change Language"
                >
                  <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className="text-[11px] sm:text-xs">{language === 'en' ? 'EN' : language === 'so' ? 'SO' : 'عربي'}</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-36 bg-[#181818] border border-[#D4AF37]/30 rounded-xl shadow-2xl py-1.5 z-50 overflow-hidden"
                    >
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-[#252525] transition-colors ${
                          language === 'en' ? 'text-[#D4AF37] bg-[#D4AF37]/10 font-bold' : 'text-gray-300'
                        }`}
                      >
                        <span>English</span>
                        <span className="text-[10px] text-gray-500">EN</span>
                      </button>
                      <button
                        onClick={() => handleLanguageChange('so')}
                        className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-[#252525] transition-colors ${
                          language === 'so' ? 'text-[#D4AF37] bg-[#D4AF37]/10 font-bold' : 'text-gray-300'
                        }`}
                      >
                        <span>Soomaali</span>
                        <span className="text-[10px] text-gray-500">SO</span>
                      </button>
                      <button
                        onClick={() => handleLanguageChange('ar')}
                        className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between hover:bg-[#252525] transition-colors ${
                          language === 'ar' ? 'text-[#D4AF37] bg-[#D4AF37]/10 font-bold' : 'text-gray-300'
                        }`}
                      >
                        <span className="font-cairo">العربية</span>
                        <span className="text-[10px] text-gray-500">AR</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Track Button (Desktop) */}
              <button
                onClick={onTrackRequest}
                className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:text-white transition-all"
              >
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.nav.trackRequest}</span>
              </button>

              {/* Request Service CTA (Desktop) */}
              <button
                onClick={() => onRequestService()}
                className="hidden sm:flex relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all active:scale-95 items-center gap-1.5"
              >
                <span>{t.nav.requestService}</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white touch-manipulation"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-[#D4AF37]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Full-Screen Slide-Out Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-[#0E0E0E]/98 backdrop-blur-2xl border-b border-[#D4AF37]/30 px-4 py-6 overflow-y-auto z-50 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-2">
                {/* Primary Nav Links */}
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-left py-3 px-4 text-base font-semibold text-white hover:text-[#D4AF37] rounded-xl hover:bg-white/5 flex items-center justify-between"
                >
                  <span>{t.nav.home}</span>
                  <Home className="w-4 h-4 text-gray-500" />
                </button>

                <button
                  onClick={() => scrollToSection('about-us')}
                  className="text-left py-3 px-4 text-base font-semibold text-white hover:text-[#D4AF37] rounded-xl hover:bg-white/5"
                >
                  {t.nav.aboutUs}
                </button>

                <button
                  onClick={() => scrollToSection('services')}
                  className="text-left py-3 px-4 text-base font-semibold text-white hover:text-[#D4AF37] rounded-xl hover:bg-white/5"
                >
                  {t.nav.services}
                </button>

                {/* Service Categories Quick Grid on Mobile */}
                <div className="grid grid-cols-2 gap-2 my-2 p-2 rounded-2xl bg-[#161616] border border-white/5">
                  {serviceCategories.map((s) => {
                    const IconComp = s.icon;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          onSelectServiceDetail(s.id);
                        }}
                        className="text-left p-2.5 rounded-xl bg-[#1E1E1E] hover:bg-[#D4AF37]/20 border border-white/5 flex items-center gap-2"
                      >
                        <IconComp className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span className="text-xs text-gray-200 font-medium truncate">{s.name}</span>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => scrollToSection('contact-us')}
                  className="text-left py-3 px-4 text-base font-semibold text-white hover:text-[#D4AF37] rounded-xl hover:bg-white/5"
                >
                  {t.nav.contactUs}
                </button>

                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-left py-3 px-4 text-base font-semibold text-white hover:text-[#D4AF37] rounded-xl hover:bg-white/5"
                >
                  {t.nav.faq}
                </button>
              </div>

              {/* Mobile Drawer Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-3 pb-12">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onRequestService();
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black font-bold text-sm shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
                >
                  <Plane className="w-4 h-4" />
                  <span>{t.nav.requestService}</span>
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onTrackRequest();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#1C1C1C] border border-[#D4AF37]/30 text-white font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t.nav.trackRequest}</span>
                </button>

                <div className="p-3 rounded-xl bg-black/60 border border-white/5 text-xs text-gray-400 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span dir="ltr">+252 61 2483838</span>
                  </div>
                  <a
                    href="https://wa.me/252612483838"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-bold hover:underline"
                  >
                    WhatsApp Chat →
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Bottom Quick Navigation Bar for Mobile (Always accessible, high polish) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0E0E0E]/95 backdrop-blur-lg border-t border-[#D4AF37]/30 px-3 py-2 shadow-2xl">
        <div className="max-w-md mx-auto flex items-center justify-around gap-1 text-center">
          {/* Home */}
          <button
            onClick={() => scrollToSection('hero')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors touch-manipulation ${
              activeSection === 'hero' ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-[10px] font-medium mt-0.5">{t.nav.home}</span>
          </button>

          {/* Services */}
          <button
            onClick={() => scrollToSection('services')}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-colors touch-manipulation ${
              activeSection === 'services' ? 'text-[#D4AF37]' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Plane className="w-5 h-5" />
            <span className="text-[10px] font-medium mt-0.5">{t.nav.services}</span>
          </button>

          {/* Center Main Action: Request Service */}
          <button
            onClick={() => onRequestService()}
            className="flex flex-col items-center justify-center -mt-5 px-3 py-1.5 rounded-2xl bg-gradient-to-tr from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black shadow-lg shadow-[#D4AF37]/40 active:scale-95 transition-transform touch-manipulation"
          >
            <Sparkles className="w-5 h-5 text-black" />
            <span className="text-[10px] font-extrabold text-black uppercase tracking-wider mt-0.5">Book</span>
          </button>

          {/* Track */}
          <button
            onClick={onTrackRequest}
            className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-gray-400 hover:text-[#D4AF37] transition-colors touch-manipulation"
          >
            <Compass className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[10px] font-medium mt-0.5">{t.nav.trackRequest}</span>
          </button>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/252612483838"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-emerald-400 hover:text-emerald-300 transition-colors touch-manipulation"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-medium mt-0.5">Chat</span>
          </a>
        </div>
      </div>
    </>
  );
};

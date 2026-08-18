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
  Building2,
  Clock
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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  };

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* Top Luxury Announcement & Contact Bar */}
      <div className="bg-[#0A0A0A] border-b border-[#D4AF37]/15 text-xs text-gray-400 py-1.5 px-4 hidden md:block">
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

      {/* Main Glass Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0E0E0E]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#D4AF37]/20' 
          : 'bg-gradient-to-b from-[#0E0E0E]/90 to-[#0E0E0E]/40 backdrop-blur-sm py-4 border-b border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
            className="flex items-center group"
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
          <div className="flex items-center gap-2.5">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 text-gray-300 hover:text-[#D4AF37] transition-all"
              title="Search visas, flights, and FAQs"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 text-gray-200 text-xs font-semibold uppercase transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{language === 'en' ? 'EN' : language === 'so' ? 'SO' : 'عربي'}</span>
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

            {/* Track Button (Mobile and desktop) */}
            <button
              onClick={onTrackRequest}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:text-white transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{t.nav.trackRequest}</span>
            </button>

            {/* Request Service CTA (Gold gradient) */}
            <button
              onClick={() => onRequestService()}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] shadow-lg shadow-[#D4AF37]/25 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>{t.nav.requestService}</span>
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-Out Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#121212]/98 border-b border-[#D4AF37]/30 backdrop-blur-2xl px-5 py-6 overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left py-2 px-3 text-sm font-medium text-white hover:text-[#D4AF37] rounded-lg hover:bg-white/5"
              >
                {t.nav.home}
              </button>

              <button
                onClick={() => scrollToSection('about-us')}
                className="text-left py-2 px-3 text-sm font-medium text-white hover:text-[#D4AF37] rounded-lg hover:bg-white/5"
              >
                {t.nav.aboutUs}
              </button>

              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-2 px-3 text-sm font-medium text-white hover:text-[#D4AF37] rounded-lg hover:bg-white/5"
              >
                {t.nav.services}
              </button>

              <div className="pl-4 border-l border-[#D4AF37]/20 flex flex-col gap-2 my-1">
                {serviceCategories.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onSelectServiceDetail(s.id);
                    }}
                    className="text-left text-xs text-gray-300 hover:text-[#D4AF37] py-1 flex items-center gap-2"
                  >
                    <span>•</span>
                    <span>{s.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('contact-us')}
                className="text-left py-2 px-3 text-sm font-medium text-white hover:text-[#D4AF37] rounded-lg hover:bg-white/5"
              >
                {t.nav.contactUs}
              </button>

              <button
                onClick={() => scrollToSection('faq')}
                className="text-left py-2 px-3 text-sm font-medium text-white hover:text-[#D4AF37] rounded-lg hover:bg-white/5"
              >
                {t.nav.faq}
              </button>

              <div className="h-px bg-white/10 my-2" />

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onTrackRequest();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-[#202020] text-xs font-semibold text-[#D4AF37] border border-[#D4AF37]/30 flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4" />
                  <span>{t.nav.trackRequest}</span>
                </button>
              </div>

              <div className="mt-3 p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-gray-400 space-y-1.5">
                <div className="flex items-center gap-2 text-gray-300 font-semibold">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Hotline: +252 61 2483838</span>
                </div>
                <div className="text-[11px] text-gray-400">
                  balcadtravel@gmail.com
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Plane, 
  Search, 
  Shield, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, allDestinations } from '../data/servicesData';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onRequestService: (serviceId?: string, prefill?: { destination?: string; departureDate?: string }) => void;
  onContactClick: () => void;
  onTrackClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestService,
  onContactClick,
  onTrackClick,
}) => {
  const { language, t, isRtl } = useLanguage();
  
  const [selectedService, setSelectedService] = useState('flight-booking');
  const [destination, setDestination] = useState(allDestinations[0]);
  const [travelDate, setTravelDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    return d.toISOString().split('T')[0];
  });

  const handleStartInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    onRequestService(selectedService, {
      destination,
      departureDate: travelDate
    });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Dark Vignette and Gold Shimmer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Travel Background"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform animate-pulse duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          
          {/* Authority Tag / Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-[#D4AF37]/5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Luxury Main Headlines */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-4"
          >
            <span className="block">{t.hero.titleLine1}</span>
            <span className="text-gold-gradient block mt-1">{t.hero.titleLine2}</span>
          </motion.h1>

          {/* Tagline / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
          >
            {t.hero.description}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => onRequestService()}
              className="px-6 sm:px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] shadow-xl shadow-[#D4AF37]/30 hover:shadow-2xl hover:shadow-[#D4AF37]/50 hover:scale-[1.02] transition-all flex items-center gap-2"
            >
              <span>{t.hero.ctaRequest}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={onContactClick}
              className="px-6 sm:px-8 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-[#1A1A1A] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#252525] transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.hero.ctaContact}</span>
            </button>

            <button
              onClick={onTrackClick}
              className="px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 transition-all flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.hero.ctaTrack}</span>
            </button>
          </motion.div>
        </div>

        {/* Quick Travel Inquiry Floating Console */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-5xl mx-auto rounded-3xl bg-[#141414]/90 border border-[#D4AF37]/30 p-5 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                <Plane className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-white font-cinzel">
                {t.hero.quickQuoteTitle}
              </h3>
            </div>
            <span className="text-xs text-[#D4AF37] font-medium hidden sm:inline-block">
              ✓ No online payment required
            </span>
          </div>

          <form onSubmit={handleStartInquiry} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
            {/* Service Type Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.hero.serviceTypeLabel}</span>
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-[#1F1F1F] border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-xs sm:text-sm rounded-xl p-3 outline-none transition-colors"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.id} className="bg-[#1F1F1F] text-white">
                    {s.title[language]}
                  </option>
                ))}
              </select>
            </div>

            {/* Destination Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.hero.destinationLabel}</span>
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#1F1F1F] border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-xs sm:text-sm rounded-xl p-3 outline-none transition-colors"
              >
                {allDestinations.map((dest, i) => (
                  <option key={i} value={dest} className="bg-[#1F1F1F] text-white">
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.hero.departureDateLabel}</span>
              </label>
              <input
                type="date"
                value={travelDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-[#1F1F1F] border border-white/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white text-xs sm:text-sm rounded-xl p-3 outline-none transition-colors"
              />
            </div>

            {/* Start Inquiry Button */}
            <div className="flex items-end md:col-span-3 lg:col-span-1">
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] hover:shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <span>{t.hero.startRequestBtn}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </form>

          {/* Three Trust Footers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/5 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{t.hero.trustBadges.satisfaction}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{t.hero.trustBadges.certified}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>{t.hero.trustBadges.support}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

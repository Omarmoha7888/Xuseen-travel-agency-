import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Plane, 
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
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 sm:pt-28 pb-12 sm:pb-16 px-3 sm:px-6 lg:px-8 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Dark Vignette and Gold Shimmer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Travel Background"
          className="w-full h-full object-cover object-center opacity-20 sm:opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          
          {/* Authority Tag / Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[11px] sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg shadow-[#D4AF37]/5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* Luxury Main Headlines */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-3 sm:mb-4 px-2"
          >
            <span className="block">{t.hero.titleLine1}</span>
            <span className="text-gold-gradient block mt-1">{t.hero.titleLine2}</span>
          </motion.h1>

          {/* Tagline / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-base md:text-lg text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-2"
          >
            {t.hero.description}
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 px-2"
          >
            <button
              onClick={() => onRequestService()}
              className="flex-1 sm:flex-none min-w-[140px] px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] shadow-xl shadow-[#D4AF37]/25 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>{t.hero.ctaRequest}</span>
              <ArrowRight className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={onContactClick}
              className="flex-1 sm:flex-none min-w-[140px] px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-base text-white bg-[#1A1A1A] border border-[#D4AF37]/30 hover:border-[#D4AF37] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37]" />
              <span>{t.hero.ctaContact}</span>
            </button>

            <button
              onClick={onTrackClick}
              className="w-full sm:w-auto px-4 py-2.5 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.hero.ctaTrack}</span>
            </button>
          </motion.div>
        </div>

        {/* Quick Travel Inquiry Floating Console */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-[#141414]/95 border border-[#D4AF37]/30 p-4 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3.5 mb-4 sm:mb-5">
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                <Plane className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-sm sm:text-lg text-white font-cinzel">
                {t.hero.quickQuoteTitle}
              </h3>
            </div>
            <span className="text-[11px] sm:text-xs text-[#D4AF37] font-medium">
              ✓ No online fees
            </span>
          </div>

          <form onSubmit={handleStartInquiry} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* Service Type Selection */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.hero.serviceTypeLabel}</span>
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-[#1F1F1F] border border-white/10 focus:border-[#D4AF37] text-white text-xs sm:text-sm rounded-xl p-3 outline-none transition-colors min-h-[44px]"
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.id} className="bg-[#1F1F1F] text-white">
                    {s.title[language]}
                  </option>
                ))}
              </select>
            </div>

            {/* Destination Selection */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.hero.destinationLabel}</span>
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#1F1F1F] border border-white/10 focus:border-[#D4AF37] text-white text-xs sm:text-sm rounded-xl p-3 outline-none transition-colors min-h-[44px]"
              >
                {allDestinations.map((dest, i) => (
                  <option key={i} value={dest} className="bg-[#1F1F1F] text-white">
                    {dest}
                  </option>
                ))}
              </select>
            </div>

            {/* Travel Date */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.hero.departureDateLabel}</span>
              </label>
              <input
                type="date"
                value={travelDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full bg-[#1F1F1F] border border-white/10 focus:border-[#D4AF37] text-white text-xs sm:text-sm rounded-xl p-3 outline-none transition-colors min-h-[44px]"
              />
            </div>

            {/* Start Inquiry Button */}
            <div className="flex items-end sm:col-span-2 lg:col-span-1 pt-1 sm:pt-0">
              <button
                type="submit"
                className="w-full min-h-[44px] py-3 sm:py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] hover:shadow-lg hover:shadow-[#D4AF37]/30 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{t.hero.startRequestBtn}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </form>

          {/* Three Trust Footers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5 text-[11px] sm:text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
              <span>{t.hero.trustBadges.satisfaction}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
              <span>{t.hero.trustBadges.certified}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" />
              <span>{t.hero.trustBadges.support}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Plane, 
  FileCheck, 
  Briefcase, 
  GraduationCap, 
  HeartPulse, 
  Moon, 
  Sparkles, 
  Hotel, 
  Palmtree, 
  Car, 
  Package, 
  Building2, 
  ShieldCheck,
  ArrowRight,
  Info,
  Clock,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { ServiceCategory } from '../types';
import { motion } from 'motion/react';

interface FeaturedServicesProps {
  onSelectServiceDetail: (serviceId: string) => void;
  onRequestService: (serviceId: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onSelectServiceDetail,
  onRequestService,
}) => {
  const { language, t, isRtl } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | ServiceCategory>('all');

  const filterTabs: Array<{ key: 'all' | ServiceCategory; label: string }> = [
    { key: 'all', label: t.featuredServices.allTab },
    { key: 'visa', label: t.nav.visaServices },
    { key: 'flight', label: t.nav.flightBooking },
    { key: 'pilgrimage', label: t.nav.hajjUmrah },
    { key: 'hotel', label: t.nav.hotels },
    { key: 'holiday', label: t.nav.holidayPackages },
    { key: 'transfer', label: t.nav.airportTransfer },
    { key: 'cargo', label: t.nav.cargoServices },
    { key: 'corporate', label: 'Corporate' },
  ];

  const filteredServices = activeFilter === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeFilter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane': return Plane;
      case 'FileCheck': return FileCheck;
      case 'Briefcase': return Briefcase;
      case 'GraduationCap': return GraduationCap;
      case 'HeartPulse': return HeartPulse;
      case 'Moon': return Moon;
      case 'Sparkles': return Sparkles;
      case 'Hotel': return Hotel;
      case 'Palmtree': return Palmtree;
      case 'Car': return Car;
      case 'Package': return Package;
      case 'Building2': return Building2;
      case 'ShieldCheck': return ShieldCheck;
      default: return Plane;
    }
  };

  return (
    <section id="services" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-2">
            {t.featuredServices.tagline}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            {t.featuredServices.title}
          </h2>
          <p className="text-xs sm:text-base text-gray-400">
            {t.featuredServices.description}
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-6 sm:mb-10 no-scrollbar touch-pan-x">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all touch-manipulation ${
                activeFilter === tab.key
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black shadow-lg shadow-[#D4AF37]/20 font-bold'
                  : 'bg-[#161616] text-gray-300 hover:text-white hover:bg-[#222222] border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredServices.map((service, index) => {
            const IconComp = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="luxury-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-[#D4AF37]/50"
              >
                {/* Image Header with Badge */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                  
                  {/* Category & Icon Float */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0D0D0D]/85 backdrop-blur-md border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-lg">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    {service.popular && (
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#D4AF37] text-black text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Processing Badge */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#0D0D0D]/85 border border-white/10 text-[10px] sm:text-[11px] text-gray-300 backdrop-blur-md flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span className="truncate max-w-[150px] sm:max-w-[170px]">{service.processingTime[language]}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-1.5 line-clamp-1">
                      {service.title[language]}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3.5 line-clamp-2">
                      {service.shortDescription[language]}
                    </p>

                    {/* Top 3 Benefits Bullet List */}
                    <div className="space-y-1.5 mb-4 border-t border-white/5 pt-2.5">
                      {service.benefits[language].slice(0, 3).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-300">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                    <button
                      onClick={() => onSelectServiceDetail(service.id)}
                      className="min-h-[40px] py-2 px-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-xs font-semibold text-gray-200 hover:text-[#D4AF37] transition-all flex items-center justify-center gap-1 touch-manipulation"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>{t.featuredServices.learnMore}</span>
                    </button>

                    <button
                      onClick={() => onRequestService(service.id)}
                      className="min-h-[40px] py-2 px-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] hover:shadow-lg hover:shadow-[#D4AF37]/30 text-xs font-bold text-black transition-all flex items-center justify-center gap-1 touch-manipulation active:scale-95"
                    >
                      <span>{t.featuredServices.requestService}</span>
                      <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informative Notice (No online pricing) */}
        <div className="mt-8 sm:mt-12 p-3 sm:p-4 rounded-2xl bg-[#141414] border border-[#D4AF37]/20 text-center max-w-2xl mx-auto text-xs text-gray-400">
          <span className="text-[#D4AF37] font-semibold">ℹ Note:</span> {t.featuredServices.noPriceNotice}
        </div>
      </div>
    </section>
  );
};

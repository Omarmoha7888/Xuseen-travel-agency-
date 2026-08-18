import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
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
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/servicesData';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceDetailModalProps {
  serviceId: string | null;
  onClose: () => void;
  onRequestService: (serviceId: string) => void;
  onContactClick: () => void;
  onSelectAnotherService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  serviceId,
  onClose,
  onRequestService,
  onContactClick,
  onSelectAnotherService,
}) => {
  const { language, t, isRtl } = useLanguage();

  if (!serviceId) return null;

  const service = servicesData.find((s) => s.id === serviceId);
  if (!service) return null;

  const relatedServices = servicesData
    .filter((s) => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

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

  const IconComp = getIcon(service.icon);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-4xl bg-[#121212] border border-[#D4AF37]/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-gray-200 my-auto sm:my-8 max-h-[94vh] sm:max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/20 hover:border-[#D4AF37] text-white flex items-center justify-center backdrop-blur-md transition-colors touch-manipulation"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Large Header Banner */}
          <div className="relative h-48 sm:h-72 w-full overflow-hidden shrink-0">
            <img
              src={service.bannerImage}
              alt={service.title[language]}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
              <div className="space-y-1 sm:space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-[10px] sm:text-xs font-semibold backdrop-blur-md">
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{service.category.toUpperCase()}</span>
                </div>
                <h2 className="font-cinzel text-lg sm:text-3xl font-bold text-white leading-tight">
                  {service.title[language]}
                </h2>
              </div>

              {/* Processing Time Pill */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-black/80 border border-white/10 text-xs text-gray-300 backdrop-blur-md self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{service.processingTime[language]}</span>
              </div>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-4 sm:p-8 overflow-y-auto space-y-6 flex-1">
            
            {/* Long Description */}
            <div className="space-y-2">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                {t.serviceDetailModal.overview}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {service.fullDescription[language]}
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="space-y-3">
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                {t.serviceDetailModal.keyBenefits}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {service.benefits[language].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#181818] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents Section */}
            <div className="space-y-3 p-4 sm:p-5 rounded-2xl bg-[#181818] border border-[#D4AF37]/30">
              <div className="flex items-center justify-between">
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t.serviceDetailModal.requiredDocs}</span>
                </h3>
                <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded">Checklist</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                {service.requiredDocuments[language].map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service FAQ */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t.serviceDetailModal.faqs}</span>
                </h3>
                <div className="space-y-2">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#181818] border border-white/5 space-y-1">
                      <div className="text-xs sm:text-sm font-semibold text-[#D4AF37]">
                        {faq.question[language]}
                      </div>
                      <div className="text-xs text-gray-300">
                        {faq.answer[language]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Services */}
            {relatedServices.length > 0 && (
              <div className="space-y-3 border-t border-white/10 pt-4 sm:pt-6">
                <h3 className="font-cinzel text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider">
                  {t.serviceDetailModal.relatedServices}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {relatedServices.map((rel) => (
                    <button
                      key={rel.id}
                      onClick={() => onSelectAnotherService(rel.id)}
                      className="p-3 rounded-xl bg-[#181818] border border-white/5 hover:border-[#D4AF37]/40 text-left transition-colors group touch-manipulation"
                    >
                      <div className="text-xs font-semibold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                        {rel.title[language]}
                      </div>
                      <div className="text-[10px] text-gray-400 truncate mt-0.5">
                        {rel.shortDescription[language]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Bottom Footer Actions */}
          <div className="p-4 sm:p-6 bg-[#0E0E0E] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shrink-0">
            <div className="text-[11px] text-gray-400 hidden sm:block">
              No online payments. Fast consultation by assigned travel agent.
            </div>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="flex-1 sm:flex-initial min-h-[44px] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-xs font-semibold text-white transition-all flex items-center justify-center gap-1.5 touch-manipulation"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.serviceDetailModal.contactForInquiry}</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onRequestService(service.id);
                }}
                className="flex-1 sm:flex-initial min-h-[44px] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black text-xs sm:text-sm font-bold shadow-lg shadow-[#D4AF37]/30 active:scale-95 transition-all flex items-center justify-center gap-1.5 touch-manipulation"
              >
                <span>{t.serviceDetailModal.requestThisService}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

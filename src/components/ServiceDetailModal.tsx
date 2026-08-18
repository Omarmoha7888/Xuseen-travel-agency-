import React from 'react';
import { 
  X, 
  Clock, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  PhoneCall, 
  Sparkles,
  Plane,
  FileCheck,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Moon,
  Hotel,
  Palmtree,
  Car,
  Package,
  Building2,
  ShieldCheck
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

  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];
  const relatedServices = servicesData
    .filter((s) => s.id !== service.id)
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
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#121212] border border-[#D4AF37]/40 rounded-3xl shadow-2xl overflow-hidden text-gray-200 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 hover:border-[#D4AF37] text-white flex items-center justify-center backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Large Header Banner */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={service.bannerImage}
              alt={service.title[language]}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold backdrop-blur-md">
                  <IconComp className="w-4 h-4" />
                  <span>{service.category.toUpperCase()}</span>
                </div>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {service.title[language]}
                </h2>
              </div>

              {/* Processing Time Pill */}
              <div className="px-4 py-2 rounded-xl bg-black/70 border border-[#D4AF37]/30 text-xs text-gray-200 backdrop-blur-md shrink-0 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37]" />
                <div>
                  <div className="text-[10px] text-gray-400 font-medium">Processing Time</div>
                  <div className="font-semibold text-white">{service.processingTime[language]}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
            
            {/* Professional Description */}
            <div className="space-y-3">
              <h3 className="font-cinzel text-lg font-bold text-[#D4AF37] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{t.serviceDetailModal.overview}</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {service.fullDescription[language]}
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="space-y-3">
              <h3 className="font-cinzel text-base font-bold text-white">
                Service Advantages & Guarantees
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits[language].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="p-5 rounded-2xl bg-[#181818] border border-[#D4AF37]/20 space-y-4">
              <h3 className="font-cinzel text-base font-bold text-[#D4AF37] flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>{t.serviceDetailModal.requiredDocuments}</span>
              </h3>
              <div className="space-y-2">
                {service.requiredDocuments[language].map((doc, docIdx) => (
                  <div key={docIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#D4AF37] text-xs font-bold mt-0.5">
                      {docIdx + 1}
                    </div>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs Specific to this service */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t.serviceDetailModal.faqs}</span>
                </h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                      <div className="text-xs sm:text-sm font-semibold text-[#D4AF37]">
                        {faq.question[language]}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        {faq.answer[language]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Services */}
            <div className="space-y-3 border-t border-white/10 pt-6">
              <h3 className="font-cinzel text-sm font-bold text-gray-400 uppercase tracking-wider">
                {t.serviceDetailModal.relatedServices}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedServices.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => onSelectAnotherService(rel.id)}
                    className="p-3 rounded-xl bg-[#181818] border border-white/5 hover:border-[#D4AF37]/40 text-left transition-colors group"
                  >
                    <div className="text-xs font-semibold text-white group-hover:text-[#D4AF37] transition-colors truncate">
                      {rel.title[language]}
                    </div>
                    <div className="text-[11px] text-gray-400 truncate mt-1">
                      {rel.shortDescription[language]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Bottom Footer Actions */}
          <div className="p-6 bg-[#0E0E0E] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-400">
              No online payments. Fast consultation by assigned travel agent.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onContactClick();
                }}
                className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37] text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                <span>{t.serviceDetailModal.contactForInquiry}</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onRequestService(service.id);
                }}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-xl bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black text-xs sm:text-sm font-bold shadow-lg shadow-[#D4AF37]/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>{t.serviceDetailModal.requestThisService}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

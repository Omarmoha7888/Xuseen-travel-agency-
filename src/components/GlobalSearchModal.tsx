import React, { useState, useEffect } from 'react';
import { Search, X, Compass, FileText, ArrowRight, Plane, HelpCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData, allDestinations } from '../data/servicesData';
import { faqsData } from '../data/mockDatabase';
import { motion } from 'motion/react';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceId: string) => void;
  onRequestService: (serviceId?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onRequestService,
}) => {
  const { language } = useLanguage();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedServices = servicesData.filter((s) =>
    s.title[language].toLowerCase().includes(query.toLowerCase()) ||
    s.shortDescription[language].toLowerCase().includes(query.toLowerCase()) ||
    s.category.toLowerCase().includes(query.toLowerCase())
  );

  const matchedDestinations = allDestinations.filter((d) =>
    d.toLowerCase().includes(query.toLowerCase())
  );

  const matchedFaqs = faqsData.filter((f) =>
    f.question[language].toLowerCase().includes(query.toLowerCase()) ||
    f.answer[language].toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-start justify-center pt-12 sm:pt-20 p-2 sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        className="w-full max-w-2xl bg-[#141414] border border-[#D4AF37]/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-gray-200"
      >
        {/* Search Input Bar */}
        <div className="p-3.5 sm:p-5 border-b border-white/10 flex items-center gap-2.5 sm:gap-3">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search flights, visa, destinations..."
            className="flex-1 bg-transparent text-xs sm:text-base text-white outline-none placeholder-gray-500 min-h-[38px]"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-gray-400 hover:text-white text-xs px-1">
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white touch-manipulation"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Matched Services */}
          {matchedServices.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                Services ({matchedServices.length})
              </div>
              <div className="space-y-1.5">
                {matchedServices.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      onClose();
                      onSelectService(s.id);
                    }}
                    className="w-full p-3 rounded-xl bg-white/5 hover:bg-[#D4AF37]/15 border border-white/5 hover:border-[#D4AF37]/40 text-left transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Plane className="w-4 h-4 text-[#D4AF37]" />
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#D4AF37]">
                          {s.title[language]}
                        </div>
                        <div className="text-[11px] text-gray-400 line-clamp-1">
                          {s.shortDescription[language]}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#D4AF37] shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Destinations */}
          {matchedDestinations.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                Destinations
              </div>
              <div className="flex flex-wrap gap-2">
                {matchedDestinations.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onClose();
                      onRequestService('flight-booking');
                    }}
                    className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37] text-xs text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <MapPin className="w-3 h-3 text-[#D4AF37]" />
                    <span>{d}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched FAQs */}
          {matchedFaqs.length > 0 && (
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider">
                Help & FAQs ({matchedFaqs.length})
              </div>
              <div className="space-y-1.5">
                {matchedFaqs.map((f) => (
                  <div
                    key={f.id}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1"
                  >
                    <div className="text-xs font-semibold text-white flex items-center gap-2">
                      <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{f.question[language]}</span>
                    </div>
                    <div className="text-[11px] text-gray-400 pl-5 leading-relaxed">
                      {f.answer[language]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {matchedServices.length === 0 && matchedDestinations.length === 0 && matchedFaqs.length === 0 && (
            <div className="text-center py-8 text-xs text-gray-400">
              No matching results found for "{query}". Try searching "Dubai", "Visa", "Flight", or "Umrah".
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

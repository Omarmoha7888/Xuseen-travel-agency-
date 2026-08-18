import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, PhoneCall } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { faqsData } from '../data/mockDatabase';
import { motion, AnimatePresence } from 'motion/react';

interface FAQSectionProps {
  onContactClick: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onContactClick }) => {
  const { language, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'visa' | 'flight' | 'documents' | 'general' | 'pilgrimage'>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqsData[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const categories = [
    { key: 'all', label: t.faq.allQuestions },
    { key: 'visa', label: t.faq.categoryVisa },
    { key: 'flight', label: t.faq.categoryFlight },
    { key: 'documents', label: 'Documents & Payment' },
    { key: 'pilgrimage', label: t.nav.hajjUmrah },
    { key: 'general', label: t.faq.categoryGeneral },
  ];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-2">
            {t.faq.tagline}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-4">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            {t.faq.description}
          </p>
        </div>

        {/* Live Search & Filter Tabs */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.faq.searchPlaceholder}
              className="w-full bg-[#141414] border border-white/10 focus:border-[#D4AF37] rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white outline-none shadow-inner"
            />
          </div>

          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.key
                    ? 'bg-[#D4AF37] text-black font-bold'
                    : 'bg-[#181818] text-gray-300 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#141414] border border-white/10 overflow-hidden transition-colors hover:border-[#D4AF37]/40"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span className="font-cinzel text-sm sm:text-base font-bold text-white leading-snug">
                        {faq.question[language]}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5"
                      >
                        {faq.answer[language]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-gray-400 text-xs sm:text-sm">
              No matching questions found.
            </div>
          )}
        </div>

        {/* Can't find answer? Contact Support Card */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#181818] to-[#141414] border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-cinzel text-base font-bold text-white mb-1">
              Still have questions regarding travel or visa procedures?
            </h4>
            <p className="text-xs text-gray-400">
              Our travel specialists in Mogadishu are available to answer inquiries immediately.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="px-5 py-2.5 rounded-xl bg-white/5 border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black text-xs font-bold text-[#D4AF37] transition-all shrink-0 flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact Desk</span>
          </button>
        </div>
      </div>
    </section>
  );
};

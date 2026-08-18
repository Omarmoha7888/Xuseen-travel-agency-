import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { testimonialsData } from '../data/mockDatabase';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-2">
            {t.testimonials.tagline}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xs sm:text-base text-gray-400">
            {t.testimonials.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="luxury-card p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col justify-between relative group hover:border-[#D4AF37]/50"
            >
              <div>
                {/* 5 Stars and Quote */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {Array.from({ length: item.rating }).map((_, rIdx) => (
                      <Star key={rIdx} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#D4AF37]/30" />
                </div>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-4 sm:mb-6">
                  "{item.review[language]}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3 border-t border-white/5 pt-3.5">
                <img
                  src={item.avatar}
                  alt={item.customerName}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#D4AF37]/40"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 truncate">
                    <span>{item.customerName}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400 truncate">
                    {item.country} • <span className="text-[#D4AF37]">{item.serviceUsed}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

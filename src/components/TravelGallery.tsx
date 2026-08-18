import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { galleryData } from '../data/mockDatabase';
import { MapPin, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TravelGallery: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<typeof galleryData[0] | null>(null);

  const categories = [
    { key: 'all', label: 'All Photos' },
    { key: 'flights', label: 'Flights' },
    { key: 'hotels', label: 'Hotels' },
    { key: 'pilgrimage', label: 'Hajj & Umrah' },
    { key: 'tourist_destinations', label: 'Destinations' },
    { key: 'tour_packages', label: 'Safaris & Tours' },
    { key: 'travel_experiences', label: 'Experiences' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <section className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-2">
            {t.gallery.tagline}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-xs sm:text-base text-gray-400">
            {t.gallery.description}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar touch-pan-x">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all touch-manipulation ${
                activeCategory === cat.key
                  ? 'bg-[#D4AF37] text-black font-bold shadow-md shadow-[#D4AF37]/20'
                  : 'bg-[#181818] text-gray-300 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              onClick={() => setActiveLightbox(item)}
              className="relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer group border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title[language]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-[#D4AF37] font-medium">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-white leading-tight line-clamp-1">
                  {item.title[language]}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#121212] border border-[#D4AF37]/40 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:border-[#D4AF37] touch-manipulation"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title[language]}
                  className="w-full h-full max-h-[65vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between bg-[#161616]">
                <div>
                  <div className="text-xs text-[#D4AF37] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeLightbox.location}</span>
                  </div>
                  <div className="font-cinzel text-base sm:text-lg font-bold text-white">
                    {activeLightbox.title[language]}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-gray-300">
                  {activeLightbox.category}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

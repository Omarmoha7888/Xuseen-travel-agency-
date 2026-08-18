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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-2">
            {t.gallery.tagline}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            {t.gallery.description}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              onClick={() => setActiveLightbox(item)}
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title[language]}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] text-[#D4AF37] font-medium">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-cinzel text-sm sm:text-base font-bold text-white leading-tight">
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
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-[#121212] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:border-[#D4AF37]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black">
                <img
                  src={activeLightbox.image}
                  alt={activeLightbox.title[language]}
                  className="w-full h-full max-h-[70vh] object-contain mx-auto"
                />
              </div>

              <div className="p-5 flex items-center justify-between bg-[#161616]">
                <div>
                  <div className="text-xs text-[#D4AF37] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeLightbox.location}</span>
                  </div>
                  <div className="font-cinzel text-lg font-bold text-white">
                    {activeLightbox.title[language]}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
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

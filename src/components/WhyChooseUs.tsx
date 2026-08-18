import React from 'react';
import { 
  Users, 
  Zap, 
  ShieldCheck, 
  Award, 
  Headphones, 
  Plane, 
  Globe, 
  Lock 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const iconList = [
    Users,
    Zap,
    ShieldCheck,
    Award,
    Headphones,
    Plane,
    Globe,
    Lock
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-2">
            {t.whyChooseUs.tagline}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-4">
            {t.whyChooseUs.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            {t.whyChooseUs.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.whyChooseUs.items.map((item, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="luxury-card p-6 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

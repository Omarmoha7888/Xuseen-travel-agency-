import React from 'react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Globe2, 
  CheckCircle2, 
  Lock, 
  Sparkles 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { Logo } from './Logo';

export const AboutUsSection: React.FC = () => {
  const { t } = useLanguage();

  const valueIcons = [
    ShieldCheck,
    Award,
    HeartHandshake,
    CheckCircle2,
    Sparkles,
    Lock,
    Globe2
  ];

  return (
    <section id="about-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-2">
            {t.aboutUs.tagline}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-4">
            {t.aboutUs.title}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto" />
        </div>

        {/* Story / Introduction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed"
          >
            <p className="first-letter:text-4xl first-letter:font-cinzel first-letter:text-[#D4AF37] first-letter:font-bold first-letter:mr-2">
              {t.aboutUs.intro1}
            </p>
            <p>
              {t.aboutUs.intro2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Mission Card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#D4AF37]/20 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-cinzel text-base font-bold text-white">
                  {t.aboutUs.missionTitle}
                </h3>
                <p className="text-xs text-gray-400 leading-normal">
                  {t.aboutUs.missionDesc}
                </p>
              </div>

              {/* Vision Card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#D4AF37]/20 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37]">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-cinzel text-base font-bold text-white">
                  {t.aboutUs.visionTitle}
                </h3>
                <p className="text-xs text-gray-400 leading-normal">
                  {t.aboutUs.visionDesc}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80"
                alt="Balcad Travel Luxury Service"
                className="w-full h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl">
                <Logo size="sm" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Grid */}
        <div className="space-y-6">
          <h3 className="font-cinzel text-xl font-bold text-center text-white">
            {t.aboutUs.valuesTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.aboutUs.values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="p-5 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#D4AF37]/40 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] mb-3 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-cinzel text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-1.5">
                    {v.name}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

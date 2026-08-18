import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { agencyStats } from '../data/mockDatabase';
import { Users, FileCheck, PlaneTakeoff, Award, Hotel, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const StatsCounter: React.FC = () => {
  const { language } = useLanguage();

  const statsList = [
    {
      id: 'stat-1',
      value: `${(agencyStats.customersServed / 1000).toFixed(1)}k+`,
      label: {
        en: 'Satisfied Travelers',
        so: 'Macaamiil Qanacsan',
        ar: 'عميل سعيد',
      },
      icon: Users,
    },
    {
      id: 'stat-2',
      value: `${(agencyStats.flightsRequested / 1000).toFixed(1)}k+`,
      label: {
        en: 'Flights Arranged',
        so: 'Duulimaad La Diyaariyay',
        ar: 'رحلة طيران',
      },
      icon: PlaneTakeoff,
    },
    {
      id: 'stat-3',
      value: `${(agencyStats.visaRequests / 1000).toFixed(1)}k+`,
      label: {
        en: 'Visas Approved',
        so: 'Fiisooyin La Ansixiyay',
        ar: 'تأشيرة صادرة',
      },
      icon: FileCheck,
    },
    {
      id: 'stat-4',
      value: `${agencyStats.destinations}+`,
      label: {
        en: 'Global Destinations',
        so: 'Waddamo & Magaalooyin',
        ar: 'وجهة حول العالم',
      },
      icon: MapPin,
    },
  ];

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#111111] via-[#141414] to-[#111111] border-y border-[#D4AF37]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-4 space-y-2"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mx-auto mb-2">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-cinzel text-2xl sm:text-4xl font-bold text-gold-gradient tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-300">
                  {stat.label[language]}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

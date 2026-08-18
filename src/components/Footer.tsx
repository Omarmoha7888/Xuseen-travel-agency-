import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Plane,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Logo';

interface FooterProps {
  onRequestService: (serviceId?: string) => void;
  onTrackRequest: () => void;
  onSelectServiceDetail: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRequestService,
  onTrackRequest,
  onSelectServiceDetail,
}) => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#D4AF37]/20 text-gray-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span dir="ltr">+252 61 2483838 / +252 61 2141414</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>balcadtravel@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>KM4 Business Center, Maka Al-Mukarama Road, Mogadishu, Somalia</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.aboutUs}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <button onClick={onTrackRequest} className="hover:text-[#D4AF37] transition-colors text-left">
                  {t.nav.trackRequest}
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.faq}
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-[#D4AF37] transition-colors">
                  {t.nav.contactUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectServiceDetail('flight-booking')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  {t.nav.flightBooking}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceDetail('visa-processing-tourist')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  {t.nav.visaServices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceDetail('hajj-packages')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  {t.nav.hajjUmrah}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceDetail('hotel-booking')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  {t.nav.hotels}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceDetail('holiday-tour-packages')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  {t.nav.holidayPackages}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectServiceDetail('cargo-logistics-services')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  {t.nav.cargoServices}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter / Instant Booking CTA */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-gray-400">
              {t.footer.newsletterDesc}
            </p>
            
            <button
              onClick={() => onRequestService()}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold text-xs shadow-lg shadow-[#D4AF37]/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-1.5"
            >
              <Plane className="w-3.5 h-3.5" />
              <span>{t.nav.requestService}</span>
            </button>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-gray-400">
              ✓ No online fees or hidden costs. Direct travel consultation.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Balcad Travel Agency. All rights reserved. | {t.footer.allRights}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#D4AF37]/15 hover:text-[#D4AF37] text-gray-400 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

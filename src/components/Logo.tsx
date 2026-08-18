import React, { useState } from 'react';
import { Plane, Star } from 'lucide-react';
import officialLogoImg from '../assets/images/balcad_logo_1787034170226.jpg';

interface LogoProps {
  variant?: 'full' | 'icon' | 'horizontal' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  showText = true,
}) => {
  const [imgError, setImgError] = useState(false);

  // Dimension configurations
  const iconSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
    xl: 'w-24 h-24 sm:w-32 sm:h-32',
  };

  const textSizes = {
    sm: { title: 'text-xs sm:text-sm', sub: 'text-[8px] sm:text-[9px] tracking-[0.16em]' },
    md: { title: 'text-base sm:text-lg', sub: 'text-[9px] sm:text-[10px] tracking-[0.2em]' },
    lg: { title: 'text-xl sm:text-2xl', sub: 'text-[11px] sm:text-xs tracking-[0.24em]' },
    xl: { title: 'text-3xl sm:text-4xl', sub: 'text-sm sm:text-base tracking-[0.28em]' },
  };

  // If user requested full badge variant (showing the whole logo tile)
  if (variant === 'full') {
    return (
      <div className={`inline-block select-none ${className}`}>
        <div className="rounded-2xl bg-white p-2 shadow-2xl border border-[#D4AF37]/50 max-w-[220px] overflow-hidden">
          <img
            src={officialLogoImg}
            alt="Balcad Travel Agency Official Logo"
            className="w-full h-auto object-contain rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none shrink-0 ${className}`}>
      {/* Official Emblem Container with Gold luxury accent border */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-xl sm:rounded-2xl p-[2px] bg-gradient-to-br from-[#F5D77F] via-[#D4AF37] to-[#8C6D1F] shadow-md shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden flex items-center justify-center`}
      >
        <div className="w-full h-full bg-white rounded-[10px] sm:rounded-[13px] p-0.5 flex items-center justify-center overflow-hidden relative">
          {!imgError ? (
            <img
              src={officialLogoImg}
              alt="Balcad Travel Agency"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top scale-125 rounded-md drop-shadow-sm"
              referrerPolicy="no-referrer"
            />
          ) : (
            // Golden Luxury Vector Crest Fallback
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#1C1708] to-[#0A0A0A] rounded-md text-[#D4AF37] relative">
              <Plane className="w-4 h-4 text-[#F5D77F] -rotate-45" />
              <div className="flex items-center gap-0.5 mt-0.5">
                <Star className="w-1 h-1 fill-[#D4AF37] text-[#D4AF37]" />
                <span className="text-[6px] font-bold tracking-widest text-[#F5D77F]">BTA</span>
                <Star className="w-1 h-1 fill-[#D4AF37] text-[#D4AF37]" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <span
              className={`font-black tracking-wider text-white ${textSizes[size].title} leading-none drop-shadow-sm`}
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              BALCAD
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 mt-1">
            <span className="h-[1px] w-2 sm:w-3 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span
              className={`font-bold uppercase text-[#D4AF37] ${textSizes[size].sub} leading-none whitespace-nowrap`}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              TRAVEL AGENCY
            </span>
            <span className="h-[1px] w-2 sm:w-3 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'horizontal';
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
  // Dimension scaling
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizes = {
    sm: { title: 'text-sm', sub: 'text-[8px] tracking-[0.2em]' },
    md: { title: 'text-lg sm:text-xl', sub: 'text-[9px] sm:text-[10px] tracking-[0.25em]' },
    lg: { title: 'text-2xl sm:text-3xl', sub: 'text-xs tracking-[0.3em]' },
    xl: { title: 'text-4xl sm:text-5xl', sub: 'text-sm tracking-[0.35em]' },
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem Container */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-2xl p-0.5 bg-gradient-to-br from-[#F5D77F] via-[#D4AF37] to-[#8C6D1F] shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300 overflow-hidden flex items-center justify-center`}
      >
        <div className="w-full h-full bg-white rounded-[14px] p-1 flex items-center justify-center overflow-hidden">
          <img
            src="/balcad-logo.jpg"
            alt="Balcad Travel Agency Logo"
            className="w-full h-full object-contain rounded-lg"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback to SVG representation if image loading fails
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-sans font-black tracking-wider text-white ${textSizes[size].title} leading-none`}
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              BALCAD
            </span>
          </div>

          <div className="flex items-center gap-1.5 mt-1">
            <span className="h-[1px] w-3 bg-[#D4AF37] opacity-80" />
            <span
              className={`font-semibold uppercase text-[#D4AF37] ${textSizes[size].sub} leading-none whitespace-nowrap`}
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              TRAVEL AGENCY
            </span>
            <span className="h-[1px] w-3 bg-[#D4AF37] opacity-80" />
          </div>
        </div>
      )}
    </div>
  );
};

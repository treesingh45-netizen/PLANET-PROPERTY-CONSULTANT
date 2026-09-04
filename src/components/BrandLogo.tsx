import React, { useState } from 'react';
import { BRAND_INFO } from '../data/mockData';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  onClick
}) => {
  const [imageError, setImageError] = useState(false);

  const iconDimensions = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const textSizes = {
    sm: 'text-sm tracking-tight',
    md: 'text-base sm:text-lg tracking-tight',
    lg: 'text-lg sm:text-xl tracking-tight',
    xl: 'text-2xl tracking-tight'
  };

  return (
    <div 
      id="brand-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
    >
      {/* Circular Emblem Frame */}
      <div className={`relative flex items-center justify-center rounded-full bg-black border-2 border-[#E5A910] shadow-[0_2px_12px_rgba(229,169,16,0.3)] group-hover:shadow-[0_4px_20px_rgba(217,119,6,0.45)] group-hover:border-[#F59E0B] transition-all duration-300 overflow-hidden shrink-0 ${iconDimensions[size]}`}>
        {!imageError ? (
          <img
            src={BRAND_INFO.logoUrl}
            alt="PLANET PROPERTY CONSULTANT Official Logo"
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
            loading="eager"
            referrerPolicy="no-referrer"
          />
        ) : (
          /* High-end vector fallback */
          <div className="w-full h-full rounded-full bg-black flex flex-col items-center justify-center p-1.5 border border-[#E5A910]">
            <svg 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-full text-[#E5A910]"
            >
              <circle cx="20" cy="20" r="18" stroke="#E5A910" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="15" stroke="#E5A910" strokeWidth="0.8" strokeDasharray="2 1" />
              <path d="M12 24L20 15L28 24H12Z" fill="#E5A910" />
              <text x="20" y="32" fontSize="6" fontWeight="bold" fill="#E5A910" textAnchor="middle">PPC</text>
            </svg>
          </div>
        )}
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-black text-gray-950 group-hover:text-[#D97706] transition-colors leading-none uppercase ${textSizes[size]}`}>
            PLANET PROPERTY
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#D97706] tracking-[0.25em] uppercase mt-0.5">
            CONSULTANT
          </span>
        </div>
      )}
    </div>
  );
};


import React from 'react';
import { svMonogram } from '../generated';

export default function SvLogo({ className = '', showText = true, variant = 'dark' }) {
  const inverted = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src={svMonogram}
        alt="SV Rental Car monogram"
        className={`h-12 w-12 shrink-0 rounded-full bg-[#131514] object-contain ring-1 ${inverted ? 'ring-white/20' : 'ring-black/15'}`}
      />
      {showText && (
        <div className={`border-l pl-3 ${inverted ? 'border-white/20' : 'border-black/20'}`}>
          <span className={`block font-serif text-[1.06rem] font-black uppercase leading-none tracking-[0.04em] ${inverted ? 'text-white' : 'text-[#131514]'}`}>
            SV Rental Car
          </span>
          <span className={`mt-1.5 block text-[8px] font-bold uppercase tracking-[0.28em] ${inverted ? 'text-white/60' : 'text-black/55'}`}>
            Arizona Private Chauffeur
          </span>
        </div>
      )}
    </div>
  );
}

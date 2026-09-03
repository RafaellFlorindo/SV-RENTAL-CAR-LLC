import React from 'react';
import svMonogram from './sv-monogram-v2.png';

export default function SvLogo({ className = '', showText = true, variant = 'dark' }) {
  const inverted = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center ${inverted ? 'bg-[#F1EEE8] p-1' : ''}`}>
        <img
          src={svMonogram}
          alt={showText ? '' : 'SV Rental Car'}
          width="512"
          height="512"
          decoding="async"
          className="h-full w-full object-contain"
        />
      </span>
      {showText && (
        <div>
          <span className={`block font-serif text-[1.08rem] font-semibold leading-none tracking-[-0.01em] ${inverted ? 'text-white' : 'text-[#131514]'}`}>
            SV Rental Car
          </span>
          <span className={`mt-1.5 block text-[8px] font-semibold uppercase tracking-[0.18em] ${inverted ? 'text-white/55' : 'text-black/50'}`}>
            Private chauffeur, Arizona
          </span>
        </div>
      )}
    </div>
  );
}

import React from 'react';
export default function SvLogo({ className = '', showText = true, variant = 'dark' }) {
  const inverted = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div aria-hidden="true" className={`flex h-11 w-11 shrink-0 items-center justify-center border font-serif text-lg font-semibold tracking-[-0.08em] ${inverted ? 'border-white/35 text-white' : 'border-black/25 text-[#131514]'}`}>SV</div>
      {showText && (
        <div>
          <span className={`block font-serif text-[1.06rem] font-semibold leading-none ${inverted ? 'text-white' : 'text-[#131514]'}`}>
            SV Rental Car
          </span>
          <span className={`mt-1.5 block text-[8px] font-semibold uppercase tracking-[0.18em] ${inverted ? 'text-white/55' : 'text-black/50'}`}>
            Scottsdale chauffeur
          </span>
        </div>
      )}
    </div>
  );
}

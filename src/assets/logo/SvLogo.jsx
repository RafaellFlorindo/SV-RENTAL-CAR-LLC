import React from 'react';

export default function SvLogo({ className = "h-12 w-auto", showText = true, variant = "dark" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Bespoke Luxury Emblem */}
      <svg
        viewBox="0 0 120 120"
        className="w-11 h-11 shrink-0 drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E7B9" />
            <stop offset="40%" stopColor="#C59A45" />
            <stop offset="80%" stopColor="#8A6724" />
            <stop offset="100%" stopColor="#D8AE58" />
          </linearGradient>
          <linearGradient id="shieldDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#152742" />
            <stop offset="100%" stopColor="#0A1627" />
          </linearGradient>
        </defs>

        {/* Outer Geometric Luxury Shield */}
        <path
          d="M60 6 L108 24 V64 C108 92 60 114 60 114 C60 114 12 92 12 64 V24 L60 6 Z"
          fill="url(#shieldDark)"
          stroke="url(#goldGradient)"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Inner Accent Crest Line */}
        <path
          d="M60 14 L100 29 V62 C100 85 60 104 60 104 C60 104 20 85 20 62 V29 L60 14 Z"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          strokeOpacity="0.45"
          fill="none"
        />

        {/* Monogram 'S' */}
        <path
          d="M44 42 C44 38 48 35 56 35 C64 35 68 39 68 44 C68 53 42 55 42 66 C42 75 49 79 59 79 C69 79 73 74 73 69"
          stroke="url(#goldGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Monogram 'V' interlocking */}
        <path
          d="M52 46 L65 83 L78 46"
          stroke="url(#goldGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeOpacity="0.9"
        />

        {/* Crown / Star Accent at Top */}
        <polygon
          points="60,20 62.5,25.5 68,26.5 64,30.5 65,36 60,33 55,36 56,30.5 52,26.5 57.5,25.5"
          fill="url(#goldGradient)"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif font-extrabold text-base sm:text-lg tracking-wider text-white leading-tight uppercase">
            SV Rental Car
          </span>
          <span className="text-[9px] tracking-[0.22em] uppercase font-bold text-gold-light">
            Private Chauffeur • Scottsdale
          </span>
        </div>
      )}
    </div>
  );
}

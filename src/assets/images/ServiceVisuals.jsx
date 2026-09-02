import React from 'react';

export function HourlyChauffeurVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0E1E33] via-[#0A1524] to-[#060D17] relative overflow-hidden flex items-center justify-center p-6 select-none">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Vehicle Silhouette & Clock Icon */}
      <svg viewBox="0 0 400 240" className="w-full h-auto max-h-48 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldCar" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2BD75" />
            <stop offset="100%" stopColor="#9A752C" />
          </linearGradient>
          <linearGradient id="bodyDark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E324F" />
            <stop offset="100%" stopColor="#0B1320" />
          </linearGradient>
        </defs>
        
        {/* Road line with glowing gold reflections */}
        <line x1="20" y1="190" x2="380" y2="190" stroke="url(#goldCar)" strokeWidth="1.5" strokeOpacity="0.4" />
        <ellipse cx="200" cy="190" rx="140" ry="6" fill="#C59A45" fillOpacity="0.15" />

        {/* Executive SUV Profile */}
        <path d="M60 170 L75 140 L130 135 L170 95 L280 95 L310 135 L345 145 L350 170 Z" fill="url(#bodyDark)" stroke="url(#goldCar)" strokeWidth="2" />
        
        {/* Windows */}
        <path d="M175 102 L225 102 L225 130 L140 130 Z" fill="#0A1627" stroke="url(#goldCar)" strokeWidth="1" />
        <path d="M232 102 L275 102 L300 130 L232 130 Z" fill="#0A1627" stroke="url(#goldCar)" strokeWidth="1" />
        
        {/* Wheels */}
        <circle cx="115" cy="170" r="22" fill="#060C14" stroke="url(#goldCar)" strokeWidth="2.5" />
        <circle cx="115" cy="170" r="10" fill="url(#goldCar)" />
        <circle cx="295" cy="170" r="22" fill="#060C14" stroke="url(#goldCar)" strokeWidth="2.5" />
        <circle cx="295" cy="170" r="10" fill="url(#goldCar)" />

        {/* Headlight beam */}
        <polygon points="348,150 400,165 400,185 348,165" fill="url(#goldCar)" fillOpacity="0.15" />
        
        {/* Badge: 4H MINIMUM */}
        <rect x="25" y="25" width="115" height="28" rx="4" fill="#09121F" stroke="url(#goldCar)" strokeWidth="1" />
        <text x="82" y="43" fill="#E2BD75" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">4-HOUR MIN</text>
      </svg>
    </div>
  );
}

export function GolfOutingVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0E1E33] via-[#0A1524] to-[#060D17] relative overflow-hidden flex items-center justify-center p-6 select-none">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <svg viewBox="0 0 400 240" className="w-full h-auto max-h-48 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGolf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2BD75" />
            <stop offset="100%" stopColor="#9A752C" />
          </linearGradient>
        </defs>
        
        {/* Desert mountain outline */}
        <path d="M30 180 L110 110 L160 145 L240 85 L320 160 L370 180" stroke="#1E324F" strokeWidth="2" strokeDasharray="4 4" />
        
        {/* Putting Green & Flag */}
        <ellipse cx="280" cy="180" rx="60" ry="12" fill="#14263D" stroke="url(#goldGolf)" strokeWidth="1" />
        <line x1="280" y1="180" x2="280" y2="100" stroke="url(#goldGolf)" strokeWidth="2" />
        <polygon points="280,100 320,112 280,125" fill="url(#goldGolf)" />
        
        {/* Golf Bags in Cargo */}
        <rect x="70" y="125" width="22" height="55" rx="5" fill="#1B2E49" stroke="url(#goldGolf)" strokeWidth="1.5" transform="rotate(-15 70 125)" />
        <rect x="95" y="120" width="22" height="58" rx="5" fill="#152740" stroke="url(#goldGolf)" strokeWidth="1.5" transform="rotate(5 95 120)" />

        {/* Club heads sticking out */}
        <circle cx="80" cy="115" r="4" fill="url(#goldGolf)" />
        <circle cx="102" cy="110" r="4" fill="url(#goldGolf)" />
        
        {/* Location Tag */}
        <rect x="25" y="25" width="135" height="28" rx="4" fill="#09121F" stroke="url(#goldGolf)" strokeWidth="1" />
        <text x="92" y="43" fill="#E2BD75" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">TPC & TROON NORTH</text>
      </svg>
    </div>
  );
}

export function AirportTransferVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0E1E33] via-[#0A1524] to-[#060D17] relative overflow-hidden flex items-center justify-center p-6 select-none">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <svg viewBox="0 0 400 240" className="w-full h-auto max-h-48 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldAirport" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2BD75" />
            <stop offset="100%" stopColor="#9A752C" />
          </linearGradient>
        </defs>

        {/* Flight Path Arc */}
        <path d="M40 160 Q 200 40 360 80" stroke="url(#goldAirport)" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
        
        {/* Jet Silhouette */}
        <g transform="translate(240, 60) rotate(10)">
          <path d="M0 15 L30 15 L50 0 L60 0 L45 15 L75 15 L85 8 L92 8 L88 18 L45 21 L35 32 L25 32 L30 21 L0 21 Z" fill="url(#goldAirport)" />
        </g>
        
        {/* Terminal Curbside & Luggage */}
        <line x1="30" y1="185" x2="370" y2="185" stroke="#223959" strokeWidth="2" />
        
        <rect x="150" y="145" width="30" height="40" rx="4" fill="#14263D" stroke="url(#goldAirport)" strokeWidth="1.5" />
        <rect x="188" y="152" width="24" height="33" rx="3" fill="#1A304D" stroke="url(#goldAirport)" strokeWidth="1.5" />
        
        {/* Airport Tag */}
        <rect x="25" y="25" width="130" height="28" rx="4" fill="#09121F" stroke="url(#goldAirport)" strokeWidth="1" />
        <text x="90" y="43" fill="#E2BD75" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">PHX & SDL CURBSIDE</text>
      </svg>
    </div>
  );
}

export function FemaleChauffeurVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0E1E33] via-[#0A1524] to-[#060D17] relative overflow-hidden flex items-center justify-center p-6 select-none">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <svg viewBox="0 0 400 240" className="w-full h-auto max-h-48 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldLady" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2BD75" />
            <stop offset="100%" stopColor="#9A752C" />
          </linearGradient>
        </defs>

        {/* Security / Comfort Crest */}
        <path d="M200 60 L245 80 V125 C245 155 200 175 200 175 C200 175 155 155 155 125 V80 Z" fill="#10223A" stroke="url(#goldLady)" strokeWidth="2" />
        
        {/* Female Chauffeur Silhouette Icon */}
        <circle cx="200" cy="100" r="14" fill="url(#goldLady)" />
        <path d="M180 142 C180 126 188 120 200 120 C212 120 220 126 220 142 Z" fill="url(#goldLady)" />
        
        {/* Stars */}
        <polygon points="200,40 203,47 210,47 205,52 207,59 200,55 193,59 195,52 190,47 197,47" fill="url(#goldLady)" />
        
        {/* Tag */}
        <rect x="25" y="25" width="145" height="28" rx="4" fill="#09121F" stroke="url(#goldLady)" strokeWidth="1" />
        <text x="97" y="43" fill="#E2BD75" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">FEMALE DRIVER OPTION</text>
      </svg>
    </div>
  );
}

export function ExecutiveTravelVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0E1E33] via-[#0A1524] to-[#060D17] relative overflow-hidden flex items-center justify-center p-6 select-none">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <svg viewBox="0 0 400 240" className="w-full h-auto max-h-48 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldExec" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2BD75" />
            <stop offset="100%" stopColor="#9A752C" />
          </linearGradient>
        </defs>

        {/* Executive Skyline / Corporate Towers */}
        <rect x="80" y="110" width="40" height="70" fill="#13243C" stroke="#253E63" strokeWidth="1" />
        <rect x="130" y="80" width="50" height="100" fill="#1A304F" stroke="#2C4B75" strokeWidth="1" />
        <rect x="190" y="60" width="45" height="120" fill="#13243C" stroke="#253E63" strokeWidth="1" />
        <rect x="245" y="95" width="40" height="85" fill="#182D4A" stroke="#29456B" strokeWidth="1" />
        <rect x="295" y="120" width="35" height="60" fill="#13243C" stroke="#253E63" strokeWidth="1" />
        
        {/* Executive Route Line */}
        <line x1="30" y1="180" x2="370" y2="180" stroke="url(#goldExec)" strokeWidth="2" />
        <circle cx="155" cy="180" r="4" fill="url(#goldExec)" />
        <circle cx="270" cy="180" r="4" fill="url(#goldExec)" />

        {/* Tag */}
        <rect x="25" y="25" width="135" height="28" rx="4" fill="#09121F" stroke="url(#goldExec)" strokeWidth="1" />
        <text x="92" y="43" fill="#E2BD75" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">CORPORATE TRANSIT</text>
      </svg>
    </div>
  );
}

export function SpecialOccasionVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0E1E33] via-[#0A1524] to-[#060D17] relative overflow-hidden flex items-center justify-center p-6 select-none">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <svg viewBox="0 0 400 240" className="w-full h-auto max-h-48 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGala" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2BD75" />
            <stop offset="100%" stopColor="#9A752C" />
          </linearGradient>
        </defs>

        {/* Champagne Flutes Silhouette & Stars */}
        <path d="M175 100 L185 140 L185 170 L170 170 M185 170 L200 170" stroke="url(#goldGala)" strokeWidth="2" fill="none" />
        <path d="M165 95 C165 80 185 80 185 95 Z" fill="#1F3656" stroke="url(#goldGala)" strokeWidth="1.5" />
        
        <path d="M225 100 L215 140 L215 170 L200 170 M215 170 L230 170" stroke="url(#goldGala)" strokeWidth="2" fill="none" />
        <path d="M235 95 C235 80 215 80 215 95 Z" fill="#1F3656" stroke="url(#goldGala)" strokeWidth="1.5" />

        {/* Sparkles */}
        <polygon points="150,70 152,75 157,75 153,79 155,84 150,81 145,84 147,79 143,75 148,75" fill="url(#goldGala)" />
        <polygon points="250,75 252,80 257,80 253,84 255,89 250,86 245,89 247,84 243,80 248,80" fill="url(#goldGala)" />
        <polygon points="200,55 202,60 207,60 203,64 205,69 200,66 195,69 197,64 193,60 198,60" fill="url(#goldGala)" />

        {/* Tag */}
        <rect x="25" y="25" width="135" height="28" rx="4" fill="#09121F" stroke="url(#goldGala)" strokeWidth="1" />
        <text x="92" y="43" fill="#E2BD75" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">GALAS & WEDDINGS</text>
      </svg>
    </div>
  );
}

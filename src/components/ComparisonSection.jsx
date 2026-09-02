import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, MapPin } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  return (
    <section id="experience" className="py-20 lg:py-24 bg-white text-navy-950 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (matching reference) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF0F7] border border-[#CAD8E8] text-navy-900 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>THE SV CHAUFFEUR STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-navy-900 tracking-tight leading-tight">
              FROM RESERVATION TO FIRST-CLASS ARRIVAL
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-light">
              See how our meticulous preparation moves from flight tracking and cabin disinfection to punctual curbside arrival and smooth desert navigation.
            </p>

            {/* 2 Feature Highlight Boxes (matching reference) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded bg-[#FAF8F5] border border-[#E9E1D1]">
                <div className="text-navy-900 font-bold text-xs uppercase tracking-wider mb-1">
                  1. PRE-TRIP SANITIZATION
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Pristine leather, climate pre-cooled for Arizona heat, and complimentary chilled water.
                </p>
              </div>

              <div className="p-4 rounded bg-[#FAF8F5] border border-[#E9E1D1]">
                <div className="text-navy-900 font-bold text-xs uppercase tracking-wider mb-1">
                  2. FLIGHT &amp; ROUTE WATCH
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Real-time PHX/SDL flight monitoring ensures your chauffeur is curbside 10 minutes prior.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0F1E33] hover:bg-[#182C4A] text-white font-bold text-xs uppercase tracking-wider rounded transition shadow"
              >
                <span>Reserve Your Chauffeur</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Before & After Comparison Slider (matching reference image) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-slate-300 select-none cursor-ew-resize bg-slate-900"
            >
              {/* After Image (Full width background) */}
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85"
                alt="SV Rental Car Luxury First Class"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#0F1E33]/90 backdrop-blur-md px-3 py-1 rounded text-gold text-xs font-bold uppercase tracking-wider shadow border border-gold/30">
                SV Private Chauffeur
              </div>
              <div className="absolute bottom-4 right-4 bg-[#0F1E33]/90 backdrop-blur-md px-3.5 py-1.5 rounded text-white text-xs font-medium border border-white/10 shadow max-w-[260px]">
                ✨ Spotless luxury SUV, flight tracking &amp; personal driver
              </div>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=70"
                  alt="Standard Rideshare Experience"
                  className="absolute inset-0 w-[1000px] sm:w-[1200px] max-w-none h-full object-cover filter grayscale contrast-150 brightness-50"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-wider shadow">
                  Standard Rideshare
                </div>
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded text-slate-300 text-xs font-medium border border-white/10 shadow max-w-[240px]">
                  ❌ Surge pricing, delayed pickups &amp; unknown drivers
                </div>
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white rounded-full shadow-2xl flex items-center justify-center text-navy-950 font-extrabold text-xs border border-slate-300">
                  ↔
                </div>
              </div>

            </div>
            
            <p className="text-center text-xs text-slate-400 mt-2">
              Arraste a barra para comparar a experiência do motorista particular vs aplicativo comum.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

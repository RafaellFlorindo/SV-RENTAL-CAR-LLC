import React, { useState, useRef } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './motion/Reveal';

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
    <section id="experience" className="py-20 lg:py-28 bg-onyx text-slate-200 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FIRST-CLASS VEHICLES &amp; PROCESS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight leading-tight">
                FROM RESERVATION TO FIRST-CLASS DESTINATION
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-light mt-3">
                See how our meticulous attention to detail elevates your journey. Every vehicle in our fleet is sanitized, thoroughly inspected, and outfitted for ultimate passenger comfort.
              </p>

              {/* 2 Feature Highlight Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-card border border-white/5">
                  <div className="text-gold font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <span>Cabin Sanitization</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Pristine leather, climate pre-cooled for Arizona heat, and spotless interior.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-card border border-white/5">
                  <div className="text-gold font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Navigation className="w-4 h-4 text-gold" />
                    <span>VIP Amenities</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Complimentary chilled artisan water, charging cables, and quiet cabin.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#reservation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/10 transition shadow"
                >
                  <span>Reserve Your Fleet Vehicle</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Before & After Drag Slider */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 select-none cursor-ew-resize bg-slate-900"
              >
                {/* After Image */}
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85"
                  alt="SV Rental Car Luxury First Class"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-midnight/90 backdrop-blur-md px-3 py-1 rounded text-gold text-xs font-bold uppercase tracking-wider shadow border border-gold/30">
                  SV Private Chauffeur
                </div>
                <div className="absolute bottom-4 right-4 bg-midnight/90 backdrop-blur-md px-3.5 py-1.5 rounded text-white text-xs font-medium border border-white/10 shadow max-w-[260px]">
                  ✨ Spotless luxury SUV, flight tracking &amp; personal driver
                </div>

                {/* Before Image */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=70"
                    alt="Standard Rideshare"
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
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-gold text-onyx rounded-full shadow-2xl flex items-center justify-center font-extrabold text-xs border border-white">
                    ↔
                  </div>
                </div>

              </div>
              
              <p className="text-center text-xs text-slate-400 mt-3">
                Arraste para comparar a experiência do motorista particular vs aplicativo comum.
              </p>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
}

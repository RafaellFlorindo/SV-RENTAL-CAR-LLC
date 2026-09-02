import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Navigation } from 'lucide-react';

export default function ComparisonSection() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="experience" className="py-20 lg:py-24 bg-white text-navy-950 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF0F7] border border-[#CAD8E8] text-navy-900 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>THE SV STANDARD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-navy-900 tracking-tight leading-tight">
              FROM RESERVATION TO FIRST-CLASS DESTINATION
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed font-light">
              See how our tailored private chauffeur process moves from careful route planning and cabin sanitization to dedicated, spotless execution.
            </p>

            {/* 2 Feature Cards (matching reference) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E9E1D1]">
                <div className="text-navy-900 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-gold-dark" />
                  <span>PRE-TRIP CABIN PREP</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Pristine leather, climate pre-set, and sanitized interior before every passenger pickup.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#FAF8F5] border border-[#E9E1D1]">
                <div className="text-navy-900 font-bold text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-gold-dark" />
                  <span>FLIGHT &amp; ROUTE WATCH</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Live flight tracking and route monitoring to ensure your chauffeur arrives 10 minutes early.
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

          {/* Right Column: Visual Before/After Showcase */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                
                {/* Standard Rideshare Side */}
                <div className="relative h-72 sm:h-96 overflow-hidden border-b sm:border-b-0 sm:border-r border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=75"
                    alt="Standard Transportation"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-50"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-white text-[11px] font-bold uppercase tracking-wider">
                    Standard Rideshares
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-sm p-3 rounded text-slate-300 text-xs">
                    ❌ Unpredictable drivers &amp; surge rates
                  </div>
                </div>

                {/* SV Rental Car Side */}
                <div className="relative h-72 sm:h-96 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=85"
                    alt="SV Rental Car First Class"
                    className="w-full h-full object-cover filter brightness-105"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-navy-950 px-3 py-1 rounded text-[11px] font-extrabold uppercase tracking-wider shadow">
                    SV Private Chauffeur
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-navy-950/85 backdrop-blur-sm p-3 rounded text-slate-100 text-xs border border-gold/30">
                    ✨ Spotless luxury SUV &amp; dedicated driver
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

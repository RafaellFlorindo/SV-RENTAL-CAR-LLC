import React from 'react';
import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/services';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-onyx relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            EVERYTHING YOUR JOURNEY NEEDS
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-slate-300 text-sm sm:text-base">
            From full-day golf charters to discreet executive transit and airport greetings, SV Rental Car LLC delivers bespoke chauffeured transport across the Phoenix Metropolitan area.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s) => (
            <div
              key={s.id}
              className="bg-card rounded-2xl border border-white/5 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-gold text-onyx text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {s.tag}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-semibold text-gold mb-1">{s.priceNote}</div>
                  <h3 className="text-xl font-bold font-serif text-white mb-2 group-hover:text-gold transition">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {s.description}
                  </p>
                  
                  <ul className="space-y-1.5 border-t border-white/5 pt-3 mb-2">
                    {s.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#reservation"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-light transition group/btn"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

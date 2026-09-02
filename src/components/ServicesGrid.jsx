import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/services';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-[#F8F9FA] text-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Centered with Pill Badge matching Reference) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF0F7] border border-[#CAD8E8] text-navy-900 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-navy-900 tracking-tight">
            EVERYTHING YOUR JOURNEY NEEDS
          </h2>
          <div className="w-14 h-1 bg-gold mx-auto my-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From premier golf outing transportation to discreet executive travel and airport translado, SV Rental Car LLC provides bespoke chauffeured mobility across Scottsdale and the Phoenix Valley.
          </p>
        </div>

        {/* 6 Grid Cards (2 rows of 3 on desktop, clean white cards matching Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold/50 transition duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-navy-900/90 text-gold text-[11px] font-bold px-3 py-1 rounded shadow uppercase tracking-wider">
                    {s.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold font-serif text-navy-900 mb-2 group-hover:text-gold transition uppercase tracking-wide">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <a
                  href="#reservation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold-dark hover:text-navy-900 transition pt-3"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

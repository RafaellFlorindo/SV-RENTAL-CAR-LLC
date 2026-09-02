import React from 'react';
import { Award, HeartHandshake, DollarSign, ShieldCheck, Phone, Check } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function WhyUs() {
  const values = [
    {
      icon: Award,
      title: "PUNCTUAL & GUARANTEED",
      desc: "Live flight tracking and route planning ensure our chauffeur is on-site 10 minutes ahead of scheduled pickup."
    },
    {
      icon: HeartHandshake,
      title: "DEDICATED FAMILY TOUCH",
      desc: `Founded and operated by ${companyInfo.founders}, delivering genuine accountability, discretion, and hospitality.`
    },
    {
      icon: DollarSign,
      title: "TRANSPARENT HOURLY RATES",
      desc: "Clear pricing with zero hidden surcharges. Hourly charters (minimum 4h, avg $500) provide unlimited stops and total flexibility."
    },
    {
      icon: ShieldCheck,
      title: "SAFETY & PREMIUM CARE",
      desc: "Highest defensive driving standards, smooth cornering, and sanitized vehicle interiors for tranquil passenger peace of mind."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-24 bg-[#F8F9FA] text-navy-950 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative bg-white">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                alt="SV Rental Car Experience"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
              
              {/* Floating Badge (matching reference) */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0F1E33] border border-white/10 flex items-center gap-4 text-white shadow-2xl">
                <div className="text-3xl font-serif font-extrabold text-gold">{companyInfo.experienceYears}</div>
                <div className="text-xs">
                  <span className="font-bold uppercase tracking-wider block">Years in Private Chauffeur Services</span>
                  <span className="text-slate-300">Trusted by executives &amp; visitors in Arizona</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Cards (matching reference 2x2 grid) */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF0F7] border border-[#CAD8E8] text-navy-900 text-xs font-bold uppercase tracking-widest mb-3">
                <Check className="w-3.5 h-3.5 text-gold" />
                <span>WHY CHOOSE SV RENTAL CAR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-navy-900 tracking-tight leading-tight">
                HASSLE-FREE LUXURY TRANSPORTATION
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-light">
                We eliminate the uncertainty of rideshare surges and unfamiliar drivers by providing dedicated, family-owned private chauffeured service.
              </p>
            </div>

            {/* 4 Feature Cards (2x2 grid on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition">
                    <div className="w-9 h-9 rounded bg-[#FBF7EE] text-gold-dark flex items-center justify-center mb-2.5 border border-gold/20">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold text-navy-900 mb-1 uppercase tracking-wide">{v.title}</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#reservation"
                className="px-7 py-3.5 bg-[#0F1E33] hover:bg-[#182C4A] text-white font-bold text-xs uppercase tracking-wider rounded transition shadow"
              >
                <span>BOOK A RIDE</span>
              </a>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-navy-900 font-bold text-xs rounded border border-slate-300 transition"
              >
                <Phone className="w-3.5 h-3.5 text-gold-dark" />
                <span>{companyInfo.phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

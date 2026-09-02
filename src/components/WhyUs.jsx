import React from 'react';
import { Award, HeartHandshake, DollarSign, ShieldCheck, PhoneCall, Check } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function WhyUs() {
  const values = [
    {
      icon: Award,
      title: "PUNCTUAL & GUARANTEED",
      desc: "We track flights and optimize traffic routes in real time to ensure our chauffeur is on-site 10 minutes ahead of schedule."
    },
    {
      icon: HeartHandshake,
      title: "DEDICATED FAMILY TOUCH",
      desc: `Founded and operated by ${companyInfo.founders}, ensuring personalized accountability, care, and respectful discretion.`
    },
    {
      icon: DollarSign,
      title: "TRANSPARENT HOURLY RATES",
      desc: "Clear pricing with no surprise surcharges. Hourly charters (minimum 4h, avg $500) provide unlimited stops and flexibility."
    },
    {
      icon: ShieldCheck,
      title: "SAFETY & PREMIUM CARE",
      desc: "Superior defensive driving standards, smooth maneuvering, and sanitized vehicle interiors for tranquil journey peace of mind."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-midnight relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column with Image and Experience Badge */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                alt="SV Rental Car Experience"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-onyx/90 backdrop-blur-md border border-gold/30 flex items-center gap-4">
                <div className="text-3xl font-serif font-extrabold text-gold">{companyInfo.experienceYears}</div>
                <div className="text-xs">
                  <span className="font-bold text-white uppercase block">Years in Private Chauffeur Services</span>
                  <span className="text-slate-400">Trusted by executives and visiting travelers in Arizona</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with 4 Value Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest mb-3">
                <Check className="w-3.5 h-3.5" />
                <span>WHY CHOOSE SV RENTAL CAR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                HASSLE-FREE LUXURY TRANSPORTATION
              </h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                We eliminate the frustration of rideshare surge pricing, delayed pickups, and unfamiliar drivers by providing dedicated, family-owned private chauffeured service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-card border border-white/5 hover:border-gold/30 transition">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1 uppercase tracking-wide">{v.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#reservation"
                className="px-6 py-3.5 bg-gold hover:bg-gold-light text-onyx font-bold text-sm uppercase tracking-wider rounded-xl transition shadow-lg shadow-gold/20"
              >
                <span>RESERVE A RIDE</span>
              </a>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-card hover:bg-slate-800 text-white font-bold text-sm rounded-xl border border-white/10 transition"
              >
                <PhoneCall className="w-4 h-4 text-gold" />
                <span>{companyInfo.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

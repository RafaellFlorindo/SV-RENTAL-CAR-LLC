import React from 'react';
import { Award, Star, ShieldCheck, PhoneCall, ChevronDown } from 'lucide-react';
import { companyInfo } from '../data/company';
import GhlFormEmbed from './GhlFormEmbed';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center py-16 lg:py-24 overflow-hidden">
      {/* Background with luxury gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Chauffeur Service Scottsdale AZ"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-onyx via-onyx/90 to-onyx/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold-light text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4 text-gold" />
              <span>Scottsdale & Phoenix Luxury Transportation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.15]">
              EXPERIENCE ARIZONA IN <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
                COMFORT, SAFETY & LUXURY
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-light">
              Family-owned premier private chauffeur and hourly car service. Meticulously chauffeured transportation for golf tournaments, executive travel, airport transfers, and private rides across Scottsdale, Phoenix, Glendale, Tempe, and Gilbert.
            </p>

            {/* Social Proof & Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 bg-midnight/80 px-4 py-2 rounded-xl border border-white/5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">5.0 Star Chauffeur Service</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Licensed, Insured & Background Checked</span>
              </div>
            </div>

            {/* Direct Call CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="px-6 py-3.5 bg-gold hover:bg-gold-light text-onyx font-bold text-base rounded-xl transition duration-200 shadow-xl shadow-gold/25 flex items-center gap-2.5"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call / Text {companyInfo.phone}</span>
              </a>
              <a
                href="#services"
                className="px-6 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-white font-semibold text-base rounded-xl border border-white/10 transition flex items-center gap-2"
              >
                <span>Explore Services</span>
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Hero Lead Capture / GoHighLevel Form Container (5 cols) */}
          <div className="lg:col-span-5" id="reservation">
            <div className="bg-midnight/85 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gold/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="mb-6 text-center">
                <span className="text-[11px] font-bold text-gold uppercase tracking-widest block mb-1">
                  Instant Reservation Request
                </span>
                <h2 className="text-2xl font-serif font-bold text-white">Get Your Free Quote</h2>
                <p className="text-xs text-slate-300 mt-1">Flexible 24/7 Service · Hourly Charters From 4h</p>
              </div>

              {/* GHL Form Component */}
              <GhlFormEmbed formId="ghl-hero-form" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

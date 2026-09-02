import React from 'react';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';
import GhlFormEmbed from './GhlFormEmbed';
import { companyInfo } from '../data/company';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center py-16 lg:py-20 bg-navy-950 overflow-hidden">
      {/* Background with luxury gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Chauffeur Service Arizona"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-gold/40 text-gold-light text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Scottsdale & Phoenix Luxury Transportation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.12]">
              TRANSFORM YOUR TRAVEL <br />
              WITH <span className="text-gold">QUALITY &amp; PRECISION</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-light">
              Family-owned premier private chauffeur and hourly car service. Meticulously chauffeured transportation for golf outings, corporate events, airport transfers, and private rides across Scottsdale, Phoenix, Glendale, Tempe, and Gilbert.
            </p>

            {/* Social Proof Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 bg-navy-900/90 px-3.5 py-2 rounded border border-white/10">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">5.0 Star Rated Chauffeur</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Licensed, Insured &amp; Family Operated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Lead Capture Card (5 cols) */}
          <div className="lg:col-span-5" id="reservation">
            <div className="bg-[#12233B] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-2xl relative">
              
              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-widest mb-1.5 border border-gold/30">
                  <span>★ Instant Reservation</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-white">Get Your Free Estimate</h2>
                <p className="text-xs text-slate-300 mt-0.5">Flexible 24/7 Service · Hourly Charters From 4h</p>
              </div>

              {/* Dedicated GHL Form Slot */}
              <GhlFormEmbed formId="ghl-hero-form" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

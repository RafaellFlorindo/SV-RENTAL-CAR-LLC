import React from 'react';
import { ArrowUpRight, MapPin, Phone, ShieldCheck, Star } from 'lucide-react';
import GhlFormEmbed from './GhlFormEmbed';
import { companyInfo } from '../data/company';
import { chauffeurClient } from '../assets/photography';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#151715] text-white">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[59%]">
        <img src={chauffeurClient} alt="Chauffeur opening a vehicle door for a passenger" width="1400" height="933" fetchPriority="high" decoding="async" className="image-reveal h-full w-full object-cover object-[58%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151715] via-[#151715]/55 to-black/10 lg:via-[#151715]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151715]/80 via-transparent to-black/10" />
      </div>

      <div className="relative mx-auto grid min-h-[740px] max-w-[1320px] grid-cols-1 items-end gap-10 px-5 pb-10 pt-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-16">
        <div className="lift-in relative z-10 lg:col-span-7 lg:max-w-[720px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/80 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-gold" />Proudly serving Scottsdale, Phoenix &amp; the Valley
          </span>
          <h1 className="display-balance mt-6 font-serif text-[3.5rem] font-medium leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[5.6rem]">
            Scottsdale rides, handled personally.
          </h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
            Airport pickups, golf days, meetings and nights out with a local driver who knows the plan before you get in.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#reservation" className="inline-flex items-center gap-3 bg-[#F1EEE8] px-6 py-4 text-[12px] font-semibold text-[#131514] transition hover:bg-white">
              Check availability <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={`tel:${companyInfo.phoneRaw}`} className="inline-flex items-center gap-3 border border-white/30 bg-black/15 px-6 py-4 text-[12px] font-semibold text-white backdrop-blur-sm transition hover:border-white/65">
              <Phone className="h-4 w-4 text-gold" />Call or text dispatch
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-7 border-t border-white/15 pt-6 text-[11px] text-white/60">
            <span className="flex items-center gap-2 text-white">
              <span className="flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}</span>5-star client care
            </span>
            <span>Licensed &amp; insured</span>
            <span>Available 24/7 by reservation</span>
          </div>
        </div>

        <div id="reservation" className="lift-in-delay relative z-10 lg:col-span-5 lg:ml-auto lg:w-[420px] lg:self-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.06em] text-gold">
            <ShieldCheck className="h-3.5 w-3.5" />Free quote, no obligation
          </div>
          <GhlFormEmbed formId="ghl-hero-form" />
        </div>
      </div>
    </section>
  );
}

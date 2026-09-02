import React from 'react';
import { ArrowDownRight, ArrowUpRight, Phone, Star } from 'lucide-react';
import GhlFormEmbed from './GhlFormEmbed';
import { companyInfo } from '../data/company';
import { hourlyChauffeur } from '../assets/generated';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#131514] text-white">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <img src={hourlyChauffeur} alt="Private chauffeur welcoming a guest in Scottsdale" className="image-reveal h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131514] via-[#131514]/45 to-transparent lg:from-[#131514] lg:via-[#131514]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131514] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] grid-cols-1 items-end gap-10 px-5 pb-8 pt-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-16">
        <div className="lift-in relative z-10 lg:col-span-7 lg:max-w-[790px]">
          <div className="section-kicker text-white/75">Scottsdale to anywhere</div>
          <h1 className="display-balance mt-7 font-serif text-[3.7rem] font-semibold leading-[0.89] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
            The road feels <span className="block italic text-gold">different</span> from here.
          </h1>
          <p className="mt-7 max-w-xl text-sm font-light leading-7 text-white/70 sm:text-base">
            Private chauffeur service shaped around your day — airport arrivals, golf mornings, executive travel and nights out across the Valley.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#reservation" className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-gold-light">
              Plan my ride <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={`tel:${companyInfo.phoneRaw}`} className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-black/10 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:border-white/60">
              <Phone className="h-4 w-4 text-gold" />{companyInfo.phone}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/15 pt-6 text-[10px] uppercase tracking-[0.14em] text-white/55">
            <span className="flex items-center gap-2 text-white">
              <span className="flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}</span>5.0 rated
            </span>
            <span>Licensed &amp; insured</span>
            <span>Available 24/7 by reservation</span>
          </div>
        </div>

        <div id="reservation" className="lift-in-delay relative z-10 lg:col-span-5 lg:ml-auto lg:w-[420px] lg:self-end">
          <div className="mb-3 flex items-center justify-between px-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/65">
            <span>Request availability</span><ArrowDownRight className="h-4 w-4 text-gold" />
          </div>
          <GhlFormEmbed formId="ghl-hero-form" />
        </div>
      </div>
      <div className="route-line absolute bottom-0 left-0 z-20 h-[2px] w-full" />
    </section>
  );
}

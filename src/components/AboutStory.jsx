import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { companyInfo } from '../data/company';
import SvLogo from '../assets/logo/SvLogo';

export default function AboutStory() {
  return (
    <section id="about" className="bg-[#F36B2B] py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <span className="section-kicker text-white/65">Family-owned in Scottsdale</span>
          <div className="mt-10 flex aspect-square max-w-sm items-center justify-center rounded-full border border-white/30 bg-[#F4EFE6] shadow-editorial">
            <SvLogo showText={false} className="scale-[2.8]" />
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <h2 className="display-balance font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">This company began with a simple idea: care travels.</h2>
          <div className="mt-9 grid gap-8 border-t border-white/25 pt-8 sm:grid-cols-2">
            <p className="text-sm leading-7 text-white/80">Founded by <strong className="text-white">{companyInfo.founders}</strong>, SV Rental Car brings personal accountability to private transportation across Arizona.</p>
            <p className="text-sm leading-7 text-white/80">Every reservation is handled with the comfort, punctuality and attention we would want for our own family.</p>
          </div>

          <blockquote className="mt-12 border-l border-white/40 pl-6 font-serif text-3xl italic leading-tight text-white sm:text-4xl">“We want every passenger to feel looked after before the car even arrives.”</blockquote>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={`tel:${companyInfo.phoneRaw}`} className="inline-flex items-center gap-3 rounded-full bg-[#131514] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-black"><Phone className="h-4 w-4" />Talk to João</a>
            <a href="#reservation" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white">Plan a ride <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

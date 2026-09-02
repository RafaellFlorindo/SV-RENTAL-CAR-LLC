import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function PromoBanner() {
  return (
    <section className="bg-[#F4EFE6] px-5 pb-24 lg:px-8 lg:pb-32">
      <div className="relative mx-auto grid max-w-[1440px] overflow-hidden bg-[#131514] text-white lg:grid-cols-12">
        <div className="absolute -right-16 -top-32 font-serif text-[24rem] font-black leading-none text-white/[0.025]">10</div>
        <div className="relative p-8 sm:p-12 lg:col-span-8 lg:p-16">
          <span className="section-kicker text-white/55">Referral and loyalty offer</span>
          <h3 className="display-balance mt-6 max-w-3xl font-serif text-4xl font-semibold leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Send a friend. <span className="italic text-gold">Save 10%</span> on your next ride.
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">When your referral books with SV, you receive 10% off your next reservation. Returning clients receive the same preferred rate.</p>
        </div>
        <a href={`tel:${companyInfo.phoneRaw}`} className="group relative flex min-h-48 items-end justify-between border-t border-white/15 bg-gold p-8 transition hover:bg-gold-light lg:col-span-4 lg:border-l lg:border-t-0 lg:p-12">
          <span className="max-w-[12rem] text-xs font-bold uppercase leading-5 tracking-[0.16em]">Claim my 10% ride</span>
          <ArrowUpRight className="h-10 w-10 transition group-hover:rotate-45" strokeWidth={1.2} />
        </a>
      </div>
    </section>
  );
}

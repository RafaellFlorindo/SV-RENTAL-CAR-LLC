import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function PromoBanner() {
  return (
    <section className="bg-[#F1EEE8] px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-[1320px] border border-black/15 bg-[#FAF8F4] lg:grid-cols-12">
        <div className="p-8 sm:p-10 lg:col-span-9 lg:p-12">
          <span className="section-kicker text-black/50">A thank you for returning clients</span>
          <h3 className="display-balance mt-4 max-w-3xl font-serif text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
            Refer a friend and save 10% on your next ride.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55">When your referral books with SV, you receive 10% off your next reservation. Returning clients can request the same preferred rate.</p>
        </div>
        <a href={`tel:${companyInfo.phoneRaw}`} className="group flex min-h-36 items-center justify-between border-t border-black/15 bg-gold p-8 text-white transition hover:bg-gold-light lg:col-span-3 lg:border-l lg:border-t-0 lg:p-10">
          <span className="max-w-[10rem] text-sm font-semibold leading-5">Ask about the preferred rate</span>
          <ArrowUpRight className="h-6 w-6 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}

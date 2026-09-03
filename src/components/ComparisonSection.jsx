import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { airportJet } from '../assets/photography';

const steps = [
  ['Tell us the plan', 'Share your pickup, date, destination and any stops you already know about.'],
  ['We prepare the ride', 'We check flights and traffic, cool the cabin and plan to arrive before pickup time.'],
  ['Ride on your schedule', 'Need an extra stop or a timing change? Keep the same driver and adjust the plan.']
];

export default function ComparisonSection() {
  return (
    <section id="experience" className="overflow-hidden bg-[#FAF8F4] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="section-kicker text-black/55">How your ride works</div>
            <h2 className="display-balance mt-5 font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">No guessing. No last-minute scramble.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-black/55">You share the plan once. We handle the flight tracking, route timing, vehicle preparation and curbside details.</p>

            <div className="mt-10 border-t border-black/15">
              {steps.map(([title, description]) => (
                <div key={title} className="grid grid-cols-[24px_1fr] gap-4 border-b border-black/15 py-6">
                  <Check className="mt-0.5 h-4 w-4 text-gold" />
                  <div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-2 text-xs leading-6 text-black/55">{description}</p></div>
                </div>
              ))}
            </div>

            <a href="#reservation" className="mt-8 inline-flex items-center gap-3 bg-[#131514] px-6 py-4 text-[12px] font-semibold text-white transition hover:bg-gold">Check availability for my date <ArrowUpRight className="h-4 w-4" /></a>
          </div>

          <div className="relative lg:col-span-7 lg:pl-8">
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
              <img src={airportJet} alt="Black car parked beside a private aircraft" width="1400" height="933" decoding="async" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-white/25 bg-black/35 p-4 text-white backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-auto sm:min-w-[320px]">
                <span className="flex items-center gap-2 text-[11px] font-semibold"><Check className="h-4 w-4 text-gold" />Flight tracked</span>
                <span className="font-serif text-xl">Arrives early</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

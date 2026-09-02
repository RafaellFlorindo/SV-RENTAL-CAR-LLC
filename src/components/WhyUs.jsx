import React from 'react';
import { ArrowUpRight, Award, HeartHandshake, ShieldCheck, TimerReset } from 'lucide-react';
import { companyInfo } from '../data/company';
import { executiveTravel } from '../assets/generated';

const values = [
  [TimerReset, 'Early by design', 'Your driver checks the route and plans to be in position before the scheduled pickup.'],
  [HeartHandshake, 'One trusted team', 'You know who is responsible for the ride and who to contact when the plan changes.'],
  [Award, 'Clear pricing first', 'You receive the rate and itinerary expectations before you confirm the reservation.'],
  [ShieldCheck, 'Prepared for Arizona', 'A clean, cooled cabin and smooth driving make the heat and traffic easier to forget.']
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#131514] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
          <div className="relative min-h-[540px] overflow-hidden lg:col-span-5">
            <img src={executiveTravel} alt="Executive private chauffeur service in Phoenix" width="1400" height="933" decoding="async" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
              <div className="border-l-2 border-gold pl-5">
                <span className="font-serif text-5xl font-semibold">{companyInfo.experienceYears}</span>
                <p className="mt-1 max-w-[15rem] text-[9px] font-bold uppercase leading-4 tracking-[0.17em] text-white/60">Years of private chauffeur experience across Arizona</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:col-span-7 lg:pl-8">
            <div>
              <span className="section-kicker text-white/50">Why ride with SV</span>
              <h2 className="display-balance mt-6 max-w-3xl font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl">The best part of the ride is not having to think about it.</h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">No wondering who will show up. No refreshing an app at the curb. No moving your luggage from ride to ride. Just one prepared vehicle and one accountable driver.</p>
            </div>

            <div className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2">
              {values.map(([Icon, title, description], index) => (
                <div key={title} className="group bg-[#131514] p-6 transition hover:bg-white/[0.04] sm:p-7">
                  <div className="mb-7 flex items-center justify-between">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    <span className="font-serif text-lg italic text-white/25">0{index + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/50">{description}</p>
                </div>
              ))}
            </div>

            <a href="#reservation" className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-gold px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-gold-light">Get my private ride quote <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

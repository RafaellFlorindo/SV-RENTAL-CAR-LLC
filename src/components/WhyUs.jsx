import React from 'react';
import { ArrowUpRight, Award, HeartHandshake, ShieldCheck, TimerReset } from 'lucide-react';
import { companyInfo } from '../data/company';
import { chauffeurClient } from '../assets/photography';

const values = [
  [TimerReset, 'Early by design', 'Your driver checks the route and plans to be in position before the scheduled pickup.'],
  [HeartHandshake, 'One trusted team', 'You know who is responsible for the ride and who to contact when the plan changes.'],
  [Award, 'Clear pricing first', 'You receive the rate and itinerary expectations before you confirm the reservation.'],
  [ShieldCheck, 'Prepared for Arizona', 'A clean, cooled cabin and smooth driving make the heat and traffic easier to forget.']
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#151715] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
          <div className="relative min-h-[540px] overflow-hidden lg:col-span-5">
            <img src={chauffeurClient} alt="Chauffeur welcoming a passenger" width="1400" height="933" decoding="async" className="absolute inset-0 h-full w-full object-cover object-[62%_center]" loading="lazy" />
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
              <h2 className="display-balance mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">The best part of the ride is not having to think about it.</h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">No wondering who will show up. No refreshing an app at the curb. No moving your luggage from ride to ride. Just one prepared vehicle and one accountable driver.</p>
            </div>

            <div className="mt-12 grid border-t border-white/15 sm:grid-cols-2">
              {values.map(([Icon, title, description]) => (
                <div key={title} className="border-b border-white/15 py-7 pr-6 sm:odd:border-r sm:even:pl-7">
                  <div className="mb-5">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl font-medium">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-white/50">{description}</p>
                </div>
              ))}
            </div>

            <a href="#reservation" className="mt-10 inline-flex w-fit items-center gap-3 bg-[#F1EEE8] px-6 py-4 text-[12px] font-semibold text-[#131514] transition hover:bg-white">Get my private ride quote <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

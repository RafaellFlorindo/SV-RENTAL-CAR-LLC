import React from 'react';
import { ArrowUpRight, Check, Clock3, Plane, Route } from 'lucide-react';

const options = [
  {
    Icon: Plane,
    title: 'Airport transfer',
    description: 'A direct private ride to or from PHX, SDL or AZA with flight tracking and luggage assistance.',
    note: 'Best for one scheduled pickup',
    features: ['Flight monitored', 'Pickup details confirmed', 'Private vehicle']
  },
  {
    Icon: Clock3,
    title: 'Hourly chauffeur',
    description: 'Keep the vehicle and chauffeur with you between meetings, golf, dinner and every stop in between.',
    note: 'Four-hour minimum',
    features: ['Same driver all day', 'Flexible intermediate stops', 'Schedule changes by text'],
    featured: true
  },
  {
    Icon: Route,
    title: 'Custom itinerary',
    description: 'A ride plan built around events, groups and full days that need more coordination than one transfer.',
    note: 'Quoted around your route',
    features: ['Multi-stop planning', 'Group and luggage details', 'One point of contact']
  }
];

export default function RideOptions() {
  return (
    <section id="ride-options" className="bg-[#FAF8F4] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="section-kicker text-black/55">Choose how you want to ride</span>
            <h2 className="display-balance mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              A simple arrangement for every kind of day.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-black/55 lg:col-span-4 lg:col-start-9">
            You do not need to choose a vehicle package from a catalog. Tell us the schedule and we will recommend the right arrangement before you confirm.
          </p>
        </div>

        <div className="mt-12 grid border-l border-t border-black/15 lg:grid-cols-3">
          {options.map(({ Icon, title, description, note, features, featured }) => (
            <article key={title} className={`flex min-h-[430px] flex-col border-b border-r border-black/15 p-7 sm:p-9 ${featured ? 'bg-[#151715] text-white' : 'bg-white'}`}>
              <div className="flex items-start justify-between">
                <Icon className={`h-6 w-6 ${featured ? 'text-[#C16A44]' : 'text-gold'}`} strokeWidth={1.5} />
                <span className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${featured ? 'text-white/45' : 'text-black/40'}`}>{note}</span>
              </div>
              <h3 className="mt-10 font-serif text-3xl font-medium tracking-[-0.025em]">{title}</h3>
              <p className={`mt-4 text-sm leading-7 ${featured ? 'text-white/60' : 'text-black/55'}`}>{description}</p>
              <ul className={`mt-8 space-y-3 border-t pt-6 text-xs ${featured ? 'border-white/15 text-white/70' : 'border-black/10 text-black/65'}`}>
                {features.map((feature) => <li key={feature} className="flex items-center gap-3"><Check className="h-4 w-4 shrink-0 text-gold" />{feature}</li>)}
              </ul>
              <a href="#reservation" className={`mt-auto flex items-center justify-between pt-9 text-xs font-semibold ${featured ? 'text-white' : 'text-gold'}`}>
                Ask about this option <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

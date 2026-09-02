import React from 'react';
import { Clock3, ShieldCheck, UserRoundCheck, Plane, MapPin } from 'lucide-react';

const facts = [
  [Clock3, '24/7', 'By advance reservation'],
  [ShieldCheck, 'Private', 'Licensed & insured'],
  [UserRoundCheck, 'Personal', 'One trusted local team'],
  [Plane, 'Flight tracking', 'PHX, SDL & AZA'],
  [MapPin, 'Valley-wide', 'Scottsdale to Gilbert']
];

export default function TrustBar() {
  return (
    <section className="border-b border-black/15 bg-gold text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-5">
        {facts.map(([Icon, title, detail], index) => (
          <div key={title} className={`flex min-h-[112px] items-center gap-3 border-black/15 px-5 py-6 lg:px-7 ${index < 4 ? 'lg:border-r' : ''} ${index % 2 === 0 ? 'border-r lg:border-r' : ''} ${index === 4 ? 'col-span-2 border-t lg:col-span-1 lg:border-t-0' : ''}`}>
            <Icon className="h-5 w-5 shrink-0" strokeWidth={1.6} />
            <div>
              <strong className="block font-serif text-xl font-semibold leading-none">{title}</strong>
              <span className="mt-1.5 block text-[9px] font-bold uppercase tracking-[0.14em] text-white/70">{detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

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
    <section className="border-b border-black/10 bg-[#F1EEE8] text-[#131514]">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 lg:grid-cols-5">
        {facts.map(([Icon, title, detail], index) => (
          <div key={title} className={`flex min-h-[96px] items-center gap-3 border-black/10 px-5 py-5 lg:px-7 ${index < 4 ? 'lg:border-r' : ''} ${index % 2 === 0 ? 'border-r lg:border-r' : ''} ${index === 4 ? 'col-span-2 border-t lg:col-span-1 lg:border-t-0' : ''}`}>
            <Icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.6} />
            <div>
              <strong className="block text-sm font-semibold leading-none">{title}</strong>
              <span className="mt-1.5 block text-[10px] text-black/50">{detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { Clock3, ShieldCheck, UserRoundCheck, Plane, MapPin } from 'lucide-react';

const facts = [
  [Clock3, 'Available 24/7'],
  [ShieldCheck, 'Licensed & insured'],
  [UserRoundCheck, 'One trusted team'],
  [Plane, 'Flight tracking included'],
  [MapPin, 'Valley-wide coverage']
];

export default function TrustBar() {
  return (
    <section className="bg-[#131514] text-white">
      <div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-y divide-white/10 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
        {facts.map(([Icon, label], index) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-2.5 px-4 py-5 text-center ${index === facts.length - 1 ? 'col-span-2 lg:col-span-1' : ''}`}
          >
            <Icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.8} />
            <span className="text-[10px] font-bold uppercase tracking-[0.08em]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

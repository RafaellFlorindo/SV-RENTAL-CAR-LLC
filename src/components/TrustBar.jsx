import React from 'react';
import { Clock, Lock, History, UserCheck, CheckCircle2 } from 'lucide-react';

export default function TrustBar() {
  const badges = [
    {
      icon: Clock,
      title: "24/7 Availability",
      subtitle: "By Prior Reservation"
    },
    {
      icon: Lock,
      title: "Confidential & Safe",
      subtitle: "Discreet Private Travel"
    },
    {
      icon: History,
      title: "+3 Years Experience",
      subtitle: "Trusted Valley Chauffeur"
    },
    {
      icon: UserCheck,
      title: "Female Chauffeur Option",
      subtitle: "Available Upon Request"
    },
    {
      icon: CheckCircle2,
      title: "100% On-Time Guarantee",
      subtitle: "Flight & Route Monitored"
    }
  ];

  return (
    <section className="bg-midnight border-y border-white/10 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center p-2 ${
                  idx === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <Icon className="w-6 h-6 text-gold mb-2" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">{b.title}</span>
                <span className="text-[11px] text-slate-400">{b.subtitle}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

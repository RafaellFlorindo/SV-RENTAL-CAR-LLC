import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { locationsData } from '../data/locations';

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-[#F1EEE8] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="section-kicker text-black/55">Private rides across the Valley</span>
            <h2 className="display-balance mt-5 font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl">One call covers the whole Valley.</h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-black/55">Start in Scottsdale, land at PHX, meet in Tempe or finish the night in Gilbert. Your driver plans the route around the places on your schedule.</p>
          </div>

          <div className="border-t border-black/20 lg:col-span-7 lg:col-start-6">
            {locationsData.map((location) => (
              <a key={location.name} id={`area-${location.name.toLowerCase()}`} href="#reservation" className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-black/20 py-6 transition hover:pl-2">
                <div>
                  <h3 className="font-serif text-3xl font-medium tracking-[-0.025em]">{location.name}</h3>
                  <p className="mt-1 max-w-xl text-[10px] leading-5 text-black/50">{location.subtitle}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

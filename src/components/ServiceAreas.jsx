import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { locationsData } from '../data/locations';

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-[#F4EFE6] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="section-kicker text-black/55">Valley-wide coverage</span>
            <h2 className="display-balance mt-6 font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl">Arizona is our route.</h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-black/55">Based in Scottsdale and serving the places business, golf, flights and good nights take you.</p>
          </div>

          <div className="border-t border-black/20 lg:col-span-7 lg:col-start-6">
            {locationsData.map((location, index) => (
              <a key={location.name} href="#reservation" className="group grid grid-cols-[42px_1fr_auto] items-center gap-4 border-b border-black/20 py-6 transition hover:pl-2">
                <span className="font-serif text-lg italic text-gold">0{index + 1}</span>
                <div>
                  <h3 className="font-serif text-3xl font-semibold tracking-[-0.03em]">{location.name}</h3>
                  <p className="mt-1 max-w-xl text-[10px] leading-5 text-black/50">{location.subtitle}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                  {index === 0 ? <MapPin className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

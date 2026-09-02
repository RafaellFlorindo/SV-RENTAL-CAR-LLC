import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { hourlyChauffeur, golfTransport, airportTransfer, femaleChauffeur, executiveTravel, specialOccasion } from '../assets/generated';

const images = {
  'hourly-charter': hourlyChauffeur,
  'golf-events': golfTransport,
  'airport-transfers': airportTransfer,
  'female-chauffeur': femaleChauffeur,
  'executive-rides': executiveTravel,
  'special-occasions': specialOccasion
};

const spans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-3'];

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-[#F4EFE6] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="section-kicker text-black/55">Private chauffeur services</div>
            <h2 className="display-balance mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              One trusted driver for the whole itinerary.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-black/55 lg:col-span-4 lg:justify-self-end">
            Airport at 6. Tee time at 10. Dinner across town at 8. Choose the service that keeps your plans moving without switching drivers or chasing rides.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {servicesData.map((service, index) => (
            <article key={service.id} className={`group overflow-hidden border border-black/15 bg-[#FBF8F2] transition duration-500 hover:-translate-y-1 hover:shadow-card md:col-span-1 ${spans[index]}`}>
              <a href="#reservation" className="block h-full">
                <div className={`relative overflow-hidden bg-black ${index < 2 ? 'h-72 sm:h-80' : 'h-60'}`}>
                  <img src={images[service.id]} alt={`${service.title} in Scottsdale and Phoenix, Arizona`} width="1400" height="933" decoding="async" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]" loading={index > 1 ? 'lazy' : 'eager'} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#F4EFE6]/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-black backdrop-blur-sm">{service.tag}</span>
                  <span className="absolute bottom-4 left-4 font-serif text-3xl italic text-white/95">0{index + 1}</span>
                </div>

                <div className="flex min-h-[190px] flex-col justify-between p-5 sm:p-6">
                  <div>
                    <h3 className="max-w-lg font-serif text-2xl font-semibold leading-tight tracking-[-0.025em]">{service.title}</h3>
                    <p className="mt-3 max-w-xl text-xs leading-6 text-black/55">{service.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-[9px] font-bold uppercase tracking-[0.16em]">
                    <span>{service.priceNote}</span>
                    <span className="flex items-center gap-2">Check <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-white transition group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

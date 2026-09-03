import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { hourlySuv, golfCourse, airportJet, femaleDriver, chauffeurClient, specialOccasion } from '../assets/photography';

const images = {
  'hourly-charter': hourlySuv,
  'golf-events': golfCourse,
  'airport-transfers': airportJet,
  'female-chauffeur': femaleDriver,
  'executive-rides': chauffeurClient,
  'special-occasions': specialOccasion
};

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-[#F1EEE8] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="mb-14 grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="section-kicker text-black/55">Private chauffeur services</div>
            <h2 className="display-balance mt-5 max-w-3xl font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              One local service for the whole itinerary.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-black/55 lg:col-span-4 lg:justify-self-end">
            Airport at 6. Tee time at 10. Dinner across town at 8. Choose the service that keeps your plans moving without switching drivers or chasing rides.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <article key={service.id} className="group border-b border-black/15 pb-7">
              <a href="#reservation" className="block h-full">
                <div className="relative h-64 overflow-hidden bg-black sm:h-72">
                  <img src={images[service.id]} alt={`${service.title} in Scottsdale and Phoenix, Arizona`} width="1400" height="933" decoding="async" className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]" loading={index > 1 ? 'lazy' : 'eager'} />
                </div>

                <div className="flex min-h-[205px] flex-col justify-between pt-6">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">{service.tag}</span>
                    <h3 className="mt-2 max-w-lg font-serif text-2xl font-medium leading-tight tracking-[-0.02em]">{service.title}</h3>
                    <p className="mt-3 max-w-xl text-[13px] leading-6 text-black/55">{service.description}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[11px] font-semibold">
                    <span className="text-black/45">{service.priceNote}</span>
                    <span className="flex items-center gap-2 text-gold">Check availability <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
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

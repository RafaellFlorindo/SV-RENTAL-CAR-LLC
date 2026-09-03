import React from 'react';
import { airportJet, chauffeurClient, femaleDriver, golfCourse, hourlySuv, specialOccasion } from '../assets/photography';

const moments = [
  { image: airportJet, title: 'Private aviation pickup', detail: 'Scottsdale Airport and Valley FBO coordination', classes: 'md:col-span-7 md:row-span-2' },
  { image: golfCourse, title: 'Scottsdale golf day', detail: 'Room for the group, luggage and golf bags', classes: 'md:col-span-5' },
  { image: femaleDriver, title: 'Requested driver comfort', detail: 'Female chauffeur requests with advance notice', classes: 'md:col-span-5' },
  { image: chauffeurClient, title: 'Door-to-door attention', detail: 'One accountable driver from pickup to drop-off', classes: 'md:col-span-4' },
  { image: hourlySuv, title: 'Vehicle prepared early', detail: 'Clean cabin and route checked before departure', classes: 'md:col-span-4' },
  { image: specialOccasion, title: 'Evenings and celebrations', detail: 'Dinner, weddings and Old Town plans', classes: 'md:col-span-4' }
];

export default function JourneyMoments() {
  return (
    <section id="journey" className="bg-[#F1EEE8] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="section-kicker text-black/55">Journey moments</span>
            <h2 className="display-balance mt-5 font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl">The ride should fit the occasion.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-black/55 lg:col-span-4 lg:col-start-9">From an early flight to a full evening out, the details change. The standard of preparation does not.</p>
        </div>

        <div className="mt-12 grid auto-rows-[270px] gap-4 md:grid-cols-12">
          {moments.map((moment) => (
            <figure key={moment.title} className={`group relative overflow-hidden bg-black ${moment.classes}`}>
              <img src={moment.image} alt={moment.title} width="1400" height="933" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                <h3 className="font-serif text-2xl font-medium">{moment.title}</h3>
                <p className="mt-1 text-[11px] text-white/65">{moment.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

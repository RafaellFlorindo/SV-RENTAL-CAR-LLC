import React, { useState } from 'react';
import { ArrowUpRight, Check, Users, Briefcase, Sparkles, Shield, Wifi, Snowflake } from 'lucide-react';
import { fleetData } from '../data/fleet';
import { companyInfo } from '../data/company';

export default function FleetExperience() {
  const [activeType, setActiveType] = useState('all');

  const filteredFleet = activeType === 'all'
    ? fleetData
    : fleetData.filter((v) => v.type === activeType);

  return (
    <section id="fleet" className="bg-[#FAF8F4] py-20 lg:py-28 border-y border-black/10">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="section-kicker text-black/55">First-class fleet</span>
            <h2 className="display-balance mt-5 font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Immaculate presentation, inside and out.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-sm leading-7 text-black/55">
              We own and maintain our fleet to hotel-concierge standards. Every cabin is sanitized, cooled to your comfort, and stocked with chilled artisan water before every pickup.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-black/15 pb-4">
          <button
            type="button"
            onClick={() => setActiveType('all')}
            className={`px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition ${
              activeType === 'all'
                ? 'bg-[#131514] text-white shadow-sm'
                : 'bg-white text-black/65 border border-black/10 hover:bg-[#F1EEE8]'
            }`}
          >
            All Vehicles ({fleetData.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveType('suv')}
            className={`px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition ${
              activeType === 'suv'
                ? 'bg-[#131514] text-white shadow-sm'
                : 'bg-white text-black/65 border border-black/10 hover:bg-[#F1EEE8]'
            }`}
          >
            Luxury VIP SUVs
          </button>
          <button
            type="button"
            onClick={() => setActiveType('sedan')}
            className={`px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition ${
              activeType === 'sedan'
                ? 'bg-[#131514] text-white shadow-sm'
                : 'bg-white text-black/65 border border-black/10 hover:bg-[#F1EEE8]'
            }`}
          >
            Executive Sedans
          </button>
          <button
            type="button"
            onClick={() => setActiveType('sprinter')}
            className={`px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition ${
              activeType === 'sprinter'
                ? 'bg-[#131514] text-white shadow-sm'
                : 'bg-white text-black/65 border border-black/10 hover:bg-[#F1EEE8]'
            }`}
          >
            Executive Jet Sprinter
          </button>
        </div>

        {/* Vehicle Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {filteredFleet.map((vehicle) => (
            <article
              key={vehicle.id}
              className="group flex flex-col justify-between overflow-hidden border border-black/15 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-editorial"
            >
              <div>
                {/* Vehicle Image */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    width="1400"
                    height="933"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  
                  {/* Badge */}
                  <span className="absolute left-4 top-4 bg-[#131514]/85 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                    {vehicle.badge}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase tracking-[0.1em] text-white/75">{vehicle.category}</span>
                    <h3 className="mt-1 font-serif text-xl font-semibold leading-snug">{vehicle.name}</h3>
                  </div>
                </div>

                {/* Capacity Badges */}
                <div className="grid grid-cols-2 border-b border-black/10 bg-[#F1EEE8]/60 p-4 text-[11px] font-semibold text-black/80">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gold shrink-0" />
                    <span>{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-gold shrink-0" />
                    <span>{vehicle.luggage}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[12.5px] leading-6 text-black/60">
                    {vehicle.description}
                  </p>

                  <div className="mt-6 border-t border-black/10 pt-5">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-black/40 mb-3">
                      Included Cabin Amenities
                    </span>
                    <ul className="space-y-2.5 text-xs text-black/75">
                      {vehicle.amenities.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                          <span className="leading-5">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="border-t border-black/10 bg-[#FAF8F4] p-5">
                <a
                  href="#reservation"
                  className="flex w-full items-center justify-between bg-[#131514] px-5 py-3.5 text-[11px] font-semibold text-white transition hover:bg-gold"
                >
                  <span>Select {vehicle.category.split(' ')[0]} for your ride</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Fleet Quality Reassurance Bar */}
        <div className="mt-12 grid gap-6 border border-black/15 bg-white p-7 sm:grid-cols-3 sm:p-8">
          <div className="flex items-start gap-3.5">
            <Snowflake className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-black">Pre-Cooled Cabins</h4>
              <p className="mt-1 text-[11px] leading-5 text-black/55">
                Arizona heat is no factor. We cool the vehicle 15 minutes before your scheduled pickup.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <Shield className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-black">Licensed & Insured</h4>
              <p className="mt-1 text-[11px] leading-5 text-black/55">
                Full commercial chauffeur liability coverage in Maricopa County & Arizona.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3.5">
            <Sparkles className="h-5 w-5 text-gold shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-black">Child Safety Seats</h4>
              <p className="mt-1 text-[11px] leading-5 text-black/55">
                Infant, toddler, or booster seats sanitized and installed upon prior request at no fee.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

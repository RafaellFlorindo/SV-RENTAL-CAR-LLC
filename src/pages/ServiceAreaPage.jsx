import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowUpRight, Check, Phone } from 'lucide-react';
import { locationsData } from '../data/locations';
import { servicesData } from '../data/services';
import { locationImages } from '../data/locationImages';
import { companyInfo } from '../data/company';
import PageHero from '../components/PageHero';
import PageSeo from '../components/PageSeo';

export default function ServiceAreaPage() {
  const { slug } = useParams();
  const location = locationsData.find((item) => item.name.toLowerCase() === slug);

  if (!location) return <Navigate to="/404" replace />;

  const otherLocations = locationsData.filter((item) => item.name !== location.name);

  return (
    <>
      <PageSeo
        title={`Private Chauffeur in ${location.name}, AZ | SV Rental Car`}
        description={`Airport transfers, hourly charters and private rides in ${location.name}, Arizona. ${location.subtitle}.`}
        path={`/service-areas/${location.name.toLowerCase()}`}
      />

      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Service area', to: '/#service-areas' }, { label: location.name }]}
        kicker={location.highlight}
        title={`Private chauffeur in ${location.name}, Arizona`}
        description={`${location.subtitle}. One local driver for airport transfers, golf outings, business travel and nights out around ${location.name}.`}
        image={locationImages[location.name.toLowerCase()]}
        imageAlt={`Private chauffeur service in ${location.name}, Arizona`}
        formId={`ghl-area-${location.name.toLowerCase()}-form`}
      />

      <section className="bg-[#F1EEE8] py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="section-kicker text-black/55">Local coverage</span>
              <h2 className="display-balance mt-5 max-w-2xl font-serif text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl">
                Around {location.name}, handled the same way every time.
              </h2>

              <div className="mt-9 border-t border-black/15">
                {[
                  ['Local knowledge', `${location.subtitle}, covered from pickup to drop-off.`],
                  ['Same driver, whole trip', 'One chauffeur for every stop on the itinerary, not a new ride app search each time.'],
                  ['Flight & schedule tracking', 'Arrival times and traffic checked in advance so the car is ready before you are.']
                ].map(([title, description]) => (
                  <div key={title} className="grid grid-cols-[24px_1fr] gap-4 border-b border-black/15 py-6">
                    <Check className="mt-0.5 h-4 w-4 text-gold" />
                    <div>
                      <h3 className="text-sm font-semibold">{title}</h3>
                      <p className="mt-2 text-xs leading-6 text-black/55">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#reservation" className="inline-flex items-center gap-3 bg-[#131514] px-6 py-4 text-[12px] font-semibold text-white transition hover:bg-gold">
                  Check availability <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={`tel:${companyInfo.phoneRaw}`} className="inline-flex items-center gap-3 border border-black/15 px-6 py-4 text-[12px] font-semibold text-black/75 transition hover:border-black/40">
                  <Phone className="h-4 w-4 text-gold" />Call or text dispatch
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <span className="section-kicker text-black/55">Services in {location.name}</span>
              <div className="mt-5 border-t border-black/15">
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="group flex items-center justify-between border-b border-black/15 py-4 text-sm font-semibold text-black/70 transition hover:text-black"
                  >
                    {service.title}
                    <ArrowUpRight className="h-4 w-4 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#FAF8F4] py-16 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <span className="section-kicker text-black/55">Other areas</span>
          <h2 className="mt-5 max-w-xl font-serif text-2xl font-medium tracking-[-0.02em] sm:text-3xl">Also serving the rest of the Valley.</h2>

          <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherLocations.map((item) => (
              <Link key={item.name} to={`/service-areas/${item.name.toLowerCase()}`} className="group flex items-center justify-between border-b border-black/15 py-4 text-sm font-semibold text-black/70 transition hover:text-black">
                {item.name}
                <ArrowUpRight className="h-4 w-4 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

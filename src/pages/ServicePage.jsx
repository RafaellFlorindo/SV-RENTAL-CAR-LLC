import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowUpRight, Check, Phone } from 'lucide-react';
import { servicesData } from '../data/services';
import { locationsData } from '../data/locations';
import { serviceImages } from '../data/serviceImages';
import { companyInfo } from '../data/company';
import PageHero from '../components/PageHero';
import PageSeo from '../components/PageSeo';

export default function ServicePage() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.id === slug);

  if (!service) return <Navigate to="/404" replace />;

  const otherServices = servicesData.filter((item) => item.id !== service.id);

  return (
    <>
      <PageSeo
        title={`${service.title} in Scottsdale & Phoenix | SV Rental Car`}
        description={`${service.description} Serving Scottsdale, Phoenix, Glendale, Tempe and Gilbert.`}
        path={`/services/${service.id}`}
      />

      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/#services' }, { label: service.title }]}
        kicker={service.tag}
        title={service.title}
        description={service.description}
        image={serviceImages[service.id]}
        imageAlt={`${service.title} in Scottsdale and Phoenix, Arizona`}
        formId={`ghl-service-${service.id}-form`}
      />

      <section className="bg-[#F1EEE8] py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="section-kicker text-black/55">What's included</span>
              <h2 className="display-balance mt-5 max-w-2xl font-serif text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl">
                Everything set before you get in.
              </h2>

              <div className="mt-9 border-t border-black/15">
                {service.features.map((feature) => (
                  <div key={feature} className="grid grid-cols-[24px_1fr] gap-4 border-b border-black/15 py-6">
                    <Check className="mt-0.5 h-4 w-4 text-gold" />
                    <p className="text-sm font-semibold">{feature}</p>
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
              <span className="section-kicker text-black/55">Where we provide this</span>
              <div className="mt-5 border-t border-black/15">
                {locationsData.map((location) => (
                  <Link
                    key={location.name}
                    to={`/service-areas/${location.name.toLowerCase()}`}
                    className="group flex items-center justify-between border-b border-black/15 py-4 text-sm font-semibold text-black/70 transition hover:text-black"
                  >
                    {location.name}
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
          <span className="section-kicker text-black/55">Other services</span>
          <h2 className="mt-5 max-w-xl font-serif text-2xl font-medium tracking-[-0.02em] sm:text-3xl">Keep the whole itinerary with the same driver.</h2>

          <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((item) => (
              <Link key={item.id} to={`/services/${item.id}`} className="group flex items-center justify-between border-b border-black/15 py-4 text-sm font-semibold text-black/70 transition hover:text-black">
                {item.title}
                <ArrowUpRight className="h-4 w-4 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

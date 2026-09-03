import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { serviceImages } from '../data/serviceImages';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/motion';

export default function ServicesGrid() {
  return (
    <section id="services" className="bg-[#F1EEE8] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="section-kicker text-black/55">Private chauffeur services</div>
          <h2 className="display-balance mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            One local service for the whole itinerary.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/55">
            Airport at 6. Tee time at 10. Dinner across town at 8. Choose the service that keeps your plans moving without switching drivers or chasing rides.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map((service, index) => (
            <motion.article
              key={service.id}
              id={`service-${service.id}`}
              variants={fadeUp}
              className="group overflow-hidden border border-black/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-editorial rounded-sm"
            >
              <Link to={`/services/${service.id}`} className="block h-full">
                <div className="relative h-44 overflow-hidden bg-black">
                  <img
                    src={serviceImages[service.id]}
                    alt={`${service.title} in Scottsdale and Phoenix, Arizona`}
                    width="1400"
                    height="933"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                    loading={index > 1 ? 'lazy' : 'eager'}
                  />
                </div>

                <div className="flex min-h-[190px] flex-col justify-between p-5">
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-gold">{service.tag}</span>
                    <h3 className="mt-2 font-sans text-sm font-bold uppercase tracking-[0.02em] text-[#131514]">{service.title}</h3>
                    <p className="mt-2.5 text-[12.5px] leading-6 text-black/55">{service.description}</p>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-3.5 text-[11px] font-semibold">
                    <span className="text-black/45">{service.priceNote}</span>
                    <span className="flex items-center gap-1.5 text-gold">Check availability <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

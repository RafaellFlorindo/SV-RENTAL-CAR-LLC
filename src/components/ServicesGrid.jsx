import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import SpotlightCard from './motion/SpotlightCard';
import Reveal from './motion/Reveal';
import { staggerContainer, fadeUp, viewportConfig } from '../lib/motion';
import {
  HourlyChauffeurVisual,
  GolfOutingVisual,
  AirportTransferVisual,
  FemaleChauffeurVisual,
  ExecutiveTravelVisual,
  SpecialOccasionVisual
} from '../assets/images/ServiceVisuals';

export default function ServicesGrid() {
  const visuals = {
    'hourly-charter': <HourlyChauffeurVisual />,
    'golf-events': <GolfOutingVisual />,
    'airport-transfers': <AirportTransferVisual />,
    'female-chauffeur': <FemaleChauffeurVisual />,
    'executive-rides': <ExecutiveTravelVisual />,
    'special-occasions': <SpecialOccasionVisual />
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#F8F9FA] text-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF0F7] border border-[#CAD8E8] text-navy-900 text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-navy-900 tracking-tight">
              EVERYTHING YOUR JOURNEY NEEDS
            </h2>
            <div className="w-14 h-1 bg-gold mx-auto my-4 rounded-full"></div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              From premier golf outing transportation to discreet executive travel and airport transfers, SV Rental Car LLC provides bespoke chauffeured mobility across Scottsdale and the Phoenix Valley.
            </p>
          </Reveal>
        </div>

        {/* 6 Grid Cards with 21st.dev SpotlightCard Effect */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((s) => (
            <motion.div key={s.id} variants={fadeUp} className="h-full">
              <SpotlightCard className="bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="h-56 overflow-hidden relative bg-[#091424] group">
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full"
                    >
                      {visuals[s.id] || (
                        <img
                          src={s.image}
                          alt={s.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-base sm:text-lg font-bold font-serif text-navy-900 mb-2 group-hover:text-gold transition uppercase tracking-wide">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <a
                    href="#reservation"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#76591E] hover:text-navy-900 transition group/link pt-3"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

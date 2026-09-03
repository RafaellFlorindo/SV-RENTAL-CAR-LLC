import React from 'react';
import { Map, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { locationsData } from '../data/locations';
import SpotlightCard from './motion/SpotlightCard';
import Reveal from './motion/Reveal';
import { staggerContainer, fadeUp, viewportConfig } from '../lib/motion';

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 bg-[#F8F9FA] text-navy-950 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF0F7] border border-[#CAD8E8] text-navy-900 text-xs font-bold uppercase tracking-widest mb-3">
              <Map className="w-3.5 h-3.5 text-gold" />
              <span>COVERAGE AREAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-navy-900 tracking-tight">
              PROUDLY SERVING THE VALLEY OF THE SUN
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Headquartered in Scottsdale with full-service private chauffeur coverage across Maricopa County, Arizona.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center"
        >
          {locationsData.map((loc, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className={idx === 4 ? 'col-span-2 sm:col-span-1' : ''}
            >
              <SpotlightCard className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md h-full flex flex-col items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#FBF7EE] text-gold-dark flex items-center justify-center mx-auto mb-2.5 border border-gold/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-base text-navy-900">{loc.name}</h3>
                <p className="text-[11px] text-slate-500 mt-1">{loc.subtitle}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

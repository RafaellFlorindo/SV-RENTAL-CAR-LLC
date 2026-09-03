import React from 'react';
import { Map, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { locationsData } from '../data/locations';
import SpotlightCard from './motion/SpotlightCard';
import Reveal from './motion/Reveal';
import { staggerContainer, fadeUp, viewportConfig } from '../lib/motion';

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 bg-midnight text-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest mb-3">
              <Map className="w-3.5 h-3.5" />
              <span>COVERAGE AREAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              PROUDLY SERVING THE VALLEY OF THE SUN
            </h2>
            <p className="text-sm text-slate-400 mt-2 font-light">
              Headquartered in Scottsdale with full-service coverage across Maricopa County.
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
              <SpotlightCard className="p-6 rounded-xl bg-card border border-white/5 hover:border-gold/40 h-full flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-white">{loc.name}</h3>
                <p className="text-[11px] text-slate-400 mt-1">{loc.subtitle}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

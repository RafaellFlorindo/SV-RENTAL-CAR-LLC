import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import SpotlightCard from './motion/SpotlightCard';
import Reveal from './motion/Reveal';
import { staggerContainer, fadeUp, viewportConfig } from '../lib/motion';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-onyx text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight">
              EVERYTHING YOUR JOURNEY NEEDS
            </h2>
            <div className="w-14 h-1 bg-gold mx-auto my-4 rounded-full"></div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              From premier golf outing transportation to discreet executive travel and airport translado, SV Rental Car LLC delivers bespoke chauffeured transport across the Phoenix Metropolitan area.
            </p>
          </Reveal>
        </div>

        {/* 6 Grid Cards with Original Photos and 21st.dev SpotlightCard Effect */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((s) => (
            <motion.div key={s.id} variants={fadeUp} className="h-full">
              <SpotlightCard className="bg-card border border-white/5 hover:border-gold/40 shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                <div>
                  <div className="h-56 overflow-hidden relative">
                    <motion.img
                      src={s.image}
                      alt={s.title}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-gold text-onyx text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                      {s.tag}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold font-serif text-white mb-2 group-hover:text-gold transition uppercase tracking-wide">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 mt-2">
                  <a
                    href="#reservation"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-light transition group/link pt-3"
                  >
                    <span>Reserve Hourly Service</span>
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

import React from 'react';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/company';
import { fadeUp, viewportConfig } from '../lib/motion';

export default function AboutStory() {
  return (
    <section id="about" className="border-y border-black/10 bg-[#F1EEE8] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 lg:grid-cols-12 lg:px-8">
        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="lg:col-span-4"
        >
          <span className="section-kicker text-black/55">Family-owned in Scottsdale</span>
          <div className="mt-8 border-t border-black/15 pt-7">
            <MapPin className="h-5 w-5 text-gold" />
            <p className="mt-4 max-w-xs text-sm leading-7 text-black/60">Based near Old Town Scottsdale and serving pickups across Phoenix, Tempe, Glendale, Gilbert and the surrounding Valley.</p>
            <p className="mt-5 text-xs font-semibold">{companyInfo.address.street}<br />{companyInfo.address.city}, {companyInfo.address.state} {companyInfo.address.zip}</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="lg:col-span-7 lg:col-start-6"
        >
          <h2 className="display-balance font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Built by a family that treats your schedule like their own.</h2>
          <div className="mt-9 grid gap-8 border-t border-black/15 pt-8 sm:grid-cols-2">
            <p className="text-sm leading-7 text-black/60">Founded by <strong className="text-black">{companyInfo.founders}</strong>, SV Rental Car gives Scottsdale and Phoenix travelers a direct alternative to anonymous rides and last-minute uncertainty.</p>
            <p className="text-sm leading-7 text-black/60">The family team handles each reservation from first message to final drop-off, so responsibility stays with the people you spoke to.</p>
          </div>

          <blockquote className="mt-12 border-l-2 border-gold pl-6 font-serif text-3xl leading-tight text-black sm:text-4xl">“When someone rides with us, their schedule becomes our responsibility.”</blockquote>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={`tel:${companyInfo.phoneRaw}`} className="inline-flex items-center gap-3 bg-[#131514] px-6 py-4 text-[12px] font-semibold text-white transition hover:bg-gold shadow-md"><Phone className="h-4 w-4" />Call João directly</a>
            <a href="#reservation" className="inline-flex items-center gap-2 px-2 text-[12px] font-semibold text-gold hover:underline">Check my date <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

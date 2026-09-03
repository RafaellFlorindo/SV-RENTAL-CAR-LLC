import React from 'react';
import { ArrowUpRight, MapPin, Phone, Star, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import GhlFormEmbed from './GhlFormEmbed';
import { companyInfo } from '../data/company';
import { chauffeurClient } from '../assets/photography';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-[#151715] text-white">
      {/* Background Image & Overlays */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[59%]">
        <motion.img
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src={chauffeurClient}
          alt="Chauffeur opening a vehicle door for a passenger"
          width="1400"
          height="933"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151715] via-[#151715]/55 to-black/10 lg:via-[#151715]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151715]/80 via-transparent to-black/10" />
      </div>

      <div className="relative mx-auto grid min-h-[740px] max-w-[1320px] grid-cols-1 items-end gap-10 px-5 pb-10 pt-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-16">
        
        {/* Left Column (7 cols) with Staggered Motion */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:col-span-7 lg:max-w-[720px]"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/80 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-gold" />Proudly serving Scottsdale, Phoenix &amp; the Valley
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-medium text-white/75 backdrop-blur-sm">
              <Globe className="h-3 w-3 text-gold" />EN • PT • ES
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="display-balance mt-6 font-serif text-[3.5rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[5.6rem]"
          >
            Scottsdale rides, <span className="text-gold">handled personally.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-lg text-sm leading-7 text-white/70 sm:text-base font-light"
          >
            Airport pickups, golf days, meetings and nights out with a local driver who knows the plan before you get in.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#reservation"
              className="inline-flex items-center gap-3 bg-[#F1EEE8] px-6 py-4 text-[12px] font-semibold text-[#131514] transition hover:bg-white shadow-lg"
            >
              Check availability <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-3 border border-white/30 bg-black/20 px-6 py-4 text-[12px] font-semibold text-white backdrop-blur-sm transition hover:border-white/60"
            >
              <ShieldCheck className="h-4 w-4 text-gold" />Our Private Services
            </a>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="inline-flex items-center gap-2 px-3 text-[12px] font-semibold text-white/80 transition hover:text-white"
            >
              <Phone className="h-4 w-4 text-gold" />Direct call: {companyInfo.phone}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-7 border-t border-white/15 pt-6 text-[11px] text-white/60"
          >
            <span className="flex items-center gap-2 text-white">
              <span className="flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}</span>5-star client care
            </span>
            <span>Licensed &amp; insured</span>
            <span>Flight tracking included</span>
            <span>Available 24/7 by reservation</span>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Form (5 cols) - Static Container for GHL stability */}
        <div id="reservation" className="relative z-10 lg:col-span-5 lg:ml-auto lg:w-[420px] lg:self-center">
          <GhlFormEmbed formId="ghl-hero-form" />
        </div>

      </div>
    </section>
  );
}

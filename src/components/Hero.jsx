import React from 'react';
import { Star, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import GhlFormEmbed from './GhlFormEmbed';
import MagneticButton from './motion/MagneticButton';
import { companyInfo } from '../data/company';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center py-16 lg:py-20 bg-[#0A1627] overflow-hidden">
      {/* Background image with subtle entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Chauffeur Service Arizona"
          className="w-full h-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1627] via-[#0A1627]/90 to-[#0A1627]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1627] via-transparent to-transparent"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (Staggered Entrance) */}
          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 space-y-6"
          >
            {/* 21st.dev Shimmer Pill */}
            <motion.div variants={fadeUp} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-gold/40 text-gold-light text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                <span>Scottsdale &amp; Phoenix Luxury Transportation</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.12]"
            >
              TRANSFORM YOUR TRAVEL <br />
              WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">QUALITY &amp; PRECISION</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-light"
            >
              Family-owned premier private chauffeur and hourly car service. Meticulously chauffeured transportation for golf outings, corporate events, airport transfers, and private rides across Scottsdale, Phoenix, Glendale, Tempe, and Gilbert.
            </motion.p>

            {/* Social Proof Badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 bg-[#10223A] px-3.5 py-2 rounded border border-white/10 shadow-sm">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">5.0 Star Rated Chauffeur</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Licensed, Insured &amp; Family Operated</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Lead Capture Card with Smooth Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
            id="reservation"
          >
            <div className="bg-[#12233B] rounded-2xl p-6 sm:p-7 border border-white/10 shadow-2xl relative">
              
              <div className="text-center mb-5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-widest mb-1.5 border border-gold/30">
                  <span>★ Instant Reservation</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-white">Get Your Free Estimate</h2>
                <p className="text-xs text-slate-300 mt-0.5">Flexible 24/7 Service · Hourly Charters From 4h</p>
              </div>

              {/* Dedicated GHL Form Slot */}
              <GhlFormEmbed formId="ghl-hero-form" />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

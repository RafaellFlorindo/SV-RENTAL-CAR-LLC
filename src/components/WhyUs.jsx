import React from 'react';
import { Award, HeartHandshake, DollarSign, ShieldCheck, Phone, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/company';
import SpotlightCard from './motion/SpotlightCard';
import Reveal from './motion/Reveal';
import AnimatedCounter from './motion/AnimatedCounter';
import MagneticButton from './motion/MagneticButton';
import { staggerContainer, fadeUp, viewportConfig } from '../lib/motion';

export default function WhyUs() {
  const values = [
    {
      icon: Award,
      title: "PUNCTUAL & GUARANTEED",
      desc: "Live flight tracking and route planning ensure our chauffeur is on-site 10 minutes ahead of scheduled pickup."
    },
    {
      icon: HeartHandshake,
      title: "DEDICATED FAMILY TOUCH",
      desc: `Founded and operated by ${companyInfo.founders}, delivering genuine accountability, discretion, and hospitality.`
    },
    {
      icon: DollarSign,
      title: "TRANSPARENT HOURLY RATES",
      desc: "Clear pricing with zero hidden surcharges. Hourly charters (minimum 4h, avg $500) provide unlimited stops and total flexibility."
    },
    {
      icon: ShieldCheck,
      title: "SAFETY & PREMIUM CARE",
      desc: "Highest defensive driving standards, smooth cornering, and sanitized vehicle interiors for tranquil passenger peace of mind."
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-24 bg-[#F8F9FA] text-navy-950 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Animated Counter Badge */}
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 relative bg-white group">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                  alt="SV Rental Car Experience"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                
                {/* 21st.dev Animated Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0F1E33] border border-white/10 flex items-center gap-4 text-white shadow-2xl">
                  <AnimatedCounter value={companyInfo.experienceYears} className="text-3xl font-serif font-extrabold text-gold" />
                  <div className="text-xs">
                    <span className="font-bold uppercase tracking-wider block">Years in Private Chauffeur Services</span>
                    <span className="text-slate-300">Trusted by executives &amp; visitors in Arizona</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Spotlight Cards */}
          <div className="lg:col-span-7 space-y-7">
            <Reveal>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF0F7] border border-[#CAD8E8] text-navy-900 text-xs font-bold uppercase tracking-widest mb-3">
                <Check className="w-3.5 h-3.5 text-gold" />
                <span>WHY CHOOSE SV RENTAL CAR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-navy-900 tracking-tight leading-tight">
                HASSLE-FREE LUXURY TRANSPORTATION
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed font-light">
                We eliminate the uncertainty of rideshare surges and unfamiliar drivers by providing dedicated, family-owned private chauffeured service.
              </p>
            </Reveal>

            {/* 4 Feature Cards (2x2 grid) */}
            <motion.div
              variants={staggerContainer(0.08, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <motion.div key={idx} variants={fadeUp}>
                    <SpotlightCard className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition">
                      <div className="w-9 h-9 rounded bg-[#FBF7EE] text-gold-dark flex items-center justify-center mb-2.5 border border-gold/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xs font-bold text-navy-900 mb-1 uppercase tracking-wide">{v.title}</h3>
                      <p className="text-[11px] text-slate-600 leading-relaxed">{v.desc}</p>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom Actions with Magnetic Buttons */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton href="#reservation" variant="navy" className="px-7 py-3.5">
                  <span>BOOK A RIDE</span>
                </MagneticButton>
                <MagneticButton href={`tel:${companyInfo.phoneRaw}`} variant="white" className="px-6 py-3.5">
                  <Phone className="w-3.5 h-3.5 text-gold-dark" />
                  <span>{companyInfo.phone}</span>
                </MagneticButton>
              </div>
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  );
}

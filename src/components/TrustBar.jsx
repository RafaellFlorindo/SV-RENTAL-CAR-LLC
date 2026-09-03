import React from 'react';
import { Clock, Lock, History, UserCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '../lib/motion';

export default function TrustBar() {
  const badges = [
    {
      icon: Clock,
      title: "24/7 Availability",
      subtitle: "By Prior Reservation"
    },
    {
      icon: Lock,
      title: "Confidential & Safe",
      subtitle: "Discreet Private Travel"
    },
    {
      icon: History,
      title: "+3 Years Experience",
      subtitle: "Trusted Valley Chauffeur"
    },
    {
      icon: UserCheck,
      title: "Female Chauffeur Option",
      subtitle: "Available Upon Request"
    },
    {
      icon: CheckCircle2,
      title: "100% On-Time Guarantee",
      subtitle: "Flight & Route Monitored"
    }
  ];

  return (
    <section className="bg-[#11233D] border-y border-white/10 py-5 text-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`flex flex-col items-center justify-center p-2 group transition-transform duration-300 hover:-translate-y-0.5 ${
                  idx === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <Icon className="w-5 h-5 text-gold mb-1.5 transition-transform group-hover:scale-110 duration-200" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">{b.title}</span>
                <span className="text-[11px] text-slate-300">{b.subtitle}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

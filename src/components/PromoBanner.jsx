import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/company';
import MagneticButton from './motion/MagneticButton';
import Reveal from './motion/Reveal';

export default function PromoBanner() {
  return (
    <section className="py-12 bg-midnight relative border-y border-gold/25 overflow-hidden px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-widest mb-3 border border-gold/30">
            <Gift className="w-4 h-4" />
            <span>EXCLUSIVE CLIENT PERK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3">
            Refer a friend or book your next trip and get <span className="text-gold">10% OFF</span>!
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
            We value lasting relationships. Enjoy 10% discount on your next reservation when you recommend SV Rental Car LLC to friends, family, or business partners.
          </p>
          <MagneticButton
            href={`tel:${companyInfo.phoneRaw}`}
            variant="gold"
            className="px-8 py-3.5"
          >
            <span>Claim Your 10% Discount Now</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}

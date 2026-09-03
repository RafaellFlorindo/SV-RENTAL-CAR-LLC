import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/company';
import MagneticButton from './motion/MagneticButton';
import Reveal from './motion/Reveal';

export default function PromoBanner() {
  return (
    <section className="py-12 bg-[#F8F9FA] px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="max-w-4xl mx-auto bg-[#ECE8DF] border border-[#D8D2C4] rounded-2xl p-8 sm:p-10 text-center shadow-sm relative overflow-hidden">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-900 mb-2">
            Refer a friend or book your next trip and get <span className="text-gold-dark">10% OFF</span>!
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-6">
            Family-owned commitment to safety and discretion. Enjoy 10% off your next booking when you recommend SV Rental Car LLC.
          </p>
          <MagneticButton
            href={`tel:${companyInfo.phoneRaw}`}
            variant="navy"
            className="px-7 py-3.5"
          >
            <span>Claim Your 10% Discount</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold" />
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}

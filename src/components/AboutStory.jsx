import React from 'react';
import { User, Phone } from 'lucide-react';
import { companyInfo } from '../data/company';
import SvLogo from '../assets/logo/SvLogo';
import Reveal from './motion/Reveal';
import AnimatedCounter from './motion/AnimatedCounter';
import MagneticButton from './motion/MagneticButton';

export default function AboutStory() {
  return (
    <section id="about" className="py-20 bg-white text-navy-950 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="bg-[#FAF8F5] border border-[#E9E1D1] rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF0F7] border border-[#CAD8E8] text-navy-900 text-xs font-bold uppercase tracking-widest">
                  <User className="w-3.5 h-3.5 text-gold" />
                  <span>ABOUT {companyInfo.name}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-navy-900 tracking-tight">
                  A Family Dream Built on Comfort, Safety &amp; Trust
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  <strong className="text-navy-900 font-semibold">{companyInfo.name}</strong> is a family-owned business founded by <strong className="text-gold-dark font-semibold">{companyInfo.founders}</strong>. Our mission is to bring true peace of mind, punctuality, and luxury to private transportation across Arizona.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  With <strong className="text-navy-900 font-medium">over {companyInfo.experienceYears} years of experience</strong> in private transportation, we take immense pride in our driving excellence and vehicle cleanliness. Every ride is managed with personal care and discretion.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-3 border-t border-slate-200">
                  <div>
                    <AnimatedCounter value="24/7" label="By Prior Reservation" className="text-xl font-serif font-bold text-navy-900" />
                  </div>
                  <div>
                    <AnimatedCounter value="100%" label="Licensed & Insured in AZ" className="text-xl font-serif font-bold text-navy-900" />
                  </div>
                  <div>
                    <AnimatedCounter value="10% Off" label="Referrals & Return Clients" className="text-xl font-serif font-bold text-gold-dark" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white rounded-xl p-6 border border-slate-200 text-center shadow-sm flex flex-col items-center">
                <SvLogo showText={false} className="w-16 h-16 mb-3" />
                <h3 className="text-lg font-serif font-bold text-navy-900">João Victor Gois Dias</h3>
                <p className="text-xs text-gold-dark uppercase tracking-widest font-semibold mt-0.5">
                  Founder &amp; Executive Chauffeur
                </p>
                <p className="text-xs text-slate-500 mt-2 max-w-xs mx-auto italic font-light">
                  "We care deeply about the comfort and safety of every passenger we welcome into our vehicles."
                </p>
                <div className="mt-5 pt-5 border-t border-slate-100 flex justify-center w-full">
                  <MagneticButton href={`tel:${companyInfo.phoneRaw}`} variant="navy" className="px-5 py-2.5">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>Direct: {companyInfo.phone}</span>
                  </MagneticButton>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

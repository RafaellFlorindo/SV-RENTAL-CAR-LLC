import React from 'react';
import { User, Phone } from 'lucide-react';
import { companyInfo } from '../data/company';
import SvLogo from '../assets/logo/SvLogo';
import Reveal from './motion/Reveal';
import AnimatedCounter from './motion/AnimatedCounter';
import MagneticButton from './motion/MagneticButton';

export default function AboutStory() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-onyx text-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="bg-card/75 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 relative shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest">
                  <User className="w-3.5 h-3.5" />
                  <span>ABOUT {companyInfo.name}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                  A Family Dream Built on Comfort, Safety &amp; Trust
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  <strong className="text-white font-semibold">{companyInfo.name}</strong> is a family-owned business founded by <strong className="text-gold font-semibold">{companyInfo.founders}</strong>. Our journey began with a single vision: to bring authentic comfort, security, and tranquility to private transportation.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  With <strong className="text-white">over {companyInfo.experienceYears} years of dedicated experience</strong> in private chauffeured transportation, we take immense pride in the quality of our driving, vehicle cleanliness, and passenger care. When you ride with us, you are not just a passenger — you are our guest.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <AnimatedCounter value="24/7" label="Flexible Hours by Appointment" className="text-2xl font-serif font-bold text-gold" />
                  </div>
                  <div>
                    <AnimatedCounter value="100%" label="Licensed & Insured in AZ" className="text-2xl font-serif font-bold text-gold" />
                  </div>
                  <div>
                    <AnimatedCounter value="10% Off" label="Referrals & Repeat Clients" className="text-2xl font-serif font-bold text-gold" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-midnight border border-white/5 text-center shadow-lg">
                <SvLogo showText={false} className="w-20 h-20 mb-4" />
                <h3 className="text-xl font-serif font-bold text-white">João Victor Gois Dias</h3>
                <p className="text-xs text-gold uppercase tracking-widest font-semibold mt-1">
                  Founder &amp; Executive Chauffeur
                </p>
                <p className="text-xs text-slate-400 mt-3 max-w-xs italic">
                  "We take great pride in our driving excellence and the safety and supreme comfort of every passenger."
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 w-full flex justify-center">
                  <MagneticButton href={`tel:${companyInfo.phoneRaw}`} variant="navy" className="px-5 py-2.5 bg-slate-800">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>Direct Contact: {companyInfo.phone}</span>
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

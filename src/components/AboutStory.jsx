import React from 'react';
import { User, PhoneCall } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function AboutStory() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-onyx relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card/75 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest">
                <User className="w-3.5 h-3.5" />
                <span>ABOUT {companyInfo.name}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                A Family Dream Built on Comfort, Safety & Trust
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                <strong className="text-white font-semibold">{companyInfo.name}</strong> is a family-owned business founded by <strong className="text-gold font-semibold">{companyInfo.founders}</strong>. Our journey began with a single vision: to bring genuine comfort, security, and peace of mind to private chauffeured transportation.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                With <strong className="text-white">over {companyInfo.experienceYears} years of dedicated experience</strong> in private transportation, we take immense pride in our driving standards, vehicle cleanliness, and passenger care. When you ride with us, you are not just a passenger — you are our guest.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="block text-2xl font-serif font-bold text-gold">24/7</span>
                  <span className="text-xs text-slate-400">Flexible Hours by Appointment</span>
                </div>
                <div>
                  <span className="block text-2xl font-serif font-bold text-gold">100%</span>
                  <span className="text-xs text-slate-400">Licensed & Insured in AZ</span>
                </div>
                <div>
                  <span className="block text-2xl font-serif font-bold text-gold">10% Off</span>
                  <span className="text-xs text-slate-400">Referrals & Repeat Clients</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-midnight border border-white/5 text-center">
              <div className="w-20 h-20 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-4 border border-gold/30 font-serif font-bold text-3xl">
                SV
              </div>
              <h3 className="text-xl font-serif font-bold text-white">João Victor Gois Dias</h3>
              <p className="text-xs text-gold uppercase tracking-widest font-semibold mt-1">Founder & Executive Chauffeur</p>
              <p className="text-xs text-slate-400 mt-3 max-w-xs">
                "We take great pride in our driving excellence and the safety and supreme comfort of every passenger."
              </p>
              <div className="mt-6 pt-6 border-t border-white/10 w-full flex justify-center">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 px-5 py-2.5 rounded-lg border border-white/10 transition"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-gold" />
                  <span>Direct Contact: {companyInfo.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

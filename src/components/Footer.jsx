import React from 'react';
import { companyInfo } from '../data/company';
import GhlChatWidget from './GhlChatWidget';

export default function Footer() {
  return (
    <footer className="bg-[#0A1627] text-slate-300 text-xs pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-gold text-navy-950 font-serif font-extrabold flex items-center justify-center text-lg">
                SV
              </div>
              <div>
                <span className="font-serif font-bold text-white text-base block">{companyInfo.name}</span>
                <span className="text-[10px] text-gold uppercase tracking-wider font-semibold">
                  Private Chauffeur &amp; Charter
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Family-owned luxury transportation committed to safety, discretion, and passenger comfort across Scottsdale and Phoenix, AZ.
            </p>
            <div className="text-[11px] text-slate-400 space-y-0.5 pt-1">
              <p><strong>EIN:</strong> {companyInfo.ein}</p>
              <p><strong>Founders:</strong> {companyInfo.founders}</p>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-gold transition">Hourly Charter (Min 4h)</a></li>
              <li><a href="#services" className="hover:text-gold transition">Golf Tournament Transit</a></li>
              <li><a href="#services" className="hover:text-gold transition">Airport Transfers (PHX/SDL)</a></li>
              <li><a href="#services" className="hover:text-gold transition">Dedicated Female Driver</a></li>
              <li><a href="#services" className="hover:text-gold transition">Executive Corridas Particulares</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#service-areas" className="hover:text-gold transition">Scottsdale, AZ</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition">Phoenix, AZ</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition">Glendale, AZ</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition">Tempe, AZ</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition">Gilbert, AZ</a></li>
            </ul>
          </div>

          {/* Direct Dispatch & Address */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Direct Dispatch</h4>
            <p className="text-xs">{companyInfo.address.full}</p>
            <a href={`tel:${companyInfo.phoneRaw}`} className="text-gold font-bold text-sm block hover:text-gold-light transition">
              {companyInfo.phone}
            </a>
            <p className="text-[11px] text-slate-400">Hours: {companyInfo.hours}</p>
            <div className="pt-1">
              <span className="inline-block px-2.5 py-1 bg-gold/15 text-gold text-[10px] font-bold rounded border border-gold/30">
                {companyInfo.discountOffer}
              </span>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved. Registered in Maricopa County, Arizona.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition">Terms &amp; Conditions</a>
            <a href="#reservation" className="hover:text-gold transition">Book Online</a>
          </div>
        </div>

      </div>

      {/* GHL Chat Widget Component */}
      <GhlChatWidget />
    </footer>
  );
}

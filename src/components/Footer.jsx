import React from 'react';
import { companyInfo } from '../data/company';
import GhlChatWidget from './GhlChatWidget';

export default function Footer() {
  return (
    <footer className="bg-onyx border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center text-onyx font-serif font-extrabold text-lg">
                SV
              </div>
              <div>
                <span className="font-serif font-bold text-white text-base block">{companyInfo.name}</span>
                <span className="text-[10px] text-gold uppercase tracking-wider font-semibold">
                  Private Chauffeur & Luxury Transport
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Family-owned luxury transportation committed to utmost safety, discretion, and passenger comfort in Scottsdale, Phoenix, and across Maricopa County, Arizona.
            </p>
            <div className="text-[11px] text-slate-400 space-y-1">
              <p><strong>Legal Name:</strong> {companyInfo.name}</p>
              <p><strong>EIN:</strong> {companyInfo.ein}</p>
              <p><strong>Founders:</strong> {companyInfo.founders}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-gold transition">Hourly Chauffeur (4h+)</a></li>
              <li><a href="#services" className="hover:text-gold transition">Golf Event Transportation</a></li>
              <li><a href="#services" className="hover:text-gold transition">Airport Transfers (PHX/SDL)</a></li>
              <li><a href="#services" className="hover:text-gold transition">Female Driver on Request</a></li>
              <li><a href="#services" className="hover:text-gold transition">Corridas Particulares</a></li>
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

          {/* Direct Dispatch & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Direct Dispatch</h4>
            <p className="text-xs">{companyInfo.address.full}</p>
            <a href={`tel:${companyInfo.phoneRaw}`} className="text-gold font-bold text-sm block hover:text-gold-light transition">
              {companyInfo.phone}
            </a>
            <p className="text-[11px] text-slate-400">Hours: {companyInfo.hours}</p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold rounded-full border border-gold/20">
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
            <a href="#" className="hover:text-gold transition">Terms & Conditions</a>
            <a href="#reservation" className="hover:text-gold transition">Book Online</a>
          </div>
        </div>

      </div>

      {/* GHL Chat Widget Component */}
      <GhlChatWidget />
    </footer>
  );
}

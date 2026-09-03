import React from 'react';
import { ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/company';
import SvLogo from '../assets/logo/SvLogo';
import GhlChatWidget from './GhlChatWidget';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1627] text-slate-300 text-xs pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with Bespoke SVG Logo */}
          <div className="space-y-3">
            <SvLogo />
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
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
              <li><a href="#services" className="hover:text-gold transition duration-200">Hourly Charter (Min 4h)</a></li>
              <li><a href="#services" className="hover:text-gold transition duration-200">Golf Tournament Transit</a></li>
              <li><a href="#services" className="hover:text-gold transition duration-200">Airport Transfers (PHX/SDL)</a></li>
              <li><a href="#services" className="hover:text-gold transition duration-200">Dedicated Female Driver</a></li>
              <li><a href="#services" className="hover:text-gold transition duration-200">Executive Private Rides</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#service-areas" className="hover:text-gold transition duration-200">Scottsdale, AZ</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition duration-200">Phoenix, AZ</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition duration-200">Glendale, AZ</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition duration-200">Tempe, AZ</a></li>
              <li><a href="#service-areas" className="hover:text-gold transition duration-200">Gilbert, AZ</a></li>
            </ul>
          </div>

          {/* Direct Dispatch & Address */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider">Direct Dispatch</h4>
            <p className="text-xs">{companyInfo.address.full}</p>
            <a href={`tel:${companyInfo.phoneRaw}`} className="text-gold font-bold text-sm block hover:text-gold-light transition duration-200">
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
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition duration-200">Terms &amp; Conditions</a>
            <button
              onClick={scrollToTop}
              type="button"
              className="w-8 h-8 rounded bg-white/10 hover:bg-gold hover:text-navy-950 text-white flex items-center justify-center transition duration-200 shadow"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* GHL Chat Widget Component */}
      <GhlChatWidget />
    </footer>
  );
}

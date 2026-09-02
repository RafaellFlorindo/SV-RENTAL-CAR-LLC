import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/company';
import SvLogo from '../assets/logo/SvLogo';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0F1E33] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Bespoke Brand Logo */}
        <a href="#" className="flex items-center gap-3">
          <SvLogo />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-200">
          <a href="#" className="text-gold transition">Home</a>
          <a href="#services" className="hover:text-gold transition">Services</a>
          <a href="#experience" className="hover:text-gold transition">Experience</a>
          <a href="#why-us" className="hover:text-gold transition">Why Choose Us</a>
          <a href="#about" className="hover:text-gold transition">About Us</a>
          <a href="#service-areas" className="hover:text-gold transition">Service Areas</a>
          <a href="#faq" className="hover:text-gold transition">FAQ</a>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-5">
          <a href={`tel:${companyInfo.phoneRaw}`} className="flex items-center gap-2 text-white hover:text-gold transition">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gold">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold">{companyInfo.phone}</span>
          </a>
          <a
            href="#reservation"
            className="px-5 py-2.5 bg-gold hover:bg-gold-light text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition duration-200 shadow-md flex items-center gap-1.5"
          >
            <span>Book A Ride</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0A1627] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-gold"
          >
            Services
          </a>
          <a
            href="#experience"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-gold"
          >
            Experience & Fleet
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-gold"
          >
            Why Choose Us
          </a>
          <a
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-gold"
          >
            About Us
          </a>
          <a
            href="#service-areas"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-gold"
          >
            Service Areas
          </a>
          <a
            href="#faq"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-slate-200 hover:text-gold"
          >
            FAQ
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="py-2.5 px-4 rounded bg-white/10 text-white font-bold text-center text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>{companyInfo.phone}</span>
            </a>
            <a
              href="#reservation"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-4 rounded bg-gold text-navy-950 font-bold text-center text-xs uppercase tracking-wider"
            >
              Book A Ride
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

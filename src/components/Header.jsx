import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X, ArrowRight, Clock, MapPin, Tag } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-midnight via-slate-850 to-midnight border-b border-white/5 py-2 px-4 text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-gold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Scottsdale, Phoenix, Tempe, Glendale & Gilbert, AZ</span>
            </span>
            <span className="hidden md:inline-block text-white/20">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-gold" />
              <span>{companyInfo.hours}</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-gold-light bg-gold/10 px-2.5 py-0.5 rounded-full border border-gold/20 text-[11px]">
              <Tag className="w-3 h-3 text-gold" />
              <span>{companyInfo.discountOffer}</span>
            </span>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-white hover:text-gold transition font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold" />
              <span>{companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-onyx/95 backdrop-blur-md shadow-2xl border-b border-white/10'
            : 'bg-onyx/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-gold via-gold-light to-gold-dark flex items-center justify-center text-onyx font-serif font-extrabold text-xl shadow-lg shadow-gold/20 group-hover:scale-105 transition-transform">
              SV
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg tracking-wider text-white uppercase group-hover:text-gold transition">
                {companyInfo.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gold font-semibold">
                Private Chauffeur & Charter
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-gold transition">Services</a>
            <a href="#fleet" className="hover:text-gold transition">Fleet & Experience</a>
            <a href="#why-us" className="hover:text-gold transition">Why SV</a>
            <a href="#about" className="hover:text-gold transition">About Us</a>
            <a href="#service-areas" className="hover:text-gold transition">Service Areas</a>
            <a href="#faq" className="hover:text-gold transition">FAQ</a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a href={`tel:${companyInfo.phoneRaw}`} className="flex flex-col text-right">
              <span className="text-[11px] text-slate-400 font-medium">Direct Line / Text</span>
              <span className="text-sm font-bold text-white hover:text-gold transition">{companyInfo.phone}</span>
            </a>
            <a
              href="#reservation"
              className="px-5 py-2.5 bg-gold hover:bg-gold-light text-onyx font-bold text-sm rounded-lg transition duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/40 flex items-center gap-2"
            >
              <span>Book A Ride</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-onyx/95 backdrop-blur-xl flex flex-col justify-between p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center text-onyx font-serif font-extrabold text-lg">
                SV
              </div>
              <div>
                <h2 className="font-serif font-bold text-white text-base">{companyInfo.name}</h2>
                <p className="text-xs text-gold">Private Chauffeur Service</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="p-2 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 py-8 text-lg font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold flex items-center justify-between"
            >
              <span>Our Services</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </a>
            <a
              href="#fleet"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold flex items-center justify-between"
            >
              <span>Fleet & Amenities</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold flex items-center justify-between"
            >
              <span>Why Choose Us</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold flex items-center justify-between"
            >
              <span>About Our Family Business</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </a>
            <a
              href="#service-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold flex items-center justify-between"
            >
              <span>Service Areas (AZ)</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-gold flex items-center justify-between"
            >
              <span>Frequently Asked Questions</span>
              <ArrowRight className="w-5 h-5 text-gold" />
            </a>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="w-full py-3 px-4 rounded-lg bg-card border border-white/10 text-white font-bold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5 text-gold" />
              <span>Call: {companyInfo.phone}</span>
            </a>
            <a
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 rounded-lg bg-gold text-onyx font-bold flex items-center justify-center gap-2"
            >
              <span>Reserve Your Chauffeur</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

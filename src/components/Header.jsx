import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/company';
import SvLogo from '../assets/logo/SvLogo';
import MagneticButton from './motion/MagneticButton';
import { SPRING_SNAPPY } from '../lib/motion';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1627]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-0'
          : 'bg-[#0F1E33] border-b border-white/10 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <SvLogo />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-200">
          <a href="#" className="text-gold transition hover:text-gold-light">Home</a>
          <a href="#services" className="hover:text-gold transition duration-200">Services</a>
          <a href="#experience" className="hover:text-gold transition duration-200">Experience</a>
          <a href="#why-us" className="hover:text-gold transition duration-200">Why Choose Us</a>
          <a href="#about" className="hover:text-gold transition duration-200">About Us</a>
          <a href="#service-areas" className="hover:text-gold transition duration-200">Service Areas</a>
          <a href="#faq" className="hover:text-gold transition duration-200">FAQ</a>
        </nav>

        {/* Right Action */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href={`tel:${companyInfo.phoneRaw}`}
            className="flex items-center gap-2 text-white hover:text-gold transition group"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-gold/20 flex items-center justify-center text-gold transition">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-bold">{companyInfo.phone}</span>
          </a>

          <MagneticButton href="#reservation" variant="gold" className="px-5 py-2.5">
            <span>Book A Ride</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </MagneticButton>
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

      {/* 21st.dev Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={SPRING_SNAPPY}
            className="lg:hidden bg-[#0A1627] border-b border-white/10 px-4 pt-2 pb-6 space-y-3 overflow-hidden"
          >
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
              Experience &amp; Fleet
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

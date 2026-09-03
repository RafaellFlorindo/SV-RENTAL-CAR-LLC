import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../data/company';
import SvLogo from '../assets/logo/SvLogo';

const navItems = [
  ['Services', '#services'],
  ['Ride options', '#ride-options'],
  ['How it works', '#experience'],
  ['Reviews', '#testimonials'],
  ['Service area', '#service-areas'],
  ['FAQ', '#faq']
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F1EEE8]/95 backdrop-blur-lg">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="SV Rental Car home"><SvLogo /></a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} className="text-[12px] font-semibold text-black/60 transition hover:text-black">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href={`tel:${companyInfo.phoneRaw}`} className="hidden items-center gap-2 px-3 py-2 text-[11px] font-semibold text-black/65 transition hover:text-black xl:flex">
            <Phone className="h-3.5 w-3.5 text-gold" />{companyInfo.phone}
          </a>
          <a href="#reservation" className="inline-flex items-center gap-2 bg-[#131514] px-5 py-3 text-[11px] font-semibold text-white transition hover:bg-gold">
            Check availability <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle navigation menu" aria-expanded={mobileOpen} className="border border-black/15 p-2.5 text-black lg:hidden">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/10 bg-[#F1EEE8] px-5 py-6 lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMobileOpen(false)} className="border-b border-black/10 py-4 font-serif text-2xl font-semibold">
                {label}
              </a>
            ))}
            <a href="#reservation" onClick={() => setMobileOpen(false)} className="mt-6 flex items-center justify-center bg-[#131514] px-5 py-4 text-xs font-semibold text-white">Check ride availability</a>
          </nav>
        </div>
      )}
    </header>
  );
}

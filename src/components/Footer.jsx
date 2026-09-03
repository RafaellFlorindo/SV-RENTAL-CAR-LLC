import React from 'react';
import { ArrowUp, ArrowUpRight, Phone } from 'lucide-react';
import { companyInfo } from '../data/company';
import SvLogo from '../assets/logo/SvLogo';
import GhlChatWidget from './GhlChatWidget';

export default function Footer() {
  return (
    <footer className="bg-[#131514] text-white">
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-7 px-5 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <h2 className="max-w-3xl font-serif text-3xl font-medium leading-tight sm:text-4xl">Tell us where you are going. We will handle the road.</h2>
          <a href="#reservation" className="inline-flex w-fit items-center gap-3 bg-[#F1EEE8] px-6 py-4 text-[12px] font-semibold text-[#131514]">Get my ride quote <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>

      <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5"><SvLogo variant="light" /><p className="mt-6 max-w-sm text-xs leading-6 text-white/45">A family-owned private chauffeur service for airport transfers, golf outings, business travel and special events across Scottsdale and Phoenix.</p></div>
          <div className="lg:col-span-2">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold">Explore</h3>
            <nav className="mt-5 flex flex-col gap-3 text-xs text-white/60"><a href="#services" className="hover:text-white">Services</a><a href="#experience" className="hover:text-white">The standard</a><a href="#testimonials" className="hover:text-white">Testimonials</a><a href="#about" className="hover:text-white">Our story</a><a href="#faq" className="hover:text-white">FAQ</a></nav>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold">Service area</h3>
            <p className="mt-5 text-xs leading-6 text-white/60">Scottsdale<br />Phoenix<br />Glendale<br />Tempe<br />Gilbert</p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.18em] text-gold">Direct dispatch</h3>
            <a href={`tel:${companyInfo.phoneRaw}`} className="mt-5 flex items-center gap-2 font-serif text-2xl"><Phone className="h-4 w-4 text-gold" />{companyInfo.phone}</a>
            <p className="mt-4 max-w-xs text-[10px] leading-5 text-white/40">{companyInfo.address.full}<br />{companyInfo.hours}</p>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-[9px] uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {companyInfo.name} | EIN {companyInfo.ein}</span>
          <div className="flex items-center gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#top" aria-label="Back to top" className="flex h-9 w-9 items-center justify-center border border-white/20 text-white"><ArrowUp className="h-4 w-4" /></a></div>
        </div>
      </div>
      <GhlChatWidget />
    </footer>
  );
}

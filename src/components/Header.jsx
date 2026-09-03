import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { companyInfo } from '../data/company';
import { servicesData } from '../data/services';
import { locationsData } from '../data/locations';
import SvLogo from '../assets/logo/SvLogo';

const navItems = [
  {
    label: 'Services',
    type: 'dropdown',
    viewAllHref: '/#services',
    viewAllLabel: 'View all services',
    items: servicesData.map((service) => ({
      href: `/services/${service.id}`,
      label: service.title,
      detail: service.tag
    }))
  },
  { label: 'Fleet', type: 'link', href: '/#fleet' },
  { label: 'Fare estimator', type: 'link', href: '/#estimator' },
  { label: 'Ride options', type: 'link', href: '/#ride-options' },
  {
    label: 'Service area',
    type: 'dropdown',
    viewAllHref: '/#service-areas',
    viewAllLabel: 'View all locations',
    items: locationsData.map((location) => ({
      href: `/service-areas/${location.name.toLowerCase()}`,
      label: location.name,
      detail: location.subtitle
    }))
  },
  { label: 'How it works', type: 'link', href: '/#experience' },
  {
    label: 'More info',
    type: 'dropdown',
    items: [
      { href: '/#fleet', label: 'First-class fleet' },
      { href: '/#estimator', label: 'Fare calculator' },
      { href: '/#testimonials', label: 'Reviews' },
      { href: '/#about', label: 'Our story' },
      { href: '/#faq', label: 'FAQ' }
    ]
  }
];

function DesktopDropdown({ item }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1.5 py-[26px] text-[12px] font-semibold text-black/60 transition hover:text-black"
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 transition duration-200 group-hover:rotate-180" />
      </button>

      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100">
        <div className="border border-black/10 bg-white p-2 shadow-2xl shadow-black/10">
          {item.items.map((sub) => (
            <Link
              key={sub.href}
              to={sub.href}
              className="block px-4 py-3 transition hover:bg-[#F1EEE8]"
            >
              <span className="block text-[12px] font-semibold text-black">{sub.label}</span>
              {sub.detail && <span className="mt-0.5 block text-[10px] leading-4 text-black/45">{sub.detail}</span>}
            </Link>
          ))}
          {item.viewAllHref && (
            <Link
              to={item.viewAllHref}
              className="mt-1 flex items-center justify-between border-t border-black/10 px-4 pt-3 pb-2 text-[11px] font-semibold text-gold"
            >
              {item.viewAllLabel} <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function MobileAccordionItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (item.type === 'link') {
    return (
      <Link to={item.href} onClick={onNavigate} className="border-b border-black/10 py-4 font-serif text-2xl font-semibold">
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-black/10">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 font-serif text-2xl font-semibold"
      >
        {item.label}
        <ChevronDown className={`h-5 w-5 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="flex flex-col gap-1 pb-4 pl-1">
          {item.items.map((sub) => (
            <Link key={sub.href} to={sub.href} onClick={onNavigate} className="py-2 text-sm font-semibold text-black/65">
              {sub.label}
            </Link>
          ))}
          {item.viewAllHref && (
            <Link to={item.viewAllHref} onClick={onNavigate} className="py-2 text-sm font-semibold text-gold">
              {item.viewAllLabel}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F1EEE8]/95 backdrop-blur-lg">
      {/* Subtle Top Reassurance Bar */}
      <div className="hidden border-b border-white/10 bg-[#131514] px-5 py-1.5 text-[10px] tracking-wide text-white/80 sm:block lg:px-8">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between">
          <span className="flex items-center gap-2 font-medium">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Scottsdale &amp; Phoenix Private Chauffeur • 24/7 By Reservation
          </span>
          <div className="flex items-center gap-4">
            <span className="text-white/60">Chauffeurs fluent in English • Português • Español</span>
            <a href={`tel:${companyInfo.phoneRaw}`} className="flex items-center gap-1 font-semibold text-gold transition hover:underline">
              <Phone className="h-2.5 w-2.5" /> {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="SV Rental Car home"><SvLogo /></Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) =>
            item.type === 'dropdown' ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <Link key={item.href} to={item.href} className="text-[12px] font-semibold text-black/60 transition hover:text-black">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a href={`tel:${companyInfo.phoneRaw}`} className="group hidden flex-col items-start px-3 py-1.5 xl:flex">
            <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-black/40 group-hover:text-black/60">Call now</span>
            <span className="flex items-center gap-1.5 text-[13px] font-semibold text-black group-hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" />{companyInfo.phone}
            </span>
          </a>
          <Link to="/#reservation" className="inline-flex items-center gap-2 bg-[#131514] px-5 py-3 text-[11px] font-semibold text-white transition hover:bg-gold">
            Check availability <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle navigation menu" aria-expanded={mobileOpen} className="border border-black/15 p-2.5 text-black lg:hidden">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-black/10 bg-[#F1EEE8] px-5 py-6 lg:hidden">
          <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-4 text-xs">
            <span className="font-semibold text-black/60">English • Português • Español</span>
            <a href={`tel:${companyInfo.phoneRaw}`} className="flex items-center gap-1 font-bold text-gold">
              <Phone className="h-3 w-3" /> {companyInfo.phone}
            </a>
          </div>
          <nav className="mx-auto flex max-w-[1440px] flex-col" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <MobileAccordionItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
            ))}
            <Link to="/#reservation" onClick={() => setMobileOpen(false)} className="mt-6 flex items-center justify-center bg-[#131514] px-5 py-4 text-xs font-semibold text-white">Check ride availability</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

import React, { useState } from 'react';
import { Phone, MessageSquare, X, ChevronUp, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function VipFloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = encodeURIComponent(
    "Hello SV Rental Car! I would like to check chauffeur availability and rates."
  );
  const whatsappLink = `https://wa.me/16029215953?text=${defaultMsg}`;

  return (
    <aside aria-label="VIP Chauffeur Dispatch Concierge" className="fixed bottom-5 right-5 z-40 flex flex-col items-end print:hidden">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="mb-3 w-80 overflow-hidden border border-black/15 bg-white p-5 shadow-editorial animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between border-b border-black/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-black">
                VIP Dispatch Online
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close dispatch concierge"
              className="text-black/45 hover:text-black"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-3 text-xs leading-5 text-black/60">
            Speak directly with executive driver João Victor or dispatch for instant reservations and airport coordination.
          </p>

          <div className="mt-4 space-y-2.5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-gold px-4 py-3 text-xs font-semibold text-white transition hover:bg-gold-light"
            >
              <span className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Text on WhatsApp</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-white/80">Instant</span>
            </a>

            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center justify-between border border-black/15 bg-[#FAF8F4] px-4 py-3 text-xs font-semibold text-black transition hover:bg-[#F1EEE8]"
            >
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gold" />
                <span>Call {companyInfo.phone}</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-black/40">24/7</span>
            </a>

            <a
              href="#estimator"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between border border-black/10 px-4 py-2.5 text-[11px] font-medium text-black/75 hover:bg-[#F1EEE8]"
            >
              <span>Instant Rate Estimator</span>
              <Sparkles className="h-3.5 w-3.5 text-gold" />
            </a>
          </div>

          <div className="mt-4 border-t border-black/10 pt-3 text-center">
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-black/40 block">
              Languages Spoken
            </span>
            <span className="text-[10px] font-medium text-black/70 mt-0.5 block">
              English • Português • Español
            </span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex items-center gap-2.5 border border-black/15 bg-[#131514] px-4 py-3 text-white shadow-2xl transition hover:bg-gold"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span className="text-xs font-semibold tracking-wide">
          {isOpen ? 'Close Dispatch' : 'VIP Dispatch & Chat'}
        </span>
        <ChevronUp className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </aside>
  );
}

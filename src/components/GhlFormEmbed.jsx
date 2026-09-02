import React from 'react';
import { ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function GhlFormEmbed({ formId = 'ghl-booking-form', title = 'Reservation Form', ghlIframeUrl = null }) {
  if (ghlIframeUrl) {
    return (
      <div id={formId} className="min-h-[480px] w-full overflow-hidden bg-white">
        <iframe src={ghlIframeUrl} title={title} className="min-h-[480px] w-full border-0" loading="lazy" />
      </div>
    );
  }

  return (
    <div id={formId} className="w-full border border-white/20 bg-[#F4EFE6] p-6 text-[#131514] shadow-editorial sm:p-7">
      <span className="section-kicker text-black/55">Direct booking</span>
      <h3 className="mt-5 font-serif text-3xl font-semibold leading-tight tracking-[-0.03em]">Tell us where the day is taking you.</h3>
      <p className="mt-3 text-xs leading-6 text-black/55">Your GoHighLevel reservation form connects here. Until then, call or text dispatch for a fast availability check.</p>
      <a href={`tel:${companyInfo.phoneRaw}`} className="mt-7 flex w-full items-center justify-between rounded-full bg-[#131514] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-gold">
        <span className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-gold" />Call or text dispatch</span><ArrowUpRight className="h-4 w-4" />
      </a>
      <div className="mt-4 flex items-center gap-2 text-[10px] text-black/45"><ShieldCheck className="h-3.5 w-3.5 text-gold" /><span>24/7 availability by prior reservation</span></div>
    </div>
  );
}

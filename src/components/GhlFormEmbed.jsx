import React from 'react';
import { PhoneCall, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';

/**
 * GhlFormEmbed
 * Clean slot for GoHighLevel (GHL) Form iFrame.
 * 
 * INSTRUCTIONS:
 * When you export your Form from GoHighLevel, paste your <iframe> code inside this component
 * or pass the iframe URL as a prop.
 */
export default function GhlFormEmbed({ formId = "ghl-booking-form", title = "Reservation Form", ghlIframeUrl = null }) {
  if (ghlIframeUrl) {
    return (
      <div id={formId} className="w-full min-h-[480px] bg-white rounded-lg overflow-hidden">
        <iframe
          src={ghlIframeUrl}
          title={title}
          className="w-full min-h-[480px] border-0"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div id={formId} className="w-full relative">
      {/* 
        ========================================================================
        GOHIGHLEVEL (GHL) FORM CONTAINER
        Paste your GoHighLevel <iframe> code below to replace this placeholder.
        ========================================================================
      */}
      <div className="bg-white rounded-xl p-6 sm:p-7 text-navy-950 shadow-xl border border-slate-200/80 text-center flex flex-col items-center justify-center min-h-[380px]">
        <span className="text-[11px] font-bold text-[#76591E] uppercase tracking-widest block mb-1">
          Instant Reservation
        </span>
        <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">
          Request Chauffeur Availability
        </h3>
        <p className="text-xs text-slate-600 max-w-sm mb-6 leading-relaxed">
          Embed your GoHighLevel booking form iframe here, or contact our dispatch directly for immediate reservations.
        </p>

        <a
          href={`tel:${companyInfo.phoneRaw}`}
          className="w-full py-3.5 px-6 bg-gold hover:bg-gold-light text-navy-950 font-bold text-xs uppercase tracking-wider rounded transition duration-200 shadow-md flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call or Text: {companyInfo.phone}</span>
        </a>

        <div className="flex items-center justify-center gap-1 text-[11px] text-slate-500 mt-4">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" />
          <span>Available 24/7 by prior reservation</span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { PhoneCall, ShieldCheck, Code2 } from 'lucide-react';
import { companyInfo } from '../data/company';

/**
 * GhlFormEmbed
 * Clean, designated placeholder for GoHighLevel (GHL) Form iFrame.
 */
export default function GhlFormEmbed({ formId = "ghl-booking-form", title = "Reservation Form", ghlIframeUrl = null }) {
  if (ghlIframeUrl) {
    return (
      <div id={formId} className="w-full min-h-[480px] bg-card rounded-xl overflow-hidden">
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
      <div className="bg-card/90 backdrop-blur-md rounded-xl p-6 sm:p-7 text-slate-200 shadow-2xl border border-white/10 text-center flex flex-col items-center justify-center min-h-[380px]">
        <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-4 border border-gold/30">
          <Code2 className="w-6 h-6 text-gold" />
        </div>

        <span className="text-[11px] font-bold text-gold uppercase tracking-widest block mb-1">
          Instant Reservation
        </span>
        <h3 className="text-xl font-serif font-bold text-white mb-2">
          GoHighLevel Form Container
        </h3>
        <p className="text-xs text-slate-400 max-w-sm mb-6 leading-relaxed">
          Paste your exported GoHighLevel <code className="bg-onyx text-gold px-1.5 py-0.5 rounded font-mono text-[11px]">&lt;iframe&gt;</code> code in <code className="bg-onyx text-gold px-1.5 py-0.5 rounded font-mono text-[11px]">GhlFormEmbed.jsx</code>.
        </p>

        <a
          href={`tel:${companyInfo.phoneRaw}`}
          className="w-full py-3.5 px-6 bg-gold hover:bg-gold-light text-onyx font-bold text-xs uppercase tracking-wider rounded transition duration-200 shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Direct Dispatch: {companyInfo.phone}</span>
        </a>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-4">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span>24/7 Available By Prior Reservation</span>
        </div>
      </div>
    </div>
  );
}

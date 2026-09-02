import React from 'react';
import { PhoneCall, Code2, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/company';

/**
 * GhlFormEmbed
 * Clean, designated placeholder for GoHighLevel (GHL) Form iFrame.
 * 
 * INSTRUCTIONS FOR USER:
 * 1. Export your iframe embed code from GoHighLevel.
 * 2. Paste it below inside the GHL IFRAME CONTAINER (replacing the placeholder).
 */
export default function GhlFormEmbed({ formId = "ghl-booking-form", title = "Reservation Form" }) {
  // Check if you have an iframe URL or raw snippet to render:
  const ghlIframeUrl = null; // Set to your GoHighLevel form URL e.g. "https://api.leadconnectorhq.com/widget/form/..."

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
      {/* ========================================================================
          GOHIGHLEVEL (GHL) FORM IFRAME EMBED CONTAINER
          Cole seu código <iframe> do GoHighLevel aqui dentro.
          ======================================================================== */}
      <div className="bg-white/95 rounded-xl p-6 sm:p-8 text-navy-950 shadow-xl border border-navy-850/20 text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 bg-navy-900/5 text-navy-900 rounded-full flex items-center justify-center mb-4 border border-navy-900/10">
          <Code2 className="w-6 h-6 text-gold" />
        </div>
        
        <span className="text-[11px] font-bold text-gold uppercase tracking-widest block mb-1">
          GoHighLevel Form Container
        </span>
        <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">
          Espaço Reservado para o Formulário GHL
        </h3>
        <p className="text-xs text-slate-600 max-w-sm mb-6 leading-relaxed">
          Cole o código <code className="bg-slate-100 text-navy-900 px-1.5 py-0.5 rounded font-mono text-[11px]">&lt;iframe&gt;</code> exportado do GoHighLevel no componente <code className="bg-slate-100 text-navy-900 px-1.5 py-0.5 rounded font-mono text-[11px]">GhlFormEmbed.jsx</code>.
        </p>

        <a
          href={`tel:${companyInfo.phoneRaw}`}
          className="w-full py-3.5 px-6 bg-gold hover:bg-gold-light text-navy-950 font-bold text-sm uppercase tracking-wider rounded-lg transition duration-200 shadow-md flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Ligar Direto: {companyInfo.phone}</span>
        </a>

        <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1 mt-4">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span>Atendimento 24/7 com agendamento prévio</span>
        </p>
      </div>
    </div>
  );
}

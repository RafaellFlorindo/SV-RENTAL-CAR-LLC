import React, { useState } from 'react';
import { Send, ArrowRight, ShieldCheck, PhoneCall, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/company';

/**
 * GhlFormEmbed
 * Clean modular wrapper for GoHighLevel (GHL) Form iFrame.
 * When you have your GHL iFrame snippet, paste it in the designated slot below
 * or pass an `iframeSrc` prop.
 */
export default function GhlFormEmbed({ formId = "ghl-hero-form", iframeSrc = null, title = "Reserve Your Ride" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'hourly',
    location: '',
    datetime: '',
    notes: '',
    consent: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pre-integration action: prompt immediate direct call
    window.location.href = `tel:${companyInfo.phoneRaw}`;
  };

  // If iframe URL is provided by user, render iframe directly:
  if (iframeSrc) {
    return (
      <div id={formId} className="w-full min-h-[520px] rounded-xl overflow-hidden">
        <iframe
          src={iframeSrc}
          title={title}
          className="w-full min-h-[520px] border-0 rounded-xl"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div id={formId} className="relative">
      {/* 
        ========================================================================
        GOHIGHLEVEL (GHL) FORM EMBED SLOT:
        If you have the raw <iframe> tag exported from GoHighLevel,
        you can replace the <form> below with your <iframe> embed code.
        ========================================================================
      */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Full Name *
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            required
            placeholder="e.g. Robert Vance"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-midnight/90 border border-white/15 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor={`${formId}-phone`} className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <input
              id={`${formId}-phone`}
              type="tel"
              required
              placeholder="(602) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-midnight/90 border border-white/15 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition"
            />
          </div>
          <div>
            <label htmlFor={`${formId}-service`} className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Service Type
            </label>
            <select
              id={`${formId}-service`}
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-midnight/90 border border-white/15 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-4 py-2.5 text-sm text-white outline-none transition"
            >
              <option value="hourly">Hourly Charter (Min 4h)</option>
              <option value="golf">Golf Outing / Event</option>
              <option value="airport">Airport Transfer (PHX / SDL)</option>
              <option value="female-driver">Female Chauffeur Request</option>
              <option value="private">Executive Ride</option>
              <option value="special">Special Event / Night Out</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor={`${formId}-location`} className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Pickup Location
            </label>
            <input
              id={`${formId}-location`}
              type="text"
              placeholder="e.g. Scottsdale, PHX Airport"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-midnight/90 border border-white/15 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition"
            />
          </div>
          <div>
            <label htmlFor={`${formId}-datetime`} className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Date & Time
            </label>
            <input
              id={`${formId}-datetime`}
              type="datetime-local"
              value={formData.datetime}
              onChange={(e) => setFormData({ ...formData, datetime: e.target.value })}
              className="w-full bg-midnight/90 border border-white/15 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-4 py-2.5 text-sm text-white outline-none transition"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`${formId}-notes`} className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Special Notes / Hours Needed
          </label>
          <textarea
            id={`${formId}-notes`}
            rows="2"
            placeholder="Itinerary, number of hours, passenger count..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full bg-midnight/90 border border-white/15 focus:border-gold focus:ring-1 focus:ring-gold rounded-lg px-4 py-2 text-sm text-white placeholder-slate-500 outline-none transition"
          ></textarea>
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input
            id={`${formId}-consent`}
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 accent-gold rounded cursor-pointer"
          />
          <label htmlFor={`${formId}-consent`} className="text-[11px] text-slate-400 leading-tight cursor-pointer">
            I agree to receive SMS confirmations from SV RENTAL CAR LLC.
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-gold hover:bg-gold-light text-onyx font-bold text-sm uppercase tracking-wider rounded-lg transition duration-200 shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
        >
          <span>REQUEST RESERVATION</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1.5 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span>Confidential dispatch. Direct response within minutes.</span>
        </p>
      </form>
    </div>
  );
}

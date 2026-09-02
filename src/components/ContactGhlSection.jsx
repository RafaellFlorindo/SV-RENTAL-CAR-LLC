import React from 'react';
import { Calendar, MapPin, Phone, Clock, FileText, Tag } from 'lucide-react';
import { companyInfo } from '../data/company';
import GhlFormEmbed from './GhlFormEmbed';

export default function ContactGhlSection() {
  return (
    <section id="contact-booking" className="py-20 bg-midnight relative border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>RESERVATION & CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            BOOK YOUR LUXURY CHAUFFEUR
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Reserve your date or inquire about custom itineraries. We respond promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Company Details Card (4 cols) */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-card border border-white/10 space-y-6">
            <h3 className="text-lg font-serif font-bold text-white">{companyInfo.name}</h3>
            
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Official Address:</span>
                  <span>{companyInfo.address.full}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Direct Line:</span>
                  <a href={`tel:${companyInfo.phoneRaw}`} className="text-gold hover:underline font-semibold">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Operating Hours:</span>
                  <span>{companyInfo.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Business EIN:</span>
                  <span>{companyInfo.ein}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-midnight border border-gold/20">
              <div className="flex items-center gap-2 text-gold font-bold text-xs mb-1">
                <Tag className="w-3.5 h-3.5" />
                <span>Special Offer</span>
              </div>
              <p className="text-[11px] text-slate-300">
                {companyInfo.discountOffer}.
              </p>
            </div>
          </div>

          {/* GoHighLevel Contact Form Embed Slot (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-card border border-white/10">
            <GhlFormEmbed formId="ghl-contact-form" title="Full Reservation Form" />
          </div>

        </div>

      </div>
    </section>
  );
}

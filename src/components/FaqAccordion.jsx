import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { faqData } from '../data/faq';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-onyx">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>QUESTIONS & ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Everything you need to know about booking private luxury transportation with SV Rental Car LLC.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl bg-card border border-white/10 overflow-hidden transition ${
                  isOpen ? 'border-gold/40 shadow-lg shadow-gold/5' : ''
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-semibold text-base sm:text-lg focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-gold-light' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

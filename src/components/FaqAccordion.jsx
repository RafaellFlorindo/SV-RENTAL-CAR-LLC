import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { faqData } from '../data/faq';
import { companyInfo } from '../data/company';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#FAF8F4] py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <span className="section-kicker text-black/55">Before you book</span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl">Straight answers before you get in.</h2>
          <a href={`tel:${companyInfo.phoneRaw}`} className="mt-8 inline-flex items-center gap-3 border border-black/20 px-5 py-3.5 text-[12px] font-semibold transition hover:border-gold hover:text-gold"><Phone className="h-4 w-4" />Ask about my ride</a>
        </div>

        <div className="border-t border-black/20 lg:col-span-7 lg:col-start-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-black/20">
                <button onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} className="grid w-full grid-cols-[1fr_auto] items-center gap-5 py-6 text-left">
                  <span className="font-serif text-xl font-medium leading-tight sm:text-2xl">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-gold transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <div className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-black/55">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

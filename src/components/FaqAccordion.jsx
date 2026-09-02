import React, { useState } from 'react';
import { ArrowDown, Phone } from 'lucide-react';
import { faqData } from '../data/faq';
import { companyInfo } from '../data/company';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#FBF8F2] py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <span className="section-kicker text-black/55">Good to know</span>
          <h2 className="mt-6 font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl">Questions, answered plainly.</h2>
          <a href={`tel:${companyInfo.phoneRaw}`} className="mt-8 inline-flex items-center gap-3 rounded-full border border-black/20 px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.14em] transition hover:border-gold hover:text-gold"><Phone className="h-4 w-4" />Ask dispatch</a>
        </div>

        <div className="border-t border-black/20 lg:col-span-7 lg:col-start-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-black/20">
                <button onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} className="grid w-full grid-cols-[32px_1fr_auto] items-center gap-3 py-6 text-left">
                  <span className="font-serif text-sm italic text-gold">0{index + 1}</span>
                  <span className="font-serif text-xl font-semibold leading-tight sm:text-2xl">{faq.question}</span>
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-black/15 transition ${isOpen ? 'rotate-180 bg-[#131514] text-white' : ''}`}><ArrowDown className="h-4 w-4" /></span>
                </button>
                {isOpen && <div className="pb-7 pl-[44px] pr-10 text-sm leading-7 text-black/55">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

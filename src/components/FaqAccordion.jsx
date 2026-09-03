import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '../data/faq';
import Reveal from './motion/Reveal';
import { SPRING_SOFT } from '../lib/motion';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white text-navy-950 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#EBF0F7] border border-[#CAD8E8] text-navy-900 text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-gold" />
              <span>QUESTIONS &amp; ANSWERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-navy-900 tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Everything you need to know about booking private luxury transportation with SV Rental Car LLC.
            </p>
          </Reveal>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className={`rounded-lg bg-[#FAF8F5] border transition-colors duration-200 overflow-hidden ${
                  isOpen ? 'border-[#C59A45]/60 shadow-sm' : 'border-[#E9E1D1]'
                }`}>
                  <button
                    onClick={() => toggle(idx)}
                    type="button"
                    aria-expanded={isOpen}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-navy-900 font-semibold text-sm sm:text-base focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={SPRING_SOFT}
                      className="text-gold-dark"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  {/* 21st.dev Spring Smooth Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={SPRING_SOFT}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-[#E9E1D1]/60 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

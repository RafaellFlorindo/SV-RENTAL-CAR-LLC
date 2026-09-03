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
    <section id="faq" className="py-20 lg:py-28 bg-onyx text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>QUESTIONS &amp; ANSWERS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-sm text-slate-400 mt-2 font-light">
              Everything you need to know about booking private luxury transportation with SV Rental Car LLC.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className={`rounded-xl bg-card border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-gold/40 shadow-lg shadow-gold/5' : 'border-white/10'
                }`}>
                  <button
                    onClick={() => toggle(idx)}
                    type="button"
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-white font-semibold text-base sm:text-lg focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={SPRING_SOFT}
                      className="text-gold"
                    >
                      <ChevronDown className="w-5 h-5" />
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
                        <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 font-light">
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

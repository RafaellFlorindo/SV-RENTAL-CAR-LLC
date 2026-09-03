import React, { useState, useId } from 'react';
import { ChevronDown, Phone, Search, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faq';
import { companyInfo } from '../data/company';

const categoryLabels = {
  all: 'All Questions',
  airport: 'Airports & Flights',
  pricing: 'Pricing & Quotes',
  fleet: 'Vehicles & Luggage',
  driver: 'Drivers & Languages',
  booking: 'Booking & Policies'
};

export default function FaqAccordion() {
  const faqSearchInputId = useId();
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="bg-[#FAF8F4] py-20 lg:py-28 border-t border-black/10">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 lg:grid-cols-12 lg:px-8">
        
        {/* Left Column: Context & Contact */}
        <div className="lg:col-span-4">
          <span className="section-kicker text-black/55">Before you book</span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl">
            Straight answers before you get in.
          </h2>
          <p className="mt-5 text-sm leading-7 text-black/55">
            Clear guidelines on flight tracking, fleet capacity, hourly charters, and personal chauffeur requests.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-[#131514] px-5 py-3.5 text-[12px] font-semibold text-white transition hover:bg-gold w-full justify-center sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              <span>Call João directly</span>
            </a>
            <p className="text-[11px] text-black/45">
              Available 24/7 for urgent airport pickups & inquiries.
            </p>
          </div>
        </div>

        {/* Right Column: Filters & Accordion */}
        <div className="lg:col-span-8">
          
          {/* Search Box */}
          <div className="relative mb-6">
            <label htmlFor={faqSearchInputId} className="sr-only">Search questions</label>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
            <input
              id={faqSearchInputId}
              type="search"
              placeholder="Search questions (e.g. flight delay, golf bags, hourly minimum)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-black/15 bg-white py-3 pl-11 pr-4 text-xs text-black placeholder:text-black/40 focus:border-gold focus:outline-none shadow-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 border-b border-black/15 pb-4 mb-4">
            {Object.entries(categoryLabels).map(([catKey, catLabel]) => (
              <button
                key={catKey}
                type="button"
                onClick={() => {
                  setActiveCategory(catKey);
                  setOpenIndex(0);
                }}
                className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.06em] transition ${
                  activeCategory === catKey
                    ? 'bg-gold text-white'
                    : 'bg-[#F1EEE8] text-black/60 hover:bg-black/10'
                }`}
              >
                {catLabel}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="border-t border-black/20">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={faq.question} className="border-b border-black/20">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="grid w-full grid-cols-[1fr_auto] items-center gap-5 py-6 text-left"
                    >
                      <span className="font-serif text-xl font-medium leading-tight sm:text-2xl text-[#131514]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-gold transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="max-w-3xl pb-7 pr-6 text-sm leading-7 text-black/65">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="py-12 text-center text-black/50">
                <HelpCircle className="mx-auto h-8 w-8 text-black/30 mb-2" />
                <p className="text-sm">No questions matched "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-3 text-xs font-semibold text-gold underline"
                >
                  Clear search filters
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

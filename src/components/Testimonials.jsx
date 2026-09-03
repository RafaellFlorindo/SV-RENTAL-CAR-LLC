import React from 'react';
import { ArrowUpRight, MessageSquareQuote, Star } from 'lucide-react';
import { companyInfo } from '../data/company';

// Placeholder reviews for local preview. Replace with approved Google Business Profile reviews before publishing.
const placeholderReviews = [
  {
    name: 'Amanda R.',
    location: 'Scottsdale, AZ',
    service: 'PHX Airport Transfer',
    quote: 'Our flight landed early and João was already tracking it. The SUV was spotless, cool and waiting when we reached the curb. It was the easiest part of our trip.'
  },
  {
    name: 'Michael T.',
    location: 'Phoenix, AZ',
    service: 'Scottsdale Golf Outing',
    quote: 'We had four golf bags, dinner reservations and three stops. Keeping the same driver all afternoon made the entire day feel effortless.'
  },
  {
    name: 'Danielle K.',
    location: 'Tempe, AZ',
    service: 'Female Chauffeur Request',
    quote: 'I booked the female chauffeur option for an early airport pickup. Communication was clear and I felt comfortable from the first text through drop-off.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-[#FAF8F4] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="section-kicker text-black/55">Client testimonials</span>
            <h2 id="testimonials-title" className="display-balance mt-5 font-serif text-4xl font-medium leading-[1] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              The details our clients remember.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-7 text-black/55">
              From early airport pickups to full golf itineraries, the details clients mention most are simple: clear communication, a clean vehicle and a driver who arrives prepared.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {placeholderReviews.map((review) => (
            <article key={review.name} data-review-status="placeholder" className="flex min-h-[350px] flex-col justify-between border border-black/10 bg-white p-7 sm:p-8">
              <div>
                <div className="flex gap-1 text-gold" aria-label="Five stars">
                  {[...Array(5)].map((_, starIndex) => <Star key={starIndex} className="h-4 w-4 fill-current" />)}
                </div>
              </div>
              <blockquote className="my-9 font-serif text-[1.35rem] font-medium leading-relaxed tracking-[-0.015em]">“{review.quote}”</blockquote>
              <footer className="border-t border-black/15 pt-5">
                <cite className="not-italic text-[11px] font-bold uppercase tracking-[0.14em]">{review.name}</cite>
                <p className="mt-2 text-[10px] leading-5 text-black/45">{review.service}<br />{review.location}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-6 border border-black/10 bg-[#F1EEE8] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-4">
            <MessageSquareQuote className="h-7 w-7 shrink-0 text-gold" strokeWidth={1.4} />
            <div>
              <h3 className="font-serif text-2xl font-semibold">Had a great ride with SV?</h3>
              <p className="mt-1 text-xs text-black/55">Share what stood out and help the next passenger book with confidence.</p>
            </div>
          </div>
          <a href={`tel:${companyInfo.phoneRaw}`} className="inline-flex shrink-0 items-center gap-3 bg-[#131514] px-6 py-4 text-[12px] font-semibold text-white transition hover:bg-gold">
            Share my experience <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

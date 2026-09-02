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
    <section id="testimonials" aria-labelledby="testimonials-title" className="bg-[#FBF8F2] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="section-kicker text-black/55">Client testimonials</span>
            <h2 id="testimonials-title" className="display-balance mt-6 font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              The kind of ride people remember for the right reasons.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-7 text-black/55">
              From early airport pickups to full golf itineraries, the details clients mention most are simple: clear communication, a clean vehicle and a driver who arrives prepared.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-black/15 lg:grid-cols-3">
          {placeholderReviews.map((review, index) => (
            <article key={review.name} data-review-status="placeholder" className="flex min-h-[380px] flex-col justify-between bg-[#FBF8F2] p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-gold" aria-label="Five stars">
                  {[...Array(5)].map((_, starIndex) => <Star key={starIndex} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="font-serif text-xl italic text-black/25">0{index + 1}</span>
              </div>
              <blockquote className="my-10 font-serif text-2xl font-semibold leading-snug tracking-[-0.025em]">“{review.quote}”</blockquote>
              <footer className="border-t border-black/15 pt-5">
                <cite className="not-italic text-[11px] font-bold uppercase tracking-[0.14em]">{review.name}</cite>
                <p className="mt-2 text-[10px] leading-5 text-black/45">{review.service}<br />{review.location}</p>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-px flex flex-col gap-6 bg-gold p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div className="flex items-center gap-4">
            <MessageSquareQuote className="h-8 w-8 shrink-0" strokeWidth={1.4} />
            <div>
              <h3 className="font-serif text-2xl font-semibold">Had a great ride with SV?</h3>
              <p className="mt-1 text-xs text-white/75">Share what stood out and help the next passenger book with confidence.</p>
            </div>
          </div>
          <a href={`tel:${companyInfo.phoneRaw}`} className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#131514] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-white hover:text-black">
            Share my experience <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

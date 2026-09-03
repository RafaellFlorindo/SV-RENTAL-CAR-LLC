import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { airportJet, golfCourse, specialOccasion } from '../assets/photography';

const notes = [
  {
    image: airportJet,
    label: 'Airport planning',
    title: 'What to send before a PHX airport pickup',
    text: 'Share the airline, flight number, passenger count and luggage total. Flight tracking helps us adjust when arrival time changes.'
  },
  {
    image: golfCourse,
    label: 'Golf transportation',
    title: 'Planning room for a Scottsdale golf group',
    text: 'Passenger count is only half the equation. Tell us how many full-size golf bags are traveling so we can confirm the cargo setup.'
  },
  {
    image: specialOccasion,
    label: 'Evening itinerary',
    title: 'A smoother night out in Old Town Scottsdale',
    text: 'Keep the same chauffeur for dinner, entertainment and the ride home, without moving the group between different vehicles.'
  }
];

export default function LocalRideNotes() {
  return (
    <section id="ride-notes" className="bg-[#FAF8F4] py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-black/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-kicker text-black/55">Local ride notes</span>
            <h2 className="mt-5 font-serif text-4xl font-medium tracking-[-0.035em] sm:text-5xl">A little planning goes a long way.</h2>
          </div>
          <a href="#faq" className="flex items-center gap-2 text-xs font-semibold text-gold">Read booking answers <ArrowUpRight className="h-4 w-4" /></a>
        </div>

        <div className="grid gap-8 pt-10 lg:grid-cols-3">
          {notes.map((note) => (
            <article key={note.title}>
              <img src={note.image} alt="" width="1400" height="933" loading="lazy" decoding="async" className="h-52 w-full object-cover" />
              <span className="mt-6 block text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">{note.label}</span>
              <h3 className="mt-3 font-serif text-2xl font-medium leading-tight tracking-[-0.02em]">{note.title}</h3>
              <p className="mt-4 text-[13px] leading-6 text-black/55">{note.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageSeo from '../components/PageSeo';

export default function NotFound() {
  return (
    <section className="bg-[#F1EEE8] py-28 text-center">
      <PageSeo title="Page not found | SV Rental Car" description="This page could not be found." path="/404" />
      <div className="mx-auto max-w-lg px-5">
        <span className="section-kicker text-black/55">404</span>
        <h1 className="display-balance mt-5 font-serif text-4xl font-medium tracking-[-0.035em] sm:text-5xl">We could not find that page.</h1>
        <p className="mt-6 text-sm leading-7 text-black/55">The page you are looking for may have moved. Head back home to find your ride.</p>
        <Link to="/" className="mt-9 inline-flex items-center gap-3 bg-[#131514] px-6 py-4 text-[12px] font-semibold text-white transition hover:bg-gold">
          Back to home <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

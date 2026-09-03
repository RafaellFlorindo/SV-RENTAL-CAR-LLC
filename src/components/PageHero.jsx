import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import GhlFormEmbed from './GhlFormEmbed';

export default function PageHero({ breadcrumbs, kicker, title, description, image, imageAlt, formId }) {
  return (
    <section className="relative isolate overflow-hidden bg-[#151715] text-white">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[59%]">
        <img src={image} alt={imageAlt} width="1400" height="933" fetchPriority="high" decoding="async" className="image-reveal h-full w-full object-cover object-[58%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151715] via-[#151715]/55 to-black/10 lg:via-[#151715]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151715]/80 via-transparent to-black/10" />
      </div>

      <div className="relative mx-auto grid min-h-[640px] max-w-[1320px] grid-cols-1 items-end gap-10 px-5 pb-10 pt-14 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-16">
        <div className="lift-in relative z-10 lg:col-span-7 lg:max-w-[720px]">
          {breadcrumbs && (
            <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/50" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <span key={crumb.label} className="flex items-center gap-1.5">
                  {index > 0 && <ChevronRight className="h-3 w-3" />}
                  {crumb.to ? <Link to={crumb.to} className="hover:text-white">{crumb.label}</Link> : <span className="text-white/75">{crumb.label}</span>}
                </span>
              ))}
            </nav>
          )}

          <div className="section-kicker text-white/70">{kicker}</div>
          <h1 className="display-balance mt-7 font-serif text-[2.75rem] font-medium leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[4.2rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-7 border-t border-white/15 pt-6 text-[11px] text-white/60">
            <span className="flex items-center gap-2 text-white">
              <span className="flex text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}</span>5-star client care
            </span>
            <span>Licensed &amp; insured</span>
            <span>Available 24/7 by reservation</span>
          </div>
        </div>

        <div id="reservation" className="lift-in-delay relative z-10 lg:col-span-5 lg:ml-auto lg:w-[420px] lg:self-center">
          <div className="mb-3 border-l-2 border-gold pl-3 text-[11px] font-semibold text-white/70">
            Fast quote, no obligation
          </div>
          <GhlFormEmbed formId={formId} />
        </div>
      </div>
    </section>
  );
}

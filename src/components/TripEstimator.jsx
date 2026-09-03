import React, { useState, useId } from 'react';
import { Calculator, Clock, MapPin, Users, Briefcase, Calendar, ShieldCheck, CheckCircle2, MessageCircle, Phone, ArrowRight, Tag } from 'lucide-react';
import { companyInfo } from '../data/company';

const serviceOptions = [
  { id: 'airport', name: 'Airport Transfer (PHX / SDL / AZA)', base: 125, type: 'flat' },
  { id: 'hourly', name: 'Hourly Dedicated Chauffeur (Min. 4h)', base: 500, perHour: 125, type: 'hourly', defaultHours: 4 },
  { id: 'golf', name: 'Scottsdale Golf Outing & Tournaments', base: 450, type: 'flat' },
  { id: 'executive', name: 'Executive Travel & Corporate Transit', base: 150, type: 'flat' },
  { id: 'events', name: 'VIP Nightlife, Dining & Special Events', base: 400, type: 'flat' },
  { id: 'female-chauffeur', name: 'Dedicated Female Chauffeur Request', base: 140, type: 'flat' },
];

const valleyLocations = [
  'Scottsdale (Old Town / North)',
  'PHX Sky Harbor Airport (Terminals 3 & 4)',
  'Scottsdale Airport (SDL / FBO)',
  'Paradise Valley',
  'Phoenix Downtown / Biltmore',
  'TPC Scottsdale Golf Club',
  'Grayhawk / Troon North Golf',
  'Tempe / ASU Campus',
  'Glendale / State Farm Stadium',
  'Gilbert / Chandler (East Valley)',
  'Other Valley Location'
];

export default function TripEstimator() {
  const serviceSelectId = useId();
  const vehicleSelectId = useId();
  const pickupSelectId = useId();
  const dropoffSelectId = useId();
  const hoursSelectId = useId();
  const dateInputId = useId();
  const timeInputId = useId();
  const passengersSelectId = useId();
  const luggageSelectId = useId();

  const [service, setService] = useState('hourly');
  const [pickup, setPickup] = useState('Scottsdale (Old Town / North)');
  const [dropoff, setDropoff] = useState('PHX Sky Harbor Airport (Terminals 3 & 4)');
  const [hours, setHours] = useState(4);
  const [vehicle, setVehicle] = useState('suv'); // suv, sedan, sprinter
  const [passengers, setPassengers] = useState(2);
  const [luggage, setLuggage] = useState(2);
  const [hasReferral, setHasReferral] = useState(true);
  const [tripDate, setTripDate] = useState('');
  const [tripTime, setTripTime] = useState('');

  // Calculate estimate
  const currentServiceObj = serviceOptions.find((s) => s.id === service) || serviceOptions[0];
  
  let baseEstimate = 0;
  if (currentServiceObj.type === 'hourly') {
    baseEstimate = Math.max(4, hours) * (currentServiceObj.perHour || 125);
  } else {
    baseEstimate = currentServiceObj.base;
  }

  // Vehicle multiplier
  if (vehicle === 'sedan') {
    baseEstimate = Math.round(baseEstimate * 0.9);
  } else if (vehicle === 'sprinter') {
    baseEstimate = Math.round(baseEstimate * 1.6);
  }

  const discountAmount = hasReferral ? Math.round(baseEstimate * 0.1) : 0;
  const finalEstimate = baseEstimate - discountAmount;

  // Build WhatsApp pre-filled text
  const messageBody = encodeURIComponent(
    `Hello SV Chauffeur! I'd like to check availability for a ride in Arizona:\n` +
    `• Service: ${currentServiceObj.name}\n` +
    `• Vehicle: ${vehicle === 'suv' ? 'Cadillac Escalade / Chevy Suburban SUV' : vehicle === 'sedan' ? 'Mercedes-Benz Executive Sedan' : 'Mercedes Executive Sprinter'}\n` +
    `• Pickup: ${pickup}\n` +
    `• Destination: ${dropoff}\n` +
    (currentServiceObj.type === 'hourly' ? `• Duration: ${hours} Hours\n` : '') +
    (tripDate ? `• Date: ${tripDate}\n` : '') +
    (tripTime ? `• Time: ${tripTime}\n` : '') +
    `• Passengers: ${passengers} | Luggage: ${luggage}\n` +
    `• Estimated Quote: ~$${finalEstimate} (includes ${hasReferral ? '10% referral discount' : 'standard rate'})\n` +
    `Please confirm driver availability. Thank you!`
  );

  const whatsappUrl = `https://wa.me/16029215953?text=${messageBody}`;
  const smsUrl = `sms:+16029215953?&body=${messageBody}`;

  return (
    <section id="estimator" className="bg-[#FAF8F4] py-20 lg:py-28 border-b border-black/10">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span className="section-kicker text-black/55">Transparent Fare Estimator</span>
          <h2 className="display-balance mt-5 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Estimate your ride before you book.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/55">
            No surge pricing, no unexpected meter surprises. Configure your itinerary below to see clear, upfront rates with direct dispatch confirmation.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 border border-black/15 shadow-card">
            <h3 className="font-serif text-2xl font-medium tracking-tight mb-6 pb-4 border-b border-black/10 flex items-center gap-2.5">
              <Calculator className="h-5 w-5 text-gold" />
              <span>Configure Your Trip Details</span>
            </h3>

            <div className="space-y-6">
              
              {/* Service Type */}
              <div>
                <label htmlFor={serviceSelectId} className="block text-[11px] font-bold uppercase tracking-[0.08em] text-black/70 mb-2">
                  1. Select Service Type
                </label>
                <select
                  id={serviceSelectId}
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full border border-black/20 bg-[#FAF8F4] p-3.5 text-xs font-semibold text-[#131514] focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Preference */}
              <div>
                <label htmlFor={vehicleSelectId} className="block text-[11px] font-bold uppercase tracking-[0.08em] text-black/70 mb-2">
                  2. Preferred Vehicle Class
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setVehicle('suv')}
                    className={`p-3 text-left border transition ${
                      vehicle === 'suv'
                        ? 'border-gold bg-[#131514] text-white shadow-sm'
                        : 'border-black/15 bg-[#FAF8F4] text-black hover:border-black/30'
                    }`}
                  >
                    <span className="block text-[11px] font-bold">Luxury SUV</span>
                    <span className={`block text-[9px] mt-0.5 ${vehicle === 'suv' ? 'text-white/60' : 'text-black/50'}`}>
                      Escalade / Suburban (1-6)
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVehicle('sedan')}
                    className={`p-3 text-left border transition ${
                      vehicle === 'sedan'
                        ? 'border-gold bg-[#131514] text-white shadow-sm'
                        : 'border-black/15 bg-[#FAF8F4] text-black hover:border-black/30'
                    }`}
                  >
                    <span className="block text-[11px] font-bold">Executive Sedan</span>
                    <span className={`block text-[9px] mt-0.5 ${vehicle === 'sedan' ? 'text-white/60' : 'text-black/50'}`}>
                      Mercedes S-Class (1-3)
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setVehicle('sprinter')}
                    className={`p-3 text-left border transition ${
                      vehicle === 'sprinter'
                        ? 'border-gold bg-[#131514] text-white shadow-sm'
                        : 'border-black/15 bg-[#FAF8F4] text-black hover:border-black/30'
                    }`}
                  >
                    <span className="block text-[11px] font-bold">VIP Sprinter</span>
                    <span className={`block text-[9px] mt-0.5 ${vehicle === 'sprinter' ? 'text-white/60' : 'text-black/50'}`}>
                      Jet Sprinter (Up to 14)
                    </span>
                  </button>
                </div>
              </div>

              {/* Pickup & Drop-off */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={pickupSelectId} className="block text-[11px] font-bold uppercase tracking-[0.08em] text-black/70 mb-2">
                    <MapPin className="inline h-3.5 w-3.5 text-gold mr-1" /> Pickup Location
                  </label>
                  <select
                    id={pickupSelectId}
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full border border-black/20 bg-[#FAF8F4] p-3 text-xs text-[#131514] focus:border-gold focus:outline-none"
                  >
                    {valleyLocations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={dropoffSelectId} className="block text-[11px] font-bold uppercase tracking-[0.08em] text-black/70 mb-2">
                    <MapPin className="inline h-3.5 w-3.5 text-gold mr-1" /> Destination
                  </label>
                  <select
                    id={dropoffSelectId}
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="w-full border border-black/20 bg-[#FAF8F4] p-3 text-xs text-[#131514] focus:border-gold focus:outline-none"
                  >
                    {valleyLocations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Hourly Slider (if hourly selected) */}
              {currentServiceObj.type === 'hourly' && (
                <div className="bg-[#FAF8F4] p-4 border border-black/10">
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor={hoursSelectId} className="text-[11px] font-bold uppercase tracking-[0.08em] text-black/70 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold" /> Dedicated Chauffeur Duration
                    </label>
                    <span className="text-xs font-bold text-gold">{hours} Hours (Min. 4h)</span>
                  </div>
                  <input
                    id={hoursSelectId}
                    type="range"
                    min="4"
                    max="14"
                    step="1"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    className="w-full accent-gold cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-black/45 mt-1 font-mono">
                    <span>4 Hours</span>
                    <span>8 Hours (Full Day)</span>
                    <span>14 Hours (Events)</span>
                  </div>
                </div>
              )}

              {/* Date & Time (Optional) */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={dateInputId} className="block text-[11px] font-bold uppercase tracking-[0.08em] text-black/70 mb-2">
                    <Calendar className="inline h-3.5 w-3.5 text-gold mr-1" /> Estimated Date
                  </label>
                  <input
                    id={dateInputId}
                    type="date"
                    value={tripDate}
                    onChange={(e) => setTripDate(e.target.value)}
                    className="w-full border border-black/20 bg-[#FAF8F4] p-2.5 text-xs text-[#131514] focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={timeInputId} className="block text-[11px] font-bold uppercase tracking-[0.08em] text-black/70 mb-2">
                    <Clock className="inline h-3.5 w-3.5 text-gold mr-1" /> Estimated Time
                  </label>
                  <input
                    id={timeInputId}
                    type="time"
                    value={tripTime}
                    onChange={(e) => setTripTime(e.target.value)}
                    className="w-full border border-black/20 bg-[#FAF8F4] p-2.5 text-xs text-[#131514] focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              {/* Passengers & Luggage */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor={passengersSelectId} className="block text-[11px] font-bold uppercase tracking-[0.08em] text-black/70 mb-1.5">
                    <Users className="inline h-3.5 w-3.5 text-gold mr-1" /> Passengers
                  </label>
                  <select
                    id={passengersSelectId}
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full border border-black/20 bg-[#FAF8F4] p-2.5 text-xs"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 14].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={luggageSelectId} className="block text-[11px] font-bold uppercase tracking-[0.08em] text-black/70 mb-1.5">
                    <Briefcase className="inline h-3.5 w-3.5 text-gold mr-1" /> Luggage / Bags
                  </label>
                  <select
                    id={luggageSelectId}
                    value={luggage}
                    onChange={(e) => setLuggage(Number(e.target.value))}
                    className="w-full border border-black/20 bg-[#FAF8F4] p-2.5 text-xs"
                  >
                    {[0, 1, 2, 3, 4, 5, 6, 8, 12].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Bag / Golf set' : 'Bags / Golf sets'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 10% Referral Discount Switcher */}
              <div className="pt-2">
                <label className="flex items-center gap-3 p-3 bg-gold-bg/40 border border-gold/20 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasReferral}
                    onChange={(e) => setHasReferral(e.target.checked)}
                    className="h-4 w-4 accent-gold"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-black block">Apply 10% Preferred / Referral Discount</span>
                    <span className="text-[11px] text-black/60">Active for new client referrals and return bookings</span>
                  </div>
                </label>
              </div>

            </div>
          </div>

          {/* Results & Dispatch Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#131514] text-white p-7 sm:p-9 shadow-editorial sticky top-24">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold">Estimated Chauffeur Rate</span>
              <span className="inline-flex items-center gap-1 text-[10px] text-white/60 bg-white/10 px-2.5 py-1">
                <ShieldCheck className="h-3 w-3 text-gold" /> Guaranteed Flat Quote
              </span>
            </div>

            {/* Price Box */}
            <div className="py-6 border-b border-white/15">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  ${finalEstimate}
                </span>
                <span className="text-xs text-white/55">
                  {currentServiceObj.type === 'hourly' ? `est. for ${hours} hours` : 'est. one-way / transfer'}
                </span>
              </div>

              {hasReferral && (
                <p className="mt-2 text-xs text-gold flex items-center gap-1.5 font-medium">
                  <Tag className="h-3.5 w-3.5" /> Includes 10% (${discountAmount}) preferred discount
                </p>
              )}
            </div>

            {/* Summary details */}
            <div className="py-5 space-y-3 text-xs text-white/70 border-b border-white/15">
              <div className="flex justify-between">
                <span className="text-white/45">Service:</span>
                <span className="font-semibold text-white text-right">{currentServiceObj.name.split('(')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/45">Vehicle:</span>
                <span className="font-semibold text-white">
                  {vehicle === 'suv' ? 'Full-Size VIP SUV' : vehicle === 'sedan' ? 'Executive Sedan' : 'VIP Sprinter Van'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/45">Pickup:</span>
                <span className="font-semibold text-white text-right max-w-[200px] truncate">{pickup}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/45">Drop-off:</span>
                <span className="font-semibold text-white text-right max-w-[200px] truncate">{dropoff}</span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="py-5">
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/45 mb-2.5">
                Always Included in Rate:
              </span>
              <ul className="space-y-2 text-[11px] text-white/75">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span>Real-time flight monitoring & early curbside staging</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span>Zero surge pricing, zero surprise traffic fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                  <span>Chilled artisan water & multi-device fast chargers</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 bg-gold px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-lg transition hover:bg-gold-light"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Text Details via WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={smsUrl}
                  className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 py-3 text-[11px] font-semibold text-white transition hover:bg-white/15"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-gold" />
                  <span>Send via SMS</span>
                </a>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-2 border border-white/20 bg-white/5 py-3 text-[11px] font-semibold text-white transition hover:bg-white/15"
                >
                  <Phone className="h-3.5 w-3.5 text-gold" />
                  <span>Call Dispatch</span>
                </a>
              </div>

              <a
                href="#reservation"
                className="block text-center pt-2 text-[11px] text-white/50 hover:text-white transition underline underline-offset-4"
              >
                Or submit official reservation form below ↓
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

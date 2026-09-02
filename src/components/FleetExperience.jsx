import React, { useState } from 'react';
import { Shield, Sparkles, Coffee, Users, Briefcase, ArrowRight, Check } from 'lucide-react';
import { fleetData } from '../data/fleet';

export default function FleetExperience() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredFleet = activeTab === 'all'
    ? fleetData
    : fleetData.filter(v => v.type === activeTab);

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-onyx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-bold uppercase tracking-widest">
              <Shield className="w-3.5 h-3.5" />
              <span>FIRST-CLASS VEHICLES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              FROM RESERVATION TO FIRST-CLASS DESTINATION
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              See how our meticulous attention to detail elevates your journey. Every vehicle in our fleet is sanitized, thoroughly inspected, and outfitted for ultimate passenger comfort.
            </p>

            {/* 2 Key Feature Highlight Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-card border border-white/5">
                <div className="text-gold font-bold text-sm uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Cabin Sanitization</span>
                </div>
                <p className="text-xs text-slate-400">Pristine leather, climate pre-set, and spotless interior before every ride.</p>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white/5">
                <div className="text-gold font-bold text-sm uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Coffee className="w-4 h-4" />
                  <span>VIP Amenities</span>
                </div>
                <p className="text-xs text-slate-400">Complimentary chilled artisan water, charging cables, and quiet cabin.</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#reservation"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-lg border border-white/10 transition"
              >
                <span>Reserve Your Fleet Vehicle</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>

          {/* Right Showcase (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-midnight rounded-2xl p-6 border border-white/10 shadow-2xl">
              
              {/* Tab Selector */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-white/10 pb-4">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                    activeTab === 'all'
                      ? 'bg-gold text-onyx shadow-md'
                      : 'bg-card text-slate-300 hover:text-white'
                  }`}
                >
                  All Vehicles
                </button>
                <button
                  onClick={() => setActiveTab('suv')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                    activeTab === 'suv'
                      ? 'bg-gold text-onyx shadow-md'
                      : 'bg-card text-slate-300 hover:text-white'
                  }`}
                >
                  Luxury Executive SUVs
                </button>
                <button
                  onClick={() => setActiveTab('sedan')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                    activeTab === 'sedan'
                      ? 'bg-gold text-onyx shadow-md'
                      : 'bg-card text-slate-300 hover:text-white'
                  }`}
                >
                  Premium Sedans
                </button>
              </div>

              {/* Vehicle Items */}
              <div className="space-y-6">
                {filteredFleet.map((v) => (
                  <div key={v.id} className="rounded-xl bg-card border border-white/5 overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-12">
                      <div className="sm:col-span-6 h-48 sm:h-auto relative overflow-hidden">
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="sm:col-span-6 p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-serif font-bold text-lg text-white">{v.name}</h4>
                            <span className="text-xs text-gold font-bold">{v.category}</span>
                          </div>
                          <p className="text-xs text-slate-400 mb-4">{v.description}</p>
                          
                          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-4">
                            <span className="flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5 text-gold" /> {v.passengers}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Briefcase className="w-3.5 h-3.5 text-gold" /> {v.luggage}
                            </span>
                          </div>
                        </div>
                        <a
                          href="#reservation"
                          className="text-xs font-bold text-gold hover:text-gold-light flex items-center gap-1"
                        >
                          <span>Select This Vehicle</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

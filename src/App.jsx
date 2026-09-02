import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesGrid from './components/ServicesGrid';
import PromoBanner from './components/PromoBanner';
import ComparisonSection from './components/ComparisonSection';
import WhyUs from './components/WhyUs';
import AboutStory from './components/AboutStory';
import ServiceAreas from './components/ServiceAreas';
import FaqAccordion from './components/FaqAccordion';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-gold selection:text-navy-950">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <PromoBanner />
        <ComparisonSection />
        <WhyUs />
        <AboutStory />
        <ServiceAreas />
        <FaqAccordion />
      </main>
      <Footer />
    </div>
  );
}

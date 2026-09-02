import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesGrid from './components/ServicesGrid';
import PromoBanner from './components/PromoBanner';
import FleetExperience from './components/FleetExperience';
import WhyUs from './components/WhyUs';
import AboutStory from './components/AboutStory';
import ServiceAreas from './components/ServiceAreas';
import FaqAccordion from './components/FaqAccordion';
import ContactGhlSection from './components/ContactGhlSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-onyx text-slate-200 antialiased font-sans selection:bg-gold selection:text-onyx">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <PromoBanner />
        <FleetExperience />
        <WhyUs />
        <AboutStory />
        <ServiceAreas />
        <FaqAccordion />
        <ContactGhlSection />
      </main>
      <Footer />
    </div>
  );
}

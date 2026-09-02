import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesGrid from './components/ServicesGrid';
import PromoBanner from './components/PromoBanner';
import ComparisonSection from './components/ComparisonSection';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import AboutStory from './components/AboutStory';
import ServiceAreas from './components/ServiceAreas';
import FaqAccordion from './components/FaqAccordion';
import Footer from './components/Footer';
import SeoStructuredData from './components/SeoStructuredData';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] text-[#131514] font-sans">
      <SeoStructuredData />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <PromoBanner />
        <ComparisonSection />
        <WhyUs />
        <Testimonials />
        <AboutStory />
        <ServiceAreas />
        <FaqAccordion />
      </main>
      <Footer />
    </div>
  );
}

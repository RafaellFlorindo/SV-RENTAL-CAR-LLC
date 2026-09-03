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
import ScrollProgress from './components/motion/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-onyx text-slate-200 font-sans selection:bg-gold selection:text-onyx relative">
      {/* 21st.dev Top Scroll Depth Tracker */}
      <ScrollProgress />
      
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

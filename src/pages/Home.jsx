import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ServicesGrid from '../components/ServicesGrid';
import RideOptions from '../components/RideOptions';
import PromoBanner from '../components/PromoBanner';
import ComparisonSection from '../components/ComparisonSection';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import JourneyMoments from '../components/JourneyMoments';
import LocalRideNotes from '../components/LocalRideNotes';
import AboutStory from '../components/AboutStory';
import ServiceAreas from '../components/ServiceAreas';
import FaqAccordion from '../components/FaqAccordion';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <JourneyMoments />
      <ServicesGrid />
      <WhyUs />
      <Testimonials />
      <RideOptions />
      <ComparisonSection />
      <PromoBanner />
      <LocalRideNotes />
      <AboutStory />
      <ServiceAreas />
      <FaqAccordion />
    </>
  );
}

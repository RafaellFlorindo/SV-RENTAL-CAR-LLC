import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import JourneyMoments from '../components/JourneyMoments';
import ServicesGrid from '../components/ServicesGrid';
import FleetExperience from '../components/FleetExperience';
import TripEstimator from '../components/TripEstimator';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import RideOptions from '../components/RideOptions';
import ComparisonSection from '../components/ComparisonSection';
import PromoBanner from '../components/PromoBanner';
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
      <FleetExperience />
      <TripEstimator />
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

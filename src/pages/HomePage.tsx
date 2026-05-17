import React from 'react';

// Components
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import OurWorkSection from '../components/OurWork';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <OurWorkSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default Home;
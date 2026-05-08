import React from 'react';

// Components
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  return (
    <>
      {/* We use an empty fragment <></> here because the <main> tag 
        and Navbar are already handling the overall layout in App.tsx 
      */}
      <Hero />
      <ServicesSection />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default Home;
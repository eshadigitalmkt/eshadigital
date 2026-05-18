import React from 'react';
import { Helmet } from 'react-helmet-async';

// Components
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import TestimonialSection from '../components/TestimonialSection';
import ContactSection from '../components/ContactSection';
import OurWorkSection from '../components/OurWork';

const Home: React.FC = () => {
  // Schema.org Structured Data for Local SEO (Helps Google understand your business)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ESHA Digital",
    "image": "https://yourwebsite.com/EshaLogoWhite.png", // Replace with your actual logo URL
    "description": "Full-Service Digital Marketing, Branding, and Web Development Agency based in Hyderabad.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kondapur",
      "addressRegion": "Hyderabad",
      "addressCountry": "IN"
    },
    "telephone": "+91 9980962504",
    "email": "info@vasishtha.co",
    "url": "https://yourwebsite.com", // Replace with your actual URL
    "sameAs": [
      "https://www.facebook.com/yourprofile",
      "https://www.instagram.com/yourprofile",
      "https://www.linkedin.com/company/yourprofile"
    ],
    "priceRange": "$$"
  };

  return (
    <>
      {/* =========================================
          SEO METADATA & HEAD TAGS
      ========================================= */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>ESHA Digital | Top Marketing & Web Development Agency in Hyderabad</title>
        <meta name="title" content="ESHA Digital | Top Marketing & Web Development Agency in Hyderabad" />
        <meta 
          name="description" 
          content="Partner with ESHA Digital, a premier digital marketing and web development agency in Hyderabad. We specialize in branding, SEO, social media, and app development to scale your business." 
        />
        <meta name="keywords" content="Digital Marketing Agency Hyderabad, Web Development Hyderabad, Branding Agency, Social Media Marketing, SEO services, App Development, Paid Advertising" />
        
        {/* Canonical URL to prevent duplicate content issues */}
        <link rel="canonical" href="https://yourwebsite.com/" />

        {/* Open Graph / Facebook (How it looks when shared on Facebook/LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="ESHA Digital | Creative & Human Development Agency" />
        <meta property="og:description" content="We help businesses build their identity, grow their digital presence, generate leads, and scale through strategic marketing solutions." />
        <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" /> {/* Add a nice 1200x630 banner image here */}

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="ESHA Digital | Creative & Human Development Agency" />
        <meta property="twitter:description" content="We help businesses build their identity, grow their digital presence, generate leads, and scale through strategic marketing solutions." />
        <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />

        {/* Injecting Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* =========================================
          PAGE COMPONENTS
      ========================================= */}
      <main className="w-full bg-[#f6f7fb]">
        <Hero />
        <ServicesSection />
        <AboutSection />
        <OurWorkSection />
        <TestimonialSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
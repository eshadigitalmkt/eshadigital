"use client";

import React from "react";
import AnimatedText from "../components/AnimatedText";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; // <-- Imported Helmet for SEO

const ContactPage: React.FC = () => {
  // Schema.org Structured Data for Local Business & Contact Info
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ESHA Digital",
    "image": "https://yourwebsite.com/EshaLogoWhite.png",
    "description": "Full-Service Digital Marketing, Branding, and Web Development Agency based in Hyderabad.",
    "telephone": "+91 9980962504",
    "email": "info@eshadigital.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tech Hub, Madhapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500081",
      "addressCountry": "IN"
    },
    "url": "https://yourwebsite.com/contact",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9980962504",
      "contactType": "customer service",
      "email": "info@eshadigital.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    }
  };

  return (
    <>
      {/* =========================================================
          SEO METADATA & HEAD TAGS
      ========================================================= */}
      <Helmet>
        <title>Contact Us | ESHA Digital - Marketing & Web Agency in Hyderabad</title>
        <meta name="title" content="Contact Us | ESHA Digital - Marketing & Web Agency in Hyderabad" />
        <meta 
          name="description" 
          content="Get in touch with ESHA Digital. Call us, email us, or fill out our contact form to discuss your branding, marketing, and web development needs in Hyderabad." 
        />
        <meta name="keywords" content="Contact ESHA Digital, Marketing Agency Hyderabad contact, Hire Web Developers, Branding Agency Contact, Madhapur Tech Hub" />
        
        <link rel="canonical" href="https://yourwebsite.com/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta property="og:title" content="Contact Us | ESHA Digital" />
        <meta property="og:description" content="Did we spark your curiosity? Let's talk about your next digital project. Get in touch with our team today." />
        <meta property="og:image" content="https://yourwebsite.com/contact-og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/contact" />
        <meta property="twitter:title" content="Contact Us | ESHA Digital" />
        <meta property="twitter:description" content="Did we spark your curiosity? Let's talk about your next digital project. Get in touch with our team today." />
        <meta property="twitter:image" content="https://yourwebsite.com/contact-og-image.jpg" />

        {/* Injecting Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(contactStructuredData)}
        </script>
      </Helmet>

      <div className="bg-[#f6f7fb] min-h-screen pb-24 selection:bg-[#fcba00]/30 overflow-hidden relative">
        
        {/* BACKGROUND GLOW */}

        {/* =========================================================
            HERO SECTION
        ========================================================= */}

        <section className="flex flex-col items-center justify-center text-[#192747] py-20 px-6 overflow-hidden">
          
          {/* TITLE */}
          <div className="text-center mb-8 relative leading-[1] uppercase">
            
            {/* LINE 1 */}
            <div className="overflow-hidden pb-3 flex items-center justify-center flex-wrap gap-x-4">
              <AnimatedText
                text="DID WE"
                delay={0}
                className="
                  text-4xl
                  md:text-6xl
                  lg:text-7xl
                  font-light
                  tracking-[0.12em]
                  text-[#192747]
                "
              />

              <AnimatedText
                text="SPARK"
                delay={0.35}
                className="
                  text-4xl
                  md:text-6xl
                  lg:text-7xl
                  font-black
                  tracking-tight
                  text-[#192747]
                "
              />
            </div>

            {/* LINE 2 */}
            <div className="overflow-hidden pb-3 flex items-center justify-center flex-wrap gap-x-4">
              <AnimatedText
                text="YOUR"
                delay={0.7}
                className="
                  text-4xl
                  md:text-6xl
                  lg:text-7xl
                  font-light
                  tracking-[0.12em]
                  text-[#192747]
                "
              />

              <AnimatedText
                text="CURIOSITY?"
                delay={1}
                className="
                  text-4xl
                  md:text-6xl
                  lg:text-7xl
                  font-black
                  tracking-tight
                  text-[#192747]
                "
              />
            </div>
          </div>

          {/* QUOTE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 1.3,
              duration: 1,
              ease: "easeOut",
            }}
            className="relative flex flex-col items-center mt-4"
          >
            {/* ARROW */}

            {/* TEXT */}
          
          </motion.div>
        </section>

        {/* =========================================================
            CONTACT SECTION
        ========================================================= */}

        <section className="max-w-6xl mx-auto px-6 mt-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* LEFT COLUMN */}
            <div className="flex flex-col">
              <p
                className="
                  text-2xl
                  md:text-3xl
                  font-light
                  text-[#192747]
                  leading-snug
                  mb-8
                  font-serif
                "
              >
                Come visit us, give us a call or fill out this form to start a discussion!
              </p>

              {/* CONTACT BOX */}
              <div
                className="
                  bg-[#192747]
                  text-white
                  flex-grow
                  flex
                  flex-col
                  rounded-[2rem]
                  overflow-hidden
                  shadow-[0_20px_60px_rgba(25,39,71,0.2)]
                "
              >
                <div className="p-10 space-y-10">
                  
                  {/* EMAIL */}
                  <div className="flex items-start gap-6">
                    <svg
                      className="w-8 h-8 shrink-0 mt-1 text-[#fcba00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>

                    <p className="text-xl font-light tracking-wide">
                      info@eshadigital.com
                    </p>
                  </div>

                  {/* ADDRESS */}
                  <div className="flex items-start gap-6">
                    <svg
                      className="w-8 h-8 shrink-0 mt-1 text-[#fcba00]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <div className="space-y-1">
                      <p className="text-xl font-medium tracking-wide">
                        Esha Digital Agency
                      </p>

                      <p className="text-lg font-light text-white/70">
                        Tech Hub, Madhapur
                      </p>

                      <p className="text-lg font-light text-white/70">
                        Hyderabad, Telangana
                      </p>

                      <p className="text-lg font-light text-white/70">
                        500081 IND
                      </p>
                    </div>
                  </div>
                </div>

                {/* MAP */}
                <div
                  className="
                    w-full
                    h-64
                    bg-[#14203d]
                    mt-auto
                    relative
                    overflow-hidden
                    border-t
                    border-white/10
                  "
                >
                  <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/40 text-sm uppercase tracking-widest">
                      [ Map Integration Here ]
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col">
              <form
                className="space-y-10"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* NAME */}
                <div className="flex flex-col">
                  <label
                    className="
                      text-xs
                      tracking-widest
                      text-[#192747]
                      uppercase
                      mb-2
                    "
                  >
                    Last Name / First Name*
                  </label>

                  <input
                    type="text"
                    required
                    className="
                      w-full
                      border-b
                      border-[#192747]/20
                      py-3
                      bg-transparent
                      focus:outline-none
                      focus:border-[#fcba00]
                      transition-all
                      duration-300
                      text-[#192747]
                    "
                  />
                </div>

                {/* EMAIL + PHONE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label
                      className="
                        text-xs
                        tracking-widest
                        text-[#192747]
                        uppercase
                        mb-2
                      "
                    >
                      Email*
                    </label>

                    <input
                      type="email"
                      required
                      className="
                        w-full
                        border-b
                        border-[#192747]/20
                        py-3
                        bg-transparent
                        focus:outline-none
                        focus:border-[#fcba00]
                        transition-all
                        duration-300
                        text-[#192747]
                      "
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      className="
                        text-xs
                        tracking-widest
                        text-[#192747]
                        uppercase
                        mb-2
                      "
                    >
                      Phone*
                    </label>

                    <input
                      type="tel"
                      required
                      className="
                        w-full
                        border-b
                        border-[#192747]/20
                        py-3
                        bg-transparent
                        focus:outline-none
                        focus:border-[#fcba00]
                        transition-all
                        duration-300
                        text-[#192747]
                      "
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col">
                  <label
                    className="
                      text-xs
                      tracking-widest
                      text-[#192747]
                      uppercase
                      mb-2
                    "
                  >
                    Message
                  </label>

                  <textarea
                    rows={4}
                    className="
                      w-full
                      border-b
                      border-[#192747]/20
                      py-3
                      bg-transparent
                      focus:outline-none
                      focus:border-[#fcba00]
                      transition-all
                      duration-300
                      resize-y
                      text-[#192747]
                    "
                  />
                </div>

                {/* CONSENT */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      required
                      className="
                        mt-1
                        w-4
                        h-4
                        accent-[#fcba00]
                        cursor-pointer
                      "
                    />

                    <span
                      className="
                        text-sm
                        text-[#192747]/70
                        group-hover:text-[#fcba00]
                        transition-colors
                      "
                    >
                      I consent to the use of my personal data in order to respond
                      to my request
                    </span>
                  </label>

                  <p
                    className="
                      text-[10px]
                      leading-relaxed
                      text-[#192747]/50
                      text-justify
                    "
                  >
                    ESHA Digital Marketing undertakes not to use your information
                    for any purpose other than to respond to your request. You
                    have the right to access, modify, rectify and delete data
                    concerning you.
                  </p>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    w-full
                    bg-[#192747]
                    text-white
                    font-bold
                    tracking-widest
                    uppercase
                    py-5
                    rounded-full
                    hover:bg-[#fcba00]
                    hover:text-[#192747]
                    transition-all
                    duration-300
                  "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // <-- Imported Helmet for SEO
import HistorySection from "../components/AboutPage/HistorySection";
import ContactSection from "../components/ContactSection";
import AnimatedText from "../components/AnimatedText";
import SubhashImage from "../assets/Subhash image.jpg"
import LathaImage from "../assets/Latha mam image.jpg"
import SaiRamImage from "../assets/Sai Ram image.jpg"

/* =========================================================
   HERO SECTION
========================================================= */

const HeroSection: React.FC = () => {
  return (
    <section
      className="
        relative
        flex
        flex-col
        items-center
        justify-center
        py-24
        md:py-32
        bg-[#f6f7fb]
        px-4
        sm:px-6
        text-center
        overflow-hidden
      "
    >
      {/* TITLE */}
      <div className="leading-[1] uppercase relative z-10">
        {/* LINE 1 */}
        <div className="overflow-hidden pb-3">
          <AnimatedText
            text="SHARED IDEAS"
            delay={0}
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-[0.14em]
              text-[#192747]
            "
          />
        </div>

        {/* LINE 2 */}
        <div className="overflow-hidden pb-3 flex items-center justify-center gap-x-2 sm:gap-x-4 flex-wrap">
          <AnimatedText
            text="A"
            delay={0.4}
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl
              font-light
              tracking-wide
              text-[#192747]
            "
          />

          <AnimatedText
            text="COMMITTED"
            delay={0.55}
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
              text-[#192747]
            "
          />

          <AnimatedText
            text="TEAM!"
            delay={0.9}
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl
              font-light
              tracking-wide
              text-[#192747]
            "
          />
        </div>
      </div>

      {/* SUBTITLE */}
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
          delay: 1.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="mt-10 md:mt-14 flex flex-col items-center relative z-10"
      >
        <p
          className="
            italic
            text-base
            sm:text-lg
            md:text-xl
            font-serif
            text-[#192747]/80
          "
        >
          "Creative minds. Strategic growth."
        </p>

        <p
          className="
            italic
            text-sm
            sm:text-base
            md:text-lg
            font-serif
            text-[#192747]/60
            mt-1
          "
        >
          ESHA Digital
        </p>
      </motion.div>
    </section>
  );
};

/* =========================================================
   TEAM SECTION
========================================================= */

const teamMembers = [
  {
    name: "Subhash",
    role: "HEAD OF MARKETING",

    image: SubhashImage,

  },
  {
    name: "Latha",
    role: "HEAD OF CLIENTS",

    image: LathaImage,

  },
  {
    name: "Sai Ram",
    role: "HEAD OF DIGITAL MARKETING",

    image: SaiRamImage,

  },
];

const TeamSection: React.FC = () => {
  return (
    <section
      className="
        bg-[#192747]
        text-white
        py-20
        md:py-24
        px-6
        md:px-12
        lg:px-24
        overflow-hidden
        relative
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          bottom-[-200px]
          right-[-100px]
          w-[400px]
          h-[400px]
          bg-[#fcba00]/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 relative z-10">
        {/* LEFT */}
        <div className="lg:w-1/3 flex flex-col pt-4 md:pt-8">
          <h2
            className="
              flex
              flex-col
              flex-wrap
              gap-y-1
              sm:gap-y-2
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-light
              uppercase
              tracking-wider
            "
          >
            <span>THE</span>
            <span
              className="
                font-bold
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                tracking-tight
                leading-none
                text-[#fcba00]
              "
            >
              ESHA DIGITAL
            </span>
            <span>TEAM</span>
          </h2>

          {/* QUOTE */}
          <div className="flex items-start gap-4 mt-10 mb-12 md:mb-16 relative pl-4 border-l-2 border-[#fcba00]/50">
            <div>
              <p
                className="
                  italic
                  text-base
                  sm:text-lg
                  md:text-xl
                  font-serif
                  text-white
                "
              >
                "Without creativity, strategy is invisible."
              </p>
              <p
                className="
                  italic
                  text-sm
                  sm:text-base
                  text-white/60
                  mt-1
                  font-serif
                "
              >
                ESHA Digital
              </p>
            </div>
          </div>

          <p
            className="
              text-base
              sm:text-lg
              md:text-xl
              font-light
              leading-relaxed
              text-white/80
              lg:pr-8
            "
          >
            The team is built on creativity, strategy, and technology —
            combining expertise to help brands grow digitally.
          </p>
        </div>

        {/* CARDS */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 pt-8 lg:pt-0">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`
                relative
                group
                h-[400px]
                sm:h-[450px]
                md:h-[600px]
                w-full
                ${index === 1 ? "md:mt-24" : ""}
              `}
            >
              {/* CORNER ACCENTS */}
              {(index === 0 || index === 2) && (
                <div
                  className="
                    absolute
                    -top-3
                    -left-3
                    w-10
                    h-10
                    border-t-[3px]
                    border-l-[3px]
                    border-[#fcba00]
                    z-10
                    pointer-events-none
                  "
                />
              )}

              {/* CARD */}
              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  bg-[#14203d]
                  rounded-[2rem]
                  border
                  border-white/10
                  shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                "
              >
                {/* IMAGE */}
                <img
  src={member.image}
  alt={member.name}
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    -translate-y-16
    grayscale
    opacity-70
    group-hover:grayscale-0
    group-hover:opacity-100
    transition-all
    duration-700
    ease-in-out
  "
/>

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#192747]
                    via-[#192747]/80
                    to-transparent
                    opacity-100
                  "
                />

                {/* CONTENT */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-6
                    flex
                    flex-col
                    items-center
                    text-center
                    pb-8
                  "
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p
                    className="
                      text-[10px]
                      md:text-xs
                      tracking-widest
                      text-[#fcba00]
                      uppercase
                      mb-4
                      leading-relaxed
                      max-w-[80%]
                      font-bold
                    "
                  >
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   REASON SECTION
========================================================= */

const ReasonSection: React.FC = () => {
  return (
    <section
      className="
        bg-[#f6f7fb]
        text-[#192747]
        py-20
        md:py-24
        px-6
        md:px-12
        lg:px-24
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col">
          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-light
              uppercase
              tracking-wide
              leading-none
            "
          >
            OUR <br />
            <span className="font-bold mt-2 block">
              REASON FOR <br /> BEING
            </span>
          </h2>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex flex-col justify-end">
          <p
            className="
              text-base
              sm:text-lg
              md:text-xl
              font-light
              leading-relaxed
              text-[#192747]/75
              mb-10
              md:mb-12
            "
          >
            Our purpose is deeply rooted in helping businesses create
            distinctive brands that evoke emotion and meaningful connection.
            <br />
            <br />
            We believe in{" "}
            <strong className="font-bold text-[#192747]">
              strategic, responsible, and impactful communication
            </strong>{" "}
            that helps brands stand out and reach the right audience.
          </p>

          <Link
            to="/services"
            className="
              group
              inline-flex
              items-center
              gap-3
              sm:gap-4
              text-lg
              sm:text-xl
              font-bold
              uppercase
              tracking-wider
              hover:text-[#fcba00]
              transition-colors
              w-fit
            "
          >
            Explore Esha Digital Services
            <svg
              className="
                w-5
                h-5
                sm:w-6
                sm:h-6
                transform
                group-hover:translate-x-2
                transition-transform
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   MAIN PAGE WITH SEO
========================================================= */

export default function AboutPage() {
  // Schema.org Structured Data specifically for the About Page
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "ESHA Digital",
      "description": "The team is built on creativity, strategy, and technology — combining expertise to help brands grow digitally.",
      "url": "https://yourwebsite.com/about",
      "logo": "https://yourwebsite.com/EshaLogoWhite.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kondapur",
        "addressRegion": "Hyderabad",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About Us | ESHA Digital - Creative Agency in Hyderabad</title>
        <meta name="title" content="About Us | ESHA Digital - Creative Agency in Hyderabad" />
        <meta
          name="description"
          content="Learn about ESHA Digital's story, our reason for being, and meet our committed team of creative marketing and web development experts."
        />
        <meta name="keywords" content="About ESHA Digital, Digital Marketing Team Hyderabad, Web Development Experts, Creative Agency Story, Branding Specialists" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/about" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta property="og:title" content="About Us | ESHA Digital - Creative Agency" />
        <meta property="og:description" content="Learn about ESHA Digital's story, our reason for being, and meet our committed team of creative experts." />
        <meta property="og:image" content="https://yourwebsite.com/about-og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/about" />
        <meta property="twitter:title" content="About Us | ESHA Digital - Creative Agency" />
        <meta property="twitter:description" content="Learn about ESHA Digital's story, our reason for being, and meet our committed team of creative experts." />
        <meta property="twitter:image" content="https://yourwebsite.com/about-og-image.jpg" />

        {/* Injecting Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(aboutStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#f6f7fb] w-full">
        <HeroSection />
        <TeamSection />
        <ReasonSection />
        <HistorySection />
        <ContactSection />
      </div>
    </>
  );
}
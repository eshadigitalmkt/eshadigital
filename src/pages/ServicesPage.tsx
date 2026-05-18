"use client";


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // <-- Imported Helmet for SEO
import ContactSection from "../components/ContactSection";
import AnimatedText from "../components/AnimatedText"; // <-- Added missing import
import WebDevImage from "../assets/web-development-service.jpg"
import SMMImage from "../assets/smm1.jpg"
import BrandIdentity from "../assets/Brand-Identity.jpg"
import SEOImage from "../assets/seo.jpg"
import PPCImage from "../assets/AD-Campaign.jpg"

const services = [
  {
    step: "01",
    title: "Brand Identity",
    slug: "brand-identity",
    description:
      "We create memorable logos, visual identities, and brand systems that define how your business is seen and remembered.",
    image:BrandIdentity,
  },
  {
    step: "02",
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    description:
      "We build your online presence with engaging content, creative campaigns, and strategies that grow your audience.",
    image:SMMImage,
  },
  {
    step: "03",
    title: "Web Development",
    slug: "web-development",
    description:
      "We design fast, modern, and conversion-focused websites that showcase your brand professionally.",
    image:WebDevImage,
  },
  {
    step: "04",
    title: "App Development",
    slug: "app-development",
    description:
      "We create mobile applications that help businesses stay connected with customers through seamless digital experiences.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop",
  },
  {
    step: "05",
    title: "Search Engine Optimization",
    slug: "search-engine-optimization",
    description:
      "We optimize your website to rank higher on search engines and attract long-term organic traffic.",
    image:SEOImage,
  },
  {
    step: "06",
    title: "Paid Advertising / PPC",
    slug: "paid-advertising",
    description:
      "We run high-performing Google and Meta ad campaigns focused on leads, sales, and business growth.",
    image:PPCImage,
  },
];

const ServicesPage = () => {
  // Schema.org Structured Data to list your specific services for Google
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.title,
      "description": service.description,
      "url": `https://yourwebsite.com/services/${service.slug}`
    }))
  };

  return (
    <>
      {/* =========================================================
          SEO METADATA & HEAD TAGS
      ========================================================= */}
      <Helmet>
        <title>Our Services | ESHA Digital - Full-Service Marketing Agency</title>
        <meta name="title" content="Our Services | ESHA Digital - Full-Service Marketing Agency" />
        <meta 
          name="description" 
          content="Explore ESHA Digital's growth-driven services including Brand Identity, Social Media Marketing, Web & App Development, SEO, and Paid Advertising (PPC)." 
        />
        <meta name="keywords" content="Brand Identity, Social Media Marketing, Web Development, App Development, Search Engine Optimization, PPC Ads, Digital Marketing Services" />
        
        <link rel="canonical" href="https://yourwebsite.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:title" content="Our Services | ESHA Digital" />
        <meta property="og:description" content="We help businesses build their identity, grow their digital presence, generate leads, and scale through strategic marketing solutions." />
        <meta property="og:image" content="https://yourwebsite.com/services-og-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/services" />
        <meta property="twitter:title" content="Our Services | ESHA Digital" />
        <meta property="twitter:description" content="We help businesses build their identity, grow their digital presence, generate leads, and scale through strategic marketing solutions." />
        <meta property="twitter:image" content="https://yourwebsite.com/services-og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify(servicesStructuredData)}
        </script>
      </Helmet>

      <div className="bg-[#f6f7fb] text-[#192747] overflow-hidden">
        {/* =========================================================
            HERO SECTION
        ========================================================= */}

        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden -translate-y-10">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* LABEL */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                uppercase
                tracking-[0.4em]
                text-sm
                text-[#192747]/50
                mb-6
              "
            >
              Full-Service Marketing Agency
            </motion.p>

            {/* TITLE */}
            <motion.div className="leading-[1] uppercase relative z-10">
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
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="
                mt-10
                text-lg
                md:text-xl
                text-[#192747]/65
                max-w-3xl
                mx-auto
                leading-relaxed
              "
            >
              We help businesses build their identity,
              grow their digital presence, generate leads,
              and scale through strategic marketing solutions.
            </motion.p>
          </div>
        </section>

        {/* =========================================================
            SERVICES SECTION
        ========================================================= */}

        <section className="px-6 md:px-10 lg:px-20 pb-32 relative">
          {/* SECTION HEADER */}
          <div className="max-w-7xl mx-auto mb-20 text-center">
            <p
              className="
                uppercase
                tracking-[0.3em]
                text-sm
                text-[#192747]/50
                mb-5
              "
            >
              Growth Journey
            </p>

            <h2
              className="
                text-4xl
                md:text-6xl
                uppercase
                leading-tight
              "
            >
              <span className="font-black text-[#192747]">
                Services Designed
              </span>

              <br />

              <span className="font-light text-[#192747]/70">
                To Scale Your Brand
              </span>
            </h2>
          </div>

          {/* SERVICES GRID */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
              max-w-7xl
              mx-auto
            "
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#192747]/10
                  bg-white/70
                  backdrop-blur-xl
                  hover:border-[#fcba00]
                  transition-all
                  duration-500
                  shadow-[0_10px_40px_rgba(25,39,71,0.08)]
                  hover:shadow-[0_20px_60px_rgba(25,39,71,0.18)]
                  hover:-translate-y-3
                "
              >
                {/* STEP NUMBER */}
                <div
                  className="
                    absolute
                    top-6
                    left-6
                    z-20
                    w-14
                    h-14
                    rounded-full
                    bg-white/90
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    border
                    border-[#192747]/10
                    text-[#192747]
                    font-bold
                    text-sm
                    tracking-widest
                  "
                >
                  {service.step}
                </div>

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      w-full
                      h-[320px]
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#192747]/10
                      group-hover:bg-[#192747]/20
                      transition-all
                      duration-500
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      uppercase
                      mb-4
                      tracking-wide
                      text-[#192747]
                      group-hover:text-[#fcba00]
                      transition-colors
                      duration-300
                    "
                  >
                    <span className="font-black">
                      {service.title}
                    </span>
                  </h3>

                  <p
                    className="
                      text-[#192747]/65
                      leading-relaxed
                      mb-8
                    "
                  >
                    {service.description}
                  </p>

                  {/* LINK BUTTON */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      uppercase
                      tracking-[0.2em]
                      text-xs
                      font-semibold
                      text-[#192747]
                      hover:text-[#fcba00]
                      hover:gap-5
                      transition-all
                      duration-300
                    "
                  >
                    Learn More

                    <svg
                      className="w-5 h-5"
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
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <ContactSection />
      </div>
    </>
  );
};

export default ServicesPage;
"use client";

import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../pages/servicesdata';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; // <-- Imported Helmet for SEO
import ContactSection from '../components/ContactSection';

const ServiceDetails = () => {
  const { id } = useParams(); 

  const serviceData = servicesData.find(service => service.slug === id);

  // Fallback if the URL doesn't match any service
  if (!serviceData) {
    return (
      <>
        <Helmet>
          <title>Service Not Found | ESHA Digital</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="min-h-screen flex items-center justify-center bg-[#f6f7fb] text-[#192747] text-2xl font-bold">
          Service not found
        </div>
      </>
    );
  }

  // Dynamic Schema.org Structured Data for this specific service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceData.title,
    "description": serviceData.intro[0], // Uses the first paragraph of your intro
    "provider": {
      "@type": "ProfessionalService",
      "name": "ESHA Digital",
      "image": "https://yourwebsite.com/EshaLogoWhite.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kondapur",
        "addressRegion": "Hyderabad",
        "addressCountry": "IN"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad"
    },
    "url": `https://yourwebsite.com/services/${serviceData.slug}`
  };

  return (
    <>
      {/* =========================================================
          DYNAMIC SEO METADATA & HEAD TAGS
      ========================================================= */}
      <Helmet>
        <title>{`${serviceData.title} Services | ESHA Digital - Hyderabad`}</title>
        <meta name="title" content={`${serviceData.title} Services | ESHA Digital - Hyderabad`} />
        <meta name="description" content={serviceData.intro[0]} />
        <meta name="keywords" content={`${serviceData.title}, ESHA Digital, Hyderabad, Marketing Agency, ${serviceData.platforms.map(p => p.name).join(', ')}`} />
        
        <link rel="canonical" href={`https://yourwebsite.com/services/${serviceData.slug}`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourwebsite.com/services/${serviceData.slug}`} />
        <meta property="og:title" content={`${serviceData.title} Services | ESHA Digital`} />
        <meta property="og:description" content={serviceData.intro[0]} />
        <meta property="og:image" content={serviceData.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://yourwebsite.com/services/${serviceData.slug}`} />
        <meta property="twitter:title" content={`${serviceData.title} Services | ESHA Digital`} />
        <meta property="twitter:description" content={serviceData.intro[0]} />
        <meta property="twitter:image" content={serviceData.image} />

        {/* Injecting Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-[#f6f7fb] text-[#192747] font-sans py-24 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* ================= MAIN CONTENT (Left) ================= */}
          <div className="lg:w-2/3 flex flex-col">

            {/* Header Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[300px] md:h-[400px] bg-[#192747]/10 rounded-3xl mb-10 overflow-hidden relative shadow-[0_10px_40px_rgba(25,39,71,0.08)] border border-[#192747]/10"
            >
              <img 
                src={serviceData.image} 
                alt={`${serviceData.title} Service by ESHA Digital`} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Title & Intro */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#192747]"
            >
              {serviceData.title}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-lg text-[#192747]/80 leading-relaxed font-light mb-16"
            >
              {serviceData.intro.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </motion.div>

            {/* Platforms/Sub-Services */}
            <div className="space-y-12 mb-16">
              {serviceData.platforms.map((platform, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(25,39,71,0.04)] border border-[#192747]/5"
                >
                  <h3 className="text-2xl font-bold text-[#192747] mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-[#fcba00] rounded-full block"></span>
                    {platform.name}
                  </h3>
                  <p className="text-[#192747]/75 leading-relaxed mb-6">
                    {platform.description}
                  </p>

                  <h4 className="font-semibold mb-4 text-[#192747]">Topics we cover:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {platform.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#192747]/80 text-sm">
                        <svg className="w-5 h-5 text-[#fcba00] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Our Process */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-[#192747]">Our approach follows a proven process to ensure success:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceData.process.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(25,39,71,0.04)] border border-[#192747]/5 relative overflow-hidden group"
                  >
                    <div className="text-6xl font-black text-[#f6f7fb] absolute -top-2 -right-2 transition-transform group-hover:scale-110">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-bold text-[#192747] mb-2 relative z-10">{step.title}</h4>
                    <p className="text-[#192747]/70 text-sm leading-relaxed relative z-10">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* ================= SIDEBAR (Right) ================= */}
          <div className="lg:w-1/3 flex flex-col gap-8">
            
            {/* Services List Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(25,39,71,0.04)] border border-[#192747]/5"
            >
              <h4 className="text-xl font-bold mb-6 text-[#192747] border-b border-[#192747]/10 pb-4">Our Services</h4>
              <ul className="flex flex-col gap-3">
                {serviceData.sidebar.servicesList.map((service, idx) => {
                  
                  // Helper to convert "Brand Identity" -> "brand-identity"
                  const createSlug = (title: string) => {
                    if (title.includes("PPC")) return "paid-advertising"; 
                    return title.toLowerCase().replace(/\s+/g, '-');
                  };

                  return (
                    <li key={idx}>
                      <Link 
                        to={`/services/${createSlug(service)}`} 
                        className={`flex items-center gap-3 py-2 px-4 rounded-xl transition-colors font-medium ${
                          service === serviceData.title 
                            ? 'bg-[#fcba00] text-[#192747]' 
                            : 'hover:bg-[#f6f7fb] text-[#192747]/70 hover:text-[#192747]'
                        }`}
                      >
                        {service === serviceData.title && (
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                        {service}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Need Help Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#192747] rounded-3xl p-8 text-white shadow-xl"
            >
              <h4 className="text-xl font-bold mb-2">Need Any Help</h4>
              <p className="text-white/70 mb-8 text-sm leading-relaxed">Need Any Help, Call Us 24/7 For Support</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fcba00] flex items-center justify-center text-[#192747] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Call Us</p>
                    <p className="font-bold">{serviceData.sidebar.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fcba00] flex items-center justify-center text-[#192747] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Mail Us</p>
                    <p className="font-bold">{serviceData.sidebar.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fcba00] flex items-center justify-center text-[#192747] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Office Address</p>
                    <p className="font-bold text-sm">{serviceData.sidebar.contact.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-[#fcba00] to-[#e5a800] rounded-3xl p-8 text-[#192747] shadow-xl relative overflow-hidden group cursor-pointer"
            >
              <h4 className="text-2xl font-black mb-4 relative z-10">{serviceData.sidebar.cta.title}</h4>
              <p className="text-[#192747]/80 text-sm leading-relaxed mb-8 relative z-10">
                {serviceData.sidebar.cta.text}
              </p>
              <Link to="/contact">
                <button className="bg-[#192747] text-white py-3 px-6 rounded-full text-sm font-bold flex items-center gap-2 group-hover:pr-4 transition-all relative z-10">
                  Contact Us
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
              {/* Background Accent */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            </motion.div>

          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default ServiceDetails;
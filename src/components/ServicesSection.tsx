"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import { Link } from 'react-router-dom';

// Reusable component for the unique broken-corner icon frame
const CornerFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
    {/* Top Left */}
    <div className="absolute top-0 left-0 w-6 h-6 border-t-[2.5px] border-l-[2.5px] border-[#192747] rounded-tl-2xl group-hover:border-[#fcba00] transition-colors duration-300"></div>
    {/* Top Right */}
    <div className="absolute top-0 right-0 w-6 h-6 border-t-[2.5px] border-r-[2.5px] border-[#192747] rounded-tr-2xl group-hover:border-[#fcba00] transition-colors duration-300"></div>
    {/* Bottom Left */}
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[2.5px] border-l-[2.5px] border-[#192747] rounded-bl-2xl group-hover:border-[#fcba00] transition-colors duration-300"></div>
    {/* Bottom Right */}
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[2.5px] border-r-[2.5px] border-[#192747] rounded-br-2xl group-hover:border-[#fcba00] transition-colors duration-300"></div>
    
    {/* Inner Icon */}
    <div className="text-[#192747] group-hover:text-[#fcba00] transition-colors duration-300">
      {children}
    </div>
  </div>
);

const Services = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Updated to match your exact 6 services and route slugs
  const servicesList = [
    {
      title: "BRANDING",
      slug: "brand-identity",
      icon: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      title: "SOCIAL MEDIA\nMARKETING",
      slug: "social-media-marketing",
      icon: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    },
    {
      title: "WEB\nDEVELOPMENT",
      slug: "web-development",
      icon: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "APP\nDEVELOPMENT",
      slug: "app-development",
      icon: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      title: "SEARCH ENGINE\nOPTIMIZATION",
      slug: "search-engine-optimization",
      icon: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <polyline points="11 8 11 11 14 11" />
        </svg>
      )
    },
    {
      title: "PAID\nADVERTISING (PPC)",
      slug: "paid-advertising",
      icon: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#f6f7fb] text-[#192747] py-24 px-6 md:px-12 lg:px-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32"
        >
          {/* Left Column: Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-tensor tracking-tight mb-8">
              <span className="font-bold">ESHA'S</span> <br />
              <span className="font-light text-[#192747]/70">EXPERTISE</span>
            </h2>
          </motion.div>

          {/* Right Column: Description Paragraph */}
          <motion.div variants={itemVariants} className="flex items-center">
            <p className="text-lg sm:text-xl text-[#192747]/80 font-light leading-[1.8]">
              At ESHA, creative elegance and knowledge sharing
              drive each of our projects. Specialists in <strong className="text-[#192747] font-bold">marketing
              strategy, brand culture, branding,</strong> and <strong className="text-[#192747] font-bold">web & mobile
              development,</strong> we design tailor-made solutions to
              enhance your visual identity and optimize your
              communication strategy.
              <br /><br />
              Turn every idea into a unique experience with our
              expertise.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Grid Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-8 mb-24"
        >
          {servicesList.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              {/* Link wraps the entire item to make it clickable */}
              <Link 
                to={`/services/${service.slug}`} 
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <CornerFrame>
                  {service.icon}
                </CornerFrame>
                <h3 className="mt-8 text-base md:text-lg font-tensor font-medium tracking-widest whitespace-pre-line text-[#192747] group-hover:text-[#fcba00] transition-colors duration-300">
                  {service.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full"
        >
          <Link to="/services" className="block w-full">
            <AnimatedButton text="DISCOVER ALL OUR SERVICES" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';

// Reusable component for the unique broken-corner icon frame
const CornerFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
    {/* Top Left */}
    <div className="absolute top-0 left-0 w-6 h-6 border-t-[2.5px] border-l-[2.5px] border-white rounded-tl-2xl group-hover:border-[#fcba00] transition-colors duration-300"></div>
    {/* Top Right */}
    <div className="absolute top-0 right-0 w-6 h-6 border-t-[2.5px] border-r-[2.5px] border-white rounded-tr-2xl group-hover:border-[#fcba00] transition-colors duration-300"></div>
    {/* Bottom Left */}
    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-[2.5px] border-l-[2.5px] border-white rounded-bl-2xl group-hover:border-[#fcba00] transition-colors duration-300"></div>
    {/* Bottom Right */}
    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-[2.5px] border-r-[2.5px] border-white rounded-br-2xl group-hover:border-[#fcba00] transition-colors duration-300"></div>
    
    {/* Inner Icon */}
    <div className="text-white group-hover:text-[#fcba00] transition-colors duration-300">
      {children}
    </div>
  </div>
);

const Services = () => {
  // Explicitly typing as 'Variants' fixes the TypeScript error
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

  const servicesList = [
    {
      title: "MARKETING",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "VISUAL\nIDENTITY",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "WEBSITE\nCREATION",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="5" y="5" width="14" height="14" rx="3" />
        </svg>
      )
    },
    {
      title: "WEB APPLICATION\nDEVELOPMENT",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 16L4 12L8 8" />
          <path d="M16 8L20 12L16 16" />
          <path d="M14 4L10 20" />
        </svg>
      )
    },
    {
      title: "MOTION\nDESIGN",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round">
          <polygon points="9 7 17 12 9 17 9 7" />
        </svg>
      )
    },
    {
      title: "E-LEARNING",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="7" />
          <line x1="12" y1="5" x2="12" y2="19" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32"
        >
          {/* Left Column: Heading & Quote */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-tensor tracking-tight mb-8">
              <span className="font-bold">ESHA'S</span> <br />
              <span className="font-light text-gray-200">EXPERTISE</span>
            </h2>
            
            <div className="flex items-start gap-4 ml-2 sm:ml-8 mt-12">
              {/* Hand-drawn curving arrow */}
              <svg width="30" height="40" viewBox="0 0 30 40" fill="none" className="text-white mt-1 opacity-80">
                <path d="M25 35 C 15 35, 5 25, 5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M1 10 L 5 4 L 11 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="italic text-sm sm:text-base text-gray-300 font-helvetica leading-relaxed">
                "Elegance exceeds time." <br />
                <span className="text-gray-400">Armani</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Description Paragraph */}
          <motion.div variants={itemVariants} className="flex items-center">
            <p className="text-lg sm:text-xl text-gray-300 font-helvetica leading-[1.8]">
              At ESHA, creative elegance and knowledge sharing
              drive each of our projects. Specialists in <strong className="text-white font-bold">marketing
              strategy, brand culture, branding,</strong> and <strong className="text-white font-bold">web & mobile
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
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center text-center group cursor-pointer">
              <CornerFrame>
                {service.icon}
              </CornerFrame>
              <h3 className="mt-8 text-base md:text-lg font-tensor font-medium tracking-widest whitespace-pre-line group-hover:text-[#fcba00] transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center"
        >
          <button className="w-full max-w-4xl bg-white text-black py-5 px-8 flex justify-between items-center group hover:bg-[#fcba00] transition-all duration-300 shadow-lg">
            <span className="font-tensor font-bold text-base md:text-xl tracking-widest">
              DISCOVER ALL OUR SERVICES
            </span>
            <svg 
              className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
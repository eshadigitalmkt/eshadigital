"use client";
import React from 'react';
import { motion, type Variants } from 'framer-motion';

const AboutSection: React.FC = () => {
  // Framer Motion variants for smooth scrolling animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full min-h-[350px] lg:min-h-[500px] relative rounded-sm overflow-hidden bg-gray-100"
          >
            {/* Replace this with your actual team image path */}
            <img 
              src="/about-team.jpg" 
              alt="The ESHA Agency Team" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center py-8"
          >
            
            {/* Quote with Hand-drawn Arrow */}
            <motion.div variants={itemVariants} className="flex items-start gap-4 mb-10">
              <svg 
                className="w-8 h-8 text-[#192747] mt-1 opacity-80" 
                viewBox="0 0 40 40" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M35 10 C 20 10, 10 15, 10 30" />
                <path d="M5 25 L 10 30 L 15 25" />
              </svg>
              <div className="italic text-[#192747]/70 font-helvetica text-base md:text-lg leading-relaxed">
                "Small but strong."<br />
                The Magpie Who Sings
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-[#192747] font-tensor uppercase flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-[32px] font-light tracking-wide mb-2">
                  A TOURAINE AGENCY ON A
                </span>
                <span className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight leading-none">
                  HUMAN SCALE
                </span>
              </h2>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-[#192747]/80 font-helvetica leading-[1.7] mb-10 max-w-xl"
            >
              For almost 15 years, we have been passionately combining{' '}
              <strong className="text-[#192747] font-bold">creativity, development, strategy</strong> 
              {' '}and experience to offer our customers innovative{' '}
              <strong className="text-[#192747] font-bold">communication</strong> solutions.
              <br /><br />
              Our mission: to create a strong identity and guarantee increased visibility of your brand in its market.
            </motion.p>

            {/* Call To Action Link */}
            <motion.div variants={itemVariants}>
              <a 
                href="#" 
                className="group inline-flex items-center text-[#192747] hover:text-[#fcba00] transition-colors duration-300 font-tensor font-bold text-lg sm:text-xl tracking-wide"
              >
                Discover The Agency ESHA
                <svg 
                  className="w-6 h-6 ml-4 transform group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
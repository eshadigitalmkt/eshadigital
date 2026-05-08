"use client";
import React, { useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';

// --- 1. ACCORDION SERVICE DATA ---
interface Service {
  id: string;
  titleBold1: string;
  titleLight: string;
  titleBold2?: string;
  description: React.ReactNode;
}

const servicesData: Service[] = [
  {
    id: 'marketing',
    titleBold1: 'MARKETING',
    titleLight: 'STRATEGY',
    description: (
      <p className="text-gray-400 font-light leading-relaxed">
        We build comprehensive digital marketing roadmaps to ensure your brand reaches the right audience at the right time with maximum impact.
      </p>
    )
  },
  {
    id: 'design',
    titleBold1: 'DESIGN',
    titleLight: 'GRAPHIC & VISUAL',
    titleBold2: 'IDENTITY',
    description: (
      <p className="text-gray-400 font-light leading-relaxed">
        Crafting unique, memorable visual identities that resonate with your target market. From logos to complete brand guidelines, we make your brand stand out.
      </p>
    )
  },
  {
    id: 'development',
    titleBold1: 'CREATION OF',
    titleLight: 'WEBSITES AND',
    titleBold2: 'E-SHOP',
    description: (
      <div className="space-y-6 text-gray-300 font-light leading-relaxed">
        <p>
          Clickora designs and develops <span className="text-white font-medium">tailor-made showcase and e-commerce sites</span>, 
          designed from the design stage to maximize your visibility on search engines. 
          Each site is <span className="text-white font-medium">SEO-optimized</span>, with smooth navigation across all devices and solid technical performance.
        </p>
        <p>
          Aware of the <span className="text-white font-medium">environmental impact</span> of the web, we systematically apply 
          responsible optimizations: image compression, <span className="text-white font-medium">green hosting</span>, enhanced 
          <span className="text-white font-medium"> accessibility</span>.
        </p>
      </div>
    )
  },
  {
    id: 'motion',
    titleBold1: 'MOTION DESIGN',
    titleLight: '& CORPORATE VIDEO',
    description: (
      <p className="text-gray-400 font-light leading-relaxed">
        Bring your brand to life with high-performance animations, GSAP, and Framer Motion. We create fluid, engaging video and motion content that captures attention.
      </p>
    )
  },
  {
    id: 'signage',
    titleBold1: 'SIGN',
    titleLight: 'SIGNAGE &',
    titleBold2: 'PROMOTIONAL ITEMS',
    description: (
      <p className="text-gray-400 font-light leading-relaxed">
        Physical branding matters too. We design impactful signage and promotional materials that bridge the gap between your digital and physical presence.
      </p>
    )
  }
];

// --- 2. DARK MODE IMAGE SLIDER ---
const SlidingGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group w-full mt-8 lg:mt-0">
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="min-w-[85%] md:min-w-[65%] aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center snap-center relative overflow-hidden group-hover:bg-zinc-800 transition-colors">
          <span className="text-zinc-600 font-mono text-sm">Portfolio Image 1</span>
        </div>
        <div className="min-w-[85%] md:min-w-[65%] aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center snap-center relative overflow-hidden group-hover:bg-zinc-800 transition-colors">
          <span className="text-zinc-600 font-mono text-sm">Portfolio Image 2</span>
        </div>
        <div className="min-w-[85%] md:min-w-[65%] aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center snap-center relative overflow-hidden group-hover:bg-zinc-800 transition-colors">
          <span className="text-zinc-600 font-mono text-sm">Portfolio Image 3</span>
        </div>
      </div>

      <button 
        onClick={() => slide('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black border border-zinc-700 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 shadow-md hover:bg-zinc-800 hover:border-zinc-500 z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button 
        onClick={() => slide('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black border border-zinc-700 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 shadow-md hover:bg-zinc-800 hover:border-zinc-500 z-10"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
};


// --- 3. EXTRACTED ACCORDION COMPONENT ---
const ServicesAccordion: React.FC = () => {
  const [openSectionId, setOpenSectionId] = useState<string | null>('development');

  const toggleSection = (id: string) => {
    setOpenSectionId(prev => (prev === id ? null : id));
  };

  return (
    <div className="border-t border-white/20">
      {servicesData.map((service) => {
        const isOpen = openSectionId === service.id;

        return (
          <div key={service.id} className="border-b border-white/20 overflow-hidden">
            
            {/* Accordion Header */}
            <button
              onClick={() => toggleSection(service.id)}
              className="w-full flex items-center justify-between py-6 md:py-8 group focus:outline-none"
            >
              <h2 className="text-xl md:text-3xl lg:text-4xl uppercase tracking-wide text-left pr-4 group-hover:text-[#fcba00] transition-colors duration-300">
                <span className="font-bold">{service.titleBold1}</span>{' '}
                <span className="font-light">{service.titleLight}</span>
                {service.titleBold2 && (
                  <>
                    {' '}
                    <span className="font-bold">{service.titleBold2}</span>
                  </>
                )}
              </h2>

              {/* Plus / X Icon (White lines for dark mode) */}
              <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
                <span className={`absolute block w-6 h-[2px] bg-white group-hover:bg-[#fcba00] transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45' : ''}`} />
                <span className={`absolute block w-6 h-[2px] bg-white group-hover:bg-[#fcba00] transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'rotate-90'}`} />
              </div>
            </button>

            {/* Accordion Content */}
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-12' : 'grid-rows-[0fr] opacity-0 pb-0'}`}>
              <div className="overflow-hidden">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 pt-4">
                  
                  <div className="order-1">
                    {service.description}
                  </div>

                  <div className="order-2 flex flex-col">
                    <SlidingGallery />
                    
                    <a href="#" className="inline-flex items-center gap-4 mt-6 text-white hover:text-[#fcba00] font-bold uppercase tracking-widest text-sm hover:gap-6 transition-all w-fit group">
                      Discover The Portfolio
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};


// --- 4. MAIN PAGE COMPONENT ---
const Services = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    // Wrapped in a fragment because React requires a single parent element
    <>
      {/* 1. TYPOGRAPHY HERO SECTION */}
      <section className="flex flex-col items-center justify-center py-20 px-6 bg-white text-black">
        
        {/* Main Heading with alternating Font Weights */}
        <div className="text-center mb-10 relative">
          <h1 className="text-4xl md:text-5xl lg:text-7xl tracking-widest uppercase font-light leading-tight md:leading-snug">
            <span className="font-bold">Tailor-made</span> solutions<br />
            & projects <span className="font-bold">that stand out!</span>
          </h1>
        </div>

        {/* Quote & Arrow Layout */}
        <div className="relative flex flex-col items-center">
          
          {/* Hand-drawn style curved arrow (SVG) */}
          <div className="absolute -top-10 -left-12 md:-top-16 md:-left-20 text-zinc-800 rotate-[5deg] scale-75 md:scale-100">
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M8 5L4 9l4 4" />
              <path d="M4 9c6 0 10 4 10 11" />
            </svg>
          </div>
          
          {/* Italic Subtext */}
          <div className="text-center">
            <p className="italic text-lg md:text-xl text-zinc-600 font-serif">
              Become our source of inspiration
            </p>
          </div>
          
        </div>
      </section>

      {/* 2. DARK THEME EXPERTISE & ACCORDION SECTION */}
      <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Header Section */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20"
          >
            {/* Left Column: Heading & Quote */}
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-tensor tracking-tight mb-8 uppercase">
                <span className="font-bold">CLICKORA'S</span> <br />
                <span className="font-light text-gray-200">EXPERTISE</span>
              </h2>
              
              <div className="flex items-start gap-4 ml-2 sm:ml-8 mt-12">
                <svg width="30" height="40" viewBox="0 0 30 40" fill="none" className="text-white mt-1 opacity-80">
                  <path d="M25 35 C 15 35, 5 25, 5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M1 10 L 5 4 L 11 8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="italic text-sm sm:text-base text-gray-400 font-helvetica leading-relaxed">
                  "Elegance exceeds time." <br />
                  <span className="text-gray-500">Armani</span>
                </p>
              </div>
            </motion.div>

            {/* Right Column: Description Paragraph */}
            <motion.div variants={itemVariants} className="flex items-center">
              <p className="text-lg sm:text-xl text-gray-300 font-helvetica leading-[1.8]">
                At Clickora, creative elegance and knowledge sharing
                drive each of our projects. Specialists in <strong className="text-white font-bold">marketing
                strategy, brand culture, branding,</strong> and <strong className="text-white font-bold">web & mobile
                development,</strong> we design tailor-made solutions to
                enhance your visual identity and optimize your
                communication strategy.
              </p>
            </motion.div>
          </motion.div>

          {/* Integrated Accordion Component */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full mb-24"
          >
            <ServicesAccordion />
          </motion.div>

          {/* Call to Action Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
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
    </>
  );
};

export default Services;
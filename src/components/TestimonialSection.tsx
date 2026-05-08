"use client";
import React, { useRef } from 'react';
import { motion, type Variants } from 'framer-motion';

const TestimonialSection: React.FC = () => {
  // Drag-to-scroll logic refs
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Animation variants
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

  const testimonials = [
    {
      name: "Barbara BILLAC",
      role: "Managing Director at CAP MONÉTIQUE",
      quote: "\"I highly recommend this agency. Cap Monétique has been working with ESHA for a long time. It's always a pleasure to collaborate with this close-knit team.\""
    },
    {
      name: "Marie-Agnès LAUVIN",
      role: "Radiologist - Digital Project Manager",
      quote: "\"An exceptional agency! I have collaborated with ESHA several times and always have the same pleasant feeling that my request will be understood and handled efficiently.\""
    },
    {
      name: "Jonathan DOE",
      role: "Marketing Director at TECHCORP",
      quote: "\"I highly recommend their services. The ESHA team is incredibly attentive and proactive. It's a joy to work with them on our most complex marketing projects.\""
    },
    {
      name: "Sophie MARTIN",
      role: "Founder at Bloom Boutique",
      quote: "\"ESHA completely revamped our visual identity. The new branding has resonated perfectly with our target audience. We've seen a huge increase in engagement!\""
    },
    {
      name: "David CHEN",
      role: "CTO at InnovateTech",
      quote: "\"The web application development team at ESHA is top-notch. They delivered a complex platform on time and exceeded our expectations in terms of performance and UI.\""
    },
    {
      name: "Emma DUBOIS",
      role: "Head of Communications at EcoFuture",
      quote: "\"From motion design to overall marketing strategy, ESHA has been a vital partner for our campaigns. Their creativity knows no bounds and the results speak for themselves.\""
    },
    {
      name: "Lucas BERNARD",
      role: "Director of E-Learning at EduPro",
      quote: "\"Creating our e-learning platform with ESHA was a seamless experience. They truly understand human-centered design and made complex educational tools easy to use.\""
    }
  ];

  // --- Drag to Scroll Event Handlers ---
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    if (sliderRef.current) {
      sliderRef.current.classList.add('cursor-grabbing');
      sliderRef.current.classList.remove('cursor-grab');
      // Disable snapping temporarily while dragging for a smooth feel
      sliderRef.current.style.scrollSnapType = 'none'; 
      startX.current = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
    }
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;
    if (sliderRef.current) {
      sliderRef.current.classList.add('cursor-grab');
      sliderRef.current.classList.remove('cursor-grabbing');
      // Re-enable snapping when the user lets go
      sliderRef.current.style.scrollSnapType = ''; 
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Multiplier adjusts scroll speed
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="w-full bg-white py-24 px-6 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          {/* Quote & Arrow */}
          <motion.div variants={itemVariants} className="flex items-start gap-3 mb-10">
            <svg 
              className="w-8 h-8 text-[#192747] mt-1" 
              viewBox="0 0 40 40" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M30 10 C 15 10, 10 20, 10 35" />
              <path d="M5 30 L 10 35 L 15 30" />
            </svg>
            <div className="italic text-[#192747]/80 font-helvetica text-base leading-relaxed">
              "Connecting people."<br />
              Nokia
            </div>
          </motion.div>

          {/* Titles */}
          <motion.div variants={itemVariants} className="mb-6">
            <h2 className="text-[#192747] font-tensor uppercase flex flex-col">
              <span className="text-3xl sm:text-4xl font-light tracking-widest mb-1">
                TESTIMONIALS
              </span>
              <span className="text-5xl sm:text-6xl lg:text-[72px] font-bold tracking-tight leading-none">
                FROM OUR CLIENTS
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-[#192747]/80 font-helvetica max-w-3xl"
          >
            A testimonial is worth more than a long speech. We give our customers a voice, 100% authentic.
          </motion.p>
        </motion.div>

        {/* Testimonials Slider / Grid */}
        <motion.div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // Added cursor-grab and select-none so text doesn't highlight while dragging
          className="flex gap-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory cursor-grab select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          {/* Hide scrollbar for Chrome/Safari */}
          <style>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex-none w-[85vw] sm:w-[450px] bg-white rounded-lg p-10 snap-center group hover:-translate-y-2 transition-transform duration-300"
              style={{
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.03)"
              }}
            >
              <h3 className="text-2xl font-tensor font-bold text-[#192747] mb-1 group-hover:text-[#fcba00] transition-colors duration-300 pointer-events-none">
                {testimonial.name}
              </h3>
              <p className="font-helvetica italic text-[#192747]/70 text-sm md:text-base mb-6 pointer-events-none">
                {testimonial.role}
              </p>
              <p className="font-helvetica text-[#192747]/90 text-base md:text-lg leading-[1.8] pointer-events-none">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialSection;
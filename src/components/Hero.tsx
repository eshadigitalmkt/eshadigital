"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT REVEAL (mask animation)
      gsap.from(".reveal", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      });

      // SUBTEXT & AGENCY INFO
      gsap.from(".subtext", {
        y: 40,
        opacity: 0,
        delay: 0.6,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // PARALLAX FLOAT
      gsap.to(".floating", {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[calc(100vh-6rem)] bg-white flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* ================= LEFT BOTTOM CIRCLE ================= */}
      <div className="absolute bottom-10 left-6 lg:left-16 group cursor-pointer hidden md:block">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-[140px] h-[140px]"
        >
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full text-[#192747] group-hover:text-[#fcba00] transition-colors duration-300"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M50,50 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
              />
            </defs>

            <text
              fill="currentColor"
              fontSize="8"
              letterSpacing="3.5"
              className="uppercase font-semibold font-tensor"
            >
              <textPath href="#circlePath">
                • DISCOVER OUR SERVICES • DISCOVER OUR SERVICES
              </textPath>
            </text>
          </motion.svg>

          {/* CENTER ARROW */}
          <div className="absolute inset-0 flex items-center justify-center floating">
            <svg
              className="w-6 h-6 text-[#192747] group-hover:text-[#fcba00] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-5xl text-center z-10">
        
        {/* HEADING */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-eczar text-[#192747] leading-[1.05] tracking-tight">
          <div className="overflow-hidden">
            <span className="block reveal font-extrabold">
              Creative Strategy.
            </span>
          </div>

          <div className="overflow-hidden">
            <span className="block reveal text-slate-400 font-light italic">
              Digital Innovation.
            </span>
          </div>

          <div className="overflow-hidden">
            <span className="block reveal relative font-semibold">
              Human-Centered Design.
              <span className="absolute left-0 bottom-2 w-full h-[8px] bg-[#fcba00]/30 -z-10 rounded-full"></span>
            </span>
          </div>
        </h1>

        {/* MAIN SUBTEXT */}
        <p className="subtext mt-8 text-lg sm:text-xl text-[#192747]/80 max-w-2xl mx-auto font-helvetica">
          Where Design, Development & Marketing Work as One —
          <span className="text-[#fcba00] font-semibold">
            {" "}Driving Creativity, Technology & Growth.
          </span>
        </p>

        {/* AGENCY INFO WITH HAND-DRAWN ARROW */}
        <div className="subtext relative mt-12 flex justify-center items-start max-w-md mx-auto">
          {/* Hand-drawn arrow SVG */}
          <svg 
            className="absolute -left-12 -top-4 w-12 h-12 text-[#192747] hidden sm:block" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M80 80 C 60 80, 30 60, 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            <path d="M10 35 L 20 20 L 35 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          
          <p className="text-sm sm:text-base font-medium text-[#192747] font-helvetica">
            Marketing, web development and graphic design agency
          </p>
        </div>
      </div>

      {/* ================= RIGHT SOCIAL ICONS ================= */}
      <div className="hidden lg:flex absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex-col space-y-8 z-20">
        <a href="#" className="text-[#192747] hover:text-[#fcba00] hover:-translate-y-1 transition-all duration-300" aria-label="Facebook">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>

        <a href="#" className="text-[#192747] hover:text-[#fcba00] hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <a href="#" className="text-[#192747] hover:text-[#fcba00] hover:-translate-y-1 transition-all duration-300" aria-label="Instagram">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute w-[500px] h-[500px] bg-[#fcba00]/10 blur-[120px] rounded-full top-[-100px] right-[-100px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
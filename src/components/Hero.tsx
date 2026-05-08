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
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
      });

      // SUBTEXT & AGENCY INFO
      gsap.from(".subtext", {
        y: 30,
        opacity: 0,
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // PARALLAX FLOAT FOR DOWN ARROW
      gsap.to(".floating", {
        y: 15,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-white text-black flex flex-col items-center justify-center overflow-hidden px-6 selection:bg-zinc-200"
    >
      {/* ================= MAIN CONTENT ================= */}
      <div className="z-10 flex flex-col items-center mt-[-10vh]">
        
        {/* HEADING (Translated to English) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-center whitespace-nowrap">
          
          {/* Top Line */}
          <div className="overflow-hidden pb-2">
            <span className="block reveal">
              <span className="font-bold tracking-normal">CREATIVE</span>{' '}
              <span className="font-light tracking-wide lowercase">&</span>{' '}
              <span className="font-light tracking-widest text-zinc-400">HUMAN</span>
            </span>
          </div>

          {/* Bottom Line */}
          <div className="overflow-hidden pb-2">
            <span className="block reveal">
              <span className="font-light tracking-widest">DEVELOPMENT </span>
              <span className="font-black tracking-tight">AGENCY</span>
            </span>
          </div>
        </h1>

        {/* AGENCY INFO WITH HAND-DRAWN ARROW */}
        <div className="subtext relative mt-16 flex flex-col items-center max-w-sm mx-auto">
          {/* Hand-drawn arrow SVG (Pointing Up-Left) */}
          <svg 
            className="absolute -left-20 -top-16 w-16 h-16 text-black hidden md:block" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M70 80 C 50 80, 30 60, 30 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
            <path d="M15 35 L 30 20 L 45 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          
          <p className="text-sm md:text-base font-light text-zinc-800 text-center font-sans">
            Marketing, communication and web <br className="hidden md:block"/>
            development agency in Hyderabad
          </p>
        </div>
      </div>

      {/* ================= LEFT BOTTOM CIRCLE ================= */}
      <div className="absolute bottom-12 left-6 lg:left-16 group cursor-pointer hidden sm:block">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-[160px] h-[160px]"
        >
          {/* Rotating Text */}
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full text-black"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
              />
            </defs>

            <text
              fill="currentColor"
              fontSize="9"
              letterSpacing="6.5"
              className="uppercase font-light tracking-widest"
            >
              <textPath href="#circlePath" startOffset="0%">
                D I S C O V E R &nbsp; O U R &nbsp; S E R V I C E S ! &nbsp; 
              </textPath>
            </text>
          </motion.svg>

          {/* CENTER DOWN ARROW */}
          <div className="absolute inset-0 flex items-center justify-center floating">
            <svg
              className="w-8 h-8 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* ================= RIGHT BOTTOM CACTUS & SOCIALS ================= */}
      <div className="absolute bottom-0 right-10 lg:right-32 flex items-end opacity-0 subtext">
        
        {/* Decorative SVG Cactus */}
        <div className="w-24 h-24 md:w-32 md:h-32 mb-8 mr-8">
          <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="80" cy="100" r="58" fill="black" stroke="white" strokeWidth="2"/>
            <path d="M80 42 C45 42, 22 75, 22 100" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M80 42 C115 42, 138 75, 138 100" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M80 42 V 158" stroke="white" strokeWidth="2"/>
            <path d="M58 46 C40 70, 40 120, 58 153" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M102 46 C120 70, 120 120, 102 153" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M80 42 Q 70 25 80 30 Q 90 25 80 42" fill="white"/>
            <path d="M74 35 Q 60 25 66 40" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M86 35 Q 100 25 94 40" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </div>

        {/* Social Links (Right Edge) - Facebook, Instagram, WhatsApp */}
        <div className="flex flex-col gap-6 mb-12 relative -right-12 lg:-right-24 text-black">
          
          {/* Facebook */}
          <a href="#" className="hover:text-zinc-500 transition-colors" aria-label="Facebook">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className="hover:text-zinc-500 transition-colors" aria-label="Instagram">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* WhatsApp */}
          <a href="#" className="hover:text-zinc-500 transition-colors" aria-label="WhatsApp">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>

        </div>
      </div>

    </section>
  );
};

export default Hero;
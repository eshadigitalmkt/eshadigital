"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col mt-auto font-sans">

      {/* Top Blue Banner */}
      <div className="bg-[#192747] w-full min-h-[140px] md:h-40 relative flex items-center px-8 md:px-16 py-8 md:py-0 overflow-hidden">

        {/* ================= SOCIAL ICONS ================= */}
        {/* Mobile: 2-column Grid | Tablet/Desktop (md+): Single Flex Row */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-x-8 gap-y-6 md:gap-8 z-20 relative w-[60%] sm:w-1/2 md:w-auto">
          
          {/* FACEBOOK */}
          <motion.a
            href="https://www.facebook.com/profile.php?id=61563720044170"
            aria-label="Facebook"
            whileHover={{ y: -4, color: "#fcba00" }}
            transition={{ duration: 0.3 }}
            className="text-white flex items-center justify-start"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            href="https://www.instagram.com/eshadigitalmarketing/"
            aria-label="Instagram"
            whileHover={{ y: -4, color: "#fcba00" }}
            transition={{ duration: 0.3 }}
            className="text-white flex items-center justify-start"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </motion.a>

          {/* X (TWITTER) */}
          <motion.a
            href="https://x.com/LathaLat2026"
            aria-label="X (Twitter)"
            whileHover={{ y: -4, color: "#fcba00" }}
            transition={{ duration: 0.3 }}
            className="text-white flex items-center justify-start"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.04H5.078z" />
            </svg>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/esha-marketing-b9617a40a/"
            aria-label="LinkedIn"
            whileHover={{ y: -4, color: "#fcba00" }}
            transition={{ duration: 0.3 }}
            className="text-white flex items-center justify-start"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
          </motion.a>

          {/* YOUTUBE */}
          <motion.a
            href="https://www.youtube.com/channel/UC-udKvmyd-UOUneoQNXuuOg"
            aria-label="YouTube"
            whileHover={{ y: -4, color: "#fcba00" }}
            transition={{ duration: 0.3 }}
            className="text-white flex items-center justify-start col-span-2 md:col-span-1"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </motion.a>

        </div>

        {/* ================= BACKGROUND LOGO ================= */}
        <div className="absolute right-[-20px] sm:right-4 md:right-24 bottom-[-10px] md:bottom-[-20px] pointer-events-none z-0 w-[200px] md:w-[320px]">
          <img 
            src="/EshaLogoWhite.png" 
            alt="Esha Digital Logo" 
            className="w-full h-auto opacity-30 md:opacity-80 transition-opacity" 
          />
        </div>

      </div>

      {/* Bottom Light Banner */}
      <div className="bg-[#f6f7fb] w-full px-8 md:px-16 py-8 border-t border-[#192747]/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs md:text-sm text-[#192747]/70 font-light tracking-wide">
          
          <div className="text-center md:text-left">
            © Esha Digital Marketing - Communication and digital development agency in Hyderabad - 2026
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 text-center md:text-right">
            <a href="#" className="hover:text-[#fcba00] transition-colors duration-200 focus:outline-none focus:underline">Accessibility</a>
            <span className="text-[#192747]/30 hidden sm:inline">-</span>
            <a href="#" className="hover:text-[#fcba00] transition-colors duration-200 focus:outline-none focus:underline">Legal Notice</a>
            <span className="text-[#192747]/30 hidden sm:inline">-</span>
            <a href="#" className="hover:text-[#fcba00] transition-colors duration-200 focus:outline-none focus:underline">Cookie Policy</a>
          </div>

        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
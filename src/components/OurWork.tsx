"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import BrandImage from "../assets/Brand Identity.jpg"
import DigitalCampaign from "../assets/Digital Campaign.jpg"
import EditorialDesign from "../assets/Editorial Design.jpg"
import WedDevImage from "../assets/Web-development.jpg"
import MobileImage from "../assets/Mobile Mockup.jpg"

const OurWorkSection: React.FC = () => {
  /* ---------------- ANIMATIONS ---------------- */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#f6f7fb] py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="uppercase text-[#192747] flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 gap-y-2">
            <span className="text-3xl sm:text-5xl md:text-6xl font-light tracking-wide">
              OUR
            </span>
            {/* The bold central word */}
            <span className="text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] font-black tracking-tighter leading-none">
              CREATIVE
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl font-light tracking-wide">
              WORK
            </span>
          </h2>
        </motion.div>

        {/* ================= BENTO GRID LAYOUT ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          
          {/* ----- COLUMN 1 (Narrow Left) ----- */}
          <div className="md:col-span-1 flex flex-col gap-6">
            
            {/* Tall Project Image */}
            <motion.div 
              variants={itemVariants} 
              className="relative group rounded-xl md:rounded-2xl overflow-hidden h-[400px] md:h-[450px] shadow-sm cursor-pointer"
            >
              <img
                src={BrandImage}
                alt="Brand Identity Project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#192747]/0 group-hover:bg-[#192747]/40 transition-colors duration-500" />
              
              {/* Hover overlay text */}
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-bold text-lg">L'entracte</p>
                <p className="text-[#fcba00] font-medium text-sm">Brand Identity</p>
              </div>
            </motion.div>

            {/* Short Project Image (Replaced the yellow button) */}
            <motion.div 
              variants={itemVariants} 
              className="relative group rounded-xl md:rounded-2xl overflow-hidden h-[200px] md:h-[250px] shadow-sm cursor-pointer"
            >
              <img
                src={DigitalCampaign}
                alt="Digital Campaign"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#192747]/0 group-hover:bg-[#192747]/40 transition-colors duration-500" />
              
              {/* Hover overlay text */}
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-bold text-lg">Digital Ads</p>
                <p className="text-[#fcba00] font-medium text-sm">Marketing</p>
              </div>
            </motion.div>

          </div>

          {/* ----- COLUMN 2 & 3 (Wide Center) ----- */}
          <div className="md:col-span-2 flex flex-col h-full">
            
            {/* Massive Center Mockup (Brochure) */}
            <motion.div 
              variants={itemVariants} 
              className="relative group rounded-xl md:rounded-2xl overflow-hidden h-[300px] md:h-[524px] shadow-sm border border-[#192747]/5 w-full bg-white flex-1 cursor-pointer"
            >
              <img
                src={EditorialDesign}
                alt="Brochure Design"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#192747]/0 group-hover:bg-[#192747]/30 transition-colors duration-500" />
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm group-hover:bg-[#fcba00] transition-colors duration-300">
                <span className="text-[#192747] font-bold text-sm tracking-wider uppercase">Editorial Design</span>
              </div>
            </motion.div>

          </div>

          {/* ----- COLUMN 4 (Narrow Right) ----- */}
          <div className="md:col-span-1 flex flex-col gap-6">
            
            {/* Top Right Image */}
            <motion.div 
              variants={itemVariants} 
              className="relative group rounded-xl md:rounded-2xl overflow-hidden h-[300px] md:h-[350px] shadow-sm cursor-pointer"
            >
              <img
                src={WedDevImage}
                alt="Web Development Dashboard"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#192747]/0 group-hover:bg-[#192747]/40 transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-bold text-lg">Zebral</p>
                <p className="text-[#fcba00] font-medium text-sm">UI/UX Design</p>
              </div>
            </motion.div>

            {/* Bottom Right Image */}
            <motion.div 
              variants={itemVariants} 
              className="relative group rounded-xl md:rounded-2xl overflow-hidden h-[300px] md:h-[350px] shadow-sm cursor-pointer"
            >
              <img
                src={MobileImage}
                alt="Social Media App"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#192747]/0 group-hover:bg-[#192747]/40 transition-colors duration-500" />
              
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-white font-bold text-lg">Social App</p>
                <p className="text-[#fcba00] font-medium text-sm">Mobile Development</p>
              </div>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default OurWorkSection;
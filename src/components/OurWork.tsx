"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import BrandImage from "../assets/Brand Identity.jpg";
import DigitalCampaign from "../assets/Digital Campaign.jpg";
import EditorialDesign from "../assets/Editorial Design.jpg";
import WedDevImage from "../assets/Web-development.jpg";
import MobileImage from "../assets/Mobile Mockup.jpg";

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

  /* ---------------- PORTFOLIO ITEMS ---------------- */
  const portfolioItems = [
    { src: BrandImage, alt: "Brand Identity Project" },
    { src: DigitalCampaign, alt: "Digital Campaign" },
    { src: EditorialDesign, alt: "Brochure Design" },
    { src: WedDevImage, alt: "Web Development Dashboard" },
    { src: MobileImage, alt: "Social Media App" },
  ];

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
            <span className="text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] font-black tracking-tighter leading-none">
              CREATIVE
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl font-light tracking-wide">
              WORK
            </span>
          </h2>
        </motion.div>

        {/* ================= STANDARD UNIFORM GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="
                relative 
                group 
                rounded-xl 
                md:rounded-2xl 
                overflow-hidden 
                aspect-[4/3] 
                bg-white
                shadow-sm 
                cursor-pointer
              "
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle dark overlay on hover to keep the interaction feeling premium */}
              <div className="absolute inset-0 bg-[#192747]/0 group-hover:bg-[#192747]/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default OurWorkSection;
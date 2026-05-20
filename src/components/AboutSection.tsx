"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import AboutImage from "../assets/Aboutimage.webp"

const AboutSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-[#f6f7fb] py-24 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Grid setup: 
          flex-col-reverse on mobile (puts content above image).
          lg:grid on desktop (side by side).
        */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-16 lg:gap-20">

          {/* LEFT IMAGE (Drops below text on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="w-full relative overflow-hidden rounded-[2rem] border border-[#192747]/10 shadow-[0_20px_50px_rgba(25,39,71,0.05)] aspect-[4/4] sm:aspect-square lg:aspect-[4/4]"
          >
            <img
              src={AboutImage}
              alt="Agency Team"
              className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </motion.div>

          {/* RIGHT CONTENT (Stays above image on mobile) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center w-full"
          >
            {/* HEADING */}
            <motion.div variants={itemVariants} className="mb-8 md:mb-10">
              <h2 className="uppercase text-[#192747]">
                <span className="block font-light text-[24px] sm:text-[28px] md:text-[32px] tracking-[0.15em] leading-tight mb-2 opacity-80">
                  A TOURAINE AGENCY ON A
                </span>

                <span className="block font-black text-[56px] sm:text-[64px] md:text-[76px] lg:text-[84px] leading-[0.9] tracking-tighter">
                  HUMAN SCALE
                </span>
              </h2>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.7] text-[#192747]/80 max-w-2xl mb-12 font-light"
            >
              For almost 3 years, we have been passionately combining{" "}
              <strong className="font-bold text-[#192747]">
                creativity, development, strategy
              </strong>{" "}
              and experience to offer our customers innovative{" "}
              <strong className="font-bold text-[#192747]">
                communication
              </strong>{" "}
              solutions.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              <span className="block mt-4 md:mt-0">
                Our Mission: To create a strong identity and guarantee increased
                visibility of your brand in its market.
              </span>
            </motion.p>

            {/* CTA */}
            <motion.a
              variants={itemVariants}
              href="/about"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group inline-flex items-center gap-4 w-fit mt-2 cursor-pointer"
            >
              {/* TEXT */}
              <div className="relative overflow-hidden h-[24px] sm:h-[28px] md:h-[34px]">
                {/* TOP TEXT */}
                <motion.span
                  variants={{
                    rest: { y: 0 },
                    hover: { y: "-100%" },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="
                    block
                    text-[16px] sm:text-[20px] md:text-[26px]
                    font-bold
                    leading-[24px] sm:leading-[28px] md:leading-[34px]
                    text-[#192747]
                    group-hover:text-[#fcba00]
                    uppercase
                    tracking-wide
                    transition-colors
                    duration-200
                    whitespace-nowrap
                  "
                >
                  Discover The Agency ESHA
                </motion.span>

                {/* BOTTOM TEXT */}
                <motion.span
                  variants={{
                    rest: { y: "100%" },
                    hover: { y: 0 },
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    block
                    text-[16px] sm:text-[20px] md:text-[26px]
                    font-bold
                    leading-[24px] sm:leading-[28px] md:leading-[34px]
                    text-[#fcba00]
                    uppercase
                    tracking-wide
                    whitespace-nowrap
                  "
                >
                  Discover The Agency ESHA
                </motion.span>
              </div>

              {/* ARROW */}
              <motion.div
                variants={{
                  rest: { x: 0 },
                  hover: { x: 8 },
                }}
                transition={{
                  duration: 0.3,
                }}
                className="flex items-center justify-center"
              >
                <motion.svg
                  className="w-[28px] h-[28px] md:w-[38px] md:h-[38px] text-[#192747] group-hover:text-[#fcba00] transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.path
                    variants={{
                      rest: { d: "M5 12H19" },
                      hover: { d: "M3 12H19" },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.path
                    variants={{
                      rest: { d: "M12 5L19 12L12 19" },
                      hover: { d: "M10 4L20 12L10 20" },
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.svg>
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
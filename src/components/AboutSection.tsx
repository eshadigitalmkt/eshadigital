"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

// import AnimatedButton from "./AnimatedButton";

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
    <section className="w-full bg-[#f5f5f3] py-20 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden"
          >
            <img
              src="/about-team.jpg"
              alt="Agency Team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* QUOTE */}
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-5 mb-10"
            >
              <motion.svg
                whileHover={{
                  rotate: -8,
                  scale: 1.08,
                }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 text-black mt-1"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.2 }}
                  d="M35 10 C 20 10, 10 15, 10 30"
                />

                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  d="M5 25 L 10 30 L 15 25"
                />
              </motion.svg>

              <div className="italic text-black/70 text-[22px] leading-relaxed">
                "Small but strong."
                <br />
                The Magpie Who Sings
              </div>
            </motion.div>

            {/* HEADING */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="uppercase text-black">
                <span className="block font-light text-[32px] tracking-wide leading-tight">
                  A TOURAINE AGENCY ON A
                </span>

                <span className="block font-bold text-[72px] leading-[0.95] tracking-tight">
                  HUMAN SCALE
                </span>
              </h2>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="text-[20px] leading-[1.65] text-black/80 max-w-2xl mb-12"
            >
              For almost 3 years, we have been passionately combining{" "}
              <strong className="font-bold text-black">
                creativity, development, strategy
              </strong>{" "}
              and experience to offer our customers innovative{" "}
              <strong className="font-bold text-black">
                communication
              </strong>{" "}
              solutions.
              <br />
              
              Our mission: to create a strong identity and guarantee increased
              visibility of your brand in its market.
            </motion.p>

            {/* CTA */}
<motion.a
  variants={itemVariants}
  href="#"
  initial="rest"
  whileHover="hover"
  animate="rest"
  className="group inline-flex items-center gap-4 w-fit mt-2"
>
  {/* TEXT */}
  <div className="relative overflow-hidden h-[34px]">
    {/* TOP TEXT */}
    <motion.span
      variants={{
        rest: { y: 0 },
        hover: { y: -40 },
      }}
      transition={{
        duration: 0.25,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="
        block
        text-[26px]
        font-bold
        leading-[33.8px]
        text-black
        uppercase
        tracking-wide
      "
    >
      Discover The Agency ESHA
    </motion.span>

    {/* BOTTOM TEXT */}
    <motion.span
      variants={{
        rest: { y: 40 },
        hover: { y: 0 },
      }}
      transition={{
        duration: 0.25,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className="
        absolute
        left-0
        top-0
        block
        text-[26px]
        font-bold
        leading-[33.8px]
        text-black
        uppercase
        tracking-wide
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
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-black"
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
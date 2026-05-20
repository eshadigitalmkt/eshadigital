"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

const TestimonialSection: React.FC = () => {
  /* ---------------- ANIMATIONS ---------------- */

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  /* ---------------- TESTIMONIALS ---------------- */

  const testimonials = [
    {
      name: "Rahul Verma",
      role: "Founder at Hyderabad Interiors",
      quote:
        "Working with ESHA was one of the best decisions for our business. Their team completely transformed our digital presence with a modern website and powerful branding strategy.",
    },
    {
      name: "Ananya Reddy",
      role: "Marketing Head at TechNova Hyderabad",
      quote:
        "The ESHA team understands creativity and business equally well. Their communication, design quality, and attention to detail exceeded all our expectations.",
    },
    {
      name: "Mohammed Faizan",
      role: "CEO at Urban Build Projects",
      quote:
        "From web development to digital campaigns, everything was delivered professionally and on time. Their creative approach helped us attract more clients in Hyderabad.",
    },
    {
      name: "Sneha Kapoor",
      role: "Creative Director at Bloom Studio",
      quote:
        "The branding and motion graphics created by ESHA gave our company a premium identity. The entire experience felt smooth, collaborative, and highly professional.",
    },
    {
      name: "Arjun Patel",
      role: "Director at Elevate Spaces",
      quote:
        "Their design thinking and execution are truly impressive. ESHA helped us create a strong online presence that perfectly represents our architecture business.",
    },
    {
      name: "Priya Sharma",
      role: "Founder at Luxe Living Hyderabad",
      quote:
        "We loved the clean design language and modern aesthetic ESHA brought to our project. Their team is talented, responsive, and deeply creative.",
    },
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-[#f6f7fb] py-24 px-6 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* ---------------- HEADER ---------------- */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* TITLE */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="uppercase text-[#192747]">
              <span className="block text-[24px] sm:text-[30px] font-light tracking-[0.2em] mb-3">
                TESTIMONIALS
              </span>

              <span className="block text-[52px] sm:text-[72px] font-bold leading-[0.95] tracking-tight">
                FROM OUR CLIENTS
              </span>
            </h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            variants={itemVariants}
            className="text-[17px] sm:text-[19px] leading-[1.8] text-[#192747]/70 max-w-4xl font-light"
          >
            Every successful collaboration tells a story. Here’s what our
            clients across Hyderabad say about working with ESHA and the impact
            we created together.
          </motion.p>
        </motion.div>

        {/* ---------------- TESTIMONIAL SLIDER ---------------- */}
        
        {/* Container handles the overflow hiding */}
        <div className="w-full overflow-hidden pb-10 pt-4">
          <motion.div
            className="flex w-max"
            // Slide from 0 to -50% of the duplicated track width
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35, // Adjust this value to make it slide faster or slower
              repeat: Infinity,
            }}
          >
            {/* ---------------- CARDS ---------------- */}
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="pr-8"> {/* Padding-right instead of gap ensures perfect seamless loop calculation */}
                <motion.div
                  className="
                    flex-none
                    w-[90vw]
                    sm:w-[760px]
                    min-h-[240px]
                    rounded-[2rem]
                    bg-white
                    border
                    border-[#192747]/5
                    px-8
                    py-7
                    sm:px-10
                    sm:py-8
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    flex
                    flex-col
                    justify-between
                  "
                  style={{
                    boxShadow: "0px 20px 50px rgba(25, 39, 71, 0.04)",
                  }}
                >
                  {/* CONTENT */}
                  <div>
                    {/* NAME */}
                    <h3
                      className="
                        text-[20px]
                        sm:text-[22px]
                        font-bold
                        text-[#192747]
                        leading-tight
                        tracking-tight
                        mb-1
                      "
                    >
                      {testimonial.name}
                    </h3>

                    {/* ROLE */}
                    <p
                      className="
                        italic
                        font-light
                        text-[15px]
                        sm:text-[16px]
                        text-[#192747]/60
                        mb-5
                        leading-relaxed
                        font-serif
                      "
                    >
                      {testimonial.role}
                    </p>

                    {/* QUOTE */}
                    <p
                      className="
                        text-[16px]
                        sm:text-[17px]
                        leading-[1.8]
                        text-[#192747]/80
                        max-w-[95%]
                        font-light
                      "
                    >
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* BOTTOM LINE */}
                  <div className="mt-6 w-full h-[1px] bg-[#192747]/10" />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
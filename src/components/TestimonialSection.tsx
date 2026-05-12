"use client";

import React, { useRef } from "react";
import { motion, type Variants } from "framer-motion";

const TestimonialSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

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

  /* ---------------- DRAG LOGIC ---------------- */

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;

    if (sliderRef.current) {
      sliderRef.current.classList.add("cursor-grabbing");
      sliderRef.current.classList.remove("cursor-grab");

      sliderRef.current.style.scrollSnapType = "none";

      startX.current = e.pageX - sliderRef.current.offsetLeft;
      scrollLeft.current = sliderRef.current.scrollLeft;
    }
  };

  const handleMouseLeaveOrUp = () => {
    isDragging.current = false;

    if (sliderRef.current) {
      sliderRef.current.classList.add("cursor-grab");
      sliderRef.current.classList.remove("cursor-grabbing");

      sliderRef.current.style.scrollSnapType = "";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !sliderRef.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;

    const walk = (x - startX.current) * 1.5;

    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="w-full bg-[#f5f5f3] py-24 px-6 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        {/* ---------------- HEADER ---------------- */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* SMALL QUOTE */}
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 mb-10"
          >
            <svg
              className="w-10 h-10 text-black mt-1"
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

            <div className="italic text-black/70 text-[18px] leading-relaxed">
              "Real experiences. Real trust."
              <br />
              Our Hyderabad Clients
            </div>
          </motion.div>

          {/* TITLE */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="uppercase text-black">
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
            className="text-[17px] sm:text-[19px] leading-[1.8] text-black/70 max-w-4xl"
          >
            Every successful collaboration tells a story. Here’s what our
            clients across Hyderabad say about working with ESHA and the impact
            we created together.
          </motion.p>
        </motion.div>

        {/* ---------------- TESTIMONIAL SLIDER ---------------- */}

        <motion.div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex
            gap-8
            overflow-x-auto
            pb-10
            pt-4
            snap-x
            snap-mandatory
            cursor-grab
            select-none
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* HIDE SCROLLBAR */}
          <style>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* ---------------- CARDS ---------------- */}

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="
                flex-none
                w-[90vw]
                sm:w-[760px]
                min-h-[240px]
                rounded-[6px]
                bg-white
                px-8
                py-7
                sm:px-10
                sm:py-8
                snap-center
                transition-all
                duration-500
                hover:-translate-y-1
                flex
                flex-col
                justify-between
              "
              style={{
                boxShadow: "0px 4px 18px rgba(0,0,0,0.08)",
              }}
            >
              {/* CONTENT */}
              <div>
                {/* NAME */}
                <h3
                  className="
                    text-[20px]
                    sm:text-[22px]
                    font-semibold
                    text-black
                    leading-tight
                    tracking-tight
                    mb-1
                    pointer-events-none
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
                    text-black/60
                    mb-5
                    leading-relaxed
                    pointer-events-none
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
                    text-black/80
                    max-w-[95%]
                    pointer-events-none
                  "
                >
                  "{testimonial.quote}"
                </p>
              </div>

              {/* BOTTOM LINE */}
              <div className="mt-6 w-full h-[1px] bg-black/10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
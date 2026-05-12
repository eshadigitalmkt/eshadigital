"use client";

import React, { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import ContactSection from "../components/ContactSection";
import AnimatedText from "../components/AnimatedText";

/* =========================================================
   SERVICE DATA
========================================================= */

interface Service {
  id: string;
  titleBold1: string;
  titleLight: string;
  titleBold2?: string;
  description: React.ReactNode;
}

const servicesData: Service[] = [
  {
    id: "marketing",
    titleBold1: "MARKETING",
    titleLight: "STRATEGY",
    description: (
      <p className="text-black/65 font-light leading-[1.9] text-[17px]">
        We build comprehensive digital marketing roadmaps to ensure your
        brand reaches the right audience at the right time with maximum
        impact and measurable growth.
      </p>
    ),
  },

  {
    id: "design",
    titleBold1: "BRAND",
    titleLight: "IDENTITY &",
    titleBold2: "DESIGN",
    description: (
      <p className="text-black/65 font-light leading-[1.9] text-[17px]">
        We craft modern visual identities that help businesses stand out.
        From logo systems to premium brand guidelines, every design is
        created with clarity, consistency, and elegance.
      </p>
    ),
  },

  {
    id: "development",
    titleBold1: "WEBSITE",
    titleLight: "& E-COMMERCE",
    titleBold2: "DEVELOPMENT",
    description: (
      <div className="space-y-6 text-black/65 font-light leading-[1.9] text-[17px]">
        <p>
          ESHA designs and develops{" "}
          <span className="text-black font-semibold">
            custom showcase and e-commerce websites
          </span>{" "}
          optimized for performance, SEO, and user experience.
        </p>

        <p>
          Every project is built with modern technologies, responsive layouts,
          fast loading speed, and premium interaction design to help your
          brand grow online.
        </p>
      </div>
    ),
  },

  {
    id: "motion",
    titleBold1: "MOTION",
    titleLight: "DESIGN &",
    titleBold2: "VIDEO",
    description: (
      <p className="text-black/65 font-light leading-[1.9] text-[17px]">
        Bring your brand to life with cinematic visuals, animation, and
        engaging motion experiences designed for social media, branding,
        campaigns, and storytelling.
      </p>
    ),
  },

  {
    id: "social",
    titleBold1: "SOCIAL",
    titleLight: "MEDIA &",
    titleBold2: "CONTENT",
    description: (
      <p className="text-black/65 font-light leading-[1.9] text-[17px]">
        We create modern content strategies and social campaigns that connect
        brands with audiences through creativity, consistency, and impactful
        communication.
      </p>
    ),
  },
];

/* =========================================================
   SLIDING GALLERY
========================================================= */

const SlidingGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const [startX, setStartX] = useState(0);

  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;

    setIsDragging(true);

    setStartX(e.pageX - scrollRef.current.offsetLeft);

    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;

    const walk = (x - startX) * 1.5;

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative group w-full mt-8 lg:mt-0">
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`
          flex
          gap-4
          overflow-x-auto
          pb-4
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          ${
            isDragging
              ? "cursor-grabbing select-none"
              : "cursor-grab snap-x snap-mandatory"
          }
        `}
      >
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="
              min-w-[85%]
              md:min-w-[65%]
              aspect-video
              bg-[#f5f5f3]
              border
              border-black/10
              flex
              items-center
              justify-center
              snap-center
              relative
              overflow-hidden
              transition-colors
              pointer-events-none
              group-hover:bg-[#ececeb]
            "
          >
            <span className="text-black/40 text-sm tracking-wide uppercase">
              Portfolio Image {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================================================
   ACCORDION
========================================================= */

const ServicesAccordion: React.FC = () => {
  const [openSectionId, setOpenSectionId] =
    useState<string | null>("development");

  const toggleSection = (id: string) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="border-t border-black/10">
      {servicesData.map((service) => {
        const isOpen = openSectionId === service.id;

        return (
          <div
            key={service.id}
            className="border-b border-black/10 overflow-hidden"
          >
            {/* HEADER */}

            <button
              onClick={() => toggleSection(service.id)}
              className="
                w-full
                flex
                items-center
                justify-between
                py-7
                md:py-9
                group
              "
            >
              <h2
                className="
                  text-xl
                  md:text-3xl
                  lg:text-4xl
                  uppercase
                  tracking-wide
                  text-left
                  pr-4
                  text-black
                  group-hover:text-[#fcba00]
                  transition-colors
                  duration-300
                "
              >
                <span className="font-bold">
                  {service.titleBold1}
                </span>{" "}

                <span className="font-light">
                  {service.titleLight}
                </span>

                {service.titleBold2 && (
                  <>
                    {" "}
                    <span className="font-bold">
                      {service.titleBold2}
                    </span>
                  </>
                )}
              </h2>

              {/* PLUS ICON */}

              <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
                <span
                  className={`
                    absolute
                    block
                    w-6
                    h-[2px]
                    bg-black
                    group-hover:bg-[#fcba00]
                    transition-all
                    duration-300
                    ${isOpen ? "rotate-45" : ""}
                  `}
                />

                <span
                  className={`
                    absolute
                    block
                    w-6
                    h-[2px]
                    bg-black
                    group-hover:bg-[#fcba00]
                    transition-all
                    duration-300
                    ${isOpen ? "-rotate-45" : "rotate-90"}
                  `}
                />
              </div>
            </button>

            {/* CONTENT */}

            <div
              className={`
                grid
                transition-all
                duration-500
                ease-in-out
                ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-12"
                    : "grid-rows-[0fr] opacity-0 pb-0"
                }
              `}
            >
              <div className="overflow-hidden">
                <div
                  className="
                    flex
                    flex-col
                    lg:grid
                    lg:grid-cols-2
                    gap-10
                    lg:gap-24
                    pt-4
                  "
                >
                  {/* DESCRIPTION */}

                  <div>{service.description}</div>

                  {/* GALLERY */}

                  <div className="overflow-hidden">
                    <SlidingGallery />

                    <a
                      href="#"
                      className="
                        inline-flex
                        items-center
                        gap-4
                        mt-6
                        text-black
                        hover:text-[#fcba00]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[12px]
                        hover:gap-6
                        transition-all
                        w-fit
                        group
                      "
                    >
                      Discover The Portfolio

                      <svg
                        className="
                          w-5
                          h-5
                          transform
                          group-hover:translate-x-1
                          transition-transform
                        "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const Services = () => {
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
    hidden: {
      opacity: 0,
      y: 30,
    },

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
    <>
      {/* =========================================================
         HERO
      ========================================================= */}

      <section className="flex flex-col items-center justify-center py-24 px-6 bg-white text-black overflow-hidden">

  {/* ================= TITLE ================= */}

  <div className="text-center mb-10 relative leading-[1] uppercase">

    {/* LINE 1 */}
    <div className="overflow-hidden pb-3 flex items-center justify-center flex-wrap gap-x-4">

      <AnimatedText
        text="TAILOR-MADE"
        delay={0}
        className="
          text-4xl
          md:text-5xl
          lg:text-7xl
          font-black
          tracking-[0.08em]
          text-black
        "
      />

      <AnimatedText
        text="SOLUTIONS"
        delay={0.35}
        className="
          text-4xl
          md:text-5xl
          lg:text-7xl
          font-light
          tracking-[0.12em]
          text-black
        "
      />
    </div>

    {/* LINE 2 */}
    <div className="overflow-hidden pb-3 flex items-center justify-center flex-wrap gap-x-4">

      <motion.span
        initial={{
          opacity: 0,
          y: 60,
          filter: "blur(8px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          text-4xl
          md:text-5xl
          lg:text-7xl
          font-light
          tracking-[0.12em]
          text-black
        "
      >
        &
      </motion.span>

      <AnimatedText
        text="PROJECTS"
        delay={0.8}
        className="
          text-4xl
          md:text-5xl
          lg:text-7xl
          font-light
          tracking-[0.12em]
          text-black
        "
      />

      <AnimatedText
        text="THAT"
        delay={1.1}
        className="
          text-4xl
          md:text-5xl
          lg:text-7xl
          font-light
          tracking-[0.12em]
          text-black
        "
      />

      <AnimatedText
        text="STAND OUT!"
        delay={1.35}
        className="
          text-4xl
          md:text-5xl
          lg:text-7xl
          font-black
          tracking-tight
          text-black
        "
      />
    </div>
  </div>

  {/* ================= QUOTE ================= */}

  <motion.div
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: true }}
    transition={{
      delay: 1.6,
      duration: 1,
      ease: "easeOut",
    }}
    className="relative flex flex-col items-center mt-6"
  >

    {/* ARROW */}

    <motion.div
      initial={{
        opacity: 0,
        rotate: 20,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        rotate: 5,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 1.7,
        duration: 1,
      }}
      className="
        absolute
        -top-10
        -left-12
        md:-top-16
        md:-left-20
        text-black/70
        scale-75
        md:scale-100
      "
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 5L4 9l4 4" />
        <path d="M4 9c6 0 10 4 10 11" />
      </svg>
    </motion.div>

    {/* TEXT */}

    <p
      className="
        italic
        text-lg
        md:text-xl
        text-black/60
        leading-relaxed
      "
    >
      Become our source of inspiration
    </p>
  </motion.div>
</section>

      {/* =========================================================
         SERVICES SECTION
      ========================================================= */}

      <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-24 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* TOP SECTION */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-16
              lg:gap-24
              mb-20
            "
          >
            {/* LEFT */}

            <motion.div variants={itemVariants}>
              <h2
                className="
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  tracking-tight
                  mb-8
                  uppercase
                  text-black
                "
              >
                <span className="font-black">
                  ESHA'S
                </span>

                <br />

                <span className="font-light text-black/65">
                  EXPERTISE
                </span>
              </h2>

              {/* QUOTE */}

              <div className="flex items-start gap-4 ml-2 sm:ml-8 mt-12">

                <svg
                  width="30"
                  height="40"
                  viewBox="0 0 30 40"
                  fill="none"
                  className="text-black mt-1 opacity-70"
                >
                  <path
                    d="M25 35 C 15 35, 5 25, 5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  <path
                    d="M1 10 L 5 4 L 11 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p
                  className="
                    italic
                    text-sm
                    sm:text-base
                    text-black/60
                    leading-relaxed
                  "
                >
                  "Elegance exceeds time."
                  <br />

                  <span className="text-black/50">
                    Armani
                  </span>
                </p>
              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              variants={itemVariants}
              className="flex items-center"
            >
              <p
                className="
                  text-lg
                  sm:text-xl
                  text-black/70
                  leading-[1.9]
                "
              >
                At ESHA, creative elegance and modern strategy drive
                every project we create. Specialists in{" "}
                <strong className="text-black font-bold">
                  branding, marketing strategy,
                  web development,
                </strong>{" "}
                and{" "}
                <strong className="text-black font-bold">
                  digital communication,
                </strong>{" "}
                we craft tailor-made experiences that elevate brands
                and create meaningful impact.
              </p>
            </motion.div>
          </motion.div>

          {/* ACCORDION */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full mb-24"
          >
            <ServicesAccordion />
          </motion.div>

        </div>
      </section>
      <ContactSection />
    </>
  );
};

export default Services;
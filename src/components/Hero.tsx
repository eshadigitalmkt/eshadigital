"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import AnimatedText from "./AnimatedText";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      className="
        relative
        w-full
        min-h-screen
        bg-[#f6f7fb]
        text-[#192747]
        flex
        items-center
        justify-center
        overflow-hidden
        px-6
        lg:px-12
        mt-[-15vh]
      "
    >
      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 flex flex-col items-center text-center mt-[-2vh]">

        {/* ================= HEADING ================= */}

        <h1
          className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-[4.8rem]
            leading-[1]
            uppercase
          "
        >
          {/* LINE 1 */}
          <div className="overflow-hidden pb-2 flex items-center justify-center flex-wrap gap-x-4">

            <AnimatedText
              text="CREATIVE"
              delay={0}
              className="font-black tracking-tight text-[#192747]"
            />

            <motion.span
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="font-light lowercase tracking-wide text-[#192747]"
            >
              &
            </motion.span>

            <AnimatedText
              text="HUMAN"
              delay={0.25}
              className="font-light tracking-[0.25em] text-[#192747]/45"
            />
          </div>

          {/* LINE 2 */}
          <div className="overflow-hidden pb-2 flex items-center justify-center flex-wrap gap-x-4">

            <AnimatedText
              text="DEVELOPMENT"
              delay={0.5}
              className="font-light tracking-[0.18em] text-[#192747]"
            />

            <AnimatedText
              text="AGENCY"
              delay={0.8}
              className="font-black tracking-tight text-[#192747]"
            />
          </div>
        </h1>

       
      </div>

      {/* ================= RIGHT SOCIALS ================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 40,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 1,
        }}
        className="
          absolute
          right-6
          md:right-10
          lg:right-14
          bottom-10
          z-20
          flex
          flex-col
          items-center
        "
      >
        {/* LINE */}
        <div className="w-[1px] h-24 bg-[#192747]/20 mb-5" />

        {/* SOCIAL ICONS */}
        <div className="flex flex-col items-center gap-5">

          {/* FACEBOOK */}
          <motion.a
            href="https://www.facebook.com/profile.php?id=61563720044170"
            aria-label="Facebook"
            whileHover={{
              y: -4,
              color: "#fcba00",
            }}
            transition={{
              duration: 0.3,
            }}
            className="text-[#192747]"
          >
            <svg
              className="w-[17px] h-[17px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </motion.a>

          {/* INSTAGRAM */}
          <motion.a
            href="https://www.instagram.com/eshadigitalmarketing/"
            aria-label="Instagram"
            whileHover={{
              y: -4,
              color: "#fcba00",
            }}
            transition={{
              duration: 0.3,
            }}
            className="text-[#192747]"
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
              />
              <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </motion.a>

          {/* X (TWITTER) */}
          <motion.a
            href="https://x.com/LathaLat2026"
            aria-label="X (Twitter)"
            whileHover={{
              y: -4,
              color: "#fcba00",
            }}
            transition={{
              duration: 0.3,
            }}
            className="text-[#192747]"
          >
            <svg
              className="w-[16px] h-[16px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.04H5.078z" />
            </svg>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href="https://www.linkedin.com/in/esha-marketing-b9617a40a/"
            aria-label="LinkedIn"
            whileHover={{
              y: -4,
              color: "#fcba00",
            }}
            transition={{
              duration: 0.3,
            }}
            className="text-[#192747]"
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
          </motion.a>

          {/* YOUTUBE */}
          <motion.a
            href="https://www.youtube.com/channel/UC-udKvmyd-UOUneoQNXuuOg"
            aria-label="YouTube"
            whileHover={{
              y: -4,
              color: "#fcba00",
            }}
            transition={{
              duration: 0.3,
            }}
            className="text-[#192747]"
          >
            <svg
              className="w-[18px] h-[18px]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
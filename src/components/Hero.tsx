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
        bg-white
        text-black
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
              className="font-black tracking-tight"
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
              className="font-light lowercase tracking-wide"
            >
              &
            </motion.span>

            <AnimatedText
              text="HUMAN"
              delay={0.25}
              className="font-light tracking-[0.25em] text-black/45"
            />
          </div>

          {/* LINE 2 */}
          <div className="overflow-hidden pb-2 flex items-center justify-center flex-wrap gap-x-4">

            <AnimatedText
              text="DEVELOPMENT"
              delay={0.5}
              className="font-light tracking-[0.18em]"
            />

            <AnimatedText
              text="AGENCY"
              delay={0.8}
              className="font-black tracking-tight"
            />
          </div>
        </h1>

        {/* ================= SUBTEXT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: "easeOut",
          }}
          className="relative mt-14 flex flex-col items-center"
        >

          {/* ARROW */}

          <motion.svg
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={{
              opacity: 1,
              pathLength: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 1.4,
            }}
            className="
              absolute
              -left-16
              -top-14
              w-14
              h-14
              text-black/80
              hidden
              md:block
            "
            viewBox="0 0 100 100"
            fill="none"
          >
            <motion.path
              d="M70 80 C 50 80, 30 60, 30 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            <motion.path
              d="M15 35 L 30 20 L 45 25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>

          {/* TEXT */}

          <p
            className="
              text-[13px]
              md:text-[15px]
              leading-[1.8]
              tracking-wide
              text-black/70
              max-w-sm
            "
          >
            Marketing, communication and web
            <br className="hidden md:block" />
            development agency in Hyderabad
          </p>
        </motion.div>
      </div>

      {/* ================= LEFT ROTATING CIRCLE ================= */}

      <div
        className="
          absolute
          bottom-8
          left-4
          lg:left-10
          hidden
          sm:block
          z-20
        "
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="relative w-[145px] h-[145px] cursor-pointer"
        >
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full text-black"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            <defs>
              <path
                id="circlePath"
                d="
                  M50,50
                  m-40,0
                  a40,40 0 1,1 80,0
                  a40,40 0 1,1 -80,0
                "
              />
            </defs>

            <text
              fill="currentColor"
              fontSize="8"
              letterSpacing="5"
              className="uppercase font-light"
            >
              <textPath href="#circlePath" startOffset="0%">
                DISCOVER OUR SERVICES • DISCOVER OUR SERVICES •
              </textPath>
            </text>
          </motion.svg>

          {/* CENTER ICON */}

          <div className="absolute inset-0 flex items-center justify-center floating">
            <svg
              className="w-7 h-7 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m0 0l-6-6m6 6l6-6"
              />
            </svg>
          </div>
        </motion.div>
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
  <div className="w-[1px] h-24 bg-black/20 mb-5" />

  {/* SOCIAL ICONS */}
  <div className="flex flex-col items-center gap-5">

    {/* FACEBOOK */}
    <motion.a
      href="#"
      aria-label="Facebook"
      whileHover={{
        y: -4,
        color: "#fcba00",
      }}
      transition={{
        duration: 0.3,
      }}
      className="text-black"
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
      href="#"
      aria-label="Instagram"
      whileHover={{
        y: -4,
        color: "#fcba00",
      }}
      transition={{
        duration: 0.3,
      }}
      className="text-black"
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

    {/* LINKEDIN */}
    <motion.a
      href="#"
      aria-label="LinkedIn"
      whileHover={{
        y: -4,
        color: "#fcba00",
      }}
      transition={{
        duration: 0.3,
      }}
      className="text-black"
    >
      <svg
        className="w-[18px] h-[18px]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    </motion.a>

    {/* WHATSAPP */}
    <motion.a
      href="#"
      aria-label="WhatsApp"
      whileHover={{
        y: -4,
        color: "#fcba00",
      }}
      transition={{
        duration: 0.3,
      }}
      className="text-black"
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
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </motion.a>

  </div>
</motion.div>
    </section>
  );
};

export default Hero;
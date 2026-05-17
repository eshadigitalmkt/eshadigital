"use client";

import { motion } from "framer-motion";

interface AnimatedButtonProps {
  text: string;
  className?: string;
}

export default function AnimatedButton({
  text,
  className = "",
}: AnimatedButtonProps) {
  const letters = text.split("");

  return (
    <div className="w-full flex justify-center py-10 sm:py-14 md:py-20">
      <motion.button
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        className={`
          relative
          group
          w-full
          max-w-[95%]
          sm:max-w-[620px]
          lg:max-w-[700px]
          
          h-[58px]
          sm:h-[64px]
          md:h-[70px]

          bg-white
          overflow-hidden

          flex
          items-center
          justify-center

          px-5
          sm:px-8
          md:px-10

          transition-all
          duration-300

          ${className}
        `}
      >
        {/* ================= TEXT ================= */}

        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          
          {/* FIX: Removed 'flex-wrap' and changed mobile padding to px-4 so it fits on small screens */}
          <div className="flex items-center justify-center px-4 sm:px-12">
            
            {letters.map((char, index) => (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden

                  h-[24px]
                  sm:h-[30px]
                  md:h-[34px]
                "
              >
                {/* TOP TEXT */}

                <motion.span
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -60 },
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                    delay: index * 0.018,
                  }}
                  className="
                    block

                    text-[12px]
                    sm:text-[20px]
                    md:text-[26px]

                    font-bold
                    uppercase

                    leading-[24px]
                    sm:leading-[30px]
                    md:leading-[33.8px]

                    tracking-[0.08em]

                    text-black

                    px-[1px]
                    sm:px-[2px]

                    whitespace-nowrap
                  "
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* BOTTOM TEXT */}

                <motion.span
                  variants={{
                    initial: { y: 60 },
                    hover: { y: 0 },
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                    delay: index * 0.018,
                  }}
                  className="
                    absolute
                    left-0
                    top-0

                    block

                    text-[12px]
                    sm:text-[20px]
                    md:text-[26px]

                    font-bold
                    uppercase

                    leading-[24px]
                    sm:leading-[30px]
                    md:leading-[33.8px]

                    tracking-[0.08em]

                    text-black

                    px-[1px]
                    sm:px-[2px]

                    whitespace-nowrap
                  "
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ARROW ================= */}

        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: 6 },
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute

            right-4
            sm:right-6
            md:right-8

            text-black
          "
        >
          <svg
            className="
              w-4
              h-4
              sm:w-5
              sm:h-5
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </motion.button>
    </div>
  );
}
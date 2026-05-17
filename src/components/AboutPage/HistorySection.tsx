"use client";

import { motion, type Variants } from "framer-motion";

const HistorySection = () => {
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
    hidden: {
      opacity: 0,
      y: 40,
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
    <section className="w-full bg-[#f6f7fb] py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20"
        >

          {/* ================= LEFT SIDE ================= */}

          <motion.div variants={itemVariants}>

            {/* TITLE */}
            <div className="uppercase leading-none mb-14">

              <span
                className="
                  block
                  text-[48px]
                  sm:text-[70px]
                  font-light
                  tracking-tight
                  text-[#192747]
                "
              >
                OUR
              </span>

              <span
                className="
                  block
                  text-[64px]
                  sm:text-[92px]
                  lg:text-[105px]
                  font-black
                  tracking-[-0.04em]
                  text-[#192747]
                  -mt-1
                "
              >
                STORY
              </span>
            </div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            variants={itemVariants}
            className="
              text-[#192747]/85
              text-[18px]
              sm:text-[22px]
              leading-[1.55]
              tracking-[0.01em]
            "
          >
            {/* PARAGRAPH 1 */}
            <p className="mb-10 lg:mb-12 font-light">
              ESHA was built from the shared vision of passionate creators,
              strategists, and developers who wanted to redefine how brands
              connect with people in the digital world. What started as a small
              creative collaboration has evolved into a modern{" "}
              <strong className="font-bold text-[#192747]">
                digital marketing and development agency
              </strong>{" "}
              focused on innovation, storytelling, and measurable business
              growth.
            </p>

            {/* PARAGRAPH 2 */}
            <p className="mb-10 lg:mb-12 font-light">
              Our agency combines{" "}
              <strong className="font-bold text-[#192747]">
                branding, web development, social media marketing
              </strong>{" "}
              and creative strategy to help businesses stand out in today’s
              competitive digital landscape. We believe successful brands are
              built through{" "}
              <strong className="font-bold text-[#192747]">
                creativity, consistency, and meaningful experiences
              </strong>
              .
            </p>

            {/* PARAGRAPH 3 */}
            <p className="mb-16 lg:mb-20 font-light">
              Every project we create is driven by collaboration, trust, and a
              deep understanding of our clients’ ambitions. Our mission is to
              craft modern digital experiences that inspire audiences and create
              long-term impact for brands across Hyderabad and beyond.
            </p>

            {/* CTA */}
            <motion.a
              href="/contact"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="
                group
                inline-flex
                items-center
                gap-4
                cursor-pointer
                w-fit
              "
            >
              {/* TEXT */}
              <div className="relative overflow-hidden h-[28px] sm:h-[34px] md:h-[40px]">

                {/* TOP TEXT */}
                <motion.span
                  variants={{
                    rest: { y: 0 },
                    hover: { y: "-100%" },
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="
                    block
                    text-[18px] sm:text-[22px] md:text-[28px]
                    font-bold
                    text-[#192747]
                    group-hover:text-[#fcba00]
                    leading-tight
                    transition-colors
                    duration-200
                    whitespace-nowrap
                  "
                >
                  Let’s Build Your Brand
                </motion.span>

                {/* BOTTOM TEXT */}
                <motion.span
                  variants={{
                    rest: { y: "100%" },
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
                    text-[18px] sm:text-[22px] md:text-[28px]
                    font-bold
                    text-[#fcba00]
                    leading-tight
                    whitespace-nowrap
                  "
                >
                  Let’s Build Your Brand
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
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[32px] h-[32px] md:w-[42px] md:h-[42px] text-[#192747] group-hover:text-[#fcba00] transition-colors duration-200"
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
                </svg>
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;
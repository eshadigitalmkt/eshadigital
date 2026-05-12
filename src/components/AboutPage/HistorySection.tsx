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
    <section className="w-full bg-[#f5f5f3] py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-20"
        >

          {/* ================= LEFT SIDE ================= */}

          <motion.div variants={itemVariants}>

            {/* TITLE */}
            <div className="uppercase leading-none mb-14">

              <span
                className="
                  block
                  text-[56px]
                  sm:text-[70px]
                  font-light
                  tracking-tight
                  text-black
                "
              >
                OUR
              </span>

              <span
                className="
                  block
                  text-[76px]
                  sm:text-[92px]
                  lg:text-[105px]
                  font-black
                  tracking-[-0.04em]
                  text-black
                  -mt-1
                "
              >
                STORY
              </span>
            </div>

            {/* QUOTE */}
            <div className="flex items-start gap-5">

              {/* HAND DRAWN ARROW */}
              <svg
                className="w-10 h-10 text-black mt-1"
                viewBox="0 0 40 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M30 30 C 18 30, 10 20, 10 5" />
                <path d="M5 15 L 10 5 L 18 12" />
              </svg>

              {/* TEXT */}
              <div
                className="
                  italic
                  text-black/70
                  text-[22px]
                  leading-[1.4]
                "
              >
                "Creativity drives growth."
                <br />
                ESHA Agency
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            variants={itemVariants}
            className="
              text-black/85
              text-[20px]
              sm:text-[22px]
              leading-[1.55]
              tracking-[0.01em]
            "
          >
            {/* PARAGRAPH 1 */}
            <p className="mb-12">
              ESHA was built from the shared vision of passionate creators,
              strategists, and developers who wanted to redefine how brands
              connect with people in the digital world. What started as a small
              creative collaboration has evolved into a modern{" "}
              <strong className="font-bold text-black">
                digital marketing and development agency
              </strong>{" "}
              focused on innovation, storytelling, and measurable business
              growth.
            </p>

            {/* PARAGRAPH 2 */}
            <p className="mb-12">
              Our agency combines{" "}
              <strong className="font-bold text-black">
                branding, web development, social media marketing
              </strong>{" "}
              and creative strategy to help businesses stand out in today’s
              competitive digital landscape. We believe successful brands are
              built through{" "}
              <strong className="font-bold text-black">
                creativity, consistency, and meaningful experiences
              </strong>
              .
            </p>

            {/* PARAGRAPH 3 */}
            <p className="mb-20">
              Every project we create is driven by collaboration, trust, and a
              deep understanding of our clients’ ambitions. Our mission is to
              craft modern digital experiences that inspire audiences and create
              long-term impact for brands across Hyderabad and beyond.
            </p>

            {/* CTA */}
            <motion.a
              href="#"
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="
                group
                inline-flex
                items-center
                gap-5
                cursor-pointer
                w-fit
              "
            >
              {/* TEXT */}
              <div className="relative overflow-hidden h-[40px]">

                {/* TOP TEXT */}
                <motion.span
                  variants={{
                    rest: { y: 0 },
                    hover: { y: -45 },
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="
                    block
                    text-[28px]
                    font-semibold
                    text-black
                    leading-tight
                  "
                >
                  Let’s Build Your Brand
                </motion.span>

                {/* BOTTOM TEXT */}
                <motion.span
                  variants={{
                    rest: { y: 45 },
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
                    text-[28px]
                    font-semibold
                    text-black
                    leading-tight
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
                  width="42"
                  height="42"
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
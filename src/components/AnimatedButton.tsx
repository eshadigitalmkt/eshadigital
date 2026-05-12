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
    <div className="w-full flex justify-center bg-black py-20">
      <motion.button
        initial="initial"
        whileHover="hover"
        className={`
          relative
          group
          w-full
          max-w-[700px]
          h-[70px]
          bg-white
          overflow-hidden
          flex
          items-center
          justify-center
          px-10
          ${className}
        `}
      >
        {/* MAIN TEXT */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="flex">
            {letters.map((char, index) => (
              <div
                key={index}
                className="relative overflow-hidden h-[34px]"
              >
                {/* TOP */}
                <motion.span
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -60 },
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                    delay: index * 0.02,
                  }}
                  className="
                    block
                    font-tensor
                    text-[26px]
                    font-bold
                    leading-[33.8px]
                    uppercase
                    text-black
                    px-[2px]
                  "
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>

                {/* BOTTOM */}
                <motion.span
                  variants={{
                    initial: { y: 60 },
                    hover: { y: 0 },
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.215, 0.61, 0.355, 1],
                    delay: index * 0.02,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    block
                    font-tensor
                    text-[26px]
                    font-bold
                    leading-[33.8px]
                    uppercase
                    text-black
                    px-[2px]
                  "
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* ARROW */}
        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: 6 },
          }}
          transition={{ duration: 0.25 }}
          className="absolute right-8 text-black  transition-colors duration-300"
        >
          <svg
            className="w-5 h-5"
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
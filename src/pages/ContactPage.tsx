import React from 'react';
import AnimatedText from '../components/AnimatedText';
import {motion} from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24 selection:bg-zinc-200">
      
      {/* 1. TYPOGRAPHY HEADER (From previous step) */}
      <section className="flex flex-col items-center justify-center text-zinc-900 py-20 px-6 overflow-hidden">

  {/* ================= TITLE ================= */}

  <div className="text-center mb-8 relative leading-[1] uppercase">

    {/* LINE 1 */}
    <div className="overflow-hidden pb-3 flex items-center justify-center flex-wrap gap-x-4">

      <AnimatedText
        text="DID WE"
        delay={0}
        className="
          text-4xl
          md:text-6xl
          lg:text-7xl
          font-light
          tracking-[0.12em]
          text-zinc-900
        "
      />

      <AnimatedText
        text="SPARK"
        delay={0.35}
        className="
          text-4xl
          md:text-6xl
          lg:text-7xl
          font-black
          tracking-tight
          text-zinc-900
        "
      />
    </div>

    {/* LINE 2 */}
    <div className="overflow-hidden pb-3 flex items-center justify-center flex-wrap gap-x-4">

      <AnimatedText
        text="YOUR"
        delay={0.7}
        className="
          text-4xl
          md:text-6xl
          lg:text-7xl
          font-light
          tracking-[0.12em]
          text-zinc-900
        "
      />

      <AnimatedText
        text="CURIOSITY?"
        delay={1}
        className="
          text-4xl
          md:text-6xl
          lg:text-7xl
          font-black
          tracking-tight
          text-zinc-900
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
      delay: 1.3,
      duration: 1,
      ease: "easeOut",
    }}
    className="relative flex flex-col items-center mt-4"
  >

    {/* ARROW */}

    <motion.div
      initial={{
        opacity: 0,
        rotate: 25,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        rotate: 15,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 1.4,
        duration: 1,
      }}
      className="
        absolute
        -top-8
        -left-10
        md:-top-12
        md:-left-16
        text-zinc-800
        scale-75
        md:scale-100
      "
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 5L4 9l4 4" />
        <path d="M4 9c6 0 12 4 12 11" />
      </svg>
    </motion.div>

    {/* TEXT */}

    <div className="text-center">

      <p
        className="
          italic
          text-lg
          md:text-xl
          text-zinc-600
          font-serif
          mb-1
        "
      >
        "Ignite your digital presence!"
      </p>

      <p
        className="
          text-xs
          md:text-sm
          tracking-[0.2em]
          uppercase
          font-bold
          text-zinc-800
        "
      >
        ESHA Digital Marketing
      </p>
    </div>
  </motion.div>
</section>

      {/* 2. CONTACT DETAILS & FORM SECTION */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Info & Map */}
          <div className="flex flex-col">
            <p className="text-2xl md:text-3xl font-light text-zinc-800 leading-snug mb-8 font-serif">
              Come visit us, give us a call or fill out this form to start a discussion!
            </p>

            {/* Dark Contact Box */}
            <div className="bg-[#0a0a0a] text-white flex-grow flex flex-col">
              <div className="p-10 space-y-10">
                
                {/* Email */}
                <div className="flex items-start gap-6">
                  <svg className="w-8 h-8 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <p className="text-xl font-light tracking-wide">info@eshadigital.com</p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-6">
                  <svg className="w-8 h-8 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div className="space-y-1">
                    <p className="text-xl font-medium tracking-wide">Esha Digital Agency</p>
                    <p className="text-lg font-light text-zinc-300">Tech Hub, Madhapur</p>
                    <p className="text-lg font-light text-zinc-300">Hyderabad, Telangana</p>
                    <p className="text-lg font-light text-zinc-300">500081 IND</p>
                  </div>
                </div>
              </div>

              {/* Placeholder for the Map Image */}
              <div className="w-full h-64 bg-zinc-800 mt-auto relative overflow-hidden border-t border-zinc-700">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-zinc-500 text-sm uppercase tracking-widest">[ Map Integration Here ]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Field */}
              <div className="flex flex-col">
                <label className="text-xs tracking-widest text-zinc-800 uppercase mb-2">Last Name / First Name*</label>
                <input 
                  type="text" 
                  required
                  className="w-full border-b border-zinc-400 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
                />
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label className="text-xs tracking-widest text-zinc-800 uppercase mb-2">Email*</label>
                  <input 
                    type="email" 
                    required
                    className="w-full border-b border-zinc-400 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs tracking-widest text-zinc-800 uppercase mb-2">Phone*</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full border-b border-zinc-400 py-2 bg-transparent focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col">
                <label className="text-xs tracking-widest text-zinc-800 uppercase mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full border-b border-zinc-400 py-2 bg-transparent focus:outline-none focus:border-black transition-colors resize-y"
                ></textarea>
              </div>

              

              {/* Consent Checkbox */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" required className="mt-1 w-4 h-4 accent-black cursor-pointer" />
                  <span className="text-sm text-zinc-700 group-hover:text-black transition-colors">
                    I consent to the use of my personal data in order to respond to my request
                  </span>
                </label>
                <p className="text-[10px] leading-relaxed text-zinc-500 text-justify">
                  ESHA Digital Marketing undertakes not to use your information for any purpose other than to respond to your request. You have the right to access, modify, rectify and delete data concerning you. To exercise this right, please contact privacy@eshadigital.in
                </p>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-black text-white font-bold tracking-widest uppercase py-5 hover:bg-zinc-800 transition-colors"
              >
                Send
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
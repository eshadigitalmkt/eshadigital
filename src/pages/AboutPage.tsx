import React from 'react';
import HistorySection from '../components/AboutPage/HistorySection';
import ContactSection from '../components/ContactSection';
import AnimatedText from '../components/AnimatedText';
import { motion } from "framer-motion";

// --- SVGs for the hand-drawn arrows ---
const ArrowOne = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
    <path d="M50 10 Q 40 60 80 90" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M40 25 L 50 10 L 65 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowTwo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
    <path d="M40 20 Q 20 40 30 80" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M25 35 L 40 20 L 55 25" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowThree = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
    <path d="M80 10 Q 30 30 20 80" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M10 65 L 20 80 L 35 75" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);






const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 md:py-32 bg-white px-6 text-center overflow-hidden">

      {/* ================= TITLE ================= */}

      <div className="leading-[1] uppercase">

        {/* LINE 1 */}
        <div className="overflow-hidden pb-3">
          <AnimatedText
            text="SHARED IDEAS"
            delay={0}
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-[0.14em]
              text-black
            "
          />
        </div>

        {/* LINE 2 */}
        <div className="overflow-hidden pb-3 flex items-center justify-center gap-x-4 flex-wrap">

          <AnimatedText
            text="A"
            delay={0.4}
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-light
              tracking-wide
              text-black
            "
          />

          <AnimatedText
            text="COMMITTED"
            delay={0.55}
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-black
              tracking-tight
              text-black
            "
          />

          <AnimatedText
            text="TEAM!"
            delay={0.9}
            className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-light
              tracking-wide
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
          delay: 1.2,
          duration: 1,
          ease: "easeOut",
        }}
        className="mt-14 flex flex-col items-center relative"
      >

        {/* HAND DRAWN ARROW */}

        <motion.div
          initial={{
            opacity: 0,
            rotate: 20,
            x: -20,
          }}
          whileInView={{
            opacity: 1,
            rotate: 12,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 1.3,
            duration: 1,
            ease: "easeOut",
          }}
          className="absolute -top-10 -left-12"
        >
          <ArrowOne />
        </motion.div>

        {/* TEXT */}

        <p
          className="
            italic
            text-lg
            md:text-xl
            font-serif
            text-black/80
          "
        >
          "It has to make an impact!"
        </p>

        <p
          className="
            italic
            text-base
            md:text-lg
            font-serif
            text-black/60
            mt-1
          "
        >
          ESHA Digital
        </p>
      </motion.div>
    </section>
  );
};


// --- 2. TEAM SECTION ---
const teamMembers = [
  {
    name: "François COUSIN",
    role: "HEAD OF DIGITAL MARKETING",
    bio: "Driving brand growth and online presence through strategic, data-driven marketing campaigns.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    socials: ['instagram', 'behance', 'linkedin']
  },
  {
    name: "Sarah COSTA",
    role: "LEAD GRAPHIC DESIGNER",
    bio: "Crafting visually stunning identities and creative assets that capture the essence of your brand.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    socials: ['linkedin']
  },
  {
    name: "Pierre GUIHÉNEUF",
    role: "HEAD OF WEB DEVELOPMENT",
    bio: "Building robust, scalable, and responsive digital platforms tailored to user needs.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    socials: ['linkedin']
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8">
        
        {/* Left Side: Text */}
        <div className="lg:w-1/3 flex flex-col pt-8">
          
          {/* Aligned Heading */}
          <h2 className="flex flex-col flex-wrap gap-y-2 text-3xl md:text-4xl font-light uppercase tracking-wider">
            <span>THE</span>
            <span className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none text-[#fcba00]">
              ESHA DIGITAL
            </span>
            <span>TEAM</span>
          </h2>

          <div className="flex items-start gap-4 mt-12 mb-16 relative pl-4">
            <div className="mt-2 -ml-6">
              <ArrowTwo />
            </div>
            <div>
              <p className="italic text-lg md:text-xl font-serif text-gray-200">
                "Without heart, we would be just machines."
              </p>
              <p className="italic text-base text-gray-400 mt-1 font-serif">
                Alfa Romeo
              </p>
            </div>
          </div>

          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-200 pr-8">
            The team is made up of three pillars, each bringing unique and essential expertise to our agency:
          </p>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 pt-12 lg:pt-0">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`relative group h-[500px] md:h-[600px] w-full ${
                index === 1 ? 'md:mt-24' : '' // Staggers the middle card downward
              }`}
            >
              
              {/* White corner accents for the 1st and 3rd cards */}
              {(index === 0 || index === 2) && (
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t-[3px] border-l-[3px] border-white z-10 pointer-events-none" />
              )}

              {/* Card Container */}
              <div className="absolute inset-0 overflow-hidden bg-zinc-900">
                {/* Member Image */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
                />
                
                {/* Heavy Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-100"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-center text-center pb-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[10px] md:text-xs tracking-widest text-[#fcba00] uppercase mb-4 leading-relaxed max-w-[80%] font-bold">
                    {member.role}
                  </p>

                  {/* Social Icons */}
                  <div className="flex items-center justify-center gap-4 mt-2">
                    {member.socials.includes('instagram') && (
                      <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    )}
                    {member.socials.includes('behance') && (
                      <a href="#" aria-label="Behance" className="text-white hover:text-gray-300 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                        </svg>
                      </a>
                    )}
                    {member.socials.includes('linkedin') && (
                      <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- 3. REASON FOR BEING SECTION ---
const ReasonSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col">
          <div className="flex items-start gap-4 mb-16 relative ml-8">
            <div className="mt-2 -ml-8">
              <ArrowThree />
            </div>
            <div>
              <p className="italic text-lg md:text-xl font-serif text-gray-800">
                "Small but mighty."
              </p>
              <p className="italic text-base text-gray-600 mt-1 font-serif">
                The Singing Magpie
              </p>
            </div>
          </div>

          <h2 className="text-5xl md:text-7xl font-light uppercase tracking-wide leading-none">
            OUR <br />
            <span className="font-bold mt-2 block">REASON FOR <br /> BEING</span>
          </h2>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col justify-end">
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700 mb-12">
            Our purpose is deeply rooted in our history and shared experience. 
            It consists of <strong className="font-bold text-black">creating distinctive brands for our clients</strong> that evoke 
            emotion and a profound connection. We advocate for <strong className="font-bold text-black">consistent, 
            responsible, and controlled communication at every touchpoint</strong> to 
            help you stand out and meaningfully reach your target audience.
          </p>

          <a href="#" className="group inline-flex items-center gap-4 text-xl font-bold uppercase tracking-wider hover:text-[#fcba00] transition-colors w-fit">
            Explore Esha Digital Services
            <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <HeroSection />
      <TeamSection />
      <ReasonSection />
      <HistorySection />
      <ContactSection />
    </div>
  );
}
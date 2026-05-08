import React, { useState, useRef } from 'react';

// --- 1. SERVICE DATA ---
interface Service {
  id: string;
  titleBold1: string;
  titleLight: string;
  titleBold2?: string;
  description: React.ReactNode;
}

const servicesData: Service[] = [
  {
    id: 'marketing',
    titleBold1: 'MARKETING',
    titleLight: 'STRATEGY',
    description: (
      <p className="text-zinc-600 font-light leading-relaxed">
        We build comprehensive digital marketing roadmaps to ensure your brand reaches the right audience at the right time with maximum impact.
      </p>
    )
  },
  {
    id: 'design',
    titleBold1: 'DESIGN',
    titleLight: 'GRAPHIC & VISUAL',
    titleBold2: 'IDENTITY',
    description: (
      <p className="text-zinc-600 font-light leading-relaxed">
        Crafting unique, memorable visual identities that resonate with your target market. From logos to complete brand guidelines, we make your brand stand out.
      </p>
    )
  },
  {
    id: 'development',
    titleBold1: 'CREATION OF',
    titleLight: 'WEBSITES AND',
    titleBold2: 'E-SHOP',
    description: (
      <div className="space-y-6 text-zinc-800 font-light leading-relaxed">
        <p>
          Clickora designs and develops <span className="font-medium">tailor-made showcase and e-commerce sites</span>, 
          designed from the design stage to maximize your visibility on search engines. 
          Each site is <span className="font-medium">SEO-optimized</span>, with smooth navigation across all devices and solid technical performance.
        </p>
        <p>
          Aware of the <span className="font-medium">environmental impact</span> of the web, we systematically apply 
          responsible optimizations: image compression, <span className="font-medium">green hosting</span>, enhanced 
          <span className="font-medium"> accessibility</span> (adapted contrasts, legible typography, limitation of sensitive animations). 
          With us, you benefit from sites that are visible, efficient and respectful of all users.
        </p>
      </div>
    )
  },
  {
    id: 'motion',
    titleBold1: 'MOTION DESIGN',
    titleLight: '& CORPORATE VIDEO',
    description: (
      <p className="text-zinc-600 font-light leading-relaxed">
        Bring your brand to life with high-performance animations, GSAP, and Framer Motion. We create fluid, engaging video and motion content that captures attention.
      </p>
    )
  },
  {
    id: 'signage',
    titleBold1: 'SIGN',
    titleLight: 'SIGNAGE &',
    titleBold2: 'PROMOTIONAL ITEMS',
    description: (
      <p className="text-zinc-600 font-light leading-relaxed">
        Physical branding matters too. We design impactful signage and promotional materials that bridge the gap between your digital and physical presence.
      </p>
    )
  }
];


// --- 2. IMAGE SLIDER COMPONENT (Handles the click-to-slide logic) ---
const SlidingGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // Slides by 75% of the container width for a smooth reveal
      const scrollAmount = scrollRef.current.clientWidth * 0.75; 
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative group w-full">
      
      {/* Scrollable Container (Scrollbars hidden via Tailwind arbitrary variants) */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {/* Placeholder Image 1 */}
        <div className="min-w-[85%] md:min-w-[65%] aspect-video bg-zinc-100 flex items-center justify-center snap-center relative overflow-hidden group-hover:bg-zinc-200 transition-colors">
          <span className="text-zinc-400 font-mono text-sm">Portfolio Image 1</span>
        </div>
        
        {/* Placeholder Image 2 */}
        <div className="min-w-[85%] md:min-w-[65%] aspect-video bg-zinc-100 flex items-center justify-center snap-center relative overflow-hidden group-hover:bg-zinc-200 transition-colors">
          <span className="text-zinc-400 font-mono text-sm">Portfolio Image 2</span>
        </div>

        {/* Placeholder Image 3 (Added a 3rd to show the sliding effect better) */}
        <div className="min-w-[85%] md:min-w-[65%] aspect-video bg-zinc-100 flex items-center justify-center snap-center relative overflow-hidden group-hover:bg-zinc-200 transition-colors">
          <span className="text-zinc-400 font-mono text-sm">Portfolio Image 3</span>
        </div>
      </div>

      {/* Slide Navigation Buttons (Appear on hover for desktop, always available for click) */}
      <button 
        onClick={() => slide('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 shadow-md hover:bg-zinc-100 z-10"
        aria-label="Slide left"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
      </button>
      
      <button 
        onClick={() => slide('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 shadow-md hover:bg-zinc-100 z-10"
        aria-label="Slide right"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
      </button>

    </div>
  );
};


// --- 3. MAIN ACCORDION COMPONENT ---
const ServicesAccordion: React.FC = () => {
  const [openSectionId, setOpenSectionId] = useState<string | null>('development');

  const toggleSection = (id: string) => {
    setOpenSectionId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="border-t border-black">
        {servicesData.map((service) => {
          const isOpen = openSectionId === service.id;

          return (
            <div key={service.id} className="border-b border-black overflow-hidden">
              
              {/* Accordion Header (Clickable) */}
              <button
                onClick={() => toggleSection(service.id)}
                className="w-full flex items-center justify-between py-6 md:py-8 group focus:outline-none"
              >
                <h2 className="text-xl md:text-3xl lg:text-4xl uppercase tracking-wide text-left pr-4">
                  <span className="font-bold">{service.titleBold1}</span>{' '}
                  <span className="font-light">{service.titleLight}</span>
                  {service.titleBold2 && (
                    <>
                      {' '}
                      <span className="font-bold">{service.titleBold2}</span>
                    </>
                  )}
                </h2>

                {/* Plus / X Icon */}
                <div className="relative w-8 h-8 flex-shrink-0 flex items-center justify-center">
                  <span className={`absolute block w-6 h-[2px] bg-black transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : ''}`} />
                  <span className={`absolute block w-6 h-[2px] bg-black transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45' : 'rotate-90'}`} />
                </div>
              </button>

              {/* Accordion Content (Expanded State) */}
              <div 
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-12' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
              >
                <div className="overflow-hidden">
                  
                  {/* MOBILE FIX: flex-col forces stacking. order-1 and order-2 ensure text is always on top of images on mobile */}
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 pt-4">
                    
                    {/* Left Column: Text Content (Order 1 = Top on Mobile) */}
                    <div className="order-1">
                      {service.description}
                    </div>

                    {/* Right Column: Image Gallery & Link (Order 2 = Bottom on Mobile) */}
                    <div className="order-2 flex flex-col">
                      
                      {/* Integrated Sliding Gallery */}
                      <SlidingGallery />

                      <a 
                        href="#" 
                        className="inline-flex items-center gap-4 mt-6 font-bold uppercase tracking-widest text-sm hover:gap-6 transition-all w-fit"
                      >
                        Discover The Portfolio
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
    </div>
  );
};

export default ServicesAccordion;
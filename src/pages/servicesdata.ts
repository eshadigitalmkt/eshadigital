
import WebDevImage from "../assets/web-development-service.jpg"
import SMMImage from "../assets/smm1.jpg"
import BrandIdentity from "../assets/Brand-Identity.jpg"
import SEOImage from "../assets/seo.jpg"
import PPCImage from "../assets/AD-Campaign.jpg"

export interface Platform {
  name: string;
  description: string;
  topics: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  image: string;
  intro: string[];
  platforms: Platform[];
  process: ProcessStep[];
  sidebar: {
    servicesList: string[];
    contact: {
      phone: string;
      email: string;
      address: string;
    };
    cta: {
      title: string;
      text: string;
    };
  };
}

// Reusable sidebar data for consistency across all service pages
const commonSidebar = {
  servicesList: [
    "Brand Identity",
    "Social Media Marketing",
    "Web Development",
    "App Development",
    "Search Engine Optimization",
    "Paid Advertising / PPC"
  ],
  contact: {
    phone: "+91 9980962504",
    email: "info@vasishtha.co",
    address: "Kondapur, Hyderabad"
  },
  cta: {
    title: "Start Your Project?",
    text: "Partner with us to unlock creative digital strategies tailored for your brand. We turn ideas into impactful results, driving your business forward."
  }
};

export const servicesData: ServiceDetail[] = [
  /* =========================================
     01. BRAND IDENTITY
  ========================================= */
  {
    slug: "brand-identity",
    title: "Brand Identity",
    image: BrandIdentity,
    intro: [
      "Your brand is much more than just a logo; it is the visual and emotional language that connects you with your audience. A strong brand identity sets you apart from competitors and builds lasting trust.",
      "We create memorable logos, comprehensive visual identities, and cohesive brand systems that define exactly how your business is seen and remembered across all touchpoints.",
      "From typography to color psychology, we meticulously craft every element to ensure your brand resonates powerfully in your specific market."
    ],
    platforms: [
      {
        name: "Logo Design & Typography",
        description: "The cornerstone of your visual identity. We design scalable, versatile, and memorable logos paired with typography that speaks to your brand's unique personality.",
        topics: [
          "Primary & Secondary Logo Design",
          "Custom Typography Selection",
          "Color Palette Development",
          "Iconography & Favicons",
          "Brand Usage Variations"
        ]
      },
      {
        name: "Brand Guidelines",
        description: "Consistency is key to brand recognition. We deliver comprehensive brand rulebooks to ensure your team and partners always represent your brand correctly.",
        topics: [
          "Logo Clear Space & Sizing",
          "Do's and Don'ts of Brand Usage",
          "Voice & Tone Guidelines",
          "Photography & Imagery Style",
          "Digital & Print Applications"
        ]
      },
      {
        name: "Corporate Stationery & Collateral",
        description: "Bring your brand into the physical and digital workspace with beautifully designed corporate assets that leave a professional impression.",
        topics: [
          "Business Card Design",
          "Letterheads & Envelopes",
          "Email Signatures",
          "Presentation Templates",
          "Brochures & Flyers"
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Strategy",
        description: "Understanding your vision, target audience, and market positioning to form a solid brand foundation."
      },
      {
        step: "02",
        title: "Concept Development",
        description: "Sketching and brainstorming multiple creative directions and visual concepts for your brand."
      },
      {
        step: "03",
        title: "Refinement & Application",
        description: "Polishing the chosen concept and applying it across various mockups to ensure versatility."
      },
      {
        step: "04",
        title: "Final Delivery & Guidelines",
        description: "Handing over all master files along with a comprehensive brand guideline document."
      }
    ],
    sidebar: commonSidebar
  },

  /* =========================================
     02. SOCIAL MEDIA MARKETING (Original)
  ========================================= */
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    image: SMMImage,
    intro: [
      "Bhai, social media is not just posting photos — it's where your business gets seen, loved, and talked about! Whether you're a small shop in Hyderabad or a big brand, social media is your biggest stage today.",
      "We help your business grow on social media with smart planning, eye-catching content, and ads that actually work. No jugaad, just real results that you can see and measure.",
      "From reels that go viral to posts that people actually share — we make your brand look so good online that people can't scroll past it!"
    ],
    platforms: [
      {
        name: "Instagram Marketing",
        description: "Instagram is all about looking good and getting noticed! We make your profile so attractive and your content so interesting that people follow you, engage with you, and become your loyal customers.",
        topics: [
          "Set Up a Professional Instagram Business Profile",
          "Plan Your Content & Make Your Feed Look Amazing",
          "Create Reels & Stories That People Actually Watch",
          "Find the Right Hashtags So More People Discover You",
          "Connect With Influencers to Reach a Bigger Audience"
        ]
      },
      {
        name: "Facebook Marketing",
        description: "Facebook still has crores of active users — your customers are definitely there! We help you reach them with the right ads, engaging posts, and smart community building that turns followers into buyers.",
        topics: [
          "Make Your Business Page Look Credible & Professional",
          "Run Facebook Ads That Bring Real Customers (Not Just Clicks)",
          "Build a Community Around Your Brand with Groups",
          "Promote Your Events & Offers to the Right People",
          "Post Consistently So Your Audience Never Forgets You"
        ]
      },
      {
        name: "Linkedin Marketing",
        description: "LinkedIn is where business happens! Whether you want to find clients, hire talent, or build your brand's reputation — we help you show up like a pro and connect with the people who matter most to your business.",
        topics: [
          "Optimize Your Profile & Company Page to Look Top-Class",
          "Create Expert Content That Makes People Trust Your Brand",
          "Run LinkedIn Ads to Reach Decision-Makers Directly",
          "Generate Quality B2B Leads Without Cold Calling",
          "Get Your Whole Team to Promote Your Brand Together"
        ]
      },
      {
        name: "YouTube Marketing",
        description: "People love watching videos — and YouTube is the biggest video platform in the world! We help you create videos that people search for, watch fully, and subscribe to your channel for more.",
        topics: [
          "Set Up & Brand Your YouTube Channel Properly",
          "Optimize Videos So They Show Up in Search Results",
          "Create Short Videos, Long Videos & Ads That Work",
          "Build an Engaged Audience That Keeps Coming Back",
          "Grow Your Channel and Even Earn from It!"
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "We Study Your Market & Competitors",
        description: "First, we do our homework — we look at what your competitors are doing, who your customers are, and what's trending in your industry. No guesswork, only data."
      },
      {
        step: "02",
        title: "We Plan Your Profile & Content",
        description: "Then we make your social media profiles look professional and plan out what content to post, when to post, and how it should look — everything organized and on-brand."
      },
      {
        step: "03",
        title: "We Execute Campaigns & Manage Your Community",
        description: "We post your content, run your ads, reply to comments, and keep your audience engaged — so you can focus on running your business while we handle the social media."
      },
      {
        step: "04",
        title: "We Track Results & Keep Improving",
        description: "Every week we check how things are performing — what's working, what's not — and we keep improving so your growth never stops."
      }
    ],
    sidebar: commonSidebar
  },
  /* =========================================
     03. WEB DEVELOPMENT
  ========================================= */
  {
    slug: "web-development",
    title: "Web Development",
    image: WebDevImage,
    intro: [
      "Your website is the digital storefront of your business. It runs 24/7, serving as the primary touchpoint for potential customers exploring your products or services.",
      "We design fast, modern, and conversion-focused websites that not only showcase your brand professionally but also provide seamless user experiences across all devices.",
      "From sleek corporate websites to complex e-commerce platforms, we build robust digital ecosystems tailored to your operational needs and business goals."
    ],
    platforms: [
      {
        name: "Corporate & Business Websites",
        description: "Professional, lightning-fast, and responsive websites that communicate your brand values and capture high-quality leads.",
        topics: [
          "Custom UI/UX Design",
          "Responsive Mobile-First Architecture",
          "Lead Generation Forms",
          "Performance Optimization",
          "Content Management Systems (CMS)"
        ]
      },
      {
        name: "E-Commerce Development",
        description: "Secure and scalable online stores designed to minimize cart abandonment and maximize sales, powered by industry-leading platforms.",
        topics: [
          "Shopify & WooCommerce Integration",
          "Secure Payment Gateway Setup",
          "Inventory Management Solutions",
          "Custom Product Pages",
          "User Account & Checkout Optimization"
        ]
      },
      {
        name: "Landing Pages & Funnels",
        description: "High-converting single-page sites designed specifically for marketing campaigns, product launches, and targeted advertising.",
        topics: [
          "Conversion Rate Optimization (CRO)",
          "A/B Testing Integration",
          "Compelling Copywriting Layouts",
          "Fast Load Times",
          "Analytics & Heatmap Setup"
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Requirements Gathering",
        description: "Mapping out your site architecture, functional requirements, and core business objectives."
      },
      {
        step: "02",
        title: "UI/UX Prototyping",
        description: "Creating wireframes and high-fidelity mockups for your approval before coding begins."
      },
      {
        step: "03",
        title: "Development & Integration",
        description: "Building the front-end and back-end, integrating APIs, and ensuring responsive design."
      },
      {
        step: "04",
        title: "Testing & Deployment",
        description: "Rigorous QA testing for bugs, speed, and cross-browser compatibility before going live."
      }
    ],
    sidebar: commonSidebar
  },

  /* =========================================
     04. APP DEVELOPMENT
  ========================================= */
  {
    slug: "app-development",
    title: "App Development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop",
    intro: [
      "In a mobile-first world, a dedicated application puts your business directly in the pockets of your consumers, offering unparalleled convenience and engagement.",
      "We create mobile applications that help businesses stay connected with customers through seamless, intuitive, and highly functional digital experiences.",
      "Whether you need a native app for specific hardware performance or a cross-platform solution for rapid market entry, our development team has you covered."
    ],
    platforms: [
      {
        name: "Native iOS & Android Apps",
        description: "High-performance applications built specifically for Apple's iOS or Google's Android ecosystems, maximizing device capabilities.",
        topics: [
          "Swift & Kotlin Development",
          "Optimal Hardware Integration (Camera, GPS)",
          "App Store & Google Play Optimization",
          "High-Fidelity Animations",
          "Stringent Security Protocols"
        ]
      },
      {
        name: "Cross-Platform Development",
        description: "Cost-effective and rapid development using frameworks like React Native and Flutter to deploy your app on both platforms simultaneously.",
        topics: [
          "React Native & Flutter Frameworks",
          "Shared Codebase Efficiency",
          "Consistent UI Across Devices",
          "Faster Time-to-Market",
          "Easier Maintenance & Updates"
        ]
      },
      {
        name: "UI/UX App Design",
        description: "Beautiful, intuitive interfaces designed specifically for touch interactions and mobile viewing environments.",
        topics: [
          "User Journey Mapping",
          "Interactive Prototypes",
          "Gesture-based Navigation Design",
          "Dark Mode Integration",
          "Accessibility Compliance"
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Scope & Wireframing",
        description: "Defining user personas, mapping app features, and creating structural wireframes."
      },
      {
        step: "02",
        title: "UI/UX Design",
        description: "Designing sleek, user-friendly interfaces tailored specifically for mobile operating systems."
      },
      {
        step: "03",
        title: "Agile Development",
        description: "Coding the application in sprints, allowing for continuous feedback and iteration."
      },
      {
        step: "04",
        title: "Launch & Maintenance",
        description: "Submitting to App Stores and providing ongoing support, bug fixes, and feature updates."
      }
    ],
    sidebar: commonSidebar
  },

  /* =========================================
     05. SEARCH ENGINE OPTIMIZATION
  ========================================= */
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    image: SEOImage,
    intro: [
      "Having a beautiful website is only half the battle; ensuring your target audience can actually find it is where Search Engine Optimization (SEO) comes in.",
      "We optimize your website to rank higher on search engines like Google, helping you attract consistent, long-term organic traffic without paying for every click.",
      "Through a combination of technical audits, high-quality content creation, and authoritative link-building, we turn your website into a lead-generating machine."
    ],
    platforms: [
      {
        name: "On-Page SEO",
        description: "Optimizing the content and HTML source code of individual web pages to rank higher and earn more relevant traffic.",
        topics: [
          "Keyword Integration & Optimization",
          "Meta Titles & Descriptions",
          "Header Tag (H1, H2, H3) Structuring",
          "Image Alt Text Optimization",
          "Internal Linking Strategies"
        ]
      },
      {
        name: "Technical SEO",
        description: "Improving the technical aspects of a website to increase the ranking of its pages by making it faster, easier to crawl, and understandable for search engines.",
        topics: [
          "Site Speed Optimization",
          "Mobile-Friendliness & Responsiveness",
          "XML Sitemaps & Robots.txt",
          "Fixing Crawl Errors & Broken Links",
          "Schema Markup Implementation"
        ]
      },
      {
        name: "Local & Off-Page SEO",
        description: "Building your website's authority on the broader internet and capturing local search traffic specifically for your geographical area.",
        topics: [
          "Google My Business (GMB) Optimization",
          "Local Citations & Directory Listings",
          "High-Quality Backlink Building",
          "Guest Blogging & PR",
          "Customer Review Management"
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Comprehensive Audit",
        description: "Analyzing your current website health, backlink profile, and competitor rankings."
      },
      {
        step: "02",
        title: "Keyword Strategy",
        description: "Identifying high-volume, low-competition search terms that your target audience uses."
      },
      {
        step: "03",
        title: "On-Site Optimization",
        description: "Fixing technical errors and rewriting meta-data, headers, and on-page content."
      },
      {
        step: "04",
        title: "Authority Building & Reporting",
        description: "Acquiring authoritative backlinks and providing transparent monthly ranking reports."
      }
    ],
    sidebar: commonSidebar
  },

  /* =========================================
     06. PAID ADVERTISING / PPC
  ========================================= */
  {
    slug: "paid-advertising",
    title: "Paid Advertising / PPC",
    image: PPCImage,
    intro: [
      "When you need immediate visibility and rapid lead generation, Paid Advertising is the most effective lever you can pull. It places your brand at the very top of the digital food chain.",
      "We run high-performing Google and Meta ad campaigns focused strictly on leads, sales, and measurable business growth. We treat your ad spend like our own.",
      "From compelling ad copy to precise audience targeting and continuous A/B testing, we ensure every dollar spent yields the highest possible Return on Ad Spend (ROAS)."
    ],
    platforms: [
      {
        name: "Google Search & Display Ads",
        description: "Capture intent-driven customers exactly when they are searching for the products or services you offer.",
        topics: [
          "Search Network Campaigns",
          "Display Network Banners",
          "Google Shopping Ads",
          "Keyword Bidding Strategies",
          "Negative Keyword Management"
        ]
      },
      {
        name: "Social Media Ads (Meta & LinkedIn)",
        description: "Leverage powerful demographic and interest-based targeting to put your brand in front of the perfect audience.",
        topics: [
          "Facebook & Instagram Lead Generation",
          "LinkedIn B2B Sponsored Content",
          "Carousel & Video Ad Creation",
          "Lookalike Audience Targeting",
          "Pixel Setup & Event Tracking"
        ]
      },
      {
        name: "Retargeting & Remarketing",
        description: "Bring back users who previously interacted with your website but didn't convert, increasing overall conversion rates significantly.",
        topics: [
          "Dynamic Product Retargeting",
          "Abandoned Cart Campaigns",
          "Cross-Platform Remarketing",
          "Frequency Capping",
          "Custom Offer Ads"
        ]
      }
    ],
    process: [
      {
        step: "01",
        title: "Audience & Competitor Research",
        description: "Identifying exactly who to target and analyzing what ads your competitors are running."
      },
      {
        step: "02",
        title: "Creative & Copywriting",
        description: "Designing scroll-stopping visuals and writing persuasive ad copy that drives clicks."
      },
      {
        step: "03",
        title: "Campaign Launch & Tracking",
        description: "Setting up precise targeting parameters and ensuring conversion tracking pixels are firing correctly."
      },
      {
        step: "04",
        title: "A/B Testing & Scaling",
        description: "Testing different variables, cutting underperforming ads, and scaling the winners to maximize ROI."
      }
    ],
    sidebar: commonSidebar
  }
];
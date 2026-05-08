"use client";
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';

const ContactSection: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Error State
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false
  });

  // Handle Input Changes and clear errors when typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this specific field if they start typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  // Handle Form Submission Validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check which required fields are empty
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      phone: formData.phone.trim() === ''
    };

    setErrors(newErrors);

    // If no errors, you can submit the form
    if (!newErrors.name && !newErrors.email && !newErrors.phone) {
      console.log("Form is valid! Submitting...", formData);
      alert("Message sent successfully!");
      // Reset form (optional)
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.6 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      {/* Contact Section (Black Background) */}
      <section className="relative w-full bg-black text-white pt-24 pb-12 px-6 sm:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Text & Socials (Made more compact) */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col"
            >
              <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-tensor flex flex-col tracking-tight mb-4">
                <span className="font-light text-gray-200">LET'S BOOK</span>
                <span className="font-bold">AN APPOINTMENT</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-base sm:text-lg font-helvetica text-gray-200 max-w-md leading-relaxed mb-10">
                If you've scrolled this far, you must be interested. Quickly fill out this form so we can get in touch!
              </motion.p>

              {/* Arrow and Socials - Reduced top margin to make it compact */}
              <motion.div variants={itemVariants} className="relative">
                {/* Arrow pointing right to the form */}
                <div className="hidden lg:block absolute left-[280px] top-[-30px] opacity-80">
                  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 20 C 30 30, 50 30, 75 15" />
                    <path d="M65 15 L 75 15 L 75 25" />
                  </svg>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-6">
                  <a href="#" className="text-white hover:text-[#fcba00] transition-colors duration-300" aria-label="Facebook">
                    <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#fcba00] transition-colors duration-300" aria-label="LinkedIn">
                    <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-[#fcba00] transition-colors duration-300" aria-label="Instagram">
                    <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Form with Validation */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full font-tensor tracking-wider"
            >
              <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit} noValidate>
                
                {/* Name */}
                <motion.div variants={itemVariants} className="flex flex-col w-full">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="FIRST NAME / LAST NAME*" 
                    className="bg-transparent border-b border-white py-2 text-white placeholder-white focus:outline-none focus:border-[#fcba00] transition-colors" 
                  />
                  {/* Error Message renders conditionally */}
                  {errors.name && (
                    <span className="text-[#fcba00]/80 text-xs font-helvetica mt-1 tracking-normal">
                      Please fill out this field.
                    </span>
                  )}
                </motion.div>

                {/* Email & Phone */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col w-full">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="EMAIL*" 
                      className="bg-transparent border-b border-white py-2 text-white placeholder-white focus:outline-none focus:border-[#fcba00] transition-colors" 
                    />
                    {errors.email && (
                      <span className="text-[#fcba00]/80 text-xs font-helvetica mt-1 tracking-normal">
                        Please fill out this field.
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="PHONE*" 
                      className="bg-transparent border-b border-white py-2 text-white placeholder-white focus:outline-none focus:border-[#fcba00] transition-colors" 
                    />
                    {errors.phone && (
                      <span className="text-[#fcba00]/80 text-xs font-helvetica mt-1 tracking-normal">
                        Please fill out this field.
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Message (Optional field, no validation error needed) */}
                <motion.div variants={itemVariants} className="flex flex-col w-full mt-2">
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3} 
                    placeholder="MESSAGE" 
                    className="bg-transparent border-b border-white py-2 text-white placeholder-white focus:outline-none focus:border-[#fcba00] transition-colors resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants} className="mt-4">
                  <button type="submit" className="w-full bg-white text-black py-4 font-bold text-lg hover:bg-[#fcba00] hover:text-[#192747] transition-all duration-300 tracking-widest cursor-pointer">
                    SEND
                  </button>
                </motion.div>

              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section (White Background) */}
      <footer className="w-full bg-white py-6 px-6 sm:px-8 lg:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[#192747] font-helvetica text-sm">
          <div className="text-center md:text-left">
            © ESHA - Communication and development agency in Tours and Blois - 2025
          </div>
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <a href="#" className="hover:text-[#fcba00] transition-colors">Accessibility</a>
            <span>-</span>
            <a href="#" className="hover:text-[#fcba00] transition-colors">Legal Notice</a>
            <span>-</span>
            <a href="#" className="hover:text-[#fcba00] transition-colors">Cookie Management</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
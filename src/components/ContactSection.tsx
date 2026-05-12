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

      
    </>
  );
};

export default ContactSection;
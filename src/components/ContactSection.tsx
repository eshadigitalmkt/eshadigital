"use client";
import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Error State for Validation
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false
  });

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle Input Changes and clear errors when typing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this specific field if they start typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
    // Clear global submit error if they start typing again
    if (submitError) {
      setSubmitError('');
    }
  };

  // Handle Form Submission Validation & EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check which required fields are empty
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '',
      phone: formData.phone.trim() === ''
    };

    setErrors(newErrors);

    // If no errors, submit the form via EmailJS
    if (!newErrors.name && !newErrors.email && !newErrors.phone) {
      setIsSubmitting(true);
      setSubmitError('');

      // Maps data properties straight to your exact dashboard template tokens
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
      };

      emailjs.send(
        'service_2oqqg7n',   // Your verified EmailJS Service ID
        'template_axejiq6',  // Your verified EmailJS Template ID
        templateParams,
        {
          publicKey: 'CTl7ptU0k-_xzD9h_', // Your verified Public Key
        }
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSuccess(true); // Switches UI from form fields to Thank You screen
        setFormData({ name: '', email: '', phone: '', message: '' }); // Background reset
      })
      .catch((err) => {
        console.error('EmailJS Connection Failure:', err);
        const errorText = err?.text || err?.message || "Check your internet connection.";
        setSubmitError(`Failed to send: ${errorText}`);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  // Reset form status block to allow another message delivery
  const handleReset = () => {
    setIsSuccess(false);
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
      {/* Contact Section (Blue Background & White Text) */}
      <section className="relative w-full bg-[#192747] text-white pt-24 pb-24 px-6 sm:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Text & Titles */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col"
            >
              <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl font-tensor flex flex-col tracking-tight mb-4">
                <span className="font-light text-white/70">LET'S BOOK</span>
                <span className="font-bold">AN APPOINTMENT</span>
              </motion.h2>

              <motion.p variants={itemVariants} className="text-base sm:text-lg font-helvetica text-white/80 max-w-md leading-relaxed mb-10">
                If you've scrolled this far, you must be interested. Quickly fill out this form so we can get in touch!
              </motion.p>
            </motion.div>

            {/* RIGHT COLUMN: Form UI OR Inline Success Block */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full font-tensor tracking-wider min-h-[400px] flex flex-col justify-center"
            >
              {isSuccess ? (
                // ================= SUCCESS MESSAGE PANEL =================
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center bg-white/5 border border-white/10 rounded-2xl p-10 h-full"
                >
                  <div className="w-16 h-16 bg-[#fcba00] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-[#192747]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">THANK YOU!</h3>
                  <p className="text-white/70 font-helvetica tracking-normal leading-relaxed mb-8 max-w-sm">
                    Your appointment request has been received. Our team will get back to you shortly.
                  </p>
                  <button 
                    onClick={handleReset}
                    className="border border-white/30 text-white px-8 py-3 font-bold tracking-widest hover:bg-white hover:text-[#192747] transition-colors duration-300"
                  >
                    SEND ANOTHER
                  </button>
                </motion.div>
              ) : (
                // ================= INTERACTIVE INPUT FORM =================
                <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit} noValidate>
                  
                  {/* Name Input */}
                  <motion.div variants={itemVariants} className="flex flex-col w-full">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="FIRST NAME / LAST NAME*" 
                      className="bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#fcba00] transition-colors" 
                    />
                    {errors.name && (
                      <span className="text-[#fcba00] text-xs font-helvetica mt-1 tracking-normal font-medium">
                        Please fill out this field.
                      </span>
                    )}
                  </motion.div>

                  {/* Email & Phone Split Layout Row */}
                  <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col w-full">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="EMAIL*" 
                        className="bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#fcba00] transition-colors" 
                      />
                      {errors.email && (
                        <span className="text-[#fcba00] text-xs font-helvetica mt-1 tracking-normal font-medium">
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
                        className="bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#fcba00] transition-colors" 
                      />
                      {errors.phone && (
                        <span className="text-[#fcba00] text-xs font-helvetica mt-1 tracking-normal font-medium">
                          Please fill out this field.
                        </span>
                      )}
                    </div>
                  </motion.div>

                  {/* Message Input Box Area */}
                  <motion.div variants={itemVariants} className="flex flex-col w-full mt-2">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3} 
                      placeholder="MESSAGE" 
                      className="bg-transparent border-b border-white/30 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#fcba00] transition-colors resize-none"
                    ></textarea>
                  </motion.div>

                  {/* Operational Server Feedback Error Text Block */}
                  {submitError && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm font-helvetica tracking-normal font-medium">
                      {submitError}
                    </motion.div>
                  )}

                  {/* Submit Button Trigger Panel Element */}
                  <motion.div variants={itemVariants} className="mt-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-[#192747] py-4 font-bold text-lg hover:bg-[#fcba00] hover:text-[#192747] transition-all duration-300 tracking-widest cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'SENDING...' : 'SEND'}
                    </button>
                  </motion.div>

                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
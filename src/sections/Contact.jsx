import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaGithub, FaLinkedin } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../utils/data';

// Web3Forms Access Key - Get it from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'ea96c8c5-7f69-4165-8886-7d1f800eafeb';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', isError: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showToast = (message, isError = false) => {
    setToast({ show: true, message, isError });
    setTimeout(() => setToast({ show: false, message: '', isError: false }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!form.name || !form.email || !form.message) {
      showToast("Please fill in all fields.", true);
      return;
    }

    if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      showToast("Web3Forms not configured. Please add your access key.", true);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Inquiry from ${form.name}`,
          to_email: PERSONAL_INFO.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        showToast("Message sent successfully! I'll get back to you soon.");
        
        // Trigger confetti animation
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        // Reset form
        setForm({ name: '', email: '', message: '' });
      } else {
        showToast("Failed to send message. Please try again.", true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      showToast("Failed to send message. Please try again.", true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 z-20 overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[320px] h-[320px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[320px] h-[320px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Contact</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans">Get In Touch</h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Content splits into Info panel and Form panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Quick Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Short pitch */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden flex-grow flex flex-col justify-between">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Let's Collaborate!</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Whether you're looking for a dedicated intern, have a question about my projects, or just want to connect, feel free to reach out. I will get back to you as soon as possible!
                </p>

                <div className="space-y-6 mt-8">
                  {/* Email contact */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-blue-400 shadow-glow-blue">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Address</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Location contact */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-purple-400 shadow-glow-purple">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Location</div>
                      <div className="text-sm font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social profiles list */}
              <div className="mt-12 pt-6 border-t border-white/5">
                <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-4">Follow Profiles:</span>
                <div className="flex gap-4">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 hover:border-white/20 transition-all text-xl hover:shadow-glow-blue"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/10 text-blue-400 rounded-xl border border-white/10 hover:border-white/20 transition-all text-xl hover:shadow-glow-blue"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-600" />
              
              <h4 className="text-xl font-bold text-white mb-6">Send Message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-xs text-gray-400 font-bold uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-xs text-gray-400 font-bold uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2 text-left">
                  <label htmlFor="message" className="text-xs text-gray-400 font-bold uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 focus:border-blue-500/50 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500/30 transition-all text-sm resize-none"
                    placeholder="Type your message details..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="interactive w-full btn-neon py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-glow-blue flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="text-xs" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Global Toast Notification Alerts */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-6 right-6 p-4 rounded-xl border bg-black/90 backdrop-blur-md text-white shadow-glow-cyan z-50 flex items-center gap-3 ${
              toast.isError ? 'border-red-500/30' : 'border-green-500/30'
            }`}
          >
            <FaCheckCircle className={toast.isError ? 'text-red-500 text-xl' : 'text-green-500 text-xl'} />
            <div>
              <div className="font-bold text-sm">{toast.isError ? 'Error' : 'Success!'}</div>
              <div className="text-xs text-gray-400">{toast.message}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

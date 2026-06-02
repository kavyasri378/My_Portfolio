import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../hooks/useScroll';
import { HiMenu, HiX } from 'react-icons/hi';
import { PERSONAL_INFO } from '../utils/data';

const navItems = [
  { label: 'Home', target: '#home' },
  { label: 'About', target: '#about' },
  { label: 'Skills', target: '#skills' },
  { label: 'Achievements', target: '#achievements' },
  { label: 'Projects', target: '#projects' },
  { label: 'Certifications', target: '#certifications' },
  { label: 'Contact', target: '#contact' },
];

const Navbar = () => {
  const { scrollY, scrollProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const item of navItems) {
        const el = document.querySelector(item.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, target) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 
        ? 'bg-[#030014]/75 backdrop-blur-md border-b border-white/5 py-4' 
        : 'bg-transparent py-6'
    }`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => handleClick(e, '#home')}
          className="text-xl font-bold tracking-wider text-gradient font-sans"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.target}
              onClick={(e) => handleClick(e, item.target)}
              className={`relative text-sm font-medium tracking-wide transition-colors duration-300 hover:text-blue-400 ${
                activeSection === item.target ? 'text-blue-400' : 'text-gray-400'
              }`}
            >
              {item.label}
              {activeSection === item.target && (
                <motion.div
                  layoutId="activeNavDot"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-blue-500 shadow-glow-blue rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu Slider */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#030014]/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.target}
                  onClick={(e) => handleClick(e, item.target)}
                  className={`text-base font-medium tracking-wide transition-colors ${
                    activeSection === item.target ? 'text-blue-400 font-semibold' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

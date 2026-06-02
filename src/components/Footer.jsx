import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { PERSONAL_INFO } from '../utils/data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030014]/90 py-12 overflow-hidden z-20">
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-80 h-80 rounded-full bg-purple-600/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div>
          <h3 className="text-lg font-semibold text-gradient">{PERSONAL_INFO.name}</h3>
          <p className="text-sm text-gray-500 mt-1">© {new Date().getFullYear()} • CSE Student Portfolio</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:shadow-glow-blue transition-all duration-300 p-2 bg-white/5 rounded-full border border-white/10"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 hover:shadow-glow-blue transition-all duration-300 p-2 bg-white/5 rounded-full border border-white/10"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 hover:shadow-glow-purple transition-all duration-300 p-2 bg-white/5 rounded-full border border-white/10"
            aria-label="Email"
          >
            <FaEnvelope className="text-xl" />
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="interactive flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <span>Back to Top</span>
          <span className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:-translate-y-1 transition-transform duration-300">
            <FaArrowUp className="text-xs" />
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

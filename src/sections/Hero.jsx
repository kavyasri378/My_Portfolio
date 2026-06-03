import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { PERSONAL_INFO } from '../utils/data';
import { triggerResumePrint } from './Resume';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = PERSONAL_INFO.typingTexts;

  useEffect(() => {
    let timer;
    const fullText = texts[textIndex % texts.length];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 55);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts]);

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden z-20"
    >
      {/* Background soft glowing lights */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-blue-600/10 blur-[130px] animate-orb-1" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[150px] animate-orb-2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 text-left space-y-6 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">Available for Internships</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-gradient font-sans font-extrabold text-5xl sm:text-7xl block mt-2">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-gray-300 flex items-center gap-2 h-8">
            I am a <span className="text-cyan-400 font-semibold border-r-2 border-cyan-400 pr-1 animate-pulse">{currentText}</span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleScroll('#contact')}
              className="interactive btn-neon px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-glow-blue hover:shadow-glow-purple hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </button>
            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="interactive inline-flex items-center justify-center px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              Download Resume
            </a> */}
          </div>

          {/* Social icons with glow hover */}
          <div className="flex items-center gap-6 pt-6">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Connect:</span>
            <div className="flex gap-4">
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 text-2xl hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              >
                <FaGithub />
              </a>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-2xl hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              >
                <FaLinkedin />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 text-2xl hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Interactive Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[350px] sm:min-h-[450px]"
        >
          {/* Circular Glow Aura behind profile */}
          <div className="absolute w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-600/20 blur-[50px] animate-pulse" />

          {/* Central Glass Hexagon/Circle Container */}
          <motion.div 
            whileHover={{ rotate: 3, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative z-10 w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] rounded-[2rem] bg-gradient-to-tr from-blue-900/40 via-purple-900/30 to-black/80 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden shadow-2xl"
          >
            {/* Inner aesthetic borders */}
            <div className="absolute inset-2 border border-white/5 rounded-[1.7rem] pointer-events-none z-20" />
            <div className="absolute inset-4 border border-dashed border-white/5 rounded-[1.4rem] pointer-events-none animate-spin-slow z-20" />
            
            {/* Profile Image */}
            <img 
              src={profileImg} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover object-top opacity-100 transition-opacity duration-300"
            />
            
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none z-10" />
            
            {/* Details overlay */}
            <div className="absolute bottom-6 text-center z-20">
              <div className="text-xs text-cyan-300 font-bold uppercase tracking-widest">{PERSONAL_INFO.role}</div>
              <div className="text-[10px] text-gray-300 mt-1">{PERSONAL_INFO.college}</div>
            </div>
          </motion.div>

          {/* Floating Tech Badges */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[10%] left-[10%] z-20 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-glow-blue"
          >
            <FaJava className="text-3xl text-orange-500" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-[15%] left-[5%] z-20 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-glow-cyan"
          >
            <FaReact className="text-3xl text-cyan-400 animate-spin-slow" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-[15%] right-[8%] z-20 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-glow-purple"
          >
            <SiSpringboot className="text-3xl text-green-500 animate-pulse" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute bottom-[20%] right-[5%] z-20 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-glow-blue"
          >
            <FaPython className="text-3xl text-yellow-400" />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[50%] -translate-y-1/2 -left-[5%] z-20 p-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10"
          >
            <FaNodeJs className="text-2xl text-green-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

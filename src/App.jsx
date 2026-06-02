import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import ParticleBg from './components/ParticleBg';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import CodingProfiles from './sections/CodingProfiles';
import GithubStats from './sections/GithubStats';
import Projects from './sections/Projects';
import Internship from './sections/Internship';
import Certifications from './sections/Certifications';
import Resume from './sections/Resume';
import Contact from './sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 bg-[#030014] flex flex-col items-center justify-center text-white"
        >
          {/* Central Logo Symbol */}
          <div className="relative flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-7xl font-black text-gradient font-sans tracking-tighter select-none"
            >
              KD
            </motion.div>
            
            {/* Horizontal progress scanner line */}
            <div className="w-44 h-1 bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.2 }}
              className="text-[9px] uppercase tracking-widest text-gray-400 font-bold"
            >
              SYSTEM LOADING...
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen text-gray-300 bg-[#030014]"
        >
          {/* Cursor follower dot + spotlight */}
          <CustomCursor />
          
          {/* Connected floating node background particle engine */}
          <ParticleBg />
          
          {/* Main sticky navigation */}
          <Navbar />
          
          {/* Combined Portfolio Content Sections */}
          <main className="relative z-10 w-full">
            <Hero />
            <About />
            <Skills />
            <Achievements />
            <CodingProfiles />
            <GithubStats />
            <Projects />
            <Internship />
            <Certifications />
            <Resume />
            <Contact />
          </main>
          
          {/* Footer content blocks */}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;

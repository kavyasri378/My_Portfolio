import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaMedal, FaCertificate, FaTrophy } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { ACHIEVEMENTS } from '../utils/data';

// Map string name to icon
const getAchievementIcon = (iconName) => {
  switch (iconName) {
    case 'FaAward': return <FaAward className="text-blue-400 text-3xl" />;
    case 'FaMedal': return <FaMedal className="text-yellow-400 text-3xl" />;
    case 'FaCertificate': return <FaCertificate className="text-purple-400 text-3xl" />;
    case 'FaTrophy': return <FaTrophy className="text-cyan-400 text-3xl" />;
    default: return <FaAward className="text-blue-400 text-3xl" />;
  }
};

// Sub-component for 3D Tilt Effect on Hover
const TiltCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Position of mouse inside the card from -width/2 to +width/2
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Tilt degree limit: Max 12 degrees
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const triggerConfetti = (e) => {
    // Generate confetti originating near clicked position
    const rect = cardRef.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x, y },
      colors: ['#2563eb', '#7c3aed', '#06b6d4', '#ffffff']
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={triggerConfetti}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card-interactive p-8 rounded-3xl border border-white/5 flex flex-col justify-between cursor-pointer group"
    >
      <div>
        {/* Top bar with icon */}
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:scale-110 group-hover:shadow-glow-blue transition-all duration-300">
            {getAchievementIcon(item.icon)}
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-500 font-bold group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all">
            {item.date}
          </span>
        </div>

        {/* Text Details */}
        <div style={{ transform: 'translateZ(20px)' }} className="transition-transform duration-300">
          <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-colors">
            {item.title}
          </h4>
          <p className="text-sm font-semibold text-cyan-400 mt-1.5">{item.award}</p>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>

      {/* Interactive indicator hint */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
        <span>Click for celebration!</span>
        <span className="group-hover:text-white transition-colors">🎉</span>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 z-20 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Milestones</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans">Honors & Achievements</h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, index) => (
            <TiltCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import { PROJECTS } from '../utils/data';

// Inline premium SVGs as illustrations matching the dark futuristic theme
const ProjectIllustration = ({ type }) => {
  if (type === "API Studio") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background mesh */}
        <rect width="400" height="200" rx="16" fill="#06021d" />
        <path d="M0 40H400" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx="20" cy="20" r="4" fill="#ef4444" />
        <circle cx="35" cy="20" r="4" fill="#eab308" />
        <circle cx="50" cy="20" r="4" fill="#22c55e" />
        <text x="75" y="24" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="monospace">API_STUDIO://main</text>
        
        {/* Code representation */}
        <rect x="25" y="60" width="160" height="110" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        <line x1="40" y1="80" x2="120" y2="80" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        <line x1="40" y1="95" x2="150" y2="95" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
        <line x1="40" y1="110" x2="90" y2="110" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
        <line x1="40" y1="125" x2="130" y2="125" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="45" cy="150" r="6" fill="#10b981" />
        <text x="58" y="154" fill="#10b981" fontSize="10" fontWeight="bold" fontFamily="monospace">200 OK</text>
        
        {/* Analytics graphic */}
        <rect x="215" y="60" width="160" height="110" rx="8" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        <circle cx="295" cy="115" r="30" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
        <circle cx="295" cy="115" r="30" stroke="#3b82f6" strokeWidth="6" strokeDasharray="188" strokeDashoffset="45" strokeLinecap="round" />
        <text x="295" y="119" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">85%</text>
        <text x="295" y="160" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle" fontFamily="monospace">LOAD METRIC</text>
      </svg>
    );
  }

  if (type === "Emotion Aware Smart Classroom") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="200" rx="16" fill="#07021c" />
        {/* Scan Frame */}
        <rect x="25" y="25" width="220" height="150" rx="12" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" />
        {/* Face Landmark Mesh overlay */}
        <circle cx="135" cy="90" r="28" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="120" cy="80" r="2" fill="#22d3ee" />
        <circle cx="150" cy="80" r="2" fill="#22d3ee" />
        <circle cx="135" cy="95" r="1.5" fill="#22d3ee" />
        <path d="M120 110C125 115 145 115 150 110" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
        
        {/* Scan corners */}
        <path d="M35 45V35H45" stroke="#22d3ee" strokeWidth="2.5" />
        <path d="M235 45V35H225" stroke="#22d3ee" strokeWidth="2.5" />
        <path d="M35 155V165H45" stroke="#22d3ee" strokeWidth="2.5" />
        <path d="M235 155V165H225" stroke="#22d3ee" strokeWidth="2.5" />
        
        <text x="38" y="52" fill="#22d3ee" fontSize="9" fontWeight="bold" fontFamily="monospace">FACE SCANNING...</text>

        {/* Emotion analytics panel */}
        <rect x="260" y="25" width="115" height="150" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
        <text x="272" y="45" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">EMOTIONS</text>
        
        <text x="272" y="70" fill="rgba(255,255,255,0.4)" fontSize="8">Attentive</text>
        <rect x="272" y="75" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" />
        <rect x="272" y="75" width="75" height="5" rx="2.5" fill="#10b981" />

        <text x="272" y="100" fill="rgba(255,255,255,0.4)" fontSize="8">Distracted</text>
        <rect x="272" y="105" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" />
        <rect x="272" y="105" width="25" height="5" rx="2.5" fill="#ef4444" />

        <text x="272" y="130" fill="rgba(255,255,255,0.4)" fontSize="8">Fatigue</text>
        <rect x="272" y="135" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.05)" />
        <rect x="272" y="135" width="35" height="5" rx="2.5" fill="#eab308" />
      </svg>
    );
  }

  // Customer Feedback System
  return (
    <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" rx="16" fill="#04011a" />
      
      {/* Feedback Card representation */}
      <rect x="30" y="30" width="200" height="140" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      
      {/* Title */}
      <line x1="45" y1="50" x2="130" y2="50" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />
      
      {/* Stars */}
      <circle cx="50" cy="72" r="5" fill="#fbbf24" />
      <circle cx="65" cy="72" r="5" fill="#fbbf24" />
      <circle cx="80" cy="72" r="5" fill="#fbbf24" />
      <circle cx="95" cy="72" r="5" fill="#fbbf24" />
      <circle cx="110" cy="72" r="5" fill="rgba(255,255,255,0.1)" />

      {/* Paragraph lines */}
      <line x1="45" y1="95" x2="200" y2="95" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="45" y1="110" x2="215" y2="110" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="45" y1="125" x2="160" y2="125" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Submit Button */}
      <rect x="45" y="142" width="65" height="16" rx="4" fill="#3b82f6" />
      <text x="77" y="153" fill="#fff" fontSize="7" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">SUBMIT</text>

      {/* Sentiment Analytics pie/ring */}
      <rect x="250" y="30" width="120" height="140" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.05)" />
      
      {/* Emoji Face */}
      <circle cx="310" cy="85" r="22" stroke="#a78bfa" strokeWidth="2" />
      <circle cx="302" cy="80" r="2" fill="#a78bfa" />
      <circle cx="318" cy="80" r="2" fill="#a78bfa" />
      <path d="M300 95C305 100 315 100 320 95" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" />
      
      <text x="310" y="132" fill="#a78bfa" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">92% POSITIVE</text>
      <text x="310" y="148" fill="rgba(255,255,255,0.3)" fontSize="7" textAnchor="middle">SENTIMENT</text>
    </svg>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 z-20 overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] left-[10%] w-[320px] h-[320px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[320px] h-[320px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Creations</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans">Featured Projects</h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Projects Stack */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Representation Column */}
                <div className={`lg:col-span-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                    className="glass-card rounded-2xl border border-white/5 overflow-hidden shadow-2xl p-2 relative group cursor-pointer"
                  >
                    <ProjectIllustration type={project.title} />
                    {/* Dark gradient slide-up highlight */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-xs font-bold text-white flex items-center gap-1.5 backdrop-blur-sm"
                        >
                          <FaGithub /> GitHub Repository
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-bold text-white flex items-center gap-1.5 shadow-glow-blue"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Description Column */}
                <div className={`lg:col-span-6 ${!isEven ? 'lg:order-1' : ''} space-y-5`}>
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">{project.tagline}</span>
                    <h4 className="text-3xl font-extrabold text-white font-sans">{project.title}</h4>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((badge) => (
                      <span
                        key={badge}
                        className="text-[11px] font-bold px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 hover:border-blue-500/30 transition-colors"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-3.5 mt-2">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3.5 text-sm text-gray-400">
                        <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                        <div>
                          <strong className="text-gray-200">{feature.split(':')[0]}:</strong>
                          {feature.split(':')[1]}
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Desktop action buttons */}
                  <div className="flex flex-wrap gap-4 pt-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-white flex items-center gap-1.5"
                    >
                      <FaGithub className="text-sm" /> GitHub Repository
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive px-5 py-2.5 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-xl text-xs font-bold text-blue-400 hover:text-white flex items-center gap-1.5 shadow-[inset_0_0_10px_rgba(59,130,246,0.1)] hover:shadow-glow-blue transition-all"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl flex items-center gap-1.5 hover:shadow-glow-purple transition-all"
                    >
                      <FaExternalLinkAlt className="text-xs" /> View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

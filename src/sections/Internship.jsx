import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCloud, FaDatabase, FaReact, FaServer, FaCogs, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { INTERNSHIPS } from '../utils/data';

const ArchitectureFlow = () => {
  return (
    <div className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-600" />
      <div>
        <h5 className="font-bold text-white text-base mb-1 flex items-center gap-2">
          <FaCloud className="text-blue-400" /> System Architecture & AWS Flow
        </h5>
        <p className="text-xs text-gray-500 mb-6">Designed and deployed full stack micro-nodes during the internship</p>
      </div>

      {/* Visual Flex nodes representation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
        {/* React Frontend */}
        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-center w-full sm:w-28 flex flex-col items-center gap-1.5 shadow-glow-cyan hover:scale-105 transition-transform">
          <FaReact className="text-2xl text-cyan-400 animate-spin-slow" />
          <span className="text-[10px] font-bold text-gray-300">Client React</span>
        </div>

        {/* Arrow / Bridge */}
        <div className="text-gray-600 text-xs font-mono font-bold rotate-90 sm:rotate-0">API</div>

        {/* Node/Express Backend */}
        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-center w-full sm:w-28 flex flex-col items-center gap-1.5 shadow-glow-purple hover:scale-105 transition-transform">
          <FaServer className="text-2xl text-purple-400" />
          <span className="text-[10px] font-bold text-gray-300">Node/Express</span>
        </div>

        {/* Arrow / Bridge */}
        <div className="text-gray-600 text-xs font-mono font-bold rotate-90 sm:rotate-0">Query</div>

        {/* MongoDB Database */}
        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl text-center w-full sm:w-28 flex flex-col items-center gap-1.5 shadow-glow-blue hover:scale-105 transition-transform">
          <FaDatabase className="text-2xl text-green-400" />
          <span className="text-[10px] font-bold text-gray-300">MongoDB Atlas</span>
        </div>
      </div>

      {/* Deploy badge */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5 text-xs text-gray-500">
        <span className="flex items-center gap-1.5 font-semibold text-gray-400"><FaCogs className="text-blue-500" /> Deployment Architecture</span>
        <span className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold uppercase tracking-wider text-[9px] shadow-glow-blue">AWS EC2 & S3</span>
      </div>
    </div>
  );
};

const Internship = () => {
  return (
    <section id="internship" className="relative py-24 z-20 overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-[20%] right-[10%] w-[320px] h-[320px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[320px] h-[320px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Experience</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans">Internship Timeline</h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Content splits into Timeline and Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Timeline details Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            {INTERNSHIPS.map((intern) => (
              <div key={intern.role} className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                
                <div>
                  {/* Job Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl shadow-glow-blue text-blue-400">
                      <FaBriefcase className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white leading-tight">{intern.role}</h4>
                      <p className="text-sm text-cyan-400 font-semibold mt-1">{intern.company}</p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-4 text-sm text-gray-400 mt-6 pl-1.5">
                    {intern.highlights.map((point, idx) => (
                      <li key={idx} className="relative pl-6 leading-relaxed">
                        {/* Glow Bullet Dot */}
                        <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-500 shadow-glow-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <motion.a
                      href="https://student-profile-system-frontend-omq.vercel.app/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-glow-blue hover:shadow-glow-purple transition-all duration-300 cursor-pointer z-20"
                    >
                      <FaExternalLinkAlt className="text-base" /> View Project
                    </motion.a>

                    <div className="flex items-center gap-3">
                      <a
                        href="https://student-profile-system-frontend-omq.vercel.app/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-300 shadow-glow-blue cursor-pointer"
                        aria-label="Open project"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                      <span className="text-xs text-gray-500 leading-snug">
                        Developed a responsive MERN-based Student Profile Management System with authentication and cloud deployment.
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span className="font-semibold text-gray-400">Internship Duration</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 font-semibold">{intern.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Architecture/Flow Diagram Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <ArchitectureFlow />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Internship;

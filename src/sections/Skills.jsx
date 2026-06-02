import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaJava, FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, 
  FaGitAlt, FaGithub, FaAws, FaCode, FaServer, FaPaintBrush, FaChartBar 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiDjango, SiMongodb, SiPostgresql, SiSqlite, 
  SiPostman
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { SKILLS } from '../utils/data';

// Map skill names to icons
const getIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'java': return <FaJava className="text-orange-500" />;
    case 'react': return <FaReact className="text-cyan-400 animate-spin-slow" />;
    case 'node.js': return <FaNodeJs className="text-green-500" />;
    case 'express.js': return <FaServer className="text-gray-300" />;
    case 'spring boot': return <SiSpringboot className="text-green-500 animate-pulse" />;
    case 'django': return <SiDjango className="text-emerald-600" />;
    case 'python': return <FaPython className="text-yellow-500" />;
    case 'javascript': return <FaJs className="text-yellow-400" />;
    case 'html': return <FaHtml5 className="text-orange-600" />;
    case 'css': return <FaCss3Alt className="text-blue-500" />;
    case 'mongodb': return <SiMongodb className="text-green-400" />;
    case 'mysql': return <FaServer className="text-blue-400" />;
    case 'postgresql': return <SiPostgresql className="text-blue-500" />;
    case 'sqlite': return <SiSqlite className="text-sky-500" />;
    case 'git': return <FaGitAlt className="text-orange-500" />;
    case 'github': return <FaGithub className="text-white" />;
    case 'aws': return <FaAws className="text-orange-400" />;
    case 'postman': return <SiPostman className="text-orange-500" />;
    case 'vs code': return <VscCode className="text-blue-500" />;
    case 'canva': return <FaPaintBrush className="text-pink-400" />;
    case 'power bi': return <FaChartBar className="text-yellow-600" />;
    default: return <FaCode className="text-blue-400" />;
  }
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...SKILLS.languages.map(s => ({ ...s, category: 'languages' })),
        ...SKILLS.frameworks.map(s => ({ ...s, category: 'frameworks' })),
        ...SKILLS.databases.map(s => ({ ...s, category: 'databases' })),
        ...SKILLS.tools.map(s => ({ ...s, category: 'tools' })),
      ];
    }
    
    switch (activeTab) {
      case 'languages': return SKILLS.languages.map(s => ({ ...s, category: 'languages' }));
      case 'frameworks': return SKILLS.frameworks.map(s => ({ ...s, category: 'frameworks' }));
      case 'databases': return SKILLS.databases.map(s => ({ ...s, category: 'databases' }));
      case 'tools': return SKILLS.tools.map(s => ({ ...s, category: 'tools' }));
      default: return [];
    }
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="relative py-24 z-20 overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-[30%] right-[5%] w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[5%] w-80 h-80 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Skills</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans">Technical Expertise</h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Categories Tab Swiper */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === cat.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/10'
              }`}
            >
              {activeTab === cat.id && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full -z-10 shadow-glow-blue"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={`${skill.category}-${skill.name}`}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between"
              >
                <div>
                  {/* Skill icon & title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-2xl">
                      {getIcon(skill.name)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{skill.name}</h4>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">{skill.category}</p>
                    </div>
                  </div>

                  {/* Level percentage text */}
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="text-gray-400 font-medium">Proficiency</span>
                    <span className="text-cyan-400 font-bold font-mono">{skill.level}%</span>
                  </div>
                </div>

                {/* Sliding glow progress bar */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-glow-blue"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBrain, FaCode, FaChartLine } from 'react-icons/fa';
import { PERSONAL_INFO } from '../utils/data';

const About = () => {
  const features = [
    {
      icon: <FaCode className="text-blue-400 text-2xl" />,
      title: "Problem Solving",
      desc: "Strong focus on Data Structures & Algorithms, regularly practicing on LeetCode, CodeChef, and Skillrack."
    },
    {
      icon: <FaBrain className="text-purple-400 text-2xl" />,
      title: "AI Integration",
      desc: "Keen interest in neural networks and applying computer vision tools like face-api.js to web portals."
    },
    {
      icon: <FaChartLine className="text-cyan-400 text-2xl" />,
      title: "Full-Stack Drive",
      desc: "Building low-latency MERN backend nodes and linking databases with responsive interfaces."
    }
  ];

  return (
    <section id="about" className="relative py-24 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-blue-400 font-bold"
          >
            About Me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans"
          >
            My Coding Journey
          </motion.h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Education Timeline Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden h-full flex flex-col justify-between">
              {/* Soft purple spotlight */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl shadow-glow-blue">
                    <FaGraduationCap className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Education</h4>
                    <p className="text-xs text-gray-500">Academic Foundation</p>
                  </div>
                </div>

                <div className="relative border-l-2 border-white/10 pl-6 ml-3 space-y-8 mt-8">
                  {/* Timeline node */}
                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border border-[#030014] shadow-glow-blue" />
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h5 className="font-bold text-white text-lg">{PERSONAL_INFO.college}</h5>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 font-semibold">2023 - 2027</span>
                    </div>
                    <p className="text-sm text-cyan-400 font-medium mt-1">{PERSONAL_INFO.degree}</p>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      Rigorous study of Data Structures, Database Management, and Web Technologies. Actively participating in internal engineering hackathons.
                    </p>
                  </div>
                </div>
              </div>

              {/* CGPA Display Glass Box */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-950/40 to-purple-950/30 border border-white/5 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-400 font-medium">Cumulative GPA</div>
                  <div className="text-xs text-gray-500 mt-0.5">Undergraduate Level</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-extrabold text-gradient-cyan-blue font-sans">{PERSONAL_INFO.cgpa}</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-0.5">Scale 10.0</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Values & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            {/* Short Paragraph Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
              <h4 className="text-lg font-bold text-white mb-4">Core Philosophy</h4>
              <p className="text-gray-400 leading-relaxed text-base">
                I believe that writing code is more than just instructions—it's about creating elegant, scalable solutions to complex problems. As an engineering student, I love exploring how backend systems (like Spring Boot and Node.js) connect with frontend platforms to deliver seamless user experiences.
              </p>
            </div>

            {/* Sub cards grid */}
            <div className="flex flex-col gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ x: 5 }}
                  className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl flex gap-5 items-start transition-all hover:bg-white/[0.04]"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">{feature.title}</h5>
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;

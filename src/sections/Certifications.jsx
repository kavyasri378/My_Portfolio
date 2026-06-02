import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { CERTIFICATIONS } from '../utils/data';

const getCertificationIcon = (title) => {
  if (title.toLowerCase().includes('java')) {
    return <FaCertificate className="text-orange-400 text-3xl" />;
  }
  if (title.toLowerCase().includes('sql')) {
    return <FaAward className="text-green-400 text-3xl" />;
  }
  return <FaCertificate className="text-purple-400 text-3xl" />;
};

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 z-20 overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-[20%] left-[10%] w-75 h-75 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-75 h-75 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Credentials</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans">Certifications</h3>
          <div className="h-0.5 w-20 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass-card-interactive p-6 rounded-2xl border border-white/5 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Highlight ribbon based on cert.color gradient */}
              <div className={`absolute top-0 left-0 w-full h-0.75 bg-linear-to-r ${cert.color}`} />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    {getCertificationIcon(cert.title)}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{cert.date}</span>
                </div>

                <h4 className="text-lg font-bold text-white leading-snug group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-400 mt-2 font-medium">Issued by: <span className="text-gray-300 font-semibold">{cert.issuer}</span></p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-3xl bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold shadow-glow-blue hover:shadow-glow-purple transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.01] cursor-pointer"
                >
                  <FaExternalLinkAlt className="text-sm" /> View Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTerminal, FaStar, FaRegStar } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';
import { CODING_PROFILES } from '../utils/data';

// Helper component for count-up animation when in view
const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endValue = parseInt(end);
    if (isNaN(endValue)) {
      setCount(end);
      return;
    }

    const totalFrames = Math.round(duration / 16); // ~60 FPS
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const current = Math.round(endValue * (progress * (2 - progress)));
      
      if (frame >= totalFrames) {
        setCount(endValue);
        clearInterval(counter);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, end, duration]);

  return <span ref={ref} className="font-mono">{count}{suffix}</span>;
};

// Render star ratings for HackerRank stars
const renderStars = (count) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= count) {
      stars.push(<FaStar key={i} className="text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-600" />);
    }
  }
  return <div className="flex gap-1 mt-1">{stars}</div>;
};

// Map platform to icon
const getPlatformIcon = (platform) => {
  switch (platform.toLowerCase()) {
    case 'leetcode':
      return <SiLeetcode className="text-yellow-500 text-3xl" />;
    case 'codechef':
      return <SiCodechef className="text-yellow-600 text-3xl" />;
    case 'hackerrank':
      return <SiHackerrank className="text-green-500 text-3xl" />;
    case 'skillrack':
    default:
      return <FaTerminal className="text-blue-400 text-3xl" />;
  }
};

const CodingProfiles = () => {
  // Generate random data for activity visualization
  const [activityCells, setActivityCells] = useState([]);
  
  useEffect(() => {
    // Generate 120 blocks for submission simulation
    const cells = Array.from({ length: 112 }, (_, i) => {
      const level = Math.floor(Math.random() * 5); // 0 to 4 intensity
      const submissions = level === 0 ? 0 : Math.floor(Math.random() * 8) + 1;
      return { id: i, level, submissions };
    });
    setActivityCells(cells);
  }, []);

  return (
    <section id="profiles" className="relative py-24 z-20 overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-[30%] left-[10%] w-[320px] h-[320px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] right-[10%] w-[320px] h-[320px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Metrics</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans">Coding Profiles</h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CODING_PROFILES.map((profile, i) => (
            <motion.div
              key={profile.platform}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-between"
            >
              <div>
                {/* Platform Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    {getPlatformIcon(profile.platform)}
                  </div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{profile.platform}</span>
                </div>

                {/* Submissions Big Stat */}
                {profile.solved !== null && (
                  <div className="mb-6">
                    <div className="text-4xl font-extrabold text-white">
                      <CountUp end={profile.solved} suffix={profile.solvedSuffix} />
                    </div>
                    <div className="text-xs text-gray-400 mt-1 font-medium">{profile.statLabel}</div>
                  </div>
                )}

                {/* Badges/Substats list */}
                <div className="space-y-4 mt-4">
                  {profile.badges.map((badge, index) => (
                    <div key={index} className="flex justify-between items-center text-sm border-t border-white/5 pt-3">
                      <span className="text-gray-400 font-medium">{badge.label}</span>
                      {badge.label.includes('Stars') ? (
                        renderStars(badge.count)
                      ) : (
                        <span className="text-cyan-400 font-bold font-mono">
                          <CountUp end={badge.count} suffix="+" />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative side accent */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${profile.color} rounded-full mt-6 opacity-80`} />
            </motion.div>
          ))}
        </div>

        {/* Coding Activity Heatmap Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden"
        >
          {/* Subtle gradient banner */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <h4 className="text-xl font-bold text-white">Problem Solving Consistency</h4>
              <p className="text-sm text-gray-400 mt-1">Simulated daily submission heatmap across multiple platforms</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              <span>Less</span>
              <div className="w-3 h-3 bg-white/5 rounded-sm border border-white/10" />
              <div className="w-3 h-3 bg-blue-900/40 rounded-sm border border-blue-500/10" />
              <div className="w-3 h-3 bg-indigo-700/60 rounded-sm border border-indigo-500/10" />
              <div className="w-3 h-3 bg-purple-600/80 rounded-sm border border-purple-500/20 shadow-glow-purple" />
              <span>More</span>
            </div>
          </div>

          {/* Grid structure representing GitHub-style contribution squares */}
          <div className="grid grid-flow-col grid-rows-7 gap-2 overflow-x-auto py-2">
            {activityCells.map((cell) => {
              let bgClass = "bg-white/5 border border-white/5";
              if (cell.level === 1) bgClass = "bg-blue-950/40 border border-blue-900/30";
              if (cell.level === 2) bgClass = "bg-blue-800/40 border border-blue-600/30";
              if (cell.level === 3) bgClass = "bg-indigo-700/50 border border-indigo-500/30";
              if (cell.level === 4) bgClass = "bg-purple-600/60 border border-purple-500/30 shadow-[0_0_8px_rgba(167,139,250,0.2)]";

              return (
                <div
                  key={cell.id}
                  className={`w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-sm transition-all duration-300 hover:scale-125 hover:border-cyan-400 ${bgClass}`}
                  title={`${cell.submissions} submissions`}
                />
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CodingProfiles;

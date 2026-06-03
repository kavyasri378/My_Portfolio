import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaStar, FaEye, FaFire } from 'react-icons/fa';
import { PERSONAL_INFO } from '../utils/data';

const GithubStats = () => {
  const [activeMetric, setActiveMetric] = useState('languages');

  const gitStats = {
    username: "kavyasri378",
    publicRepos: 24,
    totalCommits: 847,
    starsCount: 32,
    followers: 48,
    streakDays: 45,
    longestStreak: 82
  };

  const languages = [
    { name: "Java", percentage: 45, color: "bg-orange-500", shadow: "shadow-glow-blue" },
    { name: "JavaScript", percentage: 30, color: "bg-yellow-400", shadow: "shadow-glow-cyan" },
    { name: "Python", percentage: 15, color: "bg-blue-500", shadow: "shadow-glow-purple" },
    { name: "HTML/CSS", percentage: 10, color: "bg-purple-600", shadow: "shadow-glow-purple" }
  ];

  const recentRepos = [
    { name: "Api_Design_Thinking.git", desc: "A functional playground for low-latency testing, load modeling, and mock response validation.", stars: 12, forks: 4 },
    { name: "Emotional-awareness-system.git", desc: "AI-driven smart classroom detecting real-time learning focus and fatigue patterns.", stars: 10, forks: 2 },
    { name: "StudentProfileSystemFrontend.git", desc: "A full-stack student profile CRUD app with Node.js, Express, MongoDB, and dynamic frontend integration.", stars: 8, forks: 1 }
  ];

  return (
    <section id="github" className="relative py-24 z-20 overflow-hidden">
      {/* Background Soft Orbs */}
      <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Activity</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans">GitHub Analytics</h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Repository Cards / Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {/* User Profile Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 relative overflow-hidden">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-glow-blue select-none">
                  KD
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg flex items-center gap-1.5">
                    {PERSONAL_INFO.name} <FaGithub className="text-sm text-gray-500" />
                  </h4>
                  <a 
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 font-semibold hover:underline"
                  >
                    @{gitStats.username}
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5 text-center">
                <div>
                  <div className="text-xl font-extrabold text-white">{gitStats.publicRepos}</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Repos</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">{gitStats.starsCount}</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Stars</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white">{gitStats.followers}</div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">Followers</div>
                </div>
              </div>
            </div>

            {/* Contribution Streak Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 flex items-center justify-between overflow-hidden relative">
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-600/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl shadow-glow-purple">
                  <FaFire className="text-2xl animate-pulse" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white">{gitStats.streakDays} Days</div>
                  <div className="text-xs text-gray-400 font-medium">Current Commit Streak</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Longest</div>
                <div className="text-sm font-bold text-cyan-400 font-mono mt-0.5">{gitStats.longestStreak}d</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Charts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-full relative">
              {/* Top Selector bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 flex-wrap gap-4">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <FaCodeBranch className="text-blue-400" /> Repository & Languages
                </h4>
                
                <div className="flex bg-white/5 border border-white/10 rounded-lg p-0.5">
                  <button
                    onClick={() => setActiveMetric('languages')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      activeMetric === 'languages' ? 'bg-blue-600 text-white shadow-glow-blue' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Top Languages
                  </button>
                  <button
                    onClick={() => setActiveMetric('repos')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      activeMetric === 'repos' ? 'bg-blue-600 text-white shadow-glow-blue' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Recent Repositories
                  </button>
                </div>
              </div>

              {/* Render dynamic charts */}
              <div className="flex-grow flex flex-col justify-center">
                {activeMetric === 'languages' ? (
                  <div className="space-y-6">
                    {languages.map((lang) => (
                      <div key={lang.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-medium">
                          <span className="text-white flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                            {lang.name}
                          </span>
                          <span className="text-cyan-400 font-mono">{lang.percentage}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${lang.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className={`h-full ${lang.color} ${lang.shadow} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recentRepos.map((repo, idx) => (
                      <motion.a
                        key={repo.name}
                        href={`${PERSONAL_INFO.github}/${repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="p-4 bg-white/[0.02] border border-white/5 rounded-xl block hover:bg-white/[0.04] transition-all group"
                      >
                        <div className="flex justify-between items-center">
                          <h5 className="font-bold text-white group-hover:text-blue-400 transition-colors text-sm">{repo.name}</h5>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><FaStar className="text-yellow-500/80" /> {repo.stars}</span>
                            <span className="flex items-center gap-1"><FaEye className="text-blue-500/80" /> {repo.forks}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 leading-relaxed">{repo.desc}</p>
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Commit Log summary */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                <span>Data retrieved dynamically</span>
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:underline hover:text-white"
                >
                  View GitHub Profile →
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default GithubStats;

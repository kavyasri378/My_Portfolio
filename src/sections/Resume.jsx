import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye, FaRegFilePdf } from 'react-icons/fa';
import { PERSONAL_INFO } from '../utils/data';

// Printable HTML Generation function representing the actual resume
const triggerResumePrint = () => {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert("Please allow popups to download/print the resume.");
    return;
  }
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${PERSONAL_INFO.name} - Resume</title>
      <style>
        @page {
          size: A4;
          margin: 15mm 15mm 15mm 15mm;
        }
        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          color: #000;
          line-height: 1.35;
          margin: 0;
          padding: 0;
          font-size: 10.5px;
          background-color: #fff;
        }
        a {
          color: #0c326d;
          text-decoration: underline;
        }
        .header-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 8px;
        }
        .logo-col {
          width: 70px;
          vertical-align: middle;
          text-align: center;
        }
        .logo-text {
          font-size: 8px;
          font-weight: 800;
          color: #0c326d;
          text-transform: uppercase;
          margin-top: 3px;
          font-family: 'Arial Black', sans-serif;
          letter-spacing: 0.2px;
        }
        .name-col {
          text-align: right;
          vertical-align: middle;
        }
        .name-title {
          font-family: 'Georgia', serif;
          font-size: 26px;
          font-weight: bold;
          margin: 0;
          color: #111;
        }
        .contact-line {
          text-align: center;
          font-size: 9.5px;
          font-weight: bold;
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 1.5px solid #000;
          color: #000;
          font-family: Arial, sans-serif;
        }
        .contact-line a {
          color: #0056b3;
          text-decoration: underline;
        }
        .section-title {
          font-size: 11px;
          font-weight: bold;
          text-transform: uppercase;
          border-bottom: 1.5px solid #000;
          margin-top: 12px;
          margin-bottom: 6px;
          padding-bottom: 1.5px;
          letter-spacing: 0.4px;
          font-family: Arial, sans-serif;
        }
        .entry-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 2px;
        }
        .entry-left {
          text-align: left;
          font-weight: bold;
          font-size: 9.5px;
        }
        .entry-right {
          text-align: right;
          font-weight: bold;
          font-size: 9.5px;
        }
        .desc-text {
          font-size: 9.5px;
          color: #222;
          margin: 2.5px 0 6px 0;
          text-align: justify;
        }
        .bullet-list {
          margin: 2px 0 6px 14px;
          padding: 0;
        }
        .bullet-list li {
          margin-bottom: 2px;
          font-size: 9.5px;
          color: #222;
        }
        .skills-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 4px;
        }
        .skills-label {
          font-weight: bold;
          width: 170px;
          vertical-align: top;
          font-size: 9.5px;
          padding-bottom: 3.5px;
        }
        .skills-value {
          vertical-align: top;
          font-size: 9.5px;
          padding-bottom: 3.5px;
        }
        @media print {
          body {
            background-color: #fff;
            color: #000;
          }
          /* Ensure headers do not page-break awkwardly */
          .section-title, .entry-table {
            page-break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      <!-- Top header layout -->
      <table class="header-table">
        <tr>
          <td class="logo-col">
            <!-- Sri Eshwar logo image -->
            <img
              src="https://scontent.fcjb6-1.fna.fbcdn.net/v/t39.30808-6/363809584_769198978331108_6466986834931633932_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=bOqeygOfUYoQ7kNvwHvsSXc&_nc_oc=Ado1DPZXAOqA1Reo91odf-CgqOX-68s8aJFDpKyk1hbb_qMKSSUAMAPllkfMHGeM5RA&_nc_zt=23&_nc_ht=scontent.fcjb6-1.fna&_nc_gid=iB6NPtnjQMDzO4gbOMrteg&_nc_ss=7a289&oh=00_Af-tRAuMVJCiHlvfr5KMZs_-DjUWPibfhzQNLGb63NswXA&oe=6A249D48"
              alt="Sri Eshwar logo"
              width="42"
              height="42"
              style="border-radius: 12px; object-fit: cover;"
            />
            <div class="logo-text">Sri Eshwar</div>
          </td>
          <td class="name-col">
            <h1 class="name-title">${PERSONAL_INFO.name}</h1>
          </td>
        </tr>
      </table>

      <!-- Contact details line -->
      <div class="contact-line">
        Contact : ${PERSONAL_INFO.phone} | 
        Email: <a href="mailto:${PERSONAL_INFO.email}">${PERSONAL_INFO.email}</a> | 
        <a href="${PERSONAL_INFO.linkedin}" target="_blank">Linkedin</a> | 
        <a href="${PERSONAL_INFO.github}" target="_blank">GitHub</a> | 
        <a href="${PERSONAL_INFO.github}" target="_blank">SelfIntro</a>
      </div>

      <!-- Education Section -->
      <div class="section-title">Education</div>
      <table class="entry-table">
        <tr>
          <td class="entry-left">COLLEGE EDUCATION -- Sri Eshwar College of Engineering || 8.47 (3rd Sem)</td>
          <td class="entry-right">2024-2028</td>
        </tr>
      </table>
      <table class="entry-table">
        <tr>
          <td class="entry-left">SCHOOLING -- Ponnu Matriculation Higher Secondary School || 96%</td>
          <td class="entry-right">2022-2024</td>
        </tr>
      </table>
      <table class="entry-table" style="margin-bottom: 6px;">
        <tr>
          <td class="entry-left">SCHOOLING -- Ponnu Matriculation Higher Secondary School || 97%</td>
          <td class="entry-right">2021-2022</td>
        </tr>
      </table>

      <!-- Internship Experiences Section -->
      <div class="section-title">Internship Experiences</div>
      <table class="entry-table">
        <tr>
          <td class="entry-left">MERN STACK (MERN+AWS)--BETTER TOMORROW</td>
          <td class="entry-right">2026</td>
        </tr>
      </table>
      <p class="desc-text">
        Built and deployed full-stack MERN applications with AWS integration, developing RESTful APIs, authentication, database operations, and responsive React UIs. Managed cloud deployment and scalability to deliver secure, production ready solutions. (<a href="${PERSONAL_INFO.github}" target="_blank">Link</a>)
      </p>

      <!-- Projects Section -->
      <div class="section-title">Projects</div>
      
      <table class="entry-table">
        <tr>
          <td class="entry-left">API Studio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/kavyasri378/Api_Design_Thinking.git" target="_blank">Github</a></td>
          <td class="entry-right">March 2026</td>
        </tr>
      </table>
      <div class="desc-text">
        <strong>TechStack : React, Node.js, Express.js, MongoDB</strong><br/>
        Built a full-stack Unified API Testing Platform with functional testing, load testing, security validation, and performance monitoring using React, Express, and MongoDB.
      </div>

      <table class="entry-table" style="margin-top: 4px;">
        <tr>
          <td class="entry-left">Emotion Aware Smart Classroom &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/kavyasri378/Emotional-awareness-system.git" target="_blank">Github</a></td>
          <td class="entry-right">February 2026</td>
        </tr>
      </table>
      <div class="desc-text">
        <strong>TechStack : TensorFlow.js, face-api.js, JavaScript, HTML, CSS</strong><br/>
        Developed an AI-powered classroom monitoring system that detects and analyzes student emotions in real time using facial recognition and deep learning models. The system provides live engagement insights to help educators improve teaching effectiveness and enhance learning outcomes.
      </div>

      <table class="entry-table" style="margin-top: 4px;">
        <tr>
          <td class="entry-left">Customer Feedback System &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/kavyasri378/feedback-system.git" target="_blank">Github</a></td>
          <td class="entry-right">November 2025</td>
        </tr>
      </table>
      <div class="desc-text">
        <strong>TechStack : Python, Django, HTML, CSS, JavaScript, SQLite</strong><br/>
        Built a web-based feedback management platform that enables users to submit ratings and comments, while allowing administrators to view feedback, manage responses, and perform basic analytics to improve service quality.
      </div>

      <!-- Achievements Section -->
      <div class="section-title">Achievements</div>
      <table class="entry-table">
        <tr>
          <td class="entry-left">First Prize in Web Designer Day Hackathon</td>
          <td class="entry-right">2026</td>
        </tr>
      </table>
      <table class="entry-table">
        <tr>
          <td class="entry-left">Participated in Mechnotron 2k26, engaging in technical problem-solving and innovation-focused activities</td>
          <td class="entry-right">2026</td>
        </tr>
      </table>
      <table class="entry-table">
        <tr>
          <td class="entry-left">Earned NPTEL Gold Badge for outstanding performance in an online certification course</td>
          <td class="entry-right">2025</td>
        </tr>
      </table>
      <table class="entry-table">
        <tr>
          <td class="entry-left">Received Certificate of Excellence in the Cred Tech Hackathon for innovative technical contribution</td>
          <td class="entry-right">2025</td>
        </tr>
      </table>

      <!-- Coding Profiles Section -->
      <div class="section-title" style="margin-top: 10px;">Coding Profiles</div>
      <ul class="bullet-list">
        <li><strong>Skillrack</strong> : Solved 1500+ Problems | Received 10 certificates | 500+ Bronzes | Rank : 6531 | <a href="${PERSONAL_INFO.github}" target="_blank">Link</a></li>
        <li><strong>Leetcode</strong> : Solved 300+ Problems | Global Rating : 409674 | <a href="${PERSONAL_INFO.github}" target="_blank">Link</a></li>
        <li><strong>HackerRank</strong> : 2 Stars in Java | 5 Stars in C++ | 5 Stars in 30 Days of Code | 4 Star in sql | <a href="${PERSONAL_INFO.github}" target="_blank">Link</a></li>
        <li><strong>Codechef</strong> : Solved 550+ Problems | <a href="${PERSONAL_INFO.github}" target="_blank">Link</a></li>
      </ul>

      <!-- Certifications Section -->
      <div class="section-title">Certifications</div>
      <table class="entry-table">
        <tr>
          <td class="entry-left">Oracle Java Programming Badge | Oracle</td>
          <td class="entry-right">2025</td>
        </tr>
        <tr>
          <td class="entry-left">Introduction to Java | Microsoft Azure</td>
          <td class="entry-right">2025</td>
        </tr>
        <tr>
          <td class="entry-left">SQL Basics | Hacker Rank</td>
          <td class="entry-right">2025</td>
        </tr>
        <tr>
          <td class="entry-left">Mastering in Data Structure using C and C++ | Udemy</td>
          <td class="entry-right">2025</td>
        </tr>
        <tr>
          <td class="entry-left">Python for Data Science and AI | Coursera</td>
          <td class="entry-right">2024</td>
        </tr>
      </table>

      <!-- Technical Skills Section -->
      <div class="section-title">Technical Skills</div>
      <table class="skills-table">
        <tr>
          <td class="skills-label">Languages</td>
          <td class="skills-value">C | C++ | Python | Java | HTML | CSS | Javascript</td>
        </tr>
        <tr>
          <td class="skills-label">Technologies / Frameworks</td>
          <td class="skills-value">Spring-Boot | NodeJS | Express | ReactJS</td>
        </tr>
        <tr>
          <td class="skills-label">Database</td>
          <td class="skills-value">MySQL | MongoDB | Postgress</td>
        </tr>
        <tr>
          <td class="skills-label">Deployment</td>
          <td class="skills-value">Vercel | Render</td>
        </tr>
        <tr>
          <td class="skills-label">Tools</td>
          <td class="skills-value">Git | GitHub | Postman | AWS | Canva | PowerBI | Excel | PowerPoint</td>
        </tr>
        <tr>
          <td class="skills-label">Core Concepts</td>
          <td class="skills-value">DSA | OOPS | DBMS</td>
        </tr>
      </table>

      <script>
        window.onload = function() {
          window.print();
          // Optional: Close print window after printing starts/cancels
          setTimeout(function() { window.close(); }, 1000);
        }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
};

const Resume = () => {
  return (
    <section id="resume" className="relative py-24 z-20 overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Document</h2>
          <h3 className="text-3xl sm:text-5xl font-bold mt-2 text-white font-sans">Curriculum Vitae</h3>
          <div className="h-[2px] w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: CTA Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs font-bold uppercase text-cyan-400 tracking-wider">Ready for Review</span>
            <h4 className="text-3xl font-extrabold text-white leading-tight">Print or Download my Official Resume</h4>
            <p className="text-gray-400 leading-relaxed">
              Find my verified credentials, academic milestones at Sri Eshwar College of Engineering, coding dashboard highlights, and internship accomplishments in a clean, print-ready document.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={triggerResumePrint}
                className="interactive btn-neon px-7 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-glow-blue flex items-center gap-2 hover:scale-105 transition-all"
              >
                <FaDownload /> Print / Save Resume
              </button>
            </div>
          </motion.div>

          {/* Right Column: Premium Interactive Mock Resume A4 preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex justify-center"
          >
            <motion.div
              onClick={triggerResumePrint}
              whileHover={{ rotate: 1, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="glass-card w-full max-w-[500px] h-[600px] rounded-3xl border border-white/5 relative overflow-hidden p-8 flex flex-col justify-between shadow-2xl group cursor-pointer text-left"
            >
              {/* Highlight gradient bar */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              
              {/* Resume Header */}
              <div>
                <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 5 L90 25 V65 C90 80 50 95 50 95 C50 95 10 80 10 65 V25 Z" fill="#3b82f6"/>
                      <path d="M50 13 L82 29 V61 C82 72 50 84 50 84 C50 84 18 72 18 61 V29 Z" fill="#000"/>
                    </svg>
                    <div>
                      <h5 className="font-extrabold text-white text-base">{PERSONAL_INFO.name}</h5>
                      <p className="text-[9px] text-cyan-400 font-bold tracking-wide mt-0.5">{PERSONAL_INFO.role}</p>
                    </div>
                  </div>
                  <FaRegFilePdf className="text-red-500 text-xl" />
                </div>

                {/* Subsections representing layout blocks */}
                <div className="space-y-4">
                  
                  <div>
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Education</div>
                    <div className="text-xs font-bold text-white">COLLEGE EDUCATION -- Sri Eshwar College of Engineering</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">CGPA: 8.47 (3rd Sem) • 2024 - 2028</div>
                  </div>

                  <div>
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Experience</div>
                    <div className="text-xs font-bold text-white">MERN STACK (MERN+AWS) -- BETTER TOMORROW</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">REST APIs, Deployed AWS architectures • 2026</div>
                  </div>

                  <div>
                    <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Skills Overview</div>
                    <div className="text-[9.5px] text-gray-400 flex flex-wrap gap-1.5 mt-1">
                      {["C++", "Java", "ReactJS", "NodeJS", "Spring-Boot", "MongoDB", "MySQL", "AWS"].map((s) => (
                        <span key={s} className="px-2 py-0.5 bg-white/5 border border-white/5 rounded-md font-medium">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Print border overlay footer */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><FaEye /> Printable Preview</span>
                <span className="text-blue-400 group-hover:underline flex items-center gap-1">
                  Open Print Dialog <FaDownload className="text-[10px]" />
                </span>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
export { triggerResumePrint };

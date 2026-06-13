import { useState, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Menu,
  X,
  Briefcase,
  BookOpen,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const email = 'a.sameera2006@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setToastMessage('Email copied successfully!');
    setTimeout(() => setToastMessage(''), 3000);
  };

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#06B6D4] selection:text-black">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06B6D411_1px,transparent_1px),linear-gradient(to_bottom,#06B6D411_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#06B6D408] rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#22D3EE08] rounded-full blur-[120px]" />
      </div>

      {/* Navbar with Glassmorphism */}
      <nav className="fixed top-6 left-6 right-6 z-50 bg-[#0F172A]/80 backdrop-blur-xl border border-[#06B6D4]/25 rounded-full px-8 py-4 flex justify-between items-center shadow-[0_0_20px_rgba(6,182,212,0.1)]">
          <span className="text-sm font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#06B6D4] flex items-center justify-center text-black font-black shadow-[0_0_15px_rgba(6,182,212,0.5)]">SA</div>
            SAMEERA APPIKONDA
          </span>
          <div className="hidden md:flex space-x-8 text-[10px] font-bold tracking-widest text-[#94A3B8]">
            {['HOME', 'ABOUT', 'EDUCATION', 'SKILLS', 'PROJECTS', 'CONTACT'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#06B6D4] transition-colors">
                {link}
              </a>
            ))}
          </div>
          <a href="#contact" className="px-6 py-2 bg-[#06B6D4] text-white text-[10px] font-black rounded-full flex items-center gap-2 hover:bg-[#22D3EE] transition-all hover:scale-105 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            LET'S CONNECT ↗
          </a>
      </nav>

      {/* Vertical Sidebar Elements */}
      <div className="fixed left-6 top-1/3 hidden md:flex flex-col gap-6 text-[10px] font-bold text-[#94A3B8] [writing-mode:vertical-lr] rotate-180 tracking-[0.2em] border-l border-[#06B6D4]/20 pl-2">
        CODE • LEARN • INNOVATE • BUILD • IMPACT
      </div>
      <div className="fixed right-6 top-1/3 hidden md:flex flex-col gap-6 z-40">
        {[
          { Icon: Github, name: 'GitHub', href: 'https://github.com/Sameera-Appikonda', action: null },
          { Icon: Linkedin, name: 'LinkedIn', href: 'https://www.linkedin.com/in/sameera-appikonda', action: null },
          { Icon: Mail, name: 'Email', href: null, action: () => setShowEmailPopup(true) }
        ].map((item, i) => (
          <div key={i} className="relative group">
            <motion.a
              href={item.href || '#'}
              target={item.href ? "_blank" : undefined}
              rel={item.href ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (item.action) {
                  e.preventDefault();
                  item.action();
                }
              }}
              whileHover={{ scale: 1.1 }}
              className="p-3 rounded-lg bg-[#0F172A] border border-[#06B6D4]/30 text-[#06B6D4] hover:bg-[#06B6D4] hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 flex items-center justify-center p-4 bg-black"
            >
              <item.Icon size={20} />
            </motion.a>
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-[#0F172A] border border-[#06B6D4]/30 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      {/* Email Popup */}
      <AnimatePresence>
        {showEmailPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-sm bg-[#0F172A]/95 backdrop-blur-md border border-[#06B6D4]/30 rounded-3xl p-8 shadow-2xl relative"
            >
              <button 
                onClick={() => setShowEmailPopup(false)}
                className="absolute top-4 right-4 p-2 text-[#94A3B8] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#06B6D4] rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                  <Mail size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Send an Email</h3>
                <p className="text-[#94A3B8] text-sm mb-6">Connect with Sameera directly at any time.</p>
                
                <div className="bg-[#050505] border border-[#06B6D4]/20 rounded-xl p-4 flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-mono text-[#06B6D4] truncate">{email}</span>
                  <button 
                    onClick={copyEmail}
                    className="p-2 bg-[#0F172A] border border-[#06B6D4]/30 rounded-lg text-[#06B6D4] hover:bg-[#06B6D4] hover:text-white transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                    title="Copy to clipboard"
                  >
                    <Copy size={16} />
                  </button>
                </div>

                <div className="flex gap-3">
                  <a 
                    href={`mailto:${email}`}
                    className="flex-1 px-4 py-3 bg-[#06B6D4] text-white rounded-xl text-xs font-black hover:bg-[#22D3EE] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  >
                    OPEN MAIL ↗
                  </a>
                  <button 
                    onClick={() => setShowEmailPopup(false)}
                    className="flex-1 px-4 py-3 bg-[#0F172A] border border-[#06B6D4]/30 text-white rounded-xl text-xs font-black hover:bg-white hover:text-black transition-all"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[110] px-6 py-3 bg-[#06B6D4] text-white rounded-full text-xs font-black shadow-lg flex items-center gap-2"
          >
            <Check size={16} />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-32 px-12 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16 px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[#06B6D4] font-bold text-sm tracking-widest mb-6 px-1 border-l-2 border-[#06B6D4]">HELLO, I'M</p>
            <h1 className="text-[7rem] font-black mb-6 tracking-tighter leading-[0.95] text-white drop-shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              SAMEERA<br />APPIKONDA
            </h1>
            <h2 className="text-xl md:text-2xl text-[#94A3B8] mb-8 font-medium">
                B.TECH CSE (AI & ML) | 2027
                <br/>
                <span className="text-white font-bold tracking-tight">PYTHON DEVELOPER</span> <span className="text-[#06B6D4] mx-2">•</span> <span className="text-white font-bold tracking-tight">WEB DEVELOPER</span>
            </h2>
            
            <p className="text-[#CBD5E1] mb-8 max-w-[550px] leading-relaxed italic border-l border-[#06B6D4]/30 pl-4">
                Computer Science undergraduate passionate about AI, Python, Machine Learning, and Full Stack Development.
                I build intelligent and impactful web applications using Python, Flask, and modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-[#06B6D4] text-white rounded-full font-bold hover:bg-[#22D3EE] transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]">VIEW MY WORK ↗</a>
              <a href="#" className="px-8 py-4 bg-[#0F172A] border border-[#06B6D4]/30 rounded-full font-bold hover:border-[#06B6D4] text-white transition-all hover:scale-105">DOWNLOAD RESUME</a>
            </div>
          </motion.div>
        </div>

        {/* Stats Card - Below Hero Content */}
        <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-7xl mx-auto w-full p-[1px] rounded-[24px] bg-gradient-to-r from-[#06B6D4]/40 via-[#22D3EE]/10 to-transparent"
        >
            <div className="grid grid-cols-4 bg-[#0F172A]/90 backdrop-blur-md rounded-[23px] border border-[#06B6D4]/10 h-[140px] items-center shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                {[ {icon: Code, val: '3+', label: 'PROJECTS COMPLETED'}, {icon: Briefcase, val: '1+', label: 'INTERNSHIP EXPERIENCE'}, {icon: BookOpen, val: '4TH', label: 'YEAR STUDENT'}, {icon: Code, val: '100%', label: 'DEDICATED TO LEARNING'} ].map((stat, i) => (
                    <div key={stat.label} className={`flex items-center gap-4 px-8 ${i !== 0 ? 'border-l border-[#06B6D4]/10' : ''}`}>
                        <stat.icon className="text-[#06B6D4]" size={32}/>
                        <div>
                            <div className="text-3xl font-black text-white">{stat.val}</div>
                            <div className="text-[10px] text-[#94A3B8] font-bold tracking-widest uppercase">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
      </section>

      {/* Skills Bento Grid */}
      <section id="skills" className="py-24 px-6 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center text-white tracking-tight">Technical <span className="text-[#06B6D4]">Arsenal</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Python', 'Flask', 'JavaScript', 'HTML/CSS', 'SQL', 'Pandas', 'Machine Learning', 'Git'].map((skill, i) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-[#0F172A] border border-[#06B6D4]/15 hover:border-[#06B6D4] transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
              >
                <Code className="text-[#06B6D4] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-lg text-white">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center text-white tracking-tight">Featured <span className="text-[#06B6D4]">Projects</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { title: 'Vaccination Reminder', desc: 'Backend-driven vaccination tracking.', tech: ['Flask', 'MySQL'], link: 'https://github.com/Sameera4202/vaccination-project' },
              { title: 'AI Farming Assistant', desc: 'AI-powered farming suggestions.', tech: ['Flask', 'Watsonx.ai'], link: 'https://github.com/Sameera4202/IBM-Skill-Build-Platform-Certifications' },
              { title: 'Smart Study Planner', desc: 'Task scheduling app.', tech: ['HTML', 'JS'], link: 'https://github.com/Sameera4202/smart-study-planner' }
            ].map((p, i) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[24px] bg-[#0F172A] border border-[#06B6D4]/15 shadow-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-[#06B6D4] transition-all group"
              >
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#06B6D4] transition-colors">{p.title}</h3>
                <p className="text-[#CBD5E1] mb-6">{p.desc}</p>
                
                <div className="mb-6">
                  <motion.a 
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#22D3EE] font-bold text-sm tracking-tight hover:underline transition-all cursor-pointer inline-flex"
                    whileHover={{ scale: 1.05, textShadow: "0 0 10px rgba(34,211,238,0.5)" }}
                  >
                    <Github size={16} />
                    <span>View Source Code</span>
                  </motion.a>
                </div>

                <div className="flex gap-2">
                  {p.tech.map(t => <span key={t} className="px-3 py-1 bg-[#050505] border border-[#06B6D4]/20 rounded-full text-xs font-medium text-[#06B6D4]">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 px-6 bg-[#050505] relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Academic Path */}
          <div>
            <div className="flex items-center gap-4 mb-12 border-l-4 border-[#06B6D4] pl-6">
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Academic <span className="text-[#06B6D4]">Path</span></h2>
            </div>
            <div className="space-y-8">
              {[
                { year: '2023 – 2027', title: 'VIGNAN\'S INSTITUTE OF ENGINEERING FOR WOMEN', subtitle: 'B-TECH IN COMPUTER SCIENCE & MACHINE LEARNING', desc: 'Specializing in Python, AI, Machine Learning, Data Analysis, and Backend Development. Building intelligent applications while continuously improving problem-solving and software engineering skills.' },
                { year: '2021 – 2023', title: 'SRI SAI NADHA JUNIOR COLLEGE', subtitle: 'INTERMEDIATE (MPC)', desc: 'Developed a strong foundation in Mathematics, Physics, and logical thinking, which later contributed to my programming and analytical abilities.' },
                { year: '2021', title: 'INDIAN SPRINGS SCHOOL', subtitle: 'SECONDARY SCHOOL CERTIFICATE', desc: 'Completed secondary education with distinction and developed a strong academic foundation and learning discipline.' },
              ].map((item, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[24px] bg-[#0F172A] border border-[#06B6D4]/15 hover:border-[#06B6D4] transition-all hover:-translate-y-2 relative group"
                >
                  <div className="absolute top-6 right-6 w-3 h-3 bg-[#06B6D4] rounded-full animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                  <p className="text-[#06B6D4] font-bold text-sm mb-3 tracking-widest">{item.year}</p>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#06B6D4] transition-colors">{item.title}</h3>
                  <p className="text-[#22D3EE] font-semibold text-xs mb-4">{item.subtitle}</p>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Depth */}
          <div>
            <div className="flex items-center gap-4 mb-12 border-l-4 border-[#06B6D4] pl-6">
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Professional <span className="text-[#06B6D4]">Depth</span></h2>
            </div>
            <div className="space-y-8">
              {[
                { year: 'JULY 2025 – SEPTEMBER 2025', title: 'IBM SKILLSBUILD & EDUNET FOUNDATION (AICTE)', subtitle: 'AI & WEB DEVELOPMENT INTERN', desc: 'Worked on AI-assisted web applications using Python and Flask. Integrated IBM Watsonx.ai to create intelligent systems and gained experience in backend development and API-based workflows.' },
                { year: 'ACCENTURE', title: 'AI ASCEND LEVEL 2', subtitle: 'DATA ANALYSIS & VISUALIZATION', desc: 'Learned Data Processing, Exploratory Data Analysis, and Data Visualization techniques for extracting insights from structured datasets.' },
                { year: 'TCS iON CAREER EDGE', title: 'YOUNG PROFESSIONAL', subtitle: 'SKILLS & FUNDAMENTALS', desc: 'Developed communication skills, workplace readiness, and professional fundamentals required for modern IT environments.' },
              ].map((item, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[24px] bg-[#0F172A] border border-[#06B6D4]/15 hover:border-[#06B6D4] transition-all hover:-translate-y-2 relative group"
                >
                  <div className="absolute top-6 right-6 w-3 h-3 bg-[#06B6D4] rounded-full animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                  <p className="text-[#06B6D4] font-bold text-sm mb-3 tracking-widest">{item.year}</p>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-[#06B6D4] transition-colors">{item.title}</h3>
                  <p className="text-[#22D3EE] font-semibold text-xs mb-4">{item.subtitle}</p>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-[#0F172A] text-white relative z-10">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-black mb-8 text-[#06B6D4] tracking-tight">Let's Connect</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left bg-[#050505] p-8 rounded-[24px] border border-[#06B6D4]/25 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <div>
                    <h4 className="text-[#94A3B8] mb-2 uppercase text-[10px] tracking-widest font-black">Email</h4>
                    <p className="text-xl font-bold text-white">a.sameera2006@gmail.com</p>
                </div>
                <div>
                    <h4 className="text-[#94A3B8] mb-2 uppercase text-[10px] tracking-widest font-black">Phone</h4>
                    <p className="text-xl font-bold text-white">9347675303</p>
                </div>
            </div>
            <div className="mt-12 opacity-50 text-[10px] tracking-[0.4em] font-bold uppercase text-[#06B6D4]">
                Available for opportunities • India
            </div>
        </div>
      </section>
      
      <footer className="py-10 text-center bg-[#050505] text-[#94A3B8] relative z-10 border-t border-[#06B6D4]/10">
        <p className="text-[10px] tracking-widest uppercase font-bold">Copyright © 2026 Sameera Appikonda • Built with Precision</p>
      </footer>
    </div>
  );
}

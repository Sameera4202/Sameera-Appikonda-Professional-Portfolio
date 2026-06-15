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
  ExternalLink,
  Download,
  Printer,
  Eye,
  FileText,
  Play,
  Sparkles,
  Cpu,
  Clock,
  Calendar,
  ShieldCheck,
  Activity
} from 'lucide-react';
import ProjectSimulatorModal from './components/ProjectSimulators';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [activeSimProject, setActiveSimProject] = useState<string | null>(null);
  const [resumeMode, setResumeMode] = useState<'preview' | 'pdf'>('preview');
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

  const printResume = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to print/save the resume.');
      return;
    }
    printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Sameera_Appikonda_Resume</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 40px;
      color: #1e293b;
      line-height: 1.6;
      background: #ffffff;
    }
    .header {
      text-align: center;
      border-bottom: 3px solid #06b6d4;
      padding-bottom: 20px;
      margin-bottom: 25px;
    }
    .name {
      font-size: 32px;
      font-weight: 900;
      color: #0f172a;
      margin: 0;
      letter-spacing: -0.5px;
    }
    .title {
      font-size: 14px;
      color: #06b6d4;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin: 5px 0 12px 0;
    }
    .contact {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      font-size: 11px;
      font-weight: 600;
      color: #64748b;
    }
    .contact span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .contact a {
      color: #06b6d4;
      text-decoration: none;
    }
    .section-title {
      font-size: 14px;
      font-weight: 800;
      color: #0f172a;
      border-bottom: 1.5px solid #e2e8f0;
      padding-bottom: 4px;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 20px;
    }
    .item {
      margin-bottom: 15px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 13px;
      color: #0f172a;
    }
    .item-date {
      font-size: 11px;
      color: #06b6d4;
      font-weight: 700;
    }
    .item-subtitle {
      font-size: 11px;
      color: #475569;
      font-weight: 600;
      text-transform: uppercase;
      margin: 2px 0 6px 0;
    }
    .item-desc {
      font-size: 11.5px;
      color: #475569;
      margin: 0;
      text-align: justify;
    }
    .skills-flex {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .skill-badge {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 11px;
      color: #0f172a;
      font-weight: 600;
    }
    @media print {
      body { margin: 20px; }
      @page { size: auto; margin: 20mm; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">SAMEERA APPIKONDA</div>
    <div class="title">B.Tech CSE (AI & ML) | Python & Web Developer</div>
    <div class="contact">
      <span>Email: <a href="mailto:a.sameera2006@gmail.com">a.sameera2006@gmail.com</a></span>
      <span>•</span>
      <span>Phone: +91 9347675303</span>
      <span>•</span>
      <span>GitHub: <a href="https://github.com/Sameera-Appikonda" target="_blank">github.com/Sameera-Appikonda</a></span>
      <span>•</span>
      <span>LinkedIn: <a href="https://linkedin.com/in/sameera-appikonda" target="_blank">linkedin.com/in/sameera-appikonda</a></span>
    </div>
  </div>

  <div class="grid">
    <div>
      <div class="section-title">Professional Depth</div>
      <div class="item">
        <div class="item-header">
          <span>IBM SKILLSBUILD & EDUNET FOUNDATION</span>
          <span class="item-date">2025</span>
        </div>
        <div class="item-subtitle">AI & Web Development Intern</div>
        <p class="item-desc">Worked on AI-assisted web applications using Python and Flask. Integrated IBM Watsonx.ai to create intelligent systems and gained experience in backend development and API-based workflows.</p>
      </div>

      <div class="item">
        <div class="item-header">
          <span>ACCENTURE AI ASCEND LEVEL 2</span>
          <span class="item-date">Completed</span>
        </div>
        <div class="item-subtitle">Data Analysis & Visualization</div>
        <p class="item-desc">Learned Data Processing, Exploratory Data Analysis, and Data Visualization techniques for extracting insights from structured datasets.</p>
      </div>

      <div class="item">
        <div class="item-header">
          <span>TCS iON CAREER EDGE</span>
          <span class="item-date">Completed</span>
        </div>
        <div class="item-subtitle">Young Professional</div>
        <p class="item-desc">Developed communication skills, workplace readiness, and professional fundamentals required for modern IT environments.</p>
      </div>
    </div>

    <div>
      <div class="section-title">Academic Path</div>
      <div class="item">
        <div class="item-header">
          <span>VIGNAN'S INSTITUTE OF ENGINEERING</span>
          <span class="item-date">2023 – 2027</span>
        </div>
        <div class="item-subtitle">B-Tech in CSE (AI & Machine Learning)</div>
        <p class="item-desc">Specializing in Python, AI, Machine Learning, Data Analysis, and Backend Development. Building intelligent applications while continuously improving problem-solving skills.</p>
      </div>

      <div class="item">
        <div class="item-header">
          <span>SRI SAI NADHA JUNIOR COLLEGE</span>
          <span class="item-date">2021 – 2023</span>
        </div>
        <div class="item-subtitle">Intermediate (MPC)</div>
        <p class="item-desc">Developed a strong foundation in Mathematics, Physics, and logical thinking, which later contributed to my programming abilities.</p>
      </div>
    </div>
  </div>

  <div class="grid">
    <div>
      <div class="section-title">Featured Projects</div>
      <div class="item">
        <div class="item-header">
          <span>AI Farming Assistant</span>
          <span class="item-date">Flask / Watsonx.ai</span>
        </div>
        <p class="item-desc">Intelligent farming suggestion system helping farmers identify the best crop cycles and agricultural practices based on climate data.</p>
      </div>
      <div class="item">
        <div class="item-header">
          <span>Vaccination Reminder</span>
          <span class="item-date">Flask / MySQL</span>
        </div>
        <p class="item-desc">Full-stack vaccination schedule tracking system with backend reminders and user profiles.</p>
      </div>
    </div>

    <div>
      <div class="section-title">Technical Arsenal</div>
      <div class="skills-flex" style="margin-top: 5px;">
        <span class="skill-badge">Python</span>
        <span class="skill-badge">Flask</span>
        <span class="skill-badge">JavaScript</span>
        <span class="skill-badge">HTML/CSS</span>
        <span class="skill-badge">SQL</span>
        <span class="skill-badge">Pandas</span>
        <span class="skill-badge">Machine Learning</span>
        <span class="skill-badge">Git</span>
      </div>
      
      <div class="section-title" style="margin-top:25px;">Location Info</div>
      <p class="item-desc" style="font-size:11.5px; font-weight:600; color:#475569;">Andhra Pradesh, India • Open to Global Remote Opportunities</p>
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 500);
    };
  </script>
</body>
</html>
    `);
    printWindow.document.close();
  };

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
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#0F172A] border border-[#06B6D4] flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              <img 
                src="https://files.catbox.moe/mjm7y2.jpg" 
                alt="SA" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>
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

      {/* Interactive Resume View/Download Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="w-full max-w-4xl h-[90vh] bg-[#0F172A] border border-[#06B6D4]/30 rounded-[32px] overflow-hidden flex flex-col shadow-2xl shadow-[#06B6D4]/10 relative z-10"
            >
              {/* Header */}
              <div className="px-8 py-5 border-b border-[#06B6D4]/20 flex flex-col sm:flex-row justify-between items-center bg-[#050505]/80 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4]">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white tracking-tight">SAMEERA APPIKONDA RESUME</h3>
                    <p className="text-xs text-[#94A3B8]">Curriculum Vitae • B.Tech CSE (AI & ML)</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {/* Mode Selector */}
                  <div className="flex bg-[#050505] p-1 border border-[#06B6D4]/20 rounded-full mr-2">
                    <button
                      onClick={() => setResumeMode('preview')}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all ${
                        resumeMode === 'preview' ? 'bg-[#06B6D4] text-white' : 'text-[#94A3B8] hover:text-white'
                      }`}
                    >
                      Web Resume
                    </button>
                    <button
                      onClick={() => setResumeMode('pdf')}
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all ${
                        resumeMode === 'pdf' ? 'bg-[#06B6D4] text-white' : 'text-[#94A3B8] hover:text-white'
                      }`}
                    >
                      Raw PDF File
                    </button>
                  </div>

                  <button
                    onClick={printResume}
                    className="p-2.5 bg-[#0F172A] border border-[#06B6D4]/30 rounded-xl text-[#06B6D4] hover:bg-[#06B6D4] hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 text-xs font-bold cursor-pointer hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    title="Print / Save as PDF"
                  >
                    <Printer size={16} />
                    <span className="hidden md:inline">Print / Save PDF</span>
                  </button>

                  <a
                    href="/resume.pdf"
                    download="Sameera_Appikonda_Resume.pdf"
                    className="p-2.5 bg-[#06B6D4] text-white rounded-xl hover:bg-[#22D3EE] transition-all duration-300 flex items-center justify-center gap-1.5 text-xs font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-[1.02]"
                    title="Download raw PDF"
                  >
                    <Download size={16} />
                    <span>Download</span>
                  </a>

                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-2.5 bg-[#0F172A] border border-[#94A3B8]/20 text-[#94A3B8] hover:text-white hover:border-[#94A3B8] rounded-xl transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Content area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#050505]/40">
                {resumeMode === 'preview' ? (
                  /* Interactive Digital/Web View */
                  <div className="max-w-3xl mx-auto bg-[#0F172A] border border-[#06B6D4]/20 rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden">
                    {/* Glowing Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />

                    {/* Resume Header */}
                    <div className="text-center pb-8 border-b border-[#06B6D4]/20 mb-8">
                      <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">SAMEERA APPIKONDA</h1>
                      <p className="text-[#06B6D4] font-bold text-sm tracking-widest mt-2 uppercase">B.Tech CSE (AI & ML) • Python & Web Developer</p>
                      
                      <div className="flex flex-wrap justify-center gap-y-2 gap-x-4 mt-6 text-xs text-[#94A3B8]">
                        <span className="flex items-center gap-1"><Mail size={12} className="text-[#06B6D4]" /> a.sameera2006@gmail.com</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">Phone: 9347675303</span>
                        <span>•</span>
                        <a href="https://github.com/Sameera-Appikonda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#22D3EE] hover:underline"><Github size={12} /> GitHub</a>
                        <span>•</span>
                        <a href="https://www.linkedin.com/in/sameera-appikonda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#22D3EE] hover:underline"><Linkedin size={12} /> LinkedIn</a>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                      {/* Left smaller column: Stats and Skills */}
                      <div className="md:col-span-2 space-y-8">
                        <div>
                          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-[#06B6D4] pl-2.5">Key Focus Areas</h4>
                          <ul className="space-y-2 text-xs text-[#CBD5E1]">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full" /> Python & Flask</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full" /> Machine Learning Model Integration</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full" /> Full Stack Web Development</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#06B6D4] rounded-full" /> Data analysis & visualization</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-[#06B6D4] pl-2.5">Technical Arsenal</h4>
                          <div className="flex flex-wrap gap-2">
                            {['Python', 'Flask', 'JavaScript', 'HTML/CSS', 'SQL', 'Pandas', 'Machine Learning', 'Git'].map(skill => (
                              <span key={skill} className="px-2.5 py-1 bg-[#050505] border border-[#06B6D4]/20 rounded-lg text-[10px] font-semibold text-[#06B6D4] tracking-tight">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-[#06B6D4] pl-2.5">Accolades & Achievements</h4>
                          <ul className="space-y-3 text-xs text-[#CBD5E1]">
                            <li>
                              <p className="font-bold text-[#06B6D4]">IBM SkillsBuild Certifications</p>
                              <p className="text-[10px] text-[#94A3B8]">Cloud, AI, and developer principles</p>
                            </li>
                            <li>
                              <p className="font-bold text-[#06B6D4]">Accenture AI Ascend Level 2</p>
                              <p className="text-[10px] text-[#94A3B8]">Completed advanced data modeling tracks</p>
                            </li>
                            <li>
                              <p className="font-bold text-[#06B6D4]">Young Professional Certified</p>
                              <p className="text-[10px] text-[#94A3B8]">TCS iON Career Edge soft skills & corporate logic</p>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Right wider column: experience & education */}
                      <div className="md:col-span-3 space-y-8">
                        <div>
                          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-[#06B6D4] pl-2.5">Experience & Internships</h4>
                          <div className="space-y-4">
                            <div className="border-l border-[#06B6D4]/30 pl-4 relative">
                              <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-[#06B6D4]" />
                              <div className="flex justify-between items-start flex-wrap gap-1">
                                <h5 className="font-bold text-xs text-white">IBM SKILLSBUILD & EDUNET (AICTE)</h5>
                                <span className="text-[10px] text-[#06B6D4] font-semibold uppercase tracking-wider">July - Sept 2025</span>
                              </div>
                              <p className="text-[10px] text-[#22D3EE] font-bold">AI & Web Development Intern</p>
                              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Built AI-assisted web applications using Python and Flask. Integrated Watsonx.ai APIs to serve smart model predictions to users.</p>
                            </div>

                            <div className="border-l border-[#06B6D4]/30 pl-4 relative">
                              <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-[#06B6D4]" />
                              <div className="flex justify-between items-start flex-wrap gap-1">
                                <h5 className="font-bold text-xs text-white">ACCENTURE</h5>
                                <span className="text-[10px] text-[#06B6D4] font-semibold uppercase tracking-wider">Completed</span>
                              </div>
                              <p className="text-[10px] text-[#22D3EE] font-bold">AI Ascend Level 2 - Data Visualization</p>
                              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Mastered advanced techniques of exploratory data analysis, data extraction, and visual modeling on enterprise datasets.</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-l-2 border-[#06B6D4] pl-2.5">Academic Journey</h4>
                          <div className="space-y-4">
                            <div className="border-l border-[#06B6D4]/30 pl-4 relative">
                              <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-[#06B6D4]" />
                              <div className="flex justify-between items-start flex-wrap gap-1">
                                <h5 className="font-bold text-xs text-white">VIGNAN'S INST. OF ENGINEERING</h5>
                                <span className="text-[10px] text-[#06B6D4] font-semibold uppercase tracking-wider">2023 – 2027</span>
                              </div>
                              <p className="text-[10px] text-[#22D3EE] font-bold">B.Tech in CSE (Artificial Intelligence & Machine Learning)</p>
                              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">In-depth specialization modules including Supervised and Deep learning models, Python architectures, web services, database administration, and algorithms.</p>
                            </div>

                            <div className="border-l border-[#06B6D4]/30 pl-4 relative">
                              <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-[#06B6D4]" />
                              <div className="flex justify-between items-start flex-wrap gap-1">
                                <h5 className="font-bold text-xs text-white">SRI SAI NADHA JUNIOR COLLEGE</h5>
                                <span className="text-[10px] text-[#06B6D4] font-semibold uppercase tracking-wider">2021 – 2023</span>
                              </div>
                              <p className="text-[10px] text-[#22D3EE] font-bold">Intermediate Education (MPC)</p>
                              <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">Scored top grades, strengthening absolute fundamentals of logical computation models and analytics.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Standard PDF Frame View */
                  <div className="w-full h-full bg-[#050505] rounded-2xl overflow-hidden relative border border-[#06B6D4]/20 min-h-[500px]">
                    <iframe
                      src="/resume.pdf"
                      className="w-full h-full min-h-[500px] border-none"
                      title="Sameera Appikonda Resume PDF"
                    />
                  </div>
                )}
              </div>
              
              {/* Footer / Tip */}
              <div className="px-8 py-4 border-t border-[#06B6D4]/15 bg-[#050505]/60 text-center flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#94A3B8] tracking-wider uppercase font-bold gap-2">
                <span>Tip: Click "Print / Save PDF" to open a system preview and print a clean 1-page paper version.</span>
                <span>Fully Optimized for Desktop, Tablet, and Mobile</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Project Simulators */}
      <AnimatePresence>
        {activeSimProject && (
          <ProjectSimulatorModal 
            projectTitle={activeSimProject} 
            onClose={() => setActiveSimProject(null)} 
          />
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
              <button 
                onClick={() => setShowResumeModal(true)} 
                className="px-8 py-4 bg-[#0F172A] border border-[#06B6D4]/30 rounded-full font-bold hover:border-[#06B6D4] text-white transition-all hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <Eye size={18} className="text-[#06B6D4]" /> VIEW RESUME
              </button>
            </div>
          </motion.div>

          {/* Right Column: Profile Image styled in a gorgeous premium way */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center md:justify-end md:translate-x-8 lg:translate-x-16 items-center relative"
          >
            {/* Ambient Background Glow behind the image wrapper */}
            <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-gradient-to-tr from-[#06B6D4]/10 via-[#22D3EE]/5 to-transparent rounded-full blur-3xl opacity-85 -z-10 animate-pulse" />
            
            {/* Outer dotted orbiting rings to elevate design */}
            <div className="absolute w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] border border-dashed border-[#06B6D4]/20 rounded-full animate-[spin_120s_linear_infinite]" />
            <div className="absolute w-[270px] h-[270px] sm:w-[400px] sm:h-[400px] border border-dotted border-[#06B6D4]/15 rounded-full animate-[spin_160s_linear_infinite_reverse]" />
            
            {/* Pulse Indicator */}
            <div className="absolute top-[18%] right-[18%] flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#06B6D4]"></span>
            </div>

            {/* Glowing Gradient Ring Container */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-[#06B6D4] via-[#22D3EE]/30 to-[#0F172A] shadow-2xl shadow-[#06B6D4]/20 hover:shadow-[0_0_50px_rgba(6,182,212,0.45)] transition-all duration-700 hover:scale-[1.02] group">
              <div className="relative w-[220px] h-[220px] sm:w-[310px] sm:h-[310px] md:w-[330px] md:h-[330px] rounded-full overflow-hidden bg-[#0F172A] p-1">
                {/* The Image itself */}
                <img 
                  src="https://files.catbox.moe/mjm7y2.jpg" 
                  alt="Sameera Appikonda" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 object-[center_15%]"
                />
                
                {/* Custom Overlay to blend with the tech slate look */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent pointer-events-none rounded-full" />
              </div>
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
              { title: 'Vaccination Reminder', desc: 'Backend-driven vaccination tracking & proactive schedule warnings.', tech: ['Flask', 'MySQL'], link: 'https://github.com/Sameera4202/vaccination-project' },
              { title: 'AI Farming Assistant', desc: 'AI-guided agricultural suggestion engine based on climate metrics.', tech: ['Flask', 'Watsonx.ai'], link: 'https://github.com/Sameera4202/IBM-Project.6' },
              { title: 'Smart Study Planner', desc: 'Dynamic hour-by-hour exam & test countdown task scheduler.', tech: ['HTML', 'JS'], link: 'https://github.com/Sameera4202/smart-study-planner' }
            ].map((p, i) => (
              <motion.div 
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-[24px] bg-[#0F172A] border border-[#06B6D4]/15 shadow-sm hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-[#06B6D4] transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#06B6D4] transition-colors">{p.title}</h3>
                  <p className="text-[#CBD5E1] mb-6 text-sm leading-relaxed">{p.desc}</p>
                </div>
                
                <div>
                  <div className="flex flex-col gap-3 mb-6">
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#06B6D4] text-white rounded-xl font-bold hover:bg-[#22D3EE] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:scale-[1.02]"
                    >
                      <Play size={14} fill="currentColor" />
                      <span>OPEN LIVE PROJECT</span>
                    </a>

                    <motion.a 
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-[#050505]/60 hover:bg-[#050505] border border-[#06B6D4]/20 rounded-xl flex items-center justify-center gap-2 text-[#22D3EE] font-bold text-xs tracking-tight transition-all cursor-pointer"
                      whileHover={{ scale: 1.01 }}
                    >
                      <Github size={14} />
                      <span>VIEW CODE REPOSITORY</span>
                    </motion.a>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="px-3 py-1 bg-[#050505] border border-[#06B6D4]/20 rounded-full text-xs font-semibold text-[#06B6D4]">{t}</span>)}
                  </div>
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

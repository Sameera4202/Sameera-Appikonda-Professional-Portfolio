import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Play, Sparkles, Cpu, Clock, Calendar, ShieldCheck, 
  Activity, CheckCircle2, Mail, Phone, RotateCcw, 
  Compass, BookOpen, AlertCircle, Check, ArrowRight,
  TrendingUp, Layers, HelpCircle, Save
} from 'lucide-react';

interface ProjectSimulatorsProps {
  projectTitle: string;
  onClose: () => void;
}

export default function ProjectSimulatorModal({ projectTitle, onClose }: ProjectSimulatorsProps) {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-5xl h-[90vh] bg-[#0F172A] border border-[#06B6D4]/30 rounded-[32px] overflow-hidden flex flex-col shadow-2xl shadow-[#06B6D4]/10 relative"
      >
        {/* Header */}
        <div className="px-8 py-5 border-b border-[#06B6D4]/20 flex justify-between items-center bg-[#050505]/95 z-20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4]">
              {projectTitle === 'Vaccination Reminder' && <ShieldCheck size={22} />}
              {projectTitle === 'AI Farming Assistant' && <Cpu size={22} />}
              {projectTitle === 'Smart Study Planner' && <Calendar size={22} />}
            </div>
            <div>
              <h3 className="text-lg font-black text-white tracking-tight uppercase flex items-center gap-2">
                <span>{projectTitle}</span>
                <span className="bg-[#06B6D4]/10 text-[#22D3EE] text-[9px] font-extrabold px-2 py-0.5 rounded-full border border-[#06B6D4]/20 tracking-wider">
                  LIVE INTERACTIVE PREVIEW
                </span>
              </h3>
              <p className="text-xs text-[#94A3B8]">
                {projectTitle === 'Vaccination Reminder' && 'Full-stack alert triggers, vaccination profiles & timeline automation'}
                {projectTitle === 'AI Farming Assistant' && 'Watsonx.ai LLM weather inference, soil analytics & advisory model'}
                {projectTitle === 'Smart Study Planner' && 'Dynamic task compilation, focused study schedules & Pomodoro timer'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 bg-[#1E293B] hover:bg-[#334155] text-[#94A3B8] hover:text-white rounded-xl transition-all border border-[#06B6D4]/10 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Panel */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#050505]/40 custom-scrollbar">
          {projectTitle === 'Vaccination Reminder' && <VaccinationReminderSimulator />}
          {projectTitle === 'AI Farming Assistant' && <FarmingAssistantSimulator />}
          {projectTitle === 'Smart Study Planner' && <StudyPlannerSimulator />}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-[#06B6D4]/15 bg-[#050505]/95 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#94A3B8] font-bold tracking-widest gap-2">
          <span className="flex items-center gap-1.5"><Activity size={12} className="text-[#06B6D4] animate-pulse" /> Sandbox Container: ONLINE - Isolated Mock Database Loaded</span>
          <span>B.Tech Thesis Prototype by Sameera Appikonda</span>
        </div>
      </motion.div>
    </div>
  );
}

// ==========================================
// 1. VACCINATION REMINDER SIMULATOR
// ==========================================
function VaccinationReminderSimulator() {
  const [profile, setProfile] = useState<'baby-aarav' | 'baby-sofia'>('baby-aarav');
  const [childName, setChildName] = useState('Aarav Appikonda');
  const [childAge, setChildAge] = useState('3 Months');
  const [childDob, setChildDob] = useState('2026-03-15');
  const [alertTarget, setAlertTarget] = useState('a.sameera2006@gmail.com');
  const [alertType, setAlertType] = useState<'Email' | 'SMS'>('Email');
  const [testNotificationProgress, setTestNotificationProgress] = useState<'idle' | 'configuring' | 'sending' | 'completed'>('idle');
  const [alertLog, setAlertLog] = useState<string[]>([]);
  
  // Schedule state
  const initialVaccines = [
    { id: 1, name: 'BCG (Tuberculosis)', age: 'Newborn', status: 'Completed', mandatory: true },
    { id: 2, name: 'Hepatitis B (HepB 1)', age: 'Newborn', status: 'Completed', mandatory: true },
    { id: 3, name: 'OPV 0 (Oral Polio)', age: 'Newborn', status: 'Completed', mandatory: true },
    { id: 4, name: 'OPV 1 & Pentavalent 1', age: '1.5 Months', status: 'Completed', mandatory: true },
    { id: 5, name: 'Rotavirus Vaccine (RV 1)', age: '1.5 Months', status: 'Completed', mandatory: false },
    { id: 6, name: 'OPV 2 & Pentavalent 2', age: '2.5 Months', status: 'Due', mandatory: true },
    { id: 7, name: 'Rotavirus Vaccine (RV 2)', age: '2.5 Months', status: 'Due', mandatory: false },
    { id: 8, name: 'OPV 3 & Pentavalent 3', age: '3.5 Months', status: 'Due', mandatory: true },
    { id: 9, name: 'Measles/Rubella (MR 1)', age: '9 Months', status: 'Scheduled', mandatory: true }
  ];

  const [vaccines, setVaccines] = useState(initialVaccines);

  // Quick Switch Profiles
  const loadProfile = (prof: 'baby-aarav' | 'baby-sofia') => {
    setProfile(prof);
    if (prof === 'baby-aarav') {
      setChildName('Aarav Appikonda');
      setChildAge('3 Months');
      setChildDob('2026-03-15');
      setVaccines(initialVaccines);
    } else {
      setChildName('Sofia Khan');
      setChildAge('Newborn');
      setChildDob('2026-06-01');
      setVaccines(initialVaccines.map(v => 
        v.age === 'Newborn' ? { ...v, status: 'Completed' } : { ...v, status: 'Due' }
      ));
    }
  };

  const toggleStatus = (id: number) => {
    setVaccines(vaccines.map(v => {
      if (v.id === id) {
        const nextStatus = v.status === 'Completed' ? 'Due' : (v.status === 'Due' ? 'Completed' : 'Completed');
        return { ...v, status: nextStatus };
      }
      return v;
    }));
  };

  const triggerTestAlert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!alertTarget) return;

    setTestNotificationProgress('configuring');
    setTimeout(() => {
      setTestNotificationProgress('sending');
      setTimeout(() => {
        setTestNotificationProgress('completed');
        const timestamp = new Date().toLocaleTimeString();
        setAlertLog(prev => [
          `[${timestamp}] AI-Scheduler queued standard Python flask-mailer SMTP task for ${alertTarget}`,
          `[${timestamp}] Success status 200: BCG & Polio booster alert dispatched to gateway`,
          ...prev
        ]);
        setTimeout(() => setTestNotificationProgress('idle'), 4000);
      }, 1500);
    }, 1000);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 text-white">
      {/* Sidebar: controls and configurations */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 bg-[#0F172A] border border-[#06B6D4]/30 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#06B6D4]/5 rounded-full blur-3xl" />
          <h4 className="font-extrabold text-[13px] uppercase tracking-wider text-[#06B6D4] mb-4 flex items-center gap-1.5">
            <Layers size={14} /> Profile Administration
          </h4>

          {/* Preset switch */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <button
              onClick={() => loadProfile('baby-aarav')}
              className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                profile === 'baby-aarav' 
                  ? 'bg-[#06B6D4]/15 border-[#06B6D4] text-[#22D3EE]' 
                  : 'bg-[#1E293B]/40 border-[#334155] text-slate-400 hover:text-white'
              }`}
            >
              👶 Aarav (3 Months)
            </button>
            <button
              onClick={() => loadProfile('baby-sofia')}
              className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                profile === 'baby-sofia' 
                  ? 'bg-[#06B6D4]/15 border-[#06B6D4] text-[#22D3EE]' 
                  : 'bg-[#1E293B]/40 border-[#334155] text-slate-400 hover:text-white'
              }`}
            >
              👶 Sofia (Newborn)
            </button>
          </div>

          {/* Child Meta Field */}
          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-[#94A3B8] font-bold uppercase mb-1">Child Name</label>
              <input
                type="text"
                value={childName}
                onChange={e => setChildName(e.target.value)}
                className="w-full bg-[#050505] border border-[#334155] rounded-xl px-4 py-2.5 outline-none font-medium focus:border-[#06B6D4] transition-colors"
                placeholder="Enter child name..."
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#94A3B8] font-bold uppercase mb-1">Age Group</label>
                <input
                  type="text"
                  value={childAge}
                  onChange={e => setChildAge(e.target.value)}
                  className="w-full bg-[#050505] border border-[#334155] rounded-xl px-4 py-2.5 outline-none font-medium focus:border-[#06B6D4] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[#94A3B8] font-bold uppercase mb-1">Birthdate</label>
                <input
                  type="date"
                  value={childDob}
                  onChange={e => setChildDob(e.target.value)}
                  className="w-full bg-[#050505] border border-[#334155] rounded-xl px-4 py-2.5 outline-none font-medium focus:border-[#06B6D4] transition-colors text-xs text-white"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Proactive reminders */}
        <div className="p-6 bg-[#0F172A] border border-[#06B6D4]/30 rounded-2xl">
          <h4 className="font-extrabold text-[13px] uppercase tracking-wider text-[#06B6D4] mb-4 flex items-center gap-1.5">
            <Mail size={14} /> SMS & Email Alert Simulator
          </h4>

          <form onSubmit={triggerTestAlert} className="space-y-4">
            <div className="flex bg-[#050505] p-1 border border-[#334155] rounded-xl">
              <button
                type="button"
                onClick={() => {
                  setAlertType('Email');
                  setAlertTarget('a.sameera2006@gmail.com');
                }}
                className={`flex-1 py-1.5 text-center text-xs font-bold rounded-lg transition-all ${
                  alertType === 'Email' ? 'bg-[#06B6D4] text-white' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                Email (SMTP)
              </button>
              <button
                type="button"
                onClick={() => {
                  setAlertType('SMS');
                  setAlertTarget('+91 9347675303');
                }}
                className={`flex-1 py-1.5 text-center text-xs font-bold rounded-lg transition-all ${
                  alertType === 'SMS' ? 'bg-[#06B6D4] text-white' : 'text-[#94A3B8] hover:text-white'
                }`}
              >
                SMS (Twilio)
              </button>
            </div>

            <div>
              <label className="block text-[#94A3B8] font-bold text-[10px] uppercase tracking-wide mb-1">
                {alertType === 'Email' ? 'Recipient SMTP Email' : 'Recipient Phone Number'}
              </label>
              <input
                type={`${alertType === 'Email' ? 'email' : 'text'}`}
                value={alertTarget}
                required
                onChange={e => setAlertTarget(e.target.value)}
                className="w-full bg-[#050505] border border-[#334155] rounded-xl px-4 py-2.5 outline-none text-xs font-medium focus:border-[#06B6D4] transition-colors"
                placeholder={alertType === 'Email' ? 'name@domain.com' : '+91 9437000000'}
              />
            </div>

            <button
              type="submit"
              disabled={testNotificationProgress !== 'idle'}
              className="w-full py-3 bg-[#06B6D4] text-white font-bold text-xs rounded-xl hover:bg-[#22D3EE] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)] disabled:opacity-50"
            >
              {testNotificationProgress === 'idle' && (
                <>
                  <Sparkles size={14} />
                  <span>TRIGGER REMINDER INFERENCE</span>
                </>
              )}
              {testNotificationProgress === 'configuring' && 'Configuring Flask Mailer...'}
              {testNotificationProgress === 'sending' && 'Opening Socket & Dispatching...'}
              {testNotificationProgress === 'completed' && '🚀 Alert Dispatched! Check logs.'}
            </button>
          </form>

          {/* Live Notification Popup inside Sandbox */}
          <AnimatePresence>
            {testNotificationProgress === 'completed' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-3.5 bg-[#050505] border-l-4 border-emerald-500 rounded-r-xl border border-y-slate-800 border-r-slate-800 flex gap-2.5 items-start shadow-xl"
              >
                <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#E2E8F0]">Proactive Alarm System: Live Event Triggered</p>
                  <p className="text-[#94A3B8] text-[10px] mt-0.5">To: <span className="text-[#22D3EE]">{alertTarget}</span> • System generated email warning: "Vaccination Reminder: Baby {childName.split(' ')[0]} is due for OPV-2 Vaccine in 3 days."</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Main Column: Timeline tracking */}
      <div className="lg:col-span-7 flex flex-col justify-between bg-[#0F172A] border border-[#06B6D4]/30 rounded-2xl overflow-hidden min-h-[500px]">
        {/* Tracker Panel Header */}
        <div className="border-b border-[#06B6D4]/20 px-6 py-4 bg-[#050505]/70 flex justify-between items-center">
          <div>
            <h5 className="font-extrabold text-[13px] tracking-tight text-white uppercase flex items-center gap-1.5">
              <Activity size={12} className="text-[#06B6D4]" /> SMART TRACKING DASHBOARD
            </h5>
            <p className="text-[10px] text-slate-400 mt-0.5">Interactive scheduler matching World Health Organization (WHO) protocols</p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 bg-[#050505] border border-[#334155] rounded-full px-2.5 py-1 font-bold text-[#22D3EE]">
              {vaccines.filter(v => v.status === 'Completed').length} / {vaccines.length} Completed
            </span>
          </div>
        </div>

        {/* List content */}
        <div className="flex-1 p-6 space-y-3.5 overflow-y-auto max-h-[360px] custom-scrollbar">
          {vaccines.map(vac => (
            <div 
              key={vac.id}
              className={`p-4 rounded-xl border transition-all duration-300 flex justify-between items-center gap-4 ${
                vac.status === 'Completed' 
                  ? 'bg-emerald-950/15 border-emerald-900/40 opacity-75 hover:bg-emerald-950/20' 
                  : vac.status === 'Due'
                  ? 'bg-amber-950/15 border-amber-500/40 ring-1 ring-amber-500/20 hover:bg-amber-950/25'
                  : 'bg-[#050505]/50 border-slate-800 hover:bg-[#050505]/80'
              }`}
            >
              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  onClick={() => toggleStatus(vac.id)}
                  className={`w-6 h-6 rounded-lg font-bold text-xs border flex items-center justify-center transition-all cursor-pointer ${
                    vac.status === 'Completed'
                      ? 'bg-emerald-500 border-emerald-400 text-black'
                      : vac.status === 'Due'
                      ? 'bg-transparent border-amber-500/70 hover:bg-amber-500/10 text-transparent hover:text-amber-500'
                      : 'bg-transparent border-slate-700 hover:border-[#06B6D4] text-transparent'
                  }`}
                >
                  <Check size={14} strokeWidth={3.5} />
                </button>

                <div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="font-bold text-xs text-[#E2E8F0] tracking-tight">{vac.name}</p>
                    {vac.mandatory && (
                      <span className="px-1.5 py-0.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded text-[9px] font-extrabold tracking-wider uppercase">
                        Mandatory
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1 py-0.5 text-[10px] text-slate-400 font-semibold uppercase">
                    <span className="text-[#06B6D4]">{vac.age}</span>
                    <span>•</span>
                    <span>Type: {vac.type}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <span className={`px-2.5 py-1 text-[9px] font-extrabold tracking-wider uppercase rounded-full ${
                  vac.status === 'Completed'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : vac.status === 'Due'
                    ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30 animate-pulse'
                    : 'bg-slate-800 text-slate-500 border border-slate-700'
                }`}>
                  {vac.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Database log terminal console */}
        <div className="p-4 bg-[#050505]/90 border-t border-[#06B6D4]/20 font-mono text-[9px]">
          <div className="flex justify-between items-center text-[#94A3B8] mb-1.5">
            <span className="font-bold uppercase tracking-wider flex items-center gap-1 text-[#22D3EE]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Flask / MySQL Live Audit Log
            </span>
            <button 
              onClick={() => setAlertLog([])}
              className="text-[#06B6D4] hover:underline hover:text-[#22D3EE] uppercase text-[8px] cursor-pointer"
            >
              CLEAR SCREEN
            </button>
          </div>
          <div className="h-20 overflow-y-auto space-y-1 text-slate-500 custom-scrollbar">
            {alertLog.length === 0 ? (
              <p className="italic text-[10px] text-slate-600 mt-2">No alerts triggered yet. Fill standard form parameters and hit 'Trigger Reminder' above...</p>
            ) : (
              alertLog.map((log, i) => (
                <p key={i} className={log.includes('Success') ? 'text-emerald-400' : 'text-slate-400'}>{log}</p>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. AI FARMING ASSISTANT SIMULATOR
// ==========================================
function FarmingAssistantSimulator() {
  const [season, setSeason] = useState<'monsoon' | 'winter' | 'summer'>('monsoon');
  const [soilType, setSoilType] = useState<'clay' | 'loamy' | 'black'>('clay');
  const [rainfall, setRainfall] = useState(1200);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [modelLogs, setModelLogs] = useState<string[]>([]);
  const [report, setReport] = useState<any | null>(null);

  const startInference = () => {
    setIsAnalyzing(true);
    setModelLogs([]);
    setReport(null);

    const logMessages = [
      'Establishing API pipeline connection token with IBM Watsonx.ai cloud endpoints...',
      'Mapping climate vector inputs. Season: ' + season.toUpperCase() + ' | Soil: ' + soilType.toUpperCase() + ' | Rainfall: ' + rainfall + 'mm...',
      'Packing system prompts. Standard model: ibm/granite-13b-instruct...',
      'Analyzing crop yield weights & temperature profiles over 10-year datasets...',
      'Watsonx.ai LLM inference: COMPLETED. Generating tailored agriculture advisories...'
    ];

    let logIdx = 0;
    const interval = setInterval(() => {
      if (logIdx < logMessages.length) {
        setModelLogs(prev => [...prev, `[System AI] ${logMessages[logIdx]}`]);
        logIdx++;
      } else {
        clearInterval(interval);
        generateMockAdvisory();
        setIsAnalyzing(false);
      }
    }, 700);
  };

  const generateMockAdvisory = () => {
    switch (season) {
      case 'monsoon':
        if (soilType === 'clay') {
          setReport({
            crop: 'Rice (Paddy) & Sugarcane',
            yieldIndex: '94% Optimal Yield',
            ph: '6.0 - 6.8',
            water: 'Maintained flooding (5-10cm) during vegetative stages.',
            fert: 'Urea and Ammonium Phosphate. Divide in 3 applications.',
            adv: 'Clay soil retains maximum moisture. Ideal for Rice. Ensure clean drainage outlets to manage sudden flood runoffs.'
          });
        } else {
          setReport({
            crop: 'Maize & Sorghum',
            yieldIndex: '88% Optimal Yield',
            ph: '6.5 - 7.2',
            water: 'Medium watering, clear soil drainage required to prevent rot.',
            fert: 'Organic manure + NPK (120:60:40).',
            adv: 'Loamy soil during monsoon provides high nutrient transit. Ideal for coarse grains. Prevent logging.'
          });
        }
        break;
      case 'winter':
        setReport({
          crop: 'Wheat, Mustard & Barley',
          yieldIndex: '91% Optimal Yield',
          ph: '6.2 - 7.4',
          water: 'Irrigate every 10-14 days. Avoid dampness during mist seasons.',
          fert: 'Single Super Phosphate (SSP) + Potash.',
          adv: 'Perfect winter cooling. Mustard performs beautifully in dry loam. Focus on systematic irrigation cycles to combat high diurnal temp changes.'
        });
        break;
      case 'summer':
        setReport({
          crop: 'Greengram (Mung Bean) & Pearl Millet',
          yieldIndex: '82% Optimal Yield',
          ph: '6.5 - 7.8',
          water: 'Drip irrigation recommended. Water during early mornings to reduce evaporation.',
          fert: 'Compost + Bio-fertilizers like Rhizobium cultures.',
          adv: 'Extreme dry conditions. Deep loamy tillage to allow aeration. Choose drought-resistant cowpeas or legumes that replenish soil nitrogen.'
        });
        break;
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 text-white">
      {/* Parameters Selection Panel */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 bg-[#0F172A] border border-[#06B6D4]/30 rounded-2xl relative">
          <h4 className="font-extrabold text-[13px] uppercase tracking-wider text-[#06B6D4] mb-4 flex items-center gap-1.5">
            <Compass size={14} /> Climate Vector Inputs
          </h4>

          <div className="space-y-5 text-xs text-slate-300">
            {/* Season Selected */}
            <div>
              <label className="block text-[#94A3B8] font-bold uppercase mb-2">Climate & Crop Season</label>
              <div className="grid grid-cols-3 gap-2">
                {(['monsoon', 'winter', 'summer'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setSeason(s)}
                    className={`py-2 px-1 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      season === s 
                        ? 'bg-[#06B6D4]/20 border-[#06B6D4] text-[#22D3EE]' 
                        : 'bg-[#1E293B]/40 border-[#334155] hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Soil type */}
            <div>
              <label className="block text-[#94A3B8] font-bold uppercase mb-2">Geological Soil Matrix</label>
              <div className="grid grid-cols-3 gap-2">
                {(['clay', 'loamy', 'black'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setSoilType(s)}
                    className={`py-2 px-1 rounded-xl border text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      soilType === s 
                        ? 'bg-[#06B6D4]/20 border-[#06B6D4] text-[#22D3EE]' 
                        : 'bg-[#1E293B]/40 border-[#334155] hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Rainfall slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-[#94A3B8] font-bold uppercase">Estimated Rainfall</label>
                <span className="text-[#22D3EE] font-extrabold font-mono">{rainfall} mm</span>
              </div>
              <input
                type="range"
                min="400"
                max="2500"
                step="50"
                value={rainfall}
                onChange={e => setRainfall(Number(e.target.value))}
                className="w-full h-1.5 bg-[#050505] border border-slate-700 rounded-lg appearance-none cursor-pointer accent-[#06B6D4]"
              />
              <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase mt-1">
                <span>Arid / Low</span>
                <span>Hyper Moist</span>
              </div>
            </div>

            {/* Action run */}
            <button
              onClick={startInference}
              disabled={isAnalyzing}
              className="w-full py-3.5 bg-[#06B6D4] text-white font-black text-xs rounded-xl hover:bg-[#22D3EE] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-50"
            >
              <Cpu size={14} className={isAnalyzing ? 'animate-spin' : ''} />
              <span>RUN WATSONX.AI LLM ANALYSIS</span>
            </button>
          </div>
        </div>

        {/* Model Pipeline Logs */}
        <div className="p-5 bg-[#050505] border border-[#06B6D4]/20 rounded-2xl font-mono text-[9px] h-48 flex flex-col justify-between">
          <div className="text-[#06B6D4] font-bold uppercase mb-2 tracking-wider flex items-center gap-1.5 border-b border-[#06B6D4]/10 pb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-ping" /> Connection Log Terminal
          </div>
          <div className="flex-1 overflow-y-auto space-y-1.5 text-slate-400 custom-scrollbar">
            {modelLogs.length === 0 ? (
              <p className="text-slate-600 italic">Adjust your inputs on the parameters panel and click the analysis button. Model pipelines will stream here...</p>
            ) : (
              modelLogs.map((log, idx) => (
                <p key={idx} className="transition-all animate-fadeIn leading-relaxed">{log}</p>
              ))
            )}
            {isAnalyzing && (
              <p className="text-[#22D3EE] font-bold animate-pulse">■ Running inference iterations...</p>
            )}
          </div>
        </div>
      </div>

      {/* Structured Result Report */}
      <div className="lg:col-span-7 flex flex-col bg-[#0F172A] border border-[#06B6D4]/30 rounded-2xl overflow-hidden min-h-[500px]">
        {/* Report Header */}
        <div className="px-6 py-4 border-b border-[#06B6D4]/20 bg-[#050505]/70 flex justify-between items-center">
          <div>
            <h5 className="font-extrabold text-[13px] text-white uppercase flex items-center gap-1.5">
              <Sparkles size={13} className="text-[#06B6D4]" /> Watsonx.ai Advisory Report
            </h5>
            <p className="text-[10px] text-slate-400 mt-0.5">Real-time agricultural intelligence mapping system</p>
          </div>
        </div>

        {/* Report Content */}
        <div className="flex-1 p-6 flex flex-col justify-center">
          {report ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {/* Highlight Crop */}
              <div className="p-4 bg-[#050505]/60 border border-[#06B6D4]/30 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-extrabold tracking-wider text-[#94A3B8] uppercase">Recommended Crops</span>
                  <p className="text-2xl font-black text-[#22D3EE] tracking-tight">{report.crop}</p>
                </div>
                <div className="px-3 py-1.5 bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20 rounded-xl font-bold text-xs text-right">
                  {report.yieldIndex}
                </div>
              </div>

              {/* Grid data specs */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#050505]/40 border border-slate-800 rounded-xl">
                  <span className="text-[#94A3B8] font-bold block mb-1">TARGET SOIL pH</span>
                  <p className="font-extrabold text-white text-sm">{report.ph}</p>
                </div>
                <div className="p-4 bg-[#050505]/40 border border-slate-800 rounded-xl">
                  <span className="text-[#94A3B8] font-bold block mb-1">IRRIGATION MATRIX</span>
                  <p className="font-extrabold text-[#CBD5E1] text-[11px] leading-snug">{report.water}</p>
                </div>
              </div>

              <div className="p-4 bg-[#050505]/30 border border-slate-800 rounded-xl text-xs">
                <span className="text-[#06B6D4] font-black uppercase tracking-wider block mb-1">FERTILIZER COMPOSITION recommendation</span>
                <p className="text-[#CBD5E1] font-semibold leading-relaxed">{report.fert}</p>
              </div>

              {/* Expert Summary Advisory */}
              <div className="p-5 bg-[#06B6D4]/5 border-l-4 border-[#06B6D4] rounded-r-xl text-xs leading-relaxed">
                <span className="font-bold text-white uppercase tracking-wider flex items-center gap-1 mb-1 text-[11px]">
                  <ShieldCheck size={12} className="text-[#06B6D4]" /> Watsonx granite advisory summary
                </span>
                <p className="text-[#CBD5E1] text-justify">{report.adv}</p>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-12 px-6">
              <div className="w-16 h-16 bg-[#050505]/80 border border-dashed border-[#06B6D4]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle size={24} className="text-slate-600 animate-bounce" />
              </div>
              <h6 className="font-bold text-sm text-[#E2E8F0]">Inference Engine Pending</h6>
              <p className="text-xs text-[#94A3B8] max-w-sm mx-auto mt-2 leading-relaxed">
                Configure your climate factors on the left, then trigger the Watsonx.ai analytics sequence to generate the specialized crop forecast.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. SMART STUDY PLANNER SIMULATOR
// ==========================================
function StudyPlannerSimulator() {
  const [subject, setSubject] = useState('Data Structures & Algorithms');
  const [hours, setHours] = useState(4);
  const [focusStyle, setFocusStyle] = useState<'pomodoro' | 'deep' | 'sprint'>('pomodoro');
  
  // Timer States
  const [timerActive, setTimerActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isBreak, setIsBreak] = useState(false);
  
  // Schedule state
  const [timelineBlocks, setTimelineBlocks] = useState<any[] | null>(null);

  // Countdown timer hook effect
  useEffect(() => {
    let interval: any = null;
    if (timerActive) {
      interval = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            // switch from work to break
            setIsBreak(!isBreak);
            return isBreak ? 25 * 60 : 5 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerActive, isBreak]);

  const formatTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const generatePlanner = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject) return;

    // Simulate high quality compilation schedule
    const blocks = [];
    let currentTime = new Date();
    currentTime.setHours(9, 0, 0); // start studying at 9:00 AM

    const stylesMeta = {
      pomodoro: { chunk: 45, break: 10, label: 'Standard Focus' },
      deep: { chunk: 90, break: 15, label: 'Deep Concept Phase' },
      sprint: { chunk: 30, break: 5, label: 'Rapid Iterative Review' }
    };

    const currentStyle = stylesMeta[focusStyle];
    const totalMinutes = hours * 60;
    let allocated = 0;
    let blockCounter = 1;

    while (allocated < totalMinutes) {
      const startStr = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      currentTime.setMinutes(currentTime.getMinutes() + currentStyle.chunk);
      const endStr = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      blocks.push({
        type: 'work',
        id: blockCounter++,
        start: startStr,
        end: endStr,
        topic: `Study Module ${Math.ceil(blockCounter / 2)}: Core ${subject}`,
        action: blockCounter === 2 ? 'Deconstruct theories, draw block diagram schemas.' : (blockCounter === 4 ? 'Review mock problem sets and trace algorithm workflows.' : 'Structure diagnostic test reviews and mock syntax executions.')
      });

      // Add break block
      allocated += currentStyle.chunk;
      const breakStart = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      currentTime.setMinutes(currentTime.getMinutes() + currentStyle.break);
      const breakEnd = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      blocks.push({
        type: 'break',
        id: blockCounter++,
        start: breakStart,
        end: breakEnd,
        topic: 'Intermission Recovery Block',
        action: focusStyle === 'pomodoro' ? 'Walk, stretch, drink water. Allow ocular muscles to de-focus.' : 'Deep physical hydration & mindfulness check-in.'
      });
      allocated += currentStyle.break;
    }

    setTimelineBlocks(blocks);
  };

  const handleResetTimer = () => {
    setTimerActive(false);
    setSecondsLeft(25 * 60);
    setIsBreak(false);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 text-white">
      {/* Subject Configuration */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-6 bg-[#0F172A] border border-[#06B6D4]/30 rounded-2xl relative">
          <h4 className="font-extrabold text-[13px] uppercase tracking-wider text-[#06B6D4] mb-4 flex items-center gap-1.5">
            <BookOpen size={14} /> Schedule Compiler Inputs
          </h4>

          <form onSubmit={generatePlanner} className="space-y-4 text-xs">
            <div>
              <label className="block text-[#94A3B8] font-bold uppercase mb-1">Subject / Syllabus Scope</label>
              <input
                type="text"
                value={subject}
                required
                onChange={e => setSubject(e.target.value)}
                className="w-full bg-[#050505] border border-[#334155] rounded-xl px-4 py-2.5 outline-none font-medium focus:border-[#06B6D4] transition-colors"
                placeholder="e.g. Machine Learning, Flask APIs..."
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[#94A3B8] font-bold uppercase mb-1">Syllabus Hours</label>
                <select
                  value={hours}
                  onChange={e => setHours(Number(e.target.value))}
                  className="w-full bg-[#050505] border border-[#334155] rounded-xl px-4 py-2.5 outline-none font-bold focus:border-[#06B6D4] transition-colors text-white"
                >
                  <option value={2}>2 Hours</option>
                  <option value={3}>3 Hours</option>
                  <option value={4}>4 Hours</option>
                  <option value={6}>6 Hours</option>
                  <option value={8}>8 Hours</option>
                </select>
              </div>

              <div>
                <label className="block text-[#94A3B8] font-bold uppercase mb-1">Focus Mode Style</label>
                <select
                  value={focusStyle}
                  onChange={e => setFocusStyle(e.target.value as any)}
                  className="w-full bg-[#050505] border border-[#334155] rounded-xl px-4 py-2.5 outline-none font-bold focus:border-[#06B6D4] transition-colors text-white"
                >
                  <option value="pomodoro">Pomodoro (25m/5m)</option>
                  <option value="deep">Deep Work (50m/10m)</option>
                  <option value="sprint">Sprints (15m/3m)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#06B6D4] text-white font-black text-xs rounded-xl hover:bg-[#22D3EE] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.01]"
            >
              <Cpu size={14} />
              <span>COMPILE SCHEDULING TIMELINE</span>
            </button>
          </form>
        </div>

        {/* Built-in high compliance Pomodoro clock */}
        <div className="p-6 bg-[#050505] border border-[#06B6D4]/20 rounded-2xl text-center relative overflow-hidden flex flex-col justify-between h-56">
          <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-extrabold font-mono text-[#06B6D4]">
            <span className="flex items-center gap-1"><Clock size={12} /> Live Focus Timer</span>
            <span>{isBreak ? '☕ REST BREAK' : '🎯 STUDIOUS CONCEPT WORK'}</span>
          </div>
          
          <div className="my-3">
            <h5 className="text-[2.7rem] font-black tracking-tighter text-white font-mono leading-none">
              {formatTime(secondsLeft)}
            </h5>
            <p className="text-[9px] font-bold uppercase mt-1.5 text-slate-500">Task: Reviewing details of {subject.split('&')[0]}</p>
          </div>

          <div className="flex gap-2 justify-center">
            <button
              onClick={() => setTimerActive(!timerActive)}
              className={`px-6 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                timerActive 
                  ? 'bg-rose-500 text-white hover:bg-rose-600' 
                  : 'bg-emerald-500 text-black hover:bg-emerald-400 font-black'
              }`}
            >
              {timerActive ? 'PAUSE CLOCK' : 'START TIMER'}
            </button>
            <button
              onClick={handleResetTimer}
              className="px-4 py-2 border border-slate-700 hover:border-slate-500 text-xs text-[#CBD5E1] rounded-xl hover:text-white transition-all cursor-pointer"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Compiled schedule displays */}
      <div className="lg:col-span-7 flex flex-col bg-[#0F172A] border border-[#06B6D4]/30 rounded-2xl overflow-hidden min-h-[500px]">
        {/* Scheduler timeline Header */}
        <div className="px-6 py-4 border-b border-[#06B6D4]/20 bg-[#050505]/70 flex justify-between items-center">
          <div>
            <h5 className="font-extrabold text-[13px] text-white uppercase flex items-center gap-1.5">
              <Calendar size={13} className="text-[#06B6D4]" /> compiled study curriculum
            </h5>
            <p className="text-[10px] text-slate-400 mt-0.5">Optimized cognitive workload schedule</p>
          </div>
        </div>

        {/* Schedule timeline lists */}
        <div className="flex-1 p-6 overflow-y-auto max-h-[380px] custom-scrollbar space-y-4">
          {timelineBlocks ? (
            timelineBlocks.map(block => (
              <div 
                key={block.id}
                className={`p-4 rounded-xl border flex gap-4 min-h-[75px] transition-all duration-300 ${
                  block.type === 'work'
                    ? 'bg-[#050505]/50 border-slate-800 hover:border-[#06B6D4]/40 hover:bg-[#050505]/80'
                    : 'bg-emerald-950/5 border-emerald-900/10 opacity-70 border-dashed hover:opacity-100'
                }`}
              >
                {/* Visual side time banner */}
                <div className="text-right min-w-[70px] border-r border-[#06B6D4]/15 pr-3.5 flex flex-col justify-center">
                  <span className="font-bold text-xs font-mono text-white tracking-tighter block">{block.start}</span>
                  <span className="text-[9px] font-bold text-slate-500 block uppercase font-mono mt-0.5">{block.end}</span>
                </div>

                {/* Task Details */}
                <div className="flex-1 text-xs justify-center flex flex-col">
                  <p className={`font-extrabold ${block.type === 'work' ? 'text-[#22D3EE]' : 'text-emerald-400 italic font-medium'}`}>
                    {block.topic}
                  </p>
                  <p className="text-slate-400 mt-1 leading-relaxed text-[11px] text-justify font-medium">
                    {block.action}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 px-6">
              <div className="w-16 h-16 bg-[#050505]/80 border border-dashed border-[#06B6D4]/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass size={24} className="text-slate-600 animate-spin" />
              </div>
              <h6 className="font-bold text-sm text-[#E2E8F0]">Algorithm Engine Idle</h6>
              <p className="text-xs text-[#94A3B8] max-w-sm mx-auto mt-2 leading-relaxed">
                Provide your subject details, compile style, and target study periods on the left. Hit the Compile button to generate your hour-by-hour cognitive blocks.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import { BIO } from "../data";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#FF2A2A] text-white overflow-hidden py-24 px-6 md:px-12 flex flex-col justify-between"
    >
      {/* Decorative Floating Black Stars */}
      <motion.div
        className="absolute top-12 left-[10%] text-black opacity-30 select-none pointer-events-none"
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l3.09 8.91 8.91 3.09-8.91 3.09-3.09 8.91-3.09-8.91-8.91-3.09 8.91-3.09z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-[8%] text-black opacity-20 select-none pointer-events-none"
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l3.09 8.91 8.91 3.09-8.91 3.09-3.09 8.91-3.09-8.91-8.91-3.09 8.91-3.09z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-[35%] text-black opacity-15 select-none pointer-events-none"
        animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l3.09 8.91 8.91 3.09-8.91 3.09-3.09 8.91-3.09-8.91-8.91-3.09 8.91-3.09z" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10 pb-16">
        
        {/* Left Side: Hanging ID Badge with Lanyard */}
        <div id="badge-container" className="col-span-1 lg:col-span-5 flex flex-col items-center justify-start relative pt-12">
          
          {/* Hanging Lanyard Strap & Clip */}
          <div className="absolute top-0 flex flex-col items-center z-20 pointer-events-none" style={{ height: "120px" }}>
            {/* Lanyard Strap Loop */}
            <div className="w-4 h-24 bg-black border-l border-r border-neutral-700 shadow-md flex justify-center">
              <div className="w-[1px] h-full bg-neutral-600" />
            </div>
            {/* Silver Metal Ring and Clip */}
            <div className="w-6 h-6 bg-neutral-400 rounded-full border border-neutral-500 flex items-center justify-center -mt-1 shadow-sm">
              <div className="w-3 h-3 bg-neutral-600 rounded-full" />
            </div>
            {/* Swivel Spring Clip */}
            <div className="w-2 h-4 bg-neutral-500 rounded-b-sm shadow-sm" />
          </div>

          {/* Swinging / Floating ID Badge Card */}
          <motion.div
            id="lanyard-badge"
            className="mt-28 w-72 bg-[#1C1C1C] rounded-2xl p-5 border border-neutral-800 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] relative cursor-grab active:cursor-grabbing text-neutral-300"
            style={{ originX: 0.5, originY: -0.4 }}
            animate={{ 
              rotate: [-3.5, -2.5, -3.5], // Gentle swing
              y: [-3, 3, -3] // Floating effect
            }}
            whileHover={{ 
              scale: 1.03, 
              rotate: -1,
              shadow: "0 30px 60px -15px rgba(0,0,0,0.9)",
              transition: { duration: 0.3 }
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Hole Punch detail at top */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-black rounded-full border border-neutral-800 flex items-center justify-center">
              <div className="w-6 h-1 bg-[#FF2A2A] rounded-full" />
            </div>

            {/* Header branding */}
            <div className="flex justify-between items-center mt-3 border-b border-neutral-800 pb-3">
              <span className="font-mono text-[9px] tracking-widest text-[#FF2A2A] font-bold">LEESHARK // CONF</span>
              <span className="font-mono text-[9px] tracking-widest text-neutral-500">CREATIVE ENG</span>
            </div>

            {/* Profile Photo */}
            <div className="mt-5 relative aspect-square w-full rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800 group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80"
                alt="Sakshi Kumari Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay with subtle red tone */}
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Pass Metadata */}
            <div className="mt-4 space-y-1 text-left">
              <div className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">Holder Name</div>
              <div className="font-display font-black text-lg tracking-tight text-white">{BIO.name}</div>
              
              <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-neutral-900">
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-wider text-neutral-500">Role</div>
                  <div className="font-mono text-[10px] text-white font-bold">{BIO.title}</div>
                </div>
                <div>
                  <div className="font-mono text-[8px] uppercase tracking-wider text-neutral-500">Access Key</div>
                  <div className="font-mono text-[10px] text-white font-bold">2541-SHAK</div>
                </div>
              </div>
            </div>

            {/* Barcode representation */}
            <div className="mt-6 pt-4 border-t border-dashed border-neutral-800 flex flex-col items-center">
              <div className="h-8 w-full bg-white rounded-sm flex items-stretch gap-[2px] p-1.5 overflow-hidden">
                {/* Simulated barcode bars */}
                <div className="w-1 bg-black" /><div className="w-0.5 bg-black" /><div className="w-2 bg-black" /><div className="w-1 bg-black" /><div className="w-0.5 bg-black" /><div className="w-1.5 bg-black" /><div className="w-1 bg-black" /><div className="w-0.5 bg-black" /><div className="w-2 bg-black" /><div className="w-1 bg-black" /><div className="w-1.5 bg-black" /><div className="w-0.5 bg-black" /><div className="w-2 bg-black" /><div className="w-1 bg-black" /><div className="w-1 bg-black" />
              </div>
              <span className="font-mono text-[8px] tracking-[0.2em] mt-1.5 text-neutral-500">UID: 991729588853</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Professional Intro & Skills */}
        <div id="about-right-content" className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Giant Hello Heading */}
          <motion.h2
            id="hello-heading"
            className="font-display font-black text-7xl md:text-8xl text-black select-none tracking-tighter leading-none"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hello!
          </motion.h2>

          {/* Intro Description */}
          <motion.div
            id="about-paragraph-block"
            className="mt-6 space-y-4 text-sm sm:text-base md:text-lg leading-relaxed font-light text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p>
              I am <strong className="text-black font-black uppercase tracking-tight">{BIO.name}</strong>, a creative technologist pushing boundaries in full-stack engineering.
            </p>
            <p className="text-white/85">
              {BIO.aboutText}
            </p>
            <p className="text-white/85">
              I collaborate with digital agencies, creative studios, and global enterprises to craft fast, clean, and sensory-rich web architectures that stand out.
            </p>
          </motion.div>

          {/* Technology Skills Header */}
          <div className="mt-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-black font-bold">Tech Stack Toolkit</span>
            
            {/* Horizontal Logos with Floating Effect */}
            <div id="tech-stack-row" className="mt-4 flex flex-wrap gap-6 items-center">
              
              {/* React Logo Badges */}
              <motion.div
                className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 shadow-md"
                animate={{ y: [0, -6, 0] }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* SVG React Icon */}
                <svg className="w-8 h-8 text-[#61DAFB] animate-spin-slow" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
                  <ellipse rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" stroke="currentColor" strokeWidth="1" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" stroke="currentColor" strokeWidth="1" />
                  <circle r="2" fill="currentColor" />
                </svg>
                <span className="font-display font-bold text-xs tracking-wide">React.js</span>
              </motion.div>

              {/* Node.js Logo Badges */}
              <motion.div
                className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 shadow-md"
                animate={{ y: [0, -6, 0] }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 3, delay: 0.4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* SVG Node Icon */}
                <svg className="w-8 h-8 text-[#339933]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5h2v5h-2zm0-7v-2h2v2h-2z"/>
                </svg>
                <span className="font-display font-bold text-xs tracking-wide">Node.js</span>
              </motion.div>

              {/* MongoDB Logo Badges */}
              <motion.div
                className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-5 py-3 rounded-xl border border-white/10 shadow-md"
                animate={{ y: [0, -6, 0] }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 3, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* SVG MongoDB Icon */}
                <svg className="w-8 h-8 text-[#47A248]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5v-4h2v4h-2zm0-6v-2h2v2h-2z" />
                </svg>
                <span className="font-display font-bold text-xs tracking-wide">MongoDB</span>
              </motion.div>

            </div>
          </div>
        </div>
      </div>

      {/* Large Torn-Paper SVG Transition (Reveals White section below) */}
      <div 
        id="about-divider"
        className="absolute bottom-0 left-0 right-0 w-full z-10 pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white translate-y-[2px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Detailed Jagged organic ripped paper effect */}
          <path d="M0,0 
                   C60,15 120,-10 180,8 
                   C240,25 300,5 360,18 
                   C420,30 480,-5 540,12 
                   C600,28 660,10 720,5 
                   C780,0 840,30 900,18 
                   C960,5 1020,0 1080,12 
                   C1140,25 1200,-5 1260,8 
                   C1320,20 1380,10 1440,0 
                   L1440,120 L0,120 Z" 
          />
        </svg>
      </div>
    </section>
  );
}

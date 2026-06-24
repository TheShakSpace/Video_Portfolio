import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Play, Pause, ArrowDown } from "lucide-react";
import { BIO } from "../data";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Video play failed: ", err);
      });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 3.2, // Triggers after preloader slides up
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const playBtnVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 3.8, duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Cinematic Video Background */}
      <video
        ref={videoRef}
        src={BIO.videoUrl}
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        muted
        playsInline
      />

      {/* Dark Cinematic Overlay */}
      <div 
        id="hero-dark-overlay"
        className="absolute inset-0 bg-black/70 z-10 transition-opacity duration-700" 
      />

      {/* Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col md:flex-row items-center justify-between z-20 pt-20">
        
        {/* Left Side: Content Column */}
        <motion.div
          id="hero-left-content"
          className="w-full md:w-3/5 text-left flex flex-col justify-center h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subheader Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full w-fit mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A] animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/80">
              Personal Portfolio 2026
            </span>
          </motion.div>

          {/* Large Bold Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tighter leading-none flex flex-col"
          >
            <span>Hi, I'm a</span>
            <span className="stroke-text uppercase font-black text-transparent py-1">
              Full Stack
            </span>
            <span className="stroke-text uppercase font-black text-transparent">
              Developer
            </span>
          </motion.h1>

          {/* Subheading Professional Intro */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-lg font-sans leading-relaxed font-light drop-shadow"
          >
            {BIO.tagline} Focused on building beautiful web apps with <span className="text-[#FF2A2A] font-semibold">React.js</span>, <span className="text-[#FF2A2A] font-semibold">Node.js</span>, and modern <span className="text-[#FF2A2A] font-semibold">Tailwind CSS</span> layouts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            {/* Primary CTA */}
            <button
              onClick={() => scrollToSection("projects")}
              id="hero-primary-cta"
              className="px-8 py-4 bg-white text-black font-mono text-xs font-bold tracking-widest rounded-full hover:scale-105 hover:bg-[#FF2A2A] hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
            >
              VIEW MY WORK
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              id="hero-secondary-cta"
              className="px-8 py-4 bg-white/5 border border-white/20 hover:border-white text-white font-mono text-xs font-bold tracking-widest rounded-full backdrop-blur-md hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              CONTACT ME
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Circular Play Reel Button */}
        <div 
          id="hero-right-content"
          className="w-full md:w-2/5 flex flex-col items-center justify-center md:h-full py-10 md:py-0"
        >
          <motion.div
            id="play-reel-wrapper"
            className="flex flex-col items-center"
            variants={playBtnVariants}
            initial="hidden"
            animate="visible"
          >
            <button
              onClick={togglePlay}
              id="play-reel-btn"
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 hover:border-[#FF2A2A] hover:shadow-[0_0_30px_rgba(255,42,42,0.6)] group transition-all duration-500 cursor-pointer"
              aria-label={isPlaying ? "Pause reel" : "Play reel"}
            >
              {/* Spinning subtle outer circle */}
              <div className="absolute inset-2 border border-dashed border-white/10 rounded-full group-hover:border-[#FF2A2A]/40 group-hover:animate-spin-slow transition-colors duration-500" />
              
              {/* Play/Pause Icon */}
              {isPlaying ? (
                <Pause className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-[#FF2A2A] transition-colors duration-300" />
              ) : (
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-2 group-hover:text-[#FF2A2A] transition-colors duration-300" />
              )}
            </button>

            {/* Lowercase Label below */}
            <span className="mt-4 font-mono text-xs font-medium tracking-[0.2em] text-white/60 uppercase">
              {isPlaying ? "PAUSE" : "PLAY REEL"}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Animated Bouncing Scroll Indicator (Visible only on Desktop) */}
      <div 
        id="hero-scroll-indicator"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center text-white/50 hover:text-[#FF2A2A] transition-colors duration-300 focus:outline-none cursor-pointer"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] mb-1">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </button>
      </div>
    </section>
  );
}

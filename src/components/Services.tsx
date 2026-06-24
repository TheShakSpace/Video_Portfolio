import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { PROCESS_STEPS } from "../data";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the entire timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Map the scroll progress to the SVG path drawing length
  const pathLength = useTransform(scrollYProgress, [0.08, 0.9], [0, 1]);

  // We can track thresholds of scrollYProgress to activate cards
  const [activeStep, setActiveStep] = useState<number>(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.8) {
      setActiveStep(4);
    } else if (latest > 0.55) {
      setActiveStep(3);
    } else if (latest > 0.3) {
      setActiveStep(2);
    } else if (latest > 0.1) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
  });

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative w-full min-h-screen bg-white text-black py-28 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div id="services-header" className="max-w-2xl text-left mb-16 relative">
          {/* How we work Badge */}
          <div className="inline-flex items-center px-4 py-1.5 border border-neutral-300 rounded-full bg-white shadow-sm mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 font-semibold">
              How we work
            </span>
          </div>

          {/* Headline & Sketch Arrow */}
          <div className="relative">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-neutral-950 tracking-tighter leading-none">
              Let us show you how we drive your brand to new heights
            </h2>
            
            {/* Hand-drawn Sketch Arrow SVG */}
            <div className="absolute -right-16 top-0 hidden xl:block text-neutral-400">
              <svg width="70" height="70" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-[-10deg]">
                <path d="M10,80 C40,75 60,50 80,20" />
                <path d="M60,18 L80,20 L82,40" />
                <path d="M10,80 L5,85" />
              </svg>
            </div>
          </div>

          <p className="mt-6 text-sm sm:text-base text-neutral-600 max-w-lg leading-relaxed font-light">
            We follow a structured, collaborative development lifecycle tailored to creative agencies and forward-thinking businesses. No shortcuts, just pure engineering craft.
          </p>
        </div>

        {/* Main Timeline Experience */}
        <div className="relative min-h-[1400px] md:min-h-[1600px] mt-24">
          
          {/* Curved S-Curve SVG Path (Visible on Desktop) */}
          <div className="absolute inset-0 hidden md:block w-full h-full pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1600"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Guide Line (light gray) */}
              <path
                d="M 500,20 C 750,150 850,350 500,500 C 150,650 150,900 500,1050 C 850,1200 750,1400 500,1580"
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="8 8"
              />

              {/* Animated Scroll-driven Path (bright red/black) */}
              <motion.path
                d="M 500,20 C 750,150 850,350 500,500 C 150,650 150,900 500,1050 C 850,1200 750,1400 500,1580"
                stroke="#FF2A2A"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="8 8"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Straight Vertical Dash Line (Visible on Mobile) */}
          <div className="absolute left-6 inset-0 md:hidden w-1 h-full pointer-events-none">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="none">
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="100%"
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <motion.line
                x1="2"
                y1="0"
                x2="2"
                y2="100%"
                stroke="#FF2A2A"
                strokeWidth="3"
                strokeDasharray="4 4"
                style={{ scaleY: pathLength, originY: 0 }}
                className="h-full w-full"
              />
            </svg>
          </div>

          {/* Process Cards Grid / Placements */}
          <div className="space-y-16 md:space-y-0 w-full h-full relative">
            
            {/* CARD 1: Define (Top Right) */}
            <div className="md:absolute md:top-[120px] md:right-[5%] lg:right-[10%] w-full md:w-[400px]">
              <ProcessCard
                step={PROCESS_STEPS[0]}
                isActive={activeStep >= 1}
                align="right"
              />
            </div>

            {/* CARD 2: Design (Left Side) */}
            <div className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] w-full md:w-[400px]">
              <ProcessCard
                step={PROCESS_STEPS[1]}
                isActive={activeStep >= 2}
                align="left"
              />
            </div>

            {/* CARD 3: Build (Right Side) */}
            <div className="md:absolute md:top-[850px] md:right-[5%] lg:right-[10%] w-full md:w-[400px]">
              <ProcessCard
                step={PROCESS_STEPS[2]}
                isActive={activeStep >= 3}
                align="right"
              />
            </div>

            {/* CARD 4: Launch (Bottom Left) */}
            <div className="md:absolute md:top-[1220px] md:left-[5%] lg:left-[10%] w-full md:w-[400px]">
              <ProcessCard
                step={PROCESS_STEPS[3]}
                isActive={activeStep >= 4}
                align="left"
              />
            </div>

          </div>

        </div>

        {/* Bottom Section - Sketchbook Aesthetic */}
        <div id="services-footer" className="mt-32 text-center relative z-10 flex flex-col items-center">
          <motion.div
            className="inline-block"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Handwritten Title */}
            <span className="font-serif-italic font-bold text-4xl sm:text-5xl text-neutral-800 rotate-[-3deg] inline-block select-none hover:scale-105 transition-transform duration-300">
              Ready to be delivered!
            </span>
            
            {/* Small hand-drawn circle SVG accent under the handwritten text */}
            <svg width="240" height="20" viewBox="0 0 240 20" fill="none" className="mx-auto mt-2 text-[#FF2A2A]/80">
              <path d="M10,15 C80,5 160,5 230,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

interface ProcessCardProps {
  step: typeof PROCESS_STEPS[0];
  isActive: boolean;
  align: "left" | "right";
}

function ProcessCard({ step, isActive, align }: ProcessCardProps) {
  // Stagger direction depending on left/right alignment
  const xOffset = align === "left" ? -40 : 40;

  return (
    <motion.div
      className="px-4 md:px-0"
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className={`relative p-8 rounded-[2rem] border transition-all duration-500 shadow-md ${
          isActive
            ? "bg-[#FF2A2A] text-white border-[#FF2A2A] shadow-[0_15px_40px_rgba(255,42,42,0.35)] translate-y-[-4px]"
            : "bg-white text-neutral-800 border-neutral-200/80 hover:border-neutral-400"
        } ${step.rotation} group hover:scale-[1.02]`}
      >
        {/* Luggage Tag Hole Punch detail */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className={`w-5 h-5 rounded-full border transition-colors duration-500 ${
            isActive ? "bg-red-950/40 border-red-800" : "bg-neutral-100 border-neutral-300"
          }`} />
        </div>

        {/* Step Number in Serif Font */}
        <div className={`font-serif-italic font-black text-5xl italic tracking-tighter text-left mt-3 transition-colors duration-500 ${
          isActive ? "text-red-950/50" : "text-neutral-200"
        }`}>
          {step.stepNumber}
        </div>

        {/* Heading */}
        <h3 className={`mt-4 font-display font-black text-2xl tracking-tight transition-colors duration-500 ${
          isActive ? "text-white" : "text-neutral-900"
        }`}>
          {step.title}
        </h3>

        {/* Description */}
        <p className={`mt-3 text-xs leading-relaxed font-light transition-colors duration-500 ${
          isActive ? "text-white/85" : "text-neutral-500"
        }`}>
          {step.description}
        </p>

        {/* Hover accent badge */}
        <div className={`absolute bottom-5 right-5 w-8 h-8 rounded-full flex items-center justify-center border text-[10px] font-mono transition-all duration-500 ${
          isActive 
            ? "bg-white text-[#FF2A2A] border-white" 
            : "bg-neutral-50 text-neutral-400 border-neutral-200 group-hover:border-neutral-400"
        }`}>
          GO
        </div>
      </motion.div>
    </motion.div>
  );
}

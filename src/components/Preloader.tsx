import { useEffect } from "react";
import { motion } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    // Total duration: 1.6s fill + 0.6s brief pause = 2.2s before starting exit
    const timer = setTimeout(() => {
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="preloader-overlay"
      className="fixed inset-0 bg-[#ff2a2a] z-[100000] flex items-center justify-center overflow-hidden"
      initial={{ y: 0 }}
      exit={{ 
        y: "-100%", 
        transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <motion.div
        id="preloader-logo-container"
        className="relative flex items-center justify-center w-full"
        initial={{ scale: 1, opacity: 1 }}
        exit={{ 
          scale: 0.85, 
          opacity: 0, 
          transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
        }}
      >
        {/* Step 1: Dark transparent background layer */}
        <div 
          id="preloader-text-bg"
          className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter select-none text-black/20"
        >
          Leeshark.
        </div>

        {/* Step 2 & 3: White foreground layer with upward fill water-effect */}
        <motion.div
          id="preloader-text-fg"
          className="absolute font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter select-none text-white"
          initial={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          transition={{ 
            duration: 1.6, 
            ease: [0.76, 0, 0.24, 1] // Custom premium cubic-bezier easing
          }}
        >
          Leeshark.
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

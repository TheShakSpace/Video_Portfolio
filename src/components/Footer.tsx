import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { BIO } from "../data";

export default function Footer() {
  const currentYear = BIO.currentYear;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full min-h-[50vh] bg-[#111111] text-[#F4F4F4] pt-24 pb-12 px-6 md:px-12 flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between gap-16">
        
        {/* 1. Top Information Grid (Three Columns) */}
        <div id="footer-top-grid" className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/5 pb-12">
          
          {/* Left Column: Creative Services */}
          <div className="text-left">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF2A2A] font-bold block mb-4">
              Creative Services
            </span>
            <ul className="font-mono text-xs tracking-widest uppercase text-white/65 space-y-2 leading-relaxed">
              <li>Cinematic Production</li>
              <li>Motion Graphics</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Center Column: Experience Showcase */}
          <div className="text-left flex flex-col justify-between">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF2A2A] font-bold block mb-4">
                Experience
              </span>
              <p className="font-display font-medium text-base text-white/80 leading-snug">
                {BIO.experienceYears}
              </p>
            </div>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-[#FF2A2A] transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-[#FF2A2A] w-fit mt-6 inline-flex items-center gap-1 group"
            >
              View Work
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Right Column: Availability Status */}
          <div className="text-left flex flex-col justify-between">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF2A2A] font-bold block mb-4">
                Availability
              </span>
              <p className="font-display font-medium text-base text-white/80 leading-snug flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse inline-block" />
                {BIO.location}
              </p>
            </div>
            <span className="font-mono text-xs tracking-widest uppercase text-white/50 mt-6 block">
              ESTABLISHED IN // {currentYear}
            </span>
          </div>

        </div>

        {/* 2. Giant Branding Text (Center Piece) */}
        <div id="footer-branding-center" className="my-10 select-none overflow-hidden py-4">
          <motion.h2
            className="font-display font-black text-[12vw] tracking-tighter text-[#ECECEC] leading-none lowercase text-center block cursor-pointer transition-all duration-700 hover:text-white hover:drop-shadow-[0_0_30px_rgba(255,42,42,0.55)]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            leeshark
          </motion.h2>
        </div>

        {/* 3. Bottom Contact Grid (Three Columns) */}
        <div id="footer-bottom-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-white/5 pt-8">
          
          {/* Left Column: Copyright & React Mention */}
          <div className="text-left font-mono text-[10px] text-white/50 space-y-1">
            <p>© {currentYear} Leeshark. All rights reserved.</p>
            <p>
              Built with <span className="text-[#FF2A2A] font-semibold">React</span> & <span className="text-[#FF2A2A] font-semibold">Framer Motion</span>.
            </p>
          </div>

          {/* Center Column: Underlined Email Contact Link */}
          <div className="text-center">
            <a
              href={`mailto:${BIO.email}`}
              className="inline-flex items-center gap-2 font-display text-base md:text-lg font-bold text-white hover:text-[#FF2A2A] transition-colors duration-300 group underline underline-offset-8 decoration-white/20 hover:decoration-[#FF2A2A]/80 cursor-pointer"
            >
              <Mail size={16} className="text-[#FF2A2A]" />
              {BIO.email}
            </a>
          </div>

          {/* Right Column: Social Profiles */}
          <div className="flex md:justify-end gap-6">
            {/* GitHub social */}
            <a
              href={BIO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 border border-white/10 hover:border-[#FF2A2A] hover:bg-[#FF2A2A] text-white rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,42,42,0.4)] group cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>

            {/* LinkedIn social */}
            <a
              href={BIO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white/5 border border-white/10 hover:border-[#FF2A2A] hover:bg-[#FF2A2A] text-white rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,42,42,0.4)] group cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>

            {/* Return to top */}
            <button
              onClick={scrollToTop}
              className="ml-4 font-mono text-[10px] uppercase tracking-widest text-white/40 hover:text-[#FF2A2A] transition-colors cursor-pointer"
            >
              [ BACK TO TOP ↑ ]
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}

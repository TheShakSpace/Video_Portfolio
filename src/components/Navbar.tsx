import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#111111]/80 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Side: Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            id="nav-logo"
            className="font-display font-black text-2xl tracking-tight text-white select-none flex items-center gap-0.5 group"
          >
            Leeshark
            <span className="text-[#FF2A2A] inline-block group-hover:scale-125 transition-transform duration-300">.</span>
          </a>

          {/* Center Navigation: Desktop Menu */}
          <div id="desktop-nav-menu" className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="relative font-mono text-xs font-medium tracking-widest text-white/70 hover:text-white uppercase transition-colors duration-300 py-2 group"
              >
                {item}
                {/* Left to right growing underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF2A2A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side: Glassmorphism Hire Me Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection("contact")}
              id="desktop-hire-me-btn"
              className="px-6 py-2.5 rounded-full text-xs font-mono tracking-widest text-white bg-white/10 hover:bg-[#FF2A2A] border border-white/20 hover:border-[#FF2A2A] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] cursor-pointer"
            >
              HIRE ME
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-menu-toggle"
              className="text-white hover:text-[#FF2A2A] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            className="fixed inset-0 z-40 bg-[#FF2A2A] flex flex-col justify-center px-10 md:hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "tween", duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex flex-col gap-8 text-left">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className="font-display font-black text-4xl text-white tracking-tight hover:text-black transition-colors duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="mt-8 px-8 py-4 bg-black text-white hover:bg-white hover:text-black font-mono tracking-widest text-sm rounded-full transition-all duration-300 w-fit cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                HIRE ME
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#FF2A2A] selection:text-white overflow-x-hidden font-sans">
      {/* 1. Fullscreen Agency Preloader with AnimatePresence */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="app-preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Floating Navbar */}
      <Navbar />

      {/* 3. Fullscreen Cinematic Video Hero Section */}
      <Hero />

      {/* 4. Bold Red About Section with Lanyard Pass ID Badge */}
      <About />

      {/* 5. Clean Grid Process S-Curve Timeline ("How We Work") */}
      <Services />

      {/* 6. High-Contrast Projects Showroom */}
      <Projects />

      {/* 7. Dark Minimalist Luxury Footer */}
      <Footer />
    </div>
  );
}


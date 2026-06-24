import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

const CATEGORIES = ["All", "Full Stack / AI", "SaaS / Fintech", "Real-time / DevTools", "Creative UI"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#0D0D0D] text-white py-28 px-6 md:px-12 border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div id="projects-header" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF2A2A]/10 border border-[#FF2A2A]/20 rounded-full w-fit mb-4">
              <Sparkles className="w-3 h-3 text-[#FF2A2A]" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF2A2A] font-bold">
                Portfolio Showroom
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter leading-none uppercase">
              Featured Work
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-white/50 max-w-md font-sans font-light">
              A curated catalog of bespoke full-stack systems and high-end interactive client-side interfaces.
            </p>
          </div>

          {/* Experience Counter / Stats */}
          <div className="flex gap-8 border-l border-white/10 pl-6 h-fit text-left">
            <div>
              <div className="font-display font-black text-3xl text-[#FF2A2A]">20+</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-white/40 mt-1">Projects Built</div>
            </div>
            <div>
              <div className="font-display font-black text-3xl text-white">100%</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-white/40 mt-1">Client Happy</div>
            </div>
          </div>
        </div>

        {/* Filtering Tabs */}
        <div id="project-filters" className="flex flex-wrap gap-3 mb-12 pb-2 border-b border-white/5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#FF2A2A] text-white font-bold shadow-[0_5px_15px_rgba(255,42,42,0.3)]"
                  : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          id="project-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: string;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      id={`project-card-${project.id}`}
      className="group relative bg-[#141414] rounded-2xl overflow-hidden border border-white/5 hover:border-[#FF2A2A]/40 shadow-lg transition-all duration-500 flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
        {/* Subtle red overlay */}
        <div className="absolute inset-0 bg-[#FF2A2A]/5 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Floating Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono uppercase tracking-widest text-white rounded-full">
          {project.category}
        </span>
      </div>

      {/* Detail Content */}
      <div className="p-8 text-left flex-1 flex flex-col justify-between">
        <div>
          {/* Card Title */}
          <h3 className="font-display font-black text-2xl tracking-tight text-white group-hover:text-[#FF2A2A] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-xs leading-relaxed text-white/60 font-light">
            {project.description}
          </p>
        </div>

        <div className="mt-6">
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md font-mono text-[8px] uppercase tracking-widest text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 border-t border-white/5 pt-5">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <Github size={14} />
              SOURCE CODE
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-[9px] tracking-widest uppercase text-[#FF2A2A] hover:text-white transition-colors duration-300 ml-auto cursor-pointer"
            >
              <ExternalLink size={14} />
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

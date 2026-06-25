import React from 'react';

const projects = [
  {
    title: "Sheshark",
    category: "AI & SECURITY",
    description:
      "An AI-powered phishing detection platform that analyzes suspicious URLs, emails, and websites to protect users from cyber threats in real time.",
    tech: ["React", "Node.js", "Machine Learning"],
    // TODO: Add GitHub repository URL
    link: "#",
    type: "Featured",
  },
  {
    title: "Vittya AI",
    category: "AI Fintech",
    description:
      "Your autonomous CFO agent designed to manage finances, automate budgeting, and optimize cashflow for startups and YC companies.",
    tech: ["React", "Node.js", "AI Agent SDK"],
    link: "https://github.com/TheShakSpace",
    type: "Featured",
  },
  {
    title: "Pirates",
    category: "WEB GAME",
    description:
      "An interactive pirate adventure game featuring quests, battles, leaderboards, and engaging gameplay.",
    tech: ["React", "JavaScript", "TailwindCSS"],
    // TODO: Add GitHub repository URL
    link: "#",
    type: "Featured",
  },
  {
    title: "Daytona (Contribution)",
    category: "DevOps / Infrastructure",
    description:
      "A secure and elastic infrastructure for running AI-generated code. Maintained and customized from the open-source Daytona project.",
    tech: ["Go", "TypeScript", "Docker"],
    link: "https://github.com/TheShakSpace/daytona",
    type: "GitHub",
  },
  {
    title: "Digital Mandi",
    category: "E-Commerce",
    description:
      "A digital marketplace platform for agricultural trade, allowing direct farmer-to-buyer transactions.",
    tech: ["TypeScript", "React", "Node.js"],
    link: "https://github.com/TheShakSpace/Digital-Mandi",
    type: "GitHub",
  },
  {
    title: "SpamDetector",
    category: "Machine Learning",
    description:
      "A Python-based utility that processes text and detects spam using custom tokenization and NLP classifiers.",
    tech: ["Python", "scikit-learn", "Flask"],
    link: "https://github.com/TheShakSpace/SpamDetector",
    type: "GitHub",
  },
  {
    title: "Shakspace_OS",
    category: "Browser OS",
    description:
      "A browser-based operating system focused on productivity, workspaces, AI integration, and modern web experiences.",
    tech: ["React", "Node.js", "TailwindCSS"],
    // TODO: Add GitHub repository URL
    link: "#",
    type: "GitHub",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0e0e0e] py-28 px-6 md:px-12 w-full text-white relative overflow-hidden font-sans">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-20 text-center md:text-left">
          <div className="inline-block border border-red-500/30 rounded-full px-5 py-1.5 text-xs text-red-400 font-bold mb-6 bg-red-950/20 uppercase tracking-widest">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Featured Projects & <span className="text-red-500">Creations</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl font-medium">
            Here's a curated selection of my work, ranging from AI-powered fintech agents and green energy tools to open-source contributions.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projects.filter(p => p.type === "Featured").map((project, index) => (
            <div 
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-red-500/40 hover:-translate-y-2 transition-all duration-300 group shadow-2xl relative"
            >
              {/* Card top banner */}
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-bold text-red-500 uppercase tracking-wider">{project.category}</span>
                <span className="text-[10px] bg-red-500/10 text-red-400 px-3 py-1 rounded-full border border-red-500/20 font-bold uppercase">Featured</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs bg-zinc-800 text-gray-300 px-3 py-1 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-red-500 hover:border-red-500 transition-all duration-300"
                >
                  Explore Code
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Sub-Header */}
        <div data-aos="fade-up" className="mb-12 mt-24">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
            Other Public <span className="text-red-500">Repositories</span>
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-lg font-medium">
            Explore some of my other scripts, utilities, and packages direct from my GitHub.
          </p>
        </div>

        {/* GitHub Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(p => p.type === "GitHub").map((project, index) => (
            <div 
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-zinc-950/40 border border-zinc-900 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{project.category}</span>
                  <svg className="w-4 h-4 text-zinc-600 group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2 text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] bg-zinc-900 text-gray-400 px-2.5 py-0.5 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-red-400 font-bold flex items-center gap-1 group-hover:text-white transition-colors"
                >
                  View Repo
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

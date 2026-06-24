import { Project, ProcessStep } from "./types";

export const BIO = {
  name: "SAKSHI KUMARI",
  title: "Full Stack Developer",
  tagline: "I love creating modern, high-performance web applications and fluid digital experiences that marry architectural integrity with visual delight.",
  aboutText: "I am a passionate Full Stack Developer and Creative Engineer dedicated to crafting award-winning portfolio websites and robust cloud-native systems. Specializing in React, Node.js, and modern CSS engines, I bridge the gap between elegant UI design and scalable backend infrastructure. Inspired by minimalist luxury aesthetics, I write clean, optimized code to build digital assets that drive brands to new heights.",
  email: "shakshikumari2541@gmail.com",
  github: "https://github.com/TheShakSpace",
  linkedin: "https://www.linkedin.com/in/theshakspace/",
  location: "Available Worldwide",
  experienceYears: "5+ Years of Experience",
  currentYear: new Date().getFullYear().toString(),
  videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e872d3b76926956799015bc261c&profile_id=139&oauth2_token_id=57447761" // Premium cinematic dark grid abstract
};

export const PROJECTS: Project[] = [
  {
    id: "ai-interviewer",
    title: "AI Interview Platform",
    description: "An advanced mock interview suite integrating Gemini AI for real-time speech analytics, behavioral feedback, and comprehensive skill assessment dashboard.",
    tech: ["React.js", "Node.js", "Gemini API", "Tailwind CSS", "WebRTC"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/TheShakSpace",
    github: "https://github.com/TheShakSpace",
    category: "Full Stack / AI"
  },
  {
    id: "quantflow-crm",
    title: "QuantFlow SaaS",
    description: "A premium business dashboard featuring real-time transaction tracking, customer relationship management metrics, and automated report generation panels.",
    tech: ["React.js", "Express", "MongoDB", "Recharts", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/TheShakSpace",
    github: "https://github.com/TheShakSpace",
    category: "SaaS / Fintech"
  },
  {
    id: "orbit-collab",
    title: "Orbit Dev-Social",
    description: "A real-time hub for developer collaboration, featuring code sandboxes, collaborative layout structures, live chat channels, and interactive whiteboards.",
    tech: ["React.js", "Socket.io", "Tailwind CSS", "MongoDB", "Node.js"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/TheShakSpace",
    github: "https://github.com/TheShakSpace",
    category: "Real-time / DevTools"
  },
  {
    id: "cinematic-canvas",
    title: "Cinematic Showcase",
    description: "An editorial portfolio engine for creative agencies with high-fidelity video playbacks, responsive canvas grids, and organic scrolling physics.",
    tech: ["React.js", "Framer Motion", "Tailwind CSS", "HTML5 Video"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/TheShakSpace",
    github: "https://github.com/TheShakSpace",
    category: "Creative UI"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    stepNumber: "01",
    title: "Define",
    description: "Every great project begins with absolute clarity. We define the user persona, detail data flows, and outline precise interactive system routes.",
    rotation: "rotate-[2deg]",
    position: "top-right"
  },
  {
    id: 2,
    stepNumber: "02",
    title: "Design",
    description: "Form follows feeling. We craft custom typography pairings, high-contrast layouts, and tactile motion guidelines that give your brand a premium signature pulse.",
    rotation: "-rotate-[3deg]",
    position: "left-side"
  },
  {
    id: 3,
    stepNumber: "03",
    title: "Build",
    description: "Engineering with surgical precision. We write performance-optimized React interfaces, resilient Node/Express frameworks, and clean state systems.",
    rotation: "rotate-[1.5deg]",
    position: "right-side"
  },
  {
    id: 4,
    stepNumber: "04",
    title: "Launch",
    description: "Deploying fluidly to the cloud. We conduct performance audits, bundle size compression, and ensure robust delivery of responsive digital experiences.",
    rotation: "-rotate-[2deg]",
    position: "bottom-left"
  }
];

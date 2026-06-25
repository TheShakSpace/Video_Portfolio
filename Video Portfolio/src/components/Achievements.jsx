import React from 'react';

const achievements = [
  {
    title: "Hack BMU 8.0 Runner-Up",
    date: "18-19 April 2026",
    role: "Full Stack Developer",
    description: "Achieved Runner-Up position in Hack BMU 8.0 out of numerous competitive teams, showcasing advanced web development capabilities and collaborative hacking.",
    responsibilities: [
      "Developed and maintained user-facing features for the project website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability."
    ]
  },
  {
    title: "Spark Hack 2026 Winner",
    date: "1 April 2026",
    role: "Project Lead / Developer",
    description: "Won first place at Spark Hack 2026 by developing an innovative, highly scalable product that resolved critical real-world workflows.",
    responsibilities: [
      "Led the development of web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source project libraries utilized in the product ecosystem."
    ]
  },
  {
    title: "Graphic Designer Intern",
    date: "October 2025 - January 2026",
    role: "Paletto",
    description: "Worked as a Graphic Designer Intern, building infographics, brand materials, and visual elements.",
    responsibilities: [
      "Upgraded existing product images into informative infographic and lifestyle designs.",
      "Created A+ content and promotional short videos using AI tools.",
      "Collaborated with the product team to ensure visual consistency across platforms."
    ]
  }
];

const Achievements = () => {
  return (
    <section id="experience" className="bg-[#050505] py-28 px-6 md:px-12 w-full text-white relative overflow-hidden font-sans border-t border-zinc-900">
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.01] pointer-events-none bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-red-500 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center md:text-left">
          <div className="inline-block border border-red-500/30 rounded-full px-5 py-1.5 text-xs text-red-400 font-bold mb-6 bg-red-950/20 uppercase tracking-widest">
            Timeline
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Achievements & <span className="text-red-500">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl font-medium">
            A look back at my hackathon achievements, career milestones, and industry roles.
          </p>
        </div>

        {/* Timeline Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-8 pl-8 md:pl-12 space-y-16 py-4">
          
          {achievements.map((item, index) => (
            <div 
              key={item.title} 
              data-aos="fade-left"
              data-aos-delay={index * 150}
              className="relative group"
            >
              {/* Timeline Circle */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-red-500 transition-colors duration-300 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 group-hover:bg-red-500 transition-colors duration-300"></div>
              </div>

              {/* Card Container */}
              <div className="bg-zinc-900/40 border border-zinc-900 rounded-3xl p-8 hover:border-zinc-800 transition-all duration-300 shadow-xl">
                
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-6">
                  <div>
                    <span className="text-xs bg-red-500/10 text-red-400 px-3 py-1 rounded-full border border-red-500/20 font-bold uppercase tracking-wider">
                      {item.role}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-3 group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-sm font-mono text-gray-500 font-semibold md:text-right">
                    {item.date}
                  </span>
                </div>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="border-t border-zinc-800/60 pt-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Responsibilities & Highlights</h4>
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-gray-400 font-medium">
                        <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Achievements;

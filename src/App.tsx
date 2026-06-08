import React from 'react';
import { projectsData } from './data/projects';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      
      {/* 🚀 Hero Section */}
      <header className="max-w-5xl mx-auto px-4 pt-20 pb-12 sm:pt-28 sm:pb-16 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Banele Ngwane</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl font-medium">
          Full-Stack Software Engineer specialized in building highly performant, type-safe web applications using <strong className="text-slate-200">.NET Core, React (TypeScript), and Relational Databases</strong>.
        </p>
        <div className="mt-6 flex justify-center sm:justify-start gap-4 text-xs font-mono">
          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-slate-300">📍 South Africa</span>
          <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-slate-300">🐧 Ubuntu Core Linux</span>
        </div>
      </header>

      {/* 🗂️ Projects Matrix */}
      <main className="max-w-5xl mx-auto px-4 pb-24">
        <div className="border-b border-slate-800 pb-4 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2">
          <h2 className="text-2xl font-bold text-white tracking-tight">Engineering Case Studies</h2>
          <p className="text-sm text-slate-500 font-mono">Demonstrating Architectural Growth</p>
        </div>

        {/* Responsive Grid: 1 Column on Mobile, 2 on Tablets, 3 on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-xl hover:shadow-slate-950/50"
            >
              <div>
                {/* Tier Badging Mapping */}
                <div className="flex justify-between items-center mb-4">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    project.tier === 'Advanced' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                    project.tier === 'Intermediate' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                    'bg-slate-500/10 text-slate-400 border-slate-500/20'
                  }`}>
                    {project.tier}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">{project.description}</p>

                {/* Architecture Bullets */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-bold">Key Implementations:</h4>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                    {project.architectureHighlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Tech Stack Labels & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="text-[10px] font-mono bg-slate-950 text-slate-400 px-2 py-0.5 rounded border border-slate-800/60">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full bg-slate-800 hover:bg-slate-700 active:bg-slate-900 text-white font-medium text-sm py-2.5 px-4 rounded-xl border border-slate-700/50 transition duration-150 ease-in-out"
                >
                  Inspect Source Repository ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* 🏁 Footer */}
      <footer className="max-w-5xl mx-auto px-4 py-8 border-t border-slate-900 text-center text-xs font-mono text-slate-600">
        © {new Date().getFullYear()} Banele Ngwane. Built with React, TypeScript & Tailwind CSS.
      </footer>
    </div>
  );
};

export default App;
import type React from "react";
import { projectsData } from "./data/projects";

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">

      {/* 🚀 Hero Section */}
      <header className="max-w-5xl mx-auto px-4 pt-20 pb-12 sm:pt-28 sm:pb-16 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Banele Ngwane</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl font-medium">
            Full-Stack Software Engineer specialized in building highly performant, type-safe web applications using <strong className="text-slate-200">.NET Core, React (Typescript), and Relational Databases</strong>.
          </p>
          <div className="mt-6 flex justify-center sm:justify-start gap-4 text-xs font-mono">
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-slate-300">📍 South Africa</span>
            <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-md text-slate-300">🐧 Ubuntu Core Linux</span>
          </div>
      </header>

      {/* Responsive Grid: 1 Column on mobile, 2 on tablets, 3 on Desktops */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-xl hover:shadow-slate-950/50"
          >

          </div>
        ))}
      </div>
    </div>
  )
}
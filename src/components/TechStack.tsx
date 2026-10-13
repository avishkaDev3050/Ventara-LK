"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Shield, Sparkles } from "lucide-react";

const techCategories = [
  {
    category: "FRONTEND & UI MATRIX",
    description: "Next-gen web interfaces, high-fps animations & responsive layouts.",
    skills: [
      { name: "Next.js 15", level: "Core Stack", glow: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/40" },
      { name: "React 19", level: "UI Engine", glow: "from-sky-500/20 to-cyan-500/20", border: "border-sky-500/40" },
      { name: "Tailwind CSS v4", level: "Styling", glow: "from-teal-500/20 to-cyan-500/20", border: "border-teal-500/40" },
      { name: "Framer Motion", level: "Animations", glow: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/40" },
      { name: "TypeScript", level: "Type Safety", glow: "from-blue-600/20 to-indigo-600/20", border: "border-blue-500/40" },
    ],
  },
  {
    category: "CROSS-PLATFORM & DESKTOP",
    description: "Multi-platform deployment for mobile and native desktop apps.",
    skills: [
      { name: "Flutter & Dart", level: "Mobile Core", glow: "from-cyan-400/20 to-blue-600/20", border: "border-cyan-400/40" },
      { name: "Electron.js", level: "Desktop Suite", glow: "from-indigo-500/20 to-purple-500/20", border: "border-indigo-500/40" },
      { name: "C# (.NET)", level: "Enterprise App", glow: "from-purple-600/20 to-indigo-600/20", border: "border-purple-500/40" },
      { name: "Web API Native", level: "System Control", glow: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/40" },
    ],
  },
  {
    category: "BACKEND, DATABASE & CLOUD",
    description: "High-concurrency servers, microservices and secure storage pipelines.",
    skills: [
      { name: "Node.js / Express", level: "Runtime", glow: "from-emerald-600/20 to-green-500/20", border: "border-emerald-500/40" },
      { name: "NestJS", level: "Enterprise Node", glow: "from-red-500/20 to-pink-600/20", border: "border-red-500/40" },
      { name: "PHP / Laravel", level: "Web Backend", glow: "from-rose-500/20 to-red-600/20", border: "border-rose-500/40" },
      { name: "Python", level: "AI & Scripts", glow: "from-yellow-500/20 to-amber-600/20", border: "border-amber-500/40" },
      { name: "Prisma ORM", level: "Data Access", glow: "from-cyan-600/20 to-indigo-600/20", border: "border-cyan-500/40" },
      { name: "MySQL / Postgres", level: "Relational DB", glow: "from-blue-500/20 to-cyan-400/20", border: "border-blue-400/40" },
      { name: "Firebase Suite", level: "Realtime & Auth", glow: "from-amber-500/20 to-orange-600/20", border: "border-amber-500/40" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="relative py-28 px-4 md:px-8 max-w-7xl mx-auto z-10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-secondary/40 mb-6 bg-[#0B0F19]/80 shadow-[0_0_20px_rgba(112,0,255,0.2)]">
            <Cpu className="w-4 h-4 text-secondary" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
              SYSTEM ARCHITECTURE & ARSENAL
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Powered by Modern <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              Quantum-Grade Tech
            </span>
          </h2>

          <p className="text-gray-400 mt-5 text-base sm:text-lg font-light leading-relaxed">
            We leverage market-leading frameworks and robust backend architectures to craft resilient, ultra-fast applications.
          </p>
        </motion.div>
      </div>

      {/* Tech Matrix Grid */}
      <div className="space-y-12 relative z-10">
        {techCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl relative overflow-hidden"
          >
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-6 mb-8 gap-2">
              <div>
                <span className="text-xs font-mono text-cyan-400 tracking-widest flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5" /> {cat.category}
                </span>
                <p className="text-gray-400 text-sm mt-1">{cat.description}</p>
              </div>
              <span className="text-xs font-mono text-gray-500 self-start sm:self-auto px-3 py-1 bg-white/5 rounded-full border border-white/5">
                STACK_NODE // 0{catIdx + 1}
              </span>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`relative p-4 rounded-2xl bg-gradient-to-b ${skill.glow} border ${skill.border} backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.05)] group cursor-pointer flex flex-col justify-between`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Sparkles className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 transition-colors" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 group-hover:animate-ping" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-[10px] font-mono text-gray-400 mt-1 uppercase tracking-wider">
                      {skill.level}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Security Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 glass-panel p-6 rounded-2xl border border-primary/30 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/20 rounded-xl border border-primary/40">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="text-sm md:text-base font-bold text-white">Continuous Security & Code Optimization</h4>
            <p className="text-xs text-gray-400">All codebases undergo automated static analysis, security checks, and high-coverage test suite runs.</p>
          </div>
        </div>
        <span className="text-xs font-mono text-cyan-300 px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 shrink-0">
          STATUS: COMPLIANT
        </span>
      </motion.div>
    </section>
  );
}
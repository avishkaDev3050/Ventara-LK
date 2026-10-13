"use client";

import { motion } from "framer-motion";
import { Terminal, Target, Eye, Sparkles, CheckCircle2 } from "lucide-react";

const highlights = [
  "Bespoke software architecture engineered for ultra-performance.",
  "Cross-platform compatibility across Web, Mobile & Desktop ecosystems.",
  "Security-first development lifecycle with modern code standards.",
  "Seamless API integrations and cloud database scalability.",
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto z-10">
      
      {/* Background Orbs & Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 mb-6 bg-[#0B0F19]/80">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
              WHO WE ARE // VENTARA MATRIX
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Pioneering the Next Era of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              Digital Software Solutions
            </span>
          </h2>

          <p className="text-gray-400 mt-5 text-base sm:text-lg font-light leading-relaxed">
            Ventara LK is a forward-thinking software engine crafting high-tier bespoke digital systems, web portals, and cross-platform mobile architectures.
          </p>
        </motion.div>
      </div>

      {/* Grid: Vision & Mission Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative z-10">
        
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-3xl border border-primary/30 bg-[#0B0F19]/90 backdrop-blur-xl relative overflow-hidden group hover:border-primary/60 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/20 rounded-2xl border border-primary/40 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Target className="w-8 h-8 text-cyan-300" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                CORE DIRECTIVE
              </span>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed font-light text-base">
            To empower enterprises and forward-thinking brands with robust, scalable, and visually futuristic software platforms that drive real impact and seamless digital transformation.
          </p>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>DIRECTIVE_01</span>
            <span className="text-cyan-400">ACTIVE // MISSION_READY</span>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 rounded-3xl border border-secondary/30 bg-[#0B0F19]/90 backdrop-blur-xl relative overflow-hidden group hover:border-secondary/60 transition-all duration-300 shadow-[0_0_30px_rgba(112,0,255,0.1)]"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-secondary/20 rounded-2xl border border-secondary/40 shadow-[0_0_15px_rgba(112,0,255,0.3)]">
              <Eye className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                FUTURE HORIZON
              </span>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed font-light text-base">
            To become a leading benchmark in high-tier software development, recognized for futuristic visual design languages, extreme code efficiency, and bulletproof security.
          </p>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-500">
            <span>DIRECTIVE_02</span>
            <span className="text-purple-400">EXPANDING // GLOBAL_SCALE</span>
          </div>
        </motion.div>

      </div>

      {/* Highlights Checklist Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-panel p-8 rounded-3xl border border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl relative z-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <h4 className="text-lg font-bold text-white tracking-wide">
            THE VENTARA ARCHITECTURE ADVANTAGE
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300 font-light">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
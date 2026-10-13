"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Terminal, Cpu, Sparkles, Layers } from "lucide-react";
import CliFormModal from "./CliFormModal";

export default function Hero() {
  const [isCliOpen, setIsCliOpen] = useState(false);

  return (
    <>
      {/* Kali Linux Style CLI Form Modal Component */}
      <CliFormModal isOpen={isCliOpen} onClose={() => setIsCliOpen(false)} />

      <section className="relative min-h-screen pt-36 pb-20 px-4 md:px-8 flex items-center justify-center overflow-hidden">
        {/* Background Interactive Mesh / Grid */}
        <div className="absolute inset-0 bg-futuristic-grid bg-[size:40px_40px] opacity-20 pointer-events-none" />

        {/* Cyber Ambient Orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/20 rounded-full blur-[150px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-secondary/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Main Typography & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Cyberpunk Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 bg-[#0B0F19]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                VENTARA ARCHITECTURE v2.6
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08]">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                NEXT-GEN DIGITAL
              </span> <br />
              ECOSYSTEMS
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl font-light leading-relaxed">
              We build high-tier bespoke web applications, scalable mobile architectures, and enterprise backends designed for ultra-performance.
            </p>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => setIsCliOpen(true)}
                className="glow-border bg-primary/20 border border-primary/60 text-white font-semibold px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-primary/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all group cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                <span>Initiate Project</span>
                <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="glass-panel border border-white/10 text-gray-300 hover:text-white font-medium px-7 py-4 rounded-2xl hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-secondary" />
                <span>Explore Tech Stack</span>
              </a>
            </div>

            {/* Mini Stats Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <h3 className="text-2xl font-black text-white">99.9%</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-mono">Uptime Scale</p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">10x</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-mono">Speed Index</p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Zero</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-mono">Security Compromise</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive 3D/Glass Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Main Visual Frame */}
            <div className="relative w-full aspect-square max-w-[440px] glass-panel rounded-3xl border border-primary/40 p-6 bg-[#0B0F19]/60 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] flex flex-col justify-between overflow-hidden group">
              
              {/* Background Light Beam */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all pointer-events-none" />

              {/* Frame Top Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-primary" /> CORE_MATRIX.SYS
                </span>
              </div>

              {/* Middle Animated Graphic Element */}
              <div className="my-8 flex flex-col items-center justify-center relative">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  {/* Rotating Rings */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute inset-2 rounded-full border border-secondary/60 border-t-transparent"
                  />
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary/30 to-secondary/30 border border-primary/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.5)]">
                    <Layers className="w-10 h-10 text-cyan-300" />
                  </div>
                </div>
              </div>

              {/* Frame Footer Code Snippet */}
              <div className="bg-[#030712]/80 rounded-xl p-3 border border-white/5 font-mono text-xs text-gray-300 space-y-1">
                <p className="text-emerald-400">&gt; ventara --deploy --prod</p>
                <p className="text-gray-500">[SYSTEM] Optimizing Quantum Nodes...</p>
                <p className="text-cyan-300">[SUCCESS] Deployment Ready (24ms)</p>
              </div>
            </div>

            {/* FLOATING CARD 1: Top Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 sm:-right-8 glass-panel px-4 py-3 rounded-2xl border border-secondary/50 bg-[#0B0F19]/90 backdrop-blur-xl shadow-[0_0_25px_rgba(112,0,255,0.3)] flex items-center gap-3 z-20"
            >
              <div className="p-2 bg-secondary/20 rounded-xl border border-secondary/40">
                <ShieldCheck className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Military Grade</p>
                <p className="text-[10px] text-gray-400 font-mono">End-to-End Encryption</p>
              </div>
            </motion.div>

            {/* FLOATING CARD 2: Bottom Left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-4 sm:-left-8 glass-panel px-4 py-3 rounded-2xl border border-primary/50 bg-[#0B0F19]/90 backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center gap-3 z-20"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <p className="text-xs font-bold text-white">Realtime Sync</p>
                <p className="text-[10px] text-emerald-400 font-mono">Active Nodes: 100%</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>
    </>
  );
}
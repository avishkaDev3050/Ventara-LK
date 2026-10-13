"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const logs = [
  "INITIALIZING_CORE_SYSTEMS...",
  "CONNECTING_VENTARA_NODES...",
  "OPTIMIZING_QUANTUM_BUFFERS...",
  "ENCRYPTING_NETWORK_STREAM...",
  "SYSTEM_ONLINE",
];

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }
        return Math.min(100, prev + Math.floor(Math.random() * 12) + 1);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 20 && progress < 40) setLogIndex(1);
    else if (progress >= 40 && progress < 70) setLogIndex(2);
    else if (progress >= 70 && progress < 95) setLogIndex(3);
    else if (progress >= 95) setLogIndex(4);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center overflow-hidden font-mono select-none"
    >
      <div className="absolute inset-0 bg-futuristic-grid bg-[size:24px_24px] opacity-20 pointer-events-none" />

      {/* Behind Center Glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary/25 rounded-full blur-[140px] animate-pulse pointer-events-none" />

      {/* Main Core Loader Container */}
      <div className="relative flex items-center justify-center mb-10">
        {/* Outer Rotating Rings - Scaled Up */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-dashed border-primary/40 border-t-primary shadow-[0_0_40px_rgba(0,240,255,0.3)]"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="absolute w-60 h-60 md:w-64 md:h-64 rounded-full border-2 border-dashed border-secondary/50 border-b-secondary shadow-[0_0_40px_rgba(112,0,255,0.4)]"
        />

        {/* Center Panel for Logo & Percentage */}
        <div className="absolute flex flex-col items-center justify-center glass-panel w-44 h-44 md:w-48 md:h-48 rounded-full border border-primary/60 shadow-[0_0_30px_rgba(0,240,255,0.5)] p-4">
          
          {/* Eye-Catching Big Logo with Glow Effect */}
          <div className="relative w-24 h-16 md:w-28 md:h-20 flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Ventara LK Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(0,240,255,0.8)] animate-pulse" 
            />
          </div>

          {/* Glowing Percentage Badge */}
          <div className="mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-white tracking-widest">
              {progress}%
            </span>
          </div>

        </div>
      </div>

      {/* System Status Log Console */}
      <div className="w-80 md:w-96 glass-panel p-4 rounded-xl border border-primary/20 backdrop-blur-md shadow-2xl">
        <div className="flex items-center justify-between text-xs text-gray-400 border-b border-white/10 pb-2 mb-3">
          <span className="flex items-center gap-1.5 text-primary">
            <Terminal className="w-3.5 h-3.5" />
            VENTARA_OS_BOOT
          </span>
          <span className="text-emerald-400 flex items-center gap-1 font-semibold">
            <Zap className="w-3 h-3 fill-emerald-400" /> ACTIVE
          </span>
        </div>

        <div className="h-6 flex items-center justify-center overflow-hidden">
          <motion.p
            key={logIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-cyan-300 tracking-wider text-center font-semibold"
          >
            {logs[logIndex]}
          </motion.p>
        </div>

        <div className="w-full bg-slate-900/80 rounded-full h-1.5 mt-3 overflow-hidden border border-white/5">
          <motion.div
            className="bg-gradient-to-r from-secondary via-primary to-cyan-300 h-full shadow-[0_0_12px_#00F0FF]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          />
        </div>
      </div>

      {/* Footer Security Badge */}
      <div className="absolute bottom-8 flex items-center gap-2 text-xs text-gray-500 tracking-widest uppercase">
        <ShieldCheck className="w-4 h-4 text-primary/60" />
        <span>Ventara LK Security Matrix</span>
      </div>
    </motion.div>
  );
}
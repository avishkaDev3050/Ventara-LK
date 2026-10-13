"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Send, Sparkles, Mail, MapPin, Globe, Phone } from "lucide-react";
import CliFormModal from "./CliFormModal";

export default function ContactSection() {
  const [isCliOpen, setIsCliOpen] = useState(false);

  return (
    <>
      {/* CLI Modal Connect කිරීම */}
      <CliFormModal isOpen={isCliOpen} onClose={() => setIsCliOpen(false)} />

      <section id="contact" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto z-10">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 mb-6 bg-[#0B0F19]/80 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
              <Send className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                INITIATE COMMUNICATION // CONTACT MATRIX
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Ready to Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                Next Digital System?
              </span>
            </h2>

            <p className="text-gray-400 mt-5 text-base sm:text-lg font-light leading-relaxed">
              Open a terminal session to send your project requirements or reach out directly to our engineering team.
            </p>
          </motion.div>
        </div>

        {/* Interactive Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* LEFT: CLI Trigger Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-primary/40 bg-[#0B0F19]/90 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(0,240,255,0.15)]"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> CLI_DISPATCH_PROTOCOL
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Launch Terminal Inquiry Form
              </h3>

              <p className="text-gray-300 font-light text-base leading-relaxed">
                Click below to open our mechanical typing CLI interface and input your project details directly into our dispatch pipeline.
              </p>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setIsCliOpen(true)}
                className="w-full sm:w-auto glow-border bg-primary/20 border border-primary/60 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-primary/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all group cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
                <span>Open Terminal CLI</span>
                <Terminal className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Direct Info Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl space-y-8"
          >
            <h4 className="text-xl font-bold text-white border-b border-white/10 pb-4 tracking-wide">
              DIRECT CHANNELS
            </h4>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase">EMAIL DISPATCH</p>
                  <p className="text-white font-medium text-base mt-0.5">ventaratechlk@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase">HEADQUARTERS</p>
                  <p className="text-white font-medium text-base mt-0.5">Kandy, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase">AVAILABILITY</p>
                  <p className="text-white font-medium text-base mt-0.5">Global Remote Engineering</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shrink-0">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500 uppercase">PHONE</p>
                  <p className="text-white font-medium text-base mt-0.5">+94 74 1387 807</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
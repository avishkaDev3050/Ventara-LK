"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, ArrowUp, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // React Icons වලින් Brand Icons import කිරීම
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030712] pt-20 pb-12 px-4 md:px-8 z-10 overflow-hidden font-sans">
      
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Info & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black tracking-wider text-white">
                VENTARA<span className="text-primary font-bold">.LK</span>
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-cyan-300">
                SYS_VER_2.6
              </span>
            </div>

            <p className="text-gray-400 font-light text-sm leading-relaxed max-w-md">
              Bespoke digital software engine specializing in ultra-fast Next.js web applications, cross-platform Flutter mobile architectures, and enterprise cloud backends.
            </p>

            {/* Live Terminal System Status Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-[#0B0F19]/90 border border-white/10 text-xs font-mono">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-gray-300">SYSTEM NODES:</span>
              <span className="text-emerald-400 font-bold">100% OPERATIONAL // 24ms</span>
            </div>
          </div>

          {/* Navigation Links (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" /> SYSTEM DIRECTORY
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                { name: "Services", href: "#services" },
                { name: "Tech Stack Matrix", href: "#tech" },
                { name: "Deployed Projects", href: "#projects" },
                { name: "About Ventara", href: "#about" },
                { name: "Knowledge Base (FAQs)", href: "#faqs" },
                { name: "Contact Matrix", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-gray-400 hover:text-cyan-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">&gt;</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Contact Info (Col 9-12) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> DISPATCH CHANNELS
            </h4>

            <p className="text-gray-400 text-sm font-light">
              Connect with our development pipeline directly through social channels or send a command log.
            </p>

            {/* Social Icons Grid */}
            <div className="flex items-center gap-3">
              {[
                { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
                { icon: <FaLinkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <FaTwitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
                { icon: <Mail className="w-5 h-5" />, href: "mailto:contact@ventara.lk", label: "Email" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-300 hover:border-primary/50 hover:bg-primary/10 transition-all shadow-[0_0_15px_rgba(0,240,255,0.05)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Security Badge */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-gray-500 pt-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>MILITARY-GRADE DATA ENCRYPTION AUDITED</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-gray-300 font-bold">VENTARA LK</span>. All systems deployed.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-300 hover:border-primary/40 hover:bg-primary/10 transition-all group cursor-pointer"
          >
            <span>RETURN TO TOP</span>
            <ArrowUp className="w-4 h-4 text-primary group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
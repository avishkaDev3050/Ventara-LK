"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Tech Stack", href: "#tech" }, 
  { name: "Projects", href: "#projects" },
  { name: "About us", href: "#about" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar({ isLoading }: { isLoading?: boolean }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth Scroll Handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (isLoading) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-5 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative pointer-events-auto">
        
        {/* LEFT CURTAIN PANEL */}
        <motion.div
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="glass-panel rounded-2xl md:rounded-3xl px-5 md:px-7 py-3 flex items-center gap-6 border border-primary/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] bg-[#0B0F19]/90 backdrop-blur-xl"
        >
          {/* Brand Name */}
          <Link 
            href="#home" 
            onClick={(e) => handleScroll(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <span className="text-lg md:text-xl font-black tracking-wider text-white">
              VENTARA<span className="text-primary font-bold">.LK</span>
            </span>
          </Link>

          {/* Nav Items (Left Side: Home, Services, Tech Stack) */}
          <div className="hidden lg:flex items-center gap-1 relative">
            {navLinks.slice(0, 3).map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {hoveredIdx === idx && (
                  <motion.div
                    layoutId="curtainHover"
                    className="absolute inset-0 bg-primary/20 rounded-xl border border-primary/40"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* CENTER LOGO NODE */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1.0, delay: 1.2, ease: "backOut" }}
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-14 h-14 rounded-2xl glass-panel border border-primary/50 shadow-[0_0_30px_rgba(0,240,255,0.5)] bg-[#0B0F19]/95 z-20 cursor-pointer"
          onClick={(e) => handleScroll(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#home")}
        >
          <img 
            src="/logo.png" 
            alt="Ventara LK Logo" 
            className="w-9 h-9 object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] animate-pulse" 
          />
        </motion.div>

        {/* RIGHT CURTAIN PANEL */}
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="glass-panel rounded-2xl md:rounded-3xl px-5 md:px-7 py-3 flex items-center gap-6 border border-secondary/40 shadow-[0_0_30px_rgba(112,0,255,0.2)] bg-[#0B0F19]/90 backdrop-blur-xl"
        >
          {/* Nav Items (Right Side: Projects, About us, FAQs, Contact Us) */}
          <div className="hidden lg:flex items-center gap-1 relative">
            {navLinks.slice(3).map((link, idx) => {
              const actualIdx = idx + 3;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  onMouseEnter={() => setHoveredIdx(actualIdx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {hoveredIdx === actualIdx && (
                    <motion.div
                      layoutId="curtainHover"
                      className="absolute inset-0 bg-secondary/20 rounded-xl border border-secondary/40"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 max-w-7xl mx-auto glass-panel rounded-2xl p-6 border border-primary/30 bg-[#030712]/95 backdrop-blur-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-base font-medium text-gray-300 hover:text-primary transition-colors py-2 border-b border-white/5 cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
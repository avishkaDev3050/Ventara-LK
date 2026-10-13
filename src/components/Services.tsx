"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Smartphone,
  Globe,
  Server,
  Database,
  Cpu,
  ShieldCheck,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import React from "react";

const servicesList = [
  {
    icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
    title: "Mobile App Architecture",
    description:
      "High-performance, cross-platform mobile ecosystems engineered with Flutter & Native stacks for seamless user experiences.",
    tag: "FLUTTER / MOBILE",
    code: "MOD_01",
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Next-Gen Web Platforms",
    description:
      "Blazing fast, SEO-optimized web applications built using Next.js, React, and Tailwind CSS with futuristic UIs.",
    tag: "NEXT.JS / WEB",
    code: "MOD_02",
  },
  {
    icon: <Server className="w-8 h-8 text-secondary" />,
    title: "Enterprise Backends & APIs",
    description:
      "Robust microservices, secure REST/GraphQL architectures, and real-time database management systems.",
    tag: "NODE / NESTJS",
    code: "MOD_03",
  },
  {
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    title: "Cloud & Database Design",
    description:
      "Scalable cloud infrastructures, automated pipelines, and highly optimized database configurations (MySQL, Firebase, Prisma).",
    tag: "CLOUD / DB",
    code: "MOD_04",
  },
  {
    icon: <Cpu className="w-8 h-8 text-cyan-300" />,
    title: "Desktop Applications",
    description:
      "Cross-platform high-performance desktop tools and utilities built using Electron, C++, and JavaScript frameworks.",
    tag: "ELECTRON / C++",
    code: "MOD_05",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
    title: "Security & Optimization",
    description:
      "Military-grade data encryption audits, penetration testing matrices, and speed index optimization for maximum scale.",
    tag: "SECURITY / AUDIT",
    code: "MOD_06",
  },
];

// Interactive 3D Card Component with Tilt & Mouse Effects
function ServiceCard({
  service,
  index,
}: {
  service: (typeof servicesList)[0];
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl p-[1px] group cursor-pointer"
    >
      {/* Animated Glowing Border Gradient on Hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-cyan-400 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-cyan-400 to-secondary opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

      {/* Main Glass Card Container */}
      <div className="relative h-full glass-panel bg-[#0B0F19]/90 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 group-hover:border-transparent transition-all duration-300 flex flex-col justify-between overflow-hidden">
        
        {/* Cyber Laser Beam Scanner Line Effect */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
          animate={{
            top: ["0%", "100%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
        />

        {/* Ambient Corner Glow */}
        <div className="absolute -right-20 -top-20 w-44 h-44 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-500 pointer-events-none" />

        <div style={{ transform: "translateZ(30px)" }}>
          {/* Header Bar inside Card */}
          <div className="flex items-center justify-between mb-8">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-colors"
            >
              {service.icon}
            </motion.div>

            <span className="text-[11px] font-mono tracking-wider text-cyan-300/80 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-1.5">
              <Zap className="w-3 h-3 text-cyan-400" /> {service.tag}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
            <span>{service.title}</span>
            <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed font-light">
            {service.description}
          </p>
        </div>

        {/* Bottom Status Terminal Line */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-500"
        >
          <span className="text-gray-400 font-bold">{service.code}</span>
          <span className="group-hover:text-cyan-400 text-gray-600 transition-colors flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-cyan-400 group-hover:animate-ping inline-block" />
            <span className="group-hover:inline hidden">STATUS // ONLINE</span>
            <span className="group-hover:hidden inline">SYSTEM IDLE</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto z-10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 mb-6 bg-[#0B0F19]/80">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
              CORE CAPABILITIES & MATRIX
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            Architecting Solutions for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary drop-shadow-[0_0_30px_rgba(0,240,255,0.4)]">
              Digital Frontier
            </span>
          </h2>

          <p className="text-gray-400 mt-5 text-base sm:text-lg font-light leading-relaxed">
            High-tier bespoke software architectures, next-gen mobile platforms, and enterprise backends designed for ultra-scale.
          </p>
        </motion.div>
      </div>

      {/* Services Grid with 3D Tilt & Scanner Effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {servicesList.map((service, idx) => (
          <ServiceCard key={service.code} service={service} index={idx} />
        ))}
      </div>
    </section>
  );
}
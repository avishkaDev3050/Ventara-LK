"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, ExternalLink, Sparkles } from "lucide-react";

const projectsList = [
  {
    title: "Incarnate Life",
    category: "WEB PLATFORM / WELLNESS",
    description:
      "A modern, high-performance web solution engineered with seamless digital UI, interactive content delivery, and ultra-fast responsive layouts.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80", // Replace with real screenshot or image
    link: "https://incarnate.life/",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Ajantha Tools & Machinery",
    category: "E-COMMERCE / INDUSTRIAL",
    description: "Industrial equipment and machinery digital storefront featuring responsive catalog navigation and high-scale performance optimization.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80", // Replace with real screenshot or image
    link: "https://toolsnamapi.lk/",
    tech: ["Web Architecture", "UI/UX", "Responsive System"],
  },
  {
    title: "Kandy Community Church",
    category: "COMMUNITY PLATFORM",
    description: "Bespoke web ecosystem featuring community history, belief matrices, online donation hubs, and event management architectures.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80", // Replace with real screenshot or image
    link: "https://www.kandycommunitychurch.lk/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto z-10">
      
      {/* Background Orbs & Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/30 mb-6 bg-[#0B0F19]/80 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
              FEATURED DISPATCHES & PORTFOLIO
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Engineered & Deployed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              Digital Artifacts
            </span>
          </h2>

          <p className="text-gray-400 mt-5 text-base sm:text-lg font-light leading-relaxed">
            Explore our recent client implementations, bespoke web architectures, and production-ready enterprise systems.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projectsList.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="glass-panel bg-[#0B0F19]/90 border border-white/10 rounded-3xl overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(0,240,255,0.2)]"
          >
            <div>
              {/* Image Container with Cyber Frame */}
              <div className="relative h-56 w-full overflow-hidden bg-black/50 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                
                {/* Cyber Overlay Badge */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full border border-white/20 bg-black/70 text-[10px] font-mono text-cyan-300 backdrop-blur-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* View Live Node Action Button */}
            <div className="p-6 sm:p-8 pt-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl bg-primary/10 border border-primary/40 text-cyan-300 font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/20 hover:border-primary hover:text-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.15)] group/btn"
              >
                <span>View Live Node</span>
                <ArrowUpRight className="w-4 h-4 text-primary group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
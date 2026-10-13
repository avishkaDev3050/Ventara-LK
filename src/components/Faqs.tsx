"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Terminal } from "lucide-react";

const faqList = [
  {
    question: "Ventara LK ea rakamana services andistundi?",
    answer:
      "Memu Next.js & React tho ultra-fast Web Platforms, Flutter tho Cross-Platform Mobile Apps, NestJS/Node.js backend architectures, mariyu Electron/C# desktop applications ni build chestamu.",
  },
  {
    question: "Maa project completion ki entha samayam padutundi?",
    answer:
      "Project complexity meeda aadhara padi untundi. Normal business websites 1-2 weeks lo, complex enterprise applications & mobile apps 3-6 weeks lo deliver chestamu.",
  },
  {
    question: "Project development process ela untundi?",
    answer:
      "Mee requirement analysis thoti start chesi, System Architecture Design, UI/UX Prototyping, Agile Development, Security Testing mariyu Final Deployment varaku complete execution chestamu.",
  },
  {
    question: "Custom requirements ki post-launch support untundha?",
    answer:
      "Avunu! Memu dedicated maintenance, bug fixes, performance monitoring mariyu future feature upgrades kosam continuous support plans andistamu.",
  },
  {
    question: "Existing legacy systems ni migrate / update chestara?",
    answer:
      "Kandipaga! Mee old codebase ni modern Next.js, Cloud backends mariyu scalable UI frameworks loki smooth ga zero-downtime tho migrate chestamu.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-32 px-4 md:px-8 max-w-5xl mx-auto z-10">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-secondary/30 mb-6 bg-[#0B0F19]/80 shadow-[0_0_20px_rgba(112,0,255,0.15)]">
            <HelpCircle className="w-4 h-4 text-secondary" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">
              KNOWLEDGE BASE // QUERY MATRIX
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              Questions
            </span>
          </h2>

          <p className="text-gray-400 mt-5 text-base sm:text-lg font-light leading-relaxed">
            Ventara LK services, project timelines mariyu execution methodology gurinchi ikkada telusukondi.
          </p>
        </motion.div>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 relative z-10">
        {faqList.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel bg-[#0B0F19]/90 border border-white/10 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-lg font-bold text-white tracking-wide">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`p-2 rounded-xl border border-white/10 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-primary/20 border-primary/40 text-cyan-300" : "text-gray-400"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-white/5 text-gray-300 font-light text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
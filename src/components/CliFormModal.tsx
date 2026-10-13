"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal, CheckCircle2, CornerDownLeft } from "lucide-react";

interface CliFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CliFormModal({ isOpen, onClose }: CliFormModalProps) {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [currentInput, setCurrentInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mechanical Typing Sound Generator (Web Audio API)
  const playTypeSound = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;

      if (!AudioCtx) return;

      const audioCtx = new AudioCtx();

      // AudioContext එක 'suspended' තත්වයේ තිබේ නම් එය resume කරයි
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      // Typing sound waveform & pitch adjustment
      osc.type = "sine";
      osc.frequency.setValueAtTime(
        600 + Math.random() * 300,
        audioCtx.currentTime
      );

      // Sound Volume Control
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioCtx.currentTime + 0.05
      );

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (e) {
      console.error("Audio error:", e);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setStep(0);
      setFormData({ name: "", email: "", contact: "" });
      setCurrentInput("");
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentInput(e.target.value);
    playTypeSound(); // Type කරද්දී sound එක play වේ
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && currentInput.trim() !== "") {
      playTypeSound(); // Enter ඔබද්දීත් sound එක play වේ
      if (step === 0) {
        setFormData((prev) => ({ ...prev, name: currentInput.trim() }));
        setCurrentInput("");
        setStep(1);
      } else if (step === 1) {
        setFormData((prev) => ({ ...prev, email: currentInput.trim() }));
        setCurrentInput("");
        setStep(2);
      } else if (step === 2) {
        setFormData((prev) => ({ ...prev, contact: currentInput.trim() }));
        setCurrentInput("");
        setStep(3);
      }
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log("Submitted Client Data:", formData);

    // Auto Close after 1.5 seconds
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-2xl glass-panel bg-[#050B14]/95 border border-emerald-500/40 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.25)] overflow-hidden font-mono text-base relative"
            onClick={() => inputRef.current?.focus()}
          >
            {/* Terminal Header Bar */}
            <div className="bg-[#0B132B] px-5 py-3.5 border-b border-emerald-500/20 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div
                  className="w-3.5 h-3.5 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-500 transition-colors"
                  onClick={onClose}
                />
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs md:text-sm text-emerald-400/90 flex items-center gap-2 font-bold tracking-wide">
                  <Terminal className="w-4 h-4 text-emerald-400" /> root@ventara:~# initiate_project
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Terminal Window Content */}
            <div className="p-6 md:p-8 min-h-[420px] max-h-[80vh] overflow-y-auto relative flex flex-col justify-between">
              
              {/* Background Logo Watermark */}
              <div className="absolute inset-0 flex items-center justify-center p-12 opacity-10 pointer-events-none select-none">
                <img
                  src="/logo.png"
                  alt="Ventara Watermark"
                  className="w-72 h-72 object-contain filter drop-shadow-[0_0_30px_rgba(16,185,129,0.8)]"
                />
              </div>

              {/* Terminal Logs & Prompts */}
              <div className="space-y-6 relative z-10 text-emerald-400">
                <p className="text-gray-400 text-sm leading-relaxed border-b border-emerald-500/10 pb-3">
                  [SYSTEM INITIALIZED] Ventara Interactive Terminal
                  <br />
                  Type response and press <kbd className="px-1.5 py-0.5 bg-emerald-950 border border-emerald-500/40 rounded text-emerald-300 font-bold text-xs">ENTER</kbd>
                </p>

                {/* Step 0: Name Output */}
                {step >= 0 && (
                  <div className="space-y-1">
                    <p className="text-emerald-300 text-sm md:text-base font-semibold">
                      <span className="text-cyan-400">root@ventara:~$</span> enter --client-name
                    </p>
                    {step > 0 ? (
                      <p className="text-white pl-4 text-base md:text-lg font-medium text-emerald-200">
                        &gt; {formData.name}
                      </p>
                    ) : (
                      <div className="flex items-center gap-2 pl-4 mt-1">
                        <span className="text-cyan-400 font-bold text-lg">&gt;</span>
                        <input
                          ref={inputRef}
                          type="text"
                          value={currentInput}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyDown}
                          placeholder="e.g. John Doe"
                          className="bg-transparent border-none outline-none text-white text-base md:text-lg w-full caret-emerald-400 placeholder:text-gray-600 font-medium"
                          autoFocus
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Step 1: Email Output */}
                {step >= 1 && (
                  <div className="space-y-1">
                    <p className="text-emerald-300 text-sm md:text-base font-semibold">
                      <span className="text-cyan-400">root@ventara:~$</span> enter --email-address
                    </p>
                    {step > 1 ? (
                      <p className="text-white pl-4 text-base md:text-lg font-medium text-emerald-200">
                        &gt; {formData.email}
                      </p>
                    ) : (
                      <div className="flex items-center gap-2 pl-4 mt-1">
                        <span className="text-cyan-400 font-bold text-lg">&gt;</span>
                        <input
                          ref={inputRef}
                          type="email"
                          value={currentInput}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyDown}
                          placeholder="e.g. john@example.com"
                          className="bg-transparent border-none outline-none text-white text-base md:text-lg w-full caret-emerald-400 placeholder:text-gray-600 font-medium"
                          autoFocus
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Contact Number Output */}
                {step >= 2 && (
                  <div className="space-y-1">
                    <p className="text-emerald-300 text-sm md:text-base font-semibold">
                      <span className="text-cyan-400">root@ventara:~$</span> enter --contact-number
                    </p>
                    {step > 2 ? (
                      <p className="text-white pl-4 text-base md:text-lg font-medium text-emerald-200">
                        &gt; {formData.contact}
                      </p>
                    ) : (
                      <div className="flex items-center gap-2 pl-4 mt-1">
                        <span className="text-cyan-400 font-bold text-lg">&gt;</span>
                        <input
                          ref={inputRef}
                          type="text"
                          value={currentInput}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyDown}
                          placeholder="e.g. +94 77 123 4567"
                          className="bg-transparent border-none outline-none text-white text-base md:text-lg w-full caret-emerald-400 placeholder:text-gray-600 font-medium"
                          autoFocus
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Submission Completed Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/60 flex items-center gap-3 text-emerald-300 mt-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <p className="font-bold text-sm tracking-wide">PAYLOAD DISPATCHED SUCCESSFULLY!</p>
                      <p className="text-xs text-emerald-400/80">Closing terminal session...</p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Submit Button Bar */}
              {step >= 3 && !isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-6 mt-4 border-t border-emerald-500/20 relative z-10 flex items-center justify-between"
                >
                  <p className="text-xs md:text-sm text-gray-400 font-sans">Ready to execute session dispatch?</p>
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-bold text-xs md:text-sm flex items-center gap-2 hover:bg-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95 cursor-pointer"
                  >
                    <span>EXECUTE_SUBMIT</span>
                    <CornerDownLeft className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
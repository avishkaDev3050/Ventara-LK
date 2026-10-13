"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Faqs from "@/components/Faqs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <main className="min-h-screen bg-[#030712] text-white relative overflow-hidden">
        {/* Navbar */}
        <Navbar isLoading={isLoading} />

        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Tech Stack Matrix Section */}
        <TechStack />

        {/* Projects Section */}
        <Projects />

        {/* About Us Section */}
        <About />

        {/* FAQs Section */}
        <Faqs />

        {/* Contact Us Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
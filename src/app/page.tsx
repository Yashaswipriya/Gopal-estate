"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import MenuOverlay from "@/components/MenuOverlay";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import LandingProperties from "@/components/LandingProperties";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        if (window.scrollY > heroHeight) {
          setIsNavbarVisible(true);
        } else {
          setIsNavbarVisible(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="w-full">
      <motion.div
        className="fixed top-0 left-0 w-full z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={isNavbarVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </motion.div>
      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
      <div ref={heroRef}>
        <Hero />
      </div>

      <section id="about">
        <StatsSection />
      </section>
      
      <section>
        <LandingProperties />
      </section>
      
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
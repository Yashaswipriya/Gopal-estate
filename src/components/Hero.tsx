"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },        
  { label: "Properties", href: "/properties" },
  { label: "Contact", href: "/#footer" },    
];

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero Video */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/*Menu + Logo + Name */}
      <div className="absolute top-6 left-0 w-full flex items-center justify-center px-6 z-50">
        <div className="absolute left-6">
          <button
            className="w-8 h-8 flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <motion.span
              className="absolute block h-[1px] w-full bg-white origin-center"
              animate={
                menuOpen
                  ? { rotate: 45, y: 0, backgroundColor: "#000000" }
                  : { rotate: 0, y: -4, backgroundColor: "#ffffff" }
              }
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute block h-[1px] w-full bg-white origin-center"
              animate={
                menuOpen
                  ? { rotate: -45, y: 0, backgroundColor: "#000000" }
                  : { rotate: 0, y: 4, backgroundColor: "#ffffff" }
              }
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
        <Link href="/">
          <div className="flex items-center justify-center space-x-2 invert fill-white">
            <Image src="/logo.png" alt="Gopal Estate Logo" width={100} height={100}/>
          </div>
        </Link>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="text-white text-xl"
        >
          <ChevronDown size={40}/>
        </motion.div>
      </div>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute inset-0 bg-white flex flex-col items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-15 font-bold text-4xl text-black items-center">
              {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:underline hover:scale-105 transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

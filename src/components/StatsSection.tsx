"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Portfolio value", value: 20.0, suffix: "Crore", prefix: "" },
  { label: "SQ. FT. of portfolio", value: 13.4, suffix: "Lakh", prefix: "" },
  { label: "SQ. FT. in development", value: 2.3, suffix: "Lakh", prefix: "" },
];

export default function StatsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.value;
        const duration = 1500;
        const increment = end / (duration / 16);
        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          setCounters((prev) => {
            const copy = [...prev];
            copy[i] = parseFloat(start.toFixed(1));
            return copy;
          });
        }, 16);
      });

      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="py-24 bg-gray-50 flex flex-col items-center">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center items-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={`relative ${
              i < stats.length - 1 ? "sm:border-r sm:border-gray-300" : ""
            } pr-6 sm:pr-8`}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.3, duration: 0.8 },
              },
            }}
          >
            {/* Big Number */}
            <p className="text-5xl sm:text-4xl 2xl:text-5xl tracking-wider">
              {stat.prefix}
              {counters[i]} {stat.suffix}
            </p>
            {/* Label */}
            <p className="text-lg 2xl:text-2xl uppercase tracking-wider font-body mt-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tagline Below Stats */}
      <div className="mt-[8rem] text-center px-6">
        <h3 className="text-xl sm:text-2xl font-heading tracking-wide leading-relaxed">
          DISCOVER NEW AND RESALE LUXURY PROPERTIES, <br />
          ALL RERA-VERIFIED, IN THE HEART OF GURUGRAM.
        </h3>

         {/* Responsive Video Section */}
     <div className="relative w-screen h-screen overflow-hidden">
  <video
    className="absolute top-0 left-0 w-full h-full object-contain"
    src="/Gopal Estate.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
</div>

      </div>
    </section>
  );
}

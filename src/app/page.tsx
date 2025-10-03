"use client";
 import Hero from "@/components/Hero";
 import StatsSection from "@/components/StatsSection";
 import Footer from "@/components/Footer";
import LandingProperties from "@/components/LandingProperties";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Hero />
      <section>
        <StatsSection />
      </section>
      <section>
        <LandingProperties />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}
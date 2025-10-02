"use client";
 import Hero from "@/components/Hero";
 import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Hero />
      <section>
        <StatsSection />
      </section>
    </main>
  )
}
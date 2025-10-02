"use client";
 import Hero from "@/components/Hero";
 import StatsSection from "@/components/StatsSection";
 import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Hero />
      <section>
        <StatsSection />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}
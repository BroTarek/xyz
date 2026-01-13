"use client";

import { Navbar } from "@/components/modules/Navbar";
import { Hero } from "@/components/modules/Hero";
import { SponsorsBanner } from "@/components/modules/SponsorsBanner";
import { Testimonials } from "@/components/modules/Testimonials";
import { PricingTable } from "@/components/modules/PricingTable";
import { FAQ } from "@/components/modules/FAQ";
import { Footer } from "@/components/modules/Footer";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Home() {
  const revealRef = useScrollReveal();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main ref={revealRef as any} className="flex-1">
        <Hero />
        <div className="reveal">
          <SponsorsBanner />
        </div>
        <div className="reveal">
          <Testimonials />
        </div>
        <div className="reveal">
          <PricingTable />
        </div>
        <div className="reveal">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}

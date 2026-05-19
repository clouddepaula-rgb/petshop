"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Schema } from "@/app/schema";
import { Hero } from "@/sections/Hero";
import { Philosophy } from "@/sections/Philosophy";
import { Services } from "@/sections/Services";
import { BookingSection } from "@/sections/BookingSection";
import { Testimonials } from "@/sections/Testimonials";
import { FaqSection } from "@/sections/FaqSection";

export default function Home() {
  // Initialize global GPU-accelerated scroll reveal observer
  useScrollReveal();

  return (
    <>
      {/* Schema.org Local SEO Markup */}
      <Schema />

      {/* Main Layout */}
      <div className="flex flex-col min-h-screen bg-dark overflow-x-hidden text-foreground">
        
        {/* Responsive Header */}
        <Navbar />

        {/* Content Sections */}
        <main className="flex-grow">
          {/* Hero Intro */}
          <Hero />

          {/* Philosophy Concepts */}
          <Philosophy />

          {/* Premium Bento Services */}
          <Services />

          {/* Interactive Pricing Scheduler */}
          <BookingSection />

          {/* Verified Customer Testimonials */}
          <Testimonials />

          {/* FAQ Accordion */}
          <FaqSection />
        </main>

        {/* Localized SEO Footer */}
        <Footer />
      </div>
    </>
  );
}

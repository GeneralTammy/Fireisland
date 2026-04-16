"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import FeaturedListings from "@/components/FeaturedListings";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import FireIslandSection from "@/components/FireIslandSection";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-sunset selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <IntroSection />
        <FeaturedListings />
        <WhyWorkWithUs />
        <ServicesSection />
        <EventsSection />
        <FireIslandSection />
      </main>

      <Footer />
    </div>
  );
}

"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Features from "@/components/Features";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CtaBanner2 from "@/components/CtaBanner2";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <div>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      {/* <CtaBanner2 /> */}
      <CtaBanner />
      <Footer />
    </div>
  );
}

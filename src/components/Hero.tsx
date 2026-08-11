"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const imgSectionHero = "/assets/hero-bg.png";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Pin the Hero section so it stays fixed while the next section scrolls over it
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=100%", // Pin for 100% of the viewport height
      pin: true,
      pinSpacing: false, // Do not add spacing, allow the next section to overlap naturally
    });

    // 2. Animate the content: scale down, fade out, and move slightly up (parallax)
    gsap.to(contentRef.current, {
      scale: 0.9,
      opacity: 0,
      y: -50,
      ease: "none", // Critical for scrub
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=80%",
        scrub: true,
      },
    });

    // 3. Darken the background overlay as it's being scrolled over
    gsap.to(bgRef.current, {
      opacity: 0.8, // From default 0.5 to 0.8
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div>
      <section
        id="home"
        ref={containerRef}
        className="relative w-full min-h-screen overflow-hidden"
        data-name="section.hero"
      >
        {/* Background image */}
        <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt=""
              className="absolute w-full max-w-none object-cover"
              style={{ height: "133%", top: "-16%" }}
              src={imgSectionHero}
            />
          </div>
          <div ref={bgRef} className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="relative z-10 mx-auto w-full min-h-screen px-5 flex flex-col justify-center"
          style={{ paddingTop: "clamp(80px, 12vw, 150px)", paddingBottom: "clamp(160px, 15vw, 220px)" }}
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hero-badge mb-3"
          >
            <span className="inline-block bg-[#0a5b34]/20 border border-[#0a5b34] text-[#59d677] text-xs font-semibold px-3 py-1 rounded-full tracking-wider uppercase">
              Sistem Bengkel Modern
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hero-title mb-4"
          >
            <h1
              className="font-bold italic text-white leading-tight"
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
              }}
            >
              Sistem Manajemen<br />
              <span className="text-[#59d677]">Bengkel</span> Terintegrasi
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="hero-subtitle mb-8 max-w-150"
          >
            <p
              className="text-[#ccc] leading-relaxed"
              style={{ fontSize: "clamp(14px, 1.8vw, 17px)" }}
            >
              Arthasee menyimpan data pelanggan, riwayat kendaraan, dan catatan servis bengkel Anda
              di satu tempat — lalu memberi tahu unit mana yang sudah waktunya servis lagi.
              Sesederhana itu, dan sudah bisa dipakai hari ini.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="hero-buttons flex flex-wrap gap-3"
          >
            <a
              href="#"
              className="btn-press bg-[#0a5b34] text-white font-semibold text-sm px-6 py-3 rounded-[5px] inline-flex items-center gap-2"
            >
              MULAI GRATIS <span>→</span>
            </a>
            <a
              href="#"
              className="btn-press border-2 border-white text-white font-semibold text-sm px-6 py-3 rounded-[5px] inline-flex items-center"
              style={{
                '--hover-bg': '#fff',
                '--hover-fg': '#111'
              } as React.CSSProperties}
            >
              LIHAT YANG SUDAH JALAN
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const imgSectionCtaBanner = "/assets/cta-bg.png";

export default function CtaBanner() {
  const containerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (bgRef.current && containerRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // when the top of the container hits the bottom of the viewport
          end: "bottom top", // when the bottom of the container hits the top of the viewport
          scrub: true,
        },
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-20 px-5 overflow-hidden" data-name="section.cta-banner">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img ref={bgRef} alt="" className="absolute w-full h-[150%] max-w-none object-cover top-[-25%]" src={imgSectionCtaBanner} />
        </div>
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] flex flex-col items-center gap-8 text-center">
        <div className="reveal">
          <h2
            className="font-bold uppercase text-white mb-2"
            style={{
              fontSize: "clamp(24px, 4vw, 40px)",
            }}
          >
            Coba di bengkel Anda
          </h2>
          <p
            className="text-white/80 capitalize"
            style={{ fontSize: "clamp(14px, 1.6vw, 16px)" }}
          >
            Gratis untuk mulai. Tidak perlu kartu kredit.
          </p>
        </div>

        <a
          href="#"
          className="reveal btn-press stagger-2 relative overflow-hidden bg-[#0a5b34] text-white text-[13px] font-semibold px-8 py-3 rounded-[5px]"
          
        >
          UJI COBA GRATIS
        </a>
      </div>
    </section>
  );
}

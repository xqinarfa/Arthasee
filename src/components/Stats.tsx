"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const imgSubtract = "/assets/stats-subtract-bg.svg";

const stats = [
  { target: 10, suffix: "", unit: "+", label: "YEARS OF SERVICE" },
  { target: 50, suffix: "K", unit: "+", label: "HAPPY CUSTOMERS" },
  { target: 99, suffix: "", unit: "%", label: "CLIENT SATISFACTION" },
];

function AnimatedStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (numberRef.current) {
      gsap.fromTo(
        numberRef.current,
        { innerText: 0 },
        {
          innerText: stat.target,
          duration: 2,
          delay: 0.8 + (index * 0.2), // Start after hero animations
          ease: "power2.out",
          snap: { innerText: 1 },
        }
      );
    }
  });

  return (
    <div
      className={`reveal flex flex-col items-start gap-1 stagger-${index + 1}`}
      data-name="div.stat-item"
    >
      <div
        className="font-extrabold italic text-left flex items-baseline"
        style={{
          fontSize: "clamp(36px, 5vw, 48px)",
        }}
      >
        <span className="text-[#111]">
          <span ref={numberRef}>0</span>{stat.suffix}
        </span>
        <span className="text-[#0a5b34] ml-1">{stat.unit}</span>
      </div>
      <p
        className="text-[#111] text-[13px] font-normal text-left tracking-wide uppercase"
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="relative w-full -mt-40.5 z-20"
      data-name="section.stats"
    >
      {/* Decorative SVG */}
      <div className="absolute top-0 left-0 w-full h-40.5 pointer-events-none overflow-hidden z-0">
        <img alt="" className="w-full h-full object-cover object-right" src={imgSubtract} />
      </div>

      {/* Solid background below the SVG to cover the pinned Hero */}
      <div className="absolute top-40.5 left-0 w-full h-[calc(100%-162px)] bg-white z-0" />

      <div className="relative mx-auto w-full px-16 py-10 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

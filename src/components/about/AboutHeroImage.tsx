"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutHeroImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Decorative frame — draws itself (desktop only) */}
      <div
        className={`absolute -inset-3 rounded-2xl hidden md:block transition-all duration-1000 ease-[cubic-bezier(.23,1,.32,1)] ${
          revealed
            ? "opacity-100 scale-100"
            : "opacity-0 scale-[0.97]"
        }`}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 400 560"
          fill="none"
          preserveAspectRatio="none"
        >
          <rect
            x="1"
            y="1"
            width="398"
            height="558"
            rx="16"
            stroke="#C5A55A"
            strokeWidth="1.5"
            strokeDasharray="1920"
            strokeDashoffset={revealed ? "0" : "1920"}
            className="transition-[stroke-dashoffset] duration-[2s] ease-[cubic-bezier(.23,1,.32,1)]"
            style={{ transitionDelay: "0.2s" }}
          />
        </svg>
      </div>

      {/* Floating brass accent — hidden on mobile to avoid overflow */}
      <div
        className={`absolute -right-6 -top-6 hidden md:block h-20 w-20 rounded-full border border-brass/25 transition-all duration-1000 ${
          revealed
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-75"
        }`}
        style={{ transitionDelay: "0.8s" }}
      />
      <div
        className={`absolute -left-4 bottom-12 hidden md:block h-12 w-12 rounded-full bg-rose/15 blur-sm transition-all duration-1000 ${
          revealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "1s" }}
      />

      {/* Image with horizontal mask wipe */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className={`transition-[clip-path] duration-[1.4s] ease-[cubic-bezier(.23,1,.32,1)] ${
            revealed
              ? "[clip-path:inset(0_0_0_0)]"
              : "[clip-path:inset(0_100%_0_0)]"
          }`}
          style={{ transitionDelay: "0.4s" }}
        >
          <Image
            src="/images/irene-about.jpeg"
            alt="Irene Ong"
            width={600}
            height={900}
            priority
            className={`h-auto w-full object-cover transition-transform duration-[1.8s] ease-[cubic-bezier(.23,1,.32,1)] ${
              revealed ? "scale-100" : "scale-110"
            }`}
            style={{ transitionDelay: "0.4s" }}
          />
        </div>

        {/* Sweep overlay — brass flash that travels across */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-brass/15 to-transparent transition-transform duration-[1.2s] ease-[cubic-bezier(.23,1,.32,1)] ${
            revealed ? "translate-x-[150%]" : "-translate-x-[150%]"
          }`}
          style={{ transitionDelay: "0.5s" }}
        />
      </div>
    </div>
  );
}

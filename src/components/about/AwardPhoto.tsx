"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AwardPhoto() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const img = imgRef.current;
    if (!wrapper || !img) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isMobile || prefersReduced) return;

    function handleScroll() {
      const rect = wrapper!.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      const delta = (center - viewCenter) / window.innerHeight;

      const rotateX = delta * -6;
      const translateZ = Math.abs(delta) * -30;
      const scale = 1 + Math.abs(delta) * 0.03;

      wrapper!.style.transform = `perspective(1200px) rotateX(${rotateX}deg) translateZ(${translateZ}px)`;

      const imgShift = delta * -25;
      img!.style.transform = `translateY(${imgShift}px) scale(${scale})`;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Shadow that lifts with the card */}
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-navy/5 blur-2xl" />

      {/* Brass corner accents — desktop only */}
      <div className="absolute -left-2 -top-2 hidden md:block h-8 w-8 border-l-2 border-t-2 border-brass/30 rounded-tl-lg" />
      <div className="absolute -right-2 -top-2 hidden md:block h-8 w-8 border-r-2 border-t-2 border-brass/30 rounded-tr-lg" />
      <div className="absolute -left-2 -bottom-2 hidden md:block h-8 w-8 border-l-2 border-b-2 border-brass/30 rounded-bl-lg" />
      <div className="absolute -right-2 -bottom-2 hidden md:block h-8 w-8 border-r-2 border-b-2 border-brass/30 rounded-br-lg" />

      <div
        ref={wrapperRef}
        className="overflow-hidden rounded-2xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          ref={imgRef}
          src="/images/awards-night.jpeg"
          alt="Irene at Strategic Partners Awards Night 2026"
          width={1200}
          height={800}
          className="h-auto w-full object-cover will-change-transform"
        />
      </div>
    </div>
  );
}

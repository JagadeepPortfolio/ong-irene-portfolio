"use client";

import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLImageElement>(null);

  const handleScroll = useCallback(() => {
    const img = parallaxRef.current;
    if (!img) return;
    const y = window.scrollY * 0.15;
    img.style.transform = `translateY(${y}px)`;
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      imageRef.current?.classList.add("revealed");
      textRef.current?.classList.add("animate");
    }, 200);

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isMobile && !prefersReduced) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className="relative min-h-svh bg-parchment pt-20">
      <div className="mx-auto flex max-w-[80rem] flex-col items-center gap-10 px-5 py-16 md:flex-row md:gap-16 md:px-10 md:py-24 lg:px-20">
        {/* Text */}
        <div className="hero-stagger order-2 flex-[55] md:order-1" ref={textRef}>
          <p className="overline text-brass">Financial Planning Consultant</p>

          <h1 className="mt-4 max-w-[14ch] text-[clamp(2.5rem,5vw,4rem)] font-normal text-navy">
            Your future, thoughtfully planned.
          </h1>

          <p className="mt-6 max-w-[48ch] text-lg text-slate">
            Personalised financial strategies for individuals and families in
            Singapore.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <MagneticButton
              href="https://wa.me/6596502430?text=Hi%20Irene%2C%20I%27d%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-brass px-7 py-3.5 text-sm font-semibold text-navy hover:shadow-lg hover:shadow-brass/25"
            >
              Book a Consultation
            </MagneticButton>
            <MagneticButton
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy hover:border-navy/40"
            >
              Learn More
            </MagneticButton>
          </div>
        </div>

        {/* Headshot */}
        <div className="order-1 flex-[45] md:order-2">
          {/* Mobile: circular crop */}
          <div className="mx-auto h-48 w-48 overflow-hidden rounded-full md:hidden">
            <Image
              src="/images/irene-hero.jpeg"
              alt="Irene Ong — Financial Planning Consultant"
              width={400}
              height={400}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* Desktop: portrait with curtain reveal */}
          <div
            ref={imageRef}
            className="curtain-reveal hidden overflow-hidden rounded-2xl md:block"
          >
            <Image
              ref={parallaxRef}
              src="/images/irene-hero.jpeg"
              alt="Irene Ong — Financial Planning Consultant"
              width={600}
              height={800}
              priority
              className="h-auto w-full object-cover will-change-transform"
            />
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-navy/5 bg-linen/60">
        <div className="rv mx-auto flex max-w-[80rem] flex-wrap items-center justify-center gap-6 px-5 py-5 text-xs font-medium text-slate md:gap-10 md:px-10 lg:px-20">
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brass" />
            Prudential Assurance Company Singapore
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brass" />
            Strategic Partners Award 2026
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-brass" />
            B.A. Accounting, University of Portsmouth
          </span>
        </div>
      </div>
    </section>
  );
}

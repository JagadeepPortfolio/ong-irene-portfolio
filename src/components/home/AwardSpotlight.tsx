"use client";

import Image from "next/image";
import { useEffect, useRef, useCallback } from "react";

export default function AwardSpotlight() {
  const imageRef = useRef<HTMLDivElement>(null);
  const imgEl = useRef<HTMLImageElement>(null);

  const handleScroll = useCallback(() => {
    const container = imageRef.current;
    const img = imgEl.current;
    if (!container || !img) return;
    const rect = container.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const offset = (window.innerHeight / 2 - center) * 0.08;
    img.style.transform = `translateY(${offset}px) ${container.classList.contains("revealed") ? "scale(1)" : "scale(1.03)"}`;
  }, []);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isMobile && !prefersReduced) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className="bg-parchment section-py">
      <div className="mx-auto grid max-w-[80rem] grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10 lg:px-20">
        {/* Image */}
        <div
          ref={imageRef}
          className="overflow-hidden rounded-2xl transition-all duration-1000 [filter:blur(8px)_saturate(0.5)] [&.revealed]:[filter:blur(0)_saturate(1)]"
        >
          <Image
            ref={imgEl}
            src="/images/awards-night.jpeg"
            alt="Irene receiving award at Strategic Partners Awards Night 2026"
            width={800}
            height={533}
            className="h-auto w-full object-cover transition-transform duration-1000 scale-[1.03] will-change-transform [.revealed_&]:scale-100"
          />
        </div>

        {/* Text */}
        <div className="rv">
          <p className="overline text-brass">Recognition</p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal text-navy">
            Recognised by Prudential
          </h2>
          <p className="mt-4 text-slate leading-relaxed">
            Irene was honoured at the Strategic Partners Awards Night 2026 for
            her commitment to client-centred financial planning and excellence
            in advisory service.
          </p>
          <p className="mt-4 text-sm text-slate/80 leading-relaxed">
            This recognition reflects a philosophy built on genuine care —
            understanding every client&apos;s unique situation before recommending
            any plan. Because financial planning should always be about people
            first.
          </p>
        </div>
      </div>
    </section>
  );
}

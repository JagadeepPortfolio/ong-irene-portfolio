"use client";

import { useEffect, useRef } from "react";

const quote =
  "I believe financial planning is not about products — it is about understanding the people behind every goal. Every family has a unique story, and every plan should reflect that.";

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const words = wordsRef.current;
        const containerRect = container.getBoundingClientRect();

        const handleScroll = () => {
          const rect = container.getBoundingClientRect();
          const rawProgress = 1 - rect.bottom / (window.innerHeight + containerRect.height);
          const progress = Math.max(0, Math.min(1, rawProgress * 2.4 - 0.3));

          words.forEach((word, i) => {
            if (!word) return;
            const wordProgress = i / words.length;
            const opacity = progress > wordProgress ? 1 : 0.15;
            word.style.opacity = String(opacity);
            word.style.transition = "opacity 0.3s ease";
          });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
      },
      { threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const words = quote.split(" ");

  return (
    <section className="relative bg-navy section-py overflow-hidden">
      {/* Rose accent */}
      <div className="absolute top-1/2 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-rose/10 blur-[80px]" />

      <div
        ref={containerRef}
        className="relative mx-auto max-w-[56rem] px-5 py-16 md:px-10 md:py-24 lg:px-20"
      >
        <p className="font-[family-name:var(--font-fraunces)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-normal italic leading-snug text-cream">
          &ldquo;{words.map((word, i) => (
            <span
              key={i}
              ref={(el) => { wordsRef.current[i] = el; }}
              className="inline-block opacity-15"
            >
              {word}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          ))}&rdquo;
        </p>
        <p className="mt-8 overline text-brass/70">— Irene Ong</p>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Jagadeep",
    role: "IT Professional",
    quote:
      "Irene took the time to really understand where I was financially before suggesting anything. No hard sell, no rush — just honest, thoughtful advice. She helped me set up a protection plan for my family and a savings strategy that I actually stick to.",
  },
  {
    name: "Harish",
    role: "IT Professional",
    quote:
      "I'd been putting off financial planning for years because I didn't know where to start. Irene made the whole process feel approachable. She broke everything down clearly, helped me see the gaps in my coverage, and built a plan that fits my budget.",
  },
  {
    name: "Sriram",
    role: "Young Family",
    quote:
      "When my wife and I had our first child, we realised we needed to get serious about our finances. Irene sat down with us, listened to our concerns, and put together a plan that covers our child's education, our home, and our retirement.",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[i] as HTMLElement;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft - 20, behavior: "smooth" });
    setActive(i);
  };

  return (
    <section className="bg-parchment section-py">
      <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
        <p className="overline text-brass rv">Client Stories</p>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal text-navy rv">
          What my clients say
        </h2>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="mt-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none md:grid md:grid-cols-3 md:overflow-visible stg"
          onScroll={() => {
            const container = scrollRef.current;
            if (!container) return;
            const idx = Math.round(container.scrollLeft / container.offsetWidth);
            setActive(idx);
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="min-w-[85vw] snap-start rounded-xl bg-linen p-8 sm:min-w-0"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="mb-4 text-brass/30"
              >
                <path
                  d="M3 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                  fill="currentColor"
                />
              </svg>
              <p className="font-[family-name:var(--font-fraunces)] text-base italic leading-relaxed text-charcoal/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-sm font-semibold text-navy">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-navy">{t.name}</p>
                  <p className="text-xs text-slate">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-brass" : "w-2 bg-navy/15"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

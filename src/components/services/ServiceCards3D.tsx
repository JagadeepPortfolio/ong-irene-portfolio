"use client";

import { useRef, useCallback, useEffect, useState } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Comprehensive Financial Planning",
    desc: "A thorough assessment of your current financial position — income, expenses, assets, liabilities — mapped against your short- and long-term goals.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Life & Health Protection",
    desc: "Ensuring you and your family are protected against life's uncertainties through appropriate life insurance and critical illness coverage.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Savings & Investment Planning",
    desc: "Building a disciplined savings and investment strategy aligned with your risk profile, timeline, and financial objectives.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Retirement Planning",
    desc: "Designing a retirement roadmap so you can maintain your lifestyle and achieve financial independence on your terms.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Portfolio Monitoring & Review",
    desc: "Regular reviews of your financial plan to ensure it stays aligned with your evolving needs and market conditions.",
  },
];

const STACK_ROTATIONS = [-3, 2, -1.5, 2.5, -0.5];
const STACK_OFFSETS = [0, -6, -12, -18, -24];

function Card3D({
  service,
  index,
  dealt,
}: {
  service: (typeof services)[number];
  index: number;
  dealt: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 25px rgba(27,45,79,0.08)`;

    const shine = card.querySelector(".card-shine") as HTMLElement;
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(197,165,90,0.08), transparent 60%)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
    card.style.boxShadow = "0 1px 3px rgba(0,0,0,0.04)";
    const shine = card.querySelector(".card-shine") as HTMLElement;
    if (shine) shine.style.background = "transparent";
  }, []);

  const stackStyle: React.CSSProperties = dealt
    ? {
        opacity: 1,
        transform: "translateY(0) rotate(0deg) scale(1)",
        transitionDelay: `${index * 120}ms`,
      }
    : {
        opacity: 0.6,
        transform: `translateY(${STACK_OFFSETS[index]}px) rotate(${STACK_ROTATIONS[index]}deg) scale(${1 - index * 0.02})`,
        transitionDelay: "0ms",
      };

  return (
    <div
      className="card-3d transition-all duration-700 ease-[cubic-bezier(.23,1,.32,1)]"
      style={stackStyle}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card-3d-inner card-glow relative cursor-default rounded-2xl border border-navy/8 bg-linen p-10 transition-shadow duration-300 md:hover:border-transparent"
      >
        <div className="card-shine pointer-events-none absolute inset-0 rounded-2xl" />
        <div className="relative">
          <div className="text-brass card-icon-glow">{service.icon}</div>
          <h3 className="mt-4 text-lg font-medium text-navy">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate">
            {service.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ServiceCards3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dealt, setDealt] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDealt(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDealt(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((s, i) => (
        <Card3D key={s.title} service={s} index={i} dealt={dealt} />
      ))}
    </div>
  );
}

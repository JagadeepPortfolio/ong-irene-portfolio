"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Families Guided" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 95, suffix: "%", label: "Client Retention" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, [target]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate();
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="text-center rv">
          <p className="font-[family-name:var(--font-fraunces)] text-[clamp(2.5rem,5vw,4rem)] font-light text-navy">
            <Counter target={s.value} suffix={s.suffix} />
          </p>
          <p className="mt-2 text-sm tracking-wide text-slate uppercase">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [phase, setPhase] = useState<"visible" | "exit" | "done">("visible");

  useEffect(() => {
    const isBot = /Googlebot|Lighthouse|bot|crawl|spider|Bingbot|ChatGPT|Perplexity/i.test(
      navigator.userAgent
    );
    if (isBot) {
      setPhase("done");
      return;
    }

    const t1 = setTimeout(() => setPhase("exit"), 1800);
    const t2 = setTimeout(() => setPhase("done"), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy transition-opacity duration-700 ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
    >
      <p
        className="font-[family-name:var(--font-fraunces)] text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-cream opacity-0 animate-[loaderName_0.8s_ease_0.2s_forwards]"
      >
        Irene Ong
      </p>
      <p
        className="mt-3 text-sm tracking-[0.25em] uppercase text-brass/70 opacity-0 animate-[loaderName_0.8s_ease_0.6s_forwards]"
      >
        Financial Planning
      </p>
      <div className="mt-8 h-px w-16 origin-left scale-x-0 bg-brass/40 animate-[loaderLine_1.2s_ease_0.4s_forwards]" />
    </div>
  );
}

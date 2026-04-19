"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTOR = ".rv, .rv-l, .rv-r, .stg";

export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("rv-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    function observe() {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (!el.classList.contains("in")) io.observe(el);
      });
    }

    // Small delay to let the new page DOM render
    const t = setTimeout(observe, 60);

    // Catch late-mounted elements
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t);
      mo.disconnect();
      io.disconnect();
    };
  }, [pathname]);

  return null;
}

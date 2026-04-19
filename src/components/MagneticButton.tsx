"use client";

import { useRef, useCallback, type ReactNode } from "react";

export default function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
  type,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "submit" | "button";
  onClick?: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const strength = 0.35;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
  }, []);

  const props = {
    ref: ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>,
    className: `${className} transition-transform duration-300 ease-out`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onClick,
  };

  if (href) {
    return (
      <a {...props} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button {...props} type={type || "button"}>
      {children}
    </button>
  );
}

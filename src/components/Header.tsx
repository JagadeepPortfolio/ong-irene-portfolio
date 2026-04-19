"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-parchment/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[80rem] items-center justify-between px-5 py-4 md:px-10 lg:px-20">
          <Link
            href="/"
            className="font-[family-name:var(--font-fraunces)] text-xl font-medium text-navy tracking-tight"
          >
            Irene Ong
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-brass after:transition-all after:duration-300 ${
                  pathname === link.href
                    ? "text-navy after:w-full"
                    : "text-slate hover:text-navy after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-lg bg-brass px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brass/25"
            >
              Book Consultation
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-60 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-navy transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-navy transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-navy transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-parchment/98 backdrop-blur-lg transition-transform duration-350 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-[family-name:var(--font-fraunces)] text-2xl transition-colors ${
                pathname === link.href ? "text-navy" : "text-slate"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6596502430?text=Hi%20Irene%2C%20I%27d%20like%20to%20discuss%20financial%20planning."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-lg bg-whatsapp px-8 py-3 text-base font-semibold text-white"
          >
            Chat on WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}

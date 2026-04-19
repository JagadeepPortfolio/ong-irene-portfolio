import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-cream/70">
      <div className="mx-auto max-w-[80rem] px-5 pt-16 pb-8 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-fraunces)] text-xl font-medium text-cream">
              Irene Ong
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Personalised financial strategies for individuals and families in
              Singapore.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-cream/50">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-cream/50">
              Get in Touch
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://wa.me/6596502430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-whatsapp"
                >
                  WhatsApp: +65 9650 2430
                </a>
              </li>
              <li>
                <a
                  href="tel:+6596502430"
                  className="transition-colors duration-200 hover:text-cream"
                >
                  Phone: +65 9650 2430
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ong-irene-591799134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-cream"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + rose accent */}
        <div className="relative mt-12 border-t border-cream/10 pt-6">
          <div className="absolute -top-px left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
        </div>

        {/* MAS Disclaimer */}
        <p className="mt-4 text-[0.6875rem] leading-relaxed text-cream/35">
          Irene Ong is a Financial Planning Consultant representing Prudential
          Assurance Company Singapore (Pte) Ltd. This website is not an official
          Prudential website. The information provided is for general
          informational purposes only and does not constitute financial advice.
          Please consult a qualified financial advisor before making any
          financial decisions.
        </p>

        {/* Copyright */}
        <p className="mt-6 text-xs text-cream/30">
          &copy; {new Date().getFullYear()} Irene Ong. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

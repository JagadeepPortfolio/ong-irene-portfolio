import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Irene Ong for a free, no-obligation financial planning consultation in Singapore.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-parchment pt-28 pb-8 md:pt-36 md:pb-12">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <p className="overline text-brass rv">Contact</p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-normal text-navy rv">
            Get in Touch
          </h1>
          <p className="rv mt-4 max-w-[56ch] text-slate">
            Start with a conversation — I&apos;m here to listen and help you
            plan.
          </p>
        </div>
      </section>

      {/* Split: Form + Details */}
      <section className="bg-parchment section-py !pt-4">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3 rv">
              <ContactForm />
            </div>

            {/* Details */}
            <div className="lg:col-span-2 rv">
              <div className="rounded-2xl bg-linen p-8 lg:p-10">
                <h2 className="text-lg font-medium text-navy">
                  Prefer to reach out directly?
                </h2>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/6596502430?text=Hi%20Irene%2C%20I%27d%20like%20to%20discuss%20financial%20planning."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-4 rounded-xl border border-navy/8 bg-parchment p-4 transition-all duration-200 hover:border-brass/30 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Chat on WhatsApp
                    </p>
                    <p className="text-xs text-slate">
                      Typically replies within a few hours
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <div className="mt-4 flex items-center gap-4 rounded-xl border border-navy/8 bg-parchment p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy/8">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-navy"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Phone</p>
                    <p className="text-xs text-slate">+65 9650 2430</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ong-irene-591799134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-4 rounded-xl border border-navy/8 bg-parchment p-4 transition-all duration-200 hover:border-brass/30 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0A66C2]/10">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#0A66C2"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">LinkedIn</p>
                    <p className="text-xs text-slate">Connect with Irene</p>
                  </div>
                </a>

                {/* Hours */}
                <div className="mt-6 border-t border-navy/8 pt-6">
                  <p className="text-sm font-medium text-navy">
                    Consultation Hours
                  </p>
                  <p className="mt-1 text-sm text-slate">
                    By appointment — flexible scheduling available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-parchment pb-4">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <p className="text-[0.6875rem] text-slate/50">
            Irene Ong is a Financial Planning Consultant representing Prudential
            Assurance Company Singapore (Pte) Ltd. This website is not an
            official Prudential website.
          </p>
        </div>
      </div>
    </>
  );
}

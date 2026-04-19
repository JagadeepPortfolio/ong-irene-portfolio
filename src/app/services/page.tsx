import type { Metadata } from "next";
import ServiceCards3D from "@/components/services/ServiceCards3D";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive financial planning, life protection, savings & investment, and retirement planning in Singapore.",
};

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "A no-obligation conversation to understand your goals, concerns, and current financial situation.",
  },
  {
    step: "02",
    title: "Financial Assessment",
    desc: "A comprehensive review of your finances — what you have, what you need, and where the gaps are.",
  },
  {
    step: "03",
    title: "Strategic Planning",
    desc: "A personalised plan with clear recommendations tailored to your goals and risk profile.",
  },
  {
    step: "04",
    title: "Ongoing Review",
    desc: "Regular check-ins to monitor progress, adjust for life changes, and keep your plan on track.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-parchment pt-28 pb-8 md:pt-36 md:pb-12">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <p className="overline text-brass rv">Services</p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-normal text-navy rv">
            How I Help
          </h1>
          <p className="rv mt-4 max-w-[56ch] text-slate">
            Every financial journey is different. I work with you to understand
            where you are today and where you want to be — then build a strategy
            to get you there.
          </p>
        </div>
      </section>

      {/* 3D Service Cards */}
      <section className="bg-parchment section-py !pt-4">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <ServiceCards3D />
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-parchment pb-4">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <p className="text-[0.6875rem] text-slate/50">
            All financial products are distributed by Prudential Assurance
            Company Singapore (Pte) Ltd. Terms and conditions apply.
          </p>
        </div>
      </div>

      {/* Process */}
      <section className="bg-linen section-py">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <p className="overline text-brass rv">The Process</p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal text-navy rv">
            How we work together
          </h2>

          <div className="relative mt-12">
            {/* Connecting line (desktop) */}
            <div className="absolute left-8 top-8 bottom-8 hidden w-px bg-navy/10 md:block" />

            <div className="grid grid-cols-1 gap-8 stg">
              {process.map((p) => (
                <div key={p.step} className="flex gap-6">
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-parchment">
                    <span className="font-[family-name:var(--font-fraunces)] text-xl font-light text-brass">
                      {p.step}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-medium text-navy">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-py">
        <div className="mx-auto max-w-[48rem] px-5 text-center md:px-10">
          <h2 className="rv font-[family-name:var(--font-fraunces)] text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-cream">
            Ready to take the first step?
          </h2>
          <p className="rv mt-3 text-cream/60">
            Book a free, no-obligation discovery call.
          </p>
          <a
            href="https://wa.me/6596502430?text=Hi%20Irene%2C%20I%27d%20like%20to%20book%20a%20discovery%20call."
            target="_blank"
            rel="noopener noreferrer"
            className="rv mt-6 inline-flex items-center gap-2 rounded-lg bg-brass px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>
    </>
  );
}

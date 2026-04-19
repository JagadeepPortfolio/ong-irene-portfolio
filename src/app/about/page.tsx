import type { Metadata } from "next";
import Image from "next/image";
import AboutHeroImage from "@/components/about/AboutHeroImage";
import AwardPhoto from "@/components/about/AwardPhoto";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Irene Ong — Financial Planning Consultant at Prudential Singapore. BA Accounting, Strategic Partners Award 2026.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-parchment pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto grid max-w-[80rem] grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-10 lg:px-20">
          <AboutHeroImage />
          <div className="rv">
            <p className="overline text-brass">About</p>
            <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-normal text-navy">
              About Irene
            </h1>
            <p className="mt-6 leading-relaxed text-slate">
              I studied Accounting at the University of Portsmouth, and when I
              came back to Singapore, I knew I wanted to do something that
              connected the numbers to real people&apos;s lives. That&apos;s
              what brought me to financial planning.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              I joined Prudential Assurance Company Singapore — one of
              Singapore&apos;s most established insurers, with over 90 years of
              heritage and an AA- credit rating from Standard &amp; Poor&apos;s. It
              felt like the right place to build a career grounded in trust.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-linen section-py">
        <div className="mx-auto max-w-[48rem] px-5 md:px-10 lg:px-20">
          <div className="rv">
            <p className="leading-relaxed text-slate">
              What I enjoy most about this work is the conversations. Every
              family I sit down with has a different story — different worries,
              different dreams, different starting points. My job is to listen
              first, understand what matters most, and then build a plan around
              that. Not the other way around.
            </p>
            <p className="mt-4 leading-relaxed text-slate">
              Over the years, I&apos;ve helped individuals and families across
              Singapore with everything from protecting their first home to
              planning for retirement. The work is always evolving — I regularly
              review my clients&apos; financial situations, analyse how their
              plans are performing, and recommend adjustments when life changes.
              Because it always does.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-parchment section-py">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <p className="overline text-brass rv">Credentials</p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal text-navy rv">
            Qualifications &amp; Recognition
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 stg">
            <div className="rounded-xl bg-linen p-8">
              <p className="overline text-brass/60 text-[0.65rem]">Education</p>
              <h3 className="mt-2 text-lg font-medium text-navy">
                Bachelor of Arts in Accounting
              </h3>
              <p className="mt-1 text-sm text-slate">
                University of Portsmouth
              </p>
            </div>
            <div className="rounded-xl bg-linen p-8">
              <p className="overline text-brass/60 text-[0.65rem]">
                Affiliation
              </p>
              <h3 className="mt-2 text-lg font-medium text-navy">
                Prudential Assurance Company Singapore
              </h3>
              <p className="mt-1 text-sm text-slate">
                Financial Planning Consultant
              </p>
            </div>
            <div className="rounded-xl bg-linen p-8">
              <p className="overline text-brass/60 text-[0.65rem]">
                Recognition
              </p>
              <h3 className="mt-2 text-lg font-medium text-navy">
                Strategic Partners Award 2026
              </h3>
              <p className="mt-1 text-sm text-slate">
                Prudential Strategic Partners Awards Night
              </p>
            </div>
            <div className="rounded-xl bg-linen p-8">
              <p className="overline text-brass/60 text-[0.65rem]">
                Specialisations
              </p>
              <h3 className="mt-2 text-lg font-medium text-navy">
                Comprehensive Financial Advisory
              </h3>
              <p className="mt-1 text-sm text-slate">
                Life protection, critical illness, savings &amp; investment,
                retirement planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Award photo */}
      <section className="bg-linen section-py">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <AwardPhoto />
          <p className="rv mt-6 text-center text-sm text-slate">
            Strategic Partners Awards Night 2026 — Recognised for commitment to
            client-centred financial planning.
          </p>
        </div>
      </section>

      {/* Personal touch */}
      <section className="bg-parchment section-py">
        <div className="mx-auto max-w-[48rem] px-5 text-center md:px-10 lg:px-20">
          <p className="rv font-[family-name:var(--font-fraunces)] text-lg italic text-slate">
            Outside of work, Irene is a firm believer in keeping things simple —
            good food, long walks around the neighbourhood, and the occasional
            weekend spent exploring a new corner of Singapore.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-py">
        <div className="mx-auto max-w-[48rem] px-5 text-center md:px-10">
          <h2 className="rv font-[family-name:var(--font-fraunces)] text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-cream">
            Ready to start planning?
          </h2>
          <a
            href="https://wa.me/6596502430?text=Hi%20Irene%2C%20I%27d%20like%20to%20discuss%20financial%20planning."
            target="_blank"
            rel="noopener noreferrer"
            className="rv mt-6 inline-flex items-center gap-2 rounded-lg bg-brass px-8 py-3.5 text-sm font-semibold text-navy transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </>
  );
}

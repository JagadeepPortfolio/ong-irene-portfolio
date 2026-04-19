import type { Metadata } from "next";
import TestimonialGrid from "@/components/testimonials/TestimonialGrid";
import StatsCounter from "@/components/testimonials/StatsCounter";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from clients across Singapore — families, professionals, and business owners who trust Irene Ong with their financial planning.",
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-parchment pt-28 pb-8 md:pt-36 md:pb-12">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <p className="overline text-brass rv">Testimonials</p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-normal text-navy rv">
            Client Stories
          </h1>
          <p className="rv mt-4 max-w-[56ch] text-slate">
            Every plan starts with a conversation. Here&apos;s what some of my
            clients have to say about working together.
          </p>
        </div>
      </section>

      {/* Testimonial Grid */}
      <section className="bg-parchment section-py !pt-4">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <TestimonialGrid />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linen section-py">
        <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
          <StatsCounter />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy section-py">
        <div className="mx-auto max-w-[48rem] px-5 text-center md:px-10">
          <h2 className="rv font-[family-name:var(--font-fraunces)] text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-cream">
            Ready to write your own story?
          </h2>
          <p className="rv mt-3 text-cream/60">
            Let&apos;s start with a no-obligation conversation.
          </p>
          <a
            href="https://wa.me/6596502430?text=Hi%20Irene%2C%20I%27d%20like%20to%20discuss%20financial%20planning."
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

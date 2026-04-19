"use client";

const testimonials = [
  {
    name: "Jagadeep",
    role: "IT Professional",
    initials: "J",
    quote:
      "Irene took the time to really understand where I was financially before suggesting anything. No hard sell, no rush — just honest, thoughtful advice. She helped me set up a protection plan for my family and a savings strategy that I actually stick to. It's rare to find someone in this industry who genuinely puts your interests first.",
    featured: true,
  },
  {
    name: "Harish",
    role: "IT Professional",
    initials: "H",
    quote:
      "I'd been putting off financial planning for years because I didn't know where to start. Irene made the whole process feel approachable. She broke everything down clearly, helped me see the gaps in my coverage, and built a plan that fits my budget. I feel a lot more confident about the future now.",
    featured: false,
  },
  {
    name: "Sriram",
    role: "Young Family",
    initials: "S",
    quote:
      "When my wife and I had our first child, we realised we needed to get serious about our finances. Irene sat down with us, listened to our concerns, and put together a plan that covers our child's education, our home, and our retirement — all without making it feel overwhelming. She checks in regularly, and that consistency matters a lot to us.",
    featured: true,
  },
  {
    name: "Mei Lin",
    role: "Healthcare Professional",
    initials: "ML",
    quote:
      "What sets Irene apart is how thorough she is. She didn't just look at insurance — she reviewed my CPF, my savings, my existing policies, everything. I walked away with a clear picture and a plan I could actually follow.",
    featured: false,
  },
  {
    name: "Ravi",
    role: "Freelance Consultant",
    initials: "R",
    quote:
      "As a freelancer, my income isn't fixed, and that made planning tricky. Irene designed a flexible strategy that works with my cash flow instead of against it. She's patient, responsive, and always available when I have questions.",
    featured: false,
  },
  {
    name: "Wei Ting",
    role: "Newlywed Couple",
    initials: "WT",
    quote:
      "We were just married and had no idea where to begin with financial planning. Irene guided us step by step — from setting up our emergency fund to planning for our first home. She made something daunting feel completely manageable.",
    featured: true,
  },
];

export default function TestimonialGrid() {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 stg">
      {testimonials.map((t) => (
        <div
          key={t.name}
          className={`mb-6 break-inside-avoid rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-lg ${
            t.featured
              ? "border-brass/20 bg-linen"
              : "border-navy/8 bg-white"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-brass/30"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
          <p className="mt-4 font-[family-name:var(--font-fraunces)] text-[0.95rem] italic leading-relaxed text-navy/80">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/8">
              <span className="text-sm font-semibold text-navy">
                {t.initials}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-navy">{t.name}</p>
              <p className="text-xs text-slate">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

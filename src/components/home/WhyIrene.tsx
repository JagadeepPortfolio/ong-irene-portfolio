const differentiators = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Personalised Plans",
    desc: "Every strategy is built around your unique goals — not a one-size-fits-all template.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Continuous Monitoring",
    desc: "Your financial plan evolves with you. Regular reviews ensure it stays relevant.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Award-Winning Advisor",
    desc: "Recognised at the Strategic Partners Awards Night 2026 for excellence in client service.",
  },
];

export default function WhyIrene() {
  return (
    <section className="bg-linen section-py">
      <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
        <p className="overline text-brass rv">Why Choose Me</p>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal text-navy rv">
          What sets me apart
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 stg">
          {differentiators.map((d) => (
            <div key={d.title} className="group">
              <div className="text-brass transition-transform duration-300 group-hover:-translate-y-1">
                {d.icon}
              </div>
              <h3 className="mt-4 text-lg font-medium text-navy">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    num: "01",
    title: "Financial Planning",
    desc: "Comprehensive assessment of your current financial position and future goals, tailored to your life stage.",
  },
  {
    num: "02",
    title: "Portfolio Monitoring",
    desc: "Ongoing review of your financial situation to ensure your plan stays aligned with changing circumstances.",
  },
  {
    num: "03",
    title: "Strategic Analysis",
    desc: "Identifying and evaluating new financial strategies to optimise your wealth protection and growth.",
  },
  {
    num: "04",
    title: "Goal Adjustment",
    desc: "Recommending timely changes to your goals and plans as your life evolves — career, family, retirement.",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-linen section-py">
      <div className="mx-auto max-w-[80rem] px-5 md:px-10 lg:px-20">
        <p className="overline text-brass rv">What I Do</p>
        <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal text-navy rv">
          Services
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px bg-navy/5 overflow-hidden rounded-2xl border border-navy/5 sm:grid-cols-2 stg">
          {services.map((s) => (
            <div
              key={s.num}
              className="group relative bg-linen p-8 transition-colors duration-300 hover:bg-parchment md:p-10 card-glow"
            >
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-transparent transition-colors duration-300 group-hover:bg-brass" />
              <span className="font-[family-name:var(--font-fraunces)] text-[clamp(2.5rem,4vw,3.5rem)] font-light text-navy/10 transition-colors duration-300 group-hover:text-brass/25 card-icon-glow">
                {s.num}
              </span>
              <h3 className="mt-2 text-lg font-medium text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

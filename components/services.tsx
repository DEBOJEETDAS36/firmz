export function Services() {
  const practices = [
    {
      title: "Corporate Governance",
      desc: "Structuring, compliance, mergers, and acquisitions built on ironclad legal frameworks.",
      type: "Legal"
    },
    {
      title: "Tax Optimization & Strategy",
      desc: "Advanced asset protection, corporate tax planning, and cross-border structuring.",
      type: "Finance"
    },
    {
      title: "Commercial Litigation",
      desc: "Aggressive defense and dispute resolution protecting your commercial and IP interests.",
      type: "Legal"
    },
    {
      title: "Forensic Accounting & Audit",
      desc: "Comprehensive financial auditing, risk assessments, and investigative accounting.",
      type: "Finance"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A cohesive approach combining elite legal advocacy with precision accounting to cover every angle of your enterprise.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practices.map((practice, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl border border-border bg-background p-6 transition-all hover:shadow-md hover:border-foreground/20"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80 block mb-4">
                // {practice.type}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-muted-foreground transition-colors">
                {practice.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {practice.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



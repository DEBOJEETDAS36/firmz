export function Testimonials() {
  const reviews = [
    {
      quote: "Their dual approach completely streamlined our restructuring process. Having legal counsel and corporate accountants in perfect alignment saved us countless hours.",
      author: "Elena Rostova",
      role: "CEO, Nexus Ventures"
    },
    {
      quote: "Exceptional defense during a highly complex tax dispute. Their precision and knowledge of tax law codes turned an incredibly stressful quarter into a definitive victory.",
      author: "Marcus Vance",
      role: "Founder, Vance Logistics"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Trusted by Industry Leaders</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <div key={idx} className="flex flex-col justify-between rounded-xl border border-border bg-muted/20 p-8 relative">
              <p className="text-base italic text-foreground leading-relaxed">
                 {`"${rev.quote}"`}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-sm text-foreground">{rev.author}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{rev.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
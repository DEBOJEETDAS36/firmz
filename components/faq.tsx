export function FAQ() {
  const faqs = [
    {
      q: "Why does a combined law and accountancy firm benefit my business?",
      a: "Most corporate problems are both legal and financial. By housing both practices under one roof, our lawyers and accountants collaborate instantly, preventing contradictions and eliminating multiple overlapping agency bills."
    },
    {
      q: "Do you handle individual asset protection or only corporate accounts?",
      a: "We manage both. We provide family offices and high-net-worth individuals specialized trust layouts, inheritance tax planning, and strategic asset protections."
    },
    {
      q: "How do your consultation arrangements work?",
      a: "We start with a brief, confidential discovery call to assess your requirements. Following that, we design an engagement model on either a flat-rate project structure or structured corporate advisory retainer."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group rounded-lg border border-border bg-background p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground">
                <h3 className="font-medium text-base sm:text-lg">{faq.q}</h3>
                <span className="shrink-0 rounded-full p-1.5 bg-muted text-foreground transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground text-sm sm:text-base">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
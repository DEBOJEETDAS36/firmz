export function AboutUs() {
  return (
    <section id="about-us" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              About the Firm
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Where Legal Rigor Meets Financial Intelligence.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              We guide clients through constantly evolving legal and tax
              complexities with precision, foresight, and strategic expertise.
              Moving beyond basic compliance, we actively anticipate risks and
              optimize corporate opportunities to create sustainable value.
              Rooted in absolute confidentiality and transparency, our proactive
              corporate advisory aligns regulatory requirements with your
              broader business goals to deliver measurable, trust-based results.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our mission is to deliver exceptional legal and taxation advice
              that provides clarity, eliminates complexity, and empowers
              informed decision-making. We provide strategic, ethical, and
              forward-thinking solutions tailored precisely to your unique
              long-term objectives. Driven by integrity, precision, and
              accountability, our firm stands as a trusted partner of excellence
              and innovation, helping you navigate the modern regulatory
              landscape with absolute confidence.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <p className="text-3xl font-bold text-foreground">99%</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Client Retention Rate
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">Billion+</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Assets Advisory & Managed
                </p>
              </div>
            </div>
          </div>

          {/* Upgraded Image Block displaying firmimg.jpg */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[450px] w-full rounded-2xl border border-border bg-background overflow-hidden group">
            <img 
              src="/firmimg.jpg" 
              alt="Firm corporate advisory session" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
            {/* Subtle high-end ambient dark blend layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
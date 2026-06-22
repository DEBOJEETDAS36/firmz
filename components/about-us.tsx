export function AboutUs() {
  return (
    <section id="about-us" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">About the Firm</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Where Legal Rigor Meets Financial Intelligence.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Founded on the principle that legal battles and financial triumphs are inherently linked, our multi-disciplinary firm eliminates communication silos. We design unified legal and financial strategies under a single roof.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Whether you are structuring a venture-backed enterprise or protecting personal generational wealth, our team provides clarity, discretion, and unyielding representation.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <p className="text-3xl font-bold text-foreground">99%</p>
                <p className="text-sm text-muted-foreground mt-1">Client Retention Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">Billion+</p>
                <p className="text-sm text-muted-foreground mt-1">Assets Advisory & Managed</p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square lg:aspect-auto lg:h-[450px] w-full rounded-2xl border border-border bg-background flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-muted to-transparent opacity-50" />
            <div className="text-center p-6 z-10">
              <span className="text-2xl font-serif italic text-muted-foreground block mb-2">In Integrity, Veritas.</span>
              <p className="text-xs text-muted-foreground tracking-widest uppercase">Est. 2014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



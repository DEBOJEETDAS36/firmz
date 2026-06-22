"use client";
export function ContactUs() {
  return (
    <section id="contact-us" className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Initiate Engagement</h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Ready to clear up complex filing discrepancies or look into structural legal defenses? Reach out using our intake channels below. All initial communication remains completely privileged.
            </p>
            
            <div className="mt-8 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="font-medium text-foreground">Inquiries:</span> 
                
                <a href="mailto:info@dtaxandlaw.com" className="hover:text-foreground transition-colors underline decoration-border underline-offset-4">
                  info@dtaxandlaw.com
                </a>
              

              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium text-foreground">Secure Line:</span> 
                
                <a href="tel:+917602420029" className="hover:text-foreground transition-colors underline decoration-border underline-offset-4">
                  076024 20029
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 rounded-xl border border-border bg-muted/10 p-6 sm:p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:border-foreground/40"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:border-foreground/40"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service-type" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Primary Consultation Focus</label>
                <select
                  id="service-type"
                  className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:border-foreground/40"
                >
                  <option>Tax Strategy & Regulatory Planning</option>
                  <option>Legal Counsel & Advocacy</option>
                  <option>Corporate Audit Defense</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Matter Summary Overview</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:border-foreground/40 resize-none"
                  placeholder="Please brief your core requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Submit Secure Intake
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
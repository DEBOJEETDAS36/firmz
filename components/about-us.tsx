import Image from "next/image"; // Imported at the top for layout optimization

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
              We guide clients through constantly evolving legal and tax complexities with precision, foresight, and strategic expertise. Moving beyond basic compliance, we actively anticipate risks and optimize corporate opportunities to create sustainable value. Rooted in absolute confidentiality and transparency, our proactive corporate advisory aligns regulatory requirements with your broader business goals to deliver measurable, trust-based results.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our mission is to deliver exceptional legal and taxation advice that provides clarity, eliminates complexity, and empowers informed decision-making. We provide strategic, ethical, and forward-thinking solutions tailored precisely to your unique long-term objectives. Driven by integrity, precision, and accountability, our firm stands as a trusted partner of excellence and innovation, helping you navigate the modern regulatory landscape with absolute confidence.
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
          
          {/* --- IMAGE DISPLAY BOX --- */}
          <div className="relative aspect-square lg:aspect-auto lg:h-[450px] w-full rounded-2xl border border-border bg-background overflow-hidden group">
            {/* Next.js Optimized Background Image */}
            <Image
              src="/dtax_body.jpg"             // Place your photo in the public folder and update this name
              alt="Inside the firm office"
              fill                              // Automatically stretches to fill the container layout
              sizes="(max-w-7xl) 50vw, 100vw"   // Performance optimizer hinting responsive image width
              className="object-cover transition-transform duration-500 group-hover:scale-105" // Subtle zoom effect on hover
            />

            {/* Dark Overlay Layer (Ensures your white text is highly readable over any bright background image) */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Text Positioned Directly on Top of the Image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
              <span className="text-2xl font-serif italic text-white block mb-2 drop-shadow-md">
                In Integrity, Veritas.
              </span>
              <p className="text-xs text-zinc-300 tracking-widest uppercase drop-shadow-sm">Est. 2014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

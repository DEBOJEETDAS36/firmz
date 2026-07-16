'use client';
import { useEffect, useState, useRef } from 'react';

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [clickedIdx, setClickedIdx] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const practices = [
    "Income tax",
    "GST",
    "Company Incorporation",
    "NGO Registration",
    "Society Registration",
    "Trademark Registration",
    "MSME Registration",
    "Digital Signature",
    "Income Tax & GST Notice Reply",
    "Income Tax & GST Legal Hearing",
    "Trademark Notice & Objection Reply",
    "Contract Drafting",
    "Tax Planning",
    "CA & CS Consultancy",
    "Tax Consultancy",
    "Legal Consultancy",
    "GST Compliances",
    "Income Tax Compliances",
    "Corporate Litigation",
    "Civil & Criminal Litigation"
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start border-b border-border pb-16 mb-20">
          <div className={`lg:col-span-5 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-muted-foreground/40 block mb-3">
              {/* Legal & Fiscal Portfolio */}
            </span>
            <h2 className="text-4xl text-foreground sm:text-5xl lg:text-6xl font-serif font-normal tracking-wide leading-tight">
              Practice Areas
            </h2>
          </div>
          <div className={`lg:col-span-7 pt-4 lg:pt-8 transition-all duration-1000 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <p className="text-base sm:text-lg text-muted-foreground font-sans font-light tracking-wide leading-relaxed max-w-xl">
              A meticulously structured index of our core advisory systems, pairing elite professional defense with comprehensive corporate tax structuring.
            </p>
          </div>
        </div>

        <div className="grid gap-x-24 gap-y-0 md:grid-cols-2">
          {practices.map((title, idx) => {
            const isHovered = hoveredIdx === idx;
            const isClicked = clickedIdx === idx;
            const isActive = isHovered || isClicked;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setClickedIdx(idx)}
                style={{ transitionDelay: `${(idx % 2) * 40}ms` }}
                className={`group flex items-center border-b border-border/30 py-7 cursor-pointer transition-all duration-500 ease-out transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                <div className="flex-1 relative overflow-hidden">
                  <h3 
                    className={`text-base sm:text-lg lg:text-xl tracking-wide transition-all duration-300 font-serif ${
                      isActive 
                        ? 'text-primary translate-x-2 font-normal italic' 
                        : 'text-foreground/90 font-normal'
                    }`}
                  >
                    {title}
                  </h3>
                </div>
                <div 
                  className={`h-1 w-1 rounded-sm rotate-45 transition-all duration-500 ease-out ${
                    isActive 
                      ? 'bg-primary opacity-100 scale-125' 
                      : 'bg-foreground/80 opacity-0 scale-50'
                  }`} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

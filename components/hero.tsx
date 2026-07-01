"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 600, 1);

  const textScrollStyle = {
    transform: `translateY(${progress * -40}px)`,
    opacity: 1 - progress * 0.6,
    filter: `blur(${progress * 2}px)`,
    transition:
      "transform 0.05s ease-out, opacity 0.05s ease-out, filter 0.05s ease-out",
  };

  const imageScrollStyle = {
    transform: `translateY(${progress * 90}px) scale(${1 - progress * 0.15})`,
    opacity: 1 - progress * 0.85,
    filter: `blur(${progress * 5}px)`,
    transition:
      "transform 0.05s ease-out, opacity 0.05s ease-out, filter 0.05s ease-out",
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes entranceText {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes entranceImageOuter {
          0% { 
            opacity: 0; 
            transform: scale(0.8) translateY(40px);
            filter: blur(8px);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }
        
        .entry-text {
          opacity: 0;
          animation: entranceText 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .entry-image-outer {
          opacity: 0;
          animation: entranceImageOuter 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted/50 via-background to-background -z-10" />

      <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 items-center w-full py-12">
        <div
          className="text-left lg:col-span-7"
          style={scrollY > 0 ? textScrollStyle : undefined}
        >
          <div className="entry-text" style={{ animationDelay: "100ms" }}>
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-6 tracking-wide">
              Tax Optimization & Legal Advocacy
            </span>
          </div>

          <h1
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl entry-text"
            style={{ animationDelay: "250ms" }}
          >
            D TAX AND LAW
            <br />
            <span className="text-muted-foreground font-serif italic font-normal block mt-2">
              Strategic Council.
            </span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed entry-text"
            style={{ animationDelay: "400ms" }}
          >
            Where precision, strategy and excellence define your legal and tax experiences
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 entry-text"
            style={{ animationDelay: "550ms" }}
          >
            <a
              href="#contact-us"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-foreground px-6 text-base font-medium text-background transition-all hover:bg-foreground/90 hover:shadow-lg active:scale-95"
            >
              Schedule Consultation
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-6 text-base font-medium text-foreground transition-all hover:bg-muted active:scale-95"
            >
              Our Practice Areas
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end lg:col-span-5">
          <div className="entry-image-outer relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
              <div
                className="relative w-full h-full rounded-full border-4 border-border shadow-2xl bg-muted overflow-hidden group"
                style={scrollY > 0 ? imageScrollStyle : undefined}
              >
                <Image
                  src="/profilePic.png"
                  alt="D Tax and Law Lead Counsel Profile"
                  fill
                  sizes="(max-width: 1024px) 50vw, 440px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


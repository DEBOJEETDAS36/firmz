// components/contact-us.tsx
"use client";

import { useState } from "react";

export function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact-us" className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">

          {/* Left */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Initiate Engagement
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Ready to clear up complex filing discrepancies or look into structural legal defenses? All initial communication remains completely privileged.
            </p>
            <div className="mt-8 space-y-4 text-sm text-muted">
              <div className="flex items-center gap-3">
                <span className="font-medium text-foreground">Email:</span>
                <a href="mailto:info@dtaxandlaw.com" className="hover:text-foreground transition-colors underline underline-offset-4">
                  dtaxandlaw@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium text-foreground">Phone:</span>
                <a href="tel:+917602420029" className="hover:text-foreground transition-colors underline underline-offset-4">
                  076024 20029
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3 rounded-xl border border-border bg-background/50 p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center min-h-[260px] text-center gap-3">
                <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg font-semibold text-foreground">Message received.</p>
                <p className="text-sm text-muted">We&apos;ll be in touch shortly.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-xs underline underline-offset-4 text-muted hover:text-foreground transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:border-foreground/40"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@example.com"
                    className="w-full h-10 rounded-md border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:border-foreground/40"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us briefly how we can help..."
                    className="w-full rounded-md border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:border-foreground/40 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-50"
                >
                  {status === "loading" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
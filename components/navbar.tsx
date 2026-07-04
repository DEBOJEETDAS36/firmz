"use client";

import { useState } from "react";
import Image from "next/image"; // Imported for logo optimization
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about-us", label: "About Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact-us", label: "Contact Us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-4">
        {/* --- LOGO WRAPPER --- */}
        <a href="#" className="flex items-center">
          <Image
            src="/dtax_logo.png"          // File path inside your /public directory
            alt="Firm Logo"
            width={80}              // Adjust to match your logo's width
            height={20}              // Adjust to match your logo's height
            priority                 // Prevents layout shifts on page load
            className="object-contain dark:invert-0" // Add dark:invert if your logo needs to turn white in dark mode
          />
        </a>

        {/* --- DESKTOP NAVIGATION & CONTACT --- */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8 text-sm text-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Vertical Divider */}
          <div className="h-4 w-px bg-border" />

          {/* Desktop Contact Info */}
          <div className="flex items-center gap-3 text-xs font-medium">
            {/* Glowing Email */}
            <a 
              href="mailto:dtaxandlaw@gmail.com" 
              className="rounded-full border border-emerald-500/25 bg-emerald-500/5 px-3 py-1 text-emerald-600 dark:text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300"
            >
              dtaxandlaw@gmail.com
            </a>
            
            {/* Glowing Phone Number */}
            <a 
              href="tel:+91 76024 20029" 
              className="relative rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-600 dark:text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
            >
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              +91 76024 20029
            </a>
          </div>
        </div>

        {/* --- RIGHT SIDE ACTIONS & HAMBURGER TOGGLE --- */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          {/* Hamburger Button (Visible on mobile, hidden on desktop) */}
          <button
            onClick={toggleMenu}
            className="block text-muted hover:text-foreground p-1 md:hidden"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              // "X" Close Icon SVG
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Menu Bars SVG
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* --- MOBILE NAVIGATION DROPDOWN --- */}
      {isOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-5 flex flex-col gap-5 md:hidden animate-in fade-in slide-in-from-top-1 duration-200">
          <ul className="flex flex-col gap-4 text-sm text-muted">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} // Closes menu when user clicks a link
                  className="block py-1 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Contact Info Separator & Links */}
          <div className="border-t border-border/60 pt-4 flex flex-col gap-3 text-sm">
            <div className="flex">
              <a 
                href="dtaxandlaw@gmail.com" 
                className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/5 px-4 py-1.5 font-medium text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                onClick={() => setIsOpen(false)}
              >
                dtaxandlaw@gmail.com
              </a>
            </div>
            <div className="flex">
              <a 
                href="tel:+91 76024 20029" 
                className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-medium text-emerald-600 dark:text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                onClick={() => setIsOpen(false)}
              >
                +91 76024 20029
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

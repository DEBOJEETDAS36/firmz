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

        {/* --- DESKTOP NAVIGATION (Hidden on mobile, flex on desktop) --- */}
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

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

      {/* --- MOBILE NAVIGATION DROPDOWN (Visible only on mobile when isOpen is true) --- */}
      {isOpen && (
        <ul className="border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-4 text-sm text-muted md:hidden animate-in fade-in slide-in-from-top-1 duration-200">
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
      )}
    </header>
  );
}

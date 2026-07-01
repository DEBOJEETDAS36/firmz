import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about-us", label: "About Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact-us", label: "Contact Us" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-container items-center justify-between px-6 py-3">
        
        {/* Elegant Brand Identity using logo.png */}
        <a href="#" className="flex items-center transition-opacity hover:opacity-90">
          <img 
            src="/logo.png" 
            alt="D TAX AND LAW" 
            className="h-12 w-auto object-contain" 
          />
        </a>

        {/* Navigation Menu */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-foreground">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Utilities */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import logo from "@/assets/logiflow-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "How it works", href: "#how" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => (
  <header className="sticky top-0 left-0 right-0 z-50 border-b border-border/60 bg-white/85 backdrop-blur-xl">
    <nav className="mx-auto flex container items-center justify-between px-6 py-3 lg:px-12">
      <a href="#home" className="flex items-center gap-2">
        <img src={logo} alt="Logiflow Pvt. Ltd." className="h-16 w-auto" />
      </a>
      <div className="hidden items-center gap-8 lg:flex">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="text-[15px] font-medium text-foreground/75 transition hover:text-navy">
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a href="tel:+916262762626" className="hidden items-center gap-2 text-sm font-semibold text-navy md:inline-flex">
          <Phone className="h-4 w-4 text-teal" /> +91-62627-62626
        </a>
        <Button className="bg-accent-gradient font-semibold text-white shadow-glow hover:opacity-95">
          Request a Call Back
        </Button>
        <button className="text-navy lg:hidden" aria-label="Open menu"><Menu /></button>
      </div>
    </nav>
  </header>
);

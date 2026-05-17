import Link from "next/link";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "journal", href: "/journal" },
  { label: "playground", href: "/playground" },
  { label: "contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-10 md:px-14 lg:px-20 mix-blend-difference">
      <Link 
        href="/" 
        className="font-sans text-xs sm:text-sm font-medium tracking-widest uppercase text-white/90 hover:text-white transition-colors"
      >
        somewhere in progress
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-sans text-xs font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

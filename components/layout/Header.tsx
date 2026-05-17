import Link from "next/link";

const navItems = [
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "journal", href: "/journal" },
  { label: "playground", href: "/playground" },
  { label: "contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-8 sm:px-10 md:px-14 lg:px-20 bg-gradient-to-b from-black/40 to-transparent">
      <Link 
        href="/" 
        className="font-sans text-xs sm:text-[13px] font-medium tracking-[0.2em] uppercase text-white hover:text-white/80 transition-colors drop-shadow-md"
      >
        somewhere in progress
      </Link>

      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors drop-shadow-sm"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

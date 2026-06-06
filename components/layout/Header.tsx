"use client";

import Link from "next/link";
import { MouseEvent } from "react";

const navItems = [
  { label: "about", href: "/#about" },
  { label: "projects", href: "/#projects" },
  { label: "journal", href: "/#journal" },
  { label: "playground", href: "/#playground" },
  { label: "contact", href: "/#contact" },
];

export default function Header() {
  const handleSectionNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const hash = href.split("#")[1];

    if (!hash || window.location.pathname !== "/") return;

    const section = document.getElementById(hash);

    if (!section) return;

    event.preventDefault();

    const top = section.getBoundingClientRect().top + window.scrollY - 16;

    window.history.pushState(null, "", `#${hash}`);
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-8 sm:px-12 md:px-16 lg:px-24 bg-linear-to-b from-black/50 via-black/20 to-transparent">
      <Link 
        href="/" 
        className="flex items-center gap-3 font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-white/90 hover:text-white transition-all duration-500 ease-out"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 opacity-80" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
        </svg>
        somewhere in progress
      </Link>

      <nav className="hidden md:flex items-center gap-12">
        {navItems.map((item, index) => (
          <div key={item.label} className="relative flex flex-col items-center">
            <Link
              href={item.href}
              scroll={false}
              onClick={(event) => handleSectionNavigation(event, item.href)}
              className="font-sans text-[9px] font-medium tracking-[0.2em] uppercase text-white/80 hover:text-white transition-all duration-500 ease-out"
            >
              {item.label}
            </Link>
            {index === 0 && (
              <div className="absolute -bottom-4 w-0.75 h-0.75 rounded-full bg-[#fdfbf7] shadow-[0_0_8px_4px_rgba(196,119,67,0.6)]" />
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

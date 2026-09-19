"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Education", href: "/education" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-2 text-sm font-medium">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`px-4 py-2 rounded-full transition ${
              isActive
                ? "bg-emerald-500/10 text-emerald-400" // Active page green rahega
                : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
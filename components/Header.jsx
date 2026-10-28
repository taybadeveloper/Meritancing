"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/advantages", label: "Advantages" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Pages that carry their own #cta-section anchor scroll to it in place;
  // every other page points to the homepage's closing call-to-action.
  const hasLocalCta =
    pathname === "/" || pathname === "/features" || pathname === "/advantages";
  const ctaHref = hasLocalCta ? "#cta-section" : "/#cta-section";

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="logo">
          <img src="/logo.webp" alt="Meritancing logo" width="688" height="169" />
        </Link>
        <button
          type="button"
          className={`nav-toggle-label${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
        </button>
        <nav className={`site-nav${open ? " open" : ""}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={ctaHref}
          className="btn btn-primary btn-sm nav-cta"
          onClick={() => setOpen(false)}
        >
          Start Analysis
        </Link>
      </div>
    </header>
  );
}

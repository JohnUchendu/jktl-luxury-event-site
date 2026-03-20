"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/services",  label: "Services"  },
  { href: "/work",      label: "Our Work"  },
  { href: "/about",     label: "About"     },
  { href: "/blog",      label: "Journal"   },
  { href: "/locations", label: "Locations" },
];

export default function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link { color: rgba(249,247,240,0.6); font-size: 0.65rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: var(--cream-50); }
        .nav-whatsapp { color: rgba(249,247,240,0.5); font-size: 0.65rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; transition: color 0.2s; }
        .nav-whatsapp:hover { color: var(--gold-400); }
        .mobile-link { color: rgba(249,247,240,0.7); font-size: 0.65rem; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; text-decoration: none; transition: color 0.2s; }
        .mobile-link:hover { color: var(--cream-50); }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ backgroundColor: scrolled ? "var(--navy-900)" : "transparent",
                 borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <Link href="/" className="label-sm" style={{ color: "var(--gold-400)", textDecoration: "none" }}>
            JK TECHNOLOGY LIMITED
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/2347036580994?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20website%20for%20my%20event%20business"
              target="_blank" rel="noopener noreferrer" className="nav-whatsapp">
              WhatsApp
            </a>
            <Link href="/contact" className="btn-outline-cream" style={{ padding: "10px 24px", fontSize: "0.65rem" }}>
              Get a Proposal
            </Link>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}
            style={{ color: "var(--cream-100)", background: "none", border: "none", cursor: "pointer" }}
            aria-label="Toggle menu">
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden px-8 py-6 flex flex-col gap-5 border-t"
            style={{ backgroundColor: "var(--navy-900)", borderColor: "rgba(255,255,255,0.08)" }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="mobile-link" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <Link href="/contact" className="btn-outline-cream text-center"
                style={{ padding: "12px 24px", fontSize: "0.65rem" }}
                onClick={() => setOpen(false)}>
                Get a Proposal
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

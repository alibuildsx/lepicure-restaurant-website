"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks } from "@/data/footer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav" : "bg-transparent"
        }`}
        style={{ height: "var(--nav-height, 80px)" }}
      >
        <div className="container-luxury h-full flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-serif text-[22px] font-semibold tracking-[0.06em] text-[#f5f5dc] hover:text-[#a67c52] transition-colors duration-300"
            aria-label="L'Épicure home"
          >
            L&apos;Épicure
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label-caps text-[#c9c6c5] hover:text-[#a67c52] transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#reservation"
              className="
                px-6 py-2.5 text-[11px] font-semibold tracking-[0.15em] uppercase
                border border-[rgba(166,124,82,0.5)] text-[#a67c52]
                hover:bg-[#a67c52] hover:text-[#0a0a0a] hover:border-[#a67c52]
                transition-all duration-300 rounded-sm
              "
            >
              Reserve
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={menuButtonRef}
            id="mobile-menu-toggle"
            className="md:hidden flex flex-col gap-[5px] p-2"
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`block w-6 h-[1.5px] bg-[#f5f5dc] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#f5f5dc] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#f5f5dc] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              tabIndex={mobileOpen ? undefined : -1}
              className="font-serif text-[28px] text-[#f5f5dc] hover:text-[#a67c52] transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setMobileOpen(false)}
            tabIndex={mobileOpen ? undefined : -1}
            className="mt-4 px-8 py-3 text-[12px] font-semibold tracking-[0.15em] uppercase bg-[#a67c52] text-[#0a0a0a] rounded-sm"
          >
            Reserve a Table
          </a>
        </div>
      </nav>
    </>
  );
}

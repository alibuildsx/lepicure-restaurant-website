"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.png"
          alt="L'Épicure dining room atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-[10s] ease-out"
          style={{ transform: loaded ? "scale(1)" : "scale(1.06)" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.5)] via-[rgba(10,10,10,0.45)] to-[rgba(10,10,10,0.96)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,10,0.4)] via-transparent to-[rgba(10,10,10,0.4)]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container-luxury text-center pt-24 pb-16">
        {/* Label */}
        <div
          className={`label-caps text-[#a67c52] mb-6 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Paris · Est. 1987 · Two Michelin Stars
        </div>

        {/* Main headline */}
        <h1
          className={`font-serif font-bold text-[#f5f5dc] leading-[1.05] tracking-[-0.02em] transition-all duration-900 delay-500 mb-6 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontSize: "clamp(42px, 7vw, 92px)",
            textShadow: "0 2px 40px rgba(0,0,0,0.5)",
          }}
        >
          Where Every Plate
          <br />
          Tells a{" "}
          <em className="not-italic" style={{ color: "#a67c52" }}>
            Story
          </em>
        </h1>

        {/* Tagline */}
        <p
          className={`font-sans text-[#c9c6c5] max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ fontSize: "clamp(16px, 2vw, 19px)" }}
        >
          A seven-course tasting journey through the finest seasonal ingredients,
          curated by Chef Élise Moreau and paired with our Sommelier&apos;s cellar.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            id="hero-reserve-btn"
            onClick={() => handleScroll("#reservation")}
            className="
              px-9 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase
              bg-[#a67c52] text-[#0a0a0a]
              hover:bg-[#c49a6c] transition-all duration-300
              rounded-sm glow-bronze
              min-w-[200px]
            "
          >
            Reserve a Table
          </button>
          <button
            id="hero-menu-btn"
            onClick={() => handleScroll("#tasting")}
            className="
              px-9 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase
              border border-[rgba(245,245,220,0.3)] text-[#f5f5dc]
              hover:border-[rgba(245,245,220,0.6)] hover:bg-[rgba(245,245,220,0.06)]
              transition-all duration-300 rounded-sm
              min-w-[200px]
            "
          >
            Explore Menu
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-10 flex flex-col items-center gap-2 transition-all duration-700 delay-[1200ms] ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <span className="label-caps text-[#8e9192]" style={{ fontSize: "10px" }}>
            Scroll
          </span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#a67c52] to-transparent" />
        </div>
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-24 left-8 w-16 h-16 border-t border-l border-[rgba(166,124,82,0.25)] hidden lg:block" />
      <div className="absolute top-24 right-8 w-16 h-16 border-t border-r border-[rgba(166,124,82,0.25)] hidden lg:block" />
      <div className="absolute bottom-10 left-8 w-16 h-16 border-b border-l border-[rgba(166,124,82,0.25)] hidden lg:block" />
      <div className="absolute bottom-10 right-8 w-16 h-16 border-b border-r border-[rgba(166,124,82,0.25)] hidden lg:block" />
    </section>
  );
}

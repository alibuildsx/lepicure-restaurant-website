"use client";

import { useIntersection } from "@/hooks/useIntersection";
import {
  tastingCourses,
  tastingMenuPrice,
  tastingMenuWinePairingPrice,
} from "@/data/courses";

export default function TastingJourney() {
  const { ref: headRef, isVisible: headVisible } = useIntersection();
  const { ref: listRef, isVisible: listVisible } = useIntersection(0.1);
  const { ref: ctaRef, isVisible: ctaVisible } = useIntersection();

  return (
    <section
      id="tasting"
      className="relative py-[120px] md:py-[160px] bg-[#0a0a0a] overflow-hidden"
      aria-label="Chef's Tasting Journey"
    >
      {/* Subtle background texture gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(166,124,82,0.04)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(166,124,82,0.03)_0%,transparent_70%)]" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <div
          ref={headRef}
          className={`max-w-2xl mb-20 reveal ${headVisible ? "visible" : ""}`}
        >
          <div className="label-caps text-[#a67c52] mb-5">The Experience</div>
          <h2 className="font-serif font-bold text-[#f5f5dc] mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Chef&apos;s Tasting Journey
          </h2>
          <p className="text-[#8e9192] text-[17px] leading-relaxed max-w-xl">
            Seven acts of culinary narrative — each course a considered chapter in a
            story told through the finest seasonal produce, precise technique, and
            Élise&apos;s distinctly personal vision.
          </p>
          <div className="mt-8 flex items-baseline gap-4 flex-wrap">
            <span className="font-serif text-[#f5f5dc] text-[28px] font-semibold">
              {tastingMenuPrice}
            </span>
            <span className="text-[#8e9192] text-sm">per person</span>
            <span className="divider-bronze border-l border pl-4 text-[#8e9192] text-sm">
              Wine pairing{" "}
              <span className="text-[#a67c52]">{tastingMenuWinePairingPrice}</span>
            </span>
          </div>
        </div>

        {/* Course list */}
        <div
          ref={listRef}
          className="border-t border-[rgba(166,124,82,0.15)]"
        >
          {tastingCourses.map((course, idx) => (
            <div
              key={course.number}
              className={`
                group relative grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr_280px] gap-6 md:gap-10
                py-8 border-b border-[rgba(166,124,82,0.1)]
                hover:bg-[rgba(166,124,82,0.025)] transition-all duration-500
                reveal ${listVisible ? "visible" : ""}
              `}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Course number */}
              <div className="flex items-start pt-1">
                <span
                  className="font-serif text-[#444748] group-hover:text-[rgba(166,124,82,0.5)] transition-colors duration-500"
                  style={{ fontSize: "13px", letterSpacing: "0.1em", fontStyle: "italic" }}
                >
                  {course.number}
                </span>
              </div>

              {/* Course info */}
              <div>
                <h3 className="font-serif text-[#f5f5dc] font-semibold mb-2 group-hover:text-[#c49a6c] transition-colors duration-300"
                  style={{ fontSize: "clamp(18px, 2.5vw, 22px)" }}
                >
                  {course.name}
                </h3>
                <p className="text-[#8e9192] text-[15px] leading-relaxed max-w-prose">
                  {course.description}
                </p>
              </div>

              {/* Wine pairing (desktop) */}
              {course.winePairing && (
                <div className="hidden md:flex flex-col justify-start pt-1 text-right">
                  <span className="label-caps" style={{ fontSize: "10px", color: "#a67c52" }}>
                    Wine Pairing
                  </span>
                  <span className="text-[#8e9192] text-[13px] mt-2 leading-snug font-serif italic">
                    {course.winePairing}
                  </span>
                </div>
              )}

              {/* Bronze left border on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#a67c52] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 reveal ${ctaVisible ? "visible" : ""}`}
        >
          <a
            id="tasting-reserve-link"
            href="#reservation"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="
              px-8 py-3.5 text-[11px] font-semibold tracking-[0.15em] uppercase
              bg-[#a67c52] text-[#0a0a0a] hover:bg-[#c49a6c]
              transition-all duration-300 rounded-sm glow-bronze inline-block
            "
          >
            Reserve the Full Journey
          </a>
          <p className="text-[#8e9192] text-sm">
            Dietary requirements accommodated — please advise on booking.
          </p>
        </div>
      </div>
    </section>
  );
}

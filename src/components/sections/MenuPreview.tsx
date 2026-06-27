"use client";

import { useState } from "react";
import { useIntersection } from "@/hooks/useIntersection";
import {
  menuCategories,
  menuItems,
  type MenuCategory,
} from "@/data/menu";

const TAG_STYLES: Record<string, string> = {
  "Chef's Selection": "border-[rgba(166,124,82,0.5)] text-[#a67c52]",
  Vegetarian:         "border-[rgba(100,170,100,0.4)] text-[rgba(100,200,100,0.85)]",
  Vegan:              "border-[rgba(100,170,100,0.4)] text-[rgba(100,200,100,0.85)]",
  Seasonal:           "border-[rgba(200,170,100,0.4)] text-[rgba(200,170,100,0.85)]",
  Recommended:        "border-[rgba(166,124,82,0.5)] text-[#a67c52]",
  Signature:          "border-[rgba(166,124,82,0.5)] text-[#a67c52]",
  "Zero Proof":       "border-[rgba(180,180,180,0.3)] text-[#8e9192]",
};

export default function MenuPreview() {
  const [activeTab, setActiveTab] = useState<MenuCategory>("Starters");
  const { ref: headRef, isVisible: headVisible } = useIntersection();
  const { ref: menuRef, isVisible: menuVisible } = useIntersection(0.1);

  const items = menuItems[activeTab];

  return (
    <section
      id="menu"
      className="py-[120px] md:py-[160px] bg-[#131313] relative overflow-hidden"
      aria-label="Menu preview"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(166,124,82,0.03)_0%,transparent_70%)]" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-16 reveal ${headVisible ? "visible" : ""}`}
        >
          <div className="label-caps text-[#a67c52] mb-4">Culinary Offerings</div>
          <h2
            className="font-serif font-bold text-[#f5f5dc] mb-4"
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            À La Carte Selection
          </h2>
          <p className="text-[#8e9192] text-[16px] max-w-md mx-auto leading-relaxed">
            Seasonal ingredients sourced daily from our network of artisan producers.
            All prices include service.
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className={`flex items-center justify-center flex-wrap gap-0 mb-14 reveal ${headVisible ? "visible" : ""} delay-200`}
        >
          <div
            className="border border-[rgba(166,124,82,0.2)] rounded-sm flex overflow-x-auto max-w-full"
            role="group"
            aria-label="Menu categories"
          >
            {menuCategories.map((cat) => (
              <button
                key={cat}
                id={`menu-tab-${cat.toLowerCase()}`}
                type="button"
                aria-pressed={activeTab === cat}
                onClick={() => setActiveTab(cat)}
                className={`
                  px-6 py-3 text-[11px] font-semibold tracking-[0.14em] uppercase
                  transition-all duration-300 relative
                  ${
                    activeTab === cat
                      ? "bg-[#a67c52] text-[#0a0a0a]"
                      : "text-[#8e9192] hover:text-[#c9c6c5] hover:bg-[rgba(166,124,82,0.08)]"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items grid */}
        <div
          ref={menuRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[rgba(166,124,82,0.12)]"
          key={activeTab}
        >
          {items.map((item, idx) => (
            <div
              key={item.name}
              className={`
                group py-7 px-0 md:px-6 border-b border-[rgba(166,124,82,0.1)]
                ${idx % 2 === 0 ? "md:border-r md:border-r-[rgba(166,124,82,0.1)]" : ""}
                hover:bg-[rgba(166,124,82,0.025)] transition-all duration-400
                reveal ${menuVisible ? "visible" : ""}
              `}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              {/* Item header: name + price */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <h3
                    className="font-serif text-[#f5f5dc] group-hover:text-[#c49a6c] transition-colors duration-300 leading-snug"
                    style={{ fontSize: "clamp(16px, 2vw, 19px)" }}
                  >
                    {item.name}
                  </h3>
                  {/* Tags */}
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        hidden sm:inline-block shrink-0 text-[9px] font-semibold tracking-[0.12em] uppercase
                        px-2 py-0.5 border rounded-full
                        ${TAG_STYLES[tag] ?? "border-[rgba(200,200,200,0.3)] text-[#8e9192]"}
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Dotted leader + price */}
                <div className="flex items-center gap-2 shrink-0 pt-[3px]">
                  <div className="hidden sm:block flex-1 h-[1px] w-12 border-b border-dotted border-[rgba(166,124,82,0.25)]" />
                  <span className="font-serif text-[#a67c52] font-semibold text-[17px]">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#8e9192] text-[14px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className={`mt-10 text-center reveal ${menuVisible ? "visible" : ""} delay-500`}>
          <p className="text-[#8e9192] text-[13px]">
            Menu changes seasonally. Please inform us of any allergies or dietary requirements.
          </p>
        </div>
      </div>
    </section>
  );
}

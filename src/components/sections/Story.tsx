"use client";

import Image from "next/image";
import { useIntersection } from "@/hooks/useIntersection";

export default function Story() {
  const { ref: leftRef, isVisible: leftVisible } = useIntersection(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useIntersection(0.1);

  return (
    <section
      id="story"
      className="py-[120px] md:py-[160px] bg-[#0a0a0a] overflow-hidden"
      aria-label="Our story"
    >
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <div
            ref={leftRef}
            className={`relative reveal-left ${leftVisible ? "visible" : ""}`}
          >
            {/* Main image */}
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/chef_portrait.png"
                alt="Chef Élise Moreau in her kitchen"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.6)] via-transparent to-transparent" />
              {/* Bronze border accent */}
              <div className="absolute inset-0 border border-[rgba(166,124,82,0.15)] rounded-sm pointer-events-none" />
            </div>

            {/* Floating stat card */}
            <div
              className="
                absolute -bottom-6 -right-4 md:-right-8
                card-luxury rounded-sm px-6 py-5
                backdrop-blur-sm
              "
            >
              <div className="label-caps text-[#a67c52] mb-2">Est. 1987</div>
              <div className="font-serif text-[#f5f5dc] text-[22px] font-semibold leading-snug">
                37 Years<br />
                <span className="text-[#8e9192] text-[14px] font-sans font-normal tracking-normal normal-case">
                  of culinary mastery
                </span>
              </div>
            </div>

            {/* Decorative line */}
            <div className="absolute -left-4 top-1/4 w-8 h-[1px] bg-[rgba(166,124,82,0.3)]" />
            <div className="absolute -left-4 top-1/4 mt-2 w-5 h-[1px] bg-[rgba(166,124,82,0.2)]" />
          </div>

          {/* Right: Text */}
          <div
            ref={rightRef}
            className={`reveal-right ${rightVisible ? "visible" : ""}`}
          >
            <div className="label-caps text-[#a67c52] mb-6">Our Philosophy</div>

            {/* Pull quote */}
            <blockquote
              className="font-serif italic text-[#c9c6c5] mb-8 relative pl-6 border-l-2 border-[#a67c52]"
              style={{ fontSize: "clamp(20px, 2.8vw, 28px)", lineHeight: 1.4 }}
            >
              &ldquo;Cooking is not merely chemistry — it is memory, culture, and the
              silent conversation between a chef and a guest who has never yet met.&rdquo;
              <cite className="not-italic block mt-4 label-caps text-[#8e9192] text-[10px]">
                — Chef Élise Moreau, Executive Chef
              </cite>
            </blockquote>

            <div className="space-y-5 text-[#8e9192] text-[16px] leading-relaxed">
              <p>
                L&apos;Épicure was born in a narrow courtyard on the Rue de la Paix in 1987.
                What began as a seventeen-seat bistro has evolved into one of Paris&apos;s
                most celebrated dining destinations — yet the spirit remains unchanged: an
                obsessive devotion to the ingredient above all else.
              </p>
              <p>
                Every dish on our menu begins not in the kitchen, but at the source — with
                our network of trusted artisan farmers, fishermen, and foragers across
                France. Chef Moreau visits each supplier personally, translating these
                relationships into plates of uncommon honesty and beauty.
              </p>
              <p>
                We hold two Michelin stars not as a destination, but as a daily responsibility
                to our guests, our team, and to the farmers who wake before dawn so that we
                may offer something extraordinary each evening.
              </p>
            </div>

            {/* Awards / recognition */}
            <div className="mt-12 pt-8 border-t border-[rgba(166,124,82,0.15)] grid grid-cols-3 gap-6">
              {[
                { value: "★★", label: "Michelin Stars" },
                { value: "#4", label: "France's Best" },
                { value: "37", label: "Years of Service" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-[#a67c52] text-[24px] font-semibold mb-1">
                    {stat.value}
                  </div>
                  <div className="label-caps text-[#8e9192]" style={{ fontSize: "10px" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

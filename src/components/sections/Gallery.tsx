"use client";

import Image from "next/image";
import { useIntersection } from "@/hooks/useIntersection";
import { galleryImages } from "@/data/gallery";

const sizeClasses: Record<string, string> = {
  portrait:  "row-span-2",
  landscape: "col-span-2",
  square:    "",
};

export default function Gallery() {
  const { ref: headRef, isVisible: headVisible } = useIntersection();
  const { ref: gridRef, isVisible: gridVisible } = useIntersection(0.05);

  return (
    <section
      id="gallery"
      className="py-[120px] md:py-[160px] bg-[#131313] overflow-hidden"
      aria-label="Gallery"
    >
      <div className="container-luxury">
        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-16 reveal ${headVisible ? "visible" : ""}`}
        >
          <div className="label-caps text-[#a67c52] mb-4">Moments at L&apos;Épicure</div>
          <h2
            className="font-serif font-bold text-[#f5f5dc]"
            style={{ fontSize: "clamp(30px, 4.5vw, 52px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            A Feast for the Eyes
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
          style={{ gridAutoRows: "200px" }}
        >
          {galleryImages.map((img, idx) => (
            <div
              key={img.src}
              className={`
                group relative overflow-hidden rounded-sm
                ${sizeClasses[img.size]}
                card-luxury
                reveal-scale ${gridVisible ? "visible" : ""}
              `}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={
                  img.size === "landscape"
                    ? "(max-width: 767px) 100vw, (max-width: 1023px) 66vw, 50vw"
                    : "(max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                }
                className="object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
              />
              {/* Hover overlay */}
              <div className="
                absolute inset-0 flex items-end p-4
                bg-gradient-to-t from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.2)] to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              ">
                <div>
                  <p className="label-caps text-[#a67c52] mb-1" style={{ fontSize: "9px" }}>
                    {img.caption}
                  </p>
                  <p className="text-[#f5f5dc] text-[12px] leading-snug font-serif italic hidden sm:block">
                    {img.alt}
                  </p>
                </div>
              </div>

              {/* Bronze corner accent on hover */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[rgba(166,124,82,0)] group-hover:border-[rgba(166,124,82,0.6)] transition-all duration-500" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[rgba(166,124,82,0)] group-hover:border-[rgba(166,124,82,0.6)] transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

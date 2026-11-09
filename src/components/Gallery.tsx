"use client";
import { useEffect, useState } from "react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import SectionHeading from "./SectionHeading";

function Tile({ item, big = false }: { item: GalleryItem; big?: boolean }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`relative flex items-end overflow-hidden bg-gradient-to-br from-[#3a8a3a] to-brand-700 p-3 ${big ? "min-h-[60vh] w-[min(92vw,720px)] rounded-2xl" : "h-52 w-full"}`}>
      {item.image && ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/images/gallery/${item.image}`}
          alt={item.alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <span className="relative rounded-full bg-black/45 px-3 py-1 text-xs text-white">{item.title}</span>
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="gallery" className="bg-brand-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Farm Experience" title="Life on the farm" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((g) => (
            <button
              key={g.title}
              type="button"
              aria-label={`View ${g.title}`}
              onClick={() => setActive(g)}
              className="overflow-hidden rounded-2xl text-left transition hover:scale-[1.02]"
            >
              <Tile item={g} />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[70] grid cursor-zoom-out place-items-center bg-black/85 p-5"
        >
          <Tile item={active} big />
        </div>
      )}
    </section>
  );
}

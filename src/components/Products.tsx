"use client";
import { useState } from "react";
import { categories, products, type ProductCategory } from "@/data/products";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

type Filter = "All" | ProductCategory;
const LIMIT = 8;

export default function Products() {
  const [filter, setFilter] = useState<Filter>("All");
  const [showAll, setShowAll] = useState(false);

  const list = products.filter((p) => filter === "All" || p.category === filter);
  const canExpand = filter === "All" && list.length > LIMIT;
  const visible = filter === "All" && !showAll ? list.slice(0, LIMIT) : list;
  const filters: Filter[] = ["All", ...categories];

  return (
    <section id="products" className="bg-brand-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Our Products"
          title="Our produce catalogue"
          intro="Browse what we grow and plan to supply. Items are catalogue options, so message us on WhatsApp to confirm what is available today and the current price."
        />

        <div role="group" aria-label="Filter products by category" className="my-8 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-[44px] rounded-full border-[1.5px] border-brand-500 px-5 text-sm font-semibold transition ${
                filter === f ? "bg-brand-500 text-white" : "bg-white text-brand-700 hover:bg-brand-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {canExpand && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((s) => !s)}
              className="min-h-[48px] rounded-full bg-brand-700 px-8 font-semibold text-white transition hover:bg-brand-900"
            >
              {showAll ? "Show Fewer" : "View All Products"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

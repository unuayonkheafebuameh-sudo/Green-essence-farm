"use client";
import { useState } from "react";
import type { Product } from "@/data/products";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-700/15">
      <div className="relative flex h-40 items-end overflow-hidden bg-gradient-to-br from-[#3a8a3a] to-brand-700 p-3">
        {product.image && imgOk && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/images/products/${product.image}`}
            alt={product.alt ?? product.name}
            loading="lazy"
            width={400}
            height={300}
            onError={() => setImgOk(false)}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
        <span className="relative rounded-full bg-black/45 px-3 py-1 text-xs text-white">{product.name}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-brand-500">{product.category}</span>
        <h3 className="font-serif text-xl font-bold text-brand-700">{product.name}</h3>
        <p className="text-sm text-[#35503b]">{product.description}</p>
        {product.note && <p className="text-xs text-[#4b6a52]">{product.note}</p>}
        <a
          href={whatsappLink(whatsappMessages.product(product.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-500 px-5 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}

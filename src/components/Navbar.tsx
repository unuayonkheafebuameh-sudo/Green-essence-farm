"use client";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import WhatsAppButton from "./WhatsAppButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        solid || open ? "bg-brand-900/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-5">
        <a href="#home" aria-label="Green Essence Farms home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.logo}
            alt="Green Essence Farms logo"
            width={91}
            height={46}
            className="h-[46px] w-auto rounded-lg bg-black"
          />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-white hover:text-gold-300">
              {l.label}
            </a>
          ))}
          <WhatsAppButton label="WhatsApp Enquiry" className="!min-h-[42px] !px-5 !text-sm" />
        </div>

        <button
          type="button"
          className="min-h-[48px] min-w-[48px] text-3xl text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="flex flex-col gap-1 bg-brand-900 px-5 pb-6 md:hidden">
          {siteConfig.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-lg text-white"
            >
              {l.label}
            </a>
          ))}
          <WhatsAppButton label="WhatsApp Enquiry" className="mt-3" />
        </div>
      )}
    </header>
  );
}

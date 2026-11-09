import { siteConfig } from "@/config/site";
import { categories } from "@/data/products";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-brand-900 pb-8 pt-14 text-[#cfe3d0]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.logo}
              alt="Green Essence Farms logo"
              width={91}
              height={46}
              loading="lazy"
              className="h-[46px] w-auto rounded-lg bg-black"
            />
            <p className="mt-3">
              <strong className="text-white">{siteConfig.name}</strong>
              <br />
              {siteConfig.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">Quick links</h3>
            {siteConfig.nav.map((l) => (
              <a key={l.href} href={l.href} className="block py-1 hover:text-gold-300">
                {l.label}
              </a>
            ))}
          </nav>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">Products</h3>
            {categories.map((c) => (
              <a key={c} href="#products" className="block py-1 hover:text-gold-300">
                {c}
              </a>
            ))}
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
            <a href={`tel:${siteConfig.phone}`} className="block py-1 hover:text-gold-300">
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-1 hover:text-gold-300"
            >
              WhatsApp
            </a>
            <span className="block py-1">{siteConfig.address.line}</span>
            {siteConfig.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-gold-300">
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 border-t border-white/15 pt-5 text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
